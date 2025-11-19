import Image from 'next/image';

const AboutPage = () => {
  return (
    <>
      {/* Page Header */}
      <header className="bg-panafrican-red py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="text-lg mt-2">Our Story, Our Mission, Our Vision</p>
        </div>
      </header>

      {/* Our Story Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-panafrican-yellow">Our Story</h2>
              <p className="text-gray-300 mb-4">
                The Pan-African Women's Network was founded in 2020 by a group of visionary women who saw the need for a dedicated platform to connect and empower women of African descent. What started as a small online forum has grown into a global movement.
              </p>
              <p className="text-gray-300">
                We are a diverse community of entrepreneurs, professionals, artists, and leaders from all corners of the world, united by a shared heritage and a common goal: to uplift one another and create a lasting legacy of excellence.
              </p>
            </div>
            <div>
              <Image
                src="/placeholder-team.svg"
                alt="Our Team"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-panafrican-green">Our Mission</h2>
              <p className="text-gray-300 max-w-lg mx-auto">
                To build a strong, supportive, and collaborative network that fosters personal and professional growth, celebrates our heritage, and drives positive change in our communities and beyond.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4 text-panafrican-green">Our Vision</h2>
              <p className="text-gray-300 max-w-lg mx-auto">
                We envision a world where every woman of African descent has the resources, support, and opportunities to achieve her full potential, creating a powerful legacy for future generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-panafrican-yellow">Meet Our Leadership</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="w-40 h-40 mx-auto mb-4 rounded-full bg-panafrican-red flex items-center justify-center">
                 <span className="text-white text-lg font-bold">Placeholder</span>
              </div>
              <h3 className="text-xl font-bold">Dr. Funmilayo Adebayo</h3>
              <p className="text-gray-400">Founder & President</p>
            </div>
            {/* Team Member 2 */}
            <div className="text-center">
              <div className="w-40 h-40 mx-auto mb-4 rounded-full bg-panafrican-green flex items-center justify-center">
                 <span className="text-white text-lg font-bold">Placeholder</span>
              </div>
              <h3 className="text-xl font-bold">Nia Adebayo</h3>
              <p className="text-gray-400">Vice President</p>
            </div>
            {/* Team Member 3 */}
            <div className="text-center">
              <div className="w-40 h-40 mx-auto mb-4 rounded-full bg-panafrican-yellow flex items-center justify-center">
                 <span className="text-black text-lg font-bold">Placeholder</span>
              </div>
              <h3 className="text-xl font-bold">Chiamaka Nwosu</h3>
              <p className="text-gray-400">Director of Programs</p>
            </div>
            {/* Team Member 4 */}
            <div className="text-center">
              <div className="w-40 h-40 mx-auto mb-4 rounded-full bg-gray-700 flex items-center justify-center">
                 <span className="text-white text-lg font-bold">Placeholder</span>
              </div>
              <h3 className="text-xl font-bold">Amina Kante</h3>
              <p className="text-gray-400">Director of Communications</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
