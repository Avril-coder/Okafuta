import React, { useState } from 'react';
import { KycForm } from '@/components/kyc/KycForm';
import { KycStatusBadge } from '@/components/kyc/KycStatusBadge';

// Mock KYC status for demonstration. In a real app, this would come from a backend/context.
type KycStatus = 'not_submitted' | 'pending' | 'verified' | 'rejected';

export default function KycVerification() {
  const [kycStatus, setKycStatus] = useState<KycStatus>('not_submitted'); // Initial status

  const handleKycSubmit = (data: any) => {
    console.log("KYC Data Submitted:", data);
    // Simulate sending to backend and setting status to pending
    setKycStatus('pending');
    // In a real app, this would involve an API call and state update based on response
  };

  return (
    <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">KYC Verification</h1>
        <KycStatusBadge status={kycStatus} />
      </div>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Complete your Know Your Customer (KYC) process to unlock full merchant capabilities.
      </p>

      <KycForm onKycSubmit={handleKycSubmit} currentStatus={kycStatus} />
    </div>
  );
}