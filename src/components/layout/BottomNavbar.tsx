import Link from 'next/link';

const BottomNavbar = () => {
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/events', label: 'Events' },
    { href: '/news', label: 'News' },
    { href: '/store', label: 'Store' },
    { href: '/contact', label: 'Contact' },
    { href: '/booking', label: 'Book' }, // Shorter label for mobile
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white shadow-lg md:hidden z-50">
      <div className="flex justify-around items-center h-16">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className="flex flex-col items-center text-xs px-2 py-1 hover:text-panafrican-yellow transition-colors duration-200">
            {/* Placeholder for icons if needed */}
            <span className="text-lg">{link.label.charAt(0)}</span> 
            <span>{link.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default BottomNavbar;
