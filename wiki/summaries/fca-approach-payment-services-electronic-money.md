---
title: "FCA Approach Document — Payment Services and Electronic Money (v7, March 2026)"
jurisdiction: UK
regulator: FCA
regulation: PSRs 2017; EMRs 2011; SCA-RTS; PSD2 (on-shored)
status: current
effective_date: 2017-01-13
last_updated: 2026-04-16
sources:
  - "FCA, 'The FCA's role under the Payment Services Regulations 2017 and the Electronic Money Regulations 2011', version 7, March 2026"
tags: [PSRs, EMRs, payment-institutions, EMI, AISP, PISP, ASPSP, safeguarding, capital, SCA, open-banking, regulatory-reporting, conduct, UK, FCA]
related:
  - concepts/safeguarding-pis-emis.md
  - concepts/psr-emi-prudential.md
  - concepts/psr-capital-requirements.md
  - concepts/psr-sca-authentication.md
  - concepts/psr-regulatory-reporting.md
  - concepts/psr-open-banking-pisp-aisp.md
  - concepts/psr-unauthorised-transaction-liability.md
  - concepts/operational-resilience.md
  - concepts/wind-down-planning.md
  - concepts/agent-distributor-oversight.md
---

# FCA Approach Document — Payment Services and Electronic Money (v7, March 2026)

The FCA Approach Document is the FCA's primary operational guidance document for firms authorised or registered under the PSRs 2017 and EMRs 2011. Version 7 (March 2026) is the definitive current reference. It covers the FCA's interpretation and supervisory expectations across all key regulatory obligations.

> **Regulatory basis:** The PSRs 2017 implement PSD2 into UK law. The EMRs 2011 implement the E-Money Directive. The SCA-RTS (FCA's UK version, effective 31 December 2020) replaced the EU Delegated Regulation on SCA and common and secure open standards of communication.

---

## Chapter 3 — Authorisation and Registration

Authorised PIs, Small PIs, Authorised EMIs, Small EMIs, and RAISPs (Registered Account Information Service Providers) are the five firm categories. Authorisation/registration requirements include: initial capital, safeguarding capability, fit and proper persons, business plan, wind-down plan, financial crime controls. See [[wind-down-planning]] and [[agent-distributor-oversight]] for related obligations.

---

## Chapter 8 — Conduct of Business

Chapter 8 sets out the FCA's interpretation of the PSR conduct rules — the obligations a PSP owes its payment service users (PSUs) in the execution and protection of payment transactions.

**Key areas covered:** framework conditions and information obligations; unauthorised transaction liability (including the fraud delay mechanism); consent and revocation; PISP liability chain; payment execution obligations; value dates.

See [[psr-unauthorised-transaction-liability]] for the full framework.

---

## Chapter 9 — Capital Requirements

Initial capital thresholds and ongoing own funds requirements for Authorised PIs and Authorised EMIs. The FCA has power to adjust requirements by ±20%.

See [[psr-capital-requirements]] for the full framework.

---

## Chapter 10 — Safeguarding

The safeguarding obligation is the primary customer funds protection mechanism for PIs and EMIs. Two permitted methods (segregation; insurance/comparable guarantee). Daily reconciliation and annual audit required.

See [[safeguarding-pis-emis]] for the full framework.

---

## Chapter 13 — Reporting and Notifications

All PSPs and EMIs must make periodic regulatory returns and event-based notifications to the FCA. 10+ mandatory forms cover capital adequacy, fraud, operational/security risk, dedicated interface performance, complaints, financial crime, and controller/close-link changes.

**Major operational/security incident notification:** initial notification within 4 hours of becoming aware the incident qualifies as major. **(FCA Approach Document §13; SUP 15.14)**

See [[psr-regulatory-reporting]] for the full framework.

---

## Chapter 17 — Open Banking: Payment Initiation, Account Information, and Confirmation of Availability of Funds

Chapter 17 covers the obligations of all actors in the open banking ecosystem: ASPSPs (account-servicing PSPs such as banks), PISPs (payment initiation service providers), AISPs (account information service providers), and CBPIIs (card-based payment instrument issuers).

ASPSPs must provide non-discriminatory access to PISPs and AISPs on the same terms as direct customer access. Dedicated interfaces (APIs) are required; firms may apply for an exemption from the contingency mechanism if criteria are met. **(SCA-RTS Arts. 30–33; PSRs 2017 Regs 68–70, 98–103)**

See [[psr-open-banking-pisp-aisp]] for the full framework.

---

## Chapter 18 — Operational and Security Risks

All PSPs must establish and maintain a framework with appropriate mitigation measures and control mechanisms for operational and security risks (reg 98 PSRs 2017). The framework must be proportionate to size and complexity.

**Annual assessment:** PSPs must provide the FCA at least annually with an updated and comprehensive assessment of operational and security risks and the adequacy of mitigation measures. **(Approach Document §18.2)**

**EBA Guidelines:** PSPs are directed to comply with the EBA Guidelines on security measures for operational and security risks of payment services under PSD2 (issued 12 December 2017; applied under SUP 16.13.12). **(Approach Document §18.3)**

**Outsourcing:** PSPs retain full regulatory responsibility for all activities, including those carried out by agents and outsourced providers. Cannot delegate regulatory accountability. Must include outsourcing risks in the risk framework. **(Approach Document §18.9–18.13)**

---

## Chapter 20 — Authentication (SCA)

Strong customer authentication (SCA) is required for electronic payment transactions and online account access (reg 100 PSRs 2017). The SCA-RTS specifies the three-factor requirement, dynamic linking, and nine categories of exemption.

See [[psr-sca-authentication]] for the full framework.

---

## Key Points for Agents

- The FCA Approach Document is the FCA's primary interpretive guidance for PSRs/EMRs obligations. It does not override the legislation but represents the FCA's enforcement position.
- Five firm types: Authorised PI, Small PI, Authorised EMI, Small EMI, RAISP. Different obligations apply to each — in particular, Small PIs/EMIs have reduced capital obligations and may have different reporting requirements.
- **Safeguarding** (Ch 10), **SCA** (Ch 20), **regulatory reporting** (Ch 13), and **open banking** (Ch 17) are each complete regulatory frameworks with no equivalents elsewhere in the wiki — see dedicated concept pages.
- The FCA can adjust capital requirements by ±20% based on risk profile assessment (Ch 9).
- All PSPs must submit an annual operational and security risk assessment to the FCA; major incidents require a 4-hour initial notification.

## Related Articles

- [[safeguarding-pis-emis]]
- [[psr-capital-requirements]]
- [[psr-sca-authentication]]
- [[psr-regulatory-reporting]]
- [[psr-open-banking-pisp-aisp]]
- [[psr-unauthorised-transaction-liability]]
- [[wind-down-planning]]
- [[operational-resilience]]
- [[agent-distributor-oversight]]
- [[aml-ctf-framework]]
