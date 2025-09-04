import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AddFundTab } from "@/components/transact/AddFundTab";
import { SendMoneyTab } from "@/components/transact/SendMoneyTab";
import { MoveMoneyTab } from "@/components/transact/MoveMoneyTab";
import { PayoutTab } from "@/components/transact/PayoutTab";
import { GroupRebateTab } from "@/components/transact/GroupRebateTab";
import OfferBillPayment from "@/pages/merchant/OfferBillPayment"; // Import OfferBillPayment
import { useSearchParams } from "react-router-dom";
import React from "react";
import {
  Wallet,
  Send,
  Shuffle,
  Banknote,
  Percent,
  ReceiptText, // Icon for Offer Bill Payment
  HandCoins,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { RequestMoneyTab } from "@/components/transact/RequestMoneyTab";

const transactionTabsConfig = [
  { value: "add-fund", name: "Add Fund", icon: Wallet },
  { value: "send-money", name: "Send Money", icon: Send },
  { value: "request-money", name: "Request Money", icon: HandCoins },
  { value: "offer-bill-payment", name: "Offer Bill Payment", icon: ReceiptText }, // New tab
  { value: "move-money", name: "Move Money", icon: Shuffle },
  { value: "payout", name: "Payout", icon: Banknote },
  { value: "group-rebate", name: "Group Rebate", icon: Percent },
];

export default function Transact() {
  const [searchParams] = useSearchParams();
  const defaultTab = searchParams.get("tab") || "add-fund";

  return (
    <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Transact</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">Manage all your payment operations from one place.</p>

      <Tabs defaultValue={defaultTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 h-auto flex-wrap gap-4 mb-8 bg-transparent dark:bg-transparent"> {/* Removed background from TabsList */}
          {transactionTabsConfig.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className={cn(
                "group flex flex-col items-center justify-center p-2 rounded-lg transition-all duration-200",
                "hover:bg-blue-50/50 dark:hover:bg-blue-900/20 data-[state=active]:bg-blue-50 dark:data-[state=active]:bg-blue-900/20", // Subtle hover and active background
                "border border-transparent data-[state=active]:border-blue-200 dark:data-[state=active]:border-blue-700", // Subtle border on active
                "shadow-none" // Ensure no shadow on the trigger itself
              )}
              aria-label={tab.name}
            >
              <div className={cn(
                "flex items-center justify-center h-14 w-14 rounded-full",
                "bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400", // Inactive state for circle and icon
                "group-data-[state=active]:bg-blue-100 group-data-[state=active]:text-blue-800 dark:group-data-[state=active]:bg-blue-900/30 dark:group-data-[state=active]:text-blue-200", // Active state for circle and icon
                "transition-colors duration-200 shadow-none group-hover:shadow-none" // Removed shadows from inner div
              )}>
                <tab.icon className="h-6 w-6" />
              </div>
              <span className="mt-2 text-sm font-medium text-center text-gray-700 dark:text-gray-300 group-data-[state=active]:text-blue-700 dark:group-data-[state=active]:text-blue-300">
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
        <TabsContent value="offer-bill-payment" className="mt-6">
          <OfferBillPayment />
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