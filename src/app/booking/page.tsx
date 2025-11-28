import Button from '@/components/ui/Button';

const BookingPage = () => {
  return (
    <>
      {/* Page Header */}
      <header className="bg-primary py-24">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl font-bold font-heading">Book an Appointment</h1>
          <p className="text-lg mt-2 font-body">Schedule a consultation or mentoring session with us.</p>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-28 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-background p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold font-heading mb-6 text-foreground">Appointment Details</h2>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-muted-foreground mb-2 font-body">Full Name</label>
                  <input type="text" id="name" name="name" className="w-full bg-muted border border-muted rounded-xl py-2 px-4 text-foreground focus:outline-none focus:border-primary" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-muted-foreground mb-2 font-body">Email Address</label>
                  <input type="email" id="email" name="email" className="w-full bg-muted border border-muted rounded-xl py-2 px-4 text-foreground focus:outline-none focus:border-primary" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div className="mb-4">
                  <label htmlFor="date" className="block text-muted-foreground mb-2 font-body">Preferred Date</label>
                  <input type="date" id="date" name="date" className="w-full bg-muted border border-muted rounded-xl py-2 px-4 text-foreground focus:outline-none focus:border-primary" />
                </div>
                <div className="mb-4">
                  <label htmlFor="time" className="block text-muted-foreground mb-2 font-body">Preferred Time</label>
                  <input type="time" id="time" name="time" className="w-full bg-muted border border-muted rounded-xl py-2 px-4 text-foreground focus:outline-none focus:border-primary" />
                </div>
              </div>
              <div className="mt-4 mb-6">
                <label htmlFor="reason" className="block text-muted-foreground mb-2 font-body">Reason for Appointment</label>
                <textarea id="reason" name="reason" rows={5} className="w-full bg-muted border border-muted rounded-xl py-2 px-4 text-foreground focus:outline-none focus:border-primary"></textarea>
              </div>
              <Button type="submit" variant="primary" size="lg" className="w-full">
                Request Appointment
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookingPage;
