'use client';

import { useState } from 'react';
import type { Product } from '@/lib/data';
import { ProductCard } from './product-card';
import { ProductModal } from './product-modal';
import { AnimatePresence, motion } from 'framer-motion';
import { Skeleton } from './ui/skeleton';

interface ProductGridProps {
  products: Product[];
  loading?: boolean;
}

export function ProductGrid({ products, loading = false }: ProductGridProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence>
        {loading ? (
            Array.from({ length: 9 }).map((_, i) => (
                <CardSkeleton key={i} />
            ))
        ) : products.length > 0 ? (
          products.map((product) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <ProductCard product={product} onViewDetails={handleViewDetails} />
            </motion.div>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <h3 className="text-2xl font-bold">No products found!</h3>
            <p className="text-muted-foreground">Try adjusting your search or filters.</p>
          </div>
        )}
        </AnimatePresence>
      </motion.div>

      <ProductModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={handleCloseModal}
      />
    </>
  );
}


const CardSkeleton = () => (
    <div className="space-y-4">
        <Skeleton className="h-64 w-full rounded-2xl" />
        <div className="space-y-2 p-2">
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-8 w-1/2" />
        </div>
        <Skeleton className="h-12 w-full rounded-full" />
    </div>
);
