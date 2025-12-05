import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { newsArticles, NewsArticle } from '@/data/news';

export async function generateStaticParams() {
  const params = newsArticles.map((article) => ({
    slug: article.slug,
  }));
  return params;
}

interface NewsPageProps {
  params: {
    slug: string;
  };
}

export default async function NewsDetailPage({ params }: NewsPageProps) {
  const { slug } = await params;

  const article = newsArticles.find(a => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <header className="bg-primary py-24">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold font-heading">{article.title}</h1>
          <p className="text-lg md:text-xl mt-4 font-body">
            {article.date} | {article.category}
          </p>
        </div>
      </header>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-center text-foreground font-body mb-8">
              Discover how our new mentorship program connects aspiring young professionals with experienced leaders, fostering growth and excellence.
            </p>
            {article.image && (
              <div className="relative w-full h-96 mb-8 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            <div className="prose prose-lg mx-auto text-muted-foreground" dangerouslySetInnerHTML={{ __html: article.fullContent }} />

            <div className="mt-12 text-center">
              <Link href="/news" className="text-primary font-body hover:underline text-xl">
                &larr; Back to News
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
