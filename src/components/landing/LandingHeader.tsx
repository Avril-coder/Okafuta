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
        {/* Logo Image Placeholder */}
        <div className="flex flex-col items-start">
          <Link to="/" className="flex items-center">
            {/* Replace 'public/placeholder.svg' with the actual path to your logo image */}
            {/* For dark mode, you might need a different logo or apply 'dark:invert' if your logo is light-colored */}
            <img src="/" alt="OKAFUTA Logo" className="h-10 w-auto dark:invert" />
            {/* If you want to keep the slogan, you can add it here below the image */}
            {/* <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5 ml-2">Secure. Seamless. Cashless.</p> */}
          </Link>
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
            <Link to="/login">Login Now</Link>
          </GradientButton>
        </div>

        {/* No mobile menu on landing page */}
      </nav>
    </header>
  );
};