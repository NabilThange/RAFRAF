"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { ContactCtaButton } from "@/components/contact-cta-button";

export function FooterSection() {
  return (
    <footer className="w-full py-16 px-6 bg-background">
      {/* Footer content */}
      <div className="z-10 max-w-4xl mx-auto">
        {/* Main Navigation Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 mb-6">
          <Link
            href="/produce"
            className="text-foreground hover:text-muted-foreground transition-colors font-medium"
          >
            Products
          </Link>
          <Link
            href="/about"
            className="text-foreground hover:text-muted-foreground transition-colors font-medium"
          >
            About
          </Link>
          <Link
            href="/blog"
            className="text-foreground hover:text-muted-foreground transition-colors font-medium"
          >
            Blog
          </Link>
          <ContactCtaButton
            label="Contact"
            className="text-foreground hover:text-muted-foreground transition-colors font-medium cursor-pointer"
          />
          <Link
            href="mailto:rafrafinternational786@gmail.com"
            className="text-foreground hover:text-muted-foreground transition-colors font-medium inline-flex items-center gap-1"
          >
            Email
            <ExternalLink className="w-3 h-3" />
          </Link>
          <Link
            href="https://wa.me/919076048473"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-muted-foreground transition-colors font-medium inline-flex items-center gap-1"
          >
            WhatsApp
            <ExternalLink className="w-3 h-3" />
          </Link>
        </div>
      </div>

      {/* Large background text */}
      <div className="flex items-center justify-center overflow-hidden">
        <div className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-bold select-none pointer-events-none leading-none bg-gradient-to-br from-primary/30 to-primary/5 bg-clip-text text-transparent opacity-60 tracking-tighter">
          RafRaf
        </div>
      </div>
    </footer>
  );
}
