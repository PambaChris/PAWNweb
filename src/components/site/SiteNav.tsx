import { Link } from "@tanstack/react-router";
import { useState } from "react";

const links = [
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/events", label: "Events" },
  { to: "/news", label: "News" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-lilac/85 backdrop-blur-md border-b border-ink/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 md:px-8 py-5">
        <Link
          to="/"
          className="font-serif italic text-2xl font-semibold tracking-tight text-ink"
        >
          PAWN
        </Link>

        <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-medium text-ink">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="hover:text-grey transition-colors"
              activeProps={{ className: "text-grey" }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/get-involved"
            className="hidden sm:inline-flex bg-ink text-lilac px-5 py-2 rounded-full text-sm font-medium hover:bg-grey transition-colors"
          >
            Join Network
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-ink/20"
          >
            <span className="text-ink text-lg">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-ink/10 px-6 py-4 flex flex-col gap-3 bg-lilac">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="text-sm uppercase tracking-widest text-ink"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/get-involved"
            onClick={() => setOpen(false)}
            className="text-sm uppercase tracking-widest text-grey"
          >
            Join Network
          </Link>
        </div>
      )}
    </nav>
  );
}
