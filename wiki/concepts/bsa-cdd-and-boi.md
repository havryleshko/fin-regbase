---
title: "BSA — Customer Due Diligence (CDD) and Beneficial Ownership Information (BOI)"
jurisdiction: US
regulator: FinCEN
regulation: "Bank Secrecy Act, 31 USC 5311 et seq.; 31 CFR §§1010.230, 1010.380"
direction: b2b
status: current
effective_date: 2018-05-11
last_updated: 2026-05-18
sources:
  - "31 CFR Part 1010 (up to date as of 5-14-2026) — FinCEN official text"
tags: [BSA, FinCEN, CDD, beneficial-ownership, BOI, corporate-transparency-act, CTA, KYC, b2b, US]
related:
  - summaries/bsa-fincen-general-provisions.md
  - concepts/bsa-reporting-obligations.md
  - concepts/bsa-correspondent-accounts-special-diligence.md
---

# BSA — Customer Due Diligence (CDD) and Beneficial Ownership Information (BOI)

## Two Distinct but Overlapping Regimes

There are two separate beneficial ownership regimes under the BSA:

| Regime | Source | Who is obligated | What is required | Purpose |
|--------|--------|-----------------|-----------------|---------|
| **CDD Rule** (§1010.230) | Bank Secrecy Act | Covered financial institutions | Collect BO info from legal entity customers at account opening | FI-facing obligation; FI holds the data |
| **BOI Reporting** (§1010.380) | Corporate Transparency Act (CTA), 31 USC 5336 | Reporting companies themselves | Report BO info directly to FinCEN | Company-facing obligation; FinCEN holds the data |

These regimes interact: financial institutions may request BOI data from FinCEN (with reporting company consent) to satisfy their own CDD obligations. **(§1010.955(b)(4))**

---

## Part 1 — CDD Rule (§1010.230)

### Covered Financial Institutions

The CDD rule applies to:
- Banks
- Brokers or dealers in securities
- Mutual funds
- Futures commission merchants and introducing brokers in commodities

### What Must Be Collected

At account opening for any **legal entity customer**, covered FIs must obtain and verify:

**Ownership prong:** Each natural person who, directly or indirectly (through any contract, arrangement, understanding, relationship, or otherwise) **owns 25% or more of the equity interests** of the legal entity customer. Up to **four individuals** may qualify (one for each 25% ownership block); **zero is possible** if no individual meets the threshold. **(§1010.230(b)(1))**

**Control prong:** **One** individual with significant responsibility for managing the legal entity customer. Examples: Chief Executive Officer, Chief Financial Officer, Chief Operating Officer, Managing Member, General Partner, President, Vice President, Treasurer. **(§1010.230(b)(2))**

**Identifying information collected for each beneficial owner:**
- Full legal name
- Date of birth
- Residential or business street address
- Social Security number (US persons) or, for non-US persons, passport number + country of issuance, or other similar identification number **(Appendix A to §1010.230)**

The same individual may appear under both prongs (e.g., a President who also holds a 30% equity interest).

### Verification

The information must be verified through documents, non-documentary methods, or a combination. FIs may rely on certifications from the person opening the account on behalf of the legal entity. **(§1010.230(b))**

### Excluded Legal Entity Customer Categories

The following **16 categories** are excluded — FIs need not collect beneficial ownership for these customers:
1. Regulated financial institutions (banks, savings associations, credit unions, broker-dealers, investment companies)
2. US or state government entities
3. Listed companies (securities registered under Exchange Act §12)
4. Exchange Act reporting issuers (§15(d))
5. Investment companies registered under Investment Company Act
6. SEC- or CFTC-regulated investment advisers
7. SEC-registered exchange or clearing agency
8. Commodity pool operators registered with CFTC
9. Insurance companies
10. Regulated public utilities
11. Non-US governmental bodies or instrumentalities
12. Financial market utilities designated by FSOC
13. Pooled investment vehicles operated/advised by a covered FI
14. Non-profit charitable trusts or entities described in IRC §501(c) exempt from tax
15. Certain ERISA plans with named fiduciaries
16. Entities with >$1M in revenue, >20 employees, and that filed tax returns in prior year (large operating company equivalent)
**(§1010.230(e))**

### Reliance on Another Financial Institution (§1010.230(j))

A covered FI may rely on the performance of the CDD requirements by **another financial institution** with respect to a legal entity customer that is also the other FI's customer, provided:
1. Such reliance is reasonable under the circumstances
2. The other FI is subject to a rule implementing 31 USC 5318(h) and regulated by a federal functional regulator
3. The other FI enters into a contract **requiring it to certify annually** that it has implemented its AML programme and will perform the specified CDD requirements

### Retention

Records must be retained for **5 years after the date the account is closed**. **(§1010.230(i))**

---

## Part 2 — BOI Reporting (§1010.380)

### Who Must File — Reporting Companies

A **reporting company** is any entity that is:
- A **domestic reporting company:** A corporation, LLC, or other entity created by filing a document with a secretary of state or similar office in any US state or Indian tribe
- A **foreign reporting company:** Any entity formed under the law of a foreign country and registered to do business in any US state or tribal jurisdiction by filing a document with a secretary of state or similar office **(§1010.380(c)(1))**

