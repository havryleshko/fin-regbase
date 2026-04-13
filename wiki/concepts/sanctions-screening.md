---
title: "Sanctions Screening — Consolidated List Screening, Calibration, and Evasion Detection"
jurisdiction: UK
regulator: FCA / OFSI
regulation: FCG 7.2.3–7.2.3A (April 2026 version); FCTR 8 (June 2023)
status: current
effective_date: 2026-04-01
last_updated: 2026-04-13
sources:
  - "FCG 7.2.3 — Screening customers, counterparties and payments"
  - "FCG 7.2.3A — Evasion detection and investigation"
  - "FCG 7.2.2A — Customer due diligence checks"
  - "FCG 7.2.6 — RBS case study"
  - "FCA FCTR 8: Sanctions systems and controls: firms' response to increased sanctions due to Russia's invasion of Ukraine (June 2023) — Screening capabilities, Governance and oversight, Skills and resources"
tags: [financial-crime, sanctions, screening, Consolidated-List, fuzzy-matching, evasion, NECC, cryptoassets, SST, UK, FCA]
related:
  - concepts/uk-financial-sanctions-framework.md
  - concepts/asset-freezes-and-ofsi-licences.md
  - concepts/customer-due-diligence.md
  - summaries/fcg7-sanctions-asset-freezes-proliferation-financing.md
  - summaries/fctr8-sanctions-systems-controls-russia.md
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

Automated screening tools require active management. The FCA's good/poor practice findings are specific: **(FCG 7.2.3; FCTR 8)**

| Good practice | Poor practice |
|---------------|--------------|
| Firm understands how its tool is calibrated and can demonstrate it is appropriate to its risk | Firm does not understand how a third-party tool is calibrated or when lists are updated |
| Regular sample testing and parameter tuning | Calibration not adequately tailored — system either too sensitive or not sensitive enough |
| Quality control checks over manual screening | Name variations not detected (e.g. transliterations, reversals, digit rotation) |
| Tool can make fuzzy matches (name variations, character manipulation, digit rotation) | Firm overly reliant on third-party provider with no oversight or monitoring |
| Firm has controls to measure effectiveness of its automated system, thresholds and parameters | Tool calibrated for US OFAC / other regimes but not verified against OFSI Consolidated List |

**Fuzzy matching** is an explicit expectation for automated systems — the tool must handle: similar or variant spellings, name reversal, digit rotation, character manipulation, and other evasion techniques.

**Calibration balance:** Miscalibration runs in both directions. A tool that is too sensitive generates excessive false positives — stretching already under-resourced teams and increasing the risk of errors. A tool that is not sensitive enough misses sanctioned individuals when names vary even slightly. Firms must understand where their tool sits and tune accordingly. **(FCTR 8)**

**FCA Sanctions Screening Tool (SST):** The FCA has developed an in-house analytics-based tool that it uses to proactively test firms' screening systems against test data, objectively assessing how effective a firm is at identifying sanctioned individuals and entities. FCTR 8 testing found that some firms' systems were unable to generate alerts against certain names on OFSI's Consolidated List, and some firms were unable to provide reasonable justification for the omissions. Firms should expect to be tested using the SST. **(FCTR 8)**

**List update SLAs:** Updating of screening lists following new designations must be subject to SLAs. Firms must also monitor compliance with those SLAs — tracking how quickly lists are actually updated in practice. Absence of list-update SLAs is a named poor practice. **(FCTR 8)**

**Resource adequacy:** Sanctions screening teams must be adequately resourced to avoid backlogs in alert review and to react to true positives at pace. Alert backlogs and a lack of prioritisation governance are named poor practices. **(FCG 7.2.3; FCTR 8)**

---

## Outsourcing Sanctions Screening

Firms that use outsourced screening providers must: **(FCG 7.2.3; FCTR 8)**

- Maintain appropriate control and oversight of the outsourced screening controls
- Not assume that an intermediary or outsourcer has screened a customer without verifying this is the case
- Understand how the third-party tool is calibrated and when its lists are updated
- Have agreed SLAs covering the time taken for lists to be updated following a new designation, and monitor compliance with those SLAs

Overreliance on a third-party provider with no oversight — where the firm cannot explain whether it is screening the correct lists, whether names are being missed, or whether false positive rates are appropriate — is a named poor practice. **(FCTR 8)**

**UK vs. OFAC calibration:** A specific failure identified in FCTR 8 is global firms relying on screening tools calibrated for US OFAC sanctions that have not been verified against OFSI's Consolidated List. Since UK sanctions diverge from US sanctions post-Brexit, OFAC-calibrated tools may miss OFSI-designated persons. Firms must confirm that third-party tools are calibrated to the UK regime, not just to OFAC or other non-UK regimes.

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
- The FCA operates an in-house **Sanctions Screening Tool (SST)** that it uses to proactively test firms against the Consolidated List using test data. Some firms tested were unable to generate alerts for Consolidated List names and unable to justify the omissions. **(FCTR 8)**
- List update SLAs are required — firms must know how quickly their screening lists are updated following designations and monitor compliance with agreed timelines.
- Tools calibrated for US OFAC are not a substitute for UK Consolidated List screening. UK sanctions diverge from OFAC post-Brexit. **(FCTR 8)**

## Related Articles

- [[uk-financial-sanctions-framework]]
- [[asset-freezes-and-ofsi-licences]]
- [[customer-due-diligence]]
- [[fcg7-sanctions-asset-freezes-proliferation-financing]]
- [[fctr8-sanctions-systems-controls-russia]]
