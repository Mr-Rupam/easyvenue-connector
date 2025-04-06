// pages/Customer.jsx
import CustomerSays from "../components/CustomerSays";

const Customer = () => {
    return (
        <div className="min-h-screen bg-gray-950 text-white p-6">
            <h1 className="text-3xl font-bold mb-4">Welcome, Customer 👋</h1>
            <CustomerSays />
        </div>
    );
};

export default Customer;
