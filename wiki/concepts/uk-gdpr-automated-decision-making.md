---
title: "UK GDPR — Automated Decision-Making and Profiling (Article 22)"
jurisdiction: UK
regulator: ICO
regulation: UK GDPR (Articles 4(4), 22)
status: current
effective_date: 2021-01-01
last_updated: 2026-04-14
sources:
  - "ICO Guide to Individual Rights v0.0.2 (19 May 2023) — pp. 81–87"
  - "UK GDPR Art. 4(4), 9, 22, 35(1)(a)"
tags: [uk-gdpr, automated-decision-making, profiling, Art-22, DPIA, fintech, ICO, UK]
related:
  - concepts/uk-gdpr-individual-rights-overview.md
  - concepts/uk-gdpr-lawful-basis.md
  - concepts/uk-gdpr-data-protection-principles.md
  - concepts/uk-gdpr-right-to-object.md
  - concepts/uk-gdpr-right-to-be-informed.md
  - concepts/vulnerable-customers.md
  - summaries/ico-guide-individual-rights.md
  - concepts/uk-gdpr-security.md
---

# UK GDPR — Automated Decision-Making and Profiling (Article 22)

## The Two-Track Framework

The UK GDPR regulates automated decision-making and profiling on two tracks:

1. **General profiling** — all automated processing of personal data used to evaluate, analyse or predict aspects of individuals. Subject to general UK GDPR obligations (lawful basis, principles, rights). No specific restriction applies unless it falls within track 2.
2. **Solely automated decisions with legal or similarly significant effects (Art. 22)** — the restricted track. The default position is that this processing is prohibited unless one of three permitted grounds is established.

Both tracks apply simultaneously in financial services. Understanding which track applies to a given processing activity is a prerequisite for compliance.

## Definitions

### Profiling (Art. 4(4))

"Any form of automated processing of personal data consisting of the use of personal data to evaluate certain things about an individual, in particular to analyse or predict aspects concerning that natural person's performance at work, economic situation, health, personal preferences, interests, reliability, behaviour, location or movements."

Profiling is typically used to: find out individual preferences; predict behaviour; make decisions. Applications in financial services include: customer risk scoring, creditworthiness assessment, fraud detection, and marketing segmentation.

### Automated Individual Decision-Making

A decision made by automated means **without any human involvement**. Does not have to involve profiling — but often will. For a decision to be "solely automated" under Art. 22, there must be **no genuine human involvement** in the decision-making process. A human who rubber-stamps an automated output without independently reviewing it does not constitute human involvement.

## Article 22 — The Restriction

**Art. 22(1):** Individuals have the right not to be subject to a decision based solely on automated processing, including profiling, which produces **legal effects** concerning them or **similarly significantly** affects them.

**Legal effect:** Something that directly affects someone's legal rights — e.g., a decision that changes their legal position or entitlements.

**Similarly significant effect:** Not defined in the UK GDPR, but must have a serious impact on the individual. The ICO names **automatic refusal of an online credit application** as the primary example of a "similarly significant" effect. E-recruiting practices that use pre-programmed algorithms to make hiring decisions without human involvement are also named.

The significance test focuses on the **impact on the individual**, not the type of decision or sector.

## Three Permitted Grounds for Art. 22 Processing (Art. 22(2))

Solely automated decision-making with legal or similarly significant effects is prohibited **unless** the decision falls within one of the following grounds:

| Ground | Art. 22(2) | Notes |
|--------|-----------|-------|
| **(a) Contract necessity** | Necessary for entering into or performance of a contract between the individual and the controller | Must demonstrate necessity — not mere convenience or efficiency |
| **(b) Domestic law authorisation** | Authorised by domestic law applicable to the controller | The domestic law must provide for suitable measures to safeguard the individual's rights. Example uses: fraud detection, tax assessment |
| **(c) Explicit consent** | Based on the individual's explicit consent | Must meet the explicit consent standard (Art. 4(11)) — not standard consent |

If processing cannot be brought within one of these three grounds, it cannot be carried out as solely automated decision-making with legal or similarly significant effects.

## Special Category Data in Automated Decision-Making (Art. 22(4))

Art. 22(4) imposes an **additional restriction** where Art. 22(1) processing involves special category personal data (health data, racial or ethnic origin, biometric data, genetic data, political opinions, religious/philosophical beliefs, trade union membership, sexual orientation).

Even where a general Art. 22(2)(a) or (b) ground applies (contract necessity or law authorisation), special category data may only be used in Art. 22 processing if **one of the following is also satisfied**:

- The individual gives **explicit consent**; OR
- The processing is necessary for reasons of **substantial public interest** (under Art. 9(2)(g))

This creates a higher bar. A firm relying on contract necessity (Art. 22(2)(a)) to run automated credit decisions **cannot** include health data in its scoring model unless it separately satisfies the Art. 22(4) special category condition.

**Practical obligation:** Any special category data that enters an automated decision-making system accidentally must be **deleted**.

