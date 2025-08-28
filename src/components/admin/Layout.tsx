import React from 'react';
import { Outlet, NavLink, Link } from 'react-router-dom';
import { Users, CheckCircle, Wallet } from 'lucide-react';
import { cn } from '@/lib/utils';

const adminNavigation = [
  { name: 'KYC Requests', href: '/admin/kyc-requests', icon: CheckCircle },
  { name: 'Manage Users', href: '/admin/users', icon: Users },
  // Add more admin links here
];

export default function AdminLayout() {
  return (
    <div className="min-h-screen flex bg-gray-50 dark:bg-gray-900">
      {/* Admin Sidebar */}
      <div className="w-64 flex flex-col fixed inset-y-0 border-r border-gray-200 dark:border-gray-700 pt-5 pb-4 bg-gray-100/50 dark:bg-gray-800/50">
        <div className="flex items-center flex-shrink-0 px-6">
          <Wallet className="h-8 w-auto text-primary" />
          <span className="ml-2 text-lg font-semibold">Admin Panel</span>
        </div>
        <div className="mt-6 h-0 flex-1 flex flex-col overflow-y-auto">
          <nav className="flex-1 px-4 space-y-1">
            {adminNavigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    "group flex items-center px-3 py-2 text-sm font-medium rounded-md",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-gray-600 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700"
                  )
                }
              >
                <item.icon className="mr-3 flex-shrink-0 h-5 w-5" aria-hidden="true" />
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:pl-64 flex flex-col flex-1">
        <header className="flex-shrink-0 flex h-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 items-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Admin Dashboard</h2>
          {/* Add admin specific header elements like user menu, notifications etc. */}
        </header>
        <main className="flex-1 pb-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}