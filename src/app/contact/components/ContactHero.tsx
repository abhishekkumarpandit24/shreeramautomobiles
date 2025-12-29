import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface ContactHeroProps {
  className?: string;
}

const ContactHero = ({ className = '' }: ContactHeroProps) => {
  return (
    <section
      className={`bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16 ${className}`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-foreground/10 rounded-full mb-6">
            <Icon name="MapPinIcon" size={32} variant="outline" />
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Get in Touch with Bose Workshop
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8">
            Your trusted automotive partner in Noida. We&apos;re here to help with all your vehicle
            service needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center space-x-2 bg-primary-foreground/10 px-4 py-2 rounded">
              <Icon name="ClockIcon" size={20} variant="outline" />
              <span className="text-sm font-medium">Mon-Sat: 8:00 AM - 8:00 PM</span>
            </div>
            <div className="flex items-center space-x-2 bg-primary-foreground/10 px-4 py-2 rounded">
              <Icon name="PhoneIcon" size={20} variant="outline" />
              <span className="text-sm font-medium">24/7 Emergency Service</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
