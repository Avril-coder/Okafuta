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
import MerchantDashboard from "./pages/merchant/Dashboard";
import Transact from "./pages/merchant/Transact";
import Customers from "./pages/merchant/Customers";
import Benefits from "./pages/merchant/Benefits";
import Settings from "./pages/merchant/Settings";
import InvoicePage from "./pages/merchant/Invoice";
import Profile from "./pages/merchant/Profile";
import OfferBillPayment from "./pages/merchant/OfferBillPayment"; // Import the new page
import { WalletProvider } from "./context/WalletContext";
import { UserProvider } from "./context/UserContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            
            <Route path="/dashboard" element={<WalletProvider><MerchantLayout /></WalletProvider>}>
              <Route index element={<MerchantDashboard />} />
              <Route path="transact" element={<Transact />} />
              <Route path="customers" element={<Customers />} />
              <Route path="benefits" element={<Benefits />} />
              <Route path="invoice" element={<InvoicePage />} />
              <Route path="profile" element={<Profile />} />
              <Route path="settings" element={<Settings />} />
              <Route path="offer-bill-payment" element={<OfferBillPayment />} /> {/* New route */}
            </Route>

            {/* Catch-all route for 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;