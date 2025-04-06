
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import NotFound from "./pages/NotFound";
import Customer from "./pages/Customer";
import AdminDashboard from "./pages/AdminDashboard";
import PrivateRoute from "./components/privateRoute";
import MyBookings from "./pages/MyBookings";

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
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          {/* These routes will be implemented in future updates */}
          <Route path="/spaces" element={<NotFound />} />
          <Route path="/spaces/:id" element={<NotFound />} />
          <Route path="/about" element={<NotFound />} />
          <Route path="/business" element={<NotFound />} />
          <Route path="/my-bookings" element={<MyBookings />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route
            path="/customer"
            element={
              <PrivateRoute>
                <Customer />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
