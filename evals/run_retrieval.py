#!/usr/bin/env python3
"""
run_retrieval.py — Retrieval eval for the fin-regbase wiki.

For each question in evals/questions.yaml, runs BM25 search (the same code
the MCP server uses) and checks whether every expected_page appears in the
top-3 and top-5 results.

Usage:
    cd /path/to/fin-regbase
    uv run --project mcp-server python evals/run_retrieval.py
    uv run --project mcp-server python evals/run_retrieval.py --difficulty hard
    uv run --project mcp-server python evals/run_retrieval.py --top-k 3

Output:
    Console summary table + evals/results/retrieval_YYYYMMDD_HHMMSS.json

Notes:
    - Imports WikiIndex and WikiSearch directly from mcp-server/ — no server
      process needed. Tests the exact same BM25 logic the MCP exposes.
    - expected_pages in questions.yaml are slugs (e.g. "conc-cpa-rules").
      Retrieved page paths are e.g. "concepts/conc-cpa-rules.md" — the script
      strips the directory prefix and .md extension for comparison.
    - Pass@3 is the primary metric: all expected pages found in the top 3
      results. Pass@5 is a softer fallback.
"""

import argparse
import json
import sys
from datetime import datetime
from pathlib import Path

import yaml

# ---------------------------------------------------------------------------
# Path setup — import MCP server modules directly
# ---------------------------------------------------------------------------

REPO_ROOT = Path(__file__).resolve().parent.parent
MCP_SERVER = REPO_ROOT / "mcp-server"
WIKI_PATH = REPO_ROOT / "wiki"
QUESTIONS_PATH = REPO_ROOT / "evals" / "questions.yaml"
RESULTS_DIR = REPO_ROOT / "evals" / "results"

sys.path.insert(0, str(MCP_SERVER))

from wiki_index import WikiIndex  # noqa: E402
from search import WikiSearch     # noqa: E402

# ---------------------------------------------------------------------------
# Core eval logic
# ---------------------------------------------------------------------------


def slug(path: str) -> str:
    """Extract slug from a page path: 'concepts/conc-cpa-rules.md' → 'conc-cpa-rules'."""
    return Path(path).stem


def run_question(q: dict, search: WikiSearch, top_k: int) -> dict:
    query = " ".join(q["question"].split())  # normalise whitespace
    expected = q.get("expected_pages", [])

    hits = search.search(query, limit=top_k)
    retrieved = [(slug(page.path), page.path, round(score, 4)) for page, score in hits]
    retrieved_slugs = [s for s, _, _ in retrieved]

    found_at: dict[str, int | None] = {}
    for exp in expected:
        try:
            found_at[exp] = retrieved_slugs.index(exp) + 1  # 1-indexed rank
        except ValueError:
            found_at[exp] = None

    found_top3 = [s for s, pos in found_at.items() if pos is not None and pos <= 3]
    found_top5 = [s for s, pos in found_at.items() if pos is not None and pos <= 5]
    missed = [s for s, pos in found_at.items() if pos is None]

    n = len(expected)
    return {
        "id": q["id"],
        "difficulty": q.get("difficulty", "?"),
        "type": q.get("type", "?"),
        "question": query,
        "expected_pages": expected,
        "retrieved": [{"slug": s, "path": p, "score": sc} for s, p, sc in retrieved],
        "found_at_rank": found_at,
        "missed": missed,
        "precision_at_3": round(len(found_top3) / n, 3) if n else 1.0,
        "precision_at_5": round(len(found_top5) / n, 3) if n else 1.0,
        "pass_at_3": len(found_top3) == n,
        "pass_at_5": len(found_top5) == n,
    }


# ---------------------------------------------------------------------------
# Console report
# ---------------------------------------------------------------------------

PASS = "✓"
FAIL = "✗"
WARN = "△"


