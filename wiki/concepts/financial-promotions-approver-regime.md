---
title: "Financial Promotions Approver Regime (s.21 FSMA / COBS 4.10)"
jurisdiction: UK
regulator: FCA
regulation: FSMA 2000 s.21; Conduct of Business Sourcebook (COBS 4.10)
direction: b2c
status: current
effective_date: 2024-01-07
last_updated: 2026-05-13
sources:
  - "FCA COBS 4.10.1B (FSMA s.55NA gateway — permitted approver requirement)"
  - "FCA COBS 4.10.2R (pre-approval confirmation, ongoing monitoring, quarterly attestation)"
  - "FCA COBS 4.10.3(8) (registered persons cannot approve)"
  - "FCA COBS 4.10.7G (criminal offence for unauthorised person — s.25 FSMA)"
  - "FCA COBS 4.10.9AR (competence and expertise requirement)"
  - "FCA COBS 4.2.1R (FCNM — master standard)"
  - "FCA COBS 4.2.6R (s.138D reasonable steps defence)"
  - "FCA COBS 4.11.1R (record keeping)"
  - "FSMA 2000 s.21 (financial promotion restriction)"
  - "FSMA 2000 s.25 (criminal offence for breach of s.21)"
  - "FSMA 2000 s.55NA (gateway — permitted approver requirement)"
  - "FSMA 2000 s.138D (civil liability for regulatory breach)"
  - "PS23/6 §1.13 (MLR-registered businesses — own promotions only, Article 73ZA FPO)"
  - "PS23/6 §1.15 (4 routes to legally promoting cryptoassets)"
  - "PS23/6 §1.7 (criminal offence — unlimited fine and/or 2 years)"
tags: [financial-promotions, approver-regime, s21, COBS, FCA-gateway, UK, FCA]
related:
  - summaries/cobs4-financial-promotions.md
  - concepts/cryptoasset-financial-promotions-framework.md
  - summaries/ps23-6-cryptoasset-financial-promotions.md
  - concepts/sysc10-conflicts-of-interest.md
  - concepts/smcr-senior-managers-regime.md
---

# Financial Promotions Approver Regime (s.21 FSMA / COBS 4.10)

## Legal Basis

Three statutory provisions operate in sequence:

1. **FSMA 2000 s.21 (the base restriction)** — an unauthorised person may not communicate a financial promotion unless its content has been **approved by an FCA-authorised person**. This is the foundational restriction.

2. **FSMA 2000 s.55NA (the FCA gateway, in force 7 January 2024)** — an authorised firm may not approve a financial promotion for an unauthorised third party unless it holds **specific FCA gateway permission** to perform that function **(COBS 4.10.1B)**. This is a second legal layer on top of s.21: a firm that approves a promotion satisfies s.21 but simultaneously breaches s.55NA if it has not obtained gateway permission.

3. **FSMA 2000 s.25 (the criminal offence)** — communicating a financial promotion in breach of s.21 is a **criminal offence**, punishable by an unlimited fine and/or up to 2 years' imprisonment **(COBS 4.10.7; PS23/6 §1.7)**. An authorised firm that approves third-party promotions without gateway permission is itself in breach of s.55NA. The unauthorised person communicating that promotion simultaneously commits a criminal offence under s.25 — whether approval was never obtained, the approver lacked gateway permission, or approval was subsequently withdrawn.

COBS 4.10 sets out the FCA's conduct obligations for authorised firms acting as approvers. These are separate from the s.21 legal restriction itself: a firm can satisfy s.21 but still breach COBS 4.10. A non-compliant promotion that causes loss to investors also creates civil liability for the approver under FSMA s.138D.

---

## The FCA Gateway (from January 2024)

From **7 January 2024**, **FSMA 2000 s.55NA** prevents any firm from approving a financial promotion for an unauthorised person unless it is a **permitted approver** — i.e., it has obtained specific FCA gateway permission to perform the approver function **(COBS 4.10.1B)**. This is a second legal layer on top of the underlying s.21 restriction: a firm can satisfy s.21 by approving a promotion, but still be in breach of the gateway requirement if it approves without the s.55NA permission.

**Gateway scope:** The gateway applies only where a firm approves a promotion for an *unauthorised* third party. A firm approving its own promotions does not need gateway permission. Appointed representatives communicating promotions within the scope of their principal's business are also outside the gateway **(COBS 4.10.3)**.

