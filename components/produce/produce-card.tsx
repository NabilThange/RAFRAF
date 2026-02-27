import { cn } from '@/lib/utils';
import Image from 'next/image';
import { ProduceLabel } from './produce-label';

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

interface ProduceCardProps {
  product: Product;
  principal?: boolean;
  className?: string;
  labelPosition?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export function ProduceCard({
  product,
  principal = false,
  className,
  labelPosition = 'bottom-right',
}: ProduceCardProps) {
  if (principal) {
    return (
      <div className={cn('h-screen flex flex-col relative overflow-hidden', className)}>
        <div className="flex-1 flex flex-col overflow-hidden">
          <Image
            priority
            src={product.featuredImage.url}
            alt={product.featuredImage.altText}
            width={1000}
            height={100}
            quality={100}
            className="object-cover size-full flex-1"
          />
        </div>
        <div className="absolute bottom-0 left-0 grid w-full grid-cols-4 gap-6 pointer-events-none max-md:contents p-4 md:p-6">
          <ProduceLabel
            className="col-span-3 col-start-2 pointer-events-auto 2xl:col-start-3 2xl:col-span-2 shrink-0"
            product={product}
            principal
          />
        </div>
      </div>
    );
  }

  return (
    <div className={cn('relative', className)}>
      <div className="block w-full aspect-square">
        <Image
          src={product.featuredImage.url}
          alt={product.featuredImage.altText}
          width={1000}
          height={100}
          className="object-cover size-full"
        />
      </div>

      <div
        className={cn(
          'absolute flex p-4 md:p-6 inset-0 items-end pointer-events-none justify-end',
          labelPosition === 'top-left' && 'md:justify-start md:items-start',
          labelPosition === 'top-right' && 'md:justify-end md:items-start',
          labelPosition === 'bottom-left' && 'md:justify-start md:items-end',
          labelPosition === 'bottom-right' && 'md:justify-end md:items-end'
        )}
      >
        <ProduceLabel className="pointer-events-auto" product={product} />
      </div>
    </div>
  );
}
