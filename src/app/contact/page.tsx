import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import ContactHero from "./components/ContactHero";
import ContactInfo from "./components/ContactInfo";
import LocationMap from "./components/LocationMap";
import ServiceAreaMap from "./components/ServiceAreaMap";
import ContactFormSection from "./components/ContactFormSection";
import FAQSection from "./components/FAQSection";

export const metadata: Metadata = {
  title: "Contact Us - Shree ram automobiles",
  description:
    "Get in touch with Shree ram automobiles in Noida. Multiple communication channels including phone, email, live chat, and in-person visits. 24/7 emergency service available across NCR.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <ContactHero />
        <ContactInfo />
        <LocationMap />
        <ServiceAreaMap />
        <ContactFormSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
