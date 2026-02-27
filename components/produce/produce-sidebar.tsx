import Link from 'next/link';

interface Category {
  title: string;
  handle: string;
}

interface ProduceSidebarProps {
  categories: Category[];
}

export function ProduceSidebar({ categories }: ProduceSidebarProps) {
  return (
    <aside className="max-md:hidden col-span-4 h-screen sticky top-0 p-6 md:p-8 lg:p-12 pt-20 md:pt-36 flex flex-col justify-between">
      <div>
        <Link href="/" className="inline-block hover:opacity-80 transition-opacity">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 cursor-pointer mt-[50px]">RafRaf</h1>
        </Link>
        <p className="italic tracking-tighter text-base">Fresh. Quality. Reliable.</p>
        <div className="mt-5 text-base leading-tight mt-[8px]">
          <p>Premium produce sourced globally.</p>
          <p>Direct from farm to you.</p>
          <p>Export excellence at every harvest</p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="border-t border-gray-300 pt-6">
          <p className="text-sm italic text-gray-600 mb-4">
            "Quality is not an act, it is a habit. We cultivate excellence in every harvest."
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            Let's grow together. Your success is our harvest. Reach out and let's build a partnership rooted in trust and quality.
          </p>
        </div>
      </div>
    </aside>
  );
}
