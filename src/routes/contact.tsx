import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact PAWN" },
      {
        name: "description",
        content:
          "Get in touch with the Pan-African Women's Network — membership, partnerships, press, and chapter inquiries.",
      },
      { property: "og:title", content: "Contact PAWN" },
      {
        property: "og:description",
        content:
          "Membership, partnerships, press, and chapter inquiries for the Pan-African Women's Network.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-lilac text-ink">
      <SiteNav />

      <header className="px-6 md:px-8 pt-16 pb-12 max-w-6xl mx-auto">
        <span className="inline-block mb-6 px-3 py-1 border border-grey text-grey text-xs uppercase tracking-widest rounded-full">
          Contact
        </span>
        <h1 className="text-5xl md:text-7xl font-serif leading-[0.95] max-w-3xl text-balance">
          Write to <span className="italic text-grey">us</span>.
        </h1>
      </header>

      <section className="px-6 md:px-8 max-w-6xl mx-auto pb-24 grid md:grid-cols-5 gap-12">
        <div className="md:col-span-2 space-y-8 text-sm leading-relaxed">
          <div>
            <h2 className="text-xs uppercase tracking-widest text-grey font-bold mb-2">
              General
            </h2>
            <p>info@pawn-blackfeminists.org</p>
          </div>
          <div>
            <h2 className="text-xs uppercase tracking-widest text-grey font-bold mb-2">
              Membership
            </h2>
            <p>info@pawn-blackfeminists.org</p>
          </div>
          <div>
            <h2 className="text-xs uppercase tracking-widest text-grey font-bold mb-2">
              Press & Partnerships
            </h2>
            <p>info@pawn-blackfeminists.org</p>
          </div>
          <div>
            <h2 className="text-xs uppercase tracking-widest text-grey font-bold mb-2">
              Find us
            </h2>
            <p>Chapters across Africa, the Caribbean, Europe, and the Americas.</p>
          </div>
        </div>

        <form
          className="md:col-span-3 bg-cream border border-ink/10 rounded-2xl p-8 md:p-10 space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          {sent ? (
            <div className="text-center py-12">
              <h3 className="text-3xl font-serif mb-3">Thank you.</h3>
              <p className="text-ink/70">
                We've received your message and will be in touch soon.
              </p>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 gap-5">
                <Field label="Name" name="name" required />
                <Field label="Email" name="email" type="email" required />
              </div>
              <Field label="Subject" name="subject" required />
              <div>
                <label className="block text-xs uppercase tracking-widest font-bold mb-2 text-ink">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  className="w-full bg-lilac border border-ink/15 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-grey"
                />
              </div>
              <button
                type="submit"
                className="bg-grey text-lilac px-8 py-3 rounded-full text-sm font-medium uppercase tracking-widest hover:bg-ink transition-colors"
              >
                Send message
              </button>
            </>
          )}
        </form>
      </section>

      <SiteFooter />
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-xs uppercase tracking-widest font-bold mb-2 text-ink"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full bg-lilac border border-ink/15 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-grey"
      />
    </div>
  );
}
