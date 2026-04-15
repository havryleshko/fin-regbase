---
title: "UK GDPR — Data Protection Principles (Article 5)"
jurisdiction: UK
regulator: ICO
regulation: UK GDPR Art. 5; DPA 2018; Data (Use and Access) Act 2026
status: current
effective_date: 2018-05-25
last_updated: 2026-04-14
sources:
  - "ICO, 'A guide to the data protection principles', ico.org.uk"
  - "ICO, 'Principle (a): Lawfulness, fairness and transparency', ico.org.uk (updated 10 Jan 2025)"
  - "ICO, 'Principle (b): Purpose limitation', ico.org.uk (updated 23 March 2026, DUA Act)"
  - "ICO, 'Principle (c): Data minimisation', ico.org.uk"
  - "ICO, 'Principle (d): Accuracy', ico.org.uk"
  - "ICO, 'Principle (e): Storage limitation', ico.org.uk"
  - "ICO, 'Principle (f): Integrity and confidentiality (security)', ico.org.uk"
  - "ICO, 'Accountability principle', ico.org.uk"
  - "ICO, 'A guide to data security', ico.org.uk"
tags: [UK-GDPR, Article-5, data-protection-principles, lawfulness, fairness, transparency, purpose-limitation, data-minimisation, accuracy, storage-limitation, security, accountability, DUA-Act, ICO, data-protection, UK]
related:
  - summaries/ico-guide-data-protection-principles.md
  - concepts/uk-gdpr-lawful-basis.md
  - summaries/ico-guide-lawful-basis-2026.md
  - concepts/vulnerable-customers.md
  - concepts/aml-ctf-framework.md
  - concepts/customer-due-diligence.md
  - concepts/uk-gdpr-individual-rights-overview.md
  - concepts/uk-gdpr-right-to-erasure.md
  - concepts/uk-gdpr-security.md
  - summaries/ico-guide-data-security.md
  - concepts/uk-gdpr-personal-data-breaches.md
---

# UK GDPR — Data Protection Principles (Article 5)

Article 5 of the UK GDPR contains the foundational obligations governing all personal data processing. Compliance with the six principles (and the seventh accountability obligation in Art. 5(2)) is mandatory for all controllers. Breach of Art. 5 attracts the **highest tier of fines under Art. 83(5)(a): up to £17.5m or 4% of annual worldwide turnover**.

The ICO's guidance on principles (c)–(f) and accountability was under review following the Data (Use and Access) Act 2026 coming into force on 19 June 2025. Principle (b) has been substantively updated (23 March 2026); all other principles remain pending update.

---

## The Seven Principles at a Glance

| Article | Principle | One-line rule |
|---------|-----------|--------------|
| 5(1)(a) | Lawfulness, fairness and transparency | Process legally, fairly, and openly |
| 5(1)(b) | Purpose limitation | Use data only for the purpose it was collected for |
| 5(1)(c) | Data minimisation | Collect only what is adequate, relevant and necessary |
| 5(1)(d) | Accuracy | Keep data correct and up to date where needed |
| 5(1)(e) | Storage limitation | Delete or anonymise data when no longer needed |
| 5(1)(f) | Integrity and confidentiality | Protect data with appropriate security measures |
| 5(2) | Accountability | Demonstrate compliance with all of the above |

---

## Principle (a): Lawfulness, Fairness and Transparency

Three obligations, each independent. All three must be satisfied simultaneously.

### Lawfulness — two layers

**Layer 1 — Lawful basis (Art. 6):** A valid basis under Article 6 must exist before any processing begins. See `[[uk-gdpr-lawful-basis]]` for the full framework including the seven bases and the recognised legitimate interest basis introduced by the DUA Act.

**Layer 2 — General legality:** Even if an Art. 6 basis exists, processing must not breach any other law. The ICO identifies six categories of general unlawfulness:
1. Breach of a duty of confidence
2. Misuse of private information
3. Breach of a court order or undertaking
4. Breach of a professional confidentiality obligation
5. Unlawful discrimination
6. Processing involving deception

**Financial services relevance:** AML/CTF disclosures (SARs, tipping-off rules), court production orders, professional adviser confidentiality, and regulatory reporting obligations all interact with Layer 2.

### Fairness

