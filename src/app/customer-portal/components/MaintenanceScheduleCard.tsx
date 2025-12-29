'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface MaintenanceItem {
  id: string;
  service: string;
  dueDate: string;
  dueMileage: number;
  currentMileage: number;
  priority: 'high' | 'medium' | 'low';
  estimatedCost: number;
  description: string;
}

interface MaintenanceScheduleCardProps {
  item: MaintenanceItem;
  onScheduleService: (id: string) => void;
}

const MaintenanceScheduleCard = ({ item, onScheduleService }: MaintenanceScheduleCardProps) => {
  const priorityColors = {
    high: 'bg-red-100 text-red-800 border-red-300',
    medium: 'bg-yellow-100 text-yellow-800 border-yellow-300',
    low: 'bg-green-100 text-green-800 border-green-300',
  };

  const priorityIcons = {
    high: 'ExclamationTriangleIcon',
    medium: 'ExclamationCircleIcon',
    low: 'InformationCircleIcon',
  };

  const mileageRemaining = item.dueMileage - item.currentMileage;
  const progressPercentage = Math.min((item.currentMileage / item.dueMileage) * 100, 100);

  return (
    <div
      className={`bg-card rounded-lg shadow-sm border-2 ${priorityColors[item.priority].split(' ')[2]} p-6`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <Icon
              name={priorityIcons[item.priority]}
              size={20}
              variant="solid"
              className={priorityColors[item.priority].split(' ')[1]}
            />
            <h3 className="text-lg font-heading font-semibold text-foreground">{item.service}</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
        </div>
        <span
          className={`px-3 py-1 rounded-full text-xs font-bold ${priorityColors[item.priority]}`}
        >
          {item.priority.toUpperCase()}
        </span>
      </div>

      <div className="space-y-3 mb-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground flex items-center gap-2">
            <Icon name="CalendarIcon" size={16} variant="outline" />
            Due Date
          </span>
          <span className="font-medium text-foreground">{item.dueDate}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground flex items-center gap-2">
            <Icon name="WrenchScrewdriverIcon" size={16} variant="outline" />
            Due Mileage
          </span>
          <span className="font-medium text-foreground">
            {item.dueMileage.toLocaleString('en-IN')} km
          </span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Remaining</span>
          <span className="font-medium text-foreground">
            {mileageRemaining > 0 ? `${mileageRemaining.toLocaleString('en-IN')} km` : 'Overdue'}
          </span>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex justify-between text-xs text-muted-foreground mb-1">
          <span>Progress</span>
          <span>{progressPercentage.toFixed(0)}%</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div
            className={`h-2 rounded-full transition-all duration-300 ${
              progressPercentage >= 90
                ? 'bg-red-500'
                : progressPercentage >= 70
                  ? 'bg-yellow-500'
                  : 'bg-green-500'
            }`}
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-border">
        <div>
          <p className="text-xs text-muted-foreground">Estimated Cost</p>
          <p className="text-xl font-bold text-primary">
            ₹{item.estimatedCost.toLocaleString('en-IN')}
          </p>
        </div>
        <button
          onClick={() => onScheduleService(item.id)}
          className="px-6 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors duration-300 text-sm font-medium"
        >
          Schedule Now
        </button>
      </div>
    </div>
  );
};

export default MaintenanceScheduleCard;
