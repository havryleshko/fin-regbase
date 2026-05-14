---
title: "Regulation Z — Truth in Lending (12 CFR Part 1026)"
jurisdiction: US
regulator: CFPB
regulation: Truth in Lending Act (15 USC 1601 et seq.); implemented by 12 CFR Part 1026 (Regulation Z)
direction: b2c
status: current
effective_date: 1969-07-01
last_updated: 2026-05-14
sources:
  - "12 CFR Part 1026 (Regulation Z) — up to date as of 5 May 2026 (eCFR enhanced display)"
tags: [CFPB, US, Reg-Z, TILA, truth-in-lending, open-end, closed-end, credit-card, mortgage, APR, finance-charge, BNPL, b2c, consumer-credit]
related:
  - concepts/reg-z-open-end-credit-disclosures.md
  - concepts/reg-z-closed-end-credit-disclosures.md
  - concepts/cfpb-framework-overview.md
  - concepts/cfpb-udaap.md
---

# Regulation Z — Truth in Lending (12 CFR Part 1026)

## Document Overview

12 CFR Part 1026 (Regulation Z) implements the Truth in Lending Act (TILA, 15 USC 1601 et seq.). It is the primary US federal disclosure standard for consumer credit — requiring creditors to disclose credit terms in a standardised, meaningful form so that consumers can compare the true cost of credit across products and creditors.

Regulation Z is administered and enforced by the CFPB for most covered persons. It applies uniformly to banks and non-banks. A fintech that extends consumer credit is subject to Reg Z on the same basis as a bank offering an identical product.

The regulation is structured as seven subparts (A–G), each addressing a distinct category of product or conduct:

| Subpart | Scope |
|---------|-------|
| A — General | Definitions, coverage, exempt transactions, finance charge, APR calculation |
| B — Open-End Credit | Account-opening disclosures, periodic statements, change-in-terms notices; applies to credit cards, HELOCs, and other revolving credit |
| C — Closed-End Credit | Pre-consummation disclosures (the "TILA box"), right of rescission, mortgage-specific timing; applies to installment loans, auto loans, personal loans, BNPL |
| D — Miscellaneous | Record retention, oral disclosures, language requirements, state exemptions |
| E — Mortgage Disclosures | High-cost mortgages (HOEPA, §1026.32), higher-priced mortgages (§1026.35), Loan Estimate (§1026.37), Closing Disclosure (§1026.38), loan originator requirements (§1026.36) |
| F — Private Education Loans | Special disclosure timing and content for private student loans |
| G — Credit Card/Student Open-End | Ability to pay (§1026.51), fee limitations (§1026.52), payment allocation (§1026.53), rate increase restrictions (§1026.55) |

**(12 CFR Part 1026 — Table of Contents)**

---

## Coverage — Four Conditions for Reg Z to Apply

Regulation Z covers credit that satisfies all four of the following conditions simultaneously **(§1026.1(c)(1))**:

1. **Offered to a consumer** — a natural person; not a business entity.
2. **Regularly extended** — the creditor must extend credit more than **25 times per year** (or more than **5 times per year** for dwelling-secured credit) to qualify as a creditor subject to the regulation. **(§1026.2(a)(17)(v))**
3. **Subject to a finance charge OR payable in more than four installments** — this is an OR, not an AND. A product with no interest and no fees is still covered if it is structured as more than four periodic payments. **(§1026.1(c)(1)(iii))**
4. **Primarily for personal, family, or household purposes** — credit extended primarily for business, commercial, or agricultural purposes is exempt.

The third condition (the "four installments" prong) is the primary Reg Z hook for buy-now-pay-later (BNPL) products: a 0% interest BNPL product payable in four or more instalments is subject to Reg Z even if no finance charge is imposed.

---

## Exempt Transactions

The following categories of credit are exempt from Reg Z **(§1026.3)**:

- **Business/commercial/agricultural credit** — credit extended primarily for non-consumer purposes.
- **Credit over the threshold amount** — consumer credit above the annually-adjusted threshold (approximately $69,500 for 2026), **unless** the credit is secured by real property or is a private education loan. Those remain covered regardless of amount. **(§1026.3(b))**
- **Public utility credit** — charges for utility services regulated by a government body.
- **Securities and commodities accounts** — accounts regulated under the Securities Exchange Act.
- **Employer/government employee benefit plans** — certain retirement plan loans.

---

## Key Definitions

**Finance charge (§1026.4):** Any charge imposed directly or indirectly as an incident to or condition of the extension of credit. The finance charge is the dollar amount the credit costs the consumer. Inclusions: interest, transaction fees, service charges, loan fees, finder's fees, required credit insurance premiums, required third-party fees. Key exclusions:
- Application fees charged to **all** applicants (whether or not credit is extended) — the fee must genuinely apply regardless of outcome
- Late/default charges
- Seller's points
- Bona fide and reasonable third-party real estate closing fees

