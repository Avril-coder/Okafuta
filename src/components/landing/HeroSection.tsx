import React from 'react';
import { ChevronDown } from 'lucide-react';
import { GradientButton } from './GradientButton';
import { PhoneMockup } from './PhoneMockup';
import { Link } from 'react-router-dom';
import { BlobBackground } from '@/components/shared/BlobBackground';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between overflow-hidden py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 text-center lg:text-left">
      {/* Abstract Background Shapes */}
      <BlobBackground />

      <div className="relative z-10 max-w-4xl mx-auto lg:mx-0 flex flex-col items-center lg:items-start lg:w-1/2">
        {/* Headline and Subtext */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-blue-700 dark:text-blue-400 leading-tight mb-4">
          A Better Way To <br /> Collect Payments
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
          Collect payments from your customers with ease and security.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center lg:justify-start mb-16">
          <GradientButton asChild className="px-8 py-4 text-lg">
            <Link to="/onboarding">Create Free Account</Link>
          </GradientButton>
        </div>
      </div>

      {/* Phone Mockup */}
      <div className="relative z-10 w-full max-w-md mx-auto lg:mx-0 lg:w-1/2 flex justify-center lg:justify-end mt-12 lg:mt-0">
        <PhoneMockup />
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 right-8 z-10 flex flex-col items-center text-gray-400 dark:text-gray-600">
        <ChevronDown className="h-6 w-6 animate-bounce" />
        <span className="text-xs mt-1 transform rotate-90 origin-center whitespace-nowrap">Scroll Down</span>
      </div>
    </section>
  );
};