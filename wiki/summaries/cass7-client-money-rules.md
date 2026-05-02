---
title: "CASS 7 — Client Money Rules (Sourcebook Reference)"
jurisdiction: UK
regulator: FCA
regulation: CASS 7; MiFID Delegated Directive arts. 2–3
status: current
effective_date: 2018-01-03
last_updated: 2026-05-02
sources:
  - "CASS 7.10.1R–7.10.40G — application scope, opt-ins, opt-outs, carve-outs"
  - "CASS 7.11.1R–7.11.58G — exclusions, TTCA, DvP, interest, unclaimed money"
  - "CASS 7.13.1R–7.13.79G — segregation of client money (normal and alternative approaches)"
  - "CASS 7.14.1G–7.14.9G — client money held by third parties"
  - "CASS 7.15.1G–7.15.34G — records, accounts, and reconciliations"
  - "CASS 7.16.1G–7.16.38G — standard methods of internal client money reconciliation"
  - "CASS 7.17.1G–7.17.5G — statutory trust"
  - "CASS 7.18.1G–7.18.15R — acknowledgement letters"
  - "CASS 7.19.1G–7.19.25R — clearing member client money sub-pools"
tags: [CASS-7, client-money, segregation, statutory-trust, reconciliation, unclaimed-money, TTCA, professional-client-opt-out, credit-institution-carve-out, normal-approach, alternative-approach, sub-pools, acknowledgement-letters, MiFID-II, UK, FCA]
related:
  - concepts/client-money-framework.md
  - summaries/cass6-custody-rules.md
  - concepts/client-assets-custody.md
  - concepts/safeguarding-pis-emis.md
  - concepts/smcr-certification-regime.md
  - concepts/sysc4-governance-framework.md
---

# CASS 7 — Client Money Rules (Sourcebook Reference)

## Section 7.10 — Application

CASS 7 applies to firms that receive or hold client money in the course of **(CASS 7.10.1R)**:
- MiFID business **(7.10.1R(1))**;
- Designated investment business (non-MiFID) **(7.10.1R(2))**;
- ISA business and other specified activities **(7.10.1R(3)–(5))**.

**Trustee firms** subject to CASS 7 by virtue of trustee obligations hold client money as trustee on the terms of CASS 7.17.2R, subject to the requirements of the trust instrument **(CASS 7.10.33R–7.10.40G)**.

### Major Opt-Outs and Carve-Outs

**Professional client opt-out (CASS 7.10.10R):** A firm may agree in writing with a professional client that client money rules will not apply to money received or held for that client. The client must give written acknowledgement that the money is not protected by the client money rules and that in the event of the firm's failure they will rank as an unsecured general creditor — not as a beneficiary of the statutory trust. This is a structural carve-out widely used in institutional and B2B contexts; it cannot be used for retail clients.

**Credit institution/approved bank carve-out (CASS 7.10.16R):** Money deposited by a credit institution, approved bank, or MiFID investment firm in the course of its own banking business with the firm is held as banker, not trustee. No CASS distribution applies to such money on the firm's failure. The firm is not required to segregate that money or treat it as client money.

**Opt-in elections:** Certain firms that are not required to apply CASS 7 may elect to do so; elections are irrevocable except with FCA consent **(CASS 7.10.3R–7.10.7G)**.

---

## Section 7.11 — Exclusions, Exemptions, and Special Rules

### Title Transfer Collateral Arrangements (TTCA)

A TTCA is an arrangement by which the client transfers legal title to money to the firm as collateral; that money ceases to be client money and becomes the firm's own property.

- **Retail ban (CASS 7.11.1R(3)(a)):** TTCAs with retail clients in relation to money are absolutely prohibited. No consent or disclosure can make such an arrangement permissible.
- **Non-retail clients:** TTCAs are permitted only if the arrangement is documented, proportionate to the client's obligations, the client is informed of the risks, and the firm documents its basis for concluding proportionality **(CASS 7.11.4A R)**.
- **Effect:** Once money is transferred under a TTCA it is no longer client money; the client has an unsecured contractual claim for equivalent money on return **(CASS 7.11.1R(4))**.

### DvP Exemption

Money ceases to be client money during the settlement cycle of a delivery-versus-payment transaction executed through a commercial settlement system if settlement is expected to occur within **one business day** of the firm receiving the money or making the payment **(CASS 7.11.14R)**. After that window the money must be treated as client money.

### Interest on Client Money

