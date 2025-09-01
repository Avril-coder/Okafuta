import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { ArrowLeft } from 'lucide-react';

const eWalletOptions = ['easywallet', 'bluewallet', 'mobipay', 'ewallet'];

export const PayoutTab: React.FC = () => {
  // Step management state
  const [step, setStep] = useState(1);
  
  // Step 1 state
  const [selectedMethod, setSelectedMethod] = useState<string>('');
  const [amount, setAmount] = useState<string>('');

  // Step 2 state for E-Wallets
  const [phoneNumber, setPhoneNumber] = useState('');
  const [reference, setReference] = useState('');

  // Step 2 state for Bank
  const [accountName, setAccountName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [swiftCode, setSwiftCode] = useState('');
  const [bankName, setBankName] = useState('');

  const handleContinue = () => {
    if (!selectedMethod) {
      toast.error("Please select a payout method.");
      return;
    }
    if (!amount || parseFloat(amount) <= 0) {
      toast.error("Please enter a valid amount.");
      return;
    }
    setStep(2);
  };

  const handleBack = () => {
    setStep(1);
    // Clear step 2 fields when going back
    setPhoneNumber('');
    setReference('');
    setAccountName('');
    setAccountNumber('');
    setSwiftCode('');
    setBankName('');
  };

  const handleSubmitPayout = (e: React.FormEvent) => {
    e.preventDefault();
    let payoutDetails = {};
    
    if (selectedMethod === 'bank') {
      if (!accountName || !accountNumber || !swiftCode || !bankName) {
        toast.error("Please fill in all bank details.");
        return;
      }
      payoutDetails = { selectedMethod, amount, accountName, accountNumber, swiftCode, bankName };
    } else { // E-wallet
      if (!phoneNumber) {
        toast.error("Please enter a phone number.");
        return;
      }
      payoutDetails = { selectedMethod, amount, phoneNumber, reference };
    }

    console.log("Submitting Payout:", payoutDetails);
    toast.success("Payout submitted successfully!");
    
    // Reset all state and go back to step 1
    setStep(1);
    setSelectedMethod('');
    setAmount('');
    setPhoneNumber('');
    setReference('');
    setAccountName('');
    setAccountNumber('');
    setSwiftCode('');
    setBankName('');
  };

  const renderStepOne = () => (
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
            <Card className="p-4">
              <RadioGroup value={selectedMethod} onValueChange={setSelectedMethod}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="bank" id="bank" />
                  <Label htmlFor="bank" className="capitalize font-normal">
                    Bank
                  </Label>
                </div>
              </RadioGroup>
            </Card>
          </div>
        </div>
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
        <div className="pt-4">
          <Button onClick={handleContinue} className="w-full sm:w-auto">
            Continue
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  const renderStepTwo = () => (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" onClick={handleBack} aria-label="Go back">
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <CardTitle>Enter Payout Details</CardTitle>
            <CardDescription>
              Payout of {amount} via {selectedMethod.charAt(0).toUpperCase() + selectedMethod.slice(1)}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmitPayout} className="space-y-4">
          {selectedMethod === 'bank' ? (
            <>
              <div className="grid gap-2">
                <Label htmlFor="bankName">Bank Name</Label>
                <Input id="bankName" value={bankName} onChange={(e) => setBankName(e.target.value)} placeholder="e.g., First National Bank" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="accountName">Account Name</Label>
                <Input id="accountName" value={accountName} onChange={(e) => setAccountName(e.target.value)} placeholder="e.g., John Doe" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="accountNumber">Account Number</Label>
                <Input id="accountNumber" value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} placeholder="e.g., 1234567890" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="swiftCode">SWIFT Code</Label>
                <Input id="swiftCode" value={swiftCode} onChange={(e) => setSwiftCode(e.target.value)} placeholder="e.g., FIRNNANX" required />
              </div>
            </>
          ) : (
            <>
              <div className="grid gap-2">
                <Label htmlFor="phoneNumber">Phone Number</Label>
                <Input id="phoneNumber" type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="e.g., 0812345678" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="reference">Reference (Optional)</Label>
                <Input id="reference" value={reference} onChange={(e) => setReference(e.target.value)} placeholder="e.g., Invoice #123" />
              </div>
            </>
          )}
          <Button type="submit" className="w-full">Submit Payout</Button>
        </form>
      </CardContent>
    </Card>
  );

  return step === 1 ? renderStepOne() : renderStepTwo();
};