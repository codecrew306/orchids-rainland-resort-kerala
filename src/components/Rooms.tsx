"use client";

import { useState } from "react";
import Image from "next/image";
import { Bed, Users, Maximize, Wifi, Wind, Tv, ChevronLeft, ChevronRight, X } from "lucide-react";

const rooms = [
  {
    name: "Deluxe Room",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Deluxe-kings-room-resized-1770867485352.jpeg?width=8000&height=8000&resize=contain",
    beds: "1 Double Bed",
    guests: "2 Adults",
    size: "250 sq.ft",
    description:
      "A cozy and well-furnished room perfect for couples or solo travellers. Enjoy modern comforts with scenic views of the surrounding greenery.",
    features: ["Free Wi-Fi", "AC", "LED TV", "Attached Bathroom"],
    gallery: [
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Deluxe-kings-room-resized-1770867485352.jpeg?width=8000&height=8000&resize=contain",
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Deluxe-kings-room3-resized-1770867485345.jpeg?width=8000&height=8000&resize=contain",
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Deluxe-kings-room2-resized-1770867485358.jpeg?width=8000&height=8000&resize=contain",
    ],
  },
  {
    name: "Deluxe Queen Room",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Deluxe-kings-room-resized-1770867485352.jpeg?width=8000&height=8000&resize=contain",
    beds: "1 Queen Bed",
    guests: "2 Adults, 1 Child",
    size: "300 sq.ft",
    description:
      "Spacious and elegant, the Deluxe Queen room offers extra space and comfort. Ideal for small families looking for a relaxing stay amidst nature.",
    features: ["Free Wi-Fi", "AC", "LED TV", "Mini Fridge"],
    gallery: [
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Deluxe-kings-room-resized-1770867485352.jpeg?width=8000&height=8000&resize=contain",
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/resort_image_1-1770867485340.webp?width=8000&height=8000&resize=contain",
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Deluxe-kings-room2-resized-1770867485358.jpeg?width=8000&height=8000&resize=contain",
    ],
  },
  {
    name: "Deluxe King Room",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Deluxe-kings-room3-resized-1770867485345.jpeg?width=8000&height=8000&resize=contain",
    beds: "1 King Bed + Sofa",
    guests: "2 Adults, 1 Child",
    size: "350 sq.ft",
    description:
      "Our premium room with a king-sized bed and a comfortable sofa seating area. Features a spacious layout with panoramic views of the hills.",
    features: ["Free Wi-Fi", "AC", "LED TV", "Seating Area"],
    gallery: [
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Deluxe-kings-room3-resized-1770867485345.jpeg?width=8000&height=8000&resize=contain",
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Deluxe-kings-room-resized-1770867485352.jpeg?width=8000&height=8000&resize=contain",
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/resort_front_image-1770867485318.jpeg?width=8000&height=8000&resize=contain",
    ],
  },
  {
    name: "Superior Family Room",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Deluxe-kings-room2-resized-1770867485358.jpeg?width=8000&height=8000&resize=contain",
    beds: "1 King Bed + 2 Singles",
    guests: "4 Adults, 2 Children",
    size: "500 sq.ft",
    description:
      "A generously sized family room with separate living and sleeping areas. Perfect for families wanting extra room to spread out and enjoy their holiday.",
    features: ["Free Wi-Fi", "AC", "LED TV", "Living Area"],
    gallery: [
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Deluxe-kings-room2-resized-1770867485358.jpeg?width=8000&height=8000&resize=contain",
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Deluxe-kings-room3-resized-1770867485345.jpeg?width=8000&height=8000&resize=contain",
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/resort_image_1-1770867485340.webp?width=8000&height=8000&resize=contain",
    ],
  },
];

function FeatureIcon({ feature }: { feature: string }) {
  if (feature.includes("Wi-Fi")) return <Wifi className="w-4 h-4" />;
  if (feature.includes("AC")) return <Wind className="w-4 h-4" />;
  if (feature.includes("TV")) return <Tv className="w-4 h-4" />;
  return <span className="w-4 h-4 rounded-full bg-emerald-200 inline-block" />;
}

