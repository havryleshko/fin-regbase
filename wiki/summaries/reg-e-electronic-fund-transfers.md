---
title: "Regulation E — Electronic Fund Transfers (12 CFR Part 1005)"
jurisdiction: US
regulator: CFPB
regulation: Electronic Fund Transfer Act (15 USC 1693 et seq.); implemented by 12 CFR Part 1005 (Regulation E)
direction: b2c
status: current
effective_date: 1978-11-10
last_updated: 2026-05-14
sources:
  - "12 CFR Part 1005 (Regulation E) — up to date as of 12 May 2026 (eCFR enhanced display)"
tags: [CFPB, US, Reg-E, EFTA, electronic-fund-transfer, prepaid, overdraft, remittance, debit-card, ACH, b2c, consumer-protection]
related:
  - concepts/reg-e-prepaid-accounts-gift-cards.md
  - concepts/reg-e-remittance-transfers.md
  - concepts/cfpb-framework-overview.md
  - concepts/cfpb-udaap.md
---

# Regulation E — Electronic Fund Transfers (12 CFR Part 1005)

## Document Overview

12 CFR Part 1005 (Regulation E) implements the Electronic Fund Transfer Act (EFTA, 15 USC 1693 et seq.). It is the primary US federal framework governing consumer electronic fund transfers — covering disclosures, error resolution, consumer liability limits, and specific rules for prepaid accounts, overdraft services, and international remittances.

Reg E is administered and enforced by the CFPB for most covered persons. It applies equally to banks and non-banks. A fintech that processes debit card transactions, operates prepaid accounts, or sends money internationally on behalf of consumers is subject to Reg E on the same basis as a bank.

The regulation is structured in two subparts:

| Subpart | Scope |
|---------|-------|
| A — General | Core EFT rules: coverage, consumer liability, disclosures, error resolution, preauthorised transfers, prepaid accounts, gift cards, overdraft opt-in |
| B — Remittance Transfers | International remittance-specific disclosures, error resolution, and cancellation rights (§§1005.30–1005.36) |

**(12 CFR Part 1005 — Table of Contents)**

---

## Coverage

Regulation E applies to **electronic fund transfers** that debit or credit a **consumer's account** held at a **financial institution**. **(§1005.3(a))**

**Key definitions:**

- **Electronic fund transfer:** Any transfer of funds initiated through an electronic terminal, telephone, computer, or magnetic tape that orders, instructs, or authorises a financial institution to debit or credit a consumer's account. Includes point-of-sale transactions, ATM withdrawals, direct deposits, ACH debits, and telephone-initiated transfers.
- **Consumer:** A natural person. Business accounts are not covered.
- **Account:** A demand deposit (checking), savings, or other consumer asset account held at a financial institution. Prepaid accounts (payroll cards, GPR prepaid) are "accounts" for Reg E purposes. **(§1005.2(b))**
- **Financial institution:** A bank, savings association, credit union, or other person that directly or indirectly holds a consumer account or issues an access device and agrees to provide EFT services. **(§1005.2(i))**

**Excluded transactions (§1005.3(c)):**

- Wire transfers governed by Article 4A of the UCC
- Securities and commodities transfers regulated under federal securities law
- Automatic transfers between consumer accounts at the same institution (e.g. sweep accounts), except for certain pre-authorised fund transfers
- Transfers solely for the purpose of repaying a loan

---

## Consumer Liability — Three-Tier Structure (§1005.6)

Consumer liability for unauthorised EFTs is capped at three tiers based on how promptly the consumer reports:

| Tier | Condition | Maximum Liability |
|------|-----------|------------------|
| 1 | Consumer reports within **2 business days** of learning of loss/theft of access device | **$50** |
| 2 | Consumer reports more than 2 business days but within **60 days** after transmittal of the statement showing the unauthorised transfer | **$500** |
| 3 | Consumer fails to report within 60 days of statement transmittal | **Unlimited** — all transfers occurring after the 60-day period |

The financial institution bears the burden of establishing that the transfer was authorised or that the consumer's tier-2/3 liability applies. **(§1005.6(b))**

**Extension for good cause:** If circumstances beyond the consumer's control (illness, travel, etc.) prevented timely notification, the institution must extend the reporting period to a reasonable time. **(§1005.6(b)(4))**

---

## Initial Disclosures (§1005.7)

