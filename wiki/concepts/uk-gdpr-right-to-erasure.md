---
title: "UK GDPR — Right to Erasure (Article 17)"
jurisdiction: UK
regulator: ICO
regulation: UK GDPR (Article 17)
status: current
effective_date: 2021-01-01
last_updated: 2026-04-14
sources:
  - "ICO Guide to Individual Rights v0.0.2 (19 May 2023) — pp. 30–40"
  - "UK GDPR Art. 17, 89"
tags: [uk-gdpr, right-to-erasure, Art-17, erasure, ICO, UK, financial-services, record-keeping]
related:
  - concepts/uk-gdpr-individual-rights-overview.md
  - concepts/uk-gdpr-lawful-basis.md
  - concepts/uk-gdpr-data-protection-principles.md
  - concepts/uk-gdpr-right-to-object.md
  - concepts/aml-ctf-framework.md
  - concepts/customer-due-diligence.md
  - summaries/ico-guide-individual-rights.md
---

# UK GDPR — Right to Erasure (Article 17)

## Overview

Article 17 gives individuals the right to have their personal data erased. The right applies in **six defined circumstances** and is subject to **five exemptions**. Neither triggers nor exemptions are discretionary — the controller must assess which apply on the facts of each request. Where an exemption applies, the controller is not required to erase and must explain this to the individual.

The right to erasure extends to data held in live systems, data disclosed to third parties, and — where data has been made publicly available — data held by third-party controllers.

## Six Triggers for the Right to Erasure (Art. 17(1))

The right applies where one or more of the following grounds is established:

| Trigger | Art. 17(1) | Key point |
|---------|-----------|-----------|
| **(a) No longer necessary** | Data no longer necessary for the purposes for which it was collected or processed | Most common ground — applies at the end of the defined retention period or if purpose has lapsed |
| **(b) Consent withdrawn** | Processing was based on consent (Art. 6(1)(a) or Art. 9(2)(a)) and consent has been withdrawn; and no other legal basis applies | Erasure only required if no alternative lawful basis supports continued processing |
| **(c) Successful objection** | Individual successfully objects under Art. 21(1) and there are no overriding legitimate grounds; or objects under Art. 21(2) (direct marketing) | Art. 21(1) requires balancing; Art. 21(2) direct marketing objection is absolute |
| **(d) Unlawful processing** | Data was processed unlawfully — i.e., without a valid lawful basis, or in breach of the data protection principles | |
| **(e) Legal obligation** | Erasure is required to comply with a legal obligation under UK law | e.g., a specific statutory requirement to delete; not commonly applicable in financial services |
| **(f) Children's consent (Art. 8)** | Data was collected in the context of offering information society services directly to a child where Art. 8 consent rules apply | Recognises that children may not fully understand the consequences of giving consent |

### Note on Trigger (b) — Consent Withdrawal

Withdrawal of consent does not automatically require erasure. If the controller can identify an **alternative lawful basis** (e.g., legitimate interests, legal obligation) that independently supports continued processing, erasure is not required. However, the controller must be transparent with the individual about the basis switch — it cannot use a different basis covertly after consent is withdrawn.

## Five Exemptions — Where Erasure Does Not Apply (Art. 17(3))

Even where a trigger is established, the right to erasure does not apply where processing is necessary for:

| Exemption | Art. 17(3) | Financial services relevance |
|-----------|-----------|----------------------------|
| **(a) Freedom of expression and information** | Journalism, academic expression, public interest publishing | Rarely applicable in financial services |
| **(b) Legal obligation or public task** | Compliance with a legal obligation; performance of a task in the public interest; exercise of official authority | **High relevance:** CDD/KYC record-keeping (MLR Reg 40, 5-year minimum retention), transaction records, AML/CTF obligations — firms are legally required to retain these |
| **(c) Public health** | Art. 9(2)(h)/(i) — healthcare, public health reasons | Limited direct financial services relevance |
| **(d) Archiving / research / statistics** | Art. 89(1) in the public interest — only where erasure would seriously impair the purpose | Limited direct relevance unless firm conducts regulated research |
| **(e) Legal claims** | Establishment, exercise, or defence of legal claims | **High relevance:** Records subject to ongoing disputes, litigation hold, regulatory investigation, or where claims are reasonably foreseeable |

