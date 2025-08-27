import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export const MoveMoneyTab: React.FC = () => {
  const conversions = [
    { id: '1', date: '2023-10-26', from: 'USD 100', to: 'NAD 1850', rate: '1:18.5', status: 'Completed' },
    { id: '2', date: '2023-10-25', from: 'NGN 5000', to: 'USD 5', rate: '1:1000', status: 'Completed' },
    { id: '3', date: '2023-10-24', from: 'NAD 200', to: 'NGN 10800', rate: '1:54', status: 'Pending' },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Currency Conversion</CardTitle>
          <CardDescription>Convert funds between different currencies.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="from-currency">From Currency</Label>
              <Select>
                <SelectTrigger id="from-currency">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="usd">USD</SelectItem>
                  <SelectItem value="nad">NAD</SelectItem>
                  <SelectItem value="ngn">NGN</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="to-currency">To Currency</Label>
              <Select>
                <SelectTrigger id="to-currency">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="usd">USD</SelectItem>
                  <SelectItem value="nad">NAD</SelectItem>
                  <SelectItem value="ngn">NGN</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="convert-amount">Amount</Label>
            <Input id="convert-amount" type="number" placeholder="e.g., 100.00" />
          </div>
          <Button className="w-full">Convert</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Conversion History</CardTitle>
          <CardDescription>Records of all currency conversions.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>From</TableHead>
                <TableHead>To</TableHead>
                <TableHead>Rate</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {conversions.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.date}</TableCell>
                  <TableCell>{item.from}</TableCell>
                  <TableCell>{item.to}</TableCell>
                  <TableCell>{item.rate}</TableCell>
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