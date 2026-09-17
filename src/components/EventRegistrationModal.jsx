import React, { useState, useEffect } from 'react';
import { X, Trophy, Users, Calendar, Award, CheckCircle2, ShieldAlert } from 'lucide-react';

export default function EventRegistrationModal({ event, onClose, onRegisterSuccess }) {
  const [formData, setFormData] = useState({
    squadName: '',
    captainName: '',
    phone: '',
    college: '',
    rosterSize: '7'
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [regId, setRegId] = useState('');

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!event) return null;

  const validate = () => {
    const newErrors = {};
    if (!formData.squadName.trim()) newErrors.squadName = 'Squad or Team name is required';
    if (!formData.captainName.trim()) newErrors.captainName = 'Captain name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Mobile number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Enter a valid 10-digit Indian mobile number';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const fakeCode = `TOURN-${Math.floor(1000 + Math.random() * 9000)}`;
    setRegId(fakeCode);
    setIsSubmitted(true);
    if (onRegisterSuccess) {
      onRegisterSuccess(event.title, formData.squadName, fakeCode);
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-dialog glass-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn button-rotate" onClick={onClose} aria-label="Close registration modal">
          <X size={20} />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="modal-header">
              <span className="section-tag">{event.sport} Tournament</span>
              <h3 className="modal-title">Squad Registration</h3>
              <p className="modal-subtitle">{event.title}</p>
            </div>

            <div className="event-meta-banner">
              <div className="event-meta-pill">
                <Calendar size={14} />
                <span>{event.date}</span>
              </div>
              <div className="event-meta-pill highlight-gold">
                <Trophy size={14} />
                <span>Prize: {event.prizePool}</span>
              </div>
              <div className="event-meta-pill">
                <Award size={14} />
                <span>Entry: {event.entryFee}</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-group">
                <label className="form-label" htmlFor="squadName">Squad / Team Name *</label>
                <input
                  type="text"
                  id="squadName"
                  value={formData.squadName}
                  onChange={(e) => setFormData({ ...formData, squadName: e.target.value })}
                  placeholder="e.g. Sehore Mavericks"
                  className={`form-input ${errors.squadName ? 'input-error' : ''}`}
                />
                {errors.squadName && <span className="error-text">{errors.squadName}</span>}
              </div>

              <div className="form-row-2">
                <div className="form-group">
                  <label className="form-label" htmlFor="captainName">Captain / Manager Name *</label>
                  <input
                    type="text"
                    id="captainName"
                    value={formData.captainName}
                    onChange={(e) => setFormData({ ...formData, captainName: e.target.value })}
                    placeholder="e.g. Rahul Verma"
                    className={`form-input ${errors.captainName ? 'input-error' : ''}`}
                  />
                  {errors.captainName && <span className="error-text">{errors.captainName}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="captainPhone">WhatsApp Number *</label>
                  <input
                    type="tel"
                    id="captainPhone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 98260 12345"
                    className={`form-input ${errors.phone ? 'input-error' : ''}`}
                  />
                  {errors.phone && <span className="error-text">{errors.phone}</span>}
                </div>
              </div>

              <div className="form-row-2">
                <div className="form-group">
                  <label className="form-label" htmlFor="collegeName">College / Club Affiliation</label>
                  <input
                    type="text"
                    id="collegeName"
                    value={formData.college}
                    onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                    placeholder="e.g. Govt. Polytechnic Sehore / Independent"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="rosterSize">Expected Players</label>
                  <select
                    id="rosterSize"
                    value={formData.rosterSize}
                    onChange={(e) => setFormData({ ...formData, rosterSize: e.target.value })}
                    className="form-input form-select"
                  >
                    <option value="6">6 Players</option>
                    <option value="7">7 Players</option>
                    <option value="8">8 Players</option>
                    <option value="10">10 Players (Full Squad + Subs)</option>
                  </select>
                </div>
              </div>

              <div className="form-notice">
                <ShieldAlert size={16} />
                <span>This is a simulated demo registration. No payment or official submission occurs.</span>
              </div>

              <div className="modal-actions">
                <button type="button" onClick={onClose} className="btn btn-secondary button-slide">
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary button-fill">
                  Submit Squad Entry (Demo)
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="modal-success-screen">
            <div className="success-icon-wrap">
              <CheckCircle2 size={48} className="success-check-icon" />
            </div>
            <h3 className="success-title">Squad Entry Received!</h3>
            <p className="success-desc">
              Your squad <strong>"{formData.squadName}"</strong> has been provisionally registered for the <strong>{event.title}</strong>.
            </p>

            <div className="success-badge-card">
              <span className="badge-card-label">Simulated Registration Pass</span>
              <span className="badge-card-code">{regId}</span>
              <span className="badge-card-sub">Fixture schedules will be shared via simulated WhatsApp updates.</span>
            </div>

            <div className="modal-actions">
              <button onClick={onClose} className="btn btn-primary btn-full button-fill">
                Done & Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
