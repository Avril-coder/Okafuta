import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';
import { GradientButton } from '@/components/landing/GradientButton'; // Import GradientButton

interface CableTvTabProps {
  selectedWallet: string;
  setSelectedWallet: (wallet: string) => void;
  selectedCountry: string;
  setSelectedCountry: (country: string) => void;
}

export const CableTvTab: React.FC<CableTvTabProps> = ({
  selectedWallet,
  setSelectedWallet,
  selectedCountry,
  setSelectedCountry,
}) => {
  const [customerAccount, setCustomerAccount] = useState('');
  const [amount, setAmount] = useState('');
  const [selectedProvider, setSelectedProvider] = useState('');
  const [showProviderError, setShowProviderError] = useState(false);

  const mockCableTvProviders: { [key: string]: string[] } = {
    Namibia: ['DStv Namibia', 'GOtv Namibia'],
    Nigeria: ['DStv Nigeria', 'GOtv Nigeria', 'StarTimes'],
    'South Africa': ['DStv South Africa', 'Openview'],
  };

  const mockBillList = [
    { id: '1', timestamp: '2023-10-27 15:00', customer: '1234567890', provider: 'DStv Namibia', amount: 'N$ 600.00', status: 'Completed' },
    { id: '2', timestamp: '2023-10-27 10:30', customer: '0987654321', provider: 'GOtv Nigeria', amount: '₦ 3500.00', status: 'Completed' },
    { id: '3', timestamp: '2023-10-26 17:00', customer: '1122334455', provider: 'DStv South Africa', amount: 'R 450.00', status: 'Pending' },
  ];

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedProvider) {
      setShowProviderError(true);
      toast.error("Please select a cable TV provider.");
      return;
    }
    setShowProviderError(false);

    if (!selectedWallet || !selectedCountry || !customerAccount || !amount) {
      toast.error("Please fill in all required fields.");
      return;
    }

    console.log({ selectedWallet, selectedCountry, selectedProvider, customerAccount, amount });
    toast.success("Cable TV payment initiated!");
    // Reset form fields after submission
    setCustomerAccount('');
    setAmount('');
    setSelectedProvider('');
  };

  const availableProviders = mockCableTvProviders[selectedCountry] || [];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Cable TV Payment</CardTitle>
          <CardDescription>Offer cable TV subscription payment services to your customers.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleContinue} className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="select-wallet">From Wallet</Label>
              <Select value={selectedWallet} onValueChange={setSelectedWallet} required>
                <SelectTrigger id="select-wallet">
                  <SelectValue placeholder="Select Wallet" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="nad">NAD Wallet</SelectItem>
                  <SelectItem value="usd">USD Wallet</SelectItem>
                  <SelectItem value="ngn">NGN Wallet</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="select-country">Country Selection</Label>
              <Select value={selectedCountry} onValueChange={(value) => { setSelectedCountry(value); setSelectedProvider(''); }} required>
                <SelectTrigger id="select-country">
                  <SelectValue placeholder="Select Country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Namibia">Namibia</SelectItem>
                  <SelectItem value="Nigeria">Nigeria</SelectItem>
                  <SelectItem value="South Africa">South Africa</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="service-provider">Cable TV Provider</Label>
              <Select value={selectedProvider} onValueChange={(value) => { setSelectedProvider(value); setShowProviderError(false); }} required>
                <SelectTrigger id="service-provider" className={cn(showProviderError && "border-red-500")}>
                  <SelectValue placeholder="Select an item in the list" />
                </SelectTrigger>
                <SelectContent>
                  {availableProviders.length > 0 ? (
                    availableProviders.map((provider) => (
                      <SelectItem key={provider} value={provider}>
                        {provider}
                      </SelectItem>
                    ))
                  ) : (
                    <div className="px-2 py-1 text-sm text-muted-foreground">
                      Please select a country first.
                    </div>
                  )}
                </SelectContent>
              </Select>
              {showProviderError && (
                <p className="text-sm text-red-500">Please select an item in the list</p>
              )}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="customer-account">Customer Account/Smart Card Number</Label>
              <Input
                id="customer-account"
                placeholder="e.g., 1234567890"
                value={customerAccount}
                onChange={(e) => setCustomerAccount(e.target.value)}
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="amount">Amount</Label>
              <Input
                id="amount"
                type="number"
                placeholder="Enter Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                step="0.01"
                required
              />
            </div>

            <GradientButton type="submit" className="w-full">Continue</GradientButton>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Cable TV Payments</CardTitle>
          <CardDescription>History of cable TV payments processed.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Timestamp</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Provider</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockBillList.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.timestamp}</TableCell>
                  <TableCell>{item.customer}</TableCell>
                  <TableCell>{item.provider}</TableCell>
                  <TableCell>{item.amount}</TableCell>
                  <TableCell>{item.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};