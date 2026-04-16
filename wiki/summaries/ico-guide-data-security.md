---
title: "ICO, A Guide to Data Security"
jurisdiction: UK
regulator: ICO
regulation: UK GDPR Art. 5(1)(f); Art. 32; DPA 2018
status: current
effective_date: 2018-05-25
last_updated: 2026-04-15
sources:
  - "ICO, 'A guide to data security', ico.org.uk"
tags: [UK-GDPR, Article-32, Article-5, security, CIA-triad, encryption, pseudonymisation, resilience, processor-security, testing, PCI-DSS, staff-training, ICO, data-protection, UK]
related:
  - concepts/uk-gdpr-security.md
  - concepts/uk-gdpr-data-protection-principles.md
  - summaries/ico-guide-data-protection-principles.md
  - concepts/uk-gdpr-personal-data-breaches.md
  - summaries/ico-guide-personal-data-breaches.md
  - concepts/uk-gdpr-lawful-basis.md
  - concepts/customer-due-diligence.md
  - concepts/aml-ctf-framework.md
---

# ICO — A Guide to Data Security

**DUA Act note:** This guidance was under review following the Data (Use and Access) Act 2025 coming into force on 19 June 2025. Content cited here reflects the pre-review version. Substantive changes are possible; verify against current ICO guidance before operational use.

**Scope:** Covers Article 5(1)(f) (security principle) and Article 32 (security of processing) only. Personal data breach notification obligations (Arts. 33–34) are covered in `[[ico-guide-personal-data-breaches]]`.

---

## Overview

Two provisions govern security under the UK GDPR. Article 5(1)(f) states the high-level principle: personal data must be processed in a manner ensuring appropriate security, including protection against unauthorised or unlawful processing and against accidental loss, destruction, or damage. Article 32 provides the operational specifics and applies directly to both controllers and processors.

The ICO frames information security as broader than cybersecurity. It includes physical security, organisational measures, and procedural controls — not only network and system protection.

---

## Art. 32 — The Four Sub-Obligations

Article 32(1) requires appropriate technical and organisational measures, taking into account the state of the art, costs of implementation, nature, scope, context and purposes of processing, and risks to individuals. Four specific sub-obligations are listed:

**(a) Pseudonymisation and encryption (Art. 32(1)(a)):** Explicitly named as examples of appropriate measures, not mandatory requirements. Whether they are appropriate depends on the firm's circumstances and the risk profile of the processing. The ICO's longstanding position is that encryption is appropriate whenever personal data is stored or transmitted over the internet, given its widespread availability and relatively low cost.

**(b) Confidentiality, integrity, and availability ("CIA triad") plus resilience (Art. 32(1)(b)):** All three elements must be ensured for both systems and the data within them:
- **Confidentiality** — data can be accessed, altered, disclosed, or deleted only by those authorised to do so, and only within the scope of their authority
- **Integrity** — data is accurate and complete in relation to the processing purpose
- **Availability** — data is accessible and usable; accidental loss, alteration, or destruction should be recoverable
- **Resilience** — systems can continue to operate under adverse conditions (physical or technical incidents) and can be restored to an effective state; covers business continuity, disaster recovery, and cyber resilience

**(c) Restoring availability in a timely manner (Art. 32(1)(c)):** The controller must have the ability to restore the availability and access to personal data in the event of a physical or technical incident. "Timely manner" is not defined — it depends on the organisation, its systems, and the risk posed to individuals from unavailability. A documented backup process (e.g. the 3-2-1 strategy) provides assurance of compliance. Ransomware that encrypts production data while backups survive is the ICO's named example of where this obligation is met if restoration is possible.

**(d) Regular testing, assessing, and evaluating effectiveness (Art. 32(1)(d)):** A process for regularly testing, assessing, and evaluating the effectiveness of security measures is a mandatory legal requirement for all organisations — not only those in regulated sectors. Testing may include vulnerability scanning and penetration testing. Results must be documented; recommendations must be acted upon or there must be a documented valid reason for not doing so. Scope of testing must be appropriate to the processing.

---

## What Level of Security is Required?

The UK GDPR does not prescribe specific measures. The standard is "appropriate to the risk." Determining what is appropriate requires an information risk assessment considering:
- The value, sensitivity, and confidentiality of the personal data
- The damage or distress that would result from compromise
- The nature and extent of the organisation's premises and computer systems
- The number of staff with access
- Any processing by data processors acting on behalf of the controller

The ICO and NCSC have jointly developed security outcomes (a separate ICO sub-page, not ingested) that can help firms determine what measures are appropriate. Cyber Essentials is described as a baseline for technical controls — firms may need to go beyond it depending on their processing.

---

## Organisational Measures

