---
title: "Payment Institutions and EMIs — Overlapping Consumer Duty and UK Sanctions Obligations"
jurisdiction: UK
regulator: FCA / OFSI
regulation: Consumer Duty (PS22/9); FCG 7 (April 2026); PSRs 2017; EMRs 2011
status: current
effective_date: 2023-07-31
last_updated: 2026-04-13
sources:
  - "FCA PS22/9 §2.10, §5.1–§5.15, §6.1–§6.11, §8.1–§8.12, §9.1–§9.9"
  - "FCA FG22/5 §2.3, §9.20–§9.28"
  - "FCG 7.1.1–7.1.6, 7.2.1–7.2.5 (April 2026 version)"
  - "FCA Consumer Duty implementation review (February 2024)"
tags: [consumer-duty, sanctions, payment-institutions, EMI, PSR, scope, overlap, derived, UK, FCA, OFSI]
related:
  - concepts/uk-financial-sanctions-framework.md
  - concepts/sanctions-screening.md
  - concepts/asset-freezes-and-ofsi-licences.md
  - concepts/consumer-duty-overview.md
  - concepts/consumer-duty-cross-cutting-rules.md
  - concepts/consumer-duty-consumer-support.md
  - concepts/consumer-duty-consumer-understanding.md
  - concepts/consumer-duty-products-services.md
  - concepts/aml-ctf-framework.md
  - summaries/fcg7-sanctions-asset-freezes-proliferation-financing.md
  - summaries/fcg3-money-laundering-terrorist-financing.md
  - summaries/dear-ceo-letter-payments-portfolio-2023.md
  - concepts/safeguarding-pis-emis.md
  - concepts/wind-down-planning.md
  - concepts/psr-emi-prudential.md
  - concepts/smcr-senior-managers-regime.md
  - concepts/agent-distributor-oversight.md
  - concepts/operational-resilience.md
---

# Payment Institutions and EMIs — Overlapping Consumer Duty and UK Sanctions Obligations

## Purpose of This Page

Payment institutions (PIs) and e-money institutions (EMIs) are subject to both the FCA Consumer Duty and UK financial sanctions, but in ways that differ from most other FCA-supervised firms. This page maps where the two regimes run concurrently, where they pull in the same direction, and where they create genuine operational tension.

---

## Part 1 — Which Regimes Apply, and to What

### Consumer Duty

The Consumer Duty applies to FCA-authorised PIs and EMIs that **determine or materially influence retail customer outcomes**. **(PS22/9 §2.10)**

The retail customer definition for this sector is drawn from the PSRs 2017 and EMRs 2011: **consumers, micro-enterprises, and small charities**. **(FG22/5 §2.3)** This means:

- Consumer-facing payment services (current account equivalents, prepaid cards, mobile wallets, payment initiation, account information services) are fully in scope.
- Purely commercial B2B payment services — where the counterparty is a business outside the micro-enterprise threshold — are **out of scope** for Consumer Duty. The four outcomes and cross-cutting rules do not apply to those transactions.

### UK Financial Sanctions

Financial sanctions apply to **all FCA-supervised firms** including e-money institutions and payment institutions without any partial-scope carve-out. **(FCG 7.1.1)** The sanctions obligation:

- Applies to every transaction the firm processes, every customer it onboards, and every counterparty it deals with — **regardless of whether that customer is a retail customer for Consumer Duty purposes**.
- Is not limited to consumer-facing products. A PI processing commercial payments for a corporate customer outside Consumer Duty scope must still screen those payments and counterparties against the Consolidated List.

### AML/CTF (for reference)

PIs are supervised for AML/CTF by **HMRC**, not the FCA. FCG 3 (AML/CTF) is FCA guidance and does not directly apply to PIs. EMIs are supervised by the FCA for AML under the MLR and FCG 3 does apply to them. **(FCG 3.1.2)**

