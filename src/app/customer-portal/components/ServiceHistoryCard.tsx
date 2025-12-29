'use client';

import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface ServiceRecord {
  id: string;
  date: string;
  serviceType: string;
  vehicleModel: string;
  mileage: number;
  cost: number;
  status: 'completed' | 'in-progress' | 'scheduled';
  technician: string;
  description: string;
  images: Array<{ url: string; alt: string }>;
  nextServiceDue: string;
}

interface ServiceHistoryCardProps {
  service: ServiceRecord;
  onViewDetails: (id: string) => void;
}

const ServiceHistoryCard = ({ service, onViewDetails }: ServiceHistoryCardProps) => {
  const statusColors = {
    completed: 'bg-green-100 text-green-800',
    'in-progress': 'bg-blue-100 text-blue-800',
    scheduled: 'bg-yellow-100 text-yellow-800',
  };

  const statusIcons = {
    completed: 'CheckCircleIcon',
    'in-progress': 'ClockIcon',
    scheduled: 'CalendarIcon',
  };

  return (
    <div className="bg-card rounded-lg shadow-sm border border-border p-6 hover:shadow-md transition-shadow duration-300">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-lg font-heading font-semibold text-foreground">
              {service.serviceType}
            </h3>
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[service.status]}`}
            >
              <Icon
                name={statusIcons[service.status]}
                size={14}
                variant="solid"
                className="inline mr-1"
              />
              {service.status.replace('-', ' ').toUpperCase()}
            </span>
          </div>
          <p className="text-sm text-muted-foreground mb-1">{service.vehicleModel}</p>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Icon name="CalendarIcon" size={16} variant="outline" />
              {service.date}
            </span>
            <span className="flex items-center gap-1">
              <Icon name="WrenchScrewdriverIcon" size={16} variant="outline" />
              {service.mileage.toLocaleString('en-IN')} km
            </span>
            <span className="flex items-center gap-1">
              <Icon name="UserIcon" size={16} variant="outline" />
              {service.technician}
            </span>
          </div>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-primary">₹{service.cost.toLocaleString('en-IN')}</p>
          <p className="text-xs text-muted-foreground mt-1">Service Cost</p>
        </div>
      </div>

      <p className="text-sm text-foreground mb-4 line-clamp-2">{service.description}</p>

      {service.images.length > 0 && (
        <div className="grid grid-cols-3 gap-2 mb-4">
          {service.images.slice(0, 3).map((image, index) => (
            <div key={index} className="relative h-20 rounded overflow-hidden bg-muted">
              <AppImage src={image.url} alt={image.alt} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
        <button
          onClick={() => onViewDetails(service.id)}
          className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors duration-300 text-sm font-medium"
        >
          View Full Report
        </button>
        {service.nextServiceDue && (
          <div className="flex-1 px-4 py-2 bg-muted rounded text-sm">
            <p className="text-xs text-muted-foreground mb-1">Next Service Due</p>
            <p className="font-medium text-foreground">{service.nextServiceDue}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceHistoryCard;
