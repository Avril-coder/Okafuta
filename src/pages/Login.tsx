import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useUser } from '../context/UserContext';
import { toast } from 'react-hot-toast'; // Add this line

const API_BASE_URL = 'https://okafuta.vumbukatt.com/api';

export default function Login() {
  const navigate = useNavigate();
  const { login } = useUser();
  const [rememberMe, setRememberMe] = useState(false);
  const [dial_country_code, setDialCountryCode] = useState('+264');
  const [phone, setPhone] = useState('');
  const [pin, setPin] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [ip_address, setIpAddress] = useState('');

  // Get user's IP address
  useEffect(() => {
    const fetchIpAddress = async () => {
      try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        setIpAddress(data.ip);
      } catch (error) {
        console.error('Could not fetch IP address:', error);
        setIpAddress('unknown');
      }
    };
    fetchIpAddress();
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!dial_country_code || !phone || !pin) {
      toast.error("Please enter your phone number and PIN");
      return;
    }

    toast.success("Logged in successfully!");

    if (!/^\d{5}$/.test(pin)) {
      toast.error("PIN must be 5 digits");
      return;
    }

    
    const cleanedPhone = phone.replace(/\D/g, '');
    if (cleanedPhone.length < 9) {
      toast.error("Please enter a valid phone number");
      return;
    }

    setIsLoading(true);

    try {
      const loginPayload = { dial_country_code, phone: cleanedPhone, pin, ip_address };

  
      
      // Should be:
      const response = await fetch(`${API_BASE_URL}/customer/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginPayload),
      });

      const data = await response.json();

      if (!response.ok || (!data.success && data.status !== 'success')) {
        throw new Error(data.message || 'Login failed');
      }

      const userToken = data.data?.token || data.token;
      const userData = data.data?.user || data.user;

      if (!userToken || !userData) {
        throw new Error('Invalid server response');
      }

      // Store authentication data
      if (rememberMe) {
        localStorage.setItem('userToken', userToken);
        localStorage.setItem('userData', JSON.stringify(userData));
      } else {
        sessionStorage.setItem('userToken', userToken);
        sessionStorage.setItem('userData', JSON.stringify(userData));
      }

      login(userData);
      toast.success("Login successful!");

      // Navigate after state update
      setTimeout(() => {
        navigate('/dashboard', { replace: true });
      }, 500);
      
        
    
 
        
  
    } catch (error) {
      console.error('Login error:', error);
      toast.error("An error occurred during login. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPin = () => {
    if (!phone) {
      toast.error("Please enter your phone number first");
      return;
    }

    navigate('/forgot-pin', {
      state: {
        phone: phone.replace(/\D/g, ''),
        dial_country_code
      }
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-800">
      <SharedHeader />
      <div className="flex-1 flex items-center justify-center px-4 overflow-hidden">
        <BlobBackground />
        <Card className="relative z-10 w-full max-w-md border-blue-200 dark:border-blue-700 shadow-sm hover:shadow-md hover:shadow-blue-500/20 transition-all duration-200">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-2">
              <img src="/Okafuta logo.png" alt="Okafuta Logo" className="h-14 w-auto" />
            </div>
            <CardDescription>Enter your phone number and PIN to access your account</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="grid grid-cols-4 gap-2">
                <div className="col-span-1">
                  <Label htmlFor="dial_country_code">Country Code</Label>
                  <Select value={dial_country_code} onValueChange={setDialCountryCode} required>
                    <SelectTrigger id="dial_country_code" name="dial_country_code">
                      <SelectValue placeholder="Code" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="+264">+264 (Namibia)</SelectItem>
                      <SelectItem value="+27">+27 (South Africa)</SelectItem>
                      <SelectItem value="+1">+1 (USA/Canada)</SelectItem>
                      <SelectItem value="+44">+44 (UK)</SelectItem>
                      <SelectItem value="+234">+234 (Nigeria)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="col-span-3">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="e.g., 812345678"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    disabled={isLoading}
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="pin">PIN</Label>
                <Input
                  id="pin"
                  type="password"
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  required
                  disabled={isLoading}
                  placeholder="Enter your 5-digit PIN"
                  maxLength={5}
                  pattern="\d{5}"
                  title="PIN must be 5 digits"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remember-me"
                    checked={rememberMe}
                    onCheckedChange={(checked) => setRememberMe(!!checked)}
                    disabled={isLoading}
                  />
                  <Label htmlFor="remember-me" className="text-sm font-medium">
                    Remember me
                  </Label>
                </div>
                <button
                  type="button"
                  onClick={handleForgotPin}
                  className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 disabled:opacity-50"
                  disabled={isLoading}
                >
                  Forgot PIN?
                </button>
              </div>

              <GradientButton type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Logging in..." : "Login"}
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
 </div>
);
}