# fin-regbase Schema

## What this wiki is
A knowledge base for financial regulations, structured for consumption by AI agents
operating in fintech. Every article must be accurate, citation-backed, and structured
for machine readability. Human curator: Alex Havryleshko. Quality standard: CISI-level
accuracy, FCA-grade citation discipline.

## Article format

Every wiki article must include YAML frontmatter:

```yaml
---
title: "FCA Consumer Duty — Products and Services Outcome"
jurisdiction: UK
regulator: FCA
regulation: Consumer Duty (PS22/9)
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
1. Read wiki/index.md to find relevant pages.
2. Read those pages in full.
3. Synthesise an answer with inline citations.
4. Ask me: "Should I file this answer as a wiki page in wiki/derived/?"
Good answers about complex questions should almost always be filed.

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
