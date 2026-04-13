---
title: "Asset Freezes, OFSI Licences, and Sanctions Breach Reporting"
jurisdiction: UK
regulator: FCA / OFSI (HM Treasury)
regulation: FCG 7.2.3B–7.2.4 (April 2026 version); Principle 11 (PRIN 2.1.1R); SUP 15.3; FCTR 8 (June 2023)
status: current
effective_date: 2026-04-01
last_updated: 2026-04-13
sources:
  - "FCG 7.2.3B — Asset freezing and licences"
  - "FCG 7.2.3C — Reporting and assessing potential sanctions breaches"
  - "FCG 7.2.4 — Matches and escalation"
  - "FCA FCTR 8: Sanctions systems and controls: firms' response to increased sanctions due to Russia's invasion of Ukraine (June 2023) — Breach reporting to the FCA"
tags: [financial-crime, sanctions, asset-freeze, OFSI, licence, breach-reporting, FCA, UK]
related:
  - concepts/uk-financial-sanctions-framework.md
  - concepts/sanctions-screening.md
  - concepts/sar-consent-tipping-off.md
  - summaries/fcg7-sanctions-asset-freezes-proliferation-financing.md
  - summaries/fctr8-sanctions-systems-controls-russia.md
---

# Asset Freezes, OFSI Licences, and Sanctions Breach Reporting

## The Asset Freeze Obligation

When a financial sanction takes the form of an **asset freeze**, the funds and economic resources belonging to, owned, held, or controlled by a designated person must be frozen **immediately** by the person in possession or control of them. **(FCG 7.2.3B)**

This obligation is absolute — there is no grace period, no minimum threshold, and no discretion. The only exceptions are:

1. A **statutory exception** specified in the relevant sanctions legislation
2. A **licence** issued by OFSI permitting the specific activity

Firms must have clear policies and procedures covering: **(FCG 7.2.3B)**

- When funds and economic resources are frozen or released
- How frozen assets in the firm's possession or control are maintained in compliance with UK sanctions
- How to assess, utilise, and monitor OFSI licences and statutory exceptions

**Critical distinction from DAML consent (AML):** The asset freeze obligation under sanctions law is legally distinct from the Dealing in Assets with a Money Laundering Licence (DAML) consent regime under POCA. In AML, a nominated officer may seek DAML consent from the NCA before proceeding with a suspicious transaction. In sanctions, the default is immediate freeze — there is no provisional "proceed while seeking consent" mechanism. See [[sar-consent-tipping-off]] for the DAML regime.

---

## OFSI Licences

OFSI can issue licences permitting firms to carry out activities that would otherwise breach financial sanctions. Licences are specific and limited in scope. Firms must:

- Actively assess when a licence may be needed before proceeding with any activity involving a designated person
- Apply for a licence from OFSI in advance — not retrospectively
- Monitor ongoing compliance with licence conditions
- Have internal processes to manage licence applications and renewals

Acting without a licence when one is required is a potential criminal offence regardless of the amount involved. **(FCG 7.2.1)**

---

## Reporting Potential Sanctions Breaches

### Mandatory OFSI Notification

Relevant firms are legally required to report to OFSI where they know or have **reasonable cause to suspect** a breach of financial sanctions, and must notify OFSI if: **(FCG 7.2.3C)**

1. A person they are dealing with, directly or indirectly, is a designated person
2. They hold any frozen assets
3. They discover or suspect any breach while conducting their business

**Failure to report a confirmed breach to OFSI is a potential criminal offence.** **(FCG 7.2.3C; FCG 7.2.4)**

### FCA Notification — Dual Obligation

In addition to the OFSI reporting obligation, firms must consider whether to notify the FCA. This is required under **Principle 11 (PRIN 2.1.1R)** and **SUP 15.3** — particularly where a sanctions breach is the result of a significant failure in financial crime systems and controls. **(FCG 7.2.3C; SUP 15.3.11R(1))**

Good practice includes: after a breach, as well as meeting the OFSI obligation, reporting the breach to the FCA where it reflects a significant systems and controls failure.

| Reporting obligation | To whom | When |
|---------------------|---------|------|
| Mandatory breach report | OFSI | Know or have reasonable cause to suspect a breach |
| Principle 11 notification | FCA | If breach reflects significant systems and controls failure (SUP 15.3.11R(1)) |
| SAR consideration | NCA | If the circumstances also give rise to money laundering suspicion |

