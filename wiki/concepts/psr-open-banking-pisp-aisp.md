---
title: "Open Banking — Payment Initiation, Account Information, and ASPSP Obligations"
jurisdiction: UK
regulator: FCA
regulation: PSRs 2017 (Regs 68–70, 98–103); SCA-RTS (Arts. 30–33, 36)
status: current
effective_date: 2018-01-13
last_updated: 2026-04-16
sources:
  - "FCA Approach Document (Payment Services and Electronic Money) v7, March 2026 — Chapter 17"
tags: [open-banking, PISP, AISP, ASPSP, CBPII, dedicated-interface, contingency-mechanism, SCA-RTS, PSRs, payment-services, TPP, NOT003, NOT005, UK, FCA]
related:
  - summaries/fca-approach-payment-services-electronic-money.md
  - concepts/psr-sca-authentication.md
  - concepts/psr-regulatory-reporting.md
  - concepts/psr-unauthorised-transaction-liability.md
  - concepts/safeguarding-pis-emis.md
---

# Open Banking — Payment Initiation, Account Information, and ASPSP Obligations

Chapter 17 of the FCA Approach Document governs the ecosystem of third-party payment service providers (TPPs) accessing payment accounts held at account-servicing PSPs (ASPSPs). It sets out obligations for all four actor types: **ASPSPs**, **PISPs** (payment initiation service providers), **AISPs** (account information service providers), and **CBPIIs** (card-based payment instrument issuers).

> **Scope:** These obligations apply to payment accounts that are accessible online. Not all payment accounts are in scope — the key condition is that the account is accessible online by the payment service user. **(Approach Document §17.1)**

---

## Actor Definitions and Core Obligations

### ASPSP (Account-Servicing Payment Service Provider)

An ASPSP is a PSP that provides and maintains a payment account accessible online — typically a bank, building society, or e-money institution. ASPSPs sit at the centre of the open banking ecosystem and bear the most extensive obligations.

### PISP (Payment Initiation Service Provider)

A PISP initiates payment orders at the request of the payment service user from a payment account held at an ASPSP. **(PSRs 2017 Reg 2)**

**Hard restrictions on PISPs (PSRs 2017 Reg 69):**
1. **No holding of funds:** A PISP must not, at any point in the execution of a payment order, come into possession of the payment service user's funds
2. **No order modification:** A PISP cannot modify the amount, payee, or any other element of a payment order after the customer has initiated it
3. **Data access limited:** A PISP may only access account information necessary to provide payment initiation — no more

### AISP (Account Information Service Provider)

An AISP provides an aggregated view of one or more payment accounts held at one or more ASPSPs. **(PSRs 2017 Reg 2)**

**Data scope:** An AISP may access the same account information that is available when the customer accesses their account directly. Not more than what the customer could themselves access — not less. **(Approach Document §17.33)**

**90-day consent reconfirmation:** An AISP must, at least every **90 days**, reconfirm that the customer consents to continued data access. The first access via an AISP must always use SCA. **(PSRs 2017 Reg 70(2)(b); Approach Document §17.34–17.35)**

> The AISP 90-day reconfirmation obligation connects to the SCA-RTS Art. 10A exemption — after the initial SCA, the ASPSP may apply the exemption for subsequent AISP accesses within the 90-day window. See [[psr-sca-authentication]].

### CBPII (Card-Based Payment Instrument Issuer)

A CBPII may request confirmation from an ASPSP of whether funds are available to cover a specific payment amount. The ASPSP may only respond **yes or no** — it may not provide the account balance or any transaction history. **(PSRs 2017 Reg 68(4); SCA-RTS Art. 36(1)(c))**

---

## ASPSP Non-Discrimination Obligations

An ASPSP must not:

