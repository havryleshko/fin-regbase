---
title: "UK GDPR — Individual Rights Overview and Request-Handling Framework"
jurisdiction: UK
regulator: ICO
regulation: UK GDPR (Articles 12–22)
status: current
effective_date: 2021-01-01
last_updated: 2026-04-14
sources:
  - "ICO Guide to Individual Rights v0.0.2 (19 May 2023)"
  - "UK GDPR Arts. 12–22"
tags: [uk-gdpr, individual-rights, data-subject-rights, Art-12, ICO, UK]
related:
  - concepts/uk-gdpr-lawful-basis.md
  - concepts/uk-gdpr-data-protection-principles.md
  - concepts/uk-gdpr-automated-decision-making.md
  - concepts/uk-gdpr-right-to-object.md
  - concepts/uk-gdpr-right-to-erasure.md
  - concepts/uk-gdpr-right-to-be-informed.md
  - summaries/ico-guide-individual-rights.md
  - summaries/ico-guide-lawful-basis-2026.md
---

# UK GDPR — Individual Rights Overview and Request-Handling Framework

## The Eight Rights

| Right | Article | Basis dependency | Absolute / Qualified |
|-------|---------|-----------------|---------------------|
| Right to be informed | Art. 13–14 | None — applies to all processing | Qualified — exceptions apply |
| Right of access (SAR) | Art. 15 | None | Qualified — exemptions apply |
| Right to rectification | Art. 16 | None | Qualified — MU/excessive rules apply |
| Right to erasure | Art. 17 | None — triggers link to basis | Qualified — 5 exemptions |
| Right to restrict processing | Art. 18 | None | Qualified — 4 triggers |
| Right to data portability | Art. 20 | Consent or contract only; automated means required | Qualified — only where basis and means match |
| Right to object | Art. 21 | Legitimate interests, public task, or direct marketing | Absolute for direct marketing; qualified otherwise |
| Rights related to automated decision-making | Art. 22 | None — applies to solely automated decisions only | Qualified — 3 permitted grounds |

**Basis dependency:** The lawful basis used for a specific processing activity determines which rights are available. See [[uk-gdpr-lawful-basis]] for the full rights matrix per basis.

**Right of access (SAR):** Not covered operationally in the ICO's individual rights guide — a dedicated ICO SAR guidance document exists. Requires separate ingest.

## Cross-Cutting Request-Handling Framework (Article 12)

Article 12 governs how all rights requests must be handled. The framework applies uniformly to all eight rights unless a right-specific rule overrides it.

### Recognising a Request

- A request does not need to cite a specific article, use legal language, or be directed to a named individual or contact point.
- Verbal requests (telephone, in person) are valid and must be acted on.
- Requests can be made to any employee or any part of the organisation.
- Firms must have processes to ensure employees who receive a valid request can identify and escalate it.
- Good practice: have a policy for recording verbal requests and confirming the requester's understanding of how the request has been interpreted.

### The One-Month Deadline

The response must be provided without undue delay and **at the latest within one calendar month** of receipt.

**Calendar month calculation:**
- Clock starts on the day of receipt (whether a working day or not).
- Deadline is the corresponding date in the following calendar month.
- If the following month has no equivalent date (e.g., received 31 March → no 31 April), the deadline is the last day of the following month (30 April).
- If the deadline falls on a weekend or public holiday, it extends to the next working day.
- **28-day operational target:** ICO recommends 28 days as a consistent internal target to guarantee compliance regardless of month length.

The clock restarts when the controller receives identity confirmation (if requested) or any required fee — the response period begins from the later of request receipt or those additional pieces.

### Extension — Complex or Multiple Requests

Where a request is complex, or where multiple requests have been received from the same individual, the deadline can be extended by up to **2 further months** (total: up to 3 months from receipt).

Requirement: notify the individual of the extension within the first calendar month, explaining why it is necessary.

### Manifestly Unfounded Requests

A request is manifestly unfounded if either of two tests is met:

**Test 1 — No genuine intention:** The individual clearly has no intention of exercising the right — for example, they offer to withdraw the request in return for a benefit from the organisation.

**Test 2 — Malicious/harassment intent:** The request is being used to harass the organisation with no real purpose other than to cause disruption — for example:
- Individual has explicitly stated (in the request or other communications) that they intend to cause disruption
- Request makes unsubstantiated accusations against the organisation or specific employees
- Individual is targeting a specific employee against whom they have a personal grudge
- Individual systematically sends different requests (e.g., weekly) as part of a campaign to cause disruption

NOT manifestly unfounded merely because:
- The individual has previously made manifestly unfounded or excessive requests
- The request includes aggressive or abusive language
- The same issue has already been raised and refused

"Manifestly" means the unfounded nature must be obvious or clear. When in doubt, assume the individual genuinely wants to exercise their rights — in which case the request is unlikely to be manifestly unfounded. Case by case — no blanket policies. Controller must be able to demonstrate the assessment to the ICO.

### Excessive Requests

A request may be excessive if it:
- Repeats the **substance** of previous requests; OR
- **Overlaps** with other requests.

NOT automatically excessive because:
- The individual concerns the same issue — if the controller previously failed to handle it properly, repeat requests may be legitimate
- An overlapping request relates to a completely separate set of information
- Prior requests were refused as manifestly unfounded or excessive

