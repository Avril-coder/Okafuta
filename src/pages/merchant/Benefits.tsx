import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { VoucherTab } from "@/components/benefits/VoucherTab";
import { VirtualCardTab } from "@/components/benefits/VirtualCardTab";
import { EscrowTab } from "@/components/benefits/EscrowTab";
import { useSearchParams } from "react-router-dom"; // Import useSearchParams
import React from "react";

export default function Benefits() {
  const [searchParams] = useSearchParams();
  const defaultTab = searchParams.get("tab") || "vouchers"; // Read 'tab' from URL, default to 'vouchers'

  return (
    <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Benefits & Cards</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Manage vouchers, virtual cards, and escrow transactions.
      </p>

      <Tabs defaultValue={defaultTab} className="w-full"> {/* Use defaultTab here */}
        <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 h-auto flex-wrap">
          <TabsTrigger value="vouchers">Vouchers</TabsTrigger>
          <TabsTrigger value="virtual-cards">Virtual Cards</TabsTrigger>
          <TabsTrigger value="escrow">Escrow</TabsTrigger>
        </TabsList>

        <TabsContent value="vouchers" className="mt-6">
          <VoucherTab />
        </TabsContent>
        <TabsContent value="virtual-cards" className="mt-6">
          <VirtualCardTab />
        </TabsContent>
        <TabsContent value="escrow" className="mt-6">
          <EscrowTab />
        </TabsContent>
      </Tabs>
    </div>
  );
}