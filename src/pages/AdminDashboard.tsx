import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Trash2, PencilLine, PlusCircle } from "lucide-react";
import Navbar3 from "@/components/Navbar3";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";

const AdminDashboard = () => {
    const [events, setEvents] = useState([
        {
            id: 1,
            title: "Art & Music Night",
            image: "https://source.unsplash.com/400x250/?concert",
            time: "2025-04-25T19:00",
            price: 20,
            capacity: 50,
        },
        {
            id: 2,
            title: "Tech Talk 2025",
            image: "https://source.unsplash.com/400x250/?tech,conference",
            time: "2025-05-01T15:00",
            price: 0,
            capacity: 200,
        },
    ]);

    const [form, setForm] = useState({
        title: "",
        image: "",
        time: "",
        price: "",
        capacity: "",
    });
    const [editingEvent, setEditingEvent] = useState(null);
    const [confirmDeleteId, setConfirmDeleteId] = useState<number | null>(null);

    const handleSave = () => {
        if (editingEvent) {
            setEvents(events.map((e) => (e.id === editingEvent.id ? { ...editingEvent, ...form } : e)));
            setEditingEvent(null);
        } else {
            setEvents([...events, { ...form, id: Date.now() }]);
        }
        setForm({ title: "", image: "", time: "", price: "", capacity: "" });
    };

    const handleDelete = () => {
        if (confirmDeleteId !== null) {
            setEvents(events.filter((e) => e.id !== confirmDeleteId));
            setConfirmDeleteId(null);
        }
    };

    return (
        <div className="min-h-screen bg-bookeasy-lightgray">
            <Navbar3 />
            <div className="max-w-7xl mx-auto px-6 pt-10">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold text-bookeasy-navy">
                        Event Management Panel
                    </h1>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button className="flex gap-2">
                                <PlusCircle size={18} /> Add Event
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-md">
                            <h2 className="text-lg font-semibold mb-4">Add New Event</h2>
                            <div className="space-y-4">
                                {["title", "image", "time", "price", "capacity"].map((field) => (
                                    <div key={field}>
                                        <Label className="capitalize">{field}</Label>
                                        <Input
                                            type={field === "time" ? "datetime-local" : "text"}
                                            value={form[field]}
                                            onChange={(e) =>
                                                setForm({ ...form, [field]: e.target.value })
                                            }
                                        />
                                    </div>
                                ))}
                                <Button className="w-full" onClick={handleSave}>
                                    Save
                                </Button>
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {events.map((event) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="transition-all duration-300"
                        >
                            <Card className="overflow-hidden shadow-lg hover:shadow-xl hover:scale-[1.02] transition-transform duration-300 cursor-pointer">
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="h-48 w-full object-cover"
                                />
                                <CardContent className="p-4">
                                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                                    <p className="text-sm text-muted-foreground mb-1">
                                        🕒 {new Date(event.time).toLocaleString()}
                                    </p>
                                    <p className="text-sm text-muted-foreground mb-1">
                                        🎟 Price: ₹{event.price}
                                    </p>
                                    <p className="text-sm text-muted-foreground mb-3">
                                        🧑‍🤝‍🧑 Capacity: {event.capacity}
                                    </p>
                                    <div className="flex gap-2">
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="flex items-center gap-1"
                                            onClick={() => {
                                                setEditingEvent(event);
                                                setForm(event);
                                            }}
                                        >
                                            <PencilLine size={16} /> Edit
                                        </Button>
                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <Button
                                                    variant="destructive"
                                                    size="sm"
                                                    className="flex items-center gap-1"
                                                    onClick={() => setConfirmDeleteId(event.id)}
                                                >
                                                    <Trash2 size={16} /> Delete
                                                </Button>
                                            </DialogTrigger>
                                            <DialogContent className="max-w-sm">
                                                <div className="space-y-4">
                                                    <h2 className="text-lg font-semibold text-bookeasy-navy">
                                                        Confirm Deletion
                                                    </h2>
                                                    <p className="text-sm text-muted-foreground">
                                                        Are you sure you want to delete{" "}
                                                        <strong>{event.title}</strong>?
                                                    </p>
                                                    <div className="flex justify-end gap-2">
                                                        <Button
                                                            variant="ghost"
                                                            onClick={() => setConfirmDeleteId(null)}
                                                        >
                                                            Cancel
                                                        </Button>
                                                        <Button variant="destructive" onClick={handleDelete}>
                                                            Confirm Delete
                                                        </Button>
                                                    </div>
                                                </div>
                                            </DialogContent>
                                        </Dialog>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* 🔁 Modal for Editing */}
                {editingEvent && (
                    <Dialog open={true} onOpenChange={() => setEditingEvent(null)}>
                        <DialogContent className="max-w-md">
                            <h2 className="text-lg font-semibold mb-4">Edit Event</h2>
                            <div className="space-y-4">
                                {["title", "image", "time", "price", "capacity"].map((field) => (
                                    <div key={field}>
                                        <Label className="capitalize">{field}</Label>
                                        <Input
                                            type={field === "time" ? "datetime-local" : "text"}
                                            value={form[field]}
                                            onChange={(e) =>
                                                setForm({ ...form, [field]: e.target.value })
                                            }
                                        />
                                    </div>
                                ))}
                                <Button className="w-full" onClick={handleSave}>
                                    Update
                                </Button>
                            </div>
                        </DialogContent>
                    </Dialog>
                )}
            </div>
        </div>
    );
};

export default AdminDashboard;