### Breach Reporting Timeliness

The FCA expects **timely and accurate** reporting. FCTR 8 identified the following failure patterns across the 90+ firm assessment programme: **(FCTR 8)**

| Failure pattern | FCA position |
|----------------|-------------|
| Firms taking weeks or months from identifying a breach to reporting it to the FCA | Unacceptable — timeliness is a compliance requirement, not a discretionary choice |
| Firms completing a full internal investigation before notifying the FCA | Wrong — investigation completion is **not** a precondition for notification |
| Firms that failed to report to the FCA at all | A distinct named failure |

**The FCA's rationale:** "Firms delaying breach reporting, or not reporting at all, undermines our ability to understand systems and controls issues as they occur and to work with firms to establish that those issues are being correctly remedied."

The moment a firm has reasonable cause to suspect a breach, both the OFSI obligation and the consideration of FCA notification under Principle 11 / SUP 15.3 are triggered. The firm should not wait for the outcome of its internal investigation before notifying.

### Root Cause Analysis

Firms should undertake root cause analysis of potential sanctions breaches and use findings to update sanctions controls. This is good practice and demonstrates the governance engagement the FCA expects. **(FCG 7.2.3C)**

---

## Matches and False Positives

Name matches against the Consolidated List are frequently **false positives** — a customer shares a similar or identical name with a designated person but is not the same individual or entity. Firms must have documented procedures for: **(FCG 7.2.4)**

- **Determining whether a match is real** — using a range of identifier information: name, date of birth, address, nationality, account number, and other available customer data
- **Escalation procedures** — if a real match is confirmed: alert senior management, notify OFSI, consider a SAR to the NCA, consider FCA notification

**Audit trail requirement:** Decisions where potential target matches are judged to be false positives must have a documented audit trail. No audit trail is a named poor practice. **(FCG 7.2.4)**

**Consequences of failing to freeze on a confirmed match:** If funds belonging to a designated person are dealt with or made available to them following a confirmed match without an OFSI licence, this could be a criminal offence. **(FCG 7.2.4)**

| Good practice | Poor practice |
|---------------|--------------|
| Sufficient resources available to identify false positives | Failing to report a confirmed breach to OFSI (potential criminal offence) |
| After breach: meets OFSI obligation and assesses FCA notification | Failing to freeze an account when a match with the Consolidated List is confirmed |
| Root cause analysis following potential breaches | No audit trail of false positive decisions |
| — | Resource constraints preventing adequate analysis of matches |

---

## Relationship to the SAR Regime

A sanctions breach may also give rise to a SAR obligation if the circumstances involve suspected money laundering or terrorist financing. The two regimes are parallel:

- **Sanctions breach** → Mandatory OFSI notification; consider FCA notification
- **Suspected money laundering** arising from the same facts → SAR to NCA (DAML consent if pre-transaction)

The clear procedure for sanctions breaches should explicitly consider whether a SAR is also required. **(FCG 7.2.3C; FCG 7.2.4)**

---

## Key Points for Agents

- On identifying a designated person, **freeze assets immediately** — the obligation is absolute, with no de minimis and no provisional-proceed mechanism. The only exception is a statutory exception or an OFSI licence obtained in advance.
- Failing to freeze, or failing to report a confirmed breach to OFSI, is a potential criminal offence.
- Breach reporting is a dual obligation: **OFSI** (mandatory on reasonable cause to suspect) **and FCA** (required where the breach reflects a significant systems and controls failure under SUP 15.3.11R(1)).
- **Investigation completion is not a precondition for FCA notification.** Firms that fully investigate before notifying are getting this wrong. The obligation is triggered at the point of reasonable suspicion. **(FCTR 8)**
- Weeks- or months-long delays between identifying a breach and reporting to the FCA are a named failure. Failure to report at all is a separate named failure. **(FCTR 8)**
- False positive decisions — judging a name match is not a real match — must have a documented audit trail.
- Asset freezes under sanctions law are legally distinct from the DAML consent regime under AML law. Do not conflate them.
- Root cause analysis of breaches is good practice and expected governance behaviour.

## Related Articles

- [[uk-financial-sanctions-framework]]
- [[sanctions-screening]]
- [[sar-consent-tipping-off]]
- [[fcg7-sanctions-asset-freezes-proliferation-financing]]
- [[fctr8-sanctions-systems-controls-russia]]
