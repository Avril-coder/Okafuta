import React from 'react';
import { BlobBackground } from '@/components/shared/BlobBackground';
import { LandingHeader } from '@/components/landing/LandingHeader';
import { MultiStepSignUpForm } from '@/components/signup/MultiStepSignUpForm'; // Import the new component

export default function SignUp() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <LandingHeader />
      <div className="flex-1 flex items-center justify-center px-4 overflow-hidden">
        <BlobBackground />
        <MultiStepSignUpForm /> {/* Render the new multi-step form here */}
      </div>
    </div>
  );
}