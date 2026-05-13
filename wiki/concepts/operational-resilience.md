---
title: "Operational Resilience — SYSC 15A"
jurisdiction: UK
regulator: FCA
regulation: "SYSC 15A; FSMA 2000 ss.55J, 55L"
status: current
effective_date: 2022-03-31
last_updated: 2026-05-13
sources:
  - "SYSC 15A.1.1R–15A.1.9R — application and scope"
  - "SYSC 15A.2.1R; 15A.2.2R; 15A.2.4G — important business services"
  - "SYSC 15A.2.5R; 15A.2.6R; 15A.2.7G; 15A.2.9R; 15A.2.11G — impact tolerances"
  - "SYSC 15A.3.1R–15A.3.2R — strategies, processes and systems"
  - "SYSC 15A.4.1R–15A.4.3R — mapping"
  - "SYSC 15A.5.1R–15A.5.9R — scenario testing and lessons learned"
  - "SYSC 15A.6.1R–15A.6.2R — self-assessment documentation"
  - "SYSC 15A.7.1R — governance"
  - "SYSC 15A.8.1R–15A.8.3R — communications"
  - "FCA Payments Portfolio letter, March 2023"
  - "FCA PS21/3 §2.14 (IBS definition)"
  - "FCA PS21/3 §3.3; §3.17 (two dimensions of impact tolerance: time/duration mandatory + level metrics)"
  - "FCA PS21/3 Chapter 4 (31 March 2025 transitional deadline)"
tags: [operational-resilience, SYSC-15A, important-business-services, impact-tolerances, mapping, scenario-testing, self-assessment, governance, communications, enhanced-SMCR, payment-institutions, EMI, UK, FCA]
related:
  - summaries/sysc15a-operational-resilience.md
  - concepts/sysc4-governance-framework.md
  - concepts/sysc9-record-keeping.md
  - concepts/safeguarding-pis-emis.md
  - concepts/wind-down-planning.md
  - concepts/psr-regulatory-reporting.md
  - concepts/uk-gdpr-security.md
  - summaries/sysc4-general-organisational-requirements.md
  - summaries/sysc6-compliance-internal-audit-financial-crime.md
  - summaries/dear-ceo-letter-payments-portfolio-2023.md
  - derived/pi-emi-consumer-duty-and-sanctions-obligations.md
  - concepts/psr-emi-prudential.md
  - concepts/agent-distributor-oversight.md
---

# Operational Resilience — SYSC 15A

## What the Framework Requires

**SYSC 15A** came into force on **31 March 2022**. All transitional implementation deadlines (the last of which was 31 March 2025) have now passed — the obligations are fully live with no remaining transitional provisions. Firms that did not meet the 31 March 2025 implementation deadline are in ongoing breach.

The framework requires firms to build and maintain the ability to prevent, adapt to, respond to, recover from, and learn from operational disruptions. The supervisory model is outcome-focused: firms must be able to keep delivering important services to clients and the financial system even under severe disruption — not merely plan to do so.

---

## Who Is In Scope

SYSC 15A applies to **(SYSC 15A.1.1R)**:
- Enhanced scope SMCR firms, banks, designated investment firms, building societies, and Solvency II firms
- UK RIEs
- Electronic money institutions, payment institutions, and registered account information service providers (RAISPs)
- Consolidated tape providers

**Excluded:** TP firms, TA PI firms, TA RAISP firms, and TA EMI firms **(SYSC 15A.1.3R)**. Firms with their registered or head office outside the UK **(SYSC 15A.1.4R)**.

**PI/EMI/RAISP scope is narrowed (SYSC 15A.1.8R):** For firms in scope solely as EMIs, PIs or RAISPs, SYSC 15A applies only to payment services and e-money activities (and connected activities) — not to other regulated activities the firm may carry on.

---

## The Four-Step Framework

### Step 1 — Identify Important Business Services

A firm must identify its **important business services** **(SYSC 15A.2.1R)**. An important business service is defined as **a service provided by a firm, or by another person on behalf of the firm, to one or more clients of the firm which, if disrupted, could: (1) cause intolerable levels of harm to one or more of the firm's clients; or (2) pose a risk to the soundness, stability or resilience of the UK financial system or the orderly operation of financial markets** **(PS21/3 §2.14)**. Each service must be assessed individually; services cannot be bundled **(SYSC 15A.2.3G)**.

The 13 factors the FCA expects firms to consider include: nature of the client base including vulnerability; substitutability; time criticality; number of clients; sensitivity of data; potential impact on the UK financial system; and whether disruption would breach a legal or regulatory obligation **(SYSC 15A.2.4G)**.

**IBS identification is firm-led.** The FCA does not publish a prescribed list of qualifying services — each firm must identify its own IBS based on its activities, client base, and the 13-factor framework. Two firms with identical products may reach different conclusions depending on their risk profile. Identification is the firm's responsibility, not a regulatory classification **(SYSC 15A.2.1R; SYSC 15A.2.4G)**.

Review is mandatory on any material change to the business, and in any event at least annually **(SYSC 15A.2.2R)**.

