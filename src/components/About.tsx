import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/resort_front_image-1770867485318.jpeg?width=8000&height=8000&resize=contain"
                alt="Rainland Resort"
                width={600}
                height={450}
                className="w-full h-[450px] object-cover"
              />
            </div>
            {/* Accent decoration */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-emerald-100 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-emerald-50 rounded-2xl -z-10" />
          </div>

          {/* Text side */}
          <div>
            <p className="text-emerald-700 font-semibold text-sm tracking-widest uppercase mb-3 font-[family-name:var(--font-lato)]">
              About Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-[family-name:var(--font-playfair)] leading-snug">
              Your Gateway to Magical Escapes in Athirappilly
            </h2>
            <p className="text-gray-600 leading-relaxed text-base font-[family-name:var(--font-lato)]">
              Nestled in the lush hills of Athirappilly, Rainland Resort beckons
              you to a fairy-tale retreat just 800m from Athirappilli waterfalls.
              Offering unparalleled views of Athirappilly Falls and serene
              landscapes, our resort is a haven for Vacationers seeking premium
              luxury amidst nature&apos;s splendor. As the best accommodation in
              Athirappilly, Rainland Resort provides an idyllic escape, blending
              the charm of a fairy-tale castle with unspoiled natural beauty.
            </p>
            <p className="text-gray-600 leading-relaxed text-base mt-4 font-[family-name:var(--font-lato)]">
              Immerse yourself in the allure of Athirappilly at Rainland Resort,
              where tranquility meets luxury in the heart of Kerala. Book your
              stay and let the spellbinding landscapes create lasting memories in
              this picturesque haven. Welcome to Rainland Resort &ndash; your
              gateway to magical escapes in Athirappilly.
            </p>
            <div className="mt-8 flex gap-8">
              <div>
                <p className="text-3xl font-bold text-emerald-700 font-[family-name:var(--font-playfair)]">
                  800m
                </p>
                <p className="text-sm text-gray-500 font-[family-name:var(--font-lato)]">
                  From Athirappilly Falls
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-emerald-700 font-[family-name:var(--font-playfair)]">
                  4
                </p>
                <p className="text-sm text-gray-500 font-[family-name:var(--font-lato)]">
                  Room Categories
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-emerald-700 font-[family-name:var(--font-playfair)]">
                  5+
                </p>
                <p className="text-sm text-gray-500 font-[family-name:var(--font-lato)]">
                  Amenities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
