import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AddFundTab } from "@/components/transact/AddFundTab";
import { SendMoneyTab } from "@/components/transact/SendMoneyTab";
import { RequestMoneyTab } from "@/components/transact/RequestMoneyTab";
import { BillPaymentTab } from "@/components/transact/BillPaymentTab";
import { MoveMoneyTab } from "@/components/transact/MoveMoneyTab";
import { PayoutTab } from "@/components/transact/PayoutTab";
import { GroupRebateTab } from "@/components/transact/GroupRebateTab";
import { useSearchParams } from "react-router-dom";
import React from "react";
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

const transactionTabsConfig = [
  { value: "add-fund", name: "Add Fund", icon: Wallet },
  { value: "send-money", name: "Send Money", icon: Send },
  { value: "request-money", name: "Request Money", icon: Handshake },
  { value: "bill-payment", name: "Bill Payment", icon: ReceiptText },
  { value: "move-money", name: "Move Money", icon: Move },
  { value: "payout", name: "Payout", icon: ArrowUpFromLine },
  { value: "group-rebate", name: "Group Rebate", icon: Gift },
];

export default function Transact() {
  const [searchParams] = useSearchParams();
  const defaultTab = searchParams.get("tab") || "add-fund";

  return (
    <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Transact</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">Manage all your payment operations from one place.</p>

      <Tabs defaultValue={defaultTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 h-auto flex-wrap gap-4 mb-8">
          {transactionTabsConfig.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className={cn(
                "flex flex-col items-center justify-center p-2 rounded-lg transition-all duration-200",
                "hover:bg-gray-100 dark:hover:bg-gray-800",
                "data-[state=active]:bg-primary/10 data-[state=active]:text-primary dark:data-[state=active]:bg-primary-foreground/10 dark:data-[state=active]:text-primary-foreground"
              )}
              aria-label={tab.name}
            >
              <div className={cn(
                "flex items-center justify-center h-14 w-14 rounded-full bg-primary/10 text-primary dark:bg-primary-foreground/10 dark:text-primary-foreground",
                "transition-colors duration-200 shadow-sm group-hover:shadow-md"
              )}>
                <tab.icon className="h-6 w-6" />
              </div>
              <span className="mt-2 text-sm font-medium text-center text-gray-700 dark:text-gray-300">
                {tab.name}
              </span>
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="add-fund" className="mt-6">
          <AddFundTab />
        </TabsContent>
        <TabsContent value="send-money" className="mt-6">
          <SendMoneyTab />
        </TabsContent>
        <TabsContent value="request-money" className="mt-6">
          <RequestMoneyTab />
        </TabsContent>
        <TabsContent value="bill-payment" className="mt-6">
          <BillPaymentTab />
        </TabsContent>
        <TabsContent value="move-money" className="mt-6">
          <MoveMoneyTab />
        </TabsContent>
        <TabsContent value="payout" className="mt-6">
          <PayoutTab />
        </TabsContent>
        <TabsContent value="group-rebate" className="mt-6">
          <GroupRebateTab />
        </TabsContent>
      </Tabs>
    </div>
  );
}