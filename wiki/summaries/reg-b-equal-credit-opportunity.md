---
title: "Regulation B — Equal Credit Opportunity (12 CFR Part 1002)"
jurisdiction: US
regulator: CFPB
regulation: "Equal Credit Opportunity Act (15 USC 1691 et seq.); implemented by 12 CFR Part 1002 (Regulation B)"
direction: b2c
status: current
effective_date: 1974-10-28
last_updated: 2026-05-14
sources:
  - "12 CFR Part 1002 (Regulation B) — up to date as of 12 May 2026 (eCFR enhanced display)"
tags: [CFPB, US, Reg-B, ECOA, fair-lending, adverse-action, discrimination, credit-scoring, special-purpose-credit, SBLDC, section-1071, b2c, b2b]
related:
  - concepts/reg-b-adverse-action-notifications.md
  - concepts/reg-b-small-business-lending-data-collection.md
  - concepts/cfpb-framework-overview.md
  - concepts/cfpb-udaap.md
---

# Regulation B — Equal Credit Opportunity (12 CFR Part 1002)

## Document Overview

12 CFR Part 1002 (Regulation B) implements the Equal Credit Opportunity Act (ECOA, 15 USC 1691 et seq.). It prohibits creditors from discriminating against applicants in any aspect of a credit transaction on the basis of a prohibited characteristic, and requires creditors to notify applicants of action taken, to provide specific reasons for adverse action, and to retain records of credit applications.

Regulation B is administered and enforced by the CFPB for most covered persons. It applies to banks and non-banks alike. A fintech that makes credit decisions — including automated decisions by algorithm — is a creditor subject to Reg B on the same basis as a bank. The Act's effects test means discriminatory algorithmic outcomes can constitute violations without any discriminatory intent.

The regulation is structured in two subparts:

| Subpart | Scope |
|---------|-------|
| A — General | Core ECOA rules: prohibited bases, information requests, evaluation of applications, adverse action notifications, monitoring information, appraisal copies, self-testing privilege, enforcement |
| B — Small Business Lending Data Collection | Section 1071 implementation: 20-field data collection and annual CFPB reporting for covered small business credit applications |

**(12 CFR Part 1002 — Table of Contents)**

---

## Prohibited Bases

The following are "prohibited bases" under ECOA and Reg B **(§1002.2(z))**:

- Race
- Color
- Religion
- National origin
- Sex
- Marital status
- Age (provided the applicant has the capacity to enter into a binding contract)
- The fact that all or part of the applicant's income derives from any public assistance program
- The fact that the applicant has in good faith exercised any right under the Consumer Credit Protection Act

A creditor shall not discriminate against an applicant on a prohibited basis in any aspect of a credit transaction. **(§1002.4(a))**

---

## The Effects Test — Disparate Impact Without Intent

Regulation B adopts the effects test from employment discrimination law (citing *Griggs v. Duke Power Co.*, 401 U.S. 424 (1971), and *Albemarle Paper Co. v. Moody*, 422 U.S. 405 (1975)). **(§1002.6(a))**

A creditor may use any information obtained in connection with a credit transaction **as long as the information is not used to discriminate against an applicant on a prohibited basis.** This means:

- A facially neutral policy that has a disproportionate adverse impact on applicants of a protected class can constitute an ECOA violation, without proof of discriminatory intent.
- Creditors using algorithmic credit scoring, ML models, or automated decision systems must assess the disparate impact of those systems on protected classes.
- The burden is on the creditor to demonstrate business necessity for any policy with disparate impact.

---

## Discouragement Prohibition

A creditor may not make any oral or written statement in advertising or otherwise that would **discourage on a prohibited basis** a reasonable person from making or pursuing an application. **(§1002.4(b))**

This applies to: marketing messaging, pre-screening criteria communicated to prospects, customer service scripts, and any statement about the types of applicants the creditor serves. Discouragement is a standalone violation — actual denial need not occur.

