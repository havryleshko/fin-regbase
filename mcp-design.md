# fin-regbase MCP Server — Design Document

**Status:** Design phase  
**Author:** Alex Havryleshko  
**Date:** 2026-04-17

---

## What This Is

An MCP (Model Context Protocol) server that exposes the `fin-regbase` wiki as a set of native tools for AI agents. Instead of an agent reading `wiki/index.md` and fetching pages manually, it calls structured tools and gets citation-ready responses back.

The server is a thin layer over the existing Markdown wiki — no database, no vector store, no embeddings. The wiki is the source of truth. The server makes it queryable.

---

## Why Now

The wiki has 76 pages covering Consumer Duty, AML/CTF, Sanctions, SM&CR, MiFID II, PSR/E-money, and UK GDPR. That's enough content to be genuinely useful to a production agent. The current v1 retrieval pattern (agent reads `index.md`, identifies pages, fetches each one) works but has friction:

- The agent must know to start at `index.md`
- Full page reads use context window whether the agent needs 10% or 100% of the content
- No filtering — the agent gets everything or nothing
- No structured interface — one integration pattern per consumer

The MCP server solves all four. Once it's live, every future ingest (CONC, PSR APP fraud, MiCA) is immediately queryable by any MCP-compatible agent with no integration work.

---

## Architecture

```
fin-regbase/
├── wiki/                   # Existing wiki — unchanged, still the source of truth
│   ├── index.md
│   ├── concepts/
│   ├── summaries/
│   └── derived/
├── mcp-server/
│   ├── server.py           # MCP server entrypoint
│   ├── wiki_index.py       # Parses all frontmatter at startup, builds in-memory index
│   ├── search.py           # Keyword + tag search over the index
│   ├── tools.py            # Tool definitions and handlers
│   ├── pyproject.toml      # Dependencies (mcp, pyyaml, python-frontmatter)
│   └── README.md           # How to run and configure
└── mcp-design.md           # This file
```

**No database.** No vector store. The in-memory index is rebuilt at startup by parsing YAML frontmatter from all `.md` files. At 76 pages this takes ~50ms. At 300 pages it will still be fast enough. If semantic search becomes necessary it can be added as a separate `search_semantic` tool without changing the rest.≠

---

## Transport

**Primary: stdio**  
Works natively with Claude Desktop and Claude Code. Zero configuration beyond pointing at the server executable. This is the right starting point.

**Future: HTTP/SSE**  
Required for LangGraph and other non-Claude agent frameworks. Add as a second transport option using FastMCP's built-in support. Does not change the tool definitions — same tools, different wire format.

---

## Tools

### `list_pages`

Returns the full catalogue of wiki pages with metadata. The agent uses this to orient itself before fetching specific content.

**Input:**
```json
{
  "jurisdiction": "UK",         // optional — filter by jurisdiction
  "regulator": "FCA",           // optional — filter by regulator
  "regulation": "Consumer Duty", // optional — substring match on regulation field
  "tags": ["AML", "CDD"],       // optional — pages must match ALL tags
  "status": "current"           // optional — current | pending | superseded
}
```

**Output:** Array of page summaries:
```json
[
  {
    "path": "concepts/customer-due-diligence.md",
    "title": "Customer Due Diligence",
    "regulation": "Money Laundering Regulations 2017",
    "regulator": "FCA",
    "jurisdiction": "UK",
    "status": "current",
    "effective_date": "2017-06-26",
    "last_updated": "2026-04-13",
    "tags": ["AML", "CDD", "KYC", "MLRs", "beneficial-ownership"],
    "related_count": 6
  }
]
```

**Use case:** Agent working on an AML question calls `list_pages(regulator="FCA", tags=["AML"])` to get a shortlist before deciding which pages to fetch in full.

---

### `get_page`

Fetches the full content of a specific wiki page.

**Input:**
```json
{
  "path": "concepts/customer-due-diligence.md"
}
```

**Output:**
```json
{
  "path": "concepts/customer-due-diligence.md",
  "metadata": { ...full frontmatter... },
  "content": "...full Markdown body...",
  "key_points": [
    "Standard CDD must be applied when...",
    "Beneficial ownership threshold is 25%...",
    "..."
  ]
}
```

`key_points` is parsed from the `## Key Points for Agents` section — extracted automatically so agents that only need the summary don't have to parse the full body.

---

### `search_regulations`

Free-text + tag search across all wiki pages. Returns ranked results with page metadata and key points — no full body unless the agent follows up with `get_page`.

**Input:**
```json
{
  "query": "beneficial ownership threshold",  // keyword search over title + body
  "jurisdiction": "UK",                       // optional filter
  "tags": ["AML"],                            // optional filter
  "limit": 5                                  // default 5, max 20
}
```

**Ranking logic (v1 — no embeddings):**
1. Title match (highest weight)
2. Tag exact match
3. `## Key Points for Agents` section match
4. Body keyword frequency

