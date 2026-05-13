export type ChangelogEntry = {
  date: string;
  title: string;
  summary: string;
  links?: { label: string; href: string }[];
};

export const changelogEntries: ChangelogEntry[] = [
  {
    date: "2026-05-06",
    title: "Site refresh",
    summary:
      "Warm light visual update, sharper typography hierarchy, real example query from the wiki, and an audience line for AI engineers.",
  },
  {
    date: "2026-05-06",
    title: "Coverage expanded to 150 articles",
    summary:
      "CASS, MAR, APP fraud reimbursement (PSR PS23/3) and the full UK GDPR / DUA Act 2025 review added.",
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
