---
title: "UK GDPR — Right to Object (Article 21)"
jurisdiction: UK
regulator: ICO
regulation: UK GDPR (Article 21)
status: current
effective_date: 2021-01-01
last_updated: 2026-04-14
sources:
  - "ICO Guide to Individual Rights v0.0.2 (19 May 2023) — pp. 69–80"
  - "UK GDPR Art. 6, 12, 21, 89"
tags: [uk-gdpr, right-to-object, Art-21, direct-marketing, profiling, suppression, ICO, UK]
related:
  - concepts/uk-gdpr-individual-rights-overview.md
  - concepts/uk-gdpr-lawful-basis.md
  - concepts/uk-gdpr-data-protection-principles.md
  - concepts/uk-gdpr-automated-decision-making.md
  - concepts/uk-gdpr-right-to-erasure.md
  - summaries/ico-guide-individual-rights.md
---

# UK GDPR — Right to Object (Article 21)

## Overview

Article 21 of the UK GDPR gives individuals the right to object to the processing of their personal data at any time. An objection may relate to all personal data held about an individual, to certain data only, or to processing for a particular purpose only.

The right to object is not universal — it applies only where the processing is based on certain lawful bases or is for direct marketing purposes.

## When the Right to Object Applies

| Processing basis / purpose | Right applies? | Absolute or qualified? |
|---------------------------|---------------|----------------------|
| **Direct marketing** (any basis) | Yes — Art. 21(2) | **Absolute** — no grounds to refuse |
| **Legitimate interests** (Art. 6(1)(f)) | Yes — Art. 21(1) | Qualified — compelling legitimate grounds test |
| **Public task — public interest** (Art. 6(1)(e)) | Yes — Art. 21(1) | Qualified — compelling legitimate grounds test |
| **Public task — official authority** (Art. 6(1)(e)) | Yes — Art. 21(1) | Qualified — compelling legitimate grounds test |
| **Research / statistics / archiving** (Art. 89(1)) | Yes — Art. 21(6) | More restricted — limited grounds |
| Consent (Art. 6(1)(a)) | No — use withdrawal of consent instead | — |
| Contract (Art. 6(1)(b)) | No | — |
| Legal obligation (Art. 6(1)(c)) | No | — |
| Vital interests (Art. 6(1)(d)) | No | — |

## Direct Marketing — Absolute Right (Art. 21(2))

An individual may object at any time to the processing of their personal data for direct marketing purposes. This includes any **profiling related to direct marketing**.

This is an **absolute right** — there are no exemptions and no grounds to refuse. When a direct marketing objection is received, the controller must immediately cease processing for that purpose.

### Suppression, Not Erasure

Complying with a direct marketing objection does not automatically require erasing the individual's data. In most cases, **suppression** is the appropriate and preferred response:

- Retain just enough information about the individual to ensure that their preference not to receive direct marketing is respected in future
- Place the individual on a suppression/do-not-contact list
- Clearly mark the data so that marketing systems cannot access the full record for marketing purposes

**Why suppression rather than erasure:** If the controller erases all data about the individual, it loses the record of the preference and may inadvertently re-add them to marketing campaigns in future. Suppression prevents this.

Erasure is required only where the controller has no other legitimate reason to retain the data at all.

**Profiling related to direct marketing** is covered by the same absolute right — if profiling activity exists to support direct marketing, the objection to direct marketing extends to cover that profiling.

## Proactive Notification Obligation

Where a controller processes data for direct marketing, legitimate interests, or public task purposes, it must **proactively inform individuals of their right to object at the latest at the time of first communication** with that individual.

This information must be:
- Presented **clearly** and **separately** from other information about rights
- Not buried in a standard privacy notice

This is an active, timed obligation — not satisfied by including the right to object in a privacy notice alone. Where processing is for research or statistical purposes, including the right to object in the privacy notice (alongside information about other rights) is sufficient.

## Legitimate Interests and Public Task — Qualified Right (Art. 21(1))

