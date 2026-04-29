 "use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { configSnippets } from "@/lib/config-snippets";

const labels = {
  claudeDesktop: "Claude Desktop",
  cursor: "Cursor",
  vscode: "VS Code",
  anyMcpClient: "Any MCP client",
} as const;

type SnippetKey = keyof typeof configSnippets;

export function ConnectSection() {
  const [activeTab, setActiveTab] = useState<SnippetKey>("claudeDesktop");
  const [copied, setCopied] = useState(false);
  const [highlighted, setHighlighted] = useState<Record<SnippetKey, string>>({
    claudeDesktop: "",
    cursor: "",
    vscode: "",
    anyMcpClient: "",
  });

  const tabKeys = useMemo(() => Object.keys(configSnippets) as SnippetKey[], []);

  useEffect(() => {
    let cancelled = false;
    const run = async () => {
      const { codeToHtml } = await import("shiki");
      const entries = await Promise.all(
        tabKeys.map(async (key) => {
          const html = await codeToHtml(configSnippets[key], {
            lang: "json",
            theme: "github-light",
          });
          return [key, html] as const;
        })
      );
      if (!cancelled) {
        setHighlighted(Object.fromEntries(entries) as Record<SnippetKey, string>);
      }
    };
    void run();
    return () => {
      cancelled = true;
    };
  }, [tabKeys]);

  const copyConfig = async () => {
    await navigator.clipboard.writeText(configSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  };

  return (
    <section id="connect" className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
      <p className="text-xs font-medium uppercase tracking-[0.16em] text-text-secondary">
        Connect in 60 seconds
      </p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight text-text-primary md:text-4xl">
        Connect in 60 seconds
      </h2>

      <div
        role="tablist"
        aria-label="MCP client configuration tabs"
        className="mt-8 flex gap-2 overflow-x-auto pb-2"
      >
        {tabKeys.map((key) => (
          <button
            key={key}
            role="tab"
            aria-selected={activeTab === key}
            onClick={() => setActiveTab(key)}
            className={`whitespace-nowrap rounded-md border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${activeTab === key ? "border-accent bg-accent text-white" : "border-border bg-background text-text-primary hover:bg-surface"}`}
          >
            {labels[key]}
          </button>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.35 }}
        className="mt-4 overflow-hidden rounded-xl border border-border bg-code-bg"
      >
        {highlighted[activeTab] ? (
          <div
            className="[&>pre]:m-0 [&>pre]:overflow-x-auto [&>pre]:p-5 [&>pre]:text-sm"
            dangerouslySetInnerHTML={{ __html: highlighted[activeTab] }}
          />
        ) : (
          <pre className="overflow-x-auto p-5 text-sm text-text-secondary">
            {configSnippets[activeTab]}
          </pre>
        )}
      </motion.div>

      <div className="mt-4 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          onClick={copyConfig}
          className="inline-flex items-center rounded-md bg-accent px-4 py-2 text-sm font-semibold text-white hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          {copied ? "Copied ✓" : "Copy config"}
        </button>
        <p className="text-sm text-text-secondary">
          1. Install uv → 2. Paste config → 3. Ask your agent a compliance question
        </p>
      </div>
    </section>
  );
}
