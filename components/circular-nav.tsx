"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ContactModal } from "./contact-modal";
import "./circular-nav.css";

const NAV_ITEMS = [
  { label: "Get Quote", href: "/produce", isRoute: true },
  { label: "Gallery", href: "#gallery", isRoute: false },
  { label: "About", href: "/about", isRoute: true },
  { label: "Contact", href: "#contact", isRoute: false },
];

export function CircularNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [radius, setRadius] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const animFrameRef = useRef<number | null>(null);

  // Compute the max radius needed to cover the full screen from the button origin
  const getMaxRadius = () => {
    // Button is at: right=55px, top=47px from viewport
    const x = window.innerWidth - 55;
    const y = 47;
    const corners = [
      { cx: 0, cy: 0 },
      { cx: window.innerWidth, cy: 0 },
      { cx: 0, cy: window.innerHeight },
      { cx: window.innerWidth, cy: window.innerHeight },
    ];
    return Math.max(
      ...corners.map((c) =>
        Math.sqrt(Math.pow(c.cx - x, 2) + Math.pow(c.cy - y, 2))
      )
    ) + 100; // Add extra buffer to ensure full coverage
  };

  const animateTo = (target: number, onComplete?: () => void) => {
    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);

    const duration = 700; // ms
    const start = performance.now();
    const startRadius = radius;

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease in-out cubic
      const eased =
        progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      const current = startRadius + (target - startRadius) * eased;
      setRadius(current);

      if (progress < 1) {
        animFrameRef.current = requestAnimationFrame(tick);
      } else {
        setIsAnimating(false);
        onComplete?.();
      }
    };

    animFrameRef.current = requestAnimationFrame(tick);
  };

  const toggle = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    if (!isOpen) {
      setIsOpen(true);
      const maxR = getMaxRadius();
      animateTo(maxR);
    } else {
      animateTo(0, () => {
        setIsOpen(false);
      });
    }
  };

  const handleNavClick = (href: string, isRoute: boolean) => {
    if (href === "#contact") {
      setIsContactOpen(true);
      toggle();
    } else if (isRoute) {
      // Let Next.js Link handle the navigation
      toggle();
    } else {
      // Scroll to section
      toggle();
    }
  };

  useEffect(() => {
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  const navVisible = isOpen || isAnimating;

  return (
    <>
      {/* Logo */}
      <Link
        href="/"
        className="fixed top-8 left-8 z-[110] text-lg font-medium tracking-tight text-foreground transition-colors duration-300"
      >
        RafRaf
      </Link>

      {/* Overlay Nav */}
      <nav
        className="circular-nav"
        style={{
          visibility: navVisible ? "visible" : "hidden",
          clipPath: `circle(${radius}px at calc(100% - 55px) 47px)`,
          pointerEvents: isOpen ? "auto" : "none",
          willChange: "clip-path",
          transform: "translateZ(0)", // Force GPU acceleration
        }}
        aria-hidden={!isOpen}
      >
        <ul className="circular-nav-menu">
          {NAV_ITEMS.map((item) => (
            <li key={item.label} className="circular-nav-menu-item">
              {item.isRoute ? (
                <Link
                  href={item.href}
                  onClick={() => handleNavClick(item.href, item.isRoute)}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href, item.isRoute);
                  }}
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Burger Button */}
      <button
        className="circular-nav-button"
        type="button"
        onClick={toggle}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        data-open={isOpen}
        style={{
          willChange: "transform",
          transform: "translateZ(0)", // Force GPU acceleration
        }}
      />

      {/* Contact Modal */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
}
