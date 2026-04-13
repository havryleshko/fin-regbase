---
title: "UK Financial Sanctions Framework — SAMLA, OFSI, and the Consolidated List"
jurisdiction: UK
regulator: FCA / OFSI (HM Treasury)
regulation: Sanctions and Anti-Money Laundering Act 2018 (SAMLA); FCG 7.1; PRIN 2.1.1R (Principle 11); FCTR 8 (June 2023)
status: current
effective_date: 2018-05-23
last_updated: 2026-04-13
sources:
  - "FCG 7.1.1–7.1.6 (April 2026 version)"
  - "FCA FCTR 8: Sanctions systems and controls: firms' response to increased sanctions due to Russia's invasion of Ukraine (June 2023) — Governance and oversight"
tags: [financial-crime, sanctions, OFSI, SAMLA, Consolidated-List, scope, OFAC-divergence, UK, FCA]
related:
  - concepts/sanctions-screening.md
  - concepts/asset-freezes-and-ofsi-licences.md
  - concepts/proliferation-financing.md
  - concepts/aml-ctf-framework.md
  - summaries/fcg7-sanctions-asset-freezes-proliferation-financing.md
  - summaries/fctr8-sanctions-systems-controls-russia.md
---

# UK Financial Sanctions Framework — SAMLA, OFSI, and the Consolidated List

## What Financial Sanctions Are

Financial sanctions are restrictions put in place by the UK government or multilateral organisations (UN, OFAC equivalents) that limit the provision of certain financial services or restrict access to financial markets, funds and economic resources. Their purpose is to achieve specific foreign policy or national security objectives. **(FCG 7.1.4)**

Financial sanctions are a **legally distinct regime** from AML/CTF. They impose an absolute prohibition on dealing with designated persons — there is no suspicion-threshold or transaction-size carve-out. No amount is too small: a firm that believes payments to sanctioned individuals are permitted when sums are small is wrong, and without an OFSI licence, this could be a criminal offence. **(FCG 7.2.1)**

---

## Legislative Basis

| Source | Role |
|--------|------|
| **Sanctions and Anti-Money Laundering Act 2018 (SAMLA)** | Primary enabling legislation. Grants HM Treasury powers to make sanctions regulations. The UK Sanctions List is published under SAMLA regulations. |
| **Anti-Terrorism, Crime and Security Act 2001** | Makes it a criminal offence to aid proliferators (export of goods/services for use in WMD programmes). |
| **Counter-Terrorism Act 2008** | Powers for HM Treasury to direct financial firms to cease business with specific customers involved in proliferation activity or terrorism financing. |
| **Money Laundering Regulations 2017 (MLR) Reg 18A** | Requires a proliferation financing risk assessment — connected to sanctions but a separate AML-framework obligation. |

---

## OFSI — The Sanctions Enforcement Body

The **Office of Financial Sanctions Implementation (OFSI)** within HM Treasury is responsible for ensuring UK financial sanctions are understood, implemented and enforced. OFSI's key functions: **(FCG 7.1.5A)**

- Maintains the **Consolidated List** — a list of all financial sanctions targets designated by the UN and the UK
- Publishes the **UK Sanctions List** — persons designated under SAMLA regulations, with applicable sanctions measures
- Issues **licences** permitting activities that would otherwise breach sanctions (e.g. allowing a firm to deal with a designated person in specific, licensed circumstances)
- Receives mandatory breach notifications from firms and from individuals who discover or suspect a breach

OFSI also publishes guidance on complying with UK financial sanctions obligations, including FAQs.

---

## The Consolidated List

The Consolidated List is the operative instrument for sanctions compliance. It contains:

- **UN-designated** financial sanctions targets
- **UK-designated** financial sanctions targets (under SAMLA regulations)

For each designated person or entity, the List specifies which sanctions measures apply.

Firms must screen customers, counterparties, payments, directors, and beneficial owners against the Consolidated List. Failure to maintain up-to-date screening processes calibrated to the List is the primary source of sanctions compliance failures. See [[sanctions-screening]] for the operational framework.

---

## Scope — Who Must Comply

**Critical distinction from AML:** UK financial sanctions apply to a **broader population** than AML obligations under FCG 3.

| Category | Sanctions (FCG 7) | AML (FCG 3) |
|----------|------------------|-------------|
| Firms subject to SYSC 3.2.6R or SYSC 6.1.1R | In scope | In scope |
| E-money institutions | **In scope** | Out of FCG 3 scope (supervised by FCA under MLR) |
| Payment institutions | **In scope** | Out of FCG 3 scope (supervised by HMRC under MLR) |
| Cryptoasset businesses (FCA-registered) | **In scope** | In scope |
| All UK nationals and UK-incorporated entities, wherever they operate | Must comply with UK sanctions | Not applicable (AML is activity/jurisdiction-based) |

