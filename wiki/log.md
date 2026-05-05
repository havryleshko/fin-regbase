# Wiki Log

Append-only record of all ingest sessions, query filings, and lint passes.
Never edit or delete existing entries — only append.

Format:
- Ingest: `## [YYYY-MM-DD] ingest | [Document Title]`
- Lint: `## [YYYY-MM-DD] lint`
- Query filed: `## [YYYY-MM-DD] query filed | [Page Title]`

---

## 2026-04-10 init

Repo scaffolded. CLAUDE.md written. Folder structure created. Awaiting first source document.

## 2026-04-10 ingest | FCA PS22/9 — A New Consumer Duty: Feedback to CP21/36 and Final Rules

Source: `raw/fca-consumer-duty/ps22-9.pdf` (FCA Policy Statement, July 2022, 83pp + annexes)

Pages created (9):
- `wiki/summaries/ps22-9-policy-statement.md`
- `wiki/concepts/consumer-duty-overview.md`
- `wiki/concepts/consumer-principle.md`
- `wiki/concepts/consumer-duty-cross-cutting-rules.md`
- `wiki/concepts/consumer-duty-products-services.md`
- `wiki/concepts/consumer-duty-price-value.md`
- `wiki/concepts/consumer-duty-consumer-understanding.md`
- `wiki/concepts/consumer-duty-consumer-support.md`
- `wiki/concepts/vulnerable-customers.md`

Notes:
- No contradictions with existing wiki pages (first ingest).
- PS22/9 is the policy statement; the accompanying non-Handbook guidance is FG22/5 (not yet ingested — referenced in pages but not sourced).
- The made rules text (Appendix 1 of PS22/9) was not separately ingested; rule citations in wiki pages reference the PS22/9 policy chapters, not the PRIN 2A rule numbers directly. A future ingest of FG22/5 should add rule-level citations.

## 2026-04-10 ingest | FCA FG22/5 — Final Non-Handbook Guidance for Firms on the Consumer Duty

Source: `raw/fca-consumer-duty/fg22-5.pdf` (FCA Finalised Guidance, July 2022, 120pp)

Pages created (2):
- `wiki/summaries/fg22-5-guidance.md`
- `wiki/concepts/sludge-and-friction.md`
- `wiki/derived/fca-supervisory-questions-consumer-duty.md`

Pages updated (4):
- `wiki/concepts/consumer-duty-overview.md` — added sector-specific retail customer scope table (FG22/5 §2.3); professional client opt-up breach point (FG22/5 §2.10)
- `wiki/concepts/consumer-duty-cross-cutting-rules.md` — added bad-faith pattern catalogue (FG22/5 §5.12–§5.13); foreseeable harm examples list (FG22/5 §5.23); signposting for declined customers (FG22/5 §5.40–§5.41)
- `wiki/concepts/consumer-duty-consumer-support.md` — added sludge/positive friction section and at-least-as-easy-to-exit rule (FG22/5 §9.20–§9.28); FCA supervisory questions for this outcome
- `wiki/concepts/vulnerable-customers.md` — added four-driver culture model (FG22/5 §10.6); enhanced monitoring approaches incl. proxy data, focus groups, staff networks (FG22/5 §11.42); GDPR special category data basis (FG22/5 §11.40)

Notes:
- No contradictions with existing PS22/9 pages. FG22/5 adds operational detail that was absent from PS22/9 rather than conflicting with it.
- Sludge and positive friction are FG22/5-only concepts — neither term appears in PS22/9 or the PRIN 2A rules.
- The four-driver culture model (Purpose, Leadership, People, Governance) is FG22/5-only guidance, not a made rule.
- Supervisory questions in `derived/fca-supervisory-questions-consumer-duty.md` are drawn verbatim from FG22/5 Ch.6–10 "Key questions for firms" sections.

## 2026-04-10 ingest | FCA Consumer Duty implementation: good practice and areas for improvement (February 2024)

Source: `raw/fca-consumer-duty/Consumer Duty implementation good practice and areas for improvement.md` (FCA publication, February 2024)

Pages created (1):
- `wiki/derived/fca-consumer-duty-implementation-review-2024.md`

Pages updated (4):
- `wiki/concepts/vulnerable-customers.md` — added four named vulnerability supervisory red lines (blanket age classification, demanding evidence, warning about service impact, repeated re-disclosure); wealth management data point (49%/69% firms identifying zero vulnerable customers)
- `wiki/concepts/consumer-duty-consumer-support.md` — added gamification as named poor practice; fraud/cyber as consumer support obligation (prevention + victim support); insufficient staff training for complex conversations
- `wiki/concepts/consumer-duty-price-value.md` — added five named poor practices: benchmarking-only assessments, unjustifiable remuneration, distribution chain fee stacking, charging for undelivered services, firm-focused value assessments
- `wiki/concepts/consumer-duty-cross-cutting-rules.md` — added "wait and see" behaviour as named breach; Duty siloed in compliance as governance failure

Notes:
- This is the FCA's first empirical post-go-live review (published February 2024, seven months after July 2023 go-live). It adds observed supervisory findings, not guidance.
- No contradictions with existing wiki pages. The review confirms and operationalises existing concepts with real-world examples.
- Gamification is a new harm category not present in PS22/9 or FG22/5.
- Fraud victim support is framed here as a consumer support outcome obligation, extending the foreseeable harm framing in the existing wiki.

## 2026-04-10 query filed | Consumer Understanding Outcome — Digital Investment Platform In-App Notifications

Page: `wiki/derived/consumer-understanding-digital-notifications.md`

Query: whether a digital investment platform's in-app notification system complies with the Consumer Understanding outcome.

Sources drawn on: PS22/9 §8.1–§8.12, FG22/5 §5.9/§5.13/Ch.8, FCA implementation review (February 2024). Key points synthesised: notifications are in-scope communications; the operative test is decision-support quality not technical accuracy; gamification is a named FCA concern; execution-only status provides no carve-out; testing is mandatory; behavioural bias exploitation is a named bad-faith pattern.

## 2026-04-10 lint

Scanned all 13 wiki pages. No contradictions. No stale claims. No orphan pages.

Issues found and fixed (11 total):

A. Frontmatter/body inconsistency (3 fixes):
- Added `[[fca-consumer-duty-implementation-review-2024]]` to Related Articles body of: consumer-duty-cross-cutting-rules.md, consumer-duty-consumer-support.md, vulnerable-customers.md

B. Missing cross-references (6 fixes):
- ps22-9-policy-statement.md: added fg22-5-guidance to related + Related Articles
- consumer-duty-products-services.md: added fg22-5-guidance + implementation-review-2024 to related + Related Articles
- consumer-duty-consumer-understanding.md: added fg22-5-guidance + implementation-review-2024 to related + Related Articles
- fca-supervisory-questions-consumer-duty.md: added implementation-review-2024 to related + Related Articles

D. Thin pages updated with substantive content (2 fixes):
- consumer-duty-products-services.md: added FG22/5 supervisory questions section; added good/poor practice findings from implementation review (information-flow failures, passive distribution monitoring, chain-role blindness)
- consumer-duty-consumer-understanding.md: added FG22/5 supervisory questions section; added good/poor practice findings from implementation review (jargon buster example, behavioural-bias-aware comms, financial promotions approvers, execution-only carve-out note)

Flagged for future ingest (not yet actioned):
- ~~FG21/1 (FCA Guidance on the fair treatment of vulnerable customers)~~ — ingested 2026-04-10
- FCA Dear CEO letter to wealth and stockbroking firms — referenced in vulnerable-customers.md and implementation review page

## 2026-04-10 ingest | FCA FG21/1 — Guidance for Firms on the Fair Treatment of Vulnerable Customers

Source: `raw/fca-consumer-duty/fg21-1.pdf` (FCA Finalised Guidance, February 2021, 5 chapters + 2 appendices)

Pages created (2):
- `wiki/summaries/fg21-1-guidance.md`
- `wiki/concepts/vulnerability-drivers-and-taxonomy.md`

Pages updated (1):
- `wiki/concepts/vulnerable-customers.md` — added FG21/1 sources to frontmatter; added HLRC four-driver taxonomy (FG21/1 §2.5–§2.6) with Table 1 characteristics; added scale data (46%/53%, FG21/1 §2.7) and "do not use the label" (FG21/1 §2.9); added policy/practice gap section (FG21/1 §3.13); added TEXAS model section (FG21/1 §3.18–§3.20); added vulnerability MI catalogue (FG21/1 Ch.5, 10 named MI types); updated Key Points for Agents; updated Related Articles to include vulnerability-drivers-and-taxonomy, fg21-1-guidance

Notes:
- FG21/1 predates Consumer Duty (July 2022) and was issued under Principle 6. PS22/9 §10.8 and FG22/5 §11.40 explicitly cross-reference it — it remains fully in force under the Duty.
- The HLRC four-driver taxonomy (Table 1) is the primary FCA source for characterising vulnerability. PS22/9 and FG22/5 reference vulnerability as a concept without providing this detail.
- TEXAS model and policy/practice gap are FG21/1-only concepts not described in PS22/9 or FG22/5.
- The vulnerability MI catalogue (FG21/1 Ch.5, 10 named types) is the most detailed FCA guidance on monitoring vulnerable customer outcomes. PS22/9 requires firms to monitor outcomes for distinct customer groups; FG21/1 specifies the mechanism.
- No contradictions with existing wiki pages. FG21/1 adds operational depth to what PS22/9 and FG22/5 describe at a higher level.

Flagged for future ingest (not yet actioned):
- ~~FCA Dear CEO letter to wealth and stockbroking firms~~ — ingested 2026-04-11

## 2026-04-11 lint (pass 1)

Scanned all 16 wiki pages. No contradictions. No stale claims. No orphan pages.

Issues found and fixed (11 total across 7 pages):

A. Frontmatter/body inconsistency (1 fix):
- fg22-5-guidance.md: body Related Articles was missing 3 entries already in frontmatter (consumer-duty-products-services, consumer-duty-price-value, consumer-duty-consumer-understanding) — added to body

