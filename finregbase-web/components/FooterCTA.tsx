export function FooterCTA() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-20 pt-10 md:pb-24">
      <div className="rounded-2xl border border-border bg-surface p-8 md:p-10">
        <h2 className="text-3xl font-semibold tracking-tight text-text-primary md:text-4xl">
          Start building compliant fintech agents.
        </h2>
        <p className="mt-3 text-base text-text-secondary">Free. Open source. No sign-up.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#connect"
            className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-3 text-sm font-semibold text-white hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            Add to Claude
          </a>
          <a
            href="https://github.com/havryleshko/fin-regbase"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-md border border-border bg-background px-5 py-3 text-sm font-semibold text-text-primary hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            View on GitHub
          </a>
        </div>
        <div className="mt-8 text-sm text-text-secondary">
          <a
            href="https://github.com/havryleshko/fin-regbase"
            target="_blank"
            rel="noreferrer"
            className="rounded-sm hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            GitHub
          </a>{" "}
          ·{" "}
          <a
            href="https://github.com/havryleshko/fin-regbase/blob/main/LICENSE"
            target="_blank"
            rel="noreferrer"
            className="rounded-sm hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            MIT License
          </a>{" "}
          · Built by Alex Havryleshko
        </div>
      </div>
    </section>
  );
}
