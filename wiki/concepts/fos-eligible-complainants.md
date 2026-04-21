---
title: "FOS Eligible Complainants — DISP 2.7"
jurisdiction: UK
regulator: FCA / FOS
regulation: DISP 2 (April 2026)
status: current
effective_date: 2001-12-01
last_updated: 2026-04-21
sources:
  - "DISP 2.7.3R — eligible complainant definition"
  - "DISP 2.7.5G — doubt = eligible rule"
  - "DISP 2.7.7AR — PEP identification eligible complainant"
  - "DISP 2.7.7G(2B) — APP fraud eligible complainant"
  - "DISP 2.7.9R — exclusions"
  - "DISP 2.8.2R — referral time limits"
  - "DISP 2.8.3G — 6-month notice requirement"
tags: [DISP, FOS, eligible-complainant, jurisdiction, APP-fraud, PEP, time-limits, UK, FCA, PSRs, EMRs]
related:
  - summaries/disp2-fos-jurisdiction.md
  - summaries/disp1-treating-complainants-fairly.md
  - concepts/complaints-handling-framework.md
  - concepts/psr-unauthorised-transaction-liability.md
  - concepts/customer-due-diligence.md
  - concepts/aml-ctf-framework.md
  - concepts/conc-scope-and-application.md
---

# FOS Eligible Complainants — DISP 2.7

The "eligible complainant" test is the third gate of the four-gate FOS jurisdiction test (see [[disp2-fos-jurisdiction]]). A complainant who does not fall within the DISP 2.7.3R categories cannot have their complaint determined by the FOS regardless of its merits.

---

## DISP 2.7.3R — The Seven Categories

A complainant is an eligible complainant if, at the time of the act or omission that is the subject of the complaint, they were one of: **(DISP 2.7.3R)**

| Category | Definition / Threshold |
|----------|----------------------|
| 1. Consumer | A natural person acting outside their trade, business, craft, or profession |
| 2. Micro-enterprise | An enterprise with fewer than 10 persons and annual turnover or balance sheet ≤ €2m |
| 3. Charity | A charity with annual income < **£6.5m** |
| 4. Trustee | A trustee of a trust with net assets < **£5m** |
| 5. CBTL consumer | A consumer within the meaning of the Mortgage Credit Directive Order |
| 6. Small business | A business that is not a micro-enterprise but had an annual turnover of less than **£6.5m** (or, if part of a group, the group had turnover of less than £6.5m) at the **time of referral to the FOS** |
| 7. Guarantor | A person who has given a guarantee or security in connection with a regulated credit agreement or a P2P agreement |

**Key distinctions commonly missed:**
- The charity threshold is **annual income < £6.5m** — not merely "small." A charity with income of £5m is eligible; one with £7m is not.
- The trustee threshold is **net assets < £5m** — not annual income.
- **Small businesses** (category 6) are assessed at the **time of FOS referral**, not at the time of the act or omission. A business that was large when the complaint arose but has since contracted may become eligible.
- **Guarantors** are eligible regardless of their own size — it is the act of giving the guarantee that confers eligibility, not the nature of the underlying borrower.

---

## DISP 2.7.5G — Doubt Means Eligible

If a respondent is in **doubt about whether a business, charity, or trust** qualifies as an eligible complainant, it must treat the complainant as eligible and refer the question to the FOS for determination. **(DISP 2.7.5G)**

The operational implication: a firm that rejects a complaint solely on eligibility grounds — without referring to the FOS — risks a breach if the FOS would have found the complainant eligible. The safe default is to process the complaint and let the FOS make the eligibility call.

---

## DISP 2.7.9R — Exclusions

The following are **not** eligible complainants: **(DISP 2.7.9R)**

**(1) — Regulated firm exclusion (all jurisdictions):**

A firm, payment service provider, electronic money issuer, CBTL firm, designated credit reference agency, designated finance platform, or VJ participant whose complaint **relates in any way to an activity which:**
- (a) the firm itself has **FCA permission** to carry on; OR
- (ab) the firm, PSP, EMI, CBTL firm, credit reference agency, or finance platform is **entitled to carry on** under the PSRs, EMRs, MCD Order, or SME Regulations; OR
- (b) the VJ participant itself conducts;

and which is subject to CJ or VJ.

> **Practical effect:** A PI complaining about another PI's payment services is not an eligible complainant — because it is itself registered to provide payment services. B2B complaints between regulated entities about their shared regulated activity type fall outside FOS jurisdiction.

**(2) — Professional client / ECP exclusion (Compulsory Jurisdiction only):**

A complainant — other than a trustee of a pension scheme trust — who was a **professional client** or an **eligible counterparty** in relation to the firm and activity in question **at the time of the act or omission** that is the subject of the complaint.

**(DISP 2.7.9A R):** The exclusions in DISP 2.7.9R(1) and (2) do **not** apply to a complainant who is a **consumer** in relation to the activity complained of. A firm that is itself authorised but complains in a consumer capacity (e.g. as a private customer of another firm) retains eligibility.

---

## DISP 2.7.7AR — PEP Identification as Eligible Complainant

