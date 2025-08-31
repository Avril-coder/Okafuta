import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AirtimeTab } from "@/components/customer/bill-payment/AirtimeTab";
import { ElectricityTab } from "@/components/customer/bill-payment/ElectricityTab";
import { CableTvTab } from "@/components/customer/bill-payment/CableTvTab";
import { WaterTab } from "@/components/customer/bill-payment/WaterTab";
import { Phone, Zap, Tv, Droplet } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SharedHeader } from '@/components/shared/Header';
import { MadeWithDyad } from '@/components/made-with-dyad';
import { WalletProvider } from '@/context/WalletContext'; // Assuming customer also uses a wallet

const billPaymentTabsConfig = [
  { value: "airtime", name: "AirTime", icon: Phone },
  { value: "electricity", name: "Electricity", icon: Zap },
  { value: "cable-tv", name: "Cable Tv", icon: Tv },
  { value: "water", name: "Water", icon: Droplet },
];

export default function PayBill() {
  const [selectedWallet, setSelectedWallet] = useState('nad');
  const [selectedCountry, setSelectedCountry] = useState('Namibia');

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <SharedHeader />
      <div className="flex-1 px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Pay Bill</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Select a service to pay your bills.
        </p>

        <Tabs defaultValue="airtime" className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto flex-wrap gap-4 mb-8">
            {billPaymentTabsConfig.map((tab) => (
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
      <MadeWithDyad />
    </div>
  );
}