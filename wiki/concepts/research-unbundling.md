---
title: "Research Unbundling — COBS 2.3B"
jurisdiction: UK
regulator: FCA
regulation: COBS 2.3B; MiFID Delegated Directive art. 13
status: current
effective_date: 2018-01-03
last_updated: 2026-04-30
sources:
  - "COBS 2.3B.3R — three permissible payment routes"
  - "COBS 2.3B.4R — RPA conditions (volume/value de-linkage)"
  - "COBS 2.3B.7R–2.3B.8R — budget ceiling; surplus rebate"
  - "COBS 2.3B.11R–2.3B.12R — governance; written policy"
  - "COBS 2.3B.20R — on-request disclosure"
  - "COBS 2.3B.23G — negative list: not research"
  - "COBS 2.3B.25R — joint payments conditions"
  - "COBS 2.3B.29R — research ≠ execution factor"
  - "COBS 2.3B.30R–2.3B.31R — joint payments disclosure"
tags: [COBS-2-3B, research-unbundling, research-payment-account, RPA, joint-payments, MiFID-II, inducements, best-execution, COBS-2-3A, UK, FCA]
related:
  - summaries/cobs2-3b-inducements-research.md
  - summaries/cobs2-3a-inducements.md
  - concepts/inducements-framework.md
  - concepts/best-execution-framework.md
  - summaries/cobs11-dealing-managing.md
  - concepts/payment-for-order-flow.md
  - concepts/sysc10-conflicts-of-interest.md
---

# Research Unbundling — COBS 2.3B

## What This Document Covers

COBS 2.3B is the MiFID II research unbundling regime. Its central purpose is to sever the traditional link between payments for research and the execution of client orders — ending the practice of brokers providing "free" research as an inducement for order routing.

Under pre-MiFID II arrangements, asset managers could receive research from brokers paid through a bundled commission on trades. MiFID II made that model illegal: research received in that way now constitutes an inducement under COBS 2.3A.5R unless it is received through one of the three permissible routes in COBS 2.3B. The hard Rule at COBS 2.3B.29R — **research services must not be treated as an execution factor** — closes the back door of re-bundling research into the best execution analysis.

---

## The Three Permissible Routes

Research is only outside the inducements prohibition if received in return for one of three payment mechanisms **(COBS 2.3B.3R)**:

**Route 1 — Direct payment:** The firm pays from its own resources. No conditions. The cost is absorbed by the firm, not passed to clients as a research charge. This is the structurally cleanest route but commercially disfavoured for large research budgets.

**Route 2 — Research Payment Account (RPA):** A separate account controlled by the firm, funded by a specific research charge agreed with clients. The account is ring-fenced, governed by an annual budget, and subject to quality assessment and audit. Surplus must be rebated or carried forward — it cannot be retained.

**Route 3 — Joint payments:** Combined payment for research and execution services, with the research cost separately identified within the total charge. Requires a written policy, a research provider payment allocation structure, an annual budget not linked to transaction volumes, periodic assessment, and a client disclosure package.

---

## Research Payment Account — Core Rules

### The Volume/Value De-Linkage (COBS 2.3B.4R(1)(b))

The RPA research charge to clients must not be linked to the volume or value of transactions executed on behalf of clients. This is the single most important RPA condition. It is the mechanism by which COBS 2.3B achieves genuine unbundling — any link between what clients pay for research and how much trading they do recreates the bundled commission model in a different form.

**What "not linked" means in practice:**
- The research charge must be based on a budget the firm sets based on its assessment of research needs — not on expected or actual trading volumes.
- A flat annual fee per client or a fixed percentage of AUM that is stable regardless of trading activity is acceptable.
- A per-transaction research levy, or a charge that scales with transaction volumes, fails the test.
- A charge based on AUM where AUM closely tracks trading activity requires careful analysis — the link to volumes may be indirect but real.

### Budget Discipline

The firm must set a research budget before the period begins and agree it with clients. Three additional budget constraints apply:

**Ceiling:** Total research charges collected must not exceed the budget **(COBS 2.3B.7R(1))**.

**No internal research:** The budget and RPA cannot be used to fund internally-generated research **(COBS 2.3B.7R(2))**. Firms cannot use client money in an RPA to subsidise their own investment research teams.

**Surplus:** If funds remain at period end, the firm must either rebate to clients or offset against next period's budget and charge **(COBS 2.3B.8R(3))**. The firm cannot retain the surplus.

### Governance Requirements (COBS 2.3B.11R)

Three layers of RPA governance are mandatory:

1. **Sole management by firm:** Research budget managed solely by the firm, based on a reasonable assessment of need for third-party research. No co-management with a broker or research provider.

2. **Senior management oversight:** Budget allocation subject to appropriate controls and senior management oversight to ensure it is managed in clients' best interests.

3. **Audit trail:** Clear record of (a) payments made to research providers; and (b) how amounts paid were determined, by reference to quality criteria and the firm's written research policy.

### Written Policy (COBS 2.3B.12R)

Mandatory for any firm using an RPA. Must address:
- How the firm complies with the quality assessment criteria in COBS 2.3B.4R(4); and
- How research purchased may benefit clients' portfolios across investment strategies, and how costs are fairly allocated.

The policy must be **provided to clients**. An internal-only policy does not satisfy the requirement.

### Delegation

