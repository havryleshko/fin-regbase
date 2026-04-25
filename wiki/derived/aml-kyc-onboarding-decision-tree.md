---
title: "AML/KYC Onboarding Decision Tree"
jurisdiction: UK
regulator: FCA
regulation: MLR 2017; POCA 2002; Terrorism Act 2000; FCA SYSC
status: current
effective_date: 2017-06-26
last_updated: 2026-04-22
sources:
  - "MLR 2017 regs 18–24 (CDD), 33–37 (EDD), 38–44 (SDD)"
  - "POCA 2002 ss.330–332, 337–338 (SAR/DAML)"
  - "Terrorism Act 2000 s.21A (failure to disclose)"
  - "FCA CONC 2.10 (mental capacity)"
  - "FCA CONC 1.3.1G (financial difficulty indicators)"
tags: [AML, KYC, CDD, EDD, SDD, SAR, DAML, onboarding, mental-capacity, vulnerability, tipping-off, sanctions, UK, FCA, NCA]
related:
  - concepts/customer-due-diligence.md
  - concepts/sar-consent-tipping-off.md
  - concepts/conc-financial-difficulty-indicators.md
  - concepts/conc-mental-capacity-guidance.md
  - concepts/vulnerable-customers.md
  - concepts/uk-financial-sanctions-framework.md
  - concepts/sysc9-record-keeping.md
---

# AML/KYC Onboarding Decision Tree

## Purpose

This page synthesises the CDD, EDD, SDD, SAR/DAML, sanctions screening, and vulnerability frameworks into a single sequential decision flow for use at the onboarding stage. An agent processing a new customer application should traverse this tree in order. Each node is a hard gate — failure at any node stops progression unless the specified exception applies.

This tree covers **natural persons** and **legal persons** onboarding to a regulated firm. It does not cover wire transfer Regulation R2R screening or post-onboarding periodic review triggers (covered separately in [[customer-due-diligence]]).

---

## Stage 0 — Sanctions Screening (Pre-Application)

Screen the prospective customer against:
- UK consolidated sanctions list (OFSI)
- UN consolidated list
- EU consolidated list (if EU nexus)
- US OFAC SDN list (if USD clearing or US nexus)

**Node 0.1:** Is the customer on a designated persons list?
- **YES** → **STOP.** Onboarding is prohibited. Report to OFSI within 10 business days of knowledge (SAMLA 2018 s.17). Do NOT inform the customer — asset freeze reporting is not tipping-off under POCA 2002. Contact compliance and legal immediately.
- **NO** → Proceed to Stage 1.

**Node 0.2:** Is the customer's country of residence subject to a UK financial sanctions regime?
- **YES** → Flag for EDD at Stage 3 (high-risk third country — see Node 3.2). Continue to Stage 1.
- **NO** → Continue to Stage 1.

---

## Stage 1 — Business Relationship Risk Classification

Classify the business relationship to determine which CDD track applies.

**Node 1.1:** Does the customer meet ALL of the following SDD conditions? **(MLR 2017 reg. 37)**
1. Customer is a credit or financial institution subject to CDD requirements equivalent to UK MLR, OR a UK-listed public company, OR a government entity.
2. There is no suspicion of money laundering or terrorist financing.
3. The transaction or relationship presents a low risk of ML/TF.

- **YES (all three)** → SDD track. Proceed to Stage 2A (Simplified).
- **NO or UNCERTAIN** → Standard CDD track. Proceed to Stage 2B (Standard).

**Node 1.2:** Does any of the following apply? **(MLR 2017 reg. 33)**
- Customer is a PEP, or a close family member or known associate of a PEP.
- Business relationship involves a high-risk third country (FATF grey/black list, or HM Treasury designation).
- Transaction is complex, unusually large, or has an unusual pattern with no apparent lawful purpose.
- Correspondent banking relationship with a respondent institution (credit/financial institution).
- Life insurance beneficiary is a PEP or high-risk party.

- **YES (any one)** → Enhanced Due Diligence mandatory. Continue through Stage 2B first, then proceed to Stage 3.
- **NO** → Continue on standard track.

---

## Stage 2A — Simplified CDD (SDD Track)

Apply reduced measures proportionate to the low-risk assessment:
- Verify identity; no obligation to verify documents at the time of application (verification may be deferred to account activation).
- Obtain sufficient information to establish business relationship purpose — full source of funds not required unless suspicion arises.
- Continue to monitor the relationship.

