import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { GradientButton } from '@/components/landing/GradientButton'; // Import GradientButton

export default function Settings() {
  return (
    <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Settings</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Manage your account, security, and business profile.
      </p>

      <div className="space-y-8">
        {/* Wallet Settings */}
        <Card>
          <CardHeader>
            <CardTitle>Wallet Settings</CardTitle>
            <CardDescription>Configure your primary wallet and currency preferences.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="primary-wallet">Primary Wallet</Label>
              <Select defaultValue="nad">
                <SelectTrigger id="primary-wallet">
                  <SelectValue placeholder="Select primary wallet" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="nad">NAD Wallet</SelectItem>
                  <SelectItem value="usd">USD Wallet</SelectItem>
                  <SelectItem value="ngn">NGN Wallet</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <GradientButton className="w-full">Save Wallet Settings</GradientButton>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card>
          <CardHeader>
            <CardTitle>Security</CardTitle>
            <CardDescription>Manage your account security settings.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-2">
              <Label htmlFor="pin-setup">PIN Setup</Label>
              <Input id="pin-setup" type="password" placeholder="Enter new PIN" />
              <Input type="password" placeholder="Confirm new PIN" />
              <GradientButton className="w-full">Set/Change PIN</GradientButton>
            </div>

            <div className="flex items-center justify-between space-x-2">
              <Label htmlFor="two-factor-auth" className="flex flex-col space-y-1">
                <span>Two-Factor Authentication (2FA)</span>
                <span className="font-normal leading-snug text-muted-foreground">
                  Add an extra layer of security to your account.
                </span>
              </Label>
              <Switch id="two-factor-auth" />
            </div>
          </CardContent>
        </Card>

        {/* Push Notification Preferences */}
        <Card>
          <CardHeader>
            <CardTitle>Push Notification Preferences</CardTitle>
            <CardDescription>Choose which notifications you'd like to receive.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between space-x-2">
              <Label htmlFor="transaction-notifications">Transaction Alerts</Label>
              <Switch id="transaction-notifications" defaultChecked />
            </div>
            <div className="flex items-center justify-between space-x-2">
              <Label htmlFor="marketing-notifications">Marketing & Promotions</Label>
              <Switch id="marketing-notifications" />
            </div>
            <div className="flex items-center justify-between space-x-2">
              <Label htmlFor="security-notifications">Security Alerts</Label>
              <Switch id="security-notifications" defaultChecked />
            </div>
            <GradientButton className="w-full">Save Preferences</GradientButton>
          </CardContent>
        </Card>

        {/* Merchant Profile */}
        <Card>
          <CardHeader>
            <CardTitle>Merchant Profile</CardTitle>
            <CardDescription>Update your business information.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="business-name">Business Name</Label>
              <Input id="business-name" placeholder="e.g., My Awesome Shop" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="business-address">Business Address</Label>
              <Input id="business-address" placeholder="e.g., 123 Main St, City, Country" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="services-offered">Services Offered</Label>
              <Textarea id="services-offered" placeholder="Describe the services your business provides." />
            </div>
            <GradientButton className="w-full">Update Profile</GradientButton>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}