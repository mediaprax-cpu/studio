import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { products, categories, testimonials } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, Star } from 'lucide-react';
import { ProductCard } from '@/components/product-card';

export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-kids');
  const featuredProducts = products.slice(0, 6);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full h-[60vh] md:h-[80vh] bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center overflow-hidden">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover object-center z-0"
              priority
              data-ai-hint={heroImage.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-black/30 z-10" />
          <div className="relative z-20 container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-lg font-headline">
              Bright Clothes for Bright Kids
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow-md">
              Discover our collection of fun, comfy and durable clothing for your little ones and buy it in store only.
            </p>
            <Button asChild size="lg" className="rounded-full shadow-lg hover:scale-105 transition-transform">
              <Link href="/products">
                Explore Collection <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Featured Categories */}
        <section id="categories" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">View by Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {categories.map((category) => {
                const categoryImage = PlaceHolderImages.find(p => p.id === category.imageId);
                return (
                  <Link href="/products" key={category.id} className="group">
                    <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-2xl">
                      <CardContent className="p-0">
                        <div className="relative h-80">
                          {categoryImage && (
                            <Image
                              src={categoryImage.imageUrl}
                              alt={category.name}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-500"
                              data-ai-hint={categoryImage.imageHint}
                            />
                          )}
                          <div className="absolute inset-0 bg-black/20" />
                          <div className="absolute bottom-6 left-6">
                            <h3 className="text-3xl font-bold text-white drop-shadow-md">{category.name}</h3>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Product Highlights Carousel */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Favorites</h2>
            <Carousel
              opts={{
                align: 'start',
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {featuredProducts.map((product) => (
                  <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <ProductCard product={product} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex" />
              <CarouselNext className="hidden sm:flex" />
            </Carousel>
            <div className="text-center mt-12">
              <Button asChild size="lg" variant="outline" className="rounded-full shadow-lg hover:scale-105 transition-transform bg-card">
                <Link href="/products">
                  View All Products
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Ferozpur Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.id} className="shadow-lg rounded-2xl">
                  <CardHeader>
                    <div className="flex items-center">
                      <Avatar className="h-12 w-12 mr-4">
                        <AvatarImage src={`https://i.pravatar.cc/48?u=${testimonial.id}`} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">"{testimonial.feedback}"</p>
                  </CardContent>
                  <CardFooter>
                    <div className="flex items-center gap-1 text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