- Discriminate against a PISP or AISP compared to a customer accessing their account directly
- Provide a worse service (speed, availability, data quality) to PISPs/AISPs than to customers accessing directly
- Require additional authorisations, registrations, or conditions beyond FCA authorisation/registration **(PSRs 2017 Reg 70(4); Approach Document §17.129–17.137)**
- Impose additional checks on customer consent given to a PISP or AISP — the ASPSP must not seek proof, or confirmation from the customer, of that consent as a prerequisite to providing access **(Approach Document §17.140)**

**Same authentication:** Under **PSRs 2017 Reg 100(4)**, an ASPSP must allow a PISP or AISP to rely on the same authentication procedures provided to the customer. Where the ASPSP offers biometric authentication to customers, this must also be available via PISP/AISP — the fact that a specific channel or device does not support a method should not prevent that method from being available via a TPP. **(Approach Document §17.130, 17.136)**

**SCA applied once per session:** The ASPSP should not require SCA more than once for a single session of account information access or a single payment initiation. **(Approach Document §17.135, 17.146)**

---

## Access Denial by ASPSPs

An ASPSP may only deny or restrict access to a payment account for a PISP or AISP on grounds of:

- **Objectively justified and duly evidenced** fraud or suspected unauthorised access

Access denial is not a commercial decision. An ASPSP cannot refuse access because of competitive concerns, technical inconvenience, or general commercial policy. **(PSRs 2017 Reg 70(3); Approach Document §17.15)**

**Notification obligation (NOT003):**
- The ASPSP must **immediately** notify the FCA when it denies or restricts access, providing the duly evidenced reasons
- Where the fraud/unauthorised access concerns no longer exist, access must be restored **immediately**
- This is an event notification using Form **NOT003** — see [[psr-regulatory-reporting]]

---

## Sensitive Payment Data

PISPs and AISPs are **prohibited** from:

1. Storing the customer's **personalised security credentials (PSC)** — the credentials used to authenticate with the ASPSP
2. Requesting the PSC except where needed for authentication in the access flow
3. Storing or accessing any data other than that needed for the service **(PSRs 2017 Regs 69(3)(b), 70(3)(b))**

"Sensitive payment data" means data (including PSC) that could be used to commit fraud. An AISP may receive account information but must not use it for any purpose other than the information service requested by the customer.

---

## Dedicated Interface

An ASPSP must maintain a **dedicated interface** (API) through which PISPs, AISPs, and CBPIIs can access payment accounts. The dedicated interface must meet the requirements of **SCA-RTS Article 30**:

- Provide at least the same level of service, performance, and availability as the customer-facing interface
- Be published with technical specifications (SCA-RTS Art. 30(3))
- Include a testing facility available to PISPs/AISPs/CBPIIs — at no charge, available by market launch **(EBA Guideline 6.5)**
- Meet EBA KPI standards for availability and performance (response times, uptime)

---

## Contingency Mechanism and Exemption

### Contingency Mechanism (Default)

Where a dedicated interface is unavailable or underperforming, or where an ASPSP has not obtained an exemption, the ASPSP must maintain a **contingency mechanism** — typically a modified version of the customer interface (e.g. online banking portal) — that PISPs/AISPs/CBPIIs can fall back to. **(SCA-RTS Art. 33(4))**

The contingency mechanism must:
- Allow the AISP/PISP to be identified (via qualified certificates)
- Allow the AISP/PISP to rely on the ASPSP's authentication procedures

### Exemption from Contingency Mechanism (SCA-RTS Art. 33(6))

An ASPSP may apply to the FCA for an **exemption from the contingency mechanism** where its dedicated interface meets all four conditions:

| Condition | Requirement |
|-----------|------------|
| **(a)** | Dedicated interface meets SCA-RTS Art. 30 access requirements — provides same data and same performance as customer interface |
| **(b)** | Technical specifications publicly available and testing facility available to PISPs/AISPs/CBPIIs |
| **(c)** | Dedicated interface has been widely used for at least **3 months** by PSPs to offer AIS, PIS, and fund confirmation services |
| **(d)** | Systems and processes in place to resolve problems with the interface **without undue delay** |

