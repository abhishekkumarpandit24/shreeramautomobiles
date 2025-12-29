"use client";

import React from "react";
import Icon from "@/components/ui/AppIcon";

interface VehicleDetailsProps {
  vehicleData: {
    brand: string;
    model: string;
    year: string;
    registrationNumber: string;
    fuelType: string;
  };
  onVehicleDataChange: (field: string, value: string) => void;
}

const VehicleDetails = ({
  vehicleData,
  onVehicleDataChange,
}: VehicleDetailsProps) => {
  const brands = [
    "Maruti Suzuki",
    "Hyundai",
    "Tata",
    "Mahindra",
    "Honda",
    "Toyota",
    "Kia",
    "MG",
    "Volkswagen",
    "Skoda",
    "Ford",
    "Renault",
  ];
  const years = Array.from({ length: 25 }, (_, i) =>
    (new Date().getFullYear() - i).toString()
  );
  const fuelTypes = ["Petrol", "Diesel", "CNG", "Electric", "Hybrid"];

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-heading font-bold text-foreground">
        Vehicle Details
      </h2>
      <div className="bg-card p-6 rounded-lg border border-border">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="brand"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Vehicle Brand *
            </label>
            <div className="relative">
              <select
                id="brand"
                value={vehicleData.brand}
                onChange={(e) => onVehicleDataChange("brand", e.target.value)}
                className="w-full px-4 py-3 pr-10 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none"
                required
              >
                <option value="">Select Brand</option>
                {brands.map((brand) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
              </select>
              <Icon
                name="ChevronDownIcon"
                size={20}
                variant="outline"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="model"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Vehicle Model *
            </label>
            <input
              type="text"
              id="model"
              value={vehicleData.model}
              onChange={(e) => onVehicleDataChange("model", e.target.value)}
              placeholder="e.g., Swift, Creta, Nexon"
              className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            />
          </div>

          <div>
            <label
              htmlFor="year"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Manufacturing Year *
            </label>
            <div className="relative">
              <select
                id="year"
                value={vehicleData.year}
                onChange={(e) => onVehicleDataChange("year", e.target.value)}
                className="w-full px-4 py-3 pr-10 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none"
                required
              >
                <option value="">Select Year</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
              <Icon
                name="ChevronDownIcon"
                size={20}
                variant="outline"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="registrationNumber"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Registration Number *
            </label>
            <input
              type="text"
              id="registrationNumber"
              value={vehicleData.registrationNumber}
              onChange={(e) =>
                onVehicleDataChange(
                  "registrationNumber",
                  e.target.value.toUpperCase()
                )
              }
              placeholder="DL01AB1234"
              className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent uppercase"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label
              htmlFor="fuelType"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Fuel Type *
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {fuelTypes.map((fuel) => (
                <button
                  key={fuel}
                  type="button"
                  onClick={() => onVehicleDataChange("fuelType", fuel)}
                  className={`px-4 py-3 rounded-lg border-2 transition-all duration-300 ${
                    vehicleData.fuelType === fuel
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card text-foreground hover:border-primary/50"
                  }`}
                >
                  {fuel}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetails;
