 "use client";

import type { ReactNode } from "react";
import { KeyboardEvent, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { configSnippets } from "@/lib/config-snippets";

const labels = {
  claudeDesktop: "Claude Desktop",
  cursor: "Cursor",
  vscode: "VS Code",
  anyMcpClient: "Any MCP client",
} as const;

type SnippetKey = keyof typeof configSnippets;

const code = (children: string) => (
  <code className="rounded-md border border-border bg-code-bg px-1.5 py-0.5 font-mono text-[0.8125rem] text-text-primary">
    {children}
  </code>
);

const setupSteps: ReactNode[] = [
  "Clone the repo and install uv.",
  <>
    Run {code("uv sync")} in {code("mcp-server")}.
  </>,
  "Replace the absolute paths in the config (including WIKI_PATH if your wiki directory is non-standard), then paste it into your MCP client.",
  "Ask your agent a compliance question.",
];

export function ConnectSection() {
  const [activeTab, setActiveTab] = useState<SnippetKey>("claudeDesktop");
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
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
            theme: "vitesse-light",
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
    const text = configSnippets[activeTab];
    try {
      await navigator.clipboard.writeText(text);
      setCopyError(false);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
      return;
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      const succeeded = document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopyError(!succeeded);
      setCopied(succeeded);
      if (succeeded) {
        setTimeout(() => setCopied(false), 1400);
      }
    }
  };

  const onTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>, key: SnippetKey) => {
    if (!["ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key)) {
      return;
    }
    event.preventDefault();
    const currentIndex = tabKeys.indexOf(key);
    let nextIndex = currentIndex;
    if (event.key === "ArrowRight") {
      nextIndex = (currentIndex + 1) % tabKeys.length;
    }
    if (event.key === "ArrowLeft") {
      nextIndex = (currentIndex - 1 + tabKeys.length) % tabKeys.length;
    }
    if (event.key === "Home") {
      nextIndex = 0;
    }
    if (event.key === "End") {
      nextIndex = tabKeys.length - 1;
    }
    const nextKey = tabKeys[nextIndex];
    setActiveTab(nextKey);
    document.getElementById(`config-tab-${nextKey}`)?.focus();
  };

  return (
    <section id="connect" className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
      <p className="text-xs font-medium uppercase tracking-[0.16em] text-text-secondary">
        Connect in 60 seconds
      </p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-text-primary md:text-3xl">
        Paste your MCP config and connect
      </h2>

      <div
        role="tablist"
        aria-label="MCP client configuration tabs"
        className="mt-8 flex gap-2 overflow-x-auto pb-2"
      >
        {tabKeys.map((key) => (
          <button
            key={key}
            id={`config-tab-${key}`}
            role="tab"
            aria-selected={activeTab === key}
            aria-controls="config-panel"
            tabIndex={activeTab === key ? 0 : -1}
            onClick={() => setActiveTab(key)}
            onKeyDown={(event) => onTabKeyDown(event, key)}
            className={`whitespace-nowrap rounded-md border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${activeTab === key ? "border-accent bg-accent text-white" : "border-border bg-background text-text-primary hover:bg-surface"}`}
          >
            {labels[key]}
          </button>
        ))}
      </div>

      <motion.div
        id="config-panel"
        role="tabpanel"
        aria-labelledby={`config-tab-${activeTab}`}
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

      <div className="mt-4 rounded-2xl border border-border bg-surface p-5 shadow-sm sm:p-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-stretch sm:gap-8">
          <div className="min-h-0 min-w-0 flex-1">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-text-secondary">Setup steps</p>
            <ol className="mt-3 list-none space-y-0 p-0">
              {setupSteps.map((body, index) => (
                <li
                  key={index}
                  className="flex gap-3 border-b border-border py-3.5 first:pt-0 last:border-b-0 last:pb-0"
                >
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-semibold text-white shadow-sm">
                    {index + 1}
                  </span>
                  <p className="min-w-0 text-sm leading-6 text-text-secondary [&_code]:whitespace-nowrap">{body}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:w-40 sm:border-l sm:border-border sm:pl-8">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-text-secondary">Next</p>
            <button
              onClick={copyConfig}
              className="inline-flex w-full items-center justify-center rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
            >
              {copied ? "Copied ✓" : copyError ? "Copy failed" : "Copy config"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
