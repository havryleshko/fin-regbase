---
title: "ICO Guide to Lawful Basis (Updated April 2026)"
jurisdiction: UK
regulator: ICO
regulation: UK GDPR Art. 6; DPA 2018 s.7; Data (Use and Access) Act 2026
status: current
effective_date: 2026-04-02
last_updated: 2026-04-14
sources:
  - "ICO, 'A guide to lawful basis', ico.org.uk (updated 02 April 2026 to reflect the Data (Use and Access) Act)"
tags: [UK-GDPR, lawful-basis, Article-6, consent, legitimate-interests, recognised-legitimate-interest, legal-obligation, special-category, DUA-Act, ICO, data-protection, UK]
related:
  - concepts/uk-gdpr-lawful-basis.md
  - summaries/ico-guide-data-protection-principles.md
  - concepts/vulnerable-customers.md
  - concepts/vulnerability-drivers-and-taxonomy.md
  - concepts/aml-ctf-framework.md
  - summaries/ico-guide-individual-rights.md
---

# ICO Guide to Lawful Basis (Updated April 2026)

> **Citation type note**
>
> This source is **ICO guidance** — an authoritative interpretation of the UK GDPR and DPA 2018 published by the supervisory authority, not primary legislation or a court ruling. The ICO's guidance represents the ICO's view of how the law should be applied and is accorded significant weight in enforcement and litigation. However, it is not itself law. Where this page cites "the ICO's position," this means the ICO's stated interpretation, which courts may accept or may develop further. This differs from citations to FCA sourcebook rules (binding on FCA-authorised firms), primary legislation (UK GDPR, DPA 2018, DUA Act), and FCA Dear CEO letters in the rest of this wiki.
>
> The April 2026 update incorporated amendments introduced by the **Data (Use and Access) Act 2026 (DUA Act)**, which added a seventh lawful basis — **recognised legitimate interest (Article 6(ea))** — and made other amendments to the UK GDPR. The DUA Act has not yet been separately ingested into this wiki.

---

## Overview

The UK GDPR requires a valid lawful basis for all processing of personal data. There are **seven lawful bases** under Article 6 (as amended by the DUA Act). No basis is superior to any other — the appropriate basis depends entirely on the specific purpose and relationship with the data subject.

The ICO's guide establishes several mandatory rules that apply regardless of which basis a firm relies on:

1. **Pre-determination**: the basis must be identified before processing begins
2. **Documentation**: the basis and its justification must be recorded
3. **Transparency**: the basis and processing purpose must be disclosed in privacy information
4. **No retrospective switching**: selecting the wrong basis cannot easily be corrected; consent → legitimate interests is specifically prohibited after consent withdrawal
5. **Dual condition for special category data**: both an Article 6 basis and an Article 9 condition are required simultaneously

---

## The Seven Lawful Bases (Article 6)

| Basis | Summary | Public authority restriction |
|-------|---------|------------------------------|
| **(a) Consent** | Clear, specific consent from the data subject | May have limitations |
| **(b) Contract** | Necessary for a contract with, or pre-contractual steps requested by, the data subject | None |
| **(c) Legal obligation** | Necessary to comply with a legal obligation (not contractual) | None |
| **(d) Vital interests** | Necessary to protect someone's life | None |
| **(e) Public task** | Necessary for a public interest task or official function with a clear legal basis | None — primary basis for public authorities |
| **(ea) Recognised legitimate interest** *(new — DUA Act 2026)* | Necessary for one of five pre-approved purposes (see below) | Cannot use for official tasks |
| **(f) Legitimate interests** | Necessary for firm's or a third party's legitimate interests, not overridden by data subject's interests | Cannot use for official tasks |

### Recognised Legitimate Interest — The Five Pre-approved Purposes (Art. 6(ea))

This basis was introduced by the DUA Act and removes the need for a balancing test for the following purposes:

1. Safeguarding "vulnerable" people
2. Responding to emergencies
3. Preventing or investigating crime
4. National security, public security and defence
5. Sharing personal data with an organisation that needs it for their public task or function at that organisation's request

For financial services firms, purposes 1, 3 and 5 are the most likely to apply — particularly in fraud prevention, financial crime investigation, and data sharing with law enforcement or regulators.

---

## The Necessity Test

Most bases require the processing to be **"necessary"** for the stated purpose. The ICO's standard:

- Not absolutely essential, but more than useful or standard practice
- A targeted, proportionate means of achieving a specific purpose
- If you can reasonably achieve the same purpose by less intrusive means or by processing less data, the basis does not apply
- "Necessary because of how we run our business" is not sufficient — the test is objective necessity for the purpose, not the firm's chosen method

---

## Lawful Basis and Data Subject Rights

The choice of basis determines which rights the data subject can exercise. This is operationally significant for compliance teams handling DSARs and erasure requests.

| Basis | Right to erasure | Right to portability | Right to object |
|-------|:---:|:---:|:---:|
| Consent | ✓ | ✓ | ✗ (right to withdraw consent instead) |
| Contract | ✓ | ✓ | ✗ |
| Legal obligation | **✗** | **✗** | **✗** |
| Vital interests | ✓ | ✗ | ✗ |
| Public task | **✗** | **✗** | ✓ |
| Recognised legitimate interest | ✓ | ✗ | ✓ |
| Legitimate interests | ✓ | ✗ | ✓ |

