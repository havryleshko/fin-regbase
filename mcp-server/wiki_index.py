"""
Loads and indexes all wiki pages from the fin-regbase wiki directory.

Parses YAML frontmatter and extracts the Key Points for Agents section
from each page. Skips index.md, log.md, and anything under wiki/raw/.
"""

import re
from dataclasses import dataclass, field
from pathlib import Path

import frontmatter


@dataclass
class WikiPage:
    path: str           # relative to wiki root, e.g. "concepts/customer-due-diligence.md"
    title: str
    jurisdiction: str
    regulator: str
    regulation: str
    status: str
    effective_date: str
    last_updated: str
    tags: list[str]
    related: list[str]
    sources: list[str]
    key_points: list[str]
    content: str        # full Markdown body, frontmatter stripped


_SKIP_FILES = {"index.md", "log.md"}
_SKIP_DIRS = {"raw"}

_KEY_POINTS_RE = re.compile(
    r"##\s+Key Points for Agents\s*\n(.*?)(?=\n##\s|\Z)",
    re.DOTALL,
)
_BULLET_RE = re.compile(r"^[-*]\s+(.+)$", re.MULTILINE)


def _extract_key_points(content: str) -> list[str]:
    match = _KEY_POINTS_RE.search(content)
    if not match:
        return []
    return [p.strip() for p in _BULLET_RE.findall(match.group(1))]


def _parse_page(path: Path, wiki_root: Path) -> WikiPage | None:
    try:
        post = frontmatter.load(str(path))
    except Exception:
        return None

    meta = post.metadata
    content = post.content
    relative = str(path.relative_to(wiki_root))

    return WikiPage(
        path=relative,
        title=str(meta.get("title", "")),
        jurisdiction=str(meta.get("jurisdiction", "")),
        regulator=str(meta.get("regulator", "")),
        regulation=str(meta.get("regulation", "")),
        status=str(meta.get("status", "")),
        effective_date=str(meta.get("effective_date", "")),
        last_updated=str(meta.get("last_updated", "")),
        tags=list(meta.get("tags", [])),
        related=list(meta.get("related", [])),
        sources=list(meta.get("sources", [])),
        key_points=_extract_key_points(content),
        content=content,
    )


class WikiIndex:
    def __init__(self, wiki_path: str | Path):
        self.wiki_root = Path(wiki_path).resolve()
        self.pages: list[WikiPage] = []
        self._path_map: dict[str, WikiPage] = {}
        self._load()

    def _load(self) -> None:
        for md_file in sorted(self.wiki_root.rglob("*.md")):
            # skip non-article files
            if md_file.name in _SKIP_FILES:
                continue
            # skip anything inside wiki/raw/
            if any(part in _SKIP_DIRS for part in md_file.parts):
                continue

            page = _parse_page(md_file, self.wiki_root)
            if page:
                self.pages.append(page)
                self._path_map[page.path] = page

    def get(self, path: str) -> WikiPage | None:
        """Look up a page by its relative path."""
        return self._path_map.get(path)

    def page_count(self) -> int:
        return len(self.pages)
