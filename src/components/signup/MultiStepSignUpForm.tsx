import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Briefcase, User, ArrowLeft } from 'lucide-react';
import { toast } from 'sonner';
import { GradientButton } from '@/components/landing/GradientButton';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';

interface SignUpFormData {
  firstName: string;
  lastName: string;
  identityNumber: string;
  email: string;
  areaCode: string;
  phoneNumber: string;
  gender: string;
  maritalStatus: string;
  marriageCertificate: File | null;
  divorceDocument: File | null;
  deathCertificate: File | null;
  employmentStatus: string;
  studentType: 'local' | 'foreign' | '';
  proofOfRegistration: File | null;
  studyPermit: File | null;
  studentPhysicalAddress: string;
  studentProofOfAddressFile: File | null;
  companyNameEmployed: string;
  companyAddressEmployed: string;
  salary: string;
  payslip: File | null;
  placeOfResidenceEmployed: string;
  employedProofOfResidentialAddressFile: File | null;
  businessCompanyName: string;
  businessRegistrationNumber: string;
  businessNatureOfBusiness: string;
  businessPhysicalAddress: string;
  businessPlaceOfBusinessFile: File | null;
  businessResidentialAddress: string;
  businessProofOfResidentialAddressFile: File | null;
  accountType: 'merchant' | 'customer';
  password: string;
  confirmPassword: string;
}

const initialFormData: SignUpFormData = {
  firstName: '',
  lastName: '',
  identityNumber: '',
  email: '',
  areaCode: '+264',
  phoneNumber: '',
  gender: '',
  maritalStatus: '',
  marriageCertificate: null,
  divorceDocument: null,
  deathCertificate: null,
  employmentStatus: '',
  studentType: '',
  proofOfRegistration: null,
  studyPermit: null,
  studentPhysicalAddress: '',
  studentProofOfAddressFile: null,
  companyNameEmployed: '',
  companyAddressEmployed: '',
  salary: '',
  payslip: null,
  placeOfResidenceEmployed: '',
  employedProofOfResidentialAddressFile: null,
  businessCompanyName: '',
  businessRegistrationNumber: '',
  businessNatureOfBusiness: '',
  businessPhysicalAddress: '',
  businessPlaceOfBusinessFile: null,
  businessResidentialAddress: '',
  businessProofOfResidentialAddressFile: null,
  accountType: 'merchant',
  password: '',
  confirmPassword: '',
};

