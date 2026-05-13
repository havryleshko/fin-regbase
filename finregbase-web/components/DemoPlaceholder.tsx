export function DemoPlaceholder() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
      <p className="text-xs font-medium uppercase tracking-[0.16em] text-text-secondary">
        See it in action
      </p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-text-primary md:text-3xl">
        Watch an agent answer a Consumer Duty question
      </h2>
      <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-text-primary">
        <div className="aspect-video w-full">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/FeM6Wq0bLds"
            title="Demo video: agent querying fin-regbase via MCP"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
