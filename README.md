# fin-regbase

Persistent, agent-readable financial regulation knowledge base covering UK and US jurisdictions.  
Source documents in `raw/` are compiled into citation-backed wiki pages in `wiki/`.

## Current repository snapshot (May 2026) — UK wiki complete + US b2b foundation complete

- `wiki/concepts`: 114 pages
- `wiki/summaries`: 78 pages
- `wiki/derived`: 7 pages
- Total wiki articles: 199
- Source documents in `raw/`: 92

**UK coverage:** Consumer Duty, AML/CTF and sanctions (FCG 2/3/7, JMLSG, FCTR 8, MLR 2017), APP fraud reimbursement (PSR PS23/3), CASS (client money and custody), COBS and MiFID conduct rules (COBS 2/3/4/9/9A/9B/10/10A/11, inducements, research unbundling, best execution, targeted support), CONC consumer credit (CONC 1–8), DISP complaints/FOS (DISP 1/2/3, motor finance DCA), SYSC governance and controls (SYSC 4/6/15A), MAR market abuse, PSR/E-Money, SM&CR, UK GDPR (all major ICO guidance chapters, DUA Act 2025 amendments).

**US coverage — consumer (CFPB):** Dodd-Frank Title X (Public Law 111-203, §§1001–1100H) — CFPB Bureau structure and independence (Director 5-year for-cause term, Federal Reserve funding, FSOC override), covered person definition, 18 enumerated consumer laws, UDAAP prohibition, supervision framework (non-banks §1024, large depositories §1025, service providers §1026), state-law preemption, civil enforcement toolkit (CIDs, cease-and-desist, civil penalty tiers $5K/$25K/$1M per day), whistleblower protection, Durbin Amendment, SBLDC, remittance transfer disclosures; Regulation B / ECOA (12 CFR Part 1002) — prohibited bases, effects test, adverse action notifications, special purpose credit programs, Section 1071 small business lending data collection (20-field SBLDC, firewall, phased compliance July 2026–October 2027); Regulation C / HMDA (12 CFR Part 1003) — full 38-field LAR dataset, coverage five-part test, partial exemption (26 optional fields, CRA disqualifier), ULI construction (LEI + check digit), multi-institution reporting, APOR rate-spread calculation, AUS reporting, quarterly vs. annual submission thresholds; Regulation E / EFTA (12 CFR Part 1005) — consumer liability tiers, error resolution, overdraft opt-in, prepaid accounts, gift cards, remittance transfers (Subpart B); Regulation V / FCRA (12 CFR Part 1022) — affiliate marketing opt-out, medical information prohibition, furnisher accuracy/integrity duties, direct dispute investigation, risk-based pricing notices, human trafficking adverse information block; Regulation X / RESPA (12 CFR Part 1024) — Section 8 kickback prohibition (thing of value, pattern-of-conduct agreement), AfBA safe harbour (three mandatory conditions), GFE tolerance tiers, escrow account cushion cap (1/6 annual disbursements, aggregate accounting), error resolution 11 categories + 60-day adverse credit freeze, loss mitigation dual-tracking prohibition (37-day bright line); Regulation Z / TILA (12 CFR Part 1026) — open-end and closed-end credit disclosures, BNPL coverage, TRID mortgage disclosures, right of rescission.

**US coverage — b2b (AML/sanctions):** BSA General Provisions (31 CFR Part 1010) — MSB definitions, CDD rule §1010.230 (25% ownership + control prong, 16 excluded categories), five reporting regimes (CTR/SAR/Form 8300/CMIR/FBAR), travel rule ≥$3K, BOI reporting §1010.380 (Corporate Transparency Act, 23+ exemptions), 314(a)/(b) information sharing, correspondent account DD §1010.610, private banking PEP screening §1010.620, absolute shell bank prohibition §1010.630, 8 active Section 311 special measures (including Huione Group Oct 2025); BSA Rules for Banks (31 CFR Part 1020) — AML programme five-pillar requirement (including mandatory risk-based CDD/customer risk profiling/ongoing monitoring), CIP §1020.220 (4 required elements, documentary/non-documentary verification, failure-to-verify procedures), CTR exemptions §1020.315 (7 categories, FinCEN Form 110 designation, ineligible business list, SAR obligation survives), bank SAR §1020.320 ($5K threshold, 30/60-day deadlines, absolute confidentiality, subpoena refusal obligation), bank travel rule §1020.410; OFAC (31 CFR Part 501 + Framework for Compliance Commitments May 2019) — three reporting obligations (blocked property 10 business days/annual September 30, rejected transactions 10 business days, records on demand), 10-year retention, civil penalty 2×2 matrix (egregious × VSD; IEEPA max greater of $377,700 or 2× transaction), 11 General Factors, SCP five components (management commitment/risk assessment/internal controls/testing/training), 10 root causes of SCP breakdowns, licensing (general self-executing vs. specific by application), SDN delisting and mistaken-identity unblocking procedures.

## How this repo is used

- **Curator workflow**: add source PDFs or other reference files to `raw/`, then run ingest through an agent using rules in `CLAUDE.md`
- **Authoring target**: structured markdown pages with YAML frontmatter and inline citations
- **Query runtime**: AI agents query pages directly or use MCP tools exposed by `mcp-server/`
- **Audit trail**: ingest/query/lint sessions are tracked in `wiki/log.md`
- **Marketing site**: `finregbase-web/` is a Next.js 16 app (`npm install` then `npm run dev` from that directory; `predev`/`prebuild` run `scripts/gen-site-metrics.mjs`)

## MCP quick start

### 1) Install dependencies

```bash
cd mcp-server
uv sync
```

### 2) Run MCP server locally

```bash
uv run mcp dev server.py
```

### 3) Add MCP config (Cursor/Claude-compatible pattern)

Repo root includes `.mcp.json` as a local Cursor example. For other clients, use absolute paths:

```json
{
  "mcpServers": {
    "fin-regbase": {
      "command": "/absolute/path/to/uv",
      "args": [
        "run",
        "--directory",
        "/absolute/path/to/fin-regbase/mcp-server",
        "/absolute/path/to/fin-regbase/mcp-server/server.py"
      ]
    }
  }
}
```

Optional: set `WIKI_PATH` to the wiki directory if the server is not run from the default layout (see `mcp-server/README.md`).

## MCP tools

- `search_regulations(query, tags, jurisdiction, limit)`
- `get_page(path)`
- `list_pages(tags, regulator, jurisdiction, status)`
- `get_related(path)`

## Repository structure

```text
fin-regbase/
├── CLAUDE.md                # Schema and ingest/query/lint operating rules
├── README.md
├── .mcp.json                # Example MCP config (Cursor)
├── raw/                     # Immutable source documents (PDFs, markdown extracts, etc.)
├── wiki/
│   ├── index.md             # Master index for retrieval
│   ├── log.md               # Append-only operational log
│   ├── concepts/            # Concept-level regulation pages
│   ├── summaries/           # Source-document summaries
│   └── derived/             # Filed synthesis outputs
├── agents/                  # Reserved for runtime query clients (currently empty)
├── mcp-server/              # Python MCP server exposing wiki tools
├── evals/                   # Retrieval/content evaluation (questions.yaml, run_*.py, results/)
├── finregbase-web/          # Next.js marketing site
├── docs/                    # Validation and execution logs
├── design.md
├── mcp-design.md
├── website-design.md
└── website-execution-plan.md
```

## Non-negotiable rules

- `raw/` is immutable reference material.
- Wiki claims must be citation-backed to document/section granularity.
- Every page should follow schema and section conventions in `CLAUDE.md`.
