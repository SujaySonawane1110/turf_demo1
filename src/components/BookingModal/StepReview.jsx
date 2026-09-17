import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Tag, Check, ShieldCheck, AlertCircle } from 'lucide-react';
import { formatShortDate } from './dateUtils';

export default function StepReview({
  sport,
  selectedDate,
  selectedSlot,
  details,
  promoCode,
  onApplyPromo,
  discountApplied
}) {
  const [inputCoupon, setInputCoupon] = useState(promoCode || '');
  const [couponError, setCouponError] = useState('');

  const sportName = sport === 'football'
    ? 'FIFA-Grade Football Turf (5v5/7v7)'
    : sport === 'cricket'
      ? 'Enclosed Box Cricket Arena (6v6/8v8)'
      : 'GameOn Arena Slot';
  const basePrice = selectedSlot?.price || (sport === 'cricket' ? 600 : sport === 'football' ? 800 : 700);
  
  const discountAmount = discountApplied ? Math.round(basePrice * 0.20) : 0;
  const finalPrice = Math.max(0, basePrice - discountAmount);

  const formattedDate = formatShortDate(selectedDate);

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (inputCoupon.trim().toUpperCase() === 'STUDENT20') {
      onApplyPromo('STUDENT20', true);
      setCouponError('');
    } else {
      setCouponError('Invalid code. Try "STUDENT20" for college happy hours!');
    }
  };

  return (
    <div className="booking-step-content animate-fade-in">
      <div className="step-heading-group">
        <h4 className="step-title">Review Booking Summary</h4>
        <p className="step-desc">Verify your match details and slot timing before confirming your reservation.</p>
      </div>

      <div className="review-layout-grid">
        {/* Booking Details Card */}
        <div className="review-summary-card glass-card">
          <div className="review-card-head">
            <span className="summary-tag">Match Details</span>
            <span className="summary-badge status-pill status-live">Slot Reserved</span>
          </div>

          <h5 className="review-sport-title">{sportName}</h5>

          <div className="review-specs-list">
            <div className="review-spec-row">
              <div className="spec-icon-label">
                <Calendar size={15} />
                <span>Date</span>
              </div>
              <span className="spec-val">{formattedDate}</span>
            </div>

            <div className="review-spec-row">
              <div className="spec-icon-label">
                <Clock size={15} />
                <span>Time Slot</span>
              </div>
              <span className="spec-val">{selectedSlot?.label || 'Selected Slot'} (1 Hour)</span>
            </div>

            <div className="review-spec-row">
              <div className="spec-icon-label">
                <Users size={15} />
                <span>Squad Size</span>
              </div>
              <span className="spec-val">{details.groupSize} Players</span>
            </div>

            <div className="review-spec-row">
              <div className="spec-icon-label">
                <MapPin size={15} />
                <span>Location</span>
              </div>
              <span className="spec-val">Plot 14, Sports Complex Rd, Sehore</span>
            </div>
          </div>

          <div className="review-player-section">
            <span className="player-section-label">Booked By</span>
            <p className="player-info-line">
              <strong>{details.name}</strong> • +91 {details.phone}
            </p>
            {details.email && <p className="player-email-line">{details.email}</p>}
          </div>
        </div>

        {/* Price Breakdown Card */}
        <div className="review-pricing-card glass-card">
          <h5 className="pricing-card-title">Billing Breakdown</h5>

          {/* Coupon Code Input */}
          <form onSubmit={handleApplyCoupon} className="coupon-apply-form">
            <div className="coupon-input-group">
              <Tag size={15} className="coupon-icon" />
              <input
                type="text"
                value={inputCoupon}
                onChange={(e) => {
                  setInputCoupon(e.target.value);
                  setCouponError('');
                }}
                placeholder="Promo code (e.g. STUDENT20)"
                className="coupon-input"
              />
              <button type="submit" className="coupon-apply-btn button-rotate">
                Apply
              </button>
            </div>
            {couponError && <p className="coupon-error-msg">{couponError}</p>}
            {discountApplied && (
              <p className="coupon-success-msg">
                <Check size={14} />
                <span>STUDENT20 applied: 20% Student Discount!</span>
              </p>
            )}
          </form>

          {/* Itemized Table */}
          <div className="breakdown-table">
            <div className="breakdown-row">
              <span className="row-label">Base Slot Rate (1 hr)</span>
              <span className="row-val">₹{basePrice}</span>
            </div>

            {discountApplied && (
              <div className="breakdown-row discount-row">
                <span className="row-label">Student Happy Hours (-20%)</span>
                <span className="row-val text-success">-₹{discountAmount}</span>
              </div>
            )}

            <div className="breakdown-row">
              <span className="row-label">Equipment (Bibs, Balls, Bats)</span>
              <span className="row-val text-free">FREE</span>
            </div>

            <div className="breakdown-row">
              <span className="row-label">Turf Facility & Light Surcharge</span>
              <span className="row-val">₹0</span>
            </div>

            <div className="breakdown-divider"></div>

            <div className="breakdown-row total-row">
              <span className="total-label">Total Payable at Arena</span>
              <span className="total-amount">₹{finalPrice}</span>
            </div>
          </div>

          <div className="pay-at-venue-note">
            <ShieldCheck size={16} />
            <span>Pay on arrival via UPI, Card, or Cash. Free cancellation up to 4 hrs before kickoff.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
