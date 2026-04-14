---
title: "ICO Guide to Individual Rights"
jurisdiction: UK
regulator: ICO
regulation: UK GDPR (Articles 12–22)
status: current
effective_date: 2023-05-19
last_updated: 2026-04-14
sources:
  - "ICO Guide to Individual Rights v0.0.2 (19 May 2023)"
tags: [uk-gdpr, individual-rights, data-subject-rights, ICO, UK, Art-22, profiling, erasure, portability, right-to-object]
related:
  - concepts/uk-gdpr-individual-rights-overview.md
  - concepts/uk-gdpr-automated-decision-making.md
  - concepts/uk-gdpr-right-to-object.md
  - concepts/uk-gdpr-right-to-erasure.md
  - concepts/uk-gdpr-right-to-be-informed.md
  - concepts/uk-gdpr-lawful-basis.md
  - concepts/uk-gdpr-data-protection-principles.md
  - summaries/ico-guide-lawful-basis-2026.md
  - summaries/ico-guide-data-protection-principles.md
---

# ICO Guide to Individual Rights

## What This Document Is

The ICO Guide to Individual Rights (v0.0.2, 19 May 2023) is the ICO's operational guidance covering all eight data subject rights under UK GDPR Articles 12–22. Each right is covered in a separate chapter containing an "at a glance" summary, compliance checklists, and narrative guidance.

The guidance predates the Data Use and Access Act (DUA Act), which is currently progressing through Parliament. It will be updated when the DUA Act receives Royal Assent.

ICO guidance is not primary legislation but carries significant enforcement weight. The ICO may use it to assess whether a firm reasonably understood its obligations when deciding whether to take regulatory action.

## Coverage Note — Right of Access (SAR)

The Guide's chapter on the right of access (Art. 15) is a stub — it provides a brief "at a glance" and refers readers to the ICO's dedicated Subject Access guidance. SAR operational detail is not covered here or in the wiki. This requires a separate ingest of the ICO's SAR guidance.

## Document Structure

| Chapter | Article | Content |
|---------|---------|---------|
| Right to be informed | Art. 13–14 | Mandatory privacy notice content; timing rules; layered notices; AI/profiling transparency |
| Right of access | Art. 15 | Stub — see dedicated ICO SAR guidance |
| Right to rectification | Art. 16 | 1-month deadline; verbal requests; third-party notification; restriction during accuracy check |
| Right to erasure | Art. 17 | 6 triggers; 5 exemptions; third-party and processor notification; children's online services |
| Right to restrict processing | Art. 18 | 4 triggers; storage-only default with 4 exceptions; technical methods; notification before lifting |
| Right to data portability | Art. 20 | Consent/contract + automated only; observed included, inferred excluded; CSV/XML/JSON |
| Right to object | Art. 21 | Absolute direct marketing right (suppression not erasure); compelling legitimate grounds test; Art. 21(6) research |
| Rights related to automated decision-making | Art. 22 | Restriction to 3 grounds; special category data; DPIA; meaningful logic; human review; challenge |

## Cross-Cutting Framework (Article 12)

Article 12 governs how all rights requests must be handled. These provisions apply uniformly across all eight rights.

**Deadline:** 1 calendar month from receipt. Calculated from the day of receipt to the corresponding date in the next month (e.g., 3 September → 3 October). If the following month has no equivalent date (e.g., 31 March → 30 April). If the deadline falls on a weekend or bank holiday, it extends to the next working day. **28 days is the recommended operational target** for consistent internal compliance.

**Extension:** Up to 2 further months for complex requests or multiple requests from the same individual. Must notify the individual within the first month, with reasons.

**Verbal requests:** Valid. Can be made to any employee, any part of the organisation. Does not need to reference the specific article or use legal language.

**Manifestly unfounded:** Two tests — (1) the individual clearly has no genuine intention to exercise the right (e.g., offers to withdraw in exchange for a benefit); or (2) malicious intent to harass (stated intention to disrupt; unsubstantiated accusations against staff; targeting a specific employee with a personal grudge; systematic campaign of requests). Aggressive language alone does not make a request manifestly unfounded. Case by case — no blanket policies.

**Excessive:** Repeats the substance of previous requests OR overlaps with other requests. NOT automatically excessive because the same issue is raised again if the controller failed to handle the previous request properly.

**Fee:** Only for manifestly unfounded or excessive requests, based on administrative costs.

**ID verification:** Proportionate only — request only what is necessary to confirm identity, taking account of the data held, its nature, and purpose.

## Right to Be Informed — Summary

**Art. 13 (direct collection):** Must provide at point of collection: controller identity and DPO contact; purposes and legal basis per activity; legitimate interests relied upon (Art. 6(1)(f) only); recipients or categories; international transfers; retention period; all eight rights; right to withdraw consent; right to lodge ICO complaint; whether provision is a statutory/contractual requirement; existence of automated decision-making with meaningful logic, significance and envisaged consequences.

**Art. 14 (indirect collection):** Same items as Art. 13, plus: categories of personal data collected; source of the data (including whether from publicly accessible sources).

**Art. 14 timing:** Within 1 month of obtaining the data; or before first communication; or at first disclosure to third party — whichever is earliest.

