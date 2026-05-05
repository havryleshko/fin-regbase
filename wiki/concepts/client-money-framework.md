---
title: "Client Money — Framework (CASS 7)"
jurisdiction: UK
regulator: FCA
regulation: CASS 7; s.137B FSMA 2000; MiFID Delegated Directive arts. 2–3
status: current
effective_date: 2018-01-03
last_updated: 2026-05-02
sources:
  - "CASS 7.10.10R — professional client opt-out"
  - "CASS 7.10.16R — credit institution carve-out"
  - "CASS 7.11.1R–7.11.4AR — TTCA and proportionality"
  - "CASS 7.11.14R — DvP exemption"
  - "CASS 7.11.32R — interest obligation"
  - "CASS 7.11.50R; 7.11.57R; 7.11.57AR; 7.11.58G — unclaimed money"
  - "CASS 7.13.6R; 7.13.20R; 7.13.41R; 7.13.54G; 7.13.55R; 7.13.57R–7.13.58R; 7.13.65R — segregation approaches and concentration cap"
  - "CASS 7.15.2R; 7.15.12R; 7.15.15R; 7.15.20R; 7.15.22R; 7.15.29R; 7.15.33R — records and reconciliations"
  - "CASS 7.16.8R; 7.16.10R; 7.16.16R; 7.16.17R — standard reconciliation methods"
  - "CASS 7.17.2R; 7.17.5G — statutory trust"
  - "CASS 7.18.2R; 7.18.6R — acknowledgement letters"
tags: [CASS-7, client-money, statutory-trust, segregation, reconciliation, professional-client-opt-out, credit-institution-carve-out, TTCA, unclaimed-money, normal-approach, alternative-approach, 20-percent-cap, sub-pools, acknowledgement-letters, UK, FCA]
related:
  - summaries/cass7-client-money-rules.md
  - concepts/client-assets-custody.md
  - summaries/cass6-custody-rules.md
  - summaries/cass10-resolution-pack.md
  - concepts/safeguarding-pis-emis.md
  - concepts/smcr-certification-regime.md
  - concepts/sysc4-governance-framework.md
  - concepts/sysc10-conflicts-of-interest.md
---

# Client Money — Framework (CASS 7)

## What CASS 7 Does

CASS 7 is the FCA's primary rulebook chapter on the **protection of client money**. It is the companion to CASS 6 (safe custody assets): CASS 6 covers financial instruments and other designated investments held in custody; CASS 7 covers **money**. Where a CASS 6 shortfall is funded with the firm's own money, that money immediately becomes client money governed by CASS 7 until the asset shortfall is resolved **(CASS 6.6.54R(2)(b))**.

CASS 7's purpose is to ensure that in the event of a firm's insolvency:
1. Client money is identifiable, segregated, and distributable to clients — not available to the firm's general creditors.
2. Each client's entitlement can be rapidly determined.
3. Clients are not prejudiced by the firm's failure to maintain adequate records or segregation.

The legal mechanism for achieving this is the **statutory trust** under CASS 7.17.

---

## The Statutory Trust — The Foundation

### Structure

All client money is held by the firm as **trustee** from the moment of receipt **(CASS 7.17.2R)**. This is created by s.137B(1) FSMA 2000. The consequence:
- **Legal title** is in the firm.
- **Beneficial ownership** is in clients, according to their respective interests.
- On the firm's **insolvency (primary pooling event)**, the general pool of client money is distributed pro-rata among client beneficiaries — it does not form part of the insolvent estate available to general creditors.

### Priority on Distribution (CASS 7.17.2R)

The statutory trust has a five-level priority stack:
1. Clients in the general pool according to their respective interests;
2. Sub-pool beneficiaries according to their respective interests (where sub-pools have been established);
3. Insurance undertaking clients (money received during insurance distribution activity);
4. Costs of distributing the client money pool on failure;
5. The firm itself (after all client claims are satisfied).

### No Pre-Funding Prohibition

