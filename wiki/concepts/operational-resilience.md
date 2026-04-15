---
title: "Operational Resilience — SYSC 15A"
jurisdiction: UK
regulator: FCA / PRA / Bank of England
regulation: SYSC 15A; FCA Policy Statement PS21/3; FCA Operational Resilience Rules
status: current
effective_date: 2022-03-31
last_updated: 2026-04-13
sources:
  - "FCA, 'FCA Priorities for Payments Firms' portfolio letter, 16 March 2023"
  - "FCA SYSC 15A — Operational resilience (in force 31 March 2022)"
tags: [operational-resilience, SYSC-15A, important-business-services, impact-tolerances, payment-institutions, EMI, UK, FCA]
related:
  - concepts/safeguarding-pis-emis.md
  - concepts/wind-down-planning.md
  - concepts/agent-distributor-oversight.md
  - summaries/dear-ceo-letter-payments-portfolio-2023.md
  - derived/pi-emi-consumer-duty-and-sanctions-obligations.md
  - concepts/psr-emi-prudential.md
  - concepts/uk-gdpr-security.md
---

# Operational Resilience — SYSC 15A

## The Framework

**SYSC 15A** came into force on **31 March 2022** and applies to all FCA-supervised firms, including payment institutions and e-money institutions. It requires firms to build and maintain the ability to prevent, adapt to, respond to, recover from, and learn from operational disruptions. **(Portfolio letter, March 2023, Cross-Cutting Priority 2; SYSC 15A)**

The framework reflects a shift in supervisory approach: the FCA expects firms to plan for disruptions occurring — not merely to try to prevent them — and to be able to quantify the level of disruption they can absorb while continuing to deliver essential services to customers and the financial system.

---

## Core Concepts

### Important Business Services

Firms must identify their **important business services** — those services whose disruption would cause intolerable harm to customers or the broader financial system. This is a firm-specific assessment: a service that is important for one firm may not be for another.

For a PI or EMI, important business services are likely to include:
- Payment execution (particularly where the firm is the primary payment channel for customers)
- E-money issuance and redemption
- Customer access to account balances and transaction history
- Fraud and sanctions screening (critical for financial system integrity)

Firms must **review their important business services at least annually**, or whenever there is a material change to the business or the market in which they operate. **(Portfolio letter, March 2023)**

### Impact Tolerances

For each important business service, firms must set an **impact tolerance** — the maximum level of disruption the firm is willing to tolerate before the disruption causes intolerable harm.

Impact tolerances must be:
- Expressed in terms of the **outcome for customers and the market** — not just IT recovery metrics (e.g. RTO/RPO)
- Based on the specific characteristics of each important business service
- Reviewed alongside the annual review of important business services

---

## The Mapping and Testing Deadline

**By 31 March 2025** (now passed), firms were required to have:
1. **Mapped** the people, processes, technology, facilities, and information that support each important business service and their interdependencies
2. **Tested** their ability to remain within impact tolerances under a range of severe but plausible disruption scenarios
3. Made the necessary **investments** to enable consistent operation within impact tolerances

**(Portfolio letter, March 2023)**

The 31 March 2025 deadline was hard — it was not a best-efforts target. The FCA stated it was proactively monitoring firms' progress and would take action where deficiencies were identified. Firms that did not meet the deadline remain in breach and the FCA's ongoing supervisory focus on operational resilience means deficiencies identified after the deadline will be treated as current failures.

---

## What Mapping Involves

Mapping requires firms to document, for each important business service, the full chain of:
- **People:** Key personnel, skill dependencies, succession arrangements
- **Processes:** End-to-end process flows, manual fallback procedures
- **Technology:** Systems, applications, data flows, hosting arrangements
- **Third-party dependencies:** Critical service providers (technology vendors, banking partners, clearing and settlement providers)
- **Facilities:** Operational sites, remote working capability

This mapping serves two purposes: it supports the development of realistic impact tolerances and it identifies single points of failure that must be addressed.

---

## What Testing Involves

Testing must demonstrate that the firm can remain within impact tolerances for each important business service under a range of disruption scenarios. Scenarios should include:
- Technology failures (systems outage, data loss)
- Third-party provider failure (key supplier becomes unavailable)
- Cyber incidents
- Staff unavailability (pandemic scenarios, key person departure)
- Natural disasters affecting operational facilities

Testing results must be documented and must feed into investment decisions and plan improvements.

---

## Third-Party Dependency Management

Separately from the mapping and testing obligation, firms must **monitor their dependency on providers of critical services** — including technology and banking services — and maintain appropriate **contingency plans to move providers if necessary**. **(Portfolio letter, March 2023)**

For PIs and EMIs, critical third-party dependencies typically include:
- The banking partner(s) providing settlement accounts and safeguarding accounts
- Core payment processing technology providers
- Sanctions and AML screening tool providers

Where a firm is dependent on a single provider for a critical service, the contingency plan must address the realistic steps to transition to an alternative. Provider diversification (where feasible) reduces this risk.

---

## FCA Register Accuracy

The portfolio letter also reminds firms to keep contact details on the **FCA Register** accurate and up to date. **(Portfolio letter, March 2023)** This is a basic regulatory housekeeping obligation — the FCA uses Register details to make contact with firms during supervisory and enforcement activity.

---

## Relationship to Wind-Down Planning

Operational resilience and wind-down planning address different failure modes:
- Operational resilience: the firm suffers a disruption but remains a going concern — the objective is to restore services within impact tolerances
- Wind-down planning: the firm cannot continue operating and must exit the market in an orderly way

Both require mapping of the firm's operational dependencies. Scenario testing for operational resilience and scenario analysis for wind-down should share underlying data and assumptions where possible.

---

## Key Points for Agents

- SYSC 15A applies to all FCA-supervised firms including PIs and EMIs — no carve-out for payment firms.
- Firms must identify important business services, set impact tolerances for each, and review both at least annually.
- The 31 March 2025 deadline for mapping, testing, and investments has now passed — firms that did not meet it remain in breach; deficiencies identified after the deadline are treated as current failures.
- Impact tolerances must be expressed in terms of customer and market outcomes, not just technical recovery metrics.
- Third-party dependency management is a separate but related obligation: firms must have contingency plans to move critical providers and must keep FCA Register contact details current.

## Related Articles

- [[safeguarding-pis-emis]]
- [[wind-down-planning]]
- [[agent-distributor-oversight]]
- [[dear-ceo-letter-payments-portfolio-2023]]
- [[pi-emi-consumer-duty-and-sanctions-obligations]]
- [[psr-emi-prudential]]
- [[uk-gdpr-security]] *(SYSC 15A and Art. 32 are distinct regimes but impose parallel resilience and testing obligations on the same firm)*