**Node 2A.1:** Does any new information arise during Stage 2A that would satisfy a condition in Node 1.2?
- **YES** → Upgrade to Standard CDD + EDD immediately. Proceed to Stage 2B then Stage 3.
- **NO** → Proceed to Stage 4 (Vulnerability and Capacity Check).

---

## Stage 2B — Standard CDD (Four Steps)

All four steps are mandatory. **(MLR 2017 reg. 28)**

**Step 1 — Identify the customer:**
- Natural person: full name, residential address, date of birth, nationality.
- Legal person: registered name, registration number, registered address, legal form, governing law, directors.

**Step 2 — Verify the customer's identity:**
- Using reliable, independent documentary or electronic sources.
- Document expiry does not automatically invalidate verification but affects reliability weighting.
- Electronic verification (credit bureau, biometric) is acceptable if source is sufficiently independent.

**Step 3 — Identify the beneficial owner (legal persons only):**
- Identify all natural persons who own or control more than **25% of shares or voting rights**, or otherwise exercise control. **(MLR 2017 reg. 5)**
- If no natural person satisfies the 25% threshold after exhausting ownership chains: identify the **senior managing official(s)** as a fallback — document why the threshold was not met.
- Trusts: identify settlor, trustees, protector (if any), beneficiaries (or class of beneficiaries), and any person exercising effective control.

**Node 2B.3a:** Can the beneficial owner be identified?
- **NO** — the ownership chain is opaque or the customer refuses → **STOP**. Business relationship must not be established or continued. **(MLR 2017 reg. 31)** File SAR if suspicion arises (see Stage 5).
- **YES** → Continue to Step 4.

**Step 4 — Understand the purpose and intended nature of the business relationship:**
- Product/service type, expected transaction volumes and patterns, source of funds (general), source of wealth where EDD applies.
- Document findings — this baseline drives transaction monitoring calibration.

---

## Stage 3 — Enhanced Due Diligence (EDD)

Triggered by any Node 1.2 condition. EDD is **additional to** Standard CDD — it does not replace it.

**Node 3.1 — PEP / Family / Associates:**
- Obtain **Senior Management approval** before establishing or continuing the relationship. **(MLR 2017 reg. 35(5))**
- Establish source of wealth (how the wealth was accumulated historically) **and** source of funds (origin of specific funds used in this transaction). Both are required; neither alone satisfies the EDD obligation.
- Conduct enhanced **ongoing monitoring** — increased frequency and depth of transaction review.

**Node 3.2 — High-Risk Third Country:**
- Obtain additional information on purpose of business relationship and source of funds/wealth.
- Obtain additional information on the customer's and beneficial owner's source of wealth.
- Obtain Senior Management approval. **(MLR 2017 reg. 33(6))**
- Consider whether first payment should be required from an account in the customer's name at an EU/equivalent institution.

**Node 3.3 — Correspondent Banking:**
- Perform due diligence on the respondent institution: reputation, quality of supervision, AML/CTF controls.
- Assess and document the nature of the respondent institution's business and its customer base.
- Obtain Senior Management approval.
- Document the respective AML/CTF responsibilities.
- **Do not enter into a relationship with a shell bank.** **(MLR 2017 reg. 34)**

**Node 3.4 — Complex / Unusual Transaction:**
- Examine the background and purpose of the transaction as far as possible.
- Establish and record findings in writing.
- Increase monitoring of the business relationship.

**Node 3.5 — Life Insurance Beneficiary (PEP or high-risk):**
- EDD at the point of pay-out or at the point of assignment of the policy (whichever is earlier).
- Senior Management notification before any pay-out.

After EDD: Proceed to Stage 4.

---

## Stage 4 — Vulnerability and Mental Capacity Check

This stage applies the FCA's consumer protection overlay to the AML/KYC process.

**Node 4.1:** Are there indicators of mental capacity limitations? **(CONC 2.10; FCA Guidance for Firms on the Fair Treatment of Vulnerable Customers)**

Indicators include:
- Customer unable to provide consistent, coherent responses to identity/purpose questions.
- Third party speaking on behalf of the customer without stated reason (consider LPA / deputyship).
- Customer expresses confusion about the nature of the product or the relationship.
- Medical evidence of incapacity provided or volunteered.

