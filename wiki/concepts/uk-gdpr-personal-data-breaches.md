---
title: "UK GDPR — Personal Data Breach Notification (Articles 33–34)"
jurisdiction: UK
regulator: ICO
regulation: UK GDPR Arts. 33, 34, 83(4); DPA 2018; PECR (DUA Act Aug 2025)
status: current
effective_date: 2018-05-25
last_updated: 2026-04-15
sources:
  - "ICO, 'Personal data breaches: a guide', ico.org.uk"
tags: [UK-GDPR, Article-33, Article-34, breach-notification, personal-data-breach, 72-hour, breach-register, high-risk, Art-83, PECR, DUA-Act, ICO, data-protection, UK]
related:
  - summaries/ico-guide-personal-data-breaches.md
  - concepts/uk-gdpr-security.md
  - summaries/ico-guide-data-security.md
  - concepts/uk-gdpr-data-protection-principles.md
  - concepts/uk-gdpr-individual-rights-overview.md
  - concepts/uk-gdpr-subject-access.md
  - concepts/uk-gdpr-automated-decision-making.md
  - concepts/aml-ctf-framework.md
  - concepts/customer-due-diligence.md
---

# UK GDPR — Personal Data Breach Notification (Articles 33–34)

A personal data breach triggers up to three separate obligations under the UK GDPR, each with a different threshold, timescale, and content requirement. Controllers must work through them in order.

> **Relationship to security:** This page covers the notification obligations that arise **after** a breach occurs. The obligation to implement security measures to **prevent** breaches is covered in `[[uk-gdpr-security]]` (Art. 32). Both obligations apply to all controllers and processors; Art. 32 applies prospectively, Arts. 33–34 reactively.

---

## Definition of a Personal Data Breach

A personal data breach is a **breach of security** leading to the accidental or unlawful **destruction, loss, alteration, unauthorised disclosure of, or access to** personal data **(Art. 33(1))**.

Coverage is deliberately broad:
- **Confidentiality breach** — unauthorised access or disclosure
- **Integrity breach** — unauthorised alteration of data
- **Availability breach** — accidental or unlawful loss of access to, or destruction of, data (including ransomware)

Both deliberate and accidental causes are included. A breach does not require data to have left the organisation — loss of availability alone can constitute a personal data breach.

---

## The Three Obligations

| Obligation | Article | Trigger | Timescale | Recipient |
|-----------|---------|---------|-----------|-----------|
| Notify ICO | Art. 33 | Likely risk to rights/freedoms | 72 hours from becoming aware | ICO |
| Notify individuals | Art. 34 | Likely **high** risk to rights/freedoms | Without undue delay (no fixed clock) | Affected individuals |
| Document breach | Art. 33(5) | All breaches (no threshold) | At time of breach | Internal breach register |

**The Art. 34 "high risk" threshold is higher than the Art. 33 "likely risk" threshold.** A breach can require ICO notification without requiring individual notification. A breach that requires neither must still be documented.

---

## Step 1 — Risk Assessment

On becoming aware of a breach, the controller must immediately assess the likely adverse consequences for individuals, considering:
- The **severity** of potential harm (identity fraud, financial loss, physical harm, distress, reputational damage, loss of confidentiality of professionally protected data)
- The **likelihood** of that harm materialising
- The **type of data** involved (special category data, financial data, credentials carry higher risk)
- The **number of individuals** affected

**Recital 85** lists the range of potential harms: loss of control over personal data, discrimination, identity theft or fraud, financial loss, unauthorised reversal of pseudonymisation, reputational damage, loss of confidentiality, significant economic or social disadvantage.

**ICO examples:**
- Theft of a customer database usable for identity fraud → likely risk → notify ICO; likely high risk → notify individuals
- Inappropriate alteration or loss of a staff telephone list → unlikely any risk → document only
- Patient records disclosed to unauthorised party → likely high risk → notify ICO and individuals
- Alumni contact list accidentally deleted then restored from backup → unlikely any risk → document only
- Medical records sent to wrong professional who immediately deletes securely → unlikely any risk → document only

---

