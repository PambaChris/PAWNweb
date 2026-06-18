import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { events, news, heroImage } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PAWN — Pan-African Women's Network" },
      {
        name: "description",
        content:
          "A global network of Black feminists organizing for earth justice, financial sovereignty, and the safety of women and girls across the diaspora.",
      },
      {
        property: "og:title",
        content: "PAWN — Pan-African Women's Network",
      },
      {
        property: "og:description",
        content:
          "Connecting, inspiring, and uplifting women of African descent across the globe.",
      },
      { property: "og:image", content: heroImage },
      { name: "twitter:image", content: heroImage },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const featured = events.slice(0, 4);
  const latest = news.slice(0, 2);
  const spotlight = news.find((n) => n.slug === "member-spotlight-caroline-moko")!;

  return (
    <div className="min-h-screen bg-sand text-ink">
      <SiteNav />

      {/* Hero */}
      <header className="px-6 md:px-8 pt-16 pb-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block mb-6 px-3 py-1 border border-clay text-clay text-xs uppercase tracking-widest rounded-full">
              Pan-African Women's Network
            </span>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif leading-[0.95] mb-8 text-balance">
              Connecting the <span className="italic text-clay">Global</span>{" "}
              Sisterhood.
            </h1>
            <p className="text-xl max-w-md leading-relaxed text-ink/80 mb-10">
              A radical collective of Black feminists driving change through
              advocacy, food sovereignty, and financial liberation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/about"
                className="bg-gold text-ink px-8 py-4 rounded-sm font-medium hover:brightness-110 transition-all"
              >
                Our Mission
              </Link>
              <Link
                to="/get-involved"
                className="border border-ink px-8 py-4 rounded-sm font-medium hover:bg-ink hover:text-sand transition-all"
              >
                Donate
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src={heroImage}
              alt="Women in a PAWN meeting discussing strategy"
              className="w-full aspect-[4/5] object-cover rounded-2xl shadow-sm"
              loading="eager"
            />
            <div className="absolute -bottom-6 -left-6 bg-clay text-sand p-8 max-w-[240px] rounded-lg shadow-xl">
              <p className="font-serif italic text-2xl leading-tight">
                "Earth justice is gender justice."
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Events */}
      <section className="bg-ink text-sand py-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-between items-end gap-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-serif">
              Upcoming Gatherings
            </h2>
            <Link
              to="/events"
              className="pb-2 border-b border-gold text-gold uppercase text-xs tracking-widest"
            >
              View all events
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {featured.map((e) => (
              <Link
                key={e.slug}
                to="/events/$slug"
                params={{ slug: e.slug }}
                className="group"
              >
                <div className="w-full aspect-[3/4] mb-4 rounded-lg overflow-hidden bg-white/5">
                  <img
                    src={e.image}
                    alt={e.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <p className="text-xs text-gold uppercase mb-2 tracking-wider">
                  {e.date}
                </p>
                <h3 className="text-lg md:text-xl font-serif leading-snug group-hover:text-gold transition-colors">
                  {e.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* News & Spotlight */}
      <section className="py-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              Member Spotlight
            </h2>
            <div className="w-full aspect-square mb-6 rounded-2xl overflow-hidden">
              <img
                src={spotlight.image}
                alt={spotlight.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <h3 className="text-2xl font-serif italic mb-2">Caroline Moko</h3>
            <p className="text-sm text-ink/70 mb-4 leading-relaxed">
              {spotlight.blurb}
            </p>
            <Link
              to="/news/$slug"
              params={{ slug: spotlight.slug }}
              className="text-clay font-medium text-sm"
            >
              Read her story →
            </Link>
          </div>

          <div className="lg:col-span-8">
            <h2 className="text-3xl md:text-4xl font-serif mb-12">
              Latest Updates
            </h2>
            <div className="space-y-12">
              {latest.map((n) => (
                <Link
                  key={n.slug}
                  to="/news/$slug"
                  params={{ slug: n.slug }}
                  className="flex flex-col md:flex-row gap-8 items-start group"
                >
                  <div className="w-full md:w-48 aspect-video shrink-0 rounded-lg overflow-hidden bg-secondary">
                    <img
                      src={n.image}
                      alt={n.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] text-gold font-bold uppercase tracking-widest">
                      {n.category}
                    </span>
                    <h4 className="text-2xl font-serif mt-1 mb-2 group-hover:text-clay transition-colors">
                      {n.title}
                    </h4>
                    <p className="text-ink/70 leading-relaxed">{n.blurb}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="px-6 md:px-8 pb-24">
        <div className="max-w-6xl mx-auto bg-clay text-sand rounded-3xl p-12 md:p-20 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-serif leading-tight mb-8 text-balance">
              Your voice belongs in this movement.
            </h2>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/get-involved"
                className="bg-sand text-clay px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-gold hover:text-ink transition-all"
              >
                Become a Member
              </Link>
              <Link
                to="/contact"
                className="bg-transparent border border-sand/30 text-sand px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-sand hover:text-clay transition-all"
              >
                Get Our Newsletter
              </Link>
            </div>
          </div>
          <div className="absolute top-0 right-0 h-full w-1/3 opacity-10 bg-[radial-gradient(circle,white_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