### 23+ Exemption Categories

The following entity types are **not** reporting companies for BOI purposes:

| Category | §1010.380(c)(2) |
|---------|----------------|
| Securities reporting issuer (Exchange Act §12 or §15(d) filer) | (i) |
| Governmental authority | (ii) |
| Bank (FDIC-insured, ICA §2(a), IAA §202(a)) | (iii) |
| Credit union | (iv) |
| Depository institution holding company | (v) |
| Money services business registered with FinCEN | (vi) |
| Broker or dealer in securities (Exchange Act registered) | (vii) |
| Securities exchange or clearing agency | (viii) |
| Other Exchange Act registered entity | (ix) |
| Investment company or investment adviser (registered with SEC) | (x) |
| Venture capital fund adviser (§203(l) IAA; Form ADV filed) | (xi) |
| Insurance company (ICA §2) | (xii) |
| State-licensed insurance producer (physical US office) | (xiii) |
| Commodity Exchange Act registered entity | (xiv) |
| Accounting firm (Sarbanes-Oxley §102 registered) | (xv) |
| Public utility (telecom, electricity, natural gas, water/sewer) | (xvi) |
| Financial market utility (FSOC-designated) | (xvii) |
| Pooled investment vehicle (operated/advised by exempt entity) | (xviii) |
| Tax-exempt entity (IRC §501(c), §527(e)(1), §4947(a)) | (xix) |
| Entity assisting a tax-exempt entity (exclusively; US persons; US-citizen controlled; majority US-citizen funded) | (xx) |
| **Large operating company** (>20 full-time US employees; physical US office; >$5M gross receipts/sales on prior-year US tax return) | (xxi) |
| Subsidiary of certain exempt entities (ownership or control by exempt entity) | (xxii) |
| **Inactive entity** (existed on/before Jan 1, 2020; not engaged in active business; not owned by foreign person; no ownership change in preceding 12 months; no funds >$1,000 in preceding 12 months; no assets) | (xxiii) |
| **Domestic entity** created by filing with a secretary of state or similar office | (xxiv) — domestic only companies; not applicable to foreign entities |

### Who Is a Beneficial Owner (§1010.380(d))

For BOI purposes, a beneficial owner is any individual who, directly or indirectly, **either**:

**Substantial control:**
- Serves as a senior officer (president, CFO, general counsel, CEO, COO, or other officer performing similar functions)
- Has authority over the appointment or removal of any senior officer or a majority of the board of directors
- Directs, determines, or has substantial influence over important decisions, including: nature/scope/attributes of the business; reorganisation/dissolution/merger; major expenditures/investments; significant equity issuance or debt; selection/termination of business lines; compensation schemes; significant contracts; governance documents amendments
- Has any other form of substantial control **(§1010.380(d)(1))**

Substantial control may be exercised directly or indirectly through: board representation; majority voting power; rights associated with financing arrangements; control over one or more intermediary entities; arrangements through nominees. **(§1010.380(d)(1)(ii))**

**25% ownership interest:** Directly or indirectly owns or controls ≥25% of the reporting company's ownership interests. Calculated at the present time, with options treated as exercised. For corporations: greater of total combined voting power or total combined value, as a percentage of all classes. **(§1010.380(d)(2)(iii))**

Ownership interest includes: equity, stock, transferable shares; capital or profit interests; convertible instruments; warrants or rights to purchase; any other instrument, contract, arrangement, or mechanism used to establish ownership. **(§1010.380(d)(2)(i))**

Indirect ownership includes: joint ownership; ownership through nominees/intermediaries/custodians; beneficial interests in trusts; ownership through intermediary entities. **(§1010.380(d)(2)(ii))**

### Who Is NOT a Beneficial Owner (§1010.380(d)(3))

Exceptions — the following individuals are NOT beneficial owners even if they otherwise meet the definition:
1. **Minor children** (report parent or legal guardian instead)
2. **Nominees, intermediaries, custodians, or agents** acting on behalf of another individual
3. **Non-senior-officer employees** whose substantial control or economic benefits derive solely from employment status
4. Individuals with only a **future interest through right of inheritance**
5. **Creditors** whose only interest consists of rights or interests for payment of a predetermined sum of money (debt, loan covenant) not intended to establish ownership

### Information Required to Be Reported (§1010.380(b)(1))

**For each reporting company:**
- Full legal name
- Any trade name or "doing business as" name
- Complete current US address (principal place of business in US; or, if formed under foreign law, primary US location)
- Jurisdiction of formation
- State or tribal jurisdiction of first registration (for foreign entities)
- IRS Taxpayer Identification Number (TIN) / EIN; or foreign tax ID if no TIN issued

**For each beneficial owner and company applicant:**
- Full legal name
- Date of birth
- Complete current address (residential for individuals; business address for company applicants)
- Unique identifying number from a non-expired: US passport; state/local/tribal government-issued ID; US driver's licence; or (if none of the above) foreign passport
- Image of the identifying document **(§1010.380(b)(1)(ii)(E))**

### Company Applicant

