---
title: "UK GDPR — Lawful Basis for Processing (Article 6)"
jurisdiction: UK
regulator: ICO
regulation: UK GDPR Art. 6; Art. 9; Art. 10; DPA 2018; Data (Use and Access) Act 2026
status: current
effective_date: 2018-05-25
last_updated: 2026-04-14
sources:
  - "ICO, 'A guide to lawful basis', ico.org.uk (updated 02 April 2026 to reflect the Data (Use and Access) Act)"
tags: [UK-GDPR, lawful-basis, Article-6, Article-9, Article-10, consent, legitimate-interests, recognised-legitimate-interest, legal-obligation, special-category, criminal-offence-data, DUA-Act, ICO, data-protection, UK]
related:
  - summaries/ico-guide-lawful-basis-2026.md
  - concepts/uk-gdpr-data-protection-principles.md
  - concepts/vulnerable-customers.md
  - concepts/vulnerability-drivers-and-taxonomy.md
  - concepts/aml-ctf-framework.md
  - concepts/sar-consent-tipping-off.md
  - concepts/uk-gdpr-individual-rights-overview.md
  - concepts/uk-gdpr-right-to-object.md
  - concepts/uk-gdpr-automated-decision-making.md
---

# UK GDPR — Lawful Basis for Processing (Article 6)

> **Source note:** This page derives from ICO guidance — the supervisory authority's authoritative interpretation of the UK GDPR — not from primary legislation or FCA rules. ICO guidance is accorded significant weight in enforcement but is not itself binding law in the way FCA sourcebook rules are. See [[ico-guide-lawful-basis-2026]] for full source details and the DUA Act context.

---

## The Obligation

All processing of personal data must rest on at least one valid **lawful basis** under Article 6 of the UK GDPR. Processing without a lawful basis is unlawful — a breach of the lawfulness, fairness and transparency principle (Article 5(1)(a)).

The basis must be:
- Identified **before** processing begins
- **Documented** with justification
- **Disclosed** to data subjects in privacy information (Articles 13(1)(c) and 14(1)(c))

---

## The Seven Lawful Bases

Article 6 provides seven bases (as amended by the Data (Use and Access) Act 2026, which added Article 6(ea)):

### (a) Consent
The data subject has given clear, specific, informed and unambiguous consent for processing for a specific purpose.

Consent carries ongoing management obligations: it must be as easy to withdraw as to give, and withdrawal must stop processing immediately unless another basis applies. **The firm retains no fall-back to legitimate interests after withdrawal** — the ICO's position is that switching bases post-withdrawal is inherently unfair and a breach of accountability obligations, even if LI would have applied from the start.

Consent triggers the right to data portability.

### (b) Contract
Processing is necessary for a contract with the data subject, or for pre-contractual steps taken at the data subject's request.

"Necessary" means objectively necessary to perform the contract — not merely useful or standard practice. Processing that could be achieved without this data does not meet the test.

### (c) Legal obligation
Processing is necessary to comply with a legal obligation (not a contractual one).

This is the primary basis for AML/CTF obligations, regulatory reporting, sanctions screening, and other mandatory financial services compliance activities. It extinguishes the rights to erasure, portability and object — a data subject cannot demand erasure of data held under a statutory obligation to retain it.

### (d) Vital interests
Processing is necessary to protect someone's life — typically emergency medical situations. Rarely applicable in financial services.

### (e) Public task
Processing is necessary for a task in the public interest or for official functions, with a clear basis in law. Primary basis for public authorities.

### (ea) Recognised legitimate interest *(introduced by the Data (Use and Access) Act 2026)*
Processing is necessary for one of five pre-approved purposes. Unlike legitimate interests (f), **no balancing test is required** — the ICO considers the balance has been struck in advance by Parliament.

The five pre-approved purposes:
1. **Safeguarding vulnerable people**
2. **Responding to emergencies**
3. **Preventing or investigating crime**
4. **National security, public security and defence**
5. **Sharing personal data with a public task organisation at that organisation's request**

