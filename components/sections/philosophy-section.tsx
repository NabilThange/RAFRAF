"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const paragraphs = [
  "A trade house that unites heritage farming and global commerce. Built on direct farmer partnerships, we deliver the finest Indian produce — minimising waste while ensuring unmatched freshness across every shipment.",
  "We believe great sourcing starts with respect for the land and the people who cultivate it. That's why our approach is built to simplify logistics while amplifying quality. From the first harvest to the final delivery, it's a journey where tradition meets precision, and your supply chain comes to life."
];

const keywords = [
  "heritage",
  "partnerships",
  "finest",
  "freshness",
  "respect",
  "quality",
  "tradition",
  "precision",
  "journey"
];

export function PhilosophySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const rafRef = useRef<number | null>(null);

  const updateProgress = useCallback(() => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    const pinDuration = windowHeight * 4;
    const scrolled = -rect.top;
    const progress = Math.max(0, Math.min(1, scrolled / pinDuration));

    setScrollProgress(progress);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(updateProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateProgress();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [updateProgress]);

  const renderAnimatedText = () => {
    const allWords: Array<{ word: string; isKeyword: boolean }> = [];

    paragraphs.forEach((paragraph) => {
      paragraph.split(/\s+/).forEach((word) => {
        if (word.trim()) {
          const normalized = word.toLowerCase().replace(/[.,!?;:"—]/g, "");
          allWords.push({ word, isKeyword: keywords.includes(normalized) });
        }
      });
    });

    const totalWords = allWords.length;
    const overlapWords = 15;

    // Only use the reveal phase — clamp progress to 0→1 over full scroll
    // Once a word is revealed it stays revealed forever
    const revealProgress = Math.min(1, scrollProgress / 1);

    let globalWordIndex = 0;

    return (
      <div className="space-y-8">
        {paragraphs.map((paragraph, pIndex) => {
          const words = paragraph.split(/\s+/);
          const startIndex = globalWordIndex;
          globalWordIndex += words.filter(w => w.trim()).length;

          return (
            <p
              key={pIndex}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-center"
            >
              {words.map((word, wIndex) => {
                if (!word.trim()) return null;

                const index = startIndex + wIndex;
                const normalized = word.toLowerCase().replace(/[.,!?;:"—]/g, "");
                const isKeyword = keywords.includes(normalized);

                // Word reveal timing
                const totalAnimationLength = 1 + overlapWords / totalWords;
                const wordStart = index / totalWords;
                const wordEnd = wordStart + overlapWords / totalWords;
                const timelineScale = 1 / Math.min(
                  totalAnimationLength,
                  1 + (totalWords - 1) / totalWords + overlapWords / totalWords
                );

                const adjustedStart = wordStart * timelineScale;
                const adjustedEnd = wordEnd * timelineScale;
                const duration = adjustedEnd - adjustedStart;

                const wordProgress =
                  revealProgress <= adjustedStart ? 0 :
                    revealProgress >= adjustedEnd ? 1 :
                      (revealProgress - adjustedStart) / duration;

                // Opacity of the whole word span
                const wordOpacity = wordProgress;

                // Background pill fades IN then stays — no fade out
                const bgFadeInProgress = Math.min(1, wordProgress / 0.9);
                const bgOpacity = isKeyword ? 0 : 0; // bg only on non-keywords during reveal
                // For the dark pill behind each word: appears then disappears as text becomes clear
                const pillOpacity = wordProgress < 0.9
                  ? wordProgress
                  : Math.max(0, 1 - (wordProgress - 0.9) / 0.1);

                // Text colour reveal — once word is fully in, text is clear and stays
                const textRevealThreshold = 0.9;
                const textRevealProgress = wordProgress >= textRevealThreshold
                  ? (wordProgress - textRevealThreshold) / (1 - textRevealThreshold)
                  : 0;
                const textOpacity = Math.pow(textRevealProgress, 0.5);

                return (
                  <span
                    key={wIndex}
                    className={`inline-block relative mr-1 mb-1 px-1 py-0.5 rounded-full ${isKeyword ? 'mx-2' : ''}`}
                    style={{
                      opacity: wordOpacity,
                      backgroundColor: `rgba(60, 60, 60, ${pillOpacity})`,
                      willChange: 'background-color, opacity',
                    }}
                  >
                    <span
                      className={`relative ${isKeyword ? 'inline-block px-2 py-1 text-background' : ''}`}
                      style={{ opacity: textOpacity }}
                    >
                      {isKeyword && (
                        <span
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%+1rem)] h-[calc(100%+0.4rem)] bg-primary rounded-full -z-10"
                          aria-hidden="true"
                        />
                      )}
                      {word}
                    </span>
                  </span>
                );
              })}
            </p>
          );
        })}
      </div>
    );
  };

  return (
    <section id="products" className="bg-background">
      <div
        ref={containerRef}
        className="relative"
        style={{ height: `${100 + 400}vh` }}
      >
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden pt-32 pb-16 sm:pt-36 sm:pb-20 md:pt-40 md:pb-24 lg:pt-44 lg:pb-28">
          <div className="w-full max-w-5xl px-4 sm:px-6 md:px-12 lg:px-20">
            {renderAnimatedText()}
          </div>
        </div>
      </div>
    </section>
  );
}