- **YES** → Apply mental capacity protocol:
  1. Pause the onboarding process.
  2. Do not apply pressure to proceed.
  3. Offer to resume when a carer, representative, or advocate is available.
  4. If continuing, document the capacity assessment and the basis for concluding the customer has sufficient capacity to proceed.
  5. Consider whether a third-party authority (LPA / court of protection order) is required for the proposed transaction type.
  6. Do not refuse onboarding solely on the basis of a medical condition without genuine capacity assessment. **(Equality Act 2010)**
- **NO** → Continue to Node 4.2.

**Node 4.2:** Are there indicators of financial vulnerability? **(CONC 1.3.1G; FCA Consumer Duty)**

Indicators include:
- Customer references significant debt problems, an active DMP, or recent bankruptcy.
- Customer asks about deferrals, waiving arrears, or difficulty with repayments.
- Customer appears to have very limited financial literacy relative to the product.
- Indicators of recent life events (bereavement, job loss, relationship breakdown).

- **YES** → Flag account for enhanced suitability and vulnerability monitoring. Ensure product is appropriate for the customer's circumstances before proceeding. Record indicators. Consider whether referral to debt advice or signposting to MoneyHelper is appropriate.
- **NO** → Continue to Stage 5.

After Node 4.2: Proceed to Stage 5.

---

## Stage 5 — Suspicion Assessment (SAR Decision Gate)

At any point in Stages 0–4, if information has arisen that gives rise to knowledge, suspicion, or reasonable grounds to suspect that the customer is engaged in money laundering or terrorist financing, a reporting obligation is triggered.

**Node 5.1:** Does the reporting employee have knowledge, suspicion, or reasonable grounds to suspect ML/TF? **(POCA 2002 s.330; Terrorism Act 2000 s.21A)**

Note: **suspicion is subjective** (K v NatWest: more than fleeting concern, something calling for explanation); **reasonable grounds** is objective (what a reasonable person with the same information would conclude).

- **NO** → Proceed to Stage 6.
- **YES** → Continue to Node 5.2.

**Node 5.2:** Is the relevant information **privileged** (obtained in the course of providing legal advice or litigation)?
- **YES** → No reporting obligation for that information. Continue.
- **NO** → Continue to Node 5.3.

**Node 5.3 — Consent Required?**

Does the firm wish to proceed with the transaction or relationship despite the suspicion?
- **YES** → File a **DAML (Defence Against Money Laundering) SAR** via NCA UKFIU. Await consent or expiry of the moratorium period before proceeding:
  - **7-day moratorium** (initial): NCA has 7 days from receipt to grant/refuse consent (or allow it to lapse).
  - **31-day extension**: If NCA refuses within 7 days, a further 31-day period runs for an investigation notice. Do not proceed until this expires or consent is granted.
  - **186-day maximum**: If a court restraint order or other order is made within the 31-day period, a further 186-day period may run.
  - Document the DAML reference number and the date of consent or moratorium expiry before proceeding.
- **NO** (firm does not wish to proceed) → File a **disclosure SAR** (not DAML). Do not inform the customer of the SAR. **(POCA 2002 s.333A — tipping-off)**

**Node 5.4 — Tipping-Off Check:**

Have any actions or communications inadvertently or potentially disclosed the SAR or the ML/TF investigation to the customer or a third party?

Tipping-off offences: **(POCA 2002 s.333A)**
1. Disclosing that a SAR has been made or that information has been provided to NCA.
2. Disclosing that an investigation is being contemplated or carried out.

Permitted disclosures — these do **not** constitute tipping-off:
- Disclosure to another employee within the same firm (including overseas branches) for AML compliance purposes.
- Disclosure within the same group for AML compliance purposes, if the group has equivalent AML controls.
- Disclosure between credit/financial institutions that are or were joint parties to a transaction, if both are subject to equivalent AML requirements and neither is in a jurisdiction where disclosure is unlawful.
- Disclosure to NCA itself.
- Disclosure with NCA consent.

- **TIPPING-OFF RISK IDENTIFIED** → Immediately stop the communication. Seek legal advice. Do not issue standard "we cannot proceed with your application" letters without careful wording review.

---

## Stage 6 — Onboarding Decision

**Node 6.1:** Have all of the following been satisfied?

