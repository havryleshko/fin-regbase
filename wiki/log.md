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
- FG21/1 (FCA Guidance on the fair treatment of vulnerable customers) — referenced in vulnerable-customers.md and implementation review page
- FCA Dear CEO letter to wealth and stockbroking firms — referenced in vulnerable-customers.md and implementation review page
