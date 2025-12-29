import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface LocationMapProps {
  className?: string;
}

const LocationMap = ({ className = '' }: LocationMapProps) => {
  const latitude = 28.5355;
  const longitude = 77.391;

  const facilities = [
    { id: 1, icon: 'TruckIcon', label: 'Free Pickup & Drop' },
    { id: 2, icon: 'HomeIcon', label: 'Spacious Waiting Area' },
    { id: 3, icon: 'WifiIcon', label: 'Free WiFi' },
    { id: 4, icon: 'CreditCardIcon', label: 'Multiple Payment Options' },
  ];

  return (
    <section className={`py-16 bg-muted/30 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Visit Our State-of-the-Art Facility
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Located in the heart of Noida, our 350+ expert team is ready to serve you at our premium
            facility.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="bg-card rounded-lg overflow-hidden shadow-lg h-96 lg:h-auto">
            <iframe
              width="100%"
              height="100%"
              loading="lazy"
              title="Bose Workshop Location - C-12/5 Sector-85 Noida"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`}
              className="border-0 min-h-96"
            />
          </div>

          {/* Location Details */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full flex-shrink-0">
                  <Icon name="MapPinIcon" size={24} variant="solid" className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                    Our Address
                  </h3>
                  <p className="text-foreground mb-1">Bose Workshop</p>
                  <p className="text-foreground mb-1">C-12/5, Sector-85</p>
                  <p className="text-foreground mb-4">Noida, Uttar Pradesh 201301</p>
                  <a
                    href={`https://maps.google.com/?q=${latitude},${longitude}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors duration-300"
                  >
                    Get Directions
                    <Icon
                      name="ArrowTopRightOnSquareIcon"
                      size={16}
                      variant="outline"
                      className="ml-2"
                    />
                  </a>
                </div>
              </div>

              <div className="border-t border-border pt-6">
                <h4 className="text-lg font-heading font-semibold text-foreground mb-4">
                  Operating Hours
                </h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Monday - Saturday</span>
                    <span className="text-foreground font-medium">8:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="text-foreground font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-border">
                    <span className="text-action font-medium">Emergency Service</span>
                    <span className="text-action font-bold">24/7 Available</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Facilities */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h4 className="text-lg font-heading font-semibold text-foreground mb-4">
                Facility Amenities
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {facilities.map((facility) => (
                  <div key={facility.id} className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded">
                      <Icon
                        name={facility.icon}
                        size={20}
                        variant="outline"
                        className="text-primary"
                      />
                    </div>
                    <span className="text-sm text-foreground">{facility.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Parking Info */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <Icon
                  name="InformationCircleIcon"
                  size={20}
                  variant="solid"
                  className="text-primary mt-0.5"
                />
                <div>
                  <p className="text-sm text-foreground">
                    <span className="font-semibold">Parking Available:</span> Ample free parking
                    space for customers. Accessible via metro (Sector 83 station - 2 km) and major
                    bus routes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
