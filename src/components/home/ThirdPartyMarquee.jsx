import React from 'react';
import './ThirdPartyMarquee.css';

// Mill & Brand Logos from /third-party-logo folder
const thirdPartyLogos = [
  { name: "L&T Valves", img: "/images/third-party-logo/l-and-t-logo.jpg" },
  { name: "Jindal Stainless (JSL)", img: "/images/third-party-logo/jsl-logo.jpg" },
  { name: "Maharashtra Seamless", img: "/images/third-party-logo/maharashtra-logo.jpg" },
  { name: "Jindal Star", img: "/images/third-party-logo/jindal-star-logo.jpg" },
  { name: "Outokumpu", img: "/images/third-party-logo/outokumpu-logo.jpg" },
  { name: "KSB", img: "/images/third-party-logo/ksb-logo.jpg" },
  { name: "Klinger", img: "/images/third-party-logo/klinger-logo.jpg" }
];

export default function ThirdPartyMarquee() {
  return (
    <section className="tp-inspection-section" aria-label="Third-Party Inspection Logos">
      <div className="tp-inspection-header">
        <div className="container">
          <div className="tp-header-inner">
            <div className="tp-badge">
              <span className="tp-dot" />
              <span>APPROVED QUALITY & SOURCE MILL REFERENCES</span>
            </div>
            <h3 className="tp-title">Third-Party Inspection & Trusted Mill Brands</h3>
            <p className="tp-subtitle">
              Materials sourced from globally reputed mills and coordinated with certified international third-party inspection authorities.
            </p>
          </div>
        </div>
      </div>

      {/* Logos-Only Infinite Marquee: Text Removed as Requested */}
      <div className="tp-marquee-wrapper logos-row">
        <div className="tp-marquee-track">
          {/* Loop 1 */}
          <div className="tp-marquee-items">
            {thirdPartyLogos.map((item, idx) => (
              <div key={`l1-${idx}`} className="tp-logo-card" title={item.name}>
                <img src={item.img} alt={item.name} className="tp-logo-img" loading="lazy" />
              </div>
            ))}
          </div>
          {/* Loop 2 for seamless loop */}
          <div className="tp-marquee-items" aria-hidden="true">
            {thirdPartyLogos.map((item, idx) => (
              <div key={`l2-${idx}`} className="tp-logo-card" title={item.name}>
                <img src={item.img} alt={item.name} className="tp-logo-img" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reverse Track for visual dynamics with logos */}
      <div className="tp-marquee-wrapper logos-row-reverse">
        <div className="tp-marquee-track reverse">
          {/* Loop 1 */}
          <div className="tp-marquee-items">
            {[...thirdPartyLogos].reverse().map((item, idx) => (
              <div key={`lr1-${idx}`} className="tp-logo-card" title={item.name}>
                <img src={item.img} alt={item.name} className="tp-logo-img" loading="lazy" />
              </div>
            ))}
          </div>
          {/* Loop 2 */}
          <div className="tp-marquee-items" aria-hidden="true">
            {[...thirdPartyLogos].reverse().map((item, idx) => (
              <div key={`lr2-${idx}`} className="tp-logo-card" title={item.name}>
                <img src={item.img} alt={item.name} className="tp-logo-img" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        <p className="tp-legal-notice">
          * Brand references and logos are reproduced from our brochure for technical specification references. All trademarks belong to their respective proprietary holders.
        </p>
      </div>
    </section>
  );
}
