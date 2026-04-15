---
title: "UK GDPR — Security of Processing (Article 32)"
jurisdiction: UK
regulator: ICO
regulation: UK GDPR Art. 5(1)(f); Art. 32; DPA 2018
status: current
effective_date: 2018-05-25
last_updated: 2026-04-15
sources:
  - "ICO, 'A guide to data security', ico.org.uk"
tags: [UK-GDPR, Article-32, Article-5, security, CIA-triad, encryption, pseudonymisation, resilience, processor-security, testing, PCI-DSS, staff-training, DUA-Act, ICO, data-protection, UK]
related:
  - summaries/ico-guide-data-security.md
  - concepts/uk-gdpr-personal-data-breaches.md
  - summaries/ico-guide-personal-data-breaches.md
  - concepts/uk-gdpr-data-protection-principles.md
  - summaries/ico-guide-data-protection-principles.md
  - concepts/uk-gdpr-lawful-basis.md
  - concepts/uk-gdpr-automated-decision-making.md
  - concepts/customer-due-diligence.md
  - concepts/aml-ctf-framework.md
---

# UK GDPR — Security of Processing (Article 32)

The UK GDPR's security obligations are set out across two articles. **Article 5(1)(f)** states the high-level security principle: personal data must be processed using appropriate technical and organisational measures to ensure security, including protection against unauthorised or unlawful processing and against accidental loss, destruction, or damage. **Article 32** provides the operational framework — four specific sub-obligations, a risk-based standard for determining what is "appropriate," and additional obligations for processors.

> **DUA Act note:** The ICO's security guidance was under review following the Data (Use and Access) Act 2026 coming into force on 19 June 2025. Substantive changes are possible; verify against current ICO guidance before operational use.

> **Scope boundary:** This page covers security obligations under Arts. 5(1)(f) and 32. Personal data breach notification (Arts. 33–34) is covered in `[[uk-gdpr-personal-data-breaches]]`.

---

## The Risk-Based Standard

The UK GDPR does not prescribe specific security measures. It requires a level of security **appropriate to the risk** posed by the processing. Determining "appropriate" requires an information risk assessment that considers:

- The **value, sensitivity, and confidentiality** of the personal data held
- The **damage or distress** that would result from compromise (identity fraud, fake credit applications, mortgage fraud, physical harm in extreme cases)
- The **state of the art** — current best available technology and practice
- The **costs of implementation** — a firm may take cost into account, but may not use cost to justify inadequate protection for high-risk processing
- The **nature, scope, context, and purposes** of the processing (Art. 32(2))

There is no single set of measures that satisfies all organisations. An information risk assessment is the mandatory starting point — without it, a firm cannot demonstrate that its measures are appropriate.

---

## The Four Art. 32(1) Sub-Obligations

### (a) Pseudonymisation and Encryption (Art. 32(1)(a))

Pseudonymisation and encryption are **explicitly named examples** of appropriate measures — not mandatory requirements. Whether they are appropriate depends on the nature of the processing and the risks involved.

**Encryption:** The ICO has consistently treated encryption as an appropriate measure for data stored or transmitted over the internet, given its widespread availability and low cost. This position predates the UK GDPR and has not changed under it. Firms storing personal data, or transmitting it across networks, should use encryption and maintain a suitable policy covering residual risks.

**Pseudonymisation:** Separates identifying data from operational data. A security and data minimisation tool. **Does not satisfy the storage limitation principle** — pseudonymised data remains personal data and must be deleted when no longer needed. (See `[[uk-gdpr-data-protection-principles]]` — principle (e).)

Both measures should be documented in the information risk assessment alongside the rationale for their adoption or non-adoption.

### (b) CIA Triad and Resilience (Art. 32(1)(b))

Security measures must ensure **confidentiality, integrity, and availability** of systems and data, and the **ongoing resilience** of processing systems and services.

| Element | Obligation |
|---------|-----------|
| **Confidentiality** | Personal data can be accessed, altered, disclosed, or deleted only by those authorised to do so, and only within the scope of their authority |
| **Integrity** | Personal data is accurate and complete in relation to the purpose for which it is held |
| **Availability** | Personal data is accessible and usable; accidental loss, alteration, or destruction should be recoverable |
| **Resilience** | Systems can continue operating under adverse conditions (physical or technical incidents) and can be restored to an effective state |

