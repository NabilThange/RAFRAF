import React, { Suspense, useState } from 'react';
import Link from 'next/link';
import { Product } from '@/lib/shopify/types';
import { ProductImage } from './product-image';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon } from 'lucide-react';
import { GetQuoteModal } from '@/components/quote/get-quote-modal';

export const ProductCard = ({ product }: { product: Product }) => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  return (
    <>
      <div className="relative w-full aspect-[3/4] md:aspect-square bg-muted group overflow-hidden">
        <Link
          href={`/product/${product.handle}`}
          className="block size-full focus-visible:outline-none"
          aria-label={`View details for ${product.title}`}
          prefetch
        >
          <Suspense fallback={null}>
            <ProductImage product={product} />
          </Suspense>
        </Link>

        {/* Interactive Overlay */}
        <div className="absolute inset-0 p-2 w-full pointer-events-none">
          <div className="flex gap-6 justify-between items-baseline px-3 py-1 w-full font-semibold transition-all duration-300 translate-y-0 max-md:hidden group-hover:opacity-0 group-focus-visible:opacity-0 group-hover:-translate-y-full group-focus-visible:-translate-y-full">
            <p className="text-sm uppercase 2xl:text-base text-balance">{product.title}</p>
          </div>

          <div className="flex absolute inset-x-3 bottom-3 flex-col gap-8 px-2 py-3 rounded-md transition-all duration-300 pointer-events-none bg-popover md:opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 md:translate-y-1/3 group-hover:translate-y-0 group-focus-visible:translate-y-0 group-hover:pointer-events-auto group-focus-visible:pointer-events-auto max-md:pointer-events-auto">
            <div className="grid grid-cols-2 gap-x-4 gap-y-8 items-end">
              <p className="text-lg font-semibold text-pretty">{product.title}</p>
              <Button className="col-start-2" size="sm" variant="default" asChild>
                <Link href={`/product/${product.handle}`}>
                  <div className="flex justify-between items-center w-full">
                    <span>View</span>
                    <ArrowRightIcon />
                  </div>
                </Link>
              </Button>
              <Button 
                className="col-span-2 w-full" 
                size="sm" 
                variant="default"
                onClick={() => setQuoteModalOpen(true)}
              >
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
      <GetQuoteModal 
        isOpen={quoteModalOpen} 
        onOpenChange={setQuoteModalOpen} 
        productName={product.title}
      />
    </>
  );
};
