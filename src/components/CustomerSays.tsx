import { motion } from "framer-motion";

const testimonials = [
    {
        name: "Aarav Mehta",
        role: "Event Organizer",
        quote:
            "BookEasy helped me get more customers in a week than I used to get in a month. Super intuitive and fast!",
        avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
        name: "Priya Sharma",
        role: "Wedding Planner",
        quote:
            "The platform is beautifully designed. I can manage all my bookings and communicate easily with clients.",
        avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
        name: "Ravi Kumar",
        role: "Venue Owner",
        quote:
            "Thanks to BookEasy, I’ve doubled my weekend bookings. The analytics tools are very helpful too!",
        avatar: "https://i.pravatar.cc/150?img=3",
    },
];

export default function CustomerSays() {
    return (
        <div className="bg-gray-950 text-white py-16 px-6">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
                <p className="text-gray-400 mb-12">
                    Real experiences from people who use BookEasy to grow their business.
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.3 }}
                            className="bg-gray-900 rounded-2xl p-6 shadow-md border border-gray-800"
                        >
                            <div className="flex items-center mb-4">
                                <img
                                    src={t.avatar}
                                    alt={t.name}
                                    className="w-12 h-12 rounded-full mr-4"
                                />
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">{t.name}</h4>
                                    <p className="text-sm text-gray-400">{t.role}</p>
                                </div>
                            </div>
                            <p className="text-gray-300 italic">“{t.quote}”</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
