---
title: "Appropriateness vs Suitability — The COBS Framework"
jurisdiction: UK
regulator: FCA
regulation: COBS 9; COBS 9A; COBS 10; COBS 10A
status: current
effective_date: 2007-11-01
last_updated: 2026-04-28
sources:
  - "COBS 10.1.2R–10.1.4G; COBS 10.2.1R–10.6.1G"
  - "COBS 10A.1.1R–10A.6.2G"
  - "COBS 9.1.1R; COBS 9.2.1R–9.2.6R"
  - "COBS 9A.1.1R; COBS 9A.2.1R"
tags: [COBS, COBS-9, COBS-9A, COBS-10, COBS-10A, appropriateness, suitability, execution-only, non-complex, personal-recommendation, portfolio-management, UK, FCA, retail-client, fintech]
related:
  - summaries/cobs10-appropriateness-non-mifid.md
  - summaries/cobs10a-appropriateness-mifid.md
  - summaries/cobs9-suitability.md
  - summaries/cobs9a-suitability-mifid.md
  - concepts/advice-suitability-cobs9.md
---

# Appropriateness vs Suitability — The COBS Framework

## The Fundamental Distinction

The FCA's COBS framework contains **two separate consumer protection tests** for retail clients in investment contexts. They are mutually exclusive: a firm applies one or the other (or neither) to a given transaction, not both.

| | **Suitability** | **Appropriateness** |
|--|----------------|---------------------|
| **When it applies** | Advised services: personal recommendation or portfolio management | Non-advised services: execution-only, reception & transmission |
| **What is assessed** | Knowledge and experience + financial situation (ability to bear losses) + investment objectives (risk tolerance, time horizon, purpose) — three dimensions | Knowledge and experience only — one dimension |
| **Product scope** | Any designated investment or financial instrument recommended or managed | Complex/risky products only: derivatives, warrants, non-readily realisable securities, speculative illiquid securities, P2P, LTAFs, qualifying cryptoassets, UK RIE crypto ETNs |
| **If test not passed** | Must not make the recommendation or take the decision to trade | Must warn the client — but firm has discretion on whether to execute |
| **Non-MiFID rules** | COBS 9 | COBS 10 |
| **MiFID / IBIP rules** | COBS 9A | COBS 10A |

---

## Suitability in Brief

Suitability applies when a firm makes a **personal recommendation** to a retail client in relation to a designated investment or financial instrument, or when it **manages investments** for a retail client **(COBS 9.1.1R; COBS 9A.1.1R)**.

The firm must assess three dimensions:
1. **Knowledge and experience** — does the client understand the risks?
2. **Financial situation** — can the client financially bear the risks (ability to bear losses)?
3. **Investment objectives** — does the transaction meet the client's goals, risk tolerance, and time horizon?

If a firm cannot obtain sufficient information on all three dimensions, it **must not** make the recommendation — there is no discretion **(COBS 9.2.6R; COBS 9A.2.13R)**. Suitability is a hard gate.

A **suitability report** must be provided to the retail client explaining why the recommendation is suitable **(COBS 9.4.1R; COBS 9A.3.2R–9A.3.3R)**.

---

## Appropriateness in Brief

Appropriateness applies when a firm **arranges, deals, executes, or receives and transmits orders** on a non-advised basis for particular complex or risky products **(COBS 10.1.2R; COBS 10A.1.1R)**.

The firm assesses **only one dimension**: whether the client has the **knowledge and experience** necessary to understand the risks of the specific product or service.

If the product is not appropriate, or if the client refuses to provide information, the firm **must warn** the client — but after the warning, the client **may still ask the firm to proceed**, and the firm has a **discretion** on whether to execute **(COBS 10.3.1R–10.3.3G; COBS 10A.3.1R–10A.3.3G)**. Appropriateness is a softer gate than suitability.

No suitability report is required — the record-keeping obligation is the key protection.

---

## When Neither Applies

### The Execution-Only / Non-Complex Exemption

Even the appropriateness obligation does not apply when all three of the following conditions are met simultaneously:
1. The service consists **only of execution or reception and transmission** of client orders;
2. It relates to **non-complex financial instruments** or (for COBS 10A) non-complex IBIPs; and
3. The service is provided **at the initiative of the client** (not in response to a personalised communication from the firm about that specific instrument).

The client must also have been **clearly informed** that they do not benefit from the protection of the appropriateness rules **(COBS 10.4.1R; COBS 10A.4.1R)**.

This is the "execution-only safe harbour." Execution-only platforms and order-reception firms rely on it for straightforward listed equity and bond transactions. It does not apply to complex instruments — derivatives, warrants, non-readily realisable securities, speculative illiquid securities, P2P, LTAFs, qualifying cryptoassets, or UK RIE crypto ETNs always require appropriateness assessment.

