# fin-regbase MCP Server

Exposes the fin-regbase financial regulations wiki as four MCP tools for AI agents.

## Tools

| Tool | What it does |
|---|---|
| `list_pages` | Filtered catalogue of all pages — jurisdiction, regulator, tags, status |
| `get_page` | Full content + key points for a specific page |
| `search_regulations` | BM25 keyword search across all pages |
| `get_related` | Related pages for a given page (from `related:` frontmatter) |

## Setup

```bash
cd mcp-server
uv sync
```

## Run (standalone test)

```bash
uv run mcp dev server.py
```

This opens the MCP Inspector in your browser — lets you call tools manually.

## Claude Desktop integration

Add to `~/Library/Application Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "fin-regbase": {
      "command": "uv",
      "args": ["run", "/absolute/path/to/fin-regbase/mcp-server/server.py"],
      "env": {
        "WIKI_PATH": "/absolute/path/to/fin-regbase/wiki"
      }
    }
  }
}
```

## Claude Code integration

Add to `.claude/settings.json` in the repo root:

```json
{
  "mcpServers": {
    "fin-regbase": {
      "command": "uv",
      "args": ["run", "mcp-server/server.py"]
    }
  }
}
```

## Environment variables

| Variable | Default | Description |
|---|---|---|
| `WIKI_PATH` | `../wiki` (relative to server.py) | Absolute path to the wiki directory |

## LangGraph / HTTP (Phase 2)

HTTP/SSE transport is not yet implemented. Coming in Phase 2.
