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
