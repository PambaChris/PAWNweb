import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <Link href="#our-mission">
          <img src="/banner.svg" alt="Pan-African Women's Network Banner" className="w-full h-auto object-cover cursor-pointer" />
        </Link>
        <div className="relative bg-muted py-28 md:py-36 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-foreground">
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-4">
            Empowering Pan-African Women
          </h1>
          <p className="text-lg md:text-xl font-body mb-6 max-w-2xl">
            Connecting, inspiring, and uplifting women of African descent across the globe.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section id="our-mission" className="py-28 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-heading mb-6 text-primary">Our Mission</h2>
          <p className="text-lg max-w-3xl mx-auto font-body text-muted-foreground">
            To build a strong, supportive, and collaborative network that fosters personal and professional growth, celebrates our heritage, and drives positive change in our communities and beyond.
          </p>
        </div>
      </section>

      <section className="py-28 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center font-heading mb-16 text-foreground">Featured Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background rounded-xl overflow-hidden shadow-md group transition-transform hover:scale-[1.02]">
              <div className="h-48 bg-muted" />
              <div className="p-6">
                <h3 className="text-xl font-bold font-heading mb-2">Annual Leadership Summit</h3>
                <p className="text-muted-foreground font-body mb-4">Join us for a weekend of inspiring talks, workshops, and networking opportunities.</p>
                <Link href="/events" className="text-primary font-body hover:underline group-hover:translate-x-1 transition-transform">
                  View Details
                </Link>
              </div>
            </div>
            {/* Event Card 2 */}
            <div className="bg-background rounded-xl overflow-hidden shadow-md group transition-transform hover:scale-[1.02]">
              <div className="h-48 bg-muted" />
              <div className="p-6">
                <h3 className="text-xl font-bold font-heading mb-2">Tech & Innovation Workshop</h3>
                <p className="text-muted-foreground font-body mb-4">A hands-on workshop for women looking to break into the tech industry.</p>
                <Link href="/events" className="text-primary font-body hover:underline group-hover:translate-x-1 transition-transform">
                  View Details
                </Link>
              </div>
            </div>
            {/* Event Card 3 */}
            <div className="bg-background rounded-xl overflow-hidden shadow-md group transition-transform hover:scale-[1.02]">
              <div className="h-48 bg-muted" />
              <div className="p-6">
                <h3 className="text-xl font-bold font-heading mb-2">Cultural Heritage Gala</h3>
                <p className="text-muted-foreground font-body mb-4">A celebration of African culture, art, and music. A night to remember!</p>
                <Link href="/events" className="text-primary font-body hover:underline group-hover:translate-x-1 transition-transform">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center font-heading mb-16 text-foreground">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-muted p-6 rounded-xl shadow-md group transition-transform hover:scale-[1.02]">
              <h3 className="text-xl font-bold font-heading mb-2">Launches Mentorship Program</h3>
              <p className="text-muted-foreground font-body mb-4">Our new mentorship program connects experienced leaders with aspiring young professionals...</p>
              <Link href="/news" className="text-primary font-body hover:underline group-hover:translate-x-1 transition-transform">
                Read More
              </Link>
            </div>
            {/* News Item 2 */}
            <div className="bg-muted p-6 rounded-xl shadow-md group transition-transform hover:scale-[1.02]">
              <h3 className="text-xl font-bold font-heading mb-2">Member Spotlight: Dr. Amina Okoro</h3>
              <p className="text-muted-foreground font-body mb-4">Meet Dr. Okoro, a trailblazing scientist and a valued member of our network...</p>
              <Link href="/news" className="text-primary font-body hover:underline group-hover:translate-x-1 transition-transform">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
