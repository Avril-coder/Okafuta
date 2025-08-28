import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Wallet } from 'lucide-react';
import { toast } from 'sonner';
import { GradientButton } from '@/components/landing/GradientButton';
import { BlobBackground } from '@/components/shared/BlobBackground'; // Import BlobBackground

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle user authentication here.
    // For now, we'll just simulate a successful login and redirect to dashboard.
    toast.success("Logged in successfully!");
    navigate('/dashboard');
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 overflow-hidden">
      <BlobBackground /> {/* Add the blob background */}
      <Card className="relative z-10 w-full max-w-md"> {/* Ensure card is above background */}
        <CardHeader className="text-center">
          <div className="flex justify-center mb-2">
            <Wallet className="h-10 w-10 text-blue-600" /> {/* Changed to text-blue-600 */}
          </div>
          <CardTitle className="text-3xl font-bold">Login</CardTitle>
          <CardDescription>Enter your credentials to access your account.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required />
            </div>
            <GradientButton type="submit" className="w-full">
              Login
            </GradientButton>
          </form>
          <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
            Don't have an account?{' '}
            <Link to="/signup" className="font-medium text-blue-600 hover:underline dark:text-blue-500">
              Sign Up
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}