'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import ServiceSelector from './ServiceSelector';
import VehicleDetails from './VehicleDetails';
import DateTimeSelector from './DateTimeSelector';
import ContactInformation from './ContactInformation';
import BookingSummary from './BookingSummary';

const BookServiceInteractive = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState('');
  const [vehicleData, setVehicleData] = useState({
    brand: '',
    model: '',
    year: '',
    registrationNumber: '',
    fuelType: '',
  });
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    additionalNotes: '',
  });
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const steps = [
    { number: 1, title: 'Select Service', icon: 'WrenchScrewdriverIcon' },
    { number: 2, title: 'Vehicle Details', icon: 'TruckIcon' },
    { number: 3, title: 'Date & Time', icon: 'CalendarIcon' },
    { number: 4, title: 'Contact Info', icon: 'UserIcon' },
  ];

  const handleVehicleDataChange = (field: string, value: string) => {
    setVehicleData((prev) => ({ ...prev, [field]: value }));
  };

  const handleContactDataChange = (field: string, value: string) => {
    setContactData((prev) => ({ ...prev, [field]: value }));
  };

  const canProceedToNextStep = () => {
    switch (currentStep) {
      case 1:
        return selectedService !== '';
      case 2:
        return (
          vehicleData.brand &&
          vehicleData.model &&
          vehicleData.year &&
          vehicleData.registrationNumber &&
          vehicleData.fuelType
        );
      case 3:
        return selectedDate && selectedTime;
      case 4:
        return contactData.name && contactData.email && contactData.phone && contactData.address;
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (canProceedToNextStep() && currentStep < 4) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (canProceedToNextStep()) {
      setShowSuccessModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    setCurrentStep(1);
    setSelectedService('');
    setVehicleData({ brand: '', model: '', year: '', registrationNumber: '', fuelType: '' });
    setSelectedDate('');
    setSelectedTime('');
    setContactData({ name: '', email: '', phone: '', address: '', additionalNotes: '' });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Book Your Service
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Schedule your vehicle service in 4 easy steps. Our experts are ready to serve you with
              premium automotive care.
            </p>
          </div>

          <div className="mb-12">
            <div className="flex items-center justify-between max-w-4xl mx-auto">
              {steps.map((step, index) => (
                <React.Fragment key={step.number}>
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                        currentStep >= step.number
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      <Icon name={step.icon} size={24} variant="outline" />
                    </div>
                    <span
                      className={`mt-2 text-xs md:text-sm font-medium text-center ${
                        currentStep >= step.number ? 'text-primary' : 'text-muted-foreground'
                      }`}
                    >
                      {step.title}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`flex-1 h-1 mx-2 md:mx-4 transition-all duration-300 ${
                        currentStep > step.number ? 'bg-primary' : 'bg-muted'
                      }`}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                {currentStep === 1 && (
                  <ServiceSelector
                    selectedService={selectedService}
                    onServiceSelect={setSelectedService}
                  />
                )}

                {currentStep === 2 && (
                  <VehicleDetails
                    vehicleData={vehicleData}
                    onVehicleDataChange={handleVehicleDataChange}
                  />
                )}

                {currentStep === 3 && (
                  <DateTimeSelector
                    selectedDate={selectedDate}
                    selectedTime={selectedTime}
                    onDateChange={setSelectedDate}
                    onTimeChange={setSelectedTime}
                  />
                )}

                {currentStep === 4 && (
                  <ContactInformation
                    contactData={contactData}
                    onContactDataChange={handleContactDataChange}
                  />
                )}

                <div className="flex items-center justify-between pt-6 border-t border-border">
                  <button
                    type="button"
                    onClick={handlePrevious}
                    disabled={currentStep === 1}
                    className={`px-6 py-3 rounded-lg border-2 transition-all duration-300 flex items-center space-x-2 ${
                      currentStep === 1
                        ? 'border-border bg-muted text-muted-foreground cursor-not-allowed'
                        : 'border-primary text-primary hover:bg-primary hover:text-primary-foreground'
                    }`}
                  >
                    <Icon name="ChevronLeftIcon" size={20} variant="outline" />
                    <span>Previous</span>
                  </button>

                  {currentStep < 4 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      disabled={!canProceedToNextStep()}
                      className={`px-6 py-3 rounded-lg transition-all duration-300 flex items-center space-x-2 ${
                        canProceedToNextStep()
                          ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                          : 'bg-muted text-muted-foreground cursor-not-allowed'
                      }`}
                    >
                      <span>Next Step</span>
                      <Icon name="ChevronRightIcon" size={20} variant="outline" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={!canProceedToNextStep()}
                      className={`px-8 py-3 rounded-lg transition-all duration-300 flex items-center space-x-2 ${
                        canProceedToNextStep()
                          ? 'bg-action text-action-foreground hover:bg-action/90 animate-pulse-scale'
                          : 'bg-muted text-muted-foreground cursor-not-allowed'
                      }`}
                    >
                      <Icon name="CheckCircleIcon" size={20} variant="solid" />
                      <span>Confirm Booking</span>
                    </button>
                  )}
                </div>
              </div>

              <div className="lg:col-span-1">
                <BookingSummary
                  selectedService={selectedService}
                  vehicleData={vehicleData}
                  selectedDate={selectedDate}
                  selectedTime={selectedTime}
                  contactData={contactData}
                />
              </div>
            </div>
          </form>
        </div>
      </div>

      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-card rounded-lg shadow-modal max-w-md w-full p-8 animate-fade-in">
            <div className="text-center">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="CheckCircleIcon" size={40} variant="solid" className="text-success" />
              </div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-2">
                Booking Confirmed!
              </h2>
              <p className="text-muted-foreground mb-6">
                Your service appointment has been successfully scheduled. We&apos;ve sent a
                confirmation email to {contactData.email} with all the details.
              </p>
              <div className="bg-muted/50 p-4 rounded-lg mb-6 text-left">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Booking ID:</span>
                    <span className="font-semibold text-foreground">BW</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Service:</span>
                    <span className="font-semibold text-foreground">
                      {selectedService
                        .split('-')
                        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                        .join(' ')}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Vehicle:</span>
                    <span className="font-semibold text-foreground">
                      {vehicleData.brand} {vehicleData.model}
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={handleCloseModal}
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookServiceInteractive;