---

## Rules Concerning Requests for Information (§1002.5)

**General rule:** A creditor may request any information in connection with a credit transaction, unless the request is specifically prohibited.

**Prohibited inquiries:**
- Race, color, religion, national origin, or sex — except for monitoring (§1002.13) or a qualifying self-test (§1002.15)
- Childbearing or childrearing plans or capabilities
- Birth control practices
- Whether the applicant has a telephone listing (for consumer credit — can ask whether there is a telephone in the residence)

**Permissible but restricted inquiries:**
- **Sex** — title (Ms./Miss/Mr./Mrs.) only if form discloses the designation is optional and the form otherwise uses sex-neutral terms only
- **Marital status** — for individual unsecured credit: cannot ask unless applicant is in or relies on property in a community property state; for other credit: can ask, but only using the terms *married*, *unmarried*, and *separated* (creditor may explain that "unmarried" includes single, divorced, and widowed)
- **Spouse or former spouse information** — only if: (i) spouse will be a permitted user or contractually liable; (ii) applicant is relying on spouse's income; (iii) applicant resides in a community property state or relies on property there; or (iv) applicant relies on alimony/child support/maintenance from a spouse
- **Alimony, child support, or separate maintenance** — permissible, but creditor must first disclose that the applicant need not reveal such income if the applicant does not wish to have it considered **(§1002.5(d)(2))**
- **Immigration status** — permanent residency and immigration status are permissible inquiries **(§1002.5(e))**

---

## Rules Concerning Evaluation of Applications (§1002.6)

**Age:**
- In an **empirically derived, demonstrably and statistically sound credit scoring system**: age may be used as a predictive variable, provided the age of elderly applicants (62+) is not assigned a negative factor or value. **(§1002.6(b)(2)(i)–(ii))**
- In a **judgmental system**: age may be considered as a pertinent element of creditworthiness. A creditor may also consider the age of an elderly applicant when such use favours the elderly applicant. **(§1002.6(b)(2)(iii)–(iv))**

**Income:**
- A creditor shall not discount or exclude from consideration the income of an applicant or the applicant's spouse on a prohibited basis, or because income derives from part-time employment, annuity, pension, or other retirement benefit. **(§1002.6(b)(5))**
- A creditor may consider the amount and probable continuance of any income.
- Alimony, child support, and maintenance income must be considered to the extent it is likely to be consistently paid. **(§1002.6(b)(5))**

**Credit history:**
- A creditor must consider, on request: (i) credit history of jointly held accounts the applicant and spouse are permitted to use; (ii) credit history of accounts in the spouse's name that the applicant can demonstrate accurately reflects their own creditworthiness; (iii) any information the applicant presents tending to show that credit history in a CRA does not accurately reflect their creditworthiness. **(§1002.6(b)(6))**

**Childbearing/childrearing:**
- A creditor shall not make assumptions or use aggregate statistics relating to the likelihood that any category of persons will bear or rear children or, for that reason, receive diminished or interrupted income. **(§1002.6(b)(3))**

---

## Rules Concerning Extensions of Credit (§1002.7)

**Individual accounts:** A creditor shall not refuse to grant an individual account to a creditworthy applicant on the basis of sex, marital status, or any other prohibited basis. **(§1002.7(a))**

**Name designation:** A creditor shall not refuse to allow an applicant to open or maintain an account in a birth-given surname, the spouse's surname, or a combined surname. **(§1002.7(b))**

**Existing open-end accounts:** In the absence of evidence of the applicant's inability or unwillingness to repay, a creditor shall not, on the basis of age or a change in marital status, require reapplication, change the terms, or terminate the account of a contractually liable applicant. Exception: a creditor may require reapplication if the original credit was based on the spouse's income and information indicates that income may no longer support the existing credit level. **(§1002.7(c))**

