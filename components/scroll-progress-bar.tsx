"use client";

import React from "react";

/**
 * A highly performant scroll progress bar that uses CSS Scroll-Driven Animations
 * via the --scroll CSS variable defined in globals.css
 */
export const ScrollProgressBar: React.FC = () => {
    return (
        <div
            className="fixed top-0 left-0 h-[3px] bg-accent z-[9999] pointer-events-none transition-all duration-75 ease-out"
            style={{
                width: "var(--scroll, 0%)",
                backgroundImage: "linear-gradient(90deg, transparent, var(--color-accent))",
                boxShadow: "0 0 10px var(--color-accent)",
            }}
            aria-hidden="true"
        />
    );
};
