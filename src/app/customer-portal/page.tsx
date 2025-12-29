import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import CustomerPortalInteractive from "./components/CustomerPortalInteractive";

export const metadata: Metadata = {
  title: "Customer Portal - Bose Workshop",
  description:
    "Access your service history, track live service progress, manage maintenance schedules, and redeem loyalty rewards. Your complete automotive service management hub.",
};

export default function CustomerPortalPage() {
  return (
    <>
      <Header />
      <CustomerPortalInteractive />
      <Footer />
    </>
  );
}