## Step 2 — Art. 33: Notifying the ICO

### The 72-Hour Clock

Notification to the ICO must be made **without undue delay and, where feasible, not later than 72 hours** after becoming aware of the breach.

- The clock starts when the **controller becomes aware** — not when the breach occurred
- If notification is made after 72 hours, the controller must provide reasons for the delay
- The ICO expects controllers to prioritise breach investigation and resource it adequately

### Phased Notification (Art. 33(4))

Where the full picture is not available within 72 hours, the controller may notify in phases:
1. Notify the ICO within 72 hours with available information and the reason for incompleteness
2. Indicate when further information will be submitted
3. Submit outstanding information without undue further delay

Phased notification does not extend the 72-hour deadline for the initial notification. Incomplete initial notification is better than no notification.

### Mandatory Content (Art. 33(3))

The ICO notification must contain at minimum:

| Element | Detail |
|---------|--------|
| Nature of breach | Categories and approximate number of individuals concerned; categories and approximate number of personal data records concerned (where possible) |
| Contact details | DPO name and contact details (if the organisation has one), or other contact point |
| Likely consequences | Description of the likely consequences of the breach |
| Measures taken or proposed | To address the breach; where appropriate, to mitigate possible adverse effects |

### Processor Obligation (Art. 33(2))

Where a **data processor** becomes aware of a breach, it must notify the **controller without undue delay**. The controller then assesses reportability and notifies the ICO if required. This obligation must be reflected in the Art. 28 written contract between controller and processor.

**Fintech relevance:** Cloud providers, payment processors, KYC vendors, and AML screening tool providers are all data processors. A breach at any of them triggers Art. 33(2). The controller's 72-hour clock runs from when **the controller** becomes aware — which may be when the processor notifies them, not when the breach occurred at the processor.

---

## Step 3 — Art. 34: Notifying Individuals

### The "High Risk" Threshold

The Art. 34 obligation triggers at a **higher level** than Art. 33. "High risk" means:
- The potential impact on individuals is **more severe** than for standard Art. 33 notification; or
- The **likelihood** of adverse consequences is **greater** than for standard Art. 33 notification

One of the main reasons for individual notification is to enable individuals to **take protective steps** — the time-sensitivity of this purpose means notification should happen as soon as possible.

### Timescale

No fixed clock — notification must be made **without undue delay**, interpreted as "as soon as possible." There is no Art. 34 equivalent of the 72-hour rule.

### Mandatory Content (Art. 34(2))

In **clear and plain language**:

| Element | Detail |
|---------|--------|
| Nature of breach | What happened |
| Contact details | DPO or other contact point |
| Likely consequences | What may happen as a result |
| Measures taken or proposed | To address the breach and mitigate adverse effects |
| **Protective advice** | Specific, concrete steps individuals should take (e.g. force password reset; warn about phishing; advise to monitor accounts for fraudulent activity) |

The protective advice element is specific to Art. 34 — it is not required in the Art. 33 ICO notification but is the operationally critical element for affected individuals.

### ICO Power to Compel

If the controller decides not to notify individuals, the ICO retains the power to **compel individual notification** if it considers there is a high risk. A decision not to notify must be documented with justification. The ICO may also exercise other corrective powers under Art. 58.

---

## Step 4 — Art. 33(5): Mandatory Breach Register

**Every personal data breach must be documented**, including breaches assessed as below the Art. 33 notification threshold. This is an absolute obligation with **no risk threshold**.

The breach register must record:
- **Facts** of the breach
- **Effects** of the breach
- **Remedial action** taken
- Where a decision was made not to notify the ICO or individuals: the **justification for that decision**

Purpose: enables the ICO to verify the controller's compliance with its notification duties. This is part of the accountability principle (Art. 5(2)).

**Practical implication:** A breach register must be maintained as a live operational document. Near-misses and low-risk incidents should be logged. The register is a primary ICO audit target after a breach investigation opens.

---

## Fine Tier — Art. 83(4)

Failure to notify a reportable breach, failure to notify in time, or failure to provide required information is subject to:

**Art. 83(4): up to £8.7 million or 2% of annual global turnover** (whichever is higher)

