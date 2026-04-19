---
title: "Costs and Charges Disclosure — Investment Products"
jurisdiction: UK
regulator: FCA
regulation: UCITS KII Regulation; PRIIPs Regulation; MiFID II; PRIN 7; SYSC; TR 14-07
status: current
effective_date: 2018-01-03
last_updated: 2026-04-13
sources:
  - "FCA, 'Review on disclosure of costs by asset managers', 28 February 2019"
tags: [costs-disclosure, transaction-costs, PRIIPs, UCITS, KIID, KID, MiFID-II, asset-management, AMC, ongoing-charges, ongoing-charges-figure, UK, FCA]
related:
  - summaries/fca-costs-charges-disclosure-review-2019.md
  - concepts/prod-product-governance.md
  - summaries/mifid-ii-product-governance-review-2021.md
  - concepts/consumer-duty-price-value.md
  - concepts/consumer-duty-consumer-understanding.md
  - concepts/advice-suitability-cobs9.md
  - summaries/fca-assessing-suitability-review-2017.md
---

# Costs and Charges Disclosure — Investment Products

## Regulatory Framework

Three instruments set the requirements for cost disclosure in investment products. They interact and must all be satisfied simultaneously:

| Instrument | Primary obligation | Applies to |
|------------|-------------------|-----------|
| **PRIIPs Regulation** | KID: aggregate costs including transaction costs, ongoing charges, performance fees, borrowing costs; marketing material must not contradict KID | Packaged retail investment products, including most funds sold to retail investors |
| **UCITS KII Regulation** | KIID: ongoing charges in charges section; material portfolio transaction costs in "objectives and investment policy" section | UCITS funds |
| **MiFID II** | Cost disclosure to clients including transaction costs; manufacturers must supply transaction cost data to enable distributor MiFID II compliance | Investment firms, including asset managers distributing via intermediaries |
| **PRIN 7 / COBS** | All communications must be fair, clear and not misleading — overrides apply to everything | All FCA-regulated firms |

For NURS (Non-UCITS Retail Schemes), the fund manager may produce either a PRIIPs KID or a NURS-KII document compliant with the modified UCITS KII Regulation.

---

## Transaction Cost Calculation

### What Must Be Calculated

Transaction costs are the implicit and explicit costs of trading the fund's portfolio — dealing spreads, broker commissions, taxes on transactions. They are a real cost borne by investors through the fund's portfolio performance, distinct from the ongoing charges figure.

Manufacturers must calculate transaction costs and provide them to distributor firms to enable distributors to meet their own MiFID II cost disclosure requirements.

### Four Named Calculation Failure Modes

#### 1. Arrival Price Methodology Misapplied to Primary Issues

The arrival price methodology is used to calculate implicit transaction costs (market impact costs). Some firms incorrectly apply it when subscribing to **primary issues** (new issues). Properly applied, primary issues should carry **no transaction cost** (zero), per the ESMA PRIIPs Q&A. Misapplication credits the product with a **negative transaction cost** each time it subscribes to a new issue, artificially reducing the reported transaction cost figure.

**Why it matters:** A negative transaction cost component causes the overall disclosed transaction cost figure to understate the true cost of investing. Investors are misled about the cost of the strategy.

#### 2. Anti-Dilution Levy Misuse

The anti-dilution levy (ADL) is a mechanism to protect existing investors from the trading costs triggered when other investors enter or exit the fund. It is a legitimate tool for reducing dilution — not for reducing the stated transaction cost figure. Some firms apply ADLs in a way that offsets more than the actual explicit and implicit trading costs, producing a **net negative transaction cost figure**.

**The test:** The ADL should be no greater than the total trading costs it is designed to offset. Where an ADL exceeds total explicit plus implicit costs, the net is negative — which is not a meaningful disclosure.

#### 3. Ineffective Oversight of Outsourced Calculation

Some asset managers outsource transaction cost analysis and calculation, sometimes to overseas jurisdictions. Compliance responsibility **remains with the authorised firm**. Specific requirements apply to AFMs that outsource certain activities. The FCA found instances of firms failing to effectively supervise outsourced transaction cost calculation — accepting incorrect outputs without meaningful review. **(SYSC)**

#### 4. UCITS Underlying Fund Costs Under "Other Ongoing Costs"

UCITS that invest in other collective investment schemes (fund-of-funds structures) may disclose the transaction costs of the underlying funds under the "other ongoing costs" classification rather than the transaction costs line. This is consistent with existing guidance but results in a transaction cost figure of **zero** for the top-level UCITS. Agents should treat a reported zero transaction cost figure in a UCITS with caution — it may reflect this classification choice rather than genuinely zero trading activity.

---

## Disclosure Consistency Obligations

### PRIIPs KID — The Mandatory Floor

The PRIIPs KID is the primary regulated disclosure document for in-scope products. It must disclose all costs and charges: ongoing charges, transaction costs, performance fees, and borrowing costs. All other marketing material operates relative to the KID.

### The Non-Contradiction Rule

**The PRIIPs Regulation prohibits marketing material from reducing the significance of information in the KID.** This creates a specific legal standard that goes beyond the general "fair, clear and not misleading" obligation:

- Factsheets and website disclosures that show a **lower cost figure** than the KID contravene the Regulation, even if the factsheet figure is technically accurate in isolation
- Omitting cost components from marketing material that are disclosed in the KID reduces the significance of the KID figures — this is itself a breach
- Named example: KID disclosing ~3% total annual charges; factsheet disclosing only 1.2% AMC. The factsheet does not merely omit detail — it contradicts the KID's materiality signal