| Regime | Applies to PIs? | Applies to EMIs? |
|--------|----------------|-----------------|
| Consumer Duty (PS22/9) | Yes — retail customers per PSRs | Yes — retail customers per EMRs |
| UK Financial Sanctions (FCG 7) | **Yes — all transactions and customers** | **Yes — all transactions and customers** |
| AML/CTF (FCG 3) | No — HMRC supervised | Yes — FCA supervised |
| MLR 2017 | Yes — via HMRC | Yes — via FCA |

---

## Part 2 — Where the Obligations Overlap

### 2.1 Customer Onboarding

**Consumer Duty obligation (Products & Services):** Firms must define a target market and distribute only to customers within it. **(PS22/9 §6.1)** The product must be fit for purpose for the customer throughout the relationship.

**Sanctions obligation:** Firms must screen new customers against the Consolidated List at onboarding. CDD must identify all parties relevant for screening including connected parties, corporate ownership structures, directors and beneficial owners. **(FCG 7.2.2A; FCG 7.2.3)**

**Where they align:** Both regimes require the firm to know who the customer is before providing the service. Target market assessment and sanctions screening both depend on the same underlying customer data — full identity, ownership structure, and purpose of the relationship. Weak onboarding that produces gaps in customer identity data simultaneously undermines both obligations.

**Scope note:** Sanctions CDD applies to all customers including those outside the Consumer Duty retail scope. A PI onboarding a small business must apply sanctions screening even if that business is outside the Consumer Duty retail customer definition.

---

### 2.2 Transaction Monitoring and Payment Processing

**Consumer Duty obligation (Cross-cutting rules + Consumer Support):** Firms must not cause foreseeable harm to retail customers. **(PS22/9 §5.9–§5.11)** The February 2024 implementation review frames fraud prevention as a foreseeable harm obligation and post-incident fraud victim support as a consumer support obligation. Firms must not create unreasonable barriers that prevent customers from realising product benefits. **(PS22/9 §9.4; FCA implementation review, February 2024)**

**Sanctions obligation:** Firms must screen payments and counterparties against the Consolidated List in real time or near-real time. Where blockchain analytics solutions are deployed (relevant to crypto-adjacent EMIs), compliance teams must use them to identify transactions linked to higher-risk addresses. Firms must also detect sanctions evasion beyond name-matching — the NECC issues evasion typology alerts for this purpose. **(FCG 7.2.3; FCG 7.2.3A)**

**Where they align:** Real-time payment controls serve both regimes simultaneously. Confirmation of Payee (CoP) name-checking — already noted in FG22/5 as an example of positive friction **(FG22/5 §9.24)** — simultaneously reduces APP fraud risk (Consumer Duty foreseeable harm) and supports sanctions compliance by verifying payee identity before funds are transferred.

**Practical overlap:** A single payment monitoring system must:
- Detect sanctions exposure and flag potential Consolidated List matches **(FCG 7.2.3)**
- Detect fraud patterns that could cause foreseeable harm to retail customers **(PS22/9 §5.9)**
- Do both without creating unreasonable delays that constitute barriers for legitimate customers **(PS22/9 §9.4)**

---

### 2.3 Governance and Senior Management

**Consumer Duty obligation (Governance):** Boards must assess and report annually on whether the firm is delivering good outcomes. A board-level Consumer Duty champion is expected. **(PS22/9 §13.12–§13.22)** These are firm-level and board-level obligations that apply to PIs/EMIs directly. **Important scope note:** SM&CR applies only to FSMA-authorised firms. PIs and EMIs that are not otherwise FSMA-authorised are entirely outside SM&CR scope — the SM&CR Individual Conduct Rule 6 personal accountability mechanism (which makes Consumer Duty delivery a personal obligation on individuals at FSMA-authorised firms) does not apply to PI/EMI staff. Consumer Duty accountability for PIs/EMIs rests at the firm and board level under PS22/9 §13, not at individual employee level through Conduct Rules. See [[smcr-senior-managers-regime]] for the FSMA-only scope of SM&CR.

**Sanctions obligation:** Senior management must take clear responsibility for sanctions risk, treated in the same manner as other business risks. A named individual of sufficient authority must be responsible for sanctions compliance. Evidence of senior management active engagement is required. **(FCG 7.2.1)**

