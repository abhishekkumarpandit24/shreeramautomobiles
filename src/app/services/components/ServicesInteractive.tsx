"use client";

import React, { useState, useEffect } from "react";
import ServiceFilterBar from "./ServiceFilterBar";
import ServiceCard from "./ServiceCard";

interface FilterState {
  category: string;
  vehicleType: string;
  priceRange: string;
  searchQuery: string;
}

interface Service {
  id: string;
  title: string;
  category: string;
  description: string;
  price: string;
  priceValue: number;
  duration: string;
  image: string;
  alt: string;
  features: string[];
  vehicleTypes: string[];
  popular?: boolean;
}

const ServicesInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    category: "all",
    vehicleType: "all",
    priceRange: "all",
    searchQuery: "",
  });

  React.useEffect(() => {
    setIsHydrated(true);
  }, []);

  const allServices: Service[] = [
    {
      id: "1",
      title: "Complete Oil Change Service",
      category: "maintenance",
      description:
        "Premium engine oil replacement with filter change, fluid top-up, and comprehensive vehicle inspection",
      price: "₹2,500 - ₹4,500",
      priceValue: 3500,
      duration: "45 mins",
      image:
        "https://img.rocket.new/generatedImages/rocket_gen_img_1f659da8d-1765339738946.png",
      alt: "Mechanic pouring fresh golden engine oil into car engine during professional oil change service",
      features: [
        "Premium synthetic oil options",
        "Oil filter replacement",
        "Multi-point inspection",
        "Fluid level check",
      ],

      vehicleTypes: ["sedan", "suv", "hatchback", "luxury"],
      popular: true,
    },
    {
      id: "2",
      title: "Brake System Service",
      category: "repair",
      description:
        "Complete brake inspection, pad replacement, rotor resurfacing, and brake fluid flush for optimal safety",
      price: "₹5,500 - ₹12,000",
      priceValue: 8750,
      duration: "2 hours",
      image:
        "https://img.rocket.new/generatedImages/rocket_gen_img_17347ad8c-1764678764086.png",
      alt: "Close-up of technician inspecting and replacing brake pads on vehicle disc brake system",
      features: [
        "Brake pad replacement",
        "Rotor inspection & resurfacing",
        "Brake fluid flush",
        "Safety test drive",
      ],

      vehicleTypes: ["sedan", "suv", "hatchback", "luxury"],
    },
    {
      id: "3",
      title: "AC Service & Repair",
      category: "maintenance",
      description:
        "Air conditioning system cleaning, gas refill, compressor check, and cooling performance optimization",
      price: "₹4,500 - ₹8,500",
      priceValue: 6500,
      duration: "1.5 hours",
      image:
        "https://img.rocket.new/generatedImages/rocket_gen_img_1e7ba8438-1765268044595.png",
      alt: "Automotive technician checking car air conditioning system with pressure gauges and diagnostic tools",
      features: [
        "AC gas refill",
        "Compressor inspection",
        "Filter cleaning",
        "Cooling performance test",
      ],

      vehicleTypes: ["sedan", "suv", "hatchback", "luxury"],
      popular: true,
    },
    {
      id: "4",
      title: "Engine Diagnostic Scan",
      category: "diagnostics",
      description:
        "Advanced computer diagnostics to identify engine issues, error codes, and performance problems",
      price: "₹3,500 - ₹6,000",
      priceValue: 4750,
      duration: "1 hour",
      image:
        "https://img.rocket.new/generatedImages/rocket_gen_img_1c095739c-1766472919002.png",
      alt: "Professional mechanic using advanced computerized diagnostic scanner on modern vehicle engine",
      features: [
        "Computer diagnostics",
        "Error code analysis",
        "Sensor testing",
        "Detailed report",
      ],

      vehicleTypes: ["sedan", "suv", "hatchback", "luxury"],
    },
    {
      id: "5",
      title: "Tire Rotation & Balancing",
      category: "maintenance",
      description:
        "Professional tire rotation, wheel balancing, alignment check, and tire pressure optimization",
      price: "₹1,500 - ₹3,000",
      priceValue: 2250,
      duration: "45 mins",
      image:
        "https://img.rocket.new/generatedImages/rocket_gen_img_1d0aa9951-1764646705116.png",
      alt: "Mechanic using professional equipment to balance and align car tire on wheel balancing machine",
      features: [
        "Tire rotation",
        "Wheel balancing",
        "Alignment check",
        "Pressure adjustment",
      ],

      vehicleTypes: ["sedan", "suv", "hatchback", "luxury"],
    },
    {
      id: "6",
      title: "Full Vehicle Service",
      category: "maintenance",
      description:
        "Comprehensive service package including oil change, filter replacement, brake check, and 50-point inspection",
      price: "₹8,500 - ₹15,000",
      priceValue: 11750,
      duration: "3 hours",
      image:
        "https://img.rocket.new/generatedImages/rocket_gen_img_181c98e0b-1765186968378.png",
      alt: "Comprehensive vehicle service showing mechanic performing detailed inspection under lifted car in modern workshop",
      features: [
        "Complete oil service",
        "All filters replacement",
        "50-point inspection",
        "Brake system check",
      ],

      vehicleTypes: ["sedan", "suv", "hatchback", "luxury"],
      popular: true,
    },
    {
      id: "7",
      title: "Dent Removal & Paint",
      category: "bodywork",
      description:
        "Expert dent repair, scratch removal, and professional paint matching for seamless finish",
      price: "₹5,000 - ₹25,000",
      priceValue: 15000,
      duration: "1-2 days",
      image: "https://images.unsplash.com/photo-1674632917668-6237bad1347d",
      alt: "Skilled auto body technician carefully repairing and painting car door panel in professional paint booth",
      features: [
        "Paintless dent repair",
        "Color matching",
        "Professional painting",
        "Clear coat protection",
      ],

      vehicleTypes: ["sedan", "suv", "hatchback", "luxury"],
    },
    {
      id: "8",
      title: "Battery Replacement",
      category: "repair",
      description:
        "Premium battery installation with electrical system check and charging system diagnostics",
      price: "₹4,500 - ₹12,000",
      priceValue: 8250,
      duration: "30 mins",
      image:
        "https://img.rocket.new/generatedImages/rocket_gen_img_13b1f46cf-1766928480041.png",
      alt: "Technician installing new car battery and testing electrical connections with multimeter",
      features: [
        "Premium battery brands",
        "Electrical system check",
        "Terminal cleaning",
        "Warranty included",
      ],

      vehicleTypes: ["sedan", "suv", "hatchback", "luxury"],
    },
    {
      id: "9",
      title: "Suspension Repair",
      category: "repair",
      description:
        "Complete suspension system inspection, shock absorber replacement, and ride quality restoration",
      price: "₹8,000 - ₹20,000",
      priceValue: 14000,
      duration: "3 hours",
      image: "https://images.unsplash.com/photo-1729843881575-83fd37f77009",
      alt: "Mechanic inspecting and replacing car suspension components including shock absorbers and springs",
      features: [
        "Shock absorber replacement",
        "Spring inspection",
        "Alignment service",
        "Test drive included",
      ],

      vehicleTypes: ["sedan", "suv", "hatchback"],
    },
    {
      id: "10",
      title: "Performance Tuning",
      category: "customization",
      description:
        "ECU remapping, performance upgrades, and custom tuning for enhanced power and efficiency",
      price: "₹15,000 - ₹50,000",
      priceValue: 32500,
      duration: "4-6 hours",
      image:
        "https://img.rocket.new/generatedImages/rocket_gen_img_1019ceb6e-1767016827765.png",
      alt: "High-performance engine bay with custom modifications and professional tuning equipment connected",
      features: [
        "ECU remapping",
        "Performance testing",
        "Custom modifications",
        "Dyno testing",
      ],

      vehicleTypes: ["luxury", "suv"],
    },
    {
      id: "11",
      title: "Transmission Service",
      category: "maintenance",
      description:
        "Transmission fluid change, filter replacement, and complete transmission system inspection",
      price: "₹6,500 - ₹15,000",
      priceValue: 10750,
      duration: "2 hours",
      image:
        "https://img.rocket.new/generatedImages/rocket_gen_img_14139a3a5-1764863304920.png",
      alt: "Automotive technician servicing vehicle transmission system with specialized tools and equipment",
      features: [
        "Fluid replacement",
        "Filter change",
        "System inspection",
        "Performance test",
      ],

      vehicleTypes: ["sedan", "suv", "hatchback", "luxury"],
    },
    {
      id: "12",
      title: "Detailing Package",
      category: "customization",
      description:
        "Premium interior and exterior detailing with ceramic coating, paint protection, and deep cleaning",
      price: "₹8,000 - ₹25,000",
      priceValue: 16500,
      duration: "1 day",
      image:
        "https://img.rocket.new/generatedImages/rocket_gen_img_1278c40ef-1764691094283.png",
      alt: "Professional detailer applying ceramic coating to luxury car exterior with polishing equipment",
      features: [
        "Interior deep cleaning",
        "Exterior polishing",
        "Ceramic coating",
        "Paint protection",
      ],

      vehicleTypes: ["sedan", "suv", "hatchback", "luxury"],
    },
  ];

  const filterServices = (services: Service[]): Service[] => {
    if (!isHydrated) return services;

    return services.filter((service) => {
      const matchesCategory =
        filters.category === "all" || service.category === filters.category;
      const matchesVehicle =
        filters.vehicleType === "all" ||
        service.vehicleTypes.includes(filters.vehicleType);

      let matchesPrice = true;
      if (filters.priceRange === "budget") {
        matchesPrice = service.priceValue < 5000;
      } else if (filters.priceRange === "mid") {
        matchesPrice =
          service.priceValue >= 5000 && service.priceValue <= 15000;
      } else if (filters.priceRange === "premium") {
        matchesPrice = service.priceValue > 15000;
      }

      const matchesSearch =
        filters.searchQuery === "" ||
        service.title
          .toLowerCase()
          .includes(filters.searchQuery.toLowerCase()) ||
        service.description
          .toLowerCase()
          .includes(filters.searchQuery.toLowerCase());

      return matchesCategory && matchesVehicle && matchesPrice && matchesSearch;
    });
  };

  const filteredServices = filterServices(allServices);

  if (!isHydrated) {
    return (
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <div className="h-24 bg-muted rounded-lg animate-pulse"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="h-96 bg-muted rounded-lg animate-pulse"
              ></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <ServiceFilterBar onFilterChange={setFilters} className="mb-8" />

        {filteredServices.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
              No Services Found
            </h3>
            <p className="text-muted-foreground">
              Try adjusting your filters to see more results
            </p>
          </div>
        ) : (
          <>
            <div className="mb-6 text-muted-foreground">
              Showing {filteredServices.length} service
              {filteredServices.length !== 1 ? "s" : ""}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ServicesInteractive;