### Fees

Firms may not charge a fee in most cases. A **reasonable fee** (based on administrative costs only) may be charged for manifestly unfounded or excessive requests. If charging a fee, the controller must:
- Notify the individual promptly
- Not need to comply until the fee is received

Alternatively, the controller may refuse to comply with manifestly unfounded or excessive requests.

### Identity Verification

If there are reasonable doubts about the requester's identity, the controller may request additional information. The standard is **proportionality** — request only what is necessary, taking account of: the data held, its nature, and the purpose for which it is processed. Requesting unnecessary documentation is a compliance failure in itself.

### Refusing a Request

When refusing (wholly or partly), the controller must notify the individual **without undue delay and within 1 month**, providing:
- The reasons for not taking action
- The individual's right to complain to the ICO
- The individual's right to seek judicial remedy

## Right to Rectification (Article 16)

The right to have inaccurate personal data corrected and incomplete data completed.

- **Deadline:** 1-month (same calendar month framework as above)
- Verbal requests valid
- An individual can add a supplementary statement to complete data, rather than requiring full deletion and replacement
- **During accuracy verification:** The controller can restrict processing rather than immediately acting — this prevents premature erasure demands while the accuracy dispute is resolved
- **Third-party notification:** Where data has been disclosed to third parties, the controller must notify each recipient of the rectification — unless disproportionate effort or impossible
- Manifestly unfounded and excessive rules apply

## Right to Restrict Processing (Article 18)

The right to limit what a controller can do with data — typically used when data cannot yet be erased but the individual has a legitimate concern about its processing.

**Four triggers (Art. 18(1)):**

| Trigger | Situation |
|---------|-----------|
| **(a) Accuracy contested** | Applies during the period of accuracy verification |
| **(b) Processing unlawful; individual opposes erasure** | Individual prefers restriction to deletion |
| **(c) Controller no longer needs data; individual needs it for legal claims** | Controller's purpose has expired but individual has a pending claim |
| **(d) Art. 21 objection pending** | Waiting to assess whether the controller's compelling legitimate grounds override |

**What restriction means:** Restricted data may only be stored. It may be further processed only for:
- The individual's **consent**
- The establishment, exercise or defence of **legal claims**
- Protection of the rights of **another person**
- **Substantial public interest** reasons

**Technical methods:** Segregation into a separate database or system; flagging as "restricted" in a live system; temporary removal to an offline archive; suppression from active processing queues.

**Lifting restriction:** Before restriction is lifted, the controller must **inform the individual** and allow them an opportunity to object.

## Right to Data Portability (Article 20)

The right to receive personal data in a portable, reusable format and, where technically feasible, to have it transmitted directly to another controller.

**Two conditions — both must be met:**
1. The lawful basis is **consent** (Art. 6(1)(a)) or **contract** (Art. 6(1)(b))
2. The processing is carried out by **automated means**

**Scope — what data is in scope:**

| Data type | In scope? |
|-----------|----------|
| Data the individual actively provided (form submissions, account details) | Yes |
| **Observed data** — data collected as a result of the individual's use of the service (browsing history, location data, usage patterns, smart meter readings) | **Yes** |
| **Inferred or derived data** — data created by the controller from the individual's data (credit scores, risk ratings, behavioural segments, AI-generated profiles) | **No** |

**Format:** Structured, commonly used, machine-readable. The ICO names CSV, XML, and JSON as acceptable formats.

**Controller-to-controller transmission:** Must be provided direct to another controller where **technically feasible**. This is not an absolute obligation — it depends on the controller's technical capabilities.

**Joint or shared data:** Where a portability response would include data about other individuals (e.g., joint bank account), the controller must assess whether transmitting that data adversely affects those third parties.

**Receiving controller responsibilities:** The receiving controller must have a lawful basis for any third-party data included; must not use received third-party data for its own purposes (e.g., direct marketing to those third parties); must delete data it has no reason to keep.

## Key Points for Agents

- The Art. 12 cross-cutting framework (1-month calendar month deadline, verbal requests valid, manifestly unfounded and excessive definitions, proportionate ID checks) applies to every right.
- 28 days is the ICO's recommended operational target to guarantee compliance across all calendar months.
- Manifestly unfounded requires obvious, clear lack of genuine intent — aggressive language alone is insufficient. Case-by-case assessment; no blanket policies.
- Portability right: only consent/contract + automated processing; observed data (browsing, location, usage) is in scope; inferred/derived data (scores, segments, risk ratings) is out of scope. The receiving controller bears full UK GDPR responsibility from point of receipt.
- Restriction (Art. 18) can be applied as a temporary holding position while accuracy is verified or an Art. 21 objection is assessed — it prevents premature erasure demands.
- For the right to be informed, right to erasure, right to object, and rights related to automated decision-making, see the dedicated concept pages.

## Related Articles

- [[uk-gdpr-lawful-basis]]
- [[uk-gdpr-data-protection-principles]]
- [[uk-gdpr-automated-decision-making]]
- [[uk-gdpr-right-to-object]]
- [[uk-gdpr-right-to-erasure]]
- [[uk-gdpr-right-to-be-informed]]
- [[ico-guide-individual-rights]]
- [[ico-guide-lawful-basis-2026]]
