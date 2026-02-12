import { Waves, Flower2, Baby, UtensilsCrossed, MapPin } from "lucide-react";

const amenities = [
  {
    icon: Waves,
    title: "Infinity Pool",
    description:
      "Take a refreshing dip in our stunning infinity pool overlooking the lush green valley. Perfect for unwinding after a day of exploring the nearby waterfalls.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Flower2,
    title: "Butterfly Garden",
    description:
      "Stroll through our enchanting butterfly garden, home to a variety of colourful species. A serene spot for nature lovers and photography enthusiasts.",
    color: "bg-pink-50 text-pink-600",
  },
  {
    icon: Baby,
    title: "Kids Play Area",
    description:
      "A safe and fun-filled play zone designed to keep the little ones entertained while parents relax. Features swings, slides, and outdoor games.",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: UtensilsCrossed,
    title: "Dining Area",
    description:
      "Savour authentic Kerala cuisine and multi-cuisine dishes at our in-house restaurant. Fresh ingredients and traditional recipes make every meal memorable.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: MapPin,
    title: "Travel Assistance",
    description:
      "Our dedicated travel desk helps you plan excursions to Athirappilly Falls, Vazhachal Falls, Sholayar Dam, and other nearby attractions with ease.",
    color: "bg-purple-50 text-purple-600",
  },
];

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

        {/* Irregular grid: 2 on top, 3 on bottom */}
        <div className="space-y-6">
          {/* Top row - 2 items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {amenities.slice(0, 2).map((amenity) => (
              <div
                key={amenity.title}
                className="group bg-stone-50 rounded-2xl p-10 hover:shadow-xl transition-all duration-300 border border-stone-100 hover:border-emerald-100"
              >
                <div
                  className={`w-16 h-16 rounded-2xl ${amenity.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <amenity.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-[family-name:var(--font-playfair)]">
                  {amenity.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-[family-name:var(--font-lato)]">
                  {amenity.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom row - 3 items */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {amenities.slice(2).map((amenity) => (
              <div
                key={amenity.title}
                className="group bg-stone-50 rounded-2xl p-10 hover:shadow-xl transition-all duration-300 border border-stone-100 hover:border-emerald-100"
              >
                <div
                  className={`w-16 h-16 rounded-2xl ${amenity.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <amenity.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-[family-name:var(--font-playfair)]">
                  {amenity.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-[family-name:var(--font-lato)]">
                  {amenity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
