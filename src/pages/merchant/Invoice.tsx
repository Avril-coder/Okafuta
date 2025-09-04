import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { GradientButton } from '@/components/landing/GradientButton'; // Import GradientButton

interface Invoice {
  id: string;
  invoiceNumber: string;
  customer: string;
  amount: string;
  status: 'Paid' | 'Pending' | 'Overdue';
  issueDate: string;
  dueDate: string;
}

export default function InvoicePage() {
  const invoices: Invoice[] = [
    { id: 'inv001', invoiceNumber: 'INV-2023-001', customer: 'Alice Smith', amount: 'N$ 1500.00', status: 'Paid', issueDate: '2023-10-01', dueDate: '2023-10-15' },
    { id: 'inv002', invoiceNumber: 'INV-2023-002', customer: 'Bob Johnson', amount: 'N$ 750.00', status: 'Pending', issueDate: '2023-10-10', dueDate: '2023-10-24' },
    { id: 'inv003', invoiceNumber: 'INV-2023-003', customer: 'Charlie Brown', amount: 'N$ 200.00', status: 'Overdue', issueDate: '2023-09-20', dueDate: '2023-10-04' },
    { id: 'inv004', invoiceNumber: 'INV-2023-004', customer: 'David Lee', amount: 'N$ 3000.00', status: 'Paid', issueDate: '2023-10-15', dueDate: '2023-10-29' },
  ];

  return (
    <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Invoices</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Manage all your generated invoices and track their payment status.
      </p>

      <div className="space-y-8">
        {/* Create New Invoice */}
        <Card>
          <CardHeader>
            <CardTitle>Create New Invoice</CardTitle>
            <CardDescription>Generate a new invoice for your customers.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="customer-name">Customer Name</Label>
              <Input id="customer-name" placeholder="e.g., Jane Doe" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="invoice-amount">Amount</Label>
              <Input id="invoice-amount" type="number" placeholder="e.g., 500.00" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="due-date">Due Date</Label>
              <Input id="due-date" type="date" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Input id="description" placeholder="e.g., Services rendered" />
            </div>
            <GradientButton className="w-full">Generate Invoice</GradientButton>
          </CardContent>
        </Card>

        {/* Invoice List */}
        <Card>
          <CardHeader>
            <CardTitle>All Invoices</CardTitle>
            <CardDescription>Overview of all generated invoices.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Invoice No.</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Issue Date</TableHead>
                  <TableHead>Due Date</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.map((invoice) => (
                  <TableRow key={invoice.id}>
                    <TableCell className="font-medium">{invoice.invoiceNumber}</TableCell>
                    <TableCell>{invoice.customer}</TableCell>
                    <TableCell>{invoice.amount}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          invoice.status === 'Paid'
                            ? 'default'
                            : invoice.status === 'Pending'
                            ? 'secondary'
                            : 'destructive'
                        }
                        className={invoice.status === 'Paid' ? 'bg-green-500' : ''}
                      >
                        {invoice.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{invoice.issueDate}</TableCell>
                    <TableCell>{invoice.dueDate}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="outline" size="sm" className="mr-2 rounded-full">View</Button>
                      {invoice.status !== 'Paid' && (
                        <Button variant="secondary" size="sm" className="rounded-full">Mark as Paid</Button>
                      )}
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