import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { allTransactions, currentMerchant } from "@/data/mockData";

// Filter transactions to get only those for the current merchant
const customerTransactions = allTransactions.filter(tx => tx.merchantId === currentMerchant.id);

export default function Customers() {
  const [filterType, setFilterType] = useState('all');
  const [filterCustomer, setFilterCustomer] = useState('');
  const [filterDate, setFilterDate] = useState('');

  const filteredTransactions = customerTransactions.filter(transaction => {
    const typeMatch = filterType === 'all' || transaction.type.toLowerCase() === filterType;
    const customerMatch = filterCustomer === '' || transaction.customer.toLowerCase().includes(filterCustomer.toLowerCase());
    const dateMatch = filterDate === '' || transaction.date === filterDate;
    return typeMatch && customerMatch && dateMatch;
  });

  return (
    <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Customer Management</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Manage customer requests and view their transaction history.
      </p>

      <div className="space-y-8">
        <Card className="border-blue-200 dark:border-blue-700 shadow-sm hover:shadow-md hover:shadow-blue-500/20 transition-all duration-200">
          <CardHeader>
            <CardTitle>Customer Transactions</CardTitle>
            <CardDescription>Full history of processed customer transactions.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="grid gap-2">
                <Label htmlFor="filter-type">Filter by Type</Label>
                <Select value={filterType} onValueChange={setFilterType}>
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
                <Input
                  id="filter-customer"
                  placeholder="Customer Name"
                  value={filterCustomer}
                  onChange={(e) => setFilterCustomer(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="filter-date">Filter by Date</Label>
                <Input
                  id="filter-date"
                  type="date"
                  value={filterDate}
                  onChange={(e) => setFilterDate(e.target.value)}
                />
              </div>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Timestamp</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredTransactions.length > 0 ? (
                  filteredTransactions.map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell className="font-medium">{transaction.customer}</TableCell>
                      <TableCell>{transaction.type}</TableCell>
                      <TableCell>{transaction.amount}</TableCell>
                      <TableCell>{transaction.date}</TableCell>
                      <TableCell>{transaction.timestamp}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            transaction.status === "Completed"
                              ? "default"
                              : transaction.status === "Pending"
                              ? "secondary"
                              : "destructive"
                          }
                          className={transaction.status === "Completed" ? "bg-green-500" : ""}
                        >
                          {transaction.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center">
                      No transactions found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}