import { Outlet } from "react-router-dom";
import { AdminSidebar } from "./Sidebar";
import { AdminHeader } from "./Header";

export default function AdminLayout() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex">
      <AdminSidebar />
      <div className="flex flex-col flex-1 w-full lg:ml-64">
        <AdminHeader />
        <main className="flex-1 pb-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}