---
title: "Regulation C — Coverage, Exclusions, and Partial Exemptions (§§1003.2–1003.3)"
jurisdiction: US
regulator: CFPB
regulation: "Home Mortgage Disclosure Act (HMDA), 12 USC 2801 et seq.; implemented by 12 CFR Part 1003 §§1003.2–1003.3"
direction: b2c
status: current
effective_date: 2018-01-01
last_updated: 2026-05-18
sources:
  - "12 CFR Part 1003 (up to date as of 5-14-2026) — §§1003.2–1003.3 and Supplement I"
tags: [HMDA, Regulation-C, US, CFPB, mortgage, coverage, partial-exemption, excluded-transactions, business-purpose, CRA, b2c]
related:
  - summaries/reg-c-hmda.md
  - concepts/reg-c-data-fields.md
  - summaries/reg-b-equal-credit-opportunity.md
---

# Regulation C — Coverage, Exclusions, and Partial Exemptions

## Overview

Whether a financial institution must report HMDA data — and how much data — depends on three independent determinations: (1) whether the institution itself meets the coverage thresholds; (2) whether a specific transaction is a covered loan or an excluded transaction; and (3) whether the institution qualifies for a partial exemption that eliminates the obligation to collect and report 26 of the 38 required data fields.

---

## Institutional Coverage (§1003.2(g))

### Depository Institutions — Five-Part Test

A bank, savings association, or credit union is a covered financial institution only if it satisfies **all five** of the following conditions as of the dates specified:

**Condition 1 — Asset threshold**
On the preceding December 31, the institution had assets exceeding the threshold established and published annually by the Bureau. The threshold is adjusted each year based on the year-to-year change in the CPI for Urban Wage Earners and Clerical Workers (CPI-W) for the 12-month period ending in November, rounded to the nearest million. For data collection in **2026, the asset-size exemption threshold is $59 million** — banks, savings associations, and credit unions with assets at or below $59 million are exempt from collecting data for 2026. **(§1003.2(g)(1)(i); Supplement I comment 2(g)-2)**

**Condition 2 — MSA office**
On the preceding December 31, the institution had a home or branch office in a Metropolitan Statistical Area (MSA) or Metropolitan Division (MD). **(§1003.2(g)(1)(ii))**

**Condition 3 — Origination activity**
In the preceding calendar year, the institution originated at least one home purchase loan or one refinancing of a home purchase loan secured by a first lien on a 1–4 unit dwelling. **(§1003.2(g)(1)(iii))**

**Condition 4 — Federal nexus**
The institution meets at least one of:
- Is federally insured or regulated; or
- Any loan referred to in Condition 3 was insured, guaranteed, supplemented, or assisted by a federal agency, or was intended for sale to FNMA or FHLMC **(§1003.2(g)(1)(iv))**

**Condition 5 — Volume threshold**
In each of the two preceding calendar years, the institution originated:
- At least **25 closed-end mortgage loans** not excluded under §1003.3(c)(1)–(10) or (c)(13); **or**
- At least **200 open-end lines of credit** not excluded under §1003.3(c)(1)–(10) **(§1003.2(g)(1)(v))**

These are separate thresholds — an institution that originates ≥25 closed-end loans but fewer than 200 open-end lines of credit is covered for its closed-end mortgage loans and must report those; it is not covered for its open-end lines of credit. **(§1003.3(c)(11)–(12))**

### Nondepository Financial Institutions — Two-Part Test

A for-profit mortgage lending institution (other than a bank, savings association, or credit union) is covered if it satisfies both:
1. On the preceding December 31, had a home or branch office in an MSA or MD; **and**
2. In each of the two preceding calendar years, originated ≥25 closed-end mortgage loans OR ≥200 open-end lines of credit not excluded under §1003.3(c)(1)–(10) **(§1003.2(g)(2))**

The asset threshold does not apply to non-depositories. Most non-bank mortgage lenders with any scale are covered institutions under this two-part test.

### Merger and Acquisition Coverage

After a merger, the surviving or newly formed institution is assessed on the combined assets, locations, and lending activity of the merged institutions for the calendar year of the merger. For the calendar year of the merger, data collection is required for covered loans and applications handled in the offices of the merged institution that was previously covered, and is optional for covered loans and applications handled in the offices of the institution that was previously not covered. **(Supplement I comment 2(g)-3 through 4)**

---

## Excluded Transactions (§1003.3(c))

