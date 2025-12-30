import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import HeroSection from "./components/HeroSection";
import CompanyLegacy from "./components/CompanyLegacy";
import TeamExcellence from "./components/TeamExcellence";
import FacilityShowcase from "./components/FacilityShowcase";
import CertificationsPartnerships from "./components/CertificationsPartnerships";
import CTASection from "./components/CTASection";

export const metadata: Metadata = {
  title: "About Us - Shree ram automobiles",
  description:
    "Discover Shree ram automobiles's journey from traditional auto repair to a ₹102 crore automotive ecosystem with 350+ professionals. Explore our state-of-the-art facility in Sector-85 Noida, meet our expert team, and learn about our industry certifications and strategic partnerships.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <HeroSection />
        <CompanyLegacy />
        <TeamExcellence />
        <FacilityShowcase />
        <CertificationsPartnerships />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
