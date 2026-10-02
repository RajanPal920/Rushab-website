import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import {
  FiAward,
  FiShield,
  FiFileText,
  FiCheckCircle,
  FiActivity,
  FiPhone,
  FiInfo
} from 'react-icons/fi';
import './Certificates.css';

// Third-Party Inspection Agencies from Brochure
const inspectionAgencies = [
  { name: "BaxCounsel", note: "International Inspection Agency" },
  { name: "BVIS", note: "Bureau Veritas Inspection Services" },
  { name: "CEIL", note: "Certification Engineers International Ltd" },
  { name: "DNV", note: "Det Norske Veritas" },
  { name: "Dalal", note: "Dalal Engineering & Consultants" },
  { name: "H&G", note: "Humphreys & Glasgow Consultants" },
  { name: "IRS", note: "Indian Register of Shipping" },
  { name: "IDEA", note: "Industrial Development & Engineering" },
  { name: "KPG", note: "Engineering Quality Inspection" },
  { name: "Linde", note: "Linde Engineering Quality Audit" },
  { name: "MECON", note: "MECON Limited (Govt. of India)" },
  { name: "Lloyd's", note: "Lloyd's Register of Shipping" },
  { name: "EIL", note: "Engineers India Limited" },
  { name: "TCE", note: "Tata Consulting Engineers" },
  { name: "PDIL", note: "Projects & Development India Ltd" },
  { name: "M.N. Dastur & Co.", note: "Consulting Metallurgical Engineers" },
  { name: "Bureau Veritas", note: "Global Testing & Inspection Body" },
  { name: "DPG", note: "Inspection Services" }
];

const testingProcedures = [
  {
    title: "Chemical Composition Spectrometry",
    desc: "Rigorous optical emission spectrometry (OES) verifying Carbon, Chromium, Nickel, Molybdenum, and trace elements to ASTM specification."
  },
  {
    title: "Mechanical Tensile & Yield Testing",
    desc: "Universal testing machine measurement of ultimate tensile strength, 0.2% yield offset, and percentage elongation."
  },
  {
    title: "Hardness Verification",
    desc: "Rockwell (HRB / HRC) and Brinell hardness testing on base metal, heat-affected zone (HAZ), and weld seams."
  },
  {
    title: "Hydrostatic Pressure Testing",
    desc: "Internal water pressurization up to designated ANSI test pressures for leak detection and integrity under hydraulic stress."
  },
  {
    title: "Non-Destructive Testing (NDT)",
    desc: "Ultrasonic Testing (UT), Magnetic Particle Inspection (MPI), Liquid Penetrant Testing (LPT), and Radiography on request."
  },
  {
    title: "Positive Material Identification (PMI)",
    desc: "Portable XRF alloy analyzer scanning before container stuffing ensuring 100% grade authenticity."
  }
];

