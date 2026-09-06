import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickInfoBar } from './components/QuickInfoBar';
import { Experience } from './components/Experience';
import { GamesGrid } from './components/GamesGrid';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Gallery } from './components/Gallery';
import { Reviews } from './components/Reviews';
import { LocationSection } from './components/LocationSection';
import { BookingCTA } from './components/BookingCTA';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { BookingModal } from './components/BookingModal';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  const handleOpenBooking = () => {
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-gray-200 selection:bg-blue-600 selection:text-white pb-16 lg:pb-0 font-sans">
      {/* Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      <main id="main-content">
        {/* Hero Section */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* Quick Information Bar */}
        <QuickInfoBar />

        {/* Gaming Experience Section */}
        <Experience onOpenBooking={handleOpenBooking} />

        {/* Featured Games Section */}
        <GamesGrid onOpenBooking={handleOpenBooking} />

        {/* Why Gamers Choose Us */}
        <WhyChooseUs onOpenBooking={handleOpenBooking} />

        {/* Gallery with Lightbox */}
        <Gallery />

        {/* Authentic Customer Reviews */}
        <Reviews />

        {/* Location & Embedded Map */}
        <LocationSection />

        {/* Booking / Session CTA */}
        <BookingCTA onOpenBooking={handleOpenBooking} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Action Bar */}
      <MobileStickyBar onOpenBooking={handleOpenBooking} />

      {/* Session Reservation Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={handleCloseBooking}
      />
    </div>
  );
}