**Exemption assessment process (15 questions):** The FCA assesses applications against EBA Guidelines 1–8, requiring evidence on: availability and performance KPIs (Q1–Q3), stress testing (Q4), obstacles assessment (Q5), design and testing (Q6–Q11), wide usage evidence (Q12–Q13), and problem resolution (Q14–Q15). **(Approach Document §17.109–17.187)**

**Minded to exempt:** The FCA may indicate it is "minded to exempt" before all criteria are fully met, where the ASPSP has clear and credible plans to meet requirements. Exemption is only confirmed once all criteria are satisfied. **(Approach Document §17.109)**

---

## Revocation of Exemption

The FCA **must revoke** an exemption where conditions **(a)** and **(d)** are not met for more than **2 consecutive calendar weeks**. **(SCA-RTS Art. 33(7); Approach Document §17.171)**

Following revocation:
- The ASPSP must establish a contingency mechanism within the **shortest possible time** and at the latest within **2 months**
- Until the contingency mechanism is in place, access via the modified customer interface must be provided

---

## Reporting Problems with the Dedicated Interface (NOT005)

**SCA-RTS Art. 33(3)** requires ASPSPs, AISPs, PISPs, and CBPIIs to report problems with dedicated interfaces to the FCA without undue delay.

**Two categories of reportable problems:**

1. **SCA-RTS Art. 32 non-compliance:** The interface does not comply with Art. 32 requirements (availability, performance, no obstacles)
2. **Unplanned unavailability or systems breakdown:** Triggered after **5 consecutive requests** to the dedicated interface are not replied to within 30 seconds

Reports are made via Form **NOT005**. The ASPSP should confirm whether availability has been restored at the time of reporting. **(Approach Document §17.174–17.187)**

---

## Identification of PISPs and AISPs

PISPs and AISPs must identify themselves to ASPSPs via **qualified certificates** (eIDAS equivalent under UK law). The ASPSP must allow access once a PISP or AISP can confirm it is authorised or registered — the ASPSP cannot make access contingent on anything other than this confirmation. **(PSRs 2017 Reg 70(4); Approach Document §17.137)**

API enrolment steps (e.g. OBIE scheme enrolment) are permissible provided they do not impose obstacles beyond what is required by the PSRs 2017 and the SCA-RTS. **(Approach Document §17.138)**

---

## Account Selection and Multiple Accounts

Where a customer has multiple accounts with an ASPSP and the PISP or AISP can inform the ASPSP which account(s) have been selected, the ASPSP should not require the customer to re-select. If account selection can only take place in the ASPSP's domain, this does not constitute an obstacle. **(Approach Document §17.143)**

---

## Key Points for Agents

- **ASPSP non-discrimination is mandatory and comprehensive.** Same access, same performance, same authentication methods as direct customer access. No additional consent steps, no commercial refusals.
- **PISP hard restrictions:** no funds holding, no order modification, no excess data access. These are absolute — not just best practice.
- **AISP 90-day consent reconfirmation** is a legal obligation (PSRs 2017). First access via an AISP always requires SCA, regardless of Art. 10A.
- **Access denial:** only fraud/unauthorised access grounds permitted; must file **NOT003 immediately** and restore access once grounds no longer exist.
- **Dedicated interface exemption (SCA-RTS Art. 33(6)):** requires 3+ months of wide usage, available test facility, published specs, and problem resolution processes. FCA can revoke if conditions (a) or (d) not met for 2+ consecutive weeks.
- **Sensitive payment data** (PSC) must never be stored by PISP or AISP. This is a criminal offence if deliberate.
- **NOT005:** Report dedicated interface problems without undue delay; triggered at 5 consecutive failed requests within 30 seconds.
- **CBPII** may only receive a yes/no fund confirmation — never account balance or transaction history.

## Related Articles

- [[fca-approach-payment-services-electronic-money]]
- [[psr-sca-authentication]]
- [[psr-regulatory-reporting]]
- [[psr-unauthorised-transaction-liability]]
- [[safeguarding-pis-emis]]
