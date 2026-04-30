---
title: "Best Execution — COBS 11 Three-Track Framework"
jurisdiction: UK
regulator: FCA
regulation: COBS 11.2; COBS 11.2A; COBS 11.2B; MiFID II art. 27; UCITS implementing Directive arts. 25–26
status: current
effective_date: 2018-01-03
last_updated: 2026-04-29
sources:
  - "COBS 11.2.1R–11.2.34R (AIFMs and residual CIS operators)"
  - "COBS 11.2A.2R–11.2A.37R (MiFID provisions)"
  - "COBS 11.2B.4R–11.2B.37R (UCITS management companies)"
tags: [best-execution, COBS-11, MiFID-II, order-execution-policy, execution-factors, total-consideration, OTC, AIFM, UCITS, PFOF, retail-client, professional-client, UK, FCA]
related:
  - summaries/cobs11-dealing-managing.md
  - concepts/payment-for-order-flow.md
  - summaries/fca-pfof-supervisory-report-2019.md
  - concepts/sysc10-conflicts-of-interest.md
  - concepts/costs-charges-disclosure.md
  - summaries/dear-ceo-letter-wealth-stockbroking-2023.md
  - concepts/client-order-handling.md
  - summaries/cobs2-3b-inducements-research.md
  - concepts/research-unbundling.md
  - summaries/cobs2-3a-inducements.md
  - concepts/inducements-framework.md
---

# Best Execution — COBS 11 Three-Track Framework

## The Three Parallel Tracks

COBS 11 contains three separate best execution regimes. The track that applies to a given firm depends on the type of firm and the activity in question. The regimes are mutually exclusive per firm type — a firm must determine which applies and apply that track in full.

| Track | Applies to | Legal standard | Source |
|-------|-----------|---------------|--------|
| **COBS 11.2** | Small authorised UK AIFMs, residual CIS operators, full-scope UK AIFMs (with modifications) | "All **reasonable** steps" | COBS 11.2.1R |
| **COBS 11.2A** | MiFID investment firms | "All **sufficient** steps" | COBS 11.2A.2R |
| **COBS 11.2B** | UCITS management companies (scheme management activity) | "All **sufficient** steps" at scheme level | COBS 11.2B.5R |

**The "all sufficient steps" standard is higher than "all reasonable steps."** This is a deliberate MiFID II uplift, not a drafting difference. MiFID firms (COBS 11.2A) and UCITS ManCos (COBS 11.2B) face the higher bar.

**Disapplications:**
- Best execution does **not** apply to spread-bets that are not financial instruments where no personal recommendation was made **(COBS 11.1.6R)**
- Best execution does **not** apply when a CIS operator buys or sells its own units **(COBS 11.1.7R)**

---

## Execution Factors

The execution factors that must be taken into account differ slightly by track.

**COBS 11.2A.2R(2) — MiFID firms:** Price, costs, speed, likelihood of execution and settlement, size, nature, and any other consideration relevant to the execution of an order. [Note: MiFID article 27(1)]

**COBS 11.2B.5R — UCITS ManCos:** Price, costs, speed, likelihood of execution, likelihood of settlement, order size and nature, and any other consideration relevant to the execution of the decision. [Note: UCITS implementing Directive, article 25(2)]

**COBS 11.2 (AIFMs/CIS):** Execution factors are referenced generically in COBS 11.2.1R, with criteria for weighting them set out in COBS 11.2.6R.

---

## Determining the Relative Importance of Execution Factors

### COBS 11.2A (MiFID firms) — Four Criteria

**COBS 11.2A.8R(1):** When executing client orders, a firm must take into account the following criteria for determining the relative importance of execution factors:
- (a) Characteristics of the **client**, including retail/professional categorisation
- (b) Characteristics of the **client order**, including where it involves a securities financing transaction
- (c) Characteristics of the **financial instruments** subject to that order
- (d) Characteristics of the **execution venues** to which that order can be directed

### COBS 11.2 (AIFMs/CIS) — Same Four Criteria

