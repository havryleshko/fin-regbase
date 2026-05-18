---
title: "12 CFR Part 1003 — Regulation C (Home Mortgage Disclosure Act)"
jurisdiction: US
regulator: CFPB
regulation: "Home Mortgage Disclosure Act (HMDA), 12 USC 2801 et seq.; implemented by 12 CFR Part 1003"
direction: b2c
status: current
effective_date: 2018-01-01
last_updated: 2026-05-18
sources:
  - "12 CFR Part 1003 (up to date as of 5-14-2026) — CFPB official text"
tags: [HMDA, Regulation-C, US, CFPB, mortgage, data-reporting, LAR, ULI, fair-lending, APOR, b2c]
related:
  - concepts/reg-c-coverage-and-exemptions.md
  - concepts/reg-c-data-fields.md
  - summaries/dodd-frank-title-x-cfpb.md
  - summaries/reg-b-equal-credit-opportunity.md
  - summaries/reg-z-truth-in-lending.md
  - concepts/cfpb-framework-overview.md
---

# 12 CFR Part 1003 — Regulation C (Home Mortgage Disclosure Act)

## Overview

Regulation C implements the Home Mortgage Disclosure Act (HMDA, 12 USC 2801 et seq.), enacted in 1975 and substantially expanded by the Dodd-Frank Act (2010). The regulation requires covered financial institutions to collect, record, and report data about their residential mortgage lending activities. The data serve three statutory purposes: (1) helping determine whether financial institutions are serving the housing needs of their communities; (2) assisting public officials in directing public-sector investment; and (3) identifying possible discriminatory lending patterns and enforcing anti-discrimination statutes. **(§1003.1(b))**

HMDA data are the primary public dataset used by regulators, researchers, and advocates to assess fair lending compliance. The CFPB publishes HMDA data annually at consumerfinance.gov/hmda. The current data collection framework was significantly revised in 2015 (effective January 1, 2018) to add 25+ new data fields and modernise the reporting infrastructure.

---

## Structure

The regulation contains six sections and three appendices:
- **§1003.1** — Authority, purpose, and scope
- **§1003.2** — Definitions
- **§1003.3** — Exempt institutions and excluded and partially exempt transactions
- **§1003.4** — Compilation of reportable data (the 38 data fields)
- **§1003.5** — Disclosure and reporting
- **§1003.6** — Enforcement
- **Appendix B** — Form and instructions for data collection on ethnicity, race, and sex
- **Appendix C** — Procedures for generating a check digit and validating a ULI
- **Supplement I** — Official Bureau interpretations

---

## Coverage — Who Must Report (§1003.2(g))

### Depository Financial Institutions

A bank, savings association, or credit union must report HMDA data if it satisfies **all five** of the following conditions simultaneously:

1. **Asset threshold:** On the preceding December 31, had assets above the threshold established and published annually by the Bureau. For data collection in 2026, the threshold is **$59 million** (CPI-adjusted annually based on year-to-year change in CPI-W for the 12-month period ending in November). **(§1003.2(g)(1)(i); Supplement I comment 2(g)-2)**
2. **MSA office:** On the preceding December 31, had a home or branch office in an MSA or Metropolitan Division. **(§1003.2(g)(1)(ii))**
3. **Origination activity:** In the preceding calendar year, originated at least one home purchase loan or refinancing of a home purchase loan secured by a first lien on a 1–4 unit dwelling. **(§1003.2(g)(1)(iii))**
4. **Federal nexus:** The institution is federally insured or regulated, OR any loan referred to in condition 3 was insured, guaranteed, or supplemented by a federal agency or intended for sale to FNMA or FHLMC. **(§1003.2(g)(1)(iv))**
5. **Volume threshold:** In each of the two preceding calendar years, originated at least **25 closed-end mortgage loans** not excluded under §1003.3(c)(1)–(10) or (c)(13); OR originated at least **200 open-end lines of credit** not excluded under §1003.3(c)(1)–(10). **(§1003.2(g)(1)(v))**

