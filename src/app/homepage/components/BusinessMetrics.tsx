'use client';

import React, { useState, useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Metric {
  id: number;
  value: number;
  suffix: string;
  label: string;
  icon: string;
  description: string;
}

interface BusinessMetricsProps {
  className?: string;
}

const BusinessMetrics = ({ className = '' }: BusinessMetricsProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState<Record<number, number>>({});
  const sectionRef = useRef<HTMLDivElement>(null);

  const metrics: Metric[] = [
    {
      id: 1,
      value: 102,
      suffix: 'Cr+',
      label: 'Business Volume',
      icon: 'CurrencyRupeeIcon',
      description: 'Annual turnover showcasing market leadership',
    },
    {
      id: 2,
      value: 350,
      suffix: '+',
      label: 'Expert Professionals',
      icon: 'UsersIcon',
      description: 'Skilled technicians and support staff',
    },
    {
      id: 3,
      value: 50000,
      suffix: '+',
      label: 'Vehicles Serviced',
      icon: 'TruckIcon',
      description: 'Annual service capacity and customer trust',
    },
    {
      id: 4,
      value: 98,
      suffix: '%',
      label: 'Customer Satisfaction',
      icon: 'StarIcon',
      description: 'Verified customer satisfaction rating',
    },
  ];

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isHydrated]);

  useEffect(() => {
    if (!isVisible || !isHydrated) return;

    metrics.forEach((metric) => {
      let start = 0;
      const end = metric.value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCounts((prev) => ({ ...prev, [metric.id]: end }));
          clearInterval(timer);
        } else {
          setCounts((prev) => ({ ...prev, [metric.id]: Math.floor(start) }));
        }
      }, 16);
    });
  }, [isVisible, isHydrated]);

  if (!isHydrated) {
    return (
      <section className={`py-16 bg-card ${className}`}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric) => (
              <div key={metric.id} className="text-center p-6 bg-background rounded-lg shadow-card">
                <div className="text-4xl font-bold text-primary mb-2">
                  {metric.value}
                  {metric.suffix}
                </div>
                <div className="text-lg font-semibold text-foreground mb-2">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} className={`py-16 bg-card ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Our Success in Numbers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Decades of excellence, thousands of satisfied customers, and a commitment to automotive
            perfection
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric) => (
            <div
              key={metric.id}
              className="group relative overflow-hidden bg-background rounded-lg shadow-card hover:shadow-modal transition-all duration-300 p-8 text-center transform hover:scale-105"
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon name={metric.icon} size={32} variant="solid" className="text-primary" />
                </div>
              </div>

              {/* Counter */}
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {counts[metric.id] || 0}
                {metric.suffix}
              </div>

              {/* Label */}
              <div className="text-lg font-semibold text-foreground mb-2">{metric.label}</div>

              {/* Description */}
              <p className="text-sm text-muted-foreground">{metric.description}</p>

              {/* Decorative Element */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessMetrics;