Resilience covers business continuity planning, disaster recovery, and cyber resilience. What constitutes adequate resilience depends on the organisation and the risk that data unavailability poses to individuals.

### (c) Restoring Availability in a Timely Manner (Art. 32(1)(c))

Controllers must maintain the **ability to restore** availability and access to personal data following a physical or technical incident. "Timely manner" is not defined — it is risk-based:
- Who the organisation is
- What systems it operates
- The risk to individuals if personal data is unavailable for a period

**Example (ransomware):** An organisation using the 3-2-1 backup strategy (three copies, two on different devices, one off-site) suffers a ransomware attack. The off-site backup is unaffected and allows system restoration. Despite temporary service disruption, the organisation complies with Art. 32(1)(c). Note: the ransomware event may still constitute a personal data breach under Arts. 33–34 (breach notification obligation — separate).

### (d) Regular Testing and Evaluation (Art. 32(1)(d))

A process for **regularly testing, assessing, and evaluating** the effectiveness of technical and organisational security measures is a **mandatory legal obligation** for all organisations — not only those operating in regulated sectors.

Key requirements:
- The type and frequency of testing is not prescribed — it depends on the organisation and its processing
- Scope must be appropriate to the totality of the firm's security measures
- Techniques include vulnerability scanning and penetration testing
- **Results must be documented**
- Recommendations from testing must be **acted upon**, or there must be a documented valid reason for not doing so
- Where testing reveals critical flaws that could result in a personal data breach, remediation is particularly important to document

Testing may be conducted internally, externally, or both. In some industries, regular testing is already required by sector rules; the UK GDPR makes it universal.

---

## Organisational Measures

Organisational measures are required alongside technical controls. These include:

- **Information risk assessment** — mandatory prerequisite for determining appropriate measures
- **Designated accountable individual** — a named person with day-to-day responsibility for information security, with appropriate resource and authority
- **Information security policy** — or equivalent documentation; required wherever the organisation's size and processing complexity warrants it; enables demonstration of compliance
- **Additional policies** where necessary (e.g. BYOD, access control, data disposal, remote working)
- **Co-ordination between functions** — security manager must be informed about IT procurement, equipment disposal, external maintenance access
- **Access controls** for external parties (e.g. contractors, IT maintenance providers)
- **Business continuity arrangements** specifically covering personal data protection and recovery
- **Periodic review** of all measures to ensure they remain appropriate and up to date

---

## Technical Measures

Technical measures cover both **physical** and **IT/cybersecurity** controls.

**Physical security:**
- Quality of doors, locks, alarms, security lighting, CCTV
- Access control to premises; visitor supervision
- Disposal of paper and electronic waste
- Security of IT equipment including mobile devices

**Cybersecurity:**
- System security — network and information systems including those processing personal data
- Data security — access controls, secure data storage
- Online security — website and application security
- Device security — BYOD policies where applicable

**Cyber Essentials as baseline:** The government Cyber Essentials scheme provides a set of basic technical controls that constitute a reasonable starting point. Firms may need to go beyond Cyber Essentials depending on the nature of their processing and the risks posed. Cyber Essentials is not sufficient for all organisations or all processing activities.

---

## Sector-Specific Security Standards — PCI-DSS

Where an industry has its own security requirements, the ICO will consider compliance with those requirements when assessing enforcement action. However, **compliance with a sector standard does not automatically equal UK GDPR compliance**.

**PCI-DSS — fintech relevance:**
Firms processing payment card data must comply with the Payment Card Industry Data Security Standard. If a personal data breach occurs involving card data, the ICO will specifically consider whether the firm had implemented the PCI-DSS controls that were relevant to the breach cause. PCI-DSS compliance is a **material mitigating factor** in any enforcement calculation but does not provide a safe harbour.

**Financial services implication:** Firms subject to FCA cybersecurity expectations (e.g. SYSC 15A operational resilience, CBEST testing for systemic firms) are similarly placed — sector compliance informs but does not determine UK GDPR security adequacy.

