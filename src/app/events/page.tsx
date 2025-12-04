import Link from 'next/link';

const EventsPage = () => {
  const upcomingEvents = [
    {
      title: 'Annual Leadership Summit',
      date: 'October 25-27, 2024',
      location: 'Online',
      description: 'A weekend of inspiring talks, workshops, and networking opportunities with leaders from across the diaspora.',
      color: 'bg-muted',
      slug: 'annual-leadership-summit'
    },
    {
      title: 'Tech & Innovation Workshop',
      date: 'November 15, 2024',
      location: 'Lagos, Nigeria & Online',
      description: 'A hands-on workshop for women looking to break into or advance in the tech industry.',
      color: 'bg-muted',
      slug: 'tech-innovation-workshop'
    },
    {
      title: 'Cultural Heritage Gala',
      date: 'December 12, 2024',
      location: 'Accra, Ghana',
      description: 'A celebration of African culture, art, and music. A night to remember!',
      color: 'bg-muted',
      slug: 'cultural-heritage-gala'
    },
  ];

  const pastEvents = [
    { title: 'Financial Literacy Seminar', date: 'August 2024', slug: 'financial-literacy-seminar' },
    { title: 'Inaugural Conference', date: 'May 2023', slug: 'inaugural-conference' },
    { title: 'Solidarity With Palestine', date: 'TBD', slug: 'solidarity-with-palestine' },
    { title: 'Social Justice: Githurai Kimoja Festival', date: 'TBD', slug: 'social-justice-githurai-kimoja-festival' },
    { title: 'Solidarity With Venezuela', date: 'TBD', slug: 'solidarity-with-venezuela' },
    { title: 'Grassroots Feminist Women Education', date: 'TBD', slug: 'grassroots-feminist-women-education' },
    { title: 'Solidarity With The Families Of Victims Of The Gen-Z Protests', date: 'TBD', slug: 'solidarity-with-the-families-of-victims-of-the-gen-z-protests' },
    { title: 'Study Circle', date: 'TBD', slug: 'study-circle' },
  ];

  return (
    <>
      {/* Page Header */}
      <header className="bg-primary py-24">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl font-bold font-heading">Events</h1>
          <p className="text-lg mt-2 font-body">Connect, Learn, and Grow With Us</p>
        </div>
      </header>

      {/* Upcoming Events Section */}
      <section className="py-28 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center font-heading mb-16 text-foreground">Upcoming Events</h2>
          <div className="space-y-12">
            {upcomingEvents.map((event, index) => (
              <Link href={`/events/${event.slug}`} key={index} className="md:flex items-center bg-background rounded-xl shadow-md overflow-hidden group transition-transform hover:scale-[1.02]">
                <div className={`w-full md:w-1/3 h-48 md:h-full ${event.color}`} />
                <div className="p-8 md:w-2/3">
                  <h3 className="text-2xl font-bold font-heading mb-2 text-foreground">{event.title}</h3>
                  <div className="font-body text-muted-foreground mb-4">
                    <span>{event.date}</span> | <span>{event.location}</span>
                  </div>
                  <p className="font-body text-muted-foreground mb-6">{event.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center font-heading mb-16 text-foreground">Past Events</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <Link href={`/events/${event.slug}`} key={index} className="bg-muted p-6 rounded-xl group transition-transform hover:scale-[1.02] flex flex-col items-center justify-center">
                  <span className="text-xl font-semibold font-heading text-foreground text-center">{event.title}</span>
                  <span className="font-body text-muted-foreground mt-2">{event.date}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default EventsPage;
