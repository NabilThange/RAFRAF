import type { Metadata } from 'next'
import Link from 'next/link'
import { BackButton } from '@/components/back-button'

export const metadata: Metadata = {
  title: 'Blog - Fresh Produce Export Insights & Industry News',
  description: 'Expert insights on agricultural exports, Gulf market trends, fresh produce logistics, and B2B wholesale strategies from RAFRAF INTERNATIONAL.',
  alternates: {
    canonical: '/blog',
  },
}

const blogPosts = [
  {
    slug: 'how-to-export-fresh-produce-india-to-uae',
    title: 'How to Export Fresh Produce from India to UAE: Complete Guide 2026',
    excerpt: 'Step-by-step guide for B2B exporters: documentation, logistics, Al Aweer Market entry, and quality standards for Gulf markets.',
    date: '2026-02-25',
    category: 'Export Guide',
    readTime: '8 min read',
  },
  {
    slug: 'nashik-onion-export-quality-standards',
    title: 'Nashik Red Onion Export: Quality Standards & Market Demand',
    excerpt: 'Why Nashik onions dominate Gulf markets. Quality grading, sizing (60mm+), packaging, and export procedures for wholesale buyers.',
    date: '2026-02-24',
    category: 'Product Guide',
    readTime: '6 min read',
  },
  {
    slug: 'al-aweer-market-dubai-supplier-guide',
    title: 'Al Aweer Market Dubai: Complete Supplier Guide for Exporters',
    excerpt: 'Navigate Dubai\'s largest wholesale produce hub. Market structure, buyer requirements, logistics, and success strategies.',
    date: '2026-02-23',
    category: 'Market Insights',
    readTime: '7 min read',
  },
  {
    slug: 'g9-cavendish-banana-export-india',
    title: 'G9 Cavendish Banana Export from India: Quality & Logistics',
    excerpt: 'India produces 33 million metric tonnes of bananas annually. Learn export standards, ripening stages, and Gulf market preferences.',
    date: '2026-02-22',
    category: 'Product Guide',
    readTime: '5 min read',
  },
  {
    slug: 'india-uae-agricultural-trade-2026',
    title: 'India-UAE Agricultural Trade in 2026: Opportunities for Exporters',
    excerpt: 'India-UAE bilateral trade reached $100.06 billion in FY25. Explore agricultural export opportunities and market trends.',
    date: '2026-02-21',
    category: 'Market Insights',
    readTime: '9 min read',
  },
  {
    slug: 'pomegranate-export-quality-grading',
    title: 'Pomegranate Export from India: Quality Grading & Best Practices',
    excerpt: 'India exports over 75,000 metric tons of pomegranates annually. Quality standards, packaging, and Gulf market requirements.',
    date: '2026-02-20',
    category: 'Product Guide',
    readTime: '6 min read',
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <BackButton />
      <main className="container mx-auto px-4 py-16">
        <section className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Fresh Produce Export Insights
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Expert guidance on agricultural exports, Gulf market trends, and B2B wholesale strategies from RAFRAF INTERNATIONAL.
          </p>
        </section>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="border rounded-lg overflow-hidden hover:shadow-lg transition"
            >
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h2 className="text-xl font-bold mb-3 line-clamp-2">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-primary transition"
                  >
                    {post.title}
                  </Link>
                </h2>
                
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <time className="text-sm text-muted-foreground">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-primary font-semibold hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  )
}
