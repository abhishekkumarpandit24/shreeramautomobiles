import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface EmergencyServicesProps {
  className?: string;
}

const EmergencyServices = ({ className = '' }: EmergencyServicesProps) => {
  const emergencyServices = [
    {
      icon: 'PhoneIcon',
      title: '24/7 Emergency Hotline',
      description: 'Immediate assistance for breakdowns and accidents',
      contact: '+91 1234567890',
    },
    {
      icon: 'TruckIcon',
      title: 'Roadside Assistance',
      description: 'On-site repairs and towing services across NCR',
      contact: 'Request Pickup',
    },
    {
      icon: 'WrenchScrewdriverIcon',
      title: 'Mobile Mechanic',
      description: 'Expert technicians come to your location',
      contact: 'Book Service',
    },
  ];

  return (
    <section className={`bg-action/10 py-12 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Emergency & Roadside Assistance
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Vehicle trouble? Our emergency response team is available 24/7 to get you back on the
            road safely.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {emergencyServices.map((service, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-action/20 rounded-full mb-4 mx-auto">
                <Icon name={service.icon} size={32} variant="outline" className="text-action" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground text-center mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm text-center mb-4">
                {service.description}
              </p>
              <button className="w-full px-4 py-2 bg-action text-action-foreground rounded-lg hover:bg-action/90 transition-colors duration-300 font-medium">
                {service.contact}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmergencyServices;
