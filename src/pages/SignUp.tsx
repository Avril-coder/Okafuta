import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Wallet, Briefcase, User } from 'lucide-react';
import { toast } from 'sonner';
import { GradientButton } from '@/components/landing/GradientButton';
import { BlobBackground } from '@/components/shared/BlobBackground';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { cn } from '@/lib/utils';

export default function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState(''); // Changed from identifier to email
  const [areaCode, setAreaCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [accountType, setAccountType] = useState<'merchant' | 'customer'>('merchant');

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    console.log("Signing up with:", { email, areaCode, phoneNumber, password, accountType }); // Log email
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
              <Label className="mb-2">Account Type</Label>
              <RadioGroup
                defaultValue="merchant"
                onValueChange={(value: 'merchant' | 'customer') => setAccountType(value)}
                className="flex justify-center gap-8"
              >
                <Label
                  htmlFor="account-type-merchant"
                  className={cn(
                    "flex flex-col items-center justify-center h-28 w-28 rounded-full border-2 border-muted bg-popover hover:bg-accent hover:text-accent-foreground cursor-pointer transition-all duration-200",
                    accountType === 'merchant' && "border-blue-600 ring-2 ring-blue-600 text-blue-600 dark:text-blue-400 shadow-lg shadow-blue-500/50"
                  )}
                >
                  <RadioGroupItem value="merchant" id="account-type-merchant" className="sr-only" />
                  <Briefcase className="mb-2 h-7 w-7" />
                  <span className="text-sm font-medium">Merchant</span>
                </Label>
                <Label
                  htmlFor="account-type-customer"
                  className={cn(
                    "flex flex-col items-center justify-center h-28 w-28 rounded-full border-2 border-muted bg-popover hover:bg-accent hover:text-accent-foreground cursor-pointer transition-all duration-200",
                    accountType === 'customer' && "border-blue-600 ring-2 ring-blue-600 text-blue-600 dark:text-blue-400 shadow-lg shadow-blue-500/50"
                  )}
                >
                  <RadioGroupItem value="customer" id="account-type-customer" className="sr-only" />
                  <User className="mb-2 h-7 w-7" />
                  <span className="text-sm font-medium">Customer</span>
                </Label>
              </RadioGroup>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label> {/* Changed label to Email */}
              <Input
                id="email"
                type="email" // Changed type to email
                placeholder="m@example.com" // Changed placeholder
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="col-span-1">
                <Label htmlFor="areaCode">Area Code</Label>
                <Input
                  id="areaCode"
                  type="text"
                  placeholder="+264"
                  value={areaCode}
                  onChange={(e) => setAreaCode(e.target.value)}
                  required
                />
              </div>
              <div className="col-span-2">
                <Label htmlFor="phoneNumber">Phone Number</Label>
                <Input
                  id="phoneNumber"
                  type="tel"
                  placeholder="e.g., 812345678"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
              </div>
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