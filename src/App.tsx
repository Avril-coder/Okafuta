import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Onboarding from "./pages/Onboarding";
import ForgotPassword from "./pages/ForgotPassword";
import MerchantLayout from "./components/merchant/Layout";
import Transact from "./pages/merchant/Transact";
import MerchantDashboard from "./pages/merchant/Dashboard";
import Customers from "./pages/merchant/Customers";
import Benefits from "./pages/merchant/Benefits";
import Settings from "./pages/merchant/Settings";
import InvoicePage from "./pages/merchant/Invoice";
import Profile from "./pages/merchant/Profile";
import { WalletProvider } from "./context/WalletContext";
import { UserProvider } from "./context/UserContext";

const queryClient = new QueryClient();

const App = () => (
  <UserProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <WalletProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<Login />} />
              <Route path="/onboarding" element={<Onboarding />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              
              {/* Protected routes */}
              <Route path="/dashboard" element={<MerchantLayout />}>
                <Route index element={<MerchantDashboard />} />
                <Route path="transact" element={<Transact />} />
                <Route path="customers" element={<Customers />} />
                <Route path="benefits" element={<Benefits />} />
                <Route path="invoice" element={<InvoicePage />} />
                <Route path="profile" element={<Profile />} />
                <Route path="settings" element={<Settings />} />
              </Route>

              {/* Catch-all route for 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </WalletProvider>
      </TooltipProvider>
    </QueryClientProvider>
  </UserProvider>
);

export default App;