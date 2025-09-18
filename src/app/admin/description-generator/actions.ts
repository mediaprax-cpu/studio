
'use server';

import { generateProductDescription, GenerateProductDescriptionInput } from '@/ai/flows/generate-product-descriptions';

export async function createDescription(input: GenerateProductDescriptionInput) {
  try {
    const result = await generateProductDescription(input);
    return { success: true, description: result.description };
  } catch (error) {
    console.error('Error generating description:', error);
    return { success: false, error: 'Failed to generate description.' };
  }
}
