import { BalanceCard } from "@/components/merchant/BalanceCard";
import { QuickLinks } from "@/components/merchant/QuickLinks";
import { RecentActivity } from "@/components/merchant/RecentActivity";
import { useWallet } from "@/context/WalletContext";

const getCurrencySymbol = (currency: 'USD' | 'NAD' | 'NGN') => {
  switch (currency) {
    case 'USD': return '$';
    case 'NAD': return 'N$';
    case 'NGN': return '₦';
    default: return '';
  }
};

const getLocale = (currency: 'USD' | 'NAD' | 'NGN') => {
  switch (currency) {
    case 'USD': return 'en-US';
    case 'NAD': return 'en-ZA';
    case 'NGN': return 'en-NG';
    default: return 'en-US';
  }
};

export default function MerchantDashboard() {
  const { wallets } = useWallet();

  return (
    <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
      <div className="pt-6">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Welcome back, Merchant!
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Here's a summary of your business activities.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {wallets.map(wallet => (
          <BalanceCard 
            key={wallet.id}
            walletName={wallet.name} 
            amount={wallet.balance.toLocaleString(getLocale(wallet.currency), { minimumFractionDigits: 2, maximumFractionDigits: 2 })} 
            currencySymbol={getCurrencySymbol(wallet.currency)} 
          />
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-1 lg:col-span-3">
          <QuickLinks />
        </div>
        <div className="col-span-1 lg:col-span-3">
          <RecentActivity />
        </div>
      </div>
    </div>
  );
}