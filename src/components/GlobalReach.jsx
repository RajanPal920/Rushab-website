import React from 'react';
import SectionTitle from './SectionTitle';
import Button from './Button';
import { FiAnchor, FiBox, FiFileText, FiShield, FiSend } from 'react-icons/fi';
import './GlobalReach.css';

const exportFeatures = [
  {
    icon: <FiAnchor />,
    title: "Strategic Port Proximity",
    description: "Centrally positioned in Mumbai with immediate access to Nhava Sheva (JNPT) port and Mumbai International Air Cargo."
  },
  {
    icon: <FiBox />,
    title: "Export-Grade Seaworthy Packing",
    description: "Heavy-duty wooden crates, plastic end-caps, fumigated pallets, and rust-preventive oil coatings for safe global transit."
  },
  {
    icon: <FiFileText />,
    title: "Complete Export Documentation",
    description: "Full traceability with Manufacturer Test Certificates (MTC EN 10204 3.1/3.2), Certificate of Origin, and packing lists."
  },
  {
    icon: <FiShield />,
    title: "Third-Party Inspection Coordination",
    description: "Pre-dispatch clearance by world-class inspection agencies including DNV, Lloyd's, Bureau Veritas, and TUV upon request."
  }
];

export default function GlobalReach() {
  return (
    <section className="global-reach-section">
      <div className="container">
        <SectionTitle
          subtitle="International Supply & Logistics"
          title="Global Supply Network & Export Operations"
          description="Engineered metal products prepared and dispatched to international standards for critical infrastructure projects worldwide."
          align="center"
          light={true}
        />

        <div className="global-map-wrapper">
          {/* Industrial Global Network SVG Visual */}
          <div className="svg-map-stage">
            <svg viewBox="0 0 1000 480" className="interactive-world-map" aria-label="Global Supply Network Visual">
              <defs>
                <linearGradient id="oceanGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0B1038" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#10184F" stopOpacity="0.9" />
                </linearGradient>
                <linearGradient id="routeGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1B93CF" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#BED8F3" stopOpacity="0.2" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Background Plate */}
              <rect width="1000" height="480" rx="16" fill="url(#oceanGlow)" />

              {/* Coordinate Grid Lines */}
              <g stroke="rgba(190, 216, 243, 0.08)" strokeWidth="1" strokeDasharray="3,3">
                <line x1="50" y1="120" x2="950" y2="120" />
                <line x1="50" y1="240" x2="950" y2="240" />
                <line x1="50" y1="360" x2="950" y2="360" />
                <line x1="250" y1="30" x2="250" y2="450" />
                <line x1="500" y1="30" x2="500" y2="450" />
                <line x1="750" y1="30" x2="750" y2="450" />
              </g>

              {/* Abstract Continents Geometry (Industrial Dot Matrix) */}
              <g fill="rgba(190, 216, 243, 0.22)">
                {/* North America */}
                <ellipse cx="230" cy="140" rx="90" ry="50" />
                {/* South America */}
                <ellipse cx="320" cy="310" rx="55" ry="80" />
                {/* Europe */}
                <ellipse cx="520" cy="130" rx="50" ry="35" />
                {/* Africa */}
                <ellipse cx="530" cy="260" rx="60" ry="70" />
                {/* Middle East & Central Asia */}
                <ellipse cx="615" cy="180" rx="50" ry="35" />
                {/* India / Subcontinent Base */}
                <ellipse cx="680" cy="225" rx="45" ry="40" fill="rgba(27, 147, 207, 0.35)" />
                {/* East Asia */}
                <ellipse cx="780" cy="160" rx="75" ry="45" />
                {/* Southeast Asia & Australia */}
                <ellipse cx="830" cy="330" rx="65" ry="50" />
              </g>

              {/* Supply Arc Routes Radiating From Mumbai Hub (cx=675, cy=220) */}
              <g fill="none" strokeWidth="2" strokeDasharray="5,6" className="supply-trade-routes">
                {/* Mumbai to Middle East / Europe */}
                <path d="M675,220 Q590,140 520,130" stroke="url(#routeGrad1)" />
                {/* Mumbai to Southeast Asia */}
                <path d="M675,220 Q740,240 820,290" stroke="url(#routeGrad1)" />
                {/* Mumbai to Africa */}
                <path d="M675,220 Q600,280 540,290" stroke="url(#routeGrad1)" />
                {/* Mumbai to Far East */}
                <path d="M675,220 Q750,170 820,150" stroke="url(#routeGrad1)" />
                {/* Mumbai to Trans-Atlantic */}
                <path d="M675,220 Q480,90 280,140" stroke="url(#routeGrad1)" />
              </g>

              {/* Destination Indicators */}
              <g className="destination-nodes">
                <circle cx="520" cy="130" r="5" fill="#1B93CF" />
                <circle cx="820" cy="150" r="5" fill="#1B93CF" />
                <circle cx="820" cy="290" r="5" fill="#1B93CF" />
                <circle cx="540" cy="290" r="5" fill="#1B93CF" />
                <circle cx="280" cy="140" r="5" fill="#1B93CF" />
                <circle cx="330" cy="320" r="5" fill="#1B93CF" />
              </g>

              {/* Central Operational Node: Mumbai (Rushab Metal Industries HQ) */}
              <g className="origin-hub-mumbai">
                <circle cx="675" cy="220" r="18" fill="none" stroke="#1B93CF" strokeWidth="1.5" opacity="0.6">
                  <animate attributeName="r" values="12;28;12" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.8;0;0.8" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="675" cy="220" r="10" fill="#1D278A" stroke="#1B93CF" strokeWidth="2.5" />
                <circle cx="675" cy="220" r="4.5" fill="#FFFFFF" filter="url(#glow)" />
                
                {/* Pulse Tag */}
                <rect x="625" y="172" width="100" height="24" rx="4" fill="rgba(16, 24, 79, 0.9)" stroke="#1B93CF" strokeWidth="1" />
                <text x="675" y="188" fill="#FFFFFF" fontSize="10.5" fontFamily="Plus Jakarta Sans" fontWeight="700" textAnchor="middle">
                  MUMBAI HUB
                </text>
              </g>
            </svg>
          </div>
        </div>

        {/* Export Capabilities Grid */}
        <div className="export-features-grid">
          {exportFeatures.map((item, idx) => (
            <div key={idx} className="export-feat-card">
              <div className="feat-icon-bubble">{item.icon}</div>
              <h4 className="feat-title">{item.title}</h4>
              <p className="feat-desc">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="global-cta-box">
          <div className="cta-text-side">
            <h3>Ready to Dispatch to Domestic & Overseas Destination?</h3>
            <p>Connect directly with our international trade desk for FOB, CIF, or Ex-Works quotations.</p>
          </div>
          <div className="cta-btn-side">
            <Button to="/contact" variant="cyan" size="lg" icon={<FiSend />}>
              Inquire for Export Supply
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
