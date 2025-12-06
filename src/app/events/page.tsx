import Link from 'next/link';
import Image from 'next/image';
import { upcomingEvents, pastEvents } from '@/data/events';

const EventsPage = () => {
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
                <div className="relative w-full md:w-1/3 h-48 md:h-auto">
                  <Image src={event.image} alt={event.title} fill className="object-cover" />
                </div>
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
              <Link href={`/events/${event.slug}`} key={index} className="bg-muted rounded-xl group transition-transform hover:scale-[1.02] flex flex-col">
                <div className="relative w-full h-48">
                  <Image src={event.image} alt={event.title} fill className="object-cover rounded-t-xl" />
                </div>
                <div className="p-6 flex flex-col items-center justify-center flex-grow">
                  <span className="text-xl font-semibold font-heading text-foreground text-center">{event.title}</span>
                  <span className="font-body text-muted-foreground mt-2">{event.date}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default EventsPage;