### Financial Services Key Intersection

**Exemption (b) — legal obligation:** Directly protects CDD records, transaction records, and other data that firms are required to retain under the Money Laundering Regulations 2017 (Reg 40 — 5 years post-relationship end, up to 10 years). An erasure request cannot override a statutory retention obligation. See [[aml-ctf-framework]] and [[customer-due-diligence]].

**Exemption (e) — legal claims:** Protects records that are, or may reasonably become, subject to litigation or regulatory proceedings. The exemption applies from the point where claims are foreseeable — not only once proceedings have commenced.

## Partial Erasure

The right to erasure can be exercised in relation to:
- All personal data held by the controller about the individual
- Only certain categories of data (e.g., one account type, one transaction set)
- Data processed only for a specific purpose

Where an exemption protects some data but not other data, the controller must erase what it can and retain only what the exemption justifies. Exemptions apply purpose-specifically — a controller may erase data from one system while legitimately retaining it in another under a different justification.

## Third-Party Notification — Publicly Available Data

Where personal data has been **made publicly available** by the controller (e.g., published on a website, shared in a public register), the controller must upon receiving an erasure request:

1. Take **reasonable steps** to inform other controllers who are processing that data of the request
2. Flag which links to, copies of, or replications of the personal data should be erased

The standard is "reasonable steps" — it is not an absolute obligation to track every republication. Proportionality to the controller's resources and the technical feasibility of notification applies.

## Processor and Backup System Obligations

The controller must inform processors and service providers — including backup and archival system providers — of the erasure request, so they can erase the data from their systems too.

**Erasure from live systems alone does not satisfy the obligation** if the data remains in backup systems. The controller must take reasonable steps to ensure backup providers also erase the relevant data.

## Request-Handling Framework

- Verbal and written requests are both valid
- Can be made to any part of the organisation
- **1-month deadline** from receipt (same calendar month framework — see [[uk-gdpr-individual-rights-overview]])
- Extendable by 2 months for complex/multiple requests, with 1-month notification
- Manifestly unfounded and excessive rules apply
- **Refusal:** Notify the individual within 1 month with reasons, the right to complain to the ICO, and the right to seek judicial remedy

## Erasure vs. Restriction

Where erasure cannot be satisfied immediately due to a legitimate retention obligation — but the individual has legitimate grounds — **restriction (Art. 18)** may be a proportionate interim response. Restriction:
- Limits active processing to storage only
- Prevents use of the data for purposes the individual objects to
- Is appropriate during litigation hold, regulatory investigation, or where full erasure would impair a legitimate ongoing purpose

Offering restriction is not required — but it may be an appropriate response when refusal of erasure is not the only or most proportionate option.

## Key Points for Agents

- Art. 17 is not an unconditional right: there are 6 triggers (when the right arises) and 5 exemptions (when it does not apply even if a trigger is met).
- **Exemption (b) — legal obligation:** Directly protects MLR/CDD record-keeping from erasure demands. A firm cannot erase data it is legally required to retain under the Money Laundering Regulations 2017.
- **Exemption (e) — legal claims:** Protects records subject to litigation hold, regulatory investigation, or where claims are foreseeable. Applies from when claims become foreseeable, not only when proceedings commence.
- Consent withdrawal does not automatically require erasure if an alternative lawful basis supports continued processing — but the basis switch must be transparent.
- Third-party notification is required where data was made publicly available — "reasonable steps" standard, not absolute.
- Backup and processor systems must also be instructed to erase — live system erasure alone is insufficient.
- Where Art. 17 cannot be fully satisfied, consider whether restriction (Art. 18) can partially address the individual's concern while the legitimate retention obligation continues.

## Related Articles

- [[uk-gdpr-individual-rights-overview]]
- [[uk-gdpr-lawful-basis]]
- [[uk-gdpr-data-protection-principles]]
- [[uk-gdpr-right-to-object]]
- [[aml-ctf-framework]]
- [[customer-due-diligence]]
- [[ico-guide-individual-rights]]
