import React, { useState } from 'react';
import { CheckCircle2, Copy, Check, MessageSquare, Calendar, RefreshCw, AlertTriangle } from 'lucide-react';
import { formatShortDate } from './dateUtils';

export default function StepConfirmation({
  bookingCode,
  sport,
  selectedDate,
  selectedSlot,
  details,
  finalPrice,
  onReset,
  onClose,
  onShowToast
}) {
  const [copied, setCopied] = useState(false);

  const sportName = sport === 'football' ? 'Football Turf' : sport === 'cricket' ? 'Box Cricket Arena' : 'GameOn Arena Slot';
  const formattedDate = formatShortDate(selectedDate);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(bookingCode).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
    onShowToast('Copied to Clipboard', `Booking reference ${bookingCode} copied!`);
  };

  const handleSimulateWhatsApp = () => {
    onShowToast(
      'WhatsApp Confirmation Sent!',
      `Simulated SMS/WhatsApp match pass sent to +91 ${details.phone}`
    );
  };

  const handleSimulateCalendar = () => {
    onShowToast(
      'Calendar Event Created',
          `Added "${sportName} @ GameOn Turf" to your calendar for ${formattedDate}`
    );
  };

  return (
    <div className="confirmation-screen animate-fade-in">
      {/* Celebratory Checkmark */}
      <div className="celebration-circle">
        <CheckCircle2 size={54} className="celebration-check-icon" />
      </div>

      <h3 className="confirmation-title">Slot Confirmed! Get Ready to Play.</h3>
      <p className="confirmation-subtitle">
        Your slot has been reserved for <strong>{details.name}</strong> and your squad.
      </p>

      {/* Ticket Pass Container */}
      <div className="booking-pass-card glass-card">
        <div className="pass-top-strip">
          <span className="pass-brand">GameOn Turf Arena Pass</span>
          <span className="pass-status-chip">Confirmed</span>
        </div>

        <div className="pass-code-row">
          <div>
            <span className="code-label">Booking Reference</span>
            <h2 className="pass-code-val">{bookingCode}</h2>
          </div>
          <button
            type="button"
            onClick={handleCopyCode}
            className="btn btn-secondary btn-sm copy-btn button-rotate"
            title="Copy reference code"
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>

        <div className="pass-details-grid">
          <div className="pass-cell">
            <span className="pass-cell-label">Facility</span>
            <span className="pass-cell-val">{sportName}</span>
          </div>

          <div className="pass-cell">
            <span className="pass-cell-label">Date</span>
            <span className="pass-cell-val">{formattedDate}</span>
          </div>

          <div className="pass-cell">
            <span className="pass-cell-label">Time Slot</span>
            <span className="pass-cell-val">{selectedSlot?.label}</span>
          </div>

          <div className="pass-cell">
            <span className="pass-cell-label">Payable at Venue</span>
            <span className="pass-cell-val highlight-amount">₹{finalPrice}</span>
          </div>
        </div>

        {/* Demo Disclaimer Box */}
        <div className="demo-notice-alert">
          <AlertTriangle size={17} className="alert-icon" />
          <p>
            <strong>Demonstration Notice:</strong> This is a fictional frontend booking prototype for client presentation. No real reservation was placed and no charges have been incurred.
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="confirmation-action-group">
        <button
          type="button"
          onClick={handleSimulateWhatsApp}
          className="btn btn-secondary confirmation-cta-btn button-slide"
        >
          <MessageSquare size={16} />
          <span>Simulate WhatsApp Pass</span>
        </button>

        <button
          type="button"
          onClick={handleSimulateCalendar}
          className="btn btn-secondary confirmation-cta-btn button-slide"
        >
          <Calendar size={16} />
          <span>Add to Calendar</span>
        </button>

        <button
          type="button"
          onClick={onReset}
          className="btn btn-ghost confirmation-cta-btn button-slide"
        >
          <RefreshCw size={15} />
          <span>Book Another Slot</span>
        </button>
      </div>

      <div className="confirmation-done-row">
        <button
          type="button"
          onClick={onClose}
          className="btn btn-primary btn-full button-fill"
        >
          <span>Done & Back to Website</span>
        </button>
      </div>
    </div>
  );
}