**Practical standard:** Factsheets and website cost sections must be consistent with KID cost figures. Where full disaggregated cost data is not provided in marketing material, the total figure should be provided and must not be lower than the KID equivalent.

### UCITS KIID — Material Transaction Cost Obligation

The UCITS KII Regulation requires that where portfolio transaction costs are likely to have a **material impact on returns** given the product's strategy, this must be disclosed in the **"objectives and investment policy" section** of the KIID — not just in a charges table, and not omitted.

This is a product-specific assessment. Factors bearing on materiality:
- High-turnover strategies (frequent trading increases transaction costs)
- Strategies trading in less liquid instruments (higher implicit costs per trade)
- Derivatives-heavy strategies with distinct execution cost profiles

The FCA found this requirement almost universally ignored in its 2019 sample. In one extreme case, **4% per annum in transaction costs** was omitted from the KIID entirely. **(FCA 2019 review)**

---

## Disclosure Accessibility

Beyond the accuracy and completeness of individual disclosures, the FCA treats **disclosure accessibility** as an independent regulatory concern.

Where all costs and charges are technically disclosed across multiple documents (KIID, KID, factsheet, website, supplementary pages), but are located in a way that requires **unreasonable effort** from customers to find, compile and understand, this can constitute a breach of the obligation to communicate clearly and not misleadingly. The FCA is particularly concerned where:
- Charges with a material impact on returns are located in documents separate from the headline product information
- Investors would need to review multiple documents, reconcile different formats, and aggregate figures themselves to understand total cost

**This failure mode applies even when no individual figure is technically incorrect.** Accessibility is a dimension of disclosure quality, not just of accuracy.

This dimension maps onto the Consumer Duty Consumer Understanding outcome — the obligation that communications demonstrably support consumers' ability to make effective decisions. **(PS22/9 §8.1)**

---

## AMC as Prohibited Headline Terminology

The **Annual Management Charge (AMC)** reflects only the manager's basic fee — it excludes administration charges, custody fees, audit costs, legal fees, and other expenses borne by the fund and therefore by investors.

The FCA identified use of AMC as a prominent headline cost figure as **potentially misleading** in TR 14-07 (FCA thematic review on clarity of fund charges, 2014). This is not a new or uncertain position — firms have been on notice since 2014.

The figure that should be used as the headline cost metric is the **Ongoing Charges Figure (OCF)**, which aggregates all recurring charges borne by the fund. For products in scope of the PRIIPs Regulation, the KID must disclose the full cost breakdown including transaction costs alongside ongoing charges.

The FCA's 2019 review found firms still using AMC as a prominent headline figure five years after TR 14-07. This continued use despite explicit prior guidance was treated as an aggravating compliance failure.

**What to check:** Any cost disclosure that leads with AMC without also providing OCF (or the full KID cost breakdown for PRIIPs products) is vulnerable to regulatory challenge.

---

## Relationship to Consumer Duty

- **Price & Value outcome:** Opaque fee disclosure and understatement of transaction costs are named failures under the Consumer Duty implementation review and the Dear CEO letter for wealth management firms. The 2019 review's findings predate the Duty but are directly relevant to the value assessment obligation — a firm cannot demonstrate fair value if its disclosed cost figures are understated or inconsistently presented. **(PS22/9 §7.1)**
- **Consumer Understanding outcome:** Disclosure accessibility failure (costs scattered across multiple documents) is a Consumer Understanding issue — communications must demonstrably support consumers' ability to make effective decisions. **(PS22/9 §8.1)**
- **PROD equivalence:** Firms meeting PROD 3 costs disclosure obligations satisfy the Consumer Duty Products & Services outcome. However, PROD compliance does not automatically satisfy the Consumer Understanding or Price & Value outcomes — those require separate assessment of whether the specific disclosures enable consumers to understand costs and whether the firm's pricing represents fair value.

---

## Key Points for Agents

- Four transaction cost calculation failure modes exist: arrival price misuse on primary issues (negative cost); anti-dilution levy misuse (negative net cost); outsourcing oversight failure; UCITS underlying fund costs misclassified as "other ongoing costs" (zero cost). Each produces understated disclosed transaction costs.
- PRIIPs KID is the disclosure floor; all marketing material (factsheets, websites) must not contradict or reduce the significance of KID figures. Showing lower cost figures in marketing material than in the KID is a named regulatory breach.
- Where a UCITS fund's strategy makes portfolio transaction costs likely to have a material impact on returns, those costs must appear in the "objectives and investment policy" section of the KIID — not just be absent. The FCA found near-universal non-compliance with this requirement in 2019.
- Disclosure accessibility is a standalone regulatory concern: costs technically available but requiring unreasonable effort to find and aggregate may constitute a breach even if no individual figure is incorrect.
- AMC as a headline cost figure has been identified as misleading since TR 14-07 (2014). OCF must be used instead; for PRIIPs products, the full KID cost breakdown is the mandatory disclosure.
- These failures compound: a firm can simultaneously understate transaction costs through calculation errors, contradict the KID in its factsheet, omit material costs from the KIID, and present the remainder in an inaccessible format — each as a separate breach.

## Related Articles

- [[fca-costs-charges-disclosure-review-2019]]
- [[prod-product-governance]]
- [[mifid-ii-product-governance-review-2021]]
- [[consumer-duty-price-value]]
- [[consumer-duty-consumer-understanding]]
- [[fca-assessing-suitability-review-2017]]
- [[advice-suitability-cobs9]]
