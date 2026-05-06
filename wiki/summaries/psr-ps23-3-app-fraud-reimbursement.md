---
title: "PSR PS23/3 — APP Fraud Mandatory Reimbursement"
jurisdiction: UK
regulator: PSR
regulation: "PSR PS23/3; FSBRA 2013 s.54/s.55; Faster Payments Rules"
status: current
effective_date: 2024-10-07
last_updated: 2026-05-05
sources:
  - "PSR PS23/3 (June 2023) — Chapters 1–8"
  - "Annex 1 — Equality impact assessment"
  - "Annex 2 — PIS transactions"
  - "Glossary (p.70)"
tags: [PSR, APP-fraud, reimbursement, Faster-Payments, payment-services, fraud, vulnerable-customers, PISP, open-banking, UK]
related:
  - concepts/app-fraud-reimbursement-scheme.md
  - concepts/psr-unauthorised-transaction-liability.md
  - concepts/psr-open-banking-pisp-aisp.md
  - concepts/vulnerable-customers.md
  - concepts/aml-ctf-framework.md
  - concepts/sar-consent-tipping-off.md
  - concepts/consumer-duty-cross-cutting-rules.md
  - summaries/fca-approach-payment-services-electronic-money.md
  - summaries/disp2-fos-jurisdiction.md
  - summaries/dear-ceo-letter-payments-portfolio-2023.md
---

# PSR PS23/3 — APP Fraud Mandatory Reimbursement

## What It Is

PSR PS23/3 (June 2023) is the Payment Systems Regulator's final policy statement establishing a **mandatory reimbursement requirement** for victims of authorised push payment (APP) fraud within the Faster Payments system. It is the first consistent mandatory minimum standard of its kind in the world.

**APP fraud** is defined as: a payment executed by the sending PSP, in accordance with an authorisation given by its customer, to an account controlled by a person other than the customer, where the customer has been deceived into granting that authorisation as part of an APP fraud case. Two scenarios are covered:
- The payer intends to pay A but is deceived into paying B (misdirection)
- The payer intends to pay the recipient but is deceived as to the purpose of the payment (false pretence)

The requirement supersedes the voluntary Contingent Reimbursement Model (CRM) Code for Faster Payments, extending coverage from ten CRM signatories to 1,500+ PSPs using Faster Payments.

**Legal basis:** FSBRA 2013 sections 54 (PSR general and specific directions) and 55 (rule change requirement to Pay.UK to embed requirements in Faster Payments rules).

---

## Scope

### In Scope

| Category | Detail |
|---|---|
| Payment system | Faster Payments only |
| Customers | Consumers, microenterprises (as defined in PSRs 2017), charities with annual income < £1 million |
| Transaction type | APP fraud payment — Faster Payment to account controlled by person other than customer where customer was deceived |
| Multi-step fraud | In scope for the Faster Payments leg, even if funds were subsequently moved to other accounts |
| PIS / open banking | In scope (see PIS section below) |

### Out of Scope

| Excluded | Reason / Notes |
|---|---|
| CHAPS | Operated by the Bank of England; separate comparable-outcomes process |
| International payments | Outside Faster Payments system |
| Other payment systems (Bacs, cards) | Only Faster Payments designated |
| Civil disputes | Customer paid a legitimate supplier who failed to deliver — no deception into authorising payment; Consumer Rights Act applies |
| Unlawful payments | Payments made for unlawful purposes |
| 'On us' payments | Victim and fraudster at the same PSP — no designated payment system transaction; PSR cannot mandate; no equivalent mandatory scheme |
| Crypto leg of multi-step fraud | Only the Faster Payments leg is in scope; subsequent crypto transfer is unregulated under this scheme |

---

## The 10 Key Policies

| Policy | Requirement |
|---|---|
| 1. Mandatory reimbursement | Sending PSPs must reimburse all in-scope APP fraud victims (subject to exceptions and limits) |
| 2. 50/50 cost split | Receiving PSPs must pay sending PSPs 50% of every reimbursement within a deadline set by Pay.UK |
| 3. Exceptions | Two only: (a) first-party fraud — customer was complicit; (b) gross negligence — high bar, PSP bears burden of proof |
| 4. 5-business-day deadline | Sending PSP must reimburse within 5 business days of claim; 'stop the clock' available for specific purposes |
| 5. Claim excess | Optional — sending PSP may deduct a claim excess (level set by PSR guidance Q4 2023); must not apply to vulnerable customers |
| 6. No minimum threshold | No separate minimum claim value |
| 7. Maximum reimbursement | A maximum value per claim exists (level set by PSR guidance Q4 2023); PSPs may voluntarily exceed it but cannot recover the excess from the receiving PSP |
| 8. 13-month customer claim limit | Sending PSP may refuse claims submitted more than 13 months after the final payment to the fraudster |
| 9. Vulnerable customer protection | The gross negligence exception AND the claim excess must not be applied to vulnerable customers — hard carve-out |
| 10. Multi-step fraud | Applies to the Faster Payment to any account controlled by the fraudster, including intermediary accounts in a multi-step scheme |