Processing must not **unjustifiably adversely affect** individuals' interests. Fairness is assessed against:
- Whether processing is within people's **reasonable expectations** given the nature of the relationship and context in which data was collected
- Whether there are **unjustified adverse effects** (financial, emotional, reputational, physical)
- Whether **vulnerable groups** may be disproportionately harmed — vulnerability requires heightened consideration under this principle
- Whether people would **object if they knew** about the processing

### Transparency — beyond Art. 13/14

Articles 13 and 14 set the **minimum** privacy notice requirements. Transparency may require going further. The key concept is **"invisible processing"**: when data is collected from third-party sources (data brokers, credit reference agencies, counterparty data, publicly available sources), data subjects may have no awareness that processing is occurring. Firms must consider proportionate additional steps in these cases.

Updated **10 January 2025** to reflect an Upper Tribunal ruling on when Art. 14 notices must be provided.

---

## Principle (b): Purpose Limitation

### Core rule

Personal data collected for a **specified, explicit and legitimate purpose** may not be further processed in a way that is **incompatible** with that purpose (Art. 5(1)(b)). If a new purpose is incompatible, the firm must:
1. Conduct a compatibility assessment, and
2. Identify a separate new lawful basis for the secondary processing

### DUA Act — Annex 2 (nine automatically compatible purposes)

The DUA Act added Annex 2 to the UK GDPR, listing nine purposes presumed compatible with any original collection purpose. Financial services firms will most commonly rely on purposes 1–6:

| Annex 2 | Purpose |
|---------|---------|
| 1 | Preventing or detecting crime or other unlawful behaviour |
| 2 | Safeguarding vulnerable individuals |
| 3 | Responding to an emergency |
| 4 | Discharging a public task or function |
| 5 | Protecting the vital interests of an individual |
| 6 | Complying with a legal obligation |
| 7 | Taxation and administration of justice |
| 8 | National security, public security, or defence |
| 9 | Secretary of State approved purposes |

Using an Annex 2 purpose does not remove the need for a lawful basis — it only satisfies the compatibility question.

**Cross-reference:** Annex 2 purposes 1, 2, and 5 overlap substantially with the **recognised legitimate interest (Art. 6(ea))** pre-approved purposes introduced by the same DUA Act. See `[[uk-gdpr-lawful-basis]]`.

### Two-track reuse framework

**Track 1 — Original basis was consent (more restrictive):**

Reuse for a new purpose is only permitted if:
1. **New consent** is obtained specifically covering the new purpose; or
2. Reuse is to **comply with or demonstrate compliance** with a UK GDPR principle; or
3. Reuse is for an **Annex 2 purpose** and new consent cannot reasonably be obtained; or
4. Reuse is necessary to safeguard a **listed public interest objective** (Art. 23(1)(c)–(j)) and new consent cannot reasonably be obtained

**Track 2 — Original basis was not consent (less restrictive):**

May also rely on:
- A passing **compatibility assessment** (five factors); or
- Archiving, research, or statistical purposes (Art. 89)

### Compatibility assessment — five factors

Where Annex 2 automatic compatibility does not apply, assess:
1. **Link between purposes** — how closely related is the new purpose to the original?
2. **Context of collection** — what were the reasonable expectations at collection?
3. **Nature of data** — special category or criminal offence data requires significantly greater caution
4. **Possible consequences** — what effects will secondary processing have on data subjects?
5. **Safeguards** — pseudonymisation, encryption, or other measures in place

Article 8A (inserted by DUA Act) contains the detailed compatibility assessment framework.

### New lawful basis requirement

Compatibility alone is not sufficient. Even if secondary processing is compatible, the firm must identify and document a separate **new lawful basis** before proceeding.

---

## Principle (c): Data Minimisation

Personal data must be **(Art. 5(1)(c)):**
- **Adequate** — sufficient to properly fulfil the stated purpose; if inadequate, the processing is not helping achieve the purpose
- **Relevant** — a rational connection to the purpose; if irrelevant, it should not be collected
- **Limited to what is necessary** — no more than needed; excess data is likely unlawful as most bases require necessity

### Ceiling and floor

Data minimisation has both a **ceiling** (no more than necessary) and a **floor** (enough to properly fulfil the purpose). Both ends breach the principle. Data that is too sparse may mean an individual's circumstances are not properly understood — leading to decisions based on incomplete facts.

### Special category and criminal offence data

Particularly important to minimise for these categories. Only the minimum amount should be collected and retained.

### Practical application for financial services

