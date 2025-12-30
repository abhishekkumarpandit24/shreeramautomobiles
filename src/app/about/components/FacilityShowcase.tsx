"use client";

import React, { useState } from "react";
import AppImage from "@/components/ui/AppImage";
import Icon from "@/components/ui/AppIcon";

interface FacilityFeature {
  id: number;
  title: string;
  description: string;
  icon: string;
  image: string;
  alt: string;
}

const FacilityShowcase = () => {
  const [activeFeature, setActiveFeature] = useState<number>(0);

  const facilityFeatures: FacilityFeature[] = [
    {
      id: 0,
      title: "Advanced Diagnostic Center",
      description:
        "State-of-the-art diagnostic equipment with computer-aided analysis systems for accurate vehicle assessment and troubleshooting.",
      icon: "ComputerDesktopIcon",
      image:
        "https://img.rocket.new/generatedImages/rocket_gen_img_10b7e96ff-1764643783122.png",
      alt: "Modern automotive diagnostic center with multiple computer workstations, advanced scanning equipment, and technicians analyzing vehicle data on large monitors",
    },
    {
      id: 1,
      title: "Service Bays",
      description:
        "25+ fully-equipped service bays with hydraulic lifts, specialized tools, and organized workstations for efficient vehicle servicing.",
      icon: "WrenchScrewdriverIcon",
      image: "https://images.unsplash.com/photo-1625285715864-0cffc81271f9",
      alt: "Spacious automotive service bay with hydraulic lift, organized tool cabinets, bright LED lighting, and mechanics working on elevated vehicle",
    },
    {
      id: 2,
      title: "Parts Inventory",
      description:
        "Comprehensive parts warehouse with organized inventory management system ensuring quick access to genuine and quality replacement parts.",
      icon: "CubeIcon",
      image:
        "https://img.rocket.new/generatedImages/rocket_gen_img_13c975add-1767001380842.png",
      alt: "Well-organized automotive parts warehouse with labeled shelving units, inventory management system, and wide variety of genuine spare parts",
    },
    {
      id: 3,
      title: "Customer Lounge",
      description:
        "Comfortable waiting area with Wi-Fi, refreshments, and real-time service tracking displays for enhanced customer experience.",
      icon: "UserGroupIcon",
      image: "https://images.unsplash.com/photo-1728954637771-b4f4c7282656",
      alt: "Modern customer waiting lounge with comfortable seating, large windows, refreshment area, and digital service tracking displays on wall",
    },
    {
      id: 4,
      title: "Quality Control Station",
      description:
        "Dedicated quality inspection area with multi-point checking systems to ensure every vehicle meets our excellence standards.",
      icon: "ShieldCheckIcon",
      image:
        "https://img.rocket.new/generatedImages/rocket_gen_img_145c9039d-1764664382847.png",
      alt: "Quality control inspection station with checklist boards, testing equipment, and quality assurance specialist examining vehicle components",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            C-12/5 Sector-85 Noida Facility
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Experience our world-class facility designed for excellence. Every
            corner of our workshop reflects our commitment to quality,
            efficiency, and customer satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Feature List */}
          <div className="space-y-4">
            {facilityFeatures.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(feature.id)}
                className={`w-full text-left p-6 rounded-xl transition-all duration-300 ${
                  activeFeature === feature.id
                    ? "bg-primary text-primary-foreground shadow-modal"
                    : "bg-card hover:bg-card/80 shadow-card"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      activeFeature === feature.id
                        ? "bg-primary-foreground/20"
                        : "bg-primary/10"
                    }`}
                  >
                    <Icon
                      name={feature.icon}
                      size={24}
                      variant="outline"
                      className={
                        activeFeature === feature.id
                          ? "text-primary-foreground"
                          : "text-primary"
                      }
                    />
                  </div>
                  <div className="flex-1">
                    <h3
                      className={`text-xl font-heading font-semibold mb-2 ${
                        activeFeature === feature.id
                          ? "text-primary-foreground"
                          : "text-foreground"
                      }`}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className={`text-sm ${
                        activeFeature === feature.id
                          ? "text-primary-foreground/90"
                          : "text-muted-foreground"
                      }`}
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Feature Image */}
          <div className="sticky top-24">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-modal">
              <AppImage
                src={facilityFeatures[activeFeature].image}
                alt={facilityFeatures[activeFeature].alt}
                className="w-full h-full object-cover"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h4 className="text-2xl font-heading font-bold text-white mb-2">
                  {facilityFeatures[activeFeature].title}
                </h4>
                <p className="text-white/90 text-sm">
                  {facilityFeatures[activeFeature].description}
                </p>
              </div>
            </div>

            {/* Location Info */}
            <div className="mt-6 bg-card rounded-xl p-6 shadow-card">
              <div className="flex items-start gap-4 mb-4">
                <Icon
                  name="MapPinIcon"
                  size={24}
                  variant="solid"
                  className="text-primary flex-shrink-0"
                />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Visit Our Facility
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    C-12/5, Sector-85, Noida, Uttar Pradesh 201301
                  </p>
                </div>
              </div>
              <div className="h-48 rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  loading="lazy"
                  title="Shree ram automobiles Location"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=28.5355,77.3910&z=14&output=embed"
                  className="border-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilityShowcase;
