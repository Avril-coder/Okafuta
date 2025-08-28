import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Wallet } from 'lucide-react';
import { toast } from 'sonner';
import { GradientButton } from '@/components/landing/GradientButton';
import { BlobBackground } from '@/components/shared/BlobBackground';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'; // Import RadioGroup components

export default function SignUp() {
  const navigate = useNavigate();
  const [identifier, setIdentifier] = useState(''); // This will be for ID/Passport Number
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [accountType, setAccountType] = useState<'merchant' | 'customer'>('merchant'); // New state for account type

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    // In a real application, you would handle user registration here.
    // For now, we'll just simulate a successful sign-up and redirect.
    console.log("Signing up with:", { identifier, password, accountType });
    toast.success("Account created successfully! Please log in.");
    navigate('/login');
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 overflow-hidden">
      <BlobBackground />
      <Card className="relative z-10 w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-2">
            <Wallet className="h-10 w-10 text-blue-600" />
          </div>
          <CardTitle className="text-3xl font-bold">Sign Up</CardTitle>
          <CardDescription>Create your account to get started as a Merchant or Customer.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignUp} className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="account-type">Account Type</Label>
              <RadioGroup
                defaultValue="merchant"
                onValueChange={(value: 'merchant' | 'customer') => setAccountType(value)}
                className="flex space-x-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="merchant" id="account-type-merchant" />
                  <Label htmlFor="account-type-merchant">Merchant</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="customer" id="account-type-customer" />
                  <Label htmlFor="account-type-customer">Customer</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="identifier">ID/Passport Number</Label>
              <Input
                id="identifier"
                type="text"
                placeholder="e.g., 9012345678901"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input
                id="confirm-password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            <GradientButton type="submit" className="w-full mt-6">
              Create Account
            </GradientButton>
          </form>
          <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-blue-600 hover:underline dark:text-blue-500">
              Log In
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}