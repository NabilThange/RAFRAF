"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./CircularNav.module.css";

const NAV_ITEMS = ["Home", "Projects", "About", "Contact"];

export default function CircularNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [radius, setRadius] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
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
    );
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

  useEffect(() => {
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  const navVisible = isOpen || isAnimating;

  return (
    <>
      {/* Overlay Nav */}
      <nav
        className={styles.nav}
        style={{
          visibility: navVisible ? "visible" : "hidden",
          clipPath: `circle(${radius}px at calc(100% - 55px) 47px)`,
        }}
        aria-hidden={!isOpen}
      >
        <ul className={styles.menu}>
          {NAV_ITEMS.map((item) => (
            <li key={item} className={styles.menuItem}>
              <a href="#" onClick={() => toggle()}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Burger Button */}
      <button
        className={styles.button}
        type="button"
        onClick={toggle}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        data-open={isOpen}
      />
    </>
  );
}