The following transactions are not covered loans and need not be reported, regardless of whether the institution is a covered financial institution:

**Always excluded:**
- Loans originated or purchased in a fiduciary capacity (e.g., trustee)
- Loans secured by a lien on **unimproved land** (unless proceeds will be used within 2 years to construct or place a dwelling)
- **Temporary financing** — bridge loans, construction-only loans designed to be replaced by permanent financing from any financial institution to the same borrower; a construction loan that automatically converts to permanent financing with the same lender is NOT temporary financing and is a covered loan
- Purchase of an interest in a pool of loans (mortgage-backed securities, mortgage-participation certificates, REMICs)
- Purchase of the servicing right only
- Purchases as part of a merger/acquisition of all assets and liabilities of a branch
- Loans with total dollar amount less than **$500**
- Purchase of a partial interest in a loan
- Loans used **primarily for agricultural purposes**
- Loans **primarily for business or commercial purposes** — with an important exception (see below)
- New York State consolidation, extension, and modification agreement (CEMA) supplemental mortgages where final action on the consolidation was taken in the same calendar year as the new funds transaction

**Volume-based exclusions (with optional reporting):**
- Closed-end mortgage loans if the institution originated **fewer than 25** in either of the two preceding years (institution may optionally report as if covered)
- Open-end lines of credit if the institution originated **fewer than 200** in either of the two preceding years (institution may optionally report as if covered) **(§1003.3(c)(11)–(12))**

---

## Business-Purpose Loan Exception — The Home Purpose Override (§1003.3(c)(10))

Business- or commercial-purpose loans are excluded from HMDA — **unless** the loan also meets the definition of a home purchase loan, home improvement loan, or refinancing under §1003.2. **(§1003.3(c)(10))**

### Covered Business-Purpose Transactions

The following are **not excluded** despite being primarily for business or commercial purposes:
- A closed-end mortgage loan or open-end line of credit to **purchase or improve a multifamily dwelling** or a single-family investment property
- A loan to improve a doctor's office or daycare centre **located in a dwelling** other than a multifamily dwelling (the improvement is to the dwelling that houses the office)
- A loan **to a corporation**, if the funds will be used to purchase or improve a dwelling, or if the transaction is a refinancing of a dwelling-secured obligation **(Supplement I comment 3(c)(10)-3)**

### Excluded Business-Purpose Transactions

The following **are excluded** because they do not meet the home purchase, home improvement, or refinancing definitions:
- A loan to renovate a family restaurant that is not located in a dwelling
- A loan to purchase a warehouse, business equipment, or inventory
- A loan to a corporation whose funds will be used primarily for business purposes, such as to purchase inventory
- A loan primarily for business or commercial purposes other than home purchase, home improvement, or refinancing, even if it is cross-collateralised by a covered loan **(Supplement I comment 3(c)(10)-4)**

### Practical Application

An institution must determine the primary purpose of each closed-end mortgage loan or open-end line of credit on a case-by-case basis. It may use any reasonable standard to determine primary purpose and may select the standard to apply on a case-by-case basis. If a loan is primarily for business or commercial purposes under Regulation Z (12 CFR 1026.3(a)) and its related commentary, it is also deemed primarily for business or commercial purposes under Regulation C — but the converse is not automatic. **(Supplement I comment 3(c)(10)-2)**

---

## Partially Exempt Transactions (§1003.3(d))

### Who Qualifies

An insured depository institution or insured credit union that, in **each of the two preceding calendar years**, originated:
- Fewer than **500 closed-end mortgage loans** not excluded under §1003.3(c)(1)–(10) or (c)(13); **or**
- Fewer than **500 open-end lines of credit** not excluded under §1003.3(c)(1)–(10)

is not required to collect, record, or report the **optional data** fields for applications and covered loans in the applicable product category. **(§1003.3(d)(2)–(3))**

### What "Optional Data" Means

Optional data is the set of data fields defined in §1003.3(d)(1)(iii). These are the 26 fields added or expanded by the 2015 HMDA rule, including all pricing, underwriting, and loan feature data:

