import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export const BillPaymentTab: React.FC = () => {
  const billPayments = [
    { id: '1', date: '2023-10-26', customer: 'Grace Hall', biller: 'Electricity Co.', amount: 'N$ 350.00', status: 'Paid' },
    { id: '2', date: '2023-10-25', customer: 'Henry King', biller: 'Water Services', amount: 'N$ 180.00', status: 'Paid' },
    { id: '3', date: '2023-10-24', customer: 'Ivy Lee', biller: 'Internet Provider', amount: 'N$ 400.00', status: 'Pending' },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Pay Bills</CardTitle>
          <CardDescription>Process bill payments for your customers.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="customer-id">Customer ID</Label>
            <Input id="customer-id" placeholder="e.g., CUST12345" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="biller">Biller Name</Label>
            <Input id="biller" placeholder="e.g., Electricity Co." />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="bill-amount">Amount</Label>
            <Input id="bill-amount" type="number" placeholder="e.g., 350.00" />
          </div>
          <Button className="w-full">Process Payment</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Bill Payment History</CardTitle>
          <CardDescription>Records of all bill payments made.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Biller</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {billPayments.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.date}</TableCell>
                  <TableCell>{item.customer}</TableCell>
                  <TableCell>{item.biller}</TableCell>
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