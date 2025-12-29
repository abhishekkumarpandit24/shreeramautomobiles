"use client";

import React, { useState, useEffect } from "react";
import Icon from "@/components/ui/AppIcon";

interface PriceCalculatorProps {
  className?: string;
}

const PriceCalculator = ({ className = "" }: PriceCalculatorProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null);

  React.useEffect(() => {
    setIsHydrated(true);
  }, []);

  const services = [
    { value: "oil-change", label: "Oil Change", basePrice: 2500 },
    { value: "brake-service", label: "Brake Service", basePrice: 5500 },
    { value: "tire-rotation", label: "Tire Rotation", basePrice: 1500 },
    { value: "engine-diagnostic", label: "Engine Diagnostic", basePrice: 3500 },
    { value: "ac-service", label: "AC Service", basePrice: 4500 },
    { value: "full-service", label: "Full Service", basePrice: 8500 },
  ];

  const vehicles = [
    { value: "hatchback", label: "Hatchback", multiplier: 1.0 },
    { value: "sedan", label: "Sedan", multiplier: 1.2 },
    { value: "suv", label: "SUV", multiplier: 1.5 },
    { value: "luxury", label: "Luxury", multiplier: 2.0 },
  ];

  const calculatePrice = () => {
    if (!isHydrated || !selectedService || !selectedVehicle) return;

    const service = services.find((s) => s.value === selectedService);
    const vehicle = vehicles.find((v) => v.value === selectedVehicle);

    if (service && vehicle) {
      const price = Math.round(service.basePrice * vehicle.multiplier);
      setEstimatedPrice(price);
    }
  };

  if (!isHydrated) {
    return (
      <section className={`py-16 bg-card ${className}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="h-64 bg-muted rounded-lg animate-pulse"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-16 bg-card ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Service Price Calculator
            </h2>
            <p className="text-muted-foreground">
              Get an instant estimate for your vehicle service. Transparent
              pricing with no hidden costs.
            </p>
          </div>

          <div className="bg-muted/30 rounded-lg p-8 border border-border">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Select Service Type
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                >
                  <option value="">Choose a service...</option>
                  {services.map((service) => (
                    <option key={service.value} value={service.value}>
                      {service.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Select Vehicle Type
                </label>
                <select
                  value={selectedVehicle}
                  onChange={(e) => setSelectedVehicle(e.target.value)}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                >
                  <option value="">Choose your vehicle...</option>
                  {vehicles.map((vehicle) => (
                    <option key={vehicle.value} value={vehicle.value}>
                      {vehicle.label}
                    </option>
                  ))}
                </select>
              </div>

              <button
                onClick={calculatePrice}
                disabled={!selectedService || !selectedVehicle}
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-300 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Calculate Estimate
              </button>

              {estimatedPrice !== null && (
                <div className="bg-primary/10 border border-primary rounded-lg p-6 text-center animate-fade-in">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <Icon
                      name="CurrencyRupeeIcon"
                      size={24}
                      variant="outline"
                      className="text-primary"
                    />
                    <span className="text-sm text-muted-foreground">
                      Estimated Price
                    </span>
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    ₹{estimatedPrice.toLocaleString("en-IN")}
                  </div>
                  <p className="text-xs text-muted-foreground mb-4">
                    *Final price may vary based on vehicle condition and
                    additional requirements
                  </p>
                  <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-300 font-medium">
                    Book This Service
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceCalculator;