- **CDD/KYC:** Collect identity verification and risk assessment data proportionate to the risk profile. Collecting blanket enhanced data on all customers may breach data minimisation.
- **CCTV and ATM fraud monitoring:** Justified because a suspicious transaction may not come to light until the victim receives their statement — retention period is proportionate to that operational purpose, not indefinite.
- **Debt collection:** Once a debtor is located and the creditor informed, most personal data should be deleted unless the agency is also collecting the debt.
- **Recruitment:** Health condition questions on a general questionnaire are excessive for office roles even if relevant to some manual positions.

### Reviews

Firms must **periodically review** data held for continued adequacy and relevance, and delete anything no longer needed. This is directly linked to the storage limitation principle.

---

## Principle (d): Accuracy

### Definition

"Inaccurate" means **incorrect or misleading as to any matter of fact** (DPA 2018 s.205). Whether data needs to be updated depends entirely on the **purpose** — data held for a purpose that requires currency must be updated; data held for historical or archival purposes does not.

### Historical records

A historical record is not inaccurate merely because facts have since changed. An address record from 2015 is accurate if clearly held as a historical record; it is inaccurate if it purports to be a current address when the person has moved.

### Records of mistakes

Firms may legitimately retain records of events that should not have happened — a cancelled charge, a misdiagnosis, an unfair dismissal — provided the record:
- Accurately reflects what occurred (including the error and its correction)
- Is not misleading about the facts
- Clearly identifies the mistake as a mistake where necessary

**Example:** A bank account erroneously closed and then reinstated may properly retain a record of the closure and reinstatement in sequence; demanding deletion of the error record is not a valid accuracy challenge if the record correctly reflects what happened.

### Opinions

A record of an opinion is not inaccurate just because:
- The individual disagrees with it, or
- It is later proved to be wrong

An opinion must be recorded as an opinion, must identify whose opinion it is, and must note any relevant changes to the underlying facts. If an opinion was based on inaccurate data, that fact should also be recorded.

**Credit scores are not opinions.** They are statistical analysis of historical credit data — they must be accurate in the underlying data but are not subjective judgements.

### Right to rectification interface

Individuals have an **absolute right** to rectification of incorrect personal data (Art. 16). This cannot be refused if the data is factually incorrect. Erasure of inaccurate data is not an absolute right but should be considered on request when appropriate.

---

## Principle (e): Storage Limitation

### No prescribed periods

The UK GDPR does not set retention periods. Firms determine their own periods and must be able to justify them against their purposes. The five justification factors:

1. **Active purpose** — retain while the purpose applies; do not retain indefinitely "just in case"
2. **Evidencing the relationship** — some data may be kept to confirm a relationship existed and ended, even after it does
3. **Legal claims** — retain for the limitation period applicable to claims arising from the processing; delete when that period expires
4. **Statutory obligations** — legal or regulatory requirements (e.g. AML record-keeping obligations under MLRs, tax records) justify retention for the specified statutory period
5. **Industry guidelines** — useful starting point (e.g. consumer credit data: six years) but must be independently justified and kept under review

### Retention policy obligation

A documented retention policy (or schedule) is required wherever possible. Must set standard periods, be flexible for early deletion, and be reviewed at intervals. Small organisations with low-risk, occasional processing may not need a documented policy — but must still review and delete.

### Pseudonymisation does not satisfy storage limitation

Pseudonymised data can still identify individuals and remains subject to the principle. Pseudonymisation is a security and minimisation tool — it does not allow indefinite retention.

### What to do with data no longer needed

Either **delete** (put beyond use — including back-up copies) or **anonymise** (true anonymisation, not pseudonymisation, so that identification is no longer possible). Taking data offline does not constitute deletion.

### Archiving, research, and statistical exception (Art. 89)

Data may be retained indefinitely if held **solely** for:
- Public interest archiving
- Scientific or historical research
- Statistical purposes

Requirements: this must be the **sole** purpose; appropriate safeguards (e.g. pseudonymisation) must be in place; the data cannot be used for decisions affecting specific individuals while retained under this exception.

### Data sharing

Parties sharing data should agree **upfront** what happens at termination:
- Return data to the provider, or
- All parties delete their copies

Each party in a sharing arrangement may set different retention periods if their purposes differ — but if all parties hold data only for the sharing initiative, all should delete when the initiative ends.

---

## Principle (f): Integrity and Confidentiality (Security)

Firms must implement **appropriate technical and organisational measures** to protect personal data against accidental loss, destruction, damage, unauthorised access, and unauthorised disclosure (Art. 5(1)(f)).

