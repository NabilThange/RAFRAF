'use client'

import React, { useEffect, useRef } from 'react';

const panels = [
    {
        key: 'source-network',
        title: "Rooted in India's Finest Farms",
        desc: "Our multi-state supply network spans Nashik, Gujarat, South India, and Bhopal — connecting you directly to India's most productive agricultural belts. Red onions, pomegranates, G9 Cavendish bananas, and beyond, sourced where they grow best.",
        img: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        imgAlt: 'Fresh Indian produce — onions, vegetables and fruits ready for export',
        bg: '#d4e3d2',
    },
    {
        key: 'quality-consistency',
        title: 'Quality You Can Count On',
        desc: 'Consistency is our promise, not a claim. Every shipment from RAFRAF INTERNATIONAL meets the same exacting standards — from farm inspection to final loading. Gulf wholesalers trust us because we deliver the same quality, every time.',
        img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        imgAlt: 'Fresh produce quality inspection — vibrant vegetables and fruits at wholesale market',
        bg: '#efcbc5',
    },
    {
        key: 'logistics-reliability',
        title: 'End-to-End Export, Seamlessly',
        desc: "From contracted CHAs to dedicated freight forwarders, our logistics infrastructure is built for reliability. Sea or air — we match the shipment method to your timeline. On-time delivery isn't a goal; it's our operating standard.",
        img: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        imgAlt: 'Cargo shipping containers at port — international agricultural export logistics',
        bg: '#ebe1c6',
    },
    {
        key: 'gulf-markets',
        title: 'Your Gateway to Gulf Markets',
        desc: 'Anchored at Al Aweer Central Market in Dubai and expanding across UAE, Saudi Arabia, Qatar, Kuwait, and Iran — RAFRAF is your trusted B2B partner for fresh produce in the Gulf. Long-term relationships, fair pricing, and a supply chain built to scale.',
        img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        imgAlt: 'Dubai skyline — UAE Gulf market destination for Indian agricultural exports',
        bg: '#cbd0e2',
    },
]

export function TimelessAestheticsSection() {
    const rootRef = useRef<HTMLDivElement | null>(null)
    const sectionRefs = useRef<(HTMLElement | null)[]>([])
    const imgBoxRefs = useRef<(HTMLDivElement | null)[]>([])
    const imgRefs = useRef<(HTMLImageElement | null)[]>([])
    const rafRef = useRef<number | null>(null)

    useEffect(() => {
        function tick() {
            const vh = window.innerHeight
            const root = rootRef.current
            if (!root) {
                rafRef.current = requestAnimationFrame(tick)
                return
            }

            // Is the ta-root block currently visible on screen at all?
            const rootRect = root.getBoundingClientRect()
            const rootVisible = rootRect.bottom > 0 && rootRect.top < vh

            sectionRefs.current.forEach((section, i) => {
                const imgBox = imgBoxRefs.current[i]
                const img = imgRefs.current[i]
                if (!section || !imgBox || !img) return

                // ── Visibility gate ──────────────────────────────────────
                // Only show the fixed image when ta-root is on screen.
                // This prevents the image bleeding into sections above/below.
                if (!rootVisible) {
                    imgBox.style.visibility = 'hidden'
                    rafRef.current = requestAnimationFrame(tick)
                    return
                }
                imgBox.style.visibility = 'visible'

                // ── Wipe animation ───────────────────────────────────────
                const rect = section.getBoundingClientRect()
                const imgHeight = imgBox.offsetHeight
                const sectionHeight = section.offsetHeight

                // gap fraction mirrors original CSS: (100% - imgHeight) / 2
                const gapFraction = sectionHeight > 0
                    ? (sectionHeight - imgHeight) / 2 / sectionHeight
                    : 0.15

                // exitProgress: 0 = section bottom at viewport bottom, 1 = section top at viewport top
                const exitProgress = 1 - (rect.bottom / vh)

                const rangeStart = gapFraction
                const rangeEnd = 1 - gapFraction
                const rangeSize = rangeEnd - rangeStart

                const t = rangeSize > 0
                    ? Math.min(1, Math.max(0, (exitProgress - rangeStart) / rangeSize))
                    : 0

                img.style.clipPath = `inset(0 0 ${t * 100}% 0)`
            })

            rafRef.current = requestAnimationFrame(tick)
        }

        rafRef.current = requestAnimationFrame(tick)
        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current)
        }
    }, [])

    return (
        <div className="ta-root" ref={rootRef}>
            {panels.map(({ key, title, desc, img, imgAlt, bg }, index) => (
                <section
                    key={key}
                    className="ta-section"
                    style={{ backgroundColor: bg, zIndex: panels.length - index }}
                    ref={el => { sectionRefs.current[index] = el }}
                    aria-label={title}
                >
                    <div className="ta-content">
                        <div className="ta-title">{title}</div>
                        <div className="ta-desc">{desc}</div>
                    </div>
                    <div
                        className="ta-img-box"
                        ref={el => { imgBoxRefs.current[index] = el }}
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            ref={el => { imgRefs.current[index] = el }}
                            className="ta-img"
                            src={img}
                            alt={imgAlt}
                            loading={index === 0 ? 'eager' : 'lazy'}
                        />
                    </div>
                </section>
            ))}
        </div>
    )
}