- Information risk assessment (mandatory first step)
- Designated accountable individual with appropriate resource and authority for day-to-day security
- Information security policy (or equivalent); additional policies where necessary
- Co-ordination between key functions (security, IT procurement, HR, legal)
- Access control policies for external parties
- Business continuity arrangements for personal data
- Periodic review to ensure measures remain appropriate

---

## Technical Measures

Physical security: doors, locks, alarms, access control, CCTV, visitor supervision, equipment disposal (paper and electronic), mobile device security.

Cybersecurity: system security (networks and information systems), data security (access controls, secure storage), online security (websites, applications), device security (BYOD policies).

---

## Sector-Specific Security Requirements — PCI-DSS

Where a sector has its own security requirements (set by regulators or industry bodies), the ICO will consider compliance with those requirements when assessing regulatory action under the UK GDPR. However, sector compliance does not automatically equal UK GDPR compliance.

**Fintech relevance — PCI-DSS:** Firms processing payment card data must comply with the Payment Card Industry Data Security Standard (PCI-DSS). If a personal data breach occurs in connection with card data processing, the ICO will consider the extent to which the firm had implemented PCI-DSS controls — particularly if the breach was caused by a gap in a control that PCI-DSS mandates. PCI-DSS compliance does not provide a safe harbour but is a material mitigating factor in fine calculations.

---

## Processor Security Obligations

Where data processors process personal data on a controller's behalf, the UK GDPR's security requirements apply directly to the processor (not only the controller). The controller must:

1. Choose a processor that provides **sufficient guarantees** about its security measures (Art. 28(1))
2. Include in the written contract a requirement that the processor implements **all measures required under Article 32**
3. Include a requirement that the processor makes available **all information necessary to demonstrate compliance**, including permitting audits and inspections by the controller or an authorised third party

A processor can assist the controller in meeting security obligations — for example, where the controller lacks technical expertise, engaging a processor with those capabilities can contribute to compliance, provided the contract is appropriate.

**Cross-reference:** Art. 28 controller/processor obligations have not yet been separately ingested; this is the first Art. 28 substantive content in the wiki.

---

## Staff Training (Art. 32(4))

Article 32(4) requires that any person acting under the controller's or processor's authority who has access to personal data processes that data only on instructions from the controller, unless required to do so by law.

Staff training must cover:
- Controller's UK GDPR obligations
- Staff individual responsibilities for protecting personal data
- Criminal liability: deliberately accessing or disclosing personal data without authority is a criminal offence under DPA 2018
- Proper procedures to identify callers (to prevent social engineering)
- Phishing recognition and deception attempts
- Restrictions on personal use of company systems

Training is only effective if the individuals delivering it are themselves reliable and knowledgeable.

---

## Scope Boundary — Breach Notification

This document does not cover personal data breach notification obligations under Arts. 33–34. See `[[uk-gdpr-personal-data-breaches]]` for the 72-hour ICO notification clock (Art. 33), individual notification at high-risk threshold (Art. 34), mandatory breach register (Art. 33(5)), and Art. 83(4) fine tier.

---

## Key Points for Agents

- **Two-article framework:** Art. 5(1)(f) sets the high-level security principle; Art. 32 provides the four specific sub-obligations. Both apply to all controllers and processors.
- **Risk-based standard:** No prescribed measures. "Appropriate" is assessed against the state of the art, implementation costs, nature of processing, and risk to individuals. An information risk assessment is the mandatory first step.
- **Testing is a legal requirement (Art. 32(1)(d)):** All organisations must regularly test, assess, and evaluate the effectiveness of their security measures. Results must be documented and acted on.
- **PCI-DSS interaction:** ICO will consider PCI-DSS compliance in enforcement where card data is involved, but PCI-DSS compliance ≠ UK GDPR compliance.
- **Processor contracts must require Art. 32 compliance:** The written contract must stipulate the processor takes all measures required by Art. 32, and must include audit/inspection rights.
- **Staff criminal liability:** Deliberate unauthorised access or disclosure of personal data is a criminal offence under DPA 2018 — not just a regulatory breach.
- **Breach notification:** Arts. 33–34 covered in `[[uk-gdpr-personal-data-breaches]]` — 72-hour ICO clock, two-tier risk assessment, mandatory breach register, Art. 83(4) fine tier.

## Related Articles

- [[uk-gdpr-security]]
- [[uk-gdpr-personal-data-breaches]]
- [[ico-guide-personal-data-breaches]]
- [[uk-gdpr-data-protection-principles]]
- [[ico-guide-data-protection-principles]]
- [[uk-gdpr-lawful-basis]]
- [[customer-due-diligence]]
- [[aml-ctf-framework]]
