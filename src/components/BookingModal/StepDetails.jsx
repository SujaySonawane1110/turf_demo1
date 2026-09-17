import React from 'react';
import { User, Phone, Mail, Users, Plus, Minus, CheckSquare, Square } from 'lucide-react';

export default function StepDetails({ details, onChangeDetails, errors }) {
  const handleGroupIncrement = () => {
    if (details.groupSize < 22) {
      onChangeDetails('groupSize', details.groupSize + 1);
    }
  };

  const handleGroupDecrement = () => {
    if (details.groupSize > 4) {
      onChangeDetails('groupSize', details.groupSize - 1);
    }
  };

  return (
    <div className="booking-step-content animate-fade-in">
      <div className="step-heading-group">
        <h4 className="step-title">Enter Match & Player Details</h4>
        <p className="step-desc">Provide your contact info for match confirmation and entry at the arena gates.</p>
      </div>

      <div className="booking-details-form">
        {/* Full Name */}
        <div className="form-group">
          <label className="form-label" htmlFor="booking-name">
            <User size={15} />
            <span>Full Name (Squad Captain / Booker) *</span>
          </label>
          <input
            type="text"
            id="booking-name"
            value={details.name}
            onChange={(e) => onChangeDetails('name', e.target.value)}
            placeholder="e.g. Aryan Mehra"
            className={`form-input ${errors.name ? 'input-error' : ''}`}
          />
          {errors.name && <p className="error-text">{errors.name}</p>}
        </div>

        {/* Phone & Email Row */}
        <div className="form-row-2">
          <div className="form-group">
            <label className="form-label" htmlFor="booking-phone">
              <Phone size={15} />
              <span>WhatsApp / Mobile Number *</span>
            </label>
            <div className="phone-input-wrap">
              <span className="phone-prefix">+91</span>
              <input
                type="tel"
                id="booking-phone"
                value={details.phone}
                onChange={(e) => onChangeDetails('phone', e.target.value)}
                placeholder="98260 12345"
                maxLength={10}
                className={`form-input phone-field ${errors.phone ? 'input-error' : ''}`}
              />
            </div>
            {errors.phone && <p className="error-text">{errors.phone}</p>}
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="booking-email">
              <Mail size={15} />
              <span>Email Address (Optional)</span>
            </label>
            <input
              type="email"
              id="booking-email"
              value={details.email}
              onChange={(e) => onChangeDetails('email', e.target.value)}
              placeholder="squad@example.com"
              className={`form-input ${errors.email ? 'input-error' : ''}`}
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
          </div>
        </div>

        {/* Group Size Stepper */}
        <div className="form-group">
          <label className="form-label">
            <Users size={15} />
            <span>Squad / Player Count</span>
          </label>
          <div className="group-stepper-box glass-card">
            <div className="stepper-label-info">
              <span className="stepper-title">{details.groupSize} Players</span>
              <span className="stepper-sub">Recommended: 10–14 players for football, 12–16 for cricket</span>
            </div>
            <div className="stepper-controls">
              <button
                type="button"
                onClick={handleGroupDecrement}
                disabled={details.groupSize <= 4}
                className="stepper-btn button-rotate"
                aria-label="Decrease player count"
              >
                <Minus size={16} />
              </button>
              <span className="stepper-current-val">{details.groupSize}</span>
              <button
                type="button"
                onClick={handleGroupIncrement}
                disabled={details.groupSize >= 22}
                className="stepper-btn button-rotate"
                aria-label="Increase player count"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Free Inclusions Checklist */}
        <div className="form-group">
          <div
            className="custom-checkbox-row"
            onClick={() => onChangeDetails('extraBibs', !details.extraBibs)}
            role="checkbox"
            aria-checked={details.extraBibs}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                onChangeDetails('extraBibs', !details.extraBibs);
              }
            }}
          >
            {details.extraBibs ? (
              <CheckSquare size={19} className="checkbox-icon checked" />
            ) : (
              <Square size={19} className="checkbox-icon" />
            )}
            <span className="checkbox-text">
              Request 2 complimentary sets of colored scrimmage bibs & extra match ball at reception
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
