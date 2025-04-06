
import React from "react";
import { Button } from "@/components/ui/button";
import { Search, MapPin, Calendar } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-bookeasy-navy to-bookeasy-teal py-20 md:py-28">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Book Local Spaces<br />With <span className="text-bookeasy-yellow">Ease</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 md:px-10">
            Discover and book the perfect spaces for your events, meetings, or activities.
            From studios to conference rooms, we've got you covered.
          </p>
          
          <div className="bg-white rounded-lg p-4 shadow-lg max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2 bg-gray-50 px-3 py-2 rounded-md">
                <MapPin size={18} className="text-bookeasy-teal" />
                <input 
                  type="text" 
                  placeholder="Location" 
                  className="bg-transparent w-full outline-none border-none text-sm"
                />
              </div>
              
              <div className="flex items-center space-x-2 bg-gray-50 px-3 py-2 rounded-md">
                <Calendar size={18} className="text-bookeasy-teal" />
                <input 
                  type="text" 
                  placeholder="Date" 
                  className="bg-transparent w-full outline-none border-none text-sm"
                />
              </div>
              
              <Button className="bg-bookeasy-orange hover:bg-bookeasy-orange/90 w-full">
                <Search size={18} className="mr-2" /> Search Spaces
              </Button>
            </div>
          </div>
          
          <div className="mt-8 text-white text-sm flex justify-center items-center flex-wrap gap-6">
            <span className="flex items-center">
              <span className="bg-white/20 rounded-full p-1 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-bookeasy-yellow">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </span>
              No booking fees
            </span>
            <span className="flex items-center">
              <span className="bg-white/20 rounded-full p-1 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-bookeasy-yellow">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </span>
              Instant confirmation
            </span>
            <span className="flex items-center">
              <span className="bg-white/20 rounded-full p-1 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-bookeasy-yellow">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </span>
              Free cancellation options
            </span>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Hero;
