'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Icon from '@/components/ui/AppIcon';

interface QuickBookingProps {
  className?: string;
}

const QuickBooking = ({ className = '' }: QuickBookingProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [formData, setFormData] = useState({
    vehicleType: '',
    serviceType: '',
    preferredDate: '',
    contactNumber: '',
  });
  const router = useRouter();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsHydrated(true);
  }, []);

  const vehicleTypes = [
    { value: 'car', label: 'Car' },
    { value: 'suv', label: 'SUV' },
    { value: 'truck', label: 'Truck' },
    { value: 'bike', label: 'Bike' },
  ];

  const serviceTypes = [
    { value: 'general-repair', label: 'General Repair' },
    { value: 'maintenance', label: 'Preventive Maintenance' },
    { value: 'diagnostics', label: 'Advanced Diagnostics' },
    { value: 'emergency', label: 'Emergency Service' },
    { value: 'bodywork', label: 'Body Work & Paint' },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/book-service');
  };

  if (!isHydrated) {
    return (
      <section className={`py-16 bg-primary ${className}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-primary-foreground rounded-lg shadow-modal p-8">
            <h2 className="text-3xl font-heading font-bold text-center text-foreground mb-8">
              Quick Service Booking
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="h-12 bg-muted rounded" />
              <div className="h-12 bg-muted rounded" />
              <div className="h-12 bg-muted rounded" />
              <div className="h-12 bg-muted rounded" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-16 bg-primary ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-primary-foreground rounded-lg shadow-modal p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Quick Service Booking
            </h2>
            <p className="text-lg text-muted-foreground">
              Get started in seconds. Fill in basic details and we&apos;ll guide you through the
              rest.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Vehicle Type */}
              <div>
                <label
                  htmlFor="vehicleType"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Vehicle Type
                </label>
                <div className="relative">
                  <Icon
                    name="TruckIcon"
                    size={20}
                    variant="outline"
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                  />
                  <select
                    id="vehicleType"
                    name="vehicleType"
                    value={formData.vehicleType}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground appearance-none"
                  >
                    <option value="">Select vehicle type</option>
                    {vehicleTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                  <Icon
                    name="ChevronDownIcon"
                    size={20}
                    variant="outline"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
                  />
                </div>
              </div>

              {/* Service Type */}
              <div>
                <label
                  htmlFor="serviceType"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Service Type
                </label>
                <div className="relative">
                  <Icon
                    name="WrenchScrewdriverIcon"
                    size={20}
                    variant="outline"
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                  />
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground appearance-none"
                  >
                    <option value="">Select service type</option>
                    {serviceTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                  <Icon
                    name="ChevronDownIcon"
                    size={20}
                    variant="outline"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
                  />
                </div>
              </div>

              {/* Preferred Date */}
              <div>
                <label
                  htmlFor="preferredDate"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Preferred Date
                </label>
                <div className="relative">
                  <Icon
                    name="CalendarIcon"
                    size={20}
                    variant="outline"
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                  />
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                  />
                </div>
              </div>

              {/* Contact Number */}
              <div>
                <label
                  htmlFor="contactNumber"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Contact Number
                </label>
                <div className="relative">
                  <Icon
                    name="PhoneIcon"
                    size={20}
                    variant="outline"
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                  />
                  <input
                    type="tel"
                    id="contactNumber"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleInputChange}
                    required
                    placeholder="+91 1234567890"
                    pattern="[+]?[0-9]{10,13}"
                    className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                type="submit"
                className="flex-1 px-8 py-4 bg-action text-action-foreground rounded-lg hover:bg-action/90 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Continue to Full Booking</span>
                <Icon name="ArrowRightIcon" size={20} variant="outline" />
              </button>
              <button
                type="button"
                onClick={() => router.push('/contact')}
                className="px-8 py-4 bg-background text-foreground border border-border rounded-lg hover:bg-muted transition-all duration-300 font-semibold text-lg flex items-center justify-center space-x-2"
              >
                <Icon name="PhoneIcon" size={20} variant="outline" />
                <span>Call Us Instead</span>
              </button>
            </div>
          </form>

          {/* Trust Indicators */}
          <div className="mt-8 pt-8 border-t border-border">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <Icon name="ClockIcon" size={24} variant="solid" className="text-primary mb-2" />
                <p className="text-sm font-medium text-foreground">Quick Response</p>
                <p className="text-xs text-muted-foreground">Within 2 hours</p>
              </div>
              <div className="flex flex-col items-center">
                <Icon
                  name="ShieldCheckIcon"
                  size={24}
                  variant="solid"
                  className="text-primary mb-2"
                />
                <p className="text-sm font-medium text-foreground">Secure Booking</p>
                <p className="text-xs text-muted-foreground">Your data is safe</p>
              </div>
              <div className="flex flex-col items-center">
                <Icon
                  name="CheckBadgeIcon"
                  size={24}
                  variant="solid"
                  className="text-primary mb-2"
                />
                <p className="text-sm font-medium text-foreground">Verified Service</p>
                <p className="text-xs text-muted-foreground">ISO certified</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickBooking;
