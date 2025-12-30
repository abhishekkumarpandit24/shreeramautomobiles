import React from "react";
import Link from "next/link";
import Icon from "@/components/ui/AppIcon";

const CTASection = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
            Experience the Shree ram automobiles Difference
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us with their
            vehicles. From routine maintenance to complex repairs, we deliver
            excellence every time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/book-service"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-foreground text-primary rounded-lg hover:bg-primary-foreground/90 transition-all duration-300 font-semibold shadow-modal"
            >
              <Icon name="CalendarIcon" size={20} variant="outline" />
              Book Your Service
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-primary-foreground text-primary-foreground rounded-lg hover:bg-primary-foreground/10 transition-all duration-300 font-semibold"
            >
              <Icon name="PhoneIcon" size={20} variant="outline" />
              Contact Us
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-12 border-t border-primary-foreground/20">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-foreground/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon
                  name="ClockIcon"
                  size={32}
                  variant="outline"
                  className="text-primary-foreground"
                />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">
                Quick Service
              </h3>
              <p className="text-primary-foreground/80 text-sm">
                Efficient turnaround times without compromising quality
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-foreground/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon
                  name="ShieldCheckIcon"
                  size={32}
                  variant="outline"
                  className="text-primary-foreground"
                />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">
                Quality Assured
              </h3>
              <p className="text-primary-foreground/80 text-sm">
                ISO certified processes and genuine parts guarantee
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-foreground/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon
                  name="CurrencyRupeeIcon"
                  size={32}
                  variant="outline"
                  className="text-primary-foreground"
                />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">
                Transparent Pricing
              </h3>
              <p className="text-primary-foreground/80 text-sm">
                No hidden charges, clear estimates before service
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
