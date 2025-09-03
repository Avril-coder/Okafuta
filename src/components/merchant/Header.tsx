import React from "react";
import { Search, Bell, Menu, LayoutDashboard, ArrowRightLeft, Users, CreditCard, Settings, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { useUser } from "@/context/UserContext";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Transact", href: "/dashboard/transact", icon: ArrowRightLeft },
  { name: "Customers", href: "/dashboard/customers", icon: Users },
  { name: "Benefits & Cards", href: "/dashboard/benefits", icon: CreditCard },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

const getCountryFlag = (areaCode: string | undefined) => {
  if (!areaCode) return null;
  const flags: { [key: string]: string } = {
    '+264': '🇳🇦', // Namibia
    '+27': '🇿🇦',  // South Africa
    '+234': '🇳🇬', // Nigeria
    '+1': '🇺🇸',   // USA/Canada
    '+44': '🇬🇧',   // UK
  };
  return flags[areaCode] || null;
};

export function Header() {
  const navigate = useNavigate();
  const { user, logout } = useUser();

  const handleLogout = () => {
    logout();
    toast.success("You have been logged out.");
    navigate('/login');
  };

  const flag = getCountryFlag(user?.areaCode);

  return (
    <div className="relative z-10 flex-shrink-0 flex h-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 lg:border-none">
      <div className="flex-1 px-4 flex justify-between sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
        {/* Mobile menu button */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="flex items-center justify-center text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary lg:hidden"
              aria-label="Open menu"
            >
              <span className="sr-only">Open sidebar</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[240px] p-0">
            <div className="flex flex-col p-4 space-y-1">
              <Link to="/dashboard" className="flex items-center text-xl font-bold text-gray-900 dark:text-white mb-6">
                <img src="/Okafuta logo.png" alt="Okafuta Logo" className="h-10 w-auto" />
              </Link>
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  end={item.href === "/dashboard"}
                  className={({ isActive }) =>
                    cn(
                      "group flex items-center px-3 py-2 text-sm font-medium rounded-md",
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-gray-600 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700"
                    )
                  }
                >
                  <item.icon
                    className={cn(
                      "mr-3 flex-shrink-0 h-5 w-5",
                    )}
                    aria-hidden="true"
                  />
                  {item.name}
                </NavLink>
              ))}
            </div>
          </SheetContent>
        </Sheet>

        <div className="flex">
          <form className="flex md:ml-0 max-w-xs lg:max-w-sm" action="#" method="GET">
            <label htmlFor="search-field" className="sr-only">
              Search
            </label>
            <div className="relative w-full text-gray-400 focus-within:text-gray-600">
              <div
                className="absolute inset-y-0 left-0 flex items-center pointer-events-none"
                aria-hidden="true"
              >
                <Search className="h-4 w-4" />
              </div>
              <Input
                id="search-field"
                name="search-field"
                className="block w-full h-full pl-8 pr-3 py-1.5 border-transparent bg-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent sm:text-sm dark:text-white"
                placeholder="Search transactions, customers..."
                type="search"
              />
            </div>
          </form>
        </div>
        <div className="ml-4 flex items-center md:ml-6">
          {flag && <span className="text-2xl mr-2" aria-label="country flag">{flag}</span>}
          <Button variant="ghost" size="icon" aria-label="Notifications">
            <Bell className="h-6 w-6" aria-hidden="true" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full" aria-label="User menu">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">User ID</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to="/dashboard/profile">
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/dashboard/settings">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}