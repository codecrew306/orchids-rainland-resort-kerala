"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const slides = [
  {
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/resort_front_image-1770867485318.jpeg?width=8000&height=8000&resize=contain",
    title: "Welcome to Rainland Resort",
    subtitle: "A fairy-tale retreat near Athirappilly Waterfalls",
  },
  {
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/resort_image_1-1770867485340.webp?width=8000&height=8000&resize=contain",
    title: "Breathtaking Views",
    subtitle: "Wake up to the sound of cascading waterfalls",
  },
  {
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Deluxe-kings-room3-resized-1770867485345.jpeg?width=8000&height=8000&resize=contain",
    title: "Comfort & Elegance",
    subtitle: "Spacious rooms designed for your perfect getaway",
  },
];

export default function Hero({ onBookClick }: { onBookClick: () => void }) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={i === 0}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h1
          key={current}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in font-[family-name:var(--font-playfair)]"
        >
          {slides[current].title}
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl font-light mb-10 max-w-2xl animate-fade-in font-[family-name:var(--font-lato)]">
          {slides[current].subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onBookClick}
              className="bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-3 rounded-full text-base font-semibold tracking-wide transition-all font-[family-name:var(--font-lato)]"
            >
              Book Your Stay
            </button>
            <a
              href="#rooms"
              className="border-2 border-white/70 hover:border-white hover:bg-white/10 text-white px-8 py-3 rounded-full text-base font-semibold tracking-wide transition-all font-[family-name:var(--font-lato)]"
            >
              Explore Rooms
            </a>
          </div>

        {/* Slide indicators */}
        <div className="absolute bottom-10 flex gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === current ? "bg-white scale-110" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
