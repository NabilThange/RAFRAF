"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ContactModal } from "./contact-modal";
import { hapticFeedback, HAPTIC_PATTERNS } from "@/lib/haptics";
import "./circular-nav.css";

const NAV_ITEMS = [
  { label: "Get Quote", href: "/produce", isRoute: true },
  { label: "Produce", href: "/produce", isRoute: true },
  { label: "About", href: "/about", isRoute: true },
  { label: "Contact", href: "#contact", isRoute: false },
];

export function CircularNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
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
    hapticFeedback(HAPTIC_PATTERNS.LIGHT);

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
    hapticFeedback(HAPTIC_PATTERNS.SUBTLE);
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
    const handleScroll = () => {
      // If we're on the homepage, track if we're in the hero section (roughly top 100vh)
      if (pathname === "/") {
        setIsAtTop(window.scrollY < window.innerHeight * 0.8);
      } else {
        setIsAtTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once on mount to set initial state
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  useEffect(() => {
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  // Listen for global openContactModal events (dispatched by blog pages, footer, etc.)
  useEffect(() => {
    const handler = () => setIsContactOpen(true);
    window.addEventListener("openContactModal", handler);
    return () => window.removeEventListener("openContactModal", handler);
  }, []);

  const navVisible = isOpen || isAnimating;
  const hideLogo = pathname.startsWith("/produce") ||
    pathname.startsWith("/about") ||
    pathname.startsWith("/blog");

  return (
    <>
      {/* Logo */}
      {!hideLogo && (
        <Link
          href="/"
          className="fixed top-8 left-8 z-[110] text-lg font-medium tracking-tight text-white transition-all duration-500"
          style={{
            mixBlendMode: (pathname === "/" && isAtTop) ? "normal" : "difference",
          }}
        >
          RafRaf
        </Link>
      )}

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
