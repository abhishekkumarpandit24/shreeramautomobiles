import React from "react";
import AppImage from "@/components/ui/AppImage";
import Icon from "@/components/ui/AppIcon";

interface Certification {
  id: number;
  name: string;
  issuer: string;
  year: string;
  description: string;
  icon: string;
}

interface Partnership {
  id: number;
  name: string;
  type: string;
  logo: string;
  alt: string;
}

const CertificationsPartnerships = () => {
  const certifications: Certification[] = [
    {
      id: 1,
      name: "ISO 9001:2015",
      issuer: "International Organization for Standardization",
      year: "2021",
      description:
        "Quality Management System certification ensuring consistent service excellence.",
      icon: "ShieldCheckIcon",
    },
    {
      id: 2,
      name: "ASE Master Certification",
      issuer: "Automotive Service Excellence",
      year: "2020",
      description:
        "Highest level of automotive technician certification for our team.",
      icon: "AcademicCapIcon",
    },
    {
      id: 3,
      name: "Environmental Compliance",
      issuer: "Central Pollution Control Board",
      year: "2022",
      description:
        "Certified for eco-friendly waste management and sustainable practices.",
      icon: "GlobeAltIcon",
    },
    {
      id: 4,
      name: "Safety Standards",
      issuer: "Occupational Safety & Health",
      year: "2023",
      description:
        "Workplace safety certification ensuring secure environment for team and customers.",
      icon: "ShieldExclamationIcon",
    },
  ];

  const partnerships: Partnership[] = [
    {
      id: 1,
      name: "Bosch",
      type: "Diagnostic Equipment Partner",
      logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1d9ae5b46-1767016827219.png",
      alt: "Bosch automotive technology logo on modern workshop equipment display",
    },
    {
      id: 2,
      name: "Castrol",
      type: "Lubricants Partner",
      logo: "https://images.unsplash.com/photo-1699542813212-48316e737827",
      alt: "Castrol premium motor oil products displayed in automotive service center",
    },
    {
      id: 3,
      name: "Michelin",
      type: "Tire Solutions Partner",
      logo: "https://img.rocket.new/generatedImages/rocket_gen_img_10ac44379-1765715135871.png",
      alt: "Michelin tire brand display with various tire models in professional workshop setting",
    },
    {
      id: 4,
      name: "Exide",
      type: "Battery Solutions Partner",
      logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1285ea710-1767016832338.png",
      alt: "Exide automotive batteries arranged on display shelf in parts department",
    },
    {
      id: 5,
      name: "NGK",
      type: "Spark Plugs Partner",
      logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1b250b83b-1767016828608.png",
      alt: "NGK spark plugs and ignition components displayed in organized parts inventory",
    },
    {
      id: 6,
      name: "Mann Filter",
      type: "Filtration Systems Partner",
      logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1659e6d52-1767016829285.png",
      alt: "Mann Filter automotive filtration products arranged in professional parts storage",
    },
  ];

  const awards = [
    {
      year: "2024",
      title: "Best Automotive Service Provider - NCR",
      organization: "Auto Industry Awards",
    },
    {
      year: "2023",
      title: "Customer Excellence Award",
      organization: "Service Quality Council",
    },
    {
      year: "2022",
      title: "Innovation in Automotive Services",
      organization: "Tech Auto Summit",
    },
    {
      year: "2021",
      title: "Sustainable Business Practices",
      organization: "Green Business Forum",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            Certifications & Partnerships
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our industry credentials and strategic partnerships reflect our
            commitment to maintaining the highest standards of service quality
            and technical excellence.
          </p>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-heading font-semibold text-foreground mb-8 text-center">
            Industry Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="bg-card rounded-xl p-6 shadow-card hover:shadow-modal transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon
                    name={cert.icon}
                    size={32}
                    variant="solid"
                    className="text-primary"
                  />
                </div>
                <h4 className="text-lg font-heading font-semibold text-foreground mb-2">
                  {cert.name}
                </h4>
                <p className="text-sm text-primary font-medium mb-2">
                  {cert.issuer}
                </p>
                <p className="text-xs text-muted-foreground mb-3">
                  Certified: {cert.year}
                </p>
                <p className="text-sm text-muted-foreground">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Partnerships */}
        <div className="mb-16">
          <h3 className="text-2xl font-heading font-semibold text-foreground mb-8 text-center">
            Strategic Partnerships
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partnerships.map((partner) => (
              <div
                key={partner.id}
                className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-modal transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative h-32 overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10">
                  <AppImage
                    src={partner.logo}
                    alt={partner.alt}
                    className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h4 className="font-semibold text-foreground mb-1">
                    {partner.name}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {partner.type}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Awards & Recognition */}
        <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-card">
          <h3 className="text-2xl font-heading font-semibold text-foreground mb-8 text-center">
            Awards & Recognition
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {awards.map((award, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-background rounded-xl hover:bg-primary/5 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon
                    name="TrophyIcon"
                    size={24}
                    variant="solid"
                    className="text-primary"
                  />
                </div>
                <div>
                  <div className="text-sm font-semibold text-primary mb-1">
                    {award.year}
                  </div>
                  <h4 className="text-lg font-heading font-semibold text-foreground mb-1">
                    {award.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {award.organization}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsPartnerships;