---

## Exceptions to Reimbursement

There are exactly two exceptions:

### First-Party Fraud

The customer was complicit in the fraud — not merely a victim but an active participant. Applies to all customers including vulnerable customers. The PSP must be able to demonstrate the customer's complicity.

### Gross Negligence

The customer acted with gross negligence. Key characteristics:

- **Standard:** Gross negligence is higher than ordinary negligence under common law — the customer must have shown "a very significant degree of carelessness." This is the same standard as PSRs 2017 regulation 77(3) (unauthorised transactions) and the PSD2 recitals.
- **Burden of proof:** On the PSP. The customer does not have to prove they acted carefully; the PSP must prove the customer was grossly negligent.
- **Deliberate choice:** The PSR explicitly rejected a lower "standard of caution" test (similar to the CRM Code) after consultation. Industry argued the lower standard was appropriate; the PSR disagreed, finding gross negligence the only standard consistent with protecting fraud victims who are socially engineered.
- **Vulnerable customers:** The gross negligence exception cannot be applied to vulnerable customers under any circumstances — hard carve-out with no discretion.
- **Guidance:** PSR committed to publish guidance on the customer standard of caution (gross negligence) in Q4 2023, developed in a steering group with FCA and FOS.

---

## Vulnerable Customer Protections

**Definition:** FCA's definition — "someone who, due to their personal circumstances, is especially susceptible to harm — particularly when a firm is not acting with appropriate levels of care." Vulnerability may be temporary or enduring.

Two **hard** protections apply to vulnerable customers — no PSP discretion:
1. The **customer standard of caution exception** (gross negligence) must not be applied
2. The **claim excess** must not be applied

Vulnerability must be assessed case-by-case as part of the claim assessment. PSPs must consider whether the customer's characteristics of vulnerability (whether or not they were previously disclosed) contributed to the customer being defrauded.

The PSR's rationale: overlap between vulnerable customers and APP fraud victims is significant (e.g., older customers disproportionately targeted); applying standard caution or cost-sharing mechanisms to this group would disproportionately harm those with protected characteristics.

See [[vulnerable-customers]] for the FCA FG21/1 vulnerability framework that PSPs must apply.

---

## The 4-Stage Reimbursement Journey

### Stage 1: Customer Reports the Fraud

- Customer reports to sending PSP as soon as possible; 13-month limit applies from final payment to fraudster
- Sending PSP must notify receiving PSP near-real-time
- Customer should report to police and provide crime reference number if requested — failure to notify police is not grounds for denial
- Sending PSP should give an initial indication of whether the claim appears in-scope

### Stage 2: PSP Assesses the Claim

- 5-business-day deadline starts when the customer reports
- **'Stop the clock' grounds (exhaustive):** gathering further information from the victim; assessing vulnerability; verifying claims management company authority; gathering information from receiving PSP or law enforcement where first-party fraud is suspected; gathering information from other PSPs in multi-step fraud cases
- No limit on number of clock stops, but use must be proportionate to claim value and complexity
- Assessment must cover: scope; first-party fraud evidence; vulnerability; gross negligence evidence

### Stage 3: Customer Is Reimbursed

- Sending PSP reimburses customer (minus optional claim excess, subject to maximum reimbursement cap)
- Reimbursement returns to the account from which the payment was made

### Stage 4: Receiving PSP Reimburses Sending PSP

- Receiving PSP must pay sending PSP 50% of the amount paid to the customer (in-scope amount only)
- Pay.UK sets the inter-PSP deadline with an ultimate backstop
- If sending PSP voluntarily reimbursed beyond mandatory scope, it cannot require the receiving PSP to contribute to that excess

### Allocation of Repatriated Funds

If the receiving PSP later recovers stolen funds:
- Repatriated funds are shared between PSPs in proportion to their reimbursement contributions
- Any surplus (above 100% of the original claim) returns to the victim — including their claim excess
- Victim must not receive more than 100% of their original claim

---

## PIS / Open Banking Transactions (Annex 2)