### Nondepository Financial Institutions

A for-profit mortgage lending institution (other than a bank, savings association, or credit union) must report if it had an MSA office on the preceding December 31 and meets the same volume thresholds (≥25 closed-end mortgage originations OR ≥200 open-end line of credit originations in each of the two preceding years). **(§1003.2(g)(2))**

---

## Covered Loans (§1003.2(e))

A **covered loan** is a closed-end mortgage loan or an open-end line of credit that is not an excluded transaction under §1003.3(c). Key definitions:

- **Closed-end mortgage loan (§1003.2(d)):** An extension of credit secured by a lien on a dwelling that is not an open-end line of credit
- **Open-end line of credit (§1003.2(o)):** An extension of credit secured by a lien on a dwelling that is an open-end credit plan as defined in Regulation Z (12 CFR 1026.2(a)(20))
- **Dwelling (§1003.2(f)):** A residential structure whether or not attached to real property — detached homes, condominiums, cooperatives, manufactured homes, multifamily structures. Includes vacation and second homes and investment properties. Excludes recreational vehicles, houseboats, hotels, hospitals, and structures used exclusively for commercial purposes.

---

## Excluded Transactions (§1003.3(c))

The following are not covered loans and need not be reported:

1. Loans originated or purchased in a fiduciary capacity
2. Loans secured by a lien on unimproved land (unless proceeds will be used within 2 years to construct a dwelling or purchase land to place a dwelling)
3. Temporary financing (bridge loans, construction-only loans designed to be replaced by permanent financing from any institution)
4. Purchase of an interest in a pool of loans (mortgage-backed securities, participation certificates, REMICs)
5. Purchase of the right to service loans only
6. Purchases as part of a merger or acquisition of all assets/liabilities of a branch
7. Loans with total dollar amount less than $500
8. Purchase of a partial interest in a loan
9. Loans used primarily for agricultural purposes
10. **Business or commercial purpose loans** — unless the loan also meets the definition of a home purchase loan, home improvement loan, or refinancing **(§1003.3(c)(10))** — see [[reg-c-coverage-and-exemptions]]
11. Closed-end mortgage loans if the institution originated fewer than 25 in either of the two preceding calendar years (optional reporting permitted)
12. Open-end lines of credit if the institution originated fewer than 200 in either of the two preceding calendar years (optional reporting permitted)
13. New York State consolidation, extension, and modification agreement supplemental mortgages (if final action on the consolidation was taken in the same year as the new funds transaction)

---

## Partially Exempt Transactions (§1003.3(d))

Insured depository institutions and insured credit unions that originated **fewer than 500 closed-end mortgage loans** (or fewer than **500 open-end lines of credit**) that are not excluded under §1003.3(c)(1)–(10) or (c)(13) in each of the two preceding calendar years are not required to collect, record, or report **optional data** for applications and covered loans in the applicable product category. **(§1003.3(d)(2)–(3))**

**Optional data** (fields not required for partially exempt transactions) includes: credit score and scoring model, APOR spread, HOEPA status, total loan costs, total points and fees, origination charges, discount points, lender credits, interest rate, prepayment penalty term, DTI ratio, CLTV, loan term, introductory rate period, contractual features (balloon, IO, negative amortization), property value, manufactured home land status, affordable housing income-restricted units, application channel, AUS name and result, and whether the loan is an open-end line or business-purpose. **(§1003.3(d)(1)(iii))**

**CRA rating exclusion:** The partial exemption is not available to any institution that, as of the preceding December 31, had received a rating of "needs to improve record of meeting community credit needs" during each of its two most recent CRA examinations, or a rating of "substantial noncompliance in meeting community credit needs" on its most recent examination. **(§1003.3(d)(6))**

**Subsidiaries cannot inherit a parent's exemption.** An institution that is a subsidiary of an insured credit union or insured depository institution may not claim the partial exemption unless the subsidiary itself independently meets the origination thresholds and CRA rating requirements. **(Supplement I comment 3(d)-5)**

