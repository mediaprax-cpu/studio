import Link from 'next/link';
import { Github, Twitter, Instagram } from 'lucide-react';
import { Logo } from './logo';
import { navLinks } from '@/lib/data';

export function Footer() {
  return (
    <footer className="bg-secondary/50 text-foreground/80">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm">Bright Clothes for Bright Kids. Fun, comfy, and durable clothing for your little ones.</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Contact Us</h3>
            <address className="not-italic text-sm space-y-2">
              <p>123 Sunshine Lane</p>
              <p>Playville, PV 45678</p>
              <a href="mailto:hello@tinythreads.com" className="hover:text-primary transition-colors">hello@tinythreads.com</a>
            </address>
          </div>
          <div>
            <h3 className="font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors"><Twitter /></a>
              <a href="#" className="hover:text-primary transition-colors"><Instagram /></a>
              <a href="#" className="hover:text-primary transition-colors"><Github /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-sm">
          <p>&copy; {new Date().getFullYear()} TinyThreads Emporium. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
