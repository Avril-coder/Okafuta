import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { toast } from 'sonner';
import { GradientButton } from '@/components/landing/GradientButton'; // Import GradientButton

interface KycFormProps {
  onKycSubmit: (data: any) => void; // In a real app, this would send data to backend
  currentStatus: 'not_submitted' | 'pending' | 'verified' | 'rejected';
}

export const KycForm: React.FC<KycFormProps> = ({ onKycSubmit, currentStatus }) => {
  const [fullName, setFullName] = useState('');
  const [dob, setDob] = useState<Date | undefined>(undefined);
  const [address, setAddress] = useState('');
  const [businessRegNo, setBusinessRegNo] = useState('');
  const [idCard, setIdCard] = useState<File | null>(null);
  const [passport, setPassport] = useState<File | null>(null);
  const [utilityBill, setUtilityBill] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !dob || !address || !businessRegNo || (!idCard && !passport) || !utilityBill) {
      toast.error("Please fill all required fields and upload at least one ID document and a utility bill.");
      return;
    }

    const formData = {
      fullName,
      dob: dob ? format(dob, 'yyyy-MM-dd') : '',
      address,
      businessRegNo,
      idCard: idCard ? idCard.name : null,
      passport: passport ? passport.name : null,
      utilityBill: utilityBill ? utilityBill.name : null,
    };
    onKycSubmit(formData);
    toast.success("KYC documents submitted successfully! Please wait for verification.");
  };

  const isFormDisabled = currentStatus === 'pending' || currentStatus === 'verified';

  return (
    <Card className="border-blue-200 dark:border-blue-700 shadow-sm hover:shadow-md hover:shadow-blue-500/20 transition-all duration-200">
      <CardHeader>
        <CardTitle>KYC Verification</CardTitle>
        <CardDescription>
          {currentStatus === 'not_submitted' && "Please provide your details and upload required documents to verify your identity."}
          {currentStatus === 'pending' && "Your KYC documents are under review. We will notify you once the verification is complete."}
          {currentStatus === 'verified' && "Your KYC is successfully verified! You now have full access to all features."}
          {currentStatus === 'rejected' && "Your KYC verification was rejected. Please review the requirements and resubmit your documents."}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              placeholder="John Doe"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              disabled={isFormDisabled}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="dob">Date of Birth</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal rounded-full", // Added rounded-full
                    !dob && "text-muted-foreground"
                  )}
                  disabled={isFormDisabled}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {dob ? format(dob, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={dob}
                  onSelect={setDob}
                  initialFocus
                  disabled={isFormDisabled}
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="address">Residential Address</Label>
            <Input
              id="address"
              placeholder="123 Main St, City, Country"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              disabled={isFormDisabled}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="businessRegNo">Business Registration Number</Label>
            <Input
              id="businessRegNo"
              placeholder="e.g., 123456789"
              value={businessRegNo}
              onChange={(e) => setBusinessRegNo(e.target.value)}
              disabled={isFormDisabled}
              required
            />
          </div>

          <div className="space-y-4 pt-4 border-t dark:border-gray-700">
            <h3 className="text-lg font-semibold">Upload Documents</h3>
            <p className="text-sm text-muted-foreground">
              Please upload clear scans or photos of your identification documents and a utility bill.
            </p>
            <div className="grid gap-2">
              <Label htmlFor="idCard">ID Card (Front & Back)</Label>
              <Input
                id="idCard"
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={(e) => setIdCard(e.target.files ? e.target.files[0] : null)}
                disabled={isFormDisabled}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="passport">Passport (Optional, if no ID Card)</Label>
              <Input
                id="passport"
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={(e) => setPassport(e.target.files ? e.target.files[0] : null)}
                disabled={isFormDisabled}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="utilityBill">Utility Bill (Proof of Address)</Label>
              <Input
                id="utilityBill"
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={(e) => setUtilityBill(e.target.files ? e.target.files[0] : null)}
                disabled={isFormDisabled}
                required
              />
            </div>
          </div>

          <GradientButton type="submit" className="w-full" disabled={isFormDisabled}>
            {currentStatus === 'pending' ? 'Submitted (Under Review)' : currentStatus === 'verified' ? 'Verified' : 'Submit for Verification'}
          </GradientButton>
        </form>
      </CardContent>
    </Card>
  );
};