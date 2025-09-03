import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { ArrowUp, ArrowDown, Repeat, Plus, User, DollarSign } from 'lucide-react';
import { cn } from '@/lib/utils';

export const PhoneMockup: React.FC = () => {
  const transactions = [
    { id: 1, description: "Coffee Shop", amount: "-N$ 25.00", date: "Today", icon: DollarSign, iconColor: "text-red-500" },
    { id: 2, description: "Salary Deposit", amount: "+N$ 5,000.00", date: "Yesterday", icon: Plus, iconColor: "text-green-500" },
    { id: 3, description: "Online Purchase", amount: "-N$ 150.00", date: "Oct 25", icon: ArrowUp, iconColor: "text-red-500" },
    { id: 4, description: "Friend Transfer", amount: "+N$ 100.00", date: "Oct 24", icon: ArrowDown, iconColor: "text-green-500" },
  ];

  return (
    <div className="relative w-72 h-[500px] bg-black rounded-[2.5rem] shadow-2xl flex items-center justify-center p-1.5 border-[8px] border-gray-800 dark:border-gray-200">
      {/* Notch */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-5 bg-gray-800 dark:bg-gray-200 rounded-md z-10"></div>
      {/* Screen */}
      <div className="relative w-full h-full bg-white dark:bg-gray-900 rounded-[2rem] overflow-hidden flex flex-col">
        {/* Account Info - Simplified */}
        <div className="p-4 flex items-center justify-end bg-gray-50 dark:bg-gray-800"> {/* Changed justify-center to justify-end */}
          <Avatar className="h-8 w-8">
            <AvatarFallback className="bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-300"> {/* Changed color to gray */}
              <User className="h-5 w-5" />
            </AvatarFallback>
          </Avatar>
        </div>

        {/* Balance */}
        <div className="p-4 text-center bg-white dark:bg-gray-900">
          <p className="text-sm text-gray-500 dark:text-gray-400">Available Balance</p>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-1">NGN 30.00</h2>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-4 gap-2 p-4 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
          <Button variant="ghost" className="flex flex-col h-auto py-2 px-0 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
            <ArrowUp className="h-5 w-5 mb-1" />
            <span className="text-xs">Send</span>
          </Button>
          <Button variant="ghost" className="flex flex-col h-auto py-2 px-0 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
            <ArrowDown className="h-5 w-5 mb-1" />
            <span className="text-xs">Cash Out</span>
          </Button>
          <Button variant="ghost" className="flex flex-col h-auto py-2 px-0 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
            <Repeat className="h-5 w-5 mb-1" />
            <span className="text-xs">Request</span>
          </Button>
          <Button variant="ghost" className="flex flex-col h-auto py-2 px-0 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
            <Plus className="h-5 w-5 mb-1" />
            <span className="text-xs">Add Money</span>
          </Button>
        </div>

        {/* Recent Transactions */}
        <div className="flex-1 overflow-y-auto p-4 bg-white dark:bg-gray-900">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Recent Transactions</h3>
          <div className="space-y-3">
            {transactions.map((tx) => (
              <div key={tx.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={cn("flex items-center justify-center h-8 w-8 rounded-full bg-gray-100 dark:bg-gray-800", tx.iconColor)}>
                    <tx.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{tx.description}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{tx.date}</p>
                  </div>
                </div>
                <p className={cn("text-sm font-medium", tx.amount.startsWith('+') ? "text-green-600" : "text-red-600")}>
                  {tx.amount}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};