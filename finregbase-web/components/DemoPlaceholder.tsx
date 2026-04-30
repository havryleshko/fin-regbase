export function DemoPlaceholder() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
      <p className="text-xs font-medium uppercase tracking-[0.16em] text-text-secondary">
        See it in action
      </p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight text-text-primary md:text-4xl">
        See it in action
      </h2>
      <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-text-primary/95">
        <video
          controls
          preload="metadata"
          className="aspect-video w-full"
          aria-label="Demo video of agent querying fin-regbase via MCP"
        >
          <source src="/demo-finregbase.mp4" type="video/mp4" />
          Your browser does not support HTML5 video. You can download the demo at
          /demo-finregbase.mp4.
        </video>
      </div>
    </section>
  );
}