**Non-complex criteria differ between regimes:** COBS 10 (non-MiFID) uses a 4-criterion test; COBS 10A (MiFID) uses a **6-criterion test** that additionally requires: no clause, condition, or trigger that could fundamentally alter the nature, risk, or pay-out profile; and no explicit or implicit exit charges that have the effect of making the instrument illiquid in practice **(COBS 10A.4.2R)**. The MiFID test is materially stricter.

---

## The Interaction Rules

### Suitability Displaces Appropriateness

Where a firm has assessed **suitability under COBS 9 or COBS 9B (Targeted support)**, it need not also assess appropriateness when it receives or transmits an order for the same client in the same transaction **(COBS 10.6.1G; COBS 10A.6.1G)**. Suitability subsumes appropriateness — the two do not stack.

### COBS 9B (Targeted Support) Exclusion

The rules in COBS 9, COBS 9A, COBS 10, and COBS 10A do not apply to a firm in relation to the provision of a **targeted support service** within the scope of COBS 9B **(COBS 9.1.1BR; COBS 9A.1.1AG; COBS 10.1.2R(4); COBS 10A.1.1R)**. Targeted support is a third regulatory pathway distinct from both suitability and appropriateness.

### What Happens After a Warning Under Appropriateness

Unlike suitability (where the firm simply cannot transact if the test cannot be completed), appropriateness involves a **two-stage outcome**:

1. **Warning stage:** The firm warns the client — either that the product is not appropriate, or that insufficient information means no assessment can be made. Warning may be in standardised format.
2. **Execution decision:** The client may nonetheless request execution. The firm has a **discretion** — it must consider whether to proceed having regard to the circumstances. The decision must be **recorded** **(COBS 10.3.3G; COBS 10A.3.3G; COBS 10A.7.2R(c)–(d))**.

The MiFID record-keeping obligation captures the full sequence: what warning was given; whether the client asked to proceed; **and whether the firm accepted** **(COBS 10A.7.2R)**. Item (d) — the firm's own decision — is the critical audit obligation.

---

## Which Regime Applies to Which Business

| Business type | Suitability | Appropriateness |
|---------------|-------------|-----------------|
| Personal recommendation on designated investment to retail client (non-MiFID) | **COBS 9** | — |
| Personal recommendation on IBIP | **COBS 9A** (IDD rules only) | — |
| Investment advice / portfolio management (MiFID) | **COBS 9A** | — |
| Execution-only / order reception in non-MiFID complex instruments | — | **COBS 10** |
| Execution-only / order reception in MiFID instruments | — | **COBS 10A** |
| Insurance distribution (IBIP, non-advised) | — | **COBS 10A** (IDD rules only) |
| P2P lending facilitation (retail lender) | — | **COBS 10** |
| Qualifying cryptoasset transaction (direct offer financial promotion) | — | **COBS 10** |
| Targeted support service (COBS 9B) | Neither | Neither |
| Execution-only in non-complex instruments at client initiative (MiFID) | Neither | Neither (exemption) |

---

## Key Points for Agents

- **Suitability is a three-dimension test (knowledge/experience + financial situation + investment objectives); appropriateness is a one-dimension test (knowledge and experience only).** Suitability applies to advised services; appropriateness to non-advised services in complex products. The two are mutually exclusive.
- **Suitability is a hard gate — no recommendation without sufficient information (COBS 9.2.6R; COBS 9A.2.13R).** Appropriateness is a softer gate — warning is mandatory, but the client can still proceed and the firm has a discretion to execute **(COBS 10.3.3G; COBS 10A.3.3G)**.
- **Suitability displaces appropriateness.** A firm that has assessed suitability under COBS 9 or COBS 9B for an order need not also run an appropriateness assessment for that order **(COBS 10.6.1G; COBS 10A.6.1G)**.
- **The execution-only non-complex exemption removes the appropriateness obligation entirely** for qualifying instruments at the client's initiative, with required client disclosure. MiFID (COBS 10A) applies a 6-criterion non-complex test that is stricter than the non-MiFID 4-criterion test — the two additional MiFID criteria catch profile-altering clauses and implicit exit charges.
- **"At the initiative of the client" has a specific meaning:** the client must not be responding to a personalised communication from the firm about that specific instrument or transaction. A mass-market advertisement does not make a resulting order firm-initiated. A filtered mailing list or inclusion of the client's name and address alone do not make a communication personalised.
- **MiFID appropriateness record-keeping requires a four-item record (COBS 10A.7.2R)**, including whether the firm itself accepted the client's request to proceed after warning. This is the key audit trail obligation for execution-after-assessment in MiFID execution-only services.

## Related Articles

- [[cobs10-appropriateness-non-mifid]]
- [[cobs10a-appropriateness-mifid]]
- [[cobs9-suitability]]
- [[cobs9a-suitability-mifid]]
- [[advice-suitability-cobs9]]
