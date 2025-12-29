import React from "react";
import Icon from "@/components/ui/AppIcon";

interface ServiceArea {
  id: number;
  area: string;
  distance: string;
  estimatedTime: string;
}

interface ServiceAreaMapProps {
  className?: string;
}

const ServiceAreaMap = ({ className = "" }: ServiceAreaMapProps) => {
  const serviceAreas: ServiceArea[] = [
    {
      id: 1,
      area: "Noida Sector 1-100",
      distance: "0-15 km",
      estimatedTime: "15-30 mins",
    },
    {
      id: 2,
      area: "Greater Noida",
      distance: "15-25 km",
      estimatedTime: "30-45 mins",
    },
    {
      id: 3,
      area: "Ghaziabad",
      distance: "10-20 km",
      estimatedTime: "25-40 mins",
    },
    {
      id: 4,
      area: "Delhi East",
      distance: "15-30 km",
      estimatedTime: "35-60 mins",
    },
    {
      id: 5,
      area: "Faridabad",
      distance: "25-35 km",
      estimatedTime: "45-70 mins",
    },
    {
      id: 6,
      area: "Gurugram",
      distance: "35-50 km",
      estimatedTime: "60-90 mins",
    },
  ];

  return (
    <section className={`py-16 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Our Service Coverage Area
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We proudly serve the entire NCR region with pickup & drop services,
            emergency assistance, and on-site support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Service Areas List */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-heading font-semibold text-foreground mb-6 flex items-center">
                <Icon
                  name="MapIcon"
                  size={24}
                  variant="outline"
                  className="text-primary mr-3"
                />
                Coverage Areas
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {serviceAreas.map((area) => (
                  <div
                    key={area.id}
                    className="bg-muted/30 rounded-lg p-4 hover:bg-muted/50 transition-colors duration-300"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-foreground">
                        {area.area}
                      </h4>
                      <Icon
                        name="CheckCircleIcon"
                        size={20}
                        variant="solid"
                        className="text-success flex-shrink-0"
                      />
                    </div>
                    <div className="space-y-1 text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <Icon
                          name="MapPinIcon"
                          size={14}
                          variant="outline"
                          className="mr-2"
                        />
                        <span>{area.distance}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Icon
                          name="ClockIcon"
                          size={14}
                          variant="outline"
                          className="mr-2"
                        />
                        <span>{area.estimatedTime}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Services */}
            <div className="mt-6 bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                Area-Wide Services
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-start space-x-3">
                  <Icon
                    name="TruckIcon"
                    size={20}
                    variant="outline"
                    className="text-primary mt-1 flex-shrink-0"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground text-sm mb-1">
                      Free Pickup & Drop
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      Within 15 km radius
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon
                    name="WrenchScrewdriverIcon"
                    size={20}
                    variant="outline"
                    className="text-primary mt-1 flex-shrink-0"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground text-sm mb-1">
                      On-Site Service
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      For minor repairs
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon
                    name="BoltIcon"
                    size={20}
                    variant="outline"
                    className="text-primary mt-1 flex-shrink-0"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground text-sm mb-1">
                      Emergency Response
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      24/7 across NCR
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Contact Card */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-lg p-6">
              <h3 className="text-xl font-heading font-semibold mb-4">
                Need Service Outside Coverage?
              </h3>
              <p className="text-sm text-primary-foreground/90 mb-6">
                We can arrange special services for areas beyond our standard
                coverage. Contact us to discuss your requirements.
              </p>
              <a
                href="tel:+911234567890"
                className="block w-full px-4 py-3 bg-primary-foreground text-primary text-center rounded hover:bg-primary-foreground/90 transition-all duration-300 font-semibold"
              >
                Call: +91 1234567890
              </a>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-heading font-semibold text-foreground mb-4">
                Service Response Times
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-border">
                  <span className="text-sm text-muted-foreground">
                    Emergency Service
                  </span>
                  <span className="text-sm font-semibold text-action">
                    30-60 mins
                  </span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-border">
                  <span className="text-sm text-muted-foreground">
                    Pickup Service
                  </span>
                  <span className="text-sm font-semibold text-foreground">
                    Same Day
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    On-Site Repair
                  </span>
                  <span className="text-sm font-semibold text-foreground">
                    2-4 hours
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-success/10 border border-success/20 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <Icon
                  name="CheckBadgeIcon"
                  size={20}
                  variant="solid"
                  className="text-success mt-0.5 flex-shrink-0"
                />
                <div>
                  <h4 className="font-semibold text-foreground text-sm mb-1">
                    Coverage Guarantee
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    All listed areas receive full service support with our
                    quality guarantee and warranty coverage.
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

export default ServiceAreaMap;
