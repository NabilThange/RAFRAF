"use client"

import { useState } from "react"
import { X } from "lucide-react"
import Image from "next/image"
import whatsappLogo from "@/public/whatsapp-logo.png"
import gmailLogo from "@/public/gmail-logo.png"

interface QuotePopupProps {
  isOpen: boolean
  onClose: () => void
  productName: string
}

export function QuotePopup({ isOpen, onClose, productName }: QuotePopupProps) {
  const [activeTab, setActiveTab] = useState<'whatsapp' | 'gmail'>('whatsapp')

  if (!isOpen) return null

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    const encodedProductName = encodeURIComponent(productName)
    const message = `Hi, I am interested in getting a quote for *${productName}*. Could you please share pricing, availability, and export details?`
    const encodedMessage = encodeURIComponent(message)
    const url = `https://wa.me/919076048473?text=${encodedMessage}`
    console.log('Opening WhatsApp:', url)
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const handleGmailClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    const subject = `Quote Request: ${productName}`
    const body = `Hi,\n\nI am interested in getting a quote for ${productName}.\nCould you please share pricing, availability, and export/import details?\n\nThank you.`
    const url = `mailto:rafrafinternational786@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    console.log('Opening Gmail:', url)
    window.location.href = url
  }

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={onClose}
      style={{ pointerEvents: 'auto' }}
    >
      <div
        className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4"
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
        }}
        style={{ pointerEvents: 'auto' }}
      >
        {/* Close Button */}
        <button
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            onClose()
          }}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
          style={{ pointerEvents: 'auto', cursor: 'pointer' }}
          type="button"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        {/* Content */}
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Quote</h3>
          <p className="text-sm text-gray-600 mb-8 text-center">
            Request a quote for <span className="font-semibold text-gray-900">{productName}</span>
          </p>

          {/* Tabs */}
          <div className="flex gap-2 mb-6 w-full">
            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                setActiveTab('whatsapp')
              }}
              className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all ${activeTab === 'whatsapp'
                ? 'bg-green-500 text-white shadow-lg'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              style={{ pointerEvents: 'auto', cursor: 'pointer' }}
              type="button"
            >
              WhatsApp
            </button>
            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                setActiveTab('gmail')
              }}
              className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all ${activeTab === 'gmail'
                ? 'bg-red-500 text-white shadow-lg'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              style={{ pointerEvents: 'auto', cursor: 'pointer' }}
              type="button"
            >
              Gmail
            </button>
          </div>

          {/* Icon and Action Button */}
          <div className="flex flex-col items-center gap-6 w-full">
            {activeTab === 'whatsapp' ? (
              <>
                <Image
                  src={whatsappLogo}
                  alt="WhatsApp"
                  width={96}
                  height={96}
                  placeholder="blur"
                  className="w-24 h-24 object-contain"
                />
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full py-4 px-6 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg transition-colors shadow-lg"
                  style={{ pointerEvents: 'auto', cursor: 'pointer' }}
                  type="button"
                >
                  Open WhatsApp →
                </button>
              </>
            ) : (
              <>
                <Image
                  src={gmailLogo}
                  alt="Gmail"
                  width={96}
                  height={96}
                  placeholder="blur"
                  className="w-24 h-24 object-contain"
                />
                <button
                  onClick={handleGmailClick}
                  className="w-full py-4 px-6 bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg transition-colors shadow-lg"
                  style={{ pointerEvents: 'auto', cursor: 'pointer' }}
                  type="button"
                >
                  Open Gmail →
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
