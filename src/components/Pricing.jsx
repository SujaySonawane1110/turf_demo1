import React from 'react';
import { pricingPlans, studentOffer } from '../data/pricingData';
import { Check, CalendarCheck, Tag, ArrowRight, ShieldCheck, Ticket } from 'lucide-react';

export default function Pricing({ onOpenBooking }) {
  return (
    <section className="section pricing-editorial-section" id="pricing">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Hourly Match Rates</span>
          <h2 className="section-title">Transparent Arena Rates</h2>
          <p className="section-desc">
            No hidden maintenance charges or deposit hassles. Regulation match balls, scrimmage bibs, bats, and wickets are always included with your booking.
          </p>
        </div>

        {/* Sports Rate Board (Replacing SaaS cards) */}
        <div className="fixture-rate-board">
          <div className="rate-board-header">
            <div className="rate-col-sport">SPORT & DISCIPLINE</div>
            <div className="rate-col-format">FORMAT & SQUAD</div>
            <div className="rate-col-day">DAYTIME (6AM–5PM)</div>
            <div className="rate-col-night">PRIME & LIGHTS (5PM–12AM)</div>
            <div className="rate-col-inclusions">INCLUDED KIT</div>
            <div className="rate-col-action">RESERVE</div>
          </div>

          <div className="rate-board-rows">
            {pricingPlans.map((plan) => (
              <div className={`rate-board-row ${plan.highlight ? 'is-featured' : ''}`} key={plan.id}>
                {/* Sport & Name */}
                <div className="rate-col-sport">
                  <div className="sport-identity">
                    {plan.highlight && <span className="rate-popular-tag">{plan.badge}</span>}
                    <h3 className="sport-name">{plan.sport}</h3>
                    <span className="sport-field-meta">
                      {plan.sportType === 'football' ? '110 x 70 ft Turf Field' : '95 x 55 ft Enclosed Net'}
                    </span>
                  </div>
                </div>

                {/* Format & Capacity */}
                <div className="rate-col-format">
                  <span className="format-title">{plan.capacity}</span>
                  <span className="format-sub">Complimentary scrimmage bibs</span>
                </div>

                {/* Daytime Rate */}
                <div className="rate-col-day">
                  <div className="rate-price-block">
                    <span className="rate-currency">₹</span>
                    <span className="rate-num">{plan.rates[0].price}</span>
                    <span className="rate-per">/ hr</span>
                  </div>
                  <span className="rate-timing-sub">6:00 AM – 5:00 PM</span>
                </div>

                {/* Prime & Floodlights Rate */}
                <div className="rate-col-night">
                  <div className="rate-price-block rate-price-prime">
                    <span className="rate-currency">₹</span>
                    <span className="rate-num">{plan.rates[1].price}</span>
                    <span className="rate-per">/ hr</span>
                  </div>
                  <span className="rate-timing-sub">300+ Lux LED Included</span>
                </div>

                {/* Inclusions */}
                <div className="rate-col-inclusions">
                  <ul className="rate-inclusions-list">
                    {plan.inclusions.slice(0, 3).map((item, i) => (
                      <li key={i} className="rate-inclusion-item">
                        <Check size={13} className="inc-check" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Book Action */}
                <div className="rate-col-action">
                  <button
                    onClick={() => onOpenBooking(plan.sportType)}
                    className={`btn btn-sm ${plan.highlight ? 'btn-primary button-fill' : 'btn-secondary button-slide'}`}
                    id={`pricing-${plan.sportType}-btn`}
                  >
                    <span>Book Slot</span>
                    <ArrowRight size={14} className="btn-arrow" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Student Match Pass Voucher (Authentic Ticket / Boarding Pass styling) */}
        <div className="student-voucher-ticket">
          <div className="voucher-left">
            <div className="voucher-stamp">
              <Ticket size={24} />
              <span className="stamp-discount">{studentOffer.discount}</span>
            </div>
            <div className="voucher-text">
              <div className="voucher-tag-row">
                <span className="voucher-official-label">OFFICIAL STUDENT PASS</span>
                <span className="voucher-timing-pill">{studentOffer.validity}</span>
              </div>
              <h3 className="voucher-headline">{studentOffer.title}</h3>
              <p className="voucher-condition">{studentOffer.terms}</p>
            </div>
          </div>

          <div className="voucher-divider-perforation">
            <div className="notch notch-top"></div>
            <div className="perforation-line"></div>
            <div className="notch notch-bottom"></div>
          </div>

          <div className="voucher-right">
            <span className="promo-label">PROMO CODE</span>
            <div className="promo-code-box">
              <code>{studentOffer.code}</code>
            </div>
            <button
              onClick={() => onOpenBooking('both', 'STUDENT20')}
              className="btn btn-amber btn-sm voucher-apply-btn button-fill"
            >
              <span>Apply Student Pass</span>
              <ArrowRight size={14} className="btn-arrow" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