The security principle is operationalised by **Article 32**, which sets out four specific sub-obligations:
- **(a)** Use of pseudonymisation and encryption where appropriate (named examples, not mandatory)
- **(b)** Ensuring ongoing confidentiality, integrity, availability, and resilience of processing systems
- **(c)** Ability to restore availability and access to personal data in a timely manner following an incident
- **(d)** A process for regularly testing, assessing, and evaluating the effectiveness of security measures — a **mandatory legal obligation for all organisations**

The standard is risk-based ("appropriate to the risk") — there are no prescribed measures. An information risk assessment is the mandatory first step. The ICO will take sector-specific compliance (e.g. PCI-DSS for card data) into account in enforcement, but it does not equal UK GDPR compliance. Processor contracts must require Art. 32 compliance and include audit rights. Staff training must cover criminal liability for deliberate unauthorised access or disclosure (DPA 2018 criminal offence).

> **Scope boundary:** Breach notification obligations (Arts. 33–34) are covered in `[[uk-gdpr-personal-data-breaches]]`.

See `[[uk-gdpr-security]]` for the full operational framework.

---

## Accountability Principle (Art. 5(2))

The controller is **responsible for, and must be able to demonstrate compliance with**, the other six principles.

Accountability requires affirmative action, not merely passive compliance. Demonstration obligations include:

- **Documentation** — records of processing activities (Art. 30), lawful basis justifications, retention policies, DPIAs (Art. 35)
- **Policies and procedures** — internal data protection policies, staff training, data subject rights handling procedures
- **Governance** — DPO (where required), data protection by design and by default (Art. 25), regular reviews
- **Audit trail** — evidence of decisions made and their justification

> The ICO's principles guide is a stub for this principle, pointing to the ICO's dedicated Accountability and Governance guidance.

The accountability principle also means that the other principles are not merely substantive obligations — their breach is compounded by failure to document decisions, processes, and reasoning.

---

## Key Points for Agents

- **All seven principles must be satisfied simultaneously.** No trade-off between them is permitted.
- **Breach of Art. 5 = highest fine tier** (Art. 83(5)(a)): up to £17.5m or 4% annual worldwide turnover. The lower tier, Art. 83(4) (up to £8.7m/2%), applies to breach notification and processor obligation failures — see `[[uk-gdpr-personal-data-breaches]]`.
- Principle (a) has **three separate sub-obligations**: lawfulness requires both a lawful basis (Art. 6) and general legality; fairness requires reasonable expectations analysis; transparency may require steps beyond Art. 13/14 minimum for invisible processing.
- Principle (b) was **updated March 2026** for the DUA Act. Nine Annex 2 purposes are now automatically compatible with any original collection purpose. Reuse under consent is subject to a more restricted two-track framework than under other bases.
- Principle (c): **both inadequate and excessive** data breach the principle. The firm must hold the right amount — enough, but not more.
- Principle (d): "inaccurate" = incorrect or misleading **as to a matter of fact**. Historical records, error records, and opinions can all be accurate. Credit scores are statistical analysis, not opinion. Right to rectification is absolute for factually incorrect data.
- Principle (e): **no prescribed periods**; firms justify their own. Pseudonymisation does not satisfy storage limitation. Archiving/research/statistics exception requires it to be the **sole** purpose.
- Principle (f): Art. 32 four-part framework — (a) encryption/pseudonymisation as examples not requirements; (b) CIA triad + resilience; (c) restore availability in timely manner; (d) **mandatory testing obligation** for all organisations. Risk-based standard — information risk assessment is the mandatory first step. See `[[uk-gdpr-security]]`. Breach notification (Arts. 33–34) in `[[uk-gdpr-personal-data-breaches]]`.
- Accountability: stub page in ICO guidance — see ICO Accountability and Governance guidance (not yet ingested) for DPO, DPIA, RoPA, and data protection by design obligations.

## Related Articles

- [[ico-guide-data-protection-principles]]
- [[uk-gdpr-lawful-basis]]
- [[ico-guide-lawful-basis-2026]]
- [[vulnerable-customers]]
- [[aml-ctf-framework]]
- [[customer-due-diligence]]
- [[uk-gdpr-individual-rights-overview]]
- [[uk-gdpr-right-to-erasure]]
- [[uk-gdpr-security]]
- [[ico-guide-data-security]]
- [[uk-gdpr-personal-data-breaches]]
