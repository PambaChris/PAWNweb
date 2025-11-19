import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: "url('/placeholder-hero.svg')" }}>
        <div className="absolute inset-0 bg-panafrican-black bg-opacity-60" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Empowering Pan-African Women
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            Connecting, inspiring, and uplifting women of African descent across the globe.
          </p>
          <Link href="/about" className="bg-panafrican-yellow text-panafrican-black font-bold py-3 px-8 rounded-full hover:bg-yellow-300 transition-colors duration-300">
              Learn More
          </Link>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-panafrican-yellow">Our Mission</h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-300">
            To build a strong, supportive, and collaborative network that fosters personal and professional growth, celebrates our heritage, and drives positive change in our communities and beyond.
          </p>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-panafrican-green">Featured Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Event Card 1 */}
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
              <div className="h-48 bg-panafrican-red" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Annual Leadership Summit</h3>
                <p className="text-gray-400 mb-4">Join us for a weekend of inspiring talks, workshops, and networking opportunities.</p>
                <Link href="/events" className="text-panafrican-yellow hover:underline">
                  View Details
                </Link>
              </div>
            </div>
            {/* Event Card 2 */}
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
              <div className="h-48 bg-panafrican-yellow" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Tech & Innovation Workshop</h3>
                <p className="text-gray-400 mb-4">A hands-on workshop for women looking to break into the tech industry.</p>
                <Link href="/events" className="text-panafrican-yellow hover:underline">
                  View Details
                </Link>
              </div>
            </div>
            {/* Event Card 3 */}
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
              <div className="h-48 bg-panafrican-green" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Cultural Heritage Gala</h3>
                <p className="text-gray-400 mb-4">A celebration of African culture, art, and music. A night to remember!</p>
                <Link href="/events" className="text-panafrican-yellow hover:underline">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-panafrican-red">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* News Item 1 */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">PAWN Launches Mentorship Program</h3>
              <p className="text-gray-400 mb-4">Our new mentorship program connects experienced leaders with aspiring young professionals...</p>
              <Link href="/news" className="text-panafrican-yellow hover:underline">
                Read More
              </Link>
            </div>
            {/* News Item 2 */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Member Spotlight: Dr. Amina Okoro</h3>
              <p className="text-gray-400 mb-4">Meet Dr. Okoro, a trailblazing scientist and a valued member of our network...</p>
              <Link href="/news" className="text-panafrican-yellow hover:underline">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
