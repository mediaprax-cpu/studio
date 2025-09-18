'use server';

/**
 * @fileOverview Implements a Genkit flow to filter products based on a natural language description.
 *
 * - interactiveProductFiltering - A function that filters products based on a natural language description.
 * - InteractiveProductFilteringInput - The input type for the interactiveProductFiltering function.
 * - InteractiveProductFilteringOutput - The return type for the interactiveProductFiltering function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const InteractiveProductFilteringInputSchema = z.object({
  products: z.array(z.any()).describe('An array of product objects to filter.'),
  description: z.string().describe('The natural language description to filter products by (e.g., \'a red dress for a 5-year-old\').'),
});
export type InteractiveProductFilteringInput = z.infer<typeof InteractiveProductFilteringInputSchema>;

const InteractiveProductFilteringOutputSchema = z.array(z.any()).describe('An array of filtered product objects.');
export type InteractiveProductFilteringOutput = z.infer<typeof InteractiveProductFilteringOutputSchema>;

export async function interactiveProductFiltering(
  input: InteractiveProductFilteringInput
): Promise<InteractiveProductFilteringOutput> {
  return interactiveProductFilteringFlow(input);
}

const prompt = ai.definePrompt({
  name: 'interactiveProductFilteringPrompt',
  input: {schema: InteractiveProductFilteringInputSchema},
  output: {schema: InteractiveProductFilteringOutputSchema},
  prompt: `You are an expert product filter.

You will be given a list of products and a natural language description of the desired product.

Filter the products to only include products that best match the description.

Products: {{{JSON.stringify(products)}}}
Description: {{{description}}}

Return the filtered list of products as a JSON array. If no products match the description, return an empty array.`,
});

const interactiveProductFilteringFlow = ai.defineFlow(
  {
    name: 'interactiveProductFilteringFlow',
    inputSchema: InteractiveProductFilteringInputSchema,
    outputSchema: InteractiveProductFilteringOutputSchema,
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
