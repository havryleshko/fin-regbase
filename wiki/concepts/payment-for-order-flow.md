---
title: "Payment for Order Flow (PFOF) — MiFID II Conflicts of Interest Framework"
jurisdiction: UK
regulator: FCA
regulation: MiFID II; SYSC 10; COBS 2.1; MiFID Organisational Requirements Regulation Art. 34
status: current
effective_date: 2018-01-03
last_updated: 2026-04-13
sources:
  - "FCA, 'Payment for Order Flow (PFOF)', April 2019"
tags: [PFOF, payment-for-order-flow, conflicts-of-interest, best-execution, inducements, MiFID-II, SYSC-10, ECP, eligible-counterparty, broker, wholesale, exclusive-liquidity, UK, FCA]
related:
  - summaries/fca-pfof-supervisory-report-2019.md
  - concepts/prod-product-governance.md
  - summaries/mifid-ii-product-governance-review-2021.md
  - summaries/dear-ceo-letter-wealth-stockbroking-2023.md
---

# Payment for Order Flow (PFOF) — MiFID II Conflicts of Interest Framework

## What PFOF Is

Payment for Order Flow occurs when an investment firm (typically a broker) that sources liquidity and executes orders for its clients receives a fee or commission from **both**:
1. The client that originates the order, and
2. The counterparty — typically a market maker or other liquidity provider — that the trade is executed with

**(FCA PFOF report §1.1)**

This dual-sided charging arrangement creates a **conflict of interest** between the broker and its clients. The conflict arises because:
- The broker has a financial incentive to route client orders to counterparties based on their willingness to pay commissions — rather than on achieving the best execution outcome for the client
- The broker can make a financial gain at the expense of its clients, with an interest in the transaction that is contrary to clients' interests
- Liquidity providers who agree to pay PFOF widen bid-ask spreads to recover those payments — hidden costs that make the price formation process less transparent and efficient
- Order flow concentration to specific liquidity providers may distort competition and reduce market integrity

**(§1.2–1.3)**

---

## The Regulatory Position

**MiFID II requires firms to take "all appropriate" — not merely "reasonable" — steps to identify, prevent, or manage conflicts of interest.** MiFID II also explicitly requires firms to *prevent* conflicts in the first instance, relying on disclosure only as a last resort. **(§1.7)**

**The FCA's position:** When dealing with a direct, self-created conflict of interest — which is what PFOF represents — the most straightforward method of complying is to prevent the conflict from arising in the first place, that is, by not entering into PFOF arrangements at all.

The relevant rules are:
- **SYSC 10.1.3R** — Identify conflicts of interest that arise in the course of business, including between clients
- **SYSC 10.1.7R** — Prevent or manage conflicts; rely on disclosure only as a last resort
- **MiFID Organisational Requirements Regulation, Article 34(1)** — Conflicts of interest policy must be set out in writing
- **COBS 2.1.1R / 2.1.4R** — Act in the best interests of clients
- **MiFID II best execution** — Take all sufficient steps to achieve the best possible result

PFOF had largely ceased for **retail and professional client** business by the time of this review. The outstanding compliance problem was **Eligible Counterparty (ECP)** business. MiFID II conflicts of interest and inducements obligations apply to all client categories, including ECPs. **(§2.24)**

---

## The Broker Transaction Lifecycle

Understanding when PFOF arises requires understanding the structure of a typical listed derivatives transaction.

### Phase A — Sourcing Exclusive Liquidity for a Specific Client (Steps 1–4)

1. Broker receives or generates a "trading interest" from an **initial client**
2. Broker sources liquidity by contacting potential liquidity providers (registered market makers, banks, other liquidity providers)
3. Broker relays initial quotes to the initial client — giving the client a **Right of First Refusal (ROFR)** to trade on those prices
4. Broker may negotiate further with liquidity providers to reach an executable price; the initial client retains its ROFR throughout

Until the initial client relinquishes its ROFR, the broker is acting to protect and advance that specific client's trading interest. Most firms characterised this as "agency-like" activity. **(§2.7–2.8)**

### Phase B — Broad Dissemination of Non-Exclusive Liquidity (Steps 5–8)

If the initial client does not trade and relinquishes its ROFR, the broker may:

5. Open up price formation by broadly disseminating the best bid/offer (BBO) price to its entire relevant client list simultaneously
6. Any relevant client can interact with and trade on the disseminated BBO
7. Broker seeks further prices to refresh BBO if no match
8. When a match occurs, trade executes — may involve multiple parties on bid/offer, allocated by time priority or pro rata