## Mandatory Requirements for Art. 22 Processing

Where processing falls within Art. 22, the controller must satisfy the following:

| Obligation | Requirement |
|-----------|------------|
| **DPIA** | Art. 22 processing is high-risk — a Data Protection Impact Assessment is mandatory before the processing begins (Art. 35(1)(a)) |
| **Transparency** | Provide meaningful information about: (i) the logic involved; (ii) the significance of the processing; (iii) the envisaged consequences for the individual. Must be included in the privacy notice. |
| **Human review mechanism** | Introduce a simple way for individuals to: request human intervention; express their point of view; obtain an explanation of the decision; challenge the decision |
| **Identified reviewers** | Identify staff who are authorised to carry out reviews and have the authority to change decisions |
| **Statistical rigour** | Use appropriate mathematical or statistical procedures |
| **Accuracy and bias checks** | Carry out regular checks that systems are working as intended; correct inaccuracies; feed findings back into the design process |
| **Data security** | Secure personal data proportionate to the risk to the individual, including risk of discriminatory effects |

## Transparency Obligation in Privacy Notices

The Art. 22 transparency obligation directly connects to the right to be informed (Art. 13/14). The privacy notice must contain meaningful information — not a generic statement that "automated systems are used." Specifically:

- **Logic:** What data inputs are used; how they are processed; what the output represents
- **Significance:** Why the automated processing matters for the individual's situation
- **Envisaged consequences:** What decision or outcome the individual can expect

It must also describe the **human review mechanism** — how the individual can trigger a review and what that process looks like.

See [[uk-gdpr-right-to-be-informed]] for the full Art. 13/14 mandatory content framework.

## General Profiling — Where Art. 22 Does Not Apply

Where processing does not constitute solely automated decision-making with legal or similarly significant effects, Art. 22's restrictions do not apply. However, the controller must still:

- Identify and document a **lawful basis** for the profiling
- Comply with all **data protection principles** (purpose limitation, data minimisation, accuracy, storage limitation)
- Provide individuals with **clear information** about the profiling activity in the privacy notice, including what data is used, why, and what the effects might be
- Enable individuals to **exercise their rights**, including the **right to object** to profiling under Art. 21 (see [[uk-gdpr-right-to-object]])
- Have **additional checks** for vulnerable groups, including children, in any profiling or automated decision-making system
- Collect the minimum data needed and maintain a clear retention policy for profiles created

As a model of best practice, the ICO recommends carrying out a DPIA before commencing new profiling activities even where Art. 22 does not apply.

## Fintech Relevance

| Processing activity | Art. 22 engaged? | Applicable ground(s) |
|--------------------|-----------------|----------------------|
| Automated loan approval or refusal without human review | **Yes** — "similarly significant" (ICO's named example) | Contract necessity (Art. 22(2)(a)) or explicit consent |
| Fraud detection algorithm that automatically blocks a transaction | **Yes** — legal effect on customer | Domestic law authorisation (Art. 22(2)(b)) — AML/fraud obligations |
| Automated KYC/AML risk scoring resulting in automatic onboarding refusal | **Potentially yes** — if outcome is automatic refusal without human review | Law authorisation (Art. 22(2)(b)) or contract necessity |
| Robo-advice generating investment product recommendations | **Depends** — legal/similarly significant effect assessment needed | Explicit consent (Art. 22(2)(c)) most likely required |
| Customer risk segmentation for marketing purposes | **No** — profiling without legal/similarly significant effects | General profiling rules apply; Art. 21 right to object |
| Credit scoring model informing (but not making) the final lending decision | **No** — if a human genuinely reviews and decides | General profiling rules apply; transparency obligations still apply |

## Key Points for Agents

- Art. 22 requires all three elements: (1) solely automated (no genuine human review); (2) individual decision; (3) legal or similarly significant effect. Missing any one element takes the processing outside Art. 22 — but general profiling rules still apply.
- **Automatic refusal of an online credit application is the ICO's named "similarly significant effect" example** — the most direct fintech application.
- Three permitted grounds: contract necessity; domestic law authorisation; explicit consent.
- Special category data: explicit consent or substantial public interest only — this applies **in addition to** (not instead of) the Art. 22(2) ground.
- Art. 22 processing always requires a DPIA before it begins.
- Firms must provide meaningful logic information (not a generic AI statement) and a simple human review mechanism.
- "Solely automated" means no genuine human involvement — rubber-stamping does not qualify as human review.
- Even where Art. 22 does not apply, profiling remains regulated: lawful basis required, Art. 21 right to object applies, transparency disclosures required, additional safeguards for vulnerable groups.

## Related Articles

- [[uk-gdpr-individual-rights-overview]]
- [[uk-gdpr-lawful-basis]]
- [[uk-gdpr-data-protection-principles]]
- [[uk-gdpr-right-to-object]]
- [[uk-gdpr-right-to-be-informed]]
- [[vulnerable-customers]]
- [[ico-guide-individual-rights]]
- [[uk-gdpr-security]]
