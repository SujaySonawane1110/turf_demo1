import React, { useState, useEffect } from 'react';
import { galleryCategories, galleryItems } from '../data/galleryData';
import { Play, ZoomIn, X, ChevronLeft, ChevronRight, Sparkles, Video } from 'lucide-react';

export default function Gallery({ onShowToast }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [videoModalItem, setVideoModalItem] = useState(null);

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setLightboxIndex(null);
        setVideoModalItem(null);
      } else if (e.key === 'ArrowRight' && lightboxIndex !== null) {
        setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
      } else if (e.key === 'ArrowLeft' && lightboxIndex !== null) {
        setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  const openItem = (item, index) => {
    if (item.isVideo) {
      setVideoModalItem(item);
    } else {
      setLightboxIndex(index);
    }
  };

  const nextLightbox = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const prevLightbox = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <section className="section gallery-section" id="gallery">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Visual Showcase</span>
          <h2 className="section-title">Life Inside GameOn Arena</h2>
          <p className="section-desc">
            Explore moments captured under the floodlights, intense tournament plays, and high-fives in the dugout.
          </p>

          {/* Category Filter Pills */}
          <div className="gallery-filter-bar">
            {galleryCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setLightboxIndex(null);
                }}
                className={`gallery-filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Asymmetric Editorial Grid */}
        <div className="gallery-asymmetric-editorial-grid">
          {filteredItems.map((item, index) => {
            const layoutClass = index === 0 ? 'gallery-item-hero-span' : index === 3 ? 'gallery-item-wide-span' : '';
            return (
              <div
                key={item.id}
                className={`gallery-card-item ${layoutClass} ${item.isVideo ? 'is-video-card' : ''}`}
                onClick={() => openItem(item, index)}
                role="button"
                tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  openItem(item, index);
                }
              }}
              aria-label={`View ${item.title}`}
            >
              <div className="gallery-img-container">
                <img
                  src={item.thumb}
                  alt={item.title}
                  className="gallery-img"
                  loading="lazy"
                />

                {/* Video Play Badge if Video */}
                {item.isVideo && (
                  <div className="video-card-badge">
                    <div className="video-play-icon">
                      <Play size={18} fill="currentColor" />
                    </div>
                    <span className="video-length-tag">{item.videoLength}</span>
                  </div>
                )}

                {/* Hover overlay */}
                <div className="gallery-item-overlay">
                  <span className="gallery-item-tag">{item.tag}</span>
                  <h4 className="gallery-item-title">{item.title}</h4>
                  <p className="gallery-item-caption">{item.caption}</p>
                  <div className="gallery-view-icon">
                    {item.isVideo ? <Play size={20} /> : <ZoomIn size={20} />}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        </div>
      </div>

      {/* Lightbox Modal for Photos */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div className="lightbox-backdrop" onClick={() => setLightboxIndex(null)}>
          <div className="lightbox-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="lightbox-close-btn button-rotate"
              onClick={() => setLightboxIndex(null)}
              aria-label="Close image preview"
            >
              <X size={24} />
            </button>

            <button
              className="lightbox-nav-btn lightbox-prev button-rotate"
              onClick={prevLightbox}
              aria-label="Previous image"
            >
              <ChevronLeft size={28} />
            </button>

            <button
              className="lightbox-nav-btn lightbox-next button-rotate"
              onClick={nextLightbox}
              aria-label="Next image"
            >
              <ChevronRight size={28} />
            </button>

            <div className="lightbox-image-wrap">
              <img
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title}
                className="lightbox-full-img"
              />
            </div>

            <div className="lightbox-meta">
              <div className="lightbox-meta-top">
                <span className="lightbox-tag">{filteredItems[lightboxIndex].tag}</span>
                <span className="lightbox-counter">
                  {lightboxIndex + 1} / {filteredItems.length}
                </span>
              </div>
              <h3 className="lightbox-title">{filteredItems[lightboxIndex].title}</h3>
              <p className="lightbox-caption">{filteredItems[lightboxIndex].caption}</p>
            </div>
          </div>
        </div>
      )}

      {/* Video Simulation Modal */}
      {videoModalItem && (
        <div className="lightbox-backdrop" onClick={() => setVideoModalItem(null)}>
          <div className="video-simulation-modal glass-card" onClick={(e) => e.stopPropagation()}>
            <div className="video-modal-header">
              <div className="video-modal-title-row">
                <Video size={18} className="video-icon" />
                <h3>{videoModalItem.title}</h3>
              </div>
              <button
                className="lightbox-close-btn button-rotate"
                onClick={() => setVideoModalItem(null)}
                aria-label="Close video preview"
              >
                <X size={20} />
              </button>
            </div>

            <div className="simulated-player-window">
              <img
                src={videoModalItem.image}
                alt={videoModalItem.title}
                className="simulated-video-poster"
              />
              <div className="simulated-video-overlay">
                <div className="simulated-play-circle animate-pulse">
                  <Play size={32} fill="var(--accent-primary)" color="var(--accent-primary)" />
                </div>
                <p className="simulated-video-text">Match Highlight Replay (Simulated Demo)</p>
                <span className="simulated-video-time">Duration: {videoModalItem.videoLength}</span>
              </div>
              {/* Fake progress bar */}
              <div className="simulated-progress-track">
                <div className="simulated-progress-fill"></div>
              </div>
            </div>

            <div className="video-modal-footer">
              <p className="video-caption-text">{videoModalItem.caption}</p>
              <button
                onClick={() => {
                  setVideoModalItem(null);
                  onShowToast('Action Saved', 'Full 4K match highlights are recorded for weekend league games!');
                }}
                className="btn btn-secondary btn-sm button-slide"
              >
                <span>Save to Highlights</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
