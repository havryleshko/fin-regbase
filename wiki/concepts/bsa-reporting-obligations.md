---
title: "BSA Reporting Obligations — CTR, SAR, Form 8300, CMIR, FBAR"
jurisdiction: US
regulator: FinCEN
regulation: "Bank Secrecy Act, 31 USC 5311 et seq.; 31 CFR Part 1010 Subpart C"
direction: b2b
status: current
effective_date: 2010-10-26
last_updated: 2026-05-18
sources:
  - "31 CFR Part 1010 (up to date as of 5-14-2026) — FinCEN official text"
tags: [BSA, FinCEN, CTR, SAR, FBAR, CMIR, Form-8300, travel-rule, structuring, aggregation, b2b, US]
related:
  - summaries/bsa-fincen-general-provisions.md
  - concepts/bsa-cdd-and-boi.md
  - concepts/bsa-information-sharing.md
---

# BSA Reporting Obligations — CTR, SAR, Form 8300, CMIR, FBAR

## Overview

31 CFR Part 1010 Subpart C establishes five core reporting regimes applicable across all financial institutions. Each has a distinct threshold, recipient agency, filing deadline, and retention requirement. Sector-specific parts (e.g., Part 1020 for banks) layer additional SAR requirements on top of §1010.320.

---

## Comparison Table

| Report | Trigger | Threshold | Filed with | Deadline | Retention |
|--------|---------|-----------|-----------|----------|-----------|
| CTR | Cash deposit/withdrawal/exchange | >$10,000 in currency per day | FinCEN | 15 days | 5 years |
| SAR | Suspicious activity | Sector-specific (≥$5,000 banks) | FinCEN | 30 days (60 if unknown suspect) | 5 years + supporting docs |
| Form 8300 | Cash in trade/business | >$10,000 in one transaction (or related transactions) | FinCEN | 15 days | 5 years |
| CMIR | Currency crossing US border | >$10,000 at one time | CBP / FinCEN | At time of crossing (or within 15 days of receipt) | 5 years |
| FBAR | Foreign financial accounts | >$10,000 aggregate at any point during calendar year | IRS (FinCEN Form 114) | June 30 following calendar year | 5 years |

---

## Currency Transaction Report (CTR) — §§1010.310–1010.315

### Filing Obligation

Each financial institution (other than a casino) must file a CTR for each deposit, withdrawal, exchange of currency, or other payment or transfer involving **more than $10,000 in currency** in a single business day. Filed with FinCEN via BSA E-Filing within **15 days** of the transaction. A copy retained by the institution for **5 years**. **(§§1010.311, 1010.306(a))**

### Identification Requirement (§1010.312)

Before concluding any CTR-triggering transaction, the financial institution must verify and record the name and address of the individual presenting the transaction, plus their identity, account number, and social security/taxpayer identification number. Identity must be established by government-issued photo ID (not a bank signature card alone).

### Aggregation (§1010.313)

**Multiple branches:** A financial institution includes all domestic branch offices — they are aggregated for currency reporting purposes.

**Multiple transactions:** Multiple currency transactions by or on behalf of the **same person on the same business day** (or at a single deposit institution, the same deposit day) shall be treated as a single transaction if the institution has knowledge that they total more than $10,000. **(§1010.313(b))**

### Structuring Prohibition (§1010.314)

No person shall break up a transaction — or assist another in structuring — for the purpose of evading currency reporting requirements. This includes:
- Causing a financial institution to fail to file a required report
- Causing a required report to contain a material omission or misstatement
- Structuring any transaction with one or more domestic financial institutions

Structuring is prohibited regardless of whether the underlying funds are lawful. **(§1010.314)**

### Non-Bank FI Exemption (§1010.315)

A non-bank financial institution is not required to file a CTR with respect to a currency transaction between the institution and a **commercial bank**. **(§1010.315)**

---

## Suspicious Activity Reports (SAR) — §1010.320

The general provision at §1010.320 directs all financial institutions to refer to their sector-specific chapter X part for SAR requirements. Key sector thresholds (set in sector parts):

| Institution type | SAR threshold |
|----------------|--------------|
| Banks | ≥$5,000 (known/identifiable suspect); ≥$25,000 (no suspect identified) |
| MSBs | ≥$2,000 |
| Broker-dealers | ≥$5,000 |
| Casinos | ≥$5,000 |
| Insurance companies | ≥$5,000 |

SARs must generally be filed within 30 days of detection (or 60 days if suspect is unidentified). SARs are confidential — disclosure to the subject of a SAR is prohibited. **(§1010.320)**

---

## Form 8300 — Cash in Trade or Business — §1010.330

### Filing Obligation

