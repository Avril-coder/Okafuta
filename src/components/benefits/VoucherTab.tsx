import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';

export const VoucherTab: React.FC = () => {
  const vouchers = [
    { id: 'v1', name: 'Welcome Bonus', value: 'N$ 50.00', expiry: '2024-12-31', status: 'Active' },
    { id: 'v2', name: 'Holiday Discount', value: '10%', expiry: '2024-01-15', status: 'Inactive' },
    { id: 'v3', name: 'Referral Reward', value: 'N$ 25.00', expiry: '2024-11-01', status: 'Active' },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Create New Voucher</CardTitle>
          <CardDescription>Generate new promotional or reward vouchers.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="voucher-name">Voucher Name</Label>
            <Input id="voucher-name" placeholder="e.g., Summer Sale" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="voucher-type">Voucher Type</Label>
            <Select>
              <SelectTrigger id="voucher-type">
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fixed">Fixed Amount</SelectItem>
                <SelectItem value="percentage">Percentage</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="voucher-value">Value</Label>
            <Input id="voucher-value" placeholder="e.g., 50.00 or 15%" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="expiry-date">Expiry Date</Label>
            <Input id="expiry-date" type="date" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="voucher-description">Description</Label>
            <Textarea id="voucher-description" placeholder="Brief description of the voucher." />
          </div>
          <Button className="w-full">Create Voucher</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Voucher List</CardTitle>
          <CardDescription>Manage your existing vouchers.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Value</TableHead>
                <TableHead>Expiry</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {vouchers.map((voucher) => (
                <TableRow key={voucher.id}>
                  <TableCell className="font-medium">{voucher.name}</TableCell>
                  <TableCell>{voucher.value}</TableCell>
                  <TableCell>{voucher.expiry}</TableCell>
                  <TableCell>
                    <Badge variant={voucher.status === 'Active' ? 'default' : 'secondary'}>
                      {voucher.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm" className="mr-2">Edit</Button>
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