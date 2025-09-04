import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { GradientButton } from '@/components/landing/GradientButton'; // Import GradientButton

export const RequestMoneyTab: React.FC = () => {
  const [identifierType, setIdentifierType] = useState('email');

  const requestHistory = [
    { id: '1', date: '2023-10-26', from: 'Bob Williams', amount: 'N$ 100.00', status: 'Pending' },
    { id: '2', date: '2023-10-25', from: 'Charlie Brown', amount: 'N$ 50.00', status: 'Paid' },
    { id: '3', date: '2023-10-24', from: 'David Lee', amount: 'N$ 200.00', status: 'Declined' },
  ];

  const getPlaceholder = () => {
    switch (identifierType) {
      case 'email':
        return 'e.g., user@example.com';
      case 'username':
        return 'e.g., john.doe';
      case 'phone':
        return 'e.g., 0812345678';
      default:
        return 'Enter identifier';
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Request Money</CardTitle>
          <CardDescription>Request a payment from another account.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="identifier-type">Request From (Type)</Label>
              <Select value={identifierType} onValueChange={setIdentifierType}>
                <SelectTrigger id="identifier-type">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="email">Email</SelectItem>
                  <SelectItem value="username">Username</SelectItem>
                  <SelectItem value="phone">Phone Number</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="requester">Recipient</Label>
              <Input id="requester" placeholder={getPlaceholder()} required />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="request-amount">Amount</Label>
            <Input id="request-amount" type="number" placeholder="e.g., 100.00" required />
          </div>
           <div className="grid gap-2">
            <Label htmlFor="request-note">Note</Label>
            <Input id="request-note" placeholder="e.g., For lunch" required />
          </div>
          <GradientButton className="w-full">Send Request</GradientButton>
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