import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar3 = () => {
    const location = useLocation();

    // Hide Navbar3 on auth pages
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

                {/* Profile Avatar */}
                <Link to="/profile">
                    <img
                        src="https://i.pravatar.cc/40" // replace with your user's avatar if needed
                        alt="Profile"
                        className="w-10 h-10 rounded-full border-2 border-bookeasy-teal object-cover cursor-pointer"
                    />
                </Link>
            </div>
        </nav>
    );
};

export default Navbar3;
