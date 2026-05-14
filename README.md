# fin-regbase

Persistent, agent-readable UK financial regulation knowledge base.  
Source documents in `raw/` are compiled into citation-backed wiki pages in `wiki/`.

## Current repository snapshot (May 2026) — UK wiki v3 complete

- `wiki/concepts`: 80 pages
- `wiki/summaries`: 63 pages
- `wiki/derived`: 7 pages
- Total wiki articles: 150
- Source documents in `raw/`: 79

Primary coverage: Consumer Duty, AML/CTF and sanctions (FCG 2/3/7, JMLSG, FCTR 8, MLR 2017), APP fraud reimbursement (PSR PS23/3), CASS (client money and custody), COBS and MiFID conduct rules (COBS 2/3/4/9/9A/9B/10/10A/11, inducements, research unbundling, best execution, targeted support), CONC consumer credit (CONC 1–8), DISP complaints/FOS (DISP 1/2/3, motor finance DCA), SYSC governance and controls (SYSC 4/6/15A), MAR market abuse, PSR/E-Money, SM&CR, and UK GDPR (all major ICO guidance chapters, DUA Act 2025 amendments).

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
