import React from 'react';
import { ChevronDown } from 'lucide-react';
import { GradientButton } from './GradientButton';
import { PhoneMockup } from './PhoneMockup';
import { Link } from 'react-router-dom';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-700 to-blue-500 dark:from-blue-900 dark:to-blue-700 text-white">
      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-300 dark:bg-blue-700 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-300 dark:bg-purple-700 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-300 dark:bg-pink-700 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Side Content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
            A Better Way To Collect Payments
          </h1>
          <p className="text-lg text-blue-100 dark:text-blue-200 mb-8 max-w-md mx-auto lg:mx-0">
            Streamline your transactions, manage finances effortlessly, and grow your business with our secure and seamless platform.
          </p>
          <GradientButton asChild className="px-8 py-4 text-lg">
            <Link to="/onboarding">Create Free Account</Link>
          </GradientButton>
        </div>

        {/* Right Side Phone Mockup */}
        <div className="flex-1 flex justify-center lg:justify-end mt-12 lg:mt-0">
          <PhoneMockup />
        </div>
      </div>

      {/* Scroll Down Icon */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <ChevronDown className="h-8 w-8 text-blue-100 dark:text-blue-200 animate-bounce" />
      </div>
    </section>
  );
};