---
title: "FCG 7 — Sanctions, Asset Freezes and Proliferation Financing"
jurisdiction: UK
regulator: FCA
regulation: FCA Financial Crime Guide (FCG), Chapter 7 (April 2026 version)
status: current
effective_date: 2026-04-01
last_updated: 2026-04-13
sources:
  - "FCG 7.1.1–7.1.6 — Introduction and scope"
  - "FCG 7.2.1–7.2.6 — Themes: governance, MI, risk assessment, CDD, screening, evasion detection, asset freezing, breach reporting, matches, proliferation"
  - "FCG 7.3.1 — Further guidance (FCTR 8, FCTR 15)"
  - "FCG 7.4.1–7.4.2 — Sources of further information"
tags: [financial-crime, sanctions, asset-freeze, proliferation-financing, OFSI, screening, UK, FCA, FCG]
related:
  - concepts/uk-financial-sanctions-framework.md
  - concepts/sanctions-screening.md
  - concepts/asset-freezes-and-ofsi-licences.md
  - concepts/proliferation-financing.md
  - concepts/aml-ctf-framework.md
  - concepts/customer-due-diligence.md
  - summaries/fcg3-money-laundering-terrorist-financing.md
  - summaries/fctr8-sanctions-systems-controls-russia.md
---

# FCG 7 — Sanctions, Asset Freezes and Proliferation Financing

## What This Document Is

FCG 7 is a chapter of the FCA's Financial Crime Guide (FCG), a sourcebook of FCA guidance on countering financial crime. The April 2026 version applies. It covers three related but legally distinct obligations:

1. **UK financial sanctions** — restrictions on dealing with or providing services to designated persons
2. **Asset freezes** — the obligation to freeze funds and economic resources of designated persons
3. **Proliferation financing (PF)** — financing of weapons of mass destruction programmes

FCG guidance is not made rules, but the FCA considers compliance with it when assessing whether a firm has adequate systems and controls. **(FCG 7.1.1)**

---

## FCG 7.1 — Introduction and Scope

### Who Must Comply

Financial sanctions apply to **all FCA-supervised firms** — there is no partial-scope carve-out comparable to AML. Specifically, FCG 7 applies to: **(FCG 7.1.1)**

- All firms subject to SYSC 3.2.6R or SYSC 6.1.1R
- **E-money institutions** and **payment institutions** (which are out of scope for some AML obligations under FCG 3)
- The **cryptoasset sector** within FCA supervisory scope

Proliferation financing guidance (FCG 7.2.5G) applies to all firms subject to FCA supervision. **(FCG 7.1.2)**

### What Financial Sanctions Are

Financial sanctions are restrictions put in place by the UK government or multilateral organisations to limit financial services or access to financial markets, funds and economic resources, in order to achieve foreign policy or national security objectives. **(FCG 7.1.4)**

**Territorial and personal scope:** All individuals and entities within the UK, plus all UK nationals and UK-incorporated entities (including branches), wherever they operate in the world, must comply with UK financial sanctions in force. **(FCG 7.1.5)**

### Principle 11 Notification

Under Principle 11 (PRIN 2.1.1R), firms must notify the FCA if they, their group companies, approved persons, senior management functions, appointed representatives, or agents are targets of UK sanctions or those of any other country. For e-money institutions, payment services firms, cryptoasset businesses and Annex I financial institutions, this is treated as a **material change of circumstance**. **(FCG 7.1.5)**

### OFSI — The Enforcement Body

The Office of Financial Sanctions Implementation (OFSI) within HM Treasury is responsible for ensuring UK financial sanctions are understood, implemented and enforced. OFSI:
- Maintains the **Consolidated List** of financial sanctions targets designated by the UN and UK
- Publishes the **UK Sanctions List** (designations under SAMLA regulations)
- Issues licences permitting specific activities that would otherwise breach sanctions
- Receives mandatory breach reports from firms

If a firm discovers a breach, it must notify OFSI. **(FCG 7.1.5A)**

### Trade Controls and Proliferation

Separately from financial sanctions, the government imposes controls on trade in goods and services for use in nuclear, radiological, chemical or biological weapons programmes. Aiding proliferators is a criminal offence under the **Anti-Terrorism, Crime and Security Act 2001**. HM Treasury can use powers under the **Counter-Terrorism Act 2008** to direct firms to cease business with customers involved in proliferation activity. **(FCG 7.1.6)**

---

## FCG 7.2 — Themes

### Governance (FCG 7.2.1)

