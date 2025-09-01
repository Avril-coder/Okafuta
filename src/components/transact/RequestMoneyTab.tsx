import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

export const RequestMoneyTab: React.FC = () => {
  const requestHistory = [
    { id: '1', date: '2023-10-26', from: 'Bob Williams', amount: 'N$ 100.00', status: 'Pending' },
    { id: '2', date: '2023-10-25', from: 'Charlie Brown', amount: 'N$ 50.00', status: 'Paid' },
    { id: '3', date: '2023-10-24', from: 'David Lee', amount: 'N$ 200.00', status: 'Declined' },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Request Money</CardTitle>
          <CardDescription>Request a payment from another account.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="requester">From Account/ID</Label>
            <Input id="requester" placeholder="e.g., user@example.com or account number" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="request-amount">Amount</Label>
            <Input id="request-amount" type="number" placeholder="e.g., 100.00" />
          </div>
           <div className="grid gap-2">
            <Label htmlFor="request-note">Note (Optional)</Label>
            <Input id="request-note" placeholder="e.g., For lunch" />
          </div>
          <Button className="w-full">Send Request</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Request History</CardTitle>
          <CardDescription>Records of money you've requested.</CardDescription>
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
              {requestHistory.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.date}</TableCell>
                  <TableCell>{item.from}</TableCell>
                  <TableCell>{item.amount}</TableCell>
                  <TableCell>
                     <Badge
                        variant={
                          item.status === 'Paid'
                            ? 'default'
                            : item.status === 'Pending'
                            ? 'secondary'
                            : 'destructive'
                        }
                        className={item.status === 'Paid' ? 'bg-green-500' : ''}
                      >
                        {item.status}
                      </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};