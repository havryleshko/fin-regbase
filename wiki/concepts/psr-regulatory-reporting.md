---
title: "Regulatory Reporting and Notifications — PSRs 2017 and EMRs 2011"
jurisdiction: UK
regulator: FCA
regulation: PSRs 2017; EMRs 2011; SUP 16; SUP 15.14
status: current
effective_date: 2017-01-13
last_updated: 2026-04-16
sources:
  - "FCA Approach Document (Payment Services and Electronic Money) v7, March 2026 — Chapter 13"
tags: [regulatory-reporting, FSA056, REP017, REP018, REP020, NOT002, NOT003, NOT005, PSRs, EMRs, payment-institutions, EMI, ASPSP, fraud-reporting, major-incident, UK, FCA, SUP]
related:
  - summaries/fca-approach-payment-services-electronic-money.md
  - concepts/psr-open-banking-pisp-aisp.md
  - concepts/psr-sca-authentication.md
  - concepts/safeguarding-pis-emis.md
  - concepts/psr-emi-prudential.md
  - concepts/operational-resilience.md
  - concepts/aml-ctf-framework.md
---

# Regulatory Reporting and Notifications — PSRs 2017 and EMRs 2011

All PSPs and EMIs subject to FCA supervision must make periodic returns and event-based notifications. Failures to report on time, or to provide required information, are a breach of the PSRs/EMRs and may lead to enforcement action. Reports are submitted via the FCA's Connect portal or RegData.

> **Source note:** The authoritative requirements are set out in the **SUP sourcebook** of the FCA Handbook (particularly SUP 15, SUP 16) alongside the PSRs 2017 and EMRs 2011. The Approach Document Chapter 13 provides interpretive guidance and cross-references. Where the table below uses form names without SUP references, the SUP sourcebook should be consulted for exact submission mechanics.

---

## Periodic Returns

### Capital and Prudential Returns

| Form | Who | Frequency | Deadline | Content |
|------|-----|-----------|----------|---------|
| **FSA056** | Authorised PIs | Annual | Within 30 days of accounting reference date (ARD) | Capital adequacy; own funds; payment volume for Method C calculation |
| **FSA057** | Small PIs | Annual | By 31 January each year | Payment volume; activity data |
| **FIN060a** | Authorised EMIs | Annual | Set deadline per SUP | Capital adequacy; outstanding e-money; payment services data |
| **FIN060b** | Small EMIs (payment services only) | Annual | Set deadline per SUP | Payment volume |
| **FSA065** | Small EMIs (e-money only) | Annual | Set deadline per SUP | Outstanding e-money data |

### Fraud Reporting

| Form | Who | Frequency | Deadline | Content |
|------|-----|-----------|----------|---------|
| **REP017** | All PSPs providing payment services | Twice-yearly | Within 3 months of period end (periods: 1 Jan–30 Jun; 1 Jul–31 Dec) | Fraud data broken down by fraud type, payment instrument, and whether the PSP was payer's or payee's PSP; includes APP fraud data |

> **REP017 guidance:** The fraud data reported in REP017 must be consistent with the data monitored for SCA-RTS Article 21 (SCA exemption monitoring). The methodology and definitions align with EBA Guidelines on fraud reporting. **(Approach Document §§20.73–20.83)**

### Operational and Security Risk

| Form | Who | Frequency | Deadline | Content |
|------|-----|-----------|----------|---------|
| **REP018** | All PSPs | Quarterly | Set deadline per SUP | Operational and security risk assessment update; incidents in the period; mitigation measures; risk management framework adequacy |

### Open Banking — Dedicated Interface Performance

| Form | Who | Frequency | Deadline | Content |
|------|-----|-----------|----------|---------|
| **REP020** | ASPSPs with a dedicated interface | Quarterly | Set deadline per SUP | Interface availability, performance, and usage data (per EBA KPI definitions); number of PISPs/AISPs/CBPIIs using the interface |

### Complaints

| Form | Who | Frequency | Deadline | Content |
|------|-----|-----------|----------|---------|
| **DISP 1 Annex 1AD** | All PSPs providing payment services to retail customers | Annual | 30 days after 30 June (reporting period: 1 Jul–30 Jun) | Volume of complaints by product/service; resolution rates; FOS referrals |

### Controller and Close Links Changes

| Form | Who | Frequency | Deadline | Content |
|------|-----|-----------|----------|---------|
| **REP002** | All authorised/registered PSPs and EMIs | Event-driven | Without undue delay | Changes to controllers |
| **REP001** | All authorised/registered PSPs and EMIs | Event-driven | Without undue delay | Changes to close links |

### Financial Crime (AML/CTF)

| Form | Who | Frequency | Deadline | Content |
|------|-----|-----------|----------|---------|
| **REP-CRIM** | EMIs with payment transaction volumes ≥ £5 million/year | Annual | Set deadline per SUP | Systems and controls for financial crime; AML/CTF arrangements |

