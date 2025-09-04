import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { ArrowRight, ArrowLeft, HandCoins, ReceiptText, CreditCard, Send } from 'lucide-react'; // Added ReceiptText and CreditCard
import { cn } from '@/lib/utils';

export const PhoneMockup: React.FC = () => {
  const transactions = [
    { id: 1, description: "Requested money", amount: "1 day ago From +264857363436", icon: HandCoins, iconColor: "text-blue-600" },
  ];

  return (
    <div className="relative w-72 h-[500px] bg-black rounded-[2.5rem] shadow-2xl flex items-center justify-center p-1.5 border-[8px] border-gray-800 dark:border-gray-200">
      {/* Notch */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-5 bg-gray-800 dark:bg-gray-200 rounded-md z-10"></div>
      {/* Screen */}
      <div className="relative w-full h-full bg-white dark:bg-gray-900 rounded-[2rem] overflow-hidden flex flex-col">
        {/* Top Bar */}
        <div className="p-4 flex items-center justify-between bg-gray-50 dark:bg-gray-800">
          <div className="flex items-center space-x-2">
            {/* Hexagonal Logo Placeholder */}
            <div className="h-8 w-8 bg-gray-200 dark:bg-gray-700 rounded-md flex items-center justify-center">
              <span className="text-xs text-gray-500 dark:text-gray-400">Logo</span>
            </div>
            <div className="text-sm">
              <p className="font-medium text-gray-800 dark:text-gray-200">Derdy Armand</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Account ending with 7508</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="h-6 w-6">
            <span className="sr-only">Menu</span>
            <div className="space-y-1">
              <span className="block w-1 h-1 bg-gray-500 rounded-full"></span>
              <span className="block w-1 h-1 bg-gray-500 rounded-full"></span>
              <span className="block w-1 h-1 bg-gray-500 rounded-full"></span>
            </div>
          </Button>
        </div>

        {/* Balance */}
        <div className="p-4 text-center bg-white dark:bg-gray-900">
          <p className="text-sm text-gray-500 dark:text-gray-400">Available Balance</p>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-1">NGN 30.00</h2>
        </div>

        {/* Main Action Buttons */}
        <div className="grid grid-cols-3 gap-2 p-4 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
          <Button variant="outline" className="flex flex-col h-auto py-2 px-0 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
            <Send className="h-5 w-5 mb-1" />
            <span className="text-xs">Send</span>
          </Button>
          <Button variant="outline" className="flex flex-col h-auto py-2 px-0 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
            <ArrowRight className="h-5 w-5 mb-1" />
            <span className="text-xs">Cash Out</span>
          </Button>
          <Button variant="outline" className="flex flex-col h-auto py-2 px-0 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
            <ArrowLeft className="h-5 w-5 mb-1" />
            <span className="text-xs">Request</span>
          </Button>
        </div>

        {/* Recent Transactions */}
        <div className="flex-1 overflow-y-auto p-4 bg-white dark:bg-gray-900">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Recent transactions</h3>
          <div className="space-y-3">
            {transactions.map((tx) => (
              <div key={tx.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={cn("flex items-center justify-center h-8 w-8 rounded-full bg-gray-100 dark:bg-gray-800", tx.iconColor)}>
                    <tx.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{tx.description}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{tx.amount}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="flex justify-around p-2 border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900">
          <Button variant="ghost" className="flex flex-col h-auto py-1 px-0 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
            <Send className="h-5 w-5" />
            <span className="text-xs">Send</span>
          </Button>
          <Button variant="ghost" className="flex flex-col h-auto py-1 px-0 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
            <HandCoins className="h-5 w-5" />
            <span className="text-xs">Request</span>
          </Button>
          <Button variant="ghost" className="flex flex-col h-auto py-1 px-0 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
            <ReceiptText className="h-5 w-5" />
            <span className="text-xs">Pay Bills</span>
          </Button>
          <Button variant="ghost" className="flex flex-col h-auto py-1 px-0 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
            <CreditCard className="h-5 w-5" />
            <span className="text-xs">Vendor Card</span>
          </Button>
        </div>
      </div>
    </div>
  );
};