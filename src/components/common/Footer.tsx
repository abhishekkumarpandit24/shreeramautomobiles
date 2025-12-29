import React from "react";
import Link from "next/link";
import Icon from "@/components/ui/AppIcon";

interface FooterProps {
  className?: string;
}

const Footer = ({ className = "" }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "/homepage" },
    { label: "Services", href: "/services" },
    { label: "About Us", href: "/about" },
    { label: "Book Service", href: "/book-service" },
  ];

  const services = [
    { label: "General Repair", href: "/services#general-repair" },
    { label: "Maintenance", href: "/services#maintenance" },
    { label: "Diagnostics", href: "/services#diagnostics" },
    { label: "Emergency Service", href: "/services#emergency" },
  ];

  const customerLinks = [
    { label: "Customer Portal", href: "/customer-portal" },
    { label: "Track Service", href: "/customer-portal#track" },
    { label: "Service History", href: "/customer-portal#history" },
    { label: "Contact Support", href: "/contact" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: "ShareIcon", href: "#" },
    { name: "Twitter", icon: "ChatBubbleLeftIcon", href: "#" },
    { name: "Instagram", icon: "PhotoIcon", href: "#" },
    { name: "LinkedIn", icon: "BriefcaseIcon", href: "#" },
  ];

  return (
    <footer className={`bg-primary text-primary-foreground ${className}`}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-primary-foreground rounded">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-primary"
                >
                  <path
                    d="M16 4L4 10V22L16 28L28 22V10L16 4Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 16L28 10"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 16V28"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 16L4 10"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-xl font-heading font-bold">
                Bose Workshop
              </span>
            </div>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Noida&apos;s Premier Automotive Destination. ₹102 crore business
              built on trust and excellence with 350+ automotive experts.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-8 h-8 flex items-center justify-center bg-primary-foreground/10 rounded hover:bg-primary-foreground/20 transition-colors duration-300"
                  aria-label={social.name}
                >
                  <Icon name={social.icon} size={18} variant="outline" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">
              Our Services
            </h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">
              Customer Support
            </h3>
            <ul className="space-y-2 mb-4">
              {customerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Icon name="PhoneIcon" size={16} variant="outline" />
                <span>+91 1234567890</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Icon name="EnvelopeIcon" size={16} variant="outline" />
                <span>support@boseworkshop.com</span>
              </div>
              <div className="flex items-start space-x-2 text-sm">
                <Icon
                  name="MapPinIcon"
                  size={16}
                  variant="outline"
                  className="mt-1"
                />
                <span>Sector 62, Noida, Uttar Pradesh 201301</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-primary-foreground/80">
              © {currentYear} Bose Workshop. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy-policy"
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <Link
                href="/sitemap"
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Floating Button */}
      <button
        className="fixed bottom-6 right-6 w-14 h-14 bg-action text-action-foreground rounded-full shadow-modal flex items-center justify-center hover:bg-action/90 transition-all duration-300 animate-pulse-scale z-40"
        aria-label="Emergency Service"
      >
        <Icon name="PhoneIcon" size={24} variant="solid" />
      </button>
    </footer>
  );
};

export default Footer;