The statutory trust prohibits the firm from using one client's money to fund another client's transaction. A firm must not advance credit to any client, itself, or any other person using other clients' client money **(CASS 7.17.5G)**. This means: if a firm wishes to execute a transaction for Client A before receiving Client A's money, it cannot fund that transaction from Client B's money held in the pool.

---

## Who Is Excluded

### Professional Client Opt-Out (CASS 7.10.10R)

A firm may agree in writing with a **professional client** that the client money rules will not apply to money held for that client. The client must give written acknowledgement that:
- Their money is not protected by the client money rules; and
- In the event of the firm's failure, they will rank as an **unsecured general creditor** — not as a beneficiary of the statutory trust.

This carve-out is structural, not incidental. Money subject to a professional client opt-out is held as the firm's own money (as banker); if the firm fails, the client gets nothing from the client money pool. This arrangement cannot be used with retail clients.

### Credit Institution / Approved Bank Carve-Out (CASS 7.10.16R)

Where a credit institution, approved bank, or MiFID investment firm deposits money with the firm in the course of that entity's **own banking business**, the firm holds that money as **banker**, not trustee. CASS 7 does not apply. No client money distribution arises from such deposits on the firm's failure. This is the structural basis for interbank deposits being outside CASS protection.

### TTCA — Retail Ban (CASS 7.11.1R(3)(a))

A **title transfer collateral arrangement** transfers legal title to money from the client to the firm as collateral. Once transferred, the money is no longer client money — the client has only an unsecured claim for the return of equivalent money.

**The retail ban is absolute.** No TTCA on money can be entered into with a retail client, regardless of consent, disclosure, or other arrangements. For non-retail clients, TTCAs are permitted only if documented, proportionate to the client's obligations, and the client has been informed of the risks **(CASS 7.11.4A R)**.

---

## Segregation — Two Compliance Routes

### Normal Approach (CASS 7.13.6R)

All client money received must be placed directly into a **client bank account** — it cannot pass through the firm's own account first. The client bank account must be opened with an approved bank, credit institution, central bank, or qualifying money market fund; the firm must be the contractual counterparty; and the money must be withdrawable within one business day **(CASS 7.13.13R)**.

This is the default route. It is operationally simpler but can create difficulties for firms whose business involves close intermingling of client and proprietary cash flows (e.g., multi-currency settlement, derivatives clearing).

### Alternative Approach (CASS 7.13.54G; 7.13.55R; 7.13.57R; 7.13.58R)

Client money may be received into the firm's own account first, then segregated, if the normal approach would create greater operational risk for a particular business line. This route has substantial pre-conditions:

1. **Document** the justification: the normal approach creates greater operational risk AND the alternative approach would not create undue risk **(CASS 7.13.55R)**.
2. **FCA notification** at least **three months** before adoption **(CASS 7.13.57R)**.
3. **Independent auditor's report** (reasonable assurance engagement) sent to the FCA confirming systems are suitably designed **(CASS 7.13.58R)**.
4. **Annual review** of whether justification remains valid; if not, revert within six months **(CASS 7.13.59R)**.

Under the alternative approach, the firm must reconcile daily (T0 vs T-1) and maintain an **alternative approach mandatory prudent segregation** amount — its own money pre-funded in the client bank account to cover potential shortfalls that could arise during the gap between T0 adjustments and T+1 settlement **(CASS 7.13.65R)**. The buffer is calculated quarterly using three months of historical data and reviewed annually by the CASS oversight officer.

### 20% Group Entity Concentration Cap (CASS 7.13.20R)

A firm must not deposit more than **20% of the total client money it holds** with any single group entity (a credit institution, approved bank, or qualifying MMF in the same group as the firm). This applies in aggregate across all accounts and MMFs held with that group entity.

The only relief is a narrow proportionality exception: if it is not practicable to comply, the firm must document its analysis and **immediately notify the FCA** **(CASS 7.13.21AR; 7.13.21C R)**. Unlike most diversification requirements in financial services, this is a hard percentage cap with no simple risk-based override.

