import Image from 'next/image';
import { storyChapters } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function StoryPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-headline">Our Story</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            From a tiny doodle to a closet full of joy, here’s how guglumuglu came to be.
          </p>
        </header>

        <div className="space-y-20">
          {storyChapters.map((chapter, index) => {
            const chapterImage = PlaceHolderImages.find(p => p.id === chapter.imageId);
            const isReversed = index % 2 !== 0;

            return (
              <section key={chapter.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={`relative w-full h-80 md:h-96 rounded-3xl overflow-hidden shadow-2xl ${isReversed ? 'lg:order-2' : ''}`}>
                  {chapterImage && (
                    <Image
                      src={chapterImage.imageUrl}
                      alt={chapter.title}
                      fill
                      className="object-cover"
                      data-ai-hint={chapterImage.imageHint}
                    />
                  )}
                </div>
                <div className={`space-y-4 ${isReversed ? 'lg:order-1' : ''}`}>
                  <h2 className="text-3xl md:text-4xl font-bold font-headline">{chapter.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {chapter.text}
                  </p>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
