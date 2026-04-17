---
title: "Capital Requirements — Payment Institutions and E-Money Institutions"
jurisdiction: UK
regulator: FCA
regulation: PSRs 2017 (Regs 6, 18–19, Schedule 3); EMRs 2011 (Regs 6–7, Schedule 2)
status: current
effective_date: 2017-01-13
last_updated: 2026-04-16
sources:
  - "FCA Approach Document (Payment Services and Electronic Money) v7, March 2026 — Chapter 9"
tags: [capital, own-funds, CET1, PSRs, EMRs, payment-institutions, EMI, Method-A, Method-B, Method-C, Method-D, initial-capital, UK, FCA]
related:
  - summaries/fca-approach-payment-services-electronic-money.md
  - concepts/psr-emi-prudential.md
  - concepts/safeguarding-pis-emis.md
  - concepts/psr-regulatory-reporting.md
  - concepts/wind-down-planning.md
---

# Capital Requirements — Payment Institutions and E-Money Institutions

All Authorised PIs and Authorised EMIs must maintain regulatory capital at all times. Capital requirements operate at two levels: an **initial capital threshold** (met on authorisation and maintained thereafter) and an **ongoing own funds requirement** (calculated using the applicable method). The FCA has power to adjust the ongoing requirement by up to ±20%.

> **Small PIs and Small EMIs:** Small PIs and Small EMIs do not have regulatory minimum capital requirements — they operate under registration rather than authorisation. However, the FCA may require adequate financial resources as a condition of registration.

---

## Initial Capital Requirements

Initial capital must be met at the point of authorisation and maintained on an ongoing basis. It represents a floor below which the firm's capital may not fall.

### Authorised Payment Institutions

Initial capital thresholds depend on the payment services the firm is authorised to provide **(PSRs 2017 Schedule 2, Part 1)**:

| Capital Threshold | Applicable Where |
|------------------|-----------------|
| **€20,000** | PI authorised to provide only money remittance (Schedule 1, paragraph 6) and no other payment services involving receipt of funds from payers |
| **€50,000** | PI authorised to provide payment initiation services (Schedule 1, paragraph 7) and no other payment services involving receipt of funds |
| **€125,000** | PI authorised to provide any other payment service listed in Schedule 1 (including account-to-account credit transfers, direct debits, acquiring payment transactions) |

The highest applicable threshold applies where a PI provides multiple payment services across categories. **(Approach Document §9)**

### Authorised E-Money Institutions

| Capital Threshold | Applicable Where |
|------------------|-----------------|
| **€350,000** | All Authorised EMIs |

**(EMRs 2011 Schedule 2)**

---

## Ongoing Own Funds Requirement

The ongoing own funds requirement must be maintained at all times. It is calculated using one of the methods below. The applicable method depends on the firm type.

### Methods for Payment Institutions (PSRs 2017 Schedule 3)

The FCA requires PIs to use the method most appropriate to their business — typically Method C for firms with significant payment volumes. The FCA may require a specific method and may switch a firm between methods.

#### Method A — Fixed Overheads

Own funds requirement = at least **10% of the firm's fixed overheads** from the preceding year (or from the preceding 12 months' budget if the firm has not been operating for a full year).

**Appropriate for:** PIs with limited payment volume but material operational infrastructure. Can result in a high requirement for firms with large cost bases.

#### Method B — Relevant Indicator

Own funds requirement = **relevant indicator × a scaling factor** (tiered percentages).

The **relevant indicator** is calculated as the sum of: net interest income + net fee and commission income + net other operating income. The scaling factor applies tiered percentages to the relevant indicator. **(PSRs 2017 Schedule 3, Part 2)**

#### Method C — Payment Volume (Most Common)

Own funds requirement = sum of tiered percentages applied to total payment volume.

| Annual Payment Volume Tier | Percentage Applied |
|---------------------------|-------------------|
| Up to €5 million | 4.0% |
| €5 million – €10 million | 2.5% |
| €10 million – €100 million | 1.0% |
| €100 million – €250 million | 0.5% |
| Above €250 million | 0.25% |

"Payment volume" means the total of payment transactions executed in the preceding 12 months (or projected if operating for less than 12 months), divided by 12 to give a monthly figure, then multiplied by 12 for the annual requirement. **(PSRs 2017 Schedule 3, Part 3)**

