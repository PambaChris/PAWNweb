import Link from 'next/link';

const ContactPage = () => {
  return (
    <>
      {/* Page Header */}
      <header className="bg-panafrican-green py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="text-lg mt-2">We would love to hear from you.</p>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Contact Form */}
            <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-panafrican-yellow">Send us a Message</h2>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-300 mb-2">Full Name</label>
                  <input type="text" id="name" name="name" className="w-full bg-gray-800 border border-gray-700 rounded-lg py-2 px-4 text-white focus:outline-none focus:border-panafrican-yellow" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email Address</label>
                  <input type="email" id="email" name="email" className="w-full bg-gray-800 border border-gray-700 rounded-lg py-2 px-4 text-white focus:outline-none focus:border-panafrican-yellow" />
                </div>
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                  <input type="text" id="subject" name="subject" className="w-full bg-gray-800 border border-gray-700 rounded-lg py-2 px-4 text-white focus:outline-none focus:border-panafrican-yellow" />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                  <textarea id="message" name="message" rows={5} className="w-full bg-gray-800 border border-gray-700 rounded-lg py-2 px-4 text-white focus:outline-none focus:border-panafrican-yellow"></textarea>
                </div>
                <button type="submit" className="w-full bg-panafrican-red text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition-colors duration-300">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-panafrican-yellow">Contact Information</h2>
              <div className="space-y-6 text-lg">
                <div className="flex items-start">
                  <span className="text-panafrican-green mr-4 mt-1">&#9993;</span>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-300">contact@pawn.org</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-panafrican-green mr-4 mt-1">&#9742;</span>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-300">+1 (234) 567-890</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-panafrican-green mr-4 mt-1">&#127968;</span>
                  <div>
                    <h3 className="font-semibold">Headquarters</h3>
                    <p className="text-gray-300">123 Empowerment Ave, Nairobi, Kenya</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 border-t border-gray-700 pt-6">
                <h3 className="text-xl font-bold mb-4">Schedule a Consultation</h3>
                <p className="text-gray-300 mb-4">Book a virtual appointment with our team.</p>
                <Link href="/booking" className="bg-panafrican-yellow text-panafrican-black font-bold py-3 px-6 rounded-full hover:bg-yellow-300 transition-colors duration-300">
                    Book Appointment
                </Link>
              </div>
              <div className="mt-8 border-t border-gray-700 pt-6">
                <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
                  <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
                  <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
                  <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
