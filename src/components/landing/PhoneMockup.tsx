import React from 'react';
import { cn } from '@/lib/utils';

export const PhoneMockup: React.FC = () => {
  return (
    <div className="relative w-72 h-[500px] bg-black rounded-[2.5rem] shadow-2xl flex items-center justify-center p-1.5 border-[8px] border-gray-800 dark:border-gray-200">
      {/* Notch */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-5 bg-gray-800 dark:bg-gray-200 rounded-md z-10"></div>
      {/* Screen */}
      <div className="relative w-full h-full bg-white dark:bg-gray-900 rounded-[2rem] overflow-hidden flex flex-col">
        <img
          src="/Okafuta cell.png"
          alt="Okafuta Mobile App Screenshot"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};