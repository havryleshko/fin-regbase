---
title: "Customer Due Diligence — CDD, EDD, SDD, Third-Party Reliance, Ongoing Monitoring, and Transaction Monitoring"
jurisdiction: UK
regulator: FCA / JMLSG
regulation: Money Laundering Regulations 2017; SYSC 6.3
status: current
effective_date: 2017-06-26
last_updated: 2026-04-13
sources:
  - "FCA Financial Crime Guide (FCG), Chapter 3 (April 2026 version) — FCG 3.2.4–3.2.9, 3.2.5A, 3.2.13"
  - "JMLSG Guidance Part I (June 2023, updated August 2025) — §5.4, §5.5, §5.6"
  - "FCA, 'Firms' customer due diligence processes and controls: our findings' (2026)"
tags: [financial-crime, AML, CDD, EDD, SDD, KYC, PEP, beneficial-ownership, transaction-monitoring, travel-rule, reliance, three-lines, UK, FCA, JMLSG]
related:
  - derived/aml-kyc-onboarding-decision-tree.md
  - concepts/aml-ctf-framework.md
  - concepts/simplified-due-diligence.md
  - concepts/sar-consent-tipping-off.md
  - summaries/fcg3-money-laundering-terrorist-financing.md
  - summaries/jmlsg-part-i-guidance.md
  - summaries/dear-ceo-letter-wealth-stockbroking-2023.md
  - concepts/sanctions-screening.md
  - summaries/fcg7-sanctions-asset-freezes-proliferation-financing.md
  - summaries/fctr8-sanctions-systems-controls-russia.md
  - summaries/mlr-2017.md
  - summaries/fca-cdd-findings-multi-firm-2026.md
  - concepts/uk-gdpr-data-protection-principles.md
  - concepts/fos-eligible-complainants.md
  - concepts/uk-gdpr-right-to-erasure.md
  - concepts/uk-gdpr-subject-access.md
  - concepts/uk-gdpr-personal-data-breaches.md
---

# Customer Due Diligence — CDD, EDD, SDD, Third-Party Reliance, Ongoing Monitoring, and Transaction Monitoring

## Standard CDD — What Firms Must Do

Customer due diligence (CDD) requires firms to: **(MLR Regs 27–28; FCG 3.2.4)**

1. **Identify the customer** and verify their identity using documents, data or information from a reliable and independent source.
2. **Identify the beneficial owner** (where applicable) and take risk-based steps to verify their identity.
3. **Understand the purpose and intended nature** of the business relationship — to obtain a complete picture of ML risk and provide a meaningful basis for ongoing monitoring.
4. **Understand the ownership and control structure** of any legal person, trust, company, foundation or similar legal arrangement.

CDD must also be applied when contacting an existing customer as part of any legal duty to review information relevant to their risk assessment, or when required by the International Tax Compliance Regulations 2015. **(FCG 3.2.4)**

### Beneficial Ownership — The 25% Threshold

For corporate customers, firms must identify and verify individuals who: **(MLR Reg 5; FCG 3.2.4)**

- Ultimately control **more than 25% of shares or voting rights**
- Exercise control over the management of the corporate customer
- Control the body corporate through other means

Where the beneficial owner of a body corporate **cannot be identified**: firms must keep written records of all steps taken and all difficulties encountered, and take reasonable measures to verify the identity of the senior person responsible for managing the body corporate. **(FCG 3.2.4)**

**Company registration requirement:** Before establishing a business relationship with a company subject to Companies Act 2006 Part 21A requirements, a limited liability partnership, or an eligible Scottish partnership, firms must collect proof of company registration. Discrepancies between this and other information obtained must be reported to Companies House. **(FCG 3.2.4)**

### If CDD Cannot Be Completed

Where a firm **cannot apply CDD measures** — including where it cannot be satisfied it knows who the beneficial owner is — it **must not enter into or continue the business relationship**. **(FCG 3.2.4)**

### Good vs Poor CDD Practice