**Practical note:** For a PI processing €50 million/year in transactions, the Method C own funds requirement = (€5m × 4%) + (€5m × 2.5%) + (€40m × 1%) = €200k + €125k + €400k = **€725k**. This is the regulatory minimum; the actual capital held should be assessed against the firm's specific risk profile (see [[psr-emi-prudential]]).

### Method D — E-Money (EMIs)

Own funds requirement for EMIs in respect of e-money activity = **2% of average outstanding e-money** over the preceding 6 months. **(EMRs 2011 Schedule 2)**

"Average outstanding e-money" is calculated as the average daily value of electronic money outstanding at month-end over the previous 6 months.

**EMIs providing payment services alongside e-money:** The EMI must calculate capital for its e-money activities using Method D **and** calculate capital for its unrelated payment services activities using Method A, B, or C. The higher of the two resulting requirements applies — not the sum. **(EMRs 2011 Schedule 2)**

---

## FCA Power to Adjust (±20%)

The FCA may **require a firm to hold up to 20% more** than the calculated own funds requirement where it considers the firm's risk profile, risk management, and other relevant factors warrant additional capital. **(PSRs 2017 Reg 18; Approach Document §9)**

The FCA may also **allow a firm to hold up to 20% less** where the firm's risk profile is demonstrably lower than the standard model assumes.

**Basis for adjustment:** The FCA will consider factors including business model risk, operational risk, market and credit risk exposure, quality of risk management, and macroeconomic conditions. The adjustment is not a one-off — the FCA may revise it at any time.

---

## Own Funds Composition (Capital Quality)

Own funds must be of sufficient quality. The PSRs/EMRs recognise the standard banking capital hierarchy:

| Tier | Description | Examples |
|------|-------------|---------|
| **CET1** (Common Equity Tier 1) | Highest quality; fully loss-absorbing; permanent | Paid-up ordinary share capital; share premium; retained earnings; audited profits |
| **AT1** (Additional Tier 1) | High quality; perpetual; subordinated | Perpetual non-redeemable preference shares; certain hybrid instruments |
| **T2** (Tier 2) | Lower quality; time-limited | Subordinated debt (min. 5 years remaining maturity); certain provisions |

**CET1 primacy:** The majority of own funds must be held in CET1. AT1 and T2 instruments count toward own funds subject to limits on the proportion of each tier. The exact composition limits are set out in the Capital Requirements Regulation (CRR) as applied by the PSRs/EMRs. **(Approach Document §9)**

**Deductions from own funds:** Intangible assets, material losses, and certain other items are deducted from own funds in calculating the net position available to meet the requirement.

---

## Capital in the Context of Safeguarding

Capital requirements and safeguarding are separate frameworks. Safeguarded funds (relevant funds held in segregated accounts or covered by insurance) are **not** counted toward regulatory capital — they belong to customers. A firm cannot double-count customer funds as its own regulatory capital.

See [[safeguarding-pis-emis]] for the safeguarding framework.

---

## Key Points for Agents

- **Initial capital floors:** PI €20k / €50k / €125k depending on services; EMI €350k. These must be met at authorisation and maintained at all times.
- **Ongoing requirement:** Method A (overheads), B (revenue), or C (payment volume) for PIs; Method D (2% of average e-money outstanding) for EMIs. Method C is most common for volume-based PIs.
- **FCA ±20% adjustment:** The FCA can require more capital or permit less, based on individual risk profile assessment. Firms should expect adjustment where business models carry elevated operational or market risk.
- **Own funds quality:** Must predominantly be CET1. AT1 and T2 count toward the total subject to composition limits.
- **Capital ≠ safeguarding:** Customer funds in safeguarded accounts are not regulatory capital. A PI or EMI with large safeguarded balances but insufficient own funds is non-compliant.
- **Capital above the minimum:** Firms should assess whether the minimum is adequate given their specific risk profile — holding only the minimum without assessment is a named FCA supervisory concern.

## Related Articles

- [[fca-approach-payment-services-electronic-money]]
- [[psr-emi-prudential]]
- [[psr-regulatory-reporting]]
- [[safeguarding-pis-emis]]
- [[wind-down-planning]]