See [[reg-c-coverage-and-exemptions]] for full partial exemption mechanics.

---

## Reportable Data — The 38 Fields (§1003.4(a))

Financial institutions must collect and report the following data for each covered loan and application:

| Field | Data element |
|-------|-------------|
| (1) | Universal Loan Identifier (ULI) or NULI |
| (2) | Whether FHA/VA/USDA insured or guaranteed |
| (3) | Loan purpose (home purchase, home improvement, refinancing, cash-out refinancing, other) |
| (4) | Whether preapproval was requested |
| (5) | Construction method (site-built or manufactured home) |
| (6) | Occupancy type (principal residence, second home, investment property) |
| (7) | Loan amount |
| (8) | Action taken and date (originated, purchased, denied, withdrawn, closed for incompleteness, approved but not accepted, preapproval denied, preapproval approved but not accepted) |
| (9) | Property location (address, state, county, census tract) |
| (10) | Applicant/borrower ethnicity, race, sex; whether collected by visual observation |
| (10)(ii) | Applicant age |
| (10)(iii) | Gross annual income relied on |
| (11) | Type of purchaser (if loan sold same year) |
| (12) | Rate spread (APR minus APOR for comparable transaction) — *optional data* |
| (13) | HOEPA status — *optional data* |
| (14) | Lien status |
| (15) | Credit score and scoring model — *optional data* |
| (16) | Principal denial reason(s) (up to 4) |
| (17) | Total loan costs or total points and fees — *optional data* |
| (18) | Total borrower-paid origination charges — *optional data* |
| (19) | Discount points — *optional data* |
| (20) | Lender credits — *optional data* |
| (21) | Interest rate — *optional data* |
| (22) | Prepayment penalty term — *optional data* |
| (23) | DTI ratio — *optional data* |
| (24) | CLTV — *optional data* |
| (25) | Loan term in months — *optional data* |
| (26) | Introductory rate period in months — *optional data* |
| (27) | Contractual features (balloon, interest-only, negative amortization, non-fully-amortizing) — *optional data* |
| (28) | Property value relied on — *optional data* |
| (29) | Manufactured home secured by home and land, or home only — *optional data* |
| (30) | Manufactured home land ownership interest (direct, paid leasehold, unpaid leasehold) — *optional data* |
| (31) | Number of individual dwelling units |
| (32) | Number of affordable housing income-restricted units (multifamily) |
| (33) | Application channel (submitted directly; obligation initially payable to institution) — *optional data* |
| (34) | NMLSR ID of mortgage loan originator |
| (35) | AUS name and result — *optional data* |
| (36) | Whether reverse mortgage |
| (37) | Whether open-end line of credit |
| (38) | Whether business or commercial purpose |

*"Optional data"* fields are those covered by the partial exemption under §1003.3(d) — full reporters must collect all 38 fields. **(§1003.4(a))**

See [[reg-c-data-fields]] for the ULI structure, multi-institution reporting rules, APOR spread calculation, and AUS reporting mechanics.

---

## Who Reports in Multi-Institution Transactions (§1003.4(a); Supplement I comment 4(a)-2)

Only the institution that **made the credit decision** — approving the application before closing or account opening — reports the transaction as an origination. Where more than one institution reviews an application:

