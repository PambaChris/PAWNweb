import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { news } from "@/lib/site-data";

export const Route = createFileRoute("/news/$slug")({
  loader: ({ params }) => {
    const article = news.find((n) => n.slug === params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    const article = loaderData?.article;
    if (!article) return { meta: [{ title: "Article not found — PAWN" }] };
    return {
      meta: [
        { title: `${article.title} — PAWN` },
        { name: "description", content: article.blurb },
        { property: "og:title", content: article.title },
        { property: "og:description", content: article.blurb },
        { property: "og:image", content: article.image },
        { name: "twitter:image", content: article.image },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen bg-lilac text-ink">
      <SiteNav />
      <div className="max-w-3xl mx-auto px-6 py-32 text-center">
        <h1 className="text-5xl font-serif mb-4">Article not found</h1>
        <Link to="/news" className="text-grey underline">
          ← Back to news
        </Link>
      </div>
      <SiteFooter />
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="min-h-screen bg-lilac text-ink">
      <SiteNav />
      <div className="max-w-3xl mx-auto px-6 py-32 text-center">
        <h1 className="text-3xl font-serif mb-4">This article didn't load</h1>
        <p className="text-ink/70 mb-6">{error.message}</p>
        <button
          onClick={reset}
          className="bg-ink text-lilac px-6 py-3 rounded-full text-sm"
        >
          Try again
        </button>
      </div>
      <SiteFooter />
    </div>
  ),
  component: ArticlePage,
});

function ArticlePage() {
  const { article } = Route.useLoaderData();
  return (
    <div className="min-h-screen bg-lilac text-ink">
      <SiteNav />
      <article className="max-w-3xl mx-auto px-6 md:px-8 pt-16 pb-24">
        <Link
          to="/news"
          className="text-xs uppercase tracking-widest text-grey font-bold"
        >
          ← All News
        </Link>
        <p className="text-xs uppercase tracking-widest text-ink/60 mt-6 mb-3">
          {article.category} · {article.date}
        </p>
        <h1 className="text-4xl md:text-6xl font-serif leading-tight mb-10 text-balance">
          {article.title}
        </h1>
        <img
          src={article.image}
          alt={article.title}
          className="w-full aspect-[16/9] object-cover rounded-2xl mb-12"
        />
        <p className="text-2xl font-serif italic text-ink/85 mb-8 leading-snug">
          {article.blurb}
        </p>
        <div className="text-lg leading-relaxed text-ink/85 whitespace-pre-line">
          {article.body}
        </div>
      </article>
      <SiteFooter />
    </div>
  );
}
