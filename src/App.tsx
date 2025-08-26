import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MerchantLayout from "./components/merchant/Layout";
import MerchantDashboard from "./pages/merchant/Dashboard";
import Transact from "./pages/merchant/Transact";
import Customers from "./pages/merchant/Customers";
import Benefits from "./pages/merchant/Benefits";
import Settings from "./pages/merchant/Settings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          <Route path="/dashboard" element={<MerchantLayout />}>
            <Route index element={<MerchantDashboard />} />
            <Route path="transact" element={<Transact />} />
            <Route path="customers" element={<Customers />} />
            <Route path="benefits" element={<Benefits />} />
            <Route path="settings" element={<Settings />} />
          </Route>

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;