**Where they align:** Both regimes require personal senior management accountability for a specific area of conduct risk. The governance infrastructure — risk appetite, MI reporting, escalation procedures, board-level engagement — must be designed to address both simultaneously. The FCA treats governance failures in either regime as structurally equivalent: the Dear CEO letter to wealth management firms explicitly lists financial crime prevention and Consumer Duty as co-equal supervisory priorities. **(FCA Dear CEO letter, November 2023)**

**For PIs:** This creates a notable governance question. Because PIs are AML-supervised by HMRC rather than the FCA, there is no FCA-mandated MLRO for PIs under FCG 3. However, the sanctions governance obligation under FCG 7 applies directly to PIs as FCA-supervised firms — the named individual responsible for sanctions compliance must exist and be of sufficient authority, regardless of the AML supervisory arrangement.

---

## Part 3 — Where the Obligations Create Tension

### 3.1 Freezing Accounts vs. Supporting Customers

**The tension:** When a firm identifies a potential sanctions match and freezes an account, the immediate freeze obligation is absolute — funds must be frozen without delay. **(FCG 7.2.3B)** But the Consumer Duty requires firms to provide a level of support that enables consumers to realise product benefits, and to respond flexibly to customers whose circumstances change. **(PS22/9 §9.1, §9.7)**

A customer whose account is frozen has by definition lost access to their payment service. They cannot be told the reason if doing so would disclose that an investigation or report has been made (tipping-off constraints apply where the match is also accompanied by a SAR). **(POCA ss.333A; FCG 7.2.3)**

**How to manage it:** The FCA's Consumer Support outcome does not require firms to provide all support in all circumstances — the obligation is to provide support appropriate to the firm's role and that meets the range of customer needs. **(PS22/9 §9.7)** Where an account freeze is legally required, the freeze overrides the support obligation. However, firms should:
- Have documented procedures covering what staff can and cannot say to customers whose accounts are frozen for sanctions reasons
- Ensure that where a match is determined to be a false positive and the freeze is lifted, the customer is restored to service promptly and any harm caused by the delay is assessed **(FCG 7.2.4)**
- Separately assess whether the customer (if a retail customer) has suffered harm requiring a Consumer Duty response once any legal constraints permit communication

### 3.2 Transparency in Communications vs. Tipping-Off

**The tension:** The Consumer Understanding outcome requires firms' communications to support consumers' ability to make informed decisions. **(PS22/9 §8.1)** Where a consumer's payment is delayed, they would reasonably expect an explanation.

Tipping-off law prevents a firm from disclosing to a customer that a SAR has been filed, or that an investigation is underway, if the disclosure is likely to prejudice the investigation. **(POCA s.333A)** This constraint applies equally where a sanctions match coincides with AML suspicion.

**How to manage it:** This is a genuine legal constraint that takes precedence over the Consumer Understanding outcome — the Duty does not override statute. However, firms can and should:
- Inform customers that the payment cannot be processed at this time and that the firm will be in contact as soon as it is able to — without disclosing the reason
- Have documented processes that allow the FOS (which has specialist AML-trained staff and a secure email channel) to be briefed confidentially if a complaint arises **(JMLSG §6.70–6.71)**
- Note in their Consumer Duty monitoring framework that some delays are legally mandated and cannot be resolved through process improvement

### 3.3 Screening Friction vs. "No Unreasonable Barriers"

**The tension:** Robust sanctions screening — particularly where calibrated for fuzzy matching, evasion detection, and rescreening on Consolidated List updates — can introduce friction into payment journeys. The Consumer Support outcome requires that customer journeys do not contain unreasonable barriers. **(PS22/9 §9.4)**

**How to manage it:** This is the clearest case of positive friction in the payment context. Sanctions screening steps, Confirmation of Payee checks, and transaction holds for investigation are all friction points that serve a legitimate, demonstrable purpose — they protect customers from the harm of facilitating transactions with sanctioned persons or of having their accounts frozen following inadequate verification. FG22/5 explicitly identifies Confirmation of Payee as an example of positive friction that is not an unreasonable barrier. **(FG22/5 §9.24)**