Senior management must take clear responsibility for managing sanctions risks, treating them in the same manner as other business risks. Responsibility for sanctions compliance must be clearly allocated to a named individual of sufficient authority. Governance failures include:

| Good practice | Poor practice |
|---------------|--------------|
| Named individual of sufficient authority responsible for UK sanctions compliance | Firm believes payments to sanctioned individuals are permitted when sums are small (without an OFSI licence, this could be a criminal offence) |
| Clear escalation of actual target matches and UK sanctions breaches; timely notification | Multinational lacks communication between global and regional sanctions teams |
| Clear stage-by-stage process for when customers are screened (including from agents/group entities) | No internal audit resource allocated to monitoring sanctions compliance |
| Appropriate oversight of external sanctions compliance resource | Some business units in large organisations believe they are exempt |

### Management Information (FCG 7.2.1A)

Senior management must be sufficiently aware of sanctions obligations to discharge their functions effectively. MI must give a clear understanding of the firm's sanctions compliance risk — not just generic financial crime MI.

### Risk Assessment (FCG 7.2.2)

Firms must assess which areas of business are most likely to: (i) provide services to Consolidated List entities; (ii) be owned/controlled by Consolidated List entities; (iii) engage in prohibited transactions; or (iv) rely on prohibited intermediaries. **(FCG 7.2.2)**

Risk assessment must be kept current — particularly after entering new jurisdictions, introducing new products, or following new sanctions risk events. Firms must have a clear risk appetite for sanctions exposure and established procedures to escalate new sanctions risk events (new regimes, sanctioned activities, evasion typologies).

| Good practice | Poor practice |
|---------------|--------------|
| International firm understands requirements of relevant local sanctions regimes | No process for updating the risk assessment |
| Small firm has considered where it is most vulnerable, even informally | Firm assumes financial sanctions only apply to money transfers |
| Firm conducts contingency planning; updates customer risk assessments for changes in sanctions measures | — |
| Firm engages with public-private and private-private partnerships on typologies | — |

### Customer Due Diligence Checks (FCG 7.2.2A)

Effective CDD and KYC are cornerstones of sanctions compliance, not just AML compliance. Sanctions risk must be proactively included in the firm's CDD process. CDD must identify all parties relevant for screening. Failure modes include: low-quality CDD and KYC with review backlogs (raising the risk of missing sanctioned individuals); inability to identify connected parties and corporate structures subject to sanctions; CDD that does not articulate full ownership structures. **(FCG 7.2.2A)**

See also FCG 3.2.4G for additional CDD good/poor practice. **(FCG 7.2.2B)**

### Screening Customers, Counterparties and Payments (FCG 7.2.3)

Screening is not a legal requirement, but it is the primary mechanism through which firms demonstrate sanctions compliance. Firms must screen: **(FCG 7.2.3)**

- New customers, counterparties and payments against the Consolidated List at onboarding
- Existing customers when new names are added to the Consolidated List
- Customers' directors and beneficial owners on a risk-sensitive basis

**Calibration of automated tools** is a specific FCA concern: firms must understand how their screening tool is calibrated, demonstrate it is appropriate for UK sanctions screening, and regularly test and tune it. Fuzzy matching capability (handling name variations, character manipulation, digit rotation) is expected for automated systems.

**Outsourcing:** Firms cannot simply rely on a third party having screened a customer — they must take steps to satisfy themselves this is appropriate and maintain oversight.

**Blockchain analytics (cryptoassets):** Compliance teams must understand how to use blockchain analytics solutions to identify transactions linked to higher-risk wallet addresses, including those on the Consolidated List.

The **RBS case study (August 2010, FSA fine: £5.6m)** illustrates the consequences of deficient screening: RBS screened domestic sterling payments but not cross-border payments in sterling or euros; did not screen directors and beneficial owners; did not maintain fuzzy matching software effectiveness. This was the first FSA penalty under the Money Laundering Regulations 2007. **(FCG 7.2.6)**

### Evasion Detection and Investigation (FCG 7.2.3A)

Simple name-matching against the Consolidated List may not detect sanctions evasion involving third parties. Firms must consider alternative detection techniques. The **National Economic Crime Centre (NECC)** issues alerts on potential red flags for sanctions evasion. Good practice includes using data analytics to identify customers who may be close associates or dependents of, or have transactional links with, designated persons. **(FCG 7.2.3A)**

### Asset Freezing and Licences (FCG 7.2.3B)

