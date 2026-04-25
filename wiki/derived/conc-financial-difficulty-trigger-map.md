---
title: "CONC Financial Difficulty Trigger Map"
jurisdiction: UK
regulator: FCA
regulation: Consumer Credit sourcebook (CONC)
status: current
effective_date: 2014-04-01
last_updated: 2026-04-22
sources:
  - "CONC 1.3.1G (financial difficulty indicators)"
  - "CONC 6.7.11G (at-risk definition)"
  - "CONC 7.3.4R (forbearance hard rule)"
  - "CONC 7.3.4B R (individual circumstances)"
  - "CONC 7.3.5G R (interest freeze)"
  - "CONC 7.6.3R (CPA proportionality)"
  - "CONC 7.6.7R (CPA mandatory suspension)"
  - "CONC 7.6.9G (next working day indicator)"
  - "CONC 7.10.1R (mental capacity mandatory suspension)"
  - "CONC 7.14.1R (disputed debt mandatory suspension)"
  - "CONC 7.14.4R (burden of proof on firm)"
  - "CONC 5.2A.22G (creditworthiness proportionality)"
tags: [CONC, consumer-credit, financial-difficulty, DMP, arrears, forbearance, CPA, mental-capacity, disputed-debt, debt-recovery, vulnerable-customers, UK, FCA]
related:
  - concepts/conc-financial-difficulty-indicators.md
  - concepts/conc-debt-recovery-treatment.md
  - concepts/conc-creditworthiness-assessment.md
  - concepts/conc-cpa-rules.md
  - concepts/conc-mental-capacity-guidance.md
  - concepts/vulnerable-customers.md
  - summaries/conc7-arrears-default-recovery.md
  - summaries/conc6-post-contractual-requirements.md
  - summaries/conc5-responsible-lending.md
---

# CONC Financial Difficulty Trigger Map

## Purpose

This page maps financial difficulty signals to their downstream obligations across CONC. The same signal — a missed payment, a DMP discussion, an account in persistent arrears — activates different hard rules depending on which CONC chapter is in play at the time.

An agent processing collections, CPA requests, creditworthiness reassessments, or post-contractual account management should use this map to identify which obligations are triggered for a given customer state, before taking any action on the account.

---

## The Seven Indicators (CONC 1.3.1G)

CONC 1.3.1G lists seven circumstances that indicate a customer is in, or at risk of, financial difficulty. These are not exhaustive but are the named FCA indicators. A firm that takes action adverse to the customer's interests when one or more of these is present, without having assessed the situation, risks breaching CONC.

| # | Indicator | What it looks like in practice |
|---|---|---|
| 1 | The customer is unable to meet minimum contractual repayments | Account in arrears; customer unable to make even the minimum payment when due |
| 2 | The customer is making minimum repayments that are not reducing the outstanding balance | Revolving credit where interest and charges equal or exceed minimum payments |
| 3 | The customer is repaying one credit product by using another | Confirmed or apparent debt cycling — using credit cards or overdrafts to service loans |
| 4 | The customer's credit limit is being used up | Credit utilisation approaching or at limit without indication of repayment capability |
| 5 | The customer has recently missed other credit repayments | Cross-account arrears signals — even if the account in question is current |
| 6 | The customer has had a county court judgment made against them | CCJ on record — public registry check or customer disclosure |
| 7 | The customer has become, or is at risk of becoming, insolvent | Formal insolvency (bankruptcy, IVA, DRO, protected trust deed in Scotland), or statements suggesting imminent insolvency |

**Constructive knowledge standard:** A firm is treated as knowing about financial difficulty if it **knew or reasonably ought to have known** from information available to it. The firm cannot avoid obligations by declining to read information in its own records.

---

## The "At-Risk" Threshold (CONC 6.7.11G)

CONC 6.7.11G defines a specific heightened category — customers who are "at risk of financial difficulty" — that carries additional obligations for interest, fees, and charges. A customer is at risk if **any one** of the following three conditions is present:

1. **Two or more consecutive missed contractual repayments** under the current agreement (not cumulative misses with payments in between).
2. **A repayment arrangement has been agreed** between the firm and the customer.
3. **The customer is engaged in serious discussions with a debt counsellor or money adviser** with a view to entering a debt management plan (DMP).

This threshold is lower than the full indicators list — Indicator 1 requires inability to meet *minimum* payments; at-risk Condition 1 is triggered by two consecutive misses, which may be partial misses.

**Key implication:** DMP discussions, even pre-formal, meet Condition 3. A customer who has merely contacted StepChange, National Debtline, or Citizens Advice about debt management is potentially at-risk under CONC 6.7.11G.

---

## Trigger Map — Financial Difficulty Signal → Activated Obligation

### Signal A: Account Enters Arrears (Any Miss)

