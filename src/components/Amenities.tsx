"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const amenities = [
  {
    title: "Infinity Pool",
    description:
      "Take a refreshing dip in our stunning infinity pool overlooking the lush green valley. Perfect for unwinding after a day of exploring the nearby waterfalls.",
    images: [
      "https://rainlandathirappilly.com/wp-content/uploads/2024/01/ERA06487-scaled.jpg",
      "https://rainlandathirappilly.com/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-10-at-2.17.35-PM-1-1.webp",
      "https://rainlandathirappilly.com/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-10-at-2.17.06-PM.webp",
    ],
  },
  {
    title: "Butterfly Garden",
    description:
      "Stroll through our enchanting butterfly garden, home to a variety of colourful species. A serene spot for nature lovers and photography enthusiasts.",
    images: [
      "https://rainlandathirappilly.com/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-10-at-2.17.04-PM.webp",
      "https://i.ytimg.com/vi/PX00050CYb8/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGEUgZSglMA8=&rs=AOn4CLCrsetmt828DCoNF1SxJvFhgYIttQ",
      "https://rainlandathirappilly.com/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-10-at-2.17.04-PM.webp",
    ],
  },
  {
    title: "Kids Play Area",
    description:
      "A safe and fun-filled play zone designed to keep the little ones entertained while parents relax. Features swings, slides, and outdoor games.",
    images: [
      "https://rainlandathirappilly.com/wp-content/uploads/2024/01/DSC05490-scaled.jpg",
      "https://rainlandathirappilly.com/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-03-at-12.28.33-PM-2048x1365.jpeg",
      "https://rainlandathirappilly.com/wp-content/uploads/2024/01/DSC05490-scaled.jpg",
    ],
  },
  {
    title: "Dining Area",
    description:
      "Savour authentic Kerala cuisine and multi-cuisine dishes at our in-house restaurant. Fresh ingredients and traditional recipes make every meal memorable.",
    images: [
      "https://rainlandathirappilly.com/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-10-at-2.17.11-PM-1.webp",
      "https://rainlandathirappilly.com/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-10-at-2.17.11-PM-1.webp",
      "https://rainlandathirappilly.com/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-10-at-2.17.11-PM-1.webp",
    ],
  },
];

function AmenityCard({ amenity }: { amenity: (typeof amenities)[0] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () =>
    setCurrentIndex(
      currentIndex === 0 ? amenity.images.length - 1 : currentIndex - 1
    );
  const next = () =>
    setCurrentIndex(
      currentIndex === amenity.images.length - 1 ? 0 : currentIndex + 1
    );

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-stone-100">
      {/* Image Carousel */}
      <div className="relative h-72 overflow-hidden">
        {amenity.images.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-500 ${
              idx === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={img}
              alt={`${amenity.title} ${idx + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}

        {/* Gradient overlay at bottom for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

        {/* Left Arrow */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5 text-gray-800" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
        >
          <ChevronRight className="w-5 h-5 text-gray-800" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {amenity.images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentIndex
                  ? "bg-white w-5"
                  : "bg-white/50 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 font-[family-name:var(--font-playfair)]">
          {amenity.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed font-[family-name:var(--font-lato)]">
          {amenity.description}
        </p>
      </div>
    </div>
  );
}

export default function Amenities() {
  return (
    <section id="amenities" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-emerald-700 font-semibold text-sm tracking-widest uppercase mb-3 font-[family-name:var(--font-lato)]">
            Amenities
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-[family-name:var(--font-playfair)]">
            Everything You Need
          </h2>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {amenities.map((amenity) => (
            <AmenityCard key={amenity.title} amenity={amenity} />
          ))}
        </div>
      </div>
    </section>
  );
}
