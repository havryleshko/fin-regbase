 "use client";

import { motion } from "framer-motion";
import { siteMetrics } from "@/lib/site-metrics";

const coverage = [
  {
    topic: "Consumer Duty",
    lines: ["PS22/9 · FG22/5", "FG21/1 · Dear CEO"],
  },
  {
    topic: "AML / CTF",
    lines: ["JMLSG Guidance", "MLRs 2017"],
  },
  {
    topic: "Payment Services",
    lines: ["PSRs 2017 · EMRs 2011", "Open Banking · SCA"],
  },
  {
    topic: "SM&CR",
    lines: ["Senior Managers", "Certification", "Conduct Rules"],
  },
  {
    topic: "DISP",
    lines: ["Complaints handling", "Motor finance DCA", "FOS jurisdiction"],
  },
  {
    topic: "CONC",
    lines: ["Consumer Credit", "Financial Promotions", "Creditworthiness"],
  },
  {
    topic: "Sanctions",
    lines: ["OFSI · SAMLA 2018", "FCTR reports", "Asset freezes"],
  },
  {
    topic: "UK GDPR",
    lines: ["Art. 5 · Art. 17", "Subject Access", "Purpose Limitation"],
  },
  {
    topic: "MiFID II",
    lines: ["Product Governance", "Suitability", "Conflicts (SYSC 10)"],
  },
] as const;

export function CoverageGrid() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
      <p className="text-xs font-medium uppercase tracking-[0.16em] text-text-secondary">
        What&apos;s inside
      </p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight text-text-primary md:text-4xl">
        {siteMetrics.articleCount} articles across UK FCA regulations
      </h2>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {coverage.map((card, index) => (
          <motion.article
            key={card.topic}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-xl bg-surface p-5"
          >
            <h3 className="text-base font-semibold text-text-primary">{card.topic}</h3>
            <ul className="mt-3 space-y-1 text-sm text-text-secondary">
              {card.lines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
      <p className="mt-5 text-sm text-text-secondary">
        Updated {siteMetrics.lastUpdated} · {siteMetrics.jurisdiction} jurisdiction ·
        FCA-grade citation discipline
      </p>
    </section>
  );
}
