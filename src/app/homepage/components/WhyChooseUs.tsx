import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface Feature {
  id: number;
  icon: string;
  title: string;
  description: string;
}

interface WhyChooseUsProps {
  className?: string;
}

const WhyChooseUs = ({ className = '' }: WhyChooseUsProps) => {
  const features: Feature[] = [
    {
      id: 1,
      icon: 'ShieldCheckIcon',
      title: 'Certified Excellence',
      description:
        'ISO certified facility with manufacturer-approved processes and industry-leading quality standards',
    },
    {
      id: 2,
      icon: 'UsersIcon',
      title: '350+ Expert Team',
      description:
        'Highly trained technicians with decades of combined experience across all vehicle makes and models',
    },
    {
      id: 3,
      icon: 'ClockIcon',
      title: '24/7 Support',
      description:
        "Round-the-clock emergency service and customer support ensuring you're never stranded",
    },
    {
      id: 4,
      icon: 'CurrencyRupeeIcon',
      title: 'Transparent Pricing',
      description:
        'No hidden charges, detailed estimates, and competitive pricing with value-for-money service packages',
    },
    {
      id: 5,
      icon: 'ComputerDesktopIcon',
      title: 'Advanced Technology',
      description:
        'State-of-the-art diagnostic equipment and modern tools for accurate problem detection and repair',
    },
    {
      id: 6,
      icon: 'TruckIcon',
      title: 'Fleet Solutions',
      description:
        'Comprehensive fleet management services with dedicated support for businesses of all sizes',
    },
  ];

  return (
    <section className={`py-16 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Why Choose Shree ram automobiles?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the difference that comes with ₹102 crore business excellence and 350+
            automotive experts
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group bg-card rounded-lg shadow-card hover:shadow-modal transition-all duration-300 p-6 transform hover:scale-105"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-14 h-14 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <Icon name={feature.icon} size={28} variant="outline" className="text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col md:flex-row items-center gap-4 bg-card rounded-lg shadow-card p-6">
            <div className="flex items-center space-x-3">
              <Icon name="PhoneIcon" size={24} variant="solid" className="text-primary" />
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Need Immediate Assistance?</p>
                <p className="text-lg font-semibold text-foreground">+91 1234567890</p>
              </div>
            </div>
            <div className="h-8 w-px bg-border hidden md:block" />
            <div className="flex items-center space-x-3">
              <Icon name="MapPinIcon" size={24} variant="solid" className="text-primary" />
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Visit Our Facility</p>
                <p className="text-lg font-semibold text-foreground">Sector 62, Noida</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
