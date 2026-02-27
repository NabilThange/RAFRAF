'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { GetQuoteModal } from './get-quote-modal';

interface GetQuoteButtonProps {
  productName: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function GetQuoteButton({ productName, className = '', size = 'lg' }: GetQuoteButtonProps) {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setQuoteModalOpen(true)}
        className={className}
        size={size}
        variant="default"
      >
        Get Quote
      </Button>
      <GetQuoteModal 
        isOpen={quoteModalOpen} 
        onOpenChange={setQuoteModalOpen} 
        productName={productName}
      />
    </>
  );
}
