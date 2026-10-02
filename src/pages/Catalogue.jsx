import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaFilePdf,
  FaDownload,
  FaExternalLinkAlt,
  FaBookOpen,
  FaCheckCircle,
  FaShieldAlt,
  FaLayerGroup,
  FaEye,
  FaTimes,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowRight
} from 'react-icons/fa';
import { siteConfig } from '../data/siteConfig';
import PageHero from '../components/common/PageHero';
import './Catalogue.css';

export default function Catalogue() {
  const { brochure, productCatalogue } = siteConfig.catalogues;
  const [activePreview, setActivePreview] = useState(null); // 'brochure' | 'product' | null

  return (
    <div className="catalogue-page">
      {/* 1. Page Hero Banner */}
      <PageHero
        bgImage="/images/herosliderimg/img3.jpg"
        eyebrow="AUTHENTIC TECHNICAL LITERATURE"
        titleWhite1="OFFICIAL COMPANY"
        titleHighlight="PRODUCT CATALOGUES."
        titleWhite2="DIRECT DOWNLOAD."
        description="Download high-resolution official PDF documentation including engineering dimensional tables, ASTM/ASME standards, ISO 9001:2015 quality scopes, and complete mill capabilities."
        primaryBtn={{ text: "EXPLORE PRODUCTS ↗", link: "/products" }}
        secondaryBtn={{ text: "GET IN TOUCH >", link: "/contact" }}
        pillText="OFFICIAL PDF DOWNLOADS // PRINT & HIGH-RES"
      />

      {/* 2. Main Downloads Grid */}
      <section className="section-py bg-light-steel">
        <div className="container">
          <div className="catalogue-main-grid">
            {/* Card 1: Product Technical Catalogue */}
            <div className="cat-detail-card highlight-card">
              <div className="cat-card-header">
                <div className="cat-type-pill tech">
                  <FaLayerGroup />
                  <span>Technical Handbook</span>
                </div>
                <span className="cat-size-pill">
                  <FaFilePdf /> {productCatalogue.size} PDF
                </span>
              </div>

              <div className="cat-card-body">
                <h2 className="cat-doc-title">{productCatalogue.title}</h2>
                <p className="cat-doc-lead">{productCatalogue.subtitle}</p>
                <p className="cat-doc-desc">{productCatalogue.description}</p>

                <div className="cat-scope-box">
                  <h3 className="cat-scope-title">Key Content Included:</h3>
                  <ul className="cat-scope-list">
                    <li><FaCheckCircle className="csc-icon" /> <strong>Pipes & Tubes:</strong> Seamless, ERW, EFW, Welded in Austenitic, Super Austenitic, Duplex & Inconel</li>
                    <li><FaCheckCircle className="csc-icon" /> <strong>Butt Weld Fittings:</strong> Long Radius / Short Radius Elbows, Equal & Reducing Tees, Reducers, Caps</li>
                    <li><FaCheckCircle className="csc-icon" /> <strong>Forged Fittings:</strong> 2000#, 3000#, 6000#, 9000# Socket Weld & Screwed BSP/NPT Fittings</li>
                    <li><FaCheckCircle className="csc-icon" /> <strong>Flanges:</strong> ASME B16.5 / B16.47 Weld Neck, Slip On, Blind, Socket Weld, Lap Joint, Threaded (150# to 2500#)</li>
                    <li><FaCheckCircle className="csc-icon" /> <strong>Dimensional Charts:</strong> Schedules 5S through XXS, OD/ID tolerances & nominal pipe weights</li>
                    <li><FaCheckCircle className="csc-icon" /> <strong>Standards:</strong> ASTM A312, A213, A269, A182, A403, A234, B16.9, B16.11, B16.5</li>
                  </ul>
                </div>
              </div>

              <div className="cat-card-footer">
                <a
                  href={productCatalogue.url}
                  download="Rushab_Metal_Industries_Technical_Catalogue.pdf"
                  className="cat-action-btn primary"
                >
                  <FaDownload />
                  <span>Download Catalogue ({productCatalogue.size})</span>
                </a>
                <a
                  href={productCatalogue.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cat-action-btn secondary"
                >
                  <FaExternalLinkAlt />
                  <span>Open in Tab</span>
                </a>
                <button
                  type="button"
                  className="cat-action-btn preview"
                  onClick={() => setActivePreview('product')}
                >
                  <FaEye />
                  <span>Quick Preview</span>
                </button>
              </div>
            </div>

            {/* Card 2: Company Brochure */}
            <div className="cat-detail-card">
              <div className="cat-card-header">
                <div className="cat-type-pill corporate">
                  <FaBookOpen />
                  <span>Corporate Profile</span>
                </div>
                <span className="cat-size-pill">
                  <FaFilePdf /> {brochure.size} PDF
                </span>
              </div>

              <div className="cat-card-body">
                <h2 className="cat-doc-title">{brochure.title}</h2>
                <p className="cat-doc-lead">{brochure.subtitle}</p>
                <p className="cat-doc-desc">{brochure.description}</p>

                <div className="cat-scope-box">
                  <h3 className="cat-scope-title">Key Content Included:</h3>
                  <ul className="cat-scope-list">
                    <li><FaCheckCircle className="csc-icon" /> <strong>Company Profile:</strong> Vision, management motto, and 45+ years of combined metallurgical expertise</li>
                    <li><FaCheckCircle className="csc-icon" /> <strong>Quality System:</strong> ISO 9001:2015 certification scope and IAF / JAS-ANZ accreditation references</li>
                    <li><FaCheckCircle className="csc-icon" /> <strong>Inspection Agencies:</strong> Third-party inspection verification (TUV, DNV, Lloyd's, BV, SGS, IRS)</li>
                    <li><FaCheckCircle className="csc-icon" /> <strong>Global Footprint:</strong> Worldwide supply across 52+ countries across Gulf, Europe, Americas & Asia</li>
                    <li><FaCheckCircle className="csc-icon" /> <strong>21 Industrial Sectors:</strong> Oil & gas, chemical, petrochemical, aerospace, marine, defense, & nuclear</li>
                    <li><FaCheckCircle className="csc-icon" /> <strong>Testing & MTC:</strong> Hydrostatic, PMI spectro, ultrasonic, radiography & EN 10204 3.1 certification</li>
                  </ul>
                </div>
              </div>

              <div className="cat-card-footer">
                <a
                  href={brochure.url}
                  download="Rushab_Metal_Industries_Brochure.pdf"
                  className="cat-action-btn primary"
                >
                  <FaDownload />
                  <span>Download Brochure ({brochure.size})</span>
                </a>
                <a
                  href={brochure.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cat-action-btn secondary"
                >
                  <FaExternalLinkAlt />
                  <span>Open in Tab</span>
                </a>
                <button
                  type="button"
                  className="cat-action-btn preview"
                  onClick={() => setActivePreview('brochure')}
                >
                  <FaEye />
                  <span>Quick Preview</span>
                </button>
              </div>
            </div>
          </div>

          {/* Technical Compliance & Hard Copy Request Banner */}
          <div className="catalogue-inquiry-box">
            <div className="cib-content">
              <span className="cib-badge"><FaShieldAlt /> CUSTOM ENGINEERING SUBMITTAL</span>
              <h3 className="cib-title">Need Hard Copies or Customized Project Binders?</h3>
              <p className="cib-text">
                For tenders, EPC contractors, and bulk procurement submittals, our engineering office provides hard-bound product binders, original Mill Test Certificates (EN 10204 Type 3.1 / 3.2), and vendor registration dossiers.
              </p>
              <div className="cib-contact-links">
                <a href={siteConfig.phoneHref} className="cib-link">
                  <FaPhoneAlt /> {siteConfig.phone}
                </a>
                <a href={siteConfig.emailHref} className="cib-link">
                  <FaEnvelope /> {siteConfig.email}
                </a>
              </div>
            </div>
            <div className="cib-action">
              <Link to="/contact" className="cib-btn">
                <span>Request Custom Dossier</span>
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PDF In-Page Preview Modal */}
      {activePreview && (
        <div className="pdf-modal-backdrop" onClick={() => setActivePreview(null)}>
          <div className="pdf-modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="pdf-modal-header">
              <div className="pmh-title">
                <FaFilePdf className="pmh-icon" />
                <span>
                  {activePreview === 'brochure' ? brochure.title : productCatalogue.title}
                </span>
              </div>
              <div className="pmh-actions">
                <a
                  href={activePreview === 'brochure' ? brochure.url : productCatalogue.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pmh-open-tab"
                >
                  <FaExternalLinkAlt /> Full Screen
                </a>
                <button
                  type="button"
                  className="pmh-close-btn"
                  onClick={() => setActivePreview(null)}
                  aria-label="Close Preview"
                >
                  <FaTimes />
                </button>
              </div>
            </div>
            <div className="pdf-modal-body">
              <iframe
                src={activePreview === 'brochure' ? brochure.url : productCatalogue.url}
                title="PDF Document Preview"
                className="pdf-iframe-view"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
