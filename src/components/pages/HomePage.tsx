"use client";

import { useState } from "react";
import { Navigation } from "../layout/Navigation";
import { HeroSection } from "../sections/HeroSection";
import { AboutSection } from "../sections/AboutSection";
import { TreatmentsSection } from "../sections/TreatmentsSection";
import { GallerySection } from "../sections/GallerySection";
import { ContactSection } from "../sections/ContactSection";
import { BookingModal } from "../BookingModal";

export function HomePage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState<string>();

  const handleCTAClick = () => {
    const element = document.getElementById("treatments");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleBookNow = (treatment: string) => {
    setSelectedTreatment(treatment);
    setIsBookingOpen(true);
  };

  const openBookingModal = () => {
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Navigation onBookNow={openBookingModal} />
      <HeroSection onCTAClick={handleCTAClick} />
      <AboutSection />
      <TreatmentsSection onBookNow={handleBookNow} />
      <GallerySection />
      <ContactSection onBookNow={openBookingModal} />
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => {
          setIsBookingOpen(false);
          setSelectedTreatment(undefined);
        }}
        selectedTreatment={selectedTreatment}
      />
    </div>
  );
}
