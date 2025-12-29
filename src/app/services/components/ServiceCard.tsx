import React from "react";
import Link from "next/link";
import Icon from "@/components/ui/AppIcon";
import AppImage from "@/components/ui/AppImage";

interface ServiceCardProps {
  service: {
    id: string;
    title: string;
    category: string;
    description: string;
    price: string;
    duration: string;
    image: string;
    alt: string;
    features: string[];
    popular?: boolean;
  };
  className?: string;
}

const ServiceCard = ({ service, className = "" }: ServiceCardProps) => {
  return (
    <div
      className={`bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group ${className}`}
    >
      {service.popular && (
        <div className="bg-action text-action-foreground text-xs font-semibold px-3 py-1 text-center">
          MOST POPULAR
        </div>
      )}

      <div className="relative h-48 overflow-hidden">
        <AppImage
          src={service.image}
          alt={service.alt}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
          {service.category}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {service.title}
        </h3>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {service.description}
        </p>

        <div className="flex items-center justify-between mb-4 pb-4 border-b border-border">
          <div className="flex items-center space-x-2 text-sm">
            <Icon
              name="ClockIcon"
              size={16}
              variant="outline"
              className="text-muted-foreground"
            />
            <span className="text-foreground">{service.duration}</span>
          </div>
          <div className="text-primary font-bold text-lg">{service.price}</div>
        </div>

        <ul className="space-y-2 mb-6">
          {service.features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-start space-x-2 text-sm">
              <Icon
                name="CheckCircleIcon"
                size={16}
                variant="solid"
                className="text-success mt-0.5 flex-shrink-0"
              />
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>

        <Link
          href="/book-service"
          className="block w-full text-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-300 font-medium"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
