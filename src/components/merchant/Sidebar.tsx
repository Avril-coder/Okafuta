import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  ArrowRightLeft,
  Users,
  CreditCard,
  Settings,
  User,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Transact", href: "/dashboard/transact", icon: ArrowRightLeft },
  { name: "Customers", href: "/dashboard/customers", icon: Users },
  { name: "Benefits & Cards", href: "/dashboard/benefits", icon: CreditCard },
  { name: "Profile", href: "/dashboard/profile", icon: User },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export function Sidebar() {
  return (
    <div className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 
                    lg:border-r lg:border-gray-200 lg:pt-5 lg:pb-4 
                    lg:backdrop-blur-md lg:bg-white/20 dark:border-gray-700 dark:bg-gray-900/20">
      <div className="flex items-center flex-shrink-0 px-6">
        <img src="/Okafuta logo.png" alt="Okafuta Logo" className="h-8 w-auto" />
      </div>
      <div className="mt-6 h-0 flex-1 flex flex-col overflow-y-auto">
        <nav className="flex-1 px-4 space-y-1">
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
                className={cn("mr-3 flex-shrink-0 h-5 w-5")}
                aria-hidden="true"
              />
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
}