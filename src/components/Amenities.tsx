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
      "https://rainlandathirappilly.com/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-10-at-2.17.05-PM-2.webp",
    ],
  },
  {
    title: "Butterfly Garden",
    description:
      "Stroll through our enchanting butterfly garden, home to a variety of colourful species. A serene spot for nature lovers and photography enthusiasts.",
    images: [
      "https://rainlandathirappilly.com/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-10-at-2.17.04-PM.webp",
      "https://i.ytimg.com/vi/PX00050CYb8/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGEUgZSglMA8=&rs=AOn4CLCrsetmt828DCoNF1SxJvFhgYIttQ",
    ],
  },
  {
    title: "Kids Play Area",
    description:
      "A safe and fun-filled play zone designed to keep the little ones entertained while parents relax. Features swings, slides, and outdoor games.",
    images: [
      "https://rainlandathirappilly.com/wp-content/uploads/2024/01/DSC05490-scaled.jpg",
      "https://rainlandathirappilly.com/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-03-at-12.28.33-PM-2048x1365.jpeg",
    ],
  },
  {
    title: "Dining Area",
    description:
      "Savour authentic Kerala cuisine and multi-cuisine dishes at our in-house restaurant. Fresh ingredients and traditional recipes make every meal memorable.",
    images: [
      "https://rainlandathirappilly.com/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-10-at-2.17.11-PM-1.webp",
      // "https://rainlandathirappilly.com/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-10-at-2.17.11-PM-1.webp",
      // "https://rainlandathirappilly.com/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-10-at-2.17.11-PM-1.webp",
    ],
  },
];

function AmenityCard({ amenity }: { amenity: (typeof amenities)[0] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((i) =>
      i === 0 ? amenity.images.length - 1 : i - 1
    );
  };

  const next = () => {
    setCurrentIndex((i) =>
      i === amenity.images.length - 1 ? 0 : i + 1
    );
  };

  return (
    <div className="group bg-stone-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-stone-100 hover:border-emerald-100">
      {/* Image Carousel */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={amenity.images[currentIndex]}
          alt={`${amenity.title} - Photo ${currentIndex + 1}`}
          fill
          className="object-cover transition-all duration-500"
          sizes="(max-width: 768px) 100vw, 50vw"
          unoptimized
        />

        {/* Left Arrow */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-gray-700 hover:bg-white hover:scale-110 transition-all shadow-md opacity-0 group-hover:opacity-100"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-gray-700 hover:bg-white hover:scale-110 transition-all shadow-md opacity-0 group-hover:opacity-100"
          aria-label="Next image"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {amenity.images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === currentIndex
                  ? "bg-white w-5"
                  : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to image ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Text Content */}
      <div className="p-8">
        <h3 className="text-xl font-bold text-gray-900 mb-3 font-[family-name:var(--font-playfair)]">
          {amenity.title}
        </h3>
        <p className="text-gray-600 leading-relaxed font-[family-name:var(--font-lato)]">
          {amenity.description}
        </p>
      </div>
    </div>
  );
}

export default function Amenities() {
  return (
    <section id="amenities" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-emerald-700 font-semibold text-sm tracking-widest uppercase mb-3 font-[family-name:var(--font-lato)]">
            Amenities
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-[family-name:var(--font-playfair)]">
            Everything You Need
          </h2>
        </div>

        {/* 2x2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {amenities.map((amenity) => (
            <AmenityCard key={amenity.title} amenity={amenity} />
          ))}
        </div>
      </div>
    </section>
  );
}
