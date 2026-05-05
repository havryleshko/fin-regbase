---
title: "Client Assets — Custody Framework (CASS 6)"
jurisdiction: UK
regulator: FCA
regulation: CASS 6; MiFID Delegated Directive arts. 2–5
status: current
effective_date: 2018-01-03
last_updated: 2026-05-02
sources:
  - "CASS 6.1.1R — application scope"
  - "CASS 6.1.6R — TTCA retail ban"
  - "CASS 6.2.1R–6.2.10R — core protection, registration, unclaimed assets"
  - "CASS 6.3.1R–6.3.6AR — third-party due diligence, jurisdiction, lien prohibition"
  - "CASS 6.4.1R–6.4.3R — SFT consent and use of assets"
  - "CASS 6.6.11R–6.6.57R — three-tier reconciliation, shortfall treatment, FCA notification"
  - "CASS 6.7.1R–6.7.8R — treatment after failure"
tags: [CASS-6, custody-rules, client-assets, safe-custody-assets, TTCA, SFT, reconciliation, shortfall, third-party-custodian, MiFID-II, AIFM, UCITS, UK, FCA]
related:
  - summaries/cass6-custody-rules.md
  - summaries/cass10-resolution-pack.md
  - concepts/safeguarding-pis-emis.md
  - concepts/smcr-certification-regime.md
  - summaries/sysc6-compliance-internal-audit-financial-crime.md
  - concepts/sysc4-governance-framework.md
  - concepts/sysc10-conflicts-of-interest.md
  - summaries/sup3-auditors.md
---

# Client Assets — Custody Framework (CASS 6)

## What CASS 6 Does

CASS 6 is the FCA's primary rulebook chapter on the **custody of client financial assets**. Its purpose is to ensure that a firm holding financial instruments or other designated investments on behalf of clients:

1. **Preserves client ownership** — so that in the event of the firm's insolvency, client assets are identifiable, segregated, and can be returned to clients rather than being available to the firm's creditors.
2. **Maintains accurate records** — so that the firm can at any time and without delay tell how many of each asset it holds for each client.
3. **Governs the use of client assets** — by imposing strict consent requirements before client assets can be used in SFTs or otherwise lent.
4. **Controls third-party holding** — by requiring due diligence, written agreements, and regulatory oversight of any custodian to whom assets are passed.

CASS 6 is distinct from CASS 7 (client money). It covers assets (financial instruments, other designated investments); CASS 7 covers money. Where a shortfall in custody assets is covered with the firm's own money, that money is then held under CASS 7 until the asset shortfall is resolved **(CASS 6.6.54R(2)(b))**.

---

## Who Is Caught

CASS 6 applies to firms that hold or control safe custody assets in the course of:
- MiFID business **(CASS 6.1.1R(1A))**;
- Non-MiFID safeguarding and administering investments **(CASS 6.1.1R(1B))**;
- Acting as AIF trustee/depositary **(CASS 6.1.1R(1C))**;
- Acting as UCITS trustee/depositary **(CASS 6.1.1R(1D))**; or
- Holding assets that would otherwise be custody assets but are subject to a TTCA **(CASS 6.1.1R(1E))**.

Firms that are merely arrangers or introducers, and firms whose only custody role is as a trustee or bare trustee for purposes unconnected with investment business, are outside the scope of CASS 6.

---

## The Core Structural Principles

### 1. Ownership Protection Comes First

The fundamental obligation is to **safeguard clients' ownership rights**, especially in the event of insolvency, and to prevent use of client assets on the firm's own account without express consent **(CASS 6.2.1R)**. This means:

- Client assets must be held in a way that they are recoverable by the client (or an insolvency officer acting for clients) without reference to the firm's general creditors.
- The anti-commingling obligation — client assets must be separately identifiable from the firm's own assets at all times.
- Legal title must be registered in the client's name or a permitted nominee's name where possible **(CASS 6.2.3R)**.

### 2. TTCAs Transfer Ownership — Retail Clients Are Protected by a Hard Ban

A **title transfer collateral arrangement** (TTCA) is a device by which the client transfers legal title to assets to the firm as collateral, meaning those assets cease to be client assets and become the firm's own property — the client has only an unsecured claim to equivalent assets on return.

**CASS 6.1.6R imposes an absolute ban on TTCAs with retail clients.** No consent, disclosure, or other mechanism can make a TTCA with a retail client permissible. For non-retail clients, a TTCA is only permissible if it is documented, proportionate, and the client has been informed of the risks.

