import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';

export const EscrowTab: React.FC = () => {
  const escrowTransactions = [
    { id: 'e1', client: 'Alice Johnson', seller: 'Merchant X', amount: 'N$ 1500.00', status: 'Active', created: '2023-10-20' },
    { id: 'e2', client: 'Bob Williams', seller: 'Merchant Y', amount: 'USD 200.00', status: 'Completed', created: '2023-10-15' },
    { id: 'e3', client: 'Charlie Brown', seller: 'Merchant Z', amount: 'N$ 500.00', status: 'Disputed', created: '2023-10-10' },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Create New Escrow Transaction</CardTitle>
          <CardDescription>Set up a secure escrow for transactions between parties.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="client-id">Client Account/ID</Label>
            <Input id="client-id" placeholder="e.g., client@example.com" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="seller-id">Seller Account/ID</Label>
            <Input id="seller-id" placeholder="e.g., seller@example.com" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="escrow-amount">Amount</Label>
            <Input id="escrow-amount" type="number" placeholder="e.g., 1000.00" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="escrow-description">Description</Label>
            <Textarea id="escrow-description" placeholder="Details of the transaction." />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="escrow-status">Initial Status</Label>
            <Select defaultValue="pending">
              <SelectTrigger id="escrow-status">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="active">Active</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button className="w-full">Create Escrow</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Escrow Transaction List</CardTitle>
          <CardDescription>Overview and management of all escrow transactions.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Client</TableHead>
                <TableHead>Seller</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Created Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {escrowTransactions.map((escrow) => (
                <TableRow key={escrow.id}>
                  <TableCell className="font-medium">{escrow.client}</TableCell>
                  <TableCell>{escrow.seller}</TableCell>
                  <TableCell>{escrow.amount}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        escrow.status === 'Active'
                          ? 'default'
                          : escrow.status === 'Completed'
                          ? 'secondary'
                          : 'destructive'
                      }
                      className={escrow.status === 'Completed' ? 'bg-green-500' : ''}
                    >
                      {escrow.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{escrow.created}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};