PIS transactions via Faster Payments are in scope. Liability allocation depends on the PISP's operating model:

**Model A — PISP as pure intermediary (not liable)**
The PISP instructs the customer's account-holding bank (ASPSP) but does not access funds. The ASPSP is the sending PSP:
- ASPSP reimburses the customer in full
- Fraudster's bank (receiving PSP) reimburses ASPSP 50%
- PISP bears no reimbursement liability

**Model B — PISP also acts as receiving PSP (liable)**
The PISP holds funds during the payment journey and nets payments:
- ASPSP remains the sending PSP and reimburses the customer in full
- PISP/receiving PSP reimburses ASPSP 50%
- PISP bears 50% liability

The liability distinction turns on whether the PISP holds funds. See [[psr-open-banking-pisp-aisp]] for the open banking framework.

---

## Implementation Architecture

The requirement is embedded through two instruments used together:

**PSR general direction (FSBRA s.54):** Directs all in-scope PSPs — including indirect Faster Payments participants — to comply with the Faster Payments rules and report data to Pay.UK. Creates direct regulatory obligations covering both direct and indirect participants.

**PSR rule change requirement (FSBRA s.55):** Directs Pay.UK to embed the reimbursement policies into the Faster Payments rules. Pay.UK drafts, implements, monitors, and (for direct participants) enforces those rules.

| Category | Who controls |
|---|---|
| Reimbursement requirement and scope | PSR retains permanently |
| Claim excess level, maximum reimbursement, gross negligence guidance | PSR initially; may transfer to Pay.UK when capabilities mature |
| 50/50 cost allocation; 13-month limit; 5-day deadline; stop-the-clock | Pay.UK from day one |

**Enforcement:** Pay.UK enforces direct participants; PSR takes referrals for serious failures. PSR enforces indirect participants directly.

---

## Relationship to the CRM Code

| Dimension | CRM Code | PS23/3 |
|---|---|---|
| Coverage | 10 CRM signatories (~90% of volume) | 1,500+ PSPs using Faster Payments |
| Legal status | Voluntary | Mandatory |
| Payment systems | Also covers CHAPS and 'on us' | Faster Payments only |
| Exception standard | "Standard of caution" (lower bar) | Gross negligence (higher bar — harder for PSPs to deny) |
| Reimbursement deadline | 15 business days | 5 business days |

The CRM Code remained in force until PS23/3 requirements came into force. The PSR expects Code requirements to be superseded by the mandatory scheme.

---

## Monitoring and Post-Implementation Review

**Balanced scorecard — three metrics (14 PSP groups, six-monthly):**
- **Metric A:** Proportion of APP fraud victims left out of pocket
- **Metric B:** APP fraud rates for each sending PSP
- **Metric C:** APP fraud rates for each receiving PSP (excluding recovered funds)

**Post-implementation review** within two years of go-live, covering: overall effectiveness; policy risks (moral hazard, de-banking, fraud migration to other channels); Pay.UK implementation; PSP compliance rates; repatriation rates; equality impacts.

---

## Key Points for Agents

- Mandatory reimbursement applies to all Faster Payments APP fraud within scope; only two exceptions — first-party fraud (complicity) and gross negligence (high bar; burden on PSP).
- Vulnerable customers are a hard carve-out from both exceptions and from the claim excess. No discretion.
- 50/50 cost split is a structural incentive mechanism: receiving PSPs bear 50% to create financial incentives to prevent fraudster account opening, not because they are equally at fault.
- 'On us' fraud (same-PSP victim and fraudster) is a genuine regulatory gap — PSR cannot mandate; no equivalent mandatory scheme.
- PISP liability depends on model: Model A (no funds held) — no PS23/3 liability; Model B (PISP also acts as receiving PSP) — 50% liability.
- 13-month PSP claim limit is optional. Customers may still reach FOS within 6 years / 3 years of awareness, regardless of whether the PSP invoked the time limit.
- Claim excess and maximum reimbursement levels were to be set by PSR guidance in Q4 2023 — PS23/3 itself does not specify the monetary levels.

---

## Related Articles

- [[app-fraud-reimbursement-scheme]]
- [[psr-unauthorised-transaction-liability]]
- [[psr-open-banking-pisp-aisp]]
- [[vulnerable-customers]]
- [[aml-ctf-framework]]
- [[sar-consent-tipping-off]]
- [[consumer-duty-cross-cutting-rules]]
- [[fca-approach-payment-services-electronic-money]]
- [[disp2-fos-jurisdiction]]
- [[dear-ceo-letter-payments-portfolio-2023]]
