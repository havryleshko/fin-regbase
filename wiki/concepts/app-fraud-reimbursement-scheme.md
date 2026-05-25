---
title: "APP Fraud Reimbursement Scheme"
jurisdiction: UK
regulator: PSR
regulation: "PSR PS23/3; FSBRA 2013 s.54/s.55; Faster Payments Rules"
direction: b2c
status: current
effective_date: 2024-10-07
last_updated: 2026-05-13
sources:
  - "PSR PS23/3 (June 2023)"
  - "PSR PS24/7 (October 2024) — maximum reimbursement level"
  - "Annex 2 — PIS transactions"
tags: [PSR, APP-fraud, reimbursement, Faster-Payments, payment-services, fraud, vulnerable-customers, PISP, UK]
related:
  - summaries/psr-ps23-3-app-fraud-reimbursement.md
  - concepts/psr-unauthorised-transaction-liability.md
  - concepts/psr-open-banking-pisp-aisp.md
  - concepts/vulnerable-customers.md
  - concepts/aml-ctf-framework.md
  - concepts/sar-consent-tipping-off.md
  - concepts/consumer-duty-cross-cutting-rules.md
  - summaries/fca-approach-payment-services-electronic-money.md
  - summaries/disp2-fos-jurisdiction.md
  - concepts/psr-sca-authentication.md
---

# APP Fraud Reimbursement Scheme

## What It Is

The APP fraud mandatory reimbursement scheme is the UK's first consistent mandatory minimum standard requiring payment service providers to reimburse victims of authorised push payment (APP) fraud. Introduced by PSR PS23/3 (June 2023) and effective from October 2024, it operates via amendments to the Faster Payments rules (FSBRA s.55) and a PSR general direction to all Faster Payments participants (FSBRA s.54).

This page covers structural mechanics: the liability allocation rationale, scope boundaries and gaps, exception standards, vulnerable customer protections, PISP liability models, SAR intersections, and the enforcement chain.

For full policy detail and the 10-key-policy table, see [[psr-ps23-3-app-fraud-reimbursement]].

---

## Scope at a Glance

**Payment system:** Faster Payments only. CHAPS, Bacs, card payments, and international transfers are outside the mandatory scheme **(PS23/3 §2.5)**.

**Eligible claimants:** Consumers, micro-enterprises (as defined in PSRs 2017 — fewer than 10 employees, annual turnover or balance sheet ≤ €2m), and charities with annual income under £1 million. Larger businesses are not eligible **(PS23/3 §2.9)**.

**Maximum reimbursement:** £85,000 per claim, effective 7 October 2024 **(PSR PS24/7)**. This covers 99.8% of all Faster Payments APP scam claims by volume and 90% by value. The Bank of England set the same £85,000 cap for CHAPS for consistency. PSPs may voluntarily reimburse above this level but cannot recover the excess from the receiving PSP.

**Claim time limit:** 13 months from the date of the final payment to the fraudster **(PS23/3 §1.3, Key Policy 8)**. A consumer who fails to report within 13 months loses the right to mandatory reimbursement. The clock runs from the payment date, not from discovery. FOS jurisdiction remains open for 6 years / 3 years from awareness regardless of the PSP's time-bar decision.

---

## The 50/50 Liability Split: Incentive Mechanism, Not Cost Allocation

The 50/50 split between sending and receiving PSPs is explicitly a structural incentive mechanism, not a proportionate apportionment of individual fault.

**The logic:** Receiving PSPs provide the accounts into which fraudsters receive stolen funds. They are often better placed than sending PSPs to prevent fraud by detecting and refusing fraudster account opening. Under the voluntary CRM Code, only sending PSPs faced reimbursement obligations — receiving PSPs had no financial stake in the outcome, creating an asymmetric incentive structure. APP fraud rates continued rising despite CRM Code signatories investing in prevention.

