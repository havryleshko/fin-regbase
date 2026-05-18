export type ChangelogEntry = {
  date: string;
  title: string;
  summary: string;
  links?: { label: string; href: string }[];
};

export const changelogEntries: ChangelogEntry[] = [
  {
    date: "2026-05-18",
    title: "Dodd-Frank Title X, Reg X (RESPA), Reg C (HMDA) — wiki at 182 articles",
    summary:
      "Three new US ingest sessions completed. Dodd-Frank Title X statutory text (165 pp) adds CFPB Bureau structure, enforcement powers, state-law preemption, UDAAP, and 18 enumerated consumer laws. Regulation X / RESPA (12 CFR Part 1024) adds Section 8 kickback prohibition, AfBA safe harbour, escrow account caps, error resolution 60-day adverse credit freeze, and loss mitigation dual-tracking prohibition. Regulation C / HMDA (12 CFR Part 1003) adds the full 38-field LAR dataset, coverage five-part test, partial exemption mechanics, ULI construction, multi-institution reporting rule, and APOR rate-spread calculation.",
    links: [
      {
        label: "Browse the wiki",
        href: "https://github.com/havryleshko/fin-regbase/tree/main/wiki",
      },
    ],
  },
  {
    date: "2026-05-14",
    title: "US Reg B, Reg V, and wiki at 171 articles",
    summary:
      "Equal Credit Opportunity (12 CFR Part 1002) and Fair Credit Reporting (12 CFR Part 1022) landed alongside Reg E and Reg Z. Public site coverage grid and hero copy updated.",
    links: [
      {
        label: "Browse the wiki",
        href: "https://github.com/havryleshko/fin-regbase/tree/main/wiki",
      },
    ],
  },
  {
    date: "2026-05-06",
    title: "Site refresh",
    summary:
      "Warm light visual update, sharper typography hierarchy, real example query from the wiki, and an audience line for AI engineers.",
  },
  {
    date: "2026-05-06",
    title: "Coverage depth (UK)",
    summary:
      "CASS, MAR, APP fraud reimbursement (PSR PS23/3), SYSC, and full UK GDPR including DUA Act 2025 alignment work in the wiki.",
    links: [
      {
        label: "Browse the wiki",
        href: "https://github.com/havryleshko/fin-regbase/tree/main/wiki",
      },
    ],
  },
  {
    date: "2026-04-30",
    title: "Demo embedded",
    summary:
      "Public demo of an agent answering a Consumer Duty question via MCP, hosted on YouTube.",
  },
  {
    date: "2026-04-29",
    title: "Site launched",
    summary:
      "Public landing page, MCP connect flow, coverage grid, and demo section. Free, open source, no sign-up.",
    links: [
      {
        label: "Repository",
        href: "https://github.com/havryleshko/fin-regbase",
      },
    ],
  },
];
