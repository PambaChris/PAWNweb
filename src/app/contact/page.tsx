'use client';
import { useState } from 'react';
import Button from '@/components/ui/Button';
import Link from 'next/link';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    const response = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: 'contact@pawn_blackfeminists.org',
        subject: subject,
        html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
      }),
    });

    if (response.ok) {
      setSubmitStatus('success');
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } else {
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
  };

  return (
    <>
      {/* Page Header */}
      <header className="bg-primary py-24">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl font-bold font-heading">Contact Us</h1>
          <p className="text-lg mt-2 font-body">We would love to hear from you.</p>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-28 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            
            {/* Contact Form */}
            <div className="bg-background p-8 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold font-heading mb-6 text-foreground">Send us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-muted-foreground mb-2 font-body">Full Name</label>
                  <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-muted border border-muted rounded-xl py-2 px-4 text-foreground focus:outline-none focus:border-primary" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-muted-foreground mb-2 font-body">Email Address</label>
                  <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-muted border border-muted rounded-xl py-2 px-4 text-foreground focus:outline-none focus:border-primary" />
                </div>
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-muted-foreground mb-2 font-body">Subject</label>
                  <input type="text" id="subject" name="subject" value={subject} onChange={(e) => setSubject(e.target.value)} className="w-full bg-muted border border-muted rounded-xl py-2 px-4 text-foreground focus:outline-none focus:border-primary" />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-muted-foreground mb-2 font-body">Message</label>
                  <textarea id="message" name="message" rows={5} value={message} onChange={(e) => setMessage(e.target.value)} className="w-full bg-muted border border-muted rounded-xl py-2 px-4 text-foreground focus:outline-none focus:border-primary"></textarea>
                </div>
                <Button type="submit" variant="primary" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
                {submitStatus === 'success' && <p className="text-green-500 mt-4">Message sent successfully!</p>}
                {submitStatus === 'error' && <p className="text-red-500 mt-4">Something went wrong. Please try again.</p>}
              </form>
            </div>

            {/* Contact Information */}
            <div className="bg-background p-8 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold font-heading mb-6 text-foreground">Contact Information</h2>
              <div className="space-y-6 font-body text-lg">
                <div className="flex items-start">
                  <span className="text-primary mr-4 mt-1">&#9993;</span>
                  <div>
                    <h3 className="font-semibold font-heading">Email</h3>
                    <p className="text-muted-foreground">contact@pawn_blackfeminists.org</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-primary mr-4 mt-1">&#9742;</span>
                  <div>
                    <h3 className="font-semibold font-heading">Phone</h3>
                    <p className="text-muted-foreground">+254 721910280</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-primary mr-4 mt-1">&#127968;</span>
                  <div>
                    <h3 className="font-semibold font-heading">Headquarters</h3>
                    <p className="text-muted-foreground">123 Empowerment Ave, Nairobi, Kenya</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 border-t border-muted-foreground/50 pt-6">
                <h3 className="text-xl font-bold font-heading mb-4 text-foreground">Schedule a Consultation</h3>
                <p className="font-body text-muted-foreground mb-4">Book a virtual appointment with our team.</p>
                <Link href="/booking" passHref>
                  <Button variant="primary" size="md">
                    Book Appointment
                  </Button>
                </Link>
              </div>
              <div className="mt-8 border-t border-muted-foreground/50 pt-6">
                <h3 className="text-xl font-bold font-heading mb-4 text-foreground">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="https://www.facebook.com/people/PanAfrican-Womens-Organisation/61584366435167/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">Facebook</a>
                  <a href="https://x.com/Pawn_Feminists" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">Twitter</a>
                  <a href="https://www.instagram.com/pan_africanwomensnetwork/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">Instagram</a>
                  <a href="#" className="text-muted-foreground hover:text-primary">LinkedIn</a>
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
