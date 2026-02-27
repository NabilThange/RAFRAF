"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { ContactModal } from "./contact-modal";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(CSSRulePlugin);
}

export function Header() {
  const [isActive, setIsActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Cleanup: ensure menu is closed and overlay is reset when component unmounts or isActive changes
  useEffect(() => {
    if (!isActive) {
      if (overlayRef.current) {
        overlayRef.current.classList.remove('menu-active');
      }
      if (menuRef.current) {
        menuRef.current.classList.remove('menu-open');
      }
    }
  }, [isActive]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({ paused: true });
    tlRef.current = tl;

    const spanBefore = CSSRulePlugin.getRule("#hamburger span:before");
    
    gsap.set(spanBefore, { background: isScrolled ? "#0a0a0a" : "#fff" });
    gsap.set(".menu", { visibility: "hidden" });

    const start = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
    const end = "M0,1005S175,995,500,995s500,5,500,5V0H0Z";
    const power4 = "power4.inOut";
    const power2 = "power2.inOut";

    tl.to("#hamburger", 1.25, {
      marginTop: "-5px",
      x: -40,
      y: 40,
      ease: power4,
    });

    tl.to("#hamburger span", 1, { background: "#e2e2dc", ease: power2 }, "<");
    tl.to(spanBefore, 1, { background: "#e2e2dc", ease: power2 }, "<");

    tl.to(
      ".btn .btn-outline",
      1.25,
      {
        x: -40,
        y: 40,
        width: "140px",
        height: "140px",
        border: "1px solid #e2e2dc",
        ease: power4,
      },
      "<"
    );

    tl.to(pathRef.current, 0.8, { attr: { d: start }, ease: "power2.in" }, "<")
      .to(pathRef.current, 0.8, { attr: { d: end }, ease: "power2.out" }, "-=0.5");

    tl.to(".menu", 1, { visibility: "visible" }, "-=0.5");

    tl.to(
      ".menu-item > a",
      1,
      {
        top: 0,
        ease: "power3.out",
        stagger: {
          amount: 0.5,
        },
      },
      "-=1"
    ).reverse();

    return () => {
      tl.kill();
    };
  }, [isScrolled]);

  const handleToggle = () => {
    const newActiveState = !isActive;
    setIsActive(newActiveState);
    
    // Add/remove class for mobile background and menu items
    if (isMobile) {
      if (overlayRef.current) {
        if (newActiveState) {
          overlayRef.current.classList.add('menu-active');
        } else {
          overlayRef.current.classList.remove('menu-active');
        }
      }
      
      if (menuRef.current) {
        if (newActiveState) {
          menuRef.current.classList.add('menu-open');
        } else {
          menuRef.current.classList.remove('menu-open');
        }
      }
    }
    
    if (tlRef.current) {
      tlRef.current.reversed(!tlRef.current.reversed());
    }
  };

  return (
    <>
      {/* Logo */}
      <Link 
        href="/" 
        className={`fixed top-8 left-8 z-50 text-lg font-medium tracking-tight transition-colors duration-300 ${isScrolled ? "text-foreground" : "text-white"}`}
      >
        RAFRAF
      </Link>

      {/* Toggle Button */}
      <div className="btn" id="toggle-btn" onClick={handleToggle}>
        <div className="btn-outline btn-outline-1" style={{ borderColor: isScrolled ? "#0a0a0a" : "#ffffff" }}></div>
        <div className="btn-outline btn-outline-2" style={{ borderColor: isScrolled ? "#0a0a0a" : "#ffffff" }}></div>
        <div id="hamburger" className={isActive ? 'active' : ''}>
          <span style={{ background: isScrolled ? "#0a0a0a" : "#ffffff" }}></span>
        </div>
      </div>

      {/* SVG Overlay */}
      <div className="overlay" ref={overlayRef}>
        <svg viewBox="0 0 1000 1000">
          <path ref={pathRef} d="M0 2S175 1 500 1s500 1 500 1V0H0Z"></path>
        </svg>
      </div>

      {/* Menu Items */}
      <div className="menu" ref={menuRef}>
        <div className="primary-menu">
          <div className="menu-container">
            <div className="wrapper">
              <div className="menu-item">
                <a href="/produce" onClick={handleToggle}>
                  <span>I</span>Products
                </a>
                <div className="menu-item-revealer"></div>
              </div>

              <div className="menu-item">
                <a href="/blog" onClick={handleToggle}>
                  <span>II</span>Blog
                </a>
                <div className="menu-item-revealer"></div>
              </div>

              <div className="menu-item">
                <a href="/about" onClick={handleToggle}>
                  <span>III</span>About
                </a>
                <div className="menu-item-revealer"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="secondary-menu">
          <div className="menu-container">
            <div className="wrapper">
              <div className="menu-item">
                <a href="https://wa.me/919076048473" target="_blank" rel="noopener noreferrer" onClick={handleToggle}>
                  WhatsApp
                </a>
                <div className="menu-item-revealer"></div>
              </div>

              <div className="menu-item">
                <a href="mailto:rafrafinternational786@gmail.com" onClick={handleToggle}>
                  Email
                </a>
                <div className="menu-item-revealer"></div>
              </div>

              <div className="menu-item">
                <a 
                  href="#contact" 
                  onClick={(e) => {
                    e.preventDefault();
                    setIsContactOpen(true);
                    handleToggle();
                  }}
                >
                  Contact
                </a>
                <div className="menu-item-revealer"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
}
