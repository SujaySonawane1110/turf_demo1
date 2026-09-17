import React from 'react';
import { Sun, Moon, Sparkles, Clock, Check, XCircle } from 'lucide-react';

export default function StepSlots({ selectedSlot, onSelectSlot, selectedDate, sport }) {
  // Master slot list with timings and peak status
  const allSlots = [
    { id: '06-07', label: '6:00 AM – 7:00 AM', period: 'morning', isPeak: false, desc: 'Early Bird Kickoff' },
    { id: '07-08', label: '7:00 AM – 8:00 AM', period: 'morning', isPeak: false, desc: 'Morning Warmup' },
    { id: '08-09', label: '8:00 AM – 9:00 AM', period: 'morning', isPeak: false, desc: 'Daylight Game' },
    { id: '09-10', label: '9:00 AM – 10:00 AM', period: 'morning', isPeak: false, desc: 'Morning Session' },
    { id: '15-16', label: '3:00 PM – 4:00 PM', period: 'afternoon', isPeak: false, desc: 'Afternoon Slot (Student Happy Hour)' },
    { id: '16-17', label: '4:00 PM – 5:00 PM', period: 'afternoon', isPeak: false, desc: 'Cooling Dusk Slot' },
    { id: '17-18', label: '5:00 PM – 6:00 PM', period: 'evening', isPeak: true, desc: 'Sunset & Floodlights Start' },
    { id: '18-19', label: '6:00 PM – 7:00 PM', period: 'evening', isPeak: true, desc: 'Prime Evening Under Lights' },
    { id: '19-20', label: '7:00 PM – 8:00 PM', period: 'evening', isPeak: true, desc: 'Prime Stadium Atmosphere' },
    { id: '20-21', label: '8:00 PM – 9:00 PM', period: 'night', isPeak: true, desc: 'Night Football & Cricket' },
    { id: '21-22', label: '9:00 PM – 10:00 PM', period: 'night', isPeak: true, desc: 'Late Night High Intensity' },
    { id: '22-23', label: '10:00 PM – 11:00 PM', period: 'night', isPeak: true, desc: 'Midnight Match' }
  ];

  // Deterministic simulation of booked slots based on date string and sport
  const getIsBooked = (slotId) => {
    let hash = 0;
    const key = `${selectedDate}-${sport}-${slotId}`;
    for (let i = 0; i < key.length; i++) {
      hash = (hash << 5) - hash + key.charCodeAt(i);
      hash |= 0;
    }
    // Roughly 30% of slots are simulated as booked (e.g. 7-8 PM, 8-9 PM often booked)
    return Math.abs(hash) % 10 < 3;
  };

  const getSlotPrice = (isPeak) => {
    if (sport === 'cricket') {
      return isPeak ? 900 : 600;
    }
    if (sport === 'football') {
      return isPeak ? 1200 : 800;
    }
    return isPeak ? 1000 : 700;
  };

  return (
    <div className="booking-step-content animate-fade-in">
      <div className="step-heading-group">
        <h4 className="step-title">Select Play Time Slot</h4>
        <p className="step-desc">Pick an available 1-hour slot. Floodlight evening & night slots are marked with stadium lights.</p>
      </div>

      {/* Slot status legend */}
      <div className="slot-legend-row">
        <div className="legend-item">
          <span className="legend-box available-box"></span>
          <span>Available</span>
        </div>
        <div className="legend-item">
          <span className="legend-box booked-box"></span>
          <span>Already Booked</span>
        </div>
        <div className="legend-item">
          <span className="legend-box selected-box"></span>
          <span>Your Selection</span>
        </div>
      </div>

      {/* Slots grid */}
      <div className="slots-cards-grid">
        {allSlots.map((slot) => {
          const isBooked = getIsBooked(slot.id);
          const isSelected = selectedSlot?.id === slot.id;
          const price = getSlotPrice(slot.isPeak);

          return (
            <button
              type="button"
              key={slot.id}
              disabled={isBooked}
              onClick={() => onSelectSlot({ ...slot, price })}
              className={`slot-card-btn ${isBooked ? 'slot-booked' : 'slot-available'} ${isSelected ? 'slot-selected' : ''}`}
              aria-label={`${slot.label}, ${isBooked ? 'Booked' : `Available for ₹${price}`}`}
              aria-pressed={isSelected}
            >
              <div className="slot-card-header">
                {slot.isPeak ? (
                  <span className="peak-indicator-badge">
                    <Moon size={12} />
                    <span>Floodlights</span>
                  </span>
                ) : (
                  <span className="day-indicator-badge">
                    <Sun size={12} />
                    <span>Daylight</span>
                  </span>
                )}

                <span className="slot-price-pill">₹{price}</span>
              </div>

              <div className="slot-time-text">{slot.label}</div>
              <div className="slot-desc-text">{slot.desc}</div>

              <div className="slot-status-indicator">
                {isBooked ? (
                  <span className="status-label booked-label">
                    <XCircle size={13} />
                    Booked
                  </span>
                ) : isSelected ? (
                  <span className="status-label selected-label">
                    <Check size={13} />
                    Selected
                  </span>
                ) : (
                  <span className="status-label available-label">Available</span>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
