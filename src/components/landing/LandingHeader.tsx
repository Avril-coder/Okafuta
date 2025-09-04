import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MobileMenu } from './MobileMenu'; // Assuming MobileMenu is still needed for small screens
import { GradientButton } from './GradientButton';

export const LandingHeader: React.FC = () => {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-20 w-full bg-transparent py-4 px-4 sm:px-6 lg:px-8">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src="/Okafuta logo.png" alt="Okafuta Logo" className="h-10 w-auto" />
            <div className="ml-2 text-xs font-medium text-gray-700 dark:text-gray-300">
              SECURE. SEAMLESS. CASHLESS.
            </div>
          </Link>
        </div>

        {/* Navigation Links for larger screens */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              className={({ isActive }) =>
                cn(
                  "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500 text-sm font-medium transition-colors",
                  isActive && "text-blue-600 dark:text-blue-500"
                )
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* Login Button */}
          <GradientButton asChild>
            <Link to="/login">Login</Link>
          </GradientButton>
        </div>

        {/* Mobile menu button - visible on small screens */}
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
};