Not available to public authorities processing personal data for their official tasks.

**Relevance to financial services:** Purposes 1 (safeguarding), 3 (fraud/financial crime prevention), and 5 (sharing with FCA, NCA, OFSI, etc.) are directly applicable. Firms conducting financial crime investigations or sharing data with regulators at the regulator's request may now rely on a pre-approved basis rather than conducting a full LIA.

### (f) Legitimate interests
Processing is necessary for the firm's legitimate interests, or those of a third party, unless the data subject's interests or fundamental rights override those interests.

Requires a **Legitimate Interests Assessment (LIA)** — a three-part test:
1. **Purpose test:** Is there a legitimate interest?
2. **Necessity test:** Is processing necessary for that interest?
3. **Balancing test:** Do the data subject's interests override the firm's?

Not available to public authorities processing for their official tasks. Cannot be used as a default basis or applied without genuinely working through the balancing test.

---

## The Necessity Test

All bases except consent require the processing to be **"necessary"** for the stated purpose. The ICO's standard is objective:

- More than useful or convenient; more than standard practice
- A targeted, proportionate means of achieving the specific purpose
- Not met if the same purpose can be achieved by less intrusive means or by processing less data
- "We need this because of how we run our business" is insufficient — the question is whether processing is objectively necessary for the purpose, not for the firm's chosen method

---

## Lawful Basis and Data Subject Rights

Basis choice determines which rights are available to data subjects. This is the most operationally significant consequence of basis selection.

| Basis | Erasure | Portability | Object |
|-------|:-------:|:-----------:|:------:|
| Consent | ✓ | ✓ | ✗ |
| Contract | ✓ | ✓ | ✗ |
| Legal obligation | **✗** | **✗** | **✗** |
| Vital interests | ✓ | ✗ | ✗ |
| Public task | **✗** | **✗** | ✓ |
| Recognised legitimate interest | ✓ | ✗ | ✓ |
| Legitimate interests | ✓ | ✗ | ✓ |

**Absolute rule:** The right to object to processing for **direct marketing** is unconditional — it applies regardless of lawful basis.

**Key compliance implications:**
- AML/CTF and regulatory data held under **legal obligation** is not subject to erasure, portability, or object requests — these rights are simply unavailable
- **Consent** is the only basis that also triggers the right to portability (alongside contract) — relevant for open banking and data sharing use cases
- Data held under **legitimate interests** can be challenged via the right to object; the firm must then stop processing unless it can demonstrate compelling legitimate grounds
- Where multiple bases apply to the same purpose, document all from the start — the broadest right available to the data subject applies

---

## Selecting a Lawful Basis

**No hierarchy.** No basis is inherently better, safer or more compliant than another. Selection depends on purpose and context.

**Decision sequence:**

1. Consider specified and pre-approved bases first (legal obligation, contract, vital interests, public task, recognised legitimate interest). If the purpose fits, the basis is likely clear.
2. If no specified basis fits, choose between **legitimate interests** and **consent**:
   - **Legitimate interests**: firm retains responsibility for demonstrating it is within reasonable expectations; must conduct and document an LIA; cannot subsequently be overridden by a simple withdrawal
   - **Consent**: gives the data subject full control including the ability to withdraw; triggers portability; firm must manage consent records and honour withdrawals immediately
3. Multiple bases can apply to the same purpose — identify and document all from the start

**Useful diagnostic questions:**
- Who benefits from the processing, and would they expect it?
- Is the firm in a position of power over the data subject?
- Can processing stop immediately on request?
- Would some data subjects object if they knew?

---

## Prohibition on Changing Lawful Basis

**Rule:** Once a basis has been selected and communicated, retroactive switching is prohibited — or at minimum inherently problematic — even if a different basis would have been valid from the start.

**The consent trap:** A firm that collects data under consent cannot switch to legitimate interests after consent is withdrawn. The ICO's position: doing so is inherently unfair (data subjects were led to believe they had control) and a breach of accountability and transparency. The firm must stop processing.

