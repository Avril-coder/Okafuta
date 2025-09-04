import React from 'react';
import { ChevronDown } from 'lucide-react';
import { GradientButton } from './GradientButton';
import { PhoneMockup } from './PhoneMockup';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
// import { FloatingActionCards } from './FloatingActionCards'; // Removed import
import { BlobBackground } from '@/components/shared/BlobBackground';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 text-center">
      {/* Abstract Background Shapes */}
      <BlobBackground />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Headline and Subtext */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4">
          A Better Way to Collect Your Payments
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
          Collect payments from your customers with ease and security.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <GradientButton asChild className="px-8 py-4 text-lg">
            <Link to="/onboarding">Create Free Account</Link>
          </GradientButton>
          {/* Removed "Learn More" button */}
        </div>

        {/* Phone Mockup */}
        <div className="relative w-full max-w-md mx-auto mt-12 lg:mt-0">
          <PhoneMockup />
          {/* Removed FloatingActionCards */}
        </div>
      </div>

      {/* Scroll Down Icon */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <ChevronDown className="h-6 w-6 text-gray-400 dark:text-gray-600 animate-bounce" />
      </div>
    </section>
  );
};