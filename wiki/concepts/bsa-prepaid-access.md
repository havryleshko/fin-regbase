---
title: "BSA — Prepaid Access: Customer Identification and Records"
jurisdiction: US
regulator: FinCEN
regulation: "Bank Secrecy Act, 31 USC 5311 et seq.; 31 CFR §§1022.210(b)(5), 1022.420"
direction: b2b
status: current
effective_date: 2011-09-27
last_updated: 2026-05-26
sources:
  - "31 CFR Part 1022 (up to date as of 5-21-2026) — FinCEN official text"
tags: [BSA, FinCEN, prepaid-access, MSB, customer-identification, records, b2b, US]
related:
  - summaries/bsa-rules-for-msbs.md
  - concepts/bsa-msb-registration.md
  - concepts/bsa-cip-customer-identification-programme.md
  - concepts/bsa-cdd-and-boi.md
---

# BSA — Prepaid Access: Customer Identification and Records

## Overview

The BSA prepaid access framework imposes two distinct compliance obligations on providers and sellers of prepaid access: (1) **customer identification**, embedded as a fifth element within the AML programme requirement (§1022.210(b)(5)); and (2) **transactional recordkeeping**, required under §1022.420. These obligations are separate from but complement the CIP requirements applicable to banks (§1020.220) and the general CDD rule (§1010.230). **(§§1022.210(b)(5), 1022.420)**

**Key definitions (from §1010.100):**
- **Prepaid access:** access to funds or the value of funds that have been paid in advance and can be retrieved or transferred at some point in the future through an electronic device or vehicle (such as a card, code, electronic serial number, mobile identification number, or personal identification number)
- **Provider of prepaid access:** the participant in a prepaid programme that agrees to serve as the principal conduit for access to information from its fellow programme participants
- **Seller of prepaid access:** any person that receives funds or the value of funds in exchange for an initial loading or subsequent loading of prepaid access if that person is not the prepaid access programme's provider

---

## Customer Identification — §1022.210(b)(5)

Customer identification for prepaid access is an **element of the MSB's AML programme**, not a standalone CIP requirement. Providers and sellers of prepaid access must build procedures into their AML programme for:

### Provider Obligations

A **provider** of prepaid access must include in its AML programme procedures to:

1. **Collect required customer information** — name, date of birth, address, and identification number — from all customers who obtain prepaid access through the provider's programme
2. **Verify the identity** of customers who obtain prepaid access to funds in excess of **$10,000 in a single day**
3. **Retain all collected information** for **5 years** after the last date the prepaid access device or vehicle is used

**(§1022.210(b)(5)(i))**

### Seller Obligations

A **seller** of prepaid access must include in its AML programme procedures to:

1. **Verify the identity** of any customer who obtains prepaid access from the seller in excess of **$10,000 in a single day**
2. **Collect required information** — name, date of birth, address, and identification number — from customers exceeding the $10,000/day threshold
3. **Retain collected information** for **5 years** after the last date the prepaid access device or vehicle is used

**(§1022.210(b)(5)(ii))**

### Required Information Elements

| Field | Requirement |
|-------|-------------|
| Name | Full name |
| Date of birth | For individual customers |
| Address | Residential or business address |
| Identification number | For US persons: TIN; for non-US persons: passport number and country, alien ID, or government-issued photo ID evidencing nationality/residence |

**(§1022.210(b)(5))**

---

## Transactional Records — §1022.420

### Provider Records — §1022.420(a)

A **provider of prepaid access** must maintain access, for a period of **5 years**, to transactional records generated in the ordinary course of business that would be needed to reconstruct prepaid access transactions, including:

- **Activation** of prepaid access device or vehicle
- **Loads** (initial funding)
- **Reloads** (subsequent additions to balance)
- **Purchases** made using prepaid access
- **Withdrawals** of funds
- **Transfers** between accounts or devices

These records do not need to be stored in a specific format but must be accessible and capable of reconstructing each transaction. **(§1022.420(a))**

### Seller Records — §1022.420(b)

A **seller of prepaid access** must maintain, for **5 years**, records of each sale of prepaid access, including:

- The information collected under the customer identification procedures in the AML programme (§1022.210(b)(5))
- Records necessary to reconstruct the sale transaction

**(§1022.420(b))**

---

## Comparison: Prepaid Access vs Bank CIP

| Feature | Prepaid Access (§§1022.210(b)(5), 1022.420) | Bank CIP (§1020.220) |
|---------|----------------------------------------------|---------------------|
| Regulatory home | Embedded in MSB AML programme | Standalone CIP requirement |
| Trigger | Access to prepaid funds (all customers); identity verification >$10K/day | Opening a new account |
| Required info | Name, DOB, address, ID number | Name, DOB, address, ID number |
| Verification threshold | >$10,000/day | All new account holders |
| Retention | 5 years from last use | 5 years from account closure |
| Government list check | Not specified (covered by AML programme generally) | Mandatory within reasonable period |
| Customer notice | Not specified | Required |

---

## Key Points for Agents

- **Prepaid access customer identification is embedded in the MSB AML programme — it is not a standalone CIP requirement.** The four required data fields (name, DOB, address, ID number) are identical to bank CIP, but the regulatory hook is §1022.210(b)(5) within the programme requirement, not a separate CIP provision. **(§1022.210(b)(5))**
- **The $10,000/day threshold triggers verification — below that threshold, collection (not verification) is required for providers.** Sellers must verify and collect for any single-day sale exceeding $10,000. The threshold applies per customer per business day. **(§1022.210(b)(5))**
- **Five-year retention runs from the last date of use — not from the date of collection.** For prepaid accounts with long dormancy periods, this may significantly extend the effective retention window beyond 5 years from the initial transaction. **(§1022.210(b)(5), §1022.420)**
- **Transactional records cover the full lifecycle: activation, loads, reloads, purchases, withdrawals, and transfers.** Providers must retain access to all such records for 5 years even if the records are not compiled into a single report format. **(§1022.420(a))**
- **Sellers and providers have overlapping but distinct obligations.** The provider collects customer ID for all customers; the seller must independently collect and verify for >$10,000/day customers. Both must retain records for 5 years from last use. **(§§1022.210(b)(5), 1022.420)**

---

## Related Articles

- [[bsa-rules-for-msbs]]
- [[bsa-msb-registration]]
- [[bsa-cip-customer-identification-programme]]
- [[bsa-cdd-and-boi]]
