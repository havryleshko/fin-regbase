---
title: "ICO Guide to the Data Protection Principles"
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
tags: [UK-GDPR, Article-5, data-protection-principles, lawfulness, fairness, transparency, purpose-limitation, data-minimisation, accuracy, storage-limitation, security, accountability, DUA-Act, ICO, data-protection, UK]
related:
  - concepts/uk-gdpr-data-protection-principles.md
  - concepts/uk-gdpr-lawful-basis.md
  - summaries/ico-guide-lawful-basis-2026.md
  - concepts/vulnerable-customers.md
  - concepts/aml-ctf-framework.md
  - summaries/ico-guide-individual-rights.md
  - concepts/uk-gdpr-security.md
  - summaries/ico-guide-data-security.md
  - concepts/uk-gdpr-personal-data-breaches.md
---

# ICO Guide to the Data Protection Principles

> **Citation type note**
>
> This source is **ICO guidance** — the supervisory authority's authoritative interpretation of UK GDPR Article 5, not primary legislation or a court ruling. It carries significant weight in enforcement and litigation but is not itself law. This differs from citations to FCA sourcebook rules (binding on FCA-authorised firms) elsewhere in this wiki.
>
> **DUA Act review status:** All principle pages were marked "under review and may be subject to change" as of April 2026 following the Data (Use and Access) Act 2026 coming into law on 19 June 2025. The **Principle (b): Purpose limitation** page has been substantively updated (23 March 2026) to reflect DUA Act amendments; all other principle pages remain pending update.

---

## Overview

Article 5(1) of the UK GDPR sets out **six data protection principles** governing all personal data processing. Article 5(2) adds a seventh overarching obligation — accountability. These principles are the structural foundation of the UK GDPR; breaching them attracts the highest tier of fines.

**Highest-tier fines (Art. 83(5)(a)):** Infringement of the basic principles (Art. 5), lawful basis (Art. 6), or consent conditions carries penalties of up to **£17.5 million or 4% of annual worldwide turnover**, whichever is higher.

The seven principles in brief:

| Article | Principle | Core obligation |
|---------|-----------|----------------|
| 5(1)(a) | Lawfulness, fairness and transparency | Process legally, fairly, and openly |
| 5(1)(b) | Purpose limitation | Collect for specified purposes; don't reuse incompatibly |
| 5(1)(c) | Data minimisation | Collect only what is adequate, relevant and necessary |
| 5(1)(d) | Accuracy | Keep data correct and up to date as needed |
| 5(1)(e) | Storage limitation | Don't keep data longer than necessary |
| 5(1)(f) | Integrity and confidentiality | Implement appropriate security measures |
| 5(2) | Accountability | Take responsibility; document and demonstrate compliance |

---

## Principle (a): Lawfulness, Fairness and Transparency

Three distinct obligations unified in one principle. All three must be satisfied.

### Lawfulness
Two layers:
1. **Lawful basis** under Article 6 must exist (see `[[uk-gdpr-lawful-basis]]`)
2. **General legality** — processing must not breach any other law. Examples of general unlawfulness: processing that constitutes a breach of confidence, is a misuse of private information, breaches a court order or undertaking, breaches professional confidentiality obligations, discriminates unlawfully, or involves deception.

### Fairness
Processing must not be used to **unjustifiably or adversely affect individuals' interests**. Key considerations:
- Would processing be within people's reasonable expectations given the relationship and context?
- Will processing have any unjustified adverse effects on them?
- Are there any groups — particularly vulnerable people — for whom the processing may be especially harmful?
- Would people object to this use if they knew about it?

### Transparency
The Article 13 / Article 14 privacy notice obligations set the minimum. Transparency may require **going further** in some circumstances. In particular, where data is collected from third-party sources — **"invisible processing"** — people may have no knowledge that processing is occurring. Firms should consider proportionate additional steps beyond the legal minimum in such cases. The ICO's transparency guidance was updated on **10 January 2025** (Upper Tribunal ruling on when Art. 14 notices must be given).

---

## Principle (b): Purpose Limitation

**Most substantively updated of all principles.** Updated 23 March 2026 to reflect DUA Act amendments.

### Core rule
Data collected for a **specified, explicit and legitimate purpose** may only be further processed in a **compatible** way. An incompatible new purpose requires:
1. A compatibility assessment, and
2. A separate new lawful basis

