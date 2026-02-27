import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Funnel_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SmoothScrollProvider } from '@/components/providers/smooth-scroll-provider'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const funnelSans = Funnel_Sans({ subsets: ["latin"], variable: '--font-funnel-sans' });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FAF9F6' },
    { media: '(prefers-color-scheme: dark)', color: '#FAF9F6' },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.rafraf.org'),

  title: {
    default: 'RafRaf International - Fresh Produce Exporter India to UAE | B2B Wholesale Supplier',
    template: '%s | RafRaf International',
  },

  description: 'Leading B2B fresh produce exporter from India to UAE, Saudi Arabia, Qatar & Gulf markets. Premium onions, pomegranates, bananas, vegetables wholesale supplier. Al Aweer Market Dubai trusted partner since 2026.',

  keywords: [
    'import export company',
    'fresh produce exporter India',
    'vegetable exporter UAE',
    'Indian onion exporter',
    'pomegranate exporter India',
    'B2B wholesale supplier Dubai',
    'Al Aweer market suppliers',
    'fresh produce wholesale Gulf',
    'agricultural export company India',
    'Nashik onion exporter',
    'G9 banana exporter',
    'drumstick okra exporter',
    'green chilli exporter Gujarat',
    'Indian vegetables wholesale UAE',
    'fresh fruits exporter Middle East',
    'rafraf',
    'RafRaf',
    'RAFRAF',
    'rafraf international',
    'RafRaf International',
    'RAFRAF INTERNATIONAL',
    'rr',
    'RR',
    'RafRaf International',
  ],

  authors: [{ name: 'Umair Khan', url: 'https://www.rafraf.org/about' }],
  creator: 'RafRaf International',
  publisher: 'RafRaf International',

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  alternates: {
    canonical: '/',
  },

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.rafraf.org',
    siteName: 'RafRaf International',
    title: 'RafRaf International - Premium Fresh Produce Exporter India to UAE',
    description: 'Trusted B2B wholesale supplier of fresh vegetables and fruits from India to Gulf markets. Quality onions, pomegranates, bananas delivered to Al Aweer Dubai.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'RafRaf International - Fresh Produce Exporter',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'RafRaf International - Fresh Produce Exporter India to UAE',
    description: 'Leading B2B wholesale supplier of premium vegetables and fruits from India to Gulf markets.',
    images: ['/og-image.jpg'],
  },

  verification: {
    google: 'your-google-verification-code',
  },

  category: 'Agriculture & Food Export',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preload critical images for LCP optimization */}
        <link
          rel="preload"
          as="image"
          href="/images/onion.jpeg"
          imageSrcSet="/images/onion.jpeg 1x"
        />
        <link
          rel="preload"
          as="image"
          href="/global1.jpg"
          imageSrcSet="/global1.jpg 1x"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Organization',
                  '@id': 'https://www.rafraf.org/#organization',
                  name: 'RafRaf International',
                  url: 'https://www.rafraf.org',
                  logo: {
                    '@type': 'ImageObject',
                    url: 'https://www.rafraf.org/logo.png',
                    width: 512,
                    height: 512,
                  },
                  description: 'Leading B2B fresh produce exporter from India to UAE, Saudi Arabia, Qatar and Gulf markets since 2026.',
                  founder: {
                    '@type': 'Person',
                    name: 'Umair Khan',
                    jobTitle: 'Founder & CEO',
                  },
                  foundingDate: '2026',
                  areaServed: [
                    {
                      '@type': 'Country',
                      name: 'United Arab Emirates',
                    },
                    {
                      '@type': 'Country',
                      name: 'Saudi Arabia',
                    },
                    {
                      '@type': 'Country',
                      name: 'Qatar',
                    },
                    {
                      '@type': 'Country',
                      name: 'Kuwait',
                    },
                  ],
                  contactPoint: {
                    '@type': 'ContactPoint',
                    contactType: 'Sales',
                    availableLanguage: ['English', 'Hindi', 'Arabic'],
                  },
                },
                {
                  '@type': 'WebSite',
                  '@id': 'https://www.rafraf.org/#website',
                  url: 'https://www.rafraf.org',
                  name: 'RafRaf International',
                  description: 'Fresh produce exporter from India to Gulf markets',
                  publisher: {
                    '@id': 'https://www.rafraf.org/#organization',
                  },
                  inLanguage: 'en',
                },
              ],
            }).replace(/</g, '\\u003c'),
          }}
        />
      </head>
      <body className={`${inter.variable} ${funnelSans.variable} font-sans antialiased`}>
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
        <Analytics />
      </body>
    </html>
  )
}
