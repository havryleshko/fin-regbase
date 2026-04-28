#!/usr/bin/env python3
"""
run_content.py — Content quality eval for the fin-regbase wiki.

Tests whether, given the correct pages, Claude can produce an answer that
satisfies all required_facts and required_citations for each eval question.

This is the complement to run_retrieval.py:
  run_retrieval.py  → tests BM25 search (does the right page surface?)
  run_content.py    → tests wiki quality (does the page contain what's needed?)

Usage:
    export ANTHROPIC_API_KEY=sk-ant-...
    cd /path/to/fin-regbase
    python evals/run_content.py
    python evals/run_content.py --difficulty easy
    python evals/run_content.py --id E001 M003 H002
    python evals/run_content.py --difficulty easy --no-save

Output:
    Console summary table + evals/results/content_YYYYMMDD_HHMMSS.json

Scoring:
    fact_score       = fraction of required_facts present in answer (0–1)
    citation_score   = fraction of required_citations present in answer (0–1)
    overall_score    = fact_score × 0.7 + citation_score × 0.3
    PASS             = overall_score ≥ 0.80
"""

import argparse
import json
import os
import sys
import time
from datetime import datetime
from pathlib import Path

import yaml

# ---------------------------------------------------------------------------
# Paths
# ---------------------------------------------------------------------------

REPO_ROOT = Path(__file__).resolve().parent.parent
WIKI_DIR = REPO_ROOT / "wiki"
QUESTIONS_PATH = REPO_ROOT / "evals" / "questions.yaml"
RESULTS_DIR = REPO_ROOT / "evals" / "results"

# ---------------------------------------------------------------------------
# Models
# ---------------------------------------------------------------------------

ANSWER_MODEL = "claude-haiku-4-5-20251001"   # fast + cheap for generation
JUDGE_MODEL  = "claude-sonnet-4-6"            # careful reasoning for scoring

# ---------------------------------------------------------------------------
# Wiki helpers
# ---------------------------------------------------------------------------

def find_page(slug: str) -> Path | None:
    for subdir in ("summaries", "concepts", "derived"):
        p = WIKI_DIR / subdir / f"{slug}.md"
        if p.exists():
            return p
    return None


def load_pages(slugs: list[str]) -> tuple[str, list[str], list[str]]:
    """
    Load wiki pages by slug.
    Returns (context_text, loaded_slugs, missing_slugs).
    """
    sections, loaded, missing = [], [], []
    for slug in slugs:
        path = find_page(slug)
        if path:
            sections.append(f"=== {slug} ===\n{path.read_text()}")
            loaded.append(slug)
        else:
            missing.append(slug)
    return "\n\n".join(sections), loaded, missing

# ---------------------------------------------------------------------------
# LLM calls
# ---------------------------------------------------------------------------

def generate_answer(client, question: str, context: str) -> str:
    resp = client.messages.create(
        model=ANSWER_MODEL,
        max_tokens=1200,
        messages=[{
            "role": "user",
            "content": (
                "You are a UK financial regulation expert. Answer the question below "
                "using ONLY the provided knowledge base content. Be precise and include "
                "specific rule citations (e.g. CONC 7.3.4R, PS22/9 §4.2) in your answer.\n\n"
                f"Question:\n{question}\n\n"
                f"Knowledge base:\n{context}"
            ),
        }],
    )
    return resp.content[0].text


JUDGE_PROMPT = """\
You are evaluating whether an answer to a UK financial regulation question is \
correct and complete.

Question:
{question}

Answer to evaluate:
{answer}

Required facts — each must be substantively present for a correct answer:
{facts_list}

Required citations — regulatory references that must appear:
{citations_list}

Instructions:
- For each required fact: decide if the substance is present in the answer. \
Be reasonable — exact wording is not required, but the core claim must be there.
- For each required citation: decide if that rule/section is referenced.
- Compute scores as fractions (0.0–1.0).
- overall_score = fact_score × 0.7 + citation_score × 0.3

Return ONLY valid JSON — no markdown, no preamble:
{{
  "facts": [{{"fact": "...", "present": true, "note": "..."}}],
  "citations": [{{"citation": "...", "present": true}}],
  "fact_score": 0.0,
  "citation_score": 0.0,
  "overall_score": 0.0,
  "summary": "one sentence: main strength or gap"
}}"""


def judge_answer(
    client,
    question: str,
    answer: str,
    required_facts: list[str],
    required_citations: list[str],
) -> dict:
    facts_list     = "\n".join(f"{i+1}. {f}" for i, f in enumerate(required_facts))
    citations_list = "\n".join(f"{i+1}. {c}" for i, c in enumerate(required_citations))

    resp = client.messages.create(
        model=JUDGE_MODEL,
        max_tokens=2000,
        messages=[{
            "role": "user",
            "content": JUDGE_PROMPT.format(
                question=question,
                answer=answer,
                facts_list=facts_list or "(none)",
                citations_list=citations_list or "(none)",
            ),
        }],
    )

    text = resp.content[0].text.strip()
    # Strip accidental markdown code fences
    if text.startswith("```"):
        text = text.split("```")[1]
        if text.startswith("json"):
            text = text[4:]
        text = text.strip()

    return json.loads(text)

