## Goal
Rebuild pawn-blackfeminists.org with a refreshed structure and modern design, reusing real content (mission, events, news, store, contact) from the existing site. You'll pick from 3 rendered design directions before I implement.

## Information architecture (restructured)

Current site is fairly flat (Home, About, Events, News, Store, Contact, Book Appointment). Proposed structure:

- `/` — Home: hero with mission statement, mission summary, featured events (3), recent news, programs/impact highlights, newsletter + join CTA
- `/about` — Mission, vision, history, leadership/team, values, "What is Pan-African Feminism"
- `/programs` — Standing programs/initiatives (advocacy, education, financial literacy, gender-based violence work) — promoted from being buried under events
- `/events` — Upcoming + past events grid; `/events/$slug` for detail pages
- `/news` — Articles list; `/news/$slug` for detail pages
- `/store` — Merch/resources list (static for now; no checkout)
- `/get-involved` — Membership, volunteer, donate, partner — consolidates "Book Appointment" and join CTAs
- `/contact` — Form + org info

Shared: top nav, footer with newsletter, social links, 404 + error boundaries.

## Content sourcing

I'll scrape pawn-blackfeminists.org (home, about, events list + 3 event detail pages, news list + a few articles, store, contact) using `fetch_website`, then port real copy, event titles/dates, and image URLs into the new site. Images: hotlink from the source for now (we can move to local assets later). The existing PAWN logo will be retained.

## Design directions

Three rendered HTML directions, all anchored on a Pan-African feminist identity but with distinct points of view (e.g., bold editorial / activist poster, warm pan-African earth tones with serif elegance, modern minimal with high-contrast type). You pick one; I implement it faithfully — composition, tokens, type, and motion taken straight from the chosen direction.

## Out of scope (for this pass)

- No backend, CMS, auth, or e-commerce (content is hard-coded in route files; easy to wire to Lovable Cloud later)
- No "Book Appointment" booking integration; replaced with a contact/get-involved form
- No multilingual support

## Technical notes

- TanStack Start file-based routes under `src/routes/` (flat dot-separated naming)
- Per-route `head()` metadata (title, description, OG, Twitter) for SEO; semantic HTML; single H1 per page
- Design tokens (colors, fonts, radii) defined in `src/styles.css` using oklch; no hard-coded color classes in components
- Reusable section components in `src/components/site/` (Nav, Footer, EventCard, NewsCard, Hero variants)
- Event and news detail pages use dynamic params (`events.$slug.tsx`, `news.$slug.tsx`) with content from a typed local data module

## Next step

On approval I'll: (1) scrape the existing site for real content, (2) generate the 3 design directions, and (3) ask you to pick one before building.