**Absolute exception:** The right to object to processing for **direct marketing** is unconditional — it applies regardless of which lawful basis is used.

**Key compliance patterns:**
- Processing under **legal obligation** (e.g. AML/CTF, regulatory reporting) extinguishes all three rights — erasure, portability and object are unavailable
- Processing under **consent** triggers portability; processing under **legitimate interests** does not
- Where multiple bases apply to the same purpose, document all from the start — this affects which rights apply

---

## Selecting a Lawful Basis

No hierarchy exists. Selection depends on purpose and context. Practical approach:

**Consider specified/pre-approved bases first:** Legal obligation, contract, vital interests, public task, and recognised legitimate interest each link to a defined purpose. If your processing fits one, it is likely the appropriate basis.

**If no specified basis fits, choose between legitimate interests and consent:**

Use **legitimate interests** if you wish to retain responsibility for demonstrating the processing is within the data subject's reasonable expectations and it would not have an unwarranted impact on them.

Use **consent** if you prefer to give the data subject full control — including the ability to change their mind. Be aware this carries ongoing management obligations and triggers the consent → LI switching prohibition.

**Key selection questions:**
- Who benefits from the processing?
- Would people expect this use of their data?
- Is the firm in a position of power over them?
- Would some people object?
- Can processing be stopped immediately on request?

---

## Prohibition on Changing Lawful Basis

**The ICO's position:** Retroactively switching lawful basis is inherently unfair and likely a breach of accountability and transparency requirements — even if the new basis would have been valid from the start.

**The consent trap (named by the ICO):** A firm that collects data on the basis of consent cannot subsequently switch to legitimate interests after the data subject withdraws consent. The firm must stop processing. This applies even if the firm believes it could have originally justified legitimate interests — the data subject was led to believe they had a choice, and retrospective switching removes that choice.

Legitimate reasons to change basis: a genuine change in circumstances or an unanticipated new purpose. In this case:
- Notify data subjects before acting on the new basis (unless an exception applies)
- Document the change

---

## New Purpose Compatibility

When processing purposes change, both a compatibility assessment and a new lawful basis are required.

**Compatibility test (UK GDPR Art. 5(1)(b), Annex 2):** New purpose must be compatible with original purpose. The assessment considers factors similar to a Legitimate Interests Assessment (LIA).

**If the original basis was consent — more restricted:**

You may only reuse the data for the new purpose if you:
1. Obtain new consent covering the new purpose specifically; or
2. Reuse to comply with, or demonstrate compliance with, a UK GDPR principle; or
3. Reuse for an Annex 2 compatible purpose and new consent is not reasonably obtainable; or
4. Reuse because it is necessary to safeguard a listed public interest objective (Art. 23) and new consent is not reasonably obtainable

**If the original basis was not consent:** Assess compatibility. If compatible, identify the appropriate new lawful basis (which may differ from the original).

---

## Documentation and Transparency Obligations

**Before processing begins:**
- Determine the lawful basis
- Document it, with justification, per Article 5(2) (accountability principle) and Articles 24 and 30

**In privacy information:**
- Disclose both the purpose and the lawful basis — Articles 13(1)(c) (data collected directly) and 14(1)(c) (data from other sources)
- No prescribed format, but documentation must be sufficient to demonstrate compliance

---

## Special Category Data and Criminal Offence Data

**Special category data (Article 9):** Requires both:
1. An Article 6 lawful basis, and
2. A separate Article 9 condition (e.g. explicit consent, employment law obligation, vital interests, substantial public interest)

Both must be documented. The wiki's `vulnerable-customers.md` contains the most directly applicable context: health and vulnerability data are special category; the TEXAS model addresses the consent/Article 9 interface in frontline interactions.

**Criminal offence data (Article 10):** Requires both:
1. An Article 6 lawful basis, and
2. Either "official authority" to process, or a separate condition under UK law

---

## Key Points for Agents

- Seven lawful bases exist under Article 6 (as amended by DUA Act 2026). No basis is superior — select based on purpose and context.
- **Recognised legitimate interest (Article 6(ea))** is new under the DUA Act: a pre-approved basis for five purposes including safeguarding, crime prevention and sharing with public task organisations. No balancing test required.
- The basis must be **identified and documented before processing starts** — not retrospectively.
- **Cannot switch from consent to legitimate interests after consent withdrawal.** This is an explicit ICO prohibition. Data subjects led to believe they had a choice must be given that choice.
- Basis choice determines rights availability: legal obligation extinguishes erasure, portability and object; consent enables portability; legitimate interests enables object but not portability.
- Right to object to **direct marketing** is absolute regardless of basis.
- **Special category data requires both an Article 6 basis and a separate Article 9 condition**, both documented.
- New purposes require a new lawful basis; if the original basis was consent, reuse is restricted to new consent or specific statutory gateways.
- The basis and purpose must be disclosed in privacy information — this is a transparency obligation under Articles 13 and 14, not optional.

## Related Articles

- [[uk-gdpr-lawful-basis]]
- [[ico-guide-data-protection-principles]]
- [[vulnerable-customers]]
- [[vulnerability-drivers-and-taxonomy]]
- [[aml-ctf-framework]]
- [[ico-guide-individual-rights]]
