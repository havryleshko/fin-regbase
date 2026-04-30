export type ChangelogEntry = {
  date: string;
  title: string;
  summary: string;
  phase: string;
  links?: { label: string; href: string }[];
};

export const changelogEntries: ChangelogEntry[] = [
  {
    date: "2026-04-29",
    title: "Phase 1 decisions and install path freeze",
    summary:
      "Finalized project location and fallback local setup flow (`git clone` + `uv run`) after uvx-from-git validation failed.",
    phase: "Phase 1",
    links: [{ label: "Decision log", href: "/docs/phase1-decision-log.md" }],
  },
  {
    date: "2026-04-29",
    title: "Phase 2 foundation completed",
    summary:
      "Scaffolded Next.js App Router site structure, tokens, section placeholders, and canonical site metrics source.",
    phase: "Phase 2",
    links: [{ label: "Validation log", href: "/docs/phase2-validation-log.md" }],
  },
  {
    date: "2026-04-29",
    title: "Phase 3 core UX shipped",
    summary:
      "Implemented full single-scroll sections: hero, pillars, connect tabs/snippets/copy flow, coverage, demo section, and footer CTA.",
    phase: "Phase 3",
    links: [{ label: "Validation log", href: "/docs/phase3-validation-log.md" }],
  },
  {
    date: "2026-04-29",
    title: "Phase 4 and 5 hardening",
    summary:
      "Aligned setup copy/snippets, improved accessibility and reduced-motion behavior, and passed responsive/performance verification.",
    phase: "Phase 4-5",
    links: [{ label: "Validation log", href: "/docs/phase3-validation-log.md" }],
  },
  {
    date: "2026-04-29",
    title: "Phase 6 launch readiness",
    summary:
      "Configured Vercel/domain, metadata + OG pipeline, and link integrity checks with explicit propagation deferrals.",
    phase: "Phase 6",
    links: [{ label: "Validation log", href: "/docs/phase3-validation-log.md" }],
  },
  {
    date: "2026-04-30",
    title: "Phase 7 demo embed",
    summary:
      "Replaced demo placeholder with embedded local video and validated playback, responsiveness, and build/lint health.",
    phase: "Phase 7",
    links: [{ label: "Validation log", href: "/docs/phase3-validation-log.md" }],
  },
];
