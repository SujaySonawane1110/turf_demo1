import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, Navigation, Compass, ExternalLink, ShieldCheck } from 'lucide-react';

export default function LocationContact({ onShowToast }) {
  const handleCall = () => {
    onShowToast('Simulating Phone Call', 'Dialing GameOn Arena Desk: +91 98260 12345 (Demo)');
  };

  const handleWhatsApp = () => {
    onShowToast('Simulating WhatsApp Chat', 'Connecting to GameOn Arena WhatsApp (+91 98260 12345)...');
  };

  const handleDirections = () => {
    onShowToast('Directions Opened', 'Route calculated from your current location to Plot 14, Sports Complex Rd, Sehore.');
  };

  return (
    <section className="section contact-editorial-section" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Arena Location & Desk</span>
          <h2 className="section-title">Visit the Arena in Sehore</h2>
          <p className="section-desc">
            Centrally situated on Sports Complex Road right beside Govt. Polytechnic Ground. 6 minutes from Sehore Railway Station, easily accessible by two-wheeler or college bus.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Details Card */}
          <div className="contact-info-card glass-card">
            <h3 className="contact-card-title">Get in Touch</h3>
            <p className="contact-card-desc">
              Have questions regarding tournament registrations, corporate slot bookings, or equipment? Reach our arena help desk anytime.
            </p>

            <div className="contact-items-list">
              {/* Address */}
              <div className="contact-item-row">
                <div className="contact-icon-circle">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="contact-item-label">Arena Address</span>
                  <p className="contact-item-val">
                    Plot 14, Sports Complex Road,<br />
                    Near Govt. Polytechnic Ground,<br />
                    Sehore, Madhya Pradesh — 466001
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="contact-item-row">
                <div className="contact-icon-circle">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="contact-item-label">Call / Booking Desk</span>
                  <p className="contact-item-val">+91 98260 12345 (Demo)</p>
                  <span className="contact-sub-text">Available 6:00 AM – 11:30 PM</span>
                </div>
              </div>

              {/* Email */}
              <div className="contact-item-row">
                <div className="contact-icon-circle">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="contact-item-label">Email Support</span>
                  <p className="contact-item-val">play@gameonturf.demo</p>
                </div>
              </div>

              {/* Hours */}
              <div className="contact-item-row">
                <div className="contact-icon-circle">
                  <Clock size={20} />
                </div>
                <div>
                  <span className="contact-item-label">Playing Hours</span>
                  <p className="contact-item-val">Monday – Sunday: 6:00 AM – 12:00 Midnight</p>
                  <span className="contact-sub-text">Floodlights on daily from 5:30 PM</span>
                </div>
              </div>
            </div>

            {/* Quick Action CTAs */}
            <div className="contact-ctas-row">
              <button onClick={handleCall} className="btn btn-secondary btn-sm contact-action-btn button-fill">
                <Phone size={16} />
                <span>Call Now</span>
              </button>

              <button onClick={handleWhatsApp} className="btn btn-primary btn-sm contact-action-btn button-expand">
                <MessageSquare size={16} />
                <span>WhatsApp</span>
              </button>

              <button onClick={handleDirections} className="btn btn-secondary btn-sm contact-action-btn button-slide">
                <Navigation size={16} />
                <span>Get Directions</span>
              </button>
            </div>
          </div>

          {/* Interactive Map Visual Card */}
          <div className="map-visual-card glass-card">
            <div className="map-header-bar">
              <div className="map-header-left">
                <Compass size={18} className="compass-icon" />
                <span className="map-title-text">Interactive Arena Navigator</span>
              </div>
              <span className="map-live-tag">
                <ShieldCheck size={14} />
                Ample Parking Available
              </span>
            </div>

            {/* Visual Stylized Map Graphic */}
            <div className="vector-map-viewport">
              <svg viewBox="0 0 600 400" className="vector-map-svg" xmlns="http://www.w3.org/2000/svg">
                {/* Background terrain */}
                <rect width="600" height="400" fill="currentColor" fillOpacity="0.04" />
                
                {/* Roads and Highways */}
                <path d="M 0,220 Q 200,240 400,210 T 600,190" stroke="currentColor" strokeOpacity="0.2" strokeWidth="24" fill="none" />
                <path d="M 0,220 Q 200,240 400,210 T 600,190" stroke="var(--accent-primary)" strokeOpacity="0.4" strokeWidth="2" strokeDasharray="8 6" fill="none" />

                {/* Cross Roads */}
                <path d="M 280,0 L 320,400" stroke="currentColor" strokeOpacity="0.15" strokeWidth="18" fill="none" />
                <path d="M 120,400 L 180,225" stroke="currentColor" strokeOpacity="0.12" strokeWidth="12" fill="none" />
                <path d="M 450,205 L 510,0" stroke="currentColor" strokeOpacity="0.12" strokeWidth="12" fill="none" />

                {/* Landmark 1: Polytechnic Ground */}
                <rect x="50" y="70" width="160" height="110" rx="8" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1.5" />
                <text x="130" y="125" textAnchor="middle" fill="currentColor" fillOpacity="0.7" fontSize="13" fontFamily="var(--font-heading)" fontWeight="600">Govt. Polytechnic</text>
                <text x="130" y="145" textAnchor="middle" fill="currentColor" fillOpacity="0.5" fontSize="11" fontFamily="var(--font-body)">Sports Ground</text>

                {/* Landmark 2: Sehore Bus Stand */}
                <rect x="420" y="270" width="140" height="85" rx="8" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1.5" />
                <text x="490" y="315" textAnchor="middle" fill="currentColor" fillOpacity="0.7" fontSize="13" fontFamily="var(--font-heading)" fontWeight="600">Sehore Station / Bus</text>
                <text x="490" y="333" textAnchor="middle" fill="currentColor" fillOpacity="0.5" fontSize="11" fontFamily="var(--font-body)">6 Mins Drive</text>

                {/* Main Arena Complex Plot */}
                <rect x="295" y="60" width="220" height="135" rx="14" fill="rgba(24, 201, 139, 0.12)" stroke="var(--accent-primary)" strokeWidth="2" />
                
                {/* Football Pitch Graphic */}
                <rect x="315" y="80" width="80" height="50" rx="4" fill="none" stroke="var(--accent-primary)" strokeWidth="1.5" />
                <line x1="355" y1="80" x2="355" y2="130" stroke="var(--accent-primary)" strokeWidth="1" />
                <circle cx="355" cy="105" r="8" fill="none" stroke="var(--accent-primary)" strokeWidth="1" />

                {/* Box Cricket Pitch Graphic */}
                <rect x="415" y="80" width="80" height="50" rx="4" fill="none" stroke="var(--accent-amber)" strokeWidth="1.5" />
                <rect x="440" y="90" width="30" height="30" rx="2" fill="none" stroke="var(--accent-amber)" strokeWidth="1" strokeDasharray="3 2" />

                {/* Dugout Café */}
                <rect x="345" y="145" width="120" height="35" rx="4" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1" />
                <text x="405" y="167" textAnchor="middle" fill="var(--text-primary)" fontSize="11" fontFamily="var(--font-heading)" fontWeight="600">The Dugout Café & Lounge</text>

                {/* Arena Pin Marker */}
                <g transform="translate(405, 55)">
                  <circle cx="0" cy="0" r="16" fill="var(--accent-primary)" fillOpacity="0.3" className="map-pulse-circle" />
                  <circle cx="0" cy="0" r="10" fill="var(--accent-primary)" />
                  <circle cx="0" cy="0" r="4" fill="#041c10" />
                </g>

                {/* Road Labels */}
                <text x="210" y="248" fill="currentColor" fillOpacity="0.5" fontSize="10" fontFamily="var(--font-heading)" transform="rotate(3, 210, 248)">SPORTS COMPLEX ROAD</text>
              </svg>
            </div>

            <div className="map-footer-strip">
              <div className="map-legend-items">
                <span className="legend-chip turf-chip">■ Football 5v5</span>
                <span className="legend-chip cricket-chip">■ Box Cricket</span>
                <span className="legend-chip cafe-chip">■ Dugout Café</span>
              </div>
              <button onClick={handleDirections} className="btn btn-primary btn-sm button-slide">
                <Navigation size={15} />
                <span>Navigate on Google Maps</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
