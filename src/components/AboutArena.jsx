import React from 'react';
import { Trophy, ArrowRight, ShieldCheck, Zap, Users, Sparkles } from 'lucide-react';

export default function AboutArena({ onOpenBooking }) {
  const storyChapters = [
    {
      num: "01",
      tag: "THE FOUNDATION",
      title: "THE GAME STARTS HERE",
      subtitle: "50mm Shock-Padded Grass • Engineered for True Ball Roll",
      desc: "It begins with the touch. Built with certified 50mm monofilament artificial turf and fine silica infill, GameOn delivers the exact traction and cushion required for aggressive cutting, slide tackles, and injury-free 90-minute battles. No ankle strain. No brutal turf burn.",
      image: "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&w=1200&q=85",
      alt: "Soccer player sprinting and controlling ball on professional turf",
      stat: "15,000+ Hours",
      statLabel: "Played by College & Club Squads",
      reverse: false
    },
    {
      num: "02",
      tag: "THE ATMOSPHERE",
      title: "UNDER THE LIGHTS",
      subtitle: "300+ Lux Stadium Illumination • Zero Shadow Visibility",
      desc: "As dusk settles over Sehore, the arena transforms. Four industrial-grade LED towers ignite with 300+ Lux anti-glare floodlighting, turning the pitch into an electric night colosseum. Backed by dedicated 100% generator power, your midnight penalty shootouts and super overs never get cut short.",
      image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=85",
      alt: "Night game under intense arena floodlight towers with players competing",
      stat: "300+ Lux",
      statLabel: "Flicker-Free Anti-Glare Light",
      reverse: true
    },
    {
      num: "03",
      tag: "THE COMMUNITY",
      title: "BRING YOUR SQUAD",
      subtitle: "From Heated Campus Rivalries to Post-Match Dugout Banter",
      desc: "Sport is nothing without the crew you play with. Whether it's an inter-college derby, an office Friday match, or high-fives over cold electrolyte drinks at The Dugout Café, GameOn is built as Sehore’s premier athletic living room. Play hard, refuel, and celebrate.",
      image: "https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=1200&q=85",
      alt: "Sports squad celebrating and laughing together in dugout lounge",
      stat: "4.9 ★ Rating",
      statLabel: "Loved by Local Collegiate Athletes",
      reverse: false
    }
  ];

  return (
    <section className="section story-narrative-section" id="about">
      <div className="container">
        {/* Section Editorial Header */}
        <div className="section-header">
          <span className="section-tag">Arena Identity</span>
          <h2 className="section-title">The GameOn Experience</h2>
          <p className="section-desc">
            More than just artificial grass. We designed an arena where collegiate rivals become brothers, evening matches feel like cup finals, and every squad has a home pitch.
          </p>
        </div>

        {/* 3 Visual Storytelling Chapters */}
        <div className="story-chapters-list">
          {storyChapters.map((chapter) => (
            <div
              className={`story-chapter-row ${chapter.reverse ? 'is-reversed' : ''}`}
              key={chapter.num}
            >
              {/* Imagery Column */}
              <div className="story-img-col">
                <div className="story-img-frame">
                  <img
                    src={chapter.image}
                    alt={chapter.alt}
                    className="story-img"
                    loading="lazy"
                  />
                  <div className="story-img-badge">
                    <span className="story-badge-num">{chapter.stat}</span>
                    <span className="story-badge-lbl">{chapter.statLabel}</span>
                  </div>
                </div>
              </div>

              {/* Editorial Text Column */}
              <div className="story-content-col">
                <div className="story-chapter-meta">
                  <span className="chapter-step-index">{chapter.num}</span>
                  <span className="chapter-eyebrow">{chapter.tag}</span>
                </div>

                <h3 className="story-chapter-title">{chapter.title}</h3>
                <h4 className="story-chapter-subtitle">{chapter.subtitle}</h4>
                <p className="story-chapter-desc">{chapter.desc}</p>

                <div className="story-chapter-action">
                  <button
                    onClick={() => onOpenBooking('football')}
                    className="btn btn-secondary btn-sm button-slide"
                  >
                    <span>Experience This Pitch</span>
                    <ArrowRight size={15} className="btn-arrow" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Arena Mission Banner */}
        <div className="story-mission-banner">
          <div className="mission-banner-content">
            <span className="mission-tag">CAMPUS & COMMUNITY HUB</span>
            <h3 className="mission-title">READY TO RALLY YOUR TEAM?</h3>
            <p className="mission-text">
              Slots open daily from 6:00 AM until 12:00 Midnight. Book online in 60 seconds.
            </p>
          </div>
          <button
            onClick={() => onOpenBooking('football')}
            className="btn btn-primary btn-lg button-fill"
          >
            <span>Reserve Arena Slot</span>
            <ArrowRight size={17} className="btn-arrow" />
          </button>
        </div>
      </div>
    </section>
  );
}

