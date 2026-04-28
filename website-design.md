# finregbase.com — Website Design Architecture

## Product in one sentence

A structured, citation-accurate financial regulations knowledge base that AI agents query via MCP — built for engineers building fintech agents.

---

## Core design decisions


| Decision        | Choice                        | Rationale                                                                                     |
| --------------- | ----------------------------- | --------------------------------------------------------------------------------------------- |
| Primary persona | Engineer building an AI agent | Compliance professionals are end-users of what the engineer builds, not visitors to this site |
| Primary action  | Copy MCP config and connect   | The site's job is to get the server running in their stack, not to explain regulations        |
| Business model  | Free and open source          | No auth, no paywall, no sign-up friction                                                      |
| MCP transport   | Local (stdio via uv)          | Industry norm — every major MCP server runs locally. Not a disadvantage.                      |
| Site structure  | Single scroll page            | No multi-page nav until there's content that genuinely needs it                               |
| Color mode      | Light                         | Signals serious fintech tool, not hacker project. Dark code blocks for contrast.              |
| Primary CTA     | "Copy config" → clipboard     | Instant, zero friction. One click to be connected.                                            |
| Secondary CTA   | "View on GitHub"              | Credibility, stars, community                                                                 |


---

## Tech stack


| Layer               | Choice                  |
| ------------------- | ----------------------- |
| Framework           | Next.js 15 (App Router) |
| Styling             | Tailwind CSS v4         |
| Components          | shadcn/ui               |
| Animation           | Framer Motion           |
| Syntax highlighting | Shiki                   |
| Deployment          | Vercel                  |
| Domain              | finregbase.com          |


References: exa.ai, context7.com — study their hero and demo section patterns, then differentiate on content.

---

## Page structure (single scroll)

### Section 1 — Hero

**Goal:** In 5 seconds, the developer understands what this is and why they'd want it.

```
[Headline]
Financial regulations knowledge base for AI agents.

[Subheadline]
91 structured, citation-accurate articles across UK FCA regulations —
queryable via MCP from any AI agent or development environment.

[Primary CTA]   [Secondary CTA]
Add to Claude    View on GitHub
```

**Design notes:**

- Light background, serious typography (Inter or Geist)
- No hero image — code/config block IS the visual
- Animated entry: headline fades up, subheadline follows, CTAs last (Framer Motion)
- Above the fold on 1440px desktop AND 390px mobile

---

### Section 2 — What it is (three pillars)

**Goal:** Answer the "but why not just RAG?" question without the developer having to ask it.

Three cards, horizontal on desktop, stacked on mobile:

```
[Card 1]                    [Card 2]                    [Card 3]
Compiled once,              Citation-accurate            Plain files,
queried many times          by design                    no lock-in

The LLM does synthesis      Every claim cites the        91 Markdown articles.
at ingest time — not        exact FCA rule, PS           Git history. No vector
on every agent call.        section, or paragraph.       store, no proprietary
Karpathy's wiki pattern     CISI-level accuracy          index. You own it.
applied to regulation.      standard.                    Forever.
```

**Design notes:**

- Clean card borders, subtle shadow, no icons (trust the copy)
- Framer Motion: scroll-triggered reveal, staggered left-to-right

---

### Section 3 — How to connect

**Goal:** Copy-paste config, 60 seconds to connected. This is the most important section.

```
[Section label]
Connect in 60 seconds

[Tabs]
Claude Desktop    |    Cursor    |    VS Code    |    Any MCP client

[Code block — Claude Desktop example]
{
  "mcpServers": {
    "fin-regbase": {
      "command": "uvx",
      "args": [
        "--from",
        "git+https://github.com/[username]/fin-regbase",
        "fin-regbase-mcp"
      ]
    }
  }
}

[Button]
Copy config   [clipboard icon]   ✓ Copied

[Below code block — 3 steps]
1. Install uv    →    2. Paste config    →    3. Ask your agent a compliance question
```