### Step 2 — Set Impact Tolerances

For each IBS the firm must set an **impact tolerance** — the maximum disruption level it is willing to tolerate **(SYSC 15A.2.5R)**. An impact tolerance must address **two dimensions**:

1. **Duration (time) — mandatory metric:** the maximum period of time the service can be disrupted before intolerable harm is caused. Time/duration is a mandatory metric for all impact tolerances — firms must specify that an important business service should not be disrupted beyond a certain period of or point in time (e.g., a number of hours/days, or a point in time such as end of day) **(PS21/3 §3.3; §3.17)**.
2. **Level of disruption — used in conjunction:** additional metrics measuring the level of disruption within a time period, such as transaction volumes, customer complaints, or percentage of normal service capacity. A service running at reduced capacity for a defined period can itself cause intolerable harm even without total outage **(PS21/3 §3.17)**.

Tolerances must be expressed in terms of **outcomes for clients and markets**, not just technical recovery metrics (RTO/RPO).

**The hard obligation:** A firm **must ensure it can remain within** its impact tolerance for each IBS in the event of a severe but plausible disruption **(SYSC 15A.2.9R)**. This is a capability requirement — the firm must be able to demonstrate it can actually deliver within tolerance, not merely that it plans to. **The deadline for all firms to be able to remain within their impact tolerances was 31 March 2025** — this transitional deadline has passed; firms that cannot demonstrate this capability are in current breach.

**Peak demand requirement.** When setting a tolerance, a firm must account for fluctuations in demand at different times of day and throughout the year, so the tolerance reflects peak demand for the service. A tolerance calibrated to average load that fails under peak demand is non-compliant **(SYSC 15A.2.8G)**.

**Principle 11 notification:** The FCA expects notification of **any failure** to meet an impact tolerance — there is no materiality threshold **(SYSC 15A.2.11G)**.

Review: same trigger as IBS review — material change or at least annual **(SYSC 15A.2.6R)**.

### Step 3 — Map and Test

**Mapping (SYSC 15A.4.1R):** For each IBS, the firm must identify and document: **people, processes, technology, facilities, and information** — to a depth sufficient to identify and remediate vulnerabilities. Where a third party delivers part of an IBS, mapping must extend to the third party's supporting resources **(SYSC 15A.4.2G)**. Review: on material change or at least annually **(SYSC 15A.4.3R)**.

**Testing (SYSC 15A.5.3R; 15A.5.4R):** The firm must carry out scenario testing covering an **appropriate range of adverse circumstances of varying nature, severity and duration**. Testing is mandatory — not optional — and the firm is ultimately responsible for its quality whether testing is done directly or via a third party **(SYSC 15A.5.5G)**.

**Three mandatory testing triggers (SYSC 15A.5.7R):**
1. Material change to the business, IBS, or impact tolerances
2. Following improvements made in response to a previous test
3. In any event, on a **regular basis**

**Testing continues during remediation.** There is no pause or exemption from the regular-basis trigger while a firm is working through a remediation plan. A firm that has identified a resilience gap must continue scheduled testing even before the gap is closed **(SYSC 15A.5.7R)**.

**Named scenario types (SYSC 15A.5.6G):** data corruption/manipulation; key people or facilities unavailable; critical third-party service unavailable; disruption to other market participants; technology loss or degradation.

### Step 4 — Learn and Improve

After any scenario test or actual operational disruption, the firm must conduct a **lessons learned exercise** **(SYSC 15A.5.8R)** and must make **necessary improvements** to remain within impact tolerances **(SYSC 15A.5.9R)**. Both are hard Rules. Learning must flow into concrete remediation, not just documentation.

**Improvement, not tolerance adjustment.** When testing reveals a gap between the firm's current resilience and its stated impact tolerance, the firm must improve its resilience to reach the tolerance — not lower the tolerance to match its deficient state. The tolerance must stay at the level required to prevent intolerable harm to clients and the market. Reducing a tolerance to make it easier to meet is not a compliant response to a testing failure **(SYSC 15A.5.9R; SYSC 15A.2.9R)**.

---

## Documentation and Governance

### Nine-Item Self-Assessment Record (SYSC 15A.6.1R)

The firm must maintain a written compliance record covering: IBS identification and justification; impact tolerances and justification; mapping approach and how it identified vulnerabilities; testing plan and justification; scenario testing details; lessons learned exercises; identified vulnerabilities with planned remediation and completion timescales; communication strategy; and methodologies used.

**Retention:** Each version must be kept for **at least 6 years** and produced to the FCA on request **(SYSC 15A.6.2R)**.

### Governing Body Approval and Review (SYSC 15A.7.1R)

The **governing body** must **approve and regularly review** the SYSC 15A.6 self-assessment records. This is a hard Rule — the obligation is active approval and review, not passive receipt.

The 15A.6 record includes scenario testing details (15A.6.1R(5)) and lessons learned exercises (15A.6.1R(6)), so the governing body's review function extends to scenario testing results — not just governance framework documents. A governing body that approves documentation without reviewing testing outcomes and identified vulnerabilities does not satisfy this obligation **(SYSC 15A.7.1R; SYSC 15A.6.1R)**.

