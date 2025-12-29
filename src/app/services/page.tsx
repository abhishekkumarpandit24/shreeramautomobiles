import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import ServiceHero from "./components/ServiceHero";
import ServicesInteractive from "./components/ServicesInteractive";
import EmergencyServices from "./components/EmergencyServices";
import FleetManagement from "./components/FleetManagement";
import PriceCalculator from "./components/PriceCalculator";
import SpecializedServices from "./components/SpecializedServices";
import ServiceCTA from "./components/ServiceCTA";

export const metadata: Metadata = {
  title: "Services - Bose Workshop",
  description:
    "Comprehensive automotive services including maintenance, repair, diagnostics, bodywork, and customization. 350+ experts delivering excellence with transparent pricing and 24/7 emergency support.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header className="mb-16" />

      <ServiceHero />

      <ServicesInteractive />

      <EmergencyServices />

      <PriceCalculator />

      <FleetManagement />

      <SpecializedServices />

      <ServiceCTA />

      <Footer />
    </main>
  );
}
