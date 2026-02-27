"use client";

import { FeatureCarousel } from "@/components/ui/feature-carousel";
import { cn } from "@/lib/utils";

export function FeaturedProductsSection() {
  return (
    <section id="features" className="relative bg-background py-12 sm:py-16 md:py-20 lg:py-32">
      <div className="px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="w-full max-w-7xl mx-auto">
          <FeatureCarousel
            title="Excellence in Import & Export"
            description="Discover how we streamline global trade with our comprehensive solutions"
            step1img1Class={cn(
              "pointer-events-none w-[50%] border border-stone-100/10 transition-all duration-500 dark:border-stone-700/50",
              "max-md:scale-[160%] max-md:rounded-[24px] rounded-[24px] left-[25%] top-[47%] md:left-[35px] md:top-[19%]",
              "md:group-hover:translate-y-2"
            )}
            step1img2Class={cn(
              "pointer-events-none w-[60%] border border-stone-100/10 dark:border-stone-700/50 transition-all duration-500 overflow-hidden",
              "max-md:scale-[160%] rounded-2xl max-md:rounded-[24px] left-[69%] top-[43%] md:top-[11%] md:left-[calc(50%+35px+1rem)]",
              "md:group-hover:-translate-y-6"
            )}
            step2img1Class={cn(
              "pointer-events-none w-[50%] rounded-t-[24px] overflow-hidden border border-stone-100/10 transition-all duration-500 dark:border-stone-700",
              "max-md:scale-[160%] left-[25%] top-[59%] md:left-[35px] md:top-[20%]",
              "md:group-hover:translate-y-2"
            )}
            step2img2Class={cn(
              "pointer-events-none w-[40%] rounded-t-[24px] border border-stone-100/10 dark:border-stone-700 transition-all duration-500 rounded-2xl overflow-hidden",
              "max-md:scale-[140%] left-[70%] top-[43%] md:top-[15%] md:left-[calc(50%+27px+1rem)]",
              "md:group-hover:-translate-y-6"
            )}
            step3imgClass={cn(
              "pointer-events-none w-[90%] border border-stone-100/10 dark:border-stone-700 rounded-t-[24px] transition-all duration-500 overflow-hidden",
              "left-[5%] top-[40%] md:top-[20%] md:left-[68px]"
            )}
            step4imgClass={cn(
              "pointer-events-none w-[90%] border border-stone-100/10 dark:border-stone-700 rounded-t-[24px] transition-all duration-500 overflow-hidden",
              "left-[5%] top-[40%] md:top-[20%] md:left-[68px]"
            )}
            image={{
              step1light1: "/global1.jpg",
              step1light2: "/global2.jpg",
              step2light1: "/quality1.jpg",
              step2light2: "/sourcing.jpg",
              step3light: "/logistics1.jpg",
              step4light: "/partnership.jpg",
              alt: "Import Export Excellence",
            }}
            bgClass="bg-gradient-to-tr from-neutral-900/90 to-neutral-800/90"
          />
        </div>
      </div>
    </section>
  );
}
