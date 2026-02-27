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
    const containerHeight = containerRef.current.offsetHeight;
    
    // Pin starts when top hits top of viewport
    // Pin ends after scrolling through 4x viewport height
    const pinDuration = windowHeight * 4;
    const scrolled = -rect.top;
    const progress = Math.max(0, Math.min(1, scrolled / pinDuration));
    
    setScrollProgress(progress);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      rafRef.current = requestAnimationFrame(updateProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateProgress();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [updateProgress]);

  const renderAnimatedText = () => {
    const allWords: Array<{ word: string; isKeyword: boolean; paragraphIndex: number; wordIndex: number }> = [];
    
    paragraphs.forEach((paragraph, pIndex) => {
      const words = paragraph.split(/\s+/);
      words.forEach((word, wIndex) => {
        if (word.trim()) {
          const normalizedWord = word.toLowerCase().replace(/[.,!?;:"—]/g, "");
          const isKeyword = keywords.includes(normalizedWord);
          allWords.push({ word, isKeyword, paragraphIndex: pIndex, wordIndex: wIndex });
        }
      });
    });

    const totalWords = allWords.length;
    const overlapWords = 15;
    const reverseOverlapWords = 5;

    return (
      <div className="space-y-8">
        {paragraphs.map((paragraph, pIndex) => {
          const words = paragraph.split(/\s+/);
          let globalWordIndex = 0;
          
          // Calculate starting index for this paragraph
          for (let i = 0; i < pIndex; i++) {
            globalWordIndex += paragraphs[i].split(/\s+/).filter(w => w.trim()).length;
          }

          return (
            <p key={pIndex} className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-center">
              {words.map((word, wIndex) => {
                if (!word.trim()) return null;
                
                const index = globalWordIndex + wIndex;
                const normalizedWord = word.toLowerCase().replace(/[.,!?;:"—]/g, "");
                const isKeyword = keywords.includes(normalizedWord);

                let wordOpacity = 0;
                let bgOpacity = 0;
                let textOpacity = 0;

                if (scrollProgress <= 0.7) {
                  // Reveal phase (0 to 0.7)
                  const progressTarget = 0.7;
                  const revealProgress = Math.min(1, scrollProgress / progressTarget);

                  const totalAnimationLength = 1 + overlapWords / totalWords;
                  const wordStart = index / totalWords;
                  const wordEnd = wordStart + overlapWords / totalWords;
                  const timelineScale = 1 / Math.min(totalAnimationLength, 1 + (totalWords - 1) / totalWords + overlapWords / totalWords);

                  const adjustedStart = wordStart * timelineScale;
                  const adjustedEnd = wordEnd * timelineScale;
                  const duration = adjustedEnd - adjustedStart;

                  const wordProgress = 
                    revealProgress <= adjustedStart ? 0 :
                    revealProgress >= adjustedEnd ? 1 :
                    (revealProgress - adjustedStart) / duration;

                  wordOpacity = wordProgress;

                  const backgroundFadeStart = wordProgress >= 0.9 ? (wordProgress - 0.9) / 0.1 : 0;
                  bgOpacity = Math.max(0, 1 - backgroundFadeStart);

                  const textRevealThreshold = 0.9;
                  const textRevealProgress = wordProgress >= textRevealThreshold
                    ? (wordProgress - textRevealThreshold) / (1 - textRevealThreshold)
                    : 0;
                  textOpacity = Math.pow(textRevealProgress, 0.5);
                } else {
                  // Reverse phase (0.7 to 1.0)
                  const reverseProgress = (scrollProgress - 0.7) / 0.3;
                  wordOpacity = 1;
                  const targetTextOpacity = 1;

                  const reverseWordStart = index / totalWords;
                  const reverseWordEnd = reverseWordStart + reverseOverlapWords / totalWords;
                  const reverseTimelineScale = 1 / Math.max(1, (totalWords - 1) / totalWords + reverseOverlapWords / totalWords);

                  const reverseAdjustedStart = reverseWordStart * reverseTimelineScale;
                  const reverseAdjustedEnd = reverseWordEnd * reverseTimelineScale;
                  const reverseDuration = reverseAdjustedEnd - reverseAdjustedStart;

                  const reverseWordProgress = 
                    reverseProgress <= reverseAdjustedStart ? 0 :
                    reverseProgress >= reverseAdjustedEnd ? 1 :
                    (reverseProgress - reverseAdjustedStart) / reverseDuration;

                  if (reverseWordProgress > 0) {
                    textOpacity = targetTextOpacity * (1 - reverseWordProgress);
                    bgOpacity = reverseWordProgress;
                  } else {
                    textOpacity = targetTextOpacity;
                    bgOpacity = 0;
                  }
                }

                return (
                  <span
                    key={wIndex}
                    className={`inline-block relative mr-1 mb-1 px-1 py-0.5 rounded-full ${isKeyword ? 'mx-2' : ''}`}
                    style={{
                      opacity: wordOpacity,
                      backgroundColor: `rgba(60, 60, 60, ${bgOpacity})`,
                      willChange: 'background-color, opacity',
                    }}
                  >
                    <span
                      className={`relative ${isKeyword ? 'inline-block px-2 py-1 text-background' : ''}`}
                      style={{
                        opacity: textOpacity,
                      }}
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
