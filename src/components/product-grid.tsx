'use client';

import { useState } from 'react';
import type { Product } from '@/lib/data';
import { ProductCard } from './product-card';
import { ProductModal } from './product-modal';
import { AnimatePresence, motion } from 'framer-motion';
import { Skeleton } from './ui/skeleton';
import { Button } from './ui/button';

interface ProductGridProps {
  products: Product[];
  loading?: boolean;
  itemsPerPage?: number;
}

export function ProductGrid({ products, loading = false, itemsPerPage = 9 }: ProductGridProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const paginatedProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  
  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence>
        {loading ? (
            Array.from({ length: itemsPerPage }).map((_, i) => (
                <CardSkeleton key={i} />
            ))
        ) : paginatedProducts.length > 0 ? (
          paginatedProducts.map((product) => (
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

       {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-12">
          <Button 
            onClick={() => handlePageChange(currentPage - 1)} 
            disabled={currentPage === 1}
            variant="outline"
          >
            Previous
          </Button>
          <span className="text-muted-foreground">
            Page {currentPage} of {totalPages}
          </span>
          <Button 
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            variant="outline"
          >
            Next
          </Button>
        </div>
      )}

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
