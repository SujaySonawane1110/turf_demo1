import React, { useState } from 'react';
import { faqItems } from '../data/faqData';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';

export default function FAQ({ onShowToast }) {
  const [openId, setOpenId] = useState('faq-1');

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="section faq-section" id="faq">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Got Questions?</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-desc">
            Everything you need to know about booking, rules, equipment, and playing conditions at GameOn Turf Arena.
          </p>
        </div>

        <div className="faq-accordion-wrap">
          {faqItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`faq-item glass-card ${isOpen ? 'open' : ''}`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(item.id)}
                  className="faq-question-btn"
                  aria-expanded={isOpen}
                  aria-controls={`answer-${item.id}`}
                >
                  <div className="faq-q-text-wrap">
                    <HelpCircle size={18} className="faq-q-icon" />
                    <span className="faq-question">{item.question}</span>
                  </div>
                  <ChevronDown
                    size={20}
                    className={`faq-chevron ${isOpen ? 'rotated' : ''}`}
                  />
                </button>

                <div
                  id={`answer-${item.id}`}
                  className="faq-answer-collapse"
                  style={{
                    maxHeight: isOpen ? '400px' : '0px',
                    opacity: isOpen ? 1 : 0
                  }}
                >
                  <div className="faq-answer-inner">
                    <p className="faq-answer-text">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="faq-help-box glass-card">
          <div className="faq-help-content">
            <MessageSquare size={22} className="help-icon" />
            <div>
              <h4 className="help-box-title">Have a specific question about an event or bulk booking?</h4>
              <p className="help-box-desc">Our team at the arena desk is always on hand to assist via WhatsApp or direct phone call.</p>
            </div>
          </div>
          <button
            onClick={() => onShowToast('WhatsApp Support', 'Opening simulated WhatsApp chat with Arena Support Desk (+91 98260 12345)')}
            className="btn btn-secondary btn-sm button-slide"
          >
            <span>Ask Us on WhatsApp</span>
          </button>
        </div>
      </div>
    </section>
  );
}
