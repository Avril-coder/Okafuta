import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { LocationCombobox } from '@/components/shared/LocationCombobox'; // Import the new component
import { GradientButton } from '@/components/landing/GradientButton'; // Import GradientButton

export const VoucherTab: React.FC = () => {
  const [userStatus, setUserStatus] = useState('');
  const [pickupLocation, setPickupLocation] = useState('');

  const vouchers = [
    { id: 'v1', name: 'Welcome Bonus', value: 'N$ 50.00', expiry: '2024-12-31', status: 'Active' },
    { id: 'v2', name: 'Holiday Discount', value: '10%', expiry: '2024-01-15', status: 'Inactive' },
    { id: 'v3', name: 'Referral Reward', value: 'N$ 25.00', expiry: '2024-11-01', status: 'Active' },
  ];

  return (
    <div className="space-y-6">
      <Card className="border-blue-200 dark:border-blue-700 shadow-sm hover:shadow-md hover:shadow-blue-500/20 transition-all duration-200">
        <CardHeader>
          <CardTitle>Create New Voucher</CardTitle>
          <CardDescription>Generate and send a new promotional or reward voucher.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="voucher-name">Voucher Name</Label>
            <Input id="voucher-name" placeholder="e.g., Summer Sale" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="recipient-type">Recipient Type</Label>
              <Select>
                <SelectTrigger id="recipient-type">
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
              <Label htmlFor="recipient-identifier">Recipient</Label>
              <Input id="recipient-identifier" placeholder="e.g., user@example.com" />
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="user-status">User Status</Label>
            <Select value={userStatus} onValueChange={setUserStatus}>
              <SelectTrigger id="user-status">
                <SelectValue placeholder="Select user status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="existing">Existing User</SelectItem>
                <SelectItem value="new">New User (Without an account)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="pickup-location">
              Pickup Location {userStatus !== 'new' && '(Optional)'}
            </Label>
            <LocationCombobox
              value={pickupLocation}
              onValueChange={setPickupLocation}
              required={userStatus === 'new'}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="voucher-amount">Amount</Label>
            <Input id="voucher-amount" type="number" placeholder="e.g., 50.00" />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="expiry-date">Expiry Date</Label>
            <Input id="expiry-date" type="date" />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="voucher-note">Note (explains the purchase)</Label>
            <Textarea id="voucher-note" placeholder="Brief note about the voucher." />
          </div>

          <GradientButton className="w-full">Create Voucher</GradientButton>
        </CardContent>
      </Card>

      <Card className="border-blue-200 dark:border-blue-700 shadow-sm hover:shadow-md hover:shadow-blue-500/20 transition-all duration-200">
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
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};