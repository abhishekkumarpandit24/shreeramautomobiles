'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className = '' }: HeroSectionProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsHydrated(true);
  }, []);

  const slides = [
    {
      title: '₹102 Crore Business Built on Trust',
      subtitle: "Noida's Premier Automotive Destination",
      description:
        'Experience excellence with 350+ automotive experts delivering world-class service',
      image: 'https://images.unsplash.com/photo-1727893141025-35d62b3f4a03',
      alt: 'Modern automotive workshop',
      cta: 'Book Service Now',
      ctaLink: '/book-service',
    },
    {
      title: '350+ Experts, One Promise: Excellence',
      subtitle: "Your Vehicle's Story, Our Expertise",
      description: 'From routine maintenance to complex diagnostics, we handle it all',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1e960a229-1766476774892.png',
      alt: 'Automotive technicians working',
      cta: 'Explore Services',
      ctaLink: '/services',
    },
    {
      title: '24/7 Emergency Service Available',
      subtitle: "We're Here When You Need Us Most",
      description: 'Round-the-clock roadside assistance and emergency repairs',
      image: 'https://images.unsplash.com/photo-1633114438014-74e20d456df1',
      alt: 'Emergency roadside assistance',
      cta: 'Emergency Contact',
      ctaLink: '/contact',
    },
  ];

  useEffect(() => {
    if (!isHydrated) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isHydrated, slides.length]);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  if (!isHydrated) {
    return (
      <section
        className={`relative h-screen bg-gradient-to-br from-primary to-primary/80 ${className}`}
      >
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
              ₹102 Crore Business Built on Trust
            </h1>
            <p className="text-white/90 text-xl md:text-2xl">
              Noida&apos;s Premier Automotive Destination
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`relative h-screen overflow-hidden ${className}`}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img src={slide.image} alt={slide.alt} className="w-full h-full object-cover" />
          </div>

          {/* Dark Overlay */}
          <div className="absolute inset-0 z-10 bg-black/65" />

          {/* Content */}
          <div className="relative z-20 h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="text-white/90 text-xl md:text-3xl mb-4">{slide.subtitle}</p>
                <p className="text-white/80 text-lg md:text-xl mb-8">{slide.description}</p>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href={slide.ctaLink}
                    className="
    px-8 py-4
    bg-action
    text-white
    dark:text-black
    rounded-lg
    font-semibold
    text-lg
    shadow-lg
    hover:bg-action/90
    transition-transform
    hover:scale-105
  "
                  >
                    {slide.cta}
                  </Link>

                  <Link
                    href="/about"
                    className="px-8 py-4 bg-white text-primary rounded-lg font-semibold text-lg shadow-lg hover:bg-white/90"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation */}
      {/* <button
        onClick={handlePrevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center bg-white/20 hover:bg-white/40 rounded-full backdrop-blur"
        aria-label="Previous slide"
      >
        <Icon name="ChevronLeftIcon" size={24} variant="outline" />
      </button> */}

      <button
        onClick={handleNextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center bg-white/20 hover:bg-white/40 rounded-full backdrop-blur"
        aria-label="Next slide"
      >
        <Icon name="ChevronRightIcon" size={24} variant="outline" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white w-8' : 'bg-white/40 w-3 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-30 animate-bounce">
        <Icon name="ChevronDownIcon" size={32} variant="outline" className="text-white" />
      </div>
    </section>
  );
};

export default HeroSection;
