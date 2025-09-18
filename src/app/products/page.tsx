'use client';

import { useState } from 'react';
import type { Product } from '@/lib/data';
import { products as allProducts } from '@/lib/data';
import { ProductFilters } from '@/components/product-filters';
import { ProductGrid } from '@/components/product-grid';
import { filterProductsBySearch } from '../actions';
import { useDebouncedCallback } from 'use-debounce';

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>(allProducts);
  const [loading, setLoading] = useState(false);

  const handleSearch = useDebouncedCallback(async (query: string) => {
    setLoading(true);
    const filteredProducts = await filterProductsBySearch(query);
    setProducts(filteredProducts);
    setLoading(false);
  }, 300);

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 font-headline">Our Collection</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Explore our range of playful and comfy clothes, perfect for every little adventurer.
        </p>
      </header>
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-1/4 lg:w-1/5">
          <ProductFilters onSearchChange={handleSearch} />
        </aside>
        <main className="w-full md:w-3/4 lg:w-4/5">
          <ProductGrid products={products} loading={loading} />
        </main>
      </div>
    </div>
  );
}