| CONC Rule | Obligation Triggered | Threshold |
|---|---|---|
| CONC 7.3.4R | Forbearance — the firm **must** consider giving the customer reasonable time and opportunity to repay | Any arrears situation |
| CONC 7.3.4B R | Individual circumstances — the firm **must** give due consideration to the individual customer's position | Any arrears situation |
| CONC 5.2A.22G | Creditworthiness proportionality — vulnerability/difficulty indicators are relevant to reassessment if a significant credit limit increase is proposed | Any arrears situation |
| CONC 7.6.4G | CPA — whether the customer is in actual or potential financial difficulty is a factor in assessing CPA proportionality | Any miss |

### Signal B: Two Consecutive Missed Repayments

| CONC Rule | Obligation Triggered | Note |
|---|---|---|
| CONC 6.7.11G (Condition 1) | At-risk status — charges and interest obligations engage | Two **consecutive** misses required; broken by any payment in between |
| CONC 7.6.3R | CPA — firm must exercise appropriate forbearance | Two misses strongly suggest potential financial difficulty |
| CONC 7.3.5G R | Interest freeze consideration — where arrangement is in place and being met, interest **must** be frozen | Applies once arrangement agreed, not at miss stage |

### Signal C: Payment Fails via CPA by End of Next Working Day

| CONC Rule | Obligation Triggered | Note |
|---|---|---|
| CONC 7.6.9G | Practical financial difficulty indicator — the firm **should** suspend CPA exercise and make reasonable efforts to contact the customer | This is the practical operational trigger; "next working day" is the working standard, not a 24-hour clock deadline |
| CONC 7.6.3R | CPA proportionality — firm must exercise rights in a reasonable, proportionate, non-excessive manner | Applies at every CPA attempt |

### Signal D: Customer Provides Reasonable Evidence of Financial Difficulty

| CONC Rule | Obligation Triggered | Note |
|---|---|---|
| CONC 7.6.7R | CPA **must not** be exercised | Hard prohibition — absolute if the two conditions are met: (i) reasonable evidence provided **and** (ii) customer cannot afford to repay |
| CONC 7.3.4R | Forbearance hard rule | Firm must consider reasonable time to repay |
| CONC 7.3.5G R | Interest and charges | Firm should consider freezing/waiving where arrangement is in place and being met |

Evidence may include: a DMP acceptance letter, formal insolvency notice, a debt counsellor's letter of engagement, written statement from the customer, or verbal statement on call (subject to call recording obligations).

### Signal E: Customer Enters or Discusses Formal DMP / Debt Arrangement

| CONC Rule | Obligation Triggered | Note |
|---|---|---|
| CONC 6.7.11G (Condition 3) | At-risk status — **serious discussions** with debt counsellor sufficient; formal DMP not yet required | "Serious discussions" = more than initial enquiry; evidence of counsellor engagement |
| CONC 7.6.7R | CPA mandatory suspension | If the firm is aware the customer is in financial difficulty and cannot afford to repay — DMP discussion is strong evidence |
| CONC 7.3.4R | Forbearance | Firm must offer reasonable time to repay |
| CONC 7.3.5G R | Interest freeze | **Automatic** where arrangement is in place and being met — no discretion; the firm cannot continue to add interest once the conditions are satisfied |

**Interest freeze rule precision:** CONC 7.3.5G R operates automatically when: (1) the customer is in financial difficulty, (2) an arrangement has been agreed, and (3) the arrangement is being met. The firm has **no discretion** to continue charging interest once all three conditions apply.

### Signal F: CCJ or Formal Insolvency Notification

| CONC Rule | Obligation Triggered | Note |
|---|---|---|
| CONC 1.3.1G (Indicators 6–7) | CONC financial difficulty indicators formally triggered | Firm treated as knowing |
| CONC 7.3.4R | Forbearance | Hard rule engaged |
| CONC 7.6.7R | CPA mandatory suspension | Formal insolvency/CCJ = reasonable evidence of financial difficulty |
| CONC 7.3.5G R | Interest freeze | Consider and apply where arrangement in place and met |

For formal insolvency (bankruptcy, IVA, DRO): the insolvency legislation imposes its own moratoriums on creditor action. CONC obligations and insolvency law operate in parallel — CONC does not displace insolvency law.

### Signal G: Mental Capacity Concerns Identified

| CONC Rule | Obligation Triggered | Note |
|---|---|---|
| CONC 7.10.1R | Collections activity **must** be suspended | Hard rule: suspension is **mandatory** when the firm is aware of or has reasonable grounds to believe mental capacity limitations exist |
| CONC 7.3.4R | Forbearance | Applies in addition |
| CONC 7.6.7R | CPA suspension | If customer cannot afford to repay — mental capacity may prevent the customer from communicating this; the firm must exercise judgment |

Collections suspension under CONC 7.10.1R includes: CPA attempts, letters demanding payment, telephone contact for collections purposes. It does not prohibit sending account statements or responding to customer-initiated contact.

### Signal H: Customer Disputes the Debt

| CONC Rule | Obligation Triggered | Note |
|---|---|---|
| CONC 7.14.1R | Collections activity **must** be suspended immediately | Hard rule: suspension is mandatory on notification of a genuine dispute |
| CONC 7.14.4R | Burden of proof is on the **firm** | The firm must demonstrate that the debt is valid before resuming collections |
| CONC 7.6.7R | CPA suspension | Disputed debt = reasonable cause to pause; the firm should not exercise CPA while a genuine dispute is unresolved |

