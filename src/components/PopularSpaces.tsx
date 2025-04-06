
import React from "react";
import SpaceCard, { SpaceProps } from "./SpaceCard";

const PopularSpaces = () => {
  const spaces: SpaceProps[] = [
    {
      id: 1,
      name: "The Urban Loft",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
      location: "Downtown",
      type: "Co-working",
      price: 35,
      priceUnit: "per hour",
      rating: 4.9,
      reviewCount: 124,
      capacity: 20,
    },
    {
      id: 2,
      name: "Fitness Studio",
      image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f",
      location: "Westside",
      type: "Fitness",
      price: 60,
      priceUnit: "per hour",
      rating: 4.7,
      reviewCount: 89,
      capacity: 15,
    },
    {
      id: 3,
      name: "Conference Center",
      image: "https://images.unsplash.com/photo-1517502884422-41eaead166d4",
      location: "Business District",
      type: "Conference",
      price: 120,
      priceUnit: "per hour",
      rating: 4.8,
      reviewCount: 67,
      capacity: 50,
    },
    {
      id: 4,
      name: "The Artisan Cafe",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24",
      location: "Arts District",
      type: "Cafe",
      price: 40,
      priceUnit: "per hour",
      rating: 4.6,
      reviewCount: 103,
      capacity: 30,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">Popular Spaces</h2>
            <p className="text-gray-600">Discover our most booked venues and spaces</p>
          </div>
          <a href="/spaces" className="text-[#B7BDB7] font-medium hover:underline">
            View all spaces →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {spaces.map((space) => (
            <SpaceCard key={space.id} {...space} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularSpaces;
