import Link from 'next/link';

const Navbar = () => {
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/events', label: 'Events' },
    { href: '/news', label: 'News' },
    { href: '/store', label: 'Store' },
    { href: '/contact', label: 'Contact' },
    { href: '/booking', label: 'Book Appointment' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-dark-background text-light-text shadow-lg z-50">
      <div className="flex justify-around items-center h-16">
        <div className="text-center">
          <Link href="/" className="text-3xl font-bold">
            <img src="/P.png" alt="PAWN Logo" className="h-10" />
          </Link>
        </div>
        <ul className="flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="flex items-center p-2 rounded-lg hover:bg-gray-700 hover:text-secondary-lilac transition-colors duration-200">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