A "genuine dispute" is not defined by the customer's subjective belief alone. However, the burden in CONC 7.14.4R on the firm means the firm must resolve the dispute before resuming — it cannot treat a dispute as non-genuine without investigation.

---

## Cumulative Signals — Escalating Obligation

Multiple signals occurring simultaneously escalate the firm's obligations. The firmest obligation in any applicable rule governs — the fact that a lighter obligation exists elsewhere does not reduce the harder obligation.

| Combined signals | Resulting obligation floor |
|---|---|
| Arrears + DMP discussion | Interest freeze automatic (CONC 7.3.5G R); CPA must be suspended (CONC 7.6.7R) |
| Mental capacity + any arrears | Collections fully suspended (CONC 7.10.1R); CPA prohibited |
| Disputed debt + arrears | Collections fully suspended (CONC 7.14.1R); firm bears burden to validate debt |
| CCJ + CPA attempt | CPA mandatory suspension (CONC 7.6.7R); CCJ is reasonable evidence of financial difficulty |
| Two HCSTC CPA refusals | Two-strike cap applies — **no further CPA attempts** regardless of financial difficulty status **(CONC 7.6.12R)** |

---

## HCSTC-Specific Rules (Payday / High-Cost Short-Term Credit)

For HCSTC (APR ≥ 100% and term ≤ 12 months or structured as high-cost short-term), the standard CPA framework is overlaid with the two-strike rule. **(CONC 7.6.12R)**

**Two-strike cap:**
- After **two refused CPA attempts** under the same agreement (including refinanced agreements treated as the same), no further CPA attempts may be made.
- The count resets on forbearance — any refusal before the forbearance arrangement was granted is disregarded.
- After the cap: firm may only resume CPA attempts if the customer gives **express consent** following a **refinancing** (verbal consent alone, without refinancing, does not satisfy the condition).

**No partial amounts for HCSTC:** **(CONC 7.6.14R)** — a firm cannot request less than the full sum due via CPA for HCSTC, except under a formally agreed repayment plan with express customer consent.

**Instalment HCSTC:** The two-strike rule applies per instalment — and two refusals on one instalment also blocks CPA attempts on all other instalments under the same agreement. **(CONC 7.6.13R)**

---

## Statute Barred Debt

Once a debt becomes statute-barred, the firm's collections options change materially:

| Jurisdiction | Limitation period | Effect |
|---|---|---|
| England & Wales | 6 years from last payment or acknowledgment (Limitation Act 1980) | Debt cannot be enforced through court. CONC still limits collections conduct. |
| Scotland | 5 years from last payment or acknowledgment (Prescription and Limitation (Scotland) Act 1973) | Debt **ceases to exist** — it is extinguished, not merely unenforceable. No collections activity whatsoever is permissible on an extinguished debt. |

The Scottish position is materially different from E&W. A Scottish debt past the 5-year prescriptive period cannot lawfully be collected at all — attempting to do so is likely to constitute an unfair commercial practice.

---

## Key Points for Agents

- The CONC 1.3.1G indicators operate on a constructive knowledge standard — the firm cannot avoid obligations by failing to read its own records. Information in the customer's account history is treated as known.
- The CONC 6.7.11G at-risk threshold (two consecutive misses, or repayment arrangement, or DMP discussions) is lower than the full difficulty indicators list. DMP discussions — even pre-formal — satisfy Condition 3.
- The CONC 7.3.5G R interest freeze is automatic once the three conditions are met (financial difficulty + arrangement agreed + arrangement being met). The firm has no discretion to continue adding interest once all three apply.
- CPA mandatory suspension under CONC 7.6.7R is triggered by reasonable evidence of difficulty **and** inability to afford repayment. A DMP, formal insolvency, or CCJ constitutes reasonable evidence. The next-working-day CPA failure (CONC 7.6.9G) is a practical indicator that should prompt contact and assessment before any further attempt.
- Mental capacity (CONC 7.10.1R) and disputed debt (CONC 7.14.1R) each impose mandatory **full suspension** of collections activity as hard rules — not a best-efforts obligation.
- For HCSTC: the two-strike cap (CONC 7.6.12R) applies regardless of financial difficulty status. After two refused CPA attempts, collections via CPA stop. Express consent + refinancing is required to resume — not consent alone.
- Scottish statute-barred debt is extinguished, not merely unenforceable. Collections on an extinguished Scottish debt cannot proceed.

## Related Articles

- [[conc-financial-difficulty-indicators]]
- [[conc-debt-recovery-treatment]]
- [[conc-creditworthiness-assessment]]
- [[conc-cpa-rules]]
- [[conc-mental-capacity-guidance]]
- [[vulnerable-customers]]
- [[conc7-arrears-default-recovery]]
- [[conc6-post-contractual-requirements]]
- [[conc5-responsible-lending]]