**Legitimate basis for change:** A genuine change in circumstances or a new, unanticipated purpose. Procedure:
1. Notify data subjects before proceeding on the new basis (unless an exception applies)
2. Document the change and the reason

---

## New Purpose Compatibility

When processing purposes change, two steps are required:

**Step 1 — Compatibility assessment.** Under the purpose limitation principle (Article 5(1)(b)), a new purpose must be compatible with the original. The assessment considers factors including: links between purposes; context of collection; nature of the data; consequences for data subjects; existence of safeguards.

**Step 2 — New lawful basis.** Even if compatible, a new lawful basis must be identified for the new purpose.

**If the original basis was consent — additional restrictions apply:**

Reuse of consent-collected data for a new purpose requires one of:
- New, specific consent covering the new purpose
- Reuse to comply with or demonstrate compliance with a UK GDPR principle
- Reuse for an Annex 2 compatible purpose and new consent is not reasonably obtainable
- Reuse necessary to safeguard a public interest objective listed in Article 23 and new consent is not reasonably obtainable

**If the original basis was not consent:** A compatibility assessment (similar in structure to an LIA) determines whether the new purpose is compatible. Then identify the appropriate new basis for the new purpose.

---

## Special Category Data (Article 9)

Special category data (health, biometric, genetic, racial/ethnic origin, political opinions, religious beliefs, trade union membership, sex life/sexual orientation) requires **two conditions simultaneously**:

1. A **lawful basis** under Article 6
2. A **special category condition** under Article 9 — e.g. explicit consent; employment/social protection law obligation; vital interests; substantial public interest; health or social care; public health; archiving/research/statistics

Both must be documented.

**Financial services context:** Health and vulnerability data are special category. The TEXAS model in `vulnerable-customers.md` addresses the frontline interface between vulnerability disclosures and the Article 9 condition requirement.

---

## Criminal Offence Data (Article 10)

Data about criminal convictions, offences, or related security measures requires:

1. A **lawful basis** under Article 6, and
2. Either **"official authority"** to process, or a **separate condition** under UK law (Schedule 1 DPA 2018)

Both must be documented. AML/CTF processing of PEP data or adverse criminal media may engage this requirement depending on the specific data processed.

---

## Key Points for Agents

- All processing requires a documented lawful basis under Article 6, identified before processing begins. Processing without one is unlawful under Article 5(1)(a).
- **Seven bases exist** post-DUA Act 2026: consent; contract; legal obligation; vital interests; public task; recognised legitimate interest (new — five pre-approved purposes); legitimate interests.
- **Recognised legitimate interest (Art. 6(ea))** removes the balancing test for safeguarding, emergencies, crime prevention, national security, and sharing with public task organisations. Most relevant for financial crime and regulatory data-sharing contexts.
- **Legal obligation** (AML, regulatory reporting, sanctions) extinguishes the rights to erasure, portability and object. Data subjects cannot demand erasure of data held under a statutory retention obligation.
- **Consent → legitimate interests switching after withdrawal is prohibited.** The firm must stop processing. Even if LI would have been valid from the start, the switch is an accountability and transparency breach.
- Right to object to **direct marketing** is absolute regardless of basis.
- **Special category data needs both an Article 6 basis and an Article 9 condition**, both documented.
- New purposes require a compatibility assessment and a new lawful basis. Consent-collected data has restricted reuse options.
- The basis and purpose must be disclosed in privacy information under Articles 13(1)(c) and 14(1)(c).

## Related Articles

- [[ico-guide-lawful-basis-2026]]
- [[uk-gdpr-data-protection-principles]]
- [[vulnerable-customers]]
- [[vulnerability-drivers-and-taxonomy]]
- [[aml-ctf-framework]]
- [[sar-consent-tipping-off]]
- [[uk-gdpr-individual-rights-overview]]
- [[uk-gdpr-right-to-object]]
- [[uk-gdpr-automated-decision-making]]
