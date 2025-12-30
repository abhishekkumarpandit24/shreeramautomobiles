import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import HeroSection from "./components/HeroSection";
import BusinessMetrics from "./components/BusinessMetrics";
import ServiceFinder from "./components/ServiceFinder";
import WhyChooseUs from "./components/WhyChooseUs";
import TestimonialCarousel from "./components/TestimonialCarousel";
import QuickBooking from "./components/QuickBooking";
import CTASection from "./components/CTASection";

export const metadata: Metadata = {
  title: "Homepage - Shree ram automobiles",
  description:
    "Noida's Premier Automotive Destination. ₹102 crore business built on trust with 350+ automotive experts delivering world-class service. Book your service today.",
};

export default function Homepage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-16">
        <HeroSection />
        <BusinessMetrics />
        <ServiceFinder />
        <WhyChooseUs />
        <TestimonialCarousel />
        <QuickBooking />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
