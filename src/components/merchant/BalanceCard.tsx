import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

interface BalanceCardProps {
  walletName: string;
  amount: string;
  currencySymbol: string;
}

export function BalanceCard({ walletName, amount, currencySymbol }: BalanceCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{walletName}</CardTitle>
        <span className="text-lg font-semibold text-muted-foreground">{currencySymbol}</span>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{amount}</div>
        <p className="text-xs text-muted-foreground">Available Balance</p>
      </CardContent>
    </Card>
  );
}