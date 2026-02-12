import Image from "next/image";
import { Crown, ChefHat, Star } from "lucide-react";

const reasons = [
  {
    icon: Crown,
    title: "Luxury Rooms",
    text: "We believe in functioning in harmony with nature. When that's achieved, everything comes to its place \u2013 this is the least you'll experience by staying here.",
  },
  {
    icon: ChefHat,
    title: "Best Cuisine",
    text: "Enjoy delicious meals at our resort, known for the best cuisine. Treat yourself to a delightful culinary experience, where every dish is a blend of taste and luxury.",
  },
  {
    icon: Star,
    title: "Quality Service",
    text: "One of the basic philosophy for any kind of holiday and pleasure is quality \u2013 every thing must be set for your comfort, satisfaction and memorable experience.",
  },
];

export default function WhyChoose() {
  return (
    <section id="why-choose" className="relative py-24 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/resort_image_1-1770867485340.webp?width=8000&height=8000&resize=contain"
          alt="Resort background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-emerald-900/85" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-emerald-300 font-semibold text-sm tracking-widest uppercase mb-3 font-[family-name:var(--font-lato)]">
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-[family-name:var(--font-playfair)]">
            What Makes Us Special
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-white/20 hover:bg-white/15 transition-all"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-500/30 flex items-center justify-center mx-auto mb-6">
                <reason.icon className="w-8 h-8 text-emerald-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 font-[family-name:var(--font-playfair)]">
                {reason.title}
              </h3>
              <p className="text-white/80 leading-relaxed font-[family-name:var(--font-lato)]">
                {reason.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
