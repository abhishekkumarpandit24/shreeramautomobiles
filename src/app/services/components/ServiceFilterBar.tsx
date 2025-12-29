"use client";

import React, { useState, useEffect } from "react";
import Icon from "@/components/ui/AppIcon";

interface ServiceFilterBarProps {
  onFilterChange: (filters: FilterState) => void;
  className?: string;
}

interface FilterState {
  category: string;
  vehicleType: string;
  priceRange: string;
  searchQuery: string;
}

const ServiceFilterBar = ({
  onFilterChange,
  className = "",
}: ServiceFilterBarProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    category: "all",
    vehicleType: "all",
    priceRange: "all",
    searchQuery: "",
  });

  React.useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    if (!isHydrated) return;

    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const categories = [
    { value: "all", label: "All Services" },
    { value: "maintenance", label: "Maintenance" },
    { value: "repair", label: "Repair" },
    { value: "diagnostics", label: "Diagnostics" },
    { value: "bodywork", label: "Bodywork" },
    { value: "customization", label: "Customization" },
  ];

  const vehicleTypes = [
    { value: "all", label: "All Vehicles" },
    { value: "sedan", label: "Sedan" },
    { value: "suv", label: "SUV" },
    { value: "hatchback", label: "Hatchback" },
    { value: "luxury", label: "Luxury" },
    { value: "commercial", label: "Commercial" },
  ];

  const priceRanges = [
    { value: "all", label: "All Prices" },
    { value: "budget", label: "Under ₹5,000" },
    { value: "mid", label: "₹5,000 - ₹15,000" },
    { value: "premium", label: "Above ₹15,000" },
  ];

  if (!isHydrated) {
    return (
      <div
        className={`bg-card shadow-sm border border-border rounded-lg p-6 ${className}`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="h-10 bg-muted rounded animate-pulse"></div>
          <div className="h-10 bg-muted rounded animate-pulse"></div>
          <div className="h-10 bg-muted rounded animate-pulse"></div>
          <div className="h-10 bg-muted rounded animate-pulse"></div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`bg-card shadow-sm border border-border rounded-lg p-6 ${className}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Search */}
        <div className="relative">
          <Icon
            name="MagnifyingGlassIcon"
            size={20}
            variant="outline"
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
          />
          <input
            type="text"
            placeholder="Search services..."
            value={filters.searchQuery}
            onChange={(e) => handleFilterChange("searchQuery", e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Category Filter */}
        <select
          value={filters.category}
          onChange={(e) => handleFilterChange("category", e.target.value)}
          className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
        >
          {categories.map((cat) => (
            <option key={cat.value} value={cat.value}>
              {cat.label}
            </option>
          ))}
        </select>

        {/* Vehicle Type Filter */}
        <select
          value={filters.vehicleType}
          onChange={(e) => handleFilterChange("vehicleType", e.target.value)}
          className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
        >
          {vehicleTypes.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>

        {/* Price Range Filter */}
        <select
          value={filters.priceRange}
          onChange={(e) => handleFilterChange("priceRange", e.target.value)}
          className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
        >
          {priceRanges.map((range) => (
            <option key={range.value} value={range.value}>
              {range.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ServiceFilterBar;
