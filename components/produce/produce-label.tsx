"use client"

import { cn } from '@/lib/utils';
import { useState } from 'react';
import { QuotePopup } from './quote-popup';

interface Product {
  id: number;
  title: string;
  handle: string;
  description: string;
  shortDescription?: string;
  tags: string[];
  featuredImage: {
    url: string;
    altText: string;
  };
}

export function ProduceLabel({
  product,
  principal = false,
  className,
}: {
  product: Product;
  principal?: boolean;
  className?: string;
}) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  if (principal) {
    return (
      <>
        <div
          className={cn(
            'flex flex-col grid-cols-2 gap-y-3 p-4 w-full bg-white md:w-fit md:rounded-md md:grid',
            className
          )}
        >
          <div className="col-span-2">
            <span className="inline-block px-3 py-1 text-xs font-black uppercase rounded-full bg-black text-white">
              Featured
            </span>
          </div>
          <h3 className="col-span-1 self-start text-2xl font-semibold">
            {product.title}
          </h3>
          <div className="col-span-1 mb-10">
            {product.tags.length > 0 ? (
              <p className="mb-3 text-sm italic font-medium">{product.tags.join('. ')}</p>
            ) : null}
            <p className="text-sm font-medium line-clamp-3">{product.description}</p>
          </div>
          <button 
            onClick={() => setIsPopupOpen(true)}
            className="col-span-2 flex gap-20 justify-between pr-2 px-6 py-3 text-base font-semibold bg-black text-white rounded-md hover:bg-black/90 transition-colors cursor-pointer"
          >
            <span>Get Quote</span>
            <span>→</span>
          </button>
        </div>
        <QuotePopup 
          isOpen={isPopupOpen} 
          onClose={() => setIsPopupOpen(false)} 
          productName={product.title}
        />
      </>
    );
  }

  return (
    <>
      <div className={cn('flex gap-2 items-center p-2 pl-8 bg-white rounded-md max-w-full', className)}>
        <div className="pr-6 leading-4 overflow-hidden">
          <h3 className="inline-block w-full truncate text-base font-semibold opacity-80 mb-1.5">
            {product.title}
          </h3>
          {product.shortDescription && (
            <p className="text-xs font-medium opacity-60 truncate">
              {product.shortDescription}
            </p>
          )}
        </div>
        <button 
          onClick={() => setIsPopupOpen(true)}
          className="px-4 py-2 text-sm font-semibold bg-black text-white rounded-md hover:bg-black/90 transition-colors whitespace-nowrap cursor-pointer"
        >
          Get Quote
        </button>
      </div>
      <QuotePopup 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
        productName={product.title}
      />
    </>
  );
}
