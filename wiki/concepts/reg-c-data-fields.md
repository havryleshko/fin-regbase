---
title: "Regulation C — Data Collection, ULI, Multi-Institution Reporting, and APOR Spread (§1003.4)"
jurisdiction: US
regulator: CFPB
regulation: "Home Mortgage Disclosure Act (HMDA), 12 USC 2801 et seq.; implemented by 12 CFR Part 1003 §1003.4"
direction: b2c
status: current
effective_date: 2018-01-01
last_updated: 2026-05-18
sources:
  - "12 CFR Part 1003 (up to date as of 5-14-2026) — §1003.4 and Supplement I, Appendix C"
tags: [HMDA, Regulation-C, US, CFPB, mortgage, ULI, APOR, rate-spread, AUS, data-fields, multi-institution, LAR, b2c]
related:
  - summaries/reg-c-hmda.md
  - concepts/reg-c-coverage-and-exemptions.md
  - summaries/reg-z-truth-in-lending.md
---

# Regulation C — Data Collection, ULI, Multi-Institution Reporting, and APOR Spread

## Overview

Section 1003.4 is the operational core of Regulation C — it specifies what data must be collected for each covered loan and application, how to construct the Universal Loan Identifier, which institution reports in transactions involving multiple parties, and how to calculate the rate spread. This article covers the mechanics of the four most complex and compliance-sensitive aspects of §1003.4.

---

## Universal Loan Identifier (ULI) — §1003.4(a)(1); Appendix C

### Structure

Every covered loan and application must be assigned a **Universal Loan Identifier (ULI)** with the following structure:

**ULI = [LEI] + [Loan Identifier] + [Check Digit]**

