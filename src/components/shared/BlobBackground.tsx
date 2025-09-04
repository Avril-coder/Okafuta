import React from 'react';

export const BlobBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Subtle blue blob */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-300 dark:bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      {/* Subtle purple blob */}
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      {/* Subtle dotted pattern (simplified) */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10" style={{ backgroundImage: 'radial-gradient(#a0aec0 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
    </div>
  );
};