import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar3 from "@/components/Navbar3";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MyBookings = () => {
    const [bookings, setBookings] = useState([
        // Sample data (can be empty array for no bookings)
        {
            id: 1,
            title: "Photography Workshop",
            image: "https://source.unsplash.com/400x250/?photography",
            time: "2025-04-15T14:00",
            location: "City Art Center",
        },
    ]);

    return (
        <div className="min-h-screen bg-bookeasy-lightgray">
            <Navbar3 />
            <div className="max-w-7xl mx-auto px-6 py-8">
                <h1 className="text-3xl font-bold text-bookeasy-navy mb-6">
                    My Bookings
                </h1>

                {bookings.length === 0 ? (
                    <div className="text-center mt-20">
                        <h2 className="text-xl font-medium text-bookeasy-navy">
                            You haven’t booked any events yet.
                        </h2>
                        <p className="text-muted-foreground mt-2 mb-4">
                            Start exploring and make your bookings now!
                        </p>
                        <Button asChild className="bg-bookeasy-teal text-white">
                            <Link to="/">Browse Events</Link>
                        </Button>
                    </div>
                ) : (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {bookings.map((booking) => (
                            <motion.div
                                key={booking.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="transition-all duration-300"
                            >
                                <Card className="overflow-hidden shadow-md hover:scale-[1.02] hover:shadow-xl transition-transform duration-300">
                                    <img
                                        src={booking.image}
                                        alt={booking.title}
                                        className="h-48 w-full object-cover"
                                    />
                                    <CardContent className="p-4">
                                        <h3 className="text-xl font-semibold mb-1">
                                            {booking.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground mb-1">
                                            🕒 {new Date(booking.time).toLocaleString()}
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            📍 {booking.location}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyBookings;
