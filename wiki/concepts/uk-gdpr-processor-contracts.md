---
title: "UK GDPR — Controller–Processor Contracts (Art. 28)"
jurisdiction: UK
regulator: ICO
regulation: UK GDPR Art. 28; DPA 2018; Recital 81
status: current
effective_date: 2018-05-25
last_updated: 2026-04-16
sources:
  - "ICO, 'Guide to accountability and governance' (top-level overview), ico.org.uk"
tags: [UK-GDPR, processor, controller, Art-28, contracts, accountability, governance, ICO, UK]
related:
  - summaries/ico-guide-accountability-governance.md
  - concepts/uk-gdpr-security.md
  - concepts/uk-gdpr-data-protection-principles.md
  - concepts/uk-gdpr-records-of-processing.md
  - concepts/uk-gdpr-individual-rights-overview.md
---

# UK GDPR — Controller–Processor Contracts (Art. 28)

Article 28 requires controllers to have a **written contract** in place with every processor that handles personal data on their behalf. A missing or inadequate contract is a direct breach of Art. 28 — not merely a governance gap.

> **Source scope note:** This page is based on the ICO's top-level accountability and governance overview. The ICO's dedicated Contracts sub-page has not yet been ingested; the full mandatory contractual terms are set out there.

---

## The Controller–Processor Relationship

A **processor** is any person or entity that processes personal data **on behalf of and under the instructions of** a controller. Common processor relationships in financial services:

- Cloud infrastructure and SaaS providers storing or processing customer data
- Outsourced KYC/CDD providers
- Payment processors and card network operators
- Analytics and marketing platform vendors
- Third-party debt collection agencies acting under instruction

Where a third party determines the **purposes and means** of processing independently, they are a joint controller or separate controller — not a processor. The distinction matters because Art. 28 only applies to processor relationships.

---

## Written Contract — Mandatory (Art. 28(3))

Processing by a processor is only lawful where it is **governed by a written contract** (or other legal act). The contract must be in place **before processing begins**. There is no grace period.

The contract must set out:
- The **subject matter, duration, nature and purpose** of the processing
- The **type of personal data and categories of data subjects**
- The **obligations and rights** of the controller

---

## Mandatory Minimum Contract Terms

The UK GDPR specifies minimum terms that must be included in every controller–processor contract. Key mandatory requirements under Art. 28(3):

| Obligation | What the contract must require |
|------------|-------------------------------|
| Instructions only | Processor processes personal data **only on documented instructions** from the controller |
| Confidentiality | Persons processing personal data are subject to a **duty of confidentiality** |
| Security | Processor implements **appropriate security measures** (Art. 32 standard) |
| Sub-processors | Processor does not engage sub-processors **without prior written authorisation** from the controller |
| Rights assistance | Processor assists the controller in fulfilling **data subject rights obligations** (Arts. 12–22) |
| Compliance assistance | Processor assists the controller in meeting obligations under Arts. 32–36 (security, breach notification, DPIAs, prior consultation) |
| Deletion/return | At the end of the contract, processor **deletes or returns** all personal data (at controller's choice) |
| Audit rights | Processor makes available all information necessary to demonstrate compliance and allows **audits and inspections** by the controller or its auditors |

A contract that does not include the mandatory minimum terms is **insufficient to meet Art. 28** even if it exists in writing.

---

## Sub-processors (Art. 28(2) and 28(4))

A processor may only engage a sub-processor with:
- **Prior specific written authorisation** from the controller; or
- **Prior general written authorisation** where the controller approves a list of sub-processors and has a right to object to changes

Where a sub-processor is engaged, the **same data protection obligations** as in the main controller–processor contract must be imposed on the sub-processor by contract. If the sub-processor fails to meet its obligations, the original processor remains **fully liable** to the controller.

---

## "Sufficient Guarantees" Requirement (Art. 28(1))

Before engaging a processor, the controller must use **only processors that provide sufficient guarantees** to implement appropriate technical and organisational measures such that processing meets UK GDPR requirements and protects data subject rights.

This means:
- **Due diligence** on processors before engagement — not just a signed contract
- Ongoing **monitoring** of processor compliance
- Evidence of the due diligence performed, to satisfy accountability obligations

Relevant evidence of sufficient guarantees: adherence to approved codes of conduct (Art. 40), certification (Art. 42), or independently verified security standards (e.g. ISO 27001, SOC 2).

---

## Art. 28 and Security

The security measures obligation is explicitly cross-referenced to **Art. 32** — the same risk-based standard that applies to controllers applies to processors. The controller's contract must require the processor to meet Art. 32, not merely to have "reasonable" or "industry-standard" security.

The Art. 32 processor security obligations and audit rights are covered in `[[uk-gdpr-security]]`.

---

## Art. 28 and Individual Rights

The processor must assist the controller in responding to **data subject rights requests** (Arts. 12–22). In practice:
- The processor must have mechanisms to locate and extract data in response to SARs
- The processor must be able to delete, restrict, or port data on the controller's instruction
- Timelines must allow the controller to meet the Art. 12 one-month response deadline

A processor that cannot support the controller's rights obligations is not providing sufficient guarantees under Art. 28(1).

---

## Contradictions and Overlaps with Existing Wiki

> **Note:** `[[uk-gdpr-security]]` already covers Art. 28 processor security obligations from a security angle (the "sufficient guarantees," contractual Art. 32 requirement, audit rights). This page covers Art. 28 more broadly from an accountability/governance angle. The two pages are complementary, not contradictory — `[[uk-gdpr-security]]` for the security content; this page for the broader contractual framework.

---

## Key Points for Agents

- **Written processor contract is mandatory before processing begins** (Art. 28(3)). No contract = direct Art. 28 breach. Fines at Art. 83(4) tier (up to £8.7m/2% annual worldwide turnover).
- The contract must include **eight mandatory minimum terms** — instructions-only, confidentiality, Art. 32 security, sub-processor controls, rights assistance, compliance assistance, deletion/return, and audit rights. A contract that omits any of these is non-compliant.
- Controllers must use only processors providing **"sufficient guarantees"** (Art. 28(1)) — this requires pre-engagement due diligence, not just a signed contract.
- **Sub-processors require prior written authorisation** and must be bound by the same contractual obligations as the main processor.
- If a sub-processor fails, the **main processor remains liable** to the controller.
- The ICO's dedicated Contracts sub-page has not yet been ingested; the complete mandatory terms framework is set out there.

## Related Articles

- [[ico-guide-accountability-governance]]
- [[uk-gdpr-security]]
- [[uk-gdpr-data-protection-principles]]
- [[uk-gdpr-records-of-processing]]
- [[uk-gdpr-individual-rights-overview]]
- [[uk-gdpr-dpia]]
