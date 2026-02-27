"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ContactModal } from "@/components/contact-modal";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const loaderRef = useRef<HTMLDivElement>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    if (!containerRef.current || !loaderRef.current) return;

    const loader = loaderRef.current;
    const container = containerRef.current;

    // Convert to arrays immediately to freeze the selection
    const loadingLetter = [...loader.querySelectorAll<Element>(".willem__letter")];
    const box = [...loader.querySelectorAll<Element>(".willem-loader__box")];
    const growingImage = [...loader.querySelectorAll<Element>(".willem__growing-image")];
    const headingStart = [...loader.querySelectorAll<Element>(".willem__h1-start")];
    const headingEnd = [...loader.querySelectorAll<Element>(".willem__h1-end")];
    const coverImageExtra = [...loader.querySelectorAll<Element>(".willem__cover-image-extra")];
    const headerLetter = [...container.querySelectorAll<Element>(".willem__letter-white")];
    const subtitleText = container.querySelector(".willem__subtitle");
    const contactCircle = container.querySelector(".willem__contact-circle");

    // Guard: don't run if key elements are missing
    if (!loadingLetter.length || !box.length || !growingImage.length) return;

    const tl = gsap.timeline({
      defaults: {
        ease: "expo.inOut",
      },
    });

    // Set initial hidden state BEFORE animating (prevents flash)
    gsap.set(loadingLetter, { yPercent: 100 });
    gsap.set(headerLetter, { yPercent: 100 });
    if (subtitleText) gsap.set(subtitleText, { opacity: 0, y: 20 });
    if (contactCircle) gsap.set(contactCircle, { opacity: 0, scale: 0.8 });

    // Animate loading letters
    tl.to(loadingLetter, {
      yPercent: 0,
      stagger: 0.025,
      duration: 1.25,
    });

    // Animate box width
    tl.fromTo(
      box,
      { width: "0em" },
      { width: "1em", duration: 1.25 },
      "< 1.25"
    );

    // Animate growing image width
    tl.fromTo(
      growingImage,
      { width: "0%" },
      { width: "100%", duration: 1.25 },
      "<"
    );

    // Animate heading start
    tl.fromTo(
      headingStart,
      { x: "0em" },
      { x: "-0.05em", duration: 1.25 },
      "<"
    );

    // Animate heading end
    tl.fromTo(
      headingEnd,
      { x: "0em" },
      { x: "0.05em", duration: 1.25 },
      "<"
    );

    // Fade out extra images
    tl.to(
      coverImageExtra,
      { opacity: 0, duration: 0.05, ease: "none", stagger: 0.5 },
      "-=0.05"
    );

    // Expand growing image to full screen
    tl.to(
      growingImage,
      { width: "100vw", height: "100dvh", duration: 2 },
      "< 1.25"
    );

    // Expand box to full width
    tl.to(box, { width: "110vw", duration: 2 }, "<");

    // Animate header letters
    tl.to(
      headerLetter,
      { yPercent: 0, duration: 1.25, ease: "expo.out", stagger: 0.025 },
      "< 1.2"
    );

    // Animate subtitle text
    if (subtitleText) {
      tl.to(
        subtitleText,
        { opacity: 1, y: 0, duration: 1, ease: "expo.out" },
        "< 0.5"
      );
    }

    // Animate contact circle
    if (contactCircle) {
      tl.to(
        contactCircle,
        { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)" },
        "< 0.2"
      );
    }

    // Clear all transforms after animation completes
    tl.set(headerLetter, { clearProps: "all" });
    if (subtitleText) tl.set(subtitleText, { clearProps: "all" });
    if (contactCircle) tl.set(contactCircle, { clearProps: "all" });

    // Hide the loader overlay (text) but keep the image
    tl.to(loader, {
      opacity: 0,
      duration: 0.5,
      pointerEvents: "none",
    });

  }, []);

  return (
    <section ref={containerRef} className="willem-header">
      {/* Fixed loader overlay for animation */}
      <div ref={loaderRef} className="willem-loader">
        <div className="willem__h1">
          <div className="willem__h1-start">
            <span className="willem__letter">R</span>
            <span className="willem__letter">a</span>
            <span className="willem__letter">f</span>
          </div>
          <div className="willem-loader__box">
            <div className="willem-loader__box-inner">
              <div className="willem__growing-image">
                <div className="willem__growing-image-wrap">
                  <Image
                    className="willem__cover-image-extra is--1"
                    src="/images/hero-side-2.png"
                    alt=""
                    priority
                    width={400}
                    height={600}
                    quality={80}
                  />
                  <Image
                    className="willem__cover-image-extra is--2"
                    src="/images/hero-side-3.png"
                    alt=""
                    priority
                    width={400}
                    height={600}
                    quality={80}
                  />
                  <Image
                    className="willem__cover-image-extra is--3"
                    src="/images/hero-side-4.png"
                    alt=""
                    priority
                    width={400}
                    height={600}
                    quality={80}
                  />
                  <Image
                    className="willem__cover-image"
                    src="/images/hero-landscape.png"
                    alt="Hero landscape"
                    priority
                    width={1920}
                    height={1080}
                    quality={80}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="willem__h1-end">
            <span className="willem__letter">R</span>
            <span className="willem__letter">a</span>
            <span className="willem__letter">f</span>
          </div>
        </div>
      </div>

      {/* Background image that stays after animation */}
      <div className="willem-background-image">
        <Image
          src="/images/hero-landscape.png"
          alt="Hero background"
          className="willem-background-image__img"
          priority
          width={1920}
          height={1080}
          quality={80}
        />
      </div>

      {/* Main content */}
      <div className="willem-header__content">
        <div className="willem-header__bottom">
          <div className="willem-header__title-wrapper">
            <div className="willem__h1">
              <span className="willem__letter-white">R</span>
              <span className="willem__letter-white">a</span>
              <span className="willem__letter-white">f</span>
              <span className="willem__letter-white">R</span>
              <span className="willem__letter-white">a</span>
              <span className="willem__letter-white">f </span>
              <span className="willem__letter-white is--space">©</span>
            </div>
            <p className="willem__subtitle">Premium Indian Produce, Exported with Precision</p>
          </div>


        </div>
      </div>

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </section>
  );
}
