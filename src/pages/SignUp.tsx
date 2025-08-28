import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Wallet } from 'lucide-react';
import { toast } from 'sonner';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp'; // Import InputOTP components

export default function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [cellphoneNumber, setCellphoneNumber] = useState('');
  const [verificationMethod, setVerificationMethod] = useState<'email' | 'phone'>('email');
  const [otp, setOtp] = useState('');
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const handleSendCode = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() && verificationMethod === 'email') {
      toast.error("Please enter your email to send the code.");
      return;
    }
    if (!cellphoneNumber.trim() && verificationMethod === 'phone') {
      toast.error("Please enter your cellphone number to send the code.");
      return;
    }

    // Simulate sending code
    setIsCodeSent(true);
    setIsVerified(false); // Reset verification status
    toast.info(`Verification code sent to your ${verificationMethod}.`);
    // In a real app, you'd make an API call here to send the code
  };

  const handleVerifyCode = () => {
    // Simulate code verification
    if (otp === '123456') { // Hardcoded for demonstration
      setIsVerified(true);
      toast.success("Code verified successfully!");
    } else {
      toast.error("Invalid verification code. Please try again.");
      setIsVerified(false);
    }
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }
    if (!isVerified) {
      toast.error("Please verify your account with the code.");
      return;
    }

    // In a real application, you would handle user registration here.
    // For now, we'll just simulate a successful sign-up and redirect.
    toast.success("Account created successfully! Please log in.");
    navigate('/login');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-2">
            <Wallet className="h-10 w-10 text-amber-600" />
          </div>
          <CardTitle className="text-3xl font-bold">Sign Up</CardTitle>
          <CardDescription>Create your account to get started.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignUp} className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="cellphoneNumber">Cellphone Number</Label>
              <Input
                id="cellphoneNumber"
                type="tel"
                placeholder="+1234567890"
                value={cellphoneNumber}
                onChange={(e) => setCellphoneNumber(e.target.value)}
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

            <div className="space-y-4 border-t pt-4 dark:border-gray-700">
              <h3 className="text-lg font-semibold">Account Verification</h3>
              <div className="grid gap-2">
                <Label htmlFor="verification-method">Send code via</Label>
                <Select value={verificationMethod} onValueChange={(value: 'email' | 'phone') => setVerificationMethod(value)}>
                  <SelectTrigger id="verification-method">
                    <SelectValue placeholder="Select method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="email">Email</SelectItem>
                    <SelectItem value="phone">Phone Number</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button onClick={handleSendCode} className="w-full" disabled={isCodeSent}>
                {isCodeSent ? `Code Sent to ${verificationMethod === 'email' ? email : cellphoneNumber}` : 'Send Verification Code'}
              </Button>

              {isCodeSent && (
                <div className="grid gap-2 mt-4">
                  <Label htmlFor="otp-code">Enter Verification Code</Label>
                  <InputOTP maxLength={6} value={otp} onChange={(value) => setOtp(value)}>
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                  <Button type="button" onClick={handleVerifyCode} className="w-full mt-2" disabled={isVerified || otp.length !== 6}>
                    {isVerified ? 'Code Verified' : 'Verify Code'}
                  </Button>
                </div>
              )}
            </div>

            <Button type="submit" className="w-full mt-6" disabled={!isVerified}>
              Create Account
            </Button>
          </form>
          <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-amber-600 hover:underline dark:text-amber-500">
              Log In
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}