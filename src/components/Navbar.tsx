"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Rooms", href: "#rooms" },
  { label: "Amenities", href: "#amenities" },
  { label: "Why Choose Us", href: "#why-choose" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Navbar({ onBookClick }: { onBookClick: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="#home" className="flex items-center gap-2">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Rainland_logo-1770867485318.png?width=8000&height=8000&resize=contain"
            alt="Rainland Resort"
            width={160}
            height={50}
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors font-[family-name:var(--font-lato)] ${
                scrolled
                  ? "text-gray-700 hover:text-emerald-700"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={onBookClick}
            className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all font-[family-name:var(--font-lato)]"
          >
            Book Now
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden flex flex-col gap-1.5"
        >
          <span
            className={`block w-6 h-0.5 transition-all ${
              scrolled ? "bg-gray-800" : "bg-white"
            }`}
          />
          <span
            className={`block w-6 h-0.5 transition-all ${
              scrolled ? "bg-gray-800" : "bg-white"
            }`}
          />
          <span
            className={`block w-6 h-0.5 transition-all ${
              scrolled ? "bg-gray-800" : "bg-white"
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white shadow-lg border-t">
          <div className="flex flex-col p-6 gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-gray-700 hover:text-emerald-700 text-sm font-medium font-[family-name:var(--font-lato)]"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileOpen(false);
                onBookClick();
              }}
              className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-2.5 rounded-full text-sm font-semibold font-[family-name:var(--font-lato)]"
            >
              Book Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