| Good practice | Poor practice |
|---------------|--------------|
| Firms using e-verification or PEP databases understand the capabilities and limitations of those tools | Procedures are not risk-based — same CDD measures applied to all customers regardless of risk level |
| Firm can accommodate customers who lack common forms of ID (e.g. socially excluded, those in care) | No method for tracking whether CDD checks on customers are complete |
| Firm understands and documents ownership and control structures, including reasons for complex or opaque structures | Staff reduce CDD rigour because a customer is referred by senior executives or influential people |
| Firm obtains information about purpose and nature of the business relationship before approval | Language difficulties or customer objections allowed to prevent proper CDD questioning |
| Staff who approve new/ongoing relationships satisfy themselves that adequate CDD has been obtained | No procedures for enhanced due diligence — this breaches the Money Laundering Regulations |

**(FCG 3.2.4)**

### CDD Policy Content Requirements (FCA Multi-Firm Review)

The FCA's 2026 multi-firm CDD review identified specific gaps in firms' written policies. Effective CDD policies must include: **(FCA CDD Findings 2026)**

- **Alternative identification procedures:** Policies must specify what alternative evidence can be obtained when customers lack standard forms of ID. Absence of this guidance is a named gap. This is particularly relevant for socially excluded customers, those in care, or customers from jurisdictions where standard document types are uncommon.
- **Periodic review timing:** Policies must state how often periodic reviews should take place for each risk tier — vague or absent language is a named failure. Policies must also specify what steps staff should take when an event-driven review is triggered (e.g. change in customer risk profile, adverse media, change in beneficial ownership).
- **Senior management approval matrix:** Policies must be clear on when senior management sign-off is required. Approval matrices should be maintained with document version control.

**Note on domestic PEPs — January 2024 change:** On 10 January 2024, changes to the treatment of domestic PEPs came into effect. The FCA's multi-firm review found that firms which had not incorporated this change into their CDD policies were operating to an outdated framework. See the FCA's PEP treatment review (July 2024, not yet ingested) for the substantive content of this change. **(FCA CDD Findings 2026)**

## Electronic Identification

An electronic identification process may be regarded as a reliable source for CDD verification purposes if it is: independent of the person whose identity is being verified; secure from fraud and misuse; and capable of providing appropriate assurance that the person claiming an identity is that person. **(FCG 3.2.4)**

## Source of Wealth and Source of Funds

Two distinct concepts that serve different CDD purposes: **(FCG 3.2.6)**

| Concept | Definition | When required |
|---------|-----------|--------------|
| **Source of wealth** | How the customer or beneficial owner acquired their total wealth | Always for PEPs; and where relevant to risk |
| **Source of funds** | The origin of funds involved in this specific business relationship or transaction — the activity that generated the funds (e.g. salary, sale proceeds) and the means of transfer | Always for PEPs; and for high-risk relationships |

**Common failure:** Firms that do not distinguish between source of funds and source of wealth, conflating the two. They address different ML risks and must be established separately for PEPs and high-risk relationships. **(FCG 3.2.6; FCG 3.2.8)**

Where the ML risk is very low and specific conditions are met, JMLSG guidance allows firms to assume that a payment drawn on a UK/EU-regulated credit institution satisfies standard CDD — "source of funds as evidence." This is distinct from the source of funds requirement in Regs 28(11) and 33/35. **(FCG 3.2.6)**

## Enhanced Due Diligence (EDD) — The Framework

EDD applies in higher-risk situations and must provide greater certainty about the customer's identity and the legitimacy of the business relationship than standard CDD. The extent of EDD must be commensurate to the risk. **(FCG 3.2.7, 3.2.8)**

### Mandatory EDD Triggers

The Money Laundering Regulations mandate EDD (and in some cases senior management approval) in the following situations:

#### 1. Politically Exposed Persons (PEPs)

A PEP is a person entrusted with a prominent public function, other than as a middle-ranking or more junior official. PEPs, their **family members**, and their **known close associates** are all subject to mandatory EDD. **(MLR Reg 35; FCG 3.2.7)**

