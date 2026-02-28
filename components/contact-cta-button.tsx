"use client";

interface ContactCtaButtonProps {
    label: string;
    className?: string;
}

export function ContactCtaButton({ label, className }: ContactCtaButtonProps) {
    const openContact = () => {
        window.dispatchEvent(new CustomEvent("openContactModal"));
    };

    return (
        <button onClick={openContact} className={className}>
            {label}
        </button>
    );
}