A firm may delegate RPA administration to a third party **(COBS 2.3B.18R)**, but retains full responsibility. The third-party arrangement must ensure **(COBS 2.3B.19G)**:
- Client research charges clear into the RPA within 30 days of deduction from the client's account;
- Firm retains sole, full and absolute discretion over payments and rebates;
- RPA monies are ring-fenced from the administrator's assets;
- Administrator has no right of recourse to RPA funds for its own account.

---

## What Is Not Research — The 12-Item Negative List (COBS 2.3B.23G)

None of the following can be paid from an RPA or through joint payments:

| # | Category |
|---|----------|
| 1 | Post-trade analytics |
| 2 | Price feeds or historical price data not analysed to provide meaningful conclusions |
| 3 | Portfolio valuation or performance measurement services |
| 4 | Seminar fees |
| 5 | Corporate access services |
| 6 | Subscriptions for publications |
| 7 | Travel, accommodation or entertainment |
| 8 | Order and execution management systems |
| 9 | Membership fees to professional associations |
| 10 | Direct money payments |
| 11 | Administration of an RPA |
| 12 | Administration of joint payment accounts or research provider payment allocation structures |

**Practical implication:** The cost of administering the RPA itself (item 11) cannot be funded from the RPA — it must come from the firm's own resources. Similarly, a Bloomberg terminal, an OMS, post-trade TCA, and performance attribution tools cannot be characterised as research and cannot flow through the RPA regardless of their analytical content.

**Note on corporate access (item 5):** Corporate access services are excluded from RPA/joint payment funding. However, for companies with market cap below £200m, they can be received as acceptable minor non-monetary benefits under COBS 2.3A.19R(5)(k) — the NMB route and the RPA route are entirely separate **(COBS 2.3B.22G)**.

---

## Research Must Not Be an Execution Factor (COBS 2.3B.29R)

This hard Rule is the anti-re-bundling provision. A firm must not treat research services as an execution factor when determining the relative importance of execution factors under COBS 11.2A.2R.

**What this prevents:** Pre-MiFID II, firms could argue that routing to a broker who provided "quality research" was consistent with best execution because research contributes to better investment decisions. COBS 2.3B.29R closes that argument. Research provision by a broker cannot be a reason to route orders to that broker.

**Interface with PFOF:** COBS 11.2A.19R prohibits receiving remuneration for routing client orders to a particular venue in a way that infringes SYSC 10 or COBS 2.3A. A firm that routes orders to a broker partly because of that broker's research, and that broker's research is received in a way that constitutes an inducement under COBS 2.3A, infringes both COBS 11.2A.19R and COBS 2.3B.29R simultaneously.

A firm must not enter into any research arrangements — under any of the three routes — that would compromise its best execution obligations under COBS 11.2A **(COBS 2.3B.24G)**.

---

## Joint Payments — Key Operational Points

The joint payments route (Route 3) allows research costs to be bundled into the execution commission but requires the research element to be separately identified and governed. Key requirements distinct from the RPA route:

**Research provider payment allocation structure (COBS 2.3B.25R(3)):** Required to allocate costs between providers that supply both research and execution (integrated brokers) and independent research providers who are not in a financial services group offering execution. The allocation structure is what gives the FCA visibility into how much of the joint payment is attributable to research vs execution.

**Budget not linked to transaction volumes (COBS 2.3B.25R(5)(a)):** Same de-linkage principle as the RPA route applies to joint payments. The research budget element must be based on expected research needs, not expected trading activity.

**Budget overrun policy (COBS 2.3B.26R):** If research charges to clients exceed the budget, or the budget is increased, the firm's written joint payments policy must specify the actions to be taken and the information to be disclosed to clients. This is a hard Rule — the policy must exist before any overrun occurs.

**Annual disclosure obligations (COBS 2.3B.30R–2.3B.31R):** Before service commencement and annually: use of joint payments, policy key features, expected annual costs, most significant benefits received and provider types. Ex-post annually: total actual costs separately identified in costs and charges disclosures.

---

## Key Points for Agents

- **Three routes; no others.** Direct payment (own resources); RPA (COBS 2.3B.4R); joint payments (COBS 2.3B.25R). Research received outside these routes is an inducement under COBS 2.3A and cannot be rehabilitated by disclosure.
- **Volume/value de-linkage (2.3B.4R(1)(b)) is the definitional core of the RPA.** Any link — direct or indirect — between what clients pay for research and transaction execution volumes or values fails this test. This is the single most frequent compliance failure in RPA structures.
- **RPA surplus must be rebated or carried forward — never retained (2.3B.8R(3)).** Retained surpluses are a breach. The FCA treats persistent RPA surpluses as indicative of over-charging clients for research.
- **Administration costs for the RPA cannot be paid from the RPA (2.3B.23G item 11).** They must come from the firm's own resources. This includes the cost of the third-party administrator.
- **Research is not an execution factor — hard Rule (2.3B.29R).** Routing to a broker because of research provision infringes both COBS 2.3B and COBS 11.2A.19R. Best execution analysis must be conducted independently of research relationships.
- **Written policy must be given to clients (2.3B.12R(2); 2.3B.25R(1)).** An internal-only policy does not satisfy the requirement for either the RPA or joint payments route. The client disclosure of policy content is itself a hard Rule condition, not guidance.

## Related Articles

- [[cobs2-3b-inducements-research]]
- [[cobs2-3a-inducements]]
- [[inducements-framework]]
- [[best-execution-framework]]
- [[cobs11-dealing-managing]]
- [[payment-for-order-flow]]
- [[sysc10-conflicts-of-interest]]
