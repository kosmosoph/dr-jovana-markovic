"use client";

import { useState } from "react";
import { PricingPage } from "../../src/app/components/PricingPage";
import { Navigation } from "../../src/app/components/Navigation";
import { BookingModal } from "../../src/app/components/BookingModal";

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
