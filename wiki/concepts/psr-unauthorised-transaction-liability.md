---
title: "Unauthorised and Incorrectly Executed Transactions — PSRs 2017 (Ch 8 Conduct)"
jurisdiction: UK
regulator: FCA
regulation: PSRs 2017 (Regs 67–96); FCA Approach Document Ch. 8
status: current
effective_date: 2018-01-13
last_updated: 2026-04-16
sources:
  - "FCA Approach Document (Payment Services and Electronic Money) v7, March 2026 — Chapter 8"
tags: [unauthorised-transactions, liability, fraud-delay, refund, PISP, PSRs, payment-services, conduct, UK, FCA]
related:
  - summaries/fca-approach-payment-services-electronic-money.md
  - concepts/psr-sca-authentication.md
  - concepts/psr-open-banking-pisp-aisp.md
  - concepts/psr-regulatory-reporting.md
  - concepts/consumer-duty-consumer-support.md
  - concepts/fos-eligible-complainants.md
  - summaries/disp2-fos-jurisdiction.md
---

# Unauthorised and Incorrectly Executed Transactions — PSRs 2017 (Ch 8 Conduct)

Chapter 8 of the FCA Approach Document sets out the conduct obligations PSPs owe to payment service users (PSUs) in the execution and protection of payment transactions. These rules govern the allocation of liability for unauthorised transactions, the refund obligation, the fraud delay mechanism, and execution liability for incorrect transactions.

> **Non-waivability:** These rights apply to consumers, micro-enterprises, and charities. For other PSUs (commercial customers), the parties may contract out of some provisions. PSPs cannot restrict these rights for qualifying PSUs. **(PSRs 2017 Reg 61)**

---

## Consent and Authorisation

A payment transaction is authorised only if the payer has given **consent** in the form agreed between the payer and their PSP (the "framework contract"). **(PSRs 2017 Reg 67)**

**Consent withdrawal:** A payer may withdraw consent for a payment transaction up until the point at which it becomes irrevocable. For a series of transactions, consent may be withdrawn for future transactions in the series — the PSP must stop applying the authority to future transactions from the point at which it receives notice of withdrawal.

**Consent given to PISP:** Consent given to a PISP to initiate a payment is valid consent to the ASPSP — the ASPSP cannot require additional consent directly from the customer. **(PSRs 2017 Reg 67(2)(c))**

---

## Unauthorised Transactions — the Refund Obligation

### Immediate Refund

Where a payment transaction was **not authorised** by the payer, the payer's PSP must:

1. **Immediately refund** the amount of the unauthorised transaction, and
2. **Restore the account** to the position it would have been in had the unauthorised transaction not taken place

The refund must be made **no later than the end of the next business day** after the payer notifies the PSP of the unauthorised transaction — unless the PSP applies the fraud delay mechanism (see below). **(PSRs 2017 Reg 76; Approach Document §8)**

Interest, charges, and other adverse consequences must also be reversed.

### 13-Month Notification Limit

A payer must notify their PSP of an unauthorised transaction **without undue delay** and **no later than 13 months** after the debit date. Failure to notify within this period extinguishes the right to a refund. **(PSRs 2017 Reg 74)**

### Burden of Proof

Where a PSU claims a transaction was unauthorised, the **burden of proof is on the PSP** to demonstrate that:
- The transaction was authenticated and correctly recorded and processed, and
- The transaction was not affected by a technical failure or other deficiency of the PSP

Authentication records alone are **not sufficient** to prove a transaction was authorised — a PSP must show that the payer themselves authorised the transaction, not merely that authentication was applied. **(PSRs 2017 Reg 72; Approach Document §8)**

---

## Customer Liability for Unauthorised Transactions

| Scenario | Customer Liability |
|---------|-------------------|
| **Unauthorised transaction — no fault** (e.g. lost card not yet notified) | Up to **£35** (excess/deductible) |
| **Gross negligence** (e.g. writing PIN on card, sharing credentials) | **Full amount** of the transaction |
| **Fraud by the payer** | **Full amount** — PSP has no refund obligation |
| **PSP failure to implement SCA** | **PSP bears full liability** — customer not liable regardless of negligence, unless customer committed fraud |
| **Transaction occurred after the customer notified PSP of loss/theft** | **No customer liability** |