By requiring receiving PSPs to bear 50% of every reimbursement regardless of individual culpability, PS23/3 creates a direct financial incentive for receiving PSPs to invest in fraud prevention at account opening. The PSR explicitly acknowledged this is not a fine-tuned allocation — it is the price of achieving behavioural change across the receiving PSP population.

**Practical consequences for receiving PSPs:**
- A receiving PSP that successfully prevents fraudster account opening incurs no reimbursement liability — no fraudulent payment arrives, so no claim arises
- One that fails to screen accounts adequately carries 50% of every resulting claim, regardless of whether it was individually negligent
- If the sending PSP voluntarily reimburses above the mandatory level (e.g., waives the claim excess, exceeds the maximum), it cannot recover that extra amount from the receiving PSP — receiving PSP liability is capped at 50% of the mandatory in-scope amount
- Pay.UK is mandated to lead work over time on a more refined cost allocation model as data and technology improve, but the 50/50 default applies from day one

---

## Scope Boundaries and Gaps

### What Makes a Payment In Scope

An APP fraud payment requires all three elements:
1. Execution by the sending PSP in accordance with the customer's authorisation
2. Transfer to an account controlled by a person other than the customer
3. The customer was deceived into granting that authorisation as part of an APP fraud

The definition captures both misdirection (intended to pay A, deceived into paying B) and false pretence (intended to pay the recipient but deceived as to the purpose).

### Deliberate Exclusions and Operational Consequences

**Civil disputes:** Where a customer paid a legitimate supplier who then failed to deliver goods or services, this is a contractual dispute — the customer was not deceived into authorising the payment. The Consumer Rights Act provides the applicable protection. PSPs must correctly classify disputed payments at the point of claim to avoid incorrectly triggering or denying reimbursement.

**'On us' payments:** When victim and fraudster hold accounts at the same PSP, there is no inter-PSP Faster Payments transaction, so Pay.UK's designated payment system rules do not apply. PSR cannot use FSBRA to mandate reimbursement in this scenario. FCA supervises these cases under Consumer Duty and the FCA Approach Document, but no mandatory scheme applies — PSPs are expected to apply consistent standards voluntarily. 'On us' fraud remains a genuine regulatory gap.

**CHAPS:** Operated by the Bank of England, not Pay.UK. The Bank committed to achieving comparable outcomes via a separate process. Not covered by PS23/3.

**Multi-step fraud — crypto leg:** Where the victim sends a Faster Payment to their own crypto exchange account, which then routes funds onward to the fraudster's wallet, only the Faster Payments leg is in scope. The subsequent crypto transfer is unregulated under this scheme. PSPs must classify the nature of each transaction at the point of the payment, not retrospectively. This creates an operational planning gap for PSPs processing payments to crypto-related accounts.

**International payments:** Outside the Faster Payments system boundary — not in scope.

---

## Exceptions: Standard and Burden of Proof

### Gross Negligence — The Deliberately High Bar

The PSR considered and explicitly rejected proposals to set the customer exception at a lower standard. The choice was between:

- **Lower standard (CRM Code "standard of caution"):** customers denied reimbursement where they failed to take reasonable precautions — rejected
- **Gross negligence:** customers denied reimbursement only where they showed a very significant degree of carelessness — adopted

The PSR chose gross negligence because most APP fraud victims are socially engineered by sophisticated fraudsters. A lower standard would have eroded protections for victims who take ordinary care but are still manipulated. The PSR found no credible evidence that gross negligence would increase moral hazard — consumer research showed customers do not want to be defrauded and would not change their payment behaviour.

**Gross negligence standard (from PSD2 recitals, applied by PSR and FCA):** the customer must have shown a very significant degree of carelessness. This is a higher standard than negligence under common law.

**Burden of proof:** On the PSP. The customer does not have to prove they acted carefully; the PSP must prove gross negligence. This is consistent with PSRs 2017 regulation 77(3) for unauthorised transactions.

