import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { news } from "@/lib/site-data";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News & Spotlights — PAWN" },
      {
        name: "description",
        content:
          "Articles, member spotlights, opinion, and event recaps from the Pan-African Women's Network.",
      },
      { property: "og:title", content: "PAWN News & Spotlights" },
      {
        property: "og:description",
        content:
          "Dispatches from the Pan-African feminist movement — member stories, opinion, and recaps.",
      },
      { property: "og:image", content: news[0].image },
    ],
  }),
  component: NewsIndexPage,
});

function NewsIndexPage() {
  const [lead, ...rest] = news;
  return (
    <div className="min-h-screen bg-sand text-ink">
      <SiteNav />

      <header className="px-6 md:px-8 pt-16 pb-12 max-w-6xl mx-auto">
        <span className="inline-block mb-6 px-3 py-1 border border-clay text-clay text-xs uppercase tracking-widest rounded-full">
          News
        </span>
        <h1 className="text-5xl md:text-7xl font-serif leading-[0.95] max-w-3xl text-balance">
          Dispatches from the <span className="italic text-clay">movement</span>.
        </h1>
      </header>

      <section className="px-6 md:px-8 max-w-6xl mx-auto pb-24">
        <Link
          to="/news/$slug"
          params={{ slug: lead.slug }}
          className="group grid md:grid-cols-2 gap-10 items-center mb-20 bg-cream rounded-3xl overflow-hidden border border-ink/10"
        >
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={lead.image}
              alt={lead.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-8 md:p-12">
            <span className="text-xs uppercase tracking-widest text-clay font-bold">
              {lead.category} · {lead.date}
            </span>
            <h2 className="text-3xl md:text-4xl font-serif mt-3 mb-4 group-hover:text-clay transition-colors">
              {lead.title}
            </h2>
            <p className="text-ink/75 leading-relaxed">{lead.blurb}</p>
            <span className="inline-block mt-6 text-sm text-clay font-medium">
              Read more →
            </span>
          </div>
        </Link>

        <div className="grid md:grid-cols-3 gap-8">
          {rest.map((n) => (
            <Link
              to="/news/$slug"
              params={{ slug: n.slug }}
              key={n.slug}
              className="group block"
            >
              <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4">
                <img
                  src={n.image}
                  alt={n.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <span className="text-[10px] uppercase tracking-widest text-clay font-bold">
                {n.category} · {n.date}
              </span>
              <h3 className="text-xl font-serif mt-2 mb-2 group-hover:text-clay transition-colors">
                {n.title}
              </h3>
              <p className="text-sm text-ink/70 leading-relaxed">{n.blurb}</p>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