A person who has been **identified as a politically exposed person (PEP)**, or as a family member or known close associate of a PEP, **is** an eligible complainant if their complaint: **(DISP 2.7.7AR)**

- Is that the identification itself is incorrect (i.e. they should not have been identified as a PEP); OR
- Relates to an **act or omission made in consequence** of that identification (e.g. account refusal, enhanced CDD intrusion, de-banking).

**Connection to AML/CDD framework:** The January 2024 change to FCA domestic PEP guidance (see [[customer-due-diligence]]) reduced the tier of domestic PEPs in most circumstances. A domestic PEP who believes they have been over-identified — or subjected to disproportionate EDD — can bring an FOS complaint under DISP 2.7.7AR. Firms maintaining domestic PEP EDD that does not reflect the January 2024 guidance are exposed to FOS complaints on this basis.

---

## DISP 2.7.7G(2B) — APP Fraud Eligible Complainant Extension

A person who **transferred funds as a result of alleged authorised push payment (APP) fraud**, where the **respondent was involved in the transfer**, is an eligible complainant — even if the complaint is **not a PSD complaint**. **(DISP 2.7.7G(2B))**

**Why this matters:**
- APP fraud involves the victim being deceived into authorising a payment. The sending PSP may argue there is no breach of a payment services obligation (because the payment was authorised). DISP 2.7.7G(2B) makes clear the victim is nonetheless an eligible complainant regardless of whether a PSD breach exists.
- This extension applies both where the respondent is the **sending PSP** (the victim's own bank or e-money institution) and where the respondent was otherwise **involved in the transfer** (e.g. the receiving PSP).
- Connection to [[psr-unauthorised-transaction-liability]]: the fraud delay mechanism (reg 86(2A)–(2D)) and FOS jurisdiction under DISP 2.7.7G(2B) are the two concurrent consumer protection mechanisms for APP fraud victims. Jurisdiction is a threshold question; liability is the substantive question.

---

## DISP 2.8 — The FOS Time Limits

### The Dual Backstop (DISP 2.8.2R)

The FOS cannot consider a complaint referred: **(DISP 2.8.2R)**

1. **More than 6 months** after the respondent sent the complainant its final response, redress determination, or summary resolution communication; **AND**
2. **More than 6 years** after the event complained of; **OR** (if later) **more than 3 years** from when the complainant became aware (or ought reasonably to have become aware) that they had cause to complain.

Both limits operate independently. A complaint outside either limit is time-barred unless an exception applies.

**Exceptions:** Exceptional circumstances (e.g. incapacity of complainant); Ombudsman Transitional Order; respondent consent. If the respondent consents under DISP 2.8.2R(5), it may not subsequently withdraw consent. **(DISP 2.8.2A R)**

### The 6-Month Clock Requires Explicit Notice (DISP 2.8.3G)

The 6-month referral limit is **only triggered** by a response that is a final response, redress determination, or summary resolution communication **and** which specifically **tells the complainant** that they have six months to refer their complaint to the FOS. **(DISP 2.8.3G)**

> **Operational implication:** A final response letter that does not include the FOS referral notice — and the 6-month deadline — does not start the 6-month clock. The complainant's right to refer to the FOS remains open until the 6-year/3-year absolute limits apply. Every firm's final response template must include this notice. Firms that omit it cannot subsequently argue a complaint is time-barred at 6 months.

This interacts with the DISP 1 timeline: once the firm's handling deadline expires (8 weeks / 15 BD / 35 BD), the FOS gate opens; the 6-month closure of that gate is separately contingent on notice. See [[complaints-handling-framework]] for the full DISP 1 timeline.

---

## Key Points for Agents

- There are **seven** eligible complainant categories — not just consumers. Small businesses (< £6.5m turnover at referral), guarantors, charities (< £6.5m annual income), and trustees (< £5m net assets) are included.
- If a respondent is in doubt about business/charity/trust eligibility, it **must** treat the complainant as eligible. The FOS — not the respondent — determines eligibility in disputed cases.
- Regulated firms (PSPs, EMIs, FCA-authorised firms) are not eligible complainants for complaints about activities they are themselves authorised or registered to carry on. Professional clients and ECPs are not eligible in CJ for the relevant activity — unless they are consumers in relation to it.
- A person wrongly identified as a PEP, or who complains about an act done as a consequence of that identification, IS an eligible complainant under DISP 2.7.7AR. This is directly relevant to de-banking and disproportionate EDD complaints.
- APP fraud victims are eligible complainants even where there is no PSD breach — DISP 2.7.7G(2B) extends eligibility to cover the sending and receiving PSP.
- The 6-month FOS referral window only starts when the firm's response **tells the complainant** about the 6-month deadline. Omitting the FOS referral notice means the 6-month clock does not start.

## Related Articles

- [[disp2-fos-jurisdiction]]
- [[disp1-treating-complainants-fairly]]
- [[complaints-handling-framework]]
- [[psr-unauthorised-transaction-liability]]
- [[customer-due-diligence]]
- [[aml-ctf-framework]]
- [[conc-scope-and-application]]
