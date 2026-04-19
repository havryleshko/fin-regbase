---
title: "Strong Customer Authentication (SCA) — PSRs 2017 and SCA-RTS"
jurisdiction: UK
regulator: FCA
regulation: PSRs 2017 (Reg 100); SCA-RTS (FCA, effective 31 December 2020); EBA Guidelines on SCA and CSC
status: current
effective_date: 2019-09-14
last_updated: 2026-04-16
sources:
  - "FCA Approach Document (Payment Services and Electronic Money) v7, March 2026 — Chapter 20"
tags: [SCA, strong-customer-authentication, SCA-RTS, dynamic-linking, TRA, contactless, exemptions, PSRs, payment-institutions, EMI, ASPSP, PISP, AISP, UK, FCA]
related:
  - summaries/fca-approach-payment-services-electronic-money.md
  - concepts/psr-open-banking-pisp-aisp.md
  - concepts/psr-regulatory-reporting.md
  - concepts/psr-unauthorised-transaction-liability.md
  - concepts/operational-resilience.md
  - concepts/consumer-duty-overview.md
  - concepts/consumer-duty-consumer-support.md
  - concepts/vulnerable-customers.md
---

# Strong Customer Authentication (SCA) — PSRs 2017 and SCA-RTS

SCA has been mandatory for all PSPs subject to the PSRs 2017 (including EMIs providing payment services and RAISPs) since 14 September 2019. The FCA's UK SCA-RTS — which replaced the EU Delegated Regulation on 31 December 2020 — sets out the detailed technical requirements.

> **SCA-RTS scope note:** The SCA-RTS specifies requirements for transaction monitoring, SCA application, SCA exemptions, protection of personalised security credentials (PSCs), and common and secure open standards of communication. EBA Opinions and Q&As on the EU RTS remain relevant as interpretive guidance. **(Approach Document §20.4)**

---

## When SCA Is Required

Under **regulation 100(1) PSRs 2017**, a PSP must apply SCA where a customer:

1. **Accesses their payment account online** — whether directly or through an AISP
2. **Initiates an electronic payment transaction**
3. **Carries out any action through a remote channel that may imply a risk of payment fraud or other abuses**

SCA requirements apply to **both consumers and businesses** (Approach Document §20.10).

**Out of scope:**
- Anonymous payment instruments (certain pre-paid gift cards) **(SCA-RTS Recital 8)**
- Telephone banking where customers contact the bank directly (paper-based instructions, mail orders and telephone orders out of scope of reg 100 PSRs 2017) **(Approach Document §20.12)**
- ATM-initiated payments (not "remote") **(Approach Document §20.35)**
- Merchant-initiated transactions (MIT) executed after a mandate is in place — but the **setup** of the mandate via a remote channel is subject to SCA **(Approach Document §20.9)**

---

## The Three Factor Categories

**Regulation 2 PSRs 2017** defines SCA as authentication based on two or more of the following independent factors:

| Factor | Category | Examples |
|--------|----------|---------|
| Knowledge | Something known only to the customer | Password; PIN |
| Possession | Something held only by the customer | Mobile phone (OTP via SMS or token generator); payment card (with dynamic CVV); app with device binding |
| Inherence | Something inherent to the customer | Fingerprint; retina/iris scan; behavioural biometrics (keystroke dynamics, shopping pattern) |

**Independence requirement:** The breach of one factor must not compromise the reliability of any other factor. **(SCA-RTS Art. 9)** Two factors from the same category (e.g. two knowledge factors) do not satisfy SCA — e.g. a password + PIN combination. **(Approach Document §20.19)**

**Device as possession:** For a device to count as possession, there must be a reliable means to confirm it is in the customer's possession — OTP generation, token generator, or SIM-card-associated OTP. Mobile apps qualify if they include a device-binding process creating a unique connection. **(Approach Document §20.20)**

**Special category data:** Biometric inherence factors may be stored at device level. Behavioural biometrics may also qualify if they prevent unauthorised use. **(Approach Document §20.21)**

