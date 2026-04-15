---
title: "ICO, Personal Data Breaches: A Guide"
jurisdiction: UK
regulator: ICO
regulation: UK GDPR Arts. 33, 34, 83(4); DPA 2018; PECR (DUA Act update Aug 2025)
status: current
effective_date: 2018-05-25
last_updated: 2026-04-15
sources:
  - "ICO, 'Personal data breaches: a guide', ico.org.uk"
tags: [UK-GDPR, Article-33, Article-34, breach-notification, personal-data-breach, 72-hour, breach-register, high-risk, ICO, data-protection, UK, PECR, DUA-Act]
related:
  - concepts/uk-gdpr-personal-data-breaches.md
  - concepts/uk-gdpr-security.md
  - summaries/ico-guide-data-security.md
  - concepts/uk-gdpr-data-protection-principles.md
  - concepts/uk-gdpr-individual-rights-overview.md
  - concepts/uk-gdpr-subject-access.md
  - concepts/aml-ctf-framework.md
---

# ICO — Personal Data Breaches: A Guide

**DUA Act update (20 August 2025):** PECR breach reporting timescale for communications service providers updated from 24 hours to 72 hours. This does not affect UK GDPR Arts. 33/34 timescales.

---

## Overview

The UK GDPR imposes three distinct breach obligations on all controllers:

1. **Art. 33** — notify the ICO within 72 hours if the breach is likely to result in a risk to individuals' rights and freedoms
2. **Art. 34** — notify affected individuals without undue delay if the breach is likely to result in a **high** risk to their rights and freedoms
3. **Art. 33(5)** — document **all** breaches regardless of whether notification is required

These obligations are separate and cascade: a breach can trigger Art. 33 (ICO notification) without triggering Art. 34 (individual notification), and a breach that triggers neither must still be documented.

---

## Definition of a Personal Data Breach

A personal data breach is a **breach of security** leading to the accidental or unlawful **destruction, loss, alteration, unauthorised disclosure of, or access to**, personal data (Art. 4(12) implied / Art. 33(1)).

This covers both deliberate and accidental causes and extends beyond loss of confidentiality to cover **availability** and **integrity** breaches:
- Loss of availability (e.g. ransomware encrypting data)
- Alteration of data without permission
- Sending data to an incorrect recipient
- Loss or theft of a device containing personal data
- Unauthorised access by a third party

A breach that affects confidentiality, integrity, or availability of personal data may be a personal data breach regardless of whether data was exfiltrated.

---

## The Two-Tier Risk Assessment

The notification obligations depend on a case-by-case risk assessment of the **likely adverse consequences for individuals**:

| Risk level | Obligation |
|-----------|-----------|
| **Unlikely to result in a risk** to rights and freedoms | No ICO notification required; must document breach and decision justification (Art. 33(5)) |
| **Likely to result in a risk** to rights and freedoms | Must notify ICO within 72 hours (Art. 33) |
| **Likely to result in a HIGH risk** to rights and freedoms | Must notify ICO (Art. 33) **and** notify affected individuals without undue delay (Art. 34) |

The Art. 34 "high risk" threshold is explicitly **higher** than the Art. 33 "likely risk" threshold. Both the severity of potential impact and the likelihood of those consequences are relevant factors. If the ICO considers there is a high risk and the controller has not notified individuals, the ICO has power to **compel** individual notification.

---

## Article 33 — Notifying the ICO

### The 72-Hour Clock

Notification must be made to the ICO **without undue delay and, where feasible, not later than 72 hours** after becoming aware of the breach. If notification is made after 72 hours, reasons for the delay must be provided.

The clock starts when the controller **becomes aware** of the breach — not when the breach occurred. The Article 29 Working Party guidelines (endorsed by EDPB and still relevant post-Brexit) provide guidance on when "becoming aware" is triggered.

### Mandatory Content (Art. 33(3))

The ICO notification must contain at least:

1. **Nature of the breach** — categories and approximate number of individuals concerned; categories and approximate number of personal data records concerned (where possible)
2. **Contact details** — name and contact details of the DPO (if any) or other contact point
3. **Likely consequences** — a description of the likely consequences of the breach
4. **Measures taken or proposed** — to address the breach and, where appropriate, to mitigate possible adverse effects

### Phased Notification (Art. 33(4))

Where all information is not available within 72 hours, the UK GDPR allows notification in phases. The controller must:
- Notify the ICO within 72 hours with whatever information is available
- Indicate that further information will follow and provide an expected timeline
- Submit the outstanding information without undue further delay

The ICO expects controllers to prioritise the investigation and resource it adequately. Phased notification does not extend the 72-hour deadline for the initial notification.

### Processor Obligation (Art. 33(2))

Where a data processor becomes aware of a breach, it must **notify the controller without undue delay**. The controller is then responsible for assessing reportability and notifying the ICO if required. This processor obligation must be reflected in the Art. 28 written contract.

