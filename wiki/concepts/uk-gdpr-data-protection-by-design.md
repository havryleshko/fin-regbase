---
title: "UK GDPR — Data Protection by Design and by Default (Art. 25)"
jurisdiction: UK
regulator: ICO
regulation: UK GDPR Art. 25; DPA 2018; Data (Use and Access) Act 2025; Recital 78
status: current
effective_date: 2018-05-25
last_updated: 2026-04-16
sources:
  - "ICO, 'Guide to accountability and governance' (top-level overview), ico.org.uk (DPbD section updated 5 February 2026 for DUAA)"
tags: [UK-GDPR, DPbD, data-protection-by-design, data-protection-by-default, Art-25, accountability, privacy-by-design, DUA-Act, ICO, UK]
related:
  - summaries/ico-guide-accountability-governance.md
  - concepts/uk-gdpr-dpia.md
  - concepts/uk-gdpr-dpo.md
  - concepts/uk-gdpr-data-protection-principles.md
  - concepts/uk-gdpr-security.md
  - concepts/uk-gdpr-lawful-basis.md
---

# UK GDPR — Data Protection by Design and by Default (Art. 25)

Data protection by design and by default (DPbD) is a **legal requirement** under Article 25 of the UK GDPR. It requires controllers to embed data protection into their processing operations from the outset and by default — not as an afterthought or add-on.

> **DUA Act update:** The ICO's DPbD sub-section of the accountability and governance guidance was updated **5 February 2026** to reflect changes introduced by the Data (Use and Access) Act 2025 (DUAA). The detailed ICO DPbD sub-page has not yet been ingested; granular post-DUAA obligations may be set out there.

---

## What DPbD Requires (Art. 25)

### By Design

Both **at the time of determining the means** for processing and **at the time of processing itself**, the controller must implement appropriate technical and organisational measures designed to:
- Implement data protection principles effectively
- Integrate necessary safeguards into the processing

The obligation applies throughout the **entire lifecycle** of processing operations — from initial design of a system or product through to its decommissioning.

### By Default

The controller must ensure that, **by default**, only personal data that is **necessary for each specific purpose** of processing is processed. This default applies to:
- The **amount** of personal data collected
- The **extent** to which it is processed
- The **period** for which it is stored
- Its **accessibility**

In particular, personal data must not — by default — be made accessible to an indefinite number of persons. The controller must actively configure systems and processes so that the most privacy-protective option is the default, not an optional setting.

---

## Named Example Measures (Art. 25 / Recital 78)

The UK GDPR does not prescribe a fixed list of measures. Named examples that may be appropriate:

- **Data minimisation** — collecting and retaining only necessary data
- **Pseudonymisation** — replacing identifying information with a pseudonym where the full identifier is not needed
- **Security features** — appropriate technical protections integrated into system design
- **Transparency** — building in mechanisms to provide individuals with information about processing

The appropriateness of any measure is assessed against the:
- State of the art (current technical capability)
- Cost of implementation
- Nature, scope, context, and purposes of processing
- Risks to individuals' rights and freedoms

---

## DPbD as a Legal Requirement — Not Best Practice

Prior to the UK GDPR, privacy by design was considered good practice. Under the UK GDPR, **Art. 25 is a binding legal obligation**. Failure to implement DPbD:
- Is a breach of Art. 25 in its own right
- Compounds breaches of the underlying data protection principles (Art. 5)
- Is relevant to ICO enforcement and penalty assessment

---

## DPbD and DPIAs

DPbD and DPIAs are tightly linked:
- DPbD requires embedding data protection into design decisions
- DPIAs **document those design decisions** and record why specific safeguards were chosen
- A DPIA conducted at the design stage of a project is the primary mechanism for demonstrating DPbD compliance in practice
- Retrofitting privacy controls after a system is built is not adequate DPbD

---

## DPbD in the Processing Lifecycle

DPbD applies at every stage:

| Stage | DPbD obligation |
|-------|----------------|
| Initial scoping | Assess whether the processing is necessary and proportionate before design begins |
| System/product design | Build in minimisation, pseudonymisation, access controls by architecture |
| Data collection | Default settings collect minimum necessary; opt-in for additional collection |
| Processing operations | Access limited to what is necessary; logs maintained |
| Retention | Automated deletion or anonymisation at end of retention period; not manual |
| Decommissioning | Secure deletion of all personal data from systems being retired |

---

## DPbD and Default Settings — Practical Implications

The "by default" obligation has direct implications for product and system configuration:
- **Opt-out is not sufficient** for non-essential data collection — the default must be not to collect
- **Broad sharing** must not be the default — access must be scoped to what each role/function needs
- **Indefinite retention** is never the default — retention limits must be built into systems, not applied manually after the fact
- **Broad accessibility** (e.g. open database access, no role-based controls) violates the "by default" requirement even if access is not actively misused

---

## Key Points for Agents

- DPbD is a **legal requirement** under Art. 25 — not aspirational, not best practice. Breach = ICO enforcement risk.
- **"By design"** means building privacy in from the start of a processing lifecycle — architecture, not policy documents.
- **"By default"** means the most privacy-protective option is the default — not an optional extra that users must activate.
- Named example measures: **data minimisation, pseudonymisation, security features, transparency mechanisms**. Choice of measure is risk-based and proportionate.
- DPbD was **updated 5 February 2026** for the DUAA. The detailed sub-page has not yet been ingested.
- DPIAs are the **primary evidence mechanism** for demonstrating DPbD compliance — they document the privacy decisions made at design stage.
- Fines for Art. 25 breach fall under **Art. 83(4)** (up to £8.7m or 2% annual worldwide turnover), the lower tier — distinct from Art. 83(5) fines for Art. 5 principle breaches.

## Related Articles

- [[ico-guide-accountability-governance]]
- [[uk-gdpr-dpia]]
- [[uk-gdpr-dpo]]
- [[uk-gdpr-data-protection-principles]]
- [[uk-gdpr-security]]
- [[uk-gdpr-lawful-basis]]
