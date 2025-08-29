import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { GradientButton } from '@/components/landing/GradientButton';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export const SharedHeader: React.FC = () => {
  return (
    <header className="w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 py-4 px-4 sm:px-6">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src="/Okafuta logo.png" alt="Okafuta Logo" className="h-8 w-auto" />
            <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">Didit</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500 text-sm font-medium transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Login Button for Desktop */}
        <div className="hidden md:block">
          <GradientButton asChild>
            <Link to="/login">Login</Link>
          </GradientButton>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                  <Link to="/" className="flex items-center">
                    <img src="/Okafuta logo.png" alt="Okafuta Logo" className="h-8 w-auto" />
                    <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">Didit</span>
                  </Link>
                </div>
                
                <nav className="flex flex-col space-y-4 flex-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="text-lg font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500 py-2"
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
                
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <GradientButton asChild className="w-full">
                    <Link to="/login">Login</Link>
                  </GradientButton>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};