| Checkpoint | Status |
|---|---|
| Sanctions screening — no match or sanctioned person | ✓ / ✗ |
| CDD identity verification complete (all 4 steps) | ✓ / ✗ |
| Beneficial owner(s) identified (legal persons) | ✓ / ✗ |
| EDD completed where triggered | ✓ / N/A |
| SM approval obtained where required (PEP / high-risk country / correspondent banking) | ✓ / N/A |
| Vulnerability flags recorded and product suitability assessed | ✓ / ✗ |
| No outstanding DAML moratorium period | ✓ / ✗ |
| No tipping-off risk | ✓ / ✗ |

- **ALL ✓** → Onboarding approved. Set transaction monitoring parameters based on the risk classification established in Stages 1–3. Proceed to Stage 7.
- **ANY ✗** → Do not onboard. Document the specific failed checkpoint. If refusal is AML-based, do not communicate AML as the reason if doing so would constitute tipping-off.

---

## Stage 7 — Post-Onboarding Calibration

Before the account goes live, configure ongoing monitoring parameters:

**Transaction monitoring baselines (from Stage 2B Step 4):**
- Expected transaction volume and frequency.
- Expected counterparty types and jurisdictions.
- Expected product use pattern.

**EDD monitoring uplift (from Stage 3):**
- PEP customers: enhanced periodic review (at minimum annual, more frequent for high-risk PEPs).
- High-risk country customers: review on material transaction or annually.
- Correspondent banking: periodic reassessment of respondent institution controls.

**Vulnerability flags (from Stage 4):**
- Set account-level flags so that any future collections, arrears management, or limit-increase processes trigger vulnerability review.
- PEP status and high-risk classification must be embedded in the customer record, not held only in the onboarding file.

**Periodic review trigger:** Re-run full CDD verification (and EDD where applicable) on:
- Any material change in customer circumstances.
- Any suspicious transaction or pattern.
- At the scheduled periodic review date set by risk classification.

---

## Record-Keeping

All decisions at each node must be recorded and retained. **(MLR 2017 reg. 40; SYSC 9.1.1R)**

| Record type | Minimum retention |
|---|---|
| CDD identity verification documents | 5 years from end of business relationship |
| EDD documentation (source of wealth/funds, SM approval) | 5 years from end of business relationship |
| Transaction records | 5 years from completion of transaction |
| SAR/DAML records (including DAML reference numbers and moratorium dates) | Retain — no standard minimum, but 5 years is standard practice; do NOT retain beyond what is legally required |
| Sanctions screening records (results and date of screen) | 5 years from the date of screening |
| Vulnerability assessments and capacity assessments | Retain for duration of relationship plus 5 years |

Records must be held in a form accessible to the FCA and NCA on request. For MiFID firms: SYSC 9.1.2-AR tamper-proof storage requirement applies. See [[sysc9-record-keeping]] for the full two-track architecture.

---

## Key Points for Agents

- Sanctions screening is pre-application (Stage 0) — not post-identification. A match means onboarding is prohibited, not suspended, and must be reported to OFSI within 10 business days.
- SDD is available only where all three conditions in MLR 2017 reg. 37 are met simultaneously. Uncertainty about any condition defaults to Standard CDD.
- The 25% beneficial owner threshold identifies a floor, not a ceiling — beneficial ownership control can exist below 25% through other means of control. Where no natural person meets the threshold, the senior managing official is the fallback.
- EDD is additional to Standard CDD, not a replacement. It requires both source of wealth (historical) and source of funds (transaction-specific); SM approval is mandatory for PEPs, high-risk third countries, and correspondent banking.
- DAML moratorium periods are sequential (7 days, then up to 31 days, then up to 186 days). Proceeding before the applicable period expires is a POCA 2002 s.328 money laundering offence.
- Mental capacity indicators require a pause and capacity assessment, not automatic refusal. Refusal solely on medical grounds without genuine assessment is an Equality Act 2010 risk.
- All node decisions must be recorded for a minimum of 5 years from end of relationship or transaction completion.

## Related Articles

- [[customer-due-diligence]]
- [[sar-consent-tipping-off]]
- [[conc-financial-difficulty-indicators]]
- [[conc-mental-capacity-guidance]]
- [[vulnerable-customers]]
- [[uk-financial-sanctions-framework]]
- [[sysc9-record-keeping]]
