
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturesSection from "@/components/FeaturesSection";
import PopularSpaces from "@/components/PopularSpaces";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <FeaturesSection />
      <PopularSpaces />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
