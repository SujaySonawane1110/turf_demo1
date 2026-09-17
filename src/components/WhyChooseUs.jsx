import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function WhyChooseUs() {
  const benefits = [
    {
      num: "01",
      title: "Student-Friendly Pricing",
      desc: "Transparent hourly rates with weekday 'Happy Hours' discount passes designed for college budgets and hostel friend circles. No hidden fees or ball rental charges."
    },
    {
      num: "02",
      title: "Professional Playing Surface",
      desc: "FIFA-certified 50mm shock-absorbent monofilament artificial grass with silica sand infill. Delivers true ball roll, zero turf burn, and optimal joint protection."
    },
    {
      num: "03",
      title: "300+ Lux Night Floodlights",
      desc: "High-mast flicker-free LED towers ensure daylight-level clarity past dusk. Complete zero-shadow tracking with 100% generator backup for uninterrupted play."
    },
    {
      num: "04",
      title: "Dugout Café & Hydration Zone",
      desc: "Chilled electrolyte drinks, fresh protein shakes, hot beverages, and post-match snacks right beside the pitch, paired with 75-inch screens for live sports screenings."
    }
  ];

  return (
    <section className="section why-us-editorial-section" id="why-us">
      <div className="container">
        <div className="why-us-editorial-grid">
          {/* Left Column: Dominant Editorial Statement */}
          <div className="why-us-statement-col">
            <span className="section-tag">Arena Standards</span>
            <h2 className="why-us-hero-title">
              BUILT FOR <br />
              <span className="why-us-title-accent">THE GAME.</span>
            </h2>
            <p className="why-us-lead">
              We built GameOn Turf Arena to provide Sehore’s football clubs, collegiate cricketers, and casual squads with a world-class, hygienic, and affordable playing ground.
            </p>

            <div className="why-us-badge-strip">
              <div className="why-us-mini-stat">
                <span className="mini-stat-num">50mm</span>
                <span className="mini-stat-lbl">FIFA-Spec Turf</span>
              </div>
              <div className="why-us-stat-sep"></div>
              <div className="why-us-mini-stat">
                <span className="mini-stat-num">300+</span>
                <span className="mini-stat-lbl">Lux Illumination</span>
              </div>
              <div className="why-us-stat-sep"></div>
              <div className="why-us-mini-stat">
                <span className="mini-stat-num">100%</span>
                <span className="mini-stat-lbl">Generator Backup</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Numbered Benefits List */}
          <div className="why-us-benefits-col">
            {benefits.map((item) => (
              <div className="why-us-benefit-row" key={item.num}>
                <span className="benefit-index">{item.num}</span>
                <div className="benefit-content">
                  <h3 className="benefit-title">{item.title}</h3>
                  <p className="benefit-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

