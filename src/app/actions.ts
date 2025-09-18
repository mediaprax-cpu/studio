'use server';

import { filterProductsByDescription } from '@/ai/flows/filter-products-by-description';
import { products as allProducts, Product } from '@/lib/data';

export async function filterProductsBySearch(query: string): Promise<Product[]> {
  if (!query) return allProducts;
  
  try {
    const filtered = await filterProductsByDescription({
      products: allProducts,
      description: query,
    });
    // The AI flow can return objects with slightly different structures.
    // We map the results to our Product type to ensure consistency.
    const productMap = new Map(allProducts.map(p => [p.id, p]));
    const validFilteredProducts: Product[] = [];
    if (Array.isArray(filtered)) {
      filtered.forEach((item: any) => {
        if(item && typeof item === 'object' && 'id' in item && productMap.has(item.id)) {
           // To ensure all fields are present, we get the original product
           validFilteredProducts.push(productMap.get(item.id)!);
        }
      });
    }

    if (validFilteredProducts.length > 0) {
      return validFilteredProducts;
    }

    // Fallback if AI returns nothing useful
    return allProducts.filter(p => 
      p.name.toLowerCase().includes(query.toLowerCase()) || 
      p.description.toLowerCase().includes(query.toLowerCase())
    );

  } catch (error) {
    console.error('AI filter failed:', error);
    // Fallback to simple text search on error
    return allProducts.filter(p => 
      p.name.toLowerCase().includes(query.toLowerCase()) || 
      p.description.toLowerCase().includes(query.toLowerCase())
    );
  }
}
