"use client";

import { useState } from "react";
import { PricingPage } from "@/components/PricingPage";
import { Navigation } from "@/components/Navigation";
import { BookingModal } from "@/components/BookingModal";

export default function Pricing() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
      <Navigation onBookNow={() => setIsBookingOpen(true)} />
      <PricingPage />
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </>
  );
}