**Annual percentage rate (APR):** The cost of credit expressed as a yearly rate, calculated using either the actuarial method or the US Rule method, per appendix J. Accuracy tolerance: 1/8 of 1 percentage point for regular transactions; 1/4 of 1 percentage point for irregular transactions. **(§1026.22(a))**

**Open-end credit (§1026.2(a)(20)):** A credit plan in which (i) the creditor reasonably contemplates repeated transactions, (ii) the creditor may impose a finance charge from time to time on an outstanding balance, and (iii) the amount of credit extended may be increased up to a pre-set limit as the outstanding balance is repaid. Credit cards, HELOCs, and revolving lines of credit are open-end.

**Closed-end credit:** Any credit that is not open-end. Installment loans, auto loans, personal loans, and BNPL products are closed-end.

**Consummation (§1026.2(a)(13)):** The time at which the consumer becomes contractually obligated on a credit transaction. For closed-end credit, this is when the consumer signs the credit agreement. Pre-consummation disclosures for closed-end credit must be delivered before this point.

---

## Two-Track Disclosure Structure

Regulation Z operates two entirely separate disclosure frameworks depending on whether the product is open-end or closed-end. Product classification is not optional — it is determined by the structure of the credit, and it drives the entire compliance framework:

| Feature | Open-End (Subpart B) | Closed-End (Subpart C) |
|---------|---------------------|----------------------|
| Primary disclosure document | Account-opening disclosure (Schumer Box for credit cards) | TILA box (pre-consummation) |
| Ongoing disclosure | Periodic statement | Right of rescission notice (dwelling-secured); ARM adjustment notices |
| Key timing obligation | Account opening; 45-day notice before material changes | Before consummation; 3 business days for mortgage Loan Estimate |
| APR disclosure type | Periodic rate expressed as APR | APR as yearly rate for the specific transaction |

---

## Subpart A — Finance Charge and APR Rules

**Finance charge computation:** The finance charge must be stated as a dollar amount. It includes all charges that are imposed as a condition of the credit, whether paid to the creditor or to a third party. The dollar amount and the APR are the two disclosures that must be more conspicuous than any other disclosure in a closed-end transaction. **(§1026.17(a)(2); §1026.18(d)(e))**

**APR computation tools:** The CFPB publishes Regulation Z Annual Percentage Rate Tables (Volumes I and II) for computing APRs. Creditors may also use any computation tool that produces the same result as appendix J. **(§1026.22(b))**

---

## Subpart B — Open-End Credit

See [[reg-z-open-end-credit-disclosures]] for full detail. Summary:

- **Account-opening disclosures (§1026.6):** Creditors must provide disclosures before the consumer becomes obligated. For credit cards and non-home-secured plans, these must be in a **tabular format** (the Schumer Box) with APR in **at least 16-point type**. Required content: all APRs (purchase, cash advance, balance transfer, penalty), fee schedule, grace period, balance computation method.
- **Periodic statements (§1026.7):** Required for each billing cycle with a balance. For credit cards: mandatory **minimum payment warning** (exact statutory language), 36-month payoff estimate, due date on the front page.
- **Change-in-terms (§1026.9):** Significant changes to account terms require **45 days' advance written notice**. Credit card holders have the right to reject the change (close the account and pay at existing terms).

---

## Subpart C — Closed-End Credit

See [[reg-z-closed-end-credit-disclosures]] for full detail. Summary:

- **Form and timing (§1026.17):** Disclosures must be clear and conspicuous, in writing, in a form the consumer can keep, and delivered **before consummation**.
- **Content (§1026.18):** The TILA box — 20 items including creditor identity, amount financed, finance charge (dollar), APR, variable-rate disclosures, payment schedule, total of payments, prepayment terms, late payment charge, and security interest.
- **Right of rescission (§1026.23):** Applies to non-purchase-money transactions secured by the consumer's **principal dwelling**. Consumer has 3 business days to rescind after consummation, delivery of the rescission notice, or delivery of all material disclosures — whichever is last. If the required notice or material disclosures are not delivered, the right extends to **3 years** after consummation.
- **Mortgage timing (§1026.19):** Loan Estimate (§1026.37) within 3 business days of application; Closing Disclosure (§1026.38) no later than 3 business days before consummation. No fees may be imposed before the consumer receives the Loan Estimate and indicates intent to proceed (credit report fee excepted).

---

## Subpart E — Mortgage-Specific Standards

**High-cost mortgages — HOEPA (§1026.32):** Mortgages that exceed specified APR and fee triggers are subject to enhanced prohibitions: no balloon payments, no negative amortisation, no advance payments, no increased rates after default, no modification fees, capped late fees (4%), mandatory pre-loan counselling by an independent HUD-approved counsellor. **(§§1026.32–1026.34)**

