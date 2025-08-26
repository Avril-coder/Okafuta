import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideProps } from "lucide-react";
import React from "react";

interface BalanceCardProps {
  currency: string;
  amount: string;
  icon: React.ComponentType<LucideProps>;
}

export function BalanceCard({ currency, amount, icon: Icon }: BalanceCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{currency} Wallet</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{amount}</div>
        <p className="text-xs text-muted-foreground">Available Balance</p>
      </CardContent>
    </Card>
  );
}