import React from 'react';
import { Link } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { GradientButton } from './GradientButton';

const mobileNavLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export const MobileMenu: React.FC = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between mb-8">
            <Link to="/" className="flex items-center">
              <img src="/Okafuta logo.png" alt="Okafuta Logo" className="h-8 w-auto" />
            </Link>
          </div>
          
          <nav className="flex flex-col space-y-4 flex-1">
            {mobileNavLinks.map((link) => (
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
              <Link to="/login">Login Now</Link>
            </GradientButton>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};