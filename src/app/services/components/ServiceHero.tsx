import React from "react";

interface ServiceHeroProps {
  className?: string;
}

const ServiceHero = ({ className = "" }: ServiceHeroProps) => {
  return (
    <section
      className={`relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground py-20 ${className}`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            Comprehensive Automotive Solutions
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            From routine maintenance to complex diagnostics, our 350+ experts
            deliver excellence across every service category. Experience the
            difference that ₹102 crore business expertise brings to your vehicle
            care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg px-6 py-4">
              <div className="text-3xl font-bold">350+</div>
              <div className="text-sm text-primary-foreground/80">
                Expert Technicians
              </div>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg px-6 py-4">
              <div className="text-3xl font-bold">50+</div>
              <div className="text-sm text-primary-foreground/80">
                Service Categories
              </div>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg px-6 py-4">
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-sm text-primary-foreground/80">
                Emergency Support
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
