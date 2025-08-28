import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Wallet } from 'lucide-react';
import { toast } from 'sonner';
import { BlobBackground } from '@/components/shared/BlobBackground';
import { GradientButton } from '@/components/landing/GradientButton';

export default function ForgotPassword() {
  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send a password reset email here.
    toast.success("Password reset link sent to your email!");
    // Optionally navigate to a confirmation page or back to login
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 overflow-hidden">
      <BlobBackground />
      <Card className="relative z-10 w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-2">
            <Wallet className="h-10 w-10 text-blue-600" />
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
  );
}