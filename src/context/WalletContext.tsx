import React, { createContext, useContext, useState, ReactNode } from 'react';
import { toast } from 'sonner';
import { v4 as uuidv4 } from 'uuid';

// Define the shape of a single wallet
export interface Wallet {
  id: string;
  name: string;
  currency: 'USD' | 'NAD' | 'NGN';
  balance: number;
}

// Define the shape of the context value
interface WalletContextType {
  wallets: Wallet[];
  addFunds: (walletId: string, amount: number) => void;
  createWallet: (name: string, currency: 'USD' | 'NAD' | 'NGN') => void;
  moveFunds: (fromWalletId: string, toWalletId: string, amount: number) => void;
}

// Create the context
const WalletContext = createContext<WalletContextType | undefined>(undefined);

// Props for the WalletProvider component
interface WalletProviderProps {
  children: ReactNode;
}

export const WalletProvider: React.FC<WalletProviderProps> = ({ children }) => {
  // Initialize with default wallets
  const [wallets, setWallets] = useState<Wallet[]>([
    { id: '1', name: 'USD Wallet', currency: 'USD', balance: 12345.67 },
    { id: '2', name: 'NAD Wallet', currency: 'NAD', balance: 185185.05 },
    { id: '3', name: 'NGN Wallet', currency: 'NGN', balance: 9876543.21 },
  ]);

  // Function to add funds to a specific wallet
  const addFunds = (walletId: string, amount: number) => {
    if (amount <= 0) {
      toast.error("Amount must be positive.");
      return;
    }
    setWallets((prevWallets) => {
      const newWallets = prevWallets.map(wallet => {
        if (wallet.id === walletId) {
          toast.success(`Successfully added ${amount.toLocaleString()} to ${wallet.name}.`);
          return { ...wallet, balance: wallet.balance + amount };
        }
        return wallet;
      });
      return newWallets;
    });
  };

  // Function to create a new wallet
  const createWallet = (name: string, currency: 'USD' | 'NAD' | 'NGN') => {
    if (!name.trim()) {
      toast.error("Wallet name cannot be empty.");
      return;
    }
    const newWallet: Wallet = {
      id: uuidv4(),
      name: `${name} (${currency})`,
      currency,
      balance: 0,
    };
    setWallets(prevWallets => [...prevWallets, newWallet]);
    toast.success(`Wallet "${newWallet.name}" created successfully.`);
  };

  // Function to move funds between wallets
  const moveFunds = (fromWalletId: string, toWalletId: string, amount: number) => {
    if (fromWalletId === toWalletId) {
      toast.error("Cannot move funds to the same wallet.");
      return;
    }
    if (amount <= 0) {
      toast.error("Amount must be positive.");
      return;
    }

    setWallets(prevWallets => {
      const fromWallet = prevWallets.find(w => w.id === fromWalletId);
      const toWallet = prevWallets.find(w => w.id === toWalletId);

      if (!fromWallet || !toWallet) {
        toast.error("Invalid wallet selection.");
        return prevWallets;
      }
      
      if (fromWallet.currency !== toWallet.currency) {
        toast.error("Cross-currency transfers are not supported. Please create a new wallet with the same currency.");
        return prevWallets;
      }

      if (fromWallet.balance < amount) {
        toast.error("Insufficient funds in the source wallet.");
        return prevWallets;
      }

      const newWallets = prevWallets.map(wallet => {
        if (wallet.id === fromWalletId) {
          return { ...wallet, balance: wallet.balance - amount };
        }
        if (wallet.id === toWalletId) {
          return { ...wallet, balance: wallet.balance + amount };
        }
        return wallet;
      });
      
      toast.success(`Successfully moved ${amount.toLocaleString()} from ${fromWallet.name} to ${toWallet.name}.`);
      return newWallets;
    });
  };

  return (
    <WalletContext.Provider value={{ wallets, addFunds, createWallet, moveFunds }}>
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