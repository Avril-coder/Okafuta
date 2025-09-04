import React from 'react';
import { cn } from '@/lib/utils';

interface GradientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export const GradientButton: React.FC<GradientButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        "bg-gradient-to-r from-orange-400 to-orange-600 text-white shadow-lg hover:from-orange-500 hover:to-orange-700", // Adjusted gradient colors
        "px-6 py-3", // Default padding, can be overridden by className
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};