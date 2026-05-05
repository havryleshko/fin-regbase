---
title: "SYSC 15A — Operational Resilience (Sourcebook Reference)"
jurisdiction: UK
regulator: FCA
regulation: "SYSC 15A; FSMA 2000 ss.55J, 55L"
status: current
effective_date: 2022-03-31
last_updated: 2026-05-04
sources:
  - "SYSC 15A.1.1R–15A.1.9R — application scope"
  - "SYSC 15A.2.1R–15A.2.13G — important business services and impact tolerances"
  - "SYSC 15A.3.1R–15A.3.2R — strategies, processes and systems"
  - "SYSC 15A.4.1R–15A.4.3R — mapping"
  - "SYSC 15A.5.1R–15A.5.9R — scenario testing and lessons learned"
  - "SYSC 15A.6.1R–15A.6.2R — self-assessment and lessons learned documentation"
  - "SYSC 15A.7.1R — governance"
  - "SYSC 15A.8.1R–15A.8.3R — communications"
  - "SYSC 15A.9.1G–15A.9.3G — supervisory review and feedback"
tags: [SYSC-15A, operational-resilience, important-business-services, impact-tolerances, mapping, scenario-testing, self-assessment, governance, communications, enhanced-SMCR, payment-institutions, EMI, UK, FCA]
related:
  - concepts/operational-resilience.md
  - concepts/sysc4-governance-framework.md
  - concepts/sysc9-record-keeping.md
  - concepts/sysc10-conflicts-of-interest.md
  - concepts/safeguarding-pis-emis.md
  - concepts/wind-down-planning.md
  - concepts/psr-regulatory-reporting.md
  - summaries/sysc4-general-organisational-requirements.md
  - summaries/sysc6-compliance-internal-audit-financial-crime.md
  - summaries/dear-ceo-letter-payments-portfolio-2023.md
---

# SYSC 15A — Operational Resilience (Sourcebook Reference)

## What SYSC 15A Does

SYSC 15A requires in-scope firms to build and maintain the ability to prevent, adapt to, respond to, recover from, and learn from operational disruptions. Its central mechanism is the **important business services / impact tolerances** framework: a firm must identify the services whose disruption would cause intolerable harm, set the maximum tolerable disruption level for each, demonstrate it can stay within that level under severe scenarios, and document the entire process in a governing-body-approved self-assessment record.

SYSC 15A came into force on 31 March 2022. The transitional implementation deadline (31 March 2025) has passed — all obligations are fully live. There are no remaining transitional provisions.

---

## Application — SYSC 15A.1

### In-Scope Firm Types (SYSC 15A.1.1R)

SYSC 15A applies to four categories:

1. **Enhanced scope SMCR firms, banks, designated investment firms, building societies, Solvency II firms** — the full suite of obligations applies to regulated activities and ancillary activities, dealing in investments as principal, MiFID/ancillary services, collective portfolio management, unregulated activities in a prudential context, and data reporting services (SYSC 15A.1.7R).
2. **UK RIEs** — "client" includes any person entitled to use the RIE's facilities (SYSC 15A.1.5R).
3. **Electronic money institutions, payment institutions, registered account information service providers (RAISPs)** — but obligations apply only to payment services and e-money activities and connected activities (SYSC 15A.1.8R). See below.
4. **Consolidated tape providers** — "client" includes persons purchasing consolidated tape for bonds from a CTP or data vendor (SYSC 15A.1.5AR).

### Explicit Exclusions (SYSC 15A.1.3R; 15A.1.4R)

- **TP firms, TA PI firms, TA RAISP firms, TA EMI firms** are excluded **(SYSC 15A.1.3R)**.
- Firms with their **registered office (or, if none, head office) outside the United Kingdom** are excluded **(SYSC 15A.1.4R)**.
- There is no territorial limitation for in-scope firms on which of their activities the rules apply to **(SYSC 15A.1.9R)**.

### PI/EMI/RAISP Activity Narrowing (SYSC 15A.1.8R)

