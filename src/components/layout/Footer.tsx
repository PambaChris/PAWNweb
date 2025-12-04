import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-muted text-foreground pt-16 pb-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        <div>
          <h3 className="text-lg font-semibold font-heading mb-4">Quick Links</h3>
          <ul className="space-y-2 font-body">
            <li><Link href="/about" className="hover:text-primary transition-colors duration-300">About Us</Link></li>
            <li><Link href="/events" className="hover:text-primary transition-colors duration-300">Events</Link></li>
            <li><Link href="/news" className="hover:text-primary transition-colors duration-300">News</Link></li>
            <li><Link href="/store" className="hover:text-primary transition-colors duration-300">Store</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition-colors duration-300">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold font-heading mb-4">Follow Us</h3>
          <div className="flex space-x-4 mb-8">
            {/* Placeholder for actual social media icons */}
            <a href="#" className="text-foreground hover:text-primary transition-colors duration-300">Facebook</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors duration-300">Twitter</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors duration-300">Instagram</a>
          </div>
          <h3 className="text-lg font-semibold font-heading mb-4">Newsletter</h3>
          <p className="font-body mb-4">Subscribe to our newsletter for updates.</p>
          <form className="flex">
            <input type="email" className="w-full rounded-l-lg px-4 py-2 bg-background text-foreground placeholder-muted-foreground border border-muted-foreground/50" placeholder="Enter your email" />
            <button className="bg-primary hover:bg-primary/80 text-background font-bold rounded-r-lg px-4 py-2 transition-colors duration-300">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="text-center font-body text-foreground mt-12 pt-12 border-t border-muted-foreground/50">
        <p>&copy; {new Date().getFullYear()} Pan-African Women's Network. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
