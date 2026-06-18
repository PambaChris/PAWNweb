import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="bg-sand border-t border-ink/10 py-16 px-6 md:px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12">
        <div>
          <div className="text-3xl font-serif italic font-semibold mb-6 text-ink">
            PAWN
          </div>
          <p className="text-sm text-ink/60 italic max-w-xs">
            Elevating the collective power of women of African descent — globally.
          </p>
        </div>
        <div>
          <h5 className="font-sans font-bold text-xs uppercase tracking-widest mb-6 text-ink">
            Navigation
          </h5>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/about" className="hover:text-clay">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/programs" className="hover:text-clay">
                Our Programs
              </Link>
            </li>
            <li>
              <Link to="/events" className="hover:text-clay">
                Events Calendar
              </Link>
            </li>
            <li>
              <Link to="/news" className="hover:text-clay">
                News & Spotlights
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-sans font-bold text-xs uppercase tracking-widest mb-6 text-ink">
            Impact Areas
          </h5>
          <ul className="space-y-3 text-sm">
            <li>Food Sovereignty</li>
            <li>Earth Justice</li>
            <li>Ending Gender-Based Violence</li>
            <li>Financial Literacy</li>
          </ul>
        </div>
        <div>
          <h5 className="font-sans font-bold text-xs uppercase tracking-widest mb-6 text-ink">
            Connect
          </h5>
          <p className="text-sm mb-4 text-ink/80">
            Join the conversation across the diaspora.
          </p>
          <div className="flex gap-3">
            {(["In", "Ig", "Tw"] as const).map((s) => (
              <span
                key={s}
                className="w-9 h-9 rounded-full border border-ink/20 grid place-items-center text-xs font-medium hover:bg-ink hover:text-sand cursor-pointer transition-colors"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-ink/10 flex flex-col md:flex-row justify-between gap-2 text-[10px] uppercase tracking-[0.2em] text-ink/40">
        <p>© {new Date().getFullYear()} Pan-African Women's Network</p>
        <p>Solidarity Forever</p>
      </div>
    </footer>
  );
}