For processing based on legitimate interests (Art. 6(1)(f)) or public task (Art. 6(1)(e)), the right to object is not absolute. The individual must give **specific reasons based on their particular situation** — a general objection is insufficient.

The controller may continue processing if it can demonstrate:

**(a) Compelling legitimate grounds** for the processing which override the individual's interests, rights and freedoms; OR

**(b) The processing is necessary for the establishment, exercise or defence of legal claims.**

### Balancing Test

When assessing compelling legitimate grounds, the controller must:
1. Identify the specific reasons why the individual is objecting
2. Consider whether the objection is based on substantial damage or distress caused by the processing (e.g., the processing is causing the individual financial loss) — **if so, the individual's grounds carry significantly more weight**
3. Balance the individual's interests, rights and freedoms against the controller's legitimate grounds
4. Bear the **burden of demonstrating** that compelling grounds override the individual's interests — the burden rests with the controller, not the individual

If the controller decides not to comply, it must notify the individual without undue delay and within 1 month, providing: reasons for refusing; the right to complain to the ICO; the right to seek judicial remedy.

## Research and Statistical Purposes — Article 21(6)

Where data is processed for scientific or historical research, or statistical purposes under Art. 89(1), the right to object is **more restricted**:

- The right applies only where the processing is based on **public task (exercise of official authority)** or **legitimate interests**
- The right does **not** apply where the processing is based on **public task (performance of a task carried out in the public interest)** — Art. 21(6) expressly distinguishes between the two variants of the public task basis
- Where Art. 21(6) does apply, the controller can still continue the processing if it is necessary for a public interest purpose

**Practical note:** It is often unclear which variant of the public task basis a controller is relying on. Best practice is to specify clearly in the privacy notice which variant applies, so that the scope of the right to object is transparent to individuals.

## Recognised Responses to a Successful Objection

Where the controller has no grounds to refuse an objection, it must **stop or not begin** processing the data for the objected purpose. Options include:

| Response | When appropriate |
|---------|----------------|
| **Erasure** | Where the controller has no other reason to retain the data |
| **Restriction** (Art. 18) | Where data must be retained for another purpose but must not be processed for the objected purpose |
| **Suppression** | Where the purpose-specific processing ceases but data is retained, clearly marked as suppressed for the objected purpose |

Selecting the correct response depends on whether the data is needed for any other legitimate purpose.

## Request-Handling Framework

- Verbal and written objections are both valid
- Can be made to any part of the organisation
- **1-month deadline** from receipt (same calendar month framework — see [[uk-gdpr-individual-rights-overview]])
- Extendable by 2 months for complex/multiple requests, with 1-month notification
- Manifestly unfounded and excessive rules apply (same definitions as for other rights)
- Fee may be charged only for manifestly unfounded or excessive objections

## Key Points for Agents

- The right to object only applies where processing is for direct marketing, legitimate interests, or public task (and research/statistics). It does not apply to consent, contract, legal obligation, or vital interests processing.
- Direct marketing objection is **absolute** — no exceptions, no grounds to refuse. Must stop processing for that purpose immediately.
- **Suppression is the correct default response** to a direct marketing objection — not erasure. Retain just enough to honour the preference and prevent re-marketing.
- Legitimate interests / public task objection: the controller bears the burden of demonstrating compelling grounds override. Substantial damage or distress to the individual significantly strengthens their grounds.
- **Proactive disclosure obligation:** Must inform individuals of the right to object at first communication — not just in the privacy notice — where basis is direct marketing, LI, or public task.
- Art. 21(6) research/statistics right: narrower and depends on which variant of the public task basis applies — be explicit in the privacy notice.
- Profiling related to direct marketing falls within the absolute direct marketing objection right.

## Related Articles

- [[uk-gdpr-individual-rights-overview]]
- [[uk-gdpr-lawful-basis]]
- [[uk-gdpr-automated-decision-making]]
- [[uk-gdpr-right-to-erasure]]
- [[uk-gdpr-data-protection-principles]]
- [[ico-guide-individual-rights]]
