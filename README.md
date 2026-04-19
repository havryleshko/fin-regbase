# Agentic knowledge base for financial regulations

**A persistent, agent-readable knowledge base for financial regulations.**

Fintech AI agents that touch compliance — Consumer Duty outcome testing, AML/KYC, credit decisioning — have to reason over regulations they don't reliably know. The default is RAG: retrieve chunks at query time, re-derive the same synthesis on every call.

In `fin-regbase` regulations are compiled **once** into structured, citation-backed, interlinked Markdown articles and kept current in Obsidian. Agents read from the wiki at runtime. The LLM maintains it; the human curator reviews and quality-gates accuracy.

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
- **Query** — ask a compliance question, get a cited answer (prefer MCP `search_regulations` / `get_page` per `CLAUDE.md`), optionally file it to `wiki/derived/`
- **Lint** — scan for contradictions, stale claims, orphan pages, missing cross-references

---

## What's in the Wiki

**88 articles** (56 concepts, 28 summaries, 4 derived) across seven regulatory domains, plus `wiki/index.md` and `wiki/log.md`. Current as of April 2026.

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
| `summaries/fca-guide-solo-regulated-firms.md` | FCA SM&CR guide (Part One) — Core/Limited/Enhanced tiers, SMFs, prescribed responsibilities, PI/EMI scope exclusion |
| `summaries/mifid-ii-product-governance-review-2021.md` | FCA PROD review 2021 — target market failures, distributor chain weaknesses |
| `summaries/fca-costs-charges-disclosure-review-2019.md` | FCA asset manager costs/charges disclosure review — PRIIPs, MiFID II, RTS 28 |
| `summaries/fca-pfof-supervisory-report-2019.md` | FCA PFOF supervisory report — conflicts of interest, best execution |
| `summaries/fca-assessing-suitability-review-2017.md` | FCA suitability review — risk profiling, know your client, adviser process |
| `summaries/dear-ceo-letter-wealth-stockbroking-2023.md` | Dear CEO — FCA expectations for wealth management and stockbroking firms |
| `summaries/dear-ceo-letter-payments-portfolio-2023.md` | Dear CEO — FCA priorities for payments portfolio firms (safeguarding, wind-down, Consumer Duty) |
| `summaries/fca-approach-payment-services-electronic-money.md` | FCA Approach Document for payment services/e-money — safeguarding, SCA, reporting, open banking and liability framework |
| `summaries/ico-guide-lawful-basis-2026.md` | ICO Guide to Lawful Basis — seven Article 6 bases post-DUA Act 2026, recognised legitimate interest |
| `summaries/ico-guide-data-protection-principles.md` | ICO Guide to Data Protection Principles — all seven Art. 5 principles, DUA Act purpose limitation update |
| `summaries/ico-guide-individual-rights.md` | ICO Guide to Individual Rights — all eight rights, Art. 12 request framework, Art. 22 automated decisions |
| `summaries/ico-guide-subject-access.md` | ICO Guide to Subject Access — Art. 15 SAR; exemptions; excessive/manifestly unfounded requests; mixed data |
| `summaries/ico-guide-data-security.md` | ICO Guide to Data Security — integrity/confidentiality controls, governance, technical and organisational measures |
| `summaries/ico-guide-personal-data-breaches.md` | ICO Guide to Personal Data Breaches — breach definition, risk test, 72-hour reporting, affected individual notification |
| `summaries/ico-guide-accountability-governance.md` | ICO Guide to Accountability and Governance — Art. 5(2) accountability, governance controls, DPIAs, DPOs, records |
| `summaries/conc1-application-purpose.md` | CONC 1 — scope (10 credit activity types), habitual residence / extraterritorial reach, MCOB boundary, AR liability, Consumer Duty confirmation, seven financial difficulty indicators |
| `summaries/conc4-pre-contractual-requirements.md` | CONC 4 — adequate explanation (CONC 4.2.5R), broker payment-detail gate, DCA prohibition, pre-contract CPA-style disclosure, unfair pressure |
| `summaries/conc5-responsible-lending.md` | CONC 5 — creditworthiness assessment (lenders and P2P), triggers, affordability vs credit risk, broker suitability |
| `summaries/conc6-post-contractual-requirements.md` | CONC 6 — pre-arrears monitoring, minimum repayment rules, limit/rate freezes when at risk, BNPL promotional reminders, HCSTC refinancing cap |
| `summaries/conc7-arrears-default-recovery.md` | CONC 7 — arrears/default policies, forbearance, interest freeze on arrangements, CPA rules, mental capacity and disputed-debt suspensions, statute-barred debt, P2P notices |

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

