
import React from "react";
import { Search, Calendar, CheckCircle } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Search className="w-10 h-10 text-[#1E0D73]" />,
      title: "Discover Spaces",
      description:
        "Browse hundreds of unique spaces from local businesses. Filter by location, capacity, amenities, and more.",
    },
    {
      icon: <Calendar className="w-10 h-10 text-[#1E0D73]" />,
      title: "Book Instantly",
      description:
        "Reserve spaces with just a few clicks. Get instant confirmation and manage all your bookings in one place.",
    },
    {
      icon: <CheckCircle className="w-10 h-10 text-[#1E0D73]" />,
      title: "Stress-Free Experience",
      description:
        "Enjoy clear pricing, flexible cancellations, and efficient customer support for a smooth booking experience.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How <span className="text-gradient">BookEasy</span> Works
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We connect you with local spaces for any occasion. From workout sessions to workshops, 
            find and book the perfect space in minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
