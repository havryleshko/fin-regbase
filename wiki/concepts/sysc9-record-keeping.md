---
title: "SYSC 9 — Record-Keeping"
jurisdiction: UK
regulator: FCA
regulation: "SYSC (Senior Management Arrangements, Systems and Controls sourcebook), Chapter 9"
status: current
effective_date: 2018-01-03
last_updated: 2026-04-22
sources:
  - "SYSC 9.1.1R — general record-keeping duty"
  - "SYSC 9.1.1AG–9.1.1BG — common platform/MiFID mandatory record types"
  - "SYSC 9.1.2R — MiFID 5-year retention"
  - "SYSC 9.1.2-AR — tamper-proof storage requirements"
  - "SYSC 9.1.5G — non-MiFID retention standard"
  - "SYSC 9.2.1R–9.2.3G — AISP/PISP record-keeping for credit institutions"
tags: [SYSC, record-keeping, MiFID-II, common-platform, AISP, PISP, data-retention, tamper-proof, UK, FCA]
related:
  - concepts/sysc10-conflicts-of-interest.md
  - concepts/aml-ctf-framework.md
  - concepts/smcr-senior-managers-regime.md
  - concepts/operational-resilience.md
  - concepts/prod-product-governance.md
  - concepts/conc-creditworthiness-assessment.md
  - concepts/conc-cpa-rules.md
  - concepts/psr-open-banking-pisp-aisp.md
---

# SYSC 9 — Record-Keeping

## What This Document Covers

SYSC 9 is the FCA Handbook chapter that sets out record-keeping obligations for regulated firms. It operates on two tracks: a general duty for all firms (including non-common platform firms) and a more prescriptive MiFID-specific regime for common platform firms. A separate sub-chapter (SYSC 9.2) imposes specific record-keeping duties on credit institutions that are also AISPs or PISPs.

---

## SYSC 9.1 — The Two-Track Architecture

### Track 1: General Duty (All Firms Including Non-Common Platform)

All firms must arrange for **orderly records** of their business and internal organisation, including all services and transactions undertaken. Records must be sufficient to enable the FCA to monitor compliance with regulatory requirements and demonstrate that obligations to customers have been met. **(SYSC 9.1.1R)**

For non-MiFID (non-common platform) firms, the retention period is flexible: records must be kept for **as long as they are relevant** to the purposes for which they were made. **(SYSC 9.1.5G)** There is no prescribed minimum period, but the FCA expects firms to apply judgment — records relevant to a live enforcement matter, a customer complaint, or an ongoing regulatory review must be retained until those matters are resolved. Records cited in SM&CR individual accountability have their own practical retention floor: as long as the individual could face challenge.

### Track 2: MiFID / Common Platform Prescriptive Regime

Common platform firms (broadly, MiFID investment firms and credit institutions undertaking MiFID business) face a more prescriptive layer on top of the general duty. The additional obligations under SYSC 9.1.1AG and 9.1.1BG prescribe the **categories of records** that must be kept, including:

- **Pre-trade records** — orders received, order routing, order aggregation instructions
- **Post-trade records** — transaction execution details, counterparty, price, volume, time
- **Client communication records** — all correspondence relating to services (including electronic communications)
- **Telephone recordings** — where the firm takes and/or transmits orders by telephone
- **Rationale for non-execution** — where a firm decides not to execute an order, the reasons must be documented
- **Research and recommendations** — investment research and personal recommendations with supporting analysis
- **Compliance records** — records demonstrating regulatory compliance across all activity types

The MiFID mandatory record types are not exhaustive — firms are expected to apply the general duty standard to activity not explicitly listed. **(SYSC 9.1.1BG)**

---

## SYSC 9.1.2R — MiFID 5-Year Retention

MiFID records must be retained for a minimum of **5 years**. The clock runs from the date the record was created. The FCA may, in specific circumstances, require longer retention — and this must be built into the firm's records management framework. **(SYSC 9.1.2R)**

---

## SYSC 9.1.2-AR — Tamper-Proof Storage Requirements

