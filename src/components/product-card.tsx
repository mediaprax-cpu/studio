import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Eye } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onViewDetails?: (product: Product) => void;
}

export function ProductCard({ product, onViewDetails }: ProductCardProps) {
  const productImage = PlaceHolderImages.find(p => p.id === product.imageId);

  return (
    <Card className="w-full max-w-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
      <CardHeader className="p-0">
        <div className="relative h-64 w-full">
          {productImage && (
            <Image
              src={productImage.imageUrl}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              data-ai-hint={productImage.imageHint}
            />
          )}
        </div>
      </CardHeader>
      <CardContent className="p-4 bg-card">
        <CardTitle className="text-lg font-bold truncate">{product.name}</CardTitle>
        <p className="text-primary font-semibold text-xl mt-2">${product.price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="p-4 bg-card">
        {onViewDetails ? (
           <Button onClick={() => onViewDetails(product)} className="w-full rounded-full shadow-md">
            <Eye className="mr-2 h-4 w-4" /> View Details
          </Button>
        ) : (
          <Button asChild className="w-full rounded-full shadow-md">
            <Link href="/products">
                <Eye className="mr-2 h-4 w-4" /> View Details
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
