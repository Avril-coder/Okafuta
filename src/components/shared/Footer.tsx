import React from 'react';
import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white dark:bg-gray-900 py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-6">
        <Link to="/" className="flex items-center">
          <img src="/Okafuta logo.png" alt="Okafuta Logo" className="h-12 w-auto" />
        </Link>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Okafuta. All rights reserved.
        </p>
        <div className="flex space-x-4 text-sm text-gray-500 dark:text-gray-400">
          <Link to="/privacy-policy" className="hover:text-blue-600 dark:hover:text-blue-500">Privacy Policy</Link>
          <Link to="/terms-of-service" className="hover:text-blue-600 dark:hover:text-blue-500">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};