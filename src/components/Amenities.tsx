"use client";

import { useState } from "react";
import Image from "next/image";
import { Waves, Flower2, Baby, UtensilsCrossed, ChevronDown, ChevronLeft, ChevronRight, X } from "lucide-react";

const amenities = [
  {
    // icon: Waves,
    title: "Infinity Pool",
    description:
      "Take a refreshing dip in our stunning infinity pool overlooking the lush green valley. Perfect for unwinding after a day of exploring the nearby waterfalls.",
    color: "bg-blue-50 text-blue-600",
    mainImage:
      "https://rainlandathirappilly.com/wp-content/uploads/2024/01/ERA06487-scaled.jpg",
    gallery: [
      "https://rainlandathirappilly.com/wp-content/uploads/2024/01/ERA06487-scaled.jpg",
      "https://rainlandathirappilly.com/wp-content/uploads/2024/01/ERA06487-scaled.jpg",
      "https://rainlandathirappilly.com/wp-content/uploads/2024/01/ERA06487-scaled.jpg",
    ],
  },
  {
    // icon: Flower2,
    title: "Butterfly Garden",
    description:
      "Stroll through our enchanting butterfly garden, home to a variety of colourful species. A serene spot for nature lovers and photography enthusiasts.",
    color: "bg-pink-50 text-pink-600",
    mainImage:
      "https://rainlandathirappilly.com/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-10-at-2.17.04-PM.webp",
    gallery: [
      "https://rainlandathirappilly.com/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-10-at-2.17.04-PM.webp",
      "https://rainlandathirappilly.com/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-10-at-2.17.04-PM.webp",
      "https://rainlandathirappilly.com/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-10-at-2.17.04-PM.webp",
    ],
  },
  {
    // icon: Baby,
    title: "Kids Play Area",
    description:
      "A safe and fun-filled play zone designed to keep the little ones entertained while parents relax. Features swings, slides, and outdoor games.",
    color: "bg-amber-50 text-amber-600",
    mainImage:
      "https://rainlandathirappilly.com/wp-content/uploads/2024/01/DSC05490-scaled.jpg",
    gallery: [
      "https://rainlandathirappilly.com/wp-content/uploads/2024/01/DSC05490-scaled.jpg",
      "https://rainlandathirappilly.com/wp-content/uploads/2024/01/DSC05490-scaled.jpg",
      "https://rainlandathirappilly.com/wp-content/uploads/2024/01/DSC05490-scaled.jpg",
    ],
  },
  {
    // icon: UtensilsCrossed,
    title: "Dining Area",
    description:
      "Savour authentic Kerala cuisine and multi-cuisine dishes at our in-house restaurant. Fresh ingredients and traditional recipes make every meal memorable.",
    color: "bg-emerald-50 text-emerald-600",
    mainImage:
      "https://rainlandathirappilly.com/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-10-at-2.17.11-PM-1.webp",
    gallery: [
      "https://rainlandathirappilly.com/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-10-at-2.17.11-PM-1.webp",
      "https://rainlandathirappilly.com/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-10-at-2.17.11-PM-1.webp",
      "https://rainlandathirappilly.com/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-10-at-2.17.11-PM-1.webp",
    ],
  },
];

function AmenityCard({
  amenity,
  isExpanded,
  onToggle,
}: {
  amenity: (typeof amenities)[0];
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col">
      {/* Main Card */}
      <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-stone-100">
        {/* Image */}
        <div className="relative h-64 overflow-hidden">
          <Image
            src={amenity.mainImage}
            alt={amenity.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div
            className={`absolute top-4 left-4 w-12 h-12 rounded-xl ${amenity.color} flex items-center justify-center backdrop-blur-sm`}
          >
            {/* <amenity.icon className="w-6 h-6" /> */}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2 font-[family-name:var(--font-playfair)]">
            {amenity.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-5 font-[family-name:var(--font-lato)]">
            {amenity.description}
          </p>
          <button
            onClick={onToggle}
            className="inline-flex items-center gap-2 text-emerald-700 font-semibold text-sm hover:text-emerald-800 transition-colors font-[family-name:var(--font-lato)] cursor-pointer"
          >
            {isExpanded ? "Hide Photos" : "View Photos"}
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Expandable Gallery - slides open below the card */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isExpanded ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"
        }`}
      >
        <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-semibold text-gray-700 font-[family-name:var(--font-lato)]">
              {amenity.title} Gallery
            </p>
            <p className="text-xs text-gray-400 font-[family-name:var(--font-lato)]">
              {amenity.gallery.length} photos
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {amenity.gallery.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setLightboxIndex(idx)}
                className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group/thumb"
              >
                <Image
                  src={img}
                  alt={`${amenity.title} ${idx + 1}`}
                  fill
                  className="object-cover group-hover/thumb:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover/thumb:bg-black/20 transition-colors duration-300" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(null);
            }}
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(
                lightboxIndex === 0 ? amenity.gallery.length - 1 : lightboxIndex - 1
              );
            }}
            className="absolute left-4 md:left-8 text-white/80 hover:text-white transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <div
            className="relative w-full max-w-4xl aspect-[16/10] rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={amenity.gallery[lightboxIndex]}
              alt={`${amenity.title} ${lightboxIndex + 1}`}
              fill
              className="object-cover"
            />
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(
                lightboxIndex === amenity.gallery.length - 1 ? 0 : lightboxIndex + 1
              );
            }}
            className="absolute right-4 md:right-8 text-white/80 hover:text-white transition-colors cursor-pointer"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          <div className="absolute bottom-6 text-white/70 text-sm font-[family-name:var(--font-lato)]">
            {lightboxIndex + 1} / {amenity.gallery.length}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Amenities() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

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
          {amenities.map((amenity, index) => (
            <AmenityCard
              key={amenity.title}
              amenity={amenity}
              isExpanded={expandedIndex === index}
              onToggle={() =>
                setExpandedIndex(expandedIndex === index ? null : index)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
