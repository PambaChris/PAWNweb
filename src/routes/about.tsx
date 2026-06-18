import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { leadership, programs, galleryImages } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About PAWN — Our Mission & Story" },
      {
        name: "description",
        content:
          "PAWN is a global Pan-African women's network founded in 2020. Read our story, mission, vision, and meet the leadership.",
      },
      { property: "og:title", content: "About PAWN" },
      {
        property: "og:description",
        content:
          "A diverse global community of women of African descent, united by shared heritage and a common goal.",
      },
      { property: "og:image", content: galleryImages[0] },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-sand text-ink">
      <SiteNav />

      <header className="px-6 md:px-8 pt-16 pb-12 max-w-6xl mx-auto">
        <span className="inline-block mb-6 px-3 py-1 border border-clay text-clay text-xs uppercase tracking-widest rounded-full">
          About PAWN
        </span>
        <h1 className="text-5xl md:text-7xl font-serif leading-[0.95] max-w-3xl text-balance">
          A global movement rooted in <span className="italic text-clay">shared heritage</span>.
        </h1>
      </header>

      <section className="px-6 md:px-8 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start pb-24">
        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            The Pan-African Women's Network was{" "}
            <strong>founded in 2020 by visionary women</strong> who saw the need
            for a dedicated platform to connect and empower women of African
            descent. What started as a small online forum has grown into a
            global movement.
          </p>
          <p>
            We are a diverse community of entrepreneurs, professionals, artists,
            farmers, and leaders from every corner of the world — united by a
            shared heritage and a common goal: to uplift one another and create
            a lasting legacy of excellence.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {galleryImages.slice(0, 4).map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`PAWN community ${i + 1}`}
              className={`w-full object-cover rounded-xl ${
                i % 2 === 0 ? "aspect-[4/5]" : "aspect-square mt-8"
              }`}
              loading="lazy"
            />
          ))}
        </div>
      </section>

      <section className="bg-ink text-sand py-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-serif mb-6 italic text-gold">
              Our Mission
            </h2>
            <p className="text-lg leading-relaxed text-sand/90">
              To build a strong, supportive, and collaborative network that
              fosters personal and professional growth, celebrates our heritage,
              and drives positive change in our communities and beyond.
            </p>
          </div>
          <div>
            <h2 className="text-4xl font-serif mb-6 italic text-gold">
              Our Vision
            </h2>
            <p className="text-lg leading-relaxed text-sand/90">
              A world where every woman of African descent has the resources,
              support, and opportunities to achieve her full potential — and
              create a powerful legacy for future generations.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif mb-12">
          What we organize around
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((p) => (
            <div
              key={p.title}
              className="bg-cream border border-ink/10 rounded-xl p-6"
            >
              <h3 className="text-xl font-serif mb-3">{p.title}</h3>
              <p className="text-sm text-ink/70 leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 md:px-8 bg-cream">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif mb-12">
            Meet Our Leadership
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((l) => (
              <div key={l.name}>
                <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-clay/30 to-gold/30 mb-4 grid place-items-center">
                  <span className="font-serif italic text-4xl text-ink/40">
                    {l.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)}
                  </span>
                </div>
                <h3 className="text-xl font-serif">{l.name}</h3>
                <p className="text-xs uppercase tracking-widest text-clay font-medium mt-1">
                  {l.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
