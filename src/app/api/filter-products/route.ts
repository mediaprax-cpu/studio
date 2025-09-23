import { NextResponse } from 'next/server';
import { filterProductsByDescription } from '@/ai/flows/filter-products-by-description';
import { products as allProducts, Product } from '@/lib/data';

export async function POST(request: Request) {
  try {
    const { description } = await request.json();

    if (!description) {
      return NextResponse.json({ error: 'Description is required' }, { status: 400 });
    }
    
    const filtered = await filterProductsByDescription({
      products: allProducts,
      description: description,
    });

    const productMap = new Map(allProducts.map(p => [p.id, p]));
    const validFilteredProducts: Product[] = [];
    if (Array.isArray(filtered)) {
      filtered.forEach((item: any) => {
        if(item && typeof item === 'object' && 'id' in item && productMap.has(item.id)) {
           validFilteredProducts.push(productMap.get(item.id)!);
        }
      });
    }

    return NextResponse.json(validFilteredProducts);

  } catch (error) {
    console.error('AI filter failed:', error);
    return NextResponse.json({ error: 'Failed to filter products using AI' }, { status: 500 });
  }
}
