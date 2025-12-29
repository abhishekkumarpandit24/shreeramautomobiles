'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface ContactInformationProps {
  contactData: {
    name: string;
    email: string;
    phone: string;
    address: string;
    additionalNotes: string;
  };
  onContactDataChange: (field: string, value: string) => void;
}

const ContactInformation = ({ contactData, onContactDataChange }: ContactInformationProps) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-heading font-bold text-foreground">Contact Information</h2>
      <div className="bg-card p-6 rounded-lg border border-border">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
              Full Name *
            </label>
            <div className="relative">
              <input
                type="text"
                id="name"
                value={contactData.name}
                onChange={(e) => onContactDataChange('name', e.target.value)}
                placeholder="Enter your full name"
                className="w-full px-4 py-3 pl-11 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
              <Icon
                name="UserIcon"
                size={20}
                variant="outline"
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
              Phone Number *
            </label>
            <div className="relative">
              <input
                type="tel"
                id="phone"
                value={contactData.phone}
                onChange={(e) => onContactDataChange('phone', e.target.value)}
                placeholder="10-digit mobile number"
                pattern="[0-9]{10}"
                maxLength={10}
                className="w-full px-4 py-3 pl-11 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
              <Icon
                name="PhoneIcon"
                size={20}
                variant="outline"
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
            </div>
          </div>

          <div className="md:col-span-2">
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              Email Address *
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                value={contactData.email}
                onChange={(e) => onContactDataChange('email', e.target.value)}
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 pl-11 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
              <Icon
                name="EnvelopeIcon"
                size={20}
                variant="outline"
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
            </div>
          </div>

          <div className="md:col-span-2">
            <label htmlFor="address" className="block text-sm font-medium text-foreground mb-2">
              Pickup Address *
            </label>
            <div className="relative">
              <textarea
                id="address"
                value={contactData.address}
                onChange={(e) => onContactDataChange('address', e.target.value)}
                placeholder="Enter complete address for vehicle pickup"
                rows={3}
                className="w-full px-4 py-3 pl-11 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                required
              />
              <Icon
                name="MapPinIcon"
                size={20}
                variant="outline"
                className="absolute left-3 top-3 text-muted-foreground"
              />
            </div>
          </div>

          <div className="md:col-span-2">
            <label
              htmlFor="additionalNotes"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Additional Notes (Optional)
            </label>
            <textarea
              id="additionalNotes"
              value={contactData.additionalNotes}
              onChange={(e) => onContactDataChange('additionalNotes', e.target.value)}
              placeholder="Any specific issues or requirements you'd like to mention"
              rows={4}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
