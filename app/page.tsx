import { CircularNav } from "@/components/circular-nav";
import { FamilyButtonDemo } from "@/components/family-button-demo";
import { HeroSection } from "@/components/sections/hero-section";
import { PhilosophySection } from "@/components/sections/philosophy-section";
import { TextImageRevealSection } from "@/components/sections/text-image-reveal-section";
import { FeaturedProductsSection } from "@/components/sections/featured-products-section";
import { TechnologySection } from "@/components/sections/technology-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { CollectionSection } from "@/components/sections/collection-section";
import { EditorialSection } from "@/components/sections/editorial-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FooterSection } from "@/components/sections/footer-section";
import { TimelessAestheticsSection } from "@/components/sections/timeless-aesthetics-section";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RafRaf International — Fresh Produce Exporter India to UAE',
  description: 'B2B wholesale supplier of fresh vegetables and fruits from India to Gulf markets. Specializing in Nashik onions, G9 Cavendish bananas, and pomegranates.',
  alternates: { canonical: 'https://www.rafraf.org/' },
};

export default function Home() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What products does RAFRAF export from India to UAE?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'RAFRAF INTERNATIONAL exports premium fresh produce including Nashik red onions, pomegranates, G9 Cavendish bananas, green chillies, and assorted vegetables to UAE and Gulf markets.'
        }
      },
      {
        '@type': 'Question',
        name: 'What is the minimum order quantity for wholesale export?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We cater to B2B wholesale partners, primarily supplying to Al Aweer Market in Dubai. We currently process shipments averaging 5-20 tonnes depending on the target market requirements.'
        }
      }
    ]
  };

  return (
    <main className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c') }}
      />
      <CircularNav />
      <FamilyButtonDemo />
      <HeroSection />
      <PhilosophySection />
      <TimelessAestheticsSection />
      <CollectionSection />
      {/* <TextImageRevealSection /> */}
      <FeaturedProductsSection />
      {/* <TechnologySection /> */}
      {/* <GallerySection /> */}
      <EditorialSection />
      <TestimonialsSection />
      <FooterSection />
    </main>
  );
}
