import Link from 'next/link';
import { Feather } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary/30 mt-auto">
      <div className="container mx-auto max-w-7xl px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <Feather className="h-6 w-6 text-primary" />
            <span className="font-headline text-lg font-bold">Feathered Acres</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Feathered Acres. All rights reserved.
          </p>
          <nav className="flex gap-4">
            <Link href="/products" className="text-sm text-muted-foreground hover:text-primary">Products</Link>
            <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">About</Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
