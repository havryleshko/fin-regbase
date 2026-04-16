---
title: "UK GDPR — Data Protection Impact Assessments (Arts. 35–36)"
jurisdiction: UK
regulator: ICO
regulation: UK GDPR Arts. 35–36; DPA 2018; Recitals 84, 89–95
status: current
effective_date: 2018-05-25
last_updated: 2026-04-16
sources:
  - "ICO, 'Guide to accountability and governance' (top-level overview), ico.org.uk"
tags: [UK-GDPR, DPIA, data-protection-impact-assessment, Art-35, Art-36, accountability, DPbD, high-risk, ICO, UK]
related:
  - summaries/ico-guide-accountability-governance.md
  - concepts/uk-gdpr-data-protection-by-design.md
  - concepts/uk-gdpr-dpo.md
  - concepts/uk-gdpr-data-protection-principles.md
  - concepts/uk-gdpr-automated-decision-making.md
---

# UK GDPR — Data Protection Impact Assessments (Arts. 35–36)

A data protection impact assessment (DPIA) is both a **legal requirement** in specified circumstances and a core **accountability tool** under the UK GDPR. It is integral to the data protection by design and by default (DPbD) approach.

> **Source scope note:** This page is based on the ICO's top-level accountability and governance overview. The ICO's dedicated DPIA sub-page has not yet been ingested. More granular procedural obligations — including the ICO's list of processing operations that always require a DPIA — may be covered there.

---

## When Is a DPIA Required? (Art. 35)

A DPIA is a **legal requirement** before beginning any processing that is **likely to result in a high risk** to the rights and freedoms of individuals (Art. 35(1)).

High-risk processing types identified in Art. 35(3) include:
1. **Systematic and extensive evaluation** of personal aspects based on automated processing, including profiling, that produces decisions with legal or similarly significant effects (e.g. automated credit decisions)
2. **Large-scale processing** of special category data (Art. 9) or criminal conviction/offence data (Art. 10)
3. **Systematic monitoring** of a publicly accessible area on a large scale (e.g. CCTV)

The ICO also publishes a list of processing operations that **always require** a DPIA (not yet ingested). Controllers must consult this list before commencing new processing activities.

**Financial services relevance:**
- Automated credit scoring or loan decisions → criterion 1
- Large-scale processing of health/biometric data → criterion 2
- Large-scale transaction monitoring or behavioural profiling → criteria 1 and/or 3
- Introducing new AI or machine learning models affecting individual outcomes → criterion 1

---

## What a DPIA Must Cover (Art. 35(7))

A valid DPIA must include at minimum:

1. A **systematic description** of the envisaged processing operations and the purposes, including the legitimate interest pursued (if applicable)
2. An **assessment of the necessity and proportionality** of the processing in relation to the purposes
3. An **assessment of the risks** to the rights and freedoms of data subjects
4. The **measures envisaged** to address those risks, including safeguards, security measures, and mechanisms to ensure protection of personal data

The DPO must be consulted when conducting a DPIA (Art. 35(2)). Where appropriate, controllers should also seek the views of data subjects or their representatives (Art. 35(9)).

---

## Prior Consultation with the ICO (Art. 36)

Where a DPIA indicates that processing would result in a **high risk** that cannot be mitigated by available measures, the controller must consult the **ICO prior to processing** (Art. 36(1)).

The ICO will respond within **8 weeks** (extendable to 14 weeks for complex cases). If the ICO considers the processing would infringe the UK GDPR, it may issue written advice or use its enforcement powers.

---

## Dual Function of a DPIA

A DPIA serves two purposes simultaneously:

**1. Risk identification and mitigation**
The DPIA process forces a structured analysis of:
- What data is processed and why
- What could go wrong and for whom
- What safeguards can reduce or eliminate identified risks

**2. Accountability evidence**
A completed DPIA documents:
- The decision-making process and the options considered
- The reasons for choosing particular safeguards
- The residual risk accepted and why it is acceptable

This documentation is the primary evidence a controller can produce to demonstrate DPbD compliance and accountability if challenged by the ICO or a data subject.

---

## DPIA and DPbD Interaction

DPIAs are a core tool within the DPbD (Art. 25) framework:
- DPbD requires embedding privacy into design decisions throughout the processing lifecycle
- DPIAs document **those design decisions** and their privacy rationale
- Conducting a DPIA early in a project (at design stage) is the correct approach — retrospective DPIAs after systems are built are inadequate

---

## Ongoing DPIA Obligations

A DPIA is not a one-time exercise. Controllers must:
- **Review** the DPIA when the nature, scope, context, or purposes of processing change materially
- **Update** the DPIA to reflect changes in risks or safeguards
- The DPO monitors the performance of DPIAs (Art. 39(1)(c))

---

## Key Points for Agents

- A DPIA is a **legal requirement** before processing likely to result in high risk — it is not optional or aspirational. Failure to conduct a required DPIA is a breach of Art. 35, attracting fines at the **Art. 83(4) tier** (up to £8.7m/2% annual worldwide turnover).
- The three main triggers are: (1) automated decisions with legal/significant effects, (2) large-scale special category data processing, (3) large-scale systematic monitoring. **Most material fintech processing activities involving AI, credit decisions, or transaction monitoring will trigger criterion 1 or both 1 and 3.**
- Where a DPIA shows residual high risk cannot be mitigated, **prior ICO consultation is mandatory** before processing begins (Art. 36).
- A DPIA is both a **risk management tool and an accountability document** — it proves the controller thought about privacy risks and what they did about them.
- The **DPO must be consulted** on every DPIA (Art. 35(2)).
- The ICO's dedicated DPIA sub-page (not yet ingested) includes a published list of processing operations that always require a DPIA.

## Related Articles

- [[ico-guide-accountability-governance]]
- [[uk-gdpr-data-protection-by-design]]
- [[uk-gdpr-dpo]]
- [[uk-gdpr-data-protection-principles]]
- [[uk-gdpr-automated-decision-making]]
- [[uk-gdpr-security]]