---

## Authentication Code Requirements

Under **SCA-RTS Article 4**, when SCA generates an authentication code:

- The code must be accepted **once only**
- No information about any factor can be derived from the code
- Knowledge of previously generated codes cannot enable a new code to be generated
- The code cannot be forged
- Failure message must not disclose **which** factor was incorrect **(SCA-RTS Art. 4(3)(a))**

**Maximum 5 consecutive failed attempts:** After five failures, the PSP must block the relevant access or transaction initiation. A temporary block must be for a defined duration; a permanent block requires advance customer notification and a secure recovery procedure. **(SCA-RTS Art. 4(3)(b); Approach Document §20.32)**

**5-minute inactivity rule:** After a maximum of 5 minutes of inactivity following SCA, the customer must no longer have access to the payment account — SCA must be re-applied. **(SCA-RTS Art. 4(3)(d); Approach Document §20.33)**

---

## Dynamic Linking

Under **regulation 100(2) PSRs 2017** and **SCA-RTS Article 5**, for **electronic remote payment transactions**, the PSP must apply SCA that includes elements which dynamically link the transaction to:

1. A **specific amount**, and
2. A **specific payee**

The authentication code must be **specific to both** the amount and the payee agreed to by the payer at the time of initiating the transaction. Any change to either the amount or the payee **invalidates** the authentication code generated. **(Approach Document §20.34)**

**Scope:** Applies to payment services offered via internet or other at-distance channels, where the functioning does not depend on where the payment initiation device is physically located. Covers online banking transfers, mobile banking transfers, online card payments initiated via merchant website, PIS-initiated payments. **(Approach Document §20.35)**

**Variable amount transactions:** Where the final amount is not known in advance (e.g. online grocery with item substitution, hotel bills, car hire), the authentication code must specify an amount authorised by the customer. If the final amount exceeds the authorised amount by more than 20%, SCA must be re-applied. **(Approach Document §20.37)**

**Batch payments:** For batch remote electronic payments, the authentication code must be specific to the total amount and all specified payees. **(Approach Document §20.39)**

---

## SCA in the PISP and AISP Context

Under **regulation 100(4) PSRs 2017**, an ASPSP must allow a PISP or AISP to rely on the authentication procedures it provides to its customers. **(SCA-RTS Art. 30(1))**

- AISPs and PISPs must be able to rely on **all** authentication procedures the ASPSP offers to customers, without additional unnecessary steps **(Approach Document §20.23)**
- ASPSPs should not require SCA more than **once per session** for a single access of account information or a single payment initiation **(Approach Document §§20.135, 20.146)**
- PISPs and AISPs may have their own credentials for customers to access the PISP/AISP platform, but only ASPSP-issued credentials satisfy SCA for account access **(Approach Document §20.25)**

---

## Exemptions from SCA

**Regulation 100(5) PSRs 2017** permits exemptions where defined conditions are met. Applying an exemption is always at the discretion of the **payer's PSP** — not the payee's PSP — except in limited card payment scenarios. **(Approach Document §20.42–20.44)**

Exemptions are independent of each other. Where multiple exemptions could apply, the PSP may choose which (if any) to apply.

### SCA-RTS Article 10/10A — Payment Account Information Access

**Art. 10 (direct access):** A PSP may allow access to payment account information (account balance or last 90 days of transactions) without SCA, provided the customer last applied SCA no more than **90 days ago**. **(Approach Document §20.45)**

**Art. 10A (AISP access):** Where a customer accesses account information through an AISP, the ASPSP may not apply the exemption on the **first access** — SCA is always required first time. Thereafter the exemption may be applied. **(Approach Document §20.47)**

> The 90-day rule under Art. 10A corresponds to the AISP obligation under Ch 17 to reconfirm the customer's consent to data access every 90 days — see [[psr-open-banking-pisp-aisp]].

### SCA-RTS Article 11 — Contactless Payments at Point of Sale

