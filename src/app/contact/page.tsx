import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  const mapImage = PlaceHolderImages.find(p => p.id === 'contact-map');

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-headline">Get in Touch</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We'd love to hear from you! Send us a message, and we'll get back to you as soon as possible.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="shadow-lg rounded-2xl p-8">
            <CardContent className="p-0">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your Name" className="rounded-full" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" className="rounded-full" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Tell us what's on your mind..." className="rounded-2xl" rows={6}/>
                </div>
                <Button type="submit" size="lg" className="w-full rounded-full shadow-md">Send Message</Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="shadow-lg rounded-2xl">
              <CardContent className="p-8 space-y-4">
                <h3 className="text-2xl font-bold mb-4">Our Info</h3>
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-primary" />
                  <p>Main Bazaar, Delhi Gate, Firozpur, 152002</p>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-primary" />
                  <a href="mailto:hello@guglumuglu.com" className="hover:underline">hello@guglumuglu.com</a>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-primary" />
                  <a href="tel:+919888226615" className="hover:underline">+91 9888226615</a>
                </div>
              </CardContent>
            </Card>
            <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-lg">
                {mapImage && (
                    <Image
                        src={mapImage.imageUrl}
                        alt="Store location map"
                        fill
                        className="object-cover"
                        data-ai-hint={mapImage.imageHint}
                    />
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
