
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { ArrowLeft } from "lucide-react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (email) {
      // This is where you'd handle actual password reset logic with a backend
      setSubmitted(true);
      toast({
        title: "Reset link sent",
        description: "Check your email for instructions to reset your password.",
      });
    } else {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please enter your email address.",
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
              <h1 className="text-2xl font-bold text-bookeasy-navy">Reset Your Password</h1>
              <p className="text-muted-foreground mt-2">
                {!submitted 
                  ? "Enter your email and we'll send you a link to reset your password" 
                  : "Check your email for a reset link"
                }
              </p>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email address</Label>
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

                <Button type="submit" className="w-full bg-bookeasy-teal hover:bg-bookeasy-teal/90">
                  Send Reset Link
                </Button>
              </form>
            ) : (
              <div className="text-center">
                <div className="mb-4 p-4 bg-green-50 text-green-700 rounded-md">
                  Reset link sent to {email}
                </div>
                <Button 
                  onClick={() => setSubmitted(false)} 
                  variant="outline" 
                  className="w-full"
                >
                  Try another email
                </Button>
              </div>
            )}

            <div className="mt-6 text-center">
              <Link 
                to="/login" 
                className="text-bookeasy-teal hover:underline inline-flex items-center"
              >
                <ArrowLeft size={16} className="mr-2" />
                Back to sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
