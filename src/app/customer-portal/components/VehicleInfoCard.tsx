import React from "react";
import AppImage from "@/components/ui/AppImage";
import Icon from "@/components/ui/AppIcon";

interface VehicleInfo {
  id: string;
  make: string;
  model: string;
  year: number;
  registrationNumber: string;
  currentMileage: number;
  lastServiceDate: string;
  nextServiceDue: string;
  image: string;
  alt: string;
}

interface VehicleInfoCardProps {
  vehicle: VehicleInfo;
}

const VehicleInfoCard = ({ vehicle }: VehicleInfoCardProps) => {
  return (
    <div className="bg-card rounded-lg shadow-md border border-border overflow-hidden">
      <div className="relative h-48 bg-muted">
        <AppImage
          src={vehicle.image}
          alt={vehicle.alt}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
          Active
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-heading font-bold text-foreground mb-1">
          {vehicle.year} {vehicle.make} {vehicle.model}
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          {vehicle.registrationNumber}
        </p>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center gap-2">
            <Icon
              name="WrenchScrewdriverIcon"
              size={18}
              variant="outline"
              className="text-primary"
            />
            <div>
              <p className="text-xs text-muted-foreground">Current Mileage</p>
              <p className="text-sm font-semibold text-foreground">
                {vehicle.currentMileage.toLocaleString("en-IN")} km
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Icon
              name="CalendarIcon"
              size={18}
              variant="outline"
              className="text-primary"
            />
            <div>
              <p className="text-xs text-muted-foreground">Last Service</p>
              <p className="text-sm font-semibold text-foreground">
                {vehicle.lastServiceDate}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-muted rounded-lg p-3 mb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon
                name="BellAlertIcon"
                size={18}
                variant="solid"
                className="text-action"
              />
              <span className="text-sm font-medium text-foreground">
                Next Service Due
              </span>
            </div>
            <span className="text-sm font-bold text-action">
              {vehicle.nextServiceDue}
            </span>
          </div>
        </div>

        <button className="w-full px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors duration-300 font-medium">
          Update Vehicle Info
        </button>
      </div>
    </div>
  );
};

export default VehicleInfoCard;
