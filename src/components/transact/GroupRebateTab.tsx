import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Textarea } from '@/components/ui/textarea';

export const GroupRebateTab: React.FC = () => {
  const rebates = [
    { id: '1', name: 'Holiday Special', type: 'Percentage', value: '5%', status: 'Active', created: '2023-09-01' },
    { id: '2', name: 'New User Bonus', type: 'Fixed', value: 'N$ 20.00', status: 'Inactive', created: '2023-08-15' },
    { id: '3', name: 'Loyalty Program', type: 'Percentage', value: '10%', status: 'Active', created: '2023-07-01' },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Create New Rebate</CardTitle>
          <CardDescription>Define new rebate programs for your customers.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="rebate-name">Rebate Name</Label>
            <Input id="rebate-name" placeholder="e.g., Summer Discount" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="rebate-type">Rebate Type</Label>
            <Input id="rebate-type" placeholder="e.g., Percentage, Fixed Amount" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="rebate-value">Value</Label>
            <Input id="rebate-value" placeholder="e.g., 10% or N$ 50.00" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="rebate-description">Description</Label>
            <Textarea id="rebate-description" placeholder="Brief description of the rebate." />
          </div>
          <Button className="w-full">Create Rebate</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Rebate History & Management</CardTitle>
          <CardDescription>View and manage existing rebate programs.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Value</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Created Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rebates.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell>{item.type}</TableCell>
                  <TableCell>{item.value}</TableCell>
                  <TableCell>{item.status}</TableCell>
                  <TableCell>{item.created}</TableCell>
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