A firm that holds client money for a retail client must pay or account to that client for any interest earned on the money, unless the firm has clearly notified the client in writing that it will not do so **(CASS 7.11.32R)**. For professional clients, the obligation to pay interest depends on the contractual terms.

### Unclaimed Client Money

The unclaimed client money regime operates in three stages:

1. **Full tracing and charity payment (CASS 7.11.50R):** After **six years** of inactivity (no client contact or transaction activity), the firm may, following reasonable steps to trace the client, release the money from the client money pool and pay it to a registered UK charity. The firm must maintain a perpetual, unconditional undertaking to repay the client the full amount (without deduction) on demand, and pay any amount due from its own funds — not from other clients' money.

2. **De minimis route (CASS 7.11.57R):** For balances below **£25 (retail clients)** or **£100 (professional clients)**, the firm may bypass the full tracing process and pay the money to charity without the extensive trace, subject to maintaining the repayment undertaking.

3. **Dormant Assets Act 2022 transfer route (CASS 7.11.57AR):** As an alternative to the charity payment route, a firm may transfer unclaimed client money to a dormant asset fund operator under the Dormant Assets Act 2022. The same perpetual repayment undertaking applies.

In all cases, **all costs of the process must be borne by the firm from its own funds** — not charged to the client money pool **(CASS 7.11.58G)**.

---

## Section 7.13 — Segregation of Client Money

### Normal Approach

Under the **normal approach**, a firm must receive client money directly into a **client bank account** — it may not pass through the firm's own account **(CASS 7.13.6R)**. The client bank account must be:
- Held with an approved bank, credit institution, central bank, or qualifying money market fund **(CASS 7.13.3R)**;
- Opened so that the firm is the contractual counterparty to the bank (not the client);
- Structured so that any amount can be withdrawn within one business day **(CASS 7.13.13R(3))**.

The firm is liable to the client bank for the account; the bank has no recourse against the client money in respect of other debts owed to it by the firm (this is secured by the acknowledgement letter under CASS 7.18).

### Alternative Approach

Under the **alternative approach**, client money may be received into the firm's own bank account and then segregated **(CASS 7.13.54G)**. This approach is available where the normal approach would lead to greater operational risks for a particular business line (for example, multi-currency, multi-timezone, or close intermingling with proprietary business).

Before adopting the alternative approach for a business line, the firm must:
- Document in writing its reasons for concluding the alternative approach would not create undue operational risk **(CASS 7.13.55R)**;
- Notify the FCA in writing **at least three months** before adoption **(CASS 7.13.57R)**;
- Obtain an independent auditor's report (reasonable assurance engagement) confirming that the firm's systems and controls are suitably designed to comply with the alternative approach requirements and to calculate the mandatory prudent segregation amount **(CASS 7.13.58R)**;
- Review annually whether the reasons for using the alternative approach remain valid; if not, the firm must revert within six months **(CASS 7.13.59R)**.

Under the alternative approach, the firm must perform a **daily internal client money reconciliation (T0)** against the T-1 close of business position, and adjust client bank account balances to address any discrepancy **(CASS 7.13.62R)**. The firm must also maintain **alternative approach mandatory prudent segregation** — a pre-funded buffer of its own money in the client bank account to protect against shortfalls arising during the gap between T0 adjustments and T+1 settlement **(CASS 7.13.65R)**. The buffer must be calculated quarterly using the previous three months' data and reviewed annually by the CASS oversight officer **(CASS 7.13.65R(4)/(5))**.

### 20% Group Entity Diversification Cap

A firm must not deposit more than **20%** of the total client money it holds with a single group entity (a credit institution, approved bank, or qualifying MMF that is part of the same group) **(CASS 7.13.20R)**. This cap applies across client bank accounts and qualifying MMFs in aggregate per group entity.

A narrow proportionality exception allows a firm to exceed 20% if it can document that it is not practicable not to, having regard to the size of the firm, the nature of its business, the available banks, and the need to adequately protect clients — but the firm must notify the FCA immediately **(CASS 7.13.21AR; 7.13.21C R)**.

### Prudent Segregation

A firm may pay its own money into a client bank account if it is prudent to do so to prevent a shortfall (for example, during systems failures or on non-business days) **(CASS 7.13.41R)**. Any money so paid and retained becomes client money until the firm demonstrates it is no longer required; any decision to retain or withdraw must be recorded in a **prudent segregation record** retained for five years **(CASS 7.13.50R–7.13.53R)**.

