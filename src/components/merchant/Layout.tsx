import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";

export default function MerchantLayout() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      <div className="flex flex-col flex-1"> {/* Removed lg:ml-64 */}
        <Header />
        <main className="flex-1 pb-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}