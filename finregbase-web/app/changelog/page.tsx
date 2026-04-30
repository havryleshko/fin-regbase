import type { Metadata } from "next";
import Link from "next/link";
import { changelogEntries } from "@/lib/changelog";

export const metadata: Metadata = {
  title: "Changelog | finregbase.com",
  description: "Version and release transparency log for finregbase.com",
};

export default function ChangelogPage() {
  return (
    <div className="min-h-screen bg-background text-text-primary">
      <main className="mx-auto w-full max-w-4xl px-6 py-12 md:py-16">
        <div className="flex items-center justify-between gap-4">
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">Changelog</h1>
          <Link
            href="/"
            className="rounded-sm text-sm font-medium text-accent hover:text-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            Back to home
          </Link>
        </div>
        <p className="mt-3 text-base text-text-secondary">
          Public record of meaningful website and product-surface updates.
        </p>

        <div className="mt-10 space-y-4">
          {changelogEntries.map((entry) => (
            <article key={`${entry.date}-${entry.title}`} className="rounded-xl border border-border bg-surface p-5">
              <div className="flex flex-wrap items-center gap-3">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-text-secondary">
                  {entry.phase}
                </p>
                <p className="text-sm text-text-secondary">{entry.date}</p>
              </div>
              <h2 className="mt-2 text-xl font-semibold tracking-tight">{entry.title}</h2>
              <p className="mt-2 text-sm leading-6 text-text-secondary">{entry.summary}</p>
              {entry.links && entry.links.length > 0 ? (
                <div className="mt-3 flex flex-wrap gap-3 text-sm">
                  {entry.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-sm text-accent hover:text-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
