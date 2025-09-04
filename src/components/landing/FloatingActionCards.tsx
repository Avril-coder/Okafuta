import React from 'react';
import { Send, Banknote, LineChart, Wallet } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FloatingActionCardProps {
  icon: React.ElementType;
  text: string;
  className?: string;
}

const ActionCard: React.FC<FloatingActionCardProps> = ({ icon: Icon, text, className }) => (
  <div
    className={cn(
      "absolute bg-white dark:bg-gray-800 rounded-lg p-3 shadow-lg flex items-center space-x-2 text-sm font-medium text-gray-800 dark:text-gray-200 whitespace-nowrap",
      "shadow-blue-500/30 dark:shadow-blue-700/30", // Soft glowing style
      "transition-all duration-300 hover:scale-105",
      className
    )}
  >
    <Icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
    <span>{text}</span>
  </div>
);

export const FloatingActionCards: React.FC = () => {
  return (
    <>
      <ActionCard
        icon={Send}
        text="Send Money Instantly"
        className="top-10 -left-20 hidden md:flex" // Positioned relative to its parent
      />
      <ActionCard
        icon={Banknote}
        text="Cash Out to Bank"
        className="bottom-10 -left-24 hidden md:flex"
      />
      <ActionCard
        icon={LineChart}
        text="Track Transactions"
        className="top-20 -right-24 hidden md:flex"
      />
      <ActionCard
        icon={Wallet}
        text="Add Funds Easily"
        className="bottom-20 -right-20 hidden md:flex"
      />
    </>
  );
};