At this stage, the broker is operating like a platform where all clients can participate — it does not prefer or act for any specific client's interest. **(§2.10–2.13)**

---

## The Legal Distinction: Exclusive vs. Non-Exclusive Liquidity

The capacity in which a broker acts on a given transaction determines whether PFOF is prohibited:

| Capacity | Description | PFOF permitted? |
|---------|-------------|----------------|
| Sourcing exclusive liquidity for a specific client | Broker acts to advance one client's trading interest; that client has a ROFR on prices sourced | **No — PFOF is prohibited** |
| Broadly disseminating non-exclusive liquidity | Broker disseminates BBO simultaneously to all relevant clients; no ROFR for any specific client; broker acts as neutral platform | Potentially — if all four conditions are met (see below) |

**This assessment must be made transaction-by-transaction.** Blanket firm-level categorisations (e.g. "we are always an inter-dealer broker") or product-level categorisations (e.g. "commodity derivatives are always non-exclusive") are rejected as legally insufficient. **(§2.22)**

The key marker of exclusive liquidity is the **Right of First Refusal** — the initial client's right to trade on prices sourced before they are broadly disseminated. The moment a specific client holds a ROFR, the broker is sourcing exclusive liquidity for that client. **(§2.7, §2.11)**

---

## Four Conditions for Managing Dual-Sided Conflicts in Non-Exclusive Liquidity

Where a broker broadly disseminates non-exclusive liquidity, it *may* be able to manage the conflict of interest from charging both sides of a transaction. The conditions are **cumulative** — all four must be satisfied simultaneously: **(§2.21)**

1. **Simultaneous broad distribution:** The broker sources liquidity and distributes trading interests broadly to **all** relevant clients simultaneously
2. **Adequate opportunity for all clients:** Every relevant client has a reasonable opportunity — including adequate time — to interact with and trade on the disseminated trading interests
3. **No ROFR for any specific client:** The broker does not directly or indirectly provide a Right of First Refusal to any specific client (and is therefore not providing exclusive liquidity)
4. **Robust systems and controls:** The broker has formal written policies and procedures — not merely "unwritten rules and protocols" — that govern order handling, execution, and allocation, and has satisfied itself that those controls are effective in preventing harm to clients

**On the fourth condition:** The FCA requires that the protocols governing broad dissemination be formally codified in the firm's **written conflicts of interest policy**, as required under SYSC 10.1 and Article 34(1) of the MiFID Organisational Requirements Regulation. Unwritten rules that function in practice are not sufficient — they must be captured in writing. **(§2.36–2.37)**

Additionally, the FCA recognises that harmonising or limiting charges across some or all counterparties can be a helpful supplementary measure — it reduces the financial incentive to favour clients with different fee levels. However, this measure would not be sufficient on its own. **(§2.39)**

---

## Five Named Pretextual PFOF Structures

The FCA identified five arrangements where firms argued PFOF did not apply but where the FCA concluded it did. **(§2.17)**

### 1. Selective Counterparty Exemption

Only stopping PFOF for exchange-registered market makers, while continuing to charge if the counterparty is a bank, wholesale energy supplier, or other type of liquidity provider. The FCA rejected this: the analysis turns on whether the broker is sourcing exclusive liquidity, not on the registration status of the counterparty.

### 2. Charging for Negotiation Activity

Deciding the firm could charge the liquidity provider if it conducted any negotiation with the liquidity provider to get a better price or deeper liquidity for the initiating client (who maintained its ROFR). The FCA rejected this: negotiation to improve the price for an exclusive client is precisely the activity that characterises exclusive liquidity sourcing — it does not transform the arrangement.

### 3. "Taking Liquidity" Argument

Not explicitly requesting prices from liquidity providers but instead presenting them with client bids or offers and expecting liquidity providers to transact on them. Firms argued the liquidity providers were "taking liquidity" rather than providing it, and therefore the payment could not constitute PFOF. The FCA rejected this: the economic substance — the broker sourcing exclusive liquidity to fill a specific client's order — was unchanged.

### 4. Blanket Inter-Dealer Broker Categorisation

Deciding that because some commodity derivatives markets tend not to have regular liquidity providers, payments from counterparties could not constitute PFOF, without taking account of the capacity in which the broker actually acted in individual transactions. The FCA rejected this: blanket market-level categorisation fails the transaction-by-transaction assessment required. **(§2.19–2.20)**

### 5. "Service Charge" Relabelling

Routinely charging liquidity providers a commission when sourcing exclusive liquidity for a specific client under the guise of a "service charge." The FCA rejected this: relabelling the charge does not change the economic substance or the underlying conflict.

