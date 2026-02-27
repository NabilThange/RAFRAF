'use client';

import { useState } from 'react';
import { BackButton } from '@/components/back-button';

export default function QuotePage() {
    const [formData, setFormData] = useState({
        companyName: '',
        contactPerson: '',
        email: '',
        phone: '',
        products: '',
        quantity: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Create message for WhatsApp
        const whatsappMessage = `
*Quote Request from RafRaf International*

*Company Name:* ${formData.companyName}
*Contact Person:* ${formData.contactPerson}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Products:* ${formData.products}
*Quantity:* ${formData.quantity || 'Not specified'}
*Additional Details:* ${formData.message || 'None'}
    `.trim();

        const encodedMessage = encodeURIComponent(whatsappMessage);

        // Open WhatsApp with pre-filled message
        window.open(`https://wa.me/919076048473?text=${encodedMessage}`, '_blank');

        // Show success message
        setSubmitStatus('success');
        setFormData({
            companyName: '',
            contactPerson: '',
            email: '',
            phone: '',
            products: '',
            quantity: '',
            message: '',
        });
        setIsSubmitting(false);

        setTimeout(() => setSubmitStatus('idle'), 5000);
    };

    return (
        <main className="min-h-screen bg-background">
            {/* Header */}
            <BackButton />

            {/* Content */}
            <div className="pt-32 pb-16 px-6">
                <div className="max-w-2xl mx-auto">
                    {/* Title */}
                    <div className="mb-12">
                        <h1 className="text-5xl md:text-6xl font-bold mb-4">Request a Quote</h1>
                        <p className="text-lg text-muted-foreground">
                            Fill out the form below and we'll get back to you with a detailed quote for your fresh produce needs.
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Company Name */}
                        <div>
                            <label htmlFor="companyName" className="block text-sm font-medium mb-2">
                                Company Name *
                            </label>
                            <input
                                type="text"
                                id="companyName"
                                name="companyName"
                                value={formData.companyName}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                placeholder="Your company name"
                            />
                        </div>

                        {/* Contact Person */}
                        <div>
                            <label htmlFor="contactPerson" className="block text-sm font-medium mb-2">
                                Contact Person *
                            </label>
                            <input
                                type="text"
                                id="contactPerson"
                                name="contactPerson"
                                value={formData.contactPerson}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                placeholder="Your name"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">
                                Email Address *
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                placeholder="your@email.com"
                            />
                        </div>

                        {/* Phone */}
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium mb-2">
                                Phone Number *
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                placeholder="+91 XXXXX XXXXX"
                            />
                        </div>

                        {/* Products */}
                        <div>
                            <label htmlFor="products" className="block text-sm font-medium mb-2">
                                Products Interested In *
                            </label>
                            <input
                                type="text"
                                id="products"
                                name="products"
                                value={formData.products}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                placeholder="e.g., Onions, Pomegranates, Bananas"
                            />
                        </div>

                        {/* Quantity */}
                        <div>
                            <label htmlFor="quantity" className="block text-sm font-medium mb-2">
                                Estimated Quantity
                            </label>
                            <input
                                type="text"
                                id="quantity"
                                name="quantity"
                                value={formData.quantity}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                placeholder="e.g., 10 tons per month"
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2">
                                Additional Details
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={5}
                                className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                                placeholder="Tell us more about your requirements, delivery preferences, or any other details..."
                            />
                        </div>

                        {/* Status Messages */}
                        {submitStatus === 'success' && (
                            <div className="p-4 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg">
                                <p className="text-green-800 dark:text-green-200 font-medium">
                                    ✓ Quote request sent via WhatsApp! Our team will respond shortly.
                                </p>
                            </div>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full px-6 py-3 bg-foreground text-background font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? 'Sending...' : 'Send Quote Request'}
                        </button>
                    </form>

                    {/* Contact Info */}
                    <div className="mt-12 pt-8 border-t border-border">
                        <p className="text-muted-foreground mb-4">
                            Prefer to contact us directly?
                        </p>
                        <div className="space-y-2">
                            <p>
                                <span className="font-medium">WhatsApp:</span>{' '}
                                <a href="https://wa.me/919076048473" className="text-primary hover:underline">
                                    +91 9076048473
                                </a>
                            </p>
                            <p>
                                <span className="font-medium">Email:</span>{' '}
                                <a href="mailto:rafrafinternational786@gmail.com" className="text-primary hover:underline">
                                    rafrafinternational786@gmail.com
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