This is the most architecturally significant rule in SYSC 9. All MiFID records must be stored on a medium that satisfies three conditions simultaneously: **(SYSC 9.1.2-AR)**

1. **Prevents alteration or deletion by the firm** — neither the firm nor its employees can modify or overwrite the record after creation
2. **Accessible to the FCA** — the FCA must be able to retrieve and read the records promptly when requested
3. **Reconstitutable in intelligible form** — if the storage medium or format changes, the records must be convertible to a format that can be read and understood

This rule has direct implications for technology architecture:
- **Live transactional databases** where records can be overwritten by the firm (even inadvertently) do not meet requirement (1) unless write-protection controls are applied at the record level
- **Cloud storage** meets requirement (1) only if technical controls prevent the firm from deleting or modifying records — a separate audit-log of changes is not sufficient
- **Proprietary file formats** that may become unreadable without specific software create a reconstitution risk under requirement (3)

No equivalent tamper-proof storage rule applies to non-MiFID records under SYSC 9.1.1R.

---

## SYSC 9.2 — AISP/PISP Record-Keeping for Credit Institutions

Credit institutions that also provide **account information services** (AISP) or **payment initiation services** (PISP) under the PSRs 2017 must maintain specific records in relation to those activities, separate from their general MiFID record-keeping obligations. **(SYSC 9.2.1R)**

The required records cover four data categories: **(SYSC 9.2.1R)**

1. **All payment accounts accessed** — account identifiers, account-servicing PSP, and date of access
2. **Payment transactions initiated** — payee, amount, date, and unique transaction identifier
3. **Account information accessed** — scope of information retrieved and the purpose stated at consent
4. **Consents and authorisations** — records of customer consents granted, varied, or revoked

Retention period: **5 years** from the date of access or initiation, measured against the baseline date of 13 January 2018 (when the PSRs 2017 came into force). Records predating the firm's AISP/PISP activities do not need to be reconstructed, but records from 13 January 2018 onward are within scope. **(SYSC 9.2.2R–9.2.3G)**

---

## Interaction with SM&CR Individual Accountability

The FCA has explicitly linked record-keeping failures to SM&CR personal liability. Where an individual who holds an SMF or is subject to the Certification Regime cannot evidence that they undertook challenge or oversight of a decision within their area of accountability, the absence of records is itself evidence of a potential SYSC 9.1.1R breach — not merely a compliance gap at the firm level. **(FCA MiFID II Product Governance Review 2021)**

This creates an asymmetric risk for senior individuals: even where the firm's records retention system is technically compliant, an individual who failed to document their own oversight activities faces personal exposure.

See [[smcr-senior-managers-regime]] for the SM&CR accountability framework.

---

## Key Points for Agents

- SYSC 9 operates on two tracks: a flexible general duty (non-MiFID firms — retain "as long as relevant") and a prescriptive MiFID regime (common platform firms — mandatory record types, 5-year minimum retention).
- MiFID records must be stored on a tamper-proof medium that prevents firm-level alteration or deletion, is accessible to the FCA, and can be reconstituted in intelligible form (SYSC 9.1.2-AR). This is a hard data architecture requirement, not a policy obligation.
- Credit institutions that are AISPs or PISPs must keep a separate record set covering all payment accounts accessed, transactions initiated, information accessed, and consents — retained for 5 years from 13 January 2018 baseline (SYSC 9.2).
- Record-keeping failures create direct SM&CR personal liability risk: individuals who cannot evidence challenge or oversight of decisions within their accountability may personally breach SYSC 9.1.1R.
- The non-MiFID "as long as relevant" standard has no fixed floor, but practical floors apply: live disputes, enforcement matters, and ongoing FCA reviews all require retention beyond any notional expiry date.

## Related Articles

- [[sysc10-conflicts-of-interest]]
- [[smcr-senior-managers-regime]]
- [[aml-ctf-framework]]
- [[operational-resilience]]
- [[prod-product-governance]]
- [[conc-creditworthiness-assessment]]
- [[conc-cpa-rules]]
- [[psr-open-banking-pisp-aisp]]
