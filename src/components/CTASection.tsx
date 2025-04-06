
import React from "react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 bg-bookeasy-teal">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Have a Space to Share?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            List your business space on BookEasy and start earning. Join hundreds of local businesses
            already using our platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-bookeasy-teal hover:bg-bookeasy-yellow hover:text-bookeasy-navy border-2 border-white">
              List Your Space
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