---

## Communications (SYSC 15A.8)

The firm must maintain an **internal and external communication strategy** to reduce harm from disruptions **(SYSC 15A.8.1R)** and must provide **clear, timely and relevant communications** to stakeholders when a disruption occurs **(SYSC 15A.8.3R)**. The communication strategy must be pre-existing and kept current as part of the self-assessment record **(SYSC 15A.6.1R(8))**.

---

## Relationship to Other Regimes

**SYSC 4 (baseline governance):** SYSC 15A.3.1R requires sound strategies, processes and systems — this sits above the SYSC 4.1.1R baseline and requires an operational resilience-specific governance layer. The governing body approval obligation in SYSC 15A.7.1R is additional to its SYSC 4.3A management body functions. See [[sysc4-governance-framework]].

**UK GDPR Art. 32:** Art. 32 requires appropriate security including the ability to restore availability in a timely manner — a separate but parallel resilience obligation. SYSC 15A is broader (all IBS, not just data systems) and more prescriptive on testing and documentation. The two regimes impose complementary obligations on the same firm. See [[uk-gdpr-security]].

**PSR/EMR operational and security risk:** For PIs and EMIs, the EBA Guidelines on ICT and security risk management are explicitly cross-referenced at SYSC 15A.2.12G/2.13G. Impact tolerances must be set having regard to those guidelines. The FCA's Approach Document Chapter 18 (operational and security risk for PSPs) is the primary operational source for the EBA Guidelines interface. See [[psr-regulatory-reporting]].

**Wind-down planning:** Operational resilience addresses disruption while remaining a going concern; wind-down planning addresses orderly exit. Both require dependency mapping — scenario and sensitivity analysis data should be shared between the two exercises where possible. See [[wind-down-planning]].

---

## Key Points for Agents

- **Scope: all enhanced SMCR firms, banks, DIFs, building societies, Solvency II firms, UK RIEs, EMIs, PIs, RAISPs, CTPs (SYSC 15A.1.1R).** TP/TA firms excluded. For PIs/EMIs/RAISPs, obligations apply only to payment services and e-money activities (SYSC 15A.1.8R).
- **IBS definition (PS21/3 §2.14; SYSC 15A.2.1R):** a service provided by a firm (or on its behalf) to one or more clients which, if disrupted, could (1) cause intolerable harm to clients, or (2) pose a risk to the soundness, stability or resilience of the UK financial system. IBS identification is firm-led — the FCA does not prescribe which services qualify. Firms use the 13-factor framework; no bundling of services into a single IBS.
- **Impact tolerance has two dimensions (PS21/3 §3.3; §3.17; SYSC 15A.2.5R):** (1) duration/time — mandatory metric specifying the maximum period of disruption before intolerable harm; and (2) level of disruption — additional metrics such as transaction volumes, percentage capacity, or customer complaints used in conjunction with the time metric.
- **Impact tolerance is a hard capability requirement, not just a planning exercise (SYSC 15A.2.9R).** The deadline for all firms to be able to remain within their impact tolerances was **31 March 2025** — firms without this capability are in current breach. Must be calibrated to peak demand, not average load (SYSC 15A.2.8G). Any failure to meet a tolerance triggers Principle 11 notification with no materiality threshold (SYSC 15A.2.11G).
- **When testing reveals a resilience gap, the firm must improve its resilience to meet the tolerance — not lower the tolerance to match its deficient state (SYSC 15A.5.9R; SYSC 15A.2.9R).** Regular-basis testing continues with no pause while remediation is underway (SYSC 15A.5.7R).
- **Mapping must cover five asset categories per IBS: people, processes, technology, facilities, information (SYSC 15A.4.1R).** Must extend to third-party resources where third parties deliver IBS.
- **Scenario testing triggers: material change, post-improvement, and in any event regularly (SYSC 15A.5.7R).** Lessons learned (15A.5.8R) and improvements (15A.5.9R) are both hard Rules — the loop must produce concrete changes.
- **Governing body must approve and regularly review the full SYSC 15A.6 record, which includes scenario testing results and lessons learned — not just governance framework documents (SYSC 15A.7.1R; SYSC 15A.6.1R).** Nine-item record; 6-year retention.
- **All transitional deadlines passed 31 March 2025.** Firms without compliant mapping, testing, and self-assessment records are in current breach.

## Related Articles

- [[sysc15a-operational-resilience]]
- [[sysc4-governance-framework]]
- [[sysc9-record-keeping]]
- [[safeguarding-pis-emis]]
- [[wind-down-planning]]
- [[psr-regulatory-reporting]]
- [[uk-gdpr-security]]
- [[sysc4-general-organisational-requirements]]
- [[sysc6-compliance-internal-audit-financial-crime]]
- [[dear-ceo-letter-payments-portfolio-2023]]
- [[pi-emi-consumer-duty-and-sanctions-obligations]]
- [[psr-emi-prudential]]
- [[agent-distributor-oversight]]
