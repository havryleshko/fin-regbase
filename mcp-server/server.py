"""
fin-regbase MCP server.

Exposes the wiki as four tools:
  - list_pages         — filtered catalogue of all pages
  - get_page           — full content of a specific page
  - search_regulations — BM25 keyword search across all pages
  - get_related        — related pages for a given page

Run with:
  uv run server.py

Or register in claude_desktop_config.json / .claude/settings.json.
WIKI_PATH env var overrides the default (../wiki relative to this file).
"""

import os
from pathlib import Path

from mcp.server.fastmcp import FastMCP

from wiki_index import WikiIndex, WikiPage
from search import WikiSearch

# ---------------------------------------------------------------------------
# Initialise index
# ---------------------------------------------------------------------------

WIKI_PATH = os.environ.get(
    "WIKI_PATH",
    str(Path(__file__).parent.parent / "wiki"),
)

_index = WikiIndex(WIKI_PATH)
_search = WikiSearch(_index)

# ---------------------------------------------------------------------------
# Server
# ---------------------------------------------------------------------------

mcp = FastMCP(
    "fin-regbase",
    instructions=(
        "Financial regulations knowledge base for UK fintech. "
        "Use search_regulations to find relevant pages, then get_page for full content. "
        f"{_index.page_count()} pages indexed covering Consumer Duty, AML/CTF, "
        "Sanctions, SM&CR, MiFID II, PSR/E-money, and UK GDPR."
    ),
)

# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------


def _page_summary(page: WikiPage, include_key_points: bool = False) -> dict:
    out = {
        "path": page.path,
        "title": page.title,
        "jurisdiction": page.jurisdiction,
        "regulator": page.regulator,
        "regulation": page.regulation,
        "status": page.status,
        "effective_date": page.effective_date,
        "last_updated": page.last_updated,
        "tags": page.tags,
        "related_count": len(page.related),
    }
    if include_key_points:
        out["key_points"] = page.key_points
    return out


# ---------------------------------------------------------------------------
# Tools
# ---------------------------------------------------------------------------


@mcp.tool()
def list_pages(
    jurisdiction: str = "",
    regulator: str = "",
    regulation: str = "",
    tags: list[str] | None = None,
    status: str = "",
) -> list[dict]:
    """
    Return a filtered catalogue of wiki pages with metadata.

    Use this to orient yourself before fetching full page content.
    All filters are optional and combinable. String filters are
    case-insensitive substring matches. Tags filter requires ALL
    listed tags to be present on the page.

    Args:
        jurisdiction: e.g. "UK"
        regulator: e.g. "FCA", "ICO"
        regulation: substring match, e.g. "Consumer Duty", "MLR"
        tags: list of tags that must ALL be present, e.g. ["AML", "CDD"]
        status: "current", "pending", or "superseded"
    """
    results = []
    for page in _index.pages:
        if jurisdiction and jurisdiction.lower() not in page.jurisdiction.lower():
            continue
        if regulator and regulator.lower() not in page.regulator.lower():
            continue
        if regulation and regulation.lower() not in page.regulation.lower():
            continue
        if status and status.lower() != page.status.lower():
            continue
        if tags:
            page_tags_lower = [t.lower() for t in page.tags]
            if not all(t.lower() in page_tags_lower for t in tags):
                continue
        results.append(_page_summary(page))
    return results


@mcp.tool()
def get_page(path: str) -> dict:
    """
    Fetch the full content of a specific wiki page.

    Returns metadata, key points (pre-parsed from the Key Points for Agents
    section), and the full Markdown body. Use list_pages or search_regulations
    to discover valid paths first.

    Args:
        path: relative path, e.g. "concepts/customer-due-diligence.md"
    """
    page = _index.get(path)
    if not page:
        return {"error": f"Page not found: {path}"}

    return {
        "path": page.path,
        "metadata": {
            "title": page.title,
            "jurisdiction": page.jurisdiction,
            "regulator": page.regulator,
            "regulation": page.regulation,
            "status": page.status,
            "effective_date": page.effective_date,
            "last_updated": page.last_updated,
            "tags": page.tags,
            "sources": page.sources,
            "related": page.related,
        },
        "key_points": page.key_points,
        "content": page.content,
    }


@mcp.tool()
def search_regulations(
    query: str,
    jurisdiction: str = "",
    regulator: str = "",
    tags: list[str] | None = None,
    limit: int = 5,
) -> list[dict]:
    """
    BM25 keyword search across all wiki pages.

    Returns ranked results with metadata and key points — fetch the full
    page with get_page if you need the complete content. Title matches
    are weighted highest, then tags and key points, then body text.

    Args:
        query: natural language or keyword query, e.g. "beneficial ownership threshold"
        jurisdiction: optional pre-filter, e.g. "UK"
        regulator: optional pre-filter, e.g. "FCA"
        tags: optional pre-filter — pages must match ALL listed tags
        limit: number of results to return (default 5, max 20)
    """
    limit = min(limit, 20)

    # pre-filter candidates if filters are given
    if jurisdiction or regulator or tags:
        candidates = list_pages(
            jurisdiction=jurisdiction,
            regulator=regulator,
            tags=tags,
        )
        candidate_paths = {c["path"] for c in candidates}
    else:
        candidate_paths = None

    raw_results = _search.search(query, limit=limit * 3 if candidate_paths else limit)

    results = []
    for page, score in raw_results:
        if candidate_paths is not None and page.path not in candidate_paths:
            continue
        results.append({
            **_page_summary(page, include_key_points=True),
            "relevance_score": score,
        })
        if len(results) >= limit:
            break

    return results


@mcp.tool()
def get_related(path: str, include_key_points: bool = True) -> list[dict]:
    """
    Return the related pages for a given wiki page.

    Uses the `related:` frontmatter field. Useful for traversing the wiki
    graph after an initial get_page call — avoids multiple round trips.

    Args:
        path: relative path of the source page, e.g. "concepts/customer-due-diligence.md"
        include_key_points: whether to include parsed key points in results (default true)
    """
    source = _index.get(path)
    if not source:
        return [{"error": f"Page not found: {path}"}]

    results = []
    for related_path in source.related:
        # frontmatter stores paths like "concepts/customer-due-diligence.md"
        # strip any leading path prefix variants
        clean = related_path.lstrip("./")
        page = _index.get(clean)
        if page:
            results.append(_page_summary(page, include_key_points=include_key_points))
        else:
            results.append({"path": related_path, "error": "not found in index"})

    return results


# ---------------------------------------------------------------------------
# Entrypoint
# ---------------------------------------------------------------------------

if __name__ == "__main__":
    mcp.run()
