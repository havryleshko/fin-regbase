# fin-regbase Schema

## What this wiki is
A knowledge base for financial regulations, structured for consumption by AI agents
operating in fintech. Every article must be accurate, citation-backed, and structured
for machine readability. Human curator: Alex Havryleshko. Quality standard: CISI-level
accuracy, FCA-grade citation discipline.

## Directions

Every article belongs to one of three regulatory directions. This is the primary
structural dimension of the wiki — it governs how content is organised, how eval
questions are tagged, and what to prioritise when expanding to new jurisdictions.

| Direction | Abbreviation | Scope |
|-----------|-------------|-------|
| **B2C** | `b2c` | Consumer-facing regulation: conduct, disclosure, complaints, vulnerability, consumer credit, financial promotions to retail customers |
| **B2B** | `b2b` | Business-facing regulation: AML/KYC, sanctions, governance and controls, SM&CR, operational resilience, systems and controls |
| **Investment** | `investment` | Investment regulation: suitability, appropriateness, best execution, client assets, market conduct, cryptoassets, research and inducements |

Some articles span directions (e.g. Consumer Duty touches B2C and Investment for COBS-regulated firms).
Use the primary direction. Add a second `direction` tag only if a secondary direction is genuinely load-bearing.

## Article format

Every wiki article must include YAML frontmatter:

```yaml
---
title: "FCA Consumer Duty — Products and Services Outcome"
jurisdiction: UK
regulator: FCA
regulation: Consumer Duty (PS22/9)
direction: b2c           # b2c | b2b | investment
status: current         # current | superseded | pending
effective_date: 2023-07-31
last_updated: YYYY-MM-DD
sources:
  - "FCA PS22/9 §4.1–4.3"
  - "FCA FG22/5 p.18"
tags: [consumer-duty, products-services, outcomes, UK, FCA]
related: [consumer-duty-overview.md, consumer-understanding-outcome.md]
---
```

## Body conventions

- Write in plain English. Avoid jargon unless the jargon IS the regulation.
- Every factual claim must cite its source inline: **(PS22/9 §4.2)**
- Use H2 for major sections, H3 for subsections.
- End every article with a `## Key Points for Agents` section:
  a bulleted list of the 3–5 most important facts an agent needs to know,
  written as unambiguous statements.
- End every article with a `## Related Articles` section with [[wikilinks]].

## Operations

### Ingest
When I drop a source into raw/ and say "ingest [filename]":
1. Read the source document fully.
2. Discuss key takeaways with me before writing anything.
3. Write a summary page in wiki/summaries/
4. Create or update concept pages in wiki/concepts/
5. Update wiki/index.md
6. Append an entry to wiki/log.md: `## [YYYY-MM-DD] ingest | [Document Title]`
7. Note any contradictions with existing wiki pages explicitly.
A single source may touch 5–15 wiki pages. That is expected and correct.

### Query
When I ask a compliance question:
1. Call `search_regulations` (MCP) with relevant keywords and tag filters to find candidate pages.
2. Call `get_page` (MCP) on the top results to retrieve full content and key points.
3. If a result has useful related pages, call `get_related` (MCP) to traverse the wiki graph.
4. Synthesise an answer with inline citations.
5. Ask me: "Should I file this answer as a wiki page in wiki/derived/?"
Good answers about complex questions should almost always be filed.

**MCP tools available (fin-regbase server):**
- `search_regulations(query, tags, jurisdiction, limit)` — BM25 search, returns key points + metadata
- `get_page(path)` — full content of a specific page
- `list_pages(tags, regulator, jurisdiction, status)` — filtered catalogue
- `get_related(path)` — related pages from frontmatter graph

Direct file reads (`wiki/index.md`, individual pages) are the fallback if the MCP server is unavailable.

### Lint
When I say "run lint":
1. Scan all wiki pages for: contradictions, stale claims, orphan pages,
   missing cross-references, concepts mentioned but lacking their own page.
2. Report findings as a structured list.
3. Propose fixes. Wait for my approval before making changes.
4. Append a lint entry to wiki/log.md.

## Citation format
Always cite the specific document, section, and paragraph.
Good: (FCA PS22/9 §7.4, para 3)
Bad: (FCA Consumer Duty)

## Citation sourcing — never from memory

Every rule number, article number, section reference, or statutory provision written
anywhere in this repo — wiki pages, eval questions, derived answers, log entries —
must be verified against a source file before being written down.

**Permitted sources (in order of preference):**
1. The raw source document in `raw/` — read the relevant pages directly
2. An existing wiki page that cites that rule with inline citation
3. MCP `get_page` or `get_related` on a relevant wiki page

**Never acceptable:**
- Rule numbers recalled from training data or context without reading a source
- Assuming a rule number is correct because it "looks right"
- Transposing digits, suffixes (R/G/E/EU), or section numbers from memory

**For eval questions specifically:** Every `required_citations` entry must be verified
against a wiki page or source PDF before the question is committed. If you cannot
verify a citation, write a `notes_for_reviewer` flag and leave the citation blank
rather than guessing. A wrong citation in an eval question corrupts the scoring
baseline — it causes correct wiki answers to be marked as failures.
