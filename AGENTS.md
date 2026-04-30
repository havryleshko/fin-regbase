# fin-regbase

See `CLAUDE.md` for wiki schema, ingest/query/lint operations, and citation rules.

## Cursor Cloud specific instructions

### Services

| Service | Directory | Run command |
|---|---|---|
| MCP Server (Python) | `mcp-server/` | `cd mcp-server && uv run python server.py` (stdio) or `uv run mcp dev server.py` (Inspector UI) |
| Next.js website | `finregbase-web/` | `cd finregbase-web && npm run dev` (port 3000) |
| Retrieval evals | `evals/` | `uv run --project mcp-server python evals/run_retrieval.py` |
| Content evals | `evals/` | Requires `ANTHROPIC_API_KEY` env var |

### Prerequisites

- `uv` must be on PATH (`$HOME/.local/bin/uv`). Install with `curl -LsSf https://astral.sh/uv/install.sh | sh` if missing.
- Node.js >=20 (pre-installed on Cloud VMs).
- No databases or external services needed for MCP server or website.

### Lint / Build / Test

- **Web lint**: `cd finregbase-web && npm run lint`
- **Web build**: `cd finregbase-web && npm run build`
- **MCP server test**: import `wiki_index.WikiIndex` and `search.WikiSearch` directly — no test framework, use the retrieval evals.
- **Retrieval evals**: run from repo root: `uv run --project mcp-server python evals/run_retrieval.py`

### Gotchas

- The MCP server runs via stdio (not HTTP). Use `uv run mcp dev server.py` to get the MCP Inspector browser UI for interactive testing.
- `WIKI_PATH` env var defaults to `../wiki` relative to `server.py` — no config needed when running from the repo root.
- The finregbase-web site is a static single-page marketing site with no backend API calls.
