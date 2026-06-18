// Content ported from pawn-blackfeminists.org

export type EventItem = {
  slug: string;
  title: string;
  date: string;
  location?: string;
  image: string;
  blurb: string;
  body: string;
  upcoming: boolean;
};

export type NewsItem = {
  slug: string;
  title: string;
  category: string;
  date: string;
  image: string;
  blurb: string;
  body: string;
};

export type Program = {
  title: string;
  description: string;
};

export type Leader = {
  name: string;
  role: string;
};

const img = (p: string) => p;

export const events: EventItem[] = [
  {
    slug: "16-days-of-activism-against-gender-based-violence-and-political-spa",
    title: "16 Days of Activism Against Gender-Based Violence",
    date: "November 25 – December 10, 2025",
    location: "Global",
    image: img("/kuillust.jpeg"),
    blurb:
      "A global campaign confronting gender-based violence and political repression, rooted in Pan-African solidarity.",
    body:
      "PAWN joins the international 16 Days of Activism Against Gender-Based Violence with chapter actions across the diaspora. Programming includes survivor circles, legal clinics, public teach-ins, and a closing political space for movement strategy.",
    upcoming: true,
  },
  {
    slug: "inaugural-conference",
    title: "Inaugural PAWN Conference",
    date: "May 2025",
    location: "Nairobi, Kenya",
    image: img("/inauguralconference.jpg"),
    blurb:
      "Our first global convening — setting the agenda for a decade of Pan-African feminist organizing.",
    body:
      "The inaugural PAWN conference brought members from across Africa, the Caribbean, Europe, and the Americas to set shared priorities on earth justice, financial sovereignty, and the safety of women and girls.",
    upcoming: false,
  },
  {
    slug: "solidarity-with-palestine",
    title: "Solidarity With Palestine",
    date: "February 2025",
    location: "Hybrid",
    image: img("/WhatsApp Image 2025-12-03 at 4.19.43 PM.jpeg"),
    blurb:
      "A transnational feminist statement and gathering in solidarity with Palestinian women and children.",
    body:
      "Pan-African feminism is internationalist. This gathering centered the testimony of Palestinian women organizers and built shared commitments on ceasefire advocacy, humanitarian aid, and political education.",
    upcoming: false,
  },
  {
    slug: "financial-literacy-seminar",
    title: "Financial Literacy Seminar",
    date: "August 2025",
    location: "Online",
    image: img("/news-financial-independence.jpg"),
    blurb:
      "Practical tools for collective economic power — saving, investing, and cooperative finance for our communities.",
    body:
      "A six-week seminar series introducing members to household budgeting, cooperative savings (chamas, susus, ROSCAs), and investment vehicles designed to keep wealth circulating within our communities.",
    upcoming: true,
  },
  {
    slug: "social-justice-githurai-kimoja-festival",
    title: "Social Justice: Githurai Kimoja Festival",
    date: "March 2025",
    location: "Githurai, Nairobi",
    image: img("/KimojaMain.jpeg"),
    blurb:
      "A neighborhood festival of art, music, and political education organized with the people of Githurai.",
    body:
      "Kimoja means 'we are one.' The festival turned a Nairobi public space into a day of cultural performance, mutual aid, and grassroots feminist organizing.",
    upcoming: false,
  },
  {
    slug: "solidarity-with-venezuela",
    title: "Solidarity With Venezuela",
    date: "April 2025",
    location: "Hybrid",
    image: img("/internacionalvenezuela.jpeg"),
    blurb:
      "Standing with Venezuelan women resisting sanctions, intervention, and economic warfare.",
    body:
      "A teach-in and statement of solidarity centering the voices of Afro-Venezuelan organizers fighting against US sanctions and for the right of their people to self-determination.",
    upcoming: false,
  },
];

export const news: NewsItem[] = [
  {
    slug: "member-spotlight-caroline-moko",
    title: "Member Spotlight: Caroline Moko, Earth Justice Committee",
    category: "Member Stories",
    date: "September 22, 2024",
    image: img("/WhatsApp Image 2025-12-04 at 3.03.59 PM.jpeg"),
    blurb:
      "Caroline leads a network of 5,000 women smallholder farmers fighting for indigenous farming methods and economic self-reliance.",
    body:
      "Caroline Moko is an ardent defender of food sovereignty and agroecology. As a farmer and leader of PAWN's Earth Justice Committee, she organizes a network of 5,000 predominantly women smallholder farmers across East Africa, fighting for indigenous farming methods and improved market access for economic self-reliance.",
  },
  {
    slug: "launches-mentorship-program",
    title: "PAWN Launches Mentorship Program",
    category: "Network News",
    date: "October 1, 2024",
    image: img("/news-mentorship-program.jpg"),
    blurb:
      "Connecting experienced leaders with aspiring young professionals to nurture a new generation of excellence.",
    body:
      "Our new mentorship program connects experienced leaders across the diaspora with aspiring young professionals — fostering intergenerational exchange and a pipeline of feminist leadership across every sector of our communities.",
  },
  {
    slug: "the-importance-of-financial-independence-for-women",
    title: "The Importance of Financial Independence for Women",
    category: "Opinion",
    date: "September 15, 2024",
    image: img("/news-financial-independence.jpg"),
    blurb:
      "Why financial literacy and independence are foundational to empowerment and gender equality.",
    body:
      "Financial independence is not a luxury — it is the precondition for safety, mobility, and meaningful choice. This opinion piece lays out why economic literacy must be at the heart of any serious feminist program for our communities.",
  },
  {
    slug: "highlights-from-the-2024-annual-leadership-summit",
    title: "Highlights from the 2024 Annual Leadership Summit",
    category: "Event Recaps",
    date: "September 5, 2024",
    image: img("/news-annual-leadership-summit.jpg"),
    blurb:
      "Relive the best moments from our most successful summit yet, with insights from top speakers and attendees.",
    body:
      "Three days, dozens of speakers, and hundreds of members from across the diaspora. A recap of the most resonant talks, workshops, and decisions made at the 2024 Annual Leadership Summit.",
  },
];

export const programs: Program[] = [
  {
    title: "Earth Justice & Food Sovereignty",
    description:
      "Defending indigenous farming, seed sovereignty, and the rights of women smallholder farmers across the continent.",
  },
  {
    title: "Ending Gender-Based Violence",
    description:
      "Survivor-led organizing, legal advocacy, and political education to end violence against women and girls.",
  },
  {
    title: "Financial Literacy & Economic Power",
    description:
      "Cooperative savings, investment education, and economic infrastructure designed to keep wealth in our communities.",
  },
  {
    title: "Mentorship & Leadership",
    description:
      "Intergenerational mentorship connecting movement elders with the next generation of organizers.",
  },
  {
    title: "Transnational Solidarity",
    description:
      "Building shared analysis and material support with women's movements in Palestine, Venezuela, and beyond.",
  },
  {
    title: "Culture & Heritage",
    description:
      "Festivals, art, and storytelling that center the cultural memory of women of African descent.",
  },
];

export const leadership: Leader[] = [
  { name: "Sefu Sanni", role: "Founder & President" },
  { name: "Caroline Moko", role: "Vice President" },
  { name: "Anne Njeri", role: "Director of Programs" },
  { name: "Christian Pamba", role: "Director of Communications" },
];

export const heroImage = img("/IMG_4384.jpg");
export const galleryImages = [
  img("/IMG_4523.jpg"),
  img("/IMG_4678.jpg"),
  img("/IMG_4533.jpg"),
  img("/fisherwomen.jpeg"),
];
