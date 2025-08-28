import React from 'react';
import { cn } from '@/lib/utils';

interface DiditLogoProps {
  className?: string;
  iconClassName?: string;
  textClassName?: string;
}

export const DiditLogo: React.FC<DiditLogoProps> = ({ className, iconClassName, textClassName }) => {
  return (
    <div className={cn("flex items-center", className)}>
      <div className={cn("flex items-center justify-center h-9 w-9 rounded-full border-2 border-blue-600", iconClassName)}>
        {/* Empty for the ring effect */}
      </div>
      <span className={cn("ml-2 text-3xl font-bold text-gray-900 dark:text-white", textClassName)}>
        Didit
      </span>
    </div>
  );
};