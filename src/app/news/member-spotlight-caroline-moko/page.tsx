import Image from 'next/image';
import Link from 'next/link';

export default function MemberSpotlightCarolineMoko() {
  return (
    <>
      <header className="bg-primary py-24">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold font-heading">Member Spotlight: Caroline Moko, Earth Justice committee</h1>
        </div>
      </header>
      <section className="py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-center text-muted-foreground font-body mb-12">
              This month, we are proud to feature Caroline Moko, a leading voice in the Earth Justice Committee of the Pan African Women's Network.
            </p>

            <div className="relative h-[500px] mb-12">
              <Image
                src="/WhatsApp Image 2025-12-04 at 3.03.47 PM.jpeg"
                alt="Caroline Moko"
                fill
                className="object-cover rounded-xl shadow-lg"
              />
            </div>

            <div className="space-y-6 text-lg text-muted-foreground font-body">
              <p>
                An ardent defender of Food Sovereignty and Agroecology, Caroline is a farmer at heart and a leader in her community. She heads a network of 5,000 smallholder farmers, a network predominantly made up of resilient and dedicated women farmers.
              </p>
              <p>
                Her work is centered on the fight for the use of indigenous farming methods, which not only preserve cultural heritage but also promote sustainable and environmentally friendly agriculture.
              </p>
            </div>

            <div className="relative h-[500px] my-12">
                              <Image
                                src="/WhatsApp Image 2025-12-04 at 3.03.59 PM.jpeg"
                                alt="Caroline Moko"
                                fill
                                className="object-contain rounded-xl shadow-lg"
                              />            </div>

            <div className="space-y-6 text-lg text-muted-foreground font-body">
              <p>
                Caroline is also a champion for the improvement of markets for farmers, ensuring they can sell their surplus for economic self-reliance. Her efforts are a testament to her commitment to empowering women and building a more just and equitable food system for all.
              </p>
            </div>

            <div className="mt-16 text-center">
              <Link href="/news" className="text-primary font-body hover:underline text-xl">
                Back to News
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
