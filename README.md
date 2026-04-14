# fin-regbase

**A persistent, agent-readable knowledge base for financial regulations.**

Fintech AI agents that touch compliance — Consumer Duty outcome testing, AML/KYC, credit decisioning — have to reason over regulations they don't reliably know. The default is RAG: retrieve chunks at query time, re-derive the same synthesis on every call.

In `fin-regbase` regulations are compiled **once** into structured, citation-backed, interlinked Markdown articles and kept current (using obsidian). Agents read from the wiki at runtime. The LLM maintains it. The human curator quality-gates it.

Inspired by [Andrej Karpathy's LLM Wiki pattern](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f).

---

## How It Works

| Role | Responsibility |
|------|----------------|
| **Curator** | Drops source documents into `raw/`, reviews outputs, quality-gates accuracy |
| **LLM** | Compiles, cross-references, and maintains the wiki via `CLAUDE.md` schema |
| **Downstream agents** | Query at runtime via `wiki/index.md` (v1) or MCP server (v2) |
| **The wiki** | The persistent Markdown artifact — not a RAG index |

Three operations defined in `CLAUDE.md`:

- **Ingest** — drop a source into `raw/`, discuss key takeaways, produce summary + concept pages
- **Query** — ask a compliance question, get a cited answer, file it to `wiki/derived/`
- **Lint** — scan for contradictions, stale claims, orphan pages, missing cross-references

---

## What's in the Wiki

**47 pages** across five regulatory domains. Current as of April 2026.

### Summaries
Source-level overviews with full citation trails.

| Page | What it covers |
|------|----------------|
| `summaries/ps22-9-policy-statement.md` | PS22/9 policy statement — rules, scope, implementation timeline, governance |
| `summaries/fg22-5-guidance.md` | FG22/5 operational guidance — good/poor practice examples, sludge, supervisory questions, sector scope |
| `summaries/fg21-1-guidance.md` | FG21/1 vulnerability guidance — four-driver model, firm obligations, product design lens |
| `summaries/fcg3-money-laundering-terrorist-financing.md` | FCG Chapter 3 — FCA's AML/CTF expectations, risk assessment, CDD, transaction monitoring |
| `summaries/fcg7-sanctions-asset-freezes-proliferation-financing.md` | FCG Chapter 7 — sanctions screening, asset freezes, proliferation financing |
| `summaries/fctr8-sanctions-systems-controls-russia.md` | FCA thematic review: sanctions systems and controls post-Russia invasion |
| `summaries/jmlsg-part-i-guidance.md` | JMLSG Part I (June 2023, updated Aug 2025) — risk-based approach, CDD, EDD, SDD, PEPs, SARs |
| `summaries/fca-cdd-findings-multi-firm-2026.md` | FCA multi-firm CDD review 2026 — good/poor practice across onboarding, monitoring, and exit |
| `summaries/mifid-ii-product-governance-review-2021.md` | FCA PROD review 2021 — target market failures, distributor chain weaknesses |
| `summaries/fca-costs-charges-disclosure-review-2019.md` | FCA asset manager costs/charges disclosure review — PRIIPs, MiFID II, RTS 28 |
| `summaries/fca-pfof-supervisory-report-2019.md` | FCA PFOF supervisory report — conflicts of interest, best execution |
| `summaries/fca-assessing-suitability-review-2017.md` | FCA suitability review — risk profiling, know your client, adviser process |
| `summaries/dear-ceo-letter-wealth-stockbroking-2023.md` | Dear CEO — FCA expectations for wealth management and stockbroking firms |
| `summaries/dear-ceo-letter-payments-portfolio-2023.md` | Dear CEO — FCA priorities for payments portfolio firms (safeguarding, wind-down, Consumer Duty) |
| `summaries/ico-guide-lawful-basis-2026.md` | ICO Guide to Lawful Basis — all six Article 6 bases, legitimate interests, special category data |

### Concepts
One page per regulatory concept, built from primary sources.

**Consumer Duty**

| Page | What it covers |
|------|----------------|
| `concepts/consumer-duty-overview.md` | Three-layer structure, scope, sector-specific retail customer definitions, evidence requirement |
| `concepts/consumer-principle.md` | Principle 12 — "good outcomes" standard, disapplication of Principles 6 & 7, SM&CR Conduct Rule 6 |
| `concepts/consumer-duty-cross-cutting-rules.md` | Three cross-cutting rules; bad-faith pattern catalogue; foreseeable harm examples |
| `concepts/consumer-duty-products-services.md` | Target market, lifecycle obligations, manufacturer/distributor split, distribution chain information flow |
| `concepts/consumer-duty-price-value.md` | Fair value assessment; distribution chain fee stacking; charging for undelivered services |
| `concepts/consumer-duty-consumer-understanding.md` | Communications standard; testing obligation; gamification risk; execution-only carve-out |
| `concepts/consumer-duty-consumer-support.md` | Unreasonable barriers; sludge/positive friction; "at least as easy to exit as enter" rule |
| `concepts/vulnerable-customers.md` | Vulnerability as a cross-cutting lens; four-driver culture model; supervisory red lines |
| `concepts/vulnerability-drivers-and-taxonomy.md` | FEAT taxonomy, intersectionality, product/service design obligations |
| `concepts/sludge-and-friction.md` | Sludge vs. positive friction — definitions, named examples, the exit/entry rule |

**Financial Crime — AML/CTF/Sanctions**

| Page | What it covers |
|------|----------------|
| `concepts/aml-ctf-framework.md` | UK AML/CTF legal architecture — POCA, TA, MLRs 2017, risk-based approach |
| `concepts/customer-due-diligence.md` | Standard CDD triggers, components, beneficial ownership, reliance on third parties |
| `concepts/simplified-due-diligence.md` | SDD eligibility, low-risk factors, JMLSG and MLR 2017 conditions |
| `concepts/sar-consent-tipping-off.md` | SAR regime, authorised/prohibited disclosures, consent, tipping-off offences |
| `concepts/uk-financial-sanctions-framework.md` | OFSI, consolidated list, UK autonomous vs. UN/EU-derived regimes |
| `concepts/sanctions-screening.md` | Name-matching logic, fuzzy matching thresholds, false positive management |
| `concepts/asset-freezes-and-ofsi-licences.md` | Asset freeze obligations, OFSI licence categories, reporting obligations |
| `concepts/proliferation-financing.md` | PF risk assessment requirements, FATF R.1 and R.15, UK MLRs 2017 reg. 33A |

**MiFID II / Investment Services**

| Page | What it covers |
|------|----------------|
| `concepts/prod-product-governance.md` | PROD rules — target market, product testing, distribution strategy, annual review |
| `concepts/agent-distributor-oversight.md` | Manufacturer obligations over distributor chains; information flow requirements |
| `concepts/costs-charges-disclosure.md` | Ex-ante and ex-post disclosure; aggregated vs. itemised; PRIIPs overlap |
| `concepts/payment-for-order-flow.md` | PFOF prohibition (UK post-Brexit), conflicts of interest, best execution |
| `concepts/advice-suitability-cobs9.md` | Suitability assessment, risk profiling, KYC, ongoing suitability |

**Payment Services / E-Money**

| Page | What it covers |
|------|----------------|
| `concepts/safeguarding-pis-emis.md` | Safeguarding obligation, segregation methods, reconciliation, insolvency waterfall |
| `concepts/psr-emi-prudential.md` | Own funds requirements, initial capital, stress-testing, wind-down buffers |
| `concepts/wind-down-planning.md` | Wind-down plan obligations, trigger events, run-off costs, FCA expectations |
| `concepts/operational-resilience.md` | Important business services, impact tolerances, self-assessment, Annex A |

**UK GDPR**

| Page | What it covers |
|------|----------------|
| `concepts/uk-gdpr-lawful-basis.md` | Six lawful bases, legitimate interests assessment, special category data |

### Derived
Synthesised answers, assessments, and reference tables filed from query sessions.

| Page | What it covers |
|------|----------------|
| `derived/fca-supervisory-questions-consumer-duty.md` | All FCA supervisory questions per outcome, verbatim from FG22/5 |
| `derived/fca-consumer-duty-implementation-review-2024.md` | FCA's February 2024 post-go-live findings — good and poor practice across all five areas |
| `derived/consumer-understanding-digital-notifications.md` | Compliance assessment: digital investment platform in-app notifications vs. Consumer Understanding outcome |
| `derived/pi-emi-consumer-duty-and-sanctions-obligations.md` | Synthesised obligations for payment institutions — Consumer Duty + sanctions overlap |

---

## Repo Structure

```
fin-regbase/
├── CLAUDE.md               # Schema + workflow for the AI curator (the critical file)
├── raw/                    # Immutable source documents — never edit manually
│   ├── fca-consumer-duty/  # PS22/9, FG22/5, FG21/1, Dear CEO letter
│   ├── fca-financial-crime/ # FCG 3, FCG 7, JMLSG Part I, thematic reviews
│   ├── mifid/              # PROD review, costs/charges review, PFOF, suitability review
│   ├── psr-payment-services/ # PSR approach document, payments portfolio Dear CEO
│   └── uk-gdpr/            # ICO lawful basis guide, data protection principles
├── wiki/
│   ├── index.md            # Master index — start here for any query
│   ├── log.md              # Append-only record of ingests, queries, lint passes
│   ├── concepts/           # Core regulatory concepts (28 pages)
│   ├── summaries/          # Per-document summaries (15 pages)
│   └── derived/            # Synthesised answers, checklists, assessments (4 pages)
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
| **v1 — done** | UK FCA Consumer Duty — fully linted, citation-accurate |
| **v2 — done** | FCA Financial Crime (FCG, JMLSG, sanctions), MiFID II, PSR/E-Money, UK GDPR |
| **v3 — current** | MCP server for native agent tool calls; FCA Handbook SYSC; FATF 40 Recommendations |
| **v4** | SEC Reg BI, FINRA rules, FinCEN AML programme requirements |

---

## Citation Standard

Every factual claim in the wiki carries an inline citation to the specific document, section, and paragraph — e.g. **(PS22/9 §7.4)**. Quality standard: CISI-level accuracy, FCA-grade citation discipline. Vague citations like "(FCA Consumer Duty)" are not permitted.
