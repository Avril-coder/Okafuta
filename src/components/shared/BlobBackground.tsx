import React from 'react';

export const BlobBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Large blue blob on the right */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-blue-400 dark:bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      {/* Smaller purple blob near the top right */}
      <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-4000"></div>
      {/* Subtle dotted pattern (simplified, as exact replication is complex with CSS) */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10" style={{ backgroundImage: 'radial-gradient(#a0aec0 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
    </div>
  );
};