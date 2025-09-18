'use client';

import { useState, useEffect, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import type { Product } from '@/lib/data';
import { products as allProducts } from '@/lib/data';
import { ProductFilters, type Filters } from '@/components/product-filters';
import { ProductGrid } from '@/components/product-grid';
import { filterProductsBySearch } from '../actions';
import { useDebouncedCallback } from 'use-debounce';

const PRODUCTS_PER_PAGE = 9;

function ProductsPageContent() {
  const searchParams = useSearchParams();
  const [products, setProducts] = useState<Product[]>(allProducts);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState<Filters>({
    category: searchParams.get('category') || 'all',
    sizes: [],
    search: '',
  });

  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setFilters(prev => ({...prev, category}));
    }
  }, [searchParams]);

  const handleSearch = useDebouncedCallback(async (query: string) => {
    setLoading(true);
    const filteredProducts = await filterProductsBySearch(query);
    setProducts(filteredProducts);
    setLoading(false);
  }, 300);

  const handleFilterChange = (newFilters: Filters) => {
    setFilters(newFilters);
    if(newFilters.search !== filters.search) {
      handleSearch(newFilters.search);
    }
  };

  const filteredProducts = useMemo(() => {
    let filtered = filters.search ? products : allProducts;

    if (filters.category !== 'all') {
      filtered = filtered.filter(p => p.category === filters.category);
    }

    if (filters.sizes.length > 0) {
      filtered = filtered.filter(p => p.sizes.some(size => filters.sizes.includes(size)));
    }

    return filtered;
  }, [filters, products]);

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
          <ProductFilters 
            initialFilters={filters}
            onFilterChange={handleFilterChange}
          />
        </aside>
        <main className="w-full md:w-3/4 lg:w-4/5">
          <ProductGrid products={filteredProducts} loading={loading} itemsPerPage={PRODUCTS_PER_PAGE} />
        </main>
      </div>
    </div>
  );
}

export default function ProductsPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ProductsPageContent />
        </Suspense>
    );
}
