import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface SpecializedServicesProps {
  className?: string;
}

const SpecializedServices = ({ className = '' }: SpecializedServicesProps) => {
  const specializedServices = [
    {
      title: 'Advanced Diagnostics',
      description:
        'State-of-the-art diagnostic equipment for precise vehicle analysis and troubleshooting',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1c095739c-1766472919002.png',
      alt: 'Professional mechanic using advanced computerized diagnostic equipment on luxury vehicle engine',
      features: ['Computer Diagnostics', 'Electrical System Analysis', 'Performance Testing'],
      icon: 'CpuChipIcon',
    },
    {
      title: 'Bodywork & Paint',
      description:
        'Expert collision repair, dent removal, and professional paint services with color matching',
      image: 'https://images.unsplash.com/photo-1666009387246-65e8ad8e7103',
      alt: 'Skilled technician spray painting car body in professional paint booth with protective equipment',
      features: ['Dent Repair', 'Paint Restoration', 'Collision Repair'],
      icon: 'PaintBrushIcon',
    },
    {
      title: 'Performance Customization',
      description:
        'Enhance your vehicle with performance upgrades, custom modifications, and tuning services',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_17670f5c6-1764644032230.png',
      alt: 'High-performance sports car with custom modifications and upgraded exhaust system in modern workshop',
      features: ['Engine Tuning', 'Suspension Upgrades', 'Custom Exhaust'],
      icon: 'BoltIcon',
    },
  ];

  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-semibold mb-4">
            SPECIALIZED EXPERTISE
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Specialized Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Advanced automotive solutions for enthusiasts and high-value vehicles. Our specialized
            team brings decades of expertise to complex projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {specializedServices.map((service, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-64 overflow-hidden">
                <AppImage
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                      <Icon
                        name={service.icon}
                        size={20}
                        variant="outline"
                        className="text-primary-foreground"
                      />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-white">{service.title}</h3>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-muted-foreground mb-4">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm">
                      <Icon
                        name="CheckCircleIcon"
                        size={16}
                        variant="solid"
                        className="text-success flex-shrink-0"
                      />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="block w-full text-center px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors duration-300 font-medium"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecializedServices;
