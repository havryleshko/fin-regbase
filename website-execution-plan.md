# finregbase.com Master Execution Plan

## Objective

Build and launch a single-scroll `Next.js 15` website that converts developers into active `fin-regbase` MCP users via a low-friction config-copy workflow.

## Scope and Constraints

- Implement the architecture defined in `[website-design.md](website-design.md)`.
- Keep v1 as a single page with no auth, no pricing, and no multi-page IA.
- Optimize for primary action: copy MCP config and connect quickly.
- Resolve install-path uncertainty (`uvx --from git+...`) before writing final CTA/setup copy.
- Decide deployment location up front: `fin-regbase/finregbase-web` (same repo) or a dedicated `finregbase-web` repo/workspace.

## Phase 1: Decisions and Validation Gate (Blockers First)

- Confirm canonical project location and deployment ownership before scaffolding.
- Run explicit install-path test for `uvx --from git+https://...`:
  - If valid: keep zero-clone copy in snippets/CTA text.
  - If invalid: switch product copy to clone + `uv run` flow with explicit numbering.
- Freeze onboarding copy inputs only after install-path validation passes.

## Phase 2: Foundation and Project Setup

- Create web app scaffold under `finregbase-web/` with `Next.js 15 (App Router)`, `Tailwind v4`, `shadcn/ui`, `Framer Motion`, `Shiki`.
- Establish baseline structure from design spec:
  - `app/layout.tsx`, `app/page.tsx`, `app/globals.css`
  - `components/NavBar.tsx`, `components/HeroSection.tsx`, `components/PillarCards.tsx`, `components/ConnectSection.tsx`, `components/CoverageGrid.tsx`, `components/DemoPlaceholder.tsx`, `components/FooterCTA.tsx`
  - `lib/config-snippets.ts`
- Add a canonical content stats source (for example `lib/site-metrics.ts`) containing article count, update date, and jurisdiction label used by both UI and tests.
- Configure typography (Geist/Inter + Geist Mono), spacing, and shared design tokens matching the defined palette.

## Phase 3: Core UX Implementation (Section-by-Section)

- Implement `NavBar` as sticky minimal header with GitHub link and border-on-scroll behavior.
- Build hero section with final value proposition copy and dual CTAs.
- Build three-pillar section with responsive cards and scroll-triggered stagger animation.
- Build `ConnectSection` as highest-priority conversion unit:
  - Client tabs (`Claude Desktop`, `Cursor`, `VS Code`, `Any MCP client`)
  - Syntax-highlighted snippets via Shiki
  - Clipboard copy button with success feedback state
  - 3-step inline onboarding instructions
- Build `CoverageGrid` with regulation domains and credibility footer text.
- Add `DemoPlaceholder` (16:9 container, clear coming-soon state).
- Build footer CTA block and final links.

## Phase 4: Technical Validation and Content Hardening

- Validate each config snippet in real clients and normalize instructions in `lib/config-snippets.ts`.
- Ensure CTA labels and copy are consistent across hero/footer and aligned with final tested flow.
- Verify README install instructions mirror site instructions exactly.
- Ensure coverage numbers/date in UI are sourced from canonical stats file (no hard-coded duplicates).

## Phase 5: Responsive, Accessibility, and Performance QA

- Responsive verification at `390px`, `768px`, and desktop breakpoints.
- Keyboard and focus-state checks for tabs, copy button, and links.
- Motion sanity checks (no over-animation, reduced-motion-friendly behavior).
- Cross-browser clipboard and layout checks on Chrome, Safari, Firefox.
- Performance pass: optimize bundle/assets and preserve fast first paint (especially above-the-fold hero + connect section).

## Phase 6: Launch Preparation and Release

- Configure Vercel project and connect `finregbase.com`.
- Add metadata + social image pipeline (`public/og-image.png`, page metadata).
- Confirm repo visibility, GitHub link integrity, and MIT/license footer links.
- Ship v1 without embedded demo; keep placeholder until recording is production-ready.

## Phase 7: Post-Launch Iteration Backlog

- Record and embed demo video showing real MCP query/citation flow.
- Add web-browsable wiki/search when content volume justifies it.
- Add changelog/version transparency page after multiple meaningful updates.
- Evaluate remote MCP endpoint only if local setup friction becomes dominant feedback.

## Delivery Milestones

- M1: Project location + install path validated and copy constraints frozen.
- M2: App scaffold + design system + section shells.
- M3: All six content sections implemented with interactions.
- M4: Snippets/copy/README consistency validated against tested setup path.
- M5: Mobile/browser/accessibility QA passed.
- M6: Domain live on Vercel with launch checklist complete.

## Acceptance Criteria

- User can copy a client-specific config in one click and establish a successful MCP connection in <=60 seconds in at least one target client (`Claude Desktop`).
- Additional client snippets (`Cursor`, `VS Code`, `Any MCP client`) are syntactically valid and verified by smoke test.
- Hero first viewport includes all of: product class ("financial regulations knowledge base"), audience ("AI agents/developers"), scope ("UK FCA"), and action CTA.
- All required sections from the design spec are present and responsive.
- Responsive pass criteria: no overflow/clipped CTA/code on `390px`, usable tab interaction at `768px`, and full above-the-fold hero readability on desktop.
- Clipboard pass criteria: copy button works with visible success state in Chrome, Safari, and Firefox.
- Launch checklist items in the design doc are complete or explicitly deferred with owner/date.
- Site and README setup instructions are fully consistent.
- Coverage figures/date displayed in UI are loaded from a single canonical source file, not duplicated constants.

## Key Risks and Mitigations

- Install command inconsistency risk: mitigate by testing real installs early (before copy freeze).
- Scope creep risk (extra pages/features): enforce single-page v1 boundary.
- Trust/credibility risk from stale coverage text: tie coverage copy to a versioned source of truth before release.