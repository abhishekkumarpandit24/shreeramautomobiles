import React from "react";
import Link from "next/link";
import Icon from "@/components/ui/AppIcon";

interface CTASectionProps {
  className?: string;
}

const CTASection = ({ className = "" }: CTASectionProps) => {
  return (
    <section
      className={`py-16 bg-gradient-to-br from-primary to-primary/80 ${className}`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
            Ready to Experience Automotive Excellence?
          </h2>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Shree ram automobiles with
            their vehicles. Book your service today and experience the
            difference.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/book-service"
              className="px-8 py-4 bg-action text-action-foreground rounded-lg hover:bg-action/90 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Icon name="CalendarIcon" size={20} variant="outline" />
              <span>Book Service Now</span>
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-primary-foreground text-primary rounded-lg hover:bg-primary-foreground/90 transition-all duration-300 font-semibold text-lg shadow-lg flex items-center justify-center space-x-2"
            >
              <Icon name="PhoneIcon" size={20} variant="outline" />
              <span>Contact Us</span>
            </Link>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6">
              <Icon
                name="ClockIcon"
                size={32}
                variant="solid"
                className="text-primary-foreground mx-auto mb-3"
              />
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">
                24/7 Emergency
              </h3>
              <p className="text-sm text-primary-foreground/80">
                Round-the-clock support when you need it most
              </p>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6">
              <Icon
                name="ShieldCheckIcon"
                size={32}
                variant="solid"
                className="text-primary-foreground mx-auto mb-3"
              />
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">
                Quality Assured
              </h3>
              <p className="text-sm text-primary-foreground/80">
                ISO certified with manufacturer-approved processes
              </p>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6">
              <Icon
                name="CurrencyRupeeIcon"
                size={32}
                variant="solid"
                className="text-primary-foreground mx-auto mb-3"
              />
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">
                Transparent Pricing
              </h3>
              <p className="text-sm text-primary-foreground/80">
                No hidden charges, clear estimates upfront
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-12 pt-8 border-t border-primary-foreground/20">
            <p className="text-primary-foreground/80 mb-4">
              Prefer to speak with us directly?
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <div className="flex items-center space-x-2 text-primary-foreground">
                <Icon name="PhoneIcon" size={20} variant="solid" />
                <span className="font-semibold">+91 1234567890</span>
              </div>
              <div className="flex items-center space-x-2 text-primary-foreground">
                <Icon name="EnvelopeIcon" size={20} variant="solid" />
                <span className="font-semibold">support@boseworkshop.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
