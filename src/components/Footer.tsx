import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Rainland_logo-1770867485318.png?width=8000&height=8000&resize=contain"
              alt="Rainland Resort"
              width={160}
              height={50}
              className="h-12 w-auto mb-4 brightness-200"
            />
            <p className="text-gray-400 text-sm leading-relaxed font-[family-name:var(--font-lato)]">
              Your fairy-tale retreat near Athirappilly Waterfalls. Experience
              the beauty of Kerala&apos;s green paradise.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 font-[family-name:var(--font-playfair)]">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Home", "About", "Rooms", "Amenities", "Testimonials"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-gray-400 hover:text-emerald-400 text-sm transition-colors font-[family-name:var(--font-lato)]"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4 font-[family-name:var(--font-playfair)]">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm font-[family-name:var(--font-lato)]">
                  +91 487 276 8001
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm font-[family-name:var(--font-lato)]">
                  info@rainlandathirappilly.com
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm font-[family-name:var(--font-lato)]">
                  Athirappilly, Chalakudy, Thrissur, Kerala 680721
                </span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold text-lg mb-4 font-[family-name:var(--font-playfair)]">
              Check-in / Check-out
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm font-[family-name:var(--font-lato)]">
                    Check-in: 12:00 PM
                  </p>
                  <p className="text-gray-400 text-sm font-[family-name:var(--font-lato)]">
                    Check-out: 11:00 AM
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm font-[family-name:var(--font-lato)]">
            &copy; {new Date().getFullYear()} Rainland Resort, Athirappilly. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
