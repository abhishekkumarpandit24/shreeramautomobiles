'use client';

import React, { useState, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  alt: string;
  rating: number;
  text: string;
  service: string;
  date: string;
}

interface TestimonialCarouselProps {
  className?: string;
}

const TestimonialCarousel = ({ className = '' }: TestimonialCarouselProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsHydrated(true);
  }, []);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      role: 'Business Owner',
      company: 'Kumar Enterprises',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1a891c21d-1763296710025.png',
      alt: 'Professional Indian businessman in navy blue suit with confident smile in modern office',
      rating: 5,
      text: 'Bose Workshop has been maintaining our fleet of 25 vehicles for the past 3 years. Their professionalism, transparency, and quality of work is unmatched. The team understands our business needs and ensures minimal downtime.',
      service: 'Fleet Management',
      date: 'December 2024',
    },
    {
      id: 2,
      name: 'Priya Sharma',
      role: 'Software Engineer',
      company: 'Tech Solutions Pvt Ltd',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_19205d2aa-1763296356182.png',
      alt: 'Young Indian woman professional in white blazer with warm smile in bright office setting',
      rating: 5,
      text: "I was stranded on the highway at midnight, and Bose Workshop's emergency service arrived within 30 minutes. They not only fixed my car on the spot but also ensured I reached home safely. Truly exceptional service!",
      service: 'Emergency Service',
      date: 'November 2024',
    },
    {
      id: 3,
      name: 'Amit Patel',
      role: 'Entrepreneur',
      company: 'Patel Industries',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1cb468779-1763295443265.png',
      alt: 'Middle-aged Indian businessman in grey suit with glasses standing in corporate office',
      rating: 5,
      text: 'The diagnostic service at Bose Workshop is outstanding. They identified a complex engine issue that three other workshops missed. The repair was done efficiently, and my car runs better than ever. Highly recommended!',
      service: 'Advanced Diagnostics',
      date: 'December 2024',
    },
    {
      id: 4,
      name: 'Sneha Reddy',
      role: 'Marketing Manager',
      company: 'Creative Agency',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1f0883a0c-1763299171534.png',
      alt: 'Young Indian woman in red blazer with professional demeanor in modern workspace',
      rating: 5,
      text: 'Regular maintenance at Bose Workshop has kept my car in perfect condition for 5 years. The team is knowledgeable, courteous, and always explains everything clearly. Their customer portal makes tracking service history so convenient.',
      service: 'Preventive Maintenance',
      date: 'October 2024',
    },
    {
      id: 5,
      name: 'Vikram Singh',
      role: 'Logistics Manager',
      company: 'Transport Solutions',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_18162979e-1763294376572.png',
      alt: 'Indian man in casual business attire with friendly expression in warehouse setting',
      rating: 5,
      text: 'Managing a logistics company means our vehicles are our lifeline. Bose Workshop understands this urgency. Their quick turnaround time and quality repairs have made them our trusted automotive partner.',
      service: 'General Repair',
      date: 'November 2024',
    },
  ];

  useEffect(() => {
    if (!isHydrated) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isHydrated, testimonials.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  if (!isHydrated) {
    return (
      <section className={`py-16 bg-card ${className}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              What Our Customers Say
            </h2>
          </div>
          <div className="max-w-4xl mx-auto bg-background rounded-lg shadow-card p-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-muted rounded-full" />
              <div>
                <div className="h-6 w-32 bg-muted rounded mb-2" />
                <div className="h-4 w-24 bg-muted rounded" />
              </div>
            </div>
            <div className="h-4 w-full bg-muted rounded mb-2" />
            <div className="h-4 w-full bg-muted rounded mb-2" />
            <div className="h-4 w-3/4 bg-muted rounded" />
          </div>
        </div>
      </section>
    );
  }

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className={`py-16 bg-card ${className}`}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real experiences from real customers who trust us with their vehicles
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-background rounded-lg shadow-modal p-8 md:p-12">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 text-primary/10">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="currentColor">
                <path d="M12 34h8l4-8V14H12v12h8zm16 0h8l4-8V14H28v12h8z" />
              </svg>
            </div>

            {/* Content */}
            <div className="relative">
              {/* Customer Info */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <AppImage
                    src={currentTestimonial.image}
                    alt={currentTestimonial.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {currentTestimonial.name}
                  </h3>
                  <p className="text-muted-foreground">
                    {currentTestimonial.role} • {currentTestimonial.company}
                  </p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Icon key={i} name="StarIcon" size={20} variant="solid" className="text-action" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                {currentTestimonial.text}
              </p>

              {/* Service & Date */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Icon name="WrenchScrewdriverIcon" size={16} variant="outline" />
                  <span>{currentTestimonial.service}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="CalendarIcon" size={16} variant="outline" />
                  <span>{currentTestimonial.date}</span>
                </div>
                <div className="flex items-center space-x-2 text-primary">
                  <Icon name="CheckBadgeIcon" size={16} variant="solid" />
                  <span className="font-medium">Verified Customer</span>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 pointer-events-none">
              <button
                onClick={handlePrev}
                className="w-10 h-10 flex items-center justify-center bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300 pointer-events-auto -ml-5"
                aria-label="Previous testimonial"
              >
                <Icon name="ChevronLeftIcon" size={20} variant="outline" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 flex items-center justify-center bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300 pointer-events-auto -mr-5"
                aria-label="Next testimonial"
              >
                <Icon name="ChevronRightIcon" size={20} variant="outline" />
              </button>
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary w-8'
                    : 'bg-muted hover:bg-muted-foreground/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
