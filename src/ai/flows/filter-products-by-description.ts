'use server';
/**
 * @fileOverview Implements a Genkit flow to filter products based on a description.
 *
 * - filterProductsByDescription - A function that filters products based on a description.
 * - FilterProductsByDescriptionInput - The input type for the filterProductsByDescription function.
 * - FilterProductsByDescriptionOutput - The return type for the filterProductsByDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const FilterProductsByDescriptionInputSchema = z.object({
  products: z.array(z.any()).describe('An array of product objects to filter.'),
  description: z.string().describe('The description to filter products by.'),
});
export type FilterProductsByDescriptionInput = z.infer<typeof FilterProductsByDescriptionInputSchema>;

const FilterProductsByDescriptionOutputSchema = z.array(z.any()).describe('An array of filtered product objects.');
export type FilterProductsByDescriptionOutput = z.infer<typeof FilterProductsByDescriptionOutputSchema>;

export async function filterProductsByDescription(
  input: FilterProductsByDescriptionInput
): Promise<FilterProductsByDescriptionOutput> {
  return filterProductsByDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'filterProductsByDescriptionPrompt',
  input: {
    schema: FilterProductsByDescriptionInputSchema,
  },
  output: {
    schema: FilterProductsByDescriptionOutputSchema,
  },
  prompt: `You are an expert product filter.

You will be given a list of products and a description.

Filter the products to only include products that match the description.

Products: {{{JSON.stringify(products)}}}
Description: {{{description}}}

Return the filtered list of products as a JSON array.`,
});

const filterProductsByDescriptionFlow = ai.defineFlow(
  {
    name: 'filterProductsByDescriptionFlow',
    inputSchema: FilterProductsByDescriptionInputSchema,
    outputSchema: FilterProductsByDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    try {
      return JSON.parse(output!.toString());
    } catch (e) {
      console.error('Could not parse JSON from prompt output, returning empty array.');
      return [];
    }
  }
);