**SM&CR (FCA solo-regulated firms)**

| Page | What it covers |
|------|----------------|
| `concepts/smcr-senior-managers-regime.md` | SMFs, Statement of Responsibilities, duty of responsibility, Core/Limited/Enhanced prescribed responsibilities |
| `concepts/smcr-certification-regime.md` | Certification functions, annual FIT assessments, regulatory references, material risk-takers |
| `concepts/smcr-conduct-rules.md` | COCON Individual and Senior Manager Conduct Rules, scope (incl. ancillary staff), breach reporting |

**MiFID II / Investment Services**

| Page | What it covers |
|------|----------------|
| `concepts/prod-product-governance.md` | PROD rules — target market, product testing, distribution strategy, annual review |
| `concepts/costs-charges-disclosure.md` | Ex-ante and ex-post disclosure; aggregated vs. itemised; PRIIPs overlap |
| `concepts/payment-for-order-flow.md` | PFOF prohibition (UK post-Brexit), conflicts of interest, best execution |
| `concepts/advice-suitability-cobs9.md` | Suitability assessment, risk profiling, KYC, ongoing suitability |

**Payment Services / E-Money**

| Page | What it covers |
|------|----------------|
| `concepts/safeguarding-pis-emis.md` | Safeguarding obligation, segregation methods, reconciliation, insolvency waterfall |
| `concepts/psr-emi-prudential.md` | Own funds requirements, initial capital, stress-testing, wind-down buffers |
| `concepts/wind-down-planning.md` | Wind-down plan obligations, trigger events, run-off costs, FCA expectations |
| `concepts/agent-distributor-oversight.md` | Agent FCA registration obligations; distributor oversight; ongoing monitoring |
| `concepts/operational-resilience.md` | Important business services, impact tolerances, self-assessment, Annex A |
| `concepts/psr-capital-requirements.md` | PSR/EMR capital framework — initial and ongoing own funds methods, monitoring and governance |
| `concepts/psr-sca-authentication.md` | Strong customer authentication — exemptions, dynamic linking, liability implications |
| `concepts/psr-open-banking-pisp-aisp.md` | Open banking roles and obligations for ASPSPs, PISPs and AISPs |
| `concepts/psr-unauthorised-transaction-liability.md` | Liability allocation and refund timelines for unauthorised or incorrectly executed transactions |
| `concepts/psr-regulatory-reporting.md` | PSR/EMR reporting and notifications — periodic returns, incident and prudential reporting |

**UK GDPR / Data Protection**

| Page | What it covers |
|------|----------------|
| `concepts/uk-gdpr-lawful-basis.md` | Seven Article 6 bases post-DUA Act; recognised legitimate interest; rights matrix; consent trap |
| `concepts/uk-gdpr-data-protection-principles.md` | All seven Art. 5 principles; purpose limitation Annex 2 compatible purposes; storage limitation |
| `concepts/uk-gdpr-individual-rights-overview.md` | All eight rights; Art. 12 request framework; restriction; portability |
| `concepts/uk-gdpr-automated-decision-making.md` | Art. 22 — solely automated decisions; three permitted grounds; DPIA; human review obligation |
| `concepts/uk-gdpr-right-to-object.md` | Art. 21 — absolute direct marketing right; compelling legitimate grounds test |
| `concepts/uk-gdpr-right-to-erasure.md` | Art. 17 — six triggers; five exemptions; legal obligation protects CDD/AML records |
| `concepts/uk-gdpr-right-to-be-informed.md` | Art. 13/14 — mandatory privacy notice content; timing rules; automated decision-making disclosure |
| `concepts/uk-gdpr-subject-access.md` | Art. 15 SAR — scope; exemptions; mixed data; disproportionate effort; interaction with AML record retention |
| `concepts/uk-gdpr-security.md` | Art. 5(1)(f) and Art. 32 — security controls, appropriate technical/organisational measures, accountability |
| `concepts/uk-gdpr-personal-data-breaches.md` | Arts. 33/34 — personal data breach lifecycle, ICO notification threshold, data subject communication duties |
| `concepts/uk-gdpr-records-of-processing.md` | Art. 30 records of processing (ROPA) — minimum content, controller vs processor, group records |
| `concepts/uk-gdpr-processor-contracts.md` | Art. 28 processor terms — mandatory clauses, sub-processors, audit rights, international transfers |
| `concepts/uk-gdpr-data-protection-by-design.md` | Art. 25 data protection by design/default — minimisation defaults, access controls, lifecycle design |
| `concepts/uk-gdpr-dpia.md` | Art. 35 DPIA — triggers, required content, risk mitigation, consultation where residual high risk |
| `concepts/uk-gdpr-dpo.md` | Arts. 37–39 DPO — appointment triggers, independence, tasks, conflicts of interest |