### DUA Act — Annex 2 Compatible Purposes
The DUA Act added **Annex 2** to the UK GDPR, listing nine purposes that are presumed compatible with any original collection purpose:

| # | Purpose |
|---|---------|
| 1 | Preventing or detecting crime or other unlawful behaviour |
| 2 | Safeguarding vulnerable individuals |
| 3 | Responding to an emergency |
| 4 | Discharging a public task or function |
| 5 | Protecting the vital interests of an individual |
| 6 | Complying with a legal obligation |
| 7 | Taxation and administration of justice |
| 8 | National security, public security, or defence |
| 9 | Other compatible processing approved by the Secretary of State |

Using an Annex 2 purpose does not eliminate all obligations — the firm must still have a lawful basis for the secondary processing.

### Two-Track Reuse Framework

**Track 1 — Original basis was consent:**
More restrictive. May only reuse for a new purpose if:
1. New consent obtained covering the new purpose; or
2. Reuse is to comply with, or demonstrate compliance with, a UK GDPR principle; or
3. Reuse is for an Annex 2 compatible purpose and new consent is not reasonably obtainable; or
4. Reuse is necessary to safeguard a listed public interest objective (Art. 23(1)(c)–(j)) and new consent is not reasonably obtainable

**Track 2 — Original basis was not consent:**
May also rely on:
- Compatibility assessment (passing = may proceed); or
- Archiving, research, or statistical purposes (Art. 89)

### Compatibility Assessment — Five Factors
Where the Annex 2 automatic compatibility does not apply, assess:
1. **Link between purposes** — how closely related is the new purpose to the original?
2. **Context of collection** — what was the relationship and reasonable expectations?
3. **Nature of the data** — special category or criminal offence data requires more caution
4. **Possible consequences** — what are the likely effects on data subjects?
5. **Safeguards** — encryption, pseudonymisation or other measures to protect individuals

Article 8A (introduced by DUA Act) contains the new detailed compatibility assessment framework.

---

## Principle (c): Data Minimisation

Personal data must be:
- **Adequate** — sufficient to properly fulfil the stated purpose (not too little)
- **Relevant** — having a rational link to that purpose
- **Limited to what is necessary** — not more than needed for that purpose

The ICO links this directly to the **accountability principle**: firms must be able to demonstrate they have processes ensuring only necessary data is collected.

**Special category data:** Especially important to minimise. Collect only the minimum amount of special category or criminal offence data.

**Rights interface:**
- Individuals may request **erasure** of data that is not necessary for the stated purpose
- Individuals may request **rectification** (supplementation) of data that is incomplete and therefore inadequate for the purpose

Firms should periodically review data held to confirm it remains adequate and relevant, and delete anything no longer needed.

---

## Principle (d): Accuracy

Personal data must be **accurate** and, where necessary, **kept up to date**. Every reasonable step must be taken to erase or rectify inaccurate data without delay.

### What "inaccurate" means
"Inaccurate" = **incorrect or misleading as to any matter of fact** (DPA 2018 definition). Whether data needs to be updated depends entirely on the purpose — if the purpose relies on currency, update; if not (e.g. historical records), update may not be required.

### Key nuances
- **Historical records** can be accurate even if the underlying facts have changed — the key is that the record must clearly be a historical record, not a current statement
- **Records of mistakes** are permissible if not misleading — a charge that was later reversed may legitimately remain in records, provided the record clearly shows the error and its correction
- **Opinions** are not inaccurate simply because the individual disagrees, or they are later proved wrong. However, records must make clear it is an opinion, whose opinion it is, and any relevant changes to the underlying facts
- **Credit scores** are statistical analysis of historical data, not subjective opinion — they must be accurate in the underlying data but are not opinions

### Proportionality
The more important accuracy is for the decision being made, the greater the effort required. Employers may need independent verification of qualifications for safety-critical roles; ordinary marketing records do not require the same level of verification.

### Rights interface
Individuals have an **absolute right to rectification** of incorrect personal data (Art. 16). They do not have a right to erasure solely on grounds of inaccuracy — but erasure may be appropriate in some cases, and should be considered if requested.

---

## Principle (e): Storage Limitation

Personal data must not be kept in identifiable form **longer than necessary** for the stated purposes.

### No prescribed periods
The UK GDPR does not set specific retention limits. Firms must justify their own periods based on their purposes.

