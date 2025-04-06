import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth,db } from "../firebase"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState<"user" | "admin">("user"); // 🆕 Role selector
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!email || !password) {
      toast({
        variant: "destructive",
        title: "Login failed",
        description: "Please enter your email and password.",
      });
      return;
    }
  
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      let role: "admin" | "customer" | null = null;
  
      // 🔍 Check if user is in 'admin' collection
      const adminDoc = await getDoc(doc(db, "admin", user.uid));
      if (adminDoc.exists()) {
        role = "admin";
      } else {
        // 🔍 Check if user is in 'customer' collection
        const customerDoc = await getDoc(doc(db, "customer", user.uid));
        if (customerDoc.exists()) {
          role = "customer";
        }
      }
  
      if (!role) {
        throw new Error("User role not found in Firestore.");
      }
  
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userRole", role);
      localStorage.setItem("userEmail", user.email || "");
  
      toast({
        title: "Login successful",
        description: `Welcome back, ${role === "admin" ? "Admin" : "User"}!`,
      });
  
      navigate(role === "admin" ? "/admin" : "/customer");
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Login failed",
        description: error.message,
      });
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-bookeasy-lightgray flex flex-col">
      <div className="container py-8">
        <Link to="/" className="inline-flex items-center space-x-2">
          <span className="font-bold text-2xl text-gradient">BookEasy</span>
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-lg shadow-lg border border-bookeasy-lightgray p-8">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-bookeasy-navy">Welcome Back</h1>
              <p className="text-muted-foreground mt-2">Sign in to your BookEasy account</p>
            </div>

            {/* 🆕 Role Selector */}
            <div className="flex justify-center space-x-4 mb-6">
              <Button
                variant={role === "user" ? "default" : "outline"}
                onClick={() => setRole("user")}
              >
                User
              </Button>
              <Button
                variant={role === "admin" ? "default" : "outline"}
                onClick={() => setRole("admin")}
              >
                Admin
              </Button>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full"
                  required
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    to="/forgot-password"
                    className="text-sm text-[#1E0D73] hover:underline"
                  >
                    Forgot Password?
                  </Link>
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pr-10"
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember"
                  checked={rememberMe}
                  onCheckedChange={() => setRememberMe(!rememberMe)}
                />
                <label
                  htmlFor="remember"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Remember me for 30 days
                </label>
              </div>

              <Button type="submit" className="w-full bg-[#1E0D73] hover:bg-[#1E0D73]/90">
                Sign In
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Don't have an account?{" "}
                <Link to="/signup" className="text-[#1E0D73] hover:underline font-medium">
                  Sign up
                </Link>
              </p>
            </div>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-muted-foreground">Or continue with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <Button variant="outline" className="w-full">
                  {/* Google */}
                  <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">...</svg>
                  Google
                </Button>
                <Button variant="outline" className="w-full">
                  {/* GitHub */}
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">...</svg>
                  GitHub
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
