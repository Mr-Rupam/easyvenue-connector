
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="border-bookeasy-teal text-bookeasy-teal hover:bg-bookeasy-teal hover:text-white">
              Log In
            </Button>
            <Button className="bg-bookeasy-teal hover:bg-bookeasy-teal/90">
              Sign Up
            </Button>
          </div>
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
            <div className="flex flex-col space-y-2 pt-2 border-t">
              <Button variant="outline" className="border-bookeasy-teal text-bookeasy-teal hover:bg-bookeasy-teal hover:text-white w-full">
                Log In
              </Button>
              <Button className="bg-bookeasy-teal hover:bg-bookeasy-teal/90 w-full">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
