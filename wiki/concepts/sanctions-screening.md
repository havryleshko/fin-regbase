---
title: "Sanctions Screening — Consolidated List Screening, Calibration, and Evasion Detection"
jurisdiction: UK
regulator: FCA / OFSI
regulation: FCG 7.2.3–7.2.3A (April 2026 version)
status: current
effective_date: 2026-04-01
last_updated: 2026-04-13
sources:
  - "FCG 7.2.3 — Screening customers, counterparties and payments"
  - "FCG 7.2.3A — Evasion detection and investigation"
  - "FCG 7.2.2A — Customer due diligence checks"
  - "FCG 7.2.6 — RBS case study"
tags: [financial-crime, sanctions, screening, Consolidated-List, fuzzy-matching, evasion, NECC, cryptoassets, UK, FCA]
related:
  - concepts/uk-financial-sanctions-framework.md
  - concepts/asset-freezes-and-ofsi-licences.md
  - concepts/customer-due-diligence.md
  - summaries/fcg7-sanctions-asset-freezes-proliferation-financing.md
---

# Sanctions Screening — Consolidated List Screening, Calibration, and Evasion Detection

## Screening Is Not a Legal Requirement — But It Is the Compliance Mechanism

Screening customers, counterparties and payments against the Consolidated List is not itself a statutory requirement. However, it is the primary mechanism through which firms demonstrate that they will not breach UK financial sanctions. The FCA treats the absence of adequate screening as evidence of deficient systems and controls. **(FCG 7.2.3)**

---

## What Must Be Screened

Firms must screen: **(FCG 7.2.3)**

- **New customers** at onboarding
- **Counterparties** to transactions
- **Payments** (both outgoing and incoming)
- **Existing customers** when new names are added to the Consolidated List
- **Directors and beneficial owners** of customer entities, on a risk-sensitive basis

**Critical point:** Screening only the named customer is not sufficient. FCG 7 explicitly requires screening of directors and beneficial owners. Failure to do so was a named failure in the RBS enforcement case. **(FCG 7.2.6)**

---

## When to Screen

| Trigger | Requirement |
|---------|-------------|
| Customer onboarding | Screen at take-on (not retrospectively, without good reason) |
| Consolidated List update | Rescreed existing customer database when new designations are added |
| Referral from third party | Screen the customer yourself; do not rely on the referring party's screening without taking steps to verify it is appropriate |

**Service level agreements:** Firms must have SLAs covering how quickly they update their screening lists following Consolidated List updates. These SLAs must be appropriate to the sanctions risk of the business. **(FCG 7.2.3)**

---

## Calibrating Automated Screening Tools

Automated screening tools require active management. The FCA's good/poor practice findings are specific: **(FCG 7.2.3)**

| Good practice | Poor practice |
|---------------|--------------|
| Firm understands how its tool is calibrated and can demonstrate it is appropriate to its risk | Firm does not understand how a third-party tool is calibrated or when lists are updated |
| Regular sample testing and parameter tuning | Calibration not adequately tailored — system either too sensitive or not sensitive enough |
| Quality control checks over manual screening | Name variations not detected (e.g. transliterations, reversals, digit rotation) |
| Tool can make fuzzy matches (name variations, character manipulation, digit rotation) | Firm overly reliant on third-party provider with no oversight or monitoring |
| Firm has controls to measure effectiveness of its automated system, thresholds and parameters | — |

**Fuzzy matching** is an explicit expectation for automated systems — the tool must handle: similar or variant spellings, name reversal, digit rotation, character manipulation, and other evasion techniques.

**Resource adequacy:** Sanctions screening teams must be adequately resourced to avoid backlogs in alert review and to react to true positives at pace. Alert backlogs and a lack of prioritisation governance are named poor practices. **(FCG 7.2.3)**

---

## Outsourcing Sanctions Screening

Firms that use outsourced screening providers must: **(FCG 7.2.3)**

- Maintain appropriate control and oversight of the outsourced screening controls
- Not assume that an intermediary or outsourcer has screened a customer without verifying this is the case
- Understand how the third-party tool is calibrated and when its lists are updated

Overreliance on a third-party provider with no oversight — where the firm has no means of monitoring screening performance — is a named poor practice.

---

## Cryptoasset-Specific: Blockchain Analytics

For firms in the cryptoasset sector, blockchain analytics solutions should be deployed to identify transactions linked to higher-risk wallet addresses, including those included on the Consolidated List. Compliance teams must understand how these capabilities can be used effectively — simply having the tool without operational understanding is not sufficient. **(FCG 7.2.3)**

---

## Evasion Detection: Beyond Name-Matching

Simple name-matching against the Consolidated List is necessary but not sufficient. Sanctions evasion frequently involves third parties, complex structures, and obfuscation techniques not captured by name-matching. **(FCG 7.2.3A)**

Firms must:
- Understand **potential sanctions evasion typologies** relevant to their business
- Consider whether additional detection procedures are needed

**NECC alerts:** The National Economic Crime Centre (NECC) publishes alerts on red flags for sanctions evasion. Firms should monitor and apply these alerts. **(FCG 7.2.3A)**

**Data analytics for evasion detection (good practice):** Using data analytics to identify customers who may be close associates, dependents, or have transactional links with designated persons — representing a higher risk of indirect sanctions non-compliance. **(FCG 7.2.3A)**

---

## The RBS Enforcement Case (2010) — £5.6m Fine

The FSA fined Royal Bank of Scotland £5.6m in August 2010 for deficiencies in its sanctions screening systems and controls. This was the first FSA penalty imposed under the Money Laundering Regulations 2007. **(FCG 7.2.6)**

**Named failures:**
1. Did not screen cross-border payments made by customers in sterling or euros — only domestic sterling payments were screened
2. Did not maintain the effectiveness of its fuzzy matching software
3. Did not screen names of directors and beneficial owners of customer companies

**Relevance:** These failures remain the benchmark for what constitutes inadequate screening. The post-Brexit sanctions landscape (Russia, Belarus, Iran, DPRK) has significantly expanded the Consolidated List and the volume of screening decisions required.

---

## Relationship to CDD

Effective CDD is foundational to effective sanctions screening. CDD that fails to identify all parties relevant for screening (connected parties, corporate structures, beneficial ownership chains) directly undermines the firm's ability to screen comprehensively. Low-quality CDD backlogs are a named sanctions compliance risk. **(FCG 7.2.2A; FCG 7.2.2B)**

See [[customer-due-diligence]] for CDD operational requirements.

---

## Key Points for Agents

- Screening against the Consolidated List is not a statutory requirement, but is the FCA's expected mechanism for demonstrating sanctions compliance.
- Must screen directors and beneficial owners, not just named customers — failure to do this was the RBS named failure.
- Automated tools must be actively calibrated with fuzzy matching capability. Overreliance on an unchecked third-party tool is a named poor practice.
- Existing customer databases must be rescreened when the Consolidated List is updated — one-off onboarding screening is insufficient.
- The NECC publishes evasion typology alerts that firms must monitor; simple name-matching does not detect complex evasion structures.
- Alert backlogs are a sanctions compliance risk in their own right — teams must be adequately resourced.

## Related Articles

- [[uk-financial-sanctions-framework]]
- [[asset-freezes-and-ofsi-licences]]
- [[customer-due-diligence]]
- [[fcg7-sanctions-asset-freezes-proliferation-financing]]
