import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { GradientButton } from './GradientButton';
import { cn } from '@/lib/utils';
import { MobileMenu } from './MobileMenu';

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
            <img src="/Okafuta logo.png" alt="Okafuta Logo" className="h-8 w-auto" />
          </Link>
        </div>

        {/* Navigation Links for larger screens */}
        <div className="hidden lg:flex items-center space-x-10"> {/* Increased space-x */}
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

          {/* Language Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500">
                <span>English</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>English</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Login Button */}
          <GradientButton asChild className="ml-8"> {/* Added ml-8 */}
            <Link to="/login">Login Now</Link>
          </GradientButton>
        </div>

        {/* Mobile menu button - visible on small screens */}
        <div className="lg:hidden">
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
};