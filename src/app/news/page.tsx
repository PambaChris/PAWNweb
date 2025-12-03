import Link from 'next/link';
import Image from 'next/image';

const NewsPage = () => {
  const articles = [
    {
      title: 'Launches Mentorship Program',
      date: 'October 1, 2024',
      excerpt: 'Our new mentorship program connects experienced leaders with aspiring young professionals, fostering a new generation of excellence.',
      image: '/news-1.svg',
      category: 'Network News'
    },
    {
      title: 'Member Spotlight: Caroline Moko, Earth Justice committee',
      date: 'September 22, 2024',
      excerpt: 'Meet Caroline Moko, a passionate advocate for Earth Justice and a valued member of our committee. Read about her journey and impact.',
      image: '/news-2.svg',
      category: 'Member Stories'
    },
    {
      title: 'The Importance of Financial Independence for Women',
      date: 'September 15, 2024',
      excerpt: 'An opinion piece on why financial literacy and independence are crucial for empowerment and gender equality.',
      image: '/news-3.svg',
      category: 'Opinion'
    },
    {
      title: 'Highlights from the 2024 Annual Leadership Summit',
      date: 'September 5, 2024',
      excerpt: 'Relive the best moments from our most successful summit yet, with insights from top speakers and attendees.',
      image: '/news-4.svg',
      category: 'Event Recaps'
    }
  ];

  return (
    <>
      {/* Page Header */}
      <header className="bg-primary py-24">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl font-bold font-heading">News & Insights</h1>
          <p className="text-lg mt-2 font-body">Stay Informed and Inspired</p>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-28 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* Articles List */}
            <div className="lg:col-span-2">
              <div className="space-y-12">
                {articles.map((article, index) => (
                  <div key={index} className="bg-background rounded-xl shadow-md overflow-hidden md:flex group transition-transform hover:scale-[1.02]">
                    <div className="md:w-1/3">
                      <Image src={article.image} alt={article.title} width={400} height={300} className="object-cover w-full h-full" />
                    </div>
                    <div className="p-8 md:w-2/3">
                      <p className="text-sm font-body text-primary mb-2">{article.category}</p>
                      <h3 className="text-2xl font-bold font-heading mb-3 text-foreground">{article.title}</h3>
                      <p className="text-muted-foreground mb-4 text-sm font-body">Published on {article.date}</p>
                      <p className="text-muted-foreground mb-6 font-body">{article.excerpt}</p>
                      <Link href="#" className="text-primary hover:underline font-semibold font-body group-hover:translate-x-1 transition-transform">
                        Read More &rarr;
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside>
              <div className="bg-background p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-bold font-heading mb-6 text-foreground">Categories</h3>
                <ul className="space-y-3 font-body text-muted-foreground">
                  <li><a href="#" className="hover:text-primary">Network News</a></li>
                  <li><a href="#" className="hover:text-primary">Member Stories</a></li>
                  <li><a href="#" className="hover:text-primary">Opinion</a></li>
                  <li><a href="#" className="hover:text-primary">Event Recaps</a></li>
                  <li><a href="#" className="hover:text-primary">Resources</a></li>
                </ul>
              </div>
              <div className="bg-background p-8 rounded-xl shadow-md mt-8">
                <h3 className="text-xl font-bold font-heading mb-6 text-foreground">Recent Posts</h3>
                <ul className="space-y-4">
                  {articles.slice(0, 3).map((article, index) => (
                    <li key={index}>
                      <Link href="#" className="text-muted-foreground font-body hover:text-primary">
                        {article.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

          </div>
        </div>
      </section>
    </>
  );
};

export default NewsPage;
