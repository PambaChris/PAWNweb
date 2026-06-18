import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/get-involved")({
  head: () => ({
    meta: [
      { title: "Get Involved — PAWN" },
      {
        name: "description",
        content:
          "Become a member, volunteer, donate, or partner with PAWN — the Pan-African Women's Network.",
      },
      { property: "og:title", content: "Get Involved with PAWN" },
      {
        property: "og:description",
        content:
          "Member, volunteer, donor, or partner — there's a place for you in this movement.",
      },
    ],
  }),
  component: GetInvolvedPage,
});

const paths = [
  {
    title: "Become a Member",
    blurb:
      "Join a global community of women of African descent. Members receive programming, mentorship, and chapter invitations.",
    cta: "Apply for membership",
  },
  {
    title: "Volunteer",
    blurb:
      "Lend your skills — facilitation, design, translation, research — to ongoing campaigns and chapter work.",
    cta: "Tell us your skills",
  },
  {
    title: "Donate",
    blurb:
      "Your contributions fund direct advocacy, programs, and on-the-ground support across the diaspora.",
    cta: "Give now",
  },
  {
    title: "Partner with Us",
    blurb:
      "Organizations, sister movements, and funders — collaborate with us on programs, events, and campaigns.",
    cta: "Propose a partnership",
  },
] as const;

function GetInvolvedPage() {
  return (
    <div className="min-h-screen bg-lilac text-ink">
      <SiteNav />

      <header className="px-6 md:px-8 pt-16 pb-12 max-w-6xl mx-auto">
        <span className="inline-block mb-6 px-3 py-1 border border-grey text-grey text-xs uppercase tracking-widest rounded-full">
          Get Involved
        </span>
        <h1 className="text-5xl md:text-7xl font-serif leading-[0.95] max-w-3xl text-balance">
          Find your <span className="italic text-grey">place</span> in this movement.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-ink/80 leading-relaxed">
          PAWN is member-led and member-funded. Every contribution — of time,
          money, or skill — moves the work forward.
        </p>
      </header>

      <section className="px-6 md:px-8 max-w-6xl mx-auto pb-24">
        <div className="grid md:grid-cols-2 gap-8">
          {paths.map((p) => (
            <div
              key={p.title}
              className="bg-cream border border-ink/10 rounded-2xl p-8 md:p-10 flex flex-col"
            >
              <h2 className="text-3xl font-serif mb-4">{p.title}</h2>
              <p className="text-ink/75 leading-relaxed mb-8 flex-1">
                {p.blurb}
              </p>
              <Link
                to="/contact"
                className="self-start bg-ink text-lilac px-6 py-3 rounded-full text-xs uppercase tracking-widest font-medium hover:bg-grey transition-colors"
              >
                {p.cta}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-grey text-lilac rounded-3xl p-12 md:p-16 text-center">
          <h2 className="text-3xl md:text-5xl font-serif mb-6 max-w-2xl mx-auto text-balance">
            Stay close to the work.
          </h2>
          <p className="text-lilac/85 max-w-xl mx-auto mb-8 leading-relaxed">
            Sign up for our newsletter — event invitations, calls to action,
            and dispatches from chapters worldwide.
          </p>
          <Link
            to="/contact"
            className="inline-flex bg-lilac text-grey px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-gold hover:text-ink transition-all"
          >
            Subscribe
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
