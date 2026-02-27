"use client";

import FlowingMenu from '../FlowingMenu';
import { ContactModal } from '../contact-modal';
import { useState } from 'react';

export function TestimonialsSection() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const menuItems = [
    { link: '/about', text: 'About Us', image: '/images/hero-side-3.png' },
    { link: '/blog', text: 'Blog', image: '/images/hero-side-2.png' },
    { link: '/produce', text: 'Produce', image: '/images/hero-side-4.png' },
    { link: '#contact', text: 'Contact', image: '/images/hero-landscape.png', onClick: () => setIsContactOpen(true) }
  ];

  return (
    <>
      <section className="w-full" style={{ height: '600px', position: 'relative' }}>
        <FlowingMenu
          items={menuItems}
          speed={15}
          textColor="#0A0A0A"
          bgColor="#f5f5f0"
          marqueeBgColor="#d4e8c8"
          marqueeTextColor="#0A0A0A"
          borderColor="#0A0A0A"
          onContactClick={() => setIsContactOpen(true)}
        />
      </section>
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
}