**Higher-priced mortgage loans (§1026.35):** Mortgages with APR exceeding the average prime offer rate by 1.5pp (first lien conforming), 2.5pp (first lien jumbo), or 3.5pp (subordinate lien) must: (i) establish an escrow account for taxes and insurance before consummation; (ii) obtain an independent written appraisal with interior inspection before extending credit. Second appraisal required if property was sold within 180 days and the price increase exceeds 10%/20%. **(§1026.35(b)(c))**

**Loan originator compensation (§1026.36):** Loan originator compensation cannot be based on loan terms (other than loan amount). Steering to products that pay higher compensation is prohibited. Dual compensation (from both consumer and creditor) is prohibited. **(§1026.36(d))**

---

## Subpart G — Credit Card Special Rules

**Ability to pay (§1026.51):** Before opening a credit card account or increasing a credit limit, the card issuer must consider the consumer's ability to make the minimum required payments. Reliance on stated income is permitted with reasonable steps to verify; reliance on a spouse/partner's income is permitted with reasonable ability to access.

**Fee limitations (§1026.52):** Fees charged in the first year of a credit card account (excluding penalty fees) cannot exceed 25% of the initial credit limit.

**Payment allocation (§1026.53):** Amounts paid above the minimum payment must be allocated to the **highest APR balance** first. (Exception: during the last two billing cycles, the issuer may allocate to balances with deferred interest features to avoid the consumer being hit by retroactive deferred-interest charges.)

**Rate increase restrictions (§1026.55):** An issuer generally cannot increase the APR on an existing balance except in four permitted circumstances: the end of a promotional rate, a variable-rate change tied to an index, a delinquency of 60+ days, or the completion of a workout arrangement.

---

## Civil Liability

TILA violations expose creditors to civil liability under 15 USC 1640:
- **Actual damages** sustained by the consumer.
- **Statutory damages**: twice the finance charge for closed-end violations (min $200, max $2,000); for open-end violations, the greater of actual damages or $500 (up to $5,000 for class actions where each member does not need to prove damages individually).
- **Attorneys' fees and costs** for successful consumer claims.
- Statute of limitations: **1 year** for damages claims; **3 years** for rescission claims (extended rescission right if notice/disclosures not delivered).

The CFPB has civil enforcement authority and can also seek restitution, disgorgement, and civil monetary penalties for Reg Z violations under Dodd-Frank §1055 (12 USC 5565). **(15 USC 1640; 12 USC 5565)**

---

## Key Points for Agents

- **BNPL is in scope via the four-installments prong.** A 0% interest product payable in four or more instalments is covered by Reg Z — no finance charge is required for coverage. **(§1026.1(c)(1)(iii))**
- **Finance charge is broader than "interest."** Any fee required as a condition of the extension of credit — including required insurance, required third-party fees — is a finance charge. Application fees charged to all applicants (approved or rejected) are excluded, but fees charged only to approved applicants are not. **(§1026.4)**
- **Two entirely separate frameworks for open-end and closed-end.** Product classification drives everything: disclosure format, content, timing, and ongoing obligations. Misclassifying a product (e.g., treating a BNPL instalment product as open-end) exposes the creditor to the wrong disclosure framework and potential violations.
- **"Creditor" has a volume threshold.** Only entities that regularly extend credit (25+ times/year; 5+ times for dwelling-secured) are Reg Z creditors. Below-threshold entities do not have Reg Z disclosure obligations — but remain subject to CFPB UDAAP authority. **(§1026.2(a)(17)(v))**
- **Finance charge and APR must be the most conspicuous disclosures.** For closed-end credit, these two items must be more conspicuous (typically bolder or larger type) than all other required disclosures. For credit cards, APR must be in at least 16-point type in the account-opening table. **(§§1026.17(a)(2); 1026.6(b)(1)(i))**
- **The right of rescission extends to 3 years if notice is defective.** Failure to deliver the right of rescission notice or material disclosures does not merely create a violation — it extends the consumer's rescission right from 3 days to 3 years after consummation. For non-purchase-money dwelling-secured credit, this is a serious long-tail liability. **(§1026.23(a)(3))**
- **Mortgage fee restriction is effectively a timing gate.** For RESPA-covered mortgages, no fees other than a bona fide credit report fee may be collected before the consumer receives the Loan Estimate and indicates intent to proceed. Collecting an application fee or rate lock fee before this point violates §1026.19(e)(2)(i).
- **Business credit is fully exempt; high-value consumer credit is mostly exempt.** B2B lending products are outside Reg Z entirely. Consumer credit above ~$69,500 is exempt unless secured by real property or a private education loan. **(§1026.3(a)(b))**

---

## Related Articles

- [[reg-z-open-end-credit-disclosures]]
- [[reg-z-closed-end-credit-disclosures]]
- [[cfpb-framework-overview]]
- [[cfpb-udaap]]
