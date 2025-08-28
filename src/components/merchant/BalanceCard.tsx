import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

interface BalanceCardProps {
  currency: string;
  amount: string; // This will now be just the numeric part of the amount
  currencySymbol: string; // This will be the currency sign, e.g., "$", "N$", "₦"
}

export function BalanceCard({ currency, amount, currencySymbol }: BalanceCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{currency} Wallet</CardTitle>
        <span className="text-lg font-semibold text-muted-foreground">{currencySymbol}</span>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{amount}</div>
        <p className="text-xs text-muted-foreground">Available Balance</p>
      </CardContent>
    </Card>
  );
}