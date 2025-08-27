import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { ChevronDown, Wallet, Menu } from 'lucide-react';
import { GradientButton } from './GradientButton';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export const LandingHeader: React.FC = () => {
  const dashboardNavLinks = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Transact", href: "/dashboard/transact" },
    { name: "Benefits & Cards", href: "/dashboard/benefits" },
    { name: "Settings", href: "/dashboard/settings" },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-20 w-full bg-transparent py-4 px-4 sm:px-6 lg:px-8">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Left side: Hamburger and Logo */}
        <div className="flex items-center">
          {/* Hamburger Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="mr-2 lg:mr-4">
                <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                <span className="sr-only">Open navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] p-0">
              <div className="flex flex-col p-4 space-y-1">
                {/* Logo inside sheet */}
                <Link to="/" className="flex items-center text-xl font-bold text-gray-900 dark:text-white mb-6">
                  <Wallet className="h-6 w-6 mr-2 text-amber-600" />
                  OKAFUTA
                </Link>
                {dashboardNavLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.href}
                    className={({ isActive }) =>
                      cn(
                        "block px-3 py-2 rounded-md text-base font-medium",
                        isActive
                          ? "bg-gray-100 dark:bg-gray-800 text-amber-600 dark:text-amber-500"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                      )
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <div className="flex flex-col items-start">
            <Link to="/" className="flex items-center text-2xl font-bold text-gray-900 dark:text-white">
              <Wallet className="h-7 w-7 mr-2 text-amber-600" />
              OKAFUTA
            </Link>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5 ml-9">Secure. Seamless. Cashless.</p>
          </div>
        </div>

        {/* Right side: Language Dropdown, Login Button */}
        <div className="flex items-center space-x-4">
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
      </nav>
    </header>
  );
};