Before a consumer's first EFT, the financial institution must provide written disclosures covering:

1. Consumer's liability for unauthorised transfers
2. Contact information for reporting lost/stolen access devices or unauthorised transfers
3. Types of EFT services offered and applicable limitations
4. Fees for EFT services
5. Error resolution procedures
6. Confidentiality — circumstances under which account information may be shared with third parties
7. Documentation — receipts and periodic statement rights
8. Preauthorised transfer rules (stop payment, notice of varying amounts)
9. Institution's liability to consumer for failures to complete transfers
10. ATM fees charged by the institution or network

Model clauses are provided in Appendix A-2 to Part 1005.

---

## Periodic Statements and Receipts (§1005.9)

**Terminal receipts:** For each EFT initiated at an electronic terminal, the financial institution or terminal operator must make a receipt available at the time of the transfer. Required content: amount, date, type of transfer, account(s) involved (partially masked), terminal location, and a unique sequence number.

**Periodic statements:** Required for each monthly cycle in which an EFT has occurred; at minimum quarterly for dormant accounts. Required content: amount and date of each transfer, type and account(s) involved, terminal location for terminal-initiated transfers, fees charged, opening and closing balances, and the error resolution notice.

---

## Preauthorised Transfers (§1005.10)

**Written authorisation required:** Preauthorised EFTs from a consumer's account must be authorised in writing, and a copy of the written authorisation must be provided to the consumer. **(§1005.10(b))**

**Stop-payment right:** Consumers may stop payment on preauthorised EFTs by notifying the institution orally or in writing at any time up to **3 business days** before the scheduled transfer. An oral stop order is effective for 14 calendar days; the institution may require written confirmation within 14 days if it so notifies the consumer at the time of the oral notification. **(§1005.10(c))**

**Notice of varying amounts:** If a preauthorised debit will vary from the prior amount, the payee or institution must notify the consumer of the amount and date **at least 10 days** before the transfer (or must notify the consumer of the right to receive such notice and offer the option to receive it only when amounts fall outside a specified range). **(§1005.10(d))**

---

## Error Resolution (§1005.11)

**Triggering window:** A consumer must report an error no later than **60 days** after the institution transmits the periodic statement on which the error first appears. **(§1005.11(b))**

**Investigation timelines:**

| Scenario | Provisional Credit Required | Investigation Deadline |
|----------|---------------------------|----------------------|
| Standard | Credit within **10 business days** if no resolution | **45 business days** total |
| New accounts (open <30 days) | Credit within **20 business days** | **90 business days** |
| Foreign-initiated, POS, or new account transactions | Credit within **10 business days** | **90 business days** |

**Provisional credit rule:** If the institution needs more than 10 business days to investigate, it must provisionally credit the disputed amount within 10 business days (or 20 for new accounts), restore full use of the funds, and complete its investigation within 45 business days (90 for new/foreign/POS). **(§1005.11(c))**

**Notice of results:** The institution must notify the consumer of its determination within 3 business days of completing the investigation. If no error found, the institution must provide a written explanation and, upon request, copies of documents relied upon. **(§1005.11(d))**

---

## Record Retention (§1005.13)

Financial institutions must retain evidence of compliance with Reg E for **not less than 2 years** from the date disclosures were required to be made or the action was required to be taken. **(§1005.13)**

---

## Third-Party Service Providers (§1005.14)