### Prudent Segregation

A firm may pay its own money into a client bank account to prevent a shortfall (e.g., to cover anticipated payment obligations on non-business days or during systems failures) **(CASS 7.13.41R)**. Money so retained is client money for CASS purposes until the firm determines it is no longer needed. All such payments and withdrawals must be recorded in a prudent segregation record retained for five years **(CASS 7.13.53R)**.

---

## Reconciliation Framework

### Internal Reconciliation — Daily

Unlike CASS 6's maximum monthly frequency, CASS 7 **internal client money reconciliation** must be conducted **every business day** **(CASS 7.15.15R)**. The reconciliation checks the **client money requirement** (what the firm should be holding, calculated by one of the standard methods under CASS 7.16) against the **client money resource** (the aggregate balance on the firm's client bank accounts — CASS 7.16.8R).

Two standard calculation methods are available **(CASS 7.16.10R)**:
- **Individual client balance method (CASS 7.16.16R):** Calculates the requirement as the sum of all positive individual client balances (using the CASS 7.16.22E table formula) plus the margined transaction requirement. Available to all firms except CASS 7 loan-based crowdfunding firms.
- **Net negative add-back method (CASS 7.16.17R):** Operates on a bank-account-by-bank-account basis; calculates the requirement by adding back the absolute value of each negative individual client balance on that account. Available only to CASS 7 asset management firms and CASS 7 loan-based crowdfunding firms without margined transactions.

**Shortfall — same-day mandatory correction (CASS 7.15.29R):** Any shortfall identified must be paid into a client bank account by close of business on the day of the reconciliation. Any excess must be withdrawn within the same period. There is no grace period.

Internal reconciliations must use the firm's own internal records and ledgers — not bank statements (which are the input for external reconciliations) **(CASS 7.15.13R)**.

### External Reconciliation — Monthly Maximum

**External client money reconciliation** compares the firm's internal records against the statements or confirmations from banks and other third parties **(CASS 7.15.20R)**. Maximum frequency gap: **one month (CASS 7.15.22R)**. Firms transacting daily should generally reconcile every business day **(CASS 7.15.25G)**. The frequency decision must be reviewed at least annually **(CASS 7.15.26R)**, and the frequency decision record must be retained indefinitely (or five years after supersession) **(CASS 7.15.24R)**.

If an unresolved discrepancy from an external reconciliation shows a potential need for more client money, the firm must **assume that record is accurate and pay its own money in immediately** **(CASS 7.15.32R)**.

### FCA Notification — Six Independent Triggers (CASS 7.15.33R)

The firm must notify the FCA **without delay** if it cannot maintain records, cannot correct shortfalls, cannot resolve external discrepancies, cannot conduct internal reconciliations, cannot conduct external reconciliations, or discovers a **historical material segregation shortfall** at any point in the preceding 12 months (trigger 6). Trigger 6 is retrospective and fires on discovery — not on the date of occurrence.

---

## Interest and Unclaimed Money

### Interest (CASS 7.11.32R)

A firm holding client money for a **retail client** must pay or account for interest earned on that money unless it has **clearly notified the client in writing** that it will not do so. The notification must be made before or at the time of opening the account.

### Unclaimed Money — Three Disposal Routes

After **six years** of inactivity, a firm may release client money from the pool. The threshold is six years — half of the twelve-year period for unclaimed safe custody assets under CASS 6.

Three routes are available:

| Route | Threshold | Requirements | Cite |
|-------|-----------|-------------|------|
| Full trace + charity | 6 years | Reasonable steps to trace; pay to registered UK charity | CASS 7.11.50R |
| De minimis | 6 years | £25 (retail) / £100 (professional) — no tracing required | CASS 7.11.57R |
| Dormant Assets Act 2022 | 6 years | Transfer to dormant asset fund operator | CASS 7.11.57AR |

