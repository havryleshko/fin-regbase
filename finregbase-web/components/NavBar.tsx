 "use client";

import { useEffect, useState } from "react";

export function NavBar() {
  const [showBorder, setShowBorder] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowBorder(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 bg-background transition-shadow ${showBorder ? "border-b border-border" : "border-b border-transparent"}`}
    >
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-6">
        <span className="text-sm font-semibold tracking-tight text-text-primary">
          fin-regbase
        </span>
        <div className="flex items-center gap-4">
          <a
            href="/changelog"
            className="rounded-sm text-sm font-medium text-text-primary hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            Changelog
          </a>
          <a
            href="https://github.com/havryleshko/fin-regbase"
            target="_blank"
            rel="noreferrer"
            className="rounded-sm text-sm font-medium text-accent hover:text-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </header>
  );
}
