import React, { useState, useEffect, useRef } from 'react';
import { MapPin, ArrowRight, ChevronRight, ChevronLeft, ShieldCheck, Trophy, Sparkles, Clock, CalendarCheck } from 'lucide-react';

const HERO_SLIDES = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1400&q=85",
    alt: "High-intensity 5v5 football action on artificial turf pitch under floodlights",
    badge: "MATCHDAY FIXTURE",
    tagline: "5v5 & 7v7 Football Turf",
    detail: "FIFA-Grade 50mm Grass • True Ball Bounce",
    schedule: "Tonight's Slot: 8:00 PM – 10:00 PM"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1400&q=85",
    alt: "Batsman playing powerplay stroke in enclosed box cricket arena",
    badge: "POWERPLAY ARENA",
    tagline: "Enclosed Box Cricket",
    detail: "Dual-Speed Pitch • Tension-Tested Netting",
    schedule: "Super Over League: 6:30 PM Daily"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?auto=format&fit=crop&w=1400&q=85",
    alt: "GameOn Turf Arena pitch under brilliant 300+ Lux floodlights",
    badge: "UNDER THE LIGHTS",
    tagline: "300+ Lux Stadium Lighting",
    detail: "Zero-Shadow Anti-Glare LED Towers",
    schedule: "Night Sessions: Dusk till 12:00 AM"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&fit=crop&w=1400&q=85",
    alt: "College sports squad celebrating a hard-fought match victory",
    badge: "SQUAD & DUGOUT",
    tagline: "College Cups & Friendlies",
    detail: "Dugout Café • Sports Drinks • Match Screenings",
    schedule: "Weekend Slots Filling Fast"
  }
];

export default function Hero({ onOpenBooking }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayRef = useRef(null);

  // Automatic cinematic slideshow (crossfade every 4.8s)
  useEffect(() => {
    if (!isPaused) {
      autoPlayRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
      }, 4800);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isPaused]);

  const handlePrevSlide = (e) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleNextSlide = (e) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const scrollToFacilities = () => {
    const el = document.getElementById('facilities');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section" id="home">
      {/* Background ambient lighting */}
      <div className="hero-pitch-glow"></div>

      <div className="container hero-split-container">
        {/* LEFT COLUMN: Editorial Brand & Action Information */}
        <div className="hero-left-column">
          {/* Status Eyebrow */}
          <div className="hero-status-row">
            <span className="hero-status-badge">
              <span className="status-live-dot"></span>
              Open Today • 6:00 AM – 12:00 AM
            </span>
            <span className="hero-status-divider">/</span>
            <span className="hero-location-text">
              <MapPin size={13} className="loc-pin-icon" />
              Sehore, MP
            </span>
          </div>

          {/* Athletic Display Headline */}
          <h1 className="hero-headline">
            WHERE SEHORE <br />
            <span className="hero-headline-accent">PLAYS TO WIN.</span>
          </h1>

          {/* Concise, Grounded Description */}
          <p className="hero-description">
            Sehore’s premier multi-sport arena. FIFA-grade 50mm artificial turf, tension-netted box cricket, and 300+ lux stadium floodlights engineered for high-intensity college rivalries and midnight tournaments.
          </p>

          {/* Editorial Specs Details (Replacing generic pills) */}
          <div className="hero-specs-list">
            <div className="hero-spec-item">
              <span className="spec-index">01</span>
              <div className="spec-info">
                <span className="spec-title">FIFA-Grade 50mm Turf</span>
                <span className="spec-sub">Shock-padded monofilament, zero burn</span>
              </div>
            </div>

            <div className="hero-spec-divider"></div>

            <div className="hero-spec-item">
              <span className="spec-index">02</span>
              <div className="spec-info">
                <span className="spec-title">Enclosed Box Cricket</span>
                <span className="spec-sub">Dual-speed pitch & high-tension net</span>
              </div>
            </div>

            <div className="hero-spec-divider"></div>

            <div className="hero-spec-item">
              <span className="spec-index">03</span>
              <div className="spec-info">
                <span className="spec-title">300+ Lux LED Towers</span>
                <span className="spec-sub">Anti-glare day-like visibility till midnight</span>
              </div>
            </div>
          </div>

          {/* Primary & Secondary CTAs */}
          <div className="hero-actions-row">
            <button
              onClick={() => onOpenBooking('football')}
              className="btn btn-primary btn-lg hero-cta-btn button-fill"
              id="hero-book-slot-btn"
            >
              <CalendarCheck size={18} />
              <span>Book a Slot Now</span>
              <ArrowRight size={17} className="btn-arrow" />
            </button>

            <button
              onClick={scrollToFacilities}
              className="btn btn-secondary btn-lg hero-explore-btn button-slide"
            >
              <span>Explore Facilities</span>
              <ChevronRight size={17} className="btn-arrow" />
            </button>
          </div>

          {/* Athletic Performance Metrics */}
          <div className="hero-metrics-bar">
            <div className="metric-item">
              <span className="metric-value">2+</span>
              <span className="metric-label">Full Pro Turfs</span>
            </div>
            <div className="metric-sep"></div>
            <div className="metric-item">
              <span className="metric-value">300+</span>
              <span className="metric-label">Lux Floodlights</span>
            </div>
            <div className="metric-sep"></div>
            <div className="metric-item">
              <span className="metric-value">18 Hrs</span>
              <span className="metric-label">Daily Playtime</span>
            </div>
            <div className="metric-sep"></div>
            <div className="metric-item">
              <span className="metric-value">4.9★</span>
              <span className="metric-label">Squad Rating</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Automatic Cinematic Sports Slideshow */}
        <div
          className="hero-right-column"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="hero-slideshow-frame">
            {/* Slide Images */}
            {HERO_SLIDES.map((slide, idx) => {
              const isActive = idx === currentSlide;
              return (
                <div
                  key={slide.id}
                  className={`hero-slide ${isActive ? 'is-active' : ''}`}
                  aria-hidden={!isActive}
                >
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="hero-slide-img"
                    loading={idx === 0 ? "eager" : "lazy"}
                    onError={(event) => {
                      event.currentTarget.onerror = null;
                      event.currentTarget.src = HERO_SLIDES[0].image;
                    }}
                  />
                  <div className="hero-slide-overlay"></div>
                </div>
              );
            })}

            {/* Floating Live Matchday Card (Subtle, professional) */}
            <div className="hero-floating-fixture">
              <div className="fixture-badge-row">
                <span className="fixture-badge">{HERO_SLIDES[currentSlide].badge}</span>
                <span className="fixture-live-indicator">
                  <span className="pulse-dot"></span>
                  SLOTS AVAILABLE
                </span>
              </div>
              <h4 className="fixture-title">{HERO_SLIDES[currentSlide].tagline}</h4>
              <p className="fixture-meta">{HERO_SLIDES[currentSlide].detail}</p>
              <div className="fixture-schedule-row">
                <Clock size={13} className="fixture-clock-icon" />
                <span>{HERO_SLIDES[currentSlide].schedule}</span>
              </div>
            </div>

            {/* Slideshow Progress Bar & Controls */}
            <div className="hero-slideshow-nav">
              <div className="slide-indicators">
                {HERO_SLIDES.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`slide-indicator-bar ${index === currentSlide ? 'active' : ''}`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <div className="slide-nav-arrows">
                <button
                  onClick={handlePrevSlide}
                  className="slide-arrow-btn button-rotate"
                  aria-label="Previous sports photo"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={handleNextSlide}
                  className="slide-arrow-btn button-rotate"
                  aria-label="Next sports photo"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

