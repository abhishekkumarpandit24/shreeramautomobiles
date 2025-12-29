import React from "react";
import Link from "next/link";
import Icon from "@/components/ui/AppIcon";

interface ServiceCTAProps {
  className?: string;
}

const ServiceCTA = ({ className = "" }: ServiceCTAProps) => {
  return (
    <section
      className={`py-16 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground ${className}`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Ready to Experience Excellence?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Join thousands of satisfied customers who trust Bose Workshop for
            their automotive needs. Book your service today and experience the
            difference that 350+ experts make.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link
              href="/book-service"
              className="px-8 py-3 bg-primary-foreground text-primary rounded-lg hover:bg-primary-foreground/90 transition-colors duration-300 font-medium inline-flex items-center space-x-2"
            >
              <Icon name="CalendarIcon" size={20} variant="outline" />
              <span>Book Service Now</span>
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border-2 border-primary-foreground text-primary-foreground rounded-lg hover:bg-primary-foreground/10 transition-colors duration-300 font-medium inline-flex items-center space-x-2"
            >
              <Icon name="PhoneIcon" size={20} variant="outline" />
              <span>Call Us: +91 1234567890</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4">
              <Icon
                name="ClockIcon"
                size={32}
                variant="outline"
                className="mx-auto mb-2"
              />
              <div className="font-semibold">Same-Day Service</div>
              <div className="text-sm text-primary-foreground/80">
                Available for most repairs
              </div>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4">
              <Icon
                name="ShieldCheckIcon"
                size={32}
                variant="outline"
                className="mx-auto mb-2"
              />
              <div className="font-semibold">Quality Guarantee</div>
              <div className="text-sm text-primary-foreground/80">
                All work backed by warranty
              </div>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4">
              <Icon
                name="CurrencyRupeeIcon"
                size={32}
                variant="outline"
                className="mx-auto mb-2"
              />
              <div className="font-semibold">Transparent Pricing</div>
              <div className="text-sm text-primary-foreground/80">
                No hidden charges
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCTA;
