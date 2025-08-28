import React, { createContext, useContext, useState, ReactNode } from 'react';
import { toast } from 'sonner';

// Define the shape of our wallet balances
interface WalletBalances {
  usd: number;
  nad: number;
  ngn: number;
}

// Define the shape of the context value
interface WalletContextType {
  balances: WalletBalances;
  addFunds: (currency: keyof WalletBalances, amount: number) => void;
}

// Create the context with a default undefined value
const WalletContext = createContext<WalletContextType | undefined>(undefined);

// Props for the WalletProvider component
interface WalletProviderProps {
  children: ReactNode;
}

export const WalletProvider: React.FC<WalletProviderProps> = ({ children }) => {
  // Initialize mock balances
  const [balances, setBalances] = useState<WalletBalances>({
    usd: 12345.67,
    nad: 185185.05,
    ngn: 9876543.21,
  });

  // Function to add funds to a specific currency wallet
  const addFunds = (currency: keyof WalletBalances, amount: number) => {
    if (amount <= 0) {
      toast.error("Amount must be positive.");
      return;
    }
    setBalances((prevBalances) => {
      const newBalances = {
        ...prevBalances,
        [currency]: prevBalances[currency] + amount,
      };
      toast.success(`Successfully added ${amount.toLocaleString()} to ${currency.toUpperCase()} wallet.`);
      return newBalances;
    });
  };

  return (
    <WalletContext.Provider value={{ balances, addFunds }}>
      {children}
    </WalletContext.Provider>
  );
};

// Custom hook to use the WalletContext
export const useWallet = () => {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
};