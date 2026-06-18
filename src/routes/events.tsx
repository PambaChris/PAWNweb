import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { events } from "@/lib/site-data";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — PAWN" },
      {
        name: "description",
        content:
          "Upcoming and past PAWN events — conferences, seminars, festivals, and solidarity actions across the Pan-African diaspora.",
      },
      { property: "og:title", content: "PAWN Events" },
      {
        property: "og:description",
        content:
          "Conferences, seminars, festivals, and solidarity actions organized by the Pan-African Women's Network.",
      },
      { property: "og:image", content: events[0].image },
    ],
  }),
  component: EventsPage,
});

function EventsPage() {
  const upcoming = events.filter((e) => e.upcoming);
  const past = events.filter((e) => !e.upcoming);

  return (
    <div className="min-h-screen bg-sand text-ink">
      <SiteNav />

      <header className="px-6 md:px-8 pt-16 pb-12 max-w-6xl mx-auto">
        <span className="inline-block mb-6 px-3 py-1 border border-clay text-clay text-xs uppercase tracking-widest rounded-full">
          Events
        </span>
        <h1 className="text-5xl md:text-7xl font-serif leading-[0.95] max-w-3xl text-balance">
          Gatherings of the <span className="italic text-clay">network</span>.
        </h1>
      </header>

      <section className="px-6 md:px-8 max-w-6xl mx-auto pb-24">
        <h2 className="text-2xl uppercase tracking-widest font-sans font-bold text-clay mb-8">
          Upcoming
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {upcoming.map((e) => (
            <EventCard key={e.slug} event={e} large />
          ))}
        </div>

        <h2 className="text-2xl uppercase tracking-widest font-sans font-bold text-ink/60 mb-8">
          Past
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {past.map((e) => (
            <EventCard key={e.slug} event={e} />
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function EventCard({
  event,
  large = false,
}: {
  event: (typeof events)[number];
  large?: boolean;
}) {
  return (
    <Link
      to="/events/$slug"
      params={{ slug: event.slug }}
      className="group block bg-cream border border-ink/10 rounded-2xl overflow-hidden hover:shadow-md transition-all"
    >
      <div className={`w-full overflow-hidden ${large ? "aspect-[16/10]" : "aspect-[4/3]"}`}>
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <p className="text-xs uppercase tracking-widest text-clay font-bold mb-2">
          {event.date}
          {event.location ? ` · ${event.location}` : ""}
        </p>
        <h3
          className={`font-serif leading-snug mb-2 ${
            large ? "text-3xl" : "text-xl"
          }`}
        >
          {event.title}
        </h3>
        <p className="text-sm text-ink/70 leading-relaxed">{event.blurb}</p>
      </div>
    </Link>
  );
}