For firms caught solely by virtue of being an EMI, PI, or RAISP, SYSC 15A applies only to:
- The provision of payment services;
- The issuance of electronic money; and
- Activities connected to the provision of payment services or the issuance of e-money.

Other regulated activities carried on by those firms are outside the SYSC 15A scope. This matters for EMIs that also carry on, for example, investment business — SYSC 15A does not apply to the investment side by virtue of the EMI authorisation.

---

## Important Business Services — SYSC 15A.2

### Identification Obligation (SYSC 15A.2.1R)

A firm must identify its **important business services** **(SYSC 15A.2.1R)**. Each distinct relevant service must be assessed separately — a collection of services cannot be bundled into a single IBS **(SYSC 15A.2.3G)**.

### 13-Factor Identification Framework (SYSC 15A.2.4G)

Factors to consider include:
1. Nature of the client base, including vulnerabilities
2. Clients' ability to obtain the service from other providers (substitutability)
3. Time criticality for clients
4. Number of clients
5. Sensitivity of data held
6. Potential to inhibit the functioning of the UK financial system
7. Firm's potential impact on soundness, stability or resilience of the UK financial system
8. Potential threat to the firm's financial viability where this could harm clients or systemic stability
9. Potential reputational damage to the firm where this could harm clients or systemic stability
10. Whether disruption could amount to a breach of a legal or regulatory obligation
11. Level of inherent conduct and market risk
12. Potential for knock-on effects on other market participants or financial market infrastructure
13. Importance to the UK financial system including market share, client concentration, and sensitive clients (e.g. governments, pension funds)

### Review Frequency (SYSC 15A.2.2R)

The firm must review its IBS identification: (1) on any material change to the firm's business or the market in which it operates; and (2) in any event, no later than **one year** after the last assessment.

---

## Impact Tolerances — SYSC 15A.2.5R–15A.2.13G

### Setting the Tolerance (SYSC 15A.2.5R)

A firm must set an **impact tolerance** for each IBS. An impact tolerance is the maximum level of disruption the firm is willing to tolerate — expressed in terms of outcomes for clients and the market, not merely technical recovery metrics (RTO/RPO).

### The Hard Capability Obligation (SYSC 15A.2.9R)

A firm **must ensure it can remain within its impact tolerance** for each IBS in the event of a severe but plausible disruption to its operations. This is a capability obligation, not a planning target — the firm must be able to demonstrate it can actually deliver within tolerance under adverse conditions.

### Principle 11 Notification (SYSC 15A.2.11G)

Under Principle 11 (Relations with regulators), the FCA expects to be notified of **any failure by a firm to meet an impact tolerance**. There is no materiality or de minimis threshold — the expectation covers all failures.

### 10-Factor Setting Framework (SYSC 15A.2.7G)

Factors to consider include:
1. Nature of the client base, including vulnerabilities
2. Number of clients and nature of the impact
3. Potential financial loss to clients
4. Potential financial loss to the firm where this could harm clients or systemic stability
5. Potential reputational damage where this could harm clients or systemic stability
6. Potential impact on market or consumer confidence
7. Potential spread of risks to other services, firms, or the UK financial system
8. Potential loss of functionality or access for clients
9. Potential loss of confidentiality, integrity, or availability of data
10. Potential aggregate impact of disruptions to multiple IBS sharing common operational resources

### Review Frequency (SYSC 15A.2.6R)

Same trigger as IBS review: on material change to the business, and in any event no later than one year after the last assessment.

### Degraded Service During Disruption (SYSC 15A.2.10G)

While attempting to remain within impact tolerance, a firm should generally not: breach another regulatory obligation; conflict with a regulatory discretion; or increase risk of harm to clients or the UK financial system. Resuming a degraded service is usually only appropriate where the benefits to clients and systemic stability outweigh keeping the service unavailable until full restoration.

### EBA Guidelines for PSPs (SYSC 15A.2.12G; 15A.2.13G)

Payment service providers must have regard to the **EBA Guidelines on ICT and security risk management** when setting impact tolerances and when designing continuity planning and testing scenarios.

---