- **LEI (Legal Entity Identifier):** The institution's LEI as issued by a utility endorsed by the LEI Regulatory Oversight Committee or the Global LEI Foundation (GLEIF). The LEI is a 20-character alphanumeric identifier. **(§1003.4(a)(1)(i)(A))**
- **Loan identifier:** Up to **23 additional characters** (letters, numerals, or a combination) assigned by the institution to identify the specific covered loan or application. Must be unique within the institution and must not include any information that could directly identify the applicant or borrower (no name, date of birth, Social Security number, driver's licence number, alien registration number, government passport number, or taxpayer ID). **(§1003.4(a)(1)(i)(B))**
- **Check digit:** A **two-character check digit** appended to the rightmost position. Calculated using the ISO/IEC 7064 MOD 97-10 algorithm as described in Appendix C to Part 1003. **(§1003.4(a)(1)(i)(C); Appendix C)**

### Generating the Check Digit (Appendix C)

1. Replace each alphabetic character in the combined string (LEI + loan identifier) with its numeric equivalent (A=10, B=11, ... Z=35)
2. Append "00" to the rightmost positions
3. Apply mod(n, 97) where n is the number from step 2
4. Subtract the result from 98; if the result is one digit, add a leading zero
5. Append the two-digit result to the rightmost position of the original combined string

**Example:** LEI = 10Bx939c5543TqA1144M; Loan identifier = 999143X → Combined = 10Bx939c5543TqA1144M999143X → ULI = 10Bx939c5543TqA1144M999143X**38**

### Uniqueness Requirements

- A financial institution must assign only **one ULI** to any particular covered loan or application
- A ULI must not be reused for a different loan or application
- A financial institution with multiple branches must ensure no branch uses the same ULI for multiple loans
- Refinancings and applications for refinancing reported in the same LAR as the loan being refinanced must be assigned a **different ULI** than the original loan **(Supplement I comment 4(a)(1)(i)-1)**

### Purchased Loans — Carry-Over ULI

A financial institution that purchases a covered loan that was previously assigned a ULI must **use the ULI that was previously assigned** — it may not generate a new ULI. This ensures the same loan can be tracked across purchases and transfers. **(§1003.4(a)(1)(i)(D); Supplement I comment 4(a)(1)(i)-3)**

### Re-reported Applications

If, within the same calendar year, a financial institution reports a denial and then receives a reconsideration of the same application that results in an origination, it may report the origination using the same ULI previously reported for the denial. **(Supplement I comment 4(a)(1)(i)-4)**

### NULI for Partially Exempt Transactions

A partially exempt institution that does not report a ULI must assign and report a **Non-Universal Loan Identifier (NULI)** of up to **22 characters** — unique within the institution's annual LAR, and containing no PII. **(§1003.3(d)(5); Supplement I comment 3(d)(5)-1 through -2)**

---

## Multi-Institution Transactions — Who Reports (§1003.4(a); Supplement I comment 4(a)-2 through -4)

### The Credit Decision Rule

Where more than one financial institution is involved in a transaction, **only one institution reports the origination** — the institution that made the credit decision approving the application before closing or account opening. **(Supplement I comment 4(a)-2)**

The institution that made the credit decision reports all data required by §1003.4(a) as if it were the originator, even if:
- The covered loan was not made in its own name
- The covered loan was not initially payable to it
- Another institution ultimately purchases the loan after closing

### Scenario Examples (Supplement I comment 4(a)-3)

| Scenario | Who reports |
|----------|-------------|
| Institution A receives application, forwards to B; B makes credit decision (as principal, not A's agent); B approves and closes; B sells to A | B reports origination; A reports purchase |
| Institution A receives application, forwards to B (A is B's agent); B makes credit decision; loan closes in A's name; B purchases after closing | B reports origination; A reports nothing |
| Institution A receives application, approves, closes in B's name (B is A's agent); A never approves or closes | A reports origination |
| Institution A receives application, forwards to B and C; D makes credit decision acting as C's agent; loan closes | C reports origination (D is C's agent) |
| Institution A uses underwriting criteria of a third party (e.g., Fannie Mae, Freddie Mac); third party purchases and reviews but does not make credit decision | A reports origination |

### Agents vs. Principals

The distinction between an agent relationship and a correspondent/principal relationship is determined by state law and the terms of the arrangement. An institution acts as agent when it is acting on behalf of another institution in making a credit decision — not when it is making its own credit decision that another institution then chooses to adopt. **(Supplement I comment 4(a)-4)**

### Application Channel Reporting (§1003.4(a)(33))

The institution reporting the origination must indicate:
- Whether the applicant submitted the application **directly** to the financial institution; and
- Whether the obligation arising from the covered loan **was or would have been initially payable** to the financial institution

An application submitted through a broker or correspondent that forwarded the application to the institution is **not** a direct submission. A loan closed in the name of a correspondent lender that the institution purchased after closing was **not** initially payable to the reporting institution. **(Supplement I comment 4(a)(33)(i)-1 through -3)**

---

## Rate Spread — APOR Comparison (§1003.4(a)(12))

### What Must Be Reported

For covered loans and applications (except purchased loans, reverse mortgages, and certain other excluded categories) that are approved but not accepted, or that result in originations and are subject to Regulation Z (12 CFR part 1026), the institution must report the **difference between the covered loan's annual percentage rate (APR) and the average prime offer rate (APOR)** for a comparable transaction as of the date the interest rate was set. **(§1003.4(a)(12))**

### Average Prime Offer Rate (APOR) Defined

The APOR is an annual percentage rate derived from average interest rates and other loan pricing terms currently offered to borrowers by a set of creditors for mortgage loans that have low-risk pricing characteristics. The Bureau calculates the APOR using creditor data by transaction type and publishes APOR tables at least weekly on the FFIEC website and the Bureau's website. **(Supplement I comment 4(a)(12)-1)**

### Comparable Transaction

The rate spread is calculated by reference to a **comparable transaction** — a transaction with the same amortization type (fixed or variable) and loan term as the covered loan. **(§1003.4(a)(12))**

- **Fixed-rate loans:** The comparable transaction's term is the loan's maturity (e.g., a 30-year fixed loan is compared to the 30-year fixed APOR)
- **Variable-rate loans:** The comparable transaction's term is the initial fixed-rate period (e.g., a 5/1 ARM is compared to the 5-year fixed APOR)
- **Amortization period longer than loan term:** If the loan has a balloon payment, the institution uses the loan term (not the amortization period) to identify the comparable transaction **(Supplement I comment 4(a)(12)-4)**

### Rate-Set Date

The rate spread is calculated as of the **rate-set date** — the date on which the interest rate was set for the final time before final action is taken.

- If a rate-lock agreement exists: the rate-set date is the date the lock is executed
- If the borrower exercises a float-down option: the rate-set date is the date the institution sets the rate for the final time before final action
- For brokered loans: the rate-set date is the last date the financial institution set the rate with the borrower (not the date the broker set the rate with the borrower) **(Supplement I comment 4(a)(12)-5)**

### When Rate Spread Is Not Applicable

Rate spread need not be reported for:
- Purchased covered loans
- Reverse mortgages
- Applications that were denied, withdrawn, or closed for incompleteness
- Applications that were approved but not accepted (institution reports the applicable rate at the time the application was approved)
- Partially exempt transactions under §1003.3(d) **(§1003.4(a)(12))**

---

## Automated Underwriting System (AUS) Reporting (§1003.4(a)(35))

### What Must Be Reported

For covered loans and applications not subject to the partial exemption, the institution must report the **name of the AUS** used to evaluate the application and the **result generated by that AUS**. **(§1003.4(a)(35))**

### AUS Definition

An AUS for HMDA purposes is an **electronic tool developed by a securitizer, Federal government insurer, or Federal government guarantor** of closed-end mortgage loans or open-end lines of credit that provides a result regarding the credit risk of the applicant and whether the covered loan is eligible to be originated, purchased, insured, or guaranteed by that securitizer, Federal government insurer, or guarantor. **(§1003.4(a)(35)(ii))**

**Key distinction:** A proprietary credit scoring tool or underwriting model that was not developed by a securitizer or government agency is not an AUS for HMDA purposes — even if it generates a result about creditworthiness. An institution that uses only such a proprietary tool and does not use an AUS as defined reports "not applicable." **(Supplement I comment 4(a)(35)-2)**

### Multiple AUS Results

When an institution uses more than one AUS to evaluate an application and obtains multiple results, the institution reports based on the following priority hierarchy:
1. If one AUS result corresponds to the loan type being reported (FHA, VA, conventional), report that AUS name and result
2. If one AUS result corresponds to the purchaser, insurer, or guarantor (if any), report that AUS name and result
3. If neither of the above principles applies, report the AUS result generated closest in time to the credit decision **(Supplement I comment 4(a)(35)-3)**

An institution may report no more than **five AUS names and five results** per covered loan or application. If more than five AUS results are obtained, the institution chooses five using the priority principles above. **(Supplement I comment 4(a)(35)-3(iv))**

---

## Credit Score Reporting (§1003.4(a)(15))

### What Must Be Reported

For covered loans and applications (except purchased covered loans and partial exemptions), the institution must report the **credit score or scores relied on in making the credit decision** and **the name and version of the scoring model** used to generate each credit score. **(§1003.4(a)(15))**

"Relied on" means the credit score was a factor in the credit decision — even if it was one of multiple factors. An institution has relied on a credit score even if it denies the application because of other underwriting requirements, provided the credit score was factored in. **(Supplement I comment 4(a)(15)-1)**

### Multiple Credit Scores — Which to Report

- If an institution obtains multiple scores for an applicant but relies on only one (e.g., the lowest, highest, most recent, or average), it reports that one score and the scoring model
- If an institution obtains multiple scores and relies on a composite score, it reports the composite score and the scoring model used to derive it
- If an institution considers each score individually (e.g., relies on both the applicant's and co-applicant's scores), it reports the score for the applicant and, separately, the score for the co-applicant **(Supplement I comment 4(a)(15)-3)**

---

## Quarterly Recording of Data (§1003.4(f))

Data collected pursuant to §1003.4 must be recorded on the LAR **within 30 calendar days** after the end of the calendar quarter in which final action is taken. Final action includes: origination, purchase, denial, withdrawal, closure for incompleteness, approval but not accepted, preapproval denial, and preapproval approval but not accepted. **(§1003.4(f))**

An institution is not required to maintain a separate quarterly LAR — it may record data on a single LAR or separately for different branches or loan categories, as long as the information can be made available to the regulatory agency in a timely manner. **(Supplement I comment 4(f)-3)**

---

## Key Points for Agents

- **The ULI must begin with the institution's LEI.** An institution without an LEI cannot construct a compliant ULI — obtaining an LEI from a GLEIF-endorsed utility is a prerequisite for HMDA compliance for full reporters. **(§1003.4(a)(1)(i)(A))**
- **Purchased loans carry the original ULI — no new ULI may be generated.** A loan servicer or purchaser that creates a new ULI for a purchased loan is in violation. The carry-over requirement enables cross-institution loan tracking. **(§1003.4(a)(1)(i)(D))**
- **In broker/wholesale channels, the institution making the credit decision is the reporting institution — not the institution that took the application.** The application channel field then requires disclosure of whether the application came directly or through a broker. An application forwarded by a broker is not a direct submission. **(Supplement I comment 4(a)-2 through -3)**
- **Rate spread is calculated as of the rate-set date, not the closing date.** For loans with rate locks, the rate-set date is the date the lock agreement was executed. For brokered loans, it is the date the institution (not the broker) set the rate. **(Supplement I comment 4(a)(12)-5)**
- **A proprietary credit model that is not developed by a securitizer or government agency is not an AUS for HMDA purposes.** If a lender uses only an internally-developed underwriting model, it reports AUS as "not applicable" — not the name of its proprietary model. **(Supplement I comment 4(a)(35)-2)**

---

## Related Articles

- [[reg-c-hmda]]
- [[reg-c-coverage-and-exemptions]]
- [[reg-z-truth-in-lending]]