### 3. Consent Is Required Before Client Assets Can Be Used

The prohibition on using client assets without consent applies broadly. For SFTs specifically:

- Express prior **written consent** with **signature or equivalent affirmative execution** is required **(CASS 6.4.1R(3))**.
- The consent must specify the terms on which the assets can be used.
- The use must be restricted to those specified terms.
- For retail clients, the FCA's expectation is that only SFTs are permissible — not other use **(CASS 6.4.1A G)**.

A general terms-and-conditions consent, or a pre-ticked box, is unlikely to constitute adequate express prior written consent.

---

## Third-Party Custody — Key Constraints

Firms regularly hold client assets through a sub-custodian or central securities depositary rather than directly. CASS 6.3 imposes a layered set of controls:

### Due Diligence Obligation

Selection and appointment of a third-party custodian requires **all due skill, care and diligence**, including consideration of the third party's expertise, reputation, safeguarding arrangements, market practices, financial position, creditworthiness, and regulatory permissions **(CASS 6.3.1R; 6.3.2G)**. Each selection decision and each periodic review must be **documented in a record retained for five years** after ceasing to use that third party **(CASS 6.3.2A R)**.

### Jurisdiction — No Unregulated Custodians

Client assets can only be deposited with a third party in a **jurisdiction that specifically regulates the safekeeping of safe custody assets** for the account of another person **(CASS 6.3.4R(1))**. Deposit in a third country that lacks such regulation is banned unless: the nature of the assets or services requires it; or the assets belong to a professional client who expressly requests it in writing **(CASS 6.3.4R(2))**.

This restriction runs through chains of custody — it applies when the third party sub-delegates to a further third party **(CASS 6.3.4R(4))**.

### Written Agreement Mandatory

A written third-party custody agreement must be in place before any deposit of client assets, setting out the binding terms, duration, and custody services contracted **(CASS 6.3.4A R)**. The agreement must also address segregation, registration, entitlement procedures, and the third party's liability for fraud or negligence.

### No Pledging of Client Assets

A firm must not grant security interests, liens, or rights of set-off over client safe custody assets to recover debts, **unless** those debts relate to the firm's own clients (e.g. settlement obligations), or unless the security interest is mandated by third-country law and the firm has disclosed the risks and concluded it is in clients' best interests **(CASS 6.3.6A R)**. This prevents a firm from using client assets as collateral for its own financing.

---

## The Three-Tier Reconciliation Framework

CASS 6.6 establishes three separate reconciliation obligations, each with a hard maximum frequency. Firms cannot substitute one for another — each serves a distinct purpose.

| Process | Purpose | Hard Maximum | Applicable To |
|---------|---------|-------------|---------------|
| **Internal custody record check** | Verify internal records are accurate and consistent | **1 month** (CASS 6.6.11R) | All firms holding safe custody assets |
| **External custody reconciliation** | Verify internal records match third-party records | **1 month** (CASS 6.6.37R) | All firms depositing with third parties |
| **Physical asset reconciliation** | Count and verify physical certificate-form assets | **6 months** (CASS 6.6.22R) | Firms holding physical safe custody assets only |

**The frequency caps are maximums, not targets.** The firm must set its actual frequency based on transaction volume, transaction value, and risks to client assets **(CASS 6.6.44R)** — and review at least annually **(CASS 6.6.46R)**. High-volume firms holding electronically settled assets should typically reconcile externally every business day **(CASS 6.6.39G)**.

**Independence:** Reconciliations should be carried out by someone independent of the production or maintenance of the records being checked **(CASS 6.6.47G)**.

**Internal records only for internal checks:** Internal custody record checks must use only the firm's own internal records — not third-party statements **(CASS 6.6.14R)**. Third-party records are the input for external reconciliations, not internal checks.

---

## Shortfall Coverage — The Capital Implication

When a discrepancy reveals a **shortfall** (the firm is holding fewer assets than it should), the firm cannot simply investigate and wait. Until the shortfall is resolved, CASS 6.6.54R requires the firm to **immediately appropriate its own assets or money** to cover the shortfall value, held for the affected clients in a CASS-compliant way.

This is a hard capital-like obligation embedded in CASS:
- The firm must have sufficient own assets (or money) available to cover custody shortfalls at the time they are discovered.
- The coverage must be adjusted as the shortfall value changes **(CASS 6.6.56G)**.
- The obligation is not suspended because the discrepancy may be someone else's fault **(CASS 6.6.54R(3))**.