## Strategies, Processes and Systems — SYSC 15A.3

A firm must have **sound, effective and comprehensive** strategies, processes and systems to enable compliance with SYSC 15A **(SYSC 15A.3.1R)**. These must be **comprehensive and proportionate** to the nature, scale and complexity of the firm's activities **(SYSC 15A.3.2R)**.

---

## Mapping — SYSC 15A.4

### Five-Asset Documentation Obligation (SYSC 15A.4.1R)

A firm must **identify and document** the following resources necessary to deliver each IBS:
- **People**
- **Processes**
- **Technology**
- **Facilities**
- **Information**

The documentation must be sufficient to allow the firm to **identify vulnerabilities and remedy them as appropriate** **(SYSC 15A.4.1R)**.

### Third-Party Mapping Obligation (SYSC 15A.4.2G)

Where a firm relies on a third party for IBS delivery, the firm is expected to have sufficient understanding of **the third party's** people, processes, technology, facilities, and information that support service delivery — to the extent needed to comply with SYSC 15A.4.1R. Third-party reliance does not limit the mapping obligation.

### Review Frequency (SYSC 15A.4.3R)

Mapping compliance must be reviewed: on material change to the business or to IBS/impact tolerances; and in any event no later than one year after the last assessment.

---

## Scenario Testing — SYSC 15A.5

### Testing Plan (SYSC 15A.5.1R)

A firm must develop and maintain a **testing plan** that sets out how it will gain assurance it can remain within impact tolerances for each IBS. The plan must address: type of testing (paper, simulation, live-systems); scenarios expected to be within/outside tolerance; frequency; IBS covered; availability of supporting assets; communication strategy **(SYSC 15A.5.2G)**.

### Mandatory Testing Obligation (SYSC 15A.5.3R; 15A.5.4R)

A firm **must carry out scenario testing** to assess its ability to remain within impact tolerances for each IBS in the event of a severe but plausible disruption. Testing must cover an **appropriate range of adverse circumstances of varying nature, severity and duration** relevant to the firm's business and risk profile.

### Three Mandatory Testing Triggers (SYSC 15A.5.7R)

The firm must carry out scenario testing:
1. If there is a **material change** to the firm's business, or to IBS or impact tolerances;
2. **Following improvements** made in response to a previous test; and
3. In any event, **on a regular basis**.

### Five Named Scenario Types (SYSC 15A.5.6G)

The FCA expects firms to consider, among others:
1. Corruption, deletion, or manipulation of data critical to IBS delivery
2. Unavailability of facilities or key people
3. Unavailability of third-party services critical to IBS delivery
4. Disruption to other market participants (where applicable)
5. Loss or reduced provision of technology underpinning IBS

### Third-Party Testing Responsibility (SYSC 15A.5.5G)

Where a firm relies on a third party, the firm should work with the third party to validate the firm's scenario testing. The **firm is ultimately responsible** for the quality and accuracy of any testing, whether carried out by the firm or by a third party.

### Lessons Learned — Hard Loop (SYSC 15A.5.8R; 15A.5.9R)

After any scenario test, **or after an actual operational disruption**, the firm must conduct a **lessons learned exercise** to identify weaknesses and improve its ability to respond and recover **(SYSC 15A.5.8R)**. Following the lessons learned exercise, the firm **must make necessary improvements** to ensure it can remain within impact tolerances **(SYSC 15A.5.9R)**. Both obligations are hard Rules.

---

## Self-Assessment Documentation — SYSC 15A.6

### Nine-Item Written Record (SYSC 15A.6.1R)

A firm must maintain a written record of its compliance assessment including:
1. **IBS identified** and justification for the determination
2. **Impact tolerances** and justification for the level at which they are set
3. **Mapping approach** under SYSC 15A.4.1R — including how the firm used mapping to identify vulnerabilities, and how mapping supports scenario testing
4. **Testing plan** and justification for the plan adopted
5. **Scenario testing details** — description and justification of scenarios, assumptions, and identified risks to meeting impact tolerances
6. **Lessons learned exercises** conducted under SYSC 15A.5.8R
7. **Vulnerabilities** that threaten ability to deliver IBS within impact tolerances, with actions taken or planned and justification for completion time
8. **Communication strategy** under SYSC 15A.8.1R and how it enables harm reduction
9. **Methodologies** used to undertake the above