A PSP may choose not to apply SCA for **low-risk contactless POS transactions**. The PSP may consider individual transaction value, cumulative contactless transaction value, and number of consecutive contactless transactions since last SCA. **(Approach Document §20.49–20.52)**

PSPs using this exemption must comply with Consumer Duty obligations: consider vulnerable customers, offer individual personal limits, communicate changes to customers. **(Approach Document §20.53–20.54)**

### SCA-RTS Article 12 — Unattended Terminals (Transport/Parking)

No SCA required for electronic payment transactions to pay transport fares or parking fees at unattended terminals. **(Approach Document §20.55)**

### SCA-RTS Article 13 — Trusted Beneficiaries

No SCA required where the payer initiates a payment to a payee on their list of trusted beneficiaries, confirmed by the payer. SCA is required to create or amend the trusted beneficiaries list. The list can only be managed through the ASPSP — not through a PISP or AISP. **(Approach Document §20.56–20.57)**

### SCA-RTS Article 14 — Recurring Transactions

SCA is required when a recurring transaction series is **first created or amended**. For subsequent payments in the series (same payee, same amount), SCA is not required. A series created before 14 September 2019 only requires SCA if the payer subsequently amends it. **(Approach Document §20.58)**

**Continuous payment authority (CPA):** SCA required for the first payment only where the payer's PSP initiates it directly or through the payee. **(Approach Document §20.59)**

**Direct debits:** Out of scope of SCA-RTS (purely payee-initiated), unless set up via electronic mandate involving the payer's PSP. **(Approach Document §20.60)**

### SCA-RTS Article 15 — Credit Transfers Between Own Accounts

No SCA required for credit transfers between accounts held by the same natural or legal person at the same ASPSP. **(Approach Document §20.61)**

### SCA-RTS Article 16 — Low-Value Transactions

For low-value remote transactions, the PSP may apply **either** (not both):
- Individual transaction limit of **£25**; or
- Cumulative limit of **£85** or a consecutive transaction count limit

PSPs should decide which measure to apply in all cases, to avoid confusing customers. **(Approach Document §20.62)**

### SCA-RTS Article 17 — Secure Corporate Payment Processes and Protocols

PSPs may choose not to apply SCA for payments initiated by **legal persons** (not consumers) through dedicated corporate payment processes or protocols not available to consumers, where the FCA is satisfied that those processes guarantee at least equivalent levels of security. **(Approach Document §20.63)**

**Application requirements:**
- Payer must be a legal person (incorporated entity, LLP, NHS Trust, corporate cooperative)
- Processes must not be available to consumers
- Firm must submit an assessment to the FCA at least **3 months before** relying on the exemption
- Fraud rates must be monitored at least quarterly; must equal or be below the reference fraud rate for the transaction type in the SCA-RTS Appendix **(Approach Document §20.68–20.69)**
- FCA may request an annual independent audit of the dedicated payment processes **(Approach Document §20.70)**

Examples in scope: proprietary automated host-to-host restricted networks, PKI-based security systems, lodged corporate cards, virtual account number systems in access-controlled purchasing systems. **(Approach Document §20.65)**

### SCA-RTS Article 18 — Transaction Risk Analysis (TRA)

A PSP may choose not to apply SCA for remote electronic payment transactions assessed as **low fraud risk** using real-time transaction risk analysis. **(Approach Document §20.71)**

**Conditions:**
- Real-time analysis considering at minimum: customer's spending patterns, transaction history, location of payer/payee/access device
- Fraud rate must be **at or below the applicable reference fraud rate** in the SCA-RTS Appendix for the exemption threshold value (ETV) used
- Fraud rate recalculated at least every **90 days** (SCA-RTS Art. 19(1))
- Fraud rate calculated at PSP legal entity level, not by merchant or channel

**Approximate ETV tiers (SCA-RTS Appendix):**

