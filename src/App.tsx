import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import LanguageSelection from "./pages/LanguageSelection";
import Dashboard from "./pages/Dashboard";
import CropCare from "./pages/CropCare";
import Seeds from "./pages/Seeds";
import Market from "./pages/Market";
import Transport from "./pages/Transport";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LanguageSelection />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/crop-care" element={<CropCare />} />
            <Route path="/seeds" element={<Seeds />} />
            <Route path="/market" element={<Market />} />
            <Route path="/transport" element={<Transport />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
