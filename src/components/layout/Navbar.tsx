"use client";
import Link from 'next/link';
import Button from '../ui/Button';
import { useCart } from '../../lib/CartContext';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const { getCartItemCount } = useCart();
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    // Show navbar when user is at the bottom of the page
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) { // added a 100px buffer
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/events', label: 'Events' },
    { href: '/news', label: 'News' },
    { href: '/store', label: 'Store' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed bottom-0 left-0 right-0 bg-foreground text-background shadow-md z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
      <div className="flex justify-around items-center h-16">
        <ul className="flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="flex items-center p-2 rounded-md hover:bg-muted hover:text-primary transition-colors duration-200">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center space-x-4">
          <Link href="/cart" className="relative p-2 rounded-md hover:bg-muted transition-colors duration-200 hover:scale-105">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              stroke="none"
            >
              <path d="M17 18a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2c0-1.11.89-2 2-2M1 2h3.27l.94 2H22v2H6.36L6 6l4 11h11v-2H7.63L7.29 15H19a2 2 0 0 0 1.75-1.03l3.58-6.47c.36-.66-.04-1.43-.72-1.43H6.18L5.73 3.17A.996.996 0 0 0 4.8 2H1v2zm16 16a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2c0-1.11.89-2 2-2z"/>
            </svg>
            {getCartItemCount() > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {getCartItemCount()}
              </span>
            )}
          </Link>
          <Link href="/booking" passHref>
            <Button variant="primary" size="md">
              Book Appointment
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
