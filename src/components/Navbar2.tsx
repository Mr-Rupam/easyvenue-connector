import React from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar2 = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Don't show the Navbar2 on auth pages
  if (
    location.pathname === "/login" ||
    location.pathname === "/signup" ||
    location.pathname === "/forgot-password"
  ) {
    return null;
  }

  return (
    <nav className="w-full py-4 bg-white shadow-sm">
      <div className="container flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="font-bold text-2xl text-gradient">BookEasy</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            <Link to="/" className="text-bookeasy-navy hover:text-bookeasy-teal transition-colors">
              Home
            </Link>
            <Link to="/spaces" className="text-bookeasy-navy hover:text-bookeasy-teal transition-colors">
              Find Spaces
            </Link>
            <Link to="/about" className="text-bookeasy-navy hover:text-bookeasy-teal transition-colors">
              How It Works
            </Link>
            <Link to="/business" className="text-bookeasy-navy hover:text-bookeasy-teal transition-colors">
              For Businesses
            </Link>
          </div>

          {/* Profile Avatar */}
          <Link to="/profile" className="ml-4">
            <img
              src="/user-avatar.png" // replace with dynamic URL or default image
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover border border-gray-200 hover:ring-2 hover:ring-bookeasy-teal transition"
            />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md z-50 p-4 border-t">
          <div className="flex flex-col space-y-4">
            <Link
              to="/"
              className="text-bookeasy-navy hover:text-bookeasy-teal transition-colors p-2"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/spaces"
              className="text-bookeasy-navy hover:text-bookeasy-teal transition-colors p-2"
              onClick={toggleMenu}
            >
              Find Spaces
            </Link>
            <Link
              to="/about"
              className="text-bookeasy-navy hover:text-bookeasy-teal transition-colors p-2"
              onClick={toggleMenu}
            >
              How It Works
            </Link>
            <Link
              to="/business"
              className="text-bookeasy-navy hover:text-bookeasy-teal transition-colors p-2"
              onClick={toggleMenu}
            >
              For Businesses
            </Link>

            {/* Mobile Profile Avatar */}
            <div className="pt-2 border-t">
              <Link
                to="/profile"
                onClick={toggleMenu}
                className="flex items-center space-x-2 p-2"
              >
                <img
                  src="/user-avatar.png"
                  alt="Profile"
                  className="w-10 h-10 rounded-full object-cover border border-gray-200"
                />
                <span className="text-bookeasy-navy font-medium">Your Profile</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar2;
