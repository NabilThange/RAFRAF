'use client'

import { useEffect } from 'react'

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        const initializeScroll = async () => {
            const { gsap } = await import('gsap')
            const { ScrollTrigger } = await import('gsap/ScrollTrigger')
            const Lenis = (await import('@studio-freight/lenis')).default

            gsap.registerPlugin(ScrollTrigger)

            const lenis = new Lenis({
                duration: 1.2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            })

            lenis.on('scroll', ScrollTrigger.update)

            gsap.ticker.add((time) => {
                lenis.raf(time * 1000)
            })

            gsap.ticker.lagSmoothing(0)

            return () => {
                lenis.destroy()
            }
        }

        const cleanup = initializeScroll()
        return () => {
            cleanup.then(fn => fn?.())
        }
    }, [])

    return children
}
