import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';

export const VirtualCardTab: React.FC = () => {
  const virtualCards = [
    { id: 'vc1', holder: 'John Doe', limit: 'N$ 1000.00', currency: 'NAD', status: 'Active' },
    { id: 'vc2', holder: 'Jane Smith', limit: 'USD 500.00', currency: 'USD', status: 'Blocked' },
    { id: 'vc3', holder: 'Alice Johnson', limit: 'N$ 2500.00', currency: 'NAD', status: 'Active' },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Issue New Virtual Card</CardTitle>
          <CardDescription>Create and configure virtual cards for various purposes.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="card-holder">Card Holder Name</Label>
            <Input id="card-holder" placeholder="e.g., John Doe" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="card-limit">Spending Limit</Label>
            <Input id="card-limit" type="number" placeholder="e.g., 500.00" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="card-currency">Currency</Label>
            <Select>
              <SelectTrigger id="card-currency">
                <SelectValue placeholder="Select currency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="nad">NAD</SelectItem>
                <SelectItem value="usd">USD</SelectItem>
                <SelectItem value="ngn">NGN</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="card-purpose">Purpose</Label>
            <Input id="card-purpose" placeholder="e.g., Online Ads, Travel Expenses" />
          </div>
          <Button className="w-full">Issue Card</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Manage Virtual Cards</CardTitle>
          <CardDescription>Overview of all issued virtual cards.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Card Holder</TableHead>
                <TableHead>Limit</TableHead>
                <TableHead>Currency</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {virtualCards.map((card) => (
                <TableRow key={card.id}>
                  <TableCell className="font-medium">{card.holder}</TableCell>
                  <TableCell>{card.limit}</TableCell>
                  <TableCell>{card.currency}</TableCell>
                  <TableCell>
                    <Badge variant={card.status === 'Active' ? 'default' : 'destructive'}>
                      {card.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm" className="mr-2">
                      {card.status === 'Active' ? 'Block' : 'Unblock'}
                    </Button>
                    <Button variant="destructive" size="sm">Delete</Button>
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