export const MultiStepSignUpForm: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<SignUpFormData>(initialFormData);
  const [isAutofilled, setIsAutofilled] = useState(false);

  const updateFormData = (fields: Partial<SignUpFormData>) => {
    setFormData((prev) => ({ ...prev, ...fields }));
  };

  // Effect to autofill user data based on a specific ID number
  useEffect(() => {
    const mockUserData = {
      id: '9501151234567',
      firstName: 'Maria',
      lastName: 'Iipumbu',
      gender: 'female',
    };

    if (formData.identityNumber === mockUserData.id) {
      updateFormData({
        firstName: mockUserData.firstName,
        lastName: mockUserData.lastName,
        gender: mockUserData.gender,
      });
      setIsAutofilled(true);
      toast.info("User data autofilled based on ID number.");
    } else {
      if (isAutofilled) {
        updateFormData({ firstName: '', lastName: '', gender: '' });
      }
      setIsAutofilled(false);
    }
  }, [formData.identityNumber]);

  // Effect to update account type based on employment status
  useEffect(() => {
    if (formData.employmentStatus === 'Business' || formData.employmentStatus === 'Self-Employed') {
      updateFormData({ accountType: 'merchant' });
    } else if (formData.employmentStatus === 'Student' || formData.employmentStatus === 'Employed') {
      updateFormData({ accountType: 'customer' });
    }
  }, [formData.employmentStatus]);

  // Effect to clear student-specific fields if employment status changes from Student
  useEffect(() => {
    if (formData.employmentStatus !== 'Student') {
      updateFormData({
        studentType: '',
        proofOfRegistration: null,
        studyPermit: null,
        studentPhysicalAddress: '',
        studentProofOfAddressFile: null,
      });
    }
  }, [formData.employmentStatus]);

  // Effect to clear employed-specific fields if employment status changes from Employed
  useEffect(() => {
    if (formData.employmentStatus !== 'Employed') {
      updateFormData({
        companyNameEmployed: '',
        companyAddressEmployed: '',
        salary: '',
        payslip: null,
        placeOfResidenceEmployed: '',
        employedProofOfResidentialAddressFile: null,
      });
    }
  }, [formData.employmentStatus]);

  // Effect to clear self-employed/business-specific fields if employment status changes
  useEffect(() => {
    if (formData.employmentStatus !== 'Self-Employed' && formData.employmentStatus !== 'Business') {
      updateFormData({
        businessCompanyName: '',
        businessRegistrationNumber: '',
        businessNatureOfBusiness: '',
        businessPhysicalAddress: '',
        businessPlaceOfBusinessFile: null,
        businessResidentialAddress: '',
        businessProofOfResidentialAddressFile: null,
      });
    }
  }, [formData.employmentStatus]);

  // Simulate student type detection based on identity number
  useEffect(() => {
    if (formData.employmentStatus === 'Student' && formData.identityNumber) {
      if (formData.identityNumber.toUpperCase().includes('FOREIGN')) {
        updateFormData({ studentType: 'foreign' });
      } else {
        updateFormData({ studentType: 'local' });
      }
    } else if (formData.employmentStatus !== 'Student') {
      updateFormData({ studentType: '' });
    }
  }, [formData.identityNumber, formData.employmentStatus]);

  const handleNext = () => {
    // Basic validation for current step before proceeding
    switch (currentStep) {
      case 1:
        if (!formData.firstName || !formData.lastName || !formData.identityNumber || !formData.email || !formData.phoneNumber || !formData.gender || !formData.maritalStatus) {
          toast.error("Please fill in all required personal details.");
          return;
        }
        break;
      case 2:
        if (formData.maritalStatus === 'married' && !formData.marriageCertificate) {
          toast.error("Please upload your marriage certificate.");
          return;
        }
        if (formData.maritalStatus === 'divorced' && !formData.divorceDocument) {
          toast.error("Please upload your divorce decree or supporting document.");
          return;
        }
        if (formData.maritalStatus === 'widowed' && !formData.deathCertificate) {
          toast.error("Please upload the death certificate or supporting document.");
          return;
        }
        break;
      case 3:
        if (!formData.employmentStatus) {
          toast.error("Please select your employment status.");
          return;
        }
        break;
      case 4:
        if (formData.employmentStatus === 'Student') {
          if (!formData.proofOfRegistration) {
            toast.error("Please upload proof of registration.");
            return;
          }
          if (formData.studentType === 'foreign' && !formData.studyPermit) {
            toast.error("Please upload your study permit.");
            return;
          }
          if (!formData.studentPhysicalAddress) {
            toast.error("Please enter your physical address.");
            return;
          }
          if (!formData.studentProofOfAddressFile) {
            toast.error("Please upload a water bill or lease agreement for proof of address.");
            return;
          }
        } else if (formData.employmentStatus === 'Employed') {
          if (!formData.companyNameEmployed || !formData.companyAddressEmployed || !formData.salary || !formData.payslip || !formData.placeOfResidenceEmployed) {
            toast.error("Please fill all required fields for employment status and upload payslip.");
            return;
          }
          if (!formData.employedProofOfResidentialAddressFile) {
            toast.error("Please upload a water bill or lease agreement for proof of residential address.");
            return;
          }
        } else if (formData.employmentStatus === 'Self-Employed' || formData.employmentStatus === 'Business') {
          if (!formData.businessCompanyName || !formData.businessRegistrationNumber || !formData.businessNatureOfBusiness || !formData.businessPhysicalAddress || !formData.businessPlaceOfBusinessFile) {
            toast.error("Please fill all required fields for business/self-employed status and upload a document for place of business.");
            return;
          }
          if (!formData.businessResidentialAddress) {
            toast.error("Please enter your residential address.");
            return;
          }
          if (!formData.businessProofOfResidentialAddressFile) {
            toast.error("Please upload a water bill or lease agreement for proof of residential address.");
            return;
          }
        }
        break;
    }
    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    console.log("Final Sign Up Data:", formData);
    toast.success("Account created successfully! Please log in.");
    navigate('/login');
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <CardTitle className="text-3xl font-bold">Personal Details</CardTitle>
            <CardDescription>Tell us a bit about yourself.</CardDescription>
            <div className="grid grid-cols-2 gap-2">
              <div className="grid gap-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  type="text"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={(e) => updateFormData({ firstName: e.target.value })}
                  required
                  disabled={isAutofilled}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  type="text"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={(e) => updateFormData({ lastName: e.target.value })}
                  required
                  disabled={isAutofilled}
                />
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="identityNumber">ID / Passport Number</Label>
              <Input
                id="identityNumber"
                type="text"
                placeholder="e.g., 9012345678901 (type 'FOREIGN' for foreign student demo)"
                value={formData.identityNumber}
                onChange={(e) => updateFormData({ identityNumber: e.target.value })}
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                value={formData.email}
                onChange={(e) => updateFormData({ email: e.target.value })}
                required
              />
            </div>

            <div className="grid grid-cols-3 gap-2">
              <div className="col-span-1">
                <Label htmlFor="areaCode">Area Code</Label>
                <Select value={formData.areaCode} onValueChange={(value) => updateFormData({ areaCode: value })} required>
                  <SelectTrigger id="areaCode">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="+1">+1 (USA/Canada)</SelectItem>
                    <SelectItem value="+44">+44 (UK)</SelectItem>
                    <SelectItem value="+264">+264 (Namibia)</SelectItem>
                    <SelectItem value="+234">+234 (Nigeria)</SelectItem>
                    <SelectItem value="+27">+27 (South Africa)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="col-span-2">
                <Label htmlFor="phoneNumber">Phone Number</Label>
                <Input
                  id="phoneNumber"
                  type="tel"
                  placeholder="e.g., 812345678"
                  value={formData.phoneNumber}
                  onChange={(e) => updateFormData({ phoneNumber: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="grid gap-2">
                <Label htmlFor="gender">Gender</Label>
                <Select value={formData.gender} onValueChange={(value) => updateFormData({ gender: value })} required disabled={isAutofilled}>
                  <SelectTrigger id="gender">
                    <SelectValue placeholder="Select Gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="maritalStatus">Marital Status</Label>
                <Select value={formData.maritalStatus} onValueChange={(value) => updateFormData({ maritalStatus: value })} required>
                  <SelectTrigger id="maritalStatus">
                    <SelectValue placeholder="Select Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="single">Single</SelectItem>
                    <SelectItem value="married">Married</SelectItem>
                    <SelectItem value="divorced">Divorced</SelectItem>
                    <SelectItem value="widowed">Widowed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <CardTitle className="text-3xl font-bold">Marital Status Documents</CardTitle>
            <CardDescription>Please upload relevant documents based on your marital status.</CardDescription>
            {formData.maritalStatus === 'married' && (
              <div className="grid gap-2">
                <Label htmlFor="marriageCertificate">Marriage Certificate</Label>
                <Input
                  id="marriageCertificate"
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(e) => updateFormData({ marriageCertificate: e.target.files ? e.target.files[0] : null })}
                  required
                />
              </div>
            )}
            {formData.maritalStatus === 'divorced' && (
              <div className="grid gap-2">
                <Label htmlFor="divorceDocument">Divorce Decree / Supporting Document</Label>
                <Input
                  id="divorceDocument"
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(e) => updateFormData({ divorceDocument: e.target.files ? e.target.files[0] : null })}
                  required
                />
              </div>
            )}
            {formData.maritalStatus === 'widowed' && (
              <div className="grid gap-2">
                <Label htmlFor="deathCertificate">Death Certificate / Supporting Document</Label>
                <Input
                  id="deathCertificate"
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(e) => updateFormData({ deathCertificate: e.target.files ? e.target.files[0] : null })}
                  required
                />
              </div>
            )}
            {formData.maritalStatus === 'single' && (
              <p className="text-sm text-muted-foreground">No documents required for 'Single' status.</p>
            )}
          </>
        );
      case 3:
        return (
          <>
            <CardTitle className="text-3xl font-bold">Employment Status</CardTitle>
            <CardDescription>Select your current employment status.</CardDescription>
            <div className="grid gap-2">
              <Label htmlFor="employmentStatus">Employment Status</Label>
              <Select value={formData.employmentStatus} onValueChange={(value) => updateFormData({ employmentStatus: value })} required>
                <SelectTrigger id="employmentStatus">
                  <SelectValue placeholder="Select Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Student">Student</SelectItem>
                  <SelectItem value="Employed">Employed</SelectItem>
                  <SelectItem value="Self-Employed">Self-Employed</SelectItem>
                  <SelectItem value="Business">Business</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </>
        );
      case 4:
        return (
          <>
            <CardTitle className="text-3xl font-bold">Employment Details</CardTitle>
            <CardDescription>Provide details based on your employment status.</CardDescription>
            {formData.employmentStatus === 'Student' && (
              <>
                <div className="grid gap-2">
                  <Label htmlFor="proofOfRegistration">Proof of Registration</Label>
                  <Input
                    id="proofOfRegistration"
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) => updateFormData({ proofOfRegistration: e.target.files ? e.target.files[0] : null })}
                    required
                  />
                </div>
                {formData.studentType === 'foreign' && (
                  <div className="grid gap-2">
                    <Label htmlFor="studyPermit">Study Permit</Label>
                    <Input
                      id="studyPermit"
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) => updateFormData({ studyPermit: e.target.files ? e.target.files[0] : null })}
                      required
                    />
                  </div>
                )}
                <div className="grid gap-2">
                  <Label htmlFor="studentPhysicalAddress">Physical Address</Label>
                  <Input
                    id="studentPhysicalAddress"
                    type="text"
                    placeholder="e.g., 123 University Ave, City, Country"
                    value={formData.studentPhysicalAddress}
                    onChange={(e) => updateFormData({ studentPhysicalAddress: e.target.value })}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="studentProofOfAddressFile">Water Bill / Lease Agreement (Proof of Address)</Label>
                  <Input
                    id="studentProofOfAddressFile"
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) => updateFormData({ studentProofOfAddressFile: e.target.files ? e.target.files[0] : null })}
                    required
                  />
                </div>
              </>
            )}

            {formData.employmentStatus === 'Employed' && (
              <>
                <div className="grid gap-2">
                  <Label htmlFor="companyNameEmployed">Company Name</Label>
                  <Input
                    id="companyNameEmployed"
                    type="text"
                    placeholder="e.g., Tech Solutions Inc."
                    value={formData.companyNameEmployed}
                    onChange={(e) => updateFormData({ companyNameEmployed: e.target.value })}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="companyAddressEmployed">Physical Address (Company)</Label>
                  <Input
                    id="companyAddressEmployed"
                    type="text"
                    placeholder="e.g., 456 Business Rd, City, Country"
                    value={formData.companyAddressEmployed}
                    onChange={(e) => updateFormData({ companyAddressEmployed: e.target.value })}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="salary">Salary (Net Pay)</Label>
                  <Input
                    id="salary"
                    type="number"
                    placeholder="e.g., 15000.00"
                    value={formData.salary}
                    onChange={(e) => updateFormData({ salary: e.target.value })}
                    step="0.01"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="payslip">Payslip Attachment</Label>
                  <Input
                    id="payslip"
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) => updateFormData({ payslip: e.target.files ? e.target.files[0] : null })}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="placeOfResidenceEmployed">Place of Residence</Label>
                  <Input
                    id="placeOfResidenceEmployed"
                    type="text"
                    placeholder="e.g., 789 Residential St, City, Country"
                    value={formData.placeOfResidenceEmployed}
                    onChange={(e) => updateFormData({ placeOfResidenceEmployed: e.target.value })}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="employedProofOfResidentialAddressFile">Water Bill / Lease Agreement (Proof of Residential Address)</Label>
                  <Input
                    id="employedProofOfResidentialAddressFile"
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) => updateFormData({ employedProofOfResidentialAddressFile: e.target.files ? e.target.files[0] : null })}
                    required
                  />
                </div>
              </>
            )}

            {(formData.employmentStatus === 'Self-Employed' || formData.employmentStatus === 'Business') && (
              <>
                <div className="grid gap-2">
                  <Label htmlFor="businessCompanyName">Company Name</Label>
                  <Input
                    id="businessCompanyName"
                    type="text"
                    placeholder="e.g., My Freelance Services / ABC Corp"
                    value={formData.businessCompanyName}
                    onChange={(e) => updateFormData({ businessCompanyName: e.target.value })}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="businessRegistrationNumber">Registration Number</Label>
                  <Input
                    id="businessRegistrationNumber"
                    type="text"
                    placeholder="e.g., REG123456789"
                    value={formData.businessRegistrationNumber}
                    onChange={(e) => updateFormData({ businessRegistrationNumber: e.target.value })}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="businessNatureOfBusiness">Nature of Business</Label>
                  <Input
                    id="businessNatureOfBusiness"
                    type="text"
                    placeholder="e.g., IT Consulting, Graphic Design, Retail"
                    value={formData.businessNatureOfBusiness}
                    onChange={(e) => updateFormData({ businessNatureOfBusiness: e.target.value })}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="businessPhysicalAddress">Physical Address (Business)</Label>
                  <Input
                    id="businessPhysicalAddress"
                    type="text"
                    placeholder="e.g., 101 Business Park, City, Country"
                    value={formData.businessPhysicalAddress}
                    onChange={(e) => updateFormData({ businessPhysicalAddress: e.target.value })}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="businessPlaceOfBusinessFile">Place of Business (Document/Proof)</Label>
                  <Input
                    id="businessPlaceOfBusinessFile"
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) => updateFormData({ businessPlaceOfBusinessFile: e.target.files ? e.target.files[0] : null })}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="businessResidentialAddress">Residential Address</Label>
                  <Input
                    id="businessResidentialAddress"
                    type="text"
                    placeholder="e.g., 789 Home St, City, Country"
                    value={formData.businessResidentialAddress}
                    onChange={(e) => updateFormData({ businessResidentialAddress: e.target.value })}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="businessProofOfResidentialAddressFile">Water Bill / Lease Agreement (Proof of Residential Address)</Label>
                  <Input
                    id="businessProofOfResidentialAddressFile"
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) => updateFormData({ businessProofOfResidentialAddressFile: e.target.files ? e.target.files[0] : null })}
                    required
                  />
                </div>
              </>
            )}
          </>
        );
      case 5:
        return (
          <>
            <CardTitle className="text-3xl font-bold">Account & Security</CardTitle>
            <CardDescription>Choose your account type and set your password.</CardDescription>
            <div className="grid gap-2">
              <Label className="mb-2">Account Type</Label>
              <RadioGroup
                value={formData.accountType}
                onValueChange={(value: 'merchant' | 'customer') => updateFormData({ accountType: value })}
                className="flex justify-center gap-8"
              >
                <Label
                  htmlFor="account-type-merchant"
                  className={cn(
                    "flex flex-col items-center justify-center h-28 w-28 rounded-full border-2 border-muted bg-popover hover:bg-accent hover:text-accent-foreground cursor-pointer transition-all duration-200",
                    formData.accountType === 'merchant' && "border-blue-600 ring-2 ring-blue-600 text-blue-600 dark:text-blue-400 shadow-lg shadow-blue-500/50"
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
                    formData.accountType === 'customer' && "border-blue-600 ring-2 ring-blue-600 text-blue-600 dark:text-blue-400 shadow-lg shadow-blue-500/50"
                  )}
                >
                  <RadioGroupItem value="customer" id="account-type-customer" className="sr-only" />
                  <User className="mb-2 h-7 w-7" />
                  <span className="text-sm font-medium">Customer</span>
                </Label>
              </RadioGroup>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={formData.password}
                onChange={(e) => updateFormData({ password: e.target.value })}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input
                id="confirm-password"
                type="password"
                value={formData.confirmPassword}
                onChange={(e) => updateFormData({ confirmPassword: e.target.value })}
                required
              />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Card className="relative z-10 w-full max-w-md">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-2">
          <img src="/Okafuta logo.png" alt="Okafuta Logo" className="h-14 w-auto" />
        </div>
        <CardDescription>Create your account to get started as a Merchant or Customer.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={currentStep === 5 ? handleSubmit : handleNext} className="space-y-4">
          {renderStep()}

          <div className="flex justify-between pt-4">
            {currentStep > 1 && (
              <Button type="button" variant="outline" onClick={handleBack}>
                <ArrowLeft className="mr-2 h-4 w-4" /> Back
              </Button>
            )}
            {currentStep < 5 ? (
              <GradientButton type="submit" className={cn("ml-auto", currentStep === 1 && "w-full")}>
                Next
              </GradientButton>
            ) : (
              <GradientButton type="submit" className="w-full">
                Create Account
              </GradientButton>
            )}
          </div>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-blue-600 hover:underline dark:text-blue-500">
            Log In
          </Link>
        </p>
      </CardContent>
    </Card>
  );
};