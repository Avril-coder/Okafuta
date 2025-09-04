import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { Footer } from "@/components/shared/Footer"; // Import Footer

export default function MerchantLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-800 flex">
      <Sidebar />
      <div className="flex flex-col flex-1 w-full lg:ml-64">
        <Header />
        <main className="flex-1 pb-8">
          <Outlet />
        </main>
        <Footer /> {/* Add Footer here */}
      </div>
    </div>
  );
}