**FCA Consumer Credit (CONC)**

| Page | What it covers |
|------|----------------|
| `concepts/conc-scope-and-application.md` | CONC scope and application — activity types, habitual residence, MCOB boundary, AR treatment, Consumer Duty via CONC 1.1.4G |
| `concepts/conc-financial-difficulty-indicators.md` | CONC 1.3.1G seven indicators, constructive knowledge, link to CONC 6/7 and vulnerability guidance |
| `concepts/conc-creditworthiness-assessment.md` | CONC 5.2A / 5.5A / 5.4 — triggers, two-track credit and affordability risk, policies, P2P and broker angles |
| `concepts/conc-discretionary-commission-arrangements.md` | CONC 4.5.6R DCA prohibition, disclosure of commission and cost impact |
| `concepts/conc-cpa-rules.md` | CONC 7.6 continuous payment authority — pre-conditions, two-strike rules, HCSTC restrictions, cancellation |
| `concepts/conc-debt-recovery-treatment.md` | CONC 7 — forbearance, charges, vulnerable customers, assignment, disputes, statute-barred debt, data accuracy |

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
├── .mcp.json               # Local MCP server config (Cursor)
├── raw/                    # Immutable source documents — never edit manually
│   ├── fca-consumer-duty/  # PS22/9, FG22/5, FG21/1, Dear CEO letter
│   ├── fca-conc/           # FCA Handbook CONC (consumer credit) source PDFs
│   ├── fca-financial-crime/ # FCG 3, FCG 7, JMLSG Part I, thematic reviews
│   ├── mifid/              # PROD review, costs/charges review, PFOF, suitability review
│   ├── psr-payment-services/ # PSR approach document, payments portfolio Dear CEO
│   ├── smcr/               # FCA SM&CR guide for solo-regulated firms
│   └── uk-gdpr/            # ICO guides, data protection principles, security, breaches
├── wiki/
│   ├── index.md            # Master index — start here for any query
│   ├── log.md              # Append-only record of ingests, queries, lint passes
│   ├── concepts/           # Core regulatory concepts (56 pages)
│   ├── summaries/          # Per-document summaries (28 pages)
│   └── derived/            # Synthesised answers, checklists, assessments (4 pages)
├── agents/                 # Runtime query wrappers/clients
├── mcp-server/             # MCP server implementation (tooling for wiki access)
├── design.md               # Architecture, philosophy, rollout plan
├── mcp-design.md           # MCP architecture and rollout notes
└── README.md
```

**Rule:** `raw/` is immutable. The LLM reads from it; nothing writes to it. Errors in source documents are noted in `wiki/log.md` and corrected in derived articles.

---

## Using the Wiki

**For agents:** Read `wiki/index.md` to identify relevant pages, then fetch and synthesise. Every article ends with a `## Key Points for Agents` section — unambiguous statements optimised for agent consumption.

**For humans:** Open `wiki/` in Obsidian. Install the Dataview plugin to run live queries over the YAML frontmatter (jurisdiction, status, tags, effective_date). Use Graph view to inspect cross-reference health after each lint pass.

**Adding a source:** Drop a document into the appropriate `raw/` subdirectory and say "ingest [filename]". Discuss key takeaways before any pages are written. One source at a time.

---

## Roadmap

| Phase | Scope |
|-------|-------|
| **v1 — done** | UK FCA Consumer Duty — fully linted, citation-accurate |
| **v2 — done** | FCA Financial Crime (FCG, JMLSG, sanctions), MiFID II, PSR/E-Money, UK GDPR, SM&CR (solo-regulated guide) |
| **v3 — current** | MCP server for native agent tool calls (`mcp-server/`); CONC consumer-credit layer ingested; deeper FCA Handbook (e.g. full SYSC); FATF 40 Recommendations |
| **v4** | SEC Reg BI, FINRA rules, FinCEN AML programme requirements |

---

## Citation Standard

Every factual claim in the wiki carries an inline citation to the specific document, section, and paragraph — e.g. **(PS22/9 section 7.4)**. Quality standard: CISI-level accuracy, FCA-grade citation discipline. Vague citations like "(FCA Consumer Duty)" are not permitted.
