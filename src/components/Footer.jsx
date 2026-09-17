import React from 'react';
import Logo from './Logo';
import { MapPin, Phone, Mail, Clock, ArrowUp, MessageSquare, ShieldCheck } from 'lucide-react';

export default function Footer({ onOpenBooking, onShowToast }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDemoSocial = (platform) => {
    onShowToast(`${platform} Link`, `Opening GameOn Turf Arena official ${platform} handle (Demo)`);
  };

  return (
    <footer className="footer-wrap">
      <div className="container footer-container">
        {/* Main Footer Grid */}
        <div className="footer-grid">
          {/* Brand Col */}
          <div className="footer-col brand-col">
            <Logo size="default" />
            <p className="footer-tagline">Play More. Live the Game.</p>
            <p className="footer-desc">
              Sehore's premier multi-sport turf arena. FIFA-grade artificial football turf, enclosed high-intensity box cricket, 300+ Lux floodlights, and a post-match hydration lounge.
            </p>

            {/* Social Icons */}
            <div className="footer-social-row">
              <button
                type="button"
                onClick={() => handleDemoSocial('Instagram')}
                className="social-icon-btn"
                aria-label="Instagram handle"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </button>
              <button
                type="button"
                onClick={() => handleDemoSocial('WhatsApp')}
                className="social-icon-btn"
                aria-label="WhatsApp channel"
              >
                <MessageSquare size={18} />
              </button>
              <button
                type="button"
                onClick={() => handleDemoSocial('YouTube')}
                className="social-icon-btn"
                aria-label="YouTube highlights channel"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
                  <polygon points="10 15 15 12 10 9 10 15" fill="currentColor"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links-list">
              <li><a href="#home">Home</a></li>
              <li><a href="#facilities">Turf Facilities</a></li>
              <li><a href="#why-us">Why Choose Us</a></li>
              <li><a href="#about">About the Arena</a></li>
              <li><a href="#pricing">Rates & Student Passes</a></li>
              <li><a href="#gallery">Arena Gallery</a></li>
              <li><a href="#events">Tournaments & Cups</a></li>
              <li><a href="#reviews">Player Reviews</a></li>
              <li><a href="#faq">FAQs</a></li>
            </ul>
          </div>

          {/* Facilities */}
          <div className="footer-col">
            <h4 className="footer-heading">Our Disciplines</h4>
            <ul className="footer-links-list">
              <li><a href="#facilities">FIFA 5v5 & 7v7 Football</a></li>
              <li><a href="#facilities">Netted Box Cricket Arena</a></li>
              <li><a href="#facilities">300+ Lux Floodlight Games</a></li>
              <li><a href="#facilities">The Dugout Café & Lounge</a></li>
              <li><a href="#events">Weekend Knockout Leagues</a></li>
              <li><a href="#pricing">College Student Happy Hours</a></li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="footer-col">
            <h4 className="footer-heading">Visit & Connect</h4>
            <ul className="footer-contact-list">
              <li>
                <MapPin size={16} className="footer-contact-icon" />
                <span>Plot 14, Sports Complex Rd, Near Polytechnic Ground, Sehore, MP 466001</span>
              </li>
              <li>
                <Phone size={16} className="footer-contact-icon" />
                <span>+91 98260 12345 (Booking Desk)</span>
              </li>
              <li>
                <Mail size={16} className="footer-contact-icon" />
                <span>play@gameonturf.demo</span>
              </li>
              <li>
                <Clock size={16} className="footer-contact-icon" />
                <span>Open Daily: 6:00 AM – 12:00 Midnight</span>
              </li>
            </ul>

            <div className="footer-cta-box">
              <button
                type="button"
                onClick={() => onOpenBooking()}
                className="btn btn-primary btn-sm btn-full button-fill"
              >
                <span>Book Slot Online</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="footer-bottom-strip">
          <div className="footer-bottom-left">
            <p className="copyright-text">
              © {new Date().getFullYear()} GameOn Turf Arena. Fictional demo created for portfolio presentation.
            </p>
            <span className="demo-pill-badge">
              <ShieldCheck size={13} />
              Frontend Client Demonstration Showcase
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="scroll-top-btn"
            aria-label="Scroll to top of page"
          >
            <ArrowUp size={16} />
            <span>Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