### Six-Year Retention and FCA Access (SYSC 15A.6.2R)

The firm must retain **each version** of the self-assessment records for **at least 6 years** and must provide them to the FCA on request.

---

## Governance — SYSC 15A.7

**The governing body** must **approve and regularly review** the written records required under SYSC 15A.6 **(SYSC 15A.7.1R)**. This is a hard Rule — the obligation is approval and review, not mere receipt or visibility.

---

## Communications — SYSC 15A.8

### Mandatory Communication Strategy (SYSC 15A.8.1R)

A firm must maintain an **internal and external communication strategy** to act quickly and effectively to reduce anticipated harm from operational disruptions.

### Communication Strategy Content (SYSC 15A.8.2G)

The FCA expects the strategy to address: advance consideration of how to warn clients and stakeholders even where there is no direct communication line; use of communication to gather information about the cause, extent, and impact of operational incidents; and adaptation of communication method for clients' circumstances, needs, and vulnerabilities.

### Hard Communication Obligation (SYSC 15A.8.3R)

In the event of an operational disruption, a firm **must provide clear, timely and relevant communications** to stakeholders. This is a hard Rule triggered by actual disruption.

---

## Supervisory Review and Feedback — SYSC 15A.9

The FCA may provide individual guidance on compliance adequacy and require specific remedial steps **(SYSC 15A.9.1G)**. Where a firm disagrees with individual guidance, it must communicate this to the FCA consistent with Principle 11 **(SYSC 15A.9.2G)**. If disagreement persists, the FCA may use its powers under **FSMA ss.55J and 55L** on its own initiative to require specific actions **(SYSC 15A.9.3G)**.

---

## Key Points for Agents

- **Scope: enhanced SMCR firms, banks, DIFs, building societies, Solvency II firms, UK RIEs, EMIs, PIs, RAISPs, CTPs (SYSC 15A.1.1R).** TP/TA firms excluded (SYSC 15A.1.3R). For PIs/EMIs/RAISPs, obligations apply only to payment services and e-money activities, not other regulated activities (SYSC 15A.1.8R).
- **Impact tolerance is a hard capability obligation (SYSC 15A.2.9R).** Firms must ensure they can remain within tolerance in a severe but plausible disruption — not merely assess or plan for it.
- **Any failure to meet an impact tolerance is a Principle 11 notification trigger (SYSC 15A.2.11G).** No materiality threshold.
- **Mapping must document five asset categories for each IBS (SYSC 15A.4.1R): people, processes, technology, facilities, information.** Must be sufficient to identify and remediate vulnerabilities. Extends to third-party resources.
- **Scenario testing is mandatory with three hard triggers: material change, following improvements, and on a regular basis (SYSC 15A.5.7R).** Post-test/post-disruption lessons learned exercise is mandatory (SYSC 15A.5.8R); resulting improvements must be implemented (SYSC 15A.5.9R).
- **Nine-item self-assessment record; 6-year retention; governing body must approve and regularly review (SYSC 15A.6.1R; 15A.6.2R; 15A.7.1R).** Governing body approval/review is a hard Rule, not governance best practice.
- **Clear, timely, relevant communications to stakeholders on disruption is a hard Rule (SYSC 15A.8.3R).** Communication strategy must be maintained pre-disruption.

## Related Articles

- [[operational-resilience]]
- [[sysc4-governance-framework]]
- [[sysc9-record-keeping]]
- [[sysc10-conflicts-of-interest]]
- [[safeguarding-pis-emis]]
- [[wind-down-planning]]
- [[psr-regulatory-reporting]]
- [[sysc4-general-organisational-requirements]]
- [[sysc6-compliance-internal-audit-financial-crime]]
- [[dear-ceo-letter-payments-portfolio-2023]]
