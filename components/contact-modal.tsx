"use client";

import { X, MessageCircle, Mail, FileText } from "lucide-react";
import { useEffect } from "react";
import Link from "next/link";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const contacts = [
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: "https://wa.me/919076048473",
      color: "hover:bg-green-50 dark:hover:bg-green-950",
      isLink: true,
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:rafrafinternational786@gmail.com",
      color: "hover:bg-purple-50 dark:hover:bg-purple-950",
      isLink: true,
    },
    {
      name: "Quote Us",
      icon: FileText,
      url: "/quote",
      color: "hover:bg-blue-50 dark:hover:bg-blue-950",
      isLink: false,
    },
  ];

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 safe-bottom">
        <div className="bg-background w-full sm:max-w-md rounded-t-3xl sm:rounded-3xl shadow-2xl animate-in slide-in-from-bottom-5 sm:zoom-in-95 duration-300">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <h2 className="text-xl font-semibold">Get in Touch</h2>
            <button
              onClick={onClose}
              className="p-2 -m-2 hover:bg-secondary rounded-full transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>

          {/* Contact Options */}
          <div className="p-4 sm:p-6 space-y-3">
            {contacts.map((contact) => {
              const Icon = contact.icon;
              const Component = contact.isLink ? "a" : Link;
              
              return (
                <Component
                  key={contact.name}
                  href={contact.url}
                  {...(contact.isLink && { target: "_blank", rel: "noopener noreferrer" })}
                  onClick={() => !contact.isLink && onClose()}
                  className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-200 ${contact.color} active:scale-95`}
                >
                  <div className="flex-shrink-0">
                    <Icon size={28} className="text-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-foreground">{contact.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {contact.name === "Email" && "rafrafinternational786@gmail.com"}
                      {contact.name === "WhatsApp" && "+91 9076048473"}
                      {contact.name === "Quote Us" && "Request a quote"}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 rounded-full bg-foreground/10 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-foreground" />
                    </div>
                  </div>
                </Component>
              );
            })}
          </div>

          {/* Footer */}
          <div className="px-6 py-4 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              We'll get back to you within 24 hours
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
