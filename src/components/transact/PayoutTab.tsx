import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const eWalletOptions = ['easywallet', 'bluewallet', 'mobipay', 'ewallet'];
const bankOptions = ['bank'];

export const PayoutTab: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState<string>('');
  const [amount, setAmount] = useState<string>('');

  const handleContinue = () => {
    // Handle the continue action, e.g., validation and navigation
    console.log({
      selectedMethod,
      amount,
    });
    // In a real app, you would navigate to the next step or show a confirmation
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Choose a payout method</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="mb-4 text-lg font-medium text-gray-900 dark:text-white">
            Payout Method
          </h3>
          <div className="space-y-4">
            {/* E-Wallet Options */}
            <Card className="p-4">
              <RadioGroup value={selectedMethod} onValueChange={setSelectedMethod}>
                <div className="grid grid-cols-2 gap-4">
                  {eWalletOptions.map((wallet) => (
                    <div key={wallet} className="flex items-center space-x-2">
                      <RadioGroupItem value={wallet} id={wallet} />
                      <Label htmlFor={wallet} className="capitalize font-normal">
                        {wallet}
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </Card>

            {/* Bank Option */}
            <Card className="p-4">
              <RadioGroup value={selectedMethod} onValueChange={setSelectedMethod}>
                {bankOptions.map((bank) => (
                  <div key={bank} className="flex items-center space-x-2">
                    <RadioGroupItem value={bank} id={bank} />
                    <Label htmlFor={bank} className="capitalize font-normal">
                      {bank}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </Card>
          </div>
        </div>

        {/* Amount Field */}
        <div className="space-y-2">
          <Label htmlFor="amount" className="text-base">Amount</Label>
          <Input
            id="amount"
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="max-w-xs"
          />
        </div>

        {/* Continue Button */}
        <div className="pt-4">
          <Button onClick={handleContinue} className="w-full sm:w-auto">
            Continue
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};