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