A **company applicant** is: (1) the individual who directly files the document that creates or registers the reporting company; and (2) the individual who is primarily responsible for directing or controlling such filing if more than one individual is involved. **(§1010.380(e))**

Company applicant information is **not required** for reporting companies created or registered before January 1, 2024. **(§1010.380(b)(2)(iv))**

### Reporting Deadlines (§1010.380(a))

| Situation | Deadline |
|-----------|----------|
| Entity formed on or after March 26, 2025 | Within 30 calendar days of formation (date first registered OR date secretary of state provides public notice) |
| Entity formed before March 26, 2025 | By April 25, 2025 |
| Change in any required information (including change of beneficial owner) | Within 30 calendar days of the change |
| Correction of inaccurate report | Within 30 calendar days of becoming aware (or having reason to know) of the inaccuracy |
| Entity no longer exempt | Within 30 calendar days of losing exemption status |

**Note:** A corrected report filed within the 30-day period satisfies the correction requirement; if filed within 90 days of the original inaccurate filing, also satisfies 31 USC 5336(h)(3)(C)(i)(l)(bb). **(§1010.380(a)(3)(i))**

### FinCEN Identifier (§1010.380(b)(4))

An individual or reporting company may obtain a **FinCEN identifier** (a unique identifying number) by submitting required information to FinCEN. Once obtained, the identifier may be provided to reporting companies in lieu of repeating all required individual information. Each individual or company may obtain **only one FinCEN identifier**.

Individuals must update their FinCEN identifier applications within 30 calendar days of any change in their required information. **(§1010.380(b)(4)(iii))**

### BOI Confidentiality and Disclosure (§1010.955)

BOI filed under §1010.380 is **strictly confidential** and may not be disclosed unless specifically authorised. Authorised disclosures include:

| Recipient | Conditions |
|----------|-----------|
| Federal law enforcement / national security / intelligence agencies | Request for national security, intelligence, or law enforcement purposes |
| State/local/Tribal law enforcement | Court of competent jurisdiction has authorised the agency to seek the information in a criminal or civil investigation |
| Foreign law enforcement (via US Federal agency) | Under an applicable international treaty/agreement/convention; for law enforcement investigation or national security/intelligence activity |
| **Financial institutions** | FI requests for CDD compliance; reporting company must consent; FI must certify to FinCEN that it has the consent |
| Regulatory agencies (federal functional regulators) | Supervising FI compliance with CDD; agency has written agreement with FinCEN governing safeguards |
| Treasury officers/employees | Official duties; tax administration |

**Prohibited storage jurisdictions:** FIs receiving BOI data from FinCEN may not make it available to persons physically located in, or store it in: People's Republic of China; Russian Federation; US-designated state sponsors of terrorism; jurisdictions subject to comprehensive US financial/economic sanctions; or any jurisdiction determined by the Secretary to undermine enforcement of the BOI rules. **(§1010.955(d)(2))**

**Unauthorized disclosure:** Willful disclosure or use of BOI in violation of §1010.955 is unlawful. **(§1010.955(f))**

### Penalties (§§1010.380(g), 1010.821)

| Violation | Penalty |
|----------|--------|
| Willful failure to report or update BOI | Civil: $606/day (inflation-adjusted); Criminal: separate statutes |
| Willful provision of false/fraudulent BOI | Criminal: fine + imprisonment |
| Unauthorized disclosure or use of BOI | Civil: $606/day |

---

## Key Points for Agents

- **CDD (§1010.230) is an obligation on financial institutions; BOI (§1010.380) is an obligation on companies themselves.** They address the same underlying problem (opaque ownership) from different angles. CDD data stays at the FI; BOI data sits at FinCEN and can be shared back to FIs with company consent. **(§§1010.230, 1010.380, 1010.955)**
- **CDD uses a 25% ownership threshold with a mandatory control prong; BOI uses the same 25% threshold plus a substantially similar control test.** The definition of "substantial control" in §1010.380(d)(1) is broader than the CDD control prong, explicitly covering board representation, financing arrangement rights, and control through intermediaries. **(§§1010.230(b), 1010.380(d))**
- **BOI is not required for 23+ exempt entity categories.** Many fintech counterparties will be exempt (banks, broker-dealers, MSBs registered with FinCEN, SEC-registered investment companies/advisers). Large operating companies (>20 employees, US physical office, >$5M revenue) and inactive pre-2020 entities are also exempt. **(§1010.380(c)(2))**
- **Company applicant information is only required for entities created or registered on or after January 1, 2024.** For older entities, only beneficial owners need to be reported. **(§1010.380(b)(2)(iv))**
- **FIs receiving BOI from FinCEN face strict geographic storage restrictions.** BOI data cannot be made available to persons physically in China, Russia, US-sanctioned jurisdictions, or state sponsors of terrorism. FIs must notify FinCEN within 3 business days of any foreign government subpoena or legal demand requiring disclosure of BOI received from FinCEN. **(§1010.955(d)(2))**

---

## Related Articles

- [[bsa-fincen-general-provisions]]
- [[bsa-reporting-obligations]]
- [[bsa-correspondent-accounts-special-diligence]]
