import React from 'react';
import { Calendar as CalendarIcon, Clock } from 'lucide-react';
import { formatLongDate, getLocalDateString } from './dateUtils';

export default function StepDate({ selectedDate, onSelectDate }) {
  // Generate next 7 days starting from today
  const today = new Date();
  const todayString = getLocalDateString(today);
  const dateOptions = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(today.getFullYear(), today.getMonth(), today.getDate() + i);

    const dateString = getLocalDateString(d);
    const dayName = i === 0 ? 'Today' : i === 1 ? 'Tomorrow' : d.toLocaleDateString('en-US', { weekday: 'short' });
    const dayNumber = d.getDate();
    const monthName = d.toLocaleDateString('en-US', { month: 'short' });

    return {
      dateString,
      dayName,
      dayNumber,
      monthName,
      isWeekend: d.getDay() === 0 || d.getDay() === 6
    };
  });

  const handleCustomDateChange = (e) => {
    if (e.target.value) {
      onSelectDate(e.target.value);
    }
  };

  const formattedSelectedDate = formatLongDate(selectedDate);

  return (
    <div className="booking-step-content animate-fade-in">
      <div className="step-heading-group">
        <h4 className="step-title">Select Booking Date</h4>
        <p className="step-desc">Pick your match date for the upcoming week or choose any future day.</p>
      </div>

      {/* 7-Day Browseable Date Strip */}
      <div className="date-strip-row" role="radiogroup" aria-label="Select match date">
        {dateOptions.map((opt) => {
          const isSelected = selectedDate === opt.dateString;
          return (
            <button
              type="button"
              key={opt.dateString}
              onClick={() => onSelectDate(opt.dateString)}
              className={`date-pill-btn ${isSelected ? 'selected' : ''} ${opt.isWeekend ? 'is-weekend' : ''}`}
              role="radio"
              aria-checked={isSelected}
            >
              <span className="date-pill-day">{opt.dayName}</span>
              <span className="date-pill-num">{opt.dayNumber}</span>
              <span className="date-pill-month">{opt.monthName}</span>
              {opt.isWeekend && <span className="weekend-indicator">Weekend</span>}
            </button>
          );
        })}
      </div>

      {/* Or Pick From Calendar */}
      <div className="custom-date-picker-row">
        <label htmlFor="custom-booking-date" className="custom-date-label">
          <CalendarIcon size={16} />
          <span>Or pick any other date from calendar:</span>
        </label>
        <input
          type="date"
          id="custom-booking-date"
          value={selectedDate}
          min={todayString}
          onChange={handleCustomDateChange}
          className="form-input custom-date-input"
        />
      </div>

      {/* Selected Date Indicator Banner */}
      <div className="selected-date-banner glass-card">
        <div className="banner-icon-circle">
          <CalendarIcon size={18} />
        </div>
        <div>
          <span className="banner-label">Selected Play Date</span>
          <p className="banner-val">{formattedSelectedDate}</p>
        </div>
        <div className="banner-tag">
          <Clock size={13} />
          <span>Slots Available</span>
        </div>
      </div>
    </div>
  );
}