Any person who, in the course of a trade or business, receives **more than $10,000 in currency** in one transaction (or two or more related transactions) must file Form 8300 with FinCEN within **15 days** of receiving the payment. **(§1010.330(a)(1))**

The requirement derives from both 31 USC 5331 and 26 USC 6050I (IRS). The same Form 8300 satisfies both obligations when filed with FinCEN. **(§1010.330(a)(1)(ii))**

### Related Transactions Aggregation

Transactions are **related** if conducted between the same payer and recipient within a 24-hour period, or (if more than 24 hours) if the recipient knows or has reason to know that each is one of a series of connected transactions. A transaction may **not** be divided to avoid reporting.

**Multiple installment payments:**
- Initial payment > $10,000: report within 15 days of receipt
- Initial payment ≤ $10,000: aggregate subsequent payments within one year; report within 15 days after the payment that causes the total to exceed $10,000
- Subsequent payments: a new report is required each time previously unreported payments within a 12-month period individually or cumulatively exceed $10,000 **(§1010.330(b))**

### Definition of "Currency" for Form 8300

Currency for this section includes US coin and currency of any country, **plus** cashier's checks, bank drafts, traveler's checks, and money orders with a face amount of not more than $10,000, **unless** received in a designated reporting transaction (retail sale of consumer durable, collectible, or travel/entertainment activity):
- If the instrument constitutes loan proceeds from a bank — NOT currency **(§1010.330(c)(3))**
- If received in an installment sale under a promissory note meeting specified conditions — NOT currency **(§1010.330(c)(4))**
- If received under a qualifying down payment plan — NOT currency **(§1010.330(c)(5))**

### Exceptions

No Form 8300 required if the entire transaction occurs outside the US (foreign transaction exception). No Form 8300 required for receipt of currency outside the course of a trade or business. **(§1010.330(d))**

---

## Currency or Monetary Instruments Report (CMIR) — §1010.340

### Filing Obligation

Any person who physically transports, mails, or ships — or causes to be physically transported — **more than $10,000 in currency or monetary instruments** at one time into or out of the United States must file a CMIR. **(§1010.340(a))**

Any person who **receives** more than $10,000 in currency or monetary instruments in the US from a place outside the US, with respect to which a CMIR has not been filed, must also file. **(§1010.340(b))**

**Filing:** With the Customs officer at the port of entry/departure, or by mail with Commissioner of CBP. Reports filed with CBP; forms also available from FinCEN. **(§1010.306(b))**

### Exemptions (§1010.340(c))