# ---------------------------------------------------------------------------
# Per-question runner
# ---------------------------------------------------------------------------

def run_question(client, q: dict) -> dict:
    question   = " ".join(q["question"].split())
    exp_pages  = q.get("expected_pages", [])
    req_facts  = q.get("required_facts", [])
    req_cites  = q.get("required_citations", [])

    context, loaded, missing = load_pages(exp_pages)

    if not context:
        return {
            "id": q["id"], "question": question,
            "difficulty": q["difficulty"], "type": q["type"],
            "tags": q.get("tags", []),
            "pages_loaded": [], "pages_missing": missing,
            "answer": None,
            "fact_score": 0.0, "citation_score": 0.0, "overall_score": 0.0,
            "facts_detail": [], "citations_detail": [],
            "summary": "No pages could be loaded — check expected_pages slugs.",
            "error": "no_pages",
        }

    answer   = generate_answer(client, question, context)
    judgment = judge_answer(client, question, answer, req_facts, req_cites)

    return {
        "id": q["id"], "question": question,
        "difficulty": q["difficulty"], "type": q["type"],
        "tags": q.get("tags", []),
        "pages_loaded": loaded, "pages_missing": missing,
        "answer": answer,
        "fact_score":     judgment["fact_score"],
        "citation_score": judgment["citation_score"],
        "overall_score":  judgment["overall_score"],
        "facts_detail":   judgment["facts"],
        "citations_detail": judgment["citations"],
        "summary": judgment["summary"],
        "error": None,
    }

# ---------------------------------------------------------------------------
# Reporting
# ---------------------------------------------------------------------------

PASS_THRESHOLD = 0.80

def status_icon(score: float | None, error: str | None) -> str:
    if error:       return "ERR"
    if score is None: return "???"
    if score >= PASS_THRESHOLD: return "PASS"
    if score >= 0.50:           return "PART"
    return "FAIL"


def print_report(results: list[dict]) -> None:
    completed = [r for r in results if not r["error"]]
    n = len(completed)
    if n == 0:
        print("No questions completed successfully.")
        return

    def avg(lst): return sum(lst) / len(lst) if lst else 0.0

    mean_fact  = avg([r["fact_score"]     for r in completed])
    mean_cite  = avg([r["citation_score"] for r in completed])
    mean_ovr   = avg([r["overall_score"]  for r in completed])
    pass_count = sum(1 for r in completed if r["overall_score"] >= PASS_THRESHOLD)

    print(f"\n{'=' * 72}")
    print(f"  FIN-REGBASE CONTENT EVAL  —  {n}/{len(results)} questions completed")
    print(f"{'=' * 72}")
    print(f"  Fact score:         {mean_fact:.3f}")
    print(f"  Citation score:     {mean_cite:.3f}")
    print(f"  Overall score:      {mean_ovr:.3f}")
    print(f"  Pass rate (≥{PASS_THRESHOLD:.0%}):  {pass_count}/{n}  ({pass_count/n:.0%})")

    print("\n  By difficulty:")
    for diff in ("easy", "medium", "hard"):
        sub = [r for r in completed if r["difficulty"] == diff]
        if not sub:
            continue
        sc = avg([r["overall_score"] for r in sub])
        pc = sum(1 for r in sub if r["overall_score"] >= PASS_THRESHOLD)
        bar = "█" * int(sc * 20)
        print(f"    {diff:<8} {pc:>2}/{len(sub)}  {sc:.3f}  {bar}")

    print("\n  By type:")
    for t in ("factual", "synthesis", "edge-case", "boundary"):
        sub = [r for r in completed if r["type"] == t]
        if not sub:
            continue
        sc = avg([r["overall_score"] for r in sub])
        pc = sum(1 for r in sub if r["overall_score"] >= PASS_THRESHOLD)
        bar = "█" * int(sc * 20)
        print(f"    {t:<14} {pc:>2}/{len(sub)}  {sc:.3f}  {bar}")

    print(f"\n{'─' * 72}")
    print(f"  {'ID':<6}  {'Diff':<8}  {'Type':<12}  {'Fact':>5}  {'Cite':>5}  {'Score':>5}  Status")
    print(f"{'─' * 72}")
    for r in results:
        icon = status_icon(r["overall_score"], r["error"])
        if r["error"]:
            print(f"  {r['id']:<6}  {r['difficulty']:<8}  {r['type']:<12}  {'—':>5}  {'—':>5}  {'—':>5}  {icon}")
        else:
            print(
                f"  {r['id']:<6}  {r['difficulty']:<8}  {r['type']:<12}  "
                f"{r['fact_score']:>5.2f}  {r['citation_score']:>5.2f}  "
                f"{r['overall_score']:>5.2f}  {icon}"
            )

    # Lowest performers
    worst = sorted(completed, key=lambda r: r["overall_score"])[:5]
    if worst and worst[0]["overall_score"] < PASS_THRESHOLD:
        print(f"\n  Lowest scoring (top 5 to fix):")
        for r in worst:
            if r["overall_score"] < PASS_THRESHOLD:
                print(f"    [{r['id']}] {r['overall_score']:.2f} — {r['summary']}")

    print(f"{'=' * 72}\n")