---

## FCA Notification Triggers

CASS 6.6.57R requires firms to notify the FCA **without delay** in any of six scenarios: records are materially out of date/inaccurate; the firm cannot take shortfall treatment steps; or the firm cannot conduct any of the three reconciliation processes. These are independent triggers — a firm does not need to be in overall systemic failure to trigger the notification obligation.

---

## Treatment After Failure

On insolvency, a custodian's primary obligation before disposing of assets is to **attempt to return them to the client or transfer them to another firm** **(CASS 6.7.2R)**. The firm must make reasonable efforts to trace the client (using records, tracing agents, media advertisements), notify them of the proposed course of action, and allow them to respond. Any disposal must be recorded indefinitely. Transfers to another firm require a written contractual undertaking including a commitment to return the asset on the client's request and to notify the client within 14 days of the regulatory regime and compensation scheme status at the receiving firm **(CASS 6.7.8R)**.

---

## Relationship to Other Regimes

**CASS 6 vs CASS 7:** CASS 6 covers safe custody assets (financial instruments); CASS 7 covers client money. Where a shortfall in CASS 6 assets is funded with the firm's own money, that money becomes client money under CASS 7 **(CASS 6.6.54R(2)(b))**. The two regimes work in tandem.

**CASS 6 vs PSR/EMR Safeguarding:** CASS 6 does not apply to payment institutions or e-money institutions in respect of payment funds or e-money. PI/EMI safeguarding is governed by the PSRs/EMRs and the FCA Approach Document (Chapter 10). See [[safeguarding-pis-emis]].

**SM&CR — CASS Operational Oversight function:** Under SYSC 6.1.4A R, a director or senior manager must be allocated responsibility for oversight of compliance with COBS, COLL, and CASS. The CASS Operational Oversight certification function (analogous to the pre-SMCR CF29) applies to the individual responsible for the day-to-day operation of the firm's client assets regime. See [[smcr-certification-regime]].

**SYSC 6.1.1R:** The baseline organisational requirement — adequate policies and procedures for financial crime prevention and regulatory compliance — applies to all elements of the CASS regime, including custody rules. CASS policies must be reviewed at appropriate frequency as part of this obligation.

---

## Key Points for Agents

- **TTCA absolute ban with retail clients — no exceptions (CASS 6.1.6R).** Any structure that transfers legal title from a retail client to the firm as collateral is prohibited, regardless of consent or disclosure. This is a hard Rule with no FCA waiver power.
- **SFT consent must be express, written, and affirmatively executed (CASS 6.4.1R(3)).** A general T&C clause is not sufficient. For retail clients, only SFTs are expected to be consented to — other use of retail client assets is not permissible under FCA expectations.
- **Security interests/liens over client assets are effectively prohibited except in narrow circumstances (CASS 6.3.6A R).** Firms cannot pledge client assets as their own collateral. The only exceptions are debts relating to the firm's own clients, or mandatory third-country law requirements (with disclosure and best interests test).
- **Third-party custodians must be in jurisdictions that regulate safekeeping (CASS 6.3.4R).** Unregulated third-country custodians are banned except where the nature of the assets requires it or a professional client requests it in writing. Due diligence records must be kept for five years after cessation of use.
- **Three-tier reconciliation with hard monthly/six-monthly caps (CASS 6.6.11R; 6.6.22R; 6.6.37R).** Each process is mandatory and separate. Internal checks use only internal records; external reconciliations check against third-party records. They cannot be substituted for one another.
- **Shortfall coverage is mandatory and immediate (CASS 6.6.54R).** The firm must appropriate its own assets or money to cover any shortfall as soon as it is identified — before the investigation is complete. This has direct capital implications.
- **FCA must be notified without delay on any inability to maintain records or conduct reconciliations (CASS 6.6.57R).** Six independent triggers. This is a proactive obligation — the firm cannot wait until the FCA asks.

## Related Articles

- [[cass6-custody-rules]]
- [[cass10-resolution-pack]]
- [[safeguarding-pis-emis]]
- [[smcr-certification-regime]]
- [[sysc6-compliance-internal-audit-financial-crime]]
- [[sysc4-governance-framework]]
- [[sysc10-conflicts-of-interest]]
- [[sup3-auditors]]
