import React from 'react';
import SectionTitle from './SectionTitle';
import './BrandLogos.css';

const sourceMills = [
  { name: "Jindal Stainless (JSL)", origin: "India", type: "Stainless Steel Coils & Plates" },
  { name: "Maharashtra Seamless Limited", origin: "India", type: "Seamless Pipes & Tubes" },
  { name: "L&T Valves", origin: "India", type: "Industrial Valves & Flow Control" },
  { name: "KSB", origin: "Germany / Global", type: "Valves & Engineered Flow Systems" },
  { name: "Klinger", origin: "Global", type: "Fluid Control & Gaskets" },
  { name: "Champion", origin: "India", type: "Jointing & Sealing Solutions" },
  { name: "Outokumpu", origin: "Finland / Global", type: "High-Performance Stainless Alloys" },
  { name: "Acerinox", origin: "Spain", type: "Stainless Steel Plates & Sheets" },
  { name: "Acroni", origin: "Slovenia", type: "Heavy Plates & Stainless" },
  { name: "Daekyung Corp (DKC)", origin: "Korea", type: "B.Q. & Stainless Steel Plates" }
];

export default function BrandLogos({ light = false }) {
  return (
    <section className={`brand-logos-section ${light ? 'bg-light' : 'bg-industrial'}`}>
      <div className="container">
        <SectionTitle
          subtitle="Brochure Catalog References"
          title="Brands / Source Mills / Industry References Featured in Our Brochure"
          description="Reputed international & domestic mills and fluid-handling brand references documented in our technical supply literature."
          align="center"
          light={!light}
        />

        {/* Real Brochure Brand Strip Banner */}
        <div className="brochure-brand-banner-card">
          <div className="banner-header">
            <span className="banner-tag">AUTHENTIC BROCHURE REFERENCE MARKS</span>
            <span className="banner-note">JSL • Maharashtra Seamless • L&T • KSB • Klinger • Champion • Outokumpu</span>
          </div>
          <div className="banner-image-container">
            <img
              src="/images/brands/brochure-brands.png"
              alt="Brands, Source Mills, and Industry References Featured in Rushab Metal Industries Brochure"
              className="brochure-brands-img"
              loading="lazy"
            />
          </div>
        </div>

        {/* Structured Source Mills Grid */}
        <div className="source-mills-grid">
          {sourceMills.map((mill, idx) => (
            <div key={idx} className="mill-item-card">
              <div className="mill-card-header">
                <span className="mill-dot"></span>
                <span className="mill-origin">{mill.origin}</span>
              </div>
              <h4 className="mill-name">{mill.name}</h4>
              <p className="mill-type">{mill.type}</p>
            </div>
          ))}
        </div>

        <div className="brand-disclaimer-box">
          <p className="brand-disclaimer-text">
            <strong>Important Notice:</strong> Brands, mills, and agency marks displayed above reflect source mills and manufactured standards documented in our company brochure. They are presented for technical specification reference. All trade names, trademarks, and logos belong to their respective proprietary holders.
          </p>
        </div>
      </div>
    </section>
  );
}
