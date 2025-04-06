import React from "react";

const AdminDashboard = () => {
    return (
        <div className="min-h-screen bg-bookeasy-lightgray p-10">
            <h1 className="text-3xl font-bold text-bookeasy-navy mb-4">Admin Dashboard</h1>
            <p className="text-lg text-muted-foreground">
                Welcome, Admin! You can manage bookings, venues, and users from here.
            </p>
        </div>
    );
};

export default AdminDashboard;
