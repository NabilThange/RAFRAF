'use client'

import { useEffect, useRef } from 'react'
import styles from './timeless-aesthetics-section.module.css'

const panels = [
    {
        key: 'source-network',
        sectionClass: styles.section1,
        title: "Rooted in India's Finest Farms",
        desc: "Our multi-state supply network spans Nashik, Gujarat, South India, and Bhopal — connecting you directly to India's most productive agricultural belts. Red onions, pomegranates, G9 Cavendish bananas, and beyond, sourced where they grow best.",
        img: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        imgAlt: 'Fresh Indian produce from farm — onions, vegetables and fruits ready for export',
    },
    {
        key: 'quality-consistency',
        sectionClass: styles.section2,
        title: 'Quality You Can Count On',
        desc: 'Consistency is our promise, not a claim. Every shipment from RAFRAF INTERNATIONAL meets the same exacting standards — from farm inspection to final loading. Gulf wholesalers trust us because we deliver the same quality, every time.',
        img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        imgAlt: 'Fresh produce quality inspection — vibrant vegetables and fruits at wholesale market',
    },
    {
        key: 'logistics-reliability',
        sectionClass: styles.section3,
        title: 'End-to-End Export, Seamlessly',
        desc: "From contracted CHAs to dedicated freight forwarders, our logistics infrastructure is built for reliability. Sea or air — we match the shipment method to your timeline. On-time delivery isn't a goal; it's our operating standard.",
        img: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        imgAlt: 'Cargo shipping containers at port — international agricultural export logistics',
    },
    {
        key: 'gulf-markets',
        sectionClass: styles.section4,
        title: 'Your Gateway to Gulf Markets',
        desc: 'Anchored at Al Aweer Central Market in Dubai and expanding across UAE, Saudi Arabia, Qatar, Kuwait, and Iran — RAFRAF is your trusted B2B partner for fresh produce in the Gulf. Long-term relationships, fair pricing, and a supply chain built to scale.',
        img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        imgAlt: 'Dubai skyline — UAE Gulf market destination for Indian agricultural exports',
    },
]

export function TimelessAestheticsSection() {
    const sectionRefs = useRef<(HTMLElement | null)[]>([])
    const imgRefs = useRef<(HTMLImageElement | null)[]>([])
    const rafRef = useRef<number | null>(null)

    useEffect(() => {
        function tick() {
            const vh = window.innerHeight

            sectionRefs.current.forEach((section, i) => {
                const img = imgRefs.current[i]
                if (!section || !img) return

                const rect = section.getBoundingClientRect()
                const sectionH = section.offsetHeight

                /*
                 * Each section is sticky (top: 0), so while it's "active"
                 * rect.top === 0 and rect.bottom === vh.
                 *
                 * The section starts scrolling off when the NEXT section
                 * pushes it up — at that point rect.top goes negative.
                 *
                 * We map rect.top from 0 → -sectionH into a wipe 0 → 100%.
                 * Add a gap on each end so the wipe starts/ends a little
                 * before the hard edges (mirrors the original CSS gap logic).
                 */
                const scrolledPast = -rect.top           // 0 at entry, sectionH at exit
                const gap = sectionH * 0.15              // 15% grace on each side
                const rangeSize = sectionH - gap * 2

                const t = rangeSize > 0
                    ? Math.min(1, Math.max(0, (scrolledPast - gap) / rangeSize))
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
        <div
            className={styles.wrapper}
            aria-label="RAFRAF INTERNATIONAL — Why Partner With Us"
            role="region"
            id="why-rafraf"
        >
            {panels.map(({ key, sectionClass, title, desc, img, imgAlt }, index) => (
                <section
                    key={key}
                    id={`rafraf-pillar-${key}`}
                    className={`${styles.section} ${sectionClass}`}
                    ref={el => { sectionRefs.current[index] = el }}
                    aria-label={title}
                >
                    <div className={styles.content}>
                        <div className={styles.title} id={`pillar-title-${key}`}>
                            {title}
                        </div>
                        <div className={styles.desc} aria-describedby={`pillar-title-${key}`}>
                            {desc}
                        </div>
                    </div>

                    <div className={styles.imgBox} aria-hidden="true">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            ref={el => { imgRefs.current[index] = el }}
                            className={styles.img}
                            src={img}
                            alt={imgAlt}
                            loading={index === 0 ? 'eager' : 'lazy'}
                            width={800}
                            height={600}
                        />
                    </div>
                </section>
            ))}
        </div>
    )
}