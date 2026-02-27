import type { Metadata } from 'next'
import { BackButton } from '@/components/back-button'

export const metadata: Metadata = {
  title: 'About Us - Leading Fresh Produce Exporter from India to UAE',
  description: 'RAFRAF INTERNATIONAL: Founded 2026 by Umair Khan. Trusted B2B wholesale supplier of premium vegetables and fruits from India to Gulf markets. Quality, reliability, fair pricing.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About RAFRAF INTERNATIONAL - Fresh Produce Exporter',
    description: 'Learn about our journey as a leading agricultural export company connecting Indian farms to Gulf markets.',
    url: 'https://www.rafraf.org/about',
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <BackButton />
      {/* JSON-LD for About Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            mainEntity: {
              '@type': 'Organization',
              name: 'RAFRAF INTERNATIONAL',
              foundingDate: '2026',
              founder: {
                '@type': 'Person',
                name: 'Umair Khan',
                jobTitle: 'Founder & CEO',
              },
              description: 'RAFRAF INTERNATIONAL is a B2B agricultural export company specializing in fresh produce from India to Gulf markets.',
            },
          }).replace(/</g, '\\u003c'),
        }}
      />

      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About RafRaf International
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Your trusted B2B wholesale partner for premium fresh produce from India to Gulf markets since 2026.
          </p>
        </section>

        {/* What is RAFRAF INTERNATIONAL - AEO Optimized */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4">What is RafRaf International?</h2>
          <p className="text-lg mb-4">
            RafRaf is a B2B agricultural export company that connects premium Indian fresh produce with wholesale distributors across UAE, Saudi Arabia, Qatar, Kuwait, and Iran. Founded in 2026 by Umair Khan, we specialize in exporting high-quality vegetables and fruits including red onions from Nashik, pomegranates, G9 Cavendish bananas, green chillies from Gujarat, and a wide range of fresh produce to Gulf markets.
          </p>
          <p className="text-lg mb-4">
            According to the India Brand Equity Foundation (IBEF), India-UAE bilateral trade reached US$ 100.06 billion in FY25, with agricultural exports playing a crucial role. RafRaf International positions itself within this growing trade corridor, focusing on quality consistency, timely delivery, and fair pricing for B2B wholesale customers.
          </p>
        </section>

        {/* Our Story */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-lg mb-4">
            Founded by Umair Khan in 2026, RafRaf was built on a foundation of family legacy in international trade and a commitment to excellence in agricultural exports. With established logistics partnerships and a multi-state supply network across Nashik, Gujarat, South India, and Bhopal, we launched with a clear mission: to be the most reliable fresh produce supplier for Gulf market wholesalers.
          </p>
        </section>

        {/* Our Value Proposition - GEO Optimized with Statistics */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Choose RafRaf ?</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-bold mb-3">Quality Consistency</h3>
              <p>Every shipment meets strict quality standards. Our multi-supplier strategy across Indian states ensures year-round availability without compromising quality.</p>
            </div>

            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-bold mb-3">Timely Delivery</h3>
              <p>With established CHA (Customs House Agent) and freight forwarder partnerships, we guarantee on-time delivery via sea and air freight to Al Aweer Market Dubai and beyond.</p>
            </div>

            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-bold mb-3">Fair Pricing</h3>
              <p>Competitive market rates justified by quality standards. We're not a discount player—we're a reliability partner for long-term B2B relationships.</p>
            </div>
          </div>

          <p className="text-lg">
            <strong>Our Commitment:</strong> Starting with 2 shipments per month (₹20 Lakhs per shipment), we're building a foundation of trust with Gulf market wholesalers. Our goal is zero quality or delivery failures in Year 1.
          </p>
        </section>

        {/* Supply Network */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Supply Network</h2>
          <p className="text-lg mb-6">
            RafRaf International sources premium produce from specialized regions across India:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Nashik Region</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Red onions (60mm+)</li>
                <li>Pomegranates</li>
                <li>Red, black, and green grapes</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Gujarat Region</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>G4 Gauri chillies (green chillies)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">South India</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>G9 Cavendish bananas</li>
                <li>Drumsticks</li>
                <li>Okra</li>
                <li>Dry/semi-husk coconut</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Other Regions</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Lemon (Jalgaon)</li>
                <li>Turmeric (Bhopal)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Target Markets */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Markets We Serve</h2>
          <p className="text-lg mb-4">
            Our primary export destinations include:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-lg">
            <li><strong>United Arab Emirates</strong> - Primary market with focus on Al Aweer Central Market, Dubai</li>
            <li><strong>Saudi Arabia</strong> - Growing wholesale distribution network</li>
            <li><strong>Qatar</strong> - Premium produce for wholesale buyers</li>
            <li><strong>Kuwait</strong> - Expanding market presence</li>
            <li><strong>Iran</strong> - Strategic export destination</li>
          </ol>
        </section>

        {/* Founder */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Meet Our Founder</h2>
          <div className="bg-muted p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-2">Umair Khan</h3>
            <p className="text-lg text-muted-foreground mb-4">Founder & CEO</p>
            <p className="text-lg mb-4">
              Umair Khan founded RafRaf International with a vision to create a reliable bridge between Indian agricultural excellence and Gulf market demand. Coming from a family with established international trade experience, Umair combines industry knowledge with fresh entrepreneurial energy.
            </p>
            <p className="text-lg">
              His approach is pragmatic: "We don't claim to be unique in a crowded market. We claim to be dependable. Our differentiation is in execution—consistent quality, on-time delivery, and transparent pricing."
            </p>
          </div>
        </section>

        {/* Future Vision */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Vision for Growth</h2>
          <p className="text-lg mb-4">
            <strong>Year 1 (2026):</strong> Establish consistent buyer relationships in Gulf markets with 24 successful shipments and expand into spices, grains, and meat products.
          </p>
          <p className="text-lg mb-4">
            <strong>5-Year Vision (2026-2031):</strong> Become a diversified agri-export powerhouse with presence across multiple geographies beyond the Gulf, while maintaining our core values of quality, reliability, and fair pricing.
          </p>
        </section>

        {/* FAQ Schema for AEO */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: 'What products does RAFRAF INTERNATIONAL export?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'RAFRAF INTERNATIONAL exports premium fresh produce including red onions from Nashik, pomegranates, G9 Cavendish bananas, green chillies from Gujarat, drumsticks, okra, coconuts, lemons, and turmeric. We plan to expand into spices, grains, and meat products in Year 1.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Which countries does RAFRAF INTERNATIONAL export to?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'We export to UAE (primary market with focus on Al Aweer Market Dubai), Saudi Arabia, Qatar, Kuwait, and Iran. Our 5-year vision includes expansion to additional markets beyond the Gulf region.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'What makes RAFRAF INTERNATIONAL different from other exporters?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'RAFRAF INTERNATIONAL focuses on three core pillars: quality consistency across all shipments, timely delivery with established logistics partnerships, and fair pricing justified by quality standards. We compete on execution and reliability rather than claiming uniqueness in a crowded market.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Who are RAFRAF INTERNATIONAL\'s target customers?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Our primary customers are B2B wholesalers and large-scale wholesale distributors in Gulf markets. We serve high-volume buyers who value quality consistency, competitive pricing, and reliable delivery schedules.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'How does RAFRAF INTERNATIONAL ensure product quality?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'We maintain a multi-state supplier network across Nashik, Gujarat, South India, and Bhopal, with each region specializing in specific products. Our multi-supplier strategy mitigates seasonal gaps and ensures consistent quality year-round. We have established quality control standards and inspection protocols with all suppliers.',
                    },
                  },
                ],
              }).replace(/</g, '\\u003c'),
            }}
          />

          <div className="space-y-6">
            <div className="border-b pb-4">
              <h3 className="text-xl font-semibold mb-2">What products does RAFRAF INTERNATIONAL export?</h3>
              <p className="text-lg">
                RafRaf International exports premium fresh produce including red onions from Nashik, pomegranates, G9 Cavendish bananas, green chillies from Gujarat, drumsticks, okra, coconuts, lemons, and turmeric. We plan to expand into spices, grains, and meat products in Year 1.
              </p>
            </div>

            <div className="border-b pb-4">
              <h3 className="text-xl font-semibold mb-2">Which countries does RAFRAF INTERNATIONAL export to?</h3>
              <p className="text-lg">
                We export to UAE (primary market with focus on Al Aweer Market Dubai), Saudi Arabia, Qatar, Kuwait, and Iran. Our 5-year vision includes expansion to additional markets beyond the Gulf region.
              </p>
            </div>

            <div className="border-b pb-4">
              <h3 className="text-xl font-semibold mb-2">What makes RAFRAF INTERNATIONAL different from other exporters?</h3>
              <p className="text-lg">
                RafRaf International focuses on three core pillars: quality consistency across all shipments, timely delivery with established logistics partnerships, and fair pricing justified by quality standards. We compete on execution and reliability rather than claiming uniqueness in a crowded market.
              </p>
            </div>

            <div className="border-b pb-4">
              <h3 className="text-xl font-semibold mb-2">Who are RAFRAF INTERNATIONAL's target customers?</h3>
              <p className="text-lg">
                Our primary customers are B2B wholesalers and large-scale wholesale distributors in Gulf markets. We serve high-volume buyers who value quality consistency, competitive pricing, and reliable delivery schedules.
              </p>
            </div>

            <div className="border-b pb-4">
              <h3 className="text-xl font-semibold mb-2">How does RAFRAF INTERNATIONAL ensure product quality?</h3>
              <p className="text-lg">
                We maintain a multi-state supplier network across Nashik, Gujarat, South India, and Bhopal, with each region specializing in specific products. Our multi-supplier strategy mitigates seasonal gaps and ensures consistent quality year-round. We have established quality control standards and inspection protocols with all suppliers.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-primary text-primary-foreground p-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Partner with RafRaf International</h2>
          <p className="text-xl mb-6">
            Join Gulf market wholesalers who trust us for consistent quality and reliable delivery.
          </p>
          <a
            href="/contact"
            className="inline-block bg-background text-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Contact Us for Wholesale Inquiries
          </a>
        </section>
      </main>
    </div>
  )
}