**Warning specificity standard — PSP may reduce or deny reimbursement.** Yes: if a consumer ignored a specific, effective warning about a high-risk payee or transaction, the PSP may reduce or deny reimbursement on gross negligence grounds. The warning must have been specific to the payee or the transaction — generic fraud awareness messages do not satisfy this requirement and cannot ground a gross negligence finding **(PS23/3 Chapter 5; §5.23)**. The consumer is assessed against the standard of a reasonably careful person: if such a person would have heeded the warning, ignoring it may support a gross negligence finding. Since the burden of proof is on the PSP to establish gross negligence **(PS23/3 §5.23)**, a PSP intending to rely on a warning must be able to demonstrate the specific content of the warning, that it was targeted to the particular payee or transaction, and the timing relative to the payment — a PSP that cannot evidence these elements cannot rely on the consumer's failure to heed the warning.

**Hard carve-out for vulnerable customers:** The exception cannot be applied to a customer who meets the vulnerability definition, regardless of the apparent facts.

### First-Party Fraud

Where the customer was complicit — actively participated in the fraud, not merely a victim. Applies to all customers including vulnerable customers (there is no carve-out from the first-party fraud exception for vulnerable customers, only from gross negligence).

---

## Vulnerable Customer Protections: Hard, Not Discretionary

Two protections for vulnerable customers are hard rules — no PSP discretion applies:

1. **Gross negligence exception must not be applied** — irrespective of the PSP's assessment of the customer's conduct
2. **Claim excess must not be applied** — the PSP cannot deduct any excess from the reimbursement amount

**Vulnerability assessment is mandatory for each APP fraud claim.** PSPs must assess, case-by-case, whether the customer's vulnerability characteristics (temporary or enduring) led to or contributed to the victimisation. Characteristics of vulnerability that were not previously disclosed to the PSP may still be relevant.

**Positive duty of care for identified vulnerable consumers.** A PSP that has already identified a customer as vulnerable must take steps proportionate to that vulnerability — not merely apply the standard fraud warning shown to all customers. A generic fraud warning displayed to all customers does not discharge the heightened duty of care owed to a vulnerable consumer. If the PSP knew of the vulnerability and still showed only a generic warning, it cannot subsequently rely on the consumer's failure to heed that warning as grounds for reducing or denying reimbursement **(PS23/3 §2.10–2.13)**.

**Why the hard rules:** Significant overlap exists between vulnerable customers and APP fraud victims. Older customers, those with cognitive impairment, those with low financial literacy, and those in financial difficulty are disproportionately targeted. Many of these groups also have protected characteristics under the Equality Act 2010. Applying standard caution or cost-sharing to this group would disproportionately harm those with protected characteristics — the PSR's equality impact assessment (Annex 1) explicitly identifies this risk and treats the hard carve-outs as the mitigation.

See [[vulnerable-customers]] for the FCA FG21/1 vulnerability framework that PSPs must apply in assessing vulnerability.

---

## PISP Liability: Model A vs Model B

All PIS (payment initiation service) transactions using Faster Payments are in scope of the mandatory reimbursement requirement. Liability allocation depends on the PISP's operating model:

### Model A — PISP as Pure Intermediary (Not Liable)

The PISP acts as the payer's agent, authenticates the customer, and instructs the customer's account-holding bank (ASPSP) to execute the payment. The PISP has no access to funds during the payment journey.

- The ASPSP is the sending PSP — it reimburses the customer in full
- The fraudster's bank is the receiving PSP — it reimburses the ASPSP 50%
- The PISP is not responsible for reimbursement and bears no PS23/3 liability

### Model B — PISP Also Acts as Receiving PSP (Liable)

The PISP both initiates the payment and holds funds during the payment journey — typically by operating a receiving account and netting multiple payments before onward settlement.

- The ASPSP is still the sending PSP — it reimburses the customer in full
- The PISP, acting as the receiving PSP, reimburses the ASPSP 50%
- The PISP bears 50% of reimbursement liability

