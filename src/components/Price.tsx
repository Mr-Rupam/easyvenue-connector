import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Basic",
    price: "₹499",
    features: ["1 Event Listing", "Email Support", "Basic Analytics"],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "₹999",
    features: ["5 Event Listings", "Priority Support", "Advanced Analytics"],
    highlighted: true,
  },
  {
    name: "Premium",
    price: "₹1999",
    features: ["Unlimited Listings", "Dedicated Support", "All Features"],
    highlighted: false,
  },
];

export default function PricePlan() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-6 flex items-center justify-center">
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl w-full">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className={`rounded-2xl shadow-xl p-6 border ${
              plan.highlighted
                ? "bg-purple-700 text-white border-purple-500 scale-105"
                : "bg-gray-900 border-gray-800"
            }`}
          >
            <h2 className="text-2xl font-bold mb-4">{plan.name}</h2>
            <p className="text-4xl font-extrabold mb-6">{plan.price}</p>
            <ul className="space-y-2 mb-6">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  ✅ <span className="ml-2">{feature}</span>
                </li>
              ))}
            </ul>
            <Button className="w-full bg-white text-black hover:bg-gray-200 transition">
              Choose Plan
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
