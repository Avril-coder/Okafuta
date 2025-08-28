import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { KycStatusBadge } from '@/components/kyc/KycStatusBadge';
import { toast } from 'sonner';

interface KycRequest {
  id: string;
  merchantName: string;
  fullName: string;
  dob: string;
  address: string;
  businessRegNo: string;
  idCard: string | null;
  passport: string | null;
  utilityBill: string | null;
  status: 'pending' | 'verified' | 'rejected';
  submissionDate: string;
}

export default function KycReview() {
  // Mock data for KYC requests. In a real app, this would come from a backend.
  const [kycRequests, setKycRequests] = useState<KycRequest[]>([
    {
      id: 'kyc001',
      merchantName: 'Merchant A',
      fullName: 'John Doe',
      dob: '1990-05-15',
      address: '123 Main St, City, Country',
      businessRegNo: 'BUS12345',
      idCard: 'john_doe_id.pdf',
      passport: null,
      utilityBill: 'john_doe_bill.pdf',
      status: 'pending',
      submissionDate: '2023-10-27',
    },
    {
      id: 'kyc002',
      merchantName: 'Merchant B',
      fullName: 'Jane Smith',
      dob: '1985-11-20',
      address: '456 Oak Ave, Town, Country',
      businessRegNo: 'BUS67890',
      idCard: null,
      passport: 'jane_smith_passport.jpg',
      utilityBill: 'jane_smith_bill.png',
      status: 'pending',
      submissionDate: '2023-10-26',
    },
    {
      id: 'kyc003',
      merchantName: 'Merchant C',
      fullName: 'Alice Johnson',
      dob: '1992-03-01',
      address: '789 Pine Ln, Village, Country',
      businessRegNo: 'BUS11223',
      idCard: 'alice_johnson_id.png',
      passport: null,
      utilityBill: 'alice_johnson_bill.pdf',
      status: 'verified',
      submissionDate: '2023-10-25',
    },
  ]);

  const handleApprove = (id: string) => {
    setKycRequests((prev) =>
      prev.map((req) => (req.id === id ? { ...req, status: 'verified' } : req))
    );
    toast.success(`KYC request ${id} approved.`);
  };

  const handleReject = (id: string) => {
    setKycRequests((prev) =>
      prev.map((req) => (req.id === id ? { ...req, status: 'rejected' } : req))
    );
    toast.error(`KYC request ${id} rejected.`);
  };

  return (
    <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">KYC Review</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Review and manage Know Your Customer (KYC) verification requests from merchants.
      </p>

      <Card>
        <CardHeader>
          <CardTitle>Pending & Reviewed KYC Requests</CardTitle>
          <CardDescription>List of all merchant KYC submissions.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Merchant</TableHead>
                <TableHead>Full Name</TableHead>
                <TableHead>Business Reg. No.</TableHead>
                <TableHead>Documents</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Submission Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {kycRequests.map((request) => (
                <TableRow key={request.id}>
                  <TableCell className="font-medium">{request.merchantName}</TableCell>
                  <TableCell>{request.fullName}</TableCell>
                  <TableCell>{request.businessRegNo}</TableCell>
                  <TableCell>
                    {request.idCard && <span className="block text-xs">ID: {request.idCard}</span>}
                    {request.passport && <span className="block text-xs">Passport: {request.passport}</span>}
                    {request.utilityBill && <span className="block text-xs">Bill: {request.utilityBill}</span>}
                  </TableCell>
                  <TableCell>
                    <KycStatusBadge status={request.status} />
                  </TableCell>
                  <TableCell>{request.submissionDate}</TableCell>
                  <TableCell className="text-right">
                    {request.status === 'pending' ? (
                      <>
                        <Button variant="outline" size="sm" className="mr-2" onClick={() => handleApprove(request.id)}>
                          Approve
                        </Button>
                        <Button variant="destructive" size="sm" onClick={() => handleReject(request.id)}>
                          Reject
                        </Button>
                      </>
                    ) : (
                      <span className="text-muted-foreground text-sm">Reviewed</span>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}