**Output:**
```json
[
  {
    "path": "concepts/customer-due-diligence.md",
    "title": "Customer Due Diligence",
    "score": 0.91,
    "key_points": ["..."],
    "metadata": { ...frontmatter... }
  }
]
```

---

### `get_related`

Given a page path, returns its related pages (parsed from the `related:` frontmatter field), with their metadata and key points. Lets an agent traverse the wiki graph without issuing multiple `get_page` calls.

**Input:**
```json
{
  "path": "concepts/customer-due-diligence.md",
  "include_key_points": true   // default true
}
```

**Output:** Array of related page summaries, same shape as `list_pages` output, plus `key_points` if requested.

---

## What the Server Does NOT Do

- **No semantic / embedding search.** V1 is keyword + tag. If this becomes a bottleneck after the wiki grows past ~200 pages, add `search_semantic` as an additive tool.
- **No write access.** The server is read-only. All wiki updates go through Claude Code + the CLAUDE.md workflow. The server never touches `raw/` or `wiki/`.
- **No authentication.** Runs locally. If exposed over HTTP to a remote agent, add a bearer token as a config option — but that's an ops concern, not a design concern.
- **No caching layer.** The in-memory index is rebuilt at startup. For a local server this is fine. Hot reload (detect file changes and re-index) is a nice-to-have, not v1.

---

## Implementation Plan

### Phase 1 — Core server (v1, local stdio)

1. `wiki_index.py` — parse all `.md` files in `wiki/`, extract YAML frontmatter + Key Points section, build in-memory index
2. `search.py` — keyword ranker over the index
3. `tools.py` — implement `list_pages`, `get_page`, `search_regulations`, `get_related`
4. `server.py` — wire tools into MCP server with stdio transport using the `mcp` Python SDK
5. Smoke test: connect via Claude Desktop, run 5 representative queries against current wiki content

### Phase 2 — HTTP transport

6. Add FastMCP HTTP/SSE transport option, controlled by a `--transport` flag
7. Test with a LangGraph agent calling the tools directly
8. Document the integration pattern in `mcp-server/README.md`

### Phase 3 — Quality improvements (after CONC ingest)

9. Relevance tuning on `search_regulations` once the wiki is larger
10. Hot reload — watch `wiki/` for file changes and re-index without restart
11. Optional: `get_jurisdiction_summary` tool — returns a digest of all pages for a given jurisdiction (useful for agents that need to orient before querying)

---

## Dependencies

```toml
[project]
name = "fin-regbase-mcp"
version = "0.1.0"
requires-python = ">=3.11"

[project.dependencies]
mcp = ">=1.0"
python-frontmatter = ">=1.1"
pyyaml = ">=6.0"
```

That's it. No LangChain, no vector DB client, no HTTP framework beyond what `mcp` provides.

---

## Integration

### Claude Desktop
Add to `claude_desktop_config.json`:
```json
{
  "mcpServers": {
    "fin-regbase": {
      "command": "python",
      "args": ["/path/to/fin-regbase/mcp-server/server.py"],
      "env": {
        "WIKI_PATH": "/path/to/fin-regbase/wiki"
      }
    }
  }
}
```

### Claude Code
Add to `.claude/settings.json`:
```json
{
  "mcpServers": {
    "fin-regbase": {
      "command": "python",
      "args": ["mcp-server/server.py"]
    }
  }
}
```

### LangGraph (Phase 2)
```python
from langchain_mcp_adapters.client import MultiServerMCPClient

async with MultiServerMCPClient({
    "fin-regbase": {
        "url": "http://localhost:8000/sse",
        "transport": "sse"
    }
}) as client:
    tools = client.get_tools()
```

---

## Open Questions

| Question | Options | Lean |
|---|---|---|
| Key Points parsing — regex or section-aware Markdown parser? | Regex on `## Key Points for Agents` header | Regex — simpler, frontmatter already parsed with `python-frontmatter` |
| `search_regulations` ranking — pure keyword or BM25? | Keyword frequency / BM25 | BM25 via `rank_bm25` library — one extra dependency, meaningfully better results |
| Hot reload — watchdog or restart? | `watchdog` library | Skip for v1, add in Phase 3 |
| Should `get_page` return raw Markdown or parsed sections? | Raw Markdown | Raw — agents can read Markdown; parsed sections add complexity without clear benefit |
| uv or pip for dependency management? | uv | uv — faster, handles virtual envs cleanly, consistent with modern Python tooling |

---

## Success Criteria

Phase 1 is done when:
- `search_regulations("what are the CDD trigger conditions")` returns `concepts/customer-due-diligence.md` as the top result
- `get_page("concepts/consumer-duty-overview.md")` returns correctly parsed key points
- `list_pages(regulator="FCA", tags=["Consumer Duty"])` returns the correct 10 Consumer Duty concept pages
- Claude Desktop can call all four tools without error
- A Claude Code agent session starting from zero can answer "What is the beneficial ownership threshold under UK AML rules?" using only MCP tool calls (no direct file reads)