When a financial sanction takes the form of an asset freeze, the funds and economic resources of a designated person must be frozen **immediately** — unless a statutory exception applies or an OFSI licence has been obtained. Firms must have clear policies on when funds are frozen or released, and on how to assess, utilise, and monitor OFSI licences and statutory exceptions. **(FCG 7.2.3B)**

### Reporting and Assessing Potential Sanctions Breaches (FCG 7.2.3C)

Firms are required to report to OFSI where they know or have reasonable cause to suspect a breach, including where: (i) a person they deal with is a designated person; (ii) they hold frozen assets; or (iii) they discover or suspect any breach. Firms must **also consider** whether to notify the FCA under Principle 11 / SUP 15.3 — particularly where the breach reflects a significant failure in systems and controls. **(FCG 7.2.3C)**

### Matches and Escalation (FCG 7.2.4)

Name matches against the Consolidated List will frequently be false positives. Firms must have documented procedures for: (i) determining whether a match is real (using name, date of birth, address, and other identifiers); (ii) freezing assets where a real match is confirmed; and (iii) escalating and notifying. Failing to report a confirmed breach to OFSI, or failing to freeze an account following a confirmed match, could be a **criminal offence**. No audit trail of false positive decisions is a named poor practice. **(FCG 7.2.4)**

### Weapons Proliferation (FCG 7.2.5)

Firms must address proliferation risks in their systems, controls, policies and procedures. Under **MLR Regulation 18A**, firms are required to carry out a proliferation financing risk assessment — either standalone or as part of the practice-wide risk assessment.

For firms with trade finance exposure, this includes: enhanced due diligence on counterparties and goods exported to high-risk countries; considering whether goods may be subject to export restrictions or end-users may be of concern; seeking government assurances where doubt exists. Firms must also consider how to respond if HM Treasury acts under the Counter-Terrorism Act 2008 against a customer. **(FCG 7.2.5)**

---

## FCG 7.3 — Further Guidance

FCTR (Financial Crime Thematic Reviews) contains additional material: **(FCG 7.3.1)**

- **FCTR 8** — thematic review of firms' approach to UK financial sanctions: governance, risk assessment, policies/procedures, training, screening at take-on, ongoing screening, treatment of target matches. **Ingested** — see [[fctr8-sanctions-systems-controls-russia]]. Key additions: FCA Sanctions Screening Tool (SST); UK vs. OFAC divergence failure pattern; breach reporting timeliness failures; horizon scanning as a positive obligation; specific MI content requirements.
- **FCTR 15** — thematic review of banks' management of financial crime risk in trade finance: sanctions procedures, dual-use goods. Not yet ingested.

---

## FCG 7.4 — Sources of Further Information

Key external sources referenced: **(FCG 7.4.1–7.4.2)**

- **OFSI**: Consolidated List, UK Sanctions List, FAQs, breach reporting
- **JMLSG Part III**: Chapter on proliferation financing — the FCA's designated chief operational source for PF guidance
- **FATF**: Typologies Report on Proliferation Financing; PF risk assessment and mitigation guidance
- **NECC**: Sanctions evasion red flag alerts
- **Export Control Organisation**: Lists of goods requiring export licences (military items, dual-use items)
- **OTSI (Office of Trade Sanctions Implementation)**: Trade sanctions guidance

---

## Key Points for Agents

- UK financial sanctions apply to **all FCA-supervised firms** — including e-money institutions, payment institutions, and cryptoasset businesses. There is no partial-scope carve-out as there is for some AML obligations.
- OFSI maintains the **Consolidated List** (UN + UK designations). Firms must screen customers, counterparties, payments, directors and beneficial owners against it.
- Screening is not a legal requirement per se, but is the practical compliance mechanism. Automated screening tools must be actively calibrated and validated — over-reliance on a third-party tool without oversight is a named failure.
- Asset freeze upon identifying a designated person is **immediate** — no OFSI licence, no dealing with the funds. Failing to freeze is a potential criminal offence.
- Breach reporting is a dual obligation: to **OFSI** (mandatory) and to the **FCA** under Principle 11 / SUP 15.3 (required where the breach reflects a significant systems and controls failure).
- Proliferation financing risk assessment is a **standalone MLR Reg 18A obligation** — not a subset of AML risk assessment, though it can be integrated into the same document.

## Related Articles

- [[uk-financial-sanctions-framework]]
- [[sanctions-screening]]
- [[asset-freezes-and-ofsi-licences]]
- [[proliferation-financing]]
- [[aml-ctf-framework]]
- [[customer-due-diligence]]
- [[fcg3-money-laundering-terrorist-financing]]
