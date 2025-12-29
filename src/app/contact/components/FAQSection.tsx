'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
}

interface FAQSectionProps {
  className?: string;
}

const FAQSection = ({ className = '' }: FAQSectionProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsHydrated(true);
  }, []);

  const faqs: FAQ[] = [
    {
      id: 1,
      question: 'What are your operating hours?',
      answer:
        'We are open Monday to Saturday from 8:00 AM to 8:00 PM, and Sunday from 9:00 AM to 6:00 PM. Our emergency service is available 24/7 across the NCR region.',
      category: 'General',
    },
    {
      id: 2,
      question: 'Do you provide pickup and drop services?',
      answer:
        'Yes, we offer free pickup and drop services within a 15 km radius of our facility. For areas beyond this, we charge a nominal fee based on distance. Contact us to arrange pickup.',
      category: 'Services',
    },
    {
      id: 3,
      question: 'How can I track my vehicle service status?',
      answer:
        'You can track your service status through our Customer Portal. Simply log in with your registered mobile number or email to view real-time updates, photos, and estimated completion time.',
      category: 'Services',
    },
    {
      id: 4,
      question: 'What payment methods do you accept?',
      answer:
        'We accept all major payment methods including cash, credit/debit cards, UPI, net banking, and digital wallets. We also offer EMI options for services above ₹10,000.',
      category: 'Payment',
    },
    {
      id: 5,
      question: 'Do you provide warranty on repairs?',
      answer:
        'Yes, all our repairs come with a comprehensive warranty. Parts replacement has a 6-month warranty, and labor work is covered for 3 months. Warranty terms vary by service type.',
      category: 'Services',
    },
    {
      id: 6,
      question: 'How do I book an emergency service?',
      answer:
        'For emergency services, call our 24/7 helpline at +91 1234567890. Our emergency response team will reach you within 30-60 minutes anywhere in the NCR region.',
      category: 'Emergency',
    },
  ];

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  if (!isHydrated) {
    return (
      <section className={`py-16 bg-background ${className}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="animate-pulse space-y-4">
              <div className="h-8 bg-muted rounded w-3/4 mx-auto"></div>
              <div className="h-4 bg-muted rounded w-1/2 mx-auto"></div>
              <div className="space-y-3 pt-8">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-16 bg-muted rounded"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-16 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Quick answers to common questions about our services and facility.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-card border border-border rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/30 transition-colors duration-300"
                >
                  <div className="flex items-start space-x-4 text-left">
                    <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-semibold rounded">
                      {faq.category}
                    </span>
                    <h3 className="font-semibold text-foreground">{faq.question}</h3>
                  </div>
                  <Icon
                    name={openFAQ === faq.id ? 'ChevronUpIcon' : 'ChevronDownIcon'}
                    size={20}
                    variant="outline"
                    className="text-muted-foreground flex-shrink-0"
                  />
                </button>
                {openFAQ === faq.id && (
                  <div className="px-6 pb-4 pt-2 border-t border-border">
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 bg-primary/5 border border-primary/20 rounded-lg p-6 text-center">
            <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
              Still Have Questions?
            </h3>
            <p className="text-muted-foreground mb-4">
              Our customer support team is here to help you with any inquiries.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="tel:+911234567890"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-all duration-300 font-semibold"
              >
                <Icon name="PhoneIcon" size={20} variant="outline" className="mr-2" />
                Call Us
              </a>
              <button className="inline-flex items-center justify-center px-6 py-3 bg-card border border-border text-foreground rounded hover:bg-muted/30 transition-all duration-300 font-semibold">
                <Icon name="ChatBubbleLeftIcon" size={20} variant="outline" className="mr-2" />
                Live Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
