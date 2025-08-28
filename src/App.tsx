import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import MerchantLayout from "./components/merchant/Layout";
import MerchantDashboard from "./pages/merchant/Dashboard";
import Transact from "./pages/merchant/Transact";
import Customers from "./pages/merchant/Customers";
import Benefits from "./pages/merchant/Benefits";
import Settings from "./pages/merchant/Settings";
import KycVerification from "./pages/merchant/KycVerification"; // New import for KYC
import AdminLayout from "./components/admin/Layout"; // New import for Admin Layout
import KycReview from "./pages/admin/KycReview"; // New import for Admin KYC Review

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          
          <Route path="/dashboard" element={<MerchantLayout />}>
            <Route index element={<MerchantDashboard />} />
            <Route path="transact" element={<Transact />} />
            <Route path="customers" element={<Customers />} />
            <Route path="benefits" element={<Benefits />} />
            <Route path="kyc" element={<KycVerification />} /> {/* New merchant KYC route */}
            <Route path="settings" element={<Settings />} />
          </Route>

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="kyc-requests" element={<KycReview />} /> {/* New admin KYC review route */}
            {/* Add other admin routes here */}
          </Route>

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;