> **SCA and liability shift:** Where a PSP did not apply SCA to a transaction, and the lack of SCA contributed to the unauthorised transaction, the PSP cannot rely on the customer's negligence to reduce its liability. This creates a strong incentive to apply SCA. **(PSRs 2017 Reg 77; Approach Document §8.223)**

---

## Fraud Delay Mechanism

The PSPs 2017 (as amended) include a mechanism allowing PSPs to delay the refund by up to **4 business days** where the PSP has **objectively reasonable grounds** to suspect fraud by the payer. **(PSRs 2017 Regs 86(2A)–(2D))**

**Conditions for delay:**
1. The grounds for suspicion must be **objective** and **reasonable** — not merely a general policy of delaying all disputed transactions
2. The PSP must **notify the customer** of the delay and the reason at the time the refund is withheld
3. The PSP must **notify the FCA** of the delay

If after the 4-business-day period the PSP cannot substantiate fraud, the refund must be made immediately. The delay does not extend the total refund obligation — it is a limited exception, not a general discretion to withhold refunds pending investigation.

---

## PISP Liability Chain

Where an **unauthorised transaction was initiated by a PISP**, the following applies:

1. The **ASPSP** bears liability to the payer — the payer's claim is against the ASPSP, not the PISP
2. The ASPSP must **immediately reimburse the payer**
3. The ASPSP may then pursue a claim against the **PISP** where the unauthorised transaction was caused by the PISP (e.g. fraudulent PISP behaviour, security failure on the PISP's side)

The PISP bears the financial risk for unauthorised transactions it caused; the ASPSP is the interface with the customer. **(PSRs 2017 Reg 78; Approach Document §8)**

---

## Execution Liability — Incorrectly Executed Transactions

### Payer's PSP Liability

Where the payer's PSP is responsible for a failed, defective, or late payment, the PSP must:

1. **Immediately refund** the amount of the transaction and any charges/interest, or
2. Make efforts to **trace** the payment and notify the payer of the outcome

If the payer provided the correct **unique identifier** (e.g. sort code and account number) and the payment was sent to the wrong account due to PSP error, the PSP is liable. **(PSRs 2017 Reg 91)**

### Incorrect Unique Identifier Provided by Customer

Where the payer provided an **incorrect unique identifier** and the payment went to the wrong payee, the PSP is **not liable** — but must:

1. Make **reasonable efforts to recover the funds**, and
2. Notify the payer of those efforts and the outcome

If recovery is not possible, the PSP must provide the payer with the information necessary to bring a legal claim. **(PSRs 2017 Reg 91(5); Approach Document §8)**

### Payee's PSP Liability

Where the failure is at the **payee's PSP** (e.g. failure to credit the payee's account), the payee's PSP is liable to the payee. The payee's PSP must immediately make the funds available and backdate the credit. **(PSRs 2017 Reg 93)**

---

## Value Dates

**Credit value date:** The payee's account must be credited with a value date **no later than the business day on which the amount is credited** to the payee's PSP. The value date determines when interest starts running and when the funds are available.

**Debit value date:** The payer's account may be debited with a value date no earlier than the point at which the payment amount is debited. **(PSRs 2017 Regs 87–90)**

---

## Key Points for Agents

- **Immediate refund** is the default rule for unauthorised transactions — end of next business day at the latest. This obligation cannot be contracted out of for consumers, micro-enterprises, and charities.
- **Burden of proof is on the PSP**, not the payer. Authentication records alone do not prove authorisation.
- **£35 cap** applies to customer negligence (not gross negligence or fraud). If the PSP failed to apply SCA, the PSP bears the full loss regardless.
- **Fraud delay mechanism:** PSP may delay refund up to **4 business days** where it has objectively reasonable grounds to suspect payer fraud. Must notify both customer and FCA at time of delay.
- **13-month window:** Payer must notify within 13 months of the debit date to preserve the refund right.
- **PISP liability chain:** ASPSP refunds customer immediately; ASPSP then claims from PISP if PISP caused the loss.
- **Incorrect unique identifier:** PSP not liable but must attempt recovery and provide payer with legal claim information.

## Related Articles

- [[fca-approach-payment-services-electronic-money]]
- [[psr-sca-authentication]]
- [[psr-open-banking-pisp-aisp]]
- [[psr-regulatory-reporting]]
- [[consumer-duty-consumer-support]]
- [[fos-eligible-complainants]]
- [[disp2-fos-jurisdiction]]
