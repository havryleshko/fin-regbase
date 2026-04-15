---
title: "PROD 3 — Product Governance for Investment Manufacturers"
jurisdiction: UK
regulator: FCA
regulation: MiFID II; PROD 3; SYSC; COBS; PRIN
status: current
effective_date: 2018-01-03
last_updated: 2026-04-13
sources:
  - "FCA, 'MiFID II: product governance review', 26 February 2021"
tags: [MiFID-II, PROD, product-governance, target-market, negative-target-market, asset-management, AFM, distributor, scenario-testing, conflicts-of-interest, SM&CR, record-keeping, UK, FCA]
related:
  - summaries/mifid-ii-product-governance-review-2021.md
  - concepts/consumer-duty-products-services.md
  - concepts/consumer-duty-price-value.md
  - concepts/consumer-duty-overview.md
  - summaries/dear-ceo-letter-wealth-stockbroking-2023.md
  - concepts/costs-charges-disclosure.md
  - summaries/fca-costs-charges-disclosure-review-2019.md
  - concepts/payment-for-order-flow.md
  - summaries/fca-pfof-supervisory-report-2019.md
  - concepts/smcr-senior-managers-regime.md
---

# PROD 3 — Product Governance for Investment Manufacturers

## What PROD Is and Who It Applies To

MiFID II introduced a product governance regime for firms that manufacture and distribute financial instruments. In the FCA Handbook, this is implemented through the **Product Intervention and Product Governance sourcebook (PROD)**, specifically **PROD 3** for investment products.

For **Authorised Fund Managers (AFMs)**, PROD 3 applies as **guidance** rather than binding rules. The binding obligations come from:
- **COBS** (Conduct of Business Sourcebook) — client best interests
- **COLL** (Collective Investment Schemes Sourcebook) — fund management obligations
- **The Principles** — particularly PRIN 6 (customer best interests), PRIN 7 (fair communications), PRIN 8 (conflicts of interest)

Acting in line with PROD 3 enables AFMs to demonstrate compliance with these binding obligations. AFMs should also consider the **RPPD** (Responsibilities of Providers and Distributors for the Fair Treatment of Customers) — supplementary COBS-based guidance, not primary binding rules.

**Consumer Duty interaction:** Firms that comply with PROD 3 satisfy the Consumer Duty Products & Services outcome — they are not subject to both regimes simultaneously. **(PS22/9 §6.5, §6.7)**

MiFID II came into force in January 2018.

---

## Target Market — Positive and Negative

### Positive Target Market

Manufacturers must identify the **target market** for each financial instrument: the group of end clients for whose needs, characteristics and objectives the product is compatible. **(PROD 3.2.10R)**

This requires the manufacturer to specify:
- The type of client the product is designed for
- Whether the risk/reward profile is consistent with the identified target market
- The intended distribution strategy

### Negative Target Market

Manufacturers must also identify the **negative target market** — the group of clients the product is *not* compatible with. **(PROD 3.2.10R)**