def print_report(results: list[dict], top_k: int) -> None:
    total = len(results)
    pass3 = sum(1 for r in results if r["pass_at_3"])
    pass5 = sum(1 for r in results if r["pass_at_5"])
    avg_p3 = sum(r["precision_at_3"] for r in results) / total
    avg_p5 = sum(r["precision_at_5"] for r in results) / total

    print(f"\n{'=' * 64}")
    print(f"  FIN-REGBASE RETRIEVAL EVAL  —  {total} questions, top-{top_k}")
    print(f"{'=' * 64}")
    print(f"  Pass@3  (all expected in top 3): {pass3:>2}/{total}  avg precision {avg_p3:.0%}")
    print(f"  Pass@5  (all expected in top 5): {pass5:>2}/{total}  avg precision {avg_p5:.0%}")

    # By difficulty
    print()
    for diff in ("easy", "medium", "hard"):
        sub = [r for r in results if r["difficulty"] == diff]
        if not sub:
            continue
        p3 = sum(1 for r in sub if r["pass_at_3"])
        avg = sum(r["precision_at_3"] for r in sub) / len(sub)
        bar = PASS if p3 == len(sub) else FAIL
        print(f"  {bar} {diff.upper():<8} {p3}/{len(sub)} pass@3  (avg {avg:.0%})")

    # Per-question table
    print(f"\n{'─' * 64}")
    print(f"  {'ID':<6}  {'D':<6}  {'@3':>4}  {'@5':>4}  Question")
    print(f"{'─' * 64}")
    for r in results:
        icon = PASS if r["pass_at_3"] else (WARN if r["pass_at_5"] else FAIL)
        snippet = r["question"][:52].replace("\n", " ")
        if len(r["question"]) > 52:
            snippet += "…"
        p3 = f"{r['precision_at_3']:.0%}"
        p5 = f"{r['precision_at_5']:.0%}"
        print(f"  {icon} {r['id']:<6}  {r['difficulty']:<6}  {p3:>4}  {p5:>4}  {snippet}")

    # Failure detail
    failures = [r for r in results if not r["pass_at_3"]]
    if failures:
        print(f"\n{'─' * 64}")
        print(f"  MISSES — pages not found in top 3 ({len(failures)} question(s))\n")
        for r in failures:
            print(f"  [{r['id']}] {r['question'][:70]}…")
            for slug_name, pos in r["found_at_rank"].items():
                if pos is None:
                    print(f"      {FAIL} MISSED:  {slug_name}")
                elif pos > 3:
                    print(f"      {WARN} rank {pos}:  {slug_name}")
                else:
                    print(f"      {PASS} rank {pos}:  {slug_name}")
            if r["retrieved"]:
                print(f"      Top result was: {r['retrieved'][0]['slug']} (score {r['retrieved'][0]['score']})")
            print()
    else:
        print(f"\n  {PASS} All questions: every expected page found in top 3.")

    print(f"{'=' * 64}\n")


# ---------------------------------------------------------------------------
# Entry point
# ---------------------------------------------------------------------------


def main() -> None:
    parser = argparse.ArgumentParser(description="Run retrieval eval against the fin-regbase wiki.")
    parser.add_argument(
        "--difficulty", choices=["easy", "medium", "hard"],
        help="Run only questions of this difficulty level.",
    )
    parser.add_argument(
        "--id", dest="question_id",
        help="Run a single question by ID, e.g. --id H002.",
    )
    parser.add_argument(
        "--top-k", type=int, default=5,
        help="Number of search results to retrieve per query (default 5).",
    )
    args = parser.parse_args()

    with open(QUESTIONS_PATH) as f:
        questions: list[dict] = yaml.safe_load(f)

    if args.difficulty:
        questions = [q for q in questions if q["difficulty"] == args.difficulty]
    if args.question_id:
        questions = [q for q in questions if q["id"] == args.question_id]

    if not questions:
        print("No questions matched the filters.")
        sys.exit(1)

    print(f"Loading wiki from {WIKI_PATH} …")
    index = WikiIndex(WIKI_PATH)
    search = WikiSearch(index)
    print(f"  {index.page_count()} pages indexed.")
    print(f"Running {len(questions)} question(s) …")

    results = [run_question(q, search, args.top_k) for q in questions]

    print_report(results, args.top_k)

    RESULTS_DIR.mkdir(exist_ok=True)
    ts = datetime.now().strftime("%Y%m%d_%H%M%S")
    out_path = RESULTS_DIR / f"retrieval_{ts}.json"
    with open(out_path, "w") as f:
        json.dump(
            {"run_at": ts, "top_k": args.top_k, "total": len(results), "results": results},
            f, indent=2,
        )
    print(f"Full results → {out_path.relative_to(REPO_ROOT)}\n")


if __name__ == "__main__":
    main()