### Qualifying Money Market Funds

A firm may hold client money in a **qualifying money market fund (MMF)** subject to: explicit client consent; the firm does not treat the money as client money once invested in the MMF (units are instead treated as safe custody assets under CASS 6); and the fund qualifies under the applicable MMF definition **(CASS 7.13.28R)**.

### Three Account Types

Client bank accounts may be:
- **General client bank accounts** — pooled for all clients in the general pool;
- **Designated client bank accounts** — for a specific client;
- **Designated client fund accounts** — for a specific fund or class of clients.

The account title and type determine which pool the money belongs to on a primary pooling event.

---

## Section 7.14 — Client Money Held by a Third Party

A firm may allow a third party (exchange, clearing house, intermediate broker) to hold client money, but only **(CASS 7.14.2R)**:
- For the purposes of one or more client transactions with or through that third party; or
- To meet a client's collateral obligation (for example, initial margin for a contingent liability investment).

For retail clients, the client must be notified that the third party may hold their money **(CASS 7.14.2R(2))**. The firm retains its fiduciary duty to the client notwithstanding the third party holding; it must ensure the third party deposits the money in a client bank account or records it in a client transaction account **(CASS 7.14.6R)**.

---

## Section 7.15 — Records, Accounts, and Reconciliations

### Record-Keeping

A firm must maintain records sufficient to enable it, at any time and without delay, to distinguish client money held for one client from that held for any other client, and from its own money **(CASS 7.15.2R)**. Records must be sufficient to show and explain all transactions and commitments **(CASS 7.15.5R(2))**. Records must generally be retained for five years from the date of creation or most recent modification **(CASS 7.15.5R(3))**.

The firm must be able to determine the total amount of client money held for each client within **two business days** of deciding to do so or on FCA request **(CASS 7.15.6G)**.

### Internal Client Money Reconciliations

An **internal client money reconciliation** reconciles the firm's internal records and accounts of what it holds for each client against what it should be holding in client bank accounts or client transaction accounts **(CASS 7.15.12R)**.

