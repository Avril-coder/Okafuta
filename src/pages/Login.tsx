import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { GradientButton } from '@/components/landing/GradientButton';
import { BlobBackground } from '@/components/shared/BlobBackground';
import { Checkbox } from '@/components/ui/checkbox';
import { SharedHeader } from '@/components/shared/Header';
import { useUser } from '@/context/UserContext';
import { Footer } from '@/components/shared/Footer'; // Import Footer

export default function Login() {
  const navigate = useNavigate();
  const { login } = useUser();
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login and set user data in context
    login({ areaCode: '+264' }); // Demo with Namibia area code
    toast.success("Logged in successfully!");
    navigate('/dashboard');
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
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remember-me"
                    checked={rememberMe}
                    onCheckedChange={(checked) => setRememberMe(!!checked)}
                  />
                  <Label htmlFor="remember-me" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Remember me
                  </Label>
                </div>
                <Link to="/forgot-password" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                  Forgot Password?
                </Link>
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
      <Footer /> {/* Add Footer here */}
    </div>
  );
}