export default function Certificates() {
  return (
    <div className="certificates-page">
      {/* Page Header */}
      <section className="page-hero-banner">
        <div className="container">
          <div className="page-hero-content">
            <span className="page-hero-tag">ASSURED METALLURGY</span>
            <h1 className="page-hero-title">Quality & Certifications</h1>
            <p className="page-hero-subtitle">
              ISO 9001:2015 certified quality management, EN 10204 3.1 Manufacturer Test Certificates, and independent third-party inspection coordination.
            </p>
          </div>
        </div>
      </section>

      {/* Main ISO Framework Overview */}
      <section className="section-py bg-white">
        <div className="container">
          <div className="iso-overview-grid">
            <div className="iso-text-content">
              <div className="section-subtitle-badge align-left">
                <span className="subtitle-pulse-dot"></span>
                <span className="section-subtitle-text">MANAGEMENT STANDARD</span>
              </div>
              <h2 className="iso-heading">ISO 9001:2015 Certified System</h2>
              <p className="iso-p">
                Rushab Metal Industries operates under a certified ISO 9001:2015 Quality Management System governing our operations as an exporter, importer, supplier, and stockist of ferrous and non-ferrous metal products.
              </p>
              <p className="iso-p">
                Every procurement, stocking, cutting, and export shipment adheres strictly to standardized quality assurance procedures, ensuring that materials dispatched from our Mumbai facility match the designated ASTM, ASME, API, and DIN standards.
              </p>

              <div className="accreditation-notice-card">
                <FiInfo className="anc-icon" />
                <div>
                  <strong>Brochure Accreditation Marks:</strong>
                  <p>
                    Our company brochure visually displays IAF and JAS-ANZ accreditation marks. Official registration numbers, certifying body details, and certificate validity dates are verified and furnished directly on official commercial documentation.
                  </p>
                </div>
              </div>
            </div>

            <div className="iso-badge-visual-col">
              <div className="iso-framed-card">
                <div className="iso-emblem-circle">
                  <FiAward className="iso-huge-icon" />
                </div>
                <h3 className="iso-card-title">ISO 9001:2015</h3>
                <span className="iso-card-subtitle">Quality Management System</span>
                <div className="iso-points-list">
                  <div className="iso-pt">
                    <FiCheckCircle className="pt-icon" />
                    <span>Total Material Traceability by Heat Number</span>
                  </div>
                  <div className="iso-pt">
                    <FiCheckCircle className="pt-icon" />
                    <span>Standardized Warehouse Handling & Storage</span>
                  </div>
                  <div className="iso-pt">
                    <FiCheckCircle className="pt-icon" />
                    <span>Pre-Dispatch Calibration & Inspection</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Test Certificates & Lab Reports */}
      <section className="section-py bg-light-steel">
        <div className="container">
          <SectionTitle
            subtitle="Documentation & Traceability"
            title="Material Test Certificates (MTC)"
            description="Complete documentation accompanying every single dispatch, ensuring full transparency of metallurgical properties."
            align="center"
          />

          <div className="cert-types-grid">
            <div className="cert-type-card">
              <div className="cert-card-icon"><FiFileText /></div>
              <h4>Manufacturer Test Certificate (EN 10204 3.1)</h4>
              <p>
                Standard mill certificate issued by the manufacturing mill's authorized inspection representative, confirming chemical composition and mechanical test properties compliant with governing ASTM/ASME specifications.
              </p>
              <span className="cert-meta-tag">Included With Every Supply</span>
            </div>

            <div className="cert-type-card">
              <div className="cert-card-icon"><FiShield /></div>
              <h4>Government-Approved Laboratory Test Certificates</h4>
              <p>
                Independent testing carried out at recognized and government-accredited metallurgical laboratories for tensile, yield, impact (Charpy V-notch), intergranular corrosion (IGC), and microstructural examination.
              </p>
              <span className="cert-meta-tag">Available Upon Request</span>
            </div>

            <div className="cert-type-card">
              <div className="cert-card-icon"><FiActivity /></div>
              <h4>Third-Party Inspection Certificate (EN 10204 3.2)</h4>
              <p>
                Tri-party certified report endorsed by an independent third-party inspection agency (e.g. Lloyd's, DNV, BV, EIL) witnessing testing, heat number stamping, and dimensional conformance before dispatch.
              </p>
              <span className="cert-meta-tag">Coordinated On Demand</span>
            </div>
          </div>
        </div>
      </section>

      {/* Laboratory Testing Procedures */}
      <section className="section-py bg-white">
        <div className="container">
          <SectionTitle
            subtitle="Metallurgical Quality Control"
            title="Laboratory Testing Capabilities"
            description="Standard test procedures conducted on piping, fittings, flanges, and raw bars."
            align="center"
          />

          <div className="testing-grid">
            {testingProcedures.map((proc, i) => (
              <div key={i} className="test-proc-card">
                <span className="test-proc-num">0{i + 1}</span>
                <h4 className="test-proc-title">{proc.title}</h4>
                <p className="test-proc-desc">{proc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Third Party Agencies Grid */}
      <section className="section-py bg-light-steel">
        <div className="container">
          <SectionTitle
            subtitle="Independent Verification Bodies"
            title="Third-Party Inspection Agencies Mentioned in Our Brochure"
            description="Our supplies can be inspected, stamped, and verified by client-nominated international and domestic inspection bodies."
            align="center"
          />

          <div className="agencies-detailed-grid">
            {inspectionAgencies.map((agency, i) => (
              <div key={i} className="agency-detailed-card">
                <div className="agency-card-dot"></div>
                <div>
                  <h4 className="agency-card-name">{agency.name}</h4>
                  <span className="agency-card-note">{agency.note}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="agency-disclaimer-box">
            <p>
              <strong>Important Brochure Reference Disclaimer:</strong> The agencies listed above reflect third-party inspection authorities documented in the Rushab Metal Industries brochure. Inspection services are coordinated according to individual client purchase orders and specification requirements. This listing does not imply exclusive contracts or continuous partnerships with each agency.
            </p>
          </div>
        </div>
      </section>

      {/* Request Inspection CTA */}
      <section className="section-py-sm bg-white">
        <div className="container">
          <div className="cert-cta-card">
            <div>
              <h3>Require Third-Party Stamping or EN 10204 3.2 MTC for Your Project?</h3>
              <p>Contact our quality assurance desk in Mumbai to specify your required testing agency and inspection witness hold-points.</p>
            </div>
            <Button to="/contact" variant="primary" size="lg" icon={<FiPhone />}>
              Inquire for Inspection Clearance
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