EDD for PEPs requires:
- **Senior management approval** before initiating or continuing the business relationship (including where an existing customer becomes a PEP after the relationship was established)
- Establishing the **source of wealth and source of funds**
- Conducting enhanced ongoing monitoring

**Good practice:** MLRO and their team have adequate oversight of all PEP relationships; firm seeks to identify PEPs associated with respondent banks. **(FCG 3.2.8)**

**Poor practice:** Senior management not giving approval for PEP relationships — this **breaches the Money Laundering Regulations**. **(FCG 3.2.8)**

#### 2. High-Risk Third Countries

Where either party to a business relationship or relevant transaction is established in a **high-risk third country** (defined by reference to FATF's published lists: High-Risk Jurisdictions subject to a Call for Action, and Jurisdictions under Increased Monitoring), firms must apply EDD including: **(MLR Reg 33; FCG 3.2.7)**

- Obtaining additional information on the customer and beneficial owner
- Establishing intended nature of the business relationship
- Establishing source of funds and source of wealth
- Obtaining reasons for the transaction(s)
- **Senior management approval** for the business relationship
- Conducting enhanced ongoing monitoring

**Poor practice:** Higher-risk countries allocated low-risk scores specifically to avoid EDD obligations. **(FCG 3.2.3)**

#### 3. Correspondent Banking Relationships

Where a correspondent relationship involves execution of payment from a third-country credit or financial institution, the UK institution must apply EDD measures commensurate with risk, including in higher-risk situations: **(MLR Reg 34; FCG 3.2.7)**

- Thoroughly understanding the correspondent's business, reputation, and AML defence quality
- **Senior management approval** before establishing any new correspondent relationship
- Gathering information on the respondent's procedures for sanctions screening, PEP identification and management, account monitoring, and SAR filing

**Good practice:** Correspondent bank draws on discussions with the respondent, overseas regulators, and other relevant bodies to assess AML regime quality. **(FCG 3.2.8)**

**Poor practice:** Correspondent bank relies exclusively on the Wolfsberg Group AML questionnaire; conducts inadequate due diligence on parents and affiliates of respondents. **(FCG 3.2.8)**

#### 4. Complex, Large, or Unusual Transactions

EDD is also required for: **(MLR Reg 33; FCG 3.2.7)**

- Transactions that are **complex, unusually large, show an unusual pattern, or have no apparent economic or legal purpose** — EDD must examine the background and purpose of the transaction and increase the degree of monitoring
- Any situation that by its nature presents a higher ML/TF risk
- **Cryptoasset-specific:** transactions involving privacy-enhancing techniques (mixers/tumblers, privacy coins, self-hosted addresses, ring signatures, atomic swaps, zero-knowledge proofs), or where blockchain analysis indicates exposure to criminal or sanctioned activities

#### 5. Life Insurance Beneficiaries

Where the beneficiary of a life insurance policy is a legal person or legal arrangement presenting high ML risk, firms must take reasonable measures to identify and verify beneficial owners of that beneficiary **before making payment**. **(FCG 3.2.7)**

### EDD Documentation Requirement (FCA Multi-Firm Review)

The FCA's 2026 multi-firm review identified a distinct failure mode beyond the obligation to conduct EDD: **firms that conducted EDD but could not demonstrate how their approach differed from standard CDD**. The FCA's expectation is that EDD files must evidence: **(FCA CDD Findings 2026)**

1. What **additional** information was obtained beyond standard CDD
2. Why the level of EDD was proportionate to the specific risk presented
3. That **senior management approval** was obtained where required
4. That the **purpose and intended nature of the business relationship** was recorded

**Named failure:** Some firms did not gather or record the purpose and intended nature of the business relationship at all — a breach of the standard CDD obligation in MLR Reg 27. This failure was observed in EDD contexts where the enhanced steps were applied, but foundational CDD fields remained incomplete.

### EDD Methods

EDD measures can include (as appropriate to the risk): **(FCG 3.2.8)**

1. Obtaining more information about the customer's or beneficial owner's business
2. More robust verification of beneficial owner identity from a reliable, independent source
3. Understanding the customer's reputation and role in public life
4. Searching a corporate customer's directors or controlling individuals
5. Establishing source of wealth
6. Establishing source of funds

## Ongoing Monitoring

Firms must conduct ongoing monitoring of all business relationships on a risk-sensitive basis. This means: **(MLR Regs 27, 28(11), 33, 34; FCG 3.2.5)**

- Scrutinising transactions for consistency with the firm's knowledge of the customer
- Keeping CDD documents, data and information up to date
- Applying CDD measures where the firm doubts the truth or adequacy of previously obtained information
- Conducting **enhanced ongoing monitoring** in higher-risk relationships

### Enhanced Ongoing Monitoring

Higher-risk relationships must be more closely monitored. This differs from standard monitoring by: **(FCG 3.2.9)**

- More frequent reviews of the relationship
- Lower alert thresholds on automated monitoring systems for PEPs and other high-risk customers
- Exceptions escalated to more senior staff
- Reviews conducted **independently of relationship managers** (a named good practice)
- Decisions on whether to continue high-risk relationships must be consistent with the firm's overall risk appetite — not dominated by reputational or business considerations

**Named failure:** Annual reviews treated as tick-box exercise — copying information from previous reviews without thought. **(FCG 3.2.9)**

**Named failure:** Insufficient challenge to explanations from relationship managers and customers about unusual transactions. **(FCG 3.2.9)**

**Named failure:** Accounts used for purposes inconsistent with expected activity (e.g. personal accounts used for business) receive no enquiry. **(FCG 3.2.9)**

## Transaction Monitoring

### System Requirements

Transaction monitoring systems (automated or manual) must: **(FCG 3.2.5A)**

- Take a **holistic view of customer behaviour** — not merely transaction-by-transaction analysis
- Be applied at multiple levels of aggregation: transaction level, account level, customer level, and linked-entity level (across a group of linked customers)
- Have **calibrated rules and thresholds** tailored to the firm's business, risk profile, and relevant typologies
- Be tested and reviewed regularly for effectiveness and right outcomes
- Be understood by relevant staff — the rationale for rules and thresholds must be documented

**New approaches:** Machine learning and AI tools show potential for more sophisticated monitoring (network analysis, holistic customer behaviour modelling) but introduce specific risks: operators of more free-form ML systems may not understand why the software made its recommendations, creating ethical and audit challenges. Firms exploring new approaches should pilot them with appropriate testing and understand their limitations. **(FCG 3.2.5A)**

### Control Framework Failures — Transaction Monitoring

- Senior management have unrealistic expectations of what automated monitoring can achieve; manual scrutiny is under-resourced
- Threshold-based approaches used in situations where they are not suitable, while relationship manager oversight is neglected
- Systems poorly calibrated — firm cannot articulate the rationale for particular rules and scenarios
- Data not migrated smoothly when feeder systems are upgraded — transactions erroneously omitted
- Firm lacks understanding of what its automated system is detecting and why (due to staff turnover, poor documentation, or weak vendor communication)
- Off-the-shelf systems used without calibration to the firm's individual needs

**(FCG 3.2.5A)**

### HSBC Enforcement Case — Transaction Monitoring

The FCA imposed a **£63,946,800 penalty** on HSBC for transaction monitoring system failures sustained over an extended period. Specific failures: **(FCG 3.2.5B)**

1. Failed to consider whether monitoring scenarios covered relevant ML/TF risks
2. Failed to carry out timely risk assessments for new scenarios
3. Failed to appropriately test and update monitoring parameters — certain thresholds were set so high it was almost impossible for scenarios to flag suspicious activity
4. Failed to check the accuracy and completeness of data fed into monitoring systems — resulting in **millions of transactions worth billions of pounds** that were either monitored incorrectly or not at all

## Wire Transfers and the Travel Rule

### Wire Transfer Obligations (Banks)

Banks must collect and attach **payer and payee information** to wire transfer payment messages. On inbound payments, banks must check that information is complete and chase missing data. **(FCG 3.2.13)**

**Breaches (explicitly named):**
- Sending international payment instructions without meaningful payer and payee information
- Intermediary banks stripping payer or payee information from payment instructions before passing the payment on
- Payee banks not checking incoming payments for complete data
- Using incorrect SWIFT message types for cover payments

**(FCG 3.2.13)**

### The Travel Rule — Cryptoassets

From **1 September 2023**, FCA-registered cryptoasset businesses are subject to equivalent wire transfer obligations for cryptoasset transfers. Payer and payee information must accompany cryptoasset transfers. **(FCG 3.2.13)**

### Wire Transfer Enforcement Cases

**Lloyds TSB:** Agreed to pay **US$350m** to US authorities after offices in the UK and Dubai deliberately removed customer names and addresses from US wire transfers to ensure payments would pass undetected through sanctions filters at US financial institutions. **(FCG 3.2.15)**

**Barclays Bank PLC:** Agreed to pay **US$298m** to US authorities for implementing practices to evade US sanctions — including stripping information from payment messages — over a **decade-long period** from the mid-1990s to September 2006. The bank self-reported the breaches. **(FCG 3.2.15)**

These cases illustrate that wire transfer failures can attract criminal sanctions from **foreign jurisdictions** as well as FCA enforcement action. **(FCG 3.2.15)**

## CDD Compliance Monitoring — Three-Lines Independence

The FCA's 2026 multi-firm review found that firms' compliance monitoring and audit arrangements for CDD varied significantly in depth and independence. **(FCA CDD Findings 2026)**

**Good practice:**
- Firms that conducted regular thematic reviews of their CDD framework, including external party reviews or internal audit, with clear cycles for ongoing assessment.
- Sample-based compliance monitoring with proportionate review cycles.
- **Independent third-line testing** assessing controls across the full customer onboarding and due diligence lifecycle, with findings documented and acted upon.

**Named failure — independence gap:** In some firms there was **no independent second-line assurance**: the same staff responsible for onboarding customers were also responsible for reviewing those customers. The FCA stated explicitly that this arrangement "raises questions about impartiality and effectiveness of testing."

| Line | Role | Failure Mode |
|------|------|-------------|
| First line (onboarding) | Applies CDD controls during onboarding and relationship management | Reduces CDD rigour under commercial pressure |
| Second line (compliance) | Independent assurance of onboarding controls; must be separate from onboarding staff | Same staff performing onboarding and second-line review — named FCA failure |
| Third line (internal audit / external review) | Independent testing of CDD framework; documents and tracks findings | Absent, or findings not documented or acted upon |

## CDD and Sanctions Screening

Effective CDD is foundational to sanctions compliance as well as AML. FCG 7 treats CDD quality as a direct input to the firm's ability to screen comprehensively for sanctions purposes: **(FCG 7.2.2A; FCG 7.2.2B)**

- CDD must identify **all parties relevant for sanctions screening** — including connected parties, corporate ownership structures, directors and beneficial owners
- Low-quality CDD with review backlogs creates a direct risk of failing to identify sanctioned individuals and entities
- Inability to identify and articulate full ownership structures means the firm cannot demonstrate it is screening all relevant parties

**Note on scope:** Sanctions CDD obligations apply more broadly than AML CDD — e-money institutions and payment institutions that are outside FCG 3 AML scope are still required to maintain CDD adequate for sanctions compliance under FCG 7. **(FCG 7.1.1)**

See [[sanctions-screening]] for the full operational framework for sanctions-specific screening obligations.

## Simplified Due Diligence (SDD)

SDD is a third CDD tier that permits adjustment (not elimination) of CDD obligations in genuinely low-risk situations. It is not an exemption. The firm must still apply all CDD measures; SDD permits adjustment of their timing, quantity, quality, or monitoring frequency. Qualifying scenarios include: public administrations; listed companies; regulated firms subject to equivalent MLR requirements; employer-contribution pension schemes; Child Trust Funds and Junior ISAs.

See [[simplified-due-diligence]] for the full framework including qualifying criteria, what adjustments are permitted, and when SDD must be suspended.

## Third-Party Reliance

### What Reliance Permits

MLR Reg 39 expressly permits a firm to rely on another person to apply any or all CDD measures. The **relying firm retains full legal responsibility** for compliance — responsibility cannot be delegated. **(MLR Reg 39; JMLSG §5.6.4)**

Examples: Firm A enters into a business relationship with the underlying customer of Firm B (accepting instructions through Firm B); or Firm A and Firm B both act for the same customer in a transaction (e.g. executing and clearing brokers). In both cases, Firm A may rely on Firm B to carry out CDD. **(JMLSG §5.6.5)**

### Who Can Be Relied On

The firm being relied on must be: **(MLR Reg 39(3); JMLSG §5.6.6)**
- A person carrying on business in the UK subject to the ML Regulations; **or**
- A person in a third country subject to, and supervised for compliance with, CDD and record-keeping requirements equivalent to those in the Fourth Money Laundering Directive; **or**
- An organisation whose members consist of persons in the above categories.

### What the Relying Firm Must Obtain

Where a firm relies on a third party, it must **immediately** obtain from that third party all information needed to identify the customer or beneficial owner. **(MLR Reg 39(2)(a); JMLSG §5.6.7)**

The firm must also enter into arrangements enabling it to obtain, on request, copies of identification and verification data and other documentation on customer or beneficial owner identity. The third party must retain those documents for the MLR record-keeping periods (five years post-relationship end). **(MLR Reg 39(2)(b); JMLSG §5.6.8)**

### Limits of Reliance

- Reliance on **SDD-verified identity is not permitted** — standard CDD or above is required. **(JMLSG §5.6.10)**
- **Chain reliance is not permitted** — a firm that was itself relied on to verify identity cannot pass that verification further. **(JMLSG §5.6.11)**
- The firm relying on a confirmation must document the steps taken to confirm that the third party satisfies MLR Reg 39(3). **(JMLSG §5.6.22)**
- A confirmation must not be given on the basis of a generalised assumption that the firm's systems operated correctly — there must be actual awareness that the steps were taken for that specific customer. **(JMLSG §5.6.17)**

### Group Introductions

Where a customer is introduced between entities within the same financial sector group, identity need not be re-verified provided: the introducing part of the group verified identity to UK, EU, or assessed low-risk jurisdiction AML standards; and the introducing entity can be relied on as a third party under MLR Reg 39(3). Where UK firms have day-to-day access to group customer information, a formal confirmation is not required if the identity was already verified to required standards. **(MLR Reg 39(5)–(6); JMLSG §5.6.24–5.6.27)**

### Pro-Forma Confirmations

JMLSG provides pro-forma confirmation templates (Annex 5-I and 5-II) for: UK-regulated firm introductions; equivalently regulated third-country firm introductions; and group introductions. These pro-formas are particularly helpful when dealing with third parties outside the UK to confirm that records will be available on request. Confirmations cannot be used for SDD-verified, source-of-funds-verified, or pre-regulation-exempt identities. **(JMLSG §5.6.28–5.6.30)**

## Key Points for Agents

- CDD must cover: customer identity verification; beneficial owner identification and verification (25% control threshold for corporates); and understanding the purpose and nature of the business relationship. All three are required — meeting two is not sufficient.
- **Beneficial ownership 25% threshold and senior managing official fallback (MLR 2017 reg. 5; MLR 2017 reg. 28):** The threshold identifies all natural persons who own or control **more than 25%** of shares, voting rights, or other ownership interest. The threshold is a floor — control can also exist through other means below 25%. Where **no natural person meets the 25% threshold after exhausting the ownership chain**, the firm must identify the **senior managing official(s)** of the legal person as the beneficial owner. The firm must **document why no natural person met the threshold** — the fallback to senior managing officials is not a first resort and must be explained. **(MLR 2017 reg. 5; reg. 28)**
- **Trusts — beneficial ownership:** For trusts, the firm must identify: the settlor, all trustees, the protector (if any), all beneficiaries or the class of beneficiaries, and any other natural person exercising effective control over the trust. **(MLR 2017 reg. 5)**
- Where CDD cannot be completed — including where the beneficial owner cannot be identified — the relationship **must not proceed**.
- Source of wealth (total wealth acquisition) and source of funds (origin of funds in this relationship) are distinct concepts. Both are required for PEPs and high-risk relationships. Conflating them is a named failure.
- EDD with mandatory senior management approval is required for: PEPs (and family/associates); high-risk third countries (FATF lists); and correspondent banking from third countries. **(MLR 2017 reg. 33)**
- **Shell bank prohibition — hard rule (MLR 2017 reg. 34):** Firms must not enter into or continue a correspondent banking relationship with a **shell bank** — a credit institution incorporated in a jurisdiction where it has no physical presence and is not affiliated with a regulated financial group. Where a firm discovers during EDD that a respondent institution processes transactions for shell banks as a normal part of its own business, the firm's correspondent relationship indirectly facilitates shell bank activity — this is sufficient reason to refuse or terminate the relationship. If the relationship already exists, the firm must **terminate** it — not merely apply enhanced monitoring. **(MLR 2017 reg. 34; MLR 2017 reg. 33)**
- **SAR filing in correspondent banking:** Where the shell bank or correspondent banking discovery gives rise to suspicion of money laundering or terrorist financing, the firm must file a SAR with the NCA UKFIU. The prohibition (reg. 34) and the SAR obligation (POCA 2002 s.330) are distinct — the firm must terminate and separately assess whether a SAR is required.
- **EDD documentation must evidence how the approach differed from standard CDD** — not merely that EDD was conducted. The FCA has observed firms that completed EDD steps but could not demonstrate the differentiation. **(FCA CDD Findings 2026)**
- CDD policies must include **alternative identification procedures** for customers lacking standard documents, **explicit periodic review frequencies**, and **event-driven review triggers**. Absence of these is a named FCA gap. **(FCA CDD Findings 2026)**
- The **January 2024 domestic PEP regime change** must be reflected in CDD policies. Firms that had not incorporated this at time of review were flagged as operating to an outdated framework.
- **Second-line compliance monitoring must be independent of first-line onboarding staff.** Same-staff review is a named FCA failure mode. Third-line testing (internal audit or external review) should document and act on findings. **(FCA CDD Findings 2026)**
- SDD (third tier) may be applied in low-risk situations — it adjusts CDD, it does not exempt from it. See [[simplified-due-diligence]].
- Third-party reliance is permitted under MLR Reg 39 but the relying firm retains full legal responsibility. Reliance on SDD-verified identity is not permissible. Chain reliance is not permitted.
- Ongoing monitoring must be risk-sensitive — enhanced for high-risk relationships, with lower alert thresholds and independent review.
- Transaction monitoring systems must be calibrated to the firm's actual risk profile and typologies, tested for effectiveness, and understood by staff. Off-the-shelf uncalibrated systems are a named failure.
- The Travel Rule applies to cryptoasset transfers from 1 September 2023 — FCA-registered cryptoasset businesses must attach payer/payee information to transfers.
- Wire transfer sanctions stripping can attract enforcement from foreign jurisdictions (US DOJ), not only the FCA.

## Related Articles

- [[aml-kyc-onboarding-decision-tree]]
- [[aml-ctf-framework]]
- [[simplified-due-diligence]]
- [[sar-consent-tipping-off]]
- [[mlr-2017]]
- [[fcg3-money-laundering-terrorist-financing]]
- [[jmlsg-part-i-guidance]]
- [[fos-eligible-complainants]]
- [[dear-ceo-letter-wealth-stockbroking-2023]]
- [[sanctions-screening]]
- [[fcg7-sanctions-asset-freezes-proliferation-financing]]
- [[fctr8-sanctions-systems-controls-russia]]
- [[fca-cdd-findings-multi-firm-2026]]
- [[uk-gdpr-data-protection-principles]]
- [[uk-gdpr-right-to-erasure]]
- [[uk-gdpr-subject-access]]
- [[uk-gdpr-personal-data-breaches]]
