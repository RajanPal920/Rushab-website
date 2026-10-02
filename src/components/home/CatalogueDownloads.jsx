import React from 'react';
import {
  FaFilePdf,
  FaDownload,
  FaExternalLinkAlt,
  FaCheckCircle,
  FaBookOpen,
  FaShieldAlt,
  FaLayerGroup,
  FaAward
} from 'react-icons/fa';
import { siteConfig } from '../../data/siteConfig';
import './CatalogueDownloads.css';

export default function CatalogueDownloads() {
  const { brochure, productCatalogue } = siteConfig.catalogues;

  return (
    <section className="catalogue-downloads-section" id="catalogue-downloads">
      <div className="container">
        {/* Section Header */}
        <div className="catalogue-section-header">
          <div className="catalogue-pill-badge">
            <FaBookOpen className="cpb-icon" />
            <span>OFFICIAL TECHNICAL LITERATURE</span>
          </div>
          <h2 className="catalogue-main-title">
            Download Product Catalogue & Corporate Brochure
          </h2>
          <p className="catalogue-main-desc">
            Get instant access to authentic engineering schedules, dimensional charts, ASTM/ASME specifications, and verified company quality certifications in high-resolution PDF format.
          </p>
        </div>

        {/* Dual Catalogue Download Cards */}
        <div className="catalogue-cards-grid">
          {/* Card 1: Company Brochure */}
          <div className="catalogue-card brochure-card">
            <div className="catalogue-card-badge">
              <span className="cc-badge-text">{brochure.badge}</span>
              <span className="cc-format-tag"><FaFilePdf /> {brochure.size}</span>
            </div>

            <div className="catalogue-card-content">
              <div className="catalogue-icon-wrap brochure-icon">
                <FaAward />
              </div>

              <div className="catalogue-text-wrap">
                <span className="catalogue-doc-code">DOCUMENT REF: RMI-BR-2026</span>
                <h3 className="catalogue-card-title">{brochure.title}</h3>
                <p className="catalogue-card-subtitle">{brochure.subtitle}</p>
                <p className="catalogue-card-desc">{brochure.description}</p>
              </div>

              <ul className="catalogue-features-list">
                <li>
                  <FaCheckCircle className="cf-check" />
                  <span>ISO 9001:2015 audited corporate capabilities & infrastructure</span>
                </li>
                <li>
                  <FaCheckCircle className="cf-check" />
                  <span>Third-party inspection agencies listing (TUV, DNV, Lloyd's, BV, SGS)</span>
                </li>
                <li>
                  <FaCheckCircle className="cf-check" />
                  <span>Scope of 21 verified industrial sectors & international export markets</span>
                </li>
                <li>
                  <FaCheckCircle className="cf-check" />
                  <span>Quality assurance protocol & material test certification (MTC) standards</span>
                </li>
              </ul>
            </div>

            <div className="catalogue-actions-row">
              <a
                href={brochure.url}
                download="Rushab_Metal_Industries_Brochure.pdf"
                className="catalogue-btn primary-download"
                title="Download Rushab Metal Industries Brochure PDF"
              >
                <FaDownload />
                <span>Download Brochure (PDF)</span>
              </a>
              <a
                href={brochure.url}
                target="_blank"
                rel="noopener noreferrer"
                className="catalogue-btn secondary-preview"
                title="Preview Brochure in Browser"
              >
                <FaExternalLinkAlt />
                <span>Preview</span>
              </a>
            </div>
          </div>

          {/* Card 2: Product Technical Catalogue */}
          <div className="catalogue-card technical-card">
            <div className="catalogue-card-badge">
              <span className="cc-badge-text">{productCatalogue.badge}</span>
              <span className="cc-format-tag"><FaFilePdf /> {productCatalogue.size}</span>
            </div>

            <div className="catalogue-card-content">
              <div className="catalogue-icon-wrap technical-icon">
                <FaLayerGroup />
              </div>

              <div className="catalogue-text-wrap">
                <span className="catalogue-doc-code">CATALOGUE REF: RMI-TECH-CAT-2026</span>
                <h3 className="catalogue-card-title">{productCatalogue.title}</h3>
                <p className="catalogue-card-subtitle">{productCatalogue.subtitle}</p>
                <p className="catalogue-card-desc">{productCatalogue.description}</p>
              </div>

              <ul className="catalogue-features-list">
                <li>
                  <FaCheckCircle className="cf-check" />
                  <span>Pipes & Tubes dimensional tables (Seamless, ERW, EFW, Welded)</span>
                </li>
                <li>
                  <FaCheckCircle className="cf-check" />
                  <span>Butt weld & forged fittings dimensional charts (Elbows, Tees, Reducers)</span>
                </li>
                <li>
                  <FaCheckCircle className="cf-check" />
                  <span>Flanges ratings (Class 150 to 2500, WNRF, SORF, BLRF, Spectacle)</span>
                </li>
                <li>
                  <FaCheckCircle className="cf-check" />
                  <span>ASTM / ASME / DIN standard grades, wall thickness schedules & weights</span>
                </li>
              </ul>
            </div>

            <div className="catalogue-actions-row">
              <a
                href={productCatalogue.url}
                download="Rushab_Metal_Industries_Technical_Catalogue.pdf"
                className="catalogue-btn primary-download"
                title="Download Rushab Metal Industries Product Catalogue PDF"
              >
                <FaDownload />
                <span>Download Catalogue (PDF)</span>
              </a>
              <a
                href={productCatalogue.url}
                target="_blank"
                rel="noopener noreferrer"
                className="catalogue-btn secondary-preview"
                title="Preview Product Catalogue in Browser"
              >
                <FaExternalLinkAlt />
                <span>Preview</span>
              </a>
            </div>
          </div>
        </div>

        {/* Quick Technical Assistance Banner */}
        <div className="catalogue-bottom-notice">
          <div className="cbn-left">
            <FaShieldAlt className="cbn-icon" />
            <p>
              <strong>Need a Printed Hard Copy or Custom Technical Submittal?</strong> Our engineering team prepares project-specific compliance binders, MTCs, and Mill Test Packages on request.
            </p>
          </div>
          <a href="/contact" className="cbn-btn">
            Request Custom Submittal
          </a>
        </div>
      </div>
    </section>
  );
}
