'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FormData {
  name: string;
  email: string;
  phone: string;
  inquiryType: string;
  subject: string;
  message: string;
}

interface ContactFormSectionProps {
  className?: string;
}

const ContactFormSection = ({ className = '' }: ContactFormSectionProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'general',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsHydrated(true);
  }, []);

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'service', label: 'Service Request' },
    { value: 'fleet', label: 'Corporate Fleet' },
    { value: 'emergency', label: 'Emergency Service' },
    { value: 'feedback', label: 'Feedback' },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitStatus('success');
    setFormData({
      name: '',
      email: '',
      phone: '',
      inquiryType: 'general',
      subject: '',
      message: '',
    });

    setTimeout(() => {
      setSubmitStatus('idle');
    }, 5000);
  };

  if (!isHydrated) {
    return (
      <section className={`py-16 bg-muted/30 ${className}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-card border border-border rounded-lg p-8">
            <div className="animate-pulse space-y-4">
              <div className="h-8 bg-muted rounded w-3/4"></div>
              <div className="h-4 bg-muted rounded w-1/2"></div>
              <div className="space-y-3 pt-4">
                <div className="h-12 bg-muted rounded"></div>
                <div className="h-12 bg-muted rounded"></div>
                <div className="h-32 bg-muted rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-16 bg-muted/30 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Send Us a Message
            </h2>
            <p className="text-lg text-muted-foreground">
              Fill out the form below and our team will get back to you within 24 hours.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-8">
            {submitStatus === 'success' && (
              <div className="mb-6 bg-success/10 border border-success/20 rounded-lg p-4 flex items-start space-x-3">
                <Icon
                  name="CheckCircleIcon"
                  size={24}
                  variant="solid"
                  className="text-success flex-shrink-0"
                />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Message Sent Successfully!</h4>
                  <p className="text-sm text-muted-foreground">
                    Thank you for contacting us. We&apos;ll respond to your inquiry within 24 hours.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                    placeholder="+91 1234567890"
                  />
                </div>

                <div>
                  <label
                    htmlFor="inquiryType"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Inquiry Type *
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                  >
                    {inquiryTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                  placeholder="Brief subject of your inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-background border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-foreground resize-none"
                  placeholder="Please provide details about your inquiry..."
                />
              </div>

              <div className="flex items-start space-x-3 bg-primary/5 border border-primary/20 rounded-lg p-4">
                <Icon
                  name="InformationCircleIcon"
                  size={20}
                  variant="solid"
                  className="text-primary mt-0.5 flex-shrink-0"
                />
                <p className="text-sm text-muted-foreground">
                  By submitting this form, you agree to our privacy policy. We&apos;ll use your
                  information only to respond to your inquiry and won&apos;t share it with third
                  parties.
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-all duration-300 font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <Icon
                      name="ArrowPathIcon"
                      size={20}
                      variant="outline"
                      className="mr-2 animate-spin"
                    />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Icon name="PaperAirplaneIcon" size={20} variant="solid" className="mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Alternative Contact Methods */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-card border border-border rounded-lg p-4 text-center">
              <Icon
                name="PhoneIcon"
                size={24}
                variant="outline"
                className="text-primary mx-auto mb-2"
              />
              <h4 className="font-semibold text-foreground text-sm mb-1">Prefer to Call?</h4>
              <a href="tel:+911234567890" className="text-primary hover:text-primary/80 text-sm">
                +91 1234567890
              </a>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 text-center">
              <Icon
                name="ChatBubbleLeftIcon"
                size={24}
                variant="outline"
                className="text-primary mx-auto mb-2"
              />
              <h4 className="font-semibold text-foreground text-sm mb-1">Live Chat</h4>
              <button className="text-primary hover:text-primary/80 text-sm">Start Chat Now</button>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 text-center">
              <Icon
                name="CalendarIcon"
                size={24}
                variant="outline"
                className="text-primary mx-auto mb-2"
              />
              <h4 className="font-semibold text-foreground text-sm mb-1">Book Service</h4>
              <a href="/book-service" className="text-primary hover:text-primary/80 text-sm">
                Schedule Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