This is the **lower fine tier** under the UK GDPR. Compare:
- Art. 83(5)(a): up to £17.5m/4% for breaches of the core principles (Art. 5) and lawful basis (Art. 6)
- Art. 83(4): up to £8.7m/2% for notification failures, processor obligations failures, and similar

**Important:** A single security incident can attract both tiers simultaneously. If a breach of security (Art. 32 failure) also results in a failure to notify (Art. 33 failure), the ICO can impose fines under both Art. 83(4) and Art. 83(5)(a) for the same incident.

---

## Parallel Notification Obligations

UK GDPR notification may not be the only obligation triggered. Fintech firms must assess:

| Regime | Who it applies to | Timescale | Notes |
|--------|-----------------|-----------|-------|
| **PECR** | Communications service providers | **72 hours** | Updated from 24h by DUA Act, 20 August 2025. First PECR content in this wiki. |
| **eIDAS** | UK trust service providers | **24 hours** | Even if using the GDPR notification form, still must notify within 24 hours |
| **NIS Directive** | Operators of essential services; digital service providers | Separate obligation | Must also notify under UK GDPR separately if the incident is a personal data breach |

Where multiple obligations apply to the same incident, each must be satisfied independently. A PECR notification does not discharge the UK GDPR obligation and vice versa.

---

## Post-Breach Operational Obligations

The following are not strict UK GDPR requirements but are operationally important:

**SAR and erasure surge:** Following a publicly known breach, controllers should anticipate significantly increased data subject requests. A contingency plan must be in place to maintain rights-handling compliance alongside breach remediation work. Failure to respond to SARs on time during a breach response is a separate breach of Art. 12/15.

**Third-party notification:** Police, insurers, professional bodies, banks, and card companies may need to be notified to help reduce financial harm to affected individuals. This is not legally required under UK GDPR but is listed as a best-practice step.

**Root cause investigation:** Post-breach investigation should determine whether the cause was human error or systemic, and implement preventive measures. Human error is the leading reported cause.

**AML/regulatory intersection:** A breach affecting CDD records, transaction data, or SAR-related information may simultaneously trigger regulatory notifications to the FCA (Principle 11 / SUP 15.3) or OFSI in addition to the ICO. Controllers must assess all applicable reporting obligations for the same incident.

---

## Key Points for Agents

- **Three separate obligations with different thresholds:** Art. 33 (ICO, "likely risk"), Art. 34 (individuals, "likely HIGH risk"), Art. 33(5) (all breaches, no threshold). Work through them in order on every breach.
- **Art. 34 is a higher bar than Art. 33.** Some breaches require ICO notification only; some require both. Never assume Art. 33 notification automatically triggers Art. 34.
- **72-hour clock starts when the controller becomes aware** — not when the breach occurred. Phased notification (Art. 33(4)) is permitted; the initial notification must still be within 72 hours.
- **Art. 33(5) breach register: no threshold.** Every breach must be documented. Decisions not to report must be justified and recorded. This is a primary ICO audit target.
- **Fine tier is Art. 83(4): £8.7m/2%**, not the Art. 83(5)(a) principles-breach tier. Both tiers can be imposed for the same incident.
- **Processor breaches:** the processor must notify the controller without undue delay (Art. 33(2)); the controller's 72-hour clock runs from when the controller becomes aware.
- **PECR 72-hour obligation** (updated August 2025) applies in addition to UK GDPR for communications service providers.
- **Protective advice to individuals (Art. 34)** must be specific and actionable — not generic. This is the key element that distinguishes Art. 34 notification content from Art. 33.

## Related Articles

- [[ico-guide-personal-data-breaches]]
- [[uk-gdpr-security]]
- [[ico-guide-data-security]]
- [[uk-gdpr-data-protection-principles]]
- [[uk-gdpr-processor-contracts]]
- [[uk-gdpr-individual-rights-overview]]
- [[uk-gdpr-subject-access]]
- [[uk-gdpr-automated-decision-making]]
- [[aml-ctf-framework]]
- [[customer-due-diligence]]
