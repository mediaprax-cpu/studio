
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Wand2 } from 'lucide-react';
import { Skeleton } from './ui/skeleton';

const formSchema = z.object({
  productName: z.string().min(1, 'Product name is required.'),
  category: z.string().min(1, 'Category is required.'),
  targetAudience: z.string().min(1, 'Target audience is required.'),
  colors: z.string().min(1, 'Colors are required.'),
  sizes: z.string().min(1, 'Sizes are required.'),
  material: z.string().min(1, 'Material is required.'),
  style: z.string().min(1, 'Style is required.'),
  additionalDetails: z.string().optional(),
});

export function DescriptionGeneratorForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [generatedDescription, setGeneratedDescription] = useState('');
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productName: '',
      category: 'shirts',
      targetAudience: 'boys',
      colors: '',
      sizes: '',
      material: 'cotton',
      style: 'casual',
      additionalDetails: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    setGeneratedDescription('');
    try {
      // Simple client-side placeholder generation to allow static export
      const { productName, category, targetAudience, colors, sizes, material, style, additionalDetails } = values;
      const sentenceParts: string[] = [];
      sentenceParts.push(`${productName} is a ${style} ${material} ${category} designed for ${targetAudience}.`);
      if (colors) sentenceParts.push(`Available in ${colors}.`);
      if (sizes) sentenceParts.push(`Sizes include ${sizes}.`);
      if (additionalDetails) sentenceParts.push(additionalDetails);
      const description = sentenceParts.join(' ');
      // Mimic latency
      await new Promise(r => setTimeout(r, 600));
      setGeneratedDescription(description);
    } catch (error) {
      console.error(error);
      toast({
        variant: 'destructive',
        title: 'Generator error',
        description: 'Failed to generate description.',
      });
    }
    setIsSubmitting(false);
  }

  return (
    <Card className="shadow-lg rounded-2xl">
      <CardHeader>
        <CardTitle>Product Details</CardTitle>
        <CardDescription>Enter the product information to generate a description.</CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-6">
            <FormField
              control={form.control}
              name="productName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Dino Adventure T-Shirt" {...field} className="rounded-full" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="rounded-full">
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="shirts">Shirts</SelectItem>
                        <SelectItem value="pants">Pants</SelectItem>
                        <SelectItem value="dresses">Dresses</SelectItem>
                        <SelectItem value="outerwear">Outerwear</SelectItem>
                        <SelectItem value="pajamas">Pajamas</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="targetAudience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Target Audience</FormLabel>
                     <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="rounded-full">
                          <SelectValue placeholder="Select an audience" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="boys">Boys</SelectItem>
                        <SelectItem value="girls">Girls</SelectItem>
                        <SelectItem value="toddlers">Toddlers</SelectItem>
                         <SelectItem value="newborn">Newborn</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <FormField
                  control={form.control}
                  name="colors"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Colors</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Green, Blue" {...field} className="rounded-full"/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="sizes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Sizes</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., 2T, 3T, 4T" {...field} className="rounded-full"/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                control={form.control}
                name="material"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Material</FormLabel>
                     <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="rounded-full">
                          <SelectValue placeholder="Select a material" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="cotton">Cotton</SelectItem>
                        <SelectItem value="polyester">Polyester</SelectItem>
                        <SelectItem value="fleece">Fleece</SelectItem>
                         <SelectItem value="organic cotton">Organic Cotton</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
                <FormField
                control={form.control}
                name="style"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Style</FormLabel>
                     <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="rounded-full">
                          <SelectValue placeholder="Select a style" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="casual">Casual</SelectItem>
                        <SelectItem value="formal">Formal</SelectItem>
                        <SelectItem value="playful">Playful</SelectItem>
                         <SelectItem value="sporty">Sporty</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
             </div>
            <FormField
              control={form.control}
              name="additionalDetails"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Additional Details</FormLabel>
                  <FormControl>
                    <Textarea placeholder="e.g., Glows in the dark, has pockets for treasures" {...field} className="rounded-2xl" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex flex-col items-stretch gap-6">
            <Button type="submit" size="lg" disabled={isSubmitting} className="w-full rounded-full shadow-md">
              <Wand2 className="mr-2 h-5 w-5" />
              {isSubmitting ? 'Generating...' : 'Generate Description'}
            </Button>
            
            {(isSubmitting || generatedDescription) && (
              <div className="w-full p-6 bg-secondary/50 rounded-2xl space-y-4">
                  <h3 className="text-lg font-semibold">Generated Description:</h3>
                  {isSubmitting ? (
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-3/4" />
                    </div>
                  ) : (
                    <p className="text-muted-foreground">{generatedDescription}</p>
                  )}
              </div>
            )}
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
