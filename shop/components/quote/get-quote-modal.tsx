'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface GetQuoteModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  productName: string;
}

export function GetQuoteModal({ isOpen, onOpenChange, productName }: GetQuoteModalProps) {
  const phoneNumber = '919076048473'; // Without + prefix for wa.me
  const encodedProductName = encodeURIComponent(productName);
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hi%2C%20I%20am%20interested%20in%20getting%20a%20quote%20for%20*${encodedProductName}*.%20Could%20you%20please%20share%20pricing%2C%20availability%2C%20and%20export%20details%3F`;
  
  const emailSubject = encodeURIComponent(`Quote Request: ${productName}`);
  const emailBody = encodeURIComponent(
    `Hi,\n\nI am interested in getting a quote for ${productName}.\nCould you please share pricing, availability, and export/import details?\n\nThank you.`
  );
  const emailUrl = `mailto:rafrafinternational786@gmail.com?subject=${emailSubject}&body=${emailBody}`;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="space-y-0">
          <div className="flex flex-row items-center justify-between">
            <DialogTitle>Request a Quote</DialogTitle>
            <DialogClose className="opacity-70 hover:opacity-100">
              <X className="h-4 w-4" />
            </DialogClose>
          </div>
        </DialogHeader>
        
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Product: <span className="font-semibold text-foreground">{productName}</span>
          </p>
          
          <div className="grid grid-cols-2 gap-3">
            <Button
              onClick={() => {
                window.open(whatsappUrl, '_blank');
                onOpenChange(false);
              }}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              📱 WhatsApp
            </Button>
            <Button
              onClick={() => {
                window.location.href = emailUrl;
                onOpenChange(false);
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              📧 Email
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
