import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Facilities from './components/Facilities';
import WhyChooseUs from './components/WhyChooseUs';
import AboutArena from './components/AboutArena';
import Pricing from './components/Pricing';
import Gallery from './components/Gallery';
import EventsTournaments from './components/EventsTournaments';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import LocationContact from './components/LocationContact';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal/BookingModal';
import Toast from './components/Toast';

export default function App() {
  // Theme state: dark default, saved in localStorage
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('gameon_turf_theme') || 'dark';
  });

  // Booking modal state
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingSport, setBookingSport] = useState(null);
  const [bookingPromo, setBookingPromo] = useState('');

  // Toast notification state
  const [toast, setToast] = useState(null);

  // Sync theme with HTML document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('gameon_turf_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleOpenBooking = (sport = null, promo = '') => {
    setBookingSport(sport);
    setBookingPromo(promo);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  const showToast = (title, message, type = 'info') => {
    setToast({ title, message, type });
  };

  const closeToast = () => {
    setToast(null);
  };

  return (
    <div className="app-layout">
      {/* Sticky Top Navbar */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenBooking={() => handleOpenBooking()}
        onShowToast={showToast}
      />

      <main>
        {/* Cinematic Hero */}
        <Hero onOpenBooking={(sport) => handleOpenBooking(sport)} />

        {/* Facilities Section with Quick Book */}
        <Facilities onQuickBook={(sport) => handleOpenBooking(sport)} />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* About Arena Story & Pillars */}
        <AboutArena onOpenBooking={(sport) => handleOpenBooking(sport)} />

        {/* Pricing Plans & Student Offer */}
        <Pricing onOpenBooking={(sport, promo) => handleOpenBooking(sport, promo)} />

        {/* Gallery with Lightbox & Video Previews */}
        <Gallery onShowToast={showToast} />

        {/* Tournaments, Leagues & Squad Registration */}
        <EventsTournaments onShowToast={showToast} />

        {/* Testimonials & Player Reviews */}
        <Reviews />

        {/* Frequently Asked Questions Accordion */}
        <FAQ onShowToast={showToast} />

        {/* Location, Directions & Contact Desk */}
        <LocationContact onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer
        onOpenBooking={() => handleOpenBooking()}
        onShowToast={showToast}
      />

      {/* Flagship Interactive 4-Step Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialSport={bookingSport}
        initialPromo={bookingPromo}
        onShowToast={showToast}
      />

      {/* Floating Action Feedback Toast */}
      <Toast toast={toast} onClose={closeToast} />
    </div>
  );
}
