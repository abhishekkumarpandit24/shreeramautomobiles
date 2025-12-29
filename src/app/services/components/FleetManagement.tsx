import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface FleetManagementProps {
  className?: string;
}

const FleetManagement = ({ className = '' }: FleetManagementProps) => {
  const fleetFeatures = [
    {
      icon: 'ChartBarIcon',
      title: 'Cost Management',
      description: 'Transparent reporting and predictable maintenance budgets',
    },
    {
      icon: 'CalendarIcon',
      title: 'Scheduled Maintenance',
      description: 'Automated service reminders and preventive care programs',
    },
    {
      icon: 'DocumentTextIcon',
      title: 'Digital Reports',
      description: 'Comprehensive service documentation and fleet analytics',
    },
    {
      icon: 'UserGroupIcon',
      title: 'Dedicated Support',
      description: 'Priority service and dedicated account management',
    },
  ];

  return (
    <section className={`py-16 bg-muted/30 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-semibold mb-4">
              CORPORATE SOLUTIONS
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Fleet Management Solutions
            </h2>
            <p className="text-muted-foreground mb-6">
              Scalable automotive solutions designed for businesses. From small fleets to enterprise
              operations, we provide comprehensive maintenance programs with transparent reporting
              and cost management.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {fleetFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon
                      name={feature.icon}
                      size={20}
                      variant="outline"
                      className="text-primary"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-300 font-medium text-center"
              >
                Request Fleet Quote
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors duration-300 font-medium text-center"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_1bc9f3e1a-1766836068588.png"
                alt="Fleet of commercial vehicles lined up in organized parking lot with professional maintenance team"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-lg p-6 shadow-lg max-w-xs">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-success/20 rounded-full flex items-center justify-center">
                  <Icon name="CheckBadgeIcon" size={24} variant="solid" className="text-success" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">500+</div>
                  <div className="text-sm text-muted-foreground">Fleet Vehicles Managed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FleetManagement;
