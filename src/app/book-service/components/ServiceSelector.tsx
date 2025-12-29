"use client";

import React from "react";
import Icon from "@/components/ui/AppIcon";

interface Service {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: string;
  icon: string;
}

interface ServiceSelectorProps {
  selectedService: string;
  onServiceSelect: (serviceId: string) => void;
}

const ServiceSelector = ({
  selectedService,
  onServiceSelect,
}: ServiceSelectorProps) => {
  const services: Service[] = [
    {
      id: "general-service",
      name: "General Service",
      description:
        "Complete vehicle checkup with oil change, filter replacement, and basic maintenance",
      duration: "2-3 hours",
      price: "₹2,499",
      icon: "WrenchScrewdriverIcon",
    },
    {
      id: "major-service",
      name: "Major Service",
      description:
        "Comprehensive service including engine diagnostics, brake inspection, and fluid replacement",
      duration: "4-5 hours",
      price: "₹4,999",
      icon: "CogIcon",
    },
    {
      id: "ac-service",
      name: "AC Service",
      description:
        "Complete AC system cleaning, gas refill, and cooling performance optimization",
      duration: "2 hours",
      price: "₹1,999",
      icon: "CloudIcon",
    },
    {
      id: "brake-service",
      name: "Brake Service",
      description:
        "Brake pad replacement, disc resurfacing, and complete brake system inspection",
      duration: "2-3 hours",
      price: "₹3,499",
      icon: "ShieldCheckIcon",
    },
    {
      id: "engine-diagnostics",
      name: "Engine Diagnostics",
      description:
        "Advanced computer diagnostics to identify and resolve engine performance issues",
      duration: "1-2 hours",
      price: "₹1,499",
      icon: "ComputerDesktopIcon",
    },
    {
      id: "body-work",
      name: "Body Work & Painting",
      description:
        "Dent removal, scratch repair, and professional painting services",
      duration: "1-3 days",
      price: "Custom Quote",
      icon: "PaintBrushIcon",
    },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-heading font-bold text-foreground">
        Select Service
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <button
            key={service.id}
            onClick={() => onServiceSelect(service.id)}
            className={`p-6 rounded-lg border-2 transition-all duration-300 text-left ${
              selectedService === service.id
                ? "border-primary bg-primary/5 shadow-lg"
                : "border-border bg-card hover:border-primary/50 hover:shadow-md"
            }`}
          >
            <div className="flex items-start space-x-4">
              <div
                className={`p-3 rounded-lg ${
                  selectedService === service.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                <Icon name={service.icon} size={24} variant="outline" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {service.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {service.description}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center text-muted-foreground">
                    <Icon
                      name="ClockIcon"
                      size={16}
                      variant="outline"
                      className="mr-1"
                    />
                    {service.duration}
                  </span>
                  <span className="font-semibold text-primary">
                    {service.price}
                  </span>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ServiceSelector;
