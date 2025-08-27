import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';

export default function Customers() {
  const pendingRequests = [
    { id: 'req1', customer: 'Alice Smith', type: 'Withdrawal', amount: 'N$ 250.00', date: '2023-10-27', status: 'Pending' },
    { id: 'req2', customer: 'Bob Johnson', type: 'Deposit', amount: 'N$ 500.00', date: '2023-10-27', status: 'Pending' },
    { id: 'req3', customer: 'Charlie Brown', type: 'Voucher', amount: 'N$ 50.00', date: '2023-10-26', status: 'Pending' },
  ];

  const customerTransactions = [
    { id: 'tx1', customer: 'Alice Smith', type: 'Withdrawal', amount: '-N$ 250.00', date: '2023-10-20', status: 'Completed' },
    { id: 'tx2', customer: 'David Lee', type: 'Deposit', amount: '+N$ 1000.00', date: '2023-10-19', status: 'Completed' },
    { id: 'tx3', customer: 'Eve Green', type: 'Bill Payment', amount: '-N$ 300.00', date: '2023-10-18', status: 'Completed' },
    { id: 'tx4', customer: 'Alice Smith', type: 'Voucher', amount: '-N$ 20.00', date: '2023-10-15', status: 'Completed' },
  ];

  return (
    <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Customer Management</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Manage customer requests and view their transaction history.
      </p>

      <div className="space-y-8">
        {/* Customer Requests */}
        <Card>
          <CardHeader>
            <CardTitle>Customer Requests</CardTitle>
            <CardDescription>Review and act on pending customer requests.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pendingRequests.map((request) => (
                  <TableRow key={request.id}>
                    <TableCell className="font-medium">{request.customer}</TableCell>
                    <TableCell>{request.type}</TableCell>
                    <TableCell>{request.amount}</TableCell>
                    <TableCell>{request.date}</TableCell>
                    <TableCell>
                      <Badge variant="secondary">{request.status}</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="outline" size="sm" className="mr-2">Approve</Button>
                      <Button variant="destructive" size="sm">Reject</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Customer Transactions */}
        <Card>
          <CardHeader>
            <CardTitle>Customer Transactions</CardTitle>
            <CardDescription>Full history of processed customer transactions.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="grid gap-2">
                <Label htmlFor="filter-type">Filter by Type</Label>
                <Select>
                  <SelectTrigger id="filter-type">
                    <SelectValue placeholder="All Types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="withdrawal">Withdrawal</SelectItem>
                    <SelectItem value="deposit">Deposit</SelectItem>
                    <SelectItem value="voucher">Voucher</SelectItem>
                    <SelectItem value="bill-payment">Bill Payment</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="filter-customer">Filter by Customer</Label>
                <Input id="filter-customer" placeholder="Customer Name" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="filter-date">Filter by Date</Label>
                <Input id="filter-date" type="date" />
              </div>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {customerTransactions.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell className="font-medium">{transaction.customer}</TableCell>
                    <TableCell>{transaction.type}</TableCell>
                    <TableCell>{transaction.amount}</TableCell>
                    <TableCell>{transaction.date}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          transaction.status === "Completed"
                            ? "default"
                            : "secondary"
                        }
                        className={transaction.status === "Completed" ? "bg-green-500" : ""}
                      >
                        {transaction.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}