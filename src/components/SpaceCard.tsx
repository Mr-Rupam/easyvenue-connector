
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Users, Star } from "lucide-react";

export interface SpaceProps {
  id: number;
  name: string;
  image: string;
  location: string;
  type: string;
  price: number;
  priceUnit: string;
  rating: number;
  reviewCount: number;
  capacity: number;
}

const SpaceCard: React.FC<SpaceProps> = ({
  id,
  name,
  image,
  location,
  type,
  price,
  priceUnit,
  rating,
  reviewCount,
  capacity,
}) => {
  return (
    <Card className="overflow-hidden h-full transition-all hover:shadow-lg">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
        />
        <div className="absolute top-3 left-3 bg-[#B7BDB7] text-white text-xs font-medium px-2 py-1 rounded">
          {type}
        </div>
      </div>
      
      <div className="p-5 flex flex-col h-[calc(100%-12rem)]">
        <div className="flex items-center text-gray-500 text-sm mb-2">
          <MapPin size={14} className="mr-1" />
          <span>{location}</span>
        </div>
        
        <h3 className="font-semibold text-lg mb-1 flex-grow">{name}</h3>
        
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <Users size={14} className="mr-1" />
          <span>Up to {capacity} people</span>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Star size={16} className="text-bookeasy-yellow mr-1 fill-current" />
            <span className="font-medium">{rating}</span>
            <span className="text-gray-500 text-sm ml-1">({reviewCount})</span>
          </div>
          
          <div className="text-right">
            <span className="block font-semibold text-lg">${price}</span>
            <span className="text-gray-500 text-xs">{priceUnit}</span>
          </div>
        </div>
        
        <Button className="w-full mt-4 bg-bookeasy-orange hover:bg-bookeasy-orange/90">
          Book Now
        </Button>
      </div>
    </Card>
  );
};

export default SpaceCard;
