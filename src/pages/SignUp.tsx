import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Briefcase, User } from 'lucide-react';
import { toast } from 'sonner';
import { GradientButton } from '@/components/landing/GradientButton';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { SharedHeader } from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer'; // Import Footer

export default function SignUp() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [identityNumber, setIdentityNumber] = useState('');
  const [email, setEmail] = useState('');
  const [areaCode, setAreaCode] = useState('+264');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('');
  const [employmentStatus, setEmploymentStatus] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [accountType, setAccountType] = useState<'merchant' | 'customer'>('merchant');

  // State to manage autofilled fields
  const [isAutofilled, setIsAutofilled] = useState(false);

  // Conditional fields for Student employment status
  const [studentType, setStudentType] = useState<'local' | 'foreign' | ''>('');
  const [proofOfRegistration, setProofOfRegistration] = useState<File | null>(null);
  const [studyPermit, setStudyPermit] = useState<File | null>(null);
  const [studentPhysicalAddress, setStudentPhysicalAddress] = useState('');
  const [studentProofOfAddressFile, setStudentProofOfAddressFile] = useState<File | null>(null);

  // Conditional fields for Employed employment status
  const [companyNameEmployed, setCompanyNameEmployed] = useState('');
  const [companyAddressEmployed, setCompanyAddressEmployed] = useState('');
  const [salary, setSalary] = useState('');
  const [payslip, setPayslip] = useState<File | null>(null);
  const [placeOfResidenceEmployed, setPlaceOfResidenceEmployed] = useState('');
  const [employedProofOfResidentialAddressFile, setEmployedProofOfResidentialAddressFile] = useState<File | null>(null);

  // Conditional fields for Self-Employed / Business employment status
  const [businessCompanyName, setBusinessCompanyName] = useState('');
  const [businessRegistrationNumber, setBusinessRegistrationNumber] = useState('');
  const [businessNatureOfBusiness, setBusinessNatureOfBusiness] = useState('');
  const [businessPhysicalAddress, setBusinessPhysicalAddress] = useState('');
  const [businessPlaceOfBusinessFile, setBusinessPlaceOfBusinessFile] = useState<File | null>(null);
  const [businessResidentialAddress, setBusinessResidentialAddress] = useState('');
  const [businessProofOfResidentialAddressFile, setBusinessProofOfResidentialAddressFile] = useState<File | null>(null);

  // Conditional fields for Marital Status
  const [marriageCertificate, setMarriageCertificate] = useState<File | null>(null);
  const [divorceDocument, setDivorceDocument] = useState<File | null>(null);
  const [deathCertificate, setDeathCertificate] = useState<File | null>(null);

  // Effect to autofill user data based on a specific ID number
  useEffect(() => {
    const mockUserData = {
      id: '9501151234567',
      firstName: 'Maria',
      lastName: 'Iipumbu',
      gender: 'female',
    };

    if (identityNumber === mockUserData.id) {
      setFirstName(mockUserData.firstName);
      setLastName(mockUserData.lastName);
      setGender(mockUserData.gender);
      setIsAutofilled(true);
      toast.info("User data autofilled based on ID number.");
    } else {
      // If the ID was autofilled and is now changed, clear the fields
      if (isAutofilled) {
        setFirstName('');
        setLastName('');
        setGender('');
      }
      setIsAutofilled(false);
    }
  }, [identityNumber]);

  // Effect to update account type based on employment status
  useEffect(() => {
    if (employmentStatus === 'Business' || employmentStatus === 'Self-Employed') {
      setAccountType('merchant');
    } else if (employmentStatus === 'Student' || employmentStatus === 'Employed') {
      setAccountType('customer');
    }
  }, [employmentStatus]);

  // Effect to clear student-specific fields if employment status changes from Student
  useEffect(() => {
    if (employmentStatus !== 'Student') {
      setStudentType('');
      setProofOfRegistration(null);
      setStudyPermit(null);
      setStudentPhysicalAddress('');
      setStudentProofOfAddressFile(null);
    }
  }, [employmentStatus]);

  // Effect to clear employed-specific fields if employment status changes from Employed
  useEffect(() => {
    if (employmentStatus !== 'Employed') {
      setCompanyNameEmployed('');
      setCompanyAddressEmployed('');
      setSalary('');
      setPayslip(null);
      setPlaceOfResidenceEmployed('');
      setEmployedProofOfResidentialAddressFile(null);
    }
  }, [employmentStatus]);

  // Effect to clear self-employed/business-specific fields if employment status changes
  useEffect(() => {
    if (employmentStatus !== 'Self-Employed' && employmentStatus !== 'Business') {
      setBusinessCompanyName('');
      setBusinessRegistrationNumber('');
      setBusinessNatureOfBusiness('');
      setBusinessPhysicalAddress('');
      setBusinessPlaceOfBusinessFile(null);
      setBusinessResidentialAddress('');
      setBusinessProofOfResidentialAddressFile(null);
    }
  }, [employmentStatus]);

  // Simulate student type detection based on identity number
  useEffect(() => {
    if (employmentStatus === 'Student' && identityNumber) {
      // Simple mock detection: if ID contains "FOREIGN", assume foreign student
      if (identityNumber.toUpperCase().includes('FOREIGN')) {
        setStudentType('foreign');
      } else {
        setStudentType('local');
      }
    } else if (employmentStatus !== 'Student') {
      setStudentType(''); // Reset if not a student
    }
  }, [identityNumber, employmentStatus]);

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    // Basic validation for conditional employment fields
    if (employmentStatus === 'Student') {
      if (!proofOfRegistration) {
        toast.error("Please upload proof of registration.");
        return;
      }
      if (studentType === 'foreign' && !studyPermit) {
        toast.error("Please upload your study permit.");
        return;
      }
      if (!studentPhysicalAddress) {
        toast.error("Please enter your physical address.");
        return;
      }
      if (!studentProofOfAddressFile) {
        toast.error("Please upload a water bill or lease agreement for proof of address.");
        return;
      }
    }
    if (employmentStatus === 'Employed') {
      if (!companyNameEmployed || !companyAddressEmployed || !salary || !payslip || !placeOfResidenceEmployed) {
        toast.error("Please fill all required fields for employment status and upload payslip.");
        return;
      }
      if (!employedProofOfResidentialAddressFile) {
        toast.error("Please upload a water bill or lease agreement for proof of residential address.");
        return;
      }
    }
    // Validation for Self-Employed / Business fields
    if (employmentStatus === 'Self-Employed' || employmentStatus === 'Business') {
      if (!businessCompanyName || !businessRegistrationNumber || !businessNatureOfBusiness || !businessPhysicalAddress || !businessPlaceOfBusinessFile) {
        toast.error("Please fill all required fields for business/self-employed status and upload a document for place of business.");
        return;
      }
      if (!businessResidentialAddress) {
        toast.error("Please enter your residential address.");
        return;
      }
      if (!businessProofOfResidentialAddressFile) {
        toast.error("Please upload a water bill or lease agreement for proof of residential address.");
        return;
      }
    }

    // Basic validation for conditional marital status fields
    if (maritalStatus === 'married' && !marriageCertificate) {
      toast.error("Please upload your marriage certificate.");
      return;
    }
    if (maritalStatus === 'divorced' && !divorceDocument) {
      toast.error("Please upload your divorce decree or supporting document.");
      return;
    }
    if (maritalStatus === 'widowed' && !deathCertificate) {
      toast.error("Please upload the death certificate or supporting document.");
      return;
    }

    console.log("Signing up with:", {
      firstName,
      lastName,
      identityNumber,
      email,
      areaCode,
      phoneNumber,
      gender,
      employmentStatus,
      maritalStatus,
      password,
      accountType,
      // Conditional employment fields
      ...(employmentStatus === 'Student' && {
        studentType,
        proofOfRegistration: proofOfRegistration?.name,
        ...(studentType === 'foreign' && { studyPermit: studyPermit?.name }),
        physicalAddress: studentPhysicalAddress,
        proofOfAddressFile: studentProofOfAddressFile?.name,
      }),
      ...(employmentStatus === 'Employed' && {
        companyName: companyNameEmployed,
        companyAddress: companyAddressEmployed,
        salary,
        payslip: payslip?.name,
        placeOfResidence: placeOfResidenceEmployed,
        proofOfResidentialAddressFile: employedProofOfResidentialAddressFile?.name,
      }),
      // Self-Employed / Business fields
      ...( (employmentStatus === 'Self-Employed' || employmentStatus === 'Business') && {
        companyName: businessCompanyName,
        registrationNumber: businessRegistrationNumber,
        natureOfBusiness: businessNatureOfBusiness,
        businessPhysicalAddress: businessPhysicalAddress,
        businessPlaceOfBusinessFile: businessPlaceOfBusinessFile?.name,
        residentialAddress: businessResidentialAddress,
        proofOfResidentialAddressFile: businessProofOfResidentialAddressFile?.name,
      }),
      // Conditional marital status fields
      ...(maritalStatus === 'married' && { marriageCertificate: marriageCertificate?.name }),
      ...(maritalStatus === 'divorced' && { divorceDocument: divorceDocument?.name }),
      ...(maritalStatus === 'widowed' && { deathCertificate: deathCertificate?.name }),
    });
    toast.success("Account created successfully! Please log in.");
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <SharedHeader />
      <div className="flex-1 flex items-center justify-center px-4 overflow-hidden">
        {/* BlobBackground removed */}
        <Card className="relative z-10 w-full max-w-md">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-2">
              <img src="/Okafuta logo.png" alt="Okafuta Logo" className="h-14 w-auto" />
            </div>
            <CardDescription>Create your account to get started as a Merchant or Customer.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSignUp} className="space-y-4">
              <div className="grid grid-cols-2 gap-2">
                <div className="grid gap-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    type="text"
                    placeholder="John"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
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
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
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
                  value={identityNumber}
                  onChange={(e) => setIdentityNumber(e.target.value)}
                  required
                />
              </div>

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

              <div className="grid grid-cols-3 gap-2">
                <div className="col-span-1">
                  <Label htmlFor="areaCode">Area Code</Label>
                  <Select value={areaCode} onValueChange={setAreaCode} required>
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
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="grid gap-2">
                  <Label htmlFor="gender">Gender</Label>
                  <Select value={gender} onValueChange={setGender} required disabled={isAutofilled}>
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
                  <Select value={maritalStatus} onValueChange={setMaritalStatus} required>
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

              {/* Conditional fields based on Marital Status */}
              {maritalStatus === 'married' && (
                <div className="grid gap-2">
                  <Label htmlFor="marriageCertificate">Marriage Certificate</Label>
                  <Input
                    id="marriageCertificate"
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) => setMarriageCertificate(e.target.files ? e.target.files[0] : null)}
                    required
                  />
                </div>
              )}
              {maritalStatus === 'divorced' && (
                <div className="grid gap-2">
                  <Label htmlFor="divorceDocument">Divorce Decree / Supporting Document</Label>
                  <Input
                    id="divorceDocument"
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) => setDivorceDocument(e.target.files ? e.target.files[0] : null)}
                    required
                  />
                </div>
              )}
              {maritalStatus === 'widowed' && (
                <div className="grid gap-2">
                  <Label htmlFor="deathCertificate">Death Certificate / Supporting Document</Label>
                  <Input
                    id="deathCertificate"
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) => setDeathCertificate(e.target.files ? e.target.files[0] : null)}
                    required
                  />
                </div>
              )}

              <div className="grid gap-2">
                <Label htmlFor="employmentStatus">Employment Status</Label>
                <Select value={employmentStatus} onValueChange={setEmploymentStatus} required>
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

              {/* Conditional fields based on Employment Status */}
              {employmentStatus === 'Student' && (
                <>
                  <div className="grid gap-2">
                    <Label htmlFor="proofOfRegistration">Proof of Registration</Label>
                    <Input
                      id="proofOfRegistration"
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) => setProofOfRegistration(e.target.files ? e.target.files[0] : null)}
                      required
                    />
                  </div>
                  {studentType === 'foreign' && (
                    <div className="grid gap-2">
                      <Label htmlFor="studyPermit">Study Permit</Label>
                      <Input
                        id="studyPermit"
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={(e) => setStudyPermit(e.target.files ? e.target.files[0] : null)}
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
                      value={studentPhysicalAddress}
                      onChange={(e) => setStudentPhysicalAddress(e.target.value)}
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="studentProofOfAddressFile">Water Bill / Lease Agreement (Proof of Address)</Label>
                    <Input
                      id="studentProofOfAddressFile"
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) => setStudentProofOfAddressFile(e.target.files ? e.target.files[0] : null)}
                      required
                    />
                  </div>
                </>
              )}

              {employmentStatus === 'Employed' && (
                <>
                  <div className="grid gap-2">
                    <Label htmlFor="companyNameEmployed">Company Name</Label>
                    <Input
                      id="companyNameEmployed"
                      type="text"
                      placeholder="e.g., Tech Solutions Inc."
                      value={companyNameEmployed}
                      onChange={(e) => setCompanyNameEmployed(e.target.value)}
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="companyAddressEmployed">Physical Address (Company)</Label>
                    <Input
                      id="companyAddressEmployed"
                      type="text"
                      placeholder="e.g., 456 Business Rd, City, Country"
                      value={companyAddressEmployed}
                      onChange={(e) => setCompanyAddressEmployed(e.target.value)}
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="salary">Salary (Net Pay)</Label>
                    <Input
                      id="salary"
                      type="number"
                      placeholder="e.g., 15000.00"
                      value={salary}
                      onChange={(e) => setSalary(e.target.value)}
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
                      onChange={(e) => setPayslip(e.target.files ? e.target.files[0] : null)}
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="placeOfResidenceEmployed">Place of Residence</Label>
                    <Input
                      id="placeOfResidenceEmployed"
                      type="text"
                      placeholder="e.g., 789 Residential St, City, Country"
                      value={placeOfResidenceEmployed}
                      onChange={(e) => setPlaceOfResidenceEmployed(e.target.value)}
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="employedProofOfResidentialAddressFile">Water Bill / Lease Agreement (Proof of Residential Address)</Label>
                    <Input
                      id="employedProofOfResidentialAddressFile"
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) => setEmployedProofOfResidentialAddressFile(e.target.files ? e.target.files[0] : null)}
                      required
                    />
                  </div>
                </>
              )}

              {/* Conditional fields for Self-Employed / Business status */}
              {(employmentStatus === 'Self-Employed' || employmentStatus === 'Business') && (
                <>
                  <div className="grid gap-2">
                    <Label htmlFor="businessCompanyName">Company Name</Label>
                    <Input
                      id="businessCompanyName"
                      type="text"
                      placeholder="e.g., My Freelance Services / ABC Corp"
                      value={businessCompanyName}
                      onChange={(e) => setBusinessCompanyName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="businessRegistrationNumber">Registration Number</Label>
                    <Input
                      id="businessRegistrationNumber"
                      type="text"
                      placeholder="e.g., REG123456789"
                      value={businessRegistrationNumber}
                      onChange={(e) => setBusinessRegistrationNumber(e.target.value)}
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="businessNatureOfBusiness">Nature of Business</Label>
                    <Input
                      id="businessNatureOfBusiness"
                      type="text"
                      placeholder="e.g., IT Consulting, Graphic Design, Retail"
                      value={businessNatureOfBusiness}
                      onChange={(e) => setBusinessNatureOfBusiness(e.target.value)}
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="businessPhysicalAddress">Physical Address (Business)</Label>
                    <Input
                      id="businessPhysicalAddress"
                      type="text"
                      placeholder="e.g., 101 Business Park, City, Country"
                      value={businessPhysicalAddress}
                      onChange={(e) => setBusinessPhysicalAddress(e.target.value)}
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="businessPlaceOfBusinessFile">Place of Business (Document/Proof)</Label>
                    <Input
                      id="businessPlaceOfBusinessFile"
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) => setBusinessPlaceOfBusinessFile(e.target.files ? e.target.files[0] : null)}
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="businessResidentialAddress">Residential Address</Label>
                    <Input
                      id="businessResidentialAddress"
                      type="text"
                      placeholder="e.g., 789 Home St, City, Country"
                      value={businessResidentialAddress}
                      onChange={(e) => setBusinessResidentialAddress(e.target.value)}
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="businessProofOfResidentialAddressFile">Water Bill / Lease Agreement (Proof of Residential Address)</Label>
                    <Input
                      id="businessProofOfResidentialAddressFile"
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) => setBusinessProofOfResidentialAddressFile(e.target.files ? e.target.files[0] : null)}
                      required
                    />
                  </div>
                </>
              )}

              <div className="grid gap-2">
                <Label className="mb-2">Account Type</Label>
                <RadioGroup
                  value={accountType}
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
      <Footer /> {/* Add Footer here */}
    </div>
  );
}