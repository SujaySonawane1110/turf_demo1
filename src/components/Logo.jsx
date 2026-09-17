import React from 'react';

export default function Logo({ size = "default", onClick }) {
  return (
    <div className={`brand-logo brand-logo-${size}`} onClick={onClick} role="banner">
      <div className="logo-emblem">
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo-svg">
          {/* Shield background */}
          <rect x="2" y="2" width="36" height="36" rx="10" fill="currentColor" fillOpacity="0.08" stroke="var(--accent-primary)" strokeWidth="1.5" />
          {/* Pitch border */}
          <rect x="8" y="7" width="24" height="26" rx="3" stroke="var(--accent-primary)" strokeWidth="1.8" />
          {/* Pitch center line */}
          <line x1="8" y1="20" x2="32" y2="20" stroke="var(--accent-primary)" strokeWidth="1.4" strokeDasharray="2 1" />
          {/* Center circle */}
          <circle cx="20" cy="20" r="4.5" stroke="var(--accent-primary)" strokeWidth="1.4" />
          {/* Cricket ball / turf dot */}
          <circle cx="20" cy="20" r="2" fill="var(--accent-amber)" />
          {/* Goals */}
          <path d="M14 7V11H26V7" stroke="var(--accent-primary)" strokeWidth="1.2" />
          <path d="M14 33V29H26V33" stroke="var(--accent-primary)" strokeWidth="1.2" />
        </svg>
      </div>
      <div className="logo-text-block">
        <span className="brand-name">
          Game<span className="brand-highlight">On</span>
        </span>
        <span className="brand-sub">TURF ARENA • SEHORE</span>
      </div>
    </div>
  );
}
