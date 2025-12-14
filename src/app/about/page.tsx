import Image from 'next/image';

const AboutPage = () => {
  return (
    <>
      {/* Page Header */}
      <header className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl font-bold font-heading">About Us</h1>
          <p className="text-lg mt-2 font-body">Our Story, Our Mission, Our Vision</p>
        </div>
      </header>

      {/* Our Story Section */}
      <section className="py-28 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold font-heading mb-6 text-foreground">Our Story</h2>
              <p className="font-body text-muted-foreground mb-4">
                The Pan-African Women&#39;s Network was **founded in 2020 by visionary women** who saw the need for a dedicated platform to **connect and empower women of African descent**. What started as a small online forum has **grown into a global movement**.
              </p>
              <p className="font-body text-muted-foreground">
                We are a **diverse community** of entrepreneurs, professionals, artists, and leaders from all corners of the world, **united by a shared heritage and a common goal: to uplift one another and create a lasting legacy of excellence.**
              </p>
            </div>
            <div>
              <Image
                src="/team.svg"
                alt="Our Team"
                width={500}
                height={400}
                className="rounded-xl shadow-md transition-transform hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold font-heading mb-6 text-primary">Our Mission</h2>
              <p className="font-body text-muted-foreground max-w-lg mx-auto">
                To build a strong, supportive, and collaborative network that fosters personal and professional growth, celebrates our heritage, and drives positive change in our communities and beyond.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold font-heading mb-6 text-primary">Our Vision</h2>
              <p className="font-body text-muted-foreground max-w-lg mx-auto">
                We envision a world where every woman of African descent has the resources, support, and opportunities to achieve her full potential, creating a powerful legacy for future generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-28 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-heading text-center mb-16 text-foreground">Meet Our Leadership</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="text-center group transition-transform hover:scale-[1.02]">
              <div className="w-40 h-40 mx-auto mb-4 rounded-full bg-primary flex items-center justify-center">
                 <span className="text-lg font-bold font-body text-white">Placeholder</span>
              </div>
              <h3 className="text-xl font-bold font-heading">Dr. Funmilayo Adebayo</h3>
              <p className="font-body text-muted-foreground">Founder & President</p>
            </div>
            {/* Team Member 2 */}
            <div className="text-center group transition-transform hover:scale-[1.02]">
              <div className="w-40 h-40 mx-auto mb-4 rounded-full bg-muted-foreground flex items-center justify-center">
                 <span className="text-lg font-bold font-body text-background">Placeholder</span>
              </div>
              <h3 className="text-xl font-bold font-heading">Nia Adebayo</h3>
              <p className="font-body text-muted-foreground">Vice President</p>
            </div>
            {/* Team Member 3 */}
            <div className="text-center group transition-transform hover:scale-[1.02]">
              <div className="w-40 h-40 mx-auto mb-4 rounded-full bg-primary flex items-center justify-center">
                 <span className="text-lg font-bold font-body text-white">Placeholder</span>
              </div>
              <h3 className="text-xl font-bold font-heading">Chiamaka Nwosu</h3>
              <p className="font-body text-muted-foreground">Director of Programs</p>
            </div>
            {/* Team Member 4 */}
            <div className="text-center group transition-transform hover:scale-[1.02]">
              <div className="w-40 h-40 mx-auto mb-4 rounded-full bg-muted-foreground flex items-center justify-center">
                 <span className="text-lg font-bold font-body text-background">Placeholder</span>
              </div>
              <h3 className="text-xl font-bold font-heading">Amina Kante</h3>
              <p className="font-body text-muted-foreground">Director of Communications</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
