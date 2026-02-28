"use client";

import { useRef, useState, useEffect, useCallback } from "react";

const specs = [
  { label: "Export Markets", value: "6+" },
  { label: "Cold Chain", value: "4°C" },
  { label: "Lead Time", value: "72 hrs" },
  { label: "Quality Loss", value: "-2%" },
];

export function EditorialSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const rafRef = useRef<number | null>(null);

  const updateParallax = useCallback(() => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    const videoTop = rect.top;
    const videoBottom = rect.bottom;

    if (videoBottom > 0 && videoTop < windowHeight) {
      const progress = 1 - (videoTop + rect.height / 2) / (windowHeight + rect.height);
      setScrollProgress(Math.max(0, Math.min(1, progress)));
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(updateParallax);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateParallax();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [updateParallax]);

  const parallaxY = (scrollProgress - 0.5) * 30;

  return (
    <section className="bg-background">

      {/* Full-width Video with Parallax */}
      <div ref={containerRef} className="relative aspect-[3/4] sm:aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            transform: `scale(1.15) translate3d(0, ${parallaxY}px, 0) translateZ(0)`,
            WebkitTransform: `scale(1.15) translate3d(0, ${parallaxY}px, 0) translateZ(0)`,
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            willChange: 'transform',
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/fz-s863ET7Q?autoplay=1&mute=1&loop=1&playlist=fz-s863ET7Q&controls=0&modestbranding=1&showinfo=0&rel=0"
            className="absolute"
            style={{
              top: '-10%',
              left: '-5%',
              width: '110%',
              height: '120%',
              border: 'none',
              pointerEvents: 'none', // prevents user interaction
            }}
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
      </div>

      {/* Specs Grid */}
      <div className="grid grid-cols-2 border-t border-border md:grid-cols-4">
        {specs.map((spec, index) => (
          <div
            key={spec.label}
            className={`border-b border-border p-4 sm:p-6 md:p-8 text-center md:border-b-0 ${
              index % 2 === 0 ? 'border-r' : ''
            } md:border-r md:last:border-r-0`}
          >
            <p className="mb-1 sm:mb-2 text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground">
              {spec.label}
            </p>
            <p className="font-medium text-foreground text-3xl sm:text-4xl md:text-5xl">
              {spec.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}