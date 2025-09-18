'use server';

/**
 * @fileOverview AI-powered product description generator for clothing items.
 *
 * - generateProductDescription - A function to generate product descriptions.
 * - GenerateProductDescriptionInput - The input type for the generateProductDescription function.
 * - GenerateProductDescriptionOutput - The return type for the generateProductDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProductDescriptionInputSchema = z.object({
  productName: z.string().describe('The name of the product.'),
  category: z.string().describe('The category of the clothing item (e.g., shirts, pants, dresses).'),
  targetAudience: z.string().describe('The target audience for the clothing item (e.g., boys, girls, toddlers).'),
  colors: z.string().describe('The colors of the clothing item.'),
  sizes: z.string().describe('Available sizes for the clothing item.'),
  material: z.string().describe('The material of the clothing item (e.g., cotton, polyester).'),
  style: z.string().describe('The style of the clothing item (e.g., casual, formal, playful).'),
  additionalDetails: z.string().describe('Any additional details about the product.'),
});
export type GenerateProductDescriptionInput = z.infer<typeof GenerateProductDescriptionInputSchema>;

const GenerateProductDescriptionOutputSchema = z.object({
  description: z.string().describe('A catchy and engaging product description.'),
});
export type GenerateProductDescriptionOutput = z.infer<typeof GenerateProductDescriptionOutputSchema>;

export async function generateProductDescription(input: GenerateProductDescriptionInput): Promise<GenerateProductDescriptionOutput> {
  return generateProductDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateProductDescriptionPrompt',
  input: {schema: GenerateProductDescriptionInputSchema},
  output: {schema: GenerateProductDescriptionOutputSchema},
  prompt: `You are a creative copywriter specializing in writing product descriptions for a kids clothing store.

  Write a catchy and engaging product description for the following clothing item, using a tone that appeals to parents and children.
  Incorporate details about the product's features, benefits, and style.

  Product Name: {{{productName}}}
  Category: {{{category}}}
  Target Audience: {{{targetAudience}}}
  Colors: {{{colors}}}
  Sizes: {{{sizes}}}
  Material: {{{material}}}
  Style: {{{style}}}
  Additional Details: {{{additionalDetails}}}
  `,
});

const generateProductDescriptionFlow = ai.defineFlow(
  {
    name: 'generateProductDescriptionFlow',
    inputSchema: GenerateProductDescriptionInputSchema,
    outputSchema: GenerateProductDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
