"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export default function BookingModal({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    roomType: "Deluxe",
    checkIn: "",
    checkOut: "",
    guests: "1",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onOpenChange(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        roomType: "Deluxe",
        checkIn: "",
        checkOut: "",
        guests: "1",
        message: "",
      });
    }, 2500);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-[family-name:var(--font-playfair)] text-2xl text-emerald-800">
            Book Your Stay
          </DialogTitle>
          <DialogDescription className="font-[family-name:var(--font-lato)]">
            Fill in the details below and we&apos;ll get back to you with room
            availability.
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="py-10 text-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-emerald-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 font-[family-name:var(--font-playfair)]">
              Query Submitted!
            </h3>
            <p className="text-gray-500 mt-2 font-[family-name:var(--font-lato)] text-sm">
              We&apos;ll check availability and respond to your email shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 font-[family-name:var(--font-lato)]">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none font-[family-name:var(--font-lato)]"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 font-[family-name:var(--font-lato)]">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none font-[family-name:var(--font-lato)]"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 font-[family-name:var(--font-lato)]">
                  Phone
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none font-[family-name:var(--font-lato)]"
                  placeholder="+91 98765 43210"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 font-[family-name:var(--font-lato)]">
                  Room Type *
                </label>
                <select
                  required
                  value={formData.roomType}
                  onChange={(e) =>
                    setFormData({ ...formData, roomType: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none font-[family-name:var(--font-lato)]"
                >
                  <option>Deluxe</option>
                  <option>Deluxe Queen</option>
                  <option>Deluxe King</option>
                  <option>Superior Family Room</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 font-[family-name:var(--font-lato)]">
                  Check-in Date *
                </label>
                <input
                  type="date"
                  required
                  value={formData.checkIn}
                  onChange={(e) =>
                    setFormData({ ...formData, checkIn: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none font-[family-name:var(--font-lato)]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 font-[family-name:var(--font-lato)]">
                  Check-out Date *
                </label>
                <input
                  type="date"
                  required
                  value={formData.checkOut}
                  onChange={(e) =>
                    setFormData({ ...formData, checkOut: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none font-[family-name:var(--font-lato)]"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 font-[family-name:var(--font-lato)]">
                Number of Guests
              </label>
              <select
                value={formData.guests}
                onChange={(e) =>
                  setFormData({ ...formData, guests: e.target.value })
                }
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none font-[family-name:var(--font-lato)]"
              >
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? "Guest" : "Guests"}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 font-[family-name:var(--font-lato)]">
                Additional Message
              </label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none resize-none font-[family-name:var(--font-lato)]"
                placeholder="Any special requests or questions..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-700 hover:bg-emerald-800 text-white py-3 rounded-lg text-sm font-semibold tracking-wide transition-all font-[family-name:var(--font-lato)]"
            >
              Send Booking Query
            </button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
