import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export const AddFundTab: React.FC = () => {
  const fundHistory = [
    { id: '1', date: '2023-10-26', amount: '+N$ 500.00', method: 'Bank Transfer', status: 'Completed' },
    { id: '2', date: '2023-10-25', amount: '+N$ 1000.00', method: 'Credit Card', status: 'Completed' },
    { id: '3', date: '2023-10-24', amount: '+N$ 200.00', method: 'E-Wallet', status: 'Pending' },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Add Money</CardTitle>
          <CardDescription>Top up your merchant wallet.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="amount">Amount</Label>
            <Input id="amount" type="number" placeholder="e.g., 500.00" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="method">Payment Method</Label>
            <Input id="method" placeholder="e.g., Bank Transfer, Credit Card" />
          </div>
          <Button className="w-full">Add Funds</Button>
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