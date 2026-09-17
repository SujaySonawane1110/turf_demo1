import React from 'react';
import { reviews } from '../data/reviewsData';
import { Star, ShieldCheck, Quote, GraduationCap } from 'lucide-react';

export default function Reviews() {
  const featuredReview = reviews[0];
  const supportingReviews = reviews.slice(1);

  return (
    <section className="section reviews-editorial-section" id="reviews">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Player Word of Mouth</span>
          <h2 className="section-title">Tested by Captains. Approved by Squads.</h2>
          <p className="section-desc">
            Authentic match feedback from collegiate captains, tournament organizers, and regular players who compete weekly on our turf.
          </p>
        </div>

        {/* Editorial Split Reviews Layout */}
        <div className="reviews-editorial-layout">
          {/* Featured Review Spotlight (Left Column) */}
          <div className="review-featured-spotlight">
            <div className="spotlight-quote-icon">
              <Quote size={42} />
            </div>

            <div className="spotlight-stars-row">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={18} fill="var(--accent-amber)" color="var(--accent-amber)" />
              ))}
              <span className="spotlight-verified-badge">
                <ShieldCheck size={14} />
                Verified Regular Player
              </span>
            </div>

            <p className="spotlight-quote-text">
              "{featuredReview.comment}"
            </p>

            <div className="spotlight-author-card">
              <img
                src={featuredReview.avatar}
                alt={featuredReview.name}
                className="spotlight-author-avatar"
                loading="lazy"
              />
              <div className="spotlight-author-info">
                <h4 className="spotlight-author-name">{featuredReview.name}</h4>
                <p className="spotlight-author-role">{featuredReview.role}</p>
                <div className="spotlight-college-line">
                  <GraduationCap size={14} />
                  <span>{featuredReview.college}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Supporting Player Reviews List (Right Column) */}
          <div className="reviews-supporting-list">
            {supportingReviews.map((rev) => (
              <div className="supporting-review-item" key={rev.id}>
                <div className="supporting-header">
                  <div className="supporting-stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={14} fill="var(--accent-amber)" color="var(--accent-amber)" />
                    ))}
                  </div>
                  <span className="supporting-sport-chip">{rev.sport}</span>
                </div>

                <p className="supporting-quote">"{rev.comment}"</p>

                <div className="supporting-author-footer">
                  <img
                    src={rev.avatar}
                    alt={rev.name}
                    className="supporting-avatar"
                    loading="lazy"
                  />
                  <div>
                    <div className="supporting-name-line">
                      <span className="supporting-name">{rev.name}</span>
                      {rev.verified && <ShieldCheck size={13} className="inline-verified" />}
                    </div>
                    <span className="supporting-college">{rev.college}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

