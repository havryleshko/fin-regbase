 "use client";

import { motion } from "framer-motion";
import { siteMetrics } from "@/lib/site-metrics";

const pillars = [
  {
    title: "Compiled once, queried many times",
    body: "The LLM does synthesis at ingest time - not on every agent call. Karpathy's wiki pattern applied to regulation.",
  },
  {
    title: "Citation-accurate by design",
    body: "Every claim cites the exact FCA rule, PS section, or paragraph. CISI-level accuracy standard.",
  },
  {
    title: "Plain files, no lock-in",
    body: "Markdown articles. Git history. No vector store, no proprietary index. You own it. Forever.",
  },
] as const;

export function PillarCards() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-8 md:py-14">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {pillars.map((pillar, index) => (
          <motion.article
            key={pillar.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="rounded-xl border border-border bg-surface p-6 shadow-sm"
          >
            <h3 className="text-lg font-semibold leading-snug text-text-primary">
              {pillar.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-text-secondary">
              {pillar.title === "Plain files, no lock-in"
                ? `${siteMetrics.articleCount} ${pillar.body}`
                : pillar.body}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