**Signature of spouse or other person — the cosigner rule (§1002.7(d)):**
A creditor shall not require the signature of an applicant's spouse or other person (other than a joint applicant) on any credit instrument if the applicant individually qualifies. Exceptions (creditor may require a signature):
1. **Unsecured credit** — applicant relies on jointly owned property and applicable law requires the other party's signature to reach that property.
2. **Unsecured credit in a community property state** — applicable law would make community property available to satisfy the debt.
3. **Secured credit** — applicable law requires the other party's signature to create a valid lien, pass clear title, or waive inchoate rights.
4. **Additional party's personal liability needed** — creditor may request a cosigner, but shall not require it to be the spouse.

**Insurance:** A creditor shall not refuse to extend credit or terminate an account because credit life, health, accident, disability, or other credit-related insurance is not available on the basis of the applicant's age. **(§1002.7(e))**

---

## Special Purpose Credit Programs (§1002.8)

ECOA and Reg B expressly permit creditors to offer special purpose credit programs (SPCPs) that target credit to applicants who share a protected characteristic (e.g., race, sex, national origin). A SPCP is permissible if it falls into one of three types:

1. **Governmentally authorised programs** — any credit assistance program expressly authorised by Federal or state law for the benefit of an economically disadvantaged class of persons. **(§1002.8(a)(1))**
2. **Nonprofit programs** — any credit assistance program offered by a 501(c) nonprofit for the benefit of its members or for the benefit of an economically disadvantaged class of persons. **(§1002.8(a)(2))**
3. **For-profit programs meeting social needs** — a program offered by a for-profit organisation to meet special social needs, if: (i) it is established and administered pursuant to a **written plan** that identifies the class of persons it is designed to benefit and sets forth the procedures and standards for extending credit; and (ii) it is designed to extend credit to a class of persons who, under the organisation's customary creditworthiness standards, probably would not receive such credit or would receive it on less favourable terms. **(§1002.8(a)(3))**

**Key rules for SPCPs:**
- A program may require all participants to share one or more common characteristics (e.g., race, sex) as long as the program was not established and is not administered to evade ECOA. **(§1002.8(b)(2))**
- If participants must share a common characteristic, the creditor may request and consider information about that characteristic. **(§1002.8(c))**
- If financial need is a program criterion, the creditor may additionally request and consider: marital status, alimony/child support/maintenance income, and the spouse's financial resources. **(§1002.8(d))**

**Note:** A for-profit SPCP without a qualifying written plan is not protected under §1002.8. The written plan is the prerequisite, not a formality.

---

## Adverse Action Notifications

See [[reg-b-adverse-action-notifications]] for full detail. Summary:

**Timing (§1002.9(a)(1)):** A creditor must notify an applicant of action taken within:
- **30 days** of receiving a completed application (approval, counteroffer, or adverse action)
- **30 days** of taking adverse action on an incomplete application or on an existing account
- **90 days** of notifying the applicant of a counteroffer, if the applicant does not expressly accept or use the credit offered

**Content of adverse action notice (§1002.9(a)(2)):**
- A statement of the action taken
- The ECOA notice (prescribed language citing the Act and naming the administering federal agency)
- **Either** a statement of specific reasons **or** disclosure of the right to request specific reasons within 60 days

**Specific reasons must be specific.** A statement that the action was based on the creditor's "internal standards or policies" or that the applicant "failed to achieve a qualifying score on the creditor's credit scoring system" is explicitly insufficient. **(§1002.9(b)(2))**

---

## Information for Monitoring Purposes (§1002.13)

For applications for credit **primarily for the purchase or refinancing of a dwelling** to be occupied by the applicant as a principal residence and to be **secured by a first lien** on that dwelling, the creditor must request:

- **Ethnicity and race** — using either the aggregate HMDA categories (Hispanic/Latino; American Indian or Alaska Native; Asian; Black or African American; Native Hawaiian or Other Pacific Islander; White) or the Appendix B subcategories
- **Sex**
- **Marital status** — married, unmarried, or separated
- **Age** **(§1002.13(a)(1))**

