'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface Service {
  id: number;
  name: string;
  icon: string;
  description: string;
  link: string;
  popular: boolean;
}

interface ServiceFinderProps {
  className?: string;
}

const ServiceFinder = ({ className = '' }: ServiceFinderProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsHydrated(true);
  }, []);

  const services: Service[] = [
    {
      id: 1,
      name: 'General Repair',
      icon: 'WrenchScrewdriverIcon',
      description: 'Comprehensive vehicle repair services for all makes and models',
      link: '/services#general-repair',
      popular: true,
    },
    {
      id: 2,
      name: 'Preventive Maintenance',
      icon: 'ShieldCheckIcon',
      description: 'Regular maintenance to keep your vehicle running smoothly',
      link: '/services#maintenance',
      popular: true,
    },
    {
      id: 3,
      name: 'Advanced Diagnostics',
      icon: 'ComputerDesktopIcon',
      description: 'State-of-the-art diagnostic equipment for accurate problem detection',
      link: '/services#diagnostics',
      popular: false,
    },
    {
      id: 4,
      name: 'Emergency Service',
      icon: 'BoltIcon',
      description: '24/7 roadside assistance and emergency repairs',
      link: '/services#emergency',
      popular: true,
    },
    {
      id: 5,
      name: 'Body Work & Paint',
      icon: 'PaintBrushIcon',
      description: 'Professional bodywork, denting, and painting services',
      link: '/services#bodywork',
      popular: false,
    },
    {
      id: 6,
      name: 'Fleet Management',
      icon: 'TruckIcon',
      description: 'Comprehensive fleet maintenance and management solutions',
      link: '/services#fleet',
      popular: false,
    },
  ];

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'popular', label: 'Popular' },
    { id: 'emergency', label: 'Emergency' },
  ];

  const filteredServices = services.filter((service) => {
    const matchesCategory =
      selectedCategory === 'all' ||
      (selectedCategory === 'popular' && service.popular) ||
      (selectedCategory === 'emergency' && service.name.toLowerCase().includes('emergency'));

    const matchesSearch =
      searchQuery === '' ||
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  if (!isHydrated) {
    return (
      <section className={`py-16 bg-background ${className}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Find Your Service
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((service) => (
              <div key={service.id} className="bg-card rounded-lg shadow-card p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">{service.name}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-16 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Find Your Service
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Quick access to all our automotive services. Search by name or browse by category.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Icon
                name="MagnifyingGlassIcon"
                size={20}
                variant="outline"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
              />
            </div>

            {/* Book Now Button */}
            <Link
              href="/book-service"
              className="px-6 py-3 bg-action text-action-foreground rounded-lg hover:bg-action/90 transition-all duration-300 font-semibold text-center whitespace-nowrap"
            >
              Book Service Now
            </Link>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'bg-card text-foreground hover:bg-card/80 border border-border'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <Link
              key={service.id}
              href={service.link}
              className="group bg-card rounded-lg shadow-card hover:shadow-modal transition-all duration-300 p-6 transform hover:scale-105"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon name={service.icon} size={24} variant="outline" className="text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {service.name}
                    </h3>
                    {service.popular && (
                      <span className="px-2 py-1 bg-action/10 text-action text-xs font-semibold rounded">
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm mb-3">{service.description}</p>
                  <div className="flex items-center text-primary text-sm font-medium">
                    Learn More
                    <Icon name="ArrowRightIcon" size={16} variant="outline" className="ml-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <Icon
              name="MagnifyingGlassIcon"
              size={48}
              variant="outline"
              className="text-muted-foreground mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-foreground mb-2">No services found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServiceFinder;
