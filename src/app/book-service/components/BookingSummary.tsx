"use client";

import React, { useState, useEffect } from "react";
import Icon from "@/components/ui/AppIcon";

interface BookingSummaryProps {
  selectedService: string;
  vehicleData: {
    brand: string;
    model: string;
    year: string;
    registrationNumber: string;
    fuelType: string;
  };
  selectedDate: string;
  selectedTime: string;
  contactData: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
}

const BookingSummary = ({
  selectedService,
  vehicleData,
  selectedDate,
  selectedTime,
  contactData,
}: BookingSummaryProps) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsHydrated(true);
  }, []);

  const services: Record<
    string,
    { name: string; price: string; duration: string }
  > = {
    "general-service": {
      name: "General Service",
      price: "₹2,499",
      duration: "2-3 hours",
    },
    "major-service": {
      name: "Major Service",
      price: "₹4,999",
      duration: "4-5 hours",
    },
    "ac-service": { name: "AC Service", price: "₹1,999", duration: "2 hours" },
    "brake-service": {
      name: "Brake Service",
      price: "₹3,499",
      duration: "2-3 hours",
    },
    "engine-diagnostics": {
      name: "Engine Diagnostics",
      price: "₹1,499",
      duration: "1-2 hours",
    },
    "body-work": {
      name: "Body Work & Painting",
      price: "Custom Quote",
      duration: "1-3 days",
    },
  };

  const selectedServiceData = services[selectedService] || {
    name: "",
    price: "",
    duration: "",
  };

  const formatDate = (dateString: string) => {
    if (!isHydrated || !dateString) return "";
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    return date.toLocaleDateString("en-IN", options);
  };

  const formatTime = (timeString: string) => {
    if (!isHydrated || !timeString) return "";
    const [hours] = timeString.split(":");
    const hour = parseInt(hours);
    const period = hour >= 12 ? "PM" : "AM";
    const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
    return `${displayHour}:00 ${period}`;
  };

  if (!isHydrated) {
    return (
      <div className="bg-card p-6 rounded-lg border border-border sticky top-24">
        <div className="animate-pulse space-y-4">
          <div className="h-6 bg-muted rounded w-3/4"></div>
          <div className="space-y-2">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-4 bg-muted rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card p-6 rounded-lg border border-border sticky top-24">
      <h3 className="text-xl font-heading font-bold text-foreground mb-6">
        Booking Summary
      </h3>

      <div className="space-y-6">
        {selectedServiceData.name && (
          <div>
            <div className="flex items-center text-sm text-muted-foreground mb-2">
              <Icon
                name="WrenchScrewdriverIcon"
                size={16}
                variant="outline"
                className="mr-2"
              />
              Service Selected
            </div>
            <p className="text-foreground font-semibold">
              {selectedServiceData.name}
            </p>
            <div className="flex items-center justify-between mt-2 text-sm">
              <span className="text-muted-foreground">
                Duration: {selectedServiceData.duration}
              </span>
              <span className="text-primary font-semibold">
                {selectedServiceData.price}
              </span>
            </div>
          </div>
        )}

        {vehicleData.brand && vehicleData.model && (
          <div>
            <div className="flex items-center text-sm text-muted-foreground mb-2">
              <Icon
                name="TruckIcon"
                size={16}
                variant="outline"
                className="mr-2"
              />
              Vehicle Details
            </div>
            <p className="text-foreground font-semibold">
              {vehicleData.brand} {vehicleData.model} ({vehicleData.year})
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              {vehicleData.registrationNumber} • {vehicleData.fuelType}
            </p>
          </div>
        )}

        {selectedDate && selectedTime && (
          <div>
            <div className="flex items-center text-sm text-muted-foreground mb-2">
              <Icon
                name="CalendarIcon"
                size={16}
                variant="outline"
                className="mr-2"
              />
              Appointment Schedule
            </div>
            <p className="text-foreground font-semibold">
              {formatDate(selectedDate)}
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              {formatTime(selectedTime)}
            </p>
          </div>
        )}

        {contactData.name && (
          <div>
            <div className="flex items-center text-sm text-muted-foreground mb-2">
              <Icon
                name="UserIcon"
                size={16}
                variant="outline"
                className="mr-2"
              />
              Contact Information
            </div>
            <p className="text-foreground font-semibold">{contactData.name}</p>
            <p className="text-sm text-muted-foreground mt-1">
              {contactData.phone}
            </p>
            <p className="text-sm text-muted-foreground">{contactData.email}</p>
          </div>
        )}

        {contactData.address && (
          <div>
            <div className="flex items-center text-sm text-muted-foreground mb-2">
              <Icon
                name="MapPinIcon"
                size={16}
                variant="outline"
                className="mr-2"
              />
              Pickup Location
            </div>
            <p className="text-sm text-foreground">{contactData.address}</p>
          </div>
        )}
      </div>

      <div className="mt-6 pt-6 border-t border-border">
        <div className="bg-muted/50 p-4 rounded-lg space-y-2">
          <div className="flex items-start space-x-2 text-sm">
            <Icon
              name="CheckCircleIcon"
              size={16}
              variant="solid"
              className="text-success mt-0.5"
            />
            <span className="text-muted-foreground">
              Free pickup & drop service
            </span>
          </div>
          <div className="flex items-start space-x-2 text-sm">
            <Icon
              name="CheckCircleIcon"
              size={16}
              variant="solid"
              className="text-success mt-0.5"
            />
            <span className="text-muted-foreground">
              Real-time service tracking
            </span>
          </div>
          <div className="flex items-start space-x-2 text-sm">
            <Icon
              name="CheckCircleIcon"
              size={16}
              variant="solid"
              className="text-success mt-0.5"
            />
            <span className="text-muted-foreground">
              90-day service warranty
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSummary;