**Operational significance:** An open banking fintech operating purely as a PISP (Model A — no access to funds) bears no PS23/3 reimbursement liability. One that operates a receiving account or nets payments before onward settlement (Model B) is liable for 50% of every in-scope claim. The distinction turns on whether the PISP holds funds or merely passes instructions.

See [[psr-open-banking-pisp-aisp]] for the full PISP/AISP framework and ASPSP interface obligations.

---

## SAR Obligations Intersect with the Reimbursement Process

Where a PSP knows or suspects that a person is engaged in money laundering or dealing in criminal property, it must submit a Suspicious Activity Report (SAR) under POCA 2002 and comply with its legal obligations. This obligation applies during the APP fraud claim process in two scenarios:

1. **Receiving PSP:** If a receiving PSP identifies the account as a fraudster's account while processing the sending PSP's APP fraud notification, it may need to file a SAR in relation to the funds in that account.

2. **Suspected first-party fraud:** Where the sending PSP suspects the claiming customer was complicit (first-party fraud), gathering additional information from the receiving PSP or law enforcement is one of the permitted 'stop the clock' grounds. Filing a SAR in relation to the claimant may be appropriate.

**Tipping-off risk:** PSPs must not tip off the subject of a SAR (POCA s.333A) when gathering information during the claims process. The SAR-related consent provisions (POCA s.335) and the tipping-off prohibition interact with the reimbursement timeline.

See [[sar-consent-tipping-off]] and [[aml-ctf-framework]] for the full SAR framework.

---

## Relationship to PSRs 2017 Unauthorised Transaction Liability

PS23/3 addresses APP fraud — where the customer authorised the payment but was deceived. PSRs 2017 regulations 75–91 address **unauthorised** transactions — where the customer did not authorise the payment at all.

Key structural alignments between the two regimes:

| Dimension | PSRs 2017 (unauthorised) | PS23/3 (APP fraud) |
|---|---|---|
| Default obligation | Immediate refund (next business day) | Refund within 5 business days |
| Customer exception standard | Gross negligence (reg. 77(3)) | Gross negligence (same standard) |
| Burden of proof | On PSP | On PSP |
| Customer claim time limit | 13-month notification period (reg. 90) | 13-month claim limit (PSP option) |
| FOS access after PSP refusal | 6 years / 3 years from awareness | 6 years / 3 years from awareness |
| Vulnerable customer protection | Implicit via FCA guidance | Explicit hard carve-out |

The 13-month limits were deliberately aligned. Both regimes are subject to FOS's broader 6yr/3yr jurisdiction — a PSP invoking the time limit does not eliminate FOS jurisdiction.

See [[psr-unauthorised-transaction-liability]] for the full unauthorised transaction refund framework.

---

## Relationship to Consumer Duty

The PSR explicitly aligned PS23/3 with the FCA's Consumer Duty (in force July 2023 for new products/services). Key interactions:

- Consumer Duty's cross-cutting rule requires firms to avoid causing **foreseeable harm** to retail customers. The FCA specifically identifies scams as an example of foreseeable harm — where consumers become victims of scams relating to a firm's financial products due to inadequate systems to detect or prevent scams, or inadequate scam warning messages.
- A firm that fails to implement effective APP fraud prevention measures may simultaneously breach Consumer Duty and PS23/3.
- Consumer Duty requires firms to design, test, tailor, and monitor the effectiveness of scam warning messages presented to customers — directly relevant to PSPs implementing APP fraud friction controls.
- The PSR's equality impact assessment treats Consumer Duty as a significant mitigation for the equality risks identified (e.g., differential treatment of higher-risk customer groups).

See [[consumer-duty-cross-cutting-rules]] for the cross-cutting rules framework.

---

## Enforcement Architecture

Three-tier enforcement chain:

