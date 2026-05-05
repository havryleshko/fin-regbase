# fin-regbase

Persistent, agent-readable UK financial regulation knowledge base.  
Source documents in `raw/` are compiled into citation-backed wiki pages in `wiki/`.

## Current repository snapshot (May 2026)

- `wiki/concepts`: 78 pages
- `wiki/summaries`: 60 pages
- `wiki/derived`: 7 pages
- Total wiki articles: 145
- Source PDFs in `raw/`: 54

Primary coverage includes Consumer Duty, AML/CTF and sanctions, CASS (client money and custody), COBS and MiFID conduct rules, CONC consumer credit, DISP complaints/FOS, SYSC governance and controls, MAR market abuse, PSR/E-Money, SM&CR, and UK GDPR.

## How this repo is used

- **Curator workflow**: add source PDFs to `raw/`, then run ingest through an agent using rules in `CLAUDE.md`
- **Authoring target**: structured markdown pages with YAML frontmatter and inline citations
- **Query runtime**: AI agents query pages directly or use MCP tools exposed by `mcp-server/`
- **Audit trail**: ingest/query/lint sessions are tracked in `wiki/log.md`

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
├── .mcp.json                # Local MCP config
├── raw/                     # Immutable source documents (PDFs)
├── wiki/
│   ├── index.md             # Master index for retrieval
│   ├── log.md               # Append-only operational log
│   ├── concepts/            # Concept-level regulation pages
│   ├── summaries/           # Source-document summaries
│   └── derived/             # Filed synthesis outputs
├── agents/                  # Runtime query wrappers/clients
├── mcp-server/              # Python MCP server exposing wiki tools
├── evals/                   # Retrieval/content evaluation scripts and results
├── finregbase-web/          # Next.js web app
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

