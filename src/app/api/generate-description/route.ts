import { NextResponse } from 'next/server';
import { generateProductDescription, GenerateProductDescriptionInput } from '@/ai/flows/generate-product-descriptions';

export async function POST(request: Request) {
  try {
    const input: GenerateProductDescriptionInput = await request.json();
    
    // Basic validation, can be enhanced with Zod on the API route as well
    if (!input.productName || !input.category) {
        return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    
    const result = await generateProductDescription(input);
    return NextResponse.json({ description: result.description });

  } catch (error) {
    console.error('Error generating description:', error);
    return NextResponse.json({ error: 'Failed to generate description.' }, { status: 500 });
  }
}
