import React from "react";
import AppImage from "@/components/ui/AppImage";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-background to-primary/5 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-primary font-semibold text-sm">
                ₹102 Crore Business Built on Trust
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-foreground leading-tight">
              Noida&apos;s Premier Automotive Destination
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From a traditional auto repair shop to a comprehensive automotive
              ecosystem, Bose Workshop has evolved into a ₹102 crore enterprise
              with 350+ skilled professionals. Our journey represents the
              perfect blend of cutting-edge technology and decades of mechanical
              expertise.
            </p>
            <div className="grid grid-cols-3 gap-6 pt-4">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary">
                  ₹102Cr
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  Business Volume
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary">
                  350+
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  Professionals
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary">
                  15+
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  Years Legacy
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-modal">
            <AppImage
              src="https://img.rocket.new/generatedImages/rocket_gen_img_15638395c-1764656088096.png"
              alt="Modern automotive workshop facility with multiple service bays, professional mechanics working on vehicles, advanced diagnostic equipment, and clean organized workspace"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
