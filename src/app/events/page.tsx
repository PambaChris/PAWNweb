import Link from 'next/link';

const EventsPage = () => {
  const upcomingEvents = [
    {
      title: 'Annual Leadership Summit',
      date: 'October 25-27, 2024',
      location: 'Online',
      description: 'A weekend of inspiring talks, workshops, and networking opportunities with leaders from across the diaspora.',
      color: 'bg-primary-lilac'
    },
    {
      title: 'Tech & Innovation Workshop',
      date: 'November 15, 2024',
      location: 'Lagos, Nigeria & Online',
      description: 'A hands-on workshop for women looking to break into or advance in the tech industry.',
      color: 'bg-secondary-lilac'
    },
    {
      title: 'Cultural Heritage Gala',
      date: 'December 12, 2024',
      location: 'Accra, Ghana',
      description: 'A celebration of African culture, art, and music. A night to remember!',
      color: 'bg-primary-lilac'
    },
  ];

  const pastEvents = [
    { title: 'Financial Literacy Seminar', date: 'August 2024' },
    { title: 'PAWN Inaugural Conference', date: 'May 2023' },
  ];

  return (
    <>
      {/* Page Header */}
      <header className="bg-primary-lilac py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl font-bold">Events</h1>
          <p className="text-lg mt-2">Connect, Learn, and Grow With Us</p>
        </div>
      </header>

      {/* Upcoming Events Section */}
      <section className="py-20 bg-dark-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary-lilac">Upcoming Events</h2>
          <div className="space-y-12">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="md:flex items-center bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <div className={`w-full md:w-1/3 h-48 md:h-full ${event.color}`} />
                <div className="p-8 md:w-2/3">
                  <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                  <div className="text-gray-400 mb-4">
                    <span>{event.date}</span> | <span>{event.location}</span>
                  </div>
                  <p className="text-gray-300 mb-6">{event.description}</p>
                  <Link href="#" className="bg-primary-lilac text-white font-bold py-2 px-6 rounded-full hover:bg-secondary-lilac transition-colors duration-300">
                    Register Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="py-20 bg-dark-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary-lilac">Past Events</h2>
          <div className="max-w-2xl mx-auto">
            <ul className="space-y-4">
              {pastEvents.map((event, index) => (
                <li key={index} className="bg-gray-900 p-6 rounded-lg text-center">
                  <span className="text-xl font-semibold">{event.title}</span>
                  <span className="text-gray-400 ml-4">{event.date}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default EventsPage;
