import Link from 'next/link';
import Image from 'next/image';

const NewsPage = () => {
  const articles = [
    {
      title: 'PAWN Launches Mentorship Program',
      date: 'October 1, 2024',
      excerpt: 'Our new mentorship program connects experienced leaders with aspiring young professionals, fostering a new generation of excellence.',
      image: '/placeholder-news-1.svg',
      category: 'Network News'
    },
    {
      title: 'Member Spotlight: Dr. Amina Okoro',
      date: 'September 22, 2024',
      excerpt: 'Meet Dr. Okoro, a trailblazing scientist in renewable energy and a valued member of our network. Read about her journey and impact.',
      image: '/placeholder-news-2.svg',
      category: 'Member Stories'
    },
    {
      title: 'The Importance of Financial Independence for Women',
      date: 'September 15, 2024',
      excerpt: 'An opinion piece on why financial literacy and independence are crucial for empowerment and gender equality.',
      image: '/placeholder-news-3.svg',
      category: 'Opinion'
    },
    {
      title: 'Highlights from the 2024 Annual Leadership Summit',
      date: 'September 5, 2024',
      excerpt: 'Relive the best moments from our most successful summit yet, with insights from top speakers and attendees.',
      image: '/placeholder-news-4.svg',
      category: 'Event Recaps'
    }
  ];

  return (
    <>
      {/* Page Header */}
      <header className="bg-primary-purple py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl font-bold">News & Insights</h1>
          <p className="text-lg mt-2">Stay Informed and Inspired</p>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-20 bg-dark-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Articles List */}
            <div className="lg:col-span-2">
              <div className="space-y-12">
                {articles.map((article, index) => (
                  <div key={index} className="bg-gray-900 rounded-lg shadow-lg overflow-hidden md:flex">
                    <div className="md:w-1/3">
                      <Image src={article.image} alt={article.title} width={400} height={300} className="object-cover w-full h-full" />
                    </div>
                    <div className="p-8 md:w-2/3">
                      <p className="text-sm text-secondary-purple mb-2">{article.category}</p>
                      <h3 className="text-2xl font-bold mb-3">{article.title}</h3>
                      <p className="text-gray-400 mb-4 text-sm">Published on {article.date}</p>
                      <p className="text-gray-300 mb-6">{article.excerpt}</p>
                      <Link href="#" className="text-primary-purple hover:underline font-semibold">
                        Read More &rarr;
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside>
              <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-6 text-primary-purple">Categories</h3>
                <ul className="space-y-3 text-gray-300">
                  <li><a href="#" className="hover:text-secondary-purple">Network News</a></li>
                  <li><a href="#" className="hover:text-panafrican-yellow">Member Stories</a></li>
                  <li><a href="#" className="hover:text-panafrican-yellow">Opinion</a></li>
                  <li><a href="#" className="hover:text-panafrican-yellow">Event Recaps</a></li>
                  <li><a href="#" className="hover:text-panafrican-yellow">Resources</a></li>
                </ul>
              </div>
              <div className="bg-gray-800 p-8 rounded-lg shadow-lg mt-8">
                <h3 className="text-xl font-bold mb-6 text-primary-purple">Recent Posts</h3>
                <ul className="space-y-4">
                  {articles.slice(0, 3).map((article, index) => (
                    <li key={index}>
                      <Link href="#" className="text-gray-300 hover:text-secondary-purple">
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
