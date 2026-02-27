import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export function BackButton() {
  return (
    <div className="fixed top-8 left-8 z-50">
      <Link 
        href="/" 
        className="flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="text-lg font-medium">Back</span>
      </Link>
    </div>
  );
}
