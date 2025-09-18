'use client';

import Image from 'next/image';
import type { Product } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Store } from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  if (!product) return null;

  const productImage = PlaceHolderImages.find(p => p.id === product.imageId);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px] grid-cols-1 md:grid-cols-2 grid gap-8 p-8">
        <div className="relative h-96 w-full rounded-lg overflow-hidden">
          {productImage && (
            <Image
              src={productImage.imageUrl}
              alt={product.name}
              fill
              className="object-cover"
              data-ai-hint={productImage.imageHint}
            />
          )}
        </div>
        <div className="flex flex-col">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold mb-2">{product.name}</DialogTitle>
            <DialogDescription className="text-muted-foreground text-base">
              {product.description}
            </DialogDescription>
          </DialogHeader>
          <div className="my-6">
            <p className="text-3xl font-bold text-primary">${product.price.toFixed(2)}</p>
          </div>
          <div className="space-y-4 mb-8">
            <div>
              <h4 className="font-semibold mb-2">Colors:</h4>
              <div className="flex gap-2">
                {product.colors.map(color => (
                  <Badge key={color} variant="secondary" className="text-base px-3 py-1">{color}</Badge>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Sizes:</h4>
              <div className="flex gap-2 flex-wrap">
                {product.sizes.map(size => (
                  <Badge key={size} variant="outline" className="text-base px-3 py-1">{size}</Badge>
                ))}
              </div>
            </div>
          </div>
           <div className="mt-auto text-center bg-secondary/50 p-4 rounded-lg">
              <div className="flex items-center justify-center text-lg font-semibold">
                <Store className="mr-2 h-5 w-5 text-primary"/>
                Available in our store!
              </div>
              <p className="text-muted-foreground text-sm mt-1">Visit us to see this and more great items.</p>
            </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
