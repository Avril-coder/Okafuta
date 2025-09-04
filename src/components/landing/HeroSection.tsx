import React from 'react';
import { ChevronDown } from 'lucide-react';
import { GradientButton } from './GradientButton';
import { PhoneMockup } from './PhoneMockup';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button'; // Import Button for secondary CTA
import { FloatingActionCards } from './FloatingActionCards'; // Import new component

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 text-center">
      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-300 dark:bg-blue-700 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-300 dark:bg-purple-700 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-300 dark:bg-pink-700 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Headline and Subtext */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4">
          A Smarter Way to Manage Your Money
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
          Send, receive, and grow your business securely and seamlessly.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <GradientButton asChild className="px-8 py-4 text-lg">
            <Link to="/onboarding">Create Free Account</Link>
          </GradientButton>
          <Button asChild variant="outline" className="px-8 py-4 text-lg">
            <Link to="/about">Learn More</Link>
          </Button>
        </div>

        {/* Phone Mockup with Floating Actions */}
        <div className="relative w-full max-w-md mx-auto mt-12 lg:mt-0">
          <PhoneMockup />
          <FloatingActionCards />
        </div>
      </div>

      {/* Scroll Down Icon */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <ChevronDown className="h-6 w-6 text-gray-400 dark:text-gray-600 animate-bounce" />
      </div>
    </section>
  );
};