import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useWallet } from '@/context/WalletContext';
import { toast } from 'sonner';
import { v4 as uuidv4 } from 'uuid';

// Define the shape of a history item
interface MoveHistoryItem {
  id: string;
  date: string;
  from: string;
  to: string;
  amount: string;
  status: string;
}

// Helper to get currency symbol
const getCurrencySymbol = (currency: 'USD' | 'NAD' | 'NGN') => {
  switch (currency) {
    case 'USD': return '$';
    case 'NAD': return 'N$';
    case 'NGN': return '₦';
    default: return '';
  }
};

export const MoveMoneyTab: React.FC = () => {
  const { wallets, createWallet, moveFunds } = useWallet();
  
  // State for creating a new wallet
  const [newWalletName, setNewWalletName] = useState('');
  const [newWalletCurrency, setNewWalletCurrency] = useState<'USD' | 'NAD' | 'NGN' | ''>('');

  // State for moving funds
  const [fromWalletId, setFromWalletId] = useState('');
  const [toWalletId, setToWalletId] = useState('');
  const [moveAmount, setMoveAmount] = useState('');

  // State for history, initialized with mock data
  const [moveHistory, setMoveHistory] = useState<MoveHistoryItem[]>([
    { id: '1', date: '2023-10-26', from: 'NAD Wallet', to: 'Savings (NAD)', amount: 'N$ 5000.00', status: 'Completed' },
    { id: '2', date: '2023-10-25', from: 'USD Wallet', to: 'Travel Fund (USD)', amount: '$ 1000.00', status: 'Completed' },
  ]);

  const handleCreateWallet = (e: React.FormEvent) => {
    e.preventDefault();
    if (newWalletCurrency) {
      createWallet(newWalletName, newWalletCurrency);
      setNewWalletName('');
      setNewWalletCurrency('');
    } else {
      toast.error("Please select a currency for the new wallet.");
    }
  };

  const handleMoveFunds = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = parseFloat(moveAmount);
    
    if (isNaN(amount) || amount <= 0) {
      toast.error("Please enter a valid amount to move.");
      return;
    }
    if (!fromWalletId || !toWalletId) {
      toast.error("Please select both source and destination wallets.");
      return;
    }

    const fromWallet = wallets.find(w => w.id === fromWalletId);
    const toWallet = wallets.find(w => w.id === toWalletId);

    if (!fromWallet || !toWallet) {
      toast.error("Invalid wallet selection.");
      return;
    }
    
    if (fromWallet.balance < amount) {
      toast.error("Insufficient funds in the source wallet.");
      return;
    }

    // Call the context function to update balances
    moveFunds(fromWalletId, toWalletId, amount);

    // Create and add the new history record
    const newHistoryItem: MoveHistoryItem = {
      id: uuidv4(),
      date: new Date().toLocaleDateString('en-CA'), // YYYY-MM-DD format
      from: fromWallet.name,
      to: toWallet.name,
      amount: `${getCurrencySymbol(fromWallet.currency)} ${amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      status: 'Completed'
    };

    setMoveHistory(prevHistory => [newHistoryItem, ...prevHistory]);

    // Reset form fields
    setFromWalletId('');
    setToWalletId('');
    setMoveAmount('');
  };

  return (
    <div className="space-y-6">
      {/* Create New Wallet Card */}
      <Card>
        <CardHeader>
          <CardTitle>Create New Wallet</CardTitle>
          <CardDescription>Add a new wallet, like a savings account.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleCreateWallet} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="new-wallet-name">Wallet Name</Label>
                <Input 
                  id="new-wallet-name" 
                  placeholder="e.g., Savings" 
                  value={newWalletName}
                  onChange={(e) => setNewWalletName(e.target.value)}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="new-wallet-currency">Currency</Label>
                <Select value={newWalletCurrency} onValueChange={(value: 'USD' | 'NAD' | 'NGN') => setNewWalletCurrency(value)} required>
                  <SelectTrigger id="new-wallet-currency">
                    <SelectValue placeholder="Select Currency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="USD">USD</SelectItem>
                    <SelectItem value="NAD">NAD</SelectItem>
                    <SelectItem value="NGN">NGN</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button type="submit" className="w-full">Create Wallet</Button>
          </form>
        </CardContent>
      </Card>

      {/* Move Money Card */}
      <Card>
        <CardHeader>
          <CardTitle>Move Money</CardTitle>
          <CardDescription>Transfer funds between your wallets.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleMoveFunds} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="from-wallet">From Wallet</Label>
                <Select value={fromWalletId} onValueChange={setFromWalletId} required>
                  <SelectTrigger id="from-wallet">
                    <SelectValue placeholder="Select source wallet" />
                  </SelectTrigger>
                  <SelectContent>
                    {wallets.map(wallet => (
                      <SelectItem key={wallet.id} value={wallet.id}>{wallet.name} - {wallet.balance.toLocaleString()}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="to-wallet">To Wallet</Label>
                <Select value={toWalletId} onValueChange={setToWalletId} required>
                  <SelectTrigger id="to-wallet">
                    <SelectValue placeholder="Select destination wallet" />
                  </SelectTrigger>
                  <SelectContent>
                    {wallets.map(wallet => (
                      <SelectItem key={wallet.id} value={wallet.id}>{wallet.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="move-amount">Amount</Label>
              <Input 
                id="move-amount" 
                type="number" 
                placeholder="e.g., 100.00" 
                value={moveAmount}
                onChange={(e) => setMoveAmount(e.target.value)}
                step="0.01"
                required
              />
            </div>
            <Button type="submit" className="w-full">Move Funds</Button>
          </form>
        </CardContent>
      </Card>

      {/* History Card */}
      <Card>
        <CardHeader>
          <CardTitle>Movement History</CardTitle>
          <CardDescription>Records of all internal wallet transfers.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>From</TableHead>
                <TableHead>To</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {moveHistory.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.date}</TableCell>
                  <TableCell>{item.from}</TableCell>
                  <TableCell>{item.to}</TableCell>
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