import { BalanceCard } from "@/components/merchant/BalanceCard";
import { QuickLinks } from "@/components/merchant/QuickLinks";
import { RecentActivity } from "@/components/merchant/RecentActivity";
import { useWallet } from "@/context/WalletContext"; // Import useWallet

export default function MerchantDashboard() {
  const { balances } = useWallet(); // Use the wallet context

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
        <BalanceCard currency="USD" amount={balances.usd.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} currencySymbol="$" />
        <BalanceCard currency="NAD" amount={balances.nad.toLocaleString('en-ZA', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} currencySymbol="N$" />
        <BalanceCard currency="NGN" amount={balances.ngn.toLocaleString('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} currencySymbol="₦" />
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