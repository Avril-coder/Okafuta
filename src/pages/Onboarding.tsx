import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ScanLine, Smartphone, UserCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';
import { DiditLogo } from '@/components/shared/DiditLogo'; // Import the new DiditLogo

const verificationSteps = [
  { id: 1, name: 'ID Verification', icon: ScanLine, description: 'Upload a valid government-issued ID.' },
  { id: 2, name: 'NFC Verification', icon: Smartphone, description: 'Scan your ID chip with your smartphone.' },
  { id: 3, name: 'Face Verification', icon: UserCheck, description: 'Take a live selfie to match your ID.' },
];

export default function Onboarding() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    if (currentStep < verificationSteps.length) {
      setCurrentStep(currentStep + 1);
      toast.info(`Step ${currentStep + 1}: ${verificationSteps[currentStep].name}`);
    } else {
      toast.success("Identity verification complete! Redirecting to sign-up.");
      navigate('/signup'); // Redirect to the actual sign-up page
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-950 px-4 py-12">
      <header className="w-full max-w-4xl text-center mb-8">
        <div className="flex items-center justify-center lg:justify-start mb-4">
          <Link to="/" className="flex items-center">
            <DiditLogo /> {/* Use the new DiditLogo component */}
          </Link>
        </div>
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2">
          Verify Your Identity
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Complete these steps to verify your identity.
        </p>
        <Separator className="mt-6 bg-gray-200 dark:bg-gray-700" />
      </header>

      <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* QR Code Section */}
        <Card className="flex flex-col items-center justify-center p-8 text-center h-full shadow-none border-none bg-gray-50 dark:bg-gray-900"> {/* Removed shadow */}
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Start Verification on Mobile</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            {/* Placeholder for QR Code */}
            <div className="w-48 h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center rounded-lg mb-4">
              <span className="text-gray-500 dark:text-gray-400 text-sm">QR Code Here</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Scan the code to start the process and continue on another device.
            </p>
            <Button variant="outline" className="mt-6" onClick={handleNextStep}>
              {currentStep < verificationSteps.length ? 'Simulate Next Step' : 'Proceed to Sign Up'}
            </Button>
          </CardContent>
        </Card>

        {/* Verification Steps List */}
        <Card className="p-6 h-full shadow-none border-none bg-gray-50 dark:bg-gray-900"> {/* Removed shadow */}
          <CardHeader>
            <CardTitle className="text-xl font-semibold mb-4">Verification Steps</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {verificationSteps.map((step) => (
              <div
                key={step.id}
                className={cn(
                  "flex items-center p-4 rounded-lg transition-all duration-200",
                  currentStep === step.id
                    ? "bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700" // Removed shadow-sm
                    : "bg-gray-100 dark:bg-gray-800" // Slightly lighter gray for inactive background
                )}
              >
                <div
                  className={cn(
                    "flex items-center justify-center h-10 w-10 rounded-full mr-4",
                    currentStep === step.id
                      ? "bg-blue-600 text-white" // Darker blue for active icon background
                      : "bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-600" // Lighter gray for inactive icon and text
                  )}
                >
                  <step.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className={cn("font-medium", currentStep === step.id ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400")}>{step.name}</h3>
                  <p className={cn("text-sm", currentStep === step.id ? "text-gray-600 dark:text-gray-300" : "text-gray-400 dark:text-gray-600")}>{step.description}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}