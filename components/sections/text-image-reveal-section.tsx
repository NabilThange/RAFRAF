'use client'

import { useEffect } from 'react'
import Image from 'next/image'

import side1 from '@/public/images/hero-side-1.png'
import side2 from '@/public/images/hero-side-2.png'
import side3 from '@/public/images/hero-side-3.png'
import side4 from '@/public/images/hero-side-4.png'
export function TextImageRevealSection() {
    useEffect(() => {
        const loadAnimations = async () => {
            const { gsap } = await import('gsap')
            const { ScrollTrigger } = await import('gsap/ScrollTrigger')

            gsap.registerPlugin(ScrollTrigger)

            document.querySelectorAll('.reveal-line').forEach((line) => {
                const imgSpan = line.querySelector('.reveal-img-span')

                if (imgSpan) {
                    gsap.to(imgSpan, {
                        width: 300,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: line,
                            start: 'top 80%',
                            end: 'top 20%',
                            scrub: 1,
                        },
                    })
                }
            })
        }

        loadAnimations()
    }, [])

    return (
        <div className="w-full min-h-screen flex flex-col justify-center items-center py-20 bg-[#f5f5f0]">
            <div className="flex flex-col justify-center items-center gap-4">
                <div className="reveal-line flex justify-center items-center gap-5 flex-wrap">
                    <span className="text-5xl sm:text-6xl md:text-7xl lg:text-[7.5rem] font-bold tracking-[-4px]">We curate</span>
                    <span className="reveal-img-span h-[80px] md:h-[110px] w-0 rounded-[5px] overflow-hidden relative flex-shrink-0">
                        <Image
                            src={side1}
                            alt="Curate"
                            placeholder="blur"
                            priority
                            className="h-full w-[300px] absolute left-1/2 -translate-x-1/2 rounded-[5px] object-cover object-center"
                        />
                    </span>
                    <span className="text-5xl sm:text-6xl md:text-7xl lg:text-[7.5rem] font-bold tracking-[-4px]">finest</span>
                </div>

                <div className="reveal-line flex justify-center items-center gap-5 flex-wrap">
                    <span className="text-5xl sm:text-6xl md:text-7xl lg:text-[7.5rem] font-bold tracking-[-4px]">harvests</span>
                    <span className="reveal-img-span h-[80px] md:h-[110px] w-0 rounded-[5px] overflow-hidden relative flex-shrink-0">
                        <Image
                            src={side2}
                            alt="Harvests"
                            placeholder="blur"
                            className="h-full w-[300px] absolute left-1/2 -translate-x-1/2 rounded-[5px] object-cover object-center"
                        />
                    </span>
                    <span className="text-5xl sm:text-6xl md:text-7xl lg:text-[7.5rem] font-bold tracking-[-4px]">that</span>
                </div>

                <div className="reveal-line flex justify-center items-center gap-5 flex-wrap">
                    <span className="text-5xl sm:text-6xl md:text-7xl lg:text-[7.5rem] font-bold tracking-[-4px]">nourish</span>
                    <span className="reveal-img-span h-[80px] md:h-[110px] w-0 rounded-[5px] overflow-hidden relative flex-shrink-0">
                        <Image
                            src={side3}
                            alt="Nourish"
                            placeholder="blur"
                            className="h-full w-[300px] absolute left-1/2 -translate-x-1/2 rounded-[5px] object-cover object-center"
                        />
                    </span>
                </div>

                <div className="reveal-line flex justify-center items-center gap-5 flex-wrap">
                    <span className="text-5xl sm:text-6xl md:text-7xl lg:text-[7.5rem] font-bold tracking-[-4px]">and connect</span>
                </div>

                <div className="reveal-line flex justify-center items-center gap-5 flex-wrap">
                    <span className="text-5xl sm:text-6xl md:text-7xl lg:text-[7.5rem] font-bold tracking-[-4px]">nations</span>
                    <span className="reveal-img-span h-[80px] md:h-[110px] w-0 rounded-[5px] overflow-hidden relative flex-shrink-0">
                        <Image
                            src={side4}
                            alt="Nations"
                            placeholder="blur"
                            className="h-full w-[300px] absolute left-1/2 -translate-x-1/2 rounded-[5px] object-cover object-center"
                        />
                    </span>
                    <span className="text-5xl sm:text-6xl md:text-7xl lg:text-[7.5rem] font-bold tracking-[-4px]">forward.</span>
                </div>
            </div>
        </div>
    )
}
