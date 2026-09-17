import React from 'react';
import { facilities } from '../data/facilitiesData';
import { Check, CalendarCheck, Clock, ArrowRight, ArrowUpRight } from 'lucide-react';

const FACILITY_IMAGE_FALLBACK = 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=900&q=80';

function handleFacilityImageError(event) {
  event.currentTarget.onerror = null;
  event.currentTarget.src = FACILITY_IMAGE_FALLBACK;
}

export default function Facilities({ onQuickBook }) {
  // Football is dominant (large hero item), cricket is companion, floodlights & cafe form bottom pair
  const footballFacility = facilities.find(f => f.id === 'football') || facilities[0];
  const cricketFacility = facilities.find(f => f.id === 'cricket') || facilities[1];
  const floodlightsFacility = facilities.find(f => f.id === 'floodlights') || facilities[2];
  const cafeFacility = facilities.find(f => f.id === 'cafe') || facilities[3];

  return (
    <section className="section facilities-editorial-section" id="facilities">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Arena Complex</span>
          <h2 className="section-title">Built for Peak Performance</h2>
          <p className="section-desc">
            Four specialized athletic zones engineered for speed, skill, and post-game camaraderie. From shock-padded 50mm football turf to tension-netted box cricket.
          </p>
        </div>

        {/* Asymmetric Editorial Visual Grid */}
        <div className="facilities-asymmetric-grid">
          {/* Row 1, Column 1: Dominant Football Visual (Large Hero) */}
          <div className="facility-mosaic-item facility-mosaic-hero">
            <div className="facility-visual-frame">
              <img
                src={footballFacility.image}
                alt={footballFacility.alt}
                className="facility-visual-img"
                loading="lazy"
                onError={handleFacilityImageError}
              />
              <div className="facility-visual-overlay"></div>
              
              <div className="facility-top-badges">
                <span className="facility-chip-badge chip-accent">{footballFacility.badge}</span>
                <span className="facility-chip-badge chip-dark">
                  <Clock size={12} />
                  {footballFacility.timing}
                </span>
              </div>

              <div className="facility-meta-block">
                <span className="facility-sport-eyebrow">{footballFacility.tagline}</span>
                <h3 className="facility-headline">{footballFacility.name}</h3>
                <p className="facility-synopsis">{footballFacility.description}</p>

                <div className="facility-specs-compact">
                  {footballFacility.specs.slice(0, 3).map((spec, i) => (
                    <div key={i} className="spec-row">
                      <span className="spec-dot">■</span>
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => onQuickBook('football')}
                  className="btn btn-primary facility-action-btn button-expand"
                >
                  <CalendarCheck size={16} />
                  <span>Quick Book Football</span>
                  <ArrowRight size={16} className="btn-arrow" />
                </button>
              </div>
            </div>
          </div>

          {/* Row 1, Column 2: Enclosed Box Cricket */}
          <div className="facility-mosaic-item facility-mosaic-cricket">
            <div className="facility-visual-frame">
              <img
                src={cricketFacility.image}
                alt={cricketFacility.alt}
                className="facility-visual-img"
                loading="lazy"
                onError={handleFacilityImageError}
              />
              <div className="facility-visual-overlay"></div>

              <div className="facility-top-badges">
                <span className="facility-chip-badge chip-amber">{cricketFacility.badge}</span>
                <span className="facility-chip-badge chip-dark">
                  <Clock size={12} />
                  {cricketFacility.timing}
                </span>
              </div>

              <div className="facility-meta-block">
                <span className="facility-sport-eyebrow">{cricketFacility.tagline}</span>
                <h3 className="facility-headline">{cricketFacility.name}</h3>
                <p className="facility-synopsis">{cricketFacility.description}</p>

                <div className="facility-specs-compact">
                  {cricketFacility.specs.slice(0, 2).map((spec, i) => (
                    <div key={i} className="spec-row">
                      <span className="spec-dot spec-dot-amber">■</span>
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => onQuickBook('cricket')}
                  className="btn btn-secondary facility-action-btn button-expand"
                >
                  <CalendarCheck size={16} />
                  <span>Quick Book Cricket</span>
                  <ArrowRight size={16} className="btn-arrow" />
                </button>
              </div>
            </div>
          </div>

          {/* Row 2, Column 1: 300+ Lux Floodlights */}
          <div className="facility-mosaic-item facility-mosaic-floodlights">
            <div className="facility-visual-frame">
              <img
                src={floodlightsFacility.image}
                alt={floodlightsFacility.alt}
                className="facility-visual-img"
                loading="lazy"
                onError={handleFacilityImageError}
              />
              <div className="facility-visual-overlay"></div>

              <div className="facility-top-badges">
                <span className="facility-chip-badge chip-dark">{floodlightsFacility.badge}</span>
                <span className="facility-chip-badge chip-dark">
                  <Clock size={12} />
                  {floodlightsFacility.timing}
                </span>
              </div>

              <div className="facility-meta-block">
                <span className="facility-sport-eyebrow">{floodlightsFacility.tagline}</span>
                <h3 className="facility-headline">{floodlightsFacility.name}</h3>
                <p className="facility-synopsis">{floodlightsFacility.description}</p>

                <button
                  onClick={() => onQuickBook('football')}
                  className="btn btn-secondary btn-sm facility-action-btn button-expand"
                >
                  <span>Book Night Slot</span>
                  <ArrowRight size={15} className="btn-arrow" />
                </button>
              </div>
            </div>
          </div>

          {/* Row 2, Column 2: Dugout Café & Lounge */}
          <div className="facility-mosaic-item facility-mosaic-cafe">
            <div className="facility-visual-frame">
              <img
                src={cafeFacility.image}
                alt={cafeFacility.alt}
                className="facility-visual-img"
                loading="lazy"
                onError={handleFacilityImageError}
              />
              <div className="facility-visual-overlay"></div>

              <div className="facility-top-badges">
                <span className="facility-chip-badge chip-dark">{cafeFacility.badge}</span>
                <span className="facility-chip-badge chip-dark">
                  <Clock size={12} />
                  {cafeFacility.timing}
                </span>
              </div>

              <div className="facility-meta-block">
                <span className="facility-sport-eyebrow">{cafeFacility.tagline}</span>
                <h3 className="facility-headline">{cafeFacility.name}</h3>
                <p className="facility-synopsis">{cafeFacility.description}</p>

                <div className="facility-cafe-amenities">
                  <span>Fresh Juices</span> • <span>Live Premier League / IPL</span> • <span>Fast Wi-Fi</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

