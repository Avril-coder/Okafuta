import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { GradientButton } from '@/components/landing/GradientButton'; // Import GradientButton

export const SendMoneyTab: React.FC = () => {
  const transferHistory = [
    { id: '1', date: '2023-10-26', recipient: 'Alice Johnson', amount: '-N$ 150.00', status: 'Completed' },
    { id: '2', date: '2023-10-25', recipient: 'Bob Williams', amount: '-N$ 250.00', status: 'Completed' },
    { id: '3', date: '2023-10-24', recipient: 'Charlie Brown', amount: '-N$ 50.00', status: 'Pending' },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Send Money</CardTitle>
          <CardDescription>Transfer funds to another account.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="recipient">Recipient Account/ID</Label>
            <Input id="recipient" placeholder="e.g., user@example.com or account number" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="send-amount">Amount</Label>
            <Input id="send-amount" type="number" placeholder="e.g., 100.00" />
          </div>
          <GradientButton className="w-full">Send Funds</GradientButton>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Transfer History</CardTitle>
          <CardDescription>Records of money sent.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Recipient</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transferHistory.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.date}</TableCell>
                  <TableCell>{item.recipient}</TableCell>
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