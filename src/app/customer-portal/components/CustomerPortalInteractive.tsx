'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';
import ServiceHistoryCard from './ServiceHistoryCard';
import MaintenanceScheduleCard from './MaintenanceScheduleCard';
import LiveTrackingCard from './LiveTrackingCard';
import LoyaltyProgramCard from './LoyaltyProgramCard';
import VehicleInfoCard from './VehicleInfoCard';

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

interface TrackingStep {
  id: string;
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'pending';
  timestamp?: string;
  technician?: string;
}

interface LoyaltyReward {
  id: string;
  title: string;
  description: string;
  pointsRequired: number;
  icon: string;
  available: boolean;
}

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

const CustomerPortalInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsHydrated(true);
  }, []);

  const vehicleInfo: VehicleInfo = {
    id: 'v1',
    make: 'Honda',
    model: 'City',
    year: 2021,
    registrationNumber: 'DL 01 AB 1234',
    currentMileage: 45000,
    lastServiceDate: '15/11/2024',
    nextServiceDue: '15/02/2025',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_113570ba4-1765454154699.png',
    alt: 'Silver Honda City sedan parked in modern showroom with bright lighting',
  };

  const serviceHistory: ServiceRecord[] = [
    {
      id: 's1',
      date: '15/11/2024',
      serviceType: 'Comprehensive Service Package',
      vehicleModel: '2021 Honda City',
      mileage: 45000,
      cost: 8500,
      status: 'completed',
      technician: 'Rajesh Kumar',
      description:
        'Complete engine oil change, air filter replacement, brake pad inspection, tire rotation, and 50-point vehicle health check. All fluids topped up and battery tested.',
      images: [
        {
          url: 'https://img.rocket.new/generatedImages/rocket_gen_img_1e960a229-1766476774892.png',
          alt: 'Mechanic in blue uniform inspecting car engine with diagnostic tools in well-lit workshop',
        },
        {
          url: 'https://images.unsplash.com/photo-1681151373287-7285be831761',
          alt: 'Close-up of hands changing engine oil filter with wrench in automotive service bay',
        },
        {
          url: 'https://img.rocket.new/generatedImages/rocket_gen_img_139d342fa-1766519694657.png',
          alt: 'Technician examining brake pads and rotors on lifted vehicle in professional garage',
        },
      ],

      nextServiceDue: '15/02/2025',
    },
    {
      id: 's2',
      date: '20/08/2024',
      serviceType: 'AC System Service',
      vehicleModel: '2021 Honda City',
      mileage: 42000,
      cost: 4200,
      status: 'completed',
      technician: 'Amit Sharma',
      description:
        'AC gas refill, condenser cleaning, blower motor inspection, and cooling performance test. System running at optimal efficiency.',
      images: [
        {
          url: 'https://img.rocket.new/generatedImages/rocket_gen_img_1e7ba8438-1765268044595.png',
          alt: 'Automotive technician checking AC system with pressure gauge in modern service center',
        },
      ],

      nextServiceDue: '20/08/2025',
    },
    {
      id: 's3',
      date: '10/05/2024',
      serviceType: 'Brake System Overhaul',
      vehicleModel: '2021 Honda City',
      mileage: 38000,
      cost: 12500,
      status: 'completed',
      technician: 'Vikram Singh',
      description:
        'Complete brake pad replacement (front and rear), brake fluid flush, rotor resurfacing, and brake line inspection. Enhanced braking performance achieved.',
      images: [
        {
          url: 'https://img.rocket.new/generatedImages/rocket_gen_img_17347ad8c-1764678764086.png',
          alt: 'Mechanic installing new brake pads on vehicle wheel assembly in professional workshop',
        },
        {
          url: 'https://img.rocket.new/generatedImages/rocket_gen_img_17347ad8c-1764678764086.png',
          alt: 'Technician inspecting brake rotors and calipers with measurement tools',
        },
      ],

      nextServiceDue: '10/05/2025',
    },
  ];

  const maintenanceSchedule: MaintenanceItem[] = [
    {
      id: 'm1',
      service: 'Engine Oil Change',
      dueDate: '15/02/2025',
      dueMileage: 50000,
      currentMileage: 45000,
      priority: 'medium',
      estimatedCost: 3500,
      description:
        'Synthetic engine oil replacement with premium oil filter for optimal engine performance',
    },
    {
      id: 'm2',
      service: 'Tire Replacement',
      dueDate: '01/03/2025',
      dueMileage: 48000,
      currentMileage: 45000,
      priority: 'high',
      estimatedCost: 18000,
      description:
        'All four tires showing wear indicators. Replacement recommended for safety and performance',
    },
    {
      id: 'm3',
      service: 'Battery Health Check',
      dueDate: '20/03/2025',
      dueMileage: 52000,
      currentMileage: 45000,
      priority: 'low',
      estimatedCost: 1500,
      description:
        'Comprehensive battery testing and terminal cleaning to ensure reliable starting',
    },
  ];

  const trackingSteps: TrackingStep[] = [
    {
      id: 't1',
      title: 'Vehicle Check-in',
      description: 'Vehicle received and initial inspection completed',
      status: 'completed',
      timestamp: '29/12/2024 09:15 AM',
      technician: 'Rajesh Kumar',
    },
    {
      id: 't2',
      title: 'Diagnostic Scan',
      description: 'Computer diagnostic scan in progress',
      status: 'completed',
      timestamp: '29/12/2024 09:45 AM',
      technician: 'Rajesh Kumar',
    },
    {
      id: 't3',
      title: 'Parts Procurement',
      description: 'Required parts being arranged from inventory',
      status: 'in-progress',
      timestamp: '29/12/2024 10:30 AM',
      technician: 'Amit Sharma',
    },
    {
      id: 't4',
      title: 'Service Execution',
      description: 'Main service work to be performed',
      status: 'pending',
    },
    {
      id: 't5',
      title: 'Quality Check',
      description: 'Final inspection and quality verification',
      status: 'pending',
    },
    {
      id: 't6',
      title: 'Ready for Pickup',
      description: 'Vehicle cleaned and ready for customer pickup',
      status: 'pending',
    },
  ];

  const loyaltyRewards: LoyaltyReward[] = [
    {
      id: 'r1',
      title: '₹500 Service Discount',
      description: 'Get ₹500 off on your next service booking',
      pointsRequired: 1000,
      icon: 'TicketIcon',
      available: true,
    },
    {
      id: 'r2',
      title: 'Free Car Wash',
      description: 'Complimentary premium car wash service',
      pointsRequired: 500,
      icon: 'SparklesIcon',
      available: true,
    },
    {
      id: 'r3',
      title: 'Priority Service',
      description: 'Skip the queue with priority booking',
      pointsRequired: 2000,
      icon: 'BoltIcon',
      available: false,
    },
    {
      id: 'r4',
      title: 'Free AC Service',
      description: 'Complete AC system check and gas refill',
      pointsRequired: 3000,
      icon: 'GiftIcon',
      available: false,
    },
  ];

  const handleViewDetails = (id: string) => {
    if (!isHydrated) return;
    setSelectedServiceId(id);
    setActiveTab('service-details');
  };

  const handleScheduleService = (id: string) => {
    if (!isHydrated) return;
    console.log('Scheduling service:', id);
  };

  const handleRedeemReward = (id: string) => {
    if (!isHydrated) return;
    console.log('Redeeming reward:', id);
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'HomeIcon' },
    {
      id: 'service-history',
      label: 'Service History',
      icon: 'ClipboardDocumentListIcon',
    },
    {
      id: 'maintenance',
      label: 'Maintenance Schedule',
      icon: 'CalendarDaysIcon',
    },
    { id: 'tracking', label: 'Live Tracking', icon: 'MapPinIcon' },
    { id: 'loyalty', label: 'Loyalty Rewards', icon: 'GiftIcon' },
  ];

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-muted rounded w-1/4"></div>
            <div className="h-64 bg-muted rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-2">
            Customer Portal
          </h1>
          <p className="text-muted-foreground">
            Manage your vehicles, track services, and access exclusive rewards
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeTab === tab.id
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'bg-card text-foreground hover:bg-muted'
                }`}
              >
                <Icon
                  name={tab.icon}
                  size={20}
                  variant={activeTab === tab.id ? 'solid' : 'outline'}
                />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <VehicleInfoCard vehicle={vehicleInfo} />
                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                    Recent Services
                  </h2>
                  <div className="space-y-4">
                    {serviceHistory.slice(0, 2).map((service) => (
                      <ServiceHistoryCard
                        key={service.id}
                        service={service}
                        onViewDetails={handleViewDetails}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <LoyaltyProgramCard
                  currentPoints={1250}
                  tier="Silver"
                  nextTierPoints={2500}
                  rewards={loyaltyRewards}
                  onRedeemReward={handleRedeemReward}
                />
              </div>
            </div>
          )}

          {activeTab === 'service-history' && (
            <div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                Complete Service History
              </h2>
              <div className="space-y-4">
                {serviceHistory.map((service) => (
                  <ServiceHistoryCard
                    key={service.id}
                    service={service}
                    onViewDetails={handleViewDetails}
                  />
                ))}
              </div>
            </div>
          )}

          {activeTab === 'maintenance' && (
            <div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                Upcoming Maintenance Schedule
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {maintenanceSchedule.map((item) => (
                  <MaintenanceScheduleCard
                    key={item.id}
                    item={item}
                    onScheduleService={handleScheduleService}
                  />
                ))}
              </div>
            </div>
          )}

          {activeTab === 'tracking' && (
            <div className="max-w-3xl mx-auto">
              <LiveTrackingCard
                serviceId="SRV-2024-1234"
                vehicleModel="2021 Honda City"
                steps={trackingSteps}
                estimatedCompletion="29/12/2024 02:00 PM"
              />
            </div>
          )}

          {activeTab === 'loyalty' && (
            <div className="max-w-2xl mx-auto">
              <LoyaltyProgramCard
                currentPoints={1250}
                tier="Silver"
                nextTierPoints={2500}
                rewards={loyaltyRewards}
                onRedeemReward={handleRedeemReward}
              />

              <div className="mt-8 bg-card rounded-lg shadow-sm border border-border p-6">
                <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                  How to Earn Points
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Icon
                      name="CheckCircleIcon"
                      size={20}
                      variant="solid"
                      className="text-green-500 mt-1"
                    />
                    <div>
                      <p className="font-semibold text-foreground">Service Bookings</p>
                      <p className="text-sm text-muted-foreground">
                        Earn 10 points for every ₹100 spent
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon
                      name="CheckCircleIcon"
                      size={20}
                      variant="solid"
                      className="text-green-500 mt-1"
                    />
                    <div>
                      <p className="font-semibold text-foreground">Referrals</p>
                      <p className="text-sm text-muted-foreground">
                        Get 500 bonus points for each successful referral
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon
                      name="CheckCircleIcon"
                      size={20}
                      variant="solid"
                      className="text-green-500 mt-1"
                    />
                    <div>
                      <p className="font-semibold text-foreground">Reviews</p>
                      <p className="text-sm text-muted-foreground">
                        Earn 100 points for verified service reviews
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon
                      name="CheckCircleIcon"
                      size={20}
                      variant="solid"
                      className="text-green-500 mt-1"
                    />
                    <div>
                      <p className="font-semibold text-foreground">Birthday Bonus</p>
                      <p className="text-sm text-muted-foreground">
                        Receive 200 points on your birthday month
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomerPortalInteractive;