### Retention policy requirement
Firms must establish and document **standard retention periods** for different categories of data. A retention policy (or schedule) must:
- List categories of data and their purposes
- Set standard retention periods with justification
- Be flexible enough to allow early deletion when appropriate
- Be reviewed at appropriate intervals

Small organisations doing low-risk, occasional processing may not need a documented policy — but must still regularly review and delete unnecessary data.

### Setting retention periods — five factors
1. **Stated purpose** — how long does the purpose remain active?
2. **Need to evidence a past relationship** — some data may be retained to confirm a relationship existed and ended, plus key details
3. **Potential legal claims** — data may be retained for the limitation period within which a claim could arise, but should be deleted once that period expires
4. **Legal and regulatory requirements** — specific statutory retention periods (e.g. tax records, AML record-keeping) justify retention for those periods without further analysis
5. **Industry guidelines** — credit reference agencies keep consumer credit data for six years; such guidelines are a starting point but must be independently justified

### Pseudonymisation does not satisfy storage limitation
Pseudonymised data can still permit identification of individuals and remains subject to storage limitation. Pseudonymisation is a useful minimisation and security tool but does not allow indefinite retention.

### What to do with data no longer needed
Either **delete** or **anonymise** (true anonymisation, not pseudonymisation). "Deletion" means putting data beyond use — includes deleting from back-up systems. Taking data offline does not constitute deletion.

### Archiving, research, and statistical exception
Data may be retained indefinitely if held **solely** for:
- Public interest archiving;
- Scientific or historical research; or
- Statistical purposes

This must be the **only** purpose. Appropriate safeguards (e.g. pseudonymisation) required. Data retained under this exception cannot be used for decisions affecting individuals.

### Data sharing
Where data is shared, all parties should agree upfront what happens on termination of the sharing arrangement — return to the provider, or all parties delete.

---

## Principle (f): Integrity and Confidentiality (Security)

Firms must ensure **appropriate security measures** are in place to protect personal data.

> This ICO page is a one-paragraph stub pointing to the ICO's separate Security guidance. Detailed security controls are not set out in the data protection principles guide.

---

## Accountability Principle (Art. 5(2))

Firms must **take responsibility** for what they do with personal data and how they comply with the other principles. Appropriate measures and records must be in place to **demonstrate** compliance.

> This ICO page is a one-paragraph stub pointing to the ICO's separate Accountability and Governance guidance.

The accountability principle underpins all other principles — documentation, policies, processes, and evidence of compliance are required not merely as a side effect but as a standalone obligation.

---

## Key Points for Agents

- **Art. 83(5)(a) fines** apply to breaches of Art. 5 principles — up to £17.5m or 4% annual worldwide turnover, the highest tier. The lower tier, Art. 83(4) (up to £8.7m/2%), applies to breach notification and processor obligation failures — see `[[uk-gdpr-personal-data-breaches]]`.
- Principle (a) has **three separate obligations**: lawfulness (lawful basis + general legality), fairness (reasonable expectations, no unjustified adverse effects), and transparency (Art. 13/14 minimum + proportionate further steps for invisible processing).
- Principle (b) was **updated 23 March 2026** to reflect DUA Act amendments. Nine Annex 2 purposes are now automatically compatible with any original collection purpose. The two-track reuse framework (consent vs. non-consent) governs when the firm may rely on these.
- Principle (c) has a **ceiling and a floor**: data must be adequate (enough) but also limited (not too much). Both inadequacy and excess breach the principle.
- "Inaccurate" under principle (d) means **incorrect or misleading as to a matter of fact**. Historical records, records of mistakes, and opinions can all be accurate even if the individual objects — subject to the record making the position clear.
- Principle (e): no prescribed periods; firms must justify their own. **Pseudonymised data is not exempt.** Archiving/research/statistics exception requires it to be the **sole** purpose.
- All other principle pages except (b) are **under ICO review** following the DUA Act and may change.

## Related Articles

- [[uk-gdpr-data-protection-principles]]
- [[uk-gdpr-lawful-basis]]
- [[ico-guide-lawful-basis-2026]]
- [[vulnerable-customers]]
- [[aml-ctf-framework]]
- [[ico-guide-individual-rights]]
- [[uk-gdpr-security]]
- [[ico-guide-data-security]]
- [[uk-gdpr-personal-data-breaches]]
