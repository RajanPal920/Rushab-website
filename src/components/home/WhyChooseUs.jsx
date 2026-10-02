import React from 'react';
import { Link } from 'react-router-dom';
import {
  FiLayers,
  FiAward,
  FiPackage,
  FiSettings,
  FiFileText,
  FiShield,
  FiTag,
  FiClock,
  FiGlobe,
  FiArrowRight
} from 'react-icons/fi';
import '../../styles/whyChooseUs.css';

// EXACTLY 9 CARDS AS REQUIRED (3 columns x 3 rows on desktop)
const nineReasons = [
  {
    id: 1,
    icon: <FiLayers />,
    title: "Wide Product Range",
    description: "Complete single-source availability across ferrous & non-ferrous pipes, tubes, fittings, flanges, and valves."
  },
  {
    id: 2,
    icon: <FiAward />,
    title: "Quality Assurance",
    description: "ISO 9001:2015 certified quality management with end-to-end traceability and strict dimensional tolerances."
  },
  {
    id: 3,
    icon: <FiPackage />,
    title: "Ready Stock",
    description: "Extensive buffer stock of standard-size pipes, butt weld fittings, and flanges maintained for immediate dispatch."
  },
  {
    id: 4,
    icon: <FiSettings />,
    title: "Custom Manufacturing",
    description: "Specialized fabrication, precision cutting, and non-standard dimensions crafted strictly to client engineering drawings."
  },
  {
    id: 5,
    icon: <FiFileText />,
    title: "Material Test Certificates",
    description: "Complete chemical and mechanical test documentation supplied with EN 10204 3.1 / 3.2 MTC test reports."
  },
  {
    id: 6,
    icon: <FiShield />,
    title: "Third-Party Inspection",
    description: "Pre-dispatch inspection readily arranged through client-nominated global inspection authorities on request."
  },
  {
    id: 7,
    icon: <FiTag />,
    title: "Competitive Pricing",
    description: "Direct mill relationships and efficient inventory holding ensure transparent and competitive market pricing."
  },
  {
    id: 8,
    icon: <FiClock />,
    title: "Timely Delivery",
    description: "Fast turnarounds backed by strategic logistics proximity to Nhava Sheva (JNPT) port and Mumbai cargo hubs."
  },
  {
    id: 9,
    icon: <FiGlobe />,
    title: "Worldwide Supply",
    description: "Reliable export-grade seaworthy packaging and logistics catering to industrial projects across India and globally."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="why-choose-us-section" id="why-choose-us">
      <div className="container">
        {/* Centered Header matching screenshot 2: pill badge with pulse dot + title + description */}
        <div className="why-centered-header">
          <div className="section-subtitle-badge align-center">
            <span className="subtitle-pulse-dot" />
            <span className="section-subtitle-text">Our 9 Strengths</span>
          </div>
          <h2 className="why-main-title">Why Choose Us</h2>
          <p className="why-lead-desc">
            We deliver in STEEL — providing high-grade metallurgy, certified testing, and enduring client partnerships for world-class industrial infrastructure.
          </p>
        </div>

        {/* Responsive Grid: Exactly 9 Cards with big stylized numbers 01..09 */}
        <div className="why-nine-grid">
          {nineReasons.map((card) => (
            <div className="why-exact-card" key={card.id}>
              <div className="why-card-top-row">
                <div className="why-big-number">
                  0{card.id}
                </div>
                <div className="why-icon-pill">
                  {card.icon}
                </div>
              </div>

              <h3 className="why-card-title">{card.title}</h3>
              <p className="why-card-desc">{card.description}</p>

              <div className="why-card-bottom-accent" />
            </div>
          ))}
        </div>

        {/* Clean trust ribbon */}
        <div className="why-trust-ribbon">
          <div className="ribbon-quote">
            <span className="quote-mark">“</span>
            <span className="quote-text">Our relation does not end with the sale, that's where it begins.</span>
          </div>
          <div className="ribbon-actions">
            <Link to="/about" className="ribbon-btn primary">
              <span>About Rushab Metal</span>
              <FiArrowRight />
            </Link>
            <Link to="/certificates" className="ribbon-btn secondary">
              <span>Quality Framework</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
