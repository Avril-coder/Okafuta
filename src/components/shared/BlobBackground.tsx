import React from 'react';

export const BlobBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-300 dark:bg-blue-700 rounded-full mix-blend-multiply filter blur-lg opacity-50 animate-blob"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-300 dark:bg-purple-700 rounded-full mix-blend-multiply filter blur-lg opacity-50 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-300 dark:bg-pink-700 rounded-full mix-blend-multiply filter blur-lg opacity-50 animate-blob animation-delay-4000"></div>
    </div>
  );
};