---

## Overseas Affiliate Routing as Circumvention

Following the FCA's Dear CEO letter in December 2017, some firms told the FCA that its pursuit was driving business overseas. The FCA scrutinised overseas arrangements specifically to determine whether they were circumventing UK rules. **(§2.43)**

**What the FCA found:** Some UK brokers regularly transmitted UK client orders to overseas affiliates that then charged PFOF when sourcing liquidity. In one case, a firm received payments from its affiliate for directing order flow to it — regardless of client classification.

**The FCA's legal position **(§2.47)**:** 
- If a UK broker is involved at **any stage** in handling client orders, UK conflicts of interest rules, inducements rules, and best execution rules apply
- A UK firm should not charge a liquidity provider if the transaction it facilitates amounts to the sourcing of exclusive liquidity for a specific client
- A UK firm should not pass orders to an affiliated overseas entity that levies PFOF — this creates the same conflict of interest
- UK firms in group structures must have robust systems to determine which entity or entities are handling an order, and their clients (including liquidity providers) should be clear which entity they are dealing with **(§2.48)**

The FCA had taken, or was considering, enforcement action against firms with this pattern.

---

## Systems and Controls Requirements

SYSC 10 requires that where a broker charges both sides of a transaction, it must: **(§2.35)**

- Accurately identify the inherent conflict, including assessing its capacity based on the characteristics of the transaction
- Be satisfied that it is able to manage the associated conflict, or if not, to prevent it
- Maintain and operate effective organisational and administrative arrangements to deliver those outcomes

**Named compliance failure:** Most firms' compliance functions relied almost exclusively on **risk-sensitive manual sampling of less than 1% of total transactions**. No firm's sampling identified any instance of a PFOF breach. The FCA treated this not as evidence of compliance but as a red flag — a sampling regime that never identifies a breach is likely inadequate. **(§2.32–2.40)**

The FCA expects compliance functions to have specific controls to:
- Systematically assess whether brokers correctly identify the capacity in which they act
- Compare the timing of broad price communications with the timing of executions (to verify non-exclusive liquidity sourcing)
- Flag charges applied to counterparties acting as traditional liquidity providers — since these are characteristic of exclusive liquidity sourcing **(§2.41)**

---

## Relationship to Consumer Duty and Retail Context

This document primarily concerns **wholesale/ECP broker conduct** in listed derivatives markets. However, the underlying conflicts of interest principles (SYSC 10, COBS 2.1) apply across all client categories. The Consumer Duty's cross-cutting rule to avoid foreseeable harm and act in good faith towards retail customers operates in parallel — where a broker engaging in PFOF with retail customers was directing them to inferior execution outcomes, this would also constitute a Consumer Duty breach.

For **retail and professional clients**, PFOF had already ceased to be widespread practice by the time of this review. The specific challenge addressed here is ECP business, where client classifications had been used (incorrectly, per the FCA) to argue the MiFID II protections did not apply.

---

## Key Points for Agents

- PFOF is the practice of a broker charging both the client whose order it executes and the liquidity provider on the other side of the trade. It creates a conflict of interest because the broker has an incentive to route to the highest-paying counterparty, not the best-execution counterparty.
- PFOF is prohibited under SYSC 10 / MiFID II whenever a broker is sourcing exclusive liquidity for a specific client — regardless of that client's MiFID II classification (retail, professional, or ECP).
- The legal distinction that determines whether PFOF is prohibited is exclusive vs. non-exclusive liquidity. The marker of exclusive liquidity is the Right of First Refusal held by the initial client. This assessment is transaction-by-transaction — blanket firm-level or market-level categorisations are rejected.
- Non-exclusive broad dissemination may allow dual-sided charging only if all four conditions are met simultaneously: simultaneous broadcast to all clients; adequate interaction time for all; no ROFR for any specific client; robust written systems and controls.
- Five named pretextual structures have been rejected: selective counterparty exemption; charging for negotiation; "taking liquidity" argument; blanket inter-dealer broker categorisation; "service charge" relabelling.
- Overseas affiliate routing does not shift UK regulatory obligations — UK conflicts rules apply at every stage a UK broker is involved, including when orders are passed to affiliated overseas entities that do the charging.
- Manual sampling of less than 1% of transactions is an inadequate compliance control; the FCA treated zero findings as a control quality concern, not a compliance signal.

## Related Articles

- [[fca-pfof-supervisory-report-2019]]
- [[prod-product-governance]]
- [[mifid-ii-product-governance-review-2021]]
- [[dear-ceo-letter-wealth-stockbroking-2023]]