B. Missing cross-references (10 fixes):
- fg22-5-guidance.md: added fg21-1-guidance to frontmatter + body (FG22/5 §11.40 explicitly cross-references FG21/1)
- ps22-9-policy-statement.md: added fg21-1-guidance + fca-consumer-duty-implementation-review-2024 to frontmatter + body (PS22/9 §10.8 references FG21/1; implementation review is the primary forward link)
- consumer-duty-price-value.md: added fg22-5-guidance + fca-supervisory-questions-consumer-duty to frontmatter + body (only outcome page missing these; FG22/5 Ch.7 cited in body)
- consumer-duty-consumer-understanding.md: added consumer-understanding-digital-notifications to frontmatter + body (derived page already linked back; reverse was absent)
- sludge-and-friction.md: added fca-consumer-duty-implementation-review-2024 to frontmatter + body (review discusses sludge removal as good practice)
- consumer-principle.md: added vulnerable-customers to frontmatter + body (page mentions vulnerability in proportionality section but lacked link)
- fca-consumer-duty-implementation-review-2024.md: added fg21-1-guidance + vulnerability-drivers-and-taxonomy to frontmatter + body (review's vulnerability findings map directly to FG21/1 frameworks)

## 2026-04-11 lint (pass 2)

Scanned all 16 wiki pages. No contradictions. No stale claims. No orphan pages.

Issues found and fixed (7 total across 6 pages):

B. Missing cross-references (7 fixes):
- fca-supervisory-questions-consumer-duty.md: added vulnerable-customers + fg21-1-guidance to frontmatter + body (page notes vulnerability is a cross-cutting theme; FG21/1 underpins what firms must demonstrate)
- fca-consumer-duty-implementation-review-2024.md: added fca-supervisory-questions-consumer-duty to frontmatter + body (supervisory questions page linked to review; reverse was absent)
- fg21-1-guidance.md: added ps22-9-policy-statement to frontmatter + body (body cites PS22/9 §10.8; relationship to Consumer Duty discussed at length)
- vulnerability-drivers-and-taxonomy.md: added fg22-5-guidance to frontmatter + body (FG22/5 §10.6 four-driver culture model builds on FG21/1 HLRC framework)
- consumer-understanding-digital-notifications.md: added ps22-9-policy-statement to frontmatter + body (PS22/9 §8.1–§8.12 cited in sources but absent from Related Articles)
- sludge-and-friction.md: added fca-supervisory-questions-consumer-duty to frontmatter + body (supervisory questions include the direct "at least as easy to exit" test)

Flagged for future ingest (not yet actioned):
- ~~FCA Dear CEO letter to wealth and stockbroking firms~~ — ingested 2026-04-11

Scanned all 16 wiki pages. No contradictions. No stale claims. No orphan pages.

Issues found and fixed (11 total across 7 pages):

A. Frontmatter/body inconsistency (1 fix):
- fg22-5-guidance.md: body Related Articles was missing 3 entries already in frontmatter (consumer-duty-products-services, consumer-duty-price-value, consumer-duty-consumer-understanding) — added to body

B. Missing cross-references (10 fixes):
- fg22-5-guidance.md: added fg21-1-guidance to frontmatter + body (FG22/5 §11.40 explicitly cross-references FG21/1)
- ps22-9-policy-statement.md: added fg21-1-guidance + fca-consumer-duty-implementation-review-2024 to frontmatter + body (PS22/9 §10.8 references FG21/1; implementation review is the primary forward link)
- consumer-duty-price-value.md: added fg22-5-guidance + fca-supervisory-questions-consumer-duty to frontmatter + body (only outcome page missing these; FG22/5 Ch.7 cited in body)
- consumer-duty-consumer-understanding.md: added consumer-understanding-digital-notifications to frontmatter + body (derived page already linked back; reverse was absent)
- sludge-and-friction.md: added fca-consumer-duty-implementation-review-2024 to frontmatter + body (review discusses sludge removal as good practice)
- consumer-principle.md: added vulnerable-customers to frontmatter + body (page mentions vulnerability in proportionality section but lacked link)
- fca-consumer-duty-implementation-review-2024.md: added fg21-1-guidance + vulnerability-drivers-and-taxonomy to frontmatter + body (review's vulnerability findings map directly to FG21/1 frameworks)

Flagged for future ingest (not yet actioned):
- ~~FCA Dear CEO letter to wealth and stockbroking firms~~ — ingested 2026-04-11
- FCA Financial Crime Guide (FCG) — referenced in Dear CEO letter as mandatory reading; financial crime is out of scope until FCG is ingested

## 2026-04-11 ingest | FCA Dear CEO Letter — Expectations for Wealth Management and Stockbroking Firms (November 2023)

Source: `raw/fca-consumer-duty/dear-ceo-letter-fca-expectations-wealth-management-stockbroking-firms.pdf` (FCA Dear CEO letter, 8 November 2023, 4pp + summary graphic)

Pages created (1):
- `wiki/summaries/dear-ceo-letter-wealth-stockbroking-2023.md`

Pages updated (3):
- `wiki/concepts/consumer-duty-price-value.md` — added five named sector-specific poor practices: overtrading; client money interest withheld; securities lending revenue not shared; opaque fee disclosure; incomplete value chain assessment; updated Key Points for Agents
- `wiki/concepts/consumer-duty-products-services.md` — added four named sector-specific findings: unsuitable portfolios obscured through relationship leverage; execution-only complexity failures; retail-to-professional uprating (14% stat); unjustified complex/unregulated investments; updated Key Points for Agents
- `wiki/concepts/consumer-duty-consumer-understanding.md` — added FOS/FSCS protection limitation disclosure as a new obligation section; updated Key Points for Agents

Notes:
- This letter designates financial crime prevention as a co-equal supervisory priority alongside Consumer Duty. The wiki currently has no financial crime content. The FCG is the primary source for financial crime obligations and should be ingested if financial crime compliance enters scope.
- No contradictions with existing wiki pages. The letter's Consumer Duty findings are consistent with and add sector-specific depth to PS22/9, FG22/5, and the 2024 implementation review.
- The three new Price & Value failures (overtrading, client money interest, securities lending) are sector-specific and not present in any cross-sector FCA source already in the wiki.
- Retail-to-professional uprating was mentioned in consumer-duty-overview.md as a scoping note (FG22/5 §2.10); the Dear CEO letter elevates it to an active supervisory concern with a hard data point (14% of firms).
- The FOS/FSCS disclosure obligation is new; no existing wiki page addressed the obligation to ensure consumers understand the limits of their regulatory protections.

## 2026-04-12 ingest | FCA Financial Crime Guide — FCG 3: Money Laundering and Terrorist Financing

Source: `raw/fca-financial-crime/FCG 3 Money laundering and terrorist financing.pdf` (FCA FCG Chapter 3, April 2026 version, 40pp)

Pages created (3):
- `wiki/summaries/fcg3-money-laundering-terrorist-financing.md` — full FCG 3 summary: regulatory architecture, governance, MLRO, risk assessment, CDD, EDD mandatory triggers, ongoing/transaction monitoring, SARs, record keeping, CTF, wire transfers, Travel Rule, enforcement case studies
- `wiki/concepts/aml-ctf-framework.md` — AML/CTF governance framework: regulatory architecture (MLR/SYSC/POCA/Terrorism Act), senior management obligations, MLRO role and failure modes, risk assessment, SARs and personal liability, record keeping, CTF, relationship to Consumer Duty
- `wiki/concepts/customer-due-diligence.md` — CDD/EDD operational reference: standard CDD, beneficial ownership (25% threshold), mandatory EDD triggers (PEPs, high-risk third countries, correspondent banking, unusual transactions), source of wealth/funds distinction, ongoing monitoring, transaction monitoring, wire transfers and Travel Rule

Pages updated (1):
- `wiki/summaries/dear-ceo-letter-wealth-stockbroking-2023.md` — updated stale "FCG not yet ingested" note; added fcg3-money-laundering-terrorist-financing, aml-ctf-framework, customer-due-diligence to frontmatter and Related Articles

Notes:
- This is the first financial crime content in the wiki. AML/CTF is a distinct regulatory regime from Consumer Duty. Where both apply simultaneously, they impose different but overlapping obligations on the same firm — no contradiction with existing Consumer Duty pages.
- FCG 3 explicitly addresses the consumer-duty-adjacent fraud/scam scenarios from the implementation review and Dear CEO letter, but from an AML/CTF angle rather than a Consumer Duty angle. Both framings are now in the wiki.
- The HSBC case study (£63.9m fine for transaction monitoring failures) is the largest financial crime enforcement example in the wiki. The Coutts case (£8.75m for PEP/high-risk CDD failures) is the most directly relevant to the wealth management context.
- The Travel Rule for cryptoasset transfers (from 1 September 2023) is new to the wiki and sector-specific to FCA-registered cryptoasset businesses.
- The Economic Crime and Corporate Transparency Act 2023 information-sharing provision is new to the wiki.
- Pending lint fixes from 2026-04-11 lint pass (5 cross-reference additions across 4 pages) have not yet been applied — awaiting approval.

Flagged for future ingest:
- FCA Financial Crime Thematic Reviews (FCTR) — referenced in FCG 3.3 as containing additional AML guidance (FCTR 4, 5, 10, 12, 3, 7, 15)
- JMLSG guidance — key operational reference endorsed by FCG 3.1.7 but not yet in wiki

## 2026-04-12 lint (pass 4)

Scanned all 20 wiki pages (17 Consumer Duty + 3 Financial Crime). No contradictions. No stale claims. No orphan pages.

Issues found and fixed (8 total across 6 pages):

A. Pending fixes carried forward from 2026-04-11 lint pass (5 fixes):
- vulnerable-customers.md: added dear-ceo-letter-wealth-stockbroking-2023 to frontmatter + body (body explicitly references the Dear CEO letter by name)
- fca-consumer-duty-implementation-review-2024.md: added dear-ceo-letter-wealth-stockbroking-2023 to frontmatter + body (body explicitly references the Dear CEO letter in the vulnerable customers section)
- dear-ceo-letter-wealth-stockbroking-2023.md: added fg21-1-guidance to frontmatter + body (letter directs firms to "our guidance" on vulnerability — that is FG21/1)
- dear-ceo-letter-wealth-stockbroking-2023.md: added vulnerability-drivers-and-taxonomy to frontmatter + body (HLRC taxonomy underpins the vulnerability reassessment direction; 49%/69% stat maps directly to this page)
- dear-ceo-letter-wealth-stockbroking-2023.md: added consumer-duty-consumer-support to frontmatter + body (letter explicitly directs firms to familiarise themselves with consumer support)

B. New cross-references from FCG 3 ingest (3 fixes):
- fca-consumer-duty-implementation-review-2024.md: added fcg3-money-laundering-terrorist-financing + aml-ctf-framework to frontmatter + body (review discusses fraud/cyber as consumer support failure; AML framework covers same from a different regulatory angle — useful context for agents navigating both regimes)
- aml-ctf-framework.md: added consumer-duty-consumer-support to frontmatter + body (relationship-to-Consumer-Duty section discusses fraud victim support as a consumer support obligation without linking to the page)
- fcg3-money-laundering-terrorist-financing.md: added consumer-duty-consumer-support to frontmatter + body (same rationale as above)

Flagged for future ingest (concepts mentioned but lacking pages):
- Proliferation financing (PF) — mentioned in FCG 3 pages; no concept page
- FATF — frequently referenced as source of typologies and risk lists (FATF Call for Action, FATF Increased Monitoring); no page
- JMLSG guidance — key operational AML reference endorsed by FCG 3.1.7; no page
- SM&CR / Individual Conduct Rule 6 — pre-existing gap; referenced across multiple Consumer Duty pages
- FOS/FSCS — pre-existing gap; now more prominent after consumer-understanding update

## 2026-04-12 ingest | JMLSG Guidance Part I — Prevention of Money Laundering/Combating Terrorist Financing (June 2023, updated August 2025)

Source: `raw/fca-financial-crime/JMLSG-Guidance-Part-I_June-2023-updated-Aug-2025.pdf` (216 pages, Treasury-approved industry guidance)

Pages created (3):
- `wiki/summaries/jmlsg-part-i-guidance.md` — full Part I summary: legal status, eight-chapter overview, relationship to FCG, five key additions vs existing wiki content (SDD, DAML consent, suspicion definitions, tipping off, third-party reliance), PEP continuum, risk factor weighting, Annual Financial Crime Report
- `wiki/concepts/simplified-due-diligence.md` — SDD framework: third CDD tier; six qualifying scenarios; permitted adjustments (timing/quantity/quality/monitoring); when SDD must stop; limits vs third-party reliance
- `wiki/concepts/sar-consent-tipping-off.md` — SARs operational framework: legal definitions of knowledge/suspicion/reasonable grounds (K v NatWest [2006]); DAML consent procedure (7-day/31-day/186-day periods); tipping-off offences (two variants); permitted disclosures (within-firm, within-group, inter-institution); deposit-taker £3k threshold

Pages updated (2):
- `wiki/concepts/customer-due-diligence.md` — added SDD section (pointer to new page); added full third-party reliance section (MLR Reg 39 conditions, what must be obtained immediately, limits on reliance, group introductions, pro-forma confirmations); updated title, frontmatter, Key Points for Agents, Related Articles
- `wiki/concepts/aml-ctf-framework.md` — added operational note on DAML consent and tipping off under SARs section; updated frontmatter sources and tags; updated Key Points for Agents; updated Related Articles

Notes:
- JMLSG Part I is Treasury-approved — courts must take account of it under POCA, Terrorism Act, and MLR. The FCA will have regard to it in enforcement. This is a distinct legal status from FCG (FCA sourcebook guidance) and from FCA rules.
- The DAML consent regime (§6.46–6.59) is entirely new to the wiki. It is the mechanism by which firms may lawfully proceed with a suspicious transaction without committing a money laundering offence. The 7-day/31-day/186-day periods and the deposit-taker £3k threshold are operationally critical and were absent.
- Suspicion definitions (§6.10–6.17) are new. K v NatWest [2006] confirmed that suspicion is purely subjective — no need for reasonable grounds to trigger the subjective obligation. The objective "reasonable grounds" test is a parallel and additional basis for liability.
- Tipping-off offences (§6.60–6.71) are new to the wiki. Two variants. Permitted disclosures resolve the tension between the tipping-off rule and legitimate intra-firm/group information sharing.
- SDD (§5.4) fills a gap in customer-due-diligence.md — that page covered only CDD and EDD.
- Third-party reliance (§5.6) adds operational depth absent from the existing customer-due-diligence.md; the key limit (SDD-verified identity cannot be relied on; chain reliance not permitted) is now documented.
- No contradictions with existing wiki pages. JMLSG Part I is operationally consistent with FCG 3 and adds depth to it.
- JMLSG Parts II (sector-specific) and III (specialist areas) not yet ingested.

Flagged for future ingest (concepts mentioned but lacking pages):
- ~~JMLSG guidance~~ — ingested 2026-04-12
- Proliferation financing (PF) — mentioned in JMLSG Part I and FCG 3; no concept page
- FATF — referenced as source of risk lists and typologies; no page
- SM&CR / Individual Conduct Rule 6 — pre-existing gap
- FOS/FSCS — pre-existing gap

## 2026-04-12 lint (pass 5)

Scanned all 25 wiki pages (17 Consumer Duty + 8 Financial Crime). No contradictions. No stale claims. No orphan pages.

Issues found and fixed (3 total across 2 pages):

A. Frontmatter/body inconsistency (1 fix):
- aml-ctf-framework.md: frontmatter `related:` was missing `simplified-due-diligence` and `fca-consumer-duty-implementation-review-2024`, both of which appeared in the body Related Articles — added to frontmatter

B. Missing cross-references from new JMLSG ingest (2 fixes):
- fcg3-money-laundering-terrorist-financing.md: added `jmlsg-part-i-guidance` to frontmatter + body (FCG 3.1.7 explicitly states JMLSG is the operational complement; reverse link was absent)
- fcg3-money-laundering-terrorist-financing.md: added `sar-consent-tipping-off` to frontmatter + body (FCG 3.2.10 covers SARs; sar-consent-tipping-off provides the DAML consent and tipping-off operational detail FCG 3 points to JMLSG for)

Flagged for future ingest (concepts mentioned but lacking pages):
- Proliferation financing (PF) — now referenced in 3 financial crime pages
- FATF — referenced as authoritative source throughout financial crime section
- SM&CR / Individual Conduct Rule 6 — pre-existing gap
- FOS/FSCS — pre-existing gap

## 2026-04-13 ingest | FCA Financial Crime Guide — FCG 7: Sanctions, Asset Freezes and Proliferation Financing

Source: `raw/fca-financial-crime/FCG 7 Sanctions, asset freezes and proliferation financing.pdf` (FCA FCG Chapter 7, April 2026 version, 16pp)

Pages created (5):
- `wiki/summaries/fcg7-sanctions-asset-freezes-proliferation-financing.md` — full FCG 7 summary: scope (all FCA-supervised firms incl. EMIs/PIs/crypto), OFSI, governance, MI, risk assessment, CDD, screening, evasion detection, asset freezing, breach reporting, matches/escalation, weapons proliferation, RBS case study, FCTR 8/15 cross-references
- `wiki/concepts/uk-financial-sanctions-framework.md` — UK sanctions regime: SAMLA legislative basis, OFSI, Consolidated List, scope contrast with AML (broader — EMIs, PIs, cryptoassets in scope), Principle 11 notification, structural contrast with AML/CTF
- `wiki/concepts/sanctions-screening.md` — screening obligations: what/when/whom to screen, automated tool calibration and fuzzy matching, outsourcing oversight, blockchain analytics, NECC evasion typology alerts, RBS £5.6m enforcement case (2010)
- `wiki/concepts/asset-freezes-and-ofsi-licences.md` — asset freeze mechanics: immediate freeze obligation, OFSI licence regime, dual breach reporting (OFSI mandatory + FCA under Principle 11/SUP 15.3.11R(1)), false positive escalation, audit trail requirement, distinction from DAML consent
- `wiki/concepts/proliferation-financing.md` — PF framework: standalone MLR Reg 18A obligation, Anti-Terrorism Crime and Security Act 2001, Counter-Terrorism Act 2008 Treasury direction powers, dual-use goods, trade finance EDD, JMLSG Part III as primary operational source

Pages updated (2):
- `wiki/concepts/aml-ctf-framework.md` — added clarification that PF risk assessment is a standalone MLR Reg 18A obligation; added cross-references to uk-financial-sanctions-framework, proliferation-financing, fcg7-sanctions-asset-freezes-proliferation-financing
- `wiki/concepts/customer-due-diligence.md` — added new "CDD and Sanctions Screening" section (FCG 7.2.2A/7.2.2B): CDD quality as foundational to sanctions screening; sanctions scope note (EMIs/PIs in scope); cross-references to sanctions-screening, fcg7-sanctions-asset-freezes-proliferation-financing

Notes:
- This is the first sanctions content in the wiki. Sanctions are a legally distinct regime from AML/CTF: the trigger is dealing with a designated person (absolute), not suspicion (threshold-based); the response is immediate freeze, not DAML consent; reporting goes to OFSI (mandatory) and the FCA (conditional), not the NCA.
- **Scope distinction noted:** FCG 7 applies to e-money institutions and payment institutions that are out of scope for FCG 3 AML obligations. This is not a contradiction — it reflects the different legal bases. Noted in uk-financial-sanctions-framework.md.
- **PF gap resolved:** The proliferation-financing concept page fills the gap flagged in the 2026-04-12 lint passes (referenced in 3 prior pages but lacking its own page).
- The RBS enforcement case (FSA, August 2010, £5.6m) is the primary sanctions systems-and-controls enforcement benchmark in FCG 7 — comparable in role to the HSBC and Coutts cases for AML.
- FCG 7 explicitly designates JMLSG Part III (not yet ingested) as the chief operational source for proliferation financing guidance. The proliferation-financing.md page cross-references this.
- FCTR 8 and FCTR 15 (financial crime thematic reviews on sanctions and trade finance respectively) are referenced in FCG 7.3.1 but not yet ingested.

Flagged for future ingest:
- ~~Proliferation financing~~ — concept page created 2026-04-13
- JMLSG Part III — chief operational source for PF guidance per FCG 7.4.2; not yet ingested
- FCTR 8 — FCA thematic review on UK financial sanctions systems and controls
- FCTR 15 — FCA thematic review on trade finance and financial crime risk
- FATF — referenced throughout; no page
- SM&CR / Individual Conduct Rule 6 — pre-existing gap
- FOS/FSCS — pre-existing gap

## 2026-04-13 lint (pass 6)

Scanned all 30 wiki pages (17 Consumer Duty + 13 Financial Crime). No contradictions. No stale claims. No orphan pages. No frontmatter/body inconsistencies.

Issues found and fixed (5 total across 3 pages):

B. Missing cross-references (5 fixes):
- fcg3-money-laundering-terrorist-financing.md: added fcg7-sanctions-asset-freezes-proliferation-financing + uk-financial-sanctions-framework + proliferation-financing to frontmatter + body (FCG 3 and FCG 7 are sibling chapters; FCG 3 body cites PF/MLR 18A; FCG 7 scope is broader than FCG 3)
- sar-consent-tipping-off.md: added asset-freezes-and-ofsi-licences to frontmatter + body (asset-freezes page explicitly contrasts immediate freeze obligation with DAML consent regime; reverse link was absent)
- dear-ceo-letter-wealth-stockbroking-2023.md: added fcg7-sanctions-asset-freezes-proliferation-financing to frontmatter + body (letter explicitly directs firms to implement the full FCG; FCG 7 now in wiki and relevant to the high-sanctions-risk sector the letter addresses)

Flagged for future ingest (no new gaps; pre-existing gaps restated):
- JMLSG Part III — primary PF operational source (FCG 7.4.2)
- FCTR 8 — sanctions thematic review (FCG 7.3.1)
- FCTR 15 — trade finance thematic review (FCG 7.3.1)
- FATF — authoritative source for risk lists and typologies
- SM&CR / Individual Conduct Rule 6 — pre-existing gap
- FOS/FSCS — pre-existing gap

## 2026-04-13 ingest | FCA FCTR 8 — Sanctions Systems and Controls: Firms' Response to Increased Sanctions (Russia)

Source: `raw/fca-financial-crime/Sanctions systems and controls firms' response to increased sanctions due to Russia's invasion of Ukraine.md`
Document: FCA thematic review (FCTR 8), published 2023-06-09
Scope: 90+ firms across retail banking, wholesale banking, wealth management, insurance, electronic money, payments

Pages created (1):
- `wiki/summaries/fctr8-sanctions-systems-controls-russia.md` — FCTR 8 in full: 5 themes (governance/MI, skills/resources, screening capabilities, CDD/KYC, breach reporting), FCA Sanctions Screening Tool (SST), horizon scanning obligation, UK vs. OFAC divergence risk, breach reporting timeliness failures, SST testing results (some firms unable to generate alerts for Consolidated List names)

Pages updated (4):
- `wiki/concepts/sanctions-screening.md` — added SST section; calibration balance (too sensitive vs. not sensitive enough); list update SLAs as a named requirement; UK vs. OFAC calibration failure pattern; updated outsourcing section with SLA and UK-regime verification obligations
- `wiki/concepts/asset-freezes-and-ofsi-licences.md` — added breach reporting timeliness section: weeks/months delays named; investigation completion NOT a precondition for FCA notification; failure to report at all is a distinct named failure
- `wiki/concepts/uk-financial-sanctions-framework.md` — added new section "UK Sanctions vs. OFAC — Divergence Risk for Global Firms": OFAC-calibrated policies are not a substitute for UK compliance; post-Brexit divergence; global centres of excellence must have adequate UK oversight
- `wiki/summaries/fcg7-sanctions-asset-freezes-proliferation-financing.md` — updated FCG 7.3 section to mark FCTR 8 as ingested; added summary of key additions; added fctr8 to related

Notes:
- This is FCTR 8, the thematic review cross-referenced in FCG 7.3.1 and flagged as "not yet ingested" since the FCG 7 ingest.
- The FCA's Sanctions Screening Tool (SST) is a material supervisory fact not documented anywhere else in the wiki. Firms can be tested against it without notice.
- Breach reporting timeliness: the FCA's position (investigation is not a precondition for notification; weeks/months is unacceptable) is now explicit in asset-freezes-and-ofsi-licences.md.
- UK vs. OFAC divergence is a structural risk for global firms that was not previously documented. Added to uk-financial-sanctions-framework.md and sanctions-screening.md.
- Horizon scanning and lessons learned exercises are now documented as a positive obligation in fctr8 summary.

Flagged for future ingest (updated):
- ~~FCTR 8~~ — ingested 2026-04-13
- FCTR 15 — FCA thematic review on trade finance and financial crime risk (FCG 7.3.1)
- JMLSG Part III — chief operational source for PF guidance (FCG 7.4.2)
- FATF — referenced throughout; no page
- SM&CR / Individual Conduct Rule 6 — pre-existing gap
- FOS/FSCS — pre-existing gap

## 2026-04-13 lint (pass 7)

Scanned all 32 wiki pages (17 Consumer Duty + 15 Financial Crime, including 2 pages added this session). No contradictions. No stale claims. No orphan pages. No frontmatter/body inconsistencies.

Issues found and fixed (3 total — missing cross-references only):

- `customer-due-diligence.md`: added fctr8-sanctions-systems-controls-russia to frontmatter + Related Articles (FCTR 8's CDD findings — ownership structure failures, CDD backlogs as sanctions risk — are directly substantive for the page's CDD-and-sanctions-screening section)
- `consumer-duty-overview.md`: added fca-consumer-duty-implementation-review-2024 to frontmatter + Related Articles (overview is primary Consumer Duty entry point; all other CD pages link to the review; the overview did not)
- `fg22-5-guidance.md`: added fca-consumer-duty-implementation-review-2024 to frontmatter + Related Articles (FG22/5 is the pre-go-live guidance; the implementation review is its post-go-live companion; reverse link was absent)

Flagged for future ingest (no new gaps; pre-existing gaps restated):
- FCTR 15 — FCA thematic review on trade finance and financial crime risk (FCG 7.3.1)
- JMLSG Part III — primary PF operational source (FCG 7.4.2)
- FATF — referenced throughout; no page
- SM&CR / Individual Conduct Rule 6 — pre-existing gap
- FOS/FSCS — pre-existing gap

## 2026-04-13 query filed | PI/EMI — Consumer Duty and UK Sanctions Overlapping Obligations

Page: `wiki/derived/pi-emi-consumer-duty-and-sanctions-obligations.md`

Query: What are the overlapping obligations on a payment institution or EMI under both FCA Consumer Duty and UK sanctions?

Sources synthesised (6): PS22/9, FG22/5, FCG 7 (April 2026 version), POCA 2002 ss.327–340, FCA Consumer Duty implementation review (February 2024), FCA Dear CEO letter (November 2023).

Key findings:
- Scope asymmetry is the defining structural difference: Consumer Duty applies to retail customers only (consumers, micro-enterprises, small charities per PSRs 2017 / EMRs 2011); sanctions apply to all customers and all transactions with no retail limitation.
- PI AML gap: PIs are supervised for AML by HMRC (FCG 3 does not directly apply to them), but FCG 7 sanctions obligations apply directly as they are FCA-supervised firms. A PI therefore has sanctions governance obligations without the FCG 3 MLRO framework.
- Three genuine operational tensions mapped: (1) immediate asset freeze obligation vs. Consumer Support outcome; (2) tipping-off prohibitions (POCA s.333A) vs. Consumer Understanding transparency obligation; (3) sanctions screening friction vs. no-unreasonable-barriers standard. In each case the statutory obligation takes precedence; Consumer Duty requires post-constraint harm assessment.
- Confirmation of Payee identified as the clearest dual-regime alignment: positive friction under FG22/5 §9.24 and a sanctions/fraud evasion detection control under FCG 7.2.3.
- Alert backlogs and under-resourced screening teams constitute both a Consumer Support failure (legally unjustified delays) and a sanctions compliance risk simultaneously.

Index updated: entry added to wiki/index.md under UK — FCA Financial Crime → Derived.

## 2026-04-13 ingest | FCA Multi-Firm Review — Firms' CDD Processes and Controls: Our Findings (2026)

Document: FCA multi-firm review of CDD, EDD and ongoing due diligence controls (2025 work; published 2026-08-04)
Scope: Asset management, crowdfunding, wholesale banking, contracts for difference, non-bank lenders — findings apply to all firms undertaking CDD

Pages created (1):
- `wiki/summaries/fca-cdd-findings-multi-firm-2026.md` — full review summary: Theme 1 (policies and procedures: alternative ID gap, periodic review timing, senior management approval matrix, January 2024 domestic PEP note); Theme 2 (CDD/EDD: purpose/nature recording failure, EDD documentation differentiation failure); Theme 3 (compliance monitoring: three-lines independence requirement, same-staff failure mode, external/internal audit as good practice); two related documents flagged for future ingest

Pages updated (2):
- `wiki/concepts/customer-due-diligence.md` — added: CDD policy content requirements section (alternative ID procedures, periodic review timing, event-driven triggers, approval matrix, January 2024 domestic PEP note); EDD documentation requirement section (four evidence elements required, purpose/nature recording failure); CDD compliance monitoring section (three-lines model table, independence gap as named failure); four new Key Points bullets; fca-cdd-findings-multi-firm-2026 added to frontmatter sources, related, and Related Articles
- `wiki/index.md` — added fca-cdd-findings-multi-firm-2026 entry under UK — FCA Financial Crime → Summaries; updated customer-due-diligence source count from 2 to 3 with expanded summary

Notes:
- The January 2024 domestic PEP change is referenced but not substantively documented — source is the FCA PEP treatment review (July 2024, flagged below).
- EDD documentation differentiation failure is a distinct named finding beyond the existing EDD methods framework in the wiki.
- The three-lines independence requirement for CDD monitoring is not covered in aml-ctf-framework.md or fcg3 — this review is the primary source.
- Publication date (2026-08-04) is in the future as of ingest date (2026-04-13). Flagged in summary frontmatter.

Flagged for future ingest:
- **FCA, "The treatment of politically exposed persons"** (July 2024) — multi-firm review; covers the January 2024 domestic PEP regime change; directly substantive for customer-due-diligence.md. URL: https://www.fca.org.uk/publications/multi-firm-reviews/treatment-politically-exposed-persons
- **FCA, "Annex 1 Dear CEO letter"** (March 2024) — FCA warning on AML failings; sector-specific CDD governance findings. URL: https://www.fca.org.uk/news/news-stories/fca-warns-firms-over-anti-money-laundering-failings


## 2026-04-13 lint (pass 8)

Scanned all 34 wiki pages (17 Consumer Duty + 17 Financial Crime, including fca-cdd-findings-multi-firm-2026 added this session). No contradictions. No stale claims. No concepts lacking pages beyond pre-existing gaps.

Issues found and fixed (5 total — 1 orphan resolved, 4 missing cross-references):

- `derived/pi-emi-consumer-duty-and-sanctions-obligations.md` (orphan — no inbound wikilinks): Added [[pi-emi-consumer-duty-and-sanctions-obligations]] to frontmatter + Related Articles of `concepts/uk-financial-sanctions-framework.md` (scope asymmetry and OFAC divergence content is directly related) and `concepts/consumer-duty-overview.md` (primary Consumer Duty entry point; PI/EMI scope is a natural downstream reference)
- `concepts/aml-ctf-framework.md`: added fca-cdd-findings-multi-firm-2026 to frontmatter + Related Articles (three-lines independence for CDD monitoring is an AML governance topic)
- `summaries/fcg3-money-laundering-terrorist-financing.md`: added fca-cdd-findings-multi-firm-2026 to frontmatter + Related Articles (CDD findings review evaluates FCG 3 compliance; FCG 3 summary had no link to it)
- `derived/consumer-understanding-digital-notifications.md`: added fg22-5-guidance to frontmatter + Related Articles (page cites FG22/5 §5.9, §5.13, §9.24 as sources but did not include the FG22/5 summary in Related Articles — the only derived page sourcing FG22/5 without that link)
- `concepts/consumer-principle.md`: added fca-consumer-duty-implementation-review-2024 to frontmatter + Related Articles (the review's named failure "Duty siloed in compliance" maps directly onto Individual Conduct Rule 6 and the prudent-firm test; consumer-principle was the only Consumer Duty concept page without a link to the implementation review)

Flagged for future ingest (pre-existing gaps, no new additions):
- FCTR 15, JMLSG Part III, FCA PEP treatment review (July 2024), Dear CEO letter AML failings (March 2024), FATF, SM&CR/Conduct Rule 6, FOS/FSCS


## 2026-04-13 ingest | FCA Priorities for Payments Firms — Portfolio Letter (March 2023)

Source: `raw/psr-payment-services/priorities-payments-firms-portfolio-letter-2023.pdf`
Issued: 16 March 2023. Author: Matthew Long, Director, Payments & Digital Assets. Addressed to CEOs of all PIs, EMIs, and RAISPs supervised by the FCA.

New pages created (6):

- `wiki/summaries/dear-ceo-letter-payments-portfolio-2023.md` — full summary of the portfolio letter; three outcomes, three cross-cutting priorities, Changes in Control, ESG/diversity
- `wiki/concepts/safeguarding-pis-emis.md` — new concept; relevant funds, segregation method (incl. written acknowledgement requirement), daily reconciliation, annual safeguarding audit, insolvency return records
- `wiki/concepts/wind-down-planning.md` — new concept; Approach Document §3.73–3.76 obligation, four named plan failures, TR22/1 and Wind-down Planning Guide as reference materials
- `wiki/concepts/psr-emi-prudential.md` — new concept; PI capital methods (A/B/C), EMI capital basis, liquidity risk identification, stress testing, risk appetite, FG20/1 reference
- `wiki/concepts/agent-distributor-oversight.md` — new concept; agent FCA registration (PI/EMI responsibility), EMI distributor notification (no individual registration), distributor payment services prohibition, ongoing monitoring obligation
- `wiki/concepts/operational-resilience.md` — new concept; SYSC 15A (in force 31 March 2022), important business services, impact tolerances, 31 March 2025 mapping/testing deadline

Pages updated:

- `wiki/derived/pi-emi-consumer-duty-and-sanctions-obligations.md` — added 5 new related pages to frontmatter and Related Articles
- `wiki/index.md` — added new section "UK — FCA Payment Services" (1 summary, 5 concept pages)

New wiki section created: UK — FCA Payment Services (previously absent — payments regulatory obligations were scattered under Financial Crime derived pages only).

No contradictions with existing wiki content. AML and sanctions obligations for PIs and EMIs were already covered in the existing derived page; this ingest adds the PSR/EMR-specific obligations (safeguarding, prudential, wind-down, operational resilience, agent oversight) that were entirely absent.

Flagged for future ingest:
- **FCA Approach Document (Payment Services and Electronic Money)** — `raw/psr-payment-services/payment-services-electronic-money-approach.pdf` is already present in the raw directory. This is the primary operational source referenced throughout the portfolio letter (Chapter 10 safeguarding, §3.73–3.76 wind-down, Chapter 13 regulatory reporting). Should be ingested as the next priority in the PSR/EMI section.


## 2026-04-13 lint | Lint pass 9 — full wiki scan (39 pages)

Scope: all pages across Consumer Duty, Financial Crime, and Payment Services sections.

No contradictions found. No stale claims. No orphan pages. Four structural/cross-reference issues identified and fixed.

**Fix 1 — `wiki/index.md` structural corruption:** The Payment Services ingest had accidentally orphaned the Financial Crime `### Concepts` subsection (8 pages) by inserting the new Payment Services section between the Financial Crime Derived and Financial Crime Concepts subsections. Fixed by replacing the broken block with the correct structure: Financial Crime Concepts heading reinstated under the Financial Crime section; Payment Services section contains its own Summaries and Concepts headings only.

**Fix 2 — `wiki/concepts/consumer-duty-consumer-support.md`:** Added `concepts/operational-resilience.md` to frontmatter `related` and `[[operational-resilience]]` to Related Articles. The page's digital-only product requirements at §9.7(4) explicitly reference operational resilience obligations but lacked a cross-link to the new concept page.

**Fix 3 — `wiki/concepts/psr-emi-prudential.md`:** Added `concepts/operational-resilience.md` to frontmatter `related` and `[[operational-resilience]]` to Related Articles. Both pages cover PSR/EMI obligations and are referenced together in the portfolio letter.

**Fix 4 — `wiki/concepts/operational-resilience.md`:** Added `concepts/psr-emi-prudential.md` to frontmatter `related` and `[[psr-emi-prudential]]` to Related Articles. Reciprocal link for Fix 3.

Pages modified (4): `wiki/index.md`, `wiki/concepts/consumer-duty-consumer-support.md`, `wiki/concepts/psr-emi-prudential.md`, `wiki/concepts/operational-resilience.md`


## 2026-04-13 ingest | FCA MiFID II: Product Governance Review (February 2021)

Source: `raw/mifid/MiFID II_ product governance review.md`
Published: 26 February 2021. Multi-firm review of 8 asset managers/manufacturers. Products: UK-authorised collective investment schemes (UCITS and NURS), retail investors, platform distribution (advised + execution-only). Total fund value: ~£7bn.

New pages created (2):

- `wiki/summaries/mifid-ii-product-governance-review-2021.md` — full summary of the review; four areas (product design, product testing, distributors, governance & oversight); key findings including negative target market near-universal failure, systemic distributor information flow breakdown, product-level stress testing gaps, AFM Board NED challenge failures, record keeping SM&CR liability link
- `wiki/concepts/prod-product-governance.md` — new concept; PROD 3 framework for investment manufacturers including: positive and negative target market (PROD 3.2.10R), conflicts of interest in product design (SYSC 10/PRIN 8), product scenario testing (PROD 3.2.13R), costs disclosure, distributor due diligence and information flow, AFM board/NED obligations, record keeping and SM&CR individual liability (SYSC 9.1.1R)

Pages updated:

- `wiki/concepts/consumer-duty-products-services.md` — added cross-links to new PROD concept page and summary
- `wiki/index.md` — added new section "UK — MiFID II / PROD" (1 summary, 1 concept page)

New wiki section created: UK — MiFID II / PROD.

No contradictions with existing wiki content. The Consumer Duty pages already note that PROD compliance satisfies the Products & Services outcome (PS22/9 §6.5–6.7); the new PROD concept page reinforces this equivalence and adds the granular PROD 3 obligations not previously covered.

Key additions not previously in the wiki: negative target market as a mandatory distinct obligation; product-level (instrument-level) scenario testing under PROD 3.2.13R; SM&CR individual accountability for undocumented product governance challenge; AFM board NED challenge quality as a named FCA finding; manufacturer obligation to document distributor data challenges even when distributors do not cooperate.

Flagged for future ingest:
- FCA review of costs and charges disclosures (February 2019) — referenced in the 2021 review as identifying the same portfolio transaction costs disclosure failures; would complete the costs disclosure picture
- PROD 3 and PROD 4 sourcebook text — formal rule text behind the guidance in this review


## 2026-04-13 lint | Lint pass 10 — full wiki scan (41 pages)

Scope: all pages across Consumer Duty, Financial Crime, Payment Services, and MiFID II / PROD sections.

No contradictions found. No orphan pages. Four issues identified and fixed.

**Fix 1 — `wiki/concepts/operational-resilience.md` stale claim:** The 31 March 2025 mapping/testing deadline was written in present-future tense throughout, implying it was upcoming. The deadline has now passed (today: 2026-04-13). Updated to past tense in both the body section and the Key Points bullet. Added a note that firms that did not meet the deadline remain in breach and deficiencies identified after the deadline are treated as current failures.

**Fix 2 — `wiki/concepts/consumer-duty-overview.md` missing cross-reference:** The overview's relationship table references PROD 3/4 compliance satisfying the Products & Services outcome but had no link to `prod-product-governance.md`. Added to frontmatter `related` and `Related Articles`.

**Fix 3 — Bidirectional links: Dear CEO letter (wealth/stockbroking) ↔ MiFID/PROD pages:** `dear-ceo-letter-wealth-stockbroking-2023.md`, `prod-product-governance.md`, and `mifid-ii-product-governance-review-2021.md` all cover the same sector (asset management) and PROD-relevant failures (execution-only complexity, unsuitable portfolios, retail-to-professional uprating). Three missing links added across the three pages.

**Fix 4 — `wiki/concepts/consumer-duty-price-value.md` missing cross-reference:** The PROD concept page covers costs and charges disclosure failures (portfolio transaction costs, KIID inconsistency) directly relevant to the Price & Value outcome. Added `prod-product-governance.md` to frontmatter `related` and `Related Articles`.

Pages modified (6): `wiki/concepts/operational-resilience.md`, `wiki/concepts/consumer-duty-overview.md`, `wiki/concepts/consumer-duty-price-value.md`, `wiki/summaries/dear-ceo-letter-wealth-stockbroking-2023.md`, `wiki/concepts/prod-product-governance.md`, `wiki/summaries/mifid-ii-product-governance-review-2021.md`


## 2026-04-13 ingest | FCA Review on Disclosure of Costs by Asset Managers (February 2019)

Source: `raw/mifid/Review on disclosure of costs by asset managers.md`
Published: 28 February 2019. Two workstreams: (1) transaction cost calculation — 16 firms; (2) effectiveness and consistency of disclosures — 26 products reviewed across KIIDs, PRIIPs KIDs, factsheets, and websites.

New pages created (2):

- `wiki/summaries/fca-costs-charges-disclosure-review-2019.md` — full summary of both workstreams; four transaction cost calculation failure modes; PRIIPs KID non-contradiction rule with named example (3% KID vs 1.2% AMC factsheet); UCITS KIID material transaction cost obligation (4% p.a. omitted case); disclosure accessibility as standalone regulatory concern; AMC terminology prohibition (TR 14-07 2014)
- `wiki/concepts/costs-charges-disclosure.md` — new concept; full costs disclosure framework: PRIIPs/UCITS/MiFID II regulatory landscape; four calculation failure modes with analysis of each; non-contradiction rule; UCITS KIID material obligation; accessibility failure mode; AMC vs OCF; relationship to Consumer Duty Price & Value and Consumer Understanding outcomes

Pages updated:

- `wiki/concepts/prod-product-governance.md` — expanded costs section to reference all four calculation failure modes and link to new concept page; added two new related links
- `wiki/concepts/consumer-duty-price-value.md` — added links to new costs pages
- `wiki/concepts/consumer-duty-consumer-understanding.md` — added link to costs-charges-disclosure (disclosure accessibility maps to Consumer Understanding)
- `wiki/index.md` — added new summary and concept page to "UK — MiFID II / PROD" section

No contradictions with existing wiki content. The existing `prod-product-governance.md` noted portfolio transaction cost omission as a problem; this ingest adds the four specific calculation failure mechanisms and the full disclosure consistency framework that were absent.

Flagged for future ingest:
- MiFID II costs and charges disclosures review — distributor findings (a companion review referenced in the 2019 review covering how distributor firms disclose costs; the 2019 review only covered manufacturers)
- FCA TR 14-07 (2014) — thematic review on clarity of fund charges; established the AMC-as-misleading finding; would complete the historical picture


## 2026-04-13 lint | Lint pass 11 — full wiki scan (43 pages)

Scope: all pages across Consumer Duty, Financial Crime, Payment Services, and MiFID II / PROD sections.

No contradictions found. No stale claims. No orphan pages. Three missing cross-references identified and fixed.

**Fix 1 — `wiki/summaries/mifid-ii-product-governance-review-2021.md` missing links to costs pages:** The 2021 review body text already references the 2019 costs review ("also identified in the FCA's February 2019 costs disclosure review") but had no links to `fca-costs-charges-disclosure-review-2019.md` or `costs-charges-disclosure.md`. Gap introduced when costs pages were added after the MiFID pages. Added to frontmatter `related` and Related Articles.

**Fix 2 — `wiki/summaries/ps22-9-policy-statement.md` missing link to PROD concept page:** Line 80 states "Firms complying with existing PROD... meet the corresponding Duty outcomes" but the page had no link to `prod-product-governance.md`. Every other Consumer Duty page that discusses PROD equivalence now links to the PROD concept page; the primary source summary did not. Added to frontmatter `related` and Related Articles.

**Fix 3 — `wiki/summaries/dear-ceo-letter-wealth-stockbroking-2023.md` missing link to costs-charges-disclosure:** The wealth stockbroking letter contains named failures around opaque fee disclosures and incomplete value chain cost assessment that map directly onto the costs-charges-disclosure framework. Added `costs-charges-disclosure.md` to frontmatter `related` and Related Articles.

Pages modified (3): `wiki/summaries/mifid-ii-product-governance-review-2021.md`, `wiki/summaries/ps22-9-policy-statement.md`, `wiki/summaries/dear-ceo-letter-wealth-stockbroking-2023.md`


## 2026-04-13 ingest | FCA Payment for Order Flow (PFOF) Supervisory Report (April 2019)

Source: `raw/mifid/payment-for-order-flow-pfof.pdf`
Published: April 2019. Supervisory work: information requested from 15 firms; 12 firms visited. Focus: listed derivatives (formerly LIFFE, now Eurex/ICE Futures Europe). Updates Market Watch 56 (September 2018) preliminary findings.

New pages created (2):

- `wiki/summaries/fca-pfof-supervisory-report-2019.md` — full summary: key findings on capacity identification failures, non-exclusive liquidity protocol deficiencies, systems and controls (sub-1% sampling failure), overseas affiliate routing; conclusions and next steps
- `wiki/concepts/payment-for-order-flow.md` — new concept; complete PFOF framework: definition and conflict mechanism; broker transaction lifecycle (Steps 1–8); exclusive vs. non-exclusive liquidity legal distinction; Right of First Refusal as the key marker; four cumulative conditions for dual-sided charging; five named pretextual PFOF structures; overseas affiliate routing as circumvention; SYSC 10 systems and controls obligations

Pages updated:

- `wiki/concepts/prod-product-governance.md` — added link to payment-for-order-flow (SYSC 10 conflicts of interest overlap)
- `wiki/summaries/dear-ceo-letter-wealth-stockbroking-2023.md` — added link to payment-for-order-flow (overtrading/conflicts context)
- `wiki/index.md` — added new summary and concept page to "UK — MiFID II / PROD" section

New topic area introduced: wholesale/ECP broker conduct and order execution conflicts. All prior MiFID II wiki content covered retail investor product governance (PROD 3). This ingest adds the wholesale execution side: PFOF, best execution, inducements, and conflicts in order handling — a distinct area of MiFID II with different regulatory tests.

No contradictions with existing wiki content. SYSC 10 conflicts of interest was mentioned in the 2021 product governance review in the context of product design; this ingest adds the transaction-execution context which is substantively different.

Flagged for future ingest:
- FCA TR 14/13 ("Best execution and payment for order flow", 2013) — the foundational thematic review establishing PFOF incompatibility with retail/professional client business; referenced in §1.5 as the basis from which the 2019 review extends to ECP business
- FCA Market Watch 51 and Market Watch 56 — referenced in the PFOF report as interim communications; would complete the supervisory history


## 2026-04-14 lint | Lint pass 12 — full wiki scan (45 pages)

Scope: all pages across Consumer Duty, Financial Crime, Payment Services, and MiFID II / PROD sections.

No contradictions found. No stale claims. No orphan pages. No missing cross-references.

One category of issue: **stale source counts in `wiki/index.md`** for four Consumer Duty concept pages. Sources were added to these pages during the Consumer Duty implementation review and Dear CEO letter ingests; the index counts were not updated at the time.

**Fix — `wiki/index.md` source count corrections (4 cells):**

| Page | Was | Now | Additional sources |
|------|-----|-----|--------------------|
| `consumer-duty-cross-cutting-rules.md` | 2 | 3 | + Consumer Duty implementation review (February 2024) |
| `consumer-duty-products-services.md` | 3 | 4 | + Consumer Duty implementation review + Dear CEO letter (November 2023) |
| `consumer-duty-consumer-understanding.md` | 3 | 4 | + Consumer Duty implementation review + Dear CEO letter (November 2023) |
| `consumer-duty-consumer-support.md` | 2 | 3 | + Consumer Duty implementation review (February 2024) |

Pages modified (1): `wiki/index.md`


## 2026-04-14 ingest | FCA Assessing Suitability Review — Results (May 2017)

Source: `raw/mifid/assessing-suitability-review.pdf`
Published: May 2017. Assessed 1,142 advice files from 656 firms against COBS suitability and disclosure rules. Advice delivered during 2015 (pre-MiFID II). FCA marked as historical August 2025.

New pages created (2):

- `wiki/summaries/fca-assessing-suitability-review-2017.md` — full summary with prominent pre-MiFID II caveat; sector-wide suitability stats (93.1% suitable, 4.3% unsuitable); two root causes (risk profiling, replacement business); three-part disclosure framework (COBS 6.1A generic/customer-specific, COBS 14 product disclosure, COBS 9.4 suitability report); specific initial disclosure failure modes (hourly rates without time estimates; uninformatively wide ranges); firm-type and size differentials; status: superseded
- `wiki/concepts/advice-suitability-cobs9.md` — new concept page; COBS 9 three-dimension suitability test; risk profiling failure modes; replacement business failure modes; full three-part advisory disclosure framework; sector risk segmentation table; pre-MiFID II caveat throughout

Pages updated (1):

- `wiki/index.md` — added new summary (with [HISTORICAL] flag) and concept page (with [pre-MiFID II baseline] flag) to "UK — MiFID II / PROD" section

No contradictions with existing wiki content. Existing wiki had no coverage of personal advice suitability under COBS 9 — this is an entirely new domain. References to "suitability" in existing pages were in product governance (PROD), Consumer Duty, and CDD contexts; none addressed the COBS 9 personal recommendation framework.

Notable gap flagged: the three-part disclosure framework assessed here (COBS 6.1A / COBS 6.2A / COBS 14 / COBS 9.4) predates MiFID II. Current COBS versions must be verified before operational use.


## 2026-04-14 lint

Scanned all 45 wiki pages (27 concepts, 13 summaries, 4 derived, index, log).

**No broken links.** All 47 unique wikilink targets resolve to existing files.

**No contradictions.** Consumer Duty dates, PROD/Duty equivalence, vulnerability scale data (46%/53%), retail-to-professional uprating (14%), 25% beneficial ownership threshold, DAML consent timelines (7/31/186 days) — all consistent across relevant pages.

**Findings and actions:**

| # | Type | Finding | Action |
|---|------|---------|--------|
| 1 | Near-orphan | `fca-assessing-suitability-review-2017` had 1 inbound link | Fixed — C1–C4 |
| 2 | Near-orphan | `advice-suitability-cobs9` had 1 inbound link | Fixed — C1–C4 |
| 3 | Missing cross-ref | `dear-ceo-letter-wealth-stockbroking-2023` did not link to new suitability pages despite discussing suitability explicitly | Fixed: added both links |
| 4 | Missing cross-ref | `consumer-duty-products-services` did not link to new suitability pages | Fixed: added both links |
| 5 | Missing cross-ref | `prod-product-governance` did not link to new suitability pages | Fixed: added both links |
| 6 | Missing cross-ref | `costs-charges-disclosure` did not link to new suitability pages (advisory disclosure framework) | Fixed: added both links |
| 7 | Missing cross-ref | `consumer-principle` absent from Related Articles of 4 outcome pages | Fixed: added to products-services, price-value, consumer-understanding, consumer-support |
| 8 | Stale metadata | `advice-suitability-cobs9` `effective_date: 2018-01-03` misleadingly implies COBS 9 started with MiFID II | Deferred — user approval pending |
| 9 | Known gap | FCA PEP Treatment Review (July 2024) not yet ingested; flagged inline in `customer-due-diligence` | No action — acknowledged gap |
| 10 | Known gap | FCTR Financial Crime Thematic Reviews not yet ingested; flagged inline in `dear-ceo-letter-wealth-stockbroking-2023` | No action — acknowledged gap |
| 11 | Near-orphan | `fca-pfof-supervisory-report-2019` has 1 inbound link | No action — acceptable for niche summary |
| 12 | Near-orphan | `consumer-understanding-digital-notifications` has 1 inbound link | No action — acceptable for derived page |


## 2026-04-14 ingest | ICO Guide to Lawful Basis (Updated April 2026)

Source: `raw/uk-gdpr/A guide to lawful basis.md` (ICO guidance, updated 02 April 2026 to reflect the Data (Use and Access) Act 2026)

New pages created (2):

- `wiki/summaries/ico-guide-lawful-basis-2026.md` — full summary with prominent ICO guidance citation type caveat (ICO = supervisory authority interpretation, not primary legislation or FCA sourcebook rules); seven Article 6 bases post-DUA Act 2026; recognised legitimate interest (Art. 6(ea)) five pre-approved purposes; necessity test; rights linkage table (erasure/portability/object per basis); basis selection guidance; consent trap prohibition; new purpose compatibility (consent vs. non-consent original basis); documentation and transparency obligations (Art. 13/14, 5(2), 24, 30); dual condition for special category (Art. 9) and criminal offence data (Art. 10)
- `wiki/concepts/uk-gdpr-lawful-basis.md` — new concept page; full treatment of all seven bases; Article 6(ea) recognised legitimate interest detailed with financial services applicability; necessity test; rights matrix; consent trap; new purpose compatibility; Art. 9/10 dual conditions; source note re ICO guidance vs FCA rules throughout

Pages updated (4):

- `wiki/index.md` — added new "UK — Data Protection / ICO" section with entries for both new pages
- `wiki/concepts/vulnerable-customers.md` — added `[[uk-gdpr-lawful-basis]]` to Related Articles
- `wiki/concepts/vulnerability-drivers-and-taxonomy.md` — added `[[uk-gdpr-lawful-basis]]` to Related Articles
- `wiki/concepts/aml-ctf-framework.md` — added `[[uk-gdpr-lawful-basis]]` to Related Articles

No contradictions with existing wiki content. The Article 6/9 references in `vulnerable-customers.md` (TEXAS model, GDPR special category data basis) are fully consistent with the new concept page. The AML/CTF pages reference legal obligation as the basis for AML processing — confirmed correct.

Notable additions to existing wiki coverage:
- **New domain:** First standalone UK GDPR / data protection coverage.
- **DUA Act 2026:** Article 6(ea) recognised legitimate interest — five pre-approved purposes with no balancing test required. Most relevant for financial services: safeguarding (Art. 6(ea)(1)), crime prevention (Art. 6(ea)(3)), sharing with public task organisations incl. FCA/NCA/OFSI (Art. 6(ea)(5)).
- **Consent trap rule:** Explicit ICO prohibition on switching from consent to legitimate interests after withdrawal — operationally significant for firms that default to consent at onboarding.
- **DUA Act not separately ingested:** Act flagged in frontmatter and citation notes; only the ICO's April 2026 guidance update has been ingested. A future ingest of the DUA Act primary legislation would be required for direct statutory citations.


## 2026-04-14 lint

Scanned all 47 wiki pages (28 concepts, 13 summaries, 4 derived, index, log).

**No broken links.** All 47 unique wikilink targets resolve to existing files.

**No contradictions.** DAML consent timelines, beneficial ownership threshold, Consumer Duty dates, vulnerability scale data, Art. 6/9 dual-condition requirement — all consistent across pages.

**Findings and actions:**

| # | Priority | Type | Finding | Action |
|---|----------|------|---------|--------|
| C1 | High | Missing cross-ref | `fg21-1-guidance` has full GDPR/DPA 2018 table row and TEXAS/special category paragraph; no link to new GDPR pages | Fixed: added `[[uk-gdpr-lawful-basis]]` + `[[ico-guide-lawful-basis-2026]]`; updated `last_updated` to 2026-04-14 |
| C2 | Medium | Missing cross-ref | `jmlsg-part-i-guidance` references "GDPR compliance" for record-retention deletion; no link to GDPR pages | Fixed: added `[[uk-gdpr-lawful-basis]]` |
| C3 | Low | Missing cross-ref | `sar-consent-tipping-off` mentions "equivalent data protection duties" (POCA s.333C); `uk-gdpr-lawful-basis` links to it but not vice versa | Fixed: added `[[uk-gdpr-lawful-basis]]` |
| E1 | Low | Near-orphan | `ico-guide-lawful-basis-2026` had 1 inbound link | Resolved by C1 (now 2 inbound links) |
| — | Info | Near-orphan | `fca-pfof-supervisory-report-2019`: 1 inbound; `consumer-understanding-digital-notifications`: 1 inbound | No action — acceptable for niche/derived pages |
| — | Info | Known gap | `Legitimate Interests Assessment (LIA)` — described in `uk-gdpr-lawful-basis` but no standalone concept page | Acknowledged gap |
| — | Info | Known gap | DUA Act 2026 primary legislation, FCA PEP Treatment Review (July 2024), FCTR thematic reviews, MiFID II current handbook | No action — previously flagged |


## 2026-04-14 ingest | ICO Guide to the Data Protection Principles (all seven principles, Art. 5 UK GDPR)

Sources: 8 markdown files in `raw/uk-gdpr/` (overview + one page per principle + accountability principle). Principle (b) updated 23 March 2026 for DUA Act; all other principle pages under ICO review pending DUA Act update.

New pages created (2):

- `wiki/summaries/ico-guide-data-protection-principles.md` — full cluster summary covering all 8 source files; Art. 83(5)(a) highest-tier fines; DUA Act review status noted; principle (b) update highlighted (Annex 2 nine compatible purposes, two-track reuse, five-factor compatibility assessment, Art. 8A); principle (a) three-part structure (lawfulness/fairness/transparency) incl. invisible processing and Jan 2025 Upper Tribunal update; accuracy nuances (historical records, records of mistakes, opinions not inaccurate, credit scores = statistical); storage limitation (no prescribed periods, pseudonymisation not exempt, five justification factors, archiving exception requirements, data sharing deletion/return); principles (f) and accountability noted as stubs pointing to separate ICO guidance; ICO guidance citation type caveat throughout
- `wiki/concepts/uk-gdpr-data-protection-principles.md` — concept page for all seven principles; principle (b) most detailed (Annex 2 table, two-track framework, compatibility assessment factors, new lawful basis requirement); data minimisation ceiling and floor; accuracy definition (DPA 2018 s.205), historical records, error records, opinions, credit scores, proportionality, right to rectification absolute; storage limitation framework (five factors, pseudonymisation, archiving exception, data sharing); integrity and confidentiality and accountability stubs cross-referencing dedicated ICO guidance; financial services examples throughout (CDD/KYC, CCTV retention, debt collection, recruitment)

Pages updated (1):

- `wiki/index.md` — added entries for both new pages under "UK — Data Protection / ICO" (Summaries and Concepts subsections)

No contradictions with existing wiki content. The purpose limitation compatibility framework in principle (b) (Annex 2 compatible purposes) is consistent with the recognised legitimate interest basis in `uk-gdpr-lawful-basis.md` — both introduced by the same DUA Act, complementary frameworks. AML/CTF pages remain correctly citing legal obligation as the Art. 6 basis for AML processing.

Notable additions not previously in the wiki:
- **Principle (a) fairness test** — reasonable expectations analysis; specific consideration for vulnerable groups
- **Invisible processing concept** — when third-party data collection means individuals have no knowledge processing is occurring; proportionate additional transparency steps required
- **Purpose limitation — DUA Act Annex 2** — nine pre-approved compatible purposes; two-track reuse framework distinguishing consent from non-consent original basis; five-factor compatibility assessment; Art. 8A reference
- **Accuracy definition (DPA 2018 s.205)** — incorrect or misleading as to matter of fact; historical records and error records permissible; opinions standard; credit scores are statistical not opinion
- **Storage limitation — no prescribed periods** — five-factor justification framework; pseudonymisation not exempt; archiving/research/statistics exception requires sole purpose + appropriate safeguards
- **Principle (f) / Accountability stubs** — both are one-paragraph ICO pages pointing to separate guidance; separately flagged in both new pages to avoid agent confusion

Flagged for future ingest:
- ICO Security guidance — principle (f) stub points to this as the detailed source
- ICO Accountability and Governance guidance — accountability principle stub points to this
- DUA Act 2026 primary legislation — cited in principles but not yet ingested


## 2026-04-14 lint (pass 13)

Scanned all 49 wiki pages (29 concepts, 14 summaries, 4 derived, index, log) including 2 pages added this session.

**No broken links.** All wikilink targets resolve to existing files.

**No contradictions.** Purpose limitation Annex 2 compatible purposes and recognised legitimate interest Art. 6(ea) pre-approved purposes (from `uk-gdpr-lawful-basis`) are complementary DUA Act frameworks — consistent across pages.

**Findings and actions:**

| # | Priority | Type | Finding | Action |
|---|----------|------|---------|--------|
| C1 | High | Near-orphan / missing cross-ref | `uk-gdpr-data-protection-principles` had 1 inbound link; `uk-gdpr-lawful-basis` is sibling concept (Art. 6 within Art. 5 framework) with no link to it | Fixed: added `[[uk-gdpr-data-protection-principles]]` to frontmatter + Related Articles of `uk-gdpr-lawful-basis` |
| C2 | High | Near-orphan / missing cross-ref | `ico-guide-data-protection-principles` had 1 inbound link; `ico-guide-lawful-basis-2026` is sibling summary with no link to it | Fixed: added `[[ico-guide-data-protection-principles]]` to frontmatter + Related Articles of `ico-guide-lawful-basis-2026` |
| C3 | Medium | Missing cross-ref | `fg21-1-guidance` links to lawful basis pages but not to principles pages (FG21/1 Appendix 1 is a GDPR appendix; accuracy and data minimisation apply to vulnerability data) | Fixed: added `[[uk-gdpr-data-protection-principles]]` + `[[ico-guide-data-protection-principles]]` to frontmatter + Related Articles |
| C4 | Medium | Missing cross-ref | `vulnerable-customers` mentions Art. 6/Art. 9 obligations but not the broader Art. 5 principles framework | Fixed: added `[[uk-gdpr-data-protection-principles]]` to frontmatter + Related Articles |
| C5 | Low | Missing cross-ref | `aml-ctf-framework` already links to `uk-gdpr-lawful-basis`; storage limitation principle (Art. 5(1)(e)) directly governs AML record retention (five-year/ten-year periods) | Fixed: added `[[uk-gdpr-data-protection-principles]]` to frontmatter + Related Articles |
| C6 | Low | Missing cross-ref | `customer-due-diligence` linked from `uk-gdpr-data-protection-principles` (CDD as data minimisation example); reverse link absent | Fixed: added `[[uk-gdpr-data-protection-principles]]` to frontmatter + Related Articles |

Final inbound link counts: `uk-gdpr-data-protection-principles` = 6; `ico-guide-data-protection-principles` = 3. No orphan pages.

Flagged for future ingest (pre-existing + new):
- ICO Security guidance — principle (f) stub points to this
- ICO Accountability and Governance guidance — accountability principle stub points to this
- DUA Act 2026 primary legislation — cited in principles guidance but not yet ingested as primary source
- FCA PEP Treatment Review (July 2024), FCTR 15, JMLSG Part III, FATF, SM&CR/Conduct Rule 6 — pre-existing gaps



## 2026-04-14 ingest | ICO Guide to Individual Rights

Source: `raw/uk-gdpr/A guide to individual rights.pdf` (v0.0.2, 19 May 2023, 87pp)

Pages created (6):
- `wiki/summaries/ico-guide-individual-rights.md`
- `wiki/concepts/uk-gdpr-individual-rights-overview.md`
- `wiki/concepts/uk-gdpr-automated-decision-making.md`
- `wiki/concepts/uk-gdpr-right-to-object.md`
- `wiki/concepts/uk-gdpr-right-to-erasure.md`
- `wiki/concepts/uk-gdpr-right-to-be-informed.md`

Pages updated (1):
- `wiki/index.md` — added 1 summary + 5 concepts under UK — Data Protection / ICO

Key additions to wiki:
1. Art. 22 automated decision-making and profiling framework (entirely absent previously): solely automated + legal/similarly significant effects restriction; 3 permitted grounds; special category data extra restriction; DPIA mandatory; meaningful logic/human review obligations; general profiling rules
2. Art. 12 cross-cutting request-handling framework: 1-month calendar month deadline; 28-day operational target; verbal requests valid; manifestly unfounded (two tests) and excessive (substance/overlap) definitions; proportionate ID verification
3. Art. 21 right to object: absolute direct marketing right (suppression not erasure); compelling legitimate grounds test for LI/public task; Art. 21(6) research restriction; proactive first-communication notification obligation
4. Art. 13/14 mandatory privacy notice content: 13 items (Art. 13); Art. 14 adds categories + source; timing rules; meaningful automated decision-making disclosure mandatory for all profiling not just Art. 22; delivery methods (layered, just-in-time, dashboards)
5. Art. 17 right to erasure: 6 triggers; 5 exemptions — legal obligation (17(3)(b)) and legal claims (17(3)(e)) directly protect CDD/AML records; third-party and backup/processor notification obligations

Coverage note: Right of access (Art. 15/SAR) is a stub in this document — dedicated ICO SAR guidance needed.

Contradictions with existing wiki: None. Art. 17(3)(b) legal obligation exemption is fully consistent with the 5-year/10-year MLR retention periods already documented in `aml-ctf-framework` and `customer-due-diligence`.

## 2026-04-14 lint (pass 14)

Scanned all 55 wiki pages (34 concepts, 17 summaries, 4 derived, index, log) including 6 pages added this session.

**No broken links.** All wikilink targets resolve to existing files.

**No contradictions.** Art. 17(3)(b) erasure exemption (legal obligation) is fully consistent with MLR Reg 40 retention periods in `aml-ctf-framework` and `customer-due-diligence`. Art. 22 DPIA requirement is consistent with accountability principle in `uk-gdpr-data-protection-principles`.

**Findings and actions:**

| # | Priority | Type | Finding | Action |
|---|----------|------|---------|--------|
| C1 | High | Missing cross-ref | `uk-gdpr-lawful-basis` has a rights matrix but no links to the individual rights concept pages it describes | Fixed: added `[[uk-gdpr-individual-rights-overview]]`, `[[uk-gdpr-right-to-object]]`, `[[uk-gdpr-automated-decision-making]]` to frontmatter + Related Articles |
| C2 | High | Missing cross-ref | `uk-gdpr-data-protection-principles` storage limitation principle directly links to erasure right; no cross-ref | Fixed: added `[[uk-gdpr-individual-rights-overview]]`, `[[uk-gdpr-right-to-erasure]]` |
| C3 | Medium | Missing cross-ref | `aml-ctf-framework` documents MLR Reg 40 retention periods; Art. 17(3)(b) erasure exemption directly protects these | Fixed: added `[[uk-gdpr-right-to-erasure]]` |
| C4 | Medium | Missing cross-ref | `customer-due-diligence` documents CDD record retention; same Art. 17(3)(b) connection | Fixed: added `[[uk-gdpr-right-to-erasure]]` |
| C5 | Medium | Missing cross-ref | `vulnerable-customers` covers Art. 22 vulnerable group checks; no link to new Art. 22 page | Fixed: added `[[uk-gdpr-automated-decision-making]]` |
| C6 | Low | Missing cross-ref | `fg21-1-guidance` Appendix 1 covers GDPR obligations; rights handling framework connects | Fixed: added `[[uk-gdpr-individual-rights-overview]]` |

Flagged for future ingest (updated list):
- ICO SAR guidance — right of access (Art. 15) is a stub in the individual rights guide; dedicated guidance needed
- ICO Security guidance — principle (f) stub points to this
- ICO Accountability and Governance guidance — accountability principle stub points to this
- DUA Act 2026 primary legislation — cited across multiple pages but not ingested as primary source
- FCA PEP Treatment Review (July 2024), FCTR 15, JMLSG Part III, FATF, SM&CR/Conduct Rule 6 — pre-existing gaps

## 2026-04-14 lint (pass 15)

Scanned all 55 wiki pages (34 concepts, 17 summaries, 4 derived, index, log).

**No broken links. No orphan pages. No contradictions.**

**Findings and actions:**

| # | Priority | Type | Finding | Action |
|---|----------|------|---------|--------|
| C1 | High | Missing cross-ref | `ico-guide-lawful-basis-2026` and `ico-guide-data-protection-principles` — sibling ICO guides — do not link to `ico-guide-individual-rights` despite covering the same regulatory framework; lawful basis directly determines which rights apply | Fixed: added `[[ico-guide-individual-rights]]` to frontmatter + Related Articles of both sibling guides |
| C2 | Medium | Missing cross-ref / near-orphan | `fca-pfof-supervisory-report-2019` had only 1 inbound link (from `payment-for-order-flow` concept); `prod-product-governance.md` links to the concept but not to the enforcement report directly | Fixed: added `[[fca-pfof-supervisory-report-2019]]` to `prod-product-governance.md` frontmatter + Related Articles; resolves E1 near-orphan |
| E2 | N/A | Near-orphan (no action) | `consumer-understanding-digital-notifications` — 1 inbound link from parent concept page; derived page, acceptable |

Post-fix inbound counts: `fca-pfof-supervisory-report-2019` = 2; `ico-guide-individual-rights` = 7.


## 2026-04-14 ingest | ICO Guide to Subject Access

Source: `raw/uk-gdpr/A guide to subject access.md` (ICO Guide to Subject Access, ico.org.uk, clipped 2026-04-14)

Pages created (2):
- `wiki/summaries/ico-guide-subject-access.md`
- `wiki/concepts/uk-gdpr-subject-access.md`

Pages updated (3):
- `wiki/index.md` — added ico-guide-subject-access summary row; added uk-gdpr-subject-access concept row; updated ico-guide-individual-rights summary row (SAR stub note updated to link to new pages)
- `wiki/concepts/uk-gdpr-individual-rights-overview.md` — SAR stub note updated from "requires separate ingest" to link to `[[uk-gdpr-subject-access]]`
- `wiki/summaries/ico-guide-individual-rights.md` — coverage note (line 36) and right-of-access table row (line 43) updated to link to new SAR pages

Key additions to wiki:
1. **Enforced SAR = criminal offence (DPA 2018):** Requiring an individual to make a SAR to obtain their criminal record, health data, or other personal data as a condition of employment or contract is a criminal offence. Operationally significant for pre-employment screening, underwriting, and credit decisions.
2. **Clarification pause:** Where large volumes of data make the scope unclear, the response clock can be paused (not merely extended) while the controller seeks clarification. Supplementary information must still be provided within 1 month regardless.
3. **DPA 2018 Schedules 2–3 SAR-specific exemptions:** A dedicated exemption regime applies only to SARs, distinct from the general UK GDPR framework. Most financially relevant: crime/taxation (general and risk assessment), legal professional privilege, regulatory functions, management information, negotiations with requester, confidential references.
4. **Third-party SAR authority:** Burden of providing evidence of authority sits with the third party, not the controller. No response before satisfactory authority evidence received.
5. **Child SAR competence framework:** Competence-based — respond directly to a child if they understand their rights; parent/guardian can only act with child's authorisation or where evidently in the child's best interests.

Coverage note: ICO sub-pages on each exemption, identity verification mechanics, reasonable search methodology, format/security of delivery, and special cases (credit, health, educational, social work data) have not been ingested. Primary ICO source should be consulted for those details.

Contradictions with existing wiki: None. DPA 2018 crime/taxation SAR exemption is fully consistent with the existing CDD/AML/fraud processing rationale in `aml-ctf-framework` and `customer-due-diligence`.


## 2026-04-14 lint (pass 16)

Scanned all 57 wiki pages (34 concepts, 15 summaries, 4 derived, index, log) including 2 pages added this session.

**No broken links.** All wikilink targets resolve to existing files.

**No contradictions.** DPA 2018 crime/taxation SAR exemption is fully consistent with MLR Reg 40 record retention in `aml-ctf-framework` and `customer-due-diligence`. Enforced SAR criminal offence is consistent with the DAML consent framing in `sar-consent-tipping-off` (distinct regimes — no conflict).

**Findings and actions:**

| # | Priority | Type | Finding | Action |
|---|----------|------|---------|--------|
| C1 | High | Frontmatter gap | `uk-gdpr-individual-rights-overview` body references `[[uk-gdpr-subject-access]]` but frontmatter `related` was missing both SAR pages | Fixed: added `concepts/uk-gdpr-subject-access.md` + `summaries/ico-guide-subject-access.md` to frontmatter; added `[[uk-gdpr-subject-access]]` + `[[ico-guide-subject-access]]` to Related Articles |
| C2 | High | Missing cross-ref | `ico-guide-individual-rights` body links to both SAR pages in text but frontmatter + Related Articles were absent | Fixed: added both SAR pages to frontmatter + Related Articles |
| C3 | Medium | Missing cross-ref | `aml-ctf-framework` already links to `uk-gdpr-right-to-erasure` for AML record protection; DPA 2018 crime/taxation SAR exemption is the parallel protection from subject access requests | Fixed: added `uk-gdpr-subject-access` to frontmatter + Related Articles |
| C4 | Medium | Missing cross-ref | `customer-due-diligence` same rationale — CDD/KYC records are the primary target of the crime/taxation SAR exemption | Fixed: added `uk-gdpr-subject-access` to frontmatter + Related Articles |

Post-fix inbound link counts: `uk-gdpr-subject-access` = 9; `ico-guide-subject-access` = 5. No near-orphans. No orphan pages.

Flagged for future ingest (pre-existing + new):
- ICO SAR sub-pages — identity verification mechanics, reasonable search methodology, each DPA 2018 exemption in detail, format/security of delivery, special cases (credit, health, educational, social work data) not yet ingested
- ICO Security guidance — principle (f) stub
- ICO Accountability and Governance guidance — accountability principle stub
- DUA Act 2026 primary legislation — cited across multiple pages
- FCA PEP Treatment Review (July 2024), FCTR 15, JMLSG Part III, FATF, SM&CR/Conduct Rule 6 — pre-existing gaps


## 2026-04-14 lint (pass 17)

Scanned all 57 wiki pages (35 concepts, 15 summaries, 4 derived, index, log).

**No broken links.** All wikilink targets resolve to existing files.

**No contradictions.** DAML 7/31/186-day periods, Art. 22 solely-automated restriction, 1-month calendar month deadline, 25% beneficial ownership threshold, consent trap prohibition, Art. 17(3)(b) erasure exemption — all consistent across pages.

**No orphan pages.** Minimum inbound link count: 3.

**1 near-orphan (no action):** `consumer-understanding-digital-notifications` — 1 inbound link; derived page, documented as acceptable in prior passes.

**Findings and actions:**

| # | Priority | Type | Finding | Action |
|---|----------|------|---------|--------|
| C1 | High | Missing cross-ref | `uk-gdpr-right-to-be-informed` missing link to `uk-gdpr-subject-access` — SAR response requires supplementary information equivalent to Art. 13/14 content; subject access page cites this page for that purpose; reverse absent | Fixed: added `concepts/uk-gdpr-subject-access.md` to frontmatter + `[[uk-gdpr-subject-access]]` to Related Articles |
| C2 | Medium | Missing cross-ref | `jmlsg-part-i-guidance` missing link to `fca-cdd-findings-multi-firm-2026` — review evaluates compliance against JMLSG guidance; `fcg3-money-laundering-terrorist-financing` already links to the review; JMLSG summary did not | Fixed: added `summaries/fca-cdd-findings-multi-firm-2026.md` to frontmatter + `[[fca-cdd-findings-multi-firm-2026]]` to Related Articles |

Pages modified (2): `wiki/concepts/uk-gdpr-right-to-be-informed.md`, `wiki/summaries/jmlsg-part-i-guidance.md`

Flagged for future ingest (pre-existing gaps, no new additions):
- ICO SAR sub-pages (identity verification, reasonable search, each DPA 2018 exemption, delivery security, special cases)
- ICO Security guidance, ICO Accountability and Governance guidance
- DUA Act 2026 primary legislation
- FCA PEP Treatment Review (July 2024), FCTR 15, JMLSG Part III, FATF, SM&CR/Conduct Rule 6


## 2026-04-15 ingest | ICO, A Guide to Data Security

Source: `raw/uk-gdpr/A guide to data security.md` (ICO guidance, ico.org.uk; under review following DUA Act 2026)
Scope: Article 5(1)(f) security principle + Article 32 (security of processing). Does NOT cover breach notification Arts. 33–34.

Pages created (2):
- `wiki/summaries/ico-guide-data-security.md` — full summary: Art. 32 four-part framework; risk-based standard; organisational and technical measures; PCI-DSS sector interaction; processor security obligations; mandatory testing; staff training and DPA 2018 criminal liability; DUA Act under-review status; scope boundary (Arts. 33–34 not covered)
- `wiki/concepts/uk-gdpr-security.md` — new concept page; full Art. 32 operational framework; CIA triad and resilience detailed; pseudonymisation/encryption as examples not requirements; mandatory testing obligation; PCI-DSS as mitigating factor in enforcement; processor security — first Art. 28 content in wiki (sufficient guarantees, Art. 32 contractual requirement, audit rights); Art. 32(4) staff training with criminal liability note; explicit breach notification scope boundary

Pages updated (2):
- `wiki/concepts/uk-gdpr-data-protection-principles.md` — principle (f) stub replaced with substantive summary (Art. 32 sub-obligations, risk-based standard, PCI-DSS, processor security, testing, breach notification gap noted); new source added (9 sources total); uk-gdpr-security + ico-guide-data-security added to frontmatter and Related Articles; Key Points for Agents updated for principle (f) and accountability
- `wiki/index.md` — new summary row (ico-guide-data-security) and concept row (uk-gdpr-security) added under UK — Data Protection / ICO; uk-gdpr-data-protection-principles source count updated 8 → 9

Notes:
- **No contradictions with existing wiki pages.** Principle (f) and Art. 32 content are entirely consistent with uk-gdpr-data-protection-principles and uk-gdpr-lawful-basis.
- **First Art. 28 content in wiki:** The processor security obligations section (sufficient guarantees, contractual Art. 32 requirement, audit/inspection rights) introduces Art. 28 material. A dedicated controller/processor concept page should be created when the ICO's Controllers and Processors guidance is ingested.
- **PCI-DSS interaction** is new to the wiki. Directly applicable to fintech firms processing card data. Not present in any prior source.
- **Mandatory testing obligation (Art. 32(1)(d))** is entirely new to the wiki and applies to all organisations.
- **Staff criminal liability (DPA 2018)** for deliberate unauthorised access/disclosure is new to the wiki.
- **Breach notification (Arts. 33–34) is explicitly out of scope** — 72-hour ICO reporting clock and individual notification threshold have no wiki coverage. Next ICO source to ingest in this series.
- DUA Act review status noted: guidance under review since 19 June 2025; content may be updated.

Flagged for future ingest (updated list):
- **ICO personal data breach notification guidance** — Arts. 33–34; 72-hour ICO reporting obligation; individual notification threshold; high-priority gap
- ICO Accountability and Governance guidance — DPO, DPIA, RoPA, data protection by design (Art. 25)
- ICO Controllers and Processors guidance — Art. 28 in full
- DUA Act 2026 primary legislation
- FCA PEP Treatment Review (July 2024), FCTR 15, JMLSG Part III, FATF, SM&CR/Conduct Rule 6 — pre-existing gaps


## 2026-04-15 lint (pass 18)

Scanned all 59 wiki pages (37 concepts, 16 summaries, 4 derived, index, log) including 2 pages added in the preceding ingest session.

**No broken links.** All wikilink targets resolve to existing files.

**No contradictions.** Art. 32 sub-obligations, pseudonymisation/storage limitation distinction, Art. 22 DPIA requirement, CIA triad — all consistent across pages.

**No stale claims.** DUA Act under-review status explicitly flagged in both new security pages.

**No orphan pages.** New pages: `uk-gdpr-security` = 3 inbound links; `ico-guide-data-security` = 3 inbound links.

Issues found and fixed (4 total across 4 pages):

| # | Priority | Type | Finding | Fix |
|---|----------|------|---------|-----|
| C1 | High | Missing cross-ref | `ico-guide-data-protection-principles` — principle (f) stub section had no link to the security pages now ingested; all sibling ICO summaries link to each other's counterparts | Added `[[uk-gdpr-security]]` + `[[ico-guide-data-security]]` to frontmatter + Related Articles |
| C2 | Medium | Missing cross-ref | `uk-gdpr-automated-decision-making` — "Data security" row in Art. 22 mandatory requirements table; `uk-gdpr-security` listed this page in its related; reverse was absent | Added `[[uk-gdpr-security]]` to frontmatter + Related Articles |
| C3 | Medium | Missing cross-ref | `ico-guide-individual-rights` — mentions "risk-proportionate data security" as Art. 22 mandatory obligation; `ico-guide-data-security` is the sibling ICO guide covering that obligation | Added `[[uk-gdpr-security]]` + `[[ico-guide-data-security]]` to frontmatter + Related Articles |
| E1 | Low | Informational cross-ref | `operational-resilience` (SYSC 15A) — cyber incident testing scenarios overlap conceptually with Art. 32(1)(b)–(c) CIA+resilience and Art. 32(1)(d) mandatory testing; same firm subject to both regimes | Added `[[uk-gdpr-security]]` to frontmatter + Related Articles with note distinguishing SYSC 15A from Art. 32 |

Post-fix inbound link counts: `uk-gdpr-security` = 7; `ico-guide-data-security` = 5. No near-orphans.

Known gaps (no new action — previously flagged):
- ICO personal data breach notification (Arts. 33–34) — highest priority next source
- ICO Accountability and Governance guidance — DPO, DPIA, RoPA, Art. 25
- ICO Controllers and Processors guidance — Art. 28 in full
- DUA Act 2026 primary legislation
- FCA PEP Treatment Review (July 2024), FCTR 15, JMLSG Part III, FATF, SM&CR/Conduct Rule 6


## 2026-04-15 ingest | ICO Personal Data Breaches: A Guide (Arts. 33–34)

Source: `raw/uk-gdpr/Personal data breaches_ a guide.md` (ICO guidance, ico.org.uk; DUA Act update noted: PECR timescale changed from 24h to 72h on 20 August 2025)

Pages created (2):
- `wiki/summaries/ico-guide-personal-data-breaches.md` — full summary: breach definition (availability/integrity/confidentiality); two-tier risk assessment; Art. 33 mechanics (72-hour clock, 4 content elements, phased notification, processor obligation); Art. 34 (high risk threshold, no fixed clock, protective advice, ICO power to compel); Art. 33(5) mandatory breach register (all breaches, no threshold); Art. 83(4) fine tier £8.7m/2%; parallel obligations table (PECR/eIDAS/NIS); post-breach SAR surge
- `wiki/concepts/uk-gdpr-personal-data-breaches.md` — new concept page; full operational framework for Arts. 33–34; step-by-step decision tree; phased notification mechanics; processor Art. 33(2) obligations; AML/regulatory intersection (FCA Principle 11 / OFSI); Art. 83(4) vs Art. 83(5)(a) fine tier distinction; PECR/eIDAS/NIS parallel obligations; post-breach SAR surge contingency

Pages updated (4):
- `wiki/concepts/uk-gdpr-security.md` — scope boundary note updated to link to new page; frontmatter + Related Articles updated; body "What This Page Does Not Cover" section updated with link and full summary of what breach notification covers
- `wiki/summaries/ico-guide-data-security.md` — scope boundary note updated to link; frontmatter + Related Articles updated
- `wiki/concepts/uk-gdpr-data-protection-principles.md` — principle (f) scope boundary updated; frontmatter + Key Points + Related Articles updated
- `wiki/index.md` — new summary row (ico-guide-personal-data-breaches) and concept row (uk-gdpr-personal-data-breaches) added; ico-guide-data-security and uk-gdpr-security rows updated to remove "NOT covered" note

Notes:
- **No contradictions with existing wiki pages.** Breach definition (availability/integrity/confidentiality) is fully consistent with Art. 32 CIA triad in uk-gdpr-security.
- **Art. 83(4) fine tier is new to the wiki.** Existing wiki documented only Art. 83(5)(a) (£17.5m/4% for principles breaches). Art. 83(4) (£8.7m/2% for notification failures) is distinct and lower. Both can apply to the same incident simultaneously.
- **PECR 72-hour obligation is the first PECR content in the wiki.** Updated by DUA Act on 20 August 2025 from 24 hours. Relevant to fintech firms operating as communications service providers.
- **Art. 33(5) mandatory breach register** has no risk threshold — applies to all breaches including non-reportable ones. Primary ICO audit target. Not previously covered in the wiki.
- **Processor Art. 33(2) obligation** extends the Art. 28 processor content introduced in uk-gdpr-security. The controller's 72-hour clock runs from when the controller becomes aware, which may be when the processor notifies them.
- **AML/regulatory intersection flagged in concept page:** A breach affecting CDD records or SAR-related data may simultaneously trigger FCA Principle 11 / SUP 15.3 and OFSI notifications — separate from ICO notification.

Flagged for future ingest (updated list):
- ICO Accountability and Governance guidance — DPO, DPIA (Art. 35), RoPA (Art. 30), data protection by design (Art. 25) — now the highest-priority remaining UK GDPR gap
- ICO Controllers and Processors guidance — Art. 28 in full
- DUA Act 2026 primary legislation
- FCA PEP Treatment Review (July 2024), FCTR 15, JMLSG Part III, FATF, SM&CR/Conduct Rule 6 — pre-existing gaps


## 2026-04-15 lint (pass 19)

Scanned all 61 wiki pages (37 concepts, 17 summaries, 4 derived, index, log) including 2 pages added in the preceding ingest session.

**No contradictions.** No stale claims. No broken wikilinks. No orphan pages.

Issues found and fixed (4 total across 5 pages):

| # | Priority | Type | Finding | Fix |
|---|----------|------|---------|-----|
| C1 | Medium | Incomplete cross-ref | `ico-guide-data-protection-principles` — Art. 83(5)(a) referenced as "highest tier" in Key Points with no mention of Art. 83(4) lower tier now documented in the wiki | Added Art. 83(4) note to Key Points; added `concepts/uk-gdpr-personal-data-breaches.md` to frontmatter + `[[uk-gdpr-personal-data-breaches]]` to Related Articles |
| C2 | Medium | Incomplete Key Point | `uk-gdpr-data-protection-principles` — "Breach of Art. 5 = highest fine tier" Key Point made no reference to Art. 83(4) lower tier now documented | Added Art. 83(4) parenthetical to Key Points bullet |
| C3 | Medium | Missing reverse cross-ref | `aml-ctf-framework` — listed in `uk-gdpr-personal-data-breaches` related (breach affecting SAR/CDD data triggers dual ICO + FCA/OFSI notifications) but no reverse link | Added `concepts/uk-gdpr-personal-data-breaches.md` to frontmatter + `[[uk-gdpr-personal-data-breaches]]` to Related Articles |
| C4 | Medium | Missing reverse cross-ref | `customer-due-diligence` — same rationale as C3; CDD records and SAR-related data are the most common AML-intersecting breach data types | Added `concepts/uk-gdpr-personal-data-breaches.md` to frontmatter + `[[uk-gdpr-personal-data-breaches]]` to Related Articles |

Post-fix inbound link counts: `uk-gdpr-personal-data-breaches` = 9; `ico-guide-personal-data-breaches` = 4. No near-orphans.

Known gaps (no new action — previously flagged):
- ICO Accountability and Governance guidance — DPO, DPIA (Art. 35), RoPA (Art. 30), Art. 25 — highest-priority remaining UK GDPR gap
- ICO Controllers and Processors guidance — Art. 28 in full
- DUA Act 2026 primary legislation
- FCA PEP Treatment Review (July 2024), FCTR 15, JMLSG Part III, FATF, SM&CR/Conduct Rule 6 — pre-existing gaps

## 2026-04-15 ingest | FCA Guide for Solo-Regulated Firms — SM&CR (Part One)

Source: `raw/smcr/guide-for-fca-solo-regulated-firms.pdf` (FCA, July 2019, Part One §§1–12, pp. 5–52)
Part Two (pp. 53–74) not ingested — historical APR conversion content with no current operational relevance.
SM&CR replaced the APR for solo-regulated firms on **9 December 2019**.

Pages created (4):
- `wiki/summaries/fca-guide-solo-regulated-firms.md`
- `wiki/concepts/smcr-senior-managers-regime.md`
- `wiki/concepts/smcr-certification-regime.md`
- `wiki/concepts/smcr-conduct-rules.md`

Pages updated (5):
- `wiki/derived/pi-emi-consumer-duty-and-sanctions-obligations.md` — corrected §2.3: removed incorrect statement that SM&CR Conduct Rule 6 applies to PI/EMI individuals; added explicit SM&CR scope note (FSMA-only; PIs/EMIs outside scope); added [[smcr-senior-managers-regime]] cross-ref
- `wiki/concepts/consumer-principle.md` — added SM&CR PI/EMI scope note to Conduct Rule 6 section; added [[smcr-conduct-rules]] and [[smcr-senior-managers-regime]] to Related Articles
- `wiki/concepts/aml-ctf-framework.md` — added [[smcr-senior-managers-regime]] and [[smcr-conduct-rules]] to Related Articles (MLRO = SMF17; PR(d) financial crime is a Core PR)
- `wiki/concepts/prod-product-governance.md` — added [[smcr-senior-managers-regime]] to Related Articles (SM&CR personal liability referenced in Key Points)
- `wiki/index.md` — added new UK — SM&CR section with 1 summary and 3 concept entries

Notes:
- **PI/EMI exclusion correction:** The `pi-emi-consumer-duty-and-sanctions-obligations.md` page incorrectly stated that SM&CR Conduct Rule 6 applies to PI/EMI staff. This has been corrected. SM&CR is FSMA-only — PIs and EMIs not otherwise FSMA-authorised have no SM&CR obligations. Consumer Duty governance obligations (PS22/9 §13) still apply to those firms at the firm/board level.
- The SM&CR guide (July 2019) predates Consumer Duty (July 2022) — Conduct Rule 6 is not in the source document. It is documented in the concepts page with a clear post-publication note citing PS22/9 §§13.16–13.22.
- No contradictions with existing wiki pages beyond the PI/EMI correction above. SM&CR was referenced in 10+ existing pages without backing content — all now have a target to link to.
- The source guide does not cover the PRA's application of SM&CR to dual-regulated firms (banks, insurers) — that is a separate PRA Rulebook topic not ingested.

Flagged for future ingest (updated list):
- ICO Accountability and Governance guidance — DPO, DPIA (Art. 35), RoPA (Art. 30), Art. 25 — highest-priority remaining UK GDPR gap
- ICO Controllers and Processors guidance — Art. 28 in full
- DUA Act 2026 primary legislation
- FCA Approach Document for Payment Services (already in raw/) — completes payment services section
- FCA PEP Treatment Review (July 2024), FCTR 15, JMLSG Part III — pre-existing gaps

## 2026-04-15 lint (pass 20)

Scanned all 65 wiki pages (41 concepts, 18 summaries, 4 derived, index, log) including 4 SM&CR pages added earlier this session.

**No contradictions.** No stale claims. No orphan pages. No PI/EMI SM&CR scope errors remaining.

Issues found and fixed (6 total across 7 pages):

| # | Priority | Type | Finding | Fix |
|---|----------|------|---------|-----|
| F1 | High | Frontmatter/body mismatch | `consumer-principle.md` — body Related Articles added [[smcr-conduct-rules]] and [[smcr-senior-managers-regime]] this session but frontmatter `related:` not updated to match | Added both to frontmatter `related:` |
| F2 | High | Frontmatter/body mismatch | `aml-ctf-framework.md` — body Related Articles added [[smcr-senior-managers-regime]] and [[smcr-conduct-rules]] this session but frontmatter `related:` not updated | Added both to frontmatter `related:` |
| F3 | High | Frontmatter/body mismatch | `prod-product-governance.md` — body Related Articles added [[smcr-senior-managers-regime]] this session but frontmatter `related:` not updated | Added to frontmatter `related:` |
| F4 | High | Missing cross-reference | `ps22-9-policy-statement.md` — cites SM&CR Conduct Rule 6 (§13.12–§13.22) but had no SM&CR pages in frontmatter or Related Articles | Added `concepts/smcr-conduct-rules.md` and `concepts/smcr-senior-managers-regime.md` to both frontmatter and Related Articles |
| F5 | High | Missing cross-reference | `mifid-ii-product-governance-review-2021.md` — cites SM&CR individual liability risk (SYSC 9.1.1R) but had no SM&CR pages in frontmatter or Related Articles | Added `concepts/smcr-senior-managers-regime.md` to both frontmatter and Related Articles |
| F6 | Low | Ambiguous reference | `prod-product-governance.md` — RPPD referenced without clarifying its nature | Added parenthetical: "supplementary COBS-based guidance, not primary binding rules" |

Post-fix inbound link counts for new SM&CR pages:
- `smcr-senior-managers-regime`: 8 inbound links
- `smcr-certification-regime`: 5 inbound links
- `smcr-conduct-rules`: 6 inbound links
- `fca-guide-solo-regulated-firms`: 6 inbound links

Known gaps (no new action — previously flagged):
- ICO Accountability and Governance guidance — DPO, DPIA (Art. 35), RoPA (Art. 30), Art. 25 — highest-priority remaining UK GDPR gap
- ICO Controllers and Processors guidance — Art. 28 in full
- DUA Act 2026 primary legislation
- FCA Approach Document for Payment Services (already in raw/) — completes payment services section
- FCA PEP Treatment Review (July 2024), FCTR 15, JMLSG Part III — pre-existing gaps

## 2026-04-16 ingest | ICO Guide to Accountability and Governance

Source: `raw/uk-gdpr/Guide to accountability and governance.md` (ICO guidance, top-level overview page; dedicated sub-pages not ingested)

Note: This guidance is under review following the Data (Use and Access) Act 2025 (in force 19 June 2025). The DPbD sub-section was updated 5 February 2026; all other sections remain pending ICO update.

Pages created (6):
- `wiki/summaries/ico-guide-accountability-governance.md`
- `wiki/concepts/uk-gdpr-data-protection-by-design.md` (Art. 25 — DPbD as legal requirement; updated Feb 2026 for DUAA)
- `wiki/concepts/uk-gdpr-dpia.md` (Arts. 35–36 — when mandatory, minimum content, prior ICO consultation, dual function)
- `wiki/concepts/uk-gdpr-dpo.md` (Arts. 37–39 — mandatory conditions, tasks, governance requirements, conflict of interest)
- `wiki/concepts/uk-gdpr-records-of-processing.md` (Art. 30 RoPA — who must maintain, content, plus consent/breach/DPIA documentation obligations)
- `wiki/concepts/uk-gdpr-processor-contracts.md` (Art. 28 — mandatory written contracts, eight minimum terms, sufficient guarantees, sub-processor rules)

Pages updated (2):
- `wiki/concepts/uk-gdpr-data-protection-principles.md` — accountability section expanded from stub to full cross-references; "not yet ingested" note removed
- `wiki/summaries/ico-guide-data-protection-principles.md` — accountability section updated; cross-references to new pages added

Contradictions with existing wiki:
- No contradictions. `[[uk-gdpr-security]]` already covers Art. 28 processor security from a security angle; `[[uk-gdpr-processor-contracts]]` covers Art. 28 from a broader contractual/accountability angle. The two pages are complementary.
- Art. 28 was previously described as "first Art. 28 content in wiki" in the security page index entry — that note remains accurate for security-angle content; this ingest adds the broader Art. 28 governance framework.

Gaps remaining (sub-pages not ingested):
- ICO DPbD detailed guidance (updated Feb 2026 for DUAA — highest priority)
- ICO Documentation sub-page (exact Art. 30 RoPA content requirements)
- ICO Contracts sub-page (full mandatory Art. 28 contractual terms)
- ICO DPIAs sub-page (ICO's published list of always-require-DPIA processing operations)
- ICO DPO sub-page (granular DPO obligations)
- ICO Codes of Conduct and Certification sub-pages (not yet ingested)

## 2026-04-16 lint

Scope: all wiki pages (69 pages: 45 concepts, 17 summaries, 4 derived, index, log)

Findings and fixes applied:

| # | Type | Location | Finding | Fix |
|---|------|----------|---------|-----|
| 1 | Contradiction | 6 pages | "Data (Use and Access) Act 2026" — ICO source confirms correct name is "Data (Use and Access) Act 2025" (Royal Assent 19 June 2025) | Global replace across `uk-gdpr-lawful-basis.md`, `uk-gdpr-data-protection-principles.md`, `uk-gdpr-security.md`, `ico-guide-lawful-basis-2026.md`, `ico-guide-data-security.md`, `ico-guide-data-protection-principles.md` |
| 2 | Stale claim | `summaries/ico-guide-data-security.md` line 27 | "covered in a separate ICO guide not yet ingested" — `ico-guide-personal-data-breaches.md` was ingested | Updated to `[[ico-guide-personal-data-breaches]]` |
| 3 | Stale claim | `concepts/uk-gdpr-security.md` line 158 | "dedicated controller/processor concept page should be created" — `uk-gdpr-processor-contracts.md` now exists | Updated to cross-reference `[[uk-gdpr-processor-contracts]]` |
| 4 | Missing cross-ref | `concepts/uk-gdpr-automated-decision-making.md` | DPIA mentioned as mandatory for Art. 22 with no `[[uk-gdpr-dpia]]` wikilink | Added to Related Articles |
| 5 | Missing cross-ref | `concepts/uk-gdpr-security.md` | Art. 28 processor security covered, no `[[uk-gdpr-processor-contracts]]` link | Added to Related Articles |
| 6 | Missing cross-ref | `concepts/uk-gdpr-personal-data-breaches.md` | Art. 28 written contract mentioned, no `[[uk-gdpr-processor-contracts]]` link | Added to Related Articles |
| 7 | Missing cross-ref | `concepts/uk-gdpr-lawful-basis.md` | Consent records and documentation obligations mentioned, no `[[uk-gdpr-records-of-processing]]` link | Added to Related Articles |

No orphan pages. No concepts mentioned without a dedicated page.

## 2026-04-16 ingest | FCA Approach Document — Payment Services and Electronic Money (v7, March 2026)

Source: `raw/psr-payment-services/payment-services-electronic-money-approach.pdf` (FCA guidance, version 7, March 2026, 296 pages)

Chapters read: 3 (authorisation — context only), 8 (conduct), 9 (capital), 10 (safeguarding), 13 (reporting), 17 (PISP/AISP/open banking), 18 (operational and security risk), 20 (SCA/authentication). Chapters skipped: 6, 7, 11, 12, 14, 15, 16, 19 (financial crime — already in wiki).

Pages created (6):
- `wiki/summaries/fca-approach-payment-services-electronic-money.md` — master summary across all chapters
- `wiki/concepts/psr-sca-authentication.md` — SCA three-factor requirement, dynamic linking, 9 SCA-RTS exemptions (Arts. 10–18), TRA fraud rate thresholds, monitoring obligations
- `wiki/concepts/psr-regulatory-reporting.md` — 10+ mandatory forms (FSA056, REP017, REP018, REP020, DISP 1AD, REP-CRIM); event notifications NOT002–005; major incident 4-hour rule
- `wiki/concepts/psr-open-banking-pisp-aisp.md` — ASPSP non-discrimination, dedicated interface, contingency mechanism, exemption criteria (Art. 33(6)), AISP 90-day consent, PISP restrictions, sensitive payment data, NOT003/NOT005
- `wiki/concepts/psr-unauthorised-transaction-liability.md` — immediate refund, £35 cap, fraud delay mechanism (reg 86(2A)–(2D)), burden of proof, PISP liability chain, SCA liability shift
- `wiki/concepts/psr-capital-requirements.md` — initial capital (PI €20k/€50k/€125k; EMI €350k); Methods A/B/C (PIs), Method D (EMIs); FCA ±20% adjustment; CET1/AT1/T2

Pages updated (2):
- `wiki/concepts/safeguarding-pis-emis.md` — added: obligation on receipt, named segregation account requirements (no competing interests, no sharing, acknowledgement letter full terms), secure liquid assets, PESAR, asset pool insolvency priority, FCA NOT002 notification obligation
- `wiki/concepts/psr-emi-prudential.md` — added cross-reference to new `psr-capital-requirements` page; updated related articles

Contradictions with existing wiki:
- None. The existing `safeguarding-pis-emis.md` was consistent with Ch 10 — this ingest adds detail not previously captured. The existing `psr-emi-prudential.md` referenced capital methods without specifics — this ingest adds the dedicated `psr-capital-requirements.md` page and cross-links.

Known gaps not yet ingested:
- FCA PEP Treatment Review (July 2024) — PEP-specific guidance
- JMLSG Part III — sector-specific guidance for payment institutions
- FCTR 15 — thematic review referenced in financial crime materials
- SCA-RTS primary text — Approach Document Ch. 20 is interpretive guidance; the SCA-RTS itself is not yet ingested as a source

## 2026-04-17 lint

Scope: full wiki — all 76 pages (50 concepts, 22 summaries, 4 derived).

Findings summary:

| # | Priority | Issue | File(s) | Action |
|---|----------|-------|---------|--------|
| 1 | HIGH | Stale claim: DUA Act described as "currently progressing through Parliament" — in force since 19 June 2025 | `summaries/ico-guide-individual-rights.md` | Fixed — updated to reflect Royal Assent date and ICO review status |
| 2 | HIGH | 6 UK GDPR concept pages cite Article numbers only — no ICO guidance section citations in `(Source §X.Y)` format | `concepts/uk-gdpr-security.md` and 5 others (uk-gdpr-data-protection-by-design, uk-gdpr-dpo, uk-gdpr-dpia, uk-gdpr-processor-contracts, uk-gdpr-records-of-processing) | Deferred — root cause is ICO accountability/governance sub-pages not yet individually ingested. Fix requires ingest of ICO sub-pages to obtain section-level citations |
| 3 | MEDIUM | Frontmatter/body mismatch: `[[uk-gdpr-processor-contracts]]` in body but absent from `related:` frontmatter | `concepts/uk-gdpr-security.md` | Fixed — added to `related:` frontmatter |
| 4 | MEDIUM | `status: current` with `effective_date: 2026-08-04` (future) — document not yet published | `summaries/fca-cdd-findings-multi-firm-2026.md` | Fixed — changed to `status: pending` |
| 5 | MEDIUM | Consumer Duty discussed at length but no links to Consumer Duty concept pages | `concepts/psr-sca-authentication.md` | Fixed — added `consumer-duty-overview` and `consumer-duty-consumer-support` to `related:` and Related Articles |
| 6 | LOW | Consumer Duty "Relationship to Consumer Duty" section but no direct links to Consumer Duty concept pages | `concepts/agent-distributor-oversight.md` | Fixed — added `consumer-duty-overview` and `consumer-duty-products-services` to `related:` and Related Articles |
| 7 | LOW | PEPs lack a dedicated concept page (discussed across 6 pages; domestic PEP regime change Jan 2024; FCA PEP review not yet ingested) | Wiki-wide | Deferred — requires ingest of FCA PEP Treatment Review (July 2024) |
| 8 | LOW | Financial Promotions, AML Record Keeping, International Data Transfers, Best Execution lack dedicated pages | Wiki-wide | Deferred — noted for future ingest planning |
| 9 | LOW | ICO "under review" notices (4 pages) pending DUA Act guidance updates | Multiple ICO pages | Monitor — no action until ICO publishes updates |

All clear: no broken wikilinks, no orphan pages, no contradictions, no index coverage gaps, all pages have Key Points for Agents and Related Articles.

Fixes applied: 5 pages updated (items 1, 3, 4, 5, 6). 4 items deferred (items 2, 7, 8, 9).

## 2026-04-18 ingest | CONC 1 — Application and Purpose and Guidance on Financial Difficulties

Source: `raw/fca-conc/CONC 1 Application and purpose and guidance on financial difficulties.pdf` (FCA Handbook, April 2026 version, 10pp)

Pages created (3):
- `wiki/summaries/conc1-application-purpose.md`
- `wiki/concepts/conc-scope-and-application.md`
- `wiki/concepts/conc-financial-difficulty-indicators.md`

Index updated: new section "UK — FCA Consumer Credit (CONC)" added to `wiki/index.md`.

Notes:
- No factual contradictions with existing wiki pages.
- Potential gap resolved: `consumer-duty-overview.md` already listed CONC in its sector scope table (FG22/5 §2.3). The missing element was the CONC-side cross-link. New pages carry `consumer-duty-overview.md` in their `related` fields and explicitly cite CONC 1.1.4G as the CONC-internal Consumer Duty confirmation. No edit to `consumer-duty-overview.md` required.
- MCD article 3(1)(b) provisions (CONC 1.2.8R–1.2.11G) summarised but not given a dedicated concept page — complexity is low-frequency; captured in the summary page for reference.
- CONC 1.3.1G financial difficulty indicators will gain additional context when CONC 6 and 7 are ingested; pages structured to receive those links.

## 2026-04-18 lint

3 findings. 2 fixes applied. 1 deferred.

| # | Severity | Finding | Fix |
|---|---|---|---|
| 1 | MEDIUM | Stale forward-tense deadline in `summaries/dear-ceo-letter-payments-portfolio-2023.md:84` — "firms must have completed" re 31 March 2025 deadline (now passed) | Updated to past tense; added note that deadline passed and post-deadline deficiencies are treated as current failures |
| 2 | LOW | `concepts/consumer-duty-overview.md` did not reference new CONC pages — one-directional link only | Added `concepts/conc-scope-and-application.md` to `related` field and Related Articles section |
| 3 | LOW | 4 ICO pages flagged "under review" pending DUA Act guidance updates | Deferred — no ICO update published |

Structural checks all clear: no broken wikilinks, no orphan pages, no broken related-field paths, no contradictions, all pages structurally complete.

## 2026-04-18 ingest | CONC 5 — Responsible Lending

Source: `raw/fca-conc/CONC 5 Responsible lending.pdf` (FCA Handbook, April 2026 version, 28pp)

Sections covered: CONC 5.2A (creditworthiness assessment — consumer credit lenders), CONC 5.4 (conduct of business: credit brokers), CONC 5.5A (creditworthiness assessment: P2P agreements). CONC 5.1 and 5.3 were deleted in prior amendments; CONC 5.2 was replaced by 5.2A.

Pages created (2):
- `wiki/summaries/conc5-responsible-lending.md`
- `wiki/concepts/conc-creditworthiness-assessment.md`

Index updated: 1 summary row and 1 concept row added to the UK — FCA Consumer Credit (CONC) section.

Notes:
- No contradictions with existing wiki pages.
- CONC 5.5A P2P assessment obligations incorporated into the single creditworthiness concept page (not a separate page) as recommended — the frameworks are near-identical with one material difference (CONC 5.5A.37R active lender disclosure vs CONC 5.2A.36R simple refusal).
- `uk-gdpr-automated-decision-making.md` already notes auto credit refusal as a "similarly significant" Art. 22 effect — this is consistent with the creditworthiness assessment framework. Cross-link added via `related` field in new concept page.
- Credit broker suitability obligation (CONC 5.4) is brief and captured within the creditworthiness concept page rather than a separate page — it is not substantive enough to warrant standalone treatment.

## 2026-04-18 lint

4 findings. 2 fixes applied. 2 deferred.

| # | Severity | Finding | Fix |
|---|---|---|---|
| 1 | LOW | Key Points bullet in `summaries/dear-ceo-letter-payments-portfolio-2023.md:120` still said "mapping/testing by 31 March 2025" in deadline-future framing — body was fixed in prior lint but bullet wasn't | Updated bullet to note deadline has passed and firms that missed it remain in breach |
| 2 | LOW | `concepts/conc-scope-and-application.md` had no cross-link to `conc-creditworthiness-assessment.md` — predated that page | Added to `related` field and Related Articles section |
| 3 | LOW | ICO "under review" pages pending DUA Act updates | Deferred — no ICO update published |
| 4 | INFO | 8 files reference CONC 6, CONC 7, DMP, CPA, pre-contractual requirements without dedicated pages | Deferred to CONC 7 ingest |

Structural checks all clear: no broken paths, no orphans, no broken wikilinks. Consumer Duty implementation dates (31 July 2023/2024) confirmed as correctly stated historical facts — no change required.

## 2026-04-18 ingest | CONC 7 — Arrears, Default and Recovery (including Repossessions)

Source: `raw/fca-conc/CONC 7 Arrears, default and recovery (including repossessions).pdf` (FCA Handbook, April 2026 version, 49pp)

Sections covered: CONC 7.1 (application), 7.2 (arrears/default policies), 7.3 (forbearance — including CONC 7.3.5G R interest freeze rule), 7.4 (debt status information), 7.5 (pursuing repayments), 7.6 (CPA exercise), 7.7 (interest and charges), 7.8 (jurisdictional), 7.9 (contact conduct), 7.10 (mental capacity), 7.11 (authority/status disclosures), 7.12 (lender responsibilities), 7.13 (data accuracy and outsourcing), 7.14 (disputed/deadlocked debt), 7.15 (statute barred debts), 7.16 (data sharing), 7.17–7.19 (P2P arrears and default notices).

Pages created (3):
- `wiki/summaries/conc7-arrears-default-recovery.md` — full chapter summary across all 19 sections
- `wiki/concepts/conc-cpa-rules.md` — CONC 7.6 CPA rules in full: pre-conditions, proportionality obligation, financial difficulty suspension, two-strike HCSTC rule, instalment rule, no partial amounts, cancellation
- `wiki/concepts/conc-debt-recovery-treatment.md` — CONC 7 treatment standards: written policies, forbearance hard rule, interest freeze on active arrangements (7.3.5G R), charges limits, mental capacity mandatory suspension, post-assignment lender responsibility, disputed debt burden-of-proof rule, statute barred debt regime, data accuracy obligations

Index updated: 1 summary row and 2 concept rows added to the UK — FCA Consumer Credit (CONC) section.

Notes:
- No contradictions with existing wiki pages.
- **Key structural distinction:** CONC 7.3.5G R (interest/charges freeze on active repayment arrangements) is a hard rule — the 'G' in its paragraph number does not indicate guidance; the 'R' marker does. This was important to capture correctly.
- **Statute barred debt:** Material jurisdictional difference captured — in Scotland the debt ceases to exist on expiry; in England/Wales/NI it remains recoverable subject to conditions.
- **CPA two-strike rule scope:** CONC 7.6.12R applies to high-cost short-term credit only. The general proportionality and financial difficulty rules (CONC 7.6.3R, 7.6.7R) apply to all credit types.
- **CONC 7.1.3A R:** CPA rules (CONC 7.6) apply to certain exempt agreements (article 60C(4A) RAO) — relevant to BNPL products. Captured in conc-cpa-rules.md.
- The prior lint gap "8 files reference CONC 6, CONC 7, DMP, CPA without dedicated pages" is now partially resolved. CPA and arrears/default treatment are now covered. CONC 6 (post-contractual), DMP standards, and pre-contractual disclosure obligations remain without dedicated pages.

Flagged for future ingest:
- CONC 3 (Financial promotions — consumer credit) — not yet ingested
- CONC 4 (Pre-contractual requirements) — pre-contractual disclosure gap remains
- CONC 6 (Post-contractual obligations, including variation of credit agreements, settlement) — referenced in CONC 7.5.1G but not yet ingested

---

## 2026-04-19 lint

**Scope:** Full wiki — 87 pages (2 root, 55 concepts, 4 derived, 26 summaries)

**Check 1 — Wikilink integrity and orphan detection**
- Broken wikilinks: 0
- Orphan pages (0 inbound): 0
- Near-orphans (1 inbound):
  - `consumer-understanding-digital-notifications` — derived page, single inbound from parent; previously flagged as acceptable
  - `conc5-responsible-lending` — resolved during this lint pass by adding inbound from [[conc7-arrears-default-recovery]]

**Check 2 — Frontmatter `related:` ↔ body wikilink consistency**
- Issues pre-fix: 75 body→FM gaps across ~25 pages; 2 FM→body gaps (psr-emi-prudential in 2 PSR pages)
- Issues post-fix: 0

**Check 3 — Missing cross-references (new CONC 7 pages)**
- conc7-arrears-default-recovery: now has 6 inbound links (conc-cpa-rules, conc-creditworthiness-assessment, conc-debt-recovery-treatment, conc-financial-difficulty-indicators, conc-scope-and-application, conc5-responsible-lending)
- conc-cpa-rules: now has 3 inbound links (conc-debt-recovery-treatment, conc-financial-difficulty-indicators, conc7-arrears-default-recovery)
- conc-debt-recovery-treatment: now has 5 inbound links (conc-cpa-rules, conc-scope-and-application, conc7-arrears-default-recovery, smcr-senior-managers-regime, vulnerable-customers)

**Files modified (34 total):**
FM + body: conc-scope-and-application, conc-financial-difficulty-indicators, conc-creditworthiness-assessment, conc5-responsible-lending, vulnerable-customers, smcr-senior-managers-regime, conc7-arrears-default-recovery, psr-regulatory-reporting, fca-approach-payment-services-electronic-money
FM only: consumer-duty-consumer-support, consumer-duty-consumer-understanding, consumer-duty-products-services, consumer-duty-price-value, prod-product-governance, costs-charges-disclosure, dear-ceo-letter-wealth-stockbroking-2023, pi-emi-consumer-duty-and-sanctions-obligations, psr-sca-authentication, aml-ctf-framework, sar-consent-tipping-off, vulnerability-drivers-and-taxonomy, jmlsg-part-i-guidance, fg21-1-guidance, uk-gdpr-data-protection-principles, uk-gdpr-lawful-basis, uk-gdpr-automated-decision-making, uk-gdpr-processor-contracts, uk-gdpr-dpia, uk-gdpr-personal-data-breaches, uk-gdpr-records-of-processing, uk-gdpr-dpo, uk-gdpr-data-protection-by-design, ico-guide-data-protection-principles, ico-guide-accountability-governance

**Check 4 — Concepts without pages (future ingests)**
- CONC 2 (pre-contractual disclosure), CONC 3 (financial promotions), CONC 4 (pre-contractual explanations), CONC 6 (post-contractual requirements), DMP standards — no source documents yet ingested; not actioned this pass

**Final state:** 0 broken wikilinks, 0 orphans, 1 acceptable near-orphan (derived page)

## 2026-04-19 ingest | CONC 6 — Post Contractual Requirements (April 2026)

Source: `raw/fca-conc/CONC 6 Post contractual requirements.pdf` (FCA, April 2026, 20pp)

Pages written:
- `summaries/conc6-post-contractual-requirements.md` (new)

Pages updated:
- `concepts/conc-financial-difficulty-indicators.md` — added CONC 6.7.11G "at risk of financial difficulties" definition as new section; updated sources, related, Key Points, Related Articles
- `concepts/conc-cpa-rules.md` — added conc6-post-contractual-requirements to FM related and Related Articles
- `index.md` — added CONC 6 summary row; updated conc-financial-difficulty-indicators summary line

No contradictions with existing wiki pages. The HCSTC two-refinancing cap (6.7.23R) is explicitly complementary to the CPA two-strike rule (7.6.12R) already documented in conc-cpa-rules.md.

Concepts flagged in prior lint as lacking pages — CONC 6 — now resolved.
Remaining: CONC 2 (pre-contractual disclosure), CONC 3 (financial promotions), CONC 4 (pre-contractual explanations).

## 2026-04-19 lint

**Scope:** 90 pages (88 wiki + index + log)

**Script fix this pass:** orphan/near-orphan detection now counts markdown `[text](path.md)` links (from index.md) in addition to `[[wikilinks]]` and FM `related:` entries. Previously `derived/consumer-understanding-digital-notifications.md` appeared as a near-orphan despite being listed in index.md.

**Results:** 0 broken wikilinks · 0 orphans · 0 near-orphans · 0 FM→body gaps · 0 body→FM gaps

**Final state:** clean

## 2026-04-19 ingest | CONC 4 — Pre-Contractual Requirements (April 2026)

Source: `raw/fca-conc/CONC 4 Pre-contractual requirements.pdf` (FCA, April 2026, 32pp)

Pages written:
- `summaries/conc4-pre-contractual-requirements.md` (new)
- `concepts/conc-discretionary-commission-arrangements.md` (new)

Pages updated:
- `concepts/conc-cpa-rules.md` — added conc4-pre-contractual-requirements to FM and body
- `concepts/conc-creditworthiness-assessment.md` — added conc4-pre-contractual-requirements to FM and body
- `summaries/conc5-responsible-lending.md` — added conc4-pre-contractual-requirements and conc-discretionary-commission-arrangements to FM and body
- `index.md` — added CONC 4 summary row and DCA concept row

No contradictions with existing wiki pages. CONC 4.6.2R pre-contract CPA disclosure complements (and precedes) the CONC 7.6 post-contract CPA rules already in conc-cpa-rules.md. CONC 4.2.15R(8) BNPL explanation obligation is the pre-contract counterpart to CONC 6.7.16AR promotional rate reminder already in conc6-post-contractual-requirements.md.

Concepts flagged in prior lint as lacking pages: CONC 6 and CONC 4 now resolved. Remaining: CONC 2 (pre-contractual disclosure), CONC 3 (financial promotions).

## 2026-04-19 lint

**Scope:** 92 pages (90 wiki + index + log)

**Results:** 0 broken wikilinks · 0 orphans · 0 near-orphans · 0 FM→body gaps · 0 body→FM gaps

**Final state:** clean

## 2026-04-20 ingest | CONC 2 — Conduct of Business Standards: General (April 2026)

Source: `raw/fca-conc/CONC 2 Conduct of business standards_ general.pdf` (FCA, April 2026, 40pp)

Pages written:
- `summaries/conc2-conduct-of-business-general.md` (new)
- `concepts/conc-mental-capacity-guidance.md` (new)
- `concepts/conc-broker-unfair-practices.md` (new)

Pages updated:
- `concepts/conc-creditworthiness-assessment.md` — added conc-mental-capacity-guidance and conc2-conduct-of-business-general to FM and body
- `concepts/conc-cpa-rules.md` — added conc2-conduct-of-business-general to FM and body
- `concepts/conc-financial-difficulty-indicators.md` — added conc2-conduct-of-business-general to FM and body
- `concepts/vulnerable-customers.md` — added conc-mental-capacity-guidance to FM and body
- `index.md` — added CONC 2 summary row, mental capacity concept row, broker unfair practices concept row

No contradictions with existing wiki pages. CONC 2.10 mental capacity guidance fills a gap referenced in 7 existing pages (creditworthiness assessment, debt recovery treatment, arrears/default recovery, CPA rules, financial difficulty indicators, CONC 5, CONC 7) that all referred to "CONC 2.10" without a concept page to resolve the reference. CONC 2.5.8R broker unfair practices complements (and is distinct from) the DCA prohibition in conc-discretionary-commission-arrangements.md — both concern broker conduct but at different levels of specificity.

Remaining CONC ingest: CONC 3 (financial promotions).

## 2026-04-20 lint

**Scope:** 91 pages

**Results:** 0 broken wikilinks · 0 orphans · 0 near-orphans · 0 FM→body gaps · 0 body→FM gaps

**Final state:** clean

## 2026-04-20 ingest | CONC 3 — Financial Promotions and Communications with Customers (April 2026)

Source: `raw/fca-conc/CONC 3 Financial promotions and communications with customers.pdf` (FCA, April 2026, 40pp)

Pages created (3):
- `wiki/summaries/conc3-financial-promotions.md`
- `wiki/concepts/conc-financial-promotions-cfnm.md`
- `wiki/concepts/conc-representative-example-apr.md`

Pages updated (4):
- `wiki/concepts/conc-scope-and-application.md` — added conc3-financial-promotions + conc-financial-promotions-cfnm to FM related and body wikilinks
- `wiki/concepts/conc-broker-unfair-practices.md` — added conc3-financial-promotions + conc-financial-promotions-cfnm to FM related and body wikilinks
- `wiki/index.md` — added CONC 3 summary row + 2 new concept rows
- `wiki/log.md` — this entry

Key content:
- CONC 3.3.1R: five-element CFNM standard; comparisons rule (1B); no-credit-regardless (3.3.3R); BNPL promotional rate omission rule (3.3.11AR); overdraft = "borrowing" (3.3.12R); 9 named unfair practice examples (3.3.10G)
- CONC 3.4.1R: HCSTC mandatory verbatim risk warning (exact text); prominent requirement; no paraphrase
- CONC 3.5.5R: 8-element representative example; equal prominence; "representative example" label; no less prominence than incentives
- CONC 3.5.7R: three APR triggers — restricted audience implication; favourable comparison; incentive to apply (incl. speed/ease of application)
- CONC 3.5.9R: APR formatting ("%APR"; "variable"; "representative"; overdraft comparison statement)
- CONC 3.5.12R: five restricted expressions (unsecured); CONC 3.6.8R adds three (secured)
- CONC 3.6.5R: three verbatim land-secured warnings (standard; debt consolidation; equity release/interest roll-up); foreign currency variant
- CONC 3.7: broker promotions — extent of powers; legal name; broker-not-lender identification; dual-role disclosure
- CONC 3.8.2R: three lender prohibitions — pre-completed amounts; equity-only implication; known-unsuitable promotion
- CONC 3.9.3R: debt counsellor 16-item mandatory disclosure; CONC 3.9.5R: five prohibitions; CONC 3.9.7R: look-alike website + SEO manipulation prohibition
- CONC 3.10.3G: CCA s.49 criminal offence — canvassing borrower-lender agreements off trade premises; umbrella requests invalid
- CONC 3.11.2R: cannot approve financial promotions for personal visits, telephone conversations, or interactive dialogues

CONC chapter ingest complete. All 7 CONC chapters (1–7) now ingested.

## 2026-04-20 lint

**Scope:** 94 pages

**Results:** 0 broken wikilinks · 0 orphans · 0 near-orphans · 0 FM→body gaps · 0 body→FM gaps

**Final state:** clean

## 2026-04-20 eval verification | evals/questions.yaml — 8 flagged items

Verified all 8 items flagged in `notes_for_reviewer` via FCA Handbook WebSearch and direct wiki reads.

**CONFIRMED correct (no changes to required_facts):**
- E006 — CONC 6.7.11G "one or more" confirmed; scope (6.7.7R / 6.7.10R only) confirmed
- E008 — CONC 6.7.5R formula confirmed: 1% of total outstanding balance (not just principal)
- H001 — 'pre-approved' for unsecured HCSTC: confirmed via 3.3.3R/3.3.1R, NOT 3.5.12R
- H003 — article 60C(4A) RAO confirmed by WebSearch
- E004/H002 — CONC 7.6.12R(5) confirmed: refinancing is a precondition (firm contact + express consent + refinancing all required)

**CORRECTIONS made:**
- M008 required_facts updated: CONC 2.4.2R mechanism is lender→broker→customer (or lender→customer direct); disclosure includes name + address including email; obligation is proactive on decline (not on request)
- H005 required_facts and citations updated: 'must engage FCA before withdrawal' claim unverifiable (PS22/9 PDF unreadable); reanchored to PS22/9 §6.9 and §6.10 which are confirmed; 'must engage FCA' removed pending manual verification
- H005 notes_for_reviewer updated to flag manual check needed for PS22/9 §10.10

**Wiki fix applied:**
- `concepts/conc-cpa-rules.md` Key Points: corrected internal contradiction — "resets on forbearance but not on refinance" was wrong; updated to reflect that 7.6.12R(5) also allows reset via firm contact + express consent + refinancing

All `notes_for_reviewer` fields updated to VERIFIED status or flagged with residual uncertainty.

## 2026-04-21 lint (pass 22)

**Scope:** 95 pages (91 wiki pages from prior session + 4 new PRIN pages)

**Check 1 — Wikilink integrity:** PASS. One non-actionable broken link in `log.md` line 7 (`[[wikilinks]]` — meta-text, not an internal link). No broken wikilinks in any wiki page.

**Check 2 — Orphan/near-orphan detection:** PASS. All pages including new PRIN pages have inbound references. No orphans, no near-orphans.

**Check 3 — Frontmatter ↔ body consistency (Related Articles scope only):** PASS. No FM→body or body→FM gaps in the `## Related Articles` sections.

**Check 4 — New PRIN pages cross-reference audit:** ACTION TAKEN. All 11 proposed fixes applied.

Issues found and fixed (11 total across 11 pages):

| # | File | Fix |
|---|------|-----|
| C1 | `concepts/consumer-duty-overview.md` | Added `[[prin2a-consumer-duty]]`, `[[prin-principles-overview]]` to FM + body |
| C2 | `concepts/consumer-duty-cross-cutting-rules.md` | Added `[[prin2a-consumer-duty]]` to FM + body |
| C3 | `concepts/consumer-duty-products-services.md` | Added `[[prin2a-consumer-duty]]` to FM + body |
| C4 | `concepts/consumer-duty-price-value.md` | Added `[[prin2a-consumer-duty]]` to FM + body |
| C5 | `concepts/consumer-duty-consumer-understanding.md` | Added `[[prin2a-consumer-duty]]` to FM + body |
| C6 | `concepts/consumer-duty-consumer-support.md` | Added `[[prin2a-consumer-duty]]` to FM + body |
| C7 | `summaries/ps22-9-policy-statement.md` | Added `[[prin2a-consumer-duty]]`, `[[prin-principles-overview]]` to FM + body |
| C8 | `summaries/fg22-5-guidance.md` | Added `[[prin2a-consumer-duty]]` to FM + body |
| C9 | `concepts/conc-scope-and-application.md` | Added `[[prin3-rules-about-application]]` to FM + body |
| C10 | `derived/pi-emi-consumer-duty-and-sanctions-obligations.md` | Added `[[prin3-rules-about-application]]`, `[[prin2a-consumer-duty]]` to FM + body |
| C11 | `concepts/smcr-senior-managers-regime.md` | Added `[[prin1-2-introduction-principles]]` to FM + body |

Post-fix inbound link counts for new PRIN pages:
- `prin2a-consumer-duty`: 10 inbound links
- `prin3-rules-about-application`: 4 inbound links
- `prin-principles-overview`: 4 inbound links
- `prin1-2-introduction-principles`: 3 inbound links

**Final state:** 0 broken wikilinks · 0 orphans · 0 near-orphans · 0 FM/body gaps

## 2026-04-20 ingest | FCA Handbook — PRIN 1, 2, 2A, 3 (Principles for Businesses)

Sources:
- `raw/fca-handbook/PRIN 1 Introduction.pdf` (11pp) — application/purpose, fit and proper, group activities, worldwide scope, breach consequences, ECP Annex
- `raw/fca-handbook/PRIN 2 The Principles.pdf` (4pp) — the 12 Principles hard rule table
- `raw/fca-handbook/PRIN 2A The Consumer Duty.pdf` (41pp) — full Consumer Duty sourcebook
- `raw/fca-handbook/PRIN 3 Rules about application.pdf` (12pp) — who/what/where Principles apply

Pages created (4):
- `wiki/summaries/prin1-2-introduction-principles.md` — PRIN 1.1 (application, purpose, fit and proper, group activities, worldwide scope, breach consequences); PRIN 1.2 (clients and Principles, acting through agent); PRIN 1 Annex 1 (ECP classification — 8 eligible types, large corporate test, written notice requirements); PRIN 2.1.1R (all 12 Principles table)
- `wiki/summaries/prin2a-consumer-duty.md` — PRIN 2A in full: three cross-cutting rules; PRIN 2A.2.26R (cross-cutting rules exhaust P12); products and services outcome; price and value outcome; consumer understanding outcome; consumer support outcome; monitoring and assessment; PRIN 2A.8.4R (annual governing body outcomes review); PRIN 2A.9 distribution chains — PRIN 2A.9.4R (information sharing), PRIN 2A.9.6R (manufacturer monitoring), PRIN 2A.9.17R (FCA notification duty); PRIN 2A.10 (closed products); PRIN 2A.11.4R (due diligence on business acquisition); PRIN 2A.12 (cumulative relationship lens)
- `wiki/summaries/prin3-rules-about-application.md` — PRIN 3.1.1AR (EMIs/PIs/RAISPs within PRIN); PRIN 3.1.8G (PSR/EMD conflict resolution); PRIN 3.2.6R (P12 activity scope — 8 sourcebooks); PRIN 3.2.7R (distribution chain scoping); PRIN 3.2.8R (P12 outer boundary); PRIN 3.2.10R (P6/P7 displacement by P12); PRIN 3.3.1R (territorial scope — "located" vs "habitually resident"); PRIN 3.4.-1R (ECP unavailable for credit/PSR/EMD); PRIN 3.4.3AR (guarantors as retail customers); PRIN 3.4.4R (no private right of action)
- `wiki/concepts/prin-principles-overview.md` — all 12 Principles; territorial reach table; P6/P7 displacement; group activities; P12 activity scope; ECP business; no private right of action; EMIs/PIs/RAISPs within PRIN

Pages updated (2):
- `wiki/concepts/consumer-principle.md` — updated frontmatter (added PRIN sources; updated last_updated to 2026-04-20); updated P6/P7 section to add PRIN 3.2.10R citation as the binding rule; added 5 new sections: outer scope boundary (PRIN 3.2.8R), cross-cutting rules exhaust P12 (PRIN 2A.2.26R), guarantors as retail customers (PRIN 3.4.3AR), no private right of action (PRIN 3.4.4R), FCA notification duty in distribution chains (PRIN 2A.9.17R); updated Key Points for Agents and Related Articles
- `wiki/index.md` — added new "UK — FCA Principles for Businesses (PRIN)" section (3 summaries + 1 concept) before the Consumer Duty section; updated consumer-principle.md index summary to reflect new content and source count (1 → 8)

Notes:
- **Primary contradictions/gaps resolved:** The existing `consumer-principle.md` attributed P6/P7 disapplication to PS22/9 §4.12 only, without citing the binding hard rule PRIN 3.2.10R. Both citations now present. No factual contradiction — the policy statement and the rule are consistent.
- **PRIN 3.4.4R (no private right of action)** was entirely absent from the wiki. This is the most operationally significant addition: PRIN/Consumer Duty breaches do not give retail customers a FSMA s.138D damages claim. Consumer remedies are FOS, FCA enforcement, and separate private law claims.
- **PRIN 3.4.3AR (guarantors)** was entirely absent. Guarantors under regulated credit/consumer hire/P2P agreements are retail customers for P12/PRIN 2A — even though CONC's habitual residence test (CONC 1.2.5R) contains no equivalent extension. The two tests operate independently.
- **PRIN 3.3.1R ("located" vs "habitually resident")** was absent. P12 applies where retail customers are *located* in the UK — a wider territorial trigger than CONC 1.2.5R's habitual residence test. `conc-scope-and-application.md` continues to be correct on CONC's test; the PRIN 3.3.1R test applies separately for P12 scope.
- **PRIN 2A.2.26R (cross-cutting rules exhaust P12)** was absent — there is no residual P12 obligation beyond PRIN 2A.2–2A.6. This eliminates potential over-reach in compliance assessments that treat Principle 12 text as a source of additional obligations beyond the PRIN 2A rules.
- **PRIN 2A.9.17R (FCA notification duty)** was absent — a firm in a distribution chain that becomes aware another firm may be breaching P12/PRIN 2A must notify the FCA immediately, with no materiality threshold.
- **PRIN 3.1.1AR (EMIs/PIs/RAISPs within PRIN)** confirms that payment institutions and e-money institutions are expressly brought within PRIN — not merely by PSR/EMD obligations but by a hard rule in PRIN itself. `conc-scope-and-application.md` and `pi-emi-consumer-duty-and-sanctions-obligations.md` remain consistent — this adds the PRIN-side source rule.
- PRIN 2A is the Handbook binding form of the Consumer Duty. Existing Consumer Duty pages (based on PS22/9 and FG22/5) were consistent with PRIN 2A but lacked PRIN citations for hard-rule obligations. The new PRIN 2A summary page adds those citations; existing concept pages were not rewritten as they remain factually accurate.

Flagged for future ingest:
- Pre-existing gaps (FCTR 15, JMLSG Part III, FCA PEP Treatment Review July 2024, FATF) — no change

## 2026-04-21 ingest | FCA Handbook — DISP 1 Treating Complainants Fairly (April 2026)

Source: `raw/fca-handbook/DISP 1 Treating complainants fairly.pdf` (FCA Handbook, April 2026, 74pp)

Sections covered: DISP 1.1 (scope — including PSP/EMI extension and DCA motor finance carve-out), DISP 1.1A (MiFID complaints), DISP 1.2 (consumer awareness), DISP 1.3 (handling rules — call charges, root cause analysis, proactive redress, named individual), DISP 1.4 (resolution rules), DISP 1.5 (3-business-day track), DISP 1.6 (time limit rules — 8-week and 15/35-BD EMD/PSD tracks), DISP 1.7 (forwarding rules), DISP 1.8 (time barring), DISP 1.9 (record rule), DISP 1.10 (complaints reporting — bi-annual, Annex 1R), DISP 1.10A (data publication), DISP 1.10B (PSP/EMI separate annual reporting — Annex 1AD, all users not just eligible complainants), DISP 1.11 (Lloyd's — structure only). Annexes 1AA, 1AB, 1AC, 1AD, 1B reviewed for format requirements.

Pages created (2):
- `wiki/summaries/disp1-treating-complainants-fairly.md` — full DISP 1 sourcebook summary covering all sections from 1.1 to 1.10B
- `wiki/concepts/complaints-handling-framework.md` — operational detail on the five most important facts: dual timeline system, 3-day track, root cause analysis as hard rule, named SMF compliance owner, DISP 1.10B separate PSP/EMI reporting scope

Pages updated (1):
- `wiki/index.md` — new section "UK — FCA Dispute Resolution (DISP)" added

Key new facts not previously in the wiki:
1. **Dual timelines**: 8 weeks (standard, DISP 1.6.2R) vs 15 business days / 35 business days (EMD/PSD complaints, DISP 1.6.2AR) — hard rules; previously no DISP timeline content in wiki
2. **3-day track** (DISP 1.5): exempt from time limit + forwarding rules; summary resolution communication required (not a final response); acceptance need not be in writing
3. **Root cause analysis is a hard rule** (DISP 1.3.3R): extends to products and processes not directly complained about; requires MI, senior reporting, and proactive remediation consideration for non-complainants
4. **Named SMF-level individual** (DISP 1.3.7R): firm must appoint FCA governing function holder (or limited scope function holder) as DISP 1 compliance owner — distinct from SM&CR PRs and Consumer Duty board champion
5. **DISP 1.10B** (PSP/EMI separate annual Annex 1AD return): broader scope than eligible complainants — covers all payment service users; reporting period is annual (not bi-annual); entirely absent from prior wiki

Notes:
- No contradictions with existing wiki pages. The `pi-emi-consumer-duty-and-sanctions-obligations.md` derived page referenced DISP in passing (DISP App 5 for motor finance) but contained no substantive DISP 1 obligations — the new pages add that coverage without contradicting existing content.
- DISP 1.3.7R (named individual) bridges DISP and SM&CR: for FSMA-authorised firms the complaints compliance owner must be an SMF or limited scope function holder. The `smcr-senior-managers-regime.md` page does not mention this DISP-side requirement. Cross-reference added via new pages' Related Articles; `smcr-senior-managers-regime.md` not modified (the requirement exists in DISP, not in SM&CR sourcebook).
- MiFID complaints (DISP 1.1A) extend obligations to ECPs — the only area of the DISP framework where obligations run beyond the eligible complainant population in a retail-protection context. Relevant to MiFID firms; wiki previously had no DISP content covering ECPs.

Flagged for future ingest:
- DISP 2 (FOS jurisdiction, eligible complainants, time limits) — required for a complete complaints picture
- DISP 3 (FOS complaint handling procedure)
- DISP App 5 (motor finance DCA complaints — modified procedures)
- DISP 1 Annex 3 (prescribed FOS waiver wording referenced in summary resolution communications)

## 2026-04-21 lint (pass 23)

**Scope:** 97 pages (95 prior + 2 new DISP pages)

**Check 1 — Wikilink integrity:** PASS. No broken wikilinks in any wiki page.

**Check 2 — Orphan/near-orphan detection:** PASS after fixes. New DISP pages had 0 inbound links prior to fixes; resolved by C4–C10.

**Check 3 — Frontmatter ↔ body consistency:** PASS.

**Check 4 — New DISP pages cross-reference audit:** 9 findings. All fixed.

| # | Priority | Type | Location | Finding | Fix |
|---|----------|------|----------|---------|-----|
| C1 | HIGH | Contradiction | `concepts/psr-regulatory-reporting.md:67` | DISP 1 Annex 1AD row: wrong scope ("retail customers only"), wrong period ("1 Jul–30 Jun"), wrong deadline ("30 days after 30 June"). DISP 1.10B.9D sets period = accounting reference year (or 31 Dec); DISP 1.10B.10D = 30 business days after period end; DISP 1.10B.2G = all payment service users not retail only | Corrected scope, period, deadline; added [[disp1-treating-complainants-fairly]] link; added DISP tags and FM related |
| C2 | High | Near-orphan | `summaries/disp1-treating-complainants-fairly.md` | 0 inbound links | Resolved by C4, C7, C8, C10 |
| C3 | High | Near-orphan | `concepts/complaints-handling-framework.md` | 0 inbound links | Resolved by C6, C9 |
| C4 | High | Missing cross-ref | `summaries/conc1-application-purpose.md:29` | "complaints handling is in DISP" — no link | Added [[disp1-treating-complainants-fairly]] wikilink + FM related |
| C5 | High | Missing cross-ref | `concepts/psr-regulatory-reporting.md:67` | DISP 1 Annex 1AD row — no link | Folded into C1 fix |
| C6 | Medium | Missing cross-ref | `derived/fca-consumer-duty-implementation-review-2024.md:48` | "root-cause analysis of complaints" — no link to DISP 1.3.3R obligation | Added [[complaints-handling-framework]] inline + FM related |
| C7 | Medium | Missing cross-ref | `summaries/conc7-arrears-default-recovery.md:283` | FOS complaint reference — no link | Added [[disp1-treating-complainants-fairly]] + FM related |
| C8 | Medium | Missing cross-ref | `concepts/consumer-duty-overview.md:125` | FOS redress route — no link | Added [[disp1-treating-complainants-fairly]] + FM related |
| C9 | Low | Missing cross-ref | `concepts/consumer-duty-consumer-support.md:72` | "making a complaint" as sludge deterrent — no link | Added [[complaints-handling-framework]] + FM related |
| C10 | Low | Missing cross-ref | `summaries/fca-approach-payment-services-electronic-money.md:68` | "complaints" in reporting forms list — no link | Added [[disp1-treating-complainants-fairly]] + FM related |

Post-fix inbound link counts:
- `disp1-treating-complainants-fairly`: 6 inbound links (complaints-handling-framework, conc1-application-purpose, psr-regulatory-reporting, conc7-arrears-default-recovery, consumer-duty-overview, fca-approach-payment-services-electronic-money)
- `complaints-handling-framework`: 3 inbound links (disp1-treating-complainants-fairly, fca-consumer-duty-implementation-review-2024, consumer-duty-consumer-support)

**Final state:** 0 broken wikilinks · 0 orphans · 0 near-orphans · 0 FM/body gaps · 1 contradiction fixed

## 2026-04-21 ingest | DISP 2 Jurisdiction of the Financial Ombudsman Service (April 2026)

Source: `raw/fca-handbook/DISP 2 Jurisdiction of the Financial Ombudsman Service.pdf` (FCA Handbook, April 2026 version)

Pages created (2):
- `wiki/summaries/disp2-fos-jurisdiction.md`
- `wiki/concepts/fos-eligible-complainants.md`

Pages updated (5):
- `wiki/summaries/disp1-treating-complainants-fairly.md` — added disp2 and fos-eligible-complainants to FM related + Related Articles
- `wiki/concepts/complaints-handling-framework.md` — added disp2 and fos-eligible-complainants to Related Articles
- `wiki/concepts/psr-unauthorised-transaction-liability.md` — added fos-eligible-complainants and disp2 to FM related + Related Articles (APP fraud eligible complainant connection)
- `wiki/concepts/customer-due-diligence.md` — added fos-eligible-complainants to FM related + Related Articles (PEP identification eligible complainant connection)
- `wiki/index.md` — added 1 summary row and 1 concept row to the DISP section

Key facts captured (not previously in wiki):
1. **DISP 2.8.2R — dual FOS referral time limits**: 6 months from final response; AND 6 years from event / 3 years from awareness (whichever later). Both apply independently.
2. **DISP 2.8.3G — 6-month clock contingent on notice**: The 6-month window only starts when the firm's response specifically tells the complainant about the FOS referral deadline. Omitting this notice means the clock does not start.
3. **DISP 2.7.3R — seven eligible complainant categories**: Consumer, micro-enterprise, charity (< £6.5m annual income), trustee (trust net assets < £5m), CBTL consumer, small business (< £6.5m turnover at referral), guarantor. Wiki previously had only "consumers, micro-enterprises, small charities" from the PSRs/EMRs context.
4. **DISP 2.7.9R — regulated-firm and professional-client exclusions**: PSPs, EMIs, and FCA-authorised firms are not eligible complainants for complaints about activities they themselves carry on. Professional clients and ECPs are not eligible complainants in CJ (unless they are consumers in relation to the activity).
5. **DISP 2.7.7AR + 2.7.7G(2B)**: PEP identification eligible complainant (persons wrongly identified as PEPs can complain to FOS); APP fraud eligible complainant extension (APP fraud victims are eligible even where there is no PSD breach — sends and receiving PSP both in scope).

No contradictions with existing wiki content found.

## 2026-04-21 lint (pass 24)

**Scope:** 99 pages (97 prior + 2 new DISP 2 pages)

**Check 1 — Wikilink integrity:** PASS. 0 broken wikilinks.

**Check 2 — Orphan/near-orphan detection:** 1 finding. Fixed.

**Check 3 — FM ↔ body consistency:** 1 finding. Fixed.

**Check 4 — Missing cross-references:** 5 findings. All fixed.

**Check 5 — Contradictions:** PASS.

| # | Priority | Type | Location | Finding | Fix |
|---|----------|------|----------|---------|-----|
| C1 | Medium | Near-orphan | `derived/consumer-understanding-digital-notifications.md` | 1 inbound link only; `fca-consumer-duty-implementation-review-2024.md` did not link to it despite gamification being a named finding | Added inline link in gamification bullet + FM related + Related Articles in fca-consumer-duty-implementation-review-2024 |
| C2 | Medium | FM/body gap | `concepts/complaints-handling-framework.md` | Body Related Articles included disp2/fos-eligible-complainants (added this session) but FM `related:` field did not | Added both to FM related |
| C3 | High | Missing cross-ref | `derived/pi-emi-consumer-duty-and-sanctions-obligations.md` | Consumer Duty retail scope stated as "consumers, micro-enterprises, small charities" — accurate but could cause agent to underestimate FOS eligible complainant scope for PSPs (which adds small businesses, trustees, guarantors) | Added inline blockquote note with [[fos-eligible-complainants]] link + FM related + Related Articles |
| C4 | Medium | Missing cross-ref | `concepts/consumer-duty-overview.md` | FOS mentioned as redress route; linked disp1 but not disp2 | Added [[disp2-fos-jurisdiction]] inline + FM related + Related Articles |
| C5 | Low | Missing cross-ref | `concepts/consumer-principle.md` | FOS as remedy for P12 breach; no jurisdiction link | Added [[disp2-fos-jurisdiction]] inline + FM related + Related Articles |
| C6 | Low | Missing cross-ref | `summaries/ps22-9-policy-statement.md` | FOS as redress route; no jurisdiction link | Added [[disp2-fos-jurisdiction]] inline + FM related + Related Articles |
| C7 | Low | Missing cross-ref | `summaries/prin3-rules-about-application.md` | FOS as remedy for Principle breaches; no jurisdiction link | Added [[disp2-fos-jurisdiction]] inline + FM related + Related Articles |

Post-fix inbound link counts:
- `consumer-understanding-digital-notifications`: 2 inbound (consumer-duty-consumer-understanding, fca-consumer-duty-implementation-review-2024)
- `disp2-fos-jurisdiction`: 10 inbound
- `fos-eligible-complainants`: 7 inbound

**Final state:** 0 broken wikilinks · 0 orphans · 0 near-orphans · 0 FM/body gaps · 0 contradictions (Pass 21)

## 2026-04-21 ingest | DISP App 5 — Motor Finance DCA and Non-DCA Complaint Handling Rules (April 2026)

Source: `raw/fca-handbook/DISP App 5 Relevant motor finance discretionary commission arrangement complaint and motor finance non-discretionary commission arrangement complaint handling rules.pdf` (FCA Handbook, April 2026 version, 15 pages)

Pages created (1):
- `wiki/summaries/disp-app5-motor-finance-dca-complaints.md`

Pages updated (5):
- `wiki/index.md` — added DISP App 5 row to DISP section
- `wiki/summaries/disp1-treating-complainants-fairly.md` — added disp-app5 to FM related + Related Articles
- `wiki/concepts/complaints-handling-framework.md` — added disp-app5 to FM related + Related Articles
- `wiki/summaries/disp2-fos-jurisdiction.md` — added disp-app5 to FM related + Related Articles
- `wiki/concepts/conc-discretionary-commission-arrangements.md` — added disp-app5 to FM related + Related Articles

Key facts captured (not previously in wiki):
1. **DCA complaint definition (DISP App 5.1.2R)**: 4-part test — pre-28 Jan 2021 regulated credit agreement; motor vehicle; DCA arrangement; received/responded in specified windows. Includes pre-FCA OFT-licensed arrangements equivalent to a DCA.
2. **8-week pause (DISP App 5.2.1R/BR)**: Response clock does not run 11 Jan 2024 – 31 May 2026 (DCA) / 20 Dec 2024 – 31 May 2026 (non-DCA credit). Also pauses 3-year records retention period. Modifies the unconditional account of the 8-week rule in complaints-handling-framework and disp1 summary.
3. **Extended FOS referral window (DISP App 5.2.2R/BR)**: 6-month DISP 2.8.2R limit extended to 15 months (or fixed 30 Jul 2026) for final responses sent during the extended period; reverts to 6 months for final responses from 30 Jan 2026. Modifies disp2-fos-jurisdiction's account of the 6-month rule.
4. **Mandatory final response wording substitution (DISP App 5.2.11R/14R)**: During extended period, "six months" → "fifteen months" throughout DISP 1 Annex 3R; must also explain extension, state actual deadline, and direct to fca.org.uk/carfinance.
5. **Record retention to 11 April 2031 (DISP App 5.3.1R/AR)**: Lenders, owners, and credit brokers must retain all in-scope motor finance records regardless of whether a complaint has been received, until 11 April 2031.

Modifications to existing wiki content noted in body of new page (not contradictions — deliberate carve-outs from the general rules):
- complaints-handling-framework.md: 8-week rule presented as unconditional — motor finance DCA/non-DCA complaints are an exception
- disp2-fos-jurisdiction.md: 6-month FOS referral window presented without motor finance carve-out

## 2026-04-21 ingest | FCA PS23/6 — Financial Promotion Rules for Cryptoassets (June 2023)

Source: `raw/fca-policy-statements/ps23-6.pdf` (FCA Policy Statement, June 2023, ~65pp, effective 8 October 2023)

Pages created (2):
- `wiki/summaries/ps23-6-cryptoasset-financial-promotions.md`
- `wiki/concepts/cryptoasset-financial-promotions-framework.md`

Pages updated (1):
- `wiki/index.md` — added new "UK — FCA Cryptoassets" section with both new pages

Key facts captured (not previously in wiki):
1. **Mandatory DOFP sequence (PS23/6 §§3.19–3.60, Figure 2/3)**: 8-step ordered consumer journey. 24-hour cooling-off applies only to first-time investors with a specific firm (not per-transaction). Client categorisation declarations expire after 12 months. Existing clients must still have current categorisation and specific-investment appropriateness — but skip the cooling-off and personalised risk warning. The time taken for the appropriateness assessment counts toward the 24-hour cooling-off period.
2. **Absolute incentives ban — no shareholder benefit exemption (PS23/6 §3.24)**: Unlike other RMMIs, the shareholder benefit carve-out does not apply to cryptoassets. Refer-a-friend bonuses, new-joiner bonuses, "free" token offers prohibited absolutely. Governance/voting rights intrinsic to a token's function are not incentives. Benefits available only for a limited time are likely to be incentives regardless of nature.
3. **MLR Art. 73ZA exemption — full consumer journey rules apply, extended enforcement powers (PS23/6 §§5.8–5.26)**: MLR-registered cryptoasset businesses communicating their own promotions must comply with all the same rules as authorised persons (COBS 4, COBS 10, Principle 7, risk warning, personalised risk warning, cooling-off, client categorisation, appropriateness, incentives ban). FCA extended FSMA powers: s165, s166, s55L (VREQ/OIREQ), s55P (asset restriction), s137S (withdraw/refrain direction). Exemption is explicitly temporary — will be removed when the wider crypto authorisation regime comes into force.
4. **Client categorisation — self-certified sophisticated investor disapplied; 12-month expiry (PS23/6 §3.46 Our response)**: Only three categories apply to cryptoassets: Restricted Investor, High Net Worth, Certified Sophisticated. Self-certified sophisticated investor category is disapplied because existing criteria (syndicate membership, business angel networks) are not appropriate proxies for cryptoasset sophistication. All declarations valid for 12 months only — firms must re-categorise before further DOFPs.
5. **Appropriateness anti-gaming rules (PS23/6 §§3.50–3.53)**: Questions must differ each attempt; 24-hour lock-out after failure (mandatory from second failed attempt, firms may apply from first); only broad topic failure areas may be disclosed — not specific wrong answers; firms must not encourage retakes; firms offering diverse cryptoasset types may need multiple separate assessments per product type (e.g. lending/staking require distinct assessments).

## 2026-04-21 lint | Pass 25

Checks run: wikilink integrity · orphan detection · FM/body consistency · missing cross-refs · contradictions

**Check 1 — Wikilink integrity:** PASS (0 broken)

**Check 2 — Orphan/near-orphan detection:** PASS (0 orphans, 0 near-orphans)

**Check 3 — FM ↔ body consistency:** 8 findings. All fixed. (1 apparent finding for disp1-treating-complainants-fairly confirmed as false positive — YAML parse error on colon in `regulation:` field prevents FM being read by script; content verified correct by direct file read.)

**Check 4 — Missing cross-refs:** PASS (apparent findings were false positives — new cryptoasset pages referencing terms in their own body text)

**Check 5 — Contradictions:** PASS (apparent findings were false positives — new pages explicitly state Art. 48, Art. 50A, and self-certified sophisticated investor are *disapplied* for cryptoassets)

| # | File | Fix |
|---|------|-----|
| C1 | `derived/fca-consumer-duty-implementation-review-2024.md` | Added `[[complaints-handling-framework]]` to Related Articles |
| C2 | `concepts/consumer-duty-consumer-support.md` | Added `[[complaints-handling-framework]]` to Related Articles |
| C3 | `concepts/psr-regulatory-reporting.md` | Added `[[disp1-treating-complainants-fairly]]` to Related Articles |
| C4 | `concepts/consumer-duty-overview.md` | Added `[[disp1-treating-complainants-fairly]]` to Related Articles |
| C5 | `summaries/fca-approach-payment-services-electronic-money.md` | Added `[[disp1-treating-complainants-fairly]]` to Related Articles |
| C6 | `summaries/fcg7-sanctions-asset-freezes-proliferation-financing.md` | Added `[[fctr8-sanctions-systems-controls-russia]]` to Related Articles |
| C7 | `summaries/conc1-application-purpose.md` | Added `[[disp1-treating-complainants-fairly]]` to Related Articles |
| C8 | `summaries/conc7-arrears-default-recovery.md` | Added `[[disp1-treating-complainants-fairly]]` to Related Articles |

**Final state:** 0 broken wikilinks · 0 orphans · 0 near-orphans · 0 FM/body gaps · 0 contradictions (Pass 25)

## 2026-04-22 ingest | FCA Handbook — SYSC 9 Record-Keeping and SYSC 10 Conflicts of Interest

Sources:
- `raw/fca-handbook/SYSC 9 Record-keeping.pdf` (FCA Handbook, 7pp)
- `raw/fca-handbook/SYSC 10 Conflicts of interest.pdf` (FCA Handbook, 20pp)

Pages created (2):
- `wiki/concepts/sysc9-record-keeping.md` — two-track architecture (non-MiFID general duty SYSC 9.1.1R; MiFID/common platform mandatory record types SYSC 9.1.1A/B); 5-year MiFID retention (SYSC 9.1.2R); tamper-proof storage (SYSC 9.1.2-AR — prevents firm-level alteration, FCA-accessible, reconstitutable); non-MiFID "as long as relevant" standard (SYSC 9.1.5G); AISP/PISP credit institution record-keeping (SYSC 9.2 — 4 data categories, 5-year from 13 Jan 2018 baseline); SM&CR personal liability from record-keeping gaps
- `wiki/concepts/sysc10-conflicts-of-interest.md` — scope (SYSC 10.1.1R); hard identification duty (SYSC 10.1.3R — prospective, firm vs client and client vs client); 6 conflict types (SYSC 10.1.4R); conflict = duty conflict not mere benefit (SYSC 10.1.5G); conflicts register (SYSC 10.1.6R) + annual senior management report (SYSC 10.1.6AAR — separate obligations); manage first (SYSC 10.1.7R); disclosure as last resort (SYSC 10.1.9AR); written conflicts policy (SYSC 10.1.10R) with 6 named measures (SYSC 10.1.11R) and annual review (SYSC 10.1.11AAR); Chinese walls as statutory defence (SYSC 10.2.2R — FSA 2012 ss.89–91 and s.138D)

Index updated: new "UK — FCA Systems and Controls (SYSC)" section added to `wiki/index.md`.

Pages updated for cross-links (6):
- `concepts/payment-for-order-flow.md` — sysc10-conflicts-of-interest added to FM related + Related Articles
- `summaries/fca-pfof-supervisory-report-2019.md` — sysc10-conflicts-of-interest added to FM related + Related Articles
- `concepts/prod-product-governance.md` — sysc9-record-keeping + sysc10-conflicts-of-interest added to FM related + Related Articles
- `summaries/mifid-ii-product-governance-review-2021.md` — sysc9-record-keeping + sysc10-conflicts-of-interest added to FM related + Related Articles
- `concepts/conc-creditworthiness-assessment.md` — sysc9-record-keeping added to Related Articles
- `concepts/conc-cpa-rules.md` — sysc9-record-keeping added to Related Articles

Key facts captured (not previously in wiki):
1. **SYSC 9 two-track architecture**: Non-MiFID — flexible general duty, retain "as long as relevant" (SYSC 9.1.5G), no prescribed types. MiFID/common platform — mandatory prescribed record categories (SYSC 9.1.1A/B), 5-year retention (SYSC 9.1.2R). Structurally different regimes.
2. **SYSC 9.1.2-AR tamper-proof storage**: Hard data architecture requirement for MiFID records: must prevent firm-level alteration/deletion; must be promptly accessible to FCA; must be reconstitutable in intelligible form. No equivalent for non-MiFID firms.
3. **SYSC 10.1.9AR disclosure = last resort**: A firm that skips management and issues a conflicts notice breaches SYSC 10.1.9AR regardless of the notice's accuracy. Disclosure is not an alternative to management.
4. **Conflicts register + annual SM report — two discrete obligations**: SYSC 10.1.6R (live register) and SYSC 10.1.6AAR (at least annual written report to senior management) are separate. Maintaining only the register without the annual report cycle breaches SYSC 10.1.6AAR.
5. **Chinese walls — statutory defence (SYSC 10.2.2R)**: Complete protection under FSA 2012 ss.89(2)/90(1)/91(1) and s.138D. Only SYSC 10 mechanism with statutory (not merely regulatory) effect.

No contradictions with existing wiki pages. SYSC 9.1.1R referenced by rule number in 4 prior pages without a concept page to resolve it — now resolved. SYSC 10.1.3R/10.1.7R referenced in PFOF pages — now resolved.

## 2026-04-22 lint (pass 26)

**Scope:** 107 pages (105 wiki + index + log)

**Check 1 — Wikilink integrity:** PASS (0 broken)

**Check 2 — Orphan/near-orphan detection:** PASS (0 orphans, 0 near-orphans). New SYSC pages both have 4 inbound links.

**Check 3 — FM/body consistency:** 2 real findings. Both fixed.

| # | File | Finding | Fix |
|---|------|---------|-----|
| F1 | `concepts/conc-cpa-rules.md` | `[[sysc9-record-keeping]]` in Related Articles body but absent from FM `related:` | Added to FM |
| F2 | `concepts/conc-creditworthiness-assessment.md` | `[[sysc9-record-keeping]]` in Related Articles body but absent from FM `related:` | Added to FM |

10 apparent body→FM gaps for `summaries/disp1-treating-complainants-fairly.md` confirmed as false positives — YAML parser fails on colon in `regulation: DISP (Dispute Resolution: Complaints sourcebook)`; FM content verified correct by direct file read.

**Check 4 — Missing cross-references:** PASS. No pages reference SYSC 9/10 concepts without a wikilink.

**Final state:** 0 broken wikilinks · 0 orphans · 0 near-orphans · 0 FM/body gaps · 0 contradictions (Pass 26)

## 2026-04-22 derived | Three synthesis pages

Pages created (3):

- `wiki/derived/aml-kyc-onboarding-decision-tree.md` — Sequential seven-stage onboarding flow: Stage 0 (sanctions screening pre-application), Stage 1 (SDD/Standard/EDD classification), Stage 2A (simplified CDD), Stage 2B (four-step standard CDD with beneficial ownership 25% threshold and senior managing official fallback), Stage 3 (EDD — PEP, high-risk third country, correspondent banking, complex transactions, life insurance beneficiary; SM approval, source of wealth/funds), Stage 4 (vulnerability and mental capacity check — indicators, Equality Act 2010 caution, vulnerability flags), Stage 5 (SAR/DAML decision gate — suspicion standard, DAML 7-day/31-day/186-day moratoriums, tipping-off two criminal offences, permitted disclosures), Stage 6 (onboarding approval checklist), Stage 7 (post-onboarding monitoring calibration). Record retention table.

- `wiki/derived/conc-financial-difficulty-trigger-map.md` — Signal-to-obligation map across CONC: seven CONC 1.3.1G indicators with constructive knowledge standard; CONC 6.7.11G at-risk definition (three conditions, any one sufficient — two consecutive misses, arrangement agreed, DMP discussions); eight named signals each mapped to exact CONC obligations triggered (including CPA next-working-day indicator at CONC 7.6.9G; automatic interest freeze conditions at CONC 7.3.5G R; mandatory full suspension triggers for mental capacity CONC 7.10.1R and disputed debt CONC 7.14.1R); HCSTC two-strike rules (CONC 7.6.12R/7.6.13R/7.6.14R) including count reset mechanics; cumulative signal escalation table; Scotland statute-barred distinction (debt ceases to exist vs. merely unenforceable in E&W).

- `wiki/derived/consumer-duty-product-lifecycle-checklist.md` — Manufacturer obligations across six lifecycle stages (design → testing → distribution → ongoing monitoring → material change → withdrawal); [HARD] vs [EXPECTED] distinctions throughout; negative target market as distinct mandatory step (PROD 3.2.10R); instrument-level scenario testing (PROD 3.2.13R); bidirectional manufacturer–distributor information flow obligations; pooled nominee account problem; AFM Board NED challenge requirement; closed product obligations; SM&CR personal accountability from undocumented challenge; PROD 3 / Consumer Duty equivalence.

Index updated: three new derived page rows added to `wiki/index.md` — Consumer Duty → Derived, Financial Crime → Derived (new entry), CONC (new Derived subsection created).

Sources synthesised: customer-due-diligence, sar-consent-tipping-off, conc-financial-difficulty-indicators, conc-debt-recovery-treatment, consumer-duty-products-services, consumer-duty-price-value (all quality-gated wiki concept pages). No new regulatory claims introduced.

Key impact: AML/KYC decision tree addresses H007 BM25 architectural limit; CONC trigger map resolves M001-type multi-chapter traversal; Consumer Duty lifecycle checklist resolves H005/M006-type questions with the [HARD]/[EXPECTED] distinction not present in concept pages.

## 2026-04-25 evals expansion | evals/questions.yaml — 33 new questions across 8 domains

**Prior state:** 25 questions (8 easy / 10 medium / 7 hard) covering CONC and Consumer Duty almost exclusively.

**New state:** 58 questions (16 easy / 23 medium / 19 hard) across 10 domains.

New questions by domain:

| Domain | IDs | Count |
|---|---|---|
| PSR / E-money | E009, E010, M011, M012, H008 | 5 |
| UK GDPR | E011, E012, M013, M014, M015, H009 | 6 |
| AML / Sanctions | E013, M016, M017, H010, H011 | 5 |
| DISP / Complaints | E014, M018, M019, H012 | 4 |
| SM&CR | E015, M020, M021, H013 | 4 |
| PRIN | E016, M022, H014 | 3 |
| SYSC | E017, M023, H015 | 3 |
| Cryptoassets | E018, M024, H016 | 3 |
| **Total new** | | **33** |

Key coverage additions:
- **PSR**: safeguarding written acknowledgement requirement; PISP fund/modification prohibitions; unauthorised transaction 4-business-day fraud delay (reg 86(2A)–(2D)); PI agent registration vs EMI distributor notification asymmetry; SCA TRA ETV band assignment (£250 in £440 band, 0.01% threshold)
- **UK GDPR**: storage limitation / pseudonymisation not exempt; verbal SAR validity; automated credit refusal as Art. 22 "similarly significant effect"; DUA Act Art. 6(ea) recognised legitimate interest (no balancing test; five pre-approved purposes; purpose (5) = FCA/NCA/OFSI); purpose limitation compatibility assessment for AML data reuse; right to erasure + MLR retention + tipping-off interaction (three-way edge case)
- **AML**: 25% beneficial ownership threshold + senior managing official fallback; DAML 7/31/186-day moratorium sequence; dual OFSI/FCA reporting obligation; shell bank prohibition (hard rule); s.330/s.333A/s.337 sequencing for intra-firm disclosure before MLRO report
- **DISP**: 8-week vs 15-BD/35-BD dual timeline; root cause analysis extends to non-complained products (DISP 1.3.3R hard rule); motor finance DCA 15-month FOS window + mandatory wording substitution; small business (£5m turnover) as eligible complainant
- **SM&CR**: 7-day SM breach reporting vs annual REP008; Duty of Responsibility undocumented-actions limitation; PI/EMI exclusion from SM&CR; Head of Legal exclusion + Overall Responsibility per-area allocation
- **PRIN**: no private right of action (PRIN 3.4.4R); PRIN 3.1.1AR brings EMIs/PIs within PRIN explicitly; PRIN 2A.9.17R FCA notification duty for distribution chain Principle 12 breaches (no materiality threshold)
- **SYSC**: identify→manage→disclose sequence (disclosure as last resort, SYSC 10.1.9AR); 5-year MiFID retention + tamper-proof storage (SYSC 9.1.2-AR); conflicts register + annual written SM report as two discrete obligations (SYSC 10.1.6R vs 10.1.6AAR)
- **Cryptoassets**: absolute incentives ban (no shareholder benefit exemption; MLR businesses same rules as authorised firms); self-certified sophisticated investor disapplied; appropriateness anti-gaming (24-hour lock-out + different questions + no specific answer disclosure + cooling-off counts)

Verification pending: 9 questions have `notes_for_reviewer` flags requiring citation verification against primary sources before production use (H008 ETV thresholds, M011 reg numbers, M012 reg numbers, M014 DUA Act Annex 2, M015 fraud detection as Annex 2 purpose, M017 SAMLA reg numbers, M021 SM&CR scope, H013 Head of Legal exclusion scope, H011 s.337 permitted disclosure timing).

## 2026-04-25 lint (pass 27)

**Scope:** 110 content pages (107 wiki + index + log)

**Check 1 — Wikilink integrity:** 1 broken. Fixed.

| # | Slug | Found in | Fix |
|---|------|----------|-----|
| F1 | `sanctions-compliance` | `derived/aml-kyc-onboarding-decision-tree.md` (FM + Related Articles) | Replaced with `[[uk-financial-sanctions-framework]]` in body and FM |

**Check 2 — Orphan/near-orphan detection:** 3 orphans. Fixed.

All three derived pages created in the previous session had 0 inbound links from content pages. Backlinks added:

| Derived page | Backlink added to |
|---|---|
| `derived/aml-kyc-onboarding-decision-tree` | `concepts/customer-due-diligence.md` — Related Articles + FM |
| `derived/conc-financial-difficulty-trigger-map` | `concepts/conc-financial-difficulty-indicators.md` — Related Articles + FM |
| `derived/consumer-duty-product-lifecycle-checklist` | `concepts/consumer-duty-products-services.md` — Related Articles + FM |

**Check 3 — FM / body consistency:** PASS. All three new derived pages have matching FM `related:` and Related Articles sections.

**Check 4 — DUA Act year:** 3 occurrences of "DUA Act 2026" in live pages. Fixed.

| File | Location | Fix |
|---|---|---|
| `wiki/index.md:82` | Index entry for uk-gdpr-lawful-basis | 2026 → 2025 |
| `wiki/summaries/ico-guide-lawful-basis-2026.md:54` | Table row | 2026 → 2025 |
| `wiki/summaries/ico-guide-lawful-basis-2026.md:184` | Key points | 2026 → 2025 |

Note: "DUA Act 2026" references in `wiki/log.md` (historical entries) are intentionally not corrected — they record facts at the time of writing and log.md is append-only.

**Final state:** 0 broken wikilinks · 0 orphans · 0 near-orphans · 0 FM/body gaps · 0 DUA Act year errors (Pass 27)

## 2026-04-28 ingest | DISP 3 Complaint handling procedures of the Financial Ombudsman Service

Source: `raw/fca-handbook/DISP 3 Complaint handling procedures of the Financial Ombudsman Service.pdf` (FCA Handbook, April 2026, 20pp)

Pages created (1):
- `wiki/summaries/disp3-fos-complaint-procedures.md` — full DISP 3 summary: jurisdiction gate; dismissal grounds (post-2015: 5 grounds only — no "fair offer" dismissal); test case procedure; investigation (provisional assessment, hearing discretion, evidence powers, adverse inferences); determination standard ("fair and reasonable" — law + rules + guidance + codes + good industry practice at the time, DISP 3.6.1R); determination acceptance mechanism (acceptance = binding; silence = deemed rejection; late acceptance exception); award types: money (financial loss + distress + pain/suffering + reputational damage — whether or not court would award); award cap from 1 April 2026 (£455,000 post-April 2019; £205,000 pre-April 2019, CPI-adjusted); direction power (broader than court order); respondent delay adds to award; compliance mandatory + court-enforceable

Pages updated (2):
- `wiki/concepts/complaints-handling-framework.md` — added Section 6 "What Happens at the FOS": fair and reasonable standard; provisional assessment; award types table; current limits table; acceptance mechanism; respondent delay risk; 5 new Key Points bullets; updated frontmatter sources, tags, related; updated last_updated to 2026-04-28
- `wiki/index.md` — added disp3-fos-complaint-procedures.md row to DISP Summaries; updated complaints-handling-framework.md index entry to reflect new Section 6

Notes:
- No contradictions with existing wiki pages. DISP 3 extends the DISP 1 / DISP 2 picture; complaints-handling-framework.md was the natural home for the FOS-side Key Points as it already covers the firm-side obligations.
- Key calibration note for agents: The "fair and reasonable" standard (DISP 3.6.4R) includes "good industry practice at the relevant time" — this means FCA guidance and industry codes that are not strictly legally binding can still ground a FOS finding against a firm.
- Post-2015 dismissal regime is materially narrower than pre-2015. The "fair offer" dismissal ground (pre-2015 DISP 3.3.4R(4)) does NOT exist in the post-2015 regime (DISP 3.3.4AR). Respondents cannot obtain dismissal without merits consideration by making a settlement offer for post-2015 complaints.

## 2026-04-28 ingest | COBS 9 — Suitability (non-MiFID and non-insurance-based investment products)

Source: FCA Handbook, COBS 9 (April 2026 version)

Pages created (1):
- `wiki/summaries/cobs9-suitability.md` — full COBS 9 summary: scope (personal recommendations to retail clients for designated investments + discretionary management; COBS 9A applies instead for MiFID/insurance-based; COBS 9B targeted support exclusion; P2P exclusion); three-dimension suitability test (knowledge/experience, financial situation, investment objectives — COBS 9.2.1R–9.2.3R); prohibition on discouraging disclosure (COBS 9.2.4R); reliance on client-provided information unless manifestly wrong (COBS 9.2.5R); hard prohibition on recommending without sufficient information (COBS 9.2.6R); churning — individually suitable trades can be collectively unsuitable at portfolio level (COBS 9.3.2G); restricted investment distribution (COBS 9.3.5G); suitability report triggers (COBS 9.4.1R–9.4.2R); one-page summary for pension transfers (COBS 9.4.2AR); report timing rules (COBS 9.4.4R); mandatory content (COBS 9.4.7R–9.4.8R); pension transfer one-page summary content (COBS 9.4.11R); record retention tiers — indefinitely (pension transfer/conversion/opt-out/FSAVC), 5 years (life policy/personal pension/stakeholder pension/DC occupational), 3 years (other) (COBS 9.5.2R); no retention if client does not proceed (COBS 9.5.3R); insistent client regime (COBS 9.5A): who qualifies, required communications, own-words acknowledgement, record-keeping; basic advice on stakeholder products (COBS 9.6)

Pages updated (1):
- `wiki/index.md` — added new "UK — COBS (Conduct of Business Sourcebook)" section with cobs9-suitability.md row

Notes:
- No contradictions with existing wiki pages. The existing `wiki/concepts/advice-suitability-cobs9.md` covers the 2017 FCA suitability review findings; the new summary covers the actual COBS 9 rules — both are cross-referenced.
- Key additions absent from prior wiki coverage: hard "no information = no recommendation" rule (COBS 9.2.6R); prohibition on discouraging disclosure (COBS 9.2.4R); insistent client regime (COBS 9.5A) in full; pension transfer record retention is indefinitely (COBS 9.5.2R); churning as portfolio-level obligation distinct from transaction-level suitability (COBS 9.3.2G).

## 2026-04-28 ingest | COBS 9A — Suitability (MiFID and insurance-based investment products provisions)

Source: `raw/fca-cobs/COBS 9A Suitability (MiFID and insurance-based investment products provisions).pdf` (FCA Handbook, April 2026, 19pp)

Pages created (1):
- `wiki/summaries/cobs9a-suitability-mifid.md` — full COBS 9A summary: scope (MiFID/equivalent third country/optional exemption business + IBIP investment advice; COBS 9B exclusion; IDD-only rules for IBIPs); core suitability obligation with explicit "ability to bear losses" formulation (COBS 9A.2.1R); suitability assessment covers hold and sell decisions not just purchase (COBS 9A.2.2G); portfolio management mandate recommendations trigger suitability (COBS 9A.2.3G); IBIP demands and needs requirement (COBS 9A.2.3AR); professional client assumptions — per se gets knowledge/experience + financial situation, elective gets knowledge/experience only (COBS 9A.2.5R); risk profiling tool reliability as hard Rule with limitations identification and active mitigation (COBS 9A.2.9R); ongoing information maintenance obligation for firms with ongoing relationships (COBS 9A.2.10R); discouraging disclosure prohibition (COBS 9A.2.11R); reliance standard includes "ought to be aware" objective element (COBS 9A.2.12R); no recommendation without sufficient information (COBS 9A.2.13R); legal person / representative / group insurance written policy with dimension-split rules (COBS 9A.2.15R); bundled package suitability (COBS 9A.2.16R); switching cost-benefit analysis as hard Rule — must demonstrate benefits exceed costs (COBS 9A.2.18R; 9A.2.18AR); adequate policies and procedures including equivalent instrument comparison (COBS 9A.2.19R); prohibition on recommending when nothing is suitable (COBS 9A.2.20R); automated/semi-automated systems — responsibility not reduced (COBS 9A.2.23R; 9A.2.24G); suitability report before conclusion for retail MiFID advice with distance communication exception (COBS 9A.3.2R); MiFID suitability report content including attitude to risk and capacity for loss, periodic review flag (COBS 9A.3.3R); IBIP suitability statement content (COBS 9A.3.3AR); subsequent periodic reports need only cover changes (COBS 9A.3.3R(4)); periodic assessment disclosure before service (COBS 9A.3.6R; 9A.3.8R); minimum annual periodic suitability review — increased frequency for higher-risk clients/instruments (COBS 9A.3.9R; 9A.3.10R); IBIP record retention for at least duration of relationship (COBS 9A.4.3R); IBIP record content including changes to risk tolerance and underlying assets (COBS 9A.4.4R); comparative table COBS 9 vs COBS 9A

Pages updated (1):
- `wiki/index.md` — added cobs9a-suitability-mifid.md row to COBS section

Notes:
- No contradictions with existing wiki pages.
- Key additions absent from prior wiki coverage: (1) professional client assumptions and the per se / elective asymmetry; (2) risk profiling tool reliability as a binding Rule; (3) switching cost-benefit analysis as a binding Rule; (4) automated systems — full suitability responsibility retained; (5) periodic suitability — minimum annual frequency plus mandatory pre-service disclosure; (6) legal person / representative dimension-split policy; (7) IBIP retention = duration of relationship (not fixed tiers).
- The "or ought to be aware" reliance formulation in COBS 9A.2.12R is stricter than COBS 9's "aware" only — firms operating under both regimes should note the higher standard applies to MiFID and IBIP business.

## 2026-04-28 ingest | COBS 10 and COBS 10A — Appropriateness (non-advised services)

Sources:
- `raw/fca-cobs/COBS 10 Appropriateness (for non-advised services) (non-MiFID and non-insurance-based investment products provisions).pdf` (FCA Handbook, April 2026, 19pp)
- `raw/fca-cobs/COBS 10A Appropriateness (for non-advised services) (MiFID and insurance-based investment products provisions).pdf` (FCA Handbook, April 2026, 16pp)

Pages created (3):
- `wiki/summaries/cobs10-appropriateness-non-mifid.md` — full COBS 10 summary: scope (non-readily realisable securities, speculative illiquid securities, derivatives, warrants, LTAF units, UK RIE crypto ETNs, P2P, qualifying cryptoassets — all for retail clients not in course of MiFID business; direct offer financial promotion trigger for cryptoassets; applies to registered persons for qualifying cryptoassets; does not apply where personal recommendation or targeted support given); knowledge and experience only assessment — three categories; no discouraging disclosure; reliance on information unless aware manifestly wrong; may use existing information; may infer knowledge from experience; no duty to communicate assessment; two mandatory warning obligations (product inappropriate; insufficient info) — both standardised format permitted; client may proceed after warning at firm's discretion; execution-only non-complex exemption (4-criterion test: not derivative/cash-settlement security; publicly available prices from issuer-independent valuation systems; no liability exceeding acquisition cost; publicly available readily understood characteristics); at client initiative definition — personalised communication vs mass-market promotion distinction; one assessment per service not per transaction; suitability assessed under COBS 9 or COBS 9B displaces appropriateness; 5-year record retention; 5 product-specific question matrices (Annex 1: non-readily realisable securities 13 matters including IFISA doesn't reduce risk + 10% net assets guideline + FOS cannot ordinarily consider complaints about unauthorised persons; Annex 2: P2P 14 matters; Annex 3: LTAF 9 matters; Annex 4: qualifying cryptoassets 12 matters including volatility, operational risks, non-comparability to mainstream investments; Annex 5: UK RIE crypto ETNs 12 matters)
- `wiki/summaries/cobs10a-appropriateness-mifid.md` — full COBS 10A summary: scope (MiFID investment services; IBIP insurance distribution — IDD-derived rules only; also applies to firms assessing on behalf of MiFID firm under COBS 2.4.4R reliance); professional client assumption for K&E; bundled package assessment must address overall bundle; six-criterion non-complex test (adds vs COBS 10: no profile-altering clause/condition/trigger; no implicit exit charges making instrument illiquid in practice); non-complex IBIP exemption (5-criterion test — guaranteed minimum maturity value ≥ premiums paid; no profile-altering trigger; surrender options at available value; no disproportionate exit charges; no opacity structure; IDD article 16); reliance standard "aware or ought to be aware"; ESCC issuer call option carve-out; two mandatory warnings (both standardised format); client may proceed at firm's discretion; suitability under COBS 9A or COBS 9B displaces appropriateness; reliance on another firm's assessment under COBS 2.4.5G / 2.4.5AR; four-item mandatory MiFID appropriateness record (COBS 10A.7.2R: assessment result; warning given; whether client asked to proceed; whether firm accepted — item (d) is the critical audit obligation); IBIP records: duration of relationship minimum
- `wiki/concepts/appropriateness-framework.md` — new concept page: suitability vs appropriateness distinction; product-regime mapping table; the execution-only non-complex exemption; "at the initiative of the client" definition; suitability displaces appropriateness; COBS 9B targeted support displaces both; what happens after a warning (two-stage: warning → firm discretion → record); which regime applies to which business type (mapping table)

Pages updated (1):
- `wiki/index.md` — added COBS 10, COBS 10A, and appropriateness-framework rows to COBS section

Notes:
- No contradictions with existing wiki pages. Prior COBS 9/9A pages documented the suitability half of the framework; these pages complete the appropriateness half.
- Key additions: (1) appropriateness vs suitability framework — entirely absent before; (2) execution-only non-complex exemption — hard gate for platforms; (3) dual warning obligations — mandatory, standardised format permitted; (4) cryptoasset appropriateness — qualifying cryptoassets and UK RIE crypto ETNs in COBS 10 scope with 12-item question matrices; (5) MiFID four-item appropriateness record including firm's own decision on whether to proceed after warning (COBS 10A.7.2R).
- The MiFID non-complex test (6 criteria, COBS 10A.4.2R) is materially stricter than the non-MiFID test (4 criteria, COBS 10.4.1R(3)). The two additional MiFID criteria (profile-altering clauses; implicit exit charges) catch structured products and instruments with surrender penalties.
- IBIP record retention for appropriateness (duration of relationship, COBS 10A.7.2AR(3)) parallels IBIP suitability retention (COBS 9A.4.3R) — consistent with the IDD baseline.

## 2026-04-28 ingest | MAR 1 — Market Abuse (FCA Sourcebook)

Source: `raw/fca-mar/MAR 1 Market Abuse.pdf` (FCA MAR Sourcebook, 20pp)

Pages created (2):
- `wiki/summaries/mar1-market-abuse.md` — full MAR 1 summary: application (UK MAR directly applicable to any person, not just authorised firms); intent not required (MAR 1.2.3G — objective test, negligent/accidental abuse caught); inside information four-element definition; "made public" four-factor test including above-average-expertise extension (MAR 1.2.12G–1.2.15G — information derivable by market professional from public sources is public; only available outside UK is still public); insider dealing — five named behaviours including front-running/pre-positioning as insider dealing where pending order constitutes inside information (MAR 1.3.2G(2)); factors indicating insider dealing (proximate profitable trade, realistic access to inside information, departure from normal pattern); accepted market practice and takeover safe harbour; unlawful disclosure — selective analyst briefing expressly named (MAR 1.4.2G); confidentiality+necessity safe harbour requires both elements: necessity for legitimate purpose AND recipient under duty of confidentiality (MAR 1.4.5G); named legitimate purposes (employment function, professional adviser, commercial negotiation, takeover, legal obligation); manipulating transactions — legitimate reasons + AMP double test (MAR 1.6.5G); abusive squeeze — key indicator: willingness to lend (MAR 1.6.11G) plus multilateral settlement default risk and spot-forward divergence; manipulating devices — wash trades, painting the tape, layering/spoofing; dissemination — Chinese wall defence (MAR 1.8.5G: if individual could only know info was false/misleading by crossing a Chinese wall, indicates lack of knowledge; robustness of barrier determines strength of defence); misleading behaviour and market distortion (MAR 1.9); three statutory safe harbours: buy-back programmes (UK MAR Art. 5), price stabilisation (UK MAR Art. 5; FCA MAR 2), accepted market practices (UK MAR Art. 13)
- `wiki/concepts/market-abuse-framework.md` — new concept page: two-layer structure (UK MAR + FCA MAR Sourcebook); five prohibited behaviours table; intent not required as core principle; inside information four-element definition; "made public" test including expert-derivable extension; three statutory safe harbours; legitimate reasons + AMP double test for manipulation; firm obligations under SYSC (conflicts, STORs, SM&CR accountability)

Pages updated (1):
- `wiki/index.md` — added new "UK — MAR (Market Abuse Regulation)" section with summaries and concepts tables

Notes:
- No contradictions with existing wiki pages. MAR is a new regulatory area; existing wiki had no MAR content.
- Key additions absent from prior wiki: (1) intent not required — systemic and negligent abuse caught; (2) "made public" expert-derivable extension — information remains inside information only if genuinely not accessible; (3) front-running as named insider dealing — directly relevant to execution businesses; (4) selective analyst briefing — named unlawful disclosure with confidentiality+necessity safe harbour; (5) abusive squeeze — willingness to lend as primary indicator; (6) Chinese wall as dissemination defence — links to SYSC 10 existing wiki content.
- The Chinese wall defence in MAR 1.8.5G for dissemination is analytically linked to the SYSC 10.2.2R Chinese wall provisions (already in wiki). Agents should cross-reference both when assessing information barrier adequacy.
- SYSC 10 (conflicts of interest) wiki page already covers Chinese walls as a statutory defence for SYSC purposes (FSA 2012 ss.89–91 and s.138D). The MAR 1.8.5G extension applies that logic to dissemination claims specifically.

## 2026-04-28 lint

118 pages scanned (43 summaries, 68 concepts, 7 derived).

Structural checks: CLEAN — zero orphan pages, zero broken index links, zero broken wikilinks, zero broken frontmatter related: references, all pages have Related Articles sections.

Findings and fixes applied (4 actionable):

1. `concepts/advice-suitability-cobs9.md` — added cobs9-suitability and cobs9a-suitability-mifid to related: frontmatter and Related Articles (concept page predated the COBS 9/9A summaries; links were one-directional)
2. `summaries/fca-assessing-suitability-review-2017.md` — added cobs9-suitability and cobs9a-suitability-mifid to related: frontmatter and Related Articles (historical review now points to current-regime counterparts)
3. `concepts/sysc10-conflicts-of-interest.md` — added mar1-market-abuse and market-abuse-framework to related: frontmatter and Related Articles (Chinese wall statutory defence connects SYSC 10 and MAR 1.8.5G dissemination defence)
4. `summaries/disp3-fos-complaint-procedures.md` — added cobs9-suitability and advice-suitability-cobs9 to related: frontmatter and Related Articles (COBS 9 cross-references DISP 3; backlink was missing)

Findings noted, no fix required:
5. COBS 9B (targeted support) referenced in 5 pages but no wiki page exists — pending ingest
6. `summaries/fca-cdd-findings-multi-firm-2026.md` status: pending, effective_date: 2026-08-04 — correctly flagged, no change needed

## 2026-04-28 ingest | SYSC 4 — General Organisational Requirements; SYSC 6 — Compliance, Internal Audit and Financial Crime

Sources:
- `raw/fca-handbook/SYSC 4 General organisational requirements.pdf` (FCA SYSC Sourcebook, April 2026, 32pp)
- `raw/fca-handbook/SYSC 6 Compliance, internal audit and financial crime.pdf` (FCA SYSC Sourcebook, April 2026, 13pp)

Pages created (3):
- `wiki/summaries/sysc4-general-organisational-requirements.md` — full SYSC 4 summary: baseline governance Rule applies to all firms (SYSC 4.1.1R — clear org structure, transparent/consistent lines of responsibility, effective risk processes, internal controls, sound admin/accounting procedures, information processing safeguards); common platform six-part detailed organisational requirements (SYSC 4.1.1-AR — documented org structure, internal controls, internal reporting/communication, orderly records, information security, BCP); information security three obligations for common platform firms (4.1.1R(3)); business continuity policy six-element contents (4.1.8G); P2P platform failure arrangements (4.1.8AR — must not prefer any class of customers; arrangement types), P2P resolution manual mandatory content (4.1.8DB — 9 categories including critical staff, premises, IT systems, record-keeping, bank accounts, external persons, legal documentation, group structure, ongoing disclosure capability), P2P resolution manual must be immediately available to insolvency practitioners and FCA (4.1.8DC R), P2P FCA pre-notification obligation (4.1.8DAG), P2P prohibition on accepting full ownership transfer of client money (4.1.8ER); senior personnel repute and experience (4.2.1R); minimum two persons directing business (4.2.2R); two independent minds operational test — single dominant individual raises doubt regardless of titles, both must play part in all significant decisions (4.2.4G/4.2.5G); alternative arrangements for single-person firms (4.2.6R); senior management allocation obligation and supervisory function review (4.3.1R); written reports at least annually to senior management and supervisory function (4.3.2R/4.3.2-AR); common platform: senior management must keep records of allocation of significant functions (4.3.2-AR(3)(b)); management body seven-function mandate for common platform firms (4.3A.1R — overall responsibility, strategic objectives/risk strategy/internal governance approval, accounting/financial reporting integrity, disclosure/communications oversight, senior management oversight, periodic assessment of strategic objectives/governance/client service policy adequacy, information access); management body define/approve/oversee three additional matters including remuneration policy encouraging responsible business conduct and conflict avoidance (4.3A.1AR); chair/CEO separation as hard Rule — chair cannot simultaneously hold SMF1 or chief executive function — waivable only by FCA s.138A application (4.3A.2R/4.3A.2AG); management body member six requirements (good repute, sufficient knowledge/skills/experience, adequate collective knowledge/skills/experience, broad range of experiences, sufficient time commitment, honesty/integrity/independence of mind for challenge and oversight — 4.3A.3R); adequate induction/training resources mandatory (4.3A.4R); directorship limits (individual + collective cap, 4.3A.5R/4.3A.6R); nomination committee for significant SYSC firms (non-executive members only; eight functions including diversity policy, candidate identification, annual assessment of management body structure/size/composition/performance, annual assessment of individual knowledge/skills/experience — 4.3A.8R/4.3A.9R); diversity policy mandatory even without nomination committee (4.3A.10R); SYSC 4.4 does not apply to common platform firms (4.4.2G); apportionment obligation — clear and appropriate apportionment of significant responsibilities, it must be clear who holds what, business must be monitorable/controllable (4.4.3R); two mandatory allocated functions (apportionment of responsibilities; overseeing establishment/maintenance of systems and controls) with three-row firm-type allocation table — body corporate in group: chief executive or equivalent group director/senior manager; EEA SMCR firm: column 2 not applicable; any other firm: chief executive (4.4.5R); 15-question FAQ on allocation mechanics including overseas firm chief executive definition, group allocation, corporate governance exception (4.4.6G)
- `wiki/summaries/sysc6-compliance-internal-audit-financial-crime.md` — full SYSC 6 summary: dual baseline obligation (SYSC 6.1.1R — ALL firms: regulatory compliance policies AND financial crime prevention policies — single rule, two limbs); management company/P2P compliance policies targeting compliance failure detection and minimisation (6.1.2R); common platform compliance policies targeting UK MiFID obligations (6.1.2-AR); management company/P2P two-responsibility compliance function (monitor, advise — 6.1.3R); common platform four-responsibility compliance function (monitor, advise, annual management body report on control environment/identified risks/complaints remediation, monitor complaints — 6.1.3-AR); risk-based monitoring programme mandatory based on compliance risk assessment covering all designated investment business areas (6.1.3-BR); five independence conditions for common platform compliance function — authority/resources/expertise/access, compliance officer appointed by management body, ad-hoc reporting to management body on significant compliance risk, non-involvement in monitored activities, remuneration must not compromise objectivity and must not be likely to do so (6.1.3-CR); compliance officer removal/disciplinary action requires majority management body approval including majority of members not performing any executive function (6.1.4-ABG); management company/P2P four independence conditions (6.1.4R); compliance oversight function for non-common platform firms carrying on designated investment business — must allocate to director/senior manager: (a) oversight responsibility for COBS/COLL/CASS/ICOBS compliance; (b) reporting to governing body (6.1.4AR); proportionality carve-out for non-involvement and remuneration conditions for management companies/P2P (6.1.5R) and common platform firms (6.1.5AR — must assess and regularly review whether compliance function effectiveness is compromised); internal audit function for common platform firms, management companies and P2P (proportionate obligation — where appropriate and proportionate; four responsibilities: audit plan, recommendations, verification of recommendation compliance, reporting — 6.2.1R); internal audit function is SMF5 — PRA controlled function for PRA firms, FCA controlled function for enhanced SMCR firms (6.2.2G(3)); head of internal audit removal protection parallels compliance officer (majority management body including majority NEDs — 6.2.1BG); AML systems and controls must enable identification/assessment/monitoring/management of ML risk and be comprehensive and proportionate (6.3.1R); regular adequacy assessment mandatory (6.3.3R); AML obligations do not count for MLR regulation 76(6)/86(2) or POCA s.330(8) or Terrorism Act s.21A(6) purposes (6.3.4G); FCA will have regard to JMLSG guidance when assessing SYSC 6.3.1R compliance (6.3.5G); five ML risk factors (customers/products/activities, distribution channels, complexity/volume of transactions, processes/systems, operating environment — 6.3.6G); five required system elements (employee training, MLRO annual governing body report, risk management policy documentation, day-to-day operational measures including new products/customers/business profile changes, access not unreasonably denied — 6.3.7G); director/senior manager must hold overall AML responsibility (may also be MLRO) — cannot be person with other overall responsibility function (6.3.8R); MLRO mandatory for all firms except sole traders without employees — must have authority/independence/resource access sufficient to carry out responsibility; MLRO UK-based (6.3.9R/6.3.10G)
- `wiki/concepts/sysc4-governance-framework.md` — concept page: two-track structure (common platform: 4.1.1R + 4.1.1-AR + 4.3A; all other SMCR: 4.1.1R + 4.4); baseline hard Rule all firms; management body seven-function mandate and chair/CEO separation; two persons + two independent minds; two mandatory allocated functions table; SYSC 6.1.1R dual limb; SYSC architecture table mapping SYSC 4 to SYSC 6/9/10/15A/25

Pages updated (1):
- `wiki/index.md` — added SYSC summaries table and sysc4-governance-framework to SYSC concepts table

Notes:
- No contradictions with existing wiki pages. The SM&CR pages (smcr-senior-managers-regime, smcr-certification-regime, smcr-conduct-rules) cover the accountability/approval layer sitting on top of SYSC 4 governance. SYSC 4 covers the underlying structural obligations. The two sets of pages complement rather than overlap.
- Key additions absent from prior wiki: (1) SYSC 4.1.1R as a baseline hard Rule for all firms — the wiki had SM&CR accountability obligations but not the underlying governance structure Rule; (2) management body seven-function mandate and chair/CEO separation as a hard Rule — prior wiki noted Enhanced SMCR Responsibilities Map but not the common platform governance body requirements; (3) two independent minds operational test — substance over title; (4) SYSC 4.4 two mandatory allocated functions — distinct from SM&CR Responsibilities Map, applies to non-Enhanced SMCR firms; (5) SYSC 6.1.1R dual limb — regulatory compliance AND financial crime prevention applicable to all firms; (6) compliance function independence — annual management body report, remuneration non-compromise, removal requiring NED majority.
- The MLRO role was already in the wiki from FCG 3 (smcr-senior-managers-regime notes SMF17). SYSC 6.3.9R/6.3.10G adds the formal rule-level citation, the UK-based requirement, and the authority/independence/resource access conditions that FCG 3 summarised narratively.
- SYSC 4.7 (whistleblowing) is deleted from SYSC 4 — moved to SYSC 24.3.9G. SYSC 4 Annex 1 (Responsibilities Map) is moved to SYSC 25 Annex 1G. These are editor notes in the current PDF, not operative provisions.
- The compliance oversight function (SYSC 6.1.4AR) is distinct from both the MLRO (SYSC 6.3.9R) and the SM&CR compliance oversight SMF. A single individual may hold multiple roles, but the obligations are separate.

## 2026-04-29 ingest | COBS 4 — Communicating with Clients, Including Financial Promotions

Source: `raw/fca-cobs/COBS 4 Communicating with clients, including financial promotions.pdf` (FCA COBS Sourcebook, April 2026)

Pages created (2):
- `wiki/summaries/cobs4-financial-promotions.md` — full chapter summary: FCNM master rule (4.2.1R); identifiability (4.3.1R); dual-track structure non-MiFID (4.5.2R 7-part rule, digital FRN link 4.5.2AR, FIIA verbatim warning 4.5.16R) vs MiFID (4.5A.10R 5-year past performance, 4.5A.12R simulated performance identification, 4.5A.14R future performance conditions); warrants/derivatives restriction (4.7.6R); cold calling restriction — 3 permitted grounds: existing client / consent / generally marketed packaged product (4.8.2R); overseas promotion protection disclosure (4.9); s.21 approver regime — pre-approval COBS 4 confirmation, ongoing monitoring with withdrawal power, quarterly written attestation from unauthorised person (4.10.2R), competence/expertise hard Rule (4.10.9AR); record retention tiers — indefinitely (pension transfer/opt-out), 5yr (life policy/personal pension/MiFID), 3yr (other retail) (4.11.1R)
- `wiki/concepts/financial-promotions-approver-regime.md` — approver regime concept page: FCA Gateway from January 2024 (specific permission required); three obligations under COBS 4.10.2R (pre-approval confirmation, ongoing monitoring, quarterly attestation); competence/expertise product-type matrix (4.10.9AR); s.138D reasonable steps defence mechanics; SM&CR personal accountability; record keeping; common failure modes

Pages updated (1):
- `wiki/index.md` — added COBS summaries table entries for cobs4-financial-promotions.md; added COBS Concepts subsection with financial-promotions-approver-regime.md entry

Notes:
- No contradictions with existing wiki pages. The cryptoasset-financial-promotions-framework.md page references the s.21 approver regime but from a PS23/6-specific angle. The new COBS 4 pages capture the underlying COBS 4.10 framework that applies to all promotions, with crypto-specific rules cross-referenced back to ps23-6.
- CONC 3 has its own CFNM standard (CONC 3.3.1R) for consumer credit promotions — this was already captured in conc-financial-promotions-cfnm.md. COBS 4 FCNM (COBS 4.2.1R) is the separate investment promotion standard. Both pages now cross-reference each other.
- COBS 4.12A (RMMIs) and 4.12B (non-mass market investments) were listed in the source TOC but are cross-references to PS23/6 classification rules, not substantive COBS 4 rules. Full treatment is already in ps23-6-cryptoasset-financial-promotions.md.

## 2026-04-29 ingest | COBS 9B — Targeted Support

Source: `raw/fca-cobs/COBS 9B Targeted support.pdf` (FCA COBS Sourcebook, April 2026, 35pp)

Pages created (2):
- `wiki/summaries/cobs9b-targeted-support.md` — full chapter summary: Art. 55A RAO new regulated activity (April 2026); consumer segment architecture — pre-defined segments with including/excluding characteristics, one ready-made suggestion per segment (9B.4.5R), one segment per client (9B.4.7R), granularity rule (9B.4.9R), evidenced assumptions (9B.4.11R); segment-level suitability standard for ready-made suggestion (9B.4.20R); three absolute prohibitions — safeguarded benefits must receive advice first (9B.2.3R), pension consolidation prohibited (9B.4.38R), RMMIs/non-mass market/COBS 22-restricted excluded (9B.4.42R); annuity special rules — no specific annuity, no quotes, MoneyHelper direction (9B.4.28R); delivery gates — alignment gate (9B.5.5R), known-unsuitability override (9B.5.11R), client opt-out right (9B.5.14R), inconsistent instruction guidance (9B.5.15G); disclosure — "Targeted Support" label (9B.6.1R), nature and limitations (9B.6.3R), segment characteristics including excluding (9B.6.5R), Art. 55A RAO statutory statement (9B.6.6G), durable medium (9B.6.17R), understanding testing (9B.6.9R); commission ban — no third-party commissions for service or related services including executing resulting transaction (9B.8.2R); narrow annuity brokerage exception (9B.8.4R); COBS 6.1A adviser charging does not apply; non-charging firms fair value obligation (9B.8.7R); charge difference disclosure (9B.8.8R); issuer/provider mirror commission prohibition (9B.9.3R); systems and controls (9B.10.1R); employee training (9B.10.3G); outcome monitoring at segment/product level — no periodic individual suitability review (9B.10.4G/10.5G); regular review of segments and suggestions (9B.10.9R)
- `wiki/concepts/targeted-support-service.md` — concept page: what targeted support is (Art. 55A RAO; sits between execution-only and investment advice); consumer segment architecture; delivery mechanics — alignment gate, known-unsuitability override, opt-out; three absolute prohibitions; commission ban and its scope; mandatory Art. 55A RAO disclosure package; relationship to suitability/appropriateness/Consumer Duty/PROD/COBS 4 regimes; systems and controls obligations

Pages updated (2):
- `wiki/concepts/appropriateness-framework.md` — expanded the COBS 9B section from one line to a substantive summary of targeted support including hard prohibitions, commission ban, and Art. 55A RAO disclosure package; updated frontmatter regulation, sources, tags, related fields; added links to new summary and concept pages; updated Related Articles section
- `wiki/index.md` — added cobs9b-targeted-support.md to COBS summaries table; added targeted-support-service.md to new COBS Concepts subsection

Notes:
- COBS 9B is brand new (April 2026) — this is the first ingest. The prior wiki had only a single line ("targeted support (COBS 9B) displaces both") in appropriateness-framework.md.
- No contradictions with existing wiki pages. The regime is additive — it creates a new Art. 55A RAO regulated activity rather than modifying existing suitability or appropriateness rules.
- Key structural points absent from wiki before this ingest: (1) the commission ban scope (broader than just the suggestion — covers resulting transactions, DIM relationships, IFA referrals); (2) the Art. 55A RAO statutory statement as a mandatory disclosure element in durable medium; (3) the known-unsuitability override (segment alignment is necessary but not sufficient for delivery); (4) the pension consolidation prohibition; (5) the absence of a periodic individual suitability review obligation (contrast with COBS 9A periodic review at COBS 9A.3.6R).
- The annuity exception to the commission ban (9B.8.4R) is narrow and requires the firm to operate as a whole-of-market annuity brokerage referral service following the 9B.4.28R–9B.4.37G special rules. Firms that do not meet all three conditions of 9B.8.4R remain subject to the full commission ban.
- FG21/1 (vulnerable customers) cross-referenced at COBS 9B.7.4G for treatment of clients who cannot be aligned with a consumer segment — existing fg21-1-guidance.md and vulnerable-customers.md pages are relevant.

## 2026-04-29 ingest | PROD 3 — Product Governance: MiFID

Source: `raw/fca-cobs/PROD 3 Product governance_ MiFID.pdf` (FCA PROD Sourcebook, April 2026, 16pp)

Pages created (1):
- `wiki/summaries/prod3-product-governance-mifid.md` — full chapter summary: PROD 3.1 proportionality (3.1.2R — nature of FI and TM); PROD 3.2 manufacturer obligations — product approval process mandatory before marketing/distributing (3.2.3R–3.2.4R); dual TM identification — positive AND negative at sufficiently granular level (3.2.8R); needs/characteristics/objectives two-limb assessment — risk/reward consistency + business model integrity test (design not driven by features benefiting firm from poor client outcomes — 3.2.10R); scenario analysis under 4 negative conditions — market deterioration, counterparty failure, commercial non-viability, excess demand (3.2.12R–3.2.13R); charging structure 3-limb test — TM compatibility, return expectations, transparency (3.2.14R); market integrity consideration (3.2.15R); 4-part information disclosure to distributors (3.2.16R); ongoing review including negative TM leakage check (3.2.19R — item (d)); contractual breakpoints communication (3.2.21G); review before re-issue (3.2.22R); 8 remedial actions on crucial event (3.2.24R); opposite-position conflicts test (3.2.28R–3.2.30R); compliance oversight function monitoring role (3.2.32R); compliance reports to management body + FCA on request (3.2.35R–3.2.36R). PROD 3.3 distributor obligations — three-part general obligation: understand/assess compatibility/best interests (3.3.1R); obtain manufacturer info (3.3.3R); active steps if info not publicly available (3.3.7R); third country manufacturer — must still get info (3.3.5R–3.3.6R); independent TM obligation even if manufacturer hasn't defined one (3.3.9R); TM identification using manufacturer info + own client data (3.3.10R); single TM assessment where firm is both manufacturer and distributor (3.3.14R); distributor PG arrangements — compatibility, strategy, commercial pressure insulation, negative TM identification (3.3.15R); periodic review (3.3.16R); COBS 4/9A/10A/2.3A/SYSC 10 compliance checklist (3.3.18R); compliance oversight function monitoring role (3.3.20R); management body effective control (3.3.21R); staff expertise obligation (3.3.22R); compliance reports (3.3.24R–3.3.25R); post-sale review (3.3.26R–3.3.27R); TM correction obligation if wrongly identified (3.3.28R); information sharing to manufacturer including out-of-TM sales (3.3.30R); chain responsibilities — end-client distributor responsible for PROD 3.3 compliance; distributor to distributor must pass product info and enable manufacturer sales reporting (3.3.32R–3.3.33R)

Pages updated (2):
- `wiki/concepts/prod-product-governance.md` — fixed TM cite from 3.2.10R to 3.2.8R for the identification obligation; added PROD 3.2.10R second limb (business model integrity test — absent from prior page); added PROD 3.2.14R charging structure section; added PROD 3.3 distributor obligations section (independent TM, PG arrangements, compliance checklist, information sharing) — entire section was absent; updated sources, Key Points and Related Articles; added link to new summary page
- `wiki/index.md` — added prod3-product-governance-mifid.md to MiFID/PROD summaries table; updated prod-product-governance.md concept page summary to reflect new content

Notes:
- Prior wiki had `concepts/prod-product-governance.md` derived from the 2021 FCA multi-firm review, not the actual sourcebook. That page correctly captured the supervisory findings and failure modes but was missing: (1) the PROD 3.2.8R cite for the TM identification (wrongly cited as 3.2.10R); (2) the second limb of PROD 3.2.10R (business model integrity test); (3) the charging structure three-limb test (3.2.14R); (4) the full PROD 3.3 distributor obligations including the independent TM obligation, compliance checklist, and information sharing back to manufacturer.
- No contradictions with existing wiki pages. The new summary complements the 2021 review summary — the review provides supervisory findings and failure modes; the sourcebook provides the operative rules.
- PROD 3.3.18R cross-references COBS 4, 9A, 10A, 2.3A and SYSC 10.1 — all now have dedicated wiki pages.
- PROD 3.3.2AG cross-references ESG obligations (ESG 4.1.16R to 4.1.19R) — these are not yet in the wiki.
- COBS 9B.10.5G cross-references PROD 3 and PROD 4 for targeted support monitoring obligations — the new PROD 3 summary and COBS 9B summary now cross-reference each other.

## 2026-04-29 ingest | COBS 3 — Client Categorisation

Source: `raw/fca-cobs/COBS 3 Client categorisation.pdf` (FCA COBS Sourcebook, April 2026, 18pp)

Sections covered: COBS 3.1 (application and mixed business), COBS 3.2 (client definition), COBS 3.3 (general notifications), COBS 3.4 (retail clients), COBS 3.5 (professional clients — per se and elective, local public authorities, ongoing obligations), COBS 3.6 (eligible counterparties — per se and elective), COBS 3.7 (re-categorisation to higher protection), COBS 3.8 (policies, procedures and records).

Pages created (2):
- `wiki/summaries/cobs3-client-categorisation.md` — full chapter summary: three-category structure; MiFID trump rule (COBS 3.1.4R); retail as residual default; per se professional institutional list; large undertaking thresholds divergence (MiFID EUR 20m/40m/2m vs non-MiFID £5m/EUR 12.5m/25m/250 + partnership/trust/pension tests); local public authority retail default; elective professional three-step opt-up (qualitative test + quantitative test: 2 of 3 — 10 trades/quarter, EUR 500k portfolio, 1yr professional experience + written procedure); elective ≠ per se knowledge assumption (COBS 3.5.7G); ongoing downward re-categorisation obligation (COBS 3.5.9R) and client self-reporting (COBS 3.5.8G); ECP per se list; elective ECP procedure (COBS 3.6.4BR); COBS 3.7 re-categorisation mechanics including ECP defaulting to professional absent express retail request (COBS 3.7.3BR); re-categorisation ≠ DISP eligible complainant (COBS 3.7.8G); record retention tiers
- `wiki/concepts/client-categorisation-framework.md` — concept page covering the full categorisation architecture and all five key operational rules absent from prior wiki

Pages updated (3):
- `wiki/concepts/appropriateness-framework.md` — added COBS 3.1.4R MiFID trump rule to regulation field, body (inserted as paragraph after regime mapping table), sources, and Related Articles; fixed two wikilink .md suffixes (cobs9b-targeted-support.md → cobs9b-targeted-support)
- `wiki/concepts/fos-eligible-complainants.md` — added COBS 3.7.8G point to Key Points section; added cobs3-client-categorisation and client-categorisation-framework to frontmatter related and Related Articles
- `wiki/index.md` — added cobs3-client-categorisation.md summary row and client-categorisation-framework.md concept row to COBS section; updated appropriateness-framework.md index entry to reference COBS 3.1.4R

Key additions absent from wiki before this ingest:
1. **Elective professional opt-up conditions in full (COBS 3.5.3R):** qualitative test + quantitative test (2 of 3: 10 trades/quarter, EUR 500k portfolio, 1 year in financial sector) + three-step written procedure. All three are mandatory. The wiki previously referenced elective professional clients without the operative conditions.
2. **Large undertaking thresholds diverge between MiFID and non-MiFID (COBS 3.5.2R):** MiFID = 2 of EUR 20m/40m/2m; non-MiFID = any one of £5m called-up capital, or 2 of EUR 12.5m/25m/250 employees, plus separate partnership/trust/pension scheme tests. Entirely absent previously.
3. **Ongoing downward re-categorisation as a hard Rule (COBS 3.5.9R):** If a firm becomes aware an elective professional no longer meets the conditions, it must act — including re-categorising to retail and notifying the client. The client has a corresponding self-reporting obligation (COBS 3.5.8G).
4. **MiFID trump rule (COBS 3.1.4R):** MiFID categorisation requirements prevail across all business for a client where any MiFID business exists. Applies to the appropriateness and suitability regime selection.
5. **COBS 3.7.3BR — ECP re-categorisation defaults to professional, not retail:** An ECP requesting higher protection without expressly requesting retail must be treated as a professional client. Absent from all prior wiki pages.
6. **COBS 3.7.8G — re-categorisation ≠ DISP eligible complainant:** A retail re-categorisation under COBS 3.7 does not confer FOS eligibility. Added to fos-eligible-complainants.md Key Points.

Contradictions with existing wiki: None. The existing wiki references to professional/ECP client categories across COBS 9A, 10A, best-execution-framework, and payment-for-order-flow were factually accurate — they lacked source citations to COBS 3 but were not wrong. COBS 3 pages now provide the source rules.

Flagged for future ingest (updated list):
- COBS 2 (conduct of business obligations) — in raw/fca-cobs but not yet ingested
- FCTR 15, JMLSG Part III, FCA PEP Treatment Review (July 2024), FATF — pre-existing gaps

## 2026-04-29 ingest | COBS 11 — Dealing and Managing

Source: `raw/fca-cobs/COBS 11 Dealing and managing.pdf` (FCA COBS Sourcebook, April 2026, 46pp)

Sections covered: COBS 11.1 (application and disapplications), COBS 11.2 (best execution — AIFMs and residual CIS operators), COBS 11.2A (best execution — MiFID investment firms), COBS 11.2B (best execution — UCITS management companies), COBS 11.3 (use of dealing commission / client order handling), COBS 11.4 (unexecuted limit orders), COBS 11.5A (record keeping), COBS 11.7 (personal account dealing — non-MiFID), COBS 11.7A (personal account dealing — MiFID).

Pages created (3):
- `wiki/summaries/cobs11-dealing-managing.md` — full chapter summary covering all live sections: three-track best execution framework; execution factors; retail client total consideration rule (11.2.7R/11.2A.9R); OTC price fairness check (11.2A.8R(4)/11.2B.13R); back-to-back/matched principal dealing; specific client instructions (11.2A.12R–14G); PFOF anchor (11.2A.19R); order execution policy requirements; commission non-discrimination; portfolio managers and receivers/transmitters; sequential order handling (11.3.2R); aggregation conditions (11.3.7R); limit order publication (11.4.1R); 16-field initial order record and 40-field transaction record (11.5A.2R/11.5A.4R); RTS 25 timestamps; non-MiFID PA dealing (11.7); MiFID PA dealing (11.7A)
- `wiki/concepts/best-execution-framework.md` — concept page: "all reasonable steps" (COBS 11.2) vs "all sufficient steps" (COBS 11.2A/11.2B); execution factors and four weighting criteria; retail client total consideration constraint; OTC price fairness hard Rule; PFOF anchor (COBS 11.2A.19R); specific instructions partial carve-out; execution policy requirements; commission non-discrimination; single execution venue justification
- `wiki/concepts/client-order-handling.md` — concept page: sequential order handling obligation; aggregation conditions; unexecuted limit order publication and large-scale exception; 16-field initial order record and 40-field transaction record; RTS 25 microsecond/millisecond timestamps; non-MiFID PA dealing four prohibitions and two exceptions; MiFID PA dealing four obligations

Pages updated (4):
- `wiki/concepts/payment-for-order-flow.md` — added COBS 11.2A.19R as primary sourcebook anchor rule to regulation field, body regulatory position section, and Key Points; added cobs11-dealing-managing and best-execution-framework to related list; updated last_updated to 2026-04-29
- `wiki/summaries/fca-pfof-supervisory-report-2019.md` — added COBS 11.2A as primary PFOF anchor row to regulatory framework table; added cobs11-dealing-managing and best-execution-framework to related list; updated regulation field and last_updated
- `wiki/index.md` — added cobs11-dealing-managing.md summary row to COBS section; added best-execution-framework.md and client-order-handling.md concept rows to COBS section; updated payment-for-order-flow.md index entry to reference COBS 11.2A.19R as primary anchor
- `wiki/summaries/fca-pfof-supervisory-report-2019.md` index entry not modified (no summary change)

Key additions absent from wiki before this ingest:
1. **Three-track best execution structure**: COBS 11.2 ("all reasonable steps" — AIFMs/CIS), COBS 11.2A ("all sufficient steps" — MiFID), COBS 11.2B ("all sufficient steps" at scheme level — UCITS ManCos). The "all sufficient steps" bar is a deliberate MiFID II uplift from "all reasonable steps."
2. **Retail client total consideration rule (11.2.7R/11.2A.9R)**: Best result must be in terms of price + all execution costs. Other factors (speed, likelihood) can only displace price/cost to the extent they deliver a better total consideration outcome — not as standalone weighting factors.
3. **OTC price fairness check (11.2A.8R(4)/11.2B.13R)**: Hard Rule requiring market data gathering + comparison with similar products before executing any OTC/bespoke product. Not discretionary.
4. **COBS 11.2A.19R as primary PFOF anchor**: The existing PFOF pages (payment-for-order-flow.md and fca-pfof-supervisory-report-2019.md) cited SYSC 10 / COBS 2.1 but did not reference the primary sourcebook anchor in COBS 11. Now corrected.
5. **Aggregation conditions (11.3.7R)**: Three cumulative conditions — written aggregation policy, reasonable expectation of not disadvantaging any client, fair allocation on execution including partial execution.
6. **Unexecuted limit order publication (11.4.1R)**: Immediate publication obligation for unexecuted limit orders, subject to large-scale exception (MiFIR Art. 4).
7. **Record-keeping field lists (11.5A.2R/11.5A.4R)**: 16 mandatory fields for initial orders; 40 mandatory fields for transactions; microsecond timestamps for APA/trading venue members, millisecond for others (RTS 25).
8. **Personal account dealing — two parallel regimes**: Non-MiFID (COBS 11.7 — four prohibitions, two order-placing exceptions); MiFID (COBS 11.7A — four obligations including pre-transaction notification, post-transaction reporting, reporting material personal interest, and conflicts-of-interest management).

Contradictions with existing wiki: None. The PFOF pages' omission of COBS 11.2A.19R was a gap, not a factual error — the pages correctly described the SYSC 10 / conflicts framework. The COBS 11 sourcebook anchor now added provides the complete citation chain.

Flagged for future ingest (pre-existing gaps, no new additions):
- COBS 3A (client categorisation) — PDF not yet in raw/fca-cobs
- FCTR 15, JMLSG Part III, FCA PEP Treatment Review (July 2024), FATF — pre-existing gaps

## 2026-04-30 lint | Full wiki pass 28

**Scope:** All 128 pages. 5 checks: wikilink integrity, orphan/near-orphan detection, FM/body consistency, missing cross-references, contradictions.

**Findings applied (13 items):**

1. **`.md`-suffix wikilinks fixed (28 instances across 6 files):** `cobs4-financial-promotions.md`, `cobs9b-targeted-support.md`, `prod3-product-governance-mifid.md`, `targeted-support-service.md`, `financial-promotions-approver-regime.md`, `prod-product-governance.md` — all frontmatter `related` fields and inline/Related Articles wikilinks normalised to `[[slug]]` form.

2. **Near-orphan: `client-order-handling`** — added link from `best-execution-framework.md` (frontmatter + Related Articles).

3. **Near-orphan: `financial-promotions-approver-regime`** — added link from `smcr-senior-managers-regime.md` (frontmatter + Related Articles) and from `financial-promotions-approver-regime.md` → `smcr-senior-managers-regime` (Related Articles, body — approver regime interacts with SM&CR accountability).

4. **Near-orphan: `prod3-product-governance-mifid`** — added link from `client-categorisation-framework.md` (frontmatter + Related Articles) and from `appropriateness-framework.md` (frontmatter + Related Articles).

5. **Missing COBS 3 cross-references (8 pages):** Added `[[cobs3-client-categorisation]]` and `[[client-categorisation-framework]]` to frontmatter `related` and Related Articles body sections of: `cobs9a-suitability-mifid.md`, `cobs10a-appropriateness-mifid.md`, `cobs11-dealing-managing.md`, `payment-for-order-flow.md`, `prod-product-governance.md`, `prod3-product-governance-mifid.md`, `fca-pfof-supervisory-report-2019.md`, `sysc10-conflicts-of-interest.md`.

**Deferred (1 item):** `payment-for-order-flow.md` regulation field lists `COBS 2.1` — COBS 11.2A.19R's inducements limb references `COBS 2.3A`; to be resolved when COBS 2 is ingested.

**Contradictions found:** None.

## 2026-04-30 ingest | COBS 2.3A — Inducements (MiFID, ETT, OE and IBIP Business)

Source: `raw/fca-cobs/COBS 2.3A Inducements relating to MiFID, equivalent third country or optional exemption business and insurance-based investment products.pdf` (FCA Handbook, April 2026, 14pp)

Pages created (2):
- `wiki/summaries/cobs2-3a-inducements.md`
- `wiki/concepts/inducements-framework.md`

Pages updated (cross-references added) (5):
- `wiki/concepts/payment-for-order-flow.md` — frontmatter + Related Articles: added `cobs2-3a-inducements`, `inducements-framework`; deferred item resolved
- `wiki/concepts/sysc10-conflicts-of-interest.md` — frontmatter + Related Articles: added `cobs2-3a-inducements`, `inducements-framework`
- `wiki/concepts/best-execution-framework.md` — Related Articles: added `cobs2-3a-inducements`, `inducements-framework`
- `wiki/concepts/prod-product-governance.md` — Related Articles: added `cobs2-3a-inducements`, `inducements-framework`
- `wiki/index.md` — two new entries added (summary + concept)

Key coverage:
- Three-track structure: UK retail ban (2.3A.15R — absolute); professional/overseas retail transfer-back (2.3A.16R — accept and return in full); general prohibition + quality-enhancing exception (2.3A.5R/2.3A.6R/2.3A.8R)
- Quality enhancement test: 4 cumulative conditions + ongoing obligation (2.3A.8R(2))
- IBIP additional requirements: 6 criteria including volume/value accelerator test (2.3A.9AR(3)(f))
- Acceptable minor NMBs: 4 criteria + 12 named types including FI/FX/commodity research (h), independent research provider (i), 3-month trial with 12-month gap rule (f), corporate access <£200m (k)
- Disclosure: pre-service + ex-post + annual ongoing (2.3A.10R/11R/12R)
- Record keeping: internal list + written quality link explanation (2.3A.32R)
- Automatic SYSC 10 + COBS 2.1.1R breach on 2.3A.5R violation (2.3A.7E)
- Research unbundling interface: COBS 2.3B carve-out at 2.3A.6R(1)(c); resolves deferred item in payment-for-order-flow.md

Contradictions with existing wiki: None. Note: COBS 2.3B (research unbundling — RPAs, bundling prohibition) is not yet ingested; `cobs2-3a-inducements.md` references it but does not summarise it. Deferred pending source PDF in raw/.

## 2026-04-30 ingest | COBS 2.3B — Inducements and Research (Research Unbundling)

Source: `raw/fca-cobs/COBS 2.3B Inducements and research.pdf` (FCA Handbook, April 2026, 9pp)

Pages created (2):
- `wiki/summaries/cobs2-3b-inducements-research.md`
- `wiki/concepts/research-unbundling.md`

Pages updated (4):
- `wiki/concepts/inducements-framework.md` — COBS 2.3B section expanded with three routes, de-linkage rule, negative list, 2.3B.29R; frontmatter updated
- `wiki/concepts/best-execution-framework.md` — new section "Research — Not an Execution Factor" (COBS 2.3B.29R hard Rule); frontmatter updated
- `wiki/index.md` — two new entries added; best-execution-framework entry updated to mention 2.3B.29R
- Deferred item in cobs2-3a-inducements.md log entry resolved

Key coverage:
- Three permissible routes: direct payment; RPA (2.3B.4R); joint payments (2.3B.25R)
- Core RPA condition: volume/value de-linkage (2.3B.4R(1)(b)); surplus rebate obligation (2.3B.8R(3))
- 12-item negative list: what cannot be paid from RPA/joint payments (2.3B.23G)
- Research ≠ execution factor: hard Rule (2.3B.29R) preventing re-bundling via COBS 11.2A.2R
- Joint payments governance: written policy, allocation structure, annual budget not linked to volumes, periodic assessment, 6-item client disclosure package
- Delegation: permitted but full COBS 2.3B responsibility remains with firm

Contradictions with existing wiki: None.

## 2026-05-02 ingest | CASS 6 — Custody Rules

Source: `raw/fca-cass/CASS 6 Custody rules.pdf` (FCA Handbook, May 2026, 44pp)

Pages created (2):
- `wiki/summaries/cass6-custody-rules.md`
- `wiki/concepts/client-assets-custody.md`

Pages updated (1):
- `wiki/index.md` — new CASS section added; two new entries (summary + concept)

Key coverage:
- Application: four activity tracks (MiFID 6.1.1R(1A); safeguarding/administering 1B; AIF trustee/depositary 1C; UCITS trustee/depositary 1D) plus TTCA firms (1E); DvP exemption (6.1.12R)
- TTCAs: absolute retail ban (6.1.6R — no exceptions); non-retail conditions (documented, proportionate, risk-disclosed)
- Core protection obligation: safeguard ownership rights especially on insolvency; prevent use on own account without express consent (6.2.1R/6.2.2R)
- Registration: legal title in client name or permitted nominee; firm-name only if separately identified (6.2.3R)
- Unclaimed assets: 12-year holding → may pay to charity with perpetual unconditional undertaking to repay; costs from firm's own funds; records indefinitely (6.2.10R/6.2.16G)
- Third-party due diligence: all due skill, care and diligence; selection records 5yr after cessation (6.3.1R/6.3.2AR); jurisdiction restriction — regulated safekeeping only; third country exception narrow (6.3.4R); written custody agreement mandatory (6.3.4AR); identifiability at third party (6.3.4A-1R)
- Security interests/liens: prohibited over client safe custody assets except for client debts or mandatory third-country law (disclosure + best interests) (6.3.6AR)
- SFT consent: express prior written consent with affirmative execution; retail clients = SFTs only FCA expectation (6.4.1R/6.4.1AG); collateral monitoring mandatory (6.4.2AR)
- Three-tier reconciliation: internal custody record check max 1 month (6.6.11R); external custody reconciliation max 1 month (6.6.37R); physical asset reconciliation max 6 months (6.6.22R); frequency determined by transaction volume/value and asset risk (6.6.44R); annual frequency review (6.6.46R)
- Shortfall coverage: mandatory appropriation of own assets (or money as CASS 7 client money) to cover shortfall value immediately on identification, before investigation complete (6.6.54R)
- FCA notification: without delay on six independent triggers including records out of date and inability to conduct any reconciliation (6.6.57R)
- Annual audit: SUP 3.10 auditor confirmation of custody rules compliance (6.6.58G)
- Treatment after failure: return/transfer to client before disposal; written undertaking from receiving firm including 14-day client notification (6.7.2R/6.7.8R)

Contradictions with existing wiki: None. CASS 7 (client money) and CASS 10 (resolution pack) not yet ingested; cass6-custody-rules.md references them where the regimes interact (6.6.54R shortfall funding; 6.7.8R IBSA Regulations) but does not summarise their content.

Next CASS ingests: CASS 7 (client money) → CASS 10 (resolution pack). PDFs to be uploaded to raw/fca-cass/.

## 2026-05-02 ingest | CASS 7 — Client Money Rules

Source: `raw/fca-cass/CASS 7 Client money rules.pdf` (FCA Handbook, May 2026, 95pp + annexes)

Pages created (2):
- `wiki/summaries/cass7-client-money-rules.md`
- `wiki/concepts/client-money-framework.md`

Pages updated (1):
- `wiki/index.md` — two new entries added under UK — FCA Client Assets (CASS)

Key coverage:
- Application: MiFID business (7.10.1R(1)), designated investment business (7.10.1R(2)), ISA and other activities (7.10.1R(3)–(5)); trustee firms (7.10.33R–7.10.40G)
- Professional client opt-out (7.10.10R): written acknowledgement; client ranks as unsecured general creditor on failure; cannot be used for retail clients
- Credit institution/approved bank carve-out (7.10.16R): money held as banker not trustee; no CASS distribution on failure for those funds
- TTCA: retail ban absolute on money (7.11.1R(3)(a)); non-retail proportionality documentation required (7.11.4AR); money transferred under TTCA ceases to be client money (7.11.1R(4))
- DvP exemption: one business day window (7.11.14R); after expiry money must be treated as client money
- Interest: firm must pay or account for interest to retail clients unless written notice given (7.11.32R)
- Unclaimed money: 6-year inactivity threshold; three disposal routes — full trace + charity (7.11.50R); de minimis £25 retail/£100 professional (7.11.57R); Dormant Assets Act 2022 transfer (7.11.57AR); all costs from firm's own funds (7.11.58G); perpetual unconditional repayment undertaking required in every route
- Segregation — normal approach (7.13.6R): all client money received directly into client bank account; no transit through own account; withdrawal within 1 business day (7.13.13R)
- Segregation — alternative approach (7.13.54G/7.13.55R): client money received into own account first, then daily adjusted; requires documented justification, FCA notification ≥3 months before adoption (7.13.57R), independent auditor's report (7.13.58R), annual review (7.13.59R), daily reconciliation (7.13.62R), mandatory prudent segregation buffer — quarterly calculation, 3-month historical lookback, annual CASS oversight review (7.13.65R)
- 20% group entity cap (7.13.20R): hard limit — cannot deposit >20% of total client money held with any single group entity; proportionality exception requires immediate FCA notification (7.13.21AR/7.13.21CR)
- Prudent segregation (7.13.41R): own money into client bank account to prevent shortfall; retained amount = client money; 5-year prudent segregation record (7.13.53R)
- Qualifying MMF (7.13.28R): explicit client consent; units treated as safe custody assets not client money
- Third-party holding (7.14.2R): permitted only for client transactions or collateral obligations; firm retains fiduciary duty; retail client must be notified
- Records (7.15.2R/7.15.5R): distinguish client money per client from own money; show and explain all transactions; 5-year retention; determine per-client total within 2 business days
- Internal reconciliation (7.15.15R): every business day; T-1 close of business basis; one standard method only; internal records only (not bank statements); shortfall paid to client bank account / excess withdrawn by close of business same day (7.15.29R)
- External reconciliation (7.15.22R): max 1 month between reconciliations; frequency decision reviewed annually (7.15.26R); records retained indefinitely (7.15.24R); unresolved discrepancy showing potential shortfall → assume that record correct and pay own money in (7.15.32R)
- FCA notification (7.15.33R): 6 independent triggers; trigger 6 is retrospective — fires on discovering material segregation shortfall at any point in preceding 12 months
- Standard methods (CASS 7.16): individual client balance method (7.16.16R — formula table in 7.16.22E; available to all except loan-based crowdfunding firms); net negative add-back method (7.16.17R — available only to CASS 7 asset management firms and loan-based crowdfunding firms without margined transactions)
- Statutory trust (7.17.2R): s.137B FSMA; legal title in firm, beneficial ownership in clients; on insolvency general pool distributes pro-rata; five-level priority stack; no pre-funding prohibition (7.17.5G)
- Acknowledgement letters (7.18.2R/7.18.3R): mandatory before using any client bank account or client transaction account; prescribed FCA template (Annexes 2/3/4); bank waives all recourse and set-off rights; fixed text cannot be amended; periodic accuracy reviews; 5-year retention after account closure
- Sub-pools (CASS 7.19): clearing members only; each sub-pool tied to a specific net margined omnibus client account at an ACC; sub-pool disclosure document signed by client required before holding (7.19.11R); on insolvency: general pool distributes pro-rata; sub-pool transferred for porting or distributed to beneficiaries; material change requires 2-month advance written notice to beneficiaries and FCA (7.19.18R/7.19.21R)

Contradictions with existing wiki:
- CASS 6 unclaimed assets threshold is 12 years; CASS 7 unclaimed money threshold is 6 years — different thresholds correctly documented in both sourcebook summaries and concept pages. Not a contradiction — intentional regulatory distinction.
- CASS 6 reconciliation: internal custody record check and external custody reconciliation both max 1 month; CASS 7 internal reconciliation is mandatory every business day. Both correctly documented — intentional different cadences for money vs assets.

Next CASS ingest: CASS 10 (resolution pack) — PDF already in raw/fca-cass/.

## 2026-05-03 ingest | CASS 10 — CASS Resolution Pack

Source: `raw/fca-cass/CASS 10 CASS resolution pack.pdf` (FCA Handbook, May 2026, 9pp)

Pages created (1):
- `wiki/summaries/cass10-resolution-pack.md`

Pages updated (1):
- `wiki/index.md` — one new entry added under UK — FCA Client Assets (CASS)

Note: No separate concept page created. CASS 10 is a tightly scoped procedural chapter (3 sections, 9 pages) with no separable conceptual framework — a single summary page is the appropriate output.

Key coverage:
- Application: CASS 6 firms (custody) and CASS 7 firms (client money); excludes arrangers and small AIFMs carrying only excluded custody activities (10.1.1R)
- Purpose: three audiences — insolvency practitioner (timely return); Bank of England (resolution under Banking Act); FCA (10.1.2G) — makes CASS 10 a recovery and resolution instrument, not just a client protection measure
- Maintenance obligation: pack must exist and be current at all times; not assembled on failure (10.1.3R/10.1.4G)
- 48-hour retrieval: hard outer limit from insolvency officer appointment OR FCA/Bank of England request (10.1.7R); certain items should be immediately retrievable (master doc, institutions doc, acknowledgement letters, most recent reconciliations — 10.1.9E); systems must remain operational post-insolvency (10.1.9E(2))
- Nine mandatory content items (10.2.1R): (1) master retrieval document; (2) institutions document — full name, address, phone, all account numbers (10.2.3R); (3) agents document; (4) key individuals — CASS-critical senior managers/directors + CASS oversight officer; (5) executed agreements and acknowledgement letters per institution; (6) group and third-party map — entity type, jurisdiction, operational functions; (7) third-party agreements; (8) third-party access/transfer document (critical for outsourced custody); (9) procedures manual
- Accuracy: ongoing review obligation; material inaccuracies corrected within 5 business days of change of circumstances (10.1.11R)
- Governance: CASS oversight officer must report at least annually to governing body on CASS 10 compliance (10.1.14R)
- FCA notification: immediately on inability to maintain/retrieve the pack (10.1.16R) — standalone trigger separate from CASS 6.6.57R and CASS 7.15.33R
- Group reliance: permitted if group member subject to same rule and 48-hour retrieval capability preserved; requires inter-group delivery arrangements (10.1.6R/10.1.8R)
- Existing records (10.3.1R): designates specific CASS 6/7/SYSC/COBS records as pack components without changing their underlying retention requirements

Contradictions with existing wiki:
- None. CASS 10 references CASS 6.6.57R and CASS 7.15.33R as existing notification regimes; CASS 10.1.16R is a separate trigger correctly documented as standalone.

CASS block complete: CASS 6, CASS 7, CASS 10 all ingested. Ready for lint.

## 2026-05-04 lint (pass 29)

Scanned all wiki pages (CASS block: cass6-custody-rules, cass7-client-money-rules, cass10-resolution-pack, client-assets-custody, client-money-framework, plus derived/consumer-duty-product-lifecycle-checklist).

**Issues found and fixed (7 total — 2 structural, 5 missing backlinks):**

**C1 — Frontmatter path mismatch (1 fix):**
- `derived/consumer-duty-product-lifecycle-checklist.md`: frontmatter `related:` listed `summaries/fca-consumer-duty-implementation-review-2024.md` but the file is at `derived/fca-consumer-duty-implementation-review-2024.md`. Fixed: path corrected to `derived/`.

**C2 — Missing backlinks to cass10-resolution-pack from CASS pages (6 fixes across 4 files — frontmatter + body):**
- `summaries/cass6-custody-rules.md`: added `summaries/cass10-resolution-pack.md` to frontmatter `related` and `[[cass10-resolution-pack]]` to Related Articles
- `summaries/cass7-client-money-rules.md`: same
- `concepts/client-assets-custody.md`: same
- `concepts/client-money-framework.md`: same

No contradictions. No stale claims. No broken wikilinks. No orphan pages.

**Final state:** structural integrity maintained across CASS block.

## 2026-05-04 ingest | CASS 1A — CASS Firm Classification and Operational Oversight

Source: `raw/fca-cass/CASS 1A CASS firm classification and operational oversight.pdf` (FCA Handbook, May 2026, 10pp)

Pages created (1):
- `wiki/summaries/cass1a-firm-classification-oversight.md`

Pages updated (1):
- `wiki/index.md` — new entry added to UK — FCA Client Assets (CASS) Summaries table

Key coverage:
- Application: applies to any firm subject to CASS 6 or CASS 7; classification based on highest amount held in previous calendar year; new firms use projected amounts; does not apply post-failure (1A.1.1R/1A.1.5R)
- Three-tier classification with hard thresholds (CASS 1A.2.7R): small (<£1m client money AND <£10m safe custody assets); medium (£1m–£1bn OR £10m–£100bn); large (>£1bn OR >£100bn); classification driven by the HIGHER of the two figures — single figure breach lifts to higher tier
- Annual FCA notification by 15th BD of January (CASS 1A.2.9R): highest amounts held + CASS firm type; classification takes effect 1 February (CASS 1A.2.10R); medium/large: CMAR under SUP 16.14 satisfies notification obligation (CASS 1A.2.11G)
- Voluntary opt-up election (CASS 1A.2.5R): small → medium or medium → large; written FCA notification at least 1 week before effective date; FCA must not have objected
- Small firm oversight (CASS 1A.3.1R): allocate single director/SM for CASS compliance oversight + governing body reporting
- Medium/large firm oversight (CASS 1A.3.1A R): formal CASS operational oversight function; adds CMAR submission obligation (SUP 16.14); function is NOT a separate approved person requirement; if held by a non-SMF → CASS oversight FCA certification function (SYSC 27.8.1R)
- Large AIFM/UCITS ManCo alternative allocation route (CASS 1A.3.1C R)
- Dual allocation restriction (CASS 1A.3.2A R): no additional responsibilities unless firm satisfied on reasonable grounds person can still discharge CASS oversight effectively and CASS compliance won't be compromised
- Job-share permitted (CASS 1A.3.2B R)
- Allocation record retention: 5 years (CASS 1A.3.3R)

Contradictions with existing wiki: None. CASS 1A references CASS 6 and CASS 7 obligations; the CASS oversight function cross-references smcr-certification-regime (SYSC 27.8.1R CASS oversight as FCA certification function) — entirely consistent.

CASS 1A is the governance/classification layer that determines which CASS obligations apply and at what intensity. It completes the CASS section structure alongside CASS 6 (custody), CASS 7 (client money), and CASS 10 (resolution pack).

## 2026-05-04 ingest | SUP 3 — Auditors

Source: `raw/fca-handbook/SUP 3 Auditors.pdf` (FCA Handbook, May 2026, 20pp)

Pages created (1):
- `wiki/summaries/sup3-auditors.md`

Pages updated (3):
- `wiki/summaries/cass6-custody-rules.md` — added `summaries/sup3-auditors.md` to frontmatter `related:` and `[[sup3-auditors]]` to Related Articles (CASS 6.6.58G references the SUP 3.10 audit requirement; reverse link was absent)
- `wiki/concepts/client-assets-custody.md` — same
- `wiki/index.md` — new "UK — FCA Supervision (SUP)" section added with sup3-auditors.md row

Key coverage:
- Application: SUP 3.2–3.9 applies broadly to all in-scope firm types; SUP 3.10 (client assets notification and report) and SUP 3.11 (review of report) apply specifically to CASS 6 and CASS 7 firms (SUP 3.1.2R application table rows 5B, 7–7D, 10)
- Five-part appointment obligation (SUP 3.3.2R): (1) appoint eligible auditor; (2) notify regulator of vacancy without delay via SUP 15 Ann 3; (3) fill vacancy; (4) enable replacement to take office as soon as practicable; (5) notify regulator of appointment with name/address/effective date
- Regulator backstop power (SUP 3.3.7R): if firm fails to appoint within 28 days of vacancy, appropriate regulator may itself appoint
- Cooperation hard rule (SUP 3.6.1R): full access to books/accounts/documents at all times; outsourcing/AR/tied agent access must be contractually extended to auditor (SUP 3.6.4R)
- s.346 FSMA criminal offence: knowingly/recklessly giving false or misleading information to auditor = criminal offence (not merely regulatory breach)
- Dual-track independence: firm-side (SUP 3.5.2R/3.5.3R — reasonable steps; notify FCA if unachievable); auditor-side (SUP 3.8.5R/3.8.6R — auditor's own obligation; appropriate action on conflicts)
- Auditor cooperation with FCA (SUP 3.8.2R): auditor must cooperate with FCA in discharge of its functions; cannot be overridden by client confidentiality
- Auditor skilled person assistance (SUP 3.8.4R): must give s.166 skilled person all reasonable assistance (FSMA s.166(5))
- Auditor direct notification right (SUP 3.8.10G; FSMA ss.342(5)/343(5)): auditor can notify FCA directly without firm consent; protected from breach of duty/defamation; firm cannot contractually exclude this right
- Annual client assets report (SUP 3.10): source of obligation cited at CASS 6.6.58G; reasonable assurance engagement on client assets systems/controls; auditor must also proactively notify FCA on discovery of CASS non-compliance (not conditional on firm notification)
- Firm review obligation (SUP 3.11): firm must review findings and address deficiencies; report triggers CASS 1A.3 oversight function duties and CASS 6.6/7.15 obligations
- Principle 11 / SUP 15 (SUP 3.7.2G): qualified audit opinion or internal controls management letter = Principle 11 notification trigger

Contradictions with existing wiki: None. CASS 6.6.58G cross-references the SUP 3.10 audit requirement; this ingest creates the source page. The CASS 1A supervision section (CASS 1A.3.1A R) is consistent with the SUP 3.10/3.11 annual review cycle — CASS oversight officer reviews the client assets report and reports to governing body annually.

New domain: First SUP sourcebook content in the wiki.

## 2026-05-04 ingest | SYSC 15A — Operational Resilience

Source: `raw/fca-handbook/SYSC 15A Operational resilience.pdf` (FCA Handbook, May 2026, 16pp)

Pages created (1):
- `wiki/summaries/sysc15a-operational-resilience.md`

Pages updated (2):
- `wiki/concepts/operational-resilience.md` — full rebuild from sourcebook rules; stale transitional deadline language ("31 March 2025 deadline" framing) removed and replaced with "all transitional deadlines passed, obligations fully live"; sources updated from portfolio letter only to 10 sourcebook citations; 6 new sections added (scope table; PI/EMI narrowing; 13-factor IBS identification framework; impact tolerance capability obligation; 5-asset mapping detail; 3-trigger testing; lessons-learned loop; 9-item self-assessment record; governing body approval/review; communications hard rules); related articles updated with new summary page
- `wiki/index.md` — new sysc15a-operational-resilience.md row added to UK — FCA Systems and Controls (SYSC) Summaries; operational-resilience.md concept entry updated to reflect rebuilt content

Key coverage (new to wiki):
- Application scope table (SYSC 15A.1.1R): enhanced SMCR, banks, DIFs, building societies, Solvency II, UK RIEs, EMIs, PIs, RAISPs, CTPs; TP/TA firms excluded (15A.1.3R); firms with non-UK registered/head office excluded (15A.1.4R)
- PI/EMI/RAISP activity narrowing (SYSC 15A.1.8R): obligations apply only to payment services and e-money activities — not other regulated activities
- Impact tolerance as hard capability Rule (SYSC 15A.2.9R): firm must ensure it CAN REMAIN within tolerance in severe but plausible disruption — not merely assess or plan
- Principle 11 notification on any failure to meet impact tolerance (SYSC 15A.2.11G): no materiality threshold
- EBA Guidelines ICT/security risk management interface for PSPs (SYSC 15A.2.12G/2.13G)
- Five-asset mandatory mapping: people/processes/technology/facilities/information (SYSC 15A.4.1R); extends to third-party resources (15A.4.2G); annual + material change review (15A.4.3R)
- Scenario testing: mandatory (15A.5.3R); range of adverse circumstances of varying nature/severity/duration (15A.5.4R); three triggers (15A.5.7R — material change / post-improvement / regular basis); five named scenario types (15A.5.6G — data corruption; people/facilities unavailable; third-party failure; market participant disruption; technology loss)
- Lessons learned: mandatory post-test and post-disruption (15A.5.8R); improvements mandatory (15A.5.9R) — both hard Rules
- Nine-item self-assessment written record (15A.6.1R); 6-year retention per version (15A.6.2R)
- Governing body must approve AND regularly review self-assessment records — hard Rule (15A.7.1R)
- Communications strategy mandatory (15A.8.1R); clear/timely/relevant communications on disruption hard Rule (15A.8.3R)
- FCA supervisory backstop: FSMA ss.55J/55L on own initiative (15A.9.3G)

Stale claim corrected in concept page:
- Prior concept page referenced "31 March 2025 mapping and testing deadline" framing as though the deadline was still upcoming or recently passed and firms remain in breach only if they missed it. The May 2026 sourcebook contains no transitional provision — the deadline has long passed. Updated to: "All transitional deadlines passed 31 March 2025. Obligations are fully live. Firms without compliant mapping, testing, and self-assessment records are in current breach."

Contradictions with existing wiki: None. The existing operational-resilience.md was sourced from the portfolio letter — this ingest sources it from the SYSC 15A sourcebook directly. No factual contradictions; the rebuild adds rule-level precision to what the portfolio letter had described at framework level.

## 2026-05-05 ingest | MLR 2017 — SI 2017/692 Primary Legislation Reference

Source: `raw/fca-financial-crime/uksi_20170692_en.pdf` (116 pages; The Money Laundering, Terrorist Financing and Transfer of Funds (Information on the Payer) Regulations 2017)

Pages written / updated:
- `wiki/summaries/mlr-2017.md` — new; primary legislation reference covering all 110 regulations + 7 schedules
- `wiki/concepts/aml-ctf-framework.md` — added mlr-2017.md to related: and Related Articles
- `wiki/concepts/customer-due-diligence.md` — added mlr-2017.md to related: and Related Articles
- `wiki/concepts/simplified-due-diligence.md` — added mlr-2017.md to related: and Related Articles
- `wiki/index.md` — new row for mlr-2017.md in UK — FCA Financial Crime Summaries

Key coverage (new to wiki):
- Relevant person categories (reg 8): 8 categories including credit institutions; Annex I financial institutions; auditors/IPs/accountants/tax advisers; independent legal professionals; TCSPs; estate agents; HVDs; casinos
- Reg 9 UK business test: triggers on carrying on business in the UK (not merely being UK-incorporated)
- Reg 15 exclusion: 7 cumulative conditions all required — <£100k financial activity turnover; ≤€1,000/customer/transaction; ≤5% total turnover; ancillary; non-remittance; not within reg 8(2)(a)–(f)/(h); only to customers of main activity
- Reg 5 BO — bodies corporate: >25% shares/voting rights/appointment right OR ultimate management control; PSC register alone does not discharge verification (reg 28(9))
- Reg 6 BO — trusts: settlor; all trustees; identified beneficiaries; class of persons in whose main interest trust operates; any person with "control" (six defined powers including add/remove beneficiaries, appoint/remove trustees, veto decisions, dispose of property, vary/terminate)
- Reg 7 supervisory four-way split: FCA (authorised persons, EMIs); Schedule 1 professional bodies (their members); HMRC (HVDs, unregulated MSBs/TCSPs, estate agents, unsupervised accountants/auditors); Gambling Commission (casinos)
- Regs 16–17: NRA and supervisory authority RA obligations; firms must consider NRA in own assessment
- Reg 18 firm risk assessment: mandatory; five categories (customers, countries, products/services, transactions, delivery channels); written record; on request to supervisory authority
- Reg 21 internal controls: board-member compliance officer + employee screening + independent audit + MLRO; 14-day notification; EMI/PSP additional monitoring function (reg 21(7))
- Reg 27 CDD triggers: business relationship; funds transfer >€1,000 (occasional); suspect ML/TF; doubt prior ID; ≥€15,000 non-HVD/casino; ≥€10,000 cash HVDs; ≥€2,000 casinos
- Reg 33 EDD — 7 mandatory triggers: high ML/TF firm risk; high-risk third country; correspondent relationships; PEP/family/associate; false/stolen ID; complex/unusually large transaction; other higher-risk
- Reg 35 PEP: senior management approval; source of wealth/funds; enhanced monitoring; 12-month post-PEP minimum; "prominent public functions" defined list at reg 35(14); known close associate standard
- Reg 37 SDD: low ML/TF risk; four termination circumstances
- Reg 38 e-money carve-out: ≤€250 stored (≤€500 UK-only); not reloadable or ≤€250/month UK-only; goods/services only; anonymous funding prohibited; cash redemption >€100 triggers CDD
- Reg 39 reliance: permissible on relevant persons, EEA-supervised obliged entities, equivalent third-country firms, member organisations; firm retains liability; immediate information obligation; cannot rely on high-risk third country firms; group reliance compliant under reg 39(6)
- Reg 40 record-keeping: 5 years default; max 10 years for business relationship records; deletion obligation on expiry
- Regs 42–45: BO information registers; trust BO register
- Regs 46–64: supervision; registration (Annex I, TCSPs, HVDs, estate agents); fit and proper test (reg 58; Schedule 3 = automatically not fit and proper)
- Reg 86: criminal offence for contraventions; 2 years on indictment; due diligence defence; civil penalty exclusion on conviction
- Reg 92: body corporate officer liability for corporate offences committed with consent/connivance/neglect

Contradictions with existing wiki: None. The existing AML concept pages (aml-ctf-framework.md, customer-due-diligence.md, simplified-due-diligence.md) correctly cite MLR 2017 regulations throughout but lacked a primary legislation reference page — mlr-2017.md now fills that gap as the statutory anchor. No factual contradictions found; the new page adds statutory precision (exact regulation numbers, cumulative conditions, schedule references) to what the FCG/JMLSG concept pages describe at guidance level.

## 2026-05-05 ingest | CONC 8 — Debt Advice (Sourcebook Reference)

Source: `raw/fca-conc/CONC 8 Debt advice.pdf` (26 pages; May 2026 version of FCA Consumer Credit sourcebook CONC chapter 8)

Pages written / updated:
- `wiki/summaries/conc8-debt-advice.md` — new; comprehensive sourcebook reference covering all 10 sections (CONC 8.1–8.10)
- `wiki/index.md` — new row added to UK — FCA Consumer Credit (CONC) Summaries, after conc7

Key coverage (new to wiki):
- Application scope: debt counselling, debt adjusting, providing credit information services; profit-seeking and NFP alike; regulated and unregulated credit/consumer hire agreements (CONC 8.1.1R; 8.1.4G)
- MoneyHelper mandatory signpost: debt management firms must include in first written or oral communication + website link (CONC 8.2.4R — hard Rule, no exceptions)
- Lender notification obligation: must notify lenders as soon as possible when payments will not be made and for how long (CONC 8.2.6R)
- Vulnerable customers: mandatory policies and procedures to identify particularly vulnerable customers (CONC 8.2.7R)
- 14-item pre-contract disclosure in durable medium including: credit rating consequences; timing gap between receiving and distributing customer funds; FSCS compensation information (CONC 8.3.1R)
- Advice quality standard: best interests + appropriate to individual circumstances + based on full financial assessment (CONC 8.3.2R)
- Full financial assessment: financial position; personal circumstances (incl. prior debt solutions and why they failed); foreseeable changes (CONC 8.3.7R)
- Referral obligation to NFP debt advice body where customer has immediate needs firm can't address OR no disposable income to pay fees (CONC 8.3.7R(3))
- 14-item risk/consequence disclosure in durable medium: consequences of missing priority debts; DMP risk disclosures; IVA-specific risks (CONC 8.3.4R)
- Debt packager commission ban (CONC 8.3.11R): firms doing debt counselling but not providing solutions may not receive any commission/fee/consideration from solution providers for referrals or related services; extends to associates and ARs; AR structure cannot be used to avoid the prohibition (8.3.16R; 8.3.17G); permitted carve-outs are narrow (statutory/DAS Scotland/Insolvency Service only)
- Four absolutely prohibited contract terms: understanding declarations; lender correspondence restrictions; no-liability clauses; no-refund clauses (CONC 8.4.3R)
- Financial statement accuracy and customer consent requirement before submission to lenders (CONC 8.5.1R)
- Advice to stop contractual payments must be demonstrably in customer's best interests (CONC 8.6.1R)
- Fee structure prohibition: must not consume substantially all payments before lender repayments begin; practical 50% one-month test (CONC 8.7.2R; 8.7.3G)
- Nine prohibited charging practices including: unjustified solution-switching with extra charge; pre-contract payments; premium rate lines for refund customers (CONC 8.7.6R)
- Eleven ongoing DMP obligations: contact; monitoring; plan adaptation; lender-response notification; annual statement; record accuracy; account accuracy checks (CONC 8.8.1R)
- Lead generator firm responsibility where knew or ought to have known of misconduct; mandatory pre-agreement checks (CONC 8.9.1G; 8.9.2R); FCA traceability expectation (8.9.5G)
- Credit information services prohibitions: no claim to remove accurate negatives; no misleading about retention periods; no new credit file claims (CONC 8.10.3R)

Contradictions with existing wiki: None found. The existing CONC concept pages do not cover CONC 8 debt advice. The conc-debt-recovery-treatment.md covers CONC 7 treatment standards which are operationally adjacent but do not overlap — the debt counsellor 30-day suspension in CONC 7 is the lender-side counterpart to the CONC 8 obligations on debt counsellors themselves. The existing conc-scope-and-application.md correctly notes debt counselling as a regulated activity type; CONC 8 provides the conduct framework for it.

Transitional note: CONC TP 8 contains a transitional provision for the debt packager commission ban. CONC 8.3.10G(5) notes that during the transitional period in CONC TP 8(6)–(7), the FCA considers it unlikely that increasing referrals to debt solution providers would be in accordance with Principles 6 and 12. The status of any remaining transitional period should be checked against current CONC TP 8 if advising on grandfathered arrangements.

## [2026-05-05] lint | Full wiki lint — broken wikilinks and orphan resolution

**Scope:** All 147 wiki pages scanned. Four checks: broken wikilinks, orphan pages, stale temporal claims, missing concept pages.

**Findings and fixes applied:**

1. **Broken wikilinks fixed (5 instances — `.md`-suffix regression in 4 files):**
   - `concepts/financial-promotions-approver-regime.md` — `[[ps23-6-cryptoasset-financial-promotions.md]]` → `[[ps23-6-cryptoasset-financial-promotions]]`
   - `concepts/appropriateness-framework.md` — `[[cobs9b-targeted-support.md]]` and `[[targeted-support-service.md]]` → suffix-free forms
   - `concepts/prod-product-governance.md` — `[[prod3-product-governance-mifid.md]]` → `[[prod3-product-governance-mifid]]`
   - `summaries/prod3-product-governance-mifid.md` — `[[mifid-ii-product-governance-review-2021.md]]` → `[[mifid-ii-product-governance-review-2021]]`
   - All pages exist; links were broken only by the `.md` suffix. Regression from prior lint fix (log 2026-04-xx).

2. **Orphan resolved — `summaries/conc8-debt-advice` (created this session):**
   Added `[[conc8-debt-advice]]` to Related Articles body sections and `summaries/conc8-debt-advice.md` to frontmatter `related:` fields of:
   - `concepts/conc-scope-and-application.md`
   - `concepts/conc-financial-difficulty-indicators.md`
   - `concepts/conc-debt-recovery-treatment.md`
   - `summaries/conc7-arrears-default-recovery.md`

3. **Stale temporal claims:** None found. All deadline references (31 March 2025, DUA Act 19 June 2025) correctly framed as past events or uncertainty-flagged.

4. **Missing concept pages:** None found from wikilink graph. All referenced slugs resolve to existing pages.

5. **Aliased wikilinks (pipe-style `[[slug|display]]`):** 8 instances confirmed. Slug-side valid in all cases; no action required.

**Post-lint state:** Zero broken wikilinks in wiki articles. Only `[[slug]]` and `[[wikilinks]]` in `log.md` meta-text remain in broken-link scan — both are non-article and non-actionable (logged in prior lint at line 1458).
