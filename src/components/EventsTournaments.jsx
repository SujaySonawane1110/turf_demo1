import React, { useState } from 'react';
import { upcomingEvents } from '../data/eventsData';
import { Trophy, Calendar, Clock, Users, ArrowRight, Award, ShieldCheck } from 'lucide-react';
import EventRegistrationModal from './EventRegistrationModal';

export default function EventsTournaments({ onShowToast }) {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleRegisterSuccess = (eventTitle, squadName, regId) => {
    onShowToast(
      'Squad Entry Confirmed!',
      `Squad "${squadName}" registered for ${eventTitle} (Pass: ${regId})`
    );
  };

  return (
    <section className="section events-editorial-section" id="events">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Arena Championships</span>
          <h2 className="section-title">Tournament Fixture Calendar</h2>
          <p className="section-desc">
            Test your squad against the best collegiate and club teams in the region. Compete under stadium lights for cash prize pools, trophies, and bragging rights.
          </p>
        </div>

        {/* Sports Schedule List (Sports Calendar Board) */}
        <div className="tournament-schedule-board">
          {upcomingEvents.map((evt) => (
            <div className="tournament-fixture-row" key={evt.id}>
              {/* Date Box Column */}
              <div className="fixture-date-col">
                <span className="fixture-date-highlight">{evt.date.split(',')[0]}</span>
                <span className="fixture-date-year">2026 SEASON</span>
              </div>

              {/* Tournament Core Info */}
              <div className="fixture-info-col">
                <div className="fixture-header-tags">
                  <span className="fixture-sport-tag">{evt.sport}</span>
                  <span className="fixture-badge-highlight">{evt.highlightBadge}</span>
                </div>
                <h3 className="fixture-title">{evt.title}</h3>
                <p className="fixture-summary">{evt.description}</p>
                <div className="fixture-meta-inline">
                  <span><Clock size={13} /> {evt.time}</span>
                  <span><Users size={13} /> {evt.teamSize}</span>
                </div>
              </div>

              {/* Prize & Entry Fee Column */}
              <div className="fixture-prize-col">
                <div className="prize-chip">
                  <Trophy size={16} className="prize-trophy-icon" />
                  <div>
                    <span className="prize-caption">PRIZE POOL</span>
                    <span className="prize-val">{evt.prizePool}</span>
                  </div>
                </div>
                <span className="fixture-entry-fee">Entry: <strong>{evt.entryFee}</strong></span>
              </div>

              {/* Status & CTA Action */}
              <div className="fixture-action-col">
                <span className={`fixture-status-pill ${evt.statusColor}`}>
                  <span className="status-dot"></span>
                  {evt.status}
                </span>
                <button
                  onClick={() => setSelectedEvent(evt)}
                  className="btn btn-primary btn-sm fixture-register-btn button-collapse"
                >
                  <span>Register Squad</span>
                  <ArrowRight size={14} className="btn-arrow" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Registration Modal */}
      {selectedEvent && (
        <EventRegistrationModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
          onRegisterSuccess={handleRegisterSuccess}
        />
      )}
    </section>
  );
}

