import React from 'react';
import '../../styles/marquee.css';

const highlightItems = [
  "ISO 9001:2015 Certified",
  "Stainless Steel",
  "Carbon Steel",
  "Alloy Steel",
  "Nickel Alloys",
  "Duplex & Super Duplex",
  "Pipes & Tubes",
  "Flanges",
  "Butt Weld Fittings",
  "Forged Fittings",
  "Fasteners",
  "Valves",
  "Worldwide Supply"
];

export default function Marquee() {
  return (
    <div className="highlight-marquee-strip" aria-label="Company Capabilities Marquee">
      <div className="marquee-outer-track">
        {/* Track 1 */}
        <div className="marquee-infinite-row">
          {highlightItems.map((item, index) => (
            <div className="marquee-pill-item" key={`t1-${index}`}>
              <span className="marquee-bullet-dot" />
              <span className="marquee-text-content">{item}</span>
            </div>
          ))}
        </div>
        {/* Track 2 for 100% seamless zero-jump loop */}
        <div className="marquee-infinite-row" aria-hidden="true">
          {highlightItems.map((item, index) => (
            <div className="marquee-pill-item" key={`t2-${index}`}>
              <span className="marquee-bullet-dot" />
              <span className="marquee-text-content">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
