import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { siteConfig } from '../data/siteConfig';
import {
  FiShield,
  FiAward,
  FiArrowRight,
  FiPhone,
  FiTarget,
  FiEye,
  FiHeart
} from 'react-icons/fi';
import PageHero from '../components/common/PageHero';
import './About.css';

const supplyPillars = [
  {
    title: "Buffer Stock of Standard Pipes",
    desc: "Maintained inventory of seamless & welded pipes across standard diameters (up to 36\" NB) for rapid mobilization."
  },
  {
    title: "Buffer Stock of Fittings & Flanges",
    desc: "Readily available stock of butt weld elbows, tees, reducers, forged fittings, and flanges in ASME/ANSI ratings."
  },
  {
    title: "Special-Item Custom Manufacturing",
    desc: "Customized component fabrication, special machining, and tailored dimensions built strictly to client drawings."
  },
  {
    title: "Prime Mill Sourcing",
    desc: "Materials sourced exclusively from premier domestic and international steelmakers with complete heat trace."
  },
  {
    title: "Manufacturer Test Certificates (MTC)",
    desc: "Supplied with authentic EN 10204 3.1 / 3.2 documentation detailing mechanical, chemical, and physical parameters."
  },
  {
    title: "Third-Party Inspection on Request",
    desc: "Inspection clearance coordinated seamlessly with agencies such as DNV, Lloyd's, Bureau Veritas, EIL, and CEIL."
  }
];

export default function About() {
  return (
    <div className="about-page">
      {/* Page Hero Banner */}
      <PageHero
        bgImage="/images/herosliderimg/about.jpg"
        eyebrow="ABOUT RUSHAB METAL INDUSTRIES"
        titleWhite1="ENGINEERING METALS."
        titleHighlight="INTEGRITY & QUALITY."
        titleWhite2="WORLDWIDE TRUST."
        description="ISO 9001:2015 certified exporter, importer, supplier, and stockist of ferrous and non-ferrous piping, flange, and alloy solutions based in Mumbai, India."
        primaryBtn={{ text: "EXPLORE PRODUCTS ↗", link: "/products" }}
        secondaryBtn={{ text: "OUR CERTIFICATES >", link: "/certificates" }}
        pillText="ISO 9001:2015 AUDITED // GLOBAL EXPORT FOOTPRINT"
      />

      {/* Main Corporate Overview */}
      <section className="section-py bg-white">
        <div className="container">
          <div className="about-overview-grid">
            <div className="about-overview-text">
              <div className="section-subtitle-badge align-left">
                <span className="subtitle-pulse-dot"></span>
                <span className="section-subtitle-text">COMPANY PROFILE</span>
              </div>
              <h2 className="overview-heading">
                Supplying World-Class Metal Products for World-Class Industries
              </h2>
              <p className="overview-p">
                <strong>Rushab Metal Industries (RMI)</strong> is an ISO 9001:2015 certified enterprise operating as a trusted exporter, importer, supplier, and stockist of high-integrity ferrous and non-ferrous metal products. Strategically headquartered in Mumbai, India, we cater to demanding applications in oil & gas, petrochemical refineries, chemical processing plants, thermal and nuclear power generation, and heavy fabrication.
              </p>
              <p className="overview-p">
                Our portfolio spans pipes, tubes, butt weld fittings, forged fittings, flanges, fasteners, sheets, plates, coils, industrial valves, wire mesh, and certified lifting materials. We maintain robust buffer stocks of standard sizes while also offering precision custom manufacturing tailored to the exact metallurgical and mechanical specifications of our clients.
              </p>

              <div className="motto-callout-box">
                <p className="motto-quote">
                  "{siteConfig.motto}"
                </p>
                <span className="motto-author">— Rushab Metal Industries Quality Promise</span>
              </div>

              <div className="about-cta-row">
                <Button to="/products" variant="primary" size="md" icon={<FiArrowRight />}>
                  Explore Product Range
                </Button>
                <Button to="/certificates" variant="secondary" size="md" icon={<FiAward />}>
                  Review Quality Standards
                </Button>
              </div>
            </div>

            <div className="about-overview-media">
              <div className="media-card-stack">
                <img
                  src="/images/products/sheets-plates.jpg"
                  alt="Rushab Metal Industries Warehouse Stock"
                  className="about-stack-img-main"
                  loading="lazy"
                />
                <div className="about-stack-floating-card">
                  <FiShield className="floating-card-icon" />
                  <div>
                    <strong>ISO 9001:2015 Certified</strong>
                    <p>IAF & JAS-ANZ Accreditation Documented in Brochure</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supply & Manufacturing Capabilities */}
      <section className="section-py bg-light-steel">
        <div className="container">
          <SectionTitle
            subtitle="Core Operational Scope"
            title="Our Supply & Inventory Capabilities"
            description="Built to support fast-track industrial turnarounds and long-term capital EPC contracts with verified inventory."
            align="center"
          />

          <div className="capabilities-pillars-grid">
            {supplyPillars.map((item, idx) => (
              <div key={idx} className="pillar-card">
                <div className="pillar-num">0{idx + 1}</div>
                <h4 className="pillar-title">{item.title}</h4>
                <p className="pillar-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Philosophy: Vision & Mission */}
      <section className="section-py bg-white">
        <div className="container">
          <div className="philosophy-grid">
            <div className="philosophy-card">
              <div className="phi-icon-box"><FiTarget /></div>
              <h3 className="phi-title">Our Business Focus</h3>
              <p className="phi-text">
                To serve as a dependable, single-source exporter and stockist across all ferrous and non-ferrous metallurgy, providing verified traceability, competitive pricing, and zero-defect deliveries to our clients in India and worldwide.
              </p>
            </div>

            <div className="philosophy-card">
              <div className="phi-icon-box"><FiHeart /></div>
              <h3 className="phi-title">Client-Centric Philosophy</h3>
              <p className="phi-text">
                We believe that every supply is the foundation of a long-term commercial relationship. Our commitment continues long past shipment through responsive documentation, technical consultation, and dependable aftermarket support.
              </p>
            </div>

            <div className="philosophy-card">
              <div className="phi-icon-box"><FiEye /></div>
              <h3 className="phi-title">Quality Commitment</h3>
              <p className="phi-text">
                Strict adherence to international standards including ASTM, ASME, API, BS, DIN, and IS, backed by Manufacturer Test Certificates (MTC) and mandatory third-party inspection readiness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Action CTA */}
      <section className="about-bottom-cta section-py-sm">
        <div className="container">
          <div className="about-cta-inner">
            <div>
              <h3>Discuss Your Project Requirements With Our Metallurgical Experts</h3>
              <p>Located at 3rd Khetwadi Cross Lane, Mumbai. Prompt assistance for technical queries and quotations.</p>
            </div>
            <Button to="/contact" variant="cyan" size="lg" icon={<FiPhone />}>
              Connect With Technical Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
