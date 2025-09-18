import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { teamMembers } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Heart, Smile, Sparkles } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-headline">About guglumuglu</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We're a small team with a big heart, dedicated to making childhood a little more colorful and a lot more comfortable.
          </p>
        </header>

        {/* Mission and Values Section */}
        <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center">
                    <div className="bg-primary/20 rounded-full p-6 mb-4">
                        <Heart className="w-12 h-12 text-primary"/>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Made with Love</h3>
                    <p className="text-muted-foreground">Every stitch is a testament to our passion for quality and care for your little ones.</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="bg-accent/30 rounded-full p-6 mb-4">
                        <Smile className="w-12 h-12 text-yellow-500"/>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Sparking Joy</h3>
                    <p className="text-muted-foreground">We believe clothes should be fun! Our playful designs are made to inspire smiles and adventures.</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="bg-secondary/50 rounded-full p-6 mb-4">
                        <Sparkles className="w-12 h-12 text-green-500"/>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Lasting Quality</h3>
                    <p className="text-muted-foreground">Kids play hard. We create durable, comfy clothes that can keep up with their boundless energy.</p>
                </div>
            </div>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Meet the Team</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {teamMembers.map((member) => {
              const memberImage = PlaceHolderImages.find(p => p.id === member.imageId);
              return (
                <Card key={member.id} className="w-full max-w-xs text-center shadow-lg rounded-2xl p-6">
                  <CardContent className="flex flex-col items-center">
                    <Avatar className="h-32 w-32 mb-4 border-4 border-primary/50">
                      {memberImage && <AvatarImage src={memberImage.imageUrl} alt={member.name} data-ai-hint={memberImage.imageHint} className="object-cover" />}
                      <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-primary font-semibold">{member.role}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
