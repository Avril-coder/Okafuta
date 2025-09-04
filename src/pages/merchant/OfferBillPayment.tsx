import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AirtimeTab } from "@/components/merchant/bill-payment/AirtimeTab";
import { ElectricityTab } from "@/components/merchant/bill-payment/ElectricityTab";
import { CableTvTab } from "@/components/merchant/bill-payment/CableTvTab";
import { WaterTab } from "@/components/merchant/bill-payment/WaterTab";
import { Phone, Zap, Tv, Droplet } from 'lucide-react';
import { cn } from '@/lib/utils';

const billPaymentTabsConfig = [
  { value: "airtime", name: "AirTime", icon: Phone },
  { value: "electricity", name: "Electricity", icon: Zap },
  { value: "cable-tv", name: "Cable TV", icon: Tv },
  { value: "water", name: "Water", icon: Droplet },
];

export default function OfferBillPayment() {
  const [selectedWallet, setSelectedWallet] = useState('nad');
  const [selectedCountry, setSelectedCountry] = useState('Namibia');

  return (
    <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Offer Bill Payment Services</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Provide various bill payment options to your customers.
      </p>

      <Tabs defaultValue="airtime" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto flex-wrap gap-4 mb-8 bg-transparent dark:bg-transparent">
          {billPaymentTabsConfig.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className={cn(
                "group flex flex-col items-center justify-center p-2 rounded-lg transition-all duration-200",
                "hover:bg-blue-50/50 dark:hover:bg-blue-900/20 data-[state=active]:bg-blue-50 dark:data-[state=active]:bg-blue-900/20", // Subtle hover and active background
                "border border-transparent data-[state=active]:border-blue-200 dark:data-[state=active]:border-blue-700", // Subtle border on active
                "shadow-none"
              )}
              aria-label={tab.name}
            >
              <div className={cn(
                "flex items-center justify-center h-14 w-14 rounded-full",
                "bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400", // Inactive state for circle and icon
                "group-data-[state=active]:bg-blue-100 group-data-[state=active]:text-blue-800 dark:group-data-[state=active]:bg-blue-900/30 dark:group-data-[state=active]:text-blue-200", // Active state for circle and icon
                "transition-colors duration-200 shadow-none group-hover:shadow-none"
              )}>
                <tab.icon className="h-6 w-6" />
              </div>
              <span className="mt-2 text-sm font-medium text-center text-gray-700 dark:text-gray-300 group-data-[state=active]:text-blue-700 dark:group-data-[state=active]:text-blue-300">
                {tab.name}
              </span>
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="airtime" className="mt-6">
          <AirtimeTab
            selectedWallet={selectedWallet}
            setSelectedWallet={setSelectedWallet}
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
          />
        </TabsContent>
        <TabsContent value="electricity" className="mt-6">
          <ElectricityTab
            selectedWallet={selectedWallet}
            setSelectedWallet={setSelectedWallet}
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
          />
        </TabsContent>
        <TabsContent value="cable-tv" className="mt-6">
          <CableTvTab
            selectedWallet={selectedWallet}
            setSelectedWallet={setSelectedWallet}
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
          />
        </TabsContent>
        <TabsContent value="water" className="mt-6">
          <WaterTab
            selectedWallet={selectedWallet}
            setSelectedWallet={setSelectedWallet}
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}