- **Frequency:** Every business day **(CASS 7.15.15R(1))**, based on T-1 close of business records.
- **Method:** One of the two standard methods in CASS 7.16 (or a non-standard method with prior FCA notification and auditor's report under CASS 7.15.17R–7.15.18R).
- **Shortfall treatment:** Any shortfall identified must be paid into a client bank account, and any excess must be withdrawn, **by close of business on the day of reconciliation (CASS 7.15.29R)**. This is a same-day mandatory action — not a best-efforts obligation.

Internal records only are used for internal reconciliations; bank statements are the input for external reconciliations **(CASS 7.15.13R)**.

### External Client Money Reconciliations

An **external client money reconciliation** compares the firm's internal records against the statements or confirmations received from banks and other third parties holding client money **(CASS 7.15.20R; 7.15.27R)**.

- **Frequency:** As regularly as necessary, but **not allowing more than one month** to pass between reconciliations **(CASS 7.15.22R)**. Firms transacting daily should generally reconcile every business day **(CASS 7.15.25G)**.
- **Frequency review:** At least annually, unless reconciling daily **(CASS 7.15.26R)**.
- **Records of frequency decisions:** Must be retained indefinitely (superseded decisions reduced to five years from subsequent decision) **(CASS 7.15.24R)**.

### Discrepancy Resolution

Where a discrepancy is identified by an external reconciliation, the firm must investigate and take all reasonable steps to resolve it without undue delay **(CASS 7.15.31R)**. If it cannot immediately resolve the discrepancy and one record indicates a need for more client money, the firm must **assume that record is accurate and pay its own money into the relevant account** until the matter is finally resolved **(CASS 7.15.32R)**.

### FCA Notification Triggers

A firm must notify the FCA in writing without delay if **(CASS 7.15.33R)**:
1. Internal records and accounts are materially out of date, inaccurate, or invalid;
2. The firm is unable to pay a shortfall into, or withdraw an excess from, a client bank account following an internal reconciliation;
3. The firm is unable to identify and resolve discrepancies following an external reconciliation;
4. The firm is unable to conduct an internal client money reconciliation in compliance with CASS 7.15.12R/7.15.15R;
5. The firm is unable to conduct an external client money reconciliation in compliance with CASS 7.15.20R–7.15.28R; or
6. The firm becomes aware that at any time in the preceding 12 months the amount of client money it had segregated materially differed from the amount it was required to segregate.

These are six independent triggers. Trigger 6 is retrospective — it fires on discovery, not on occurrence.

---

## Section 7.16 — Standard Methods of Internal Client Money Reconciliation

The **client money requirement** (what the firm should be holding) must be calculated by one, but not both, of two standard methods **(CASS 7.16.10R)**:

### Method 1: Individual Client Balance Method (CASS 7.16.16R)

Available to all firms except CASS 7 loan-based crowdfunding firms. The firm calculates, for each individual client, the total of:
- Free money held for the client;
- Sale proceeds due;
- Cost of purchases not yet remitted;
- Adjusted for any amounts owed by the client.

The **client money requirement** is the sum of all positive individual client balances (negative balances excluded) plus the margined transaction requirement **(CASS 7.16.16R)**. The calculation table in CASS 7.16.22E provides an evidential standard: Individual client balance X = (A+B+C1+C2+D+E1+E2)−F−G.

### Method 2: Net Negative Add-Back Method (CASS 7.16.17R)

Available only to **CASS 7 asset management firms** and **CASS 7 loan-based crowdfunding firms** that do not undertake margined transactions. The firm calculates the client money requirement by taking the balance on each client bank account plus an add-back for each negative individual client balance attributed to that account. This method operates on a bank-account-by-bank-account basis rather than a client-by-client basis.

### The Client Money Resource

The **client money resource** (what the firm is actually holding) is the **aggregate balance on all client bank accounts** **(CASS 7.16.8R)**. The internal reconciliation checks the requirement against the resource.

### Reduced Client Money Requirement Option

Where a client has both a positive individual client balance (for non-margined transactions) and a negative equity balance (for margined transactions), the firm may offset these to reduce its overall client money requirement **(CASS 7.16.37R)**. This is an optional reduction, not a mandatory netting.

---

## Section 7.17 — Statutory Trust

**CASS 7.17.2R** is the foundational provision. Subject to the exception for trustee firms (CASS 7.17.3R), a firm receives and holds all client money as **trustee** on the following terms:
1. For the purposes of, and on the terms of, the client money rules and the client money distribution and transfer rules;
2. (a) Where the firm maintains only a general pool — for all clients (other than insurance undertaking clients receiving money during insurance distribution activity) according to their respective interests; (b) where the firm has established sub-pools — the general pool is for all clients; each sub-pool is for the identified sub-pool beneficiaries;
3. After valid claims in (2) are met, for clients who are insurance undertakings (insurance distribution activity);
4. For the payment of distribution costs on failure; and
5. After all of (2)–(4), for the firm itself.

The statutory trust is created by s.137B(1) FSMA (England and Wales/Northern Ireland) or as agency (Scotland) **(CASS 7.17.1G)**.

**No pre-funding prohibition (CASS 7.17.5G):** The statutory trust does not permit a firm, in its capacity as trustee, to advance credit using one client's money to fund another client's transaction. A firm must not pre-fund a transaction for a client using other clients' money before receiving the relevant client's money.

---

## Section 7.18 — Acknowledgement Letters

Before opening and using a client bank account or client transaction account, the firm must obtain a duly countersigned **acknowledgement letter** from the relevant bank or counterparty **(CASS 7.18.2R; 7.18.3R)**. The letter must be in the prescribed FCA template form (CASS 7 Annexes 2/3/4) and must:
- Identify the specific account(s);
- Confirm the bank's/counterparty's understanding that the money is held as client money on trust;
- Confirm that the bank/counterparty has **no recourse or right of set-off** against the client money in respect of debts owed on any other account; and
- Confirm that money will be released on demand to a liquidator, receiver, administrator, or trustee **(CASS 7.18.2R; CASS 7 Annex 2)**.

The fixed text of the acknowledgement letter templates cannot be amended; variable text may be adjusted only within permitted bounds **(CASS 7.18.6R; 7.18.8R)**. Acknowledgement letters must be periodically reviewed for accuracy; inaccuracies must be immediately corrected **(CASS 7.18.12R)**. Letters must be retained for five years after the last client bank account or client transaction account to which they relate is closed **(CASS 7.18.10R)**.

For **authorised central counterparties**, the firm may allow the ACC to hold client money on the relevant client transaction account even without a countersigned acknowledgement letter, provided the firm has completed and sent the relevant template letter **(CASS 7.18.4R(2))**.

---

## Section 7.19 — Clearing Member Client Money Sub-Pools

A firm that is a **clearing member** of an authorised central counterparty (ACC) may establish one or more **sub-pools** of client money — each sub-pool corresponding to a specific net margined omnibus client account (NMOCA) at an ACC **(CASS 7.19.1G)**. Sub-pools are designed to facilitate the **porting** of client positions to another clearing member in the event of the clearing member's failure.

### Establishment and Operation

Before receiving or holding client money in a sub-pool, the firm must **(CASS 7.19.11R)**:
- Give the client a signed copy of the **sub-pool disclosure document** (in the prescribed form — CASS 7 Annex 6 template **(CASS 7.19.10G)**);
- Obtain a signed copy of that document from the client.

Sub-pool money must not be commingled with money in the general pool or any other sub-pool **(CASS 7.19.13R(1))**. Each client bank account and client transaction account maintained for a sub-pool must carry a unique identifying reference **(CASS 7.19.13R(2))**.

### On Insolvency

On a primary pooling event **(CASS 7.19.1G(3))**:
- The general pool is distributed pro-rata under CASS 7A;
- Each sub-pool is either transferred to facilitate porting of client positions, or distributed to sub-pool beneficiaries according to their respective interests under CASS 7A.4R(2)(a).

### Material Changes

Before making a material change to a sub-pool, the firm must notify current sub-pool beneficiaries in writing at least **two months** before the change takes effect, explaining the consequences and available options **(CASS 7.19.18R)**. The FCA must also be notified no less than two months before the change **(CASS 7.19.21R)**. Dissolution of a sub-pool is treated as a material change **(CASS 7.19.20G)**.

---

## Key Points for Agents

- **Statutory trust from receipt — beneficial ownership stays with clients (CASS 7.17.2R).** All client money is held on statutory trust from the moment of receipt. Legal title is in the firm; beneficial ownership is in clients according to their respective interests. On failure (primary pooling event), the general pool distributes pro-rata. The trust prohibits pre-funding one client's transaction using another client's money (CASS 7.17.5G).
- **Professional client opt-out removes all CASS 7 protection (CASS 7.10.10R).** Written acknowledgement required. On failure the client ranks only as unsecured general creditor — not as trust beneficiary. Cannot be used for retail clients.
- **Credit institution carve-out: money held as banker, not trustee (CASS 7.10.16R).** Money deposited by a credit institution/approved bank in the course of its banking business is outside CASS 7. No client money distribution on failure for those funds.
- **TTCA absolute ban for retail clients in relation to money (CASS 7.11.1R(3)(a)).** For non-retail, must document proportionality (CASS 7.11.4A R).
- **Daily internal reconciliation; same-day shortfall correction (CASS 7.15.15R; 7.15.29R).** Unlike CASS 6's monthly cap, CASS 7 internal reconciliation is every business day. Shortfall must be funded by close of business on the day identified.
- **20% hard cap on group entity concentration (CASS 7.13.20R).** Cannot deposit more than 20% of total client money with any single group entity. Proportionality exception requires immediate FCA notification.
- **Normal vs alternative approach to segregation — two structurally different compliance routes (CASS 7.13.6R; 7.13.54G).** Normal: direct to client bank account. Alternative: own account first, then daily adjustment + mandatory prudent segregation buffer; requires auditor's report and 3-months' FCA advance notice.
- **Unclaimed client money: 6-year threshold, three disposal routes (CASS 7.11.50R; 7.11.57R; 7.11.57AR).** Threshold is 6 years (half of CASS 6's 12-year custody period). Three routes: full trace + charity; de minimis (£25/£100); Dormant Assets Act 2022 transfer. All costs from firm's own funds. Perpetual unconditional repayment undertaking required in every case.
- **Acknowledgement letters are a pre-condition to holding client money (CASS 7.18.2R).** No client bank account may receive client money without a countersigned acknowledgement letter in prescribed form. Fixed text cannot be amended; periodic accuracy reviews mandatory.
- **Six independent FCA notification triggers (CASS 7.15.33R).** Includes a retrospective trigger (trigger 6) fired on discovering that client money segregated materially differed from the required amount at any point in the preceding 12 months.

## Related Articles

- [[client-money-framework]]
- [[cass6-custody-rules]]
- [[client-assets-custody]]
- [[safeguarding-pis-emis]]
- [[smcr-certification-regime]]
- [[sysc4-governance-framework]]