The key obligation under Consumer Duty is that the firm can **justify each friction point** with evidence of customer benefit. Sanctions-driven friction satisfies this test. What must be avoided is allowing sanctions-related processes to become disproportionately slow or opaque — delays caused by under-resourced screening teams or alert backlogs that are not legally required constitute a Consumer Support failure. **(FCG 7.2.3; PS22/9 §9.4)**

---

## Part 4 — Scope Asymmetry and Its Practical Implications

The most operationally significant difference between the two regimes for PIs and EMIs is the **scope asymmetry**:

| Scope dimension | Consumer Duty | UK Sanctions |
|----------------|--------------|-------------|
| Which customers? | Retail customers only (consumers, micro-enterprises, small charities) | All customers and counterparties |
| Which transactions? | Transactions with retail customers | All transactions |
| Which products? | Products that materially influence retail customer outcomes | All financial services and products |
| Territorial reach | FCA-authorised activity in UK | All UK nationals/entities worldwide; all activity in UK territory |

**Practical implication:** A PI or EMI must maintain sanctions compliance across its full transaction book, including commercial payments that attract no Consumer Duty obligations. The firm's sanctions screening system must cover the complete scope of its activities. Its Consumer Duty framework covers only the retail customer segment.

This means the firm's compliance architecture must be designed so that:
1. Sanctions screening is applied universally — not only on retail customer journeys
2. Consumer Duty obligations (communications testing, vulnerability support, exit ease) are applied to the retail customer segment
3. The two frameworks do not cannibalise each other's governance — senior management must be accountable for both and must receive MI that covers both

---

## Key Points for Agents

- Consumer Duty applies to PIs/EMIs in respect of **retail customers** only (consumers, micro-enterprises, small charities per PSRs/EMRs); UK sanctions apply to **all customers and all transactions**, with no retail scope limitation.
- PIs are supervised for AML by HMRC, not the FCA — FCG 3 does not directly apply to PIs. But FCG 7 sanctions obligations **do** apply to PIs directly as FCA-supervised firms. A PI therefore has sanctions obligations without the FCG 3 AML governance framework.
- The onboarding, transaction monitoring, and governance obligations of both regimes draw on the same underlying infrastructure (customer data, screening systems, senior management accountability) and should be designed as a unified system, not parallel silos.
- Three genuine tensions arise in payment firms: (i) account freeze vs. consumer support; (ii) tipping-off vs. transparency obligations; (iii) screening friction vs. unreasonable barriers. In each case the legal obligation (freeze, tipping-off prohibition) takes precedence, but the Consumer Duty requires that any resulting harm is assessed and managed as soon as legal constraints permit.
- Confirmation of Payee is the clearest example of an obligation that satisfies both regimes simultaneously: positive friction under Consumer Duty **(FG22/5 §9.24)** and a sanctions/fraud evasion detection control under FCG 7.
- Alert backlogs and under-resourced screening teams are a Consumer Support failure (customers face legally unjustified delays) as well as a sanctions compliance risk. The two regimes reinforce the same operational adequacy standard.

## Related Articles

- [[smcr-senior-managers-regime]]
- [[uk-financial-sanctions-framework]]
- [[sanctions-screening]]
- [[asset-freezes-and-ofsi-licences]]
- [[consumer-duty-overview]]
- [[consumer-duty-cross-cutting-rules]]
- [[consumer-duty-consumer-support]]
- [[consumer-duty-consumer-understanding]]
- [[consumer-duty-products-services]]
- [[aml-ctf-framework]]
- [[fcg7-sanctions-asset-freezes-proliferation-financing]]
- [[fcg3-money-laundering-terrorist-financing]]
- [[dear-ceo-letter-payments-portfolio-2023]]
- [[safeguarding-pis-emis]]
- [[wind-down-planning]]
- [[psr-emi-prudential]]
- [[agent-distributor-oversight]]
- [[operational-resilience]]
