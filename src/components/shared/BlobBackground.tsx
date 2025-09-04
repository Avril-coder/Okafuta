import React from 'react';

export const BlobBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Blue blob */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400 dark:bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
      {/* Purple blob */}
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-400 dark:bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
      {/* Pink blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-pink-400 dark:bg-pink-700 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
      {/* Subtle dotted pattern (simplified) */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10" style={{ backgroundImage: 'radial-gradient(#a0aec0 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
    </div>
  );
};