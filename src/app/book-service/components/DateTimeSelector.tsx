'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface DateTimeSelectorProps {
  selectedDate: string;
  selectedTime: string;
  onDateChange: (date: string) => void;
  onTimeChange: (time: string) => void;
}

const DateTimeSelector = ({
  selectedDate,
  selectedTime,
  onDateChange,
  onTimeChange,
}: DateTimeSelectorProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [availableDates, setAvailableDates] = useState<string[]>([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (isHydrated) {
      const dates: string[] = [];
      const today = new Date();
      for (let i = 0; i < 14; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        dates.push(date.toISOString().split('T')[0]);
      }
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setAvailableDates(dates);
    }
  }, [isHydrated]);

  const timeSlots = [
    { time: '09:00', label: '9:00 AM', available: true },
    { time: '10:00', label: '10:00 AM', available: true },
    { time: '11:00', label: '11:00 AM', available: true },
    { time: '12:00', label: '12:00 PM', available: false },
    { time: '13:00', label: '1:00 PM', available: true },
    { time: '14:00', label: '2:00 PM', available: true },
    { time: '15:00', label: '3:00 PM', available: true },
    { time: '16:00', label: '4:00 PM', available: true },
    { time: '17:00', label: '5:00 PM', available: false },
    { time: '18:00', label: '6:00 PM', available: true },
  ];

  const formatDate = (dateString: string) => {
    if (!isHydrated) return '';
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
    };
    return date.toLocaleDateString('en-IN', options);
  };

  if (!isHydrated) {
    return (
      <div className="space-y-4">
        <h2 className="text-2xl font-heading font-bold text-foreground">Select Date & Time</h2>
        <div className="bg-card p-6 rounded-lg border border-border">
          <div className="animate-pulse space-y-4">
            <div className="h-10 bg-muted rounded"></div>
            <div className="grid grid-cols-5 gap-2">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="h-12 bg-muted rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-heading font-bold text-foreground">Select Date & Time</h2>
      <div className="bg-card p-6 rounded-lg border border-border space-y-6">
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-foreground mb-3">
            Preferred Date *
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2">
            {availableDates.map((date) => (
              <button
                key={date}
                type="button"
                onClick={() => onDateChange(date)}
                className={`p-3 rounded-lg border-2 transition-all duration-300 ${
                  selectedDate === date
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-border bg-background text-foreground hover:border-primary/50'
                }`}
              >
                <div className="text-xs font-medium">{formatDate(date).split(' ')[0]}</div>
                <div className="text-lg font-bold">{formatDate(date).split(' ')[1]}</div>
                <div className="text-xs">{formatDate(date).split(' ')[2]}</div>
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-3">
            Preferred Time Slot *
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {timeSlots.map((slot) => (
              <button
                key={slot.time}
                type="button"
                onClick={() => slot.available && onTimeChange(slot.time)}
                disabled={!slot.available}
                className={`px-4 py-3 rounded-lg border-2 transition-all duration-300 ${
                  selectedTime === slot.time
                    ? 'border-primary bg-primary text-primary-foreground'
                    : slot.available
                      ? 'border-border bg-background text-foreground hover:border-primary/50'
                      : 'border-border bg-muted text-muted-foreground cursor-not-allowed opacity-50'
                }`}
              >
                <div className="flex items-center justify-center space-x-1">
                  <Icon name="ClockIcon" size={16} variant="outline" />
                  <span className="text-sm font-medium">{slot.label}</span>
                </div>
              </button>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-2 flex items-center">
            <Icon name="InformationCircleIcon" size={16} variant="outline" className="mr-1" />
            Grayed out slots are fully booked. Please select another time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DateTimeSelector;
