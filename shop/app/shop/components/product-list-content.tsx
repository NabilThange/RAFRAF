'use client';

import { useEffect } from 'react';
import { Product, Collection } from '@/lib/shopify/types';
import { ProductCard } from './product-card';
import ResultsControls from './results-controls';
import { useProducts } from '../providers/products-provider';
import { ProductGrid } from './product-grid';
import { Card } from '../../../components/ui/card';

interface ProductListContentProps {
  products: Product[];
  collections: Collection[];
}

export function ProductListContent({ products, collections }: ProductListContentProps) {
  const { setProducts, setOriginalProducts } = useProducts();

  // Set both original and filtered products in the provider whenever they change
  useEffect(() => {
    setOriginalProducts(products);
    setProducts(products);
  }, [products, setProducts, setOriginalProducts]);

  return (
    <>
      <ResultsControls className="max-md:hidden" collections={collections} products={products} />

      {products.length > 0 ? (
        <ProductGrid>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductGrid>
      ) : (
        <Card className="flex mr-sides flex-1 items-center justify-center">
          <p className="text text-muted-foreground font-medium">No products found</p>
        </Card>
      )}
    </>
  );
}
