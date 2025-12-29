"use client";

import React from "react";
import Icon from "@/components/ui/AppIcon";

interface TrackingStep {
  id: string;
  title: string;
  description: string;
  status: "completed" | "in-progress" | "pending";
  timestamp?: string;
  technician?: string;
}

interface LiveTrackingCardProps {
  serviceId: string;
  vehicleModel: string;
  steps: TrackingStep[];
  estimatedCompletion: string;
}

const LiveTrackingCard = ({
  serviceId,
  vehicleModel,
  steps,
  estimatedCompletion,
}: LiveTrackingCardProps) => {
  const completedSteps = steps.filter(
    (step) => step.status === "completed"
  ).length;
  const progressPercentage = (completedSteps / steps.length) * 100;

  return (
    <div className="bg-card rounded-lg shadow-md border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-heading font-bold text-foreground mb-1">
            Live Service Tracking
          </h3>
          <p className="text-sm text-muted-foreground">{vehicleModel}</p>
          <p className="text-xs text-muted-foreground">
            Service ID: {serviceId}
          </p>
        </div>
        <div className="text-right">
          <p className="text-xs text-muted-foreground mb-1">Est. Completion</p>
          <p className="text-sm font-semibold text-foreground">
            {estimatedCompletion}
          </p>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-muted-foreground">Overall Progress</span>
          <span className="font-semibold text-foreground">
            {completedSteps} of {steps.length} steps completed
          </span>
        </div>
        <div className="w-full bg-muted rounded-full h-3">
          <div
            className="bg-primary h-3 rounded-full transition-all duration-500"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={step.id} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step.status === "completed"
                    ? "bg-green-500 text-white"
                    : step.status === "in-progress"
                      ? "bg-blue-500 text-white animate-pulse"
                      : "bg-muted text-muted-foreground"
                }`}
              >
                {step.status === "completed" ? (
                  <Icon name="CheckIcon" size={20} variant="solid" />
                ) : step.status === "in-progress" ? (
                  <Icon
                    name="WrenchScrewdriverIcon"
                    size={20}
                    variant="solid"
                  />
                ) : (
                  <Icon name="ClockIcon" size={20} variant="outline" />
                )}
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`w-0.5 h-12 ${
                    step.status === "completed" ? "bg-green-500" : "bg-muted"
                  }`}
                />
              )}
            </div>
            <div className="flex-1 pb-4">
              <h4 className="font-semibold text-foreground mb-1">
                {step.title}
              </h4>
              <p className="text-sm text-muted-foreground mb-2">
                {step.description}
              </p>
              {step.timestamp && (
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <Icon name="ClockIcon" size={12} variant="outline" />
                  {step.timestamp}
                </p>
              )}
              {step.technician && (
                <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                  <Icon name="UserIcon" size={12} variant="outline" />
                  {step.technician}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-border">
        <button className="w-full px-4 py-3 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors duration-300 font-medium flex items-center justify-center gap-2">
          <Icon name="PhoneIcon" size={18} variant="solid" />
          Contact Technician
        </button>
      </div>
    </div>
  );
};

export default LiveTrackingCard;
