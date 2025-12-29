import type { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import BookServiceInteractive from "./components/BookServiceInteractive";

export const metadata: Metadata = {
  title: "Book Service - Bose Workshop",
  description:
    "Schedule your vehicle service appointment with Bose Workshop. Choose from our comprehensive service packages, select your preferred date and time, and enjoy hassle-free automotive care with real-time tracking and transparent pricing.",
};

export default function BookServicePage() {
  return (
    <>
      <Header />
      <BookServiceInteractive />
      <Footer />
    </>
  );
}