**COBS 11.2.6R** uses the same four criteria: client characteristics (incl. retail/professional); client order characteristics; financial instrument characteristics; execution venue characteristics.

### COBS 11.2B (UCITS ManCos) — Scheme-Specific Weighting

**COBS 11.2B.7R:** A management company must determine the relative importance of execution factors by reference to:
1. The **objectives, investment policy, and risks specific to the scheme** (as indicated in its prospectus or instrument constituting the fund)
2. Characteristics of the order (including SFTs)
3. Characteristics of the financial instruments
4. Characteristics of the execution venues

Criterion (1) is the structural difference from COBS 11.2A: UCITS ManCos weight execution factors by the **scheme's own investment mandate** rather than by the characteristics of a client investor.

---

## The Retail Client Total Consideration Rule

This rule applies across all three tracks and is the most important constraint on how execution factors can be weighted for retail clients.

**COBS 11.2.7R / 11.2A.9R:** Where a firm executes an order on behalf of a retail client, the **best possible result must be determined in terms of total consideration** — meaning the price of the financial instrument plus all costs related to execution, including execution venue fees, clearing fees, settlement fees, and any other fees paid to third parties involved in the order.

**COBS 11.2.8G / 11.2A.11G:** Speed, likelihood of execution and settlement, order size and nature, market impact, and any other implicit transaction costs **may be given precedence** over the immediate price and cost consideration — but **only insofar as they are instrumental in delivering the best possible result in terms of total consideration** to the retail client.

This is a hard constraint: other execution factors cannot simply be ranked above price and cost. They can only displace them to the extent they serve to achieve a better total consideration outcome. A policy that routinely prioritises speed over price for retail clients without a robust evidential basis would fail this rule.

---

## OTC Price Fairness Check — Hard Rule

**COBS 11.2A.8R(4) (MiFID firms):** A firm must, when executing orders or taking decisions to deal in **OTC products including bespoke products**, check the fairness of the price proposed to the client by:
- Gathering market data used in the estimation of the price of such product; and
- Where possible, comparing with similar or comparable products

**COBS 11.2B.13R (UCITS ManCos):** Same obligation — must check fairness of price proposed to the scheme by gathering market data and comparing with similar/comparable products.

This is a hard **Rule** in both tracks, not guidance. It requires active price verification activity, not passive execution. An OTC execution without a documented market data check is a breach.

---

## Back-to-Back / Matched Principal Dealing

**COBS 11.2A.5G:** Executing orders from different clients on a matched principal basis (back-to-back trading) is regarded as acting as **principal**. Such activities are subject to best execution requirements for both the execution of orders on behalf of clients and dealing on own account simultaneously.

This matters for firms that argue they are not subject to best execution when they internalise client orders — matched principal dealing does not provide an escape from best execution obligations.

---

## Specific Client Instructions — Partial Carve-Out

**COBS 11.2A.12R / COBS 11.2.19R:** Whenever there is a specific instruction from a client, a firm must execute the order following the specific instruction.

**COBS 11.2A.13G / COBS 11.2.20G:** Following a specific instruction satisfies best execution **only in respect of the part or aspect covered by that instruction**. The firm remains fully obligated to achieve best execution for all other parts and aspects of the client order that are not covered by the instruction.

**COBS 11.2A.14G / COBS 11.2.21G:** A firm must **not induce** a client to instruct it to execute in a particular way when the firm ought reasonably to know that instruction is likely to prevent it from obtaining the best possible result for that client. However, a firm may invite a client to choose between two or more specified trading venues, provided those venues are consistent with the firm's execution policy.

---

## PFOF Prohibition — Anchor Rule in COBS 11

**COBS 11.2A.19R:** A firm must **not receive any remuneration, discount or non-monetary benefit for routing client orders to a particular trading venue or execution venue** which would infringe the requirements on conflicts of interests (SYSC 10) or inducements as set out in COBS 2.3A (for MiFID business). [Note: MiFID article 27(2)]