This is a distinct, mandatory step. A target market assessment is incomplete without a negative target market definition. Common failures:
- Failing to identify any negative target market at all (the FCA's 2021 review found only 1 of 8 firms had attempted it)
- Identifying a negative target market that overlaps with the existing investor base — for example, defining "investors who hold for longer than 5 years" as a negative target market while acknowledging that some existing investors do exactly that

The negative target market obligation enables distributors to identify customers for whom a product is inappropriate, and supports the manufacturer's obligation to ensure the product does not reach unsuitable investors.

---

## Conflicts of Interest in Product Design

Manufacturers must identify, manage and mitigate conflicts of interest in product design. **(SYSC 10; PRIN 8)**

The obligation requires firms to consider:
- Whether product characteristics — charges, investment objectives, structural features — **benefit the firm at the expense of the end investor**
- Whether conflicts create **incentives to favour one group of investors over another** (for example, institutional share classes vs. retail share classes within the same fund)

Having a conflicts framework is necessary but insufficient. The FCA's 2021 review found that all 8 firms had frameworks, but not all were effective. The FCA's position: **outcomes are what matter**. A framework that does not result in conflicts being identified and managed has failed its purpose.

---

## Product Scenario Analysis and Stress Testing

### The Obligation

Manufacturers must carry out scenario analysis to assess the risk of poor outcomes for consumers and the circumstances in which they may occur. **(PROD 3.2.13R)**

This is **product-level** scenario testing — distinct from firm-level prudential stress testing. The analysis must cover how the specific instrument performs under adverse conditions, not just whether the firm as a whole can survive market stress.

### What Adequate Testing Covers

- **Resilience under volatile market conditions** — how the product performs during periods of market stress
- **Asset-specific stresses** — stresses relevant to the underlying assets of the fund (credit stress for fixed income, liquidity stress for illiquid assets, etc.)
- **Concentrated investor base risk** — the risk that a highly concentrated investor base creates redemption pressure that adversely affects remaining investors
- **Commercial viability** — whether the product remains commercially viable under stressed conditions (a product that becomes unviable may be wound up in adverse conditions, causing harm to investors)

### Named Failures (FCA 2021 Review)

- Analysis that does not account for product-specific characteristics (generic market scenarios applied to all products regardless of asset class)
- Over-reliance on backward-looking scenarios — scenarios should reflect recent developments and forward-looking risks
- Failure to consider the firm's own financial strength as a factor in product resilience

Additional applicable rules for specific fund types: BIPRU 12.4.1R (liquidity); COLL 6.12 (scheme property and borrowing); FUND 3.7 (AIF risk management).

---

## Costs and Charges Disclosure

Manufacturers must disclose costs and charges in a way that is **clear, fair and not misleading** and complies with regulatory requirements. **(PRIN 7)**

Marketing material must not contradict or reduce the significance of figures in regulated documents (UCITS KIID, PRIIPs KID). Showing lower cost figures on a factsheet than in the KID is a named regulatory breach under the PRIIPs Regulation. **(FCA 2019 review)**

Portfolio transaction costs must be included in cost disclosures. The FCA identified their omission in both the 2019 costs disclosure review and the 2021 product governance review — it is the single most persistent costs disclosure failure observed across both reviews. Four specific transaction cost calculation failure modes have been identified, including arrival price methodology misapplied to primary issues (producing negative costs) and anti-dilution levy misuse. See [[costs-charges-disclosure]] for the full framework including the UCITS KIID material transaction cost obligation, disclosure accessibility requirements, and the prohibition on using AMC as a headline figure.

---

## Distributor Cooperation and Information Flow

### Manufacturer Obligations

Manufacturers must conduct **due diligence on distributors** to establish whether:
- The distributor is fit for purpose in client onboarding
- The distributor's intended client base matches the manufacturer's target market

The FCA's 2021 review found quality of distributor due diligence was variable. Some firms claimed that due diligence adds little value — a position the FCA rejected. Inadequate due diligence increases the risk that products reach investors for whom they are not appropriate.

### The Information Flow Problem

All 8 manufacturers in the 2021 review faced challenges obtaining end-client data from distributors. Manufacturers need this data to:
- Monitor whether the product is reaching the target market
- Conduct ongoing product reviews
- Identify emerging harm

The FCA found that **commercial sensitivities** between manufacturers and distributors — and in some cases the manufacturer's smaller size relative to the distributor — were allowed to take precedence over regulatory obligations. The most problematic channel: **pooled nominee accounts for execution-only clients**, where asset managers rely entirely on distributors for end-investor information.

**The FCA's position:** Commercial sensitivity is not a defence. Manufacturers must actively challenge their distributors for end-client data and **document that challenge** — even if the distributor does not cooperate. The documentation of the attempt is itself evidence of compliance effort.

### Management Information

Manufacturers should maintain systems and procedures for monitoring distribution data internally. The FCA's 2015 TCF–MI guide provides good practice examples that remain applicable.

---

## Governance and Oversight

### Product Governance Committees

Manufacturers should operate product governance committees to provide structured oversight of product design, review and distribution. Where the second line of defence's role within these committees is poorly defined, the potential for meaningful challenge is limited — a named FCA finding.

### AFM Board Obligations

The AFM Board has specific product governance oversight obligations. The Board must receive and interrogate the output of product governance committees and second-line review functions.

Independent Non-Executive Directors (NEDs) must contribute meaningfully to this oversight. The FCA found a named failure: **NEDs limiting challenge to their area of personal expertise** — for example, a NED with investment management experience challenging investment decisions but not governance, compliance, or distribution processes. Adequate challenge must extend across all areas of product governance responsibility.

### Record Keeping

Manufacturers must document product governance activities, including:
- Challenge made at product design stage
- Decisions taken and the reasoning behind them
- Oversight activities (committee reviews, sign-offs, escalations)

**Poor record keeping creates direct SM&CR personal accountability risk.** Where an individual accountable for product governance cannot evidence that challenge and oversight took place, they may be in breach of **SYSC 9.1.1R** (record keeping). The inability to evidence robust challenge is a problem for the individuals concerned — not only for the firm. **(FCA 2021 review; SYSC 9.1.1R)**

### Training

Staff involved in product governance must have sufficient knowledge of:
- The characteristics of the financial instruments they manage
- The investment services the firm provides
- The needs, characteristics and objectives of the identified target market

Training that does not adequately cover end-investor needs and outcomes is insufficient. **(SYSC 5.1)**

---

## Key Points for Agents

- Negative target market identification (PROD 3.2.10R) is mandatory and distinct from positive target market identification — a product assessment without a negative target market is incomplete. Near-universal non-compliance was found in the FCA's 2021 review.
- PROD 3.2.13R product scenario testing is instrument-level — it assesses how the specific product performs under stress (asset stress, investor concentration, market volatility), not whether the firm survives. It differs in purpose from firm-level prudential stress tests.
- Manufacturer–distributor information flow failure is systemic. Commercial sensitivity does not excuse failure to obtain end-client data; manufacturers must document their challenge attempts.
- AFM Boards must ensure NED challenge covers all product governance areas — challenge limited to an individual director's expertise is a named FCA failure.
- Undocumented product governance challenge is an SM&CR personal liability risk under SYSC 9.1.1R: individuals who cannot evidence oversight may be personally in breach, not just the firm.
- PROD 3 applies to AFMs as guidance; binding obligations come from COBS, COLL, and the Principles. Consumer Duty Products & Services outcome compliance and PROD compliance are treated as equivalent — not cumulative.

## Related Articles

- [[smcr-senior-managers-regime]]
- [[mifid-ii-product-governance-review-2021]]
- [[consumer-duty-products-services]]
- [[consumer-duty-price-value]]
- [[consumer-duty-overview]]
- [[dear-ceo-letter-wealth-stockbroking-2023]]
- [[costs-charges-disclosure]]
- [[fca-costs-charges-disclosure-review-2019]]
- [[payment-for-order-flow]]
- [[fca-pfof-supervisory-report-2019]]
- [[advice-suitability-cobs9]]
- [[fca-assessing-suitability-review-2017]]
