import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { ChevronDown, Wallet } from 'lucide-react';
import { GradientButton } from './GradientButton';
import { cn } from '@/lib/utils';

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
        <div className="flex flex-col items-start">
          <Link to="/" className="flex items-center text-2xl font-bold text-gray-900 dark:text-white">
            <Wallet className="h-7 w-7 mr-2 text-amber-600" />
            OKAFUTA
          </Link>
          <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5 ml-9">Secure. Seamless. Cashless.</p>
        </div>

        {/* Navigation Links for larger screens */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              className={({ isActive }) =>
                cn(
                  "text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-500 text-sm font-medium transition-colors",
                  isActive && "text-amber-600 dark:text-amber-500"
                )
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* Language Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-500">
                <span>English</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>English</DropdownMenuItem>
              {/* Add other languages here */}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Login Button */}
          <GradientButton asChild>
            <Link to="/dashboard">Login Now</Link>
          </GradientButton>
        </div>

        {/* Mobile Menu Placeholder (if needed for landing page, otherwise remove) */}
        <div className="lg:hidden">
          {/* You might want to add a mobile menu icon and drawer here for landing page specific navigation */}
          <Button variant="ghost">
            <svg
              className="h-6 w-6 text-gray-700 dark:text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </Button>
        </div>
      </nav>
    </header>
  );
};