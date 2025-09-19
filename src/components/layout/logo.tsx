import Link from 'next/link';
import Image from 'next/image';

export function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image 
        src="https://i.supaimg.com/019a4b5b-4d01-477e-876b-0ab0187ecd1f.png"
        alt="guglumuglu logo"
        width={150}
        height={150}
        className="rounded-full"
      />
    </Link>
  );
}