In every case:
- The firm must maintain a **perpetual, unconditional undertaking to repay** the full amount to the client on demand.
- Any amount due must be paid from **the firm's own funds** — not from the client money pool **(CASS 7.11.58G)**.

---

## Acknowledgement Letters — A Pre-Condition to Holding

A firm must obtain a duly countersigned **acknowledgement letter** from every bank or counterparty before using any client bank account or client transaction account **(CASS 7.18.2R; 7.18.3R)**. The letter must be in the prescribed FCA template (CASS 7 Annexes 2/3/4) and must secure the bank's/counterparty's agreement that it has **no right of recourse or set-off** against the client money for any debt owed on any other account.

The acknowledgement letter is not merely an administrative formality — it is the mechanism by which the bank waives any right to combine client accounts with proprietary accounts. Without it, the statutory trust structure is incomplete and the firm is in breach of CASS 7. Letters must be periodically reviewed for accuracy and replaced promptly on change **(CASS 7.18.12R; 7.18.13G)**.

---

## Relationship to Other Regimes

**CASS 7 vs CASS 6:** CASS 6 covers safe custody assets (financial instruments); CASS 7 covers money. When a CASS 6 shortfall is funded with the firm's own money, that money becomes client money under CASS 7 **(CASS 6.6.54R(2)(b))**.

**CASS 7 vs PSR/EMR Safeguarding:** CASS 7 does not apply to payment institutions or e-money institutions in respect of payment funds or e-money. PI/EMI safeguarding is governed by the PSRs/EMRs and the FCA Approach Document. See [[safeguarding-pis-emis]].

**SM&CR — CASS Operational Oversight:** Under SYSC 6.1.4A R, a director or senior manager must be allocated responsibility for CASS oversight. The individual responsible must review the adequacy of the firm's alternative approach mandatory prudent segregation at least annually **(CASS 7.13.65R(5))** and review clearing arrangement mandatory prudent segregation at least annually **(CASS 7.13.73R(5))**. See [[smcr-certification-regime]].

---

## Key Points for Agents

- **Statutory trust from receipt; beneficial ownership stays with clients; no pre-funding (CASS 7.17.2R; 7.17.5G).** Client money is trust property. The firm cannot use one client's money to fund another's transaction. On insolvency, the pool distributes pro-rata.
- **Professional client opt-out removes all trust protection (CASS 7.10.10R).** Client ranks as unsecured general creditor on failure. Cannot be used for retail clients.
- **Credit institution carve-out: no CASS 7 protection for interbank deposits (CASS 7.10.16R).** Money held as banker; outside client money distribution on failure.
- **TTCA retail ban is absolute (CASS 7.11.1R(3)(a)).** No consent or disclosure can make a TTCA on money with a retail client permissible.
- **Daily internal reconciliation; same-day shortfall correction (CASS 7.15.15R; 7.15.29R).** Not monthly. Shortfall must be funded by close of business on the day identified.
- **20% group entity cap is a hard limit (CASS 7.13.20R).** Cannot exceed 20% concentration in any single group entity without immediate FCA notification.
- **Alternative approach requires 3-month FCA advance notice plus auditor's report (CASS 7.13.57R; 7.13.58R).** It is not a firm's discretion to switch approaches without regulatory process.
- **Unclaimed money: 6-year threshold; de minimis at £25/£100; Dormant Assets Act route now available (CASS 7.11.50R; 7.11.57R; 7.11.57AR).** All costs from own funds; perpetual repayment undertaking required in every route.
- **Acknowledgement letters are mandatory before receiving client money (CASS 7.18.2R).** The bank's waiver of set-off rights in the letter is the mechanism that protects the statutory trust from bank recourse.

## Related Articles

- [[cass7-client-money-rules]]
- [[client-assets-custody]]
- [[cass6-custody-rules]]
- [[cass10-resolution-pack]]
- [[safeguarding-pis-emis]]
- [[smcr-certification-regime]]
- [[sysc4-governance-framework]]
- [[sysc10-conflicts-of-interest]]
