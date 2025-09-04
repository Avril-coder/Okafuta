import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Info, Users } from 'lucide-react';
import { GradientButton } from '@/components/landing/GradientButton'; // Import GradientButton

export const GroupRebateTab: React.FC = () => {
  const rebates = [
    { id: '1', name: 'Wedding Fund', purpose: 'For the wedding', target: 'N$ 25,000.00', status: 'Active', endDate: '2024-12-31' },
    { id: '2', name: 'Graduation Trip', purpose: 'Celebrating graduation', target: 'N$ 10,000.00', status: 'Funded', endDate: '2024-08-15' },
    { id: '3', name: 'Family Vacation', purpose: 'Holiday in Swakopmund', target: 'N$ 15,000.00', status: 'Active', endDate: '2025-01-10' },
  ];

  return (
    <div className="space-y-6">
      <Alert>
        <Info className="h-4 w-4" />
        <AlertDescription>
          You can create a group with a purpose and target then invite friends and family to fund it.
        </AlertDescription>
      </Alert>

      <Card className="border-blue-200 dark:border-blue-700 shadow-sm hover:shadow-md hover:shadow-blue-500/20 transition-all duration-200">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Adding Group Rebate</CardTitle>
          <Button variant="outline" className="rounded-full">
            <Users className="mr-2 h-4 w-4" />
            Group Rebate List
          </Button>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="group-name">Group Name</Label>
                <Input id="group-name" placeholder="e.g.: Likelemba" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="group-purpose">Group Purpose</Label>
                <Input id="group-purpose" placeholder="e.g.: for the wedding" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="duration-type">Duration Type</Label>
                <Select>
                  <SelectTrigger id="duration-type">
                    <SelectValue placeholder="Select Duration Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="days">Days</SelectItem>
                    <SelectItem value="weeks">Weeks</SelectItem>
                    <SelectItem value="months">Months</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="duration">Duration</Label>
                <Input id="duration" type="number" placeholder="e.g.: 2" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="currency">Currency</Label>
                <Select defaultValue="NAD">
                  <SelectTrigger id="currency">
                    <SelectValue placeholder="Select Currency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="NAD">NAD - Namibian Dollar</SelectItem>
                    <SelectItem value="USD">USD - US Dollar</SelectItem>
                    <SelectItem value="NGN">NGN - Nigerian Naira</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="targeted-amount">Targeted Amount</Label>
                <Input id="targeted-amount" type="number" placeholder="0.00" step="0.01" />
              </div>
            </div>
            <GradientButton className="w-full">Create Group</GradientButton>
          </form>
        </CardContent>
      </Card>

      <Card className="border-blue-200 dark:border-blue-700 shadow-sm hover:shadow-md hover:shadow-blue-500/20 transition-all duration-200">
        <CardHeader>
          <CardTitle>Group Rebate List</CardTitle>
          <CardDescription>View and manage existing group rebates.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Group Name</TableHead>
                <TableHead>Purpose</TableHead>
                <TableHead>Target Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>End Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rebates.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell>{item.purpose}</TableCell>
                  <TableCell>{item.target}</TableCell>
                  <TableCell>{item.status}</TableCell>
                  <TableCell>{item.endDate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};