import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Sun, Moon, Menu, X, CalendarCheck, PhoneCall, ChevronRight, ArrowRight, MapPin, Clock } from 'lucide-react';
import Logo from './Logo';

export default function Navbar({ theme, toggleTheme, onOpenBooking, onShowToast }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const closeBtnRef = useRef(null);
  const hamburgerBtnRef = useRef(null);

  // Scroll detection for navbar styling & active section highlight
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['home', 'about', 'facilities', 'why-us', 'pricing', 'gallery', 'events', 'reviews', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard accessibility: ESC key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
        hamburgerBtnRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Robust scroll locking that preserves the exact viewport scroll position
  useEffect(() => {
    if (mobileMenuOpen) {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      document.body.dataset.menuScrollY = scrollY.toString();
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';

      // Focus close button on open for keyboard users
      setTimeout(() => {
        closeBtnRef.current?.focus();
      }, 50);
    } else {
      const scrollY = document.body.dataset.menuScrollY;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      if (scrollY !== undefined && scrollY !== '') {
        window.scrollTo(0, parseInt(scrollY, 10));
        delete document.body.dataset.menuScrollY;
      }
    }

    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Navigation items matching user requirements
  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Events', href: '#events' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href) => {
    setMobileMenuOpen(false);
    setTimeout(() => {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }, 60);
  };

  const handleOpenBookingModal = () => {
    setMobileMenuOpen(false);
    setTimeout(() => {
      onOpenBooking();
    }, 60);
  };

  return (
    <>
      <header className={`navbar-header ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container navbar-container">
          <a
            href="#home"
            className="nav-logo-link"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#home');
            }}
            aria-label="GameOn Turf Arena Home"
          >
            <Logo />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            <ul className="nav-links-list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop Controls: Theme Switcher & Book Now CTA */}
          <div className="nav-actions">
            <button
              onClick={toggleTheme}
              className="theme-toggle-btn button-rotate"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                <Sun size={19} className="theme-icon sun-icon" />
              ) : (
                <Moon size={19} className="theme-icon moon-icon" />
              )}
            </button>

            <button
              onClick={() => onOpenBooking()}
              className="btn btn-primary btn-sm nav-book-btn button-fill"
              id="nav-book-now-btn"
            >
              <CalendarCheck size={15} />
              <span>Book a Slot</span>
              <ArrowRight size={14} className="btn-arrow" />
            </button>

            {/* Mobile Hamburger Toggle Button */}
            <button
              ref={hamburgerBtnRef}
              onClick={() => setMobileMenuOpen(true)}
              className="mobile-hamburger-btn button-rotate"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-panel"
              aria-label="Open navigation menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Opaque Mobile Navigation Overlay Portaled Directly to document.body */}
      {typeof document !== 'undefined' &&
        createPortal(
          <div
            id="mobile-nav-overlay"
            className={`mobile-nav-overlay ${mobileMenuOpen ? 'open' : ''}`}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
            style={{ display: mobileMenuOpen ? 'flex' : 'none' }}
          >
            {/* Opaque Full-Height Navigation Panel */}
            <div className="mobile-nav-panel" id="mobile-nav-panel">
              {/* Sticky Top Bar */}
              <div className="mobile-nav-header">
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick('#home');
                  }}
                  className="mobile-nav-brand-link"
                >
                  <Logo size="small" />
                </a>

                <div className="mobile-header-actions">
                  <button
                    onClick={toggleTheme}
                    className="theme-toggle-btn mobile-theme-quick-btn button-rotate"
                    aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                    title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                  >
                    {theme === 'dark' ? (
                      <Sun size={18} className="theme-icon sun-icon" />
                    ) : (
                      <Moon size={18} className="theme-icon moon-icon" />
                    )}
                  </button>

                  <button
                    ref={closeBtnRef}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      hamburgerBtnRef.current?.focus();
                    }}
                    className="mobile-close-btn button-rotate"
                    aria-label="Close navigation menu"
                  >
                    <X size={22} />
                  </button>
                </div>
              </div>

              {/* Scrollable Navigation Body */}
              <div className="mobile-nav-body">
                {/* Navigation Links Group */}
                <nav className="mobile-nav-menu" aria-label="Mobile Menu Links">
                  <ul className="mobile-nav-links-list">
                    {navLinks.map((link) => {
                      const isActive = activeSection === link.href.substring(1);
                      return (
                        <li key={link.href}>
                          <a
                            href={link.href}
                            className={`mobile-menu-item ${isActive ? 'active' : ''}`}
                            onClick={(e) => {
                              e.preventDefault();
                              handleLinkClick(link.href);
                            }}
                          >
                            <span className="mobile-item-label">{link.label}</span>
                            <ChevronRight size={18} className="mobile-item-arrow" />
                          </a>
                        </li>
                      );
                    })}

                    <li>
                      <button
                        type="button"
                        className="mobile-menu-book-item"
                        onClick={handleOpenBookingModal}
                      >
                        <span className="mobile-item-label">Book Now</span>
                        <ChevronRight size={18} className="mobile-item-arrow" />
                      </button>
                    </li>
                  </ul>
                </nav>

                {/* Prominent Book Now & Actions */}
                <div className="mobile-nav-footer-block">
                  <button
                    type="button"
                    onClick={handleOpenBookingModal}
                    className="btn btn-primary btn-full mobile-book-btn button-fill"
                    id="mobile-menu-book-now"
                  >
                    <CalendarCheck size={19} />
                    <span>Book a Slot Now</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onShowToast('Connecting Call', 'Calling GameOn Turf Arena desk: +91 98260 12345 (Demo)');
                    }}
                    className="btn btn-secondary btn-full mobile-call-btn button-slide"
                  >
                    <PhoneCall size={17} />
                    <span>Call Arena Desk</span>
                  </button>

                  {/* Arena Info Chip */}
                  <div className="mobile-arena-info-card">
                    <div className="info-chip-row">
                      <MapPin size={14} className="info-chip-icon" />
                      <span>Plot 14, Sports Complex Rd, Sehore</span>
                    </div>
                    <div className="info-chip-row">
                      <Clock size={14} className="info-chip-icon" />
                      <span>Open Daily: 6:00 AM – 12:00 Midnight</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
