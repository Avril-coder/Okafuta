import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ScanLine, Smartphone, UserCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';
import { SharedHeader } from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer'; // Import Footer
import { GradientButton } from '@/components/landing/GradientButton'; // Import GradientButton

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
      navigate('/signup');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-800">
      <SharedHeader />
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <header className="w-full max-w-4xl text-center mb-8">
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
          <Card className="flex flex-col items-center justify-center p-8 text-center h-full shadow-none border-none bg-gray-50 dark:bg-gray-900">
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
              <GradientButton className="mt-6" onClick={handleNextStep}>
                {currentStep < verificationSteps.length ? 'Simulate Next Step' : 'Proceed to Sign Up'}
              </GradientButton>
            </CardContent>
          </Card>

          {/* Verification Steps List */}
          <Card className="p-6 h-full shadow-none border-none bg-gray-50 dark:bg-gray-900">
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
                      ? "bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700"
                      : "bg-gray-100 dark:bg-gray-800"
                  )}
                >
                  <div
                    className={cn(
                      "flex items-center justify-center h-10 w-10 rounded-full mr-4",
                      currentStep === step.id
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-600"
                    )}
                  >
                    <step.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className={cn("font-medium", currentStep === step.id ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400")}>
                      Step {step.id}: {step.name}
                    </h3>
                    <p className={cn("text-sm", currentStep === step.id ? "text-gray-600 dark:text-gray-300" : "text-gray-400 dark:text-gray-600")}>{step.description}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Footer with Privacy Notice */}
        <footer className="w-full max-w-4xl text-center mt-12">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Read more about your personal data processing in Didit's{' '}
            <Link to="/privacy-notice" className="text-blue-600 hover:underline dark:text-blue-400">
              Privacy Notice
            </Link>
          </p>
        </footer>
      </div>
      <Footer /> {/* Add Footer here */}
    </div>
  );
}