---

## Processor Security Obligations (Art. 32 + Art. 28)

Where a data processor processes personal data on behalf of a controller, Art. 32 applies **directly to the processor** — not only to the controller.

The controller must:

1. **Choose a processor providing sufficient guarantees** (Art. 28(1)): Before engaging a processor, the controller must satisfy itself that the processor's technical and organisational security measures are adequate. Due diligence is required upfront.

2. **Include Art. 32 obligations in the written contract** (Art. 28(3)): The contract must stipulate that the processor implements all measures required by Art. 32 — in practice, the same security standard that would apply if the controller were processing the data itself.

3. **Include audit and inspection rights** (Art. 28(3)(h)): The contract must allow the controller to audit and inspect the processor's compliance, either directly or through an authorised third party. SOC 2 reports and ISO 27001 certifications are common mechanisms but do not replace the contractual right.

**Processors can assist controllers in meeting security obligations:** Engaging a processor with specialist security capabilities can contribute to the controller's own Art. 32 compliance — provided the contractual arrangements are appropriate.

**Note:** This is the first Art. 28 (controller/processor) substantive content in the wiki. A dedicated controller/processor concept page should be created when the ICO's "Controllers and Processors" guidance is ingested.

---

## Staff Training (Art. 32(4))

Article 32(4) creates a legal obligation to ensure that any person acting under the controller's or processor's authority who has access to personal data does **not process that data unless instructed to do so**.

Staff training must cover at minimum:
- The controller's obligations under the UK GDPR
- Individual staff responsibilities for protecting personal data
- **Criminal liability:** Deliberately accessing or disclosing personal data without authority is a criminal offence under DPA 2018 — not merely a disciplinary matter
- Proper procedures for identifying callers (preventing social engineering and impersonation attacks)
- Recognition of phishing attacks and deception attempts designed to obtain personal data or system access
- Restrictions on personal use of company systems

Training is only effective if those delivering it are themselves reliable and knowledgeable. This has implications for how information security training programmes are designed and reviewed.

---

## What This Page Does Not Cover

**Personal data breach notification (Arts. 33–34):** See `[[uk-gdpr-personal-data-breaches]]` for the full framework: 72-hour ICO notification clock (Art. 33), individual notification at high-risk threshold (Art. 34), mandatory breach register for all breaches (Art. 33(5)), and Art. 83(4) fine tier (£8.7m/2%).

---

## Key Points for Agents

- **Art. 32 applies directly to both controllers and processors.** Both have independent security obligations; the controller cannot discharge its own obligation simply by engaging a processor.
- **"Appropriate" is risk-based** — determined by an information risk assessment, not by adherence to any prescribed list of measures. Failure to conduct a risk assessment is itself an indicator of non-compliance.
- **Regular testing is a legal obligation** (Art. 32(1)(d)) for all organisations. Results must be documented; recommendations must be actioned or reasons for non-action documented.
- **PCI-DSS informs but does not satisfy UK GDPR security obligations.** The ICO will take sector compliance into account in enforcement; it does not provide a safe harbour.
- **Processor contracts must require Art. 32 compliance and include audit rights.** Inadequate processor contracts = controller breach, regardless of what the processor actually does.
- **Staff criminal liability is real and must be communicated.** Deliberate unauthorised access or disclosure of personal data is a DPA 2018 criminal offence. Training must cover this explicitly.
- **Breach notification (Arts. 33–34):** See `[[uk-gdpr-personal-data-breaches]]`. 72-hour ICO clock, two-tier risk assessment, mandatory breach register, Art. 83(4) fine tier.

## Related Articles

- [[ico-guide-data-security]]
- [[uk-gdpr-personal-data-breaches]]
- [[ico-guide-personal-data-breaches]]
- [[uk-gdpr-data-protection-principles]]
- [[ico-guide-data-protection-principles]]
- [[uk-gdpr-lawful-basis]]
- [[uk-gdpr-automated-decision-making]]
- [[customer-due-diligence]]
- [[aml-ctf-framework]]
