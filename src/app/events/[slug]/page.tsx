import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

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

const events: Event[] = [
  {
    title: 'Annual Leadership Summit',
    date: 'October 25-27, 2024',
    location: 'Online',
    description: 'A weekend of inspiring talks, workshops, and networking opportunities with leaders from across the diaspora.',
    detailedDescription: 'Join us for our Annual Leadership Summit, a premier virtual event designed to empower and connect women leaders of African descent globally. Over three days, you\'ll engage with thought-provoking keynotes, participate in interactive workshops, and network with influential leaders across various sectors. This year\'s theme focuses on "Leading with Resilience and Innovation in a Changing World," offering practical strategies and insights to navigate today\'s complex challenges.',
    color: 'bg-muted',
    slug: 'annual-leadership-summit',
    image: '/IMG_4384.jpg', // Placeholder image from public folder
    speakers: [
      { name: 'Dr. Aisha Rahman', title: 'Global Strategy Consultant', image: '/IMG_4284.jpg' },
      { name: 'Ms. Ngozi Okoro', title: 'Tech Innovator & CEO', image: '/IMG_4425.jpg' },
      { name: 'Prof. Jide Adebayo', title: 'Leadership Development Expert', image: '/IMG_4430.jpg' },
    ],
    schedule: [
      { time: 'Day 1: 09:00 AM - 10:00 AM', activity: 'Opening Keynote: Resilience in Leadership' },
      { time: 'Day 1: 10:30 AM - 12:00 PM', activity: 'Panel Discussion: Women in Global Leadership' },
      { time: 'Day 2: 09:00 AM - 05:00 PM', activity: 'Workshops & Breakout Sessions' },
      { time: 'Day 3: 09:00 AM - 11:00 AM', activity: 'Future of Pan-African Women Leaders' },
      { time: 'Day 3: 11:30 AM - 12:30 PM', activity: 'Closing Remarks & Networking' },
    ],
    registrationLink: 'https://example.com/register-summit' // Placeholder registration link
  },
  {
    title: 'Tech & Innovation Workshop',
    date: 'November 15, 2024',
    location: 'Lagos, Nigeria & Online',
    description: 'A hands-on workshop for women looking to break into or advance in the tech industry.',
    detailedDescription: 'Dive deep into the world of technology and innovation with our expert-led workshop. This intensive session is designed for women aspiring to start or grow their careers in the tech industry. Learn about emerging technologies, coding fundamentals, product management, and effective networking strategies. We\'ll cover everything from front-end development to AI basics, providing hands-on experience and mentorship opportunities. This is your chance to gain practical skills and connect with like-minded individuals.',
    color: 'bg-muted',
    slug: 'tech-innovation-workshop',
    image: '/IMG_4652.jpg',
    speakers: [
      { name: 'Fatima Zahra', title: 'Senior Software Engineer', image: '/IMG_4660.jpg' },
      { name: 'Amina Khan', title: 'AI/ML Researcher', image: '/IMG_4663.jpg' }
    ],
    schedule: [
      { time: 'Day 1: 09:00 AM - 12:00 PM', activity: 'Introduction to Tech & Coding' },
      { time: 'Day 1: 01:00 PM - 05:00 PM', activity: 'Hands-on: Web Development Basics' },
      { time: 'Day 2: 09:00 AM - 12:00 PM', activity: 'Product Management & UI/UX' },
      { time: 'Day 2: 01:00 PM - 05:00 PM', activity: 'Emerging Tech & AI Overview' }
    ],
    registrationLink: 'https://example.com/register-tech'
  },
  {
    title: 'Cultural Heritage Gala',
    date: 'December 12, 2024',
    location: 'Accra, Ghana',
    description: 'A celebration of African culture, art, and music. A night to remember!',
    detailedDescription: 'Experience an evening of unparalleled elegance and cultural celebration at our Annual Cultural Heritage Gala. This spectacular event brings together communities to honor and showcase the rich tapestry of African traditions through music, dance, art, and fashion. Enjoy gourmet cuisine, live performances, and an exclusive art exhibition. It\'s a night dedicated to fostering unity, appreciating our roots, and building a stronger future together. Formal African attire or black-tie encouraged.',
    color: 'bg-muted',
    slug: 'cultural-heritage-gala',
    image: '/IMG_4217.jpg',
    speakers: [
      { name: 'Dr. Zola Mbatha', title: 'Cultural Anthropologist', image: '/IMG_4221.jpg' },
      { name: 'Kwame Nkrumah Jr.', title: 'Historian & Activist', image: '/IMG_4225.jpg' }
    ],
    schedule: [
      { time: '06:00 PM', activity: 'Red Carpet & Cocktail Reception' },
      { time: '07:00 PM', activity: 'Opening Remarks & Dinner' },
      { time: '08:00 PM', activity: 'Cultural Performances & Fashion Show' },
      { time: '09:30 PM', activity: 'Keynote Address & Awards' },
      { time: '10:30 PM', activity: 'Networking & Dancing' }
    ],
    registrationLink: 'https://example.com/register-gala'
  },
  { title: 'Financial Literacy Seminar', date: 'August 2024', slug: 'financial-literacy-seminar' },
  { title: 'Inaugural Conference', date: 'May 2023', slug: 'inaugural-conference' },
  {
    title: 'Solidarity With Palestine',
    date: 'TBD',
    slug: 'solidarity-with-palestine',
    detailedDescription: "A powerful demonstration of solidarity and support for the people of Palestine. This event brought together activists, community leaders, and concerned citizens to raise awareness about the ongoing humanitarian crisis and advocate for peace and justice. Through speeches, cultural performances, and educational sessions, participants explored the history and current situation in Palestine, fostering a deeper understanding and commitment to action.",
    image: '/IMG_4608.jpg'
  },
  {
    title: 'Social Justice: Githurai Kimoja Festival',
    date: 'TBD',
    location: 'Githurai, Kenya', // Added location
    slug: 'social-justice-githurai-kimoja-festival',
    detailedDescription: "The Githurai Kimoja Festival is a vibrant celebration of social justice, community empowerment, and cultural pride within the Githurai Kimoja community. This annual event brings together local artists, performers, community organizers, and residents to address key issues of social equity, promote cultural heritage, and inspire collective action for positive change. Through a rich program of music, dance, spoken word poetry, and interactive workshops, the festival provides a platform for dialogue, education, and advocacy. Attendees will engage with topics such as youth empowerment, environmental justice, gender equality, and local governance, fostering a deeper understanding and commitment to building a more just and inclusive society. Join us for a day of inspiration, connection, and celebration!",
    image: '/KimojaMain.jpeg',
    speakers: [
      { name: 'Mwangi wa Githurai', title: 'Community Activist', image: '/IMG_4187.jpg' }, // Placeholder images from public
      { name: 'Dr. Asha Abdi', title: 'Sociologist & Advocate', image: '/IMG_4254.jpg' },
      { name: 'Wanjiku Mbuthia', title: 'Youth Leader & Poet', image: '/IMG_4595.jpg' },
    ],
    schedule: [
      { time: '10:00 AM - 11:00 AM', activity: 'Opening Ceremony & Traditional Performances' },
      { time: '11:00 AM - 12:30 PM', activity: 'Panel Discussion: Youth & Social Justice in Githurai' },
      { time: '12:30 PM - 01:30 PM', activity: 'Lunch & Networking' },
      { time: '01:30 PM - 03:00 PM', activity: 'Interactive Workshops (Environmental Justice, Gender Equality)' },
      { time: '03:00 PM - 04:30 PM', activity: 'Spoken Word & Local Artist Showcase' },
      { time: '04:30 PM - 05:00 PM', activity: 'Closing Remarks & Call to Action' },
    ],
    registrationLink: 'https://example.com/register-githurai-kimoja'
  },
  {
    title: 'Solidarity With Venezuela',
    date: 'TBD',
    slug: 'solidarity-with-venezuela',
    detailedDescription: "An event dedicated to expressing solidarity with the people of Venezuela. This gathering aimed to shed light on the socio-political challenges faced by the nation and its citizens, promoting dialogue and support for peaceful resolutions. Discussions covered humanitarian efforts, international perspectives, and ways in which global communities can contribute to stability and well-being in Venezuela.",
    image: '/venezuelaembassy.jpeg'
  },
  {
    title: 'Grassroots Feminist Women Education',
    date: 'TBD',
    slug: 'grassroots-feminist-women-education',
    detailedDescription: "A transformative educational initiative focused on empowering grassroots feminist women. This program provided workshops and training sessions on leadership, advocacy, and human rights, tailored to the unique experiences of women at the community level. The goal was to equip participants with the knowledge and tools to drive social change and advocate for gender equality within their local contexts.",
    image: '/WhatsApp Image 2025-12-04 at 3.04.08 PM.jpeg'
  },
  {
    title: 'Solidarity With The Families Of Victims Of The Gen-Z Protests',
    date: 'TBD',
    slug: 'solidarity-with-the-families-of-victims-of-the-gen-z-protests',
    detailedDescription: "A poignant event held to offer solidarity and support to the families of victims from the recent Gen-Z protests. The gathering provided a platform for grieving families to share their stories, find community, and call for accountability and justice. It emphasized the importance of youth activism and the need to protect fundamental rights, while honoring those who have suffered.",
    image: '/IMG_4271.jpg'
  },
  {
    title: 'Study Circle',
    date: 'TBD',
    slug: 'study-circle',
    detailedDescription: "Our regular Study Circle sessions provide a dedicated space for in-depth learning and intellectual exchange. Participants engage in critical discussions on various topics relevant to Pan-African women, including history, philosophy, current affairs, and social justice. These circles foster intellectual growth, encourage diverse perspectives, and strengthen our collective understanding of complex issues, promoting a culture of continuous learning.",
    image: '/studycircle.jpeg'
  },
];

export async function generateStaticParams() {
  const params = events.map((event) => ({
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

  const event = events.find(e => e.slug === slug);

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
            className="opacity-30"
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
                {event.detailedDescription || event.description || 'No detailed description available.'}
              </p>
            </div>

            {/* Speakers Section */}
            {event.speakers && event.speakers.length > 0 && (
              <div className="bg-muted p-8 rounded-xl shadow-md mb-8">
                <h2 className="text-3xl font-bold font-heading mb-6 text-foreground text-center">Meet the Speakers</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {event.speakers.map((speaker, index) => (
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
            {event.schedule && event.schedule.length > 0 && (
              <div className="bg-muted p-8 rounded-xl shadow-md mb-8">
                <h2 className="text-3xl font-bold font-heading mb-6 text-foreground text-center">Event Schedule</h2>
                <ul className="space-y-4">
                  {event.schedule.map((item, index) => (
                    <li key={index} className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-background p-4 rounded-lg shadow-sm">
                      <span className="font-semibold font-body text-primary text-lg">{item.time}</span>
                      <span className="font-body text-foreground text-lg sm:text-right">{item.activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* General Info / Description if no detailed description */}
            {!event.detailedDescription && (event.description || event.location) && (
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