function RoomGalleryModal({
  room,
  onClose,
}: {
  room: (typeof rooms)[0];
  onClose: () => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () =>
    setCurrentIndex((i) => (i - 1 + room.gallery.length) % room.gallery.length);
  const next = () =>
    setCurrentIndex((i) => (i + 1) % room.gallery.length);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl overflow-hidden max-w-4xl w-[95%] mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h3 className="text-xl font-bold text-gray-900 font-[family-name:var(--font-playfair)]">
            {room.name}
          </h3>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Image */}
        <div className="relative aspect-[16/10] bg-gray-100">
          <Image
            src={room.gallery[currentIndex]}
            alt={`${room.name} - Photo ${currentIndex + 1}`}
            fill
            className="object-cover"
          />

          {/* Navigation arrows */}
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all"
          >
            <ChevronLeft className="w-5 h-5 text-gray-800" />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all"
          >
            <ChevronRight className="w-5 h-5 text-gray-800" />
          </button>
        </div>

        {/* Thumbnails */}
        <div className="flex gap-2 p-4 justify-center">
          {room.gallery.map((img, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`relative w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                i === currentIndex
                  ? "border-emerald-600 opacity-100"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={img}
                alt={`Thumbnail ${i + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>

        {/* Counter */}
        <div className="text-center pb-4 text-sm text-gray-500 font-[family-name:var(--font-lato)]">
          {currentIndex + 1} / {room.gallery.length}
        </div>
      </div>
    </div>
  );
}

export default function Rooms({ onBookClick }: { onBookClick: () => void }) {
  const [viewingRoom, setViewingRoom] = useState<(typeof rooms)[0] | null>(null);

  return (
    <>
      <section id="rooms" className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-emerald-700 font-semibold text-sm tracking-widest uppercase mb-3 font-[family-name:var(--font-lato)]">
              Our Rooms
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-[family-name:var(--font-playfair)]">
              Choose Your Perfect Stay
            </h2>
          </div>

          <div className="space-y-8">
            {rooms.map((room, i) => (
              <div
                key={room.name}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Image */}
                <div className="lg:w-1/2 relative">
                  <Image
                    src={room.image}
                    alt={room.name}
                    width={700}
                    height={450}
                    className="w-full h-72 lg:h-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-[family-name:var(--font-playfair)]">
                    {room.name}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed font-[family-name:var(--font-lato)]">
                    {room.description}
                  </p>

                  <div className="flex flex-wrap gap-6 mb-6">
                    <div className="flex items-center gap-2 text-gray-700">
                      <Bed className="w-5 h-5 text-emerald-600" />
                      <span className="text-sm font-[family-name:var(--font-lato)]">
                        {room.beds}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <Users className="w-5 h-5 text-emerald-600" />
                      <span className="text-sm font-[family-name:var(--font-lato)]">
                        {room.guests}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <Maximize className="w-5 h-5 text-emerald-600" />
                      <span className="text-sm font-[family-name:var(--font-lato)]">
                        {room.size}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 mb-8">
                    {room.features.map((f) => (
                      <span
                        key={f}
                        className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-full text-xs font-medium font-[family-name:var(--font-lato)]"
                      >
                        <FeatureIcon feature={f} />
                        {f}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={onBookClick}
                      className="bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-3 rounded-full text-sm font-semibold tracking-wide transition-all font-[family-name:var(--font-lato)]"
                    >
                      Book This Room
                    </button>
                    <button
                      onClick={() => setViewingRoom(room)}
                      className="border-2 border-emerald-700 text-emerald-700 hover:bg-emerald-50 px-8 py-3 rounded-full text-sm font-semibold tracking-wide transition-all font-[family-name:var(--font-lato)]"
                    >
                      View Room
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {viewingRoom && (
        <RoomGalleryModal
          room={viewingRoom}
          onClose={() => setViewingRoom(null)}
        />
      )}
    </>
  );
}
