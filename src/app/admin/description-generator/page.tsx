
import { DescriptionGeneratorForm } from '@/components/description-generator-form';

export default function DescriptionGeneratorPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 font-headline">Product Description Generator</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Fill in the product details below and let our AI create a catchy description for you!
        </p>
      </header>
      <main className="max-w-4xl mx-auto">
        <DescriptionGeneratorForm />
      </main>
    </div>
  );
}
