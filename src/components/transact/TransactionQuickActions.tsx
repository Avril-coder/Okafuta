import React from 'react';
import { Link } from 'react-router-dom';
import {
  Wallet,        // For Add Fund
  Send,          // For Send Money
  Handshake,     // For Request Money
  ReceiptText,   // For Bill Payment
  Move,          // For Move Money
  ArrowUpFromLine, // For Payout
  Gift,          // For Group Rebate
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface QuickActionLinkProps {
  name: string;
  href: string;
  icon: React.ElementType;
}

const quickActionLinks: QuickActionLinkProps[] = [
  { name: 'Add Fund', href: '/dashboard/transact?tab=add-fund', icon: Wallet },
  { name: 'Send Money', href: '/dashboard/transact?tab=send-money', icon: Send },
  { name: 'Request Money', href: '/dashboard/transact?tab=request-money', icon: Handshake },
  { name: 'Bill Payment', href: '/dashboard/transact?tab=bill-payment', icon: ReceiptText },
  { name: 'Move Money', href: '/dashboard/transact?tab=move-money', icon: Move },
  { name: 'Payout', href: '/dashboard/transact?tab=payout', icon: ArrowUpFromLine },
  { name: 'Group Rebate', href: '/dashboard/transact?tab=group-rebate', icon: Gift },
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