# ---------------------------------------------------------------------------
# Entry point
# ---------------------------------------------------------------------------

def main() -> None:
    parser = argparse.ArgumentParser(description="Run content quality eval for fin-regbase.")
    parser.add_argument("--id", dest="ids", nargs="+", metavar="ID",
                        help="Run specific question IDs, e.g. --id E001 H003")
    parser.add_argument("--difficulty", choices=["easy", "medium", "hard"],
                        help="Run only questions of this difficulty.")
    parser.add_argument("--no-save", action="store_true",
                        help="Don't write a results JSON file.")
    args = parser.parse_args()

    # Check API key
    if not os.environ.get("ANTHROPIC_API_KEY"):
        print("Error: ANTHROPIC_API_KEY is not set.")
        print("  export ANTHROPIC_API_KEY=sk-ant-...")
        sys.exit(1)

    # Late import so missing key error surfaces cleanly
    import anthropic
    client = anthropic.Anthropic()

    # Load and filter questions
    questions: list[dict] = yaml.safe_load(QUESTIONS_PATH.read_text())
    if args.ids:
        questions = [q for q in questions if q["id"] in args.ids]
    elif args.difficulty:
        questions = [q for q in questions if q["difficulty"] == args.difficulty]

    if not questions:
        print("No questions matched the filters.")
        sys.exit(1)

    total = len(questions)
    print(f"\nContent eval — {total} question(s)")
    print(f"Answer model : {ANSWER_MODEL}")
    print(f"Judge model  : {JUDGE_MODEL}")
    print(f"{'─' * 72}")

    results = []
    for i, q in enumerate(questions, 1):
        label = f"[{i:02d}/{total}] {q['id']} ({q['difficulty']})  {q['question'][:55].strip()}"
        if len(q['question'].strip()) > 55:
            label += "…"
        print(label, end=" ", flush=True)

        try:
            result = run_question(client, q)
            score  = result["overall_score"]
            icon   = "✓" if score >= PASS_THRESHOLD else ("~" if score >= 0.5 else "✗")
            print(f"{icon} {score:.2f}")
        except Exception as exc:
            print(f"ERROR: {exc}")
            result = {
                "id": q["id"], "question": " ".join(q["question"].split()),
                "difficulty": q["difficulty"], "type": q["type"],
                "tags": q.get("tags", []),
                "pages_loaded": [], "pages_missing": [],
                "answer": None,
                "fact_score": 0.0, "citation_score": 0.0, "overall_score": 0.0,
                "facts_detail": [], "citations_detail": [],
                "summary": f"Runner error: {exc}",
                "error": str(exc),
            }

        results.append(result)
        # Small pause to avoid rate-limit bursts on large runs
        if i < total:
            time.sleep(0.5)

    # Summary stats
    completed = [r for r in results if not r["error"]]
    def avg(lst): return sum(lst) / len(lst) if lst else 0.0

    by_difficulty, by_type = {}, {}
    for diff in ("easy", "medium", "hard"):
        sub = [r for r in completed if r["difficulty"] == diff]
        by_difficulty[diff] = {"count": len(sub), "mean_score": avg([r["overall_score"] for r in sub])}
    for t in ("factual", "synthesis", "edge-case", "boundary"):
        sub = [r for r in completed if r["type"] == t]
        by_type[t] = {"count": len(sub), "mean_score": avg([r["overall_score"] for r in sub])}

    output = {
        "run_at":            datetime.now().isoformat(),
        "answer_model":      ANSWER_MODEL,
        "judge_model":       JUDGE_MODEL,
        "total_questions":   total,
        "completed":         len(completed),
        "errors":            len(results) - len(completed),
        "mean_fact_score":   avg([r["fact_score"]     for r in completed]),
        "mean_citation_score": avg([r["citation_score"] for r in completed]),
        "mean_overall_score":  avg([r["overall_score"]  for r in completed]),
        "pass_rate":         sum(1 for r in completed if r["overall_score"] >= PASS_THRESHOLD) / len(completed) if completed else 0.0,
        "by_difficulty":     by_difficulty,
        "by_type":           by_type,
        "questions":         results,
    }

    if not args.no_save:
        RESULTS_DIR.mkdir(exist_ok=True)
        ts       = datetime.now().strftime("%Y%m%d_%H%M%S")
        out_path = RESULTS_DIR / f"content_{ts}.json"
        out_path.write_text(json.dumps(output, indent=2))
        print(f"\nResults saved → evals/results/content_{ts}.json")

    print_report(results)

    sys.exit(0 if output["pass_rate"] >= 0.70 else 1)


if __name__ == "__main__":
    main()
