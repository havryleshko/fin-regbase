"""
BM25 search over the wiki index.

Title matches are weighted 3x, tag and key-point matches 2x, body 1x.
This keeps highly-specific regulatory concept pages ranked above generic
pages that happen to mention the query term in passing.
"""

import re

from rank_bm25 import BM25Okapi

from wiki_index import WikiIndex, WikiPage


def _tokenize(text: str) -> list[str]:
    return re.findall(r"\b\w+\b", text.lower())


class WikiSearch:
    def __init__(self, index: WikiIndex):
        self._pages = index.pages
        self._bm25 = self._build()

    def _build(self) -> BM25Okapi:
        corpus: list[list[str]] = []
        for page in self._pages:
            tokens = (
                _tokenize(page.title) * 3
                + _tokenize(" ".join(page.tags)) * 2
                + _tokenize(" ".join(page.key_points)) * 2
                + _tokenize(page.content)
            )
            corpus.append(tokens)
        return BM25Okapi(corpus)

    def search(
        self,
        query: str,
        limit: int = 5,
    ) -> list[tuple[WikiPage, float]]:
        """Return (page, score) pairs ranked by BM25 relevance."""
        tokens = _tokenize(query)
        scores = self._bm25.get_scores(tokens)
        ranked = sorted(enumerate(scores), key=lambda x: x[1], reverse=True)
        return [
            (self._pages[i], round(score, 4))
            for i, score in ranked[:limit]
            if score > 0
        ]
