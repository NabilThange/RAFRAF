"use client";

import { FadeImage } from "@/components/fade-image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { QuotePopup } from "@/components/produce/quote-popup";

const accessories = [
  {
    id: 1,
    name: "Red Onions",
    description: "Premium 60mm+ grade from Nashik. Reliable quality and fair pricing for wholesale distribution.",
    image: "/images/onion.jpeg",
  },
  {
    id: 2,
    name: "G9 Cavendish Bananas",
    description: "Premium G9 grade from South India. Extended shelf life with consistent ripening for export.",
    image: "/images/banana.jpeg",
  },
  {
    id: 3,
    name: "Red Grapes",
    description: "Sweet, juicy premium grapes from Nashik. Perfect for Gulf markets with reliable quality standards.",
    image: "/images/red_grapes.jpg",
  },
];

export function CollectionSection() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");
  const router = useRouter();

  const handleGetQuote = (productName: string) => {
    setSelectedProduct(productName);
    setIsPopupOpen(true);
  };

  return (
    <section id="accessories" className="bg-background relative">
      {/* Section Title */}
      <div className="px-4 py-12 sm:px-6 sm:py-16 md:px-12 md:py-10 lg:px-20">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-foreground">
            Our Produce
          </h2>
          <Link
            href="/produce"
            className="group inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold text-white bg-black hover:bg-black/90 rounded-full transition-all duration-300 hover:gap-3"
          >
            <span>View All</span>
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
          </Link>
        </div>
      </div>

      {/* Carousel + Grid */}
      <div className="pb-16 sm:pb-20 md:pb-24 relative">

        {/* ── Mobile: Horizontal Carousel ── */}
        <div className="flex gap-4 sm:gap-6 overflow-x-auto px-4 sm:px-6 pb-4 md:hidden snap-x snap-mandatory scrollbar-hide">

          {/* Product cards */}
          {accessories.map((accessory) => (
            <div key={accessory.id} className="group flex-shrink-0 w-[80vw] sm:w-[75vw] snap-center">
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl sm:rounded-2xl bg-secondary">
                <FadeImage
                  src={accessory.image || "/placeholder.svg"}
                  alt={accessory.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="80vw"
                  quality={80}
                />
              </div>
              <div className="py-4 sm:py-6">
                <div className="mb-4">
                  <h3 className="text-base sm:text-lg font-medium leading-snug text-foreground">
                    {accessory.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {accessory.description}
                  </p>
                </div>
                <button
                  onClick={() => handleGetQuote(accessory.name)}
                  className="w-full px-4 py-2.5 text-sm font-semibold bg-black text-white rounded-md hover:bg-black/90 transition-colors"
                >
                  Get Quote
                </button>
              </div>
            </div>
          ))}

          {/* ── Teaser CTA card — always visible, beckons the tap ── */}
          <div
            onClick={() => router.push("/produce")}
            className="flex-shrink-0 w-[72vw] sm:w-[60vw] snap-center flex flex-col items-center justify-center gap-5 rounded-xl sm:rounded-2xl border-2 border-dashed border-black/20 bg-black/[0.03] cursor-pointer active:scale-95 transition-transform duration-150 px-6"
          >
            {/* Animated arrow cluster */}
            <div className="flex items-center gap-1">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="text-2xl text-black/30 animate-pulse"
                  style={{ animationDelay: `${i * 0.18}s` }}
                >
                  →
                </span>
              ))}
            </div>
            <div className="text-center">
              <p className="text-base font-semibold text-foreground">See all produce</p>
              <p className="text-xs text-muted-foreground mt-1">6+ varieties available</p>
            </div>
            <span className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-black rounded-full">
              View All →
            </span>
          </div>

        </div>

        {/* ── Desktop: Grid ── */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8 md:px-12 lg:px-20">
          {accessories.map((accessory) => (
            <div key={accessory.id} className="group">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-secondary">
                <FadeImage
                  src={accessory.image || "/placeholder.svg"}
                  alt={accessory.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 33vw, 400px"
                  quality={80}
                />
              </div>
              <div className="py-6">
                <div className="mb-4">
                  <h3 className="text-lg font-medium leading-snug text-foreground">
                    {accessory.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {accessory.description}
                  </p>
                </div>
                <button
                  onClick={() => handleGetQuote(accessory.name)}
                  className="w-full px-4 py-3 text-sm font-semibold bg-black text-white rounded-md hover:bg-black/90 transition-colors"
                >
                  Get Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quote Popup */}
      <QuotePopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        productName={selectedProduct}
      />
    </section>
  );
}