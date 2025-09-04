import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { BlobBackground } from '@/components/shared/BlobBackground';
import { GradientButton } from '@/components/landing/GradientButton';
import { SharedHeader } from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer'; // Import Footer

export default function ForgotPassword() {
  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Password reset link sent to your email!");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-800">
      <SharedHeader />
      <div className="flex-1 flex items-center justify-center px-4 overflow-hidden">
        <BlobBackground />
        <Card className="relative z-10 w-full max-w-md">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-2">
              <img src="/Okafuta logo.png" alt="Okafuta Logo" className="h-14 w-auto" />
            </div>
            <CardTitle className="text-3xl font-bold">Forgot Password</CardTitle>
            <CardDescription>Enter your email to receive a password reset link.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleResetPassword} className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" required />
              </div>
              <GradientButton type="submit" className="w-full">
                Send Reset Link
              </GradientButton>
            </form>
            <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
              Remember your password?{' '}
              <Link to="/login" className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                Log In
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
      <Footer /> {/* Add Footer here */}
    </div>
  );
}