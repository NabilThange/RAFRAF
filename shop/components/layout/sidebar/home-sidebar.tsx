import { ShopLinks } from '../shop-links';
import { Collection } from '@/lib/shopify/types';

interface HomeSidebarProps {
  collections: Collection[];
}

export function HomeSidebar({ collections }: HomeSidebarProps) {
  return (
    <aside className="max-md:hidden col-span-4 h-screen sticky top-0 p-sides pt-top-spacing flex flex-col justify-between">
      <div>
        <p className="italic tracking-tighter text-base">Fresh. Quality. Reliable.</p>
        <div className="mt-5 text-base leading-tight">
          <p>Premium produce sourced globally.</p>
          <p>Direct from farm to you.</p>
          <p>Export excellence at every harvest</p>
        </div>
      </div>
      <ShopLinks collections={collections} />
    </aside>
  );
}
