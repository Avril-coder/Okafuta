import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export const RequestMoneyTab: React.FC = () => {
  const requests = [
    { id: '1', date: '2023-10-26', from: 'David Lee', amount: 'N$ 75.00', status: 'Pending' },
    { id: '2', date: '2023-10-25', from: 'Eve Green', amount: 'N$ 120.00', status: 'Completed' },
    { id: '3', date: '2023-10-24', from: 'Frank White', amount: 'N$ 300.00', status: 'Declined' },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Create Money Request</CardTitle>
          <CardDescription>Send a request for funds.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="request-from">Request From (Account/ID)</Label>
            <Input id="request-from" placeholder="e.g., user@example.com or account number" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="request-amount">Amount</Label>
            <Input id="request-amount" type="number" placeholder="e.g., 50.00" />
          </div>
          <Button className="w-full">Create Request</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>All Requests</CardTitle>
          <CardDescription>Overview of all money requests.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>From</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {requests.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.date}</TableCell>
                  <TableCell>{item.from}</TableCell>
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