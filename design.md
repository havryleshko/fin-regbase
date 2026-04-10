# fin-regbase — Design Document

**Financial Regulations Knowledge Base for AI Agents**  
*A living, agent-readable Markdown wiki for financial regulations, built on Karpathy's LLM Wiki pattern.*

---

## Vision

Every fintech AI agent that touches compliance — AML screening, KYC onboarding, Consumer Duty outcome testing, credit decisioning — has to reason over regulations it doesn't reliably know. The current default is RAG: retrieve chunks at query time, hope the context window is enough, rediscover the same synthesis on every call.

`fin-regbase` is a different bet. It's a **persistent, compounding knowledge base** where regulations are compiled once into structured, interlinked Markdown articles — and kept current. Agents read from it at runtime. You curate it. The LLM maintains it.

The end state is infrastructure: a regulation KB that fintech agents can query with confidence, the same way they'd query an internal API. Every ingest session makes it richer. Every lint pass makes it more trustworthy.

Inspired by [Andrej Karpathy's LLM Wiki pattern](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f) (April 2026).

---

## Core Philosophy

| Role | Responsibility |
|------|----------------|
| **You** | Curator — source documents, review outputs, quality gate |
| **Claude Code** | Programmer — compiles, cross-references, maintains the wiki |
| **Downstream agents** | Consumers — query at runtime via `index.md` (v1), MCP server (v2) |
| **The wiki** | The codebase — persistent Markdown artifact, not a RAG index |

Three principles that govern every decision:

**1. Trust over breadth.** One deep, linted, citation-accurate jurisdiction is worth ten shallow ones. An agent that queries a hallucinated regulatory claim and acts on it is worse than an agent that says "I don't know." The human quality gate — your CISI knowledge and regulatory judgment — is the primary defence against this.

**2. Compile once, query many.** The key insight from Karpathy: the LLM should do the synthesis work once at ingest time, not re-derive it on every agent query. Cross-references, contradictions, and article-level summaries are already there when the agent arrives.

**3. Plain files + Git.** No database, no vector store, no proprietary index. The wiki is a directory of `.md` files. Version history is Git. Obsidian is the IDE for browsing. This stays true in v1 and v2.

---

## Folder Structure

```
fin-regbase/
├── CLAUDE.md               # Schema + instructions for Claude Code (the critical file)
├── raw/                    # Immutable source documents — never edit manually
│   ├── fca-consumer-duty/  # PS22/9, final rules, Dear CEO letters, thematic reviews
│   ├── fca-handbook/       # SYSC, COBS, etc. — added in later ingests
│   ├── pra-rulebook/
│   ├── aml-kyc/            # JMLSG Guidance, FATF recommendations
│   ├── eu/                 # MiFID II, ESMA, DORA — v2
│   └── us/                 # SEC, FINRA, FinCEN — v2
├── wiki/                   # The living knowledge base — Claude Code owns this folder
│   ├── index.md            # Master index: every page, one-line summary, source count
│   ├── log.md              # Append-only record: ingests, queries, lint passes
│   ├── concepts/           # Core regulatory concepts (e.g. consumer-duty.md, kyc.md)
│   ├── summaries/          # Per-document summaries with full citations
│   ├── derived/            # Tables, comparisons, checklists, change logs
│   └── backlinks/          # Optional (v2) — auto-generated cross-reference pages
├── agents/
│   └── compiler.py         # CLI wrapper for agent queries at runtime (v1: reads index.md)
├── notebooks/              # Future: synthetic compliance Q&A, fine-tuning data
├── README.md
├── design.md               # This file
└── LICENSE                 # MIT
```

**Key constraint:** `raw/` is immutable. Claude Code reads from it, never writes to it. If you find an error in a source document, note it in `wiki/log.md` and correct it in the derived article — never patch the raw file.

---

## CLAUDE.md — The Schema

This is the most important file in the repo. It tells Claude Code how the wiki is structured, what conventions to follow, and what workflow to execute for each operation. Claude Code reads it automatically at the start of every session.

Below is the starter schema. Evolve it as you develop the workflow.

```markdown
# fin-regbase Schema

## What this wiki is
A knowledge base for financial regulations, structured for consumption by AI agents
operating in fintech. Every article must be accurate, citation-backed, and structured
for machine readability. Human curator: Alex Havryleshko. Quality standard: CISI-level
accuracy, FCA-grade citation discipline.

## Article format

Every wiki article must include YAML frontmatter:

---
title: "FCA Consumer Duty — Products and Services Outcome"
jurisdiction: UK
regulator: FCA
regulation: Consumer Duty (PS22/9)
status: current         # current | superseded | pending
effective_date: 2023-07-31
last_updated: YYYY-MM-DD
sources:
  - "FCA PS22/9 §4.1–4.3"
  - "FCA FG22/5 p.18"
tags: [consumer-duty, products-services, outcomes, UK, FCA]
related: [consumer-duty-overview.md, consumer-understanding-outcome.md]
---

## Body conventions

- Write in plain English. Avoid jargon unless the jargon IS the regulation.
- Every factual claim must cite its source inline: **(PS22/9 §4.2)**
- Use H2 for major sections, H3 for subsections.
- End every article with a `## Key Points for Agents` section:
  a bulleted list of the 3–5 most important facts an agent needs to know,
  written as unambiguous statements.
- End every article with a `## Related Articles` section with [[wikilinks]].

## Operations

### Ingest
When I drop a source into raw/ and say "ingest [filename]":
1. Read the source document fully.
2. Discuss key takeaways with me before writing anything.
3. Write a summary page in wiki/summaries/
4. Create or update concept pages in wiki/concepts/
5. Update wiki/index.md
6. Append an entry to wiki/log.md: `## [YYYY-MM-DD] ingest | [Document Title]`
7. Note any contradictions with existing wiki pages explicitly.
A single source may touch 5–15 wiki pages. That is expected and correct.

### Query
When I ask a compliance question:
1. Read wiki/index.md to find relevant pages.
2. Read those pages in full.
3. Synthesise an answer with inline citations.
4. Ask me: "Should I file this answer as a wiki page in wiki/derived/?"
Good answers about complex questions should almost always be filed.

### Lint
When I say "run lint":
1. Scan all wiki pages for: contradictions, stale claims, orphan pages,
   missing cross-references, concepts mentioned but lacking their own page.
2. Report findings as a structured list.
3. Propose fixes. Wait for my approval before making changes.
4. Append a lint entry to wiki/log.md.

## Citation format
Always cite the specific document, section, and paragraph.
Good: (FCA PS22/9 §7.4, para 3)
Bad: (FCA Consumer Duty)
```

---

## Operations in Detail

### Ingest
The core workflow. You drop a PDF or URL into `raw/`, tell Claude Code to ingest it, and stay involved: read the summaries, check the cross-references, correct any regulatory misreadings before they compound. One source at a time. Never batch-ingest without review.

**A single Consumer Duty ingest session might produce:**
- `wiki/summaries/ps22-9-policy-statement.md`
- `wiki/concepts/consumer-duty-overview.md`
- `wiki/concepts/consumer-duty-cross-cutting-rules.md`
- `wiki/concepts/consumer-duty-products-services.md` (1 of 4 outcomes)
- `wiki/concepts/consumer-duty-price-value.md` (1 of 4 outcomes)
- Updated `wiki/index.md`
- New entry in `wiki/log.md`

### Query
Agents (and you) ask questions. Claude Code reads `index.md` first, drills into relevant pages, synthesises an answer with citations. **Good answers get filed back into `wiki/derived/`** — this is how the wiki compounds beyond just ingested sources.

Example derived pages worth filing:
- `wiki/derived/consumer-duty-agent-checklist.md` — what an agent must verify before product approval
- `wiki/derived/fca-vs-esma-disclosure-comparison.md` — cross-jurisdictional table (v2)
- `wiki/derived/aml-kyc-decision-tree.md` — structured logic for onboarding agents

### Lint
Run periodically (after every 5–10 ingests, or monthly). Claude Code scans for: contradictions between pages, stale claims superseded by newer sources, orphan pages, missing cross-references, regulatory concepts mentioned without their own article. The lint pass is also when you add "Dear CEO letters" and FCA thematic reviews — the FCA publishes these frequently and they often update or clarify existing Consumer Duty obligations.

---

## Rollout Plan

### v1 — UK Foundation (Now)
**Goal:** Prove the pattern. Build a trustworthy, fully-linted Consumer Duty wiki.

**Seed regulation:** FCA Consumer Duty (PS22/9)  
**Sources to ingest in order:**
1. FCA PS22/9 — Policy Statement (the core document)
2. FCA FG22/5 — Final non-Handbook Guidance
3. FCA Consumer Duty implementation review (2024 thematic review)
4. Relevant Dear CEO letters
5. FCA Handbook COBS cross-references (as they appear in Consumer Duty articles)

**Done when:** An agent can answer "Does this product feature comply with the Consumer Duty products and services outcome?" with a specific citation from the wiki.

### v2 — UK Expansion
Add: FCA Handbook SYSC, JMLSG AML/KYC Guidance, PRA Rulebook capital basics.  
Add: MCP server so LangGraph agents query the wiki as a native tool.

### v3 — EU + Global
Add: MiFID II suitability and appropriateness, ESMA guidelines, FATF 40 Recommendations, Basel III capital framework.

### v4 — US
Add: SEC Regulation Best Interest, FINRA rules, FinCEN AML programme requirements.

---

## Retrieval Architecture

### v1 — index.md
`wiki/index.md` is a catalogue of every page: title, one-line summary, jurisdiction, tags, source count. Claude Code reads it first on every query to identify relevant pages. This works well up to ~100 sources / hundreds of pages — more than enough for v1 and v2.

```markdown
# wiki/index.md (example entry)

## UK — FCA Consumer Duty

| Page | Summary | Sources |
|------|---------|---------|
| [concepts/consumer-duty-overview.md](concepts/consumer-duty-overview.md) | Overview of PS22/9: 3 cross-cutting rules, 4 consumer outcomes, scope | 2 |
| [concepts/consumer-duty-products-services.md](concepts/consumer-duty-products-services.md) | Products & Services outcome: design, target market, distribution | 3 |
```

### v2 — MCP Server
Expose the wiki as an MCP tool: `query_regulations(question, jurisdiction, tags)`. LangGraph agents call it natively. The MCP server reads `index.md`, fetches relevant pages, returns structured JSON with citations. Built using `qmd` or a lightweight FastAPI wrapper.

---

## Getting Started with Claude Code

Since this is your first Claude Code project, here's the minimal setup:

### Step 0 — Sourcing setup (do this first)

Install the **Obsidian Web Clipper** browser extension. It converts any web page to Markdown in one click, dropping it directly into your vault. This matters because a significant portion of FCA material — Dear CEO letters, thematic reviews, speech transcripts — lives on fca.org.uk as HTML, not PDF. Without the clipper, you're manually copying text. With it, you clip, save to `raw/fca-consumer-duty/`, and ingest.

In Obsidian Settings → Files and links, set the attachment folder path to `raw/assets/` so any images in clipped articles are saved locally rather than referencing live URLs that may break.

### Step 1 — Install and initialise

```bash
# Install
npm install -g @anthropic-ai/claude-code

# Initialise in your repo
cd fin-regbase
claude

# First session prompt (paste this)
"Read CLAUDE.md. This is a financial regulations knowledge base. 
The raw/ folder contains source documents. The wiki/ folder is yours to maintain.
Start by creating the wiki/index.md and wiki/log.md stubs, 
then wait for me to drop the first source."
```

Claude Code will read `CLAUDE.md` automatically. Keep Obsidian open on the `wiki/` folder in the other window. You'll see pages appear in real time.

### Step 2 — First ingest

```
"I've added FCA PS22/9 to raw/fca-consumer-duty/ps22-9.pdf. 
Before you write anything, tell me the 5 most important things 
an AI agent needs to know about Consumer Duty."
```

Stay in the conversation during ingest. Correct misreadings before they land in the wiki.

---

## Obsidian Tooling

Three Obsidian plugins worth installing alongside the wiki:

**Dataview** — runs live queries over YAML frontmatter. Because every wiki article carries structured frontmatter (`jurisdiction`, `status`, `tags`, `effective_date`), Dataview gives you dynamic tables for free. Useful queries:

```
TABLE title, effective_date, sources FROM "wiki/concepts"
WHERE jurisdiction = "UK" AND status = "current"
SORT effective_date DESC
```

This gives you a live dashboard of all current UK articles without touching the wiki itself. Also useful for spotting which pages are missing frontmatter fields.

**Graph view** — Karpathy's recommended way to see the shape of the wiki: what's connected, which pages are hubs, which are orphans. Run this after every lint pass to visually confirm cross-references are healthy.

**Marp** — renders Markdown as slide decks. Useful for generating compliance briefings directly from wiki content — e.g. a Consumer Duty outcomes summary deck from `wiki/derived/`. Add `---marp: true---` to any derived page frontmatter to activate it.

---

## Content & Distribution Strategy

This project has a natural posting arc that maps to each build milestone:

| Milestone | Post angle |
|-----------|-----------|
| Repo scaffolded, CLAUDE.md written | "I'm building a regulation KB for fintech agents — here's the architecture" |
| First Consumer Duty ingest complete | "I compiled FCA Consumer Duty into 12 structured Markdown articles. Here's what I learned about building agent-readable regulation wikis." |
| First agent query with citation | Demo: agent answers a Consumer Duty compliance question with PS22/9 citations |
| Lint pass finds a contradiction | "The FCA updated Consumer Duty expectations in 2024. Here's how a wiki-based approach caught it." |
| MCP server live (v2) | "I turned a Markdown regulation wiki into a native tool for LangGraph agents" |

Post format: two-column SVG (before/after) for architecture decisions, Excalidraw for system diagrams. These are your highest-performing content formats.

---

## Key Design Decisions Log

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Primary consumer | Agents read, human curates | Karpathy's pattern; regulatory accuracy requires human quality gate |
| v1 jurisdiction | UK only | Depth over breadth; FCA Handbook is well-structured; CISI gives you the domain edge |
| Seed regulation | FCA Consumer Duty (PS22/9) | Bounded, structured, high demand, good test of lint workflow |
| Compiler agent | Claude Code | Native multi-file agentic editing; CLAUDE.md is a first-class primitive |
| v1 retrieval | index.md | Sufficient to ~100 sources; no infrastructure needed; Karpathy's default |
| v2 retrieval | MCP server | Native tool calling for LangGraph agents; qmd or FastAPI wrapper |
| Storage | Plain Markdown + Git | No vendor lock-in; Obsidian as IDE; version history for free |