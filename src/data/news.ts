export interface NewsArticle {
  title: string;
  date: string;
  excerpt: string;
  fullContent: string;
  image: string;
  category: string;
  slug: string;
}

export const newsArticles: NewsArticle[] = [
  {
    title: 'Launches Mentorship Program',
    date: 'October 1, 2024',
    excerpt: 'Our new mentorship program connects experienced leaders with aspiring young professionals, fostering a new generation of excellence.',
    fullContent: `
      <p class="mb-4">The Pan-African Women's Network is proud to announce the launch of its new Mentorship Program, designed to connect experienced leaders with aspiring young professionals across the African diaspora. This initiative aims to foster a new generation of excellence by providing guidance, support, and networking opportunities.</p>
      <p class="mb-4">Participants will be paired with mentors who have achieved significant success in various fields, offering invaluable insights and career advice. The program includes one-on-one mentorship sessions, workshops on leadership development, and exclusive networking events. Our goal is to empower young women to navigate their career paths with confidence and achieve their full potential.</p>
      <p>Applications for the inaugural cohort are now open. We encourage all eligible young women to apply and take advantage of this unique opportunity for professional growth and development.</p>
    `,
    image: '/news-mentorship-program.jpg', // Will be replaced by Canva illustration
    category: 'Network News',
    slug: 'launches-mentorship-program',
  },
  {
    title: 'Member Spotlight: Caroline Moko, Earth Justice committee',
    date: 'September 22, 2024',
    excerpt: 'Meet Caroline Moko, a passionate advocate for Earth Justice and a valued member of our committee. Read about her journey and impact.',
    fullContent: `
      <p class="mb-4">This month, we shine a spotlight on Caroline Moko, a dedicated member of the Pan-African Women's Network and a pivotal leader of our Earth Justice Committee. Caroline's unwavering commitment to environmental sustainability and social equity makes her an inspiring figure within our community.</p>
      <p class="mb-4">Caroline is an ardent defender of Food Sovereignty and Agroecology, advocating for systems that prioritize local food production, ecological health, and fair practices for farmers. Her passion stems from her own experience as a farmer, where she actively implements and promotes sustainable agricultural methods.</p>
      <p class="mb-4">Beyond her personal farming, Caroline leads a powerful organization comprising 5,000 smallholder farmers, predominantly women. Through this network, she champions the use of indigenous farming methods, recognizing their deep-rooted wisdom and resilience. She also tirelessly fights for improvements in market access, enabling farmers to sell their surplus produce for economic self-reliance and community prosperity.</p>
      <p>Her work is a testament to the power of grassroots movements and the vital role women play in shaping a sustainable future. Caroline Moko embodies the spirit of empowerment and collective action that our network stands for.</p>
    `,
    image: '/WhatsApp Image 2025-12-04 at 3.03.59 PM.jpeg', // Already updated on the homepage
    category: 'Member Stories',
    slug: 'member-spotlight-caroline-moko',
  },
  {
    title: 'The Importance of Financial Independence for Women',
    date: 'September 15, 2024',
    excerpt: 'An opinion piece on why financial literacy and independence are crucial for empowerment and gender equality.',
    fullContent: `
      <p class="mb-4">Financial independence is a cornerstone of women's empowerment and a critical factor in achieving gender equality. This opinion piece explores the multifaceted reasons why financial literacy and autonomy are not just beneficial, but essential for women across the globe.</p>
      <p class="mb-4">From enabling greater control over personal decisions to fostering resilience in the face of adversity, financial independence provides women with the freedom to pursue education, career opportunities, and personal aspirations without undue reliance on others. It also plays a crucial role in breaking cycles of poverty and enhancing the overall well-being of families and communities.</p>
      <p>We delve into strategies for promoting financial literacy, highlight successful initiatives, and discuss policy changes that can support women in their journey towards complete financial liberation. Empowering women financially strengthens societies as a whole.</p>
    `,
    image: '/news-financial-independence.jpg', // Will be replaced by Canva illustration
    category: 'Opinion',
    slug: 'the-importance-of-financial-independence-for-women',
  },
  {
    title: 'Highlights from the 2024 Annual Leadership Summit',
    date: 'September 5, 2024',
    excerpt: 'Relive the best moments from our most successful summit yet, with insights from top speakers and attendees.',
    fullContent: `
      <p class="mb-4">The 2024 Annual Leadership Summit, hosted by the Pan-African Women's Network, was an resounding success, bringing together influential leaders, innovators, and changemakers from across the African diaspora. This year's summit was a vibrant platform for sharing insights, fostering collaborations, and inspiring collective action.</p>
      <p class="mb-4">Attendees engaged in a diverse range of activities, including keynote speeches from globally recognized figures, interactive workshops on critical leadership skills, and dynamic panel discussions on pressing issues facing women today. Highlights included sessions on sustainable development, digital transformation, and strategies for inclusive leadership.</p>
      <p>We invite you to relive the best moments of the summit, explore key takeaways from our top speakers, and reconnect with the energy and inspiration that defined this transformative event. Stay tuned for access to session recordings and resources.</p>
    `,
    image: '/news-annual-leadership-summit.jpg', // Will be replaced by Canva illustration
    category: 'Event Recaps',
    slug: 'highlights-from-the-2024-annual-leadership-summit',
  },
];
