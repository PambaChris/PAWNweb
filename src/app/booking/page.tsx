const BookingPage = () => {
  return (
    <>
      {/* Page Header */}
      <header className="bg-panafrican-red py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl font-bold">Book an Appointment</h1>
          <p className="text-lg mt-2">Schedule a consultation or mentoring session with us.</p>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-gray-900 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-panafrican-yellow">Appointment Details</h2>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-300 mb-2">Full Name</label>
                  <input type="text" id="name" name="name" className="w-full bg-gray-800 border border-gray-700 rounded-lg py-2 px-4 text-white focus:outline-none focus:border-panafrican-yellow" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email Address</label>
                  <input type="email" id="email" name="email" className="w-full bg-gray-800 border border-gray-700 rounded-lg py-2 px-4 text-white focus:outline-none focus:border-panafrican-yellow" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div className="mb-4">
                  <label htmlFor="date" className="block text-gray-300 mb-2">Preferred Date</label>
                  <input type="date" id="date" name="date" className="w-full bg-gray-800 border border-gray-700 rounded-lg py-2 px-4 text-white focus:outline-none focus:border-panafrican-yellow" />
                </div>
                <div className="mb-4">
                  <label htmlFor="time" className="block text-gray-300 mb-2">Preferred Time</label>
                  <input type="time" id="time" name="time" className="w-full bg-gray-800 border border-gray-700 rounded-lg py-2 px-4 text-white focus:outline-none focus:border-panafrican-yellow" />
                </div>
              </div>
              <div className="mt-4 mb-6">
                <label htmlFor="reason" className="block text-gray-300 mb-2">Reason for Appointment</label>
                <textarea id="reason" name="reason" rows={5} className="w-full bg-gray-800 border border-gray-700 rounded-lg py-2 px-4 text-white focus:outline-none focus:border-panafrican-yellow"></textarea>
              </div>
              <button type="submit" className="w-full bg-panafrican-green text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors duration-300">
                Request Appointment
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookingPage;
