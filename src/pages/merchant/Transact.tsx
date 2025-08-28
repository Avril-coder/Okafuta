import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AddFundTab } from "@/components/transact/AddFundTab";
import { SendMoneyTab } from "@/components/transact/SendMoneyTab";
import { RequestMoneyTab } from "@/components/transact/RequestMoneyTab";
import { BillPaymentTab } from "@/components/transact/BillPaymentTab";
import { MoveMoneyTab } from "@/components/transact/MoveMoneyTab";
import { PayoutTab } from "@/components/transact/PayoutTab";
import { GroupRebateTab } from "@/components/transact/GroupRebateTab";
import { useSearchParams } from "react-router-dom"; // Import useSearchParams
import React from "react";

export default function Transact() {
  const [searchParams] = useSearchParams();
  const defaultTab = searchParams.get("tab") || "add-fund"; // Read 'tab' from URL, default to 'add-fund'

  return (
    <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Transact</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">Manage all your payment operations from one place.</p>

      <Tabs defaultValue={defaultTab} className="w-full"> {/* Use defaultTab here */}
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 h-auto flex-wrap">
          <TabsTrigger value="add-fund">Add Fund</TabsTrigger>
          <TabsTrigger value="send-money">Send Money</TabsTrigger>
          <TabsTrigger value="request-money">Request Money</TabsTrigger>
          <TabsTrigger value="bill-payment">Bill Payment</TabsTrigger>
          <TabsTrigger value="move-money">Move Money</TabsTrigger>
          <TabsTrigger value="payout">Payout</TabsTrigger>
          <TabsTrigger value="group-rebate">Group Rebate</TabsTrigger>
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