**Cryptoasset-specific restriction:** For qualifying cryptoasset promotions, the pool of eligible approvers is deliberately narrow. A firm must have both gateway permission and specific FCA permission to approve cryptoasset promotions. MLR-registered cryptoasset businesses (registered under the Money Laundering Regulations 2017) may communicate their *own* cryptoasset promotions to UK consumers under the Article 73ZA FPO exemption — but they are **not** authorised persons and **cannot** approve financial promotions for others **(COBS 4.10.3(8); PS23/6 §1.13; PS23/6 §1.15)**. There are therefore 4 routes to legally promoting cryptoassets: (i) communicated by an authorised person; (ii) approved by a gateway-permitted authorised person; (iii) communicated by an MLR-registered cryptoasset business under Article 73ZA FPO (own promotions only); (iv) otherwise under an FPO exemption.

For **qualifying cryptoasset** promotions, additional rules apply under PS23/6 — the FCA must receive a **7-day prior notification** for each approval, and the approver must submit **quarterly attestations** to the FCA. See [[ps23-6-cryptoasset-financial-promotions]] for the full crypto-specific framework.

---

## The Three Obligations under COBS 4.10

### 1. Pre-Approval Confirmation (COBS 4.10.2R)

Before approving any financial promotion, the firm must confirm that the promotion **complies with COBS 4 in full** as at the date of approval. This is not a sign-off on commercial content — it is a legal compliance check covering:
- FCNM (COBS 4.2.1R)
- Identifiability (COBS 4.3.1R)
- Any applicable retail client comms requirements (COBS 4.5.2R or COBS 4.5A as appropriate)
- Product-specific restrictions (e.g., warrants/derivatives — COBS 4.7.6R; cryptoassets — PS23/6)
- Past/simulated/future performance rules where relevant (COBS 4.5A.10R–4.5A.14R)

**Approval without a genuine COBS 4 compliance check is a breach** of COBS 4.10.2R, regardless of whether the promotion is materially misleading.

### 2. Ongoing Monitoring and Withdrawal (COBS 4.10.2R)

The approval obligation does not end at the point of sign-off. The firm must have **ongoing monitoring arrangements** to:
- Detect if the promotion ceases to comply with COBS 4 after approval (e.g., because underlying product terms change or a regulatory rule changes)
- **Withdraw approval promptly** once it becomes aware (or ought to become aware) that a promotion is no longer compliant

Failure to withdraw approval from a non-compliant promotion that continues to be communicated is a continuing breach. There is no statutory minimum monitoring frequency — it must be "appropriate" to the nature and risk of the promotion.

**Consequence of withdrawal for the unauthorised person.** Once the approver withdraws approval and notifies the unauthorised person, the unauthorised person must immediately cease communicating the promotion. Continuing to communicate a promotion that no longer has a valid approval is a breach of FSMA s.21 — the s.25 criminal offence is triggered regardless of whether the unauthorised person was aware of the compliance failure that led to withdrawal **(COBS 4.10.2(2); FSMA 2000 s.21; FSMA 2000 s.25)**.

### 3. Quarterly Attestation from the Unauthorised Person (COBS 4.10.2R)

For each approved promotion that an unauthorised person is communicating, the approver must obtain a **written attestation from the unauthorised person, no less than quarterly**, confirming that:
- The promotion has **not been materially changed** since approval
- All **conditions imposed by the approver** continue to be met

The attestation obligation runs for as long as the unauthorised person continues to communicate the promotion. If an attestation is not received or reveals a breach of conditions, the firm must treat the approval as lapsed and take steps to prevent continued communication.

*This quarterly attestation obligation applies to the firm as approver. For cryptoasset promotions, the approver must also provide quarterly attestations to the FCA — a separate and additional obligation under PS23/6.*

---

## Competence and Expertise Requirement (COBS 4.10.9AR)

A firm must not approve a financial promotion unless the **individuals responsible for the approval** have the competence and expertise to assess whether the promotion meets all applicable requirements.

This is a skills-based hard Rule, not a process rule. Key implications:

| Promotion type | What competence is required |
|---|---|
| Standard investment products | Knowledge of COBS 4 and product-specific disclosure rules |
| Qualifying cryptoassets | Specific knowledge of PS23/6 consumer journey rules, RMMI classification, risk warning formats |
| Pension transfer / DB transfer | Understanding of COBS 9.4 requirements and pension-specific risk disclosure standards |
| Structured products / derivatives | Understanding of COBS 4.7.6R and relevant PRIIP/product-specific requirements |
| FIIA (forestry/unregulated CIS) | Understanding of FIIA classification and verbatim risk warning requirements |

