"use client";

import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Arun Menon",
    location: "Kochi, Kerala",
    text: "Amazing stay! The views of Athirappilly Falls from the resort are absolutely breathtaking. The staff was very welcoming and helpful throughout our trip.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    location: "Bangalore, Karnataka",
    text: "We had a wonderful family vacation at Rainland. The kids loved the play area and the butterfly garden. The rooms were clean and comfortable.",
    rating: 5,
  },
  {
    name: "Rajesh Kumar",
    location: "Chennai, Tamil Nadu",
    text: "Perfect getaway from the city. The infinity pool with the valley view is the highlight. Food was excellent, especially the Kerala meals.",
    rating: 4,
  },
  {
    name: "Sneha Nair",
    location: "Thrissur, Kerala",
    text: "One of the best resorts near Athirappilly. Very peaceful and surrounded by nature. Will definitely come back again for another relaxing weekend.",
    rating: 5,
  },
  {
    name: "Mohammed Fahad",
    location: "Kozhikode, Kerala",
    text: "Great value for money. The Deluxe King room was spacious and well-maintained. The travel desk helped us plan a great itinerary around Athirappilly.",
    rating: 4,
  },
  {
    name: "Deepa Pillai",
    location: "Trivandrum, Kerala",
    text: "Beautiful resort with warm hospitality. The dining area serves some of the best traditional Kerala food I have had. Truly a memorable experience!",
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < count ? "text-amber-400 fill-amber-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const doubled = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-24 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="text-center">
          <p className="text-emerald-700 font-semibold text-sm tracking-widest uppercase mb-3 font-[family-name:var(--font-lato)]">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-[family-name:var(--font-playfair)]">
            What Our Guests Say
          </h2>
        </div>
      </div>

      <div className="relative">
        <div className="animate-scroll-left flex gap-6 w-max">
          {doubled.map((t, i) => (
            <div
              key={i}
              className="w-[350px] flex-shrink-0 bg-white rounded-2xl p-8 shadow-md border border-stone-100"
            >
              <Stars count={t.rating} />
              <p className="text-gray-600 mt-4 mb-6 leading-relaxed text-sm font-[family-name:var(--font-lato)]">
                &ldquo;{t.text}&rdquo;
              </p>
              <div>
                <p className="font-semibold text-gray-900 font-[family-name:var(--font-playfair)]">
                  {t.name}
                </p>
                <p className="text-sm text-gray-500 font-[family-name:var(--font-lato)]">
                  {t.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
