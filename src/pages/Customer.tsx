// pages/Customer.jsx
import Navbar2 from "@/components/Navbar2";
import Hero from "@/components/Hero";
import FeaturesSection from "@/components/FeaturesSection";
import PopularSpaces from "@/components/PopularSpaces";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import CustomerSays from "../components/CustomerSays";

const Customer = () => {
    return (
        <div className="min-h-screen flex flex-col">
      <Navbar2 />
      <Hero />
      <FeaturesSection />
      <PopularSpaces />
      <CustomerSays />
      <CTASection />
      <Footer />
    </div>
    );
};

export default Customer;