This is the **primary sourcebook anchor for the Payment for Order Flow prohibition** in MiFID business. See [[payment-for-order-flow]] and [[fca-pfof-supervisory-report-2019]] for the operational framework and named pretextual structures.

The equivalent prohibition for UCITS ManCos is in **COBS 11.2B.10R** (same structure, referencing SYSC 10 and COBS 2.3/COBS 18 Annex 1).

## Research — Not an Execution Factor

**COBS 2.3B.29R:** Research services must **not be treated as an execution factor** under COBS 11.2A.2R.

This hard Rule prevents re-bundling of research and execution through the best execution framework. A firm cannot route client orders to a broker partly on the basis that broker provides research services — doing so would circumvent the COBS 2.3B unbundling regime and would simultaneously infringe COBS 11.2A.19R if the research received constitutes an inducement under COBS 2.3A.

A firm must not enter into any research payment arrangements that would compromise its ability to meet its best execution obligations **(COBS 2.3B.24G)**. See [[research-unbundling]] for the full COBS 2.3B framework.

---

## Order Execution Policy Requirements

All three tracks require a firm to establish and implement an order execution policy. The key requirements are common across tracks with some variation in detail.

### Policy Content

The policy must include, for each class of financial instruments **(COBS 11.2.15R; 11.2A.21R; 11.2B.18R)**:
- Information on the execution venues (for COBS 11.2B: also the entities with which orders are placed)
- Factors affecting choice of venue
- Must include at least those venues that enable the firm to obtain the best possible result on a consistent basis

For MiFID firms (COBS 11.2A), the policy disclosed to retail clients must also include **(COBS 11.2A.25R(3)–(9))**:
- Account of relative importance of execution factors or the process for determining this
- List of venues by financial instrument class, specifying which are used for retail, professional, and SFT orders
- List of factors used to select venues (including qualitative factors: clearing schemes, circuit breakers, scheduled actions)
- How execution factors are considered
- Where applicable, that orders may be executed outside a trading venue, the consequences (e.g. counterparty risk), and that additional information is available on request
- Clear and prominent warning that specific client instructions may prevent best execution
- Summary of the selection process, execution strategies, quality analysis procedures, and how best possible results are monitored and verified

### Consent Requirements

**All firms:** Must obtain prior consent of clients to the execution policy **(COBS 11.2.25R; 11.2A.23R)**.

**Additional for execution outside a regulated market/MTF (COBS 11.2) or trading venue (COBS 11.2A):** Must obtain **express prior consent** before executing outside a regulated market/MTF or trading venue. This may be given as a general agreement or in respect of individual transactions **(COBS 11.2.26R; 11.2A.24R)**.

**UCITS ManCos:** Must obtain prior consent of the ICVC or investment company (where applicable) to the execution policy **(COBS 11.2B.26R)**.

### Review Requirements

All three tracks require **(COBS 11.2.28R; 11.2A.25R; 11.2B.28R)**:
- Review of the execution policy and order execution arrangements at **least annually**
- Review whenever a **material change** occurs that affects the firm's ability to continue to obtain the best possible result on a consistent basis
- For MiFID firms: review must also consider making changes to the relative importance assigned to execution factors in meeting the best execution obligation

### Monitoring and Notification

All three tracks require ongoing monitoring of the effectiveness of execution arrangements and notification to clients (or unitholders) of any **material changes** to those arrangements **(COBS 11.2.27R; 11.2A.31R; 11.2B.27R)**.

### Demonstrability

**COBS 11.2.29R / 11.2B.23R:** A firm must be able to demonstrate to its clients (or unitholders), at their request, that it has executed their orders (or scheme orders) in accordance with its execution policy.

**COBS 11.2A.32R:** Additionally for MiFID firms, a firm must be able to demonstrate **to the FCA**, at its request, compliance with COBS 11.2A.2R and related provisions.

---

## Portfolio Managers and Receivers/Transmitters

Where a firm provides portfolio management or reception and transmission of orders (RTO), it must comply with the client's best interests rule when placing orders with other entities for execution.