| Exemption Threshold Value | Reference Fraud Rate (approx.) |
|--------------------------|-------------------------------|
| Up to £85 | ≤ 0.13% |
| Up to £220 | ≤ 0.06% |
| Up to £440 | ≤ 0.01% |

> These are indicative figures derived from the Approach Document examples. The precise reference rates are set out in the SCA-RTS Appendix.

**Cessation and notification:** Where a PSP's monitored fraud rate **exceeds** the reference rate applicable to an ETV, the PSP must notify the FCA immediately and cease applying the TRA exemption at that ETV until the rate returns to or below the reference rate for at least one quarter. **(SCA-RTS Art. 20; Approach Document §20.80)**

---

## Monitoring Obligations (SCA-RTS Article 21)

PSPs that use any SCA exemption (Arts. 10–18) must record and monitor **at least quarterly** for each transaction type and for remote vs. non-remote:

- Total value of unauthorised or fraudulent payment transactions
- Total value of all payment transactions and resulting fraud rate
- Average transaction value, broken down by SCA-applied and each exemption used
- Number of transactions where each exemption was applied and percentage of total

Results must be available to the FCA on request. **(SCA-RTS Art. 21(2); Approach Document §20.81–20.82)**

---

## Transaction Monitoring (General)

All PSPs must establish **transaction monitoring mechanisms** (SCA-RTS Article 2) to detect unauthorised or fraudulent payment transactions. PSPs should consider adopting a real-time risk analysis approach similar to SCA-RTS Art. 18(2)(c). **(Approach Document §20.6)**

PSPs must periodically test, evaluate, and audit security measures implemented in compliance with the SCA-RTS. The firm's auditor must notify the FCA if it becomes aware of a material contravention of any PSR/EMR requirement. **(SCA-RTS Art. 3; Approach Document §20.7)**

---

## Accessibility and Consumer Duty

PSPs must develop SCA solutions that work for **all consumers**, including those with protected characteristics. It may be necessary to provide different methods of authentication for different customer groups. PSPs must provide a viable means to authenticate customers in areas without mobile phone reception or where customers do not have a smartphone. **(Approach Document §20.22)**

Changes to contactless exemption limits must consider Consumer Duty obligations — vulnerable customers, monitoring of outcomes across different groups. **(Approach Document §20.53–20.54)**

---

## Key Points for Agents

- **SCA is mandatory** for all PSPs under reg 100 PSRs 2017 from 14 September 2019 for online account access, electronic payment initiation, and remote-channel actions implying fraud risk.
- **Three factors:** knowledge, possession, inherence — must use **two from different categories**. Two knowledge factors (e.g. password + PIN) do not satisfy SCA.
- **Dynamic linking** (reg 100(2)) requires the authentication code to be specific to both the amount **and** the payee. Amount change >20% requires re-authentication.
- **9 exemptions** in SCA-RTS Arts. 10–18. Payer's PSP decides whether to apply; payee's PSP cannot override. Exemptions are independent — multiple may apply.
- **TRA exemption (Art. 18):** fraud rate must be at or below the SCA-RTS Appendix reference rate for the ETV used. Recalculate at least every 90 days. Notify FCA and cease immediately if rate exceeded.
- **5 consecutive failures → block. 5 minutes inactivity → session expires.** Failure message must not identify which factor was incorrect.
- **Corporate payment processes (Art. 17):** submit assessment to FCA at least 3 months before use. Monitor fraud quarterly. Legal persons only.
- **Monitoring:** quarterly data on all exemption usage must be maintained and available to FCA on request.
- **Accessibility:** SCA solutions must work for all customers including those with protected characteristics. Consumer Duty applies.

## Related Articles

- [[fca-approach-payment-services-electronic-money]]
- [[psr-open-banking-pisp-aisp]]
- [[psr-regulatory-reporting]]
- [[psr-unauthorised-transaction-liability]]
- [[operational-resilience]]
- [[vulnerable-customers]]
- [[consumer-duty-overview]]
- [[consumer-duty-consumer-support]]
