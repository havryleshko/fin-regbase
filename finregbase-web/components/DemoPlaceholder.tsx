export function DemoPlaceholder() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
      <p className="text-xs font-medium uppercase tracking-[0.16em] text-text-secondary">
        See it in action
      </p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight text-text-primary md:text-4xl">
        See it in action
      </h2>
      <div className="mt-8 flex aspect-video items-center justify-center rounded-2xl border border-border bg-text-primary/95">
        <div className="flex flex-col items-center gap-4 px-4 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white">
            ▶
          </div>
          <p className="text-sm text-white/80">
            Coming soon - agent querying fin-regbase via MCP
          </p>
        </div>
      </div>
    </section>
  );
}