A financial institution that issues an access device in connection with an account held at another institution (e.g. a BaaS fintech issuing a debit card on top of a bank's account) is jointly subject to Reg E. The service-providing institution must comply with all applicable Reg E requirements and is directly liable for violations — it cannot disclaim compliance by pointing to the account-holding bank. **(§1005.14)**

The service provider must provide consumers a disclosure stating that transactions will appear on the statement of the account-holding institution and directing them to contact the service provider for transaction-specific queries. Model language is in Appendix A-4.

---

## Government Benefit Accounts (§1005.15)

EBT cards and other accounts through which government benefits are delivered electronically are "accounts" subject to Reg E, with modifications:

- **Alternative access to account information:** Because government benefit accounts typically do not provide traditional periodic statements, access to 12 months of electronic transaction history and 24 months of written history on request substitutes for periodic statements.
- **Modified error resolution:** The error reporting window runs from the later of: (i) 60 days after the date the consumer electronically accesses the account (where the history reflects the error); or (ii) 60 days after the institution sends the consumer a written transaction history on which the error appears. **(§1005.15(d)–(e))**

---

## ATM Operator Fee Disclosures (§1005.16)

An ATM operator that imposes a fee for a cash withdrawal or a balance inquiry must:

1. Post a notice on or at the ATM that a fee may be imposed.
2. Disclose the amount of the fee on-screen (or on paper if the machine has a printer) **before the consumer is committed** to the transaction.
3. Give the consumer the opportunity to cancel the transaction without charge after the fee is disclosed. **(§1005.16)**

The fee cannot be imposed if these notice requirements are not met.

---

## Overdraft Opt-In (§1005.17)

**Default position:** Financial institutions may not charge a fee for paying an overdraft on an **ATM transaction** or a **one-time debit card transaction** unless the consumer has affirmatively opted in. **(§1005.17(b)(1))**

**Opt-in mechanics:**
- Notice must be provided to the consumer in a **segregated writing** (the model consent form is in Appendix A-9) that contains only the overdraft opt-in information — it cannot be bundled with other account disclosures.
- The notice must describe: what transactions are covered; the fact that the consumer will be charged a fee for each covered overdraft; the amount or range of the fee; and that the consumer may revoke consent at any time.
- The consumer must affirmatively consent in writing or electronically.

**Prohibited conditions:**
- Cannot condition the payment of overdrafts on checks, ACH, or recurring debit transactions on the consumer opting in for ATM/one-time debit card overdrafts.
- Must provide the same account terms, conditions, and features to consumers regardless of whether they opt in.
- Opt-in is **revocable at any time**. **(§1005.17(c))**

---

## Prepaid Accounts (§1005.18)

See [[reg-e-prepaid-accounts-gift-cards]] for full detail. Summary:

- **"Prepaid account"** includes payroll cards, general-purpose reloadable (GPR) prepaid cards, and certain other accounts loaded with funds at the consumer's direction or by an employer/government. **(§1005.2(b)(3))**
- **Two-tier pre-acquisition disclosure:** Before a consumer acquires a prepaid account, the issuer must provide a **short form** (tabular, specific items in prescribed type sizes) and a **long form** (all fees, all conditions). Both must be provided at the same time. **(§1005.18(b))**
- **Short form mandatory items** (at minimum): periodic fee, per-purchase fee, ATM withdrawal fee (in-network and out-of-network), cash reload fee, ATM balance inquiry fee, customer service fee, inactivity fee, and the total number of additional fee types.
- **Long form:** Must include every fee the issuer may charge, in any format that is clear and conspicuous.
- **Payroll card:** Must state that the consumer is not required to accept the payroll card as a condition of employment.
- **FDIC/NCUA insurance disclosure:** Required with prescribed language depending on whether the account is eligible for pass-through insurance and whether verification of consumer identity is required.
- **Unverified accounts:** A financial institution is not required to comply with Reg E liability limits and error resolution requirements until it has completed the consumer identification and verification process for prepaid accounts that are not payroll cards or government benefit accounts. **(§1005.18(e)(3))**

---

## Internet Posting of Prepaid Agreements (§1005.19)

Issuers with **3,000 or more open prepaid accounts** must:

- Submit prepaid account agreements to the CFPB within **30 days** of offering, amending, or ceasing to offer any agreement. **(§1005.19(b)(1))**
- Post and maintain all agreements offered to the general public on the issuer's **publicly available website** in a prominent, readily accessible location.
- For any open account, either post the consumer's specific agreement on the website or provide a copy within **5 business days** of the consumer's request. **(§1005.19(d))**

**De minimis exception:** Issuers with fewer than 3,000 open prepaid accounts are exempt from the submission and posting requirements. **(§1005.19(b)(4))**

---

## Gift Cards and Gift Certificates (§1005.20)

**Dormancy/inactivity fees prohibited** unless all three conditions are met: **(§1005.20(d))**
1. No activity on the card in the **1-year period** ending on the date the fee is imposed.
2. Fee amount, frequency, and inactivity trigger are **clearly and conspicuously disclosed** on the card.
3. No more than **one dormancy/inactivity/service fee** per calendar month.

**Expiration of funds prohibited** unless:
- The issuer has established policies and procedures providing consumers a reasonable opportunity to purchase a replacement card with **at least 5 years** remaining.
- The expiration date for the **underlying funds** is at least the later of: (i) **5 years** after initial issuance or last load; or (ii) the card expiration date. **(§1005.20(e))**
- If the card expires before the funds, the issuer must provide a replacement card **at no charge**.
- Required on-card disclosures: expiration date for funds (or that funds do not expire); toll-free number and website for replacement; statement that card expires but funds do not (if card has shorter life than funds).

**Compliance date:** August 22, 2010 for new cards; modified rules for cards produced before April 1, 2010.

---

## Subpart B — Remittance Transfers

See [[reg-e-remittance-transfers]] for full detail. Summary:

**Coverage:** A "remittance transfer" is any electronic transfer of funds from a consumer (sender) in the US to a designated recipient in a foreign country, provided the transfer exceeds **$15** and is provided in the normal course of business. **(§1005.30(e))**

**Safe harbor:** Persons providing **500 or fewer** remittance transfers in both the previous and current calendar year are not "remittance transfer providers" in the normal course of business. **(§1005.30(f)(2))**

**Pre-payment disclosures (§1005.31(b)(1)):** Required before the sender pays: transfer amount (in recipient currency), fees, taxes, total, exchange rate, amount to be received by designated recipient, covered third-party fees, total to recipient, and a non-covered third-party fee statement if applicable.

**Receipt (§1005.31(b)(2)):** After payment: all pre-payment items plus date funds will be available, recipient information, error resolution and cancellation rights statement, and provider contact details.

**Error resolution (§1005.33):** Sender has **180 days** from the disclosed date of availability to report. Provider must investigate within **90 days** and report results within **3 business days**. Remedies: refund to sender or make available to recipient within **1 business day** of sender's instructions.

**Cancellation right (§1005.34):** Sender may cancel within **30 minutes** of payment if funds have not yet been picked up or deposited. Full refund (including fees and taxes) within **3 business days**.

**Scheduled transfers (§1005.36):** Preauthorised remittance transfers scheduled **5+ business days** in advance must receive both the pre-payment disclosure and a receipt; if estimates were used, an accurate receipt must follow within **1 business day** after the transfer date.

---

## Key Points for Agents

- **Three-tier consumer liability.** Unauthorised EFT liability is capped at $50 (2-day reporting), $500 (60-day reporting), or unlimited (no timely report). The institution bears the burden of proving the tier. **(§1005.6)**
- **Overdraft opt-in is mandatory for ATM and one-time debit card fees.** No fee can be charged for paying an ATM or one-time debit card overdraft unless the consumer affirmatively opted in using the prescribed segregated notice. This applies to banks and fintechs equally. **(§1005.17)**
- **Prepaid accounts are fully in scope.** GPR prepaid cards and payroll cards are "accounts" subject to all Reg E requirements — liability limits, error resolution, initial disclosures, and the two-tier pre-acquisition disclosure requirements. The triggering question is product structure, not the issuer's charter. **(§§1005.2(b)(3); 1005.18)**
- **BaaS fintechs are directly liable.** A fintech that issues a debit card on top of a bank's account is a "financial institution" subject to Reg E directly and cannot disclaim compliance by pointing to the bank. **(§1005.14)**
- **Error resolution has a 45-business-day outer limit (90 for POS/foreign/new accounts).** The institution must extend provisional credit within 10 business days if it cannot resolve within that window. Failure to extend provisional credit timely is itself a Reg E violation. **(§1005.11)**
- **Remittance transfers have a mandatory 30-minute cancellation right.** Any consumer sending a cross-border remittance can cancel within 30 minutes of payment (if funds not yet received). The provider must refund everything — principal, fees, and taxes — within 3 business days. **(§1005.34)**
- **Gift card dormancy fees require one-year inactivity.** A dormancy or inactivity fee cannot be charged unless there has been no activity for 12 months, and only one such fee per calendar month is permitted. Funds cannot expire sooner than 5 years from issuance. **(§1005.20)**
- **Remittance provider safe harbor is 500 transfers.** Below that threshold in both prior and current year, the entity is not a "remittance transfer provider" in the normal course of business and Subpart B does not apply. **(§1005.30(f)(2))**

---

## Related Articles

- [[reg-e-prepaid-accounts-gift-cards]]
- [[reg-e-remittance-transfers]]
- [[cfpb-framework-overview]]
- [[cfpb-udaap]]
