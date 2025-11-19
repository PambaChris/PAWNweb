import Link from 'next/link';

const Navbar = () => {
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/events', label: 'Events' },
    { href: '/news', label: 'News' },
    { href: '/store', label: 'Store' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <aside className="hidden md:flex w-64 h-screen bg-gray-900 text-white flex-col p-4 shadow-lg">
      <div className="text-center py-4 mb-8">
        <Link href="/" className="text-3xl font-bold">
          <span className="text-panafrican-green">PAW</span>
          <span className="text-panafrican-yellow">N</span>
        </Link>
      </div>
      <nav className="flex-1">
        <ul className="space-y-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="flex items-center p-2 rounded-lg hover:bg-gray-700 hover:text-panafrican-yellow transition-colors duration-200">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-auto">
        <Link href="/booking" className="block w-full text-center bg-panafrican-yellow text-panafrican-black font-bold py-3 px-6 rounded-full hover:bg-yellow-300 transition-colors duration-300">
            Book Appointment
        </Link>
      </div>
    </aside>
  );
};

export default Navbar;