- If Institution A receives the application and Institution B reviews and makes the credit decision (acting as principal, not A's agent), B reports the origination; A reports nothing.
- If Institution A receives the application and forwards it to B as **B's agent**, A does not report; B reports.
- If Institution A makes the credit decision and Institution B purchases the loan after closing, A reports the origination and B reports the purchase.

A broker's submission of an application to an institution is not a direct submission by the applicant — the application was not submitted directly to the institution for purposes of the application channel field (§1003.4(a)(33)). **(Supplement I comment 4(a)-2 through -4)**

---

## Data Recording and Reporting (§1003.4(f); §1003.5)

### Quarterly Recording

Data must be recorded on the **loan/application register (LAR)** within **30 calendar days** after the end of the calendar quarter in which final action is taken. **(§1003.4(f))**

### Annual Submission

All covered institutions must submit their LAR to the appropriate Federal agency by **March 1** following the data collection year. **(§1003.5(a)(1)(i))**

### Quarterly Submission Obligation

Institutions that reported **60,000 or more covered loans and applications** (excluding purchased covered loans) for the preceding calendar year must also submit their LAR quarterly, within **60 calendar days** after the end of each calendar quarter (except Q4). **(§1003.5(a)(1)(ii))**

The quarterly threshold is based on the prior year's total. A merger that creates a combined institution with 60,000+ covered loans triggers the quarterly submission obligation effective the date of the merger. **(Supplement I comment 5(a)-1)**

### Retention

A copy of the annual LAR submission must be retained for at least **3 years**. **(§1003.5(a)(1)(i))**

### Public Disclosure

The FFIEC prepares a disclosure statement for each institution based on submitted data. The institution must make the disclosure statement available at its home office and each MSA branch office within 3 business days of receiving notice that it is available. The institution must post a general notice about HMDA data availability in its home office and each MSA/MD branch office lobby. **(§1003.5(b)–(e))**

---

## Enforcement and Bona Fide Errors (§1003.6)

Violations of HMDA or Regulation C are subject to administrative sanctions under HMDA section 305 (12 USC 2804), including civil money penalties. **(§1003.6(a))**

**Bona fide error safe harbor:** An error in compiling or recording data is not a violation if it was unintentional and occurred despite maintenance of procedures reasonably adapted to avoid such errors. An incorrect census tract number obtained from the Bureau's FFIEC geocoding tool is a bona fide error, provided the institution maintains procedures reasonably adapted to avoid errors. However, a failure to report census tract information where required is not excused, and a census tract error caused by entering an inaccurate property address into the geocoding tool is not a bona fide error. **(§1003.6(b))**

**Quarterly recording safe harbor:** Inaccurate or incomplete data recorded within 30 days of quarter end is not a violation if the institution corrects or completes the data before submitting the annual LAR. **(§1003.6(c))**

---

## Key Points for Agents

- **HMDA coverage is a five-part AND test for depositories — the volume threshold (≥25 closed-end OR ≥200 open-end in each of two preceding years) is what most fintechs and non-bank lenders must monitor most carefully.** The asset threshold does not apply to non-depositories. **(§1003.2(g))**
- **Business-purpose loans are not categorically excluded.** A loan to a corporation to purchase or improve a dwelling, or to refinance an existing dwelling-secured obligation, is a covered loan reportable as a home purchase loan, home improvement loan, or refinancing — regardless of the borrower's business purpose. **(§1003.3(c)(10); Supplement I comment 3(c)(10))**
- **The partial exemption (fewer than 500 originations) eliminates 26 of 38 required fields** — including the most sensitive pricing fields (APOR spread, total loan costs, credit score, DTI, AUS result). A poor CRA rating destroys the exemption retroactively to the preceding December 31. **(§1003.3(d))**
- **In multi-institution transactions, only the credit decision maker reports the origination.** Brokers, correspondents, and institutions that forward applications without making a credit decision do not report. The application channel field (§1003.4(a)(33)) must reflect whether the application was submitted directly (i.e., through the institution's own employee or captive agent) or through a broker. **(Supplement I comment 4(a)-2 through -4)**
- **Quarterly reporting applies at 60,000 covered loans/applications and kicks in the year after the threshold is crossed.** Mergers that create combined institutions above 60,000 trigger quarterly reporting effective the merger date. **(§1003.5(a)(1)(ii))**

---

## Related Articles

- [[reg-c-coverage-and-exemptions]]
- [[reg-c-data-fields]]
- [[dodd-frank-title-x-cfpb]]
- [[reg-b-equal-credit-opportunity]]
- [[reg-z-truth-in-lending]]
- [[cfpb-framework-overview]]
