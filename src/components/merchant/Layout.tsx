import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { MerchantHeader } from "@/components/shared/MerchantHeader"; // Use MerchantHeader
import { Footer } from "@/components/shared/Footer";

export default function MerchantLayout() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex">
      <Sidebar />
      <div className="flex flex-col flex-1 w-full lg:ml-64">
        <MerchantHeader /> {/* Use MerchantHeader here */}
        <main className="flex-1 pb-8">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}