import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useWallet } from '@/context/WalletContext'; // Import useWallet
import { toast } from 'sonner'; // Import toast

export const AddFundTab: React.FC = () => {
  const { addFunds } = useWallet(); // Use the addFunds function from context
  const [amount, setAmount] = useState<string>('');
  const [selectedCurrency, setSelectedCurrency] = useState<'usd' | 'nad' | 'ngn' | ''>('');

  const fundHistory = [
    { id: '1', date: '2023-10-26', amount: '+N$ 500.00', method: 'Bank Transfer', status: 'Completed' },
    { id: '2', date: '2023-10-25', amount: '+N$ 1000.00', method: 'Credit Card', status: 'Completed' },
    { id: '3', date: '2023-10-24', amount: '+N$ 200.00', method: 'E-Wallet', status: 'Pending' },
  ];

  const handleAddFunds = (e: React.FormEvent) => {
    e.preventDefault();
    const numericAmount = parseFloat(amount);

    if (isNaN(numericAmount) || numericAmount <= 0) {
      toast.error("Please enter a valid positive amount.");
      return;
    }
    if (!selectedCurrency) {
      toast.error("Please select a currency.");
      return;
    }

    addFunds(selectedCurrency, numericAmount);
    setAmount(''); // Clear the input field
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Add Money</CardTitle>
          <CardDescription>Top up your merchant wallet.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleAddFunds} className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="amount">Amount</Label>
              <Input
                id="amount"
                type="number"
                placeholder="e.g., 500.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                step="0.01"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="currency-method">Currency</Label>
              <Select value={selectedCurrency} onValueChange={(value: 'usd' | 'nad' | 'ngn') => setSelectedCurrency(value)} required>
                <SelectTrigger id="currency-method">
                  <SelectValue placeholder="Select currency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="usd">USD</SelectItem>
                  <SelectItem value="nad">NAD</SelectItem>
                  <SelectItem value="ngn">NGN</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" className="w-full">Add Funds</Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Fund History</CardTitle>
          <CardDescription>Recent additions to your wallet.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Method</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {fundHistory.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.date}</TableCell>
                  <TableCell>{item.amount}</TableCell>
                  <TableCell>{item.method}</TableCell>
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