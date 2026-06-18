import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { programs } from "@/lib/site-data";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs — PAWN" },
      {
        name: "description",
        content:
          "PAWN's programs: earth justice, ending gender-based violence, financial literacy, mentorship, transnational solidarity, and cultural heritage work.",
      },
      { property: "og:title", content: "PAWN Programs" },
      {
        property: "og:description",
        content:
          "The standing programs and impact areas of the Pan-African Women's Network.",
      },
    ],
  }),
  component: ProgramsPage,
});

function ProgramsPage() {
  return (
    <div className="min-h-screen bg-lilac text-ink">
      <SiteNav />

      <header className="px-6 md:px-8 pt-16 pb-12 max-w-6xl mx-auto">
        <span className="inline-block mb-6 px-3 py-1 border border-grey text-grey text-xs uppercase tracking-widest rounded-full">
          Programs
        </span>
        <h1 className="text-5xl md:text-7xl font-serif leading-[0.95] max-w-3xl text-balance">
          The work, <span className="italic text-grey">organized</span>.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-ink/80 leading-relaxed">
          PAWN's programs are member-led and rooted in the daily realities of
          women across the diaspora. They are how we translate analysis into
          material change.
        </p>
      </header>

      <section className="px-6 md:px-8 pb-24 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-px bg-ink/10 border border-ink/10 rounded-xl overflow-hidden">
          {programs.map((p, i) => (
            <article
              key={p.title}
              className="bg-cream p-8 md:p-10 flex flex-col gap-4"
            >
              <span className="text-xs text-grey font-bold uppercase tracking-widest">
                Program {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="text-3xl font-serif">{p.title}</h2>
              <p className="text-ink/75 leading-relaxed">{p.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 bg-ink text-lilac rounded-3xl p-12 md:p-16">
          <h2 className="text-3xl md:text-5xl font-serif mb-6 max-w-2xl text-balance">
            Bring a program to your chapter.
          </h2>
          <p className="text-lilac/80 max-w-xl mb-8 leading-relaxed">
            We support chapters across Africa, the Caribbean, Europe, and the
            Americas to adapt these programs locally.
          </p>
          <Link
            to="/contact"
            className="inline-flex bg-gold text-ink px-8 py-4 rounded-full font-medium text-sm uppercase tracking-widest hover:brightness-110"
          >
            Get in touch
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
