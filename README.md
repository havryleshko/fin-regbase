# fin-regbase

**A persistent, agent-readable knowledge base for financial regulations.**

Fintech AI agents that touch compliance — Consumer Duty outcome testing, AML screening, KYC onboarding, credit decisioning — have to reason over regulations they don't reliably know. The default is RAG: retrieve chunks at query time, re-derive the same synthesis on every call.

`fin-regbase` takes a different approach. Regulations are compiled **once** into structured, citation-backed, interlinked Markdown articles and kept current. Agents read from the wiki at runtime. The LLM maintains it. The human curator quality-gates it.

Inspired by [Andrej Karpathy's LLM Wiki pattern](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f).

---

## How It Works

| Role | Responsibility |
|------|----------------|
| **Curator** | Drops source documents into `raw/`, reviews outputs, quality-gates accuracy |
| **Claude Code** | Compiles, cross-references, and maintains the wiki via `CLAUDE.md` schema |
| **Downstream agents** | Query at runtime via `wiki/index.md` (v1) or MCP server (v2) |
| **The wiki** | The persistent Markdown artifact — not a RAG index |

Three operations defined in `CLAUDE.md`:

- **Ingest** — drop a source into `raw/`, discuss key takeaways, produce summary + concept pages
- **Query** — ask a compliance question, get a cited answer, file it to `wiki/derived/`
- **Lint** — scan for contradictions, stale claims, orphan pages, missing cross-references

---

## What's in the Wiki

**14 pages** across the UK FCA Consumer Duty framework. Current as of April 2026.

### Summaries
Source-level overviews with full citation trails.

| Page | What it covers |
|------|----------------|
| `summaries/ps22-9-policy-statement.md` | PS22/9 policy statement — rules, scope, implementation timeline, governance |
| `summaries/fg22-5-guidance.md` | FG22/5 operational guidance — good/poor practice examples, sludge, supervisory questions, sector scope |

### Concepts
One page per regulatory concept, built from primary sources.

| Page | What it covers |
|------|----------------|
| `concepts/consumer-duty-overview.md` | Three-layer structure, scope, sector-specific retail customer definitions, evidence requirement |
| `concepts/consumer-principle.md` | Principle 12 — "good outcomes" standard, disapplication of Principles 6 & 7, SM&CR Conduct Rule 6 |
| `concepts/consumer-duty-cross-cutting-rules.md` | Three cross-cutting rules; bad-faith pattern catalogue; foreseeable harm examples; "wait and see" supervisory finding |
| `concepts/consumer-duty-products-services.md` | Target market, lifecycle obligations, manufacturer/distributor split, distribution chain information flow |
| `concepts/consumer-duty-price-value.md` | Fair value assessment; distribution chain fee stacking; charging for undelivered services |
| `concepts/consumer-duty-consumer-understanding.md` | Communications standard; testing obligation; gamification risk; execution-only carve-out |
| `concepts/consumer-duty-consumer-support.md` | Unreasonable barriers; sludge/positive friction; "at least as easy to exit as enter" rule; fraud victim support |
| `concepts/vulnerable-customers.md` | Vulnerability as a cross-cutting lens; four-driver culture model; supervisory red lines; GDPR special category basis |
| `concepts/sludge-and-friction.md` | Sludge vs. positive friction — definitions, named examples, the exit/entry rule |

### Derived
Synthesised answers, assessments, and reference tables filed from query sessions.

| Page | What it covers |
|------|----------------|
| `derived/fca-supervisory-questions-consumer-duty.md` | All FCA supervisory questions per outcome, verbatim from FG22/5 |
| `derived/fca-consumer-duty-implementation-review-2024.md` | FCA's February 2024 post-go-live findings — good and poor practice across all five areas |
| `derived/consumer-understanding-digital-notifications.md` | Compliance assessment: digital investment platform in-app notifications vs. Consumer Understanding outcome |

---

## Repo Structure

```
fin-regbase/
├── CLAUDE.md               # Schema + workflow for Claude Code (the critical file)
├── raw/                    # Immutable source documents — never edit manually
│   └── fca-consumer-duty/  # PS22/9, FG22/5, thematic reviews, Dear CEO letters
├── wiki/
│   ├── index.md            # Master index — start here for any query
│   ├── log.md              # Append-only record of ingests, queries, lint passes
│   ├── concepts/           # Core regulatory concepts
│   ├── summaries/          # Per-document summaries
│   └── derived/            # Synthesised answers, checklists, assessments
├── agents/                 # Runtime query wrappers (v1: index.md reader)
├── design.md               # Architecture, philosophy, rollout plan
└── README.md
```

**Rule:** `raw/` is immutable. Claude Code reads from it; nothing writes to it. Errors in source documents are noted in `wiki/log.md` and corrected in derived articles.

---

## Using the Wiki

**For agents:** Read `wiki/index.md` to identify relevant pages, then fetch and synthesise. Every article ends with a `## Key Points for Agents` section — unambiguous statements optimised for agent consumption.

**For humans:** Open `wiki/` in Obsidian. Install the Dataview plugin to run live queries over the YAML frontmatter (jurisdiction, status, tags, effective_date). Use Graph view to inspect cross-reference health after each lint pass.

**Adding a source:** Drop a document into `raw/fca-consumer-duty/` and tell Claude Code to ingest it. Discuss key takeaways before any pages are written. One source at a time.

---

## Roadmap

| Phase | Scope |
|-------|-------|
| **v1 — current** | UK FCA Consumer Duty — fully linted, citation-accurate |
| **v2** | FCA Handbook SYSC, JMLSG AML/KYC Guidance, MCP server for native agent tool calls |
| **v3** | MiFID II, ESMA guidelines, FATF 40 Recommendations |
| **v4** | SEC Reg BI, FINRA rules, FinCEN AML programme requirements |

---

## Citation Standard

Every factual claim in the wiki carries an inline citation to the specific document, section, and paragraph — e.g. **(PS22/9 §7.4)**. Quality standard: CISI-level accuracy, FCA-grade citation discipline. Vague citations like "(FCA Consumer Duty)" are not permitted.
