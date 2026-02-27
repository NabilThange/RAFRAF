import { Badge } from '../ui/badge';
import { cn } from '@/lib/utils';
import { Product } from '@/lib/shopify/types';
import Link from 'next/link';
import { GetQuoteButton } from '../quote/get-quote-button';

export function FeaturedProductLabel({
  product,
  principal = false,
  className,
}: {
  product: Product;
  principal?: boolean;
  className?: string;
}) {
  if (principal) {
    return (
      <div
        className={cn(
          'flex flex-col grid-cols-2 gap-y-3 p-4 w-full bg-white md:w-fit md:rounded-md md:grid',
          className
        )}
      >
        <div className="col-span-2">
          <Badge className="font-black capitalize rounded-full">Featured</Badge>
        </div>
        <Link href={`/product/${product.handle}`} className="col-span-1 self-start text-2xl font-semibold">
          {product.title}
        </Link>
        <div className="col-span-1 mb-10">
          {product.tags.length > 0 ? (
            <p className="mb-3 text-sm italic font-medium">{product.tags.join('. ')}</p>
          ) : null}
          <p className="text-sm font-medium line-clamp-3">{product.description}</p>
        </div>
        <GetQuoteButton productName={product.title} className="col-span-2 flex gap-20 justify-between pr-2" size="lg" />
      </div>
    );
  }

  return (
    <div className={cn('flex gap-2 items-center p-2 pl-8 bg-white rounded-md max-w-full', className)}>
      <div className="pr-6 leading-4 overflow-hidden">
        <Link
          href={`/product/${product.handle}`}
          className="inline-block w-full truncate text-base font-semibold opacity-80 mb-1.5"
        >
          {product.title}
        </Link>
      </div>
      <GetQuoteButton productName={product.title} size="lg" />
    </div>
  );
}