**Design notes:**

- Shiki for syntax highlighting, light theme (GitHub Light or similar)
- "Copy config" button copies to clipboard with a checkmark confirmation animation
- Tab switcher shows the right config format per client
- Steps below the block are small, inline, no icons — just numbered text
- This section should feel like the README of a great open source tool

**Technical note on the config:**
Currently the server requires cloning the repo locally. Before launch, explore whether `uvx --from git+https://...` works as a zero-clone install path — this would make the config genuinely copy-paste-and-go. If not, provide the `git clone` + `uv run` version with clear step numbering.

---

### Section 4 — What's inside

**Goal:** Show coverage and credibility. Prove this is a serious, current knowledge base.

```
[Section label]
91 articles across UK FCA regulations

[Coverage grid — 3 columns]

Consumer Duty          AML / CTF              Payment Services
PS22/9 · FG22/5        JMLSG Guidance         PSRs 2017 · EMRs 2011
FG21/1 · Dear CEO      MLRs 2017              Open Banking · SCA

SM&CR                  DISP                   CONC
Senior Managers        Complaints handling    Consumer Credit
Certification          Motor finance DCA      Financial Promotions
Conduct Rules          FOS jurisdiction       Creditworthiness

Sanctions              UK GDPR                MiFID II
OFSI · SAMLA 2018      Art. 5 · Art. 17       Product Governance
FCTR reports           Subject Access         Suitability
Asset freezes          Purpose Limitation     Conflicts (SYSC 10)

[Footer line]
Updated April 2026 · UK jurisdiction · FCA-grade citation discipline
```

**Design notes:**