The applicant is asked but not required to provide the information. If the applicant declines, the creditor must note on the form the ethnicity, race, and sex of the applicant to the extent possible by visual observation or surname. **(§1002.13(b))**

The creditor must inform the applicant that the information is being requested by the Federal Government for the purpose of monitoring compliance with federal statutes prohibiting discrimination. **(§1002.13(c))**

---

## Rules on Providing Appraisals and Other Valuations (§1002.14)

For applications for credit to be secured by a **first lien on a dwelling**:

- The creditor must **promptly** provide the applicant copies of all appraisals and other written valuations developed in connection with the application — upon completion or at least **3 business days before consummation** (closed-end) or account opening (open-end), whichever is earlier. **(§1002.14(a)(1))**
- The creditor must provide written notice of this right within **3 business days** of receiving the application. **(§1002.14(a)(2))**
- **No charge** may be imposed for providing copies, though the creditor may require the applicant to pay a reasonable fee to reimburse for the cost of the appraisal/valuation itself. **(§1002.14(a)(3))**
- The obligation applies regardless of whether credit is extended, denied, incomplete, or withdrawn. **(§1002.14(a)(4))**
- The applicant may waive the timing requirement, but waiver must be obtained at least 3 business days before consummation/account opening. **(§1002.14(a)(1))**

---

## Self-Testing and Self-Correction Privilege (§1002.15)

A creditor may conduct voluntary self-tests to assess its compliance with ECOA and Reg B. If the creditor meets the conditions of §1002.15, the results are privileged — they cannot be obtained or used by a government agency in any examination or compliance proceeding, or by any applicant in a civil action.

**Conditions for privilege:**
1. The self-test must be voluntary (not required by law or a governmental authority). **(§1002.15(a)(1))**
2. The creditor must have taken or be taking **appropriate corrective action**. **(§1002.15(a)(2))**

**"Self-test" defined:** Any program, practice, or study that: (i) is designed and used specifically to determine the extent or effectiveness of compliance with the Act; and (ii) creates data or factual information not available from and not derivable from loan/application files or other credit transaction records. **(§1002.15(b)(1))**

**Privileged information:** The self-test report/results; data and factual information created by the self-test; any analysis, opinions, and conclusions; workpapers and draft documents. **(§1002.15(b)(2))**

**Not privileged:** Whether a self-test was conducted; the methodology; the scope; the time period covered; loan and application file data even if summarised or reorganised. **(§1002.15(b)(3))**

**Corrective action threshold:** Appropriate corrective action is required when the self-test shows it is **more likely than not** that a violation occurred, even without formal adjudication. Taking corrective action is not an admission of violation. **(§1002.15(c)(1), (4))**

**Privilege is lost** if the creditor: (i) voluntarily discloses any part to the public or a government agency; (ii) discloses any part as a defence to an allegation; or (iii) fails to retain required self-test records. **(§1002.15(d)(2))**

---

## Record Retention (§1002.12)

| Record type | Retention period |
|-------------|-----------------|
| Applications and adverse action records (consumer credit) | **25 months** from date of notification to applicant |
| Applications and adverse action records (business credit ≤$1M revenue) | **12 months** from notification |
| Applications and adverse action records (business credit >$1M revenue, trade credit) | **60 days** from notification (12 months if applicant requests reasons in writing) |
| Prescreened solicitations | **25 months** (12 months for business credit) |
| Self-test records | **25 months** from completion |

Active enforcement investigations: retain until final disposition. **(§1002.12(b)(4))**

Creditors may retain information that is prohibited to be collected (e.g., race, sex) in application files if it was obtained from a source other than the creditor's own request, and may use it to monitor compliance. **(§1002.12(a))**

---

## Enforcement and Civil Liability (§1002.16)

