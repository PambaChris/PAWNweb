import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { events } from "@/lib/site-data";

export const Route = createFileRoute("/events/$slug")({
  loader: ({ params }) => {
    const event = events.find((e) => e.slug === params.slug);
    if (!event) throw notFound();
    return { event };
  },
  head: ({ loaderData }) => {
    const event = loaderData?.event;
    if (!event) return { meta: [{ title: "Event not found — PAWN" }] };
    return {
      meta: [
        { title: `${event.title} — PAWN` },
        { name: "description", content: event.blurb },
        { property: "og:title", content: event.title },
        { property: "og:description", content: event.blurb },
        { property: "og:image", content: event.image },
        { name: "twitter:image", content: event.image },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen bg-sand text-ink">
      <SiteNav />
      <div className="max-w-3xl mx-auto px-6 py-32 text-center">
        <h1 className="text-5xl font-serif mb-4">Event not found</h1>
        <Link to="/events" className="text-clay underline">
          ← Back to events
        </Link>
      </div>
      <SiteFooter />
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="min-h-screen bg-sand text-ink">
      <SiteNav />
      <div className="max-w-3xl mx-auto px-6 py-32 text-center">
        <h1 className="text-3xl font-serif mb-4">This event didn't load</h1>
        <p className="text-ink/70 mb-6">{error.message}</p>
        <button
          onClick={reset}
          className="bg-ink text-sand px-6 py-3 rounded-full text-sm"
        >
          Try again
        </button>
      </div>
      <SiteFooter />
    </div>
  ),
  component: EventDetailPage,
});

function EventDetailPage() {
  const { event } = Route.useLoaderData();
  return (
    <div className="min-h-screen bg-sand text-ink">
      <SiteNav />
      <article className="max-w-4xl mx-auto px-6 md:px-8 pt-16 pb-24">
        <Link
          to="/events"
          className="text-xs uppercase tracking-widest text-clay font-bold"
        >
          ← All Events
        </Link>
        <h1 className="text-4xl md:text-6xl font-serif leading-tight mt-6 mb-6 text-balance">
          {event.title}
        </h1>
        <p className="text-sm uppercase tracking-widest text-ink/60 mb-10">
          {event.date}
          {event.location ? ` · ${event.location}` : ""}
        </p>
        <img
          src={event.image}
          alt={event.title}
          className="w-full aspect-[16/9] object-cover rounded-2xl mb-12"
        />
        <p className="text-2xl font-serif italic text-ink/85 mb-8 leading-snug">
          {event.blurb}
        </p>
        <div className="text-lg leading-relaxed text-ink/85 whitespace-pre-line">
          {event.body}
        </div>

        <div className="mt-16 border-t border-ink/10 pt-10 flex flex-wrap gap-4">
          <Link
            to="/get-involved"
            className="bg-clay text-sand px-8 py-3 rounded-full text-sm font-medium"
          >
            Join the Network
          </Link>
          <Link
            to="/events"
            className="border border-ink/30 px-8 py-3 rounded-full text-sm font-medium"
          >
            More events
          </Link>
        </div>
      </article>
      <SiteFooter />
    </div>
  );
}