---

## Article 34 — Notifying Individuals

Where a breach is likely to result in a **high risk** to the rights and freedoms of individuals, the controller must inform those individuals **without undue delay** (no fixed timeframe, but "as soon as possible"). The purpose is to enable individuals to take protective steps.

### Mandatory Content (Art. 34(2))

The individual notification must describe in **clear and plain language**:
- The nature of the breach
- The name and contact details of the DPO (if any) or other contact point
- The likely consequences of the breach
- Measures taken or proposed to address the breach and mitigate adverse effects
- **Specific protective advice** — concrete steps individuals can take (e.g. force a password reset, warn about phishing, advise to monitor for fraudulent activity)

### ICO Power to Compel

If the controller decides not to notify individuals, the ICO retains the power to compel notification if it considers the breach is likely to result in a high risk. Non-notification decisions must be documented.

---

## Article 33(5) — Mandatory Breach Register

**All personal data breaches must be documented**, regardless of whether they are reportable to the ICO or to individuals. The breach register must record:
- The facts of the breach
- Its effects
- Remedial action taken
- Where a decision was made not to notify: the justification for that decision

This obligation has no risk threshold. A breach assessed as below the Art. 33 notification threshold must still be entered in the breach register. The register enables the ICO to verify compliance with notification duties under the accountability principle.

---

## Fine for Failure to Notify

Failure to notify a reportable breach to the ICO, or to notify affected individuals where required, is subject to:

**Art. 83(4):** Up to **£8.7 million or 2% of annual global turnover** (whichever is higher)

This is the **lower fine tier** — distinct from the Art. 83(5)(a) tier (£17.5m/4%) applicable to breaches of the core data protection principles (Art. 5) and lawful basis (Art. 6). A single incident can attract both tiers simultaneously if it involves both a principles breach and a failure to notify.

---

## Parallel Notification Obligations

UK GDPR breach notification is not the only reporting obligation that may apply. Firms must assess whether parallel regimes are triggered:

| Regime | Threshold | Timescale | Notification to | Notes |
|--------|-----------|-----------|----------------|-------|
| **UK GDPR (Art. 33)** | Likely risk to rights/freedoms | 72 hours | ICO | |
| **PECR** | Security breach (communications service providers) | 72 hours | ICO | Updated from 24h to 72h by DUA Act, 20 August 2025 |
| **eIDAS** | Security breach (UK trust service providers) | 24 hours | ICO | Note: even if reported under UK GDPR process, must still be within 24h |
| **NIS Directive** | Incident (operators of essential services / digital service providers) | Separate obligation | ICO | Must also report separately under UK GDPR if also a personal data breach |

Where the same incident triggers multiple obligations, each must be satisfied independently.

---

## Post-Breach Operational Considerations

The guide identifies several operational consequences of a breach that are not strictly UK GDPR requirements but require planning:

- **SAR/erasure surge:** Controllers should anticipate a higher volume of data subject requests following a publicly known breach. A contingency plan is required to maintain compliance with rights-handling timescales alongside breach remediation work.
- **Third-party notifications:** Police, insurers, professional bodies, banks/card companies may need to be notified to help reduce financial loss to individuals.
- **Root cause investigation:** Human error is the leading cause of reported breaches. Post-breach investigation must examine whether the breach was the result of human error or systemic failure, and implement preventive measures.

---

## Key Points for Agents

- **Three separate obligations:** Art. 33 (notify ICO), Art. 34 (notify individuals), Art. 33(5) (document all breaches). They have different thresholds and different timescales.
- **Art. 34 "high risk" is a higher bar than Art. 33 "likely risk."** A breach can be notifiable to the ICO without requiring individual notification.
- **72-hour clock runs from "becoming aware," not from when the breach occurred.** Phased notification is permitted — notify within 72 hours with available information and follow up as the investigation progresses.
- **Art. 33(5) breach register has no threshold** — every breach must be documented, including those assessed as non-reportable.
- **Fine tier is Art. 83(4): £8.7m/2% global turnover** — the lower tier, not the Art. 83(5)(a) principles breach tier (£17.5m/4%). Both can apply simultaneously to the same incident.
- **Processor must notify controller without undue delay** under Art. 33(2); controller then assesses reportability and notifies ICO.
- **PECR 72-hour obligation updated August 2025** (DUA Act) — first PECR content in this wiki; relevant to fintech firms operating as communications service providers.

## Related Articles

- [[uk-gdpr-personal-data-breaches]]
- [[uk-gdpr-security]]
- [[ico-guide-data-security]]
- [[uk-gdpr-data-protection-principles]]
- [[uk-gdpr-individual-rights-overview]]
- [[uk-gdpr-subject-access]]
- [[aml-ctf-framework]]
