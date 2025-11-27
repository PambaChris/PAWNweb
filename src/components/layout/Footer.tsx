import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-dark-background text-light-text pt-12 pb-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        <div>
          <h2 className="text-2xl font-bold mb-4">
            <img src="/P.png" alt="PAWN Logo" className="h-10" />
          </h2>
          <p className="text-light-text">Empowering Pan-African Women.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/about" className="hover:text-secondary-lilac">About Us</Link></li>
            <li><Link href="/events" className="hover:text-secondary-lilac">Events</Link></li>
            <li><Link href="/news" className="hover:text-secondary-lilac">News</Link></li>
            <li><Link href="/store" className="hover:text-secondary-lilac">Store</Link></li>
            <li><Link href="/contact" className="hover:text-secondary-lilac">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            {/* Add social media icons here */}
            <a href="#" className="text-light-text hover:text-primary-lilac">Facebook</a>
            <a href="#" className="text-light-text hover:text-primary-lilac">Twitter</a>
            <a href="#" className="text-light-text hover:text-primary-lilac">Instagram</a>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
          <p className="text-light-text mb-4">Subscribe to our newsletter for updates.</p>
          <form className="flex">
            <input type="email" className="w-full rounded-l-md px-4 py-2 bg-gray-200 text-light-text" placeholder="Enter your email" />
            <button className="bg-primary-lilac hover:bg-secondary-lilac text-white font-bold rounded-r-md px-4 py-2">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-8 pt-8 border-t border-gray-700">
        <p>&copy; {new Date().getFullYear()} Pan-African Women's Network. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
