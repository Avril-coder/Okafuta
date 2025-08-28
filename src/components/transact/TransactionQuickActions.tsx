import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, ReceiptText, Handshake, Send, Link as LinkIcon, Code, ShoppingCart } from 'lucide-react';
import { cn } from '@/lib/utils';

interface QuickActionLinkProps {
  name: string;
  href: string;
  icon: React.ElementType;
}

const quickActionLinks: QuickActionLinkProps[] = [
  { name: 'Business Tools', href: '/dashboard/settings', icon: Briefcase },
  { name: 'Invoicing', href: '/dashboard/invoice', icon: ReceiptText },
  { name: 'Request Payments', href: '/dashboard/transact?tab=request-money', icon: Handshake },
  { name: 'Send Payments', href: '/dashboard/transact?tab=send-money', icon: Send },
  { name: 'Payment Links', href: '/dashboard/benefits?tab=vouchers', icon: LinkIcon }, // Reusing vouchers tab for now
  { name: 'Pay Buttons', href: '/dashboard/settings', icon: Code }, // Placeholder for a dedicated page
  { name: 'Checkout', href: '/dashboard/transact?tab=payout', icon: ShoppingCart }, // Reusing payout tab for now
];

export const TransactionQuickActions: React.FC = () => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 justify-items-center">
        {quickActionLinks.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className="flex flex-col items-center group p-2 rounded-lg transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label={item.name}
          >
            <div className="flex items-center justify-center h-14 w-14 rounded-full bg-primary/10 text-primary dark:bg-primary-foreground/10 dark:text-primary-foreground group-hover:bg-primary/20 dark:group-hover:bg-primary-foreground/20 transition-colors duration-200 shadow-sm group-hover:shadow-md">
              <item.icon className="h-6 w-6" />
            </div>
            <span className="mt-2 text-sm font-medium text-center text-gray-700 dark:text-gray-300 group-hover:text-primary dark:group-hover:text-primary-foreground transition-colors duration-200">
              {item.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};