| Tier | Party | Scope |
|---|---|---|
| Primary enforcement | Pay.UK | Direct Faster Payments participants only — scheme rules and Pay.UK enforcement procedures |
| Escalation | PSR | Cases referred by Pay.UK: (a) consistent failure to comply sustained over time; (b) extreme non-compliance (PSP refuses to implement requirement) |
| Indirect participants | PSR direct | PSR's general direction (FSBRA s.54) covers indirect participants; Pay.UK rules do not reach them; PSR enforces directly |

Pay.UK must report PSP compliance data to PSR. PSR monitors Pay.UK's own performance in implementing and enforcing the requirement. If Pay.UK fails to perform its role, PSR can intervene via its section 55 rule change oversight and section 54 specific direction powers.

**Monitoring data Pay.UK must gather:**
- Number of APP fraud claims reported
- Number rejected by PSPs (and reasons)
- Time taken to reimburse victims
- Use of exceptions (first-party fraud; gross negligence)
- Reimbursement rate by sending PSP
- Rate of receiving PSP reimbursement to sending PSPs
- Time taken for receiving PSP to reimburse
- Rate of repatriation of stolen funds

---

## Key Points for Agents

- **Scope: Faster Payments only.** CHAPS, cards, Bacs, and international transfers are outside the mandatory scheme **(PS23/3 §2.5)**. CHAPS has a separate voluntary comparable-outcomes commitment by the Bank of England.
- **Eligible claimants: consumers, micro-enterprises (PSRs 2017 — <10 employees, ≤€2m turnover/balance sheet), and charities with annual income <£1m only.** Larger businesses are not eligible **(PS23/3 §2.9)**. An agent asked whether a micro-enterprise is covered must answer yes.
- **Maximum reimbursement: £85,000 per claim** from 7 October 2024 **(PSR PS24/7)**. Covers 99.8% of claims by volume and 90% by value. PSPs may voluntarily pay more but cannot recover the excess from the receiving PSP.
- **13-month claim window runs from the date of the final payment to the fraudster**, not from discovery **(PS23/3 Key Policy 8)**. Missing the window forfeits mandatory reimbursement; FOS access remains open for 6 years / 3 years from awareness.
- The 50/50 split is an incentive mechanism, not fault allocation — receiving PSPs bear 50% to create financial skin in the game for fraudster account screening, regardless of their individual culpability.
- Gross negligence is a deliberately high bar. Burden of proof is on the PSP. It requires a very significant degree of carelessness — not merely a failure to take reasonable precautions.
- **Warning specificity — PSP may reduce or deny:** Yes — a PSP may reduce or deny reimbursement if the consumer ignored a specific, effective warning about a high-risk payee. The warning must be specific to the payee or transaction — generic fraud messages do not qualify. Since burden of proof is on the PSP (§5.23), it must be able to evidence the warning's specific content, targeting, and timing **(PS23/3 Chapter 5; §5.23)**.
- **Vulnerable customers — positive duty, not just a carve-out.** A PSP that has identified a customer as vulnerable must take proportionate steps; it cannot show a generic warning and then invoke the consumer's failure to heed it. Hard carve-out from gross negligence exception and claim excess applies regardless **(PS23/3 §2.10–2.13)**.
- PISP liability depends entirely on whether the PISP holds funds: Model A (pure intermediary) — no liability; Model B (PISP as receiving PSP) — 50% liability.
- 'On us' fraud is a genuine regulatory gap — PSR cannot mandate; no equivalent mandatory scheme applies.
- SAR filing obligations and tipping-off risk (POCA s.333A) interact with the claim process, particularly in suspected first-party fraud cases.

---

## Related Articles

- [[psr-ps23-3-app-fraud-reimbursement]]
- [[psr-unauthorised-transaction-liability]]
- [[psr-open-banking-pisp-aisp]]
- [[vulnerable-customers]]
- [[aml-ctf-framework]]
- [[sar-consent-tipping-off]]
- [[consumer-duty-cross-cutting-rules]]
- [[fca-approach-payment-services-electronic-money]]
- [[disp2-fos-jurisdiction]]
- [[psr-sca-authentication]]
