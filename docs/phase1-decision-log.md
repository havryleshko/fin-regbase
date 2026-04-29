# Phase 1 Decision Log

Date: 2026-04-29
Owner: Alex Havryleshko
Scope: Phase 1 (Decisions and Validation Gate) from `website-execution-plan.md`

## 1) Canonical Project Location and Ownership

- Decision: Use in-repo website app location at `fin-regbase/finregbase-web/`.
- Deployment ownership: project owner maintains Vercel project, domain binding (`finregbase.com`), and release approvals.
- Gate result: location/ownership is explicit before scaffolding.

## 2) MCP Install Path Validation

Design-targeted command tested:

```bash
uvx --from git+https://github.com/ohavryleshko/fin-regbase fin-regbase-mcp
```

Environment:

- OS: darwin 25.3.0
- Tool: `uvx 0.11.7`

Observed result:

- Command failed.
- Error:
  - `Failed to resolve --with requirement`
  - `Git operation failed`

Objective pass criteria assessment:

- Command succeeds on clean environment: **Failed**
- MCP server starts without manual edits: **Not met (blocked by command failure)**
- Sample compliance query returns cited response: **Not met (blocked by command failure)**

Phase 1 outcome:

- `uvx --from git+...` is **not** canonical for launch copy at this time.
- Canonical onboarding path for launch is fallback: `git clone` + `uv run`.

## 3) Onboarding Copy Freeze Inputs

Final install variant (frozen for Phase 2 implementation):

1. Install `uv`
2. Clone repo
3. Configure MCP client using local `uv run` command
4. Ask a compliance question

Canonical setup seed for snippets/README:

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

CTA/copy freeze:

- Primary action remains config copy + connect.
- Setup wording must reference local `uv run` flow until a passing `uvx --from git+...` path exists.
- README install section must match site wording and command structure exactly.

## 4) Design Alignment Validation (`website-design.md`)

- Single-scroll site model preserved: **Yes**
- Primary action “copy MCP config and connect” preserved: **Yes**
- Local MCP transport via `uv` preserved: **Yes**
- “60 seconds to connected” supportable by tested path: **Conditionally yes** (with local clone/run instructions)
- Open-source/no-sign-up CTA semantics preserved: **Yes**

## Phase 1 Completion Decision

- Status: Complete
- Timestamp (UTC+1): 2026-04-29 11:18
- Handoff to Phase 2:
  - Location: `fin-regbase/finregbase-web/`
  - Install path: `git clone` + `uv run`
  - Canonical source: this file (`docs/phase1-decision-log.md`)