**Delivery:** Layered notices, just-in-time notices, dashboards, icons, and mobile-optimised formats are all acceptable. Plain, intelligible language required.

## Right to Rectification — Summary

1-month deadline. Verbal requests valid. Incomplete data can be completed (including via a supplementary statement). During accuracy verification: restriction of processing can be applied rather than immediate action. Third parties to whom data was disclosed must be notified unless disproportionate effort or impossible. Manifestly unfounded and excessive rules apply.

## Right to Erasure — Summary

**6 triggers:** (a) no longer necessary; (b) consent withdrawn and no other basis; (c) successful Art. 21 objection; (d) unlawfully processed; (e) legal obligation requires erasure; (f) children's online services (Art. 8).

**5 exemptions (Art. 17(3)):** (a) freedom of expression/information; (b) legal obligation or public task/official authority; (c) public health; (d) archiving/research/statistics under Art. 89(1) where erasure would seriously impair; (e) legal claims.

Third parties must be notified where data was made publicly available. Processors and backup systems must also be instructed to erase.

**Financial services note:** Exemptions (b) and (e) directly protect CDD/KYC record-keeping and records subject to litigation hold or regulatory investigation.

## Right to Restrict Processing — Summary

**4 triggers:** (a) accuracy contested — restriction during verification; (b) processing unlawful but individual prefers restriction to erasure; (c) controller no longer needs data but individual needs it for legal claims; (d) Art. 21 objection pending — awaiting legitimate grounds assessment.

Restricted data: storage only, plus 4 exceptions (consent; legal claims; protection of another person; substantial public interest). Technical methods: segregation, flagging, temporary removal to offline archive, suppression from active processing. Must notify individual before lifting.

## Right to Data Portability — Summary

Applies only where: basis is consent or contract AND processing is by automated means.

"Provided to the controller" includes observed data (browsing history, location, usage, smart meter readings) but NOT inferred or derived data (credit scores, risk ratings, segments, profiles created by the controller).

Format: structured, commonly used, machine-readable — CSV, XML, JSON.

Controller-to-controller transmission: required where technically feasible. Receiving controller bears full UK GDPR responsibility from point of receipt. Third-party data included in a portability response must be handled with care — cannot be used for the receiving controller's own direct marketing.

## Right to Object — Summary

**Direct marketing (Art. 21(2)):** Absolute right. No exemptions. No grounds to refuse. Must stop processing immediately. Suppression (not erasure) is the standard response — retain just enough to honour the preference.

**Legitimate interests / public task (Art. 21(1)):** Not absolute. Controller may continue if: (a) compelling legitimate grounds override the individual's interests/rights/freedoms; or (b) legal claims necessity. Individual's substantial damage or distress strengthens their grounds.

**Research/statistics (Art. 21(6)):** More restricted right — only applies where basis is public task (official authority) or legitimate interests. Does not apply to public interest archiving/research tasks.

**Notification obligation:** Must proactively inform individuals of the right to object at first communication where processing is for direct marketing, LI, or public task — presented clearly and separately.

## Rights Related to Automated Decision-Making — Summary

**Art. 22 restriction:** Solely automated decisions + legal or similarly significant effects = restricted. ICO example of "similarly significant": automatic refusal of online credit application.

**Three permitted grounds:** (a) contract necessity; (b) domestic law authorisation; (c) explicit consent.

**Special category data:** Additional restriction — only explicit consent OR substantial public interest (regardless of which Art. 22(2) ground applies).

**Art. 22 mandatory obligations:** DPIA; meaningful logic/significance/consequences disclosure; simple mechanism for human review, expression of view, explanation, and challenge; identify staff authorised to review; appropriate statistical procedures; regular accuracy and bias checks; risk-proportionate data security.

**General profiling (Art. 22 does not apply):** Must still have lawful basis; comply with principles; disclose profiling activity; enable Art. 21 right to object; additional checks for vulnerable groups and children.

## Key Points for Agents

- The Art. 12 cross-cutting framework (1-month calendar month deadline, verbal requests valid, manifestly unfounded and excessive definitions) applies to all eight rights.
- Direct marketing objection (Art. 21(2)) is absolute. Response is suppression, not erasure.
- Art. 22 covers solely automated decisions with legal or similarly significant effects. Automatic credit refusal is the ICO's named fintech example.
- Special category data in Art. 22 processing: only explicit consent or substantial public interest — overrides contract necessity and law authorisation grounds.
- Art. 17 erasure exemptions (b) and (e) protect CDD record retention and litigation hold records from erasure demands.
- Portability right: consent/contract + automated only; observed data in scope; inferred/derived data out of scope.
- Right of access (SAR) is not covered operationally in this document — a dedicated SAR guide exists.

## Related Articles

- [[uk-gdpr-individual-rights-overview]]
- [[uk-gdpr-automated-decision-making]]
- [[uk-gdpr-right-to-object]]
- [[uk-gdpr-right-to-erasure]]
- [[uk-gdpr-right-to-be-informed]]
- [[uk-gdpr-lawful-basis]]
- [[uk-gdpr-data-protection-principles]]
- [[ico-guide-lawful-basis-2026]]
- [[ico-guide-data-protection-principles]]