- Grid of topic cards, light grey background per card
- Each card: topic name bold, sub-items in smaller text
- No links yet (wiki isn't browsable on the web) — just coverage signals
- Framer Motion: cards fade in on scroll

---

### Section 5 — Demo video

**Goal:** Show the thing working. Placeholder until video is ready.

```
[Section label]
See it in action

[Video placeholder — 16:9 ratio]
[Play button centred]
"Coming soon — agent querying fin-regbase via MCP"
```

**Design notes:**

- Placeholder: dark rounded rectangle, subtle border, play icon centred
- When video is ready: embed directly, no third-party player chrome
- Video will show: developer asks compliance question in Claude/Cursor → agent calls MCP tool → streamed answer with FCA citations

---

### Section 6 — Footer CTA

**Goal:** One last push for the developer who scrolled all the way down.

```
[Headline]
Start building compliant fintech agents.

[Subheadline]
Free. Open source. No sign-up.

[Primary CTA]   [Secondary CTA]
Add to Claude    View on GitHub

[Footer links]
GitHub · MIT License · Built by Alex Havryleshko
```

---

## Component inventory


| Component         | Purpose                     | Notes                          |
| ----------------- | --------------------------- | ------------------------------ |
| `HeroSection`     | Headline + CTAs             | Framer Motion entry animation  |
| `PillarCards`     | Three-pillar "what it is"   | Scroll-triggered stagger       |
| `ConnectSection`  | Tabbed config + copy button | Shiki highlight, clipboard API |
| `CoverageGrid`    | Regulations covered         | Static grid, scroll reveal     |
| `DemoPlaceholder` | Video slot                  | Swap for `<video>` when ready  |
| `FooterCTA`       | Final CTA + links           | Simple, no animation           |
| `NavBar`          | Logo + GitHub link          | Minimal, sticky, light bg      |


---

## Navigation bar

```
[Logo: fin-regbase]                              [GitHub ↗]
```

- Sticky top, light background, 1px bottom border on scroll
- No mobile hamburger menu — only two items, they fit inline
- Logo: wordmark only, no icon yet

---

## Typography


| Element        | Font             | Weight | Size                       |
| -------------- | ---------------- | ------ | -------------------------- |
| Headline       | Geist (or Inter) | 700    | 56px desktop / 36px mobile |
| Subheadline    | Geist            | 400    | 20px / 16px                |
| Body           | Geist            | 400    | 16px                       |
| Code           | Geist Mono       | 400    | 14px                       |
| Section labels | Geist            | 500    | 12px uppercase tracked     |


---

## Color palette


| Role           | Value     | Usage                  |
| -------------- | --------- | ---------------------- |
| Background     | `#FFFFFF` | Page background        |
| Surface        | `#F9FAFB` | Cards, code block bg   |
| Border         | `#E5E7EB` | Card borders, dividers |
| Text primary   | `#111827` | Headlines, body        |
| Text secondary | `#6B7280` | Subheads, captions     |
| Accent         | `#1D4ED8` | CTA buttons, links     |
| Accent hover   | `#1E40AF` | Button hover state     |
| Code bg        | `#F8F8F8` | Shiki block background |
| Success        | `#16A34A` | "Copied" checkmark     |


---

## Animation spec (Framer Motion)


| Element          | Animation                           | Trigger          |
| ---------------- | ----------------------------------- | ---------------- |
| Hero headline    | Fade up, 0.6s, ease-out             | On mount         |
| Hero subheadline | Fade up, 0.6s, 0.15s delay          | On mount         |
| Hero CTAs        | Fade up, 0.6s, 0.3s delay           | On mount         |
| Pillar cards     | Stagger fade up, 0.1s between       | Scroll into view |
| Coverage cards   | Stagger fade up, 0.05s between      | Scroll into view |
| Copy button      | Scale 0.97 on press, checkmark swap | On click         |
| NavBar border    | Fade in on scroll past 50px         | Scroll           |


No parallax, no scroll-jacking, no heavy GSAP. Framer Motion is the right ceiling for this site.

---

## Mobile behaviour


| Section       | Mobile adaptation                          |
| ------------- | ------------------------------------------ |
| Hero          | Single column, headline 36px, CTAs stacked |
| Pillar cards  | Stacked vertically                         |
| Connect tabs  | Scrollable horizontal tabs                 |
| Coverage grid | 2 columns → 1 column at 390px              |
| Footer CTA    | CTAs stacked                               |


---

## File structure (Next.js App Router)

```
finregbase-web/
├── app/
│   ├── layout.tsx          # Root layout, metadata, fonts
│   ├── page.tsx            # Single page — assembles all sections
│   └── globals.css         # Tailwind base
├── components/
│   ├── NavBar.tsx
│   ├── HeroSection.tsx
│   ├── PillarCards.tsx
│   ├── ConnectSection.tsx  # Tabs + Shiki code block + copy button
│   ├── CoverageGrid.tsx
│   ├── DemoPlaceholder.tsx
│   └── FooterCTA.tsx
├── lib/
│   └── config-snippets.ts  # MCP config strings per client type
├── public/
│   └── og-image.png        # Open Graph image for social sharing
├── package.json
└── next.config.ts
```

---

## Launch checklist

- Domain connected on Vercel (finregbase.com)
- OG image created (1200×630, for Twitter/LinkedIn previews)
- `uvx --from git+...` install path tested and working
- Config copy button tested on Chrome, Safari, Firefox
- Mobile tested at 390px (iPhone 14 Pro) and 768px (iPad)
- GitHub repo public and linked
- README updated with install instructions matching the site
- Demo video recorded and embedded (post-launch)

---

## What to build next (post-launch)


| Addition                           | When to add                                        |
| ---------------------------------- | -------------------------------------------------- |
| Browse the wiki (searchable index) | When you have 150+ articles                        |
| Changelog page                     | When you have 3+ meaningful version updates        |
| Remote hosted MCP endpoint         | When local setup friction becomes the #1 complaint |
| EU jurisdiction section            | When EU coverage reaches 20+ articles              |


