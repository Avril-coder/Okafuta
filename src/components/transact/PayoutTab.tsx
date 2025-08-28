import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { TriangleAlert } from 'lucide-react';

// Mock KYC status for demonstration. In a real app, this would come from a backend/context.
// For now, let's assume a global state or context provides this.
// For this example, we'll hardcode it to 'pending' to show the restriction.
const mockMerchantKycStatus: 'not_submitted' | 'pending' | 'verified' | 'rejected' = 'pending'; // Change this to 'verified' to enable payouts

export const PayoutTab: React.FC = () => {
  const payoutHistory = [
    { id: '1', date: '2023-10-26', recipient: 'Vendor A', amount: '-N$ 5000.00', status: 'Completed' },
    { id: '2', date: '2023-10-25', recipient: 'Supplier B', amount: '-N$ 1200.00', status: 'Completed' },
    { id: '3', date: '2023-10-24', recipient: 'Freelancer C', amount: '-N$ 300.00', status: 'Pending' },
  ];

  const withdrawalRequests = [
    { id: 'W1', date: '2023-10-26', customer: 'Customer X', amount: 'N$ 200.00', status: 'Pending' },
    { id: 'W2', date: '2023-10-25', customer: 'Customer Y', amount: 'N$ 50.00', status: 'Pending' },
  ];

  const isKycVerified = mockMerchantKycStatus === 'verified';

  return (
    <div className="space-y-6">
      {!isKycVerified && (
        <Alert variant="destructive">
          <TriangleAlert className="h-4 w-4" />
          <AlertTitle>KYC Verification Required</AlertTitle>
          <AlertDescription>
            Payout functionality is disabled until your KYC documents are verified. Please complete the{' '}
            <a href="/dashboard/kyc" className="underline font-medium">KYC Verification</a> process.
          </AlertDescription>
        </Alert>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Direct Payout</CardTitle>
          <CardDescription>Initiate a direct payout to a recipient.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="payout-recipient">Recipient Account/ID</Label>
            <Input id="payout-recipient" placeholder="e.g., vendor@example.com or bank account" disabled={!isKycVerified} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="payout-amount">Amount</Label>
            <Input id="payout-amount" type="number" placeholder="e.g., 1000.00" disabled={!isKycVerified} />
          </div>
          <Button className="w-full" disabled={!isKycVerified}>Initiate Payout</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Payout History</CardTitle>
          <CardDescription>Records of all payouts made by the merchant.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Recipient</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {payoutHistory.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.date}</TableCell>
                  <TableCell>{item.recipient}</TableCell>
                  <TableCell>{item.amount}</TableCell>
                  <TableCell>{item.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Pending Customer Withdrawal Requests</CardTitle>
          <CardDescription>Review and process customer withdrawal requests.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {withdrawalRequests.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.date}</TableCell>
                  <TableCell>{item.customer}</TableCell>
                  <TableCell>{item.amount}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{item.status}</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm" className="mr-2" disabled={!isKycVerified}>Approve</Button>
                    <Button variant="destructive" size="sm" disabled={!isKycVerified}>Reject</Button>
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