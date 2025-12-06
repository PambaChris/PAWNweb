import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { upcomingEvents, pastEvents } from '@/data/events';

interface Speaker {
  name: string;
  title: string;
  image: string;
}

interface ScheduleItem {
  time: string;
  activity: string;
}

interface Event {
  title: string;
  date: string;
  location?: string;
  description?: string; // Made optional
  detailedDescription?: string;
  color?: string; // Made optional
  slug: string;
  image?: string;
  speakers?: Speaker[];
  schedule?: ScheduleItem[];
  registrationLink?: string;
}

const allEvents = [...upcomingEvents, ...pastEvents];

export async function generateStaticParams() {
  const params = allEvents.map((event) => ({
    slug: event.slug,
  }));
  console.log("generateStaticParams - Generated Slugs:", params); // Log generated slugs
  return params;
}

interface EventPageProps {
  params: {
    slug: string;
  };
}

export default async function EventPage({ params }: EventPageProps) {
  const { slug } = await params;

  const event = allEvents.find(e => e.slug === slug);

  if (!event) {
    notFound();
  }

  return (
    <>
      {/* Page Header / Hero Section */}
      <header className="relative py-24 md:py-32 lg:py-48 bg-primary text-white overflow-hidden">
        {event.image && (
          <Image
            src={event.image}
            alt={event.title}
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
          />
        )}
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold font-heading">{event.title}</h1>
          <p className="text-lg md:text-xl mt-4 font-body">
            {event.date} {event.location ? `| ${event.location}` : ''}
          </p>
          {event.registrationLink && (
            <Link href={event.registrationLink} target="_blank" rel="noopener noreferrer">
              <button className="mt-8 bg-accent text-accent-foreground px-8 py-3 rounded-lg text-lg font-semibold hover:bg-accent/90 transition-colors duration-300 shadow-lg">
                Register Now
              </button>
            </Link>
          )}
        </div>
      </header>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* About this Event */}
            <div className="bg-muted p-8 rounded-xl shadow-md mb-8">
              <h2 className="text-3xl font-bold font-heading mb-4 text-foreground">About This Event</h2>
              <p className="font-body text-muted-foreground leading-relaxed">
                {(event as any).detailedDescription || event.description || 'No detailed description available.'}
              </p>
            </div>

            {/* Speakers Section */}
            {(event as any).speakers && (event as any).speakers.length > 0 && (
              <div className="bg-muted p-8 rounded-xl shadow-md mb-8">
                <h2 className="text-3xl font-bold font-heading mb-6 text-foreground text-center">Meet the Speakers</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {(event as any).speakers.map((speaker: Speaker, index: number) => (
                    <div key={index} className="text-center">
                      <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-primary shadow-lg">
                        {speaker.image ? (
                          <Image
                            src={speaker.image}
                            alt={speaker.name}
                            width={128}
                            height={128}
                            style={{ objectFit: 'cover' }}
                          />
                        ) : (
                          <div className="w-full h-full bg-primary flex items-center justify-center text-white text-xl font-bold">
                            {speaker.name.charAt(0)}
                          </div>
                        )}
                      </div>
                      <h3 className="text-xl font-semibold font-heading text-foreground">{speaker.name}</h3>
                      <p className="font-body text-muted-foreground">{speaker.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Schedule Section */}
            {(event as any).schedule && (event as any).schedule.length > 0 && (
              <div className="bg-muted p-8 rounded-xl shadow-md mb-8">
                <h2 className="text-3xl font-bold font-heading mb-6 text-foreground text-center">Event Schedule</h2>
                <ul className="space-y-4">
                  {(event as any).schedule.map((item: ScheduleItem, index: number) => (
                    <li key={index} className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-background p-4 rounded-lg shadow-sm">
                      <span className="font-semibold font-body text-primary text-lg">{item.time}</span>
                      <span className="font-body text-foreground text-lg sm:text-right">{item.activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* General Info / Description if no detailed description */}
            {!(event as any).detailedDescription && (event.description || event.location) && (
              <div className="bg-muted p-8 rounded-xl shadow-md">
                <h2 className="text-3xl font-bold font-heading mb-4 text-foreground">General Information</h2>
                <p className="font-body text-muted-foreground mb-4">{event.description || 'No description available.'}</p>
                {event.location && (
                  <p className="font-body text-muted-foreground"><strong>Location:</strong> {event.location}</p>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
