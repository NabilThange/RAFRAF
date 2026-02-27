"use client"

import { useMemo, useState } from "react"
import { AnimatePresence, motion, MotionConfig } from "motion/react"
import useMeasure from "react-use-measure"
import { FamilyButton } from "@/components/ui/family-button"
import Image from "next/image"
import whatsappLogo from "@/public/whatsapp-logo.png"
import gmailLogo from "@/public/gmail-logo.png"

export function FamilyButtonDemo() {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <FamilyButton>
        <MusicPlayerExample />
      </FamilyButton>
    </div>
  )
}

let tabs = [
  { id: 0, label: "Whatsapp" },
  { id: 1, label: "Gmail" },
]

export function MusicPlayerExample() {
  const [activeTab, setActiveTab] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [ref, bounds] = useMeasure()

  const handleIconClick = () => {
    if (activeTab === 0) {
      // WhatsApp
      window.open('https://wa.me/919076048473', '_blank')
    } else if (activeTab === 1) {
      // Gmail
      window.open('mailto:rafrafinternational786@gmail.com', '_blank')
    }
  }

  const content = useMemo(() => {
    switch (activeTab) {
      case 0:
        return (
          <div
            className="flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
            onClick={handleIconClick}
          >
            <Image
              src={whatsappLogo}
              alt="WhatsApp"
              width={80}
              height={80}
              placeholder="blur"
              className="w-12 h-12 md:w-20 md:h-20 object-contain"
            />
          </div>
        )
      case 1:
        return (
          <div
            className="flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
            onClick={handleIconClick}
          >
            <Image
              src={gmailLogo}
              alt="Gmail"
              width={80}
              height={80}
              placeholder="blur"
              className="w-12 h-12 md:w-20 md:h-20 object-contain"
            />
          </div>
        )
      default:
        return null
    }
  }, [activeTab])

  const handleTabClick = (newTabId: number) => {
    if (newTabId !== activeTab && !isAnimating) {
      const newDirection = newTabId > activeTab ? 1 : -1
      setDirection(newDirection)
      setActiveTab(newTabId)
    }
  }

  const variants = {
    initial: (direction: number) => ({
      x: 300 * direction,
      opacity: 0,
      filter: "blur(4px)",
    }),
    active: {
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
    },
    exit: (direction: number) => ({
      x: -300 * direction,
      opacity: 0,
      filter: "blur(4px)",
    }),
  }

  return (
    <div className="flex flex-col items-center pt-4 ">
      <div className="flex space-x-1 border border-none rounded-[8px] cursor-pointer bg-neutral-700  px-[3px] py-[3.2px] shadow-inner-shadow">
        {tabs.map((tab, i) => (
          <button
            key={`${tab.id}-i-${i}`}
            onClick={() => handleTabClick(tab.id)}
            className={`${activeTab === tab.id ? "text-white " : "hover:text-neutral-300/60"
              } relative rounded-[5px] px-3 py-1.5 text-xs sm:text-sm font-medium text-neutral-600  transition focus-visible:outline-1 focus-visible:ring-1 focus-visible:ring-blue-light focus-visible:outline-none`}
            style={{ WebkitTapHighlightColor: "transparent" }}
          >
            {activeTab === tab.id && (
              <motion.span
                layoutId="family-bubble"
                className="absolute inset-0 z-10 bg-neutral-800  mix-blend-difference shadow-inner-shadow"
                style={{ borderRadius: 5 }}
                transition={{ type: "spring", bounce: 0.19, duration: 0.4 }}
              />
            )}
            {tab.label}
          </button>
        ))}
      </div>
      <MotionConfig transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}>
        <motion.div
          className="relative mx-auto my-[10px] w-[80px] md:w-[150px] overflow-hidden"
          initial={false}
          animate={{ height: bounds.height }}
        >
          <div className="p-3 md:p-6" ref={ref}>
            <AnimatePresence
              custom={direction}
              mode="popLayout"
              onExitComplete={() => setIsAnimating(false)}
            >
              <motion.div
                key={activeTab}
                variants={variants}
                initial="initial"
                animate="active"
                exit="exit"
                custom={direction}
                onAnimationStart={() => setIsAnimating(true)}
                onAnimationComplete={() => setIsAnimating(false)}
              >
                {content}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </MotionConfig>
    </div>
  )
}