---

## Event Notifications

Event notifications are triggered by specific circumstances and must be filed promptly — often "immediately" or "without undue delay."

| Form | Trigger | Who Must File | Timing |
|------|---------|---------------|--------|
| **NOT002** | Material breach or inability to comply with safeguarding, capital, or other key PSR/EMR obligations | PSP/EMI | Without delay on becoming aware |
| **NOT003** | ASPSP denial of access to a PISP or AISP | ASPSP (on denial); AISP/PISP (where access denied) | **Immediately** on denial |
| **NOT004** | Passporting/cross-border notification requirements | PSP/EMI operating cross-border | Before commencing |
| **NOT005** | Problems with a dedicated interface (open banking) | ASPSP, AISP, PISP, or CBPII | Without undue delay (after 5 consecutive failed requests) |

> **NOT003 detail:** Where an ASPSP denies or restricts access to a payment account for a PISP or AISP, it must immediately notify the FCA of the denial and provide duly evidenced reasons. The only permitted grounds for denial are fraud or suspected unauthorised access. **(PSRs 2017 Reg 70(3); Approach Document §17.15–17.17)** See [[psr-open-banking-pisp-aisp]].

> **NOT005 detail:** Problems with a dedicated interface include: (i) non-compliance with SCA-RTS Art. 32 requirements; (ii) unplanned unavailability or systems breakdown. The reporting trigger for unavailability is **5 consecutive requests** not responded to within 30 seconds. **(Approach Document §§17.174–17.187)**

---

## Major Operational and Security Incident Notifications

All PSPs must notify the FCA of **major operational or security incidents** in accordance with SUP 15.14 and the EBA Guidelines on major incident reporting under PSD2.

### Three-Stage Reporting Process

| Stage | Timing | Content |
|-------|--------|---------|
| **Initial notification** | Within **4 hours** of becoming aware the incident qualifies as major | Description of incident; initial assessment of impact; containment measures taken |
| **Intermediate notification** | Before end of **next business day** after initial notification | Updated assessment; impact on PSUs; expected resolution timeline |
| **Final report** | Within **2 weeks** of incident resolution | Root cause analysis; full impact data; remediation measures |

**Thresholds for "major" classification** are defined in the EBA Guidelines on incident reporting and relate to:
- Number of PSUs affected
- Value of payment transactions disrupted
- Duration of the incident
- Geographical spread
- Systemic impact on other PSPs or infrastructure

> **Also check:** Problems with dedicated interfaces may also qualify as major incidents and should be assessed against the EBA Guidelines criteria separately from the NOT005 reporting obligation. **(Approach Document §17.177)**

---

## Annual Operational and Security Risk Assessment

In addition to the quarterly REP018 return, all PSPs must provide the FCA, **at least annually**, with a **comprehensive assessment of their operational and security risks** and the adequacy of their mitigation measures and controls. **(PSRs 2017 Reg 98; Approach Document §18.2)**

This is distinct from REP018 (which is a periodic data return) — the annual assessment is a substantive self-assessment document covering the firm's full risk management framework.

---

## Consistency With Other Reporting

**SCA monitoring data (SCA-RTS Art. 21) must be consistent with REP017 fraud data.** The same transaction population and fraud definitions apply, with the exception that REP017 includes all fraudulent transactions for which the PSP is liable; TRA exemption monitoring excludes transactions where another PSP bore sole liability. **(Approach Document §20.83)**

**Art. 17 corporate payment processes exemption (SCA-RTS Art. 17):** Firms relying on this SCA exemption must submit an assessment at least **3 months before use** and include it in their annual operational and security risk assessment. **(Approach Document §20.68)**

---

## Key Points for Agents

- **FSA056** (PI capital, annual), **REP017** (fraud, twice-yearly), and **REP018** (op/security risk, quarterly) are the three most operationally significant periodic returns for most authorised PIs.
- **REP020** (dedicated interface) is mandatory for ASPSPs operating open banking interfaces — quarterly.
- **Major operational/security incidents require a 4-hour initial notification.** This is the most time-critical reporting obligation in the payments regime.
- **NOT003 must be filed immediately** when an ASPSP denies access to a PISP or AISP — even a temporary refusal must be notified without delay.
- **NOT002** covers material safeguarding, capital, or other key compliance breaches — filed without delay on becoming aware.
- Fraud data in REP017 must be consistent with SCA-RTS Art. 21 monitoring data. Inconsistencies create an immediate supervisory concern.
- EMIs with payment transactions ≥ £5 million/year also file REP-CRIM (financial crime annual return).

## Related Articles

- [[fca-approach-payment-services-electronic-money]]
- [[psr-open-banking-pisp-aisp]]
- [[psr-sca-authentication]]
- [[safeguarding-pis-emis]]
- [[psr-capital-requirements]]
- [[operational-resilience]]
- [[aml-ctf-framework]]
