import Link from 'next/link';
import Image from 'next/image';

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Image 
        src="https://placehold.co/40x40/FF69B4/FFFFFF?text=G&font=comic-sans-ms"
        alt="guglumuglu logo"
        width={40}
        height={40}
        className="rounded-full"
      />
      <span className="font-bold text-lg font-headline text-foreground">
        guglumuglu
      </span>
    </Link>
  );
}
