 "use client";

import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col px-6 pb-16 pt-14 md:pb-24 md:pt-20">
      <motion.h1
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-text-primary md:text-6xl"
      >
        Financial regulations knowledge base for AI agents.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
        className="mt-6 max-w-3xl text-base leading-7 text-text-secondary md:text-xl md:leading-8"
      >
        91 structured, citation-accurate articles across UK FCA regulations -
        queryable via MCP from any AI agent or development environment.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
      >
        <a
          href="#connect"
          className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-3 text-sm font-semibold text-white hover:bg-accent-hover"
        >
          Add to Claude
        </a>
        <a
          href="https://github.com/ohavryleshko/fin-regbase"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-md border border-border bg-background px-5 py-3 text-sm font-semibold text-text-primary hover:bg-surface"
        >
          View on GitHub
        </a>
      </motion.div>
    </section>
  );
}