A firm that routes all approvals through a single generic compliance sign-off without subject-matter expertise for the specific product class breaches COBS 4.10.9AR. The FCA has stated this is an area of heightened supervisory focus.

---

## s.138D Civil Liability and the Reasonable Steps Defence

**(COBS 4.2.6R / FSMA s.138D)** Where an approved promotion is communicated in breach of FSMA s.21 (e.g., because the approver withdrew approval but the unauthorised person continued to use it), the approver may have a defence to s.138D civil liability if it can demonstrate it took **reasonable steps** to ensure the promotion was communicated only to persons to whom it could lawfully be communicated.

"Reasonable steps" in this context typically means:
- Having contractual restrictions on use
- Obtaining quarterly attestations (the COBS 4.10.2R obligation)
- Withdrawing approval and notifying the FCA where a breach is detected
- Having a documented withdrawal procedure

The reasonable steps defence does not apply where the approver itself breached COBS 4.10 — for example, by failing to conduct a genuine pre-approval compliance check or failing to maintain ongoing monitoring.

---

## Record Keeping (COBS 4.11.1R)

Approvers must retain:
- The approved financial promotion itself
- The pre-approval compliance assessment and sign-off
- Ongoing monitoring records
- All quarterly attestations received from unauthorised persons
- Any withdrawal notifications and supporting correspondence

Retention periods depend on the product type: indefinitely for pension transfer/opt-out promotions; 5 years for life policy/personal pension and MiFID business; 3 years for other retail client promotions.

---

## Interaction with SM&CR

Under SM&CR, the firm's overall responsibility for the compliance function (typically under SMF16 or SMF17) will ordinarily include responsibility for the approvals function. Where the approver role is material to the firm's business, the senior manager responsible should be specifically identified in the responsibilities map (Enhanced firms) or their SoR.

Where a senior manager approved (or failed to withdraw approval from) a non-compliant promotion, the Duty of Responsibility (FSMA s.66A) may be engaged if the senior manager failed to take the steps a person in that position could reasonably have been expected to take.

---

## Common Failure Modes (FCA Supervisory Focus)

| Failure | Rule breached |
|---|---|
| Approving without reading the promotion | COBS 4.10.2R |
| No ongoing monitoring after approval | COBS 4.10.2R |
| Missing or infrequent attestations | COBS 4.10.2R |
| Generic compliance sign-off without subject-matter expertise | COBS 4.10.9AR |
| Failing to withdraw approval after detecting change | COBS 4.10.2R |
| No record of the approval decision or basis | COBS 4.11.1R |

---

## Key Points for Agents

- **FSMA s.55NA gateway (from 7 January 2024)**: a firm cannot approve a financial promotion for an unauthorised person unless it is a permitted approver under s.55NA **(COBS 4.10.1B)**. The gateway applies only to third-party approvals — a firm approving its own promotions does not need gateway permission.
- **Unauthorised communication is a criminal offence under FSMA s.25**: an unlimited fine and/or up to 2 years' imprisonment for the person communicating without a valid approval. This applies if approval was never obtained, has been withdrawn, or if the approver lacked gateway permission **(COBS 4.10.7; PS23/6 §1.7; FSMA s.25)**.
- **MLR-registered cryptoasset businesses can communicate their own promotions** (Article 73ZA FPO) but **cannot approve** financial promotions for others — COBS 4.10.3(8) explicitly bars registered persons from approving. The eligible approver pool for cryptoassets is therefore narrow: gateway-approved authorised firms with specific crypto approver permission only **(COBS 4.10.3(8); PS23/6 §1.13)**.
- **Three distinct ongoing obligations** under COBS 4.10.2R: (1) pre-approval COBS 4 compliance confirmation; (2) ongoing monitoring for continued compliance; (3) quarterly written attestation from the unauthorised person. Withdrawal of approval is mandatory if the promotion ceases to comply — once notified, the unauthorised person must immediately stop communicating.
- **Competence is a hard Rule** (COBS 4.10.9AR): individuals approving must have expertise specific to the product type. Generic sign-off is insufficient for cryptoassets, pension transfers, structured products, or FIIAs.
- **Record keeping tiers** (COBS 4.11.1R): pension transfer/conversion indefinitely; life policy/personal pension 6 years; MiFID business 5 years; other retail 3 years.

## Related Articles

- [[cobs4-financial-promotions]]
- [[cryptoasset-financial-promotions-framework]]
- [[ps23-6-cryptoasset-financial-promotions]]
- [[sysc10-conflicts-of-interest]]
- [[smcr-senior-managers-regime]]
