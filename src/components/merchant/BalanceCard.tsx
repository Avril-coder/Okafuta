import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import { cn } from "@/lib/utils";

interface BalanceCardProps {
  walletName: string;
  amount: string;
  currencySymbol: string;
}

export function BalanceCard({ walletName, amount, currencySymbol }: BalanceCardProps) {
  return (
    <Card className={cn(
      "relative overflow-hidden",
      "bg-gradient-to-br from-gray-100 to-white dark:from-gray-800 dark:to-gray-950", // Subtle gradient background
      "border border-gray-200 dark:border-gray-700", // Light border for definition
      "rounded-xl", // Slightly more rounded corners
      "shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out", // Enhanced shadow with hover effect
      "group" // For potential future group-hover effects
    )}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {walletName}
        </CardTitle>
        <span className="text-lg font-semibold text-gray-500 dark:text-gray-400">
          {currencySymbol}
        </span>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold text-gray-900 dark:text-white">
          {amount}
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
          Available Balance
        </p>
      </CardContent>
    </Card>
  );
}