**(FCG 7.1.1)**

**Territorial scope:** All individuals and entities within the UK, plus all UK nationals and UK-incorporated entities (including their branches), must comply with UK financial sanctions regardless of where their activities take place. **(FCG 7.1.5)**

---

## Principle 11 Notification Obligation

Under **Principle 11 (PRIN 2.1.1R)**, authorised firms must notify the FCA if they — or their group companies, approved persons, senior management functions, appointed representatives, or agents — are targets of UK sanctions or those of any other country or jurisdiction. **(FCG 7.1.5)**

For e-money institutions, payment services firms, cryptoasset businesses and Annex I financial institutions, being targeted by sanctions constitutes a **material change of circumstance** and triggers a notification obligation.

This is a separate and additional obligation from the duty to report breaches to OFSI.

---

## Sanctions vs. AML — Key Structural Differences

| Dimension | Sanctions | AML/CTF |
|-----------|-----------|---------|
| Trigger | Dealing with a **designated person** — regardless of suspicion | **Suspicion** of money laundering or terrorist financing |
| Threshold | Absolute prohibition (no de minimis) | Subjective suspicion threshold |
| Enforcement body | OFSI (HM Treasury) | NCA (via SARs) / FCA (systems and controls) |
| Reporting obligation | OFSI (mandatory) + FCA (where systems failure) | NCA via SAR; FCA for systems failures |
| Response when identified | **Immediate freeze** of assets | DAML consent request before proceeding |
| Risk assessment | Sanctions risk assessment + MLR 18A PF assessment | MLR Reg 18 AML/CTF risk assessment |

---

## UK Sanctions vs. OFAC — Divergence Risk for Global Firms

A specific failure pattern identified in FCTR 8 across global firms: policies calibrated for US OFAC sanctions with insufficient attention to the UK regime. This arises where: **(FCTR 8)**

- Global sanctions teams operate from centres of excellence outside the UK
- Sanctions tools are calibrated against OFAC's SDN list but not verified against OFSI's Consolidated List
- Communication between global and regional UK sanctions teams is poor

**The risk:** UK sanctions have diverged from OFAC post-Brexit. The OFSI Consolidated List and the OFAC SDN list are maintained independently. A designated person under UK sanctions may not be designated by OFAC, and vice versa. Relying on OFAC-compliance as a proxy for UK compliance is a named regulatory failure.

Firms with global sanctions programmes must explicitly verify that UK-facing controls address OFSI's Consolidated List, not only OFAC or other non-UK regimes. Where global teams run UK sanctions operations, the FCA expects adequate oversight of UK-specific activities and MI flowing to UK senior management.

---

## Relationship to Other FCG Chapters

FCG 7 explicitly incorporates governance and MI guidance from **FCG 2.2 and FCG 2.3** (general financial crime themes). Sanctions governance, risk assessment, and MI obligations are treated as a specific application of those general principles. **(FCG 7.2.-1)**

FCTR 8 (thematic review on UK financial sanctions) and FCTR 15 (trade finance and financial crime) provide further FCA findings and good/poor practice. **(FCG 7.3.1)**

---

## Key Points for Agents

- UK financial sanctions are a legally distinct regime from AML/CTF — the trigger is dealing with a **designated person** (absolute), not suspicion (threshold-based).
- Sanctions apply to **all FCA-supervised firms** including e-money institutions, payment institutions, and cryptoasset businesses — broader scope than FCG 3 AML obligations.
- OFSI maintains the Consolidated List (UN + UK designations) — the operative instrument for screening.
- No amount is too small: payments to sanctioned persons without an OFSI licence are a potential criminal offence regardless of size.
- Principle 11 requires firms to notify the FCA if they or connected entities are targets of sanctions — separate from the duty to report breaches to OFSI.
- The Sanctions and Anti-Money Laundering Act 2018 (SAMLA) is the primary legislative basis for UK designations post-Brexit.
- **OFAC is not a substitute for UK compliance.** UK sanctions diverge from OFAC post-Brexit. Global firms relying on OFAC-calibrated tools or global sanctions policies without UK-specific verification are a named failure in FCTR 8.

## Related Articles

- [[sanctions-screening]]
- [[asset-freezes-and-ofsi-licences]]
- [[proliferation-financing]]
- [[aml-ctf-framework]]
- [[fcg7-sanctions-asset-freezes-proliferation-financing]]
- [[fctr8-sanctions-systems-controls-russia]]