**COBS 11.2A.34R (MiFID):** The firm must: (1) take all sufficient steps to obtain the best possible result taking into account the execution factors; (2) establish and implement a policy identifying execution entities per instrument class; (3) provide information to clients on the policy; (4) monitor on a regular basis; (5) review at least annually. Following specific client instructions satisfies the obligation for the covered aspect only.

**COBS 11.2.30R–11.2.32R (AIFMs/CIS):** Same framework — act in clients' best interests, establish policy, monitor, review annually.

**No double-counting of effort (COBS 11.2A.35G / 11.2.33G):** This section is not intended to require duplication of effort where a firm provides portfolio management or RTO and another firm executes the orders — there is no double obligation between the transmitting and executing firm.

---

## Commission Non-Discrimination

**COBS 11.2.12R / 11.2A.8R(3) / 11.2B.11R:** A firm must not structure or charge its commissions in a way that **discriminates unfairly between execution venues**.

**COBS 11.2.13G / 11.2A.17G / 11.2B.12G:** A firm would be considered to discriminate unfairly if it charged a different commission or spread to clients for execution on different execution venues and that difference did not reflect actual differences in the cost to the firm of executing on those venues.

The firm's own commission for providing an investment service is **excluded** when determining which execution venues to include in the execution policy **(COBS 11.2.17G; 11.2A.18G; 11.2B.9G)** — i.e., the policy does not need to be designed around recovering the firm's own fee.

---

## Single Execution Venue in the Policy

**COBS 11.2A.29G:** An investment firm executing orders may include a single execution venue in their policy only where they are able to show that this allows them to obtain best execution for their clients on a consistent basis. The firm may select a single venue only where it can **reasonably expect** that the selected venue will enable it to obtain results that are at least as good as the results it could reasonably expect from using alternative venues. This expectation must be supported by **relevant data or other internal analyses**.

**COBS 11.2B.22G:** Same principle for management companies.

---

## Key Points for Agents

- **"All sufficient steps" (MiFID/UCITS ManCo) vs "all reasonable steps" (AIFMs/CIS):** The MiFID/UCITS standard is deliberately higher. A firm subject to COBS 11.2A cannot argue "reasonable steps" suffice — the bar is "sufficient steps." **(COBS 11.2.1R; 11.2A.2R; 11.2B.5R)**
- **Retail client total consideration rule is a constraint, not a weighting option:** Other execution factors (speed, likelihood, size) can only take precedence over price and cost to the extent they actually deliver a better total consideration outcome for the retail client. A policy that routinely prioritises speed over price without evidential support fails this rule. **(COBS 11.2.7R; 11.2A.9R)**
- **OTC price fairness check is a hard Rule:** For MiFID firms and UCITS ManCos, executing an OTC product (including bespoke) without gathering market data to verify price fairness is a breach of COBS 11.2A.8R(4) / COBS 11.2B.13R. This is not discretionary.
- **PFOF prohibition is in COBS 11.2A.19R:** The primary sourcebook anchor for the PFOF prohibition in MiFID business — no remuneration for routing in a way that infringes SYSC 10 conflicts or COBS 2.3A inducements. Equivalent provision for UCITS ManCos at COBS 11.2B.10R.
- **Specific instructions partially satisfy best execution:** Following a specific client instruction satisfies best execution only for the aspect covered. The firm remains obligated for all uncovered aspects. Firms must not induce clients to give instructions that prevent best execution. **(COBS 11.2A.12R–14G)**
- **Annual review is mandatory** for all three tracks, plus review on material change; and clients/unitholders must be notified of any material changes to execution arrangements. **(COBS 11.2.27R–28R; 11.2A.25R–31R; 11.2B.27R–28R)**

## Related Articles

- [[cobs11-dealing-managing]]
- [[payment-for-order-flow]]
- [[fca-pfof-supervisory-report-2019]]
- [[inducements-framework]]
- [[cobs2-3a-inducements]]
- [[sysc10-conflicts-of-interest]]
- [[costs-charges-disclosure]]
- [[dear-ceo-letter-wealth-stockbroking-2023]]
- [[client-order-handling]]
