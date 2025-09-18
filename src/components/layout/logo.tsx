import Link from 'next/link';
import { Cloud, Sun, Star } from 'lucide-react';

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <div className="flex items-center justify-center">
        <Sun className="h-6 w-6 text-yellow-400" />
      </div>
      <span className="font-bold text-lg font-headline text-foreground">
        TinyThreads
      </span>
    </Link>
  );
}