| Optional data field | §1003.4(a) reference |
|--------------------|--------------------|
| Rate spread (APR vs. APOR) | (a)(12) |
| HOEPA status | (a)(13) |
| Credit score and scoring model | (a)(15) |
| Total loan costs or total points and fees | (a)(17) |
| Total borrower-paid origination charges | (a)(18) |
| Discount points | (a)(19) |
| Lender credits | (a)(20) |
| Interest rate | (a)(21) |
| Prepayment penalty term | (a)(22) |
| DTI ratio | (a)(23) |
| CLTV | (a)(24) |
| Loan term | (a)(25) |
| Introductory rate period | (a)(26) |
| Contractual features (balloon, IO, neg am, non-fully-amortizing) | (a)(27) |
| Property value | (a)(28) |
| Manufactured home land status | (a)(29) |
| Manufactured home land ownership | (a)(30) |
| Affordable housing income-restricted units | (a)(32) |
| Application channel | (a)(33) |
| AUS name and result | (a)(35) |
| Open-end flag | (a)(37) |
| Business or commercial purpose flag | (a)(38) |

Partially exempt institutions must still report all non-optional fields — including ULI/NULI, loan purpose, loan amount, action taken, property location (address/state/county/census tract), applicant demographics (ethnicity, race, sex, age, income), lien status, denial reasons, and NMLSR ID.

### CRA Rating Disqualification

The partial exemption is **not available** to an insured depository institution or insured credit union that, as of the preceding December 31, had received:
- A rating of **"needs to improve record of meeting community credit needs"** during **each** of its two most recent CRA examinations; **or**
- A rating of **"substantial noncompliance in meeting community credit needs"** on its **most recent** CRA examination under CRA §807(b)(2) (12 USC 2906(b)(2)) **(§1003.3(d)(6))**

### Subsidiaries Cannot Inherit the Exemption

A financial institution that is a subsidiary of an insured credit union or insured depository institution may not claim the partial exemption under §1003.3(d) unless the **subsidiary itself** independently satisfies all three conditions: is itself an insured credit union or insured depository institution; originated fewer than 500 covered loans in each of the two preceding years; and has not received a disqualifying CRA rating. Ownership by or affiliation with a qualifying parent does not transfer the exemption. **(Supplement I comment 3(d)-5)**

### Voluntary Reporting of Optional Data

A partially exempt institution may voluntarily collect, record, and report optional data as if required to do so. However, if the institution voluntarily reports any data for a specific optional data paragraph (e.g., §1003.4(a)(15) credit score), it must report all other data that would be required by that paragraph if the transaction were not partially exempt. The institution may not cherry-pick within an optional data paragraph. **(§1003.3(d)(4))**

### NULI for Partially Exempt Transactions

A partially exempt institution that does not report a ULI for a transaction must assign and report a **Non-Universal Loan Identifier (NULI)** of up to 22 characters. The NULI must be unique within the institution's annual LAR and must not contain any information that could directly identify the applicant or borrower. **(§1003.3(d)(5))**

---

## Key Points for Agents

- **Non-depositories are not subject to the asset threshold** — any for-profit mortgage lender with an MSA office and ≥25 closed-end or ≥200 open-end originations in each of two prior years is covered, regardless of size. **(§1003.2(g)(2))**
- **Business-purpose loans to corporations for dwelling purchase, improvement, or refinancing are covered loans.** The business-purpose exclusion only protects loans that are not home purchase loans, home improvement loans, or refinancings under §1003.2. A corporate borrower does not create an exclusion if the loan funds will be used for a dwelling. **(§1003.3(c)(10))**
- **The partial exemption threshold is 500, not 25.** The 25-loan threshold in §1003.3(c)(11) is the volume below which a non-exempt institution need not report those loans at all (with an optional reporting election). The 500-loan threshold in §1003.3(d) is the level below which an exempt institution need not report optional data for the loans it does report. These are distinct rules. **(§§1003.3(c)(11) and 1003.3(d))**
- **A "needs to improve" CRA rating on both of the two most recent examinations (not just the most recent) destroys the partial exemption.** A single "needs to improve" rating is insufficient — the institution must have received that rating on each of its two most recent examinations. "Substantial noncompliance" on the most recent examination alone is sufficient. **(§1003.3(d)(6))**
- **Temporary financing means designed to be replaced by separate permanent financing from any institution.** A construction loan that will automatically convert to permanent financing with the same lender is not temporary financing — it is a covered loan from origination. **(§1003.3(c)(3); Supplement I comment 3(c)(3)-1)**

---

## Related Articles

- [[reg-c-hmda]]
- [[reg-c-data-fields]]
- [[reg-b-equal-credit-opportunity]]
