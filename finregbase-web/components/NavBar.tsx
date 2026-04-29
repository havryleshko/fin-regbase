export function NavBar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-6">
        <span className="text-sm font-semibold tracking-tight">fin-regbase</span>
        <a
          href="https://github.com/ohavryleshko/fin-regbase"
          target="_blank"
          rel="noreferrer"
          className="text-sm text-accent hover:text-accent-hover"
        >
          GitHub
        </a>
      </div>
    </header>
  );
}