CMIR is **not required** by:
- A Federal Reserve bank
- A bank or broker-dealer for currency mailed/shipped through postal service or common carrier
- A commercial bank for overland shipments to/from established customers in amounts not exceeding amounts commensurate with customary conduct
- A common carrier of passengers (for passengers' currency)
- A common carrier of goods (for shipments not declared by the shipper as currency)
- Traveler's check issuers transporting traveler's checks prior to delivery to selling agents

Note: A **wire transfer** that does not involve physical transportation is not subject to CMIR. **(§1010.340(d))**

---

## Report of Foreign Financial Accounts (FBAR) — §1010.350

### Filing Obligation

Each **United States person** who has a financial interest in, or signature or other authority over, a bank, securities, or **other financial account in a foreign country** that exceeded **$10,000 in aggregate value at any point during the calendar year** must file an FBAR (FinCEN Form 114, formerly TD F 90-22.1) with the Commissioner of Internal Revenue by **June 30** of the following year. **(§1010.350(a))**

### United States Person (§1010.350(b))

- US citizens
- US residents (green card holders and aliens taxed as US residents under 31 CFR 1010.100(hhh))
- Entities formed under US, state, DC, territory, or tribal law (corporations, partnerships, trusts, LLCs)

### Types of Reportable Accounts (§1010.350(c))

- **Bank accounts:** savings deposits, demand deposits, checking accounts, any other accounts with persons engaged in banking
- **Securities accounts:** accounts for buying, selling, holding, or trading stock or other securities
- **Other financial accounts:** accounts with a financial agency; insurance/annuity policies with cash value; accounts with futures/options brokers; accounts with mutual funds or similar pooled funds with regular NAV and general redemptions

### Financial Interest (§1010.350(e))

A US person has a financial interest in an account where they are:
- Owner of record or holder of legal title
- If held by a corporation in which the US person owns directly or indirectly >50% voting power or total value
- If held by a partnership in which the US person owns >50% profits or capital interest
- If a grantor trust with ownership interest for US federal tax purposes
- A beneficiary with >50% present beneficial interest in assets or current income

### Signature or Other Authority (§1010.350(f))

Authority (alone or in conjunction with another) to control the disposition of money, funds, or other assets in an account by direct communication. **Exceptions:** Officers/employees of regulated FIs with no financial interest need not separately report accounts of the institution.

### Exemptions

- Accounts of US government departments, agencies, and instrumentalities
- Accounts of international financial institutions of which the US is a member
- US military banking facility accounts
- Correspondent/nostro accounts used solely for bank-to-bank settlements
- IRA and qualified retirement plan accounts (§401(a), 403(a), 403(b)), and Roth IRAs **(§1010.350(g))**

### Special Rules

- 25 or more accounts: US person need only report the number and basic information; detailed information provided on request
- Consolidated reporting: US parent with >50% ownership may file consolidated report on behalf of subsidiaries
- Records of accounts retained 5 years; may be disregarded period during tax fraud prosecution **(§1010.420)**

---

## Travel Rule — Transmittal Orders ≥$3,000 — §1010.410(e)–(f)

### Recordkeeping Requirements

Non-bank financial institutions processing transmittal orders of **$3,000 or more** must record and retain:
- Transmitter's name, address, account number, TIN
- Amount, execution date, and execution instructions
- Identity of recipient's financial institution
- Recipient's name, address, account number, and other specific identifiers (to the extent received) **(§1010.410(e)(1))**

For transmitters who are **not established customers**: FI must verify identity by government-issued photo ID before accepting the order. **(§1010.410(e)(2))**

### Pass-Forward Obligation (§1010.410(f))

**Transmitter's FI** must include in the transmittal order, at the time it is sent to a receiving FI, all of the following (to the extent received):
- Transmitter's name and account number
- Transmitter's address
- Amount and execution date
- Identity of recipient's FI
- Recipient's name, address, account number, and other specific identifiers

**Intermediary FIs** must pass forward this information in corresponding transmittal orders. **(§1010.410(f)(1)–(2))**

**Exceptions:** Inter-bank transmittals where both transmitter and recipient are banks or other regulated entities (banks, broker-dealers, futures commission merchants, US government, state/local governments, mutual funds). **(§1010.410(e)(6))**

---

## Monetary Instruments — $3,000–$10,000 — §1010.415

### Recordkeeping

No financial institution may issue or sell a bank check, cashier's check, money order, or traveler's check for **$3,000 or more in currency** without maintaining records:

**If customer has a deposit account:** Name, date, type(s) of instrument, serial number(s), amount. Identity verified via signature card or photo ID.

**If customer has no deposit account:** Name, address, SSN/TIN or alien ID number, DOB, date, type(s) of instrument, serial number(s), amount. Identity verified by examination of photo ID.

**Contemporaneous purchases** totalling $3,000 or more (whether same or different instrument types) during one business day must be treated as one purchase. Records retained **5 years**; available to Secretary on request at any time. **(§1010.415)**

---

## Key Points for Agents

- **Five reporting regimes; each has different triggers, recipients, and deadlines.** CTR (>$10K cash, 15 days to FinCEN); SAR (sector-specific, FinCEN); Form 8300 (>$10K cash in trade/business, 15 days to FinCEN); CMIR (>$10K crossing border, CBP at crossing); FBAR (>$10K in foreign accounts at any time during year, IRS by June 30). **(§§1010.311, 1010.320, 1010.330, 1010.340, 1010.350)**
- **Aggregation rules are critical for CTR and Form 8300.** Multiple cash transactions by or on behalf of the same person in one business day aggregate for CTR purposes. Related transactions (including installment payments) aggregate for Form 8300. Structuring to stay below $10,000 is a separate criminal offence. **(§§1010.313, 1010.330(b), 1010.314)**
- **Cashier's checks, money orders, and traveler's checks ≤$10,000 face amount may count as "currency" for Form 8300.** But exceptions apply when received in designated reporting transactions (retail sales, entertainment) and the instrument is loan proceeds, installment sale proceeds, or down payment plan proceeds. **(§1010.330(c))**
- **The travel rule (§3,000 threshold) applies to non-bank FIs; banks have their own travel rule under Part 1020.** Non-bank FIs must record transmittal order info and pass it forward in the payment chain. Wire transfers do not trigger CMIR — CMIR applies only to physical transportation of currency/monetary instruments. **(§§1010.340(d), 1010.410(e)–(f))**
- **All BSA reports and supporting records must be retained for 5 years.** FBAR records (§1010.420) must be retained 5 years and are always available for government inspection. CTR/Form 8300/CMIR copies retained by the filing institution for 5 years from filing date. **(§§1010.306(a)(2), 1010.420, 1010.430)**

---

## Related Articles

- [[bsa-fincen-general-provisions]]
- [[bsa-cdd-and-boi]]
- [[bsa-information-sharing]]