**Administrative enforcement:** Primarily the CFPB (for large banks and non-banks); OCC, FDIC, NCUA, FRB for depository institutions within their jurisdictions; FTC as backup enforcer for all others. **(§1002.16(a))**

**Civil liability — actual and punitive damages:**
- Any creditor that fails to comply is subject to civil liability for **actual and punitive damages** in individual or class actions. **(§1002.16(b)(1))**
- **Punitive damages cap:** $10,000 in individual actions; the lesser of $500,000 or 1% of the creditor's net worth in class actions. Applies to nongovernmental entities only. **(§1002.16(b)(1))**
- **Attorneys' fees and costs** are available to successful plaintiffs. **(§1002.16(b)(1))**

**Statute of limitations:** 5 years from the date of the violation; or 1 year from the commencement of an administrative enforcement proceeding or a civil action by the Attorney General within 5 years of the violation. **(§1002.16(b)(2))**

**Inadvertent error:** A creditor's failure to comply with §§1002.6(b)(6), 1002.9, 1002.10, 1002.12, or 1002.13 is not a violation if it results from an inadvertent error — provided the creditor corrects the error as soon as possible upon discovery. **(§1002.16(c))**

**Pattern or practice of discouragement or denial:** Referral to the Attorney General required. **(§1002.16(a)(3))**

**Fair Housing Act intersection:** If a violation of ECOA is also a Fair Housing Act violation, the prudential regulator must notify HUD and inform the applicant that FHA remedies may be available. **(§1002.16(b)(5))**

---

## Key Points for Agents

- **The effects test applies to algorithms.** A credit model that produces statistically significant disparate adverse outcomes for applicants of a protected class can violate Reg B without any discriminatory intent. Fintechs using ML-based underwriting must test for disparate impact and document business necessity for features that produce it. **(§1002.6(a))**
- **"Discouragement" is a standalone violation.** A creditor does not need to deny credit to violate Reg B. Marketing, pre-screening messaging, or customer service language that would discourage a reasonable applicant on a prohibited basis is itself actionable. **(§1002.4(b))**
- **Specific adverse action reasons are mandatory — and vague reasons are explicitly prohibited.** The regulation calls out "failed to achieve a qualifying score" and "did not meet internal standards" by name as insufficient. The reasons must identify the principal specific factors. **(§1002.9(b)(2))**
- **SPCPs must have a written plan.** For a for-profit SPCP, the written plan is not optional documentation — it is the legal prerequisite. Without a qualifying written plan, targeting credit to a protected class is not shielded by §1002.8 and may itself be an ECOA violation if it excludes non-protected applicants. **(§1002.8(a)(3))**
- **Appraisal copies go to the applicant even if the loan is denied or withdrawn.** The right is unconditional. Creditors that condition disclosure on the loan closing or that charge for copies violate §1002.14. **(§1002.14(a)(1), (3), (4))**
- **Self-test privilege requires corrective action.** Running a fair lending self-test and finding a likely violation without taking corrective action not only destroys the privilege — it creates a documented violation the creditor cannot claim was inadvertent. **(§1002.15(a)(2), (c)(1))**
- **Subpart B (Section 1071) imposes a firewall between credit decisions and demographic data.** Employees involved in underwriting small business applications cannot access the minority/women/LGBTQI+ ownership and principal owner ethnicity/race/sex data. Operationally, this means separate data stores and access controls, not just policy. **(§1002.108)**
- **Subpart B compliance dates are phased — the largest institutions must comply by July 1, 2026.** Any financial institution that originated ≥2,500 small business covered credit transactions in each of 2022 and 2023 is in the first compliance tier. **(§1002.114(b)(1))**

---

## Related Articles

- [[reg-b-adverse-action-notifications]]
- [[reg-b-small-business-lending-data-collection]]
- [[cfpb-framework-overview]]
- [[cfpb-udaap]]
