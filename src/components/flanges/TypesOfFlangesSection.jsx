import React from "react";
import { Link } from "react-router-dom";
import { flangeTypesDatabase, getFlangeTypeUrl } from "../../data/flangeTypesData";
import { FiArrowRight, FiShield, FiSliders } from "react-icons/fi";
import "./TypesOfFlangesSection.css";

export default function TypesOfFlangesSection({ currentMaterialSlug = "", currentVariantTitle = "" }) {
  return (
    <section className="section-py types-of-flanges-section bg-light-steel" id="types-of-flanges">
      <div className="container">
        {/* Section Header */}
        <div className="flanges-section-header">
          <div className="flanges-header-left">
            <span className="flanges-eyebrow-pill">
              <FiShield className="pill-shield-icon" /> ASME B16.5 / B16.47 / MSS SP SPECTRUM
            </span>
            <h2 className="flanges-section-heading">
              Types of Flanges {currentVariantTitle ? `— ${currentVariantTitle}` : "Manufactured & Supplied"}
            </h2>
            <p className="flanges-section-desc">
              Rishabh Metal Industries manufactures and stocks all 12 standardized ASME & EN flange configurations.
              Click any flange type below to inspect detailed dimensional tables, working principles, pressure-temperature ratings, and alloy specifications.
            </p>
          </div>
          <div className="flanges-header-infographic-preview">
            <div className="infographic-badge-box">
              <span className="info-badge-label">OFFICIAL CONFIGURATION CHART</span>
              <img
                src="/images/products/types-of-flanges.png"
                alt="Types of Flanges Technical Chart"
                className="infographic-mini-thumb"
                loading="lazy"
              />
              <span className="info-chart-caption">12 Standard Industrial Types</span>
            </div>
          </div>
        </div>

        {/* 12 Flange Types Grid */}
        <div className="flange-types-grid">
          {flangeTypesDatabase.map((flange) => {
            const detailUrl = getFlangeTypeUrl(flange.slug, currentMaterialSlug);
            return (
              <Link
                key={flange.id}
                to={detailUrl}
                className="flange-type-card"
                title={`View ${flange.name} technical specifications`}
              >
                <div className="flange-card-top">
                  <span className="flange-code-badge">{flange.diagramName}</span>
                  <span className="flange-std-mini">{flange.standards.split(",")[0]}</span>
                </div>

                <h3 className="flange-card-title">{flange.name}</h3>

                <p className="flange-card-desc">{flange.shortDescription}</p>

                <div className="flange-card-meta">
                  <div className="flange-meta-row">
                    <span className="meta-label">Ratings:</span>
                    <span className="meta-value">150# to 2500#</span>
                  </div>
                  <div className="flange-meta-row">
                    <span className="meta-label">Sizes:</span>
                    <span className="meta-value">{flange.sizeRange.split(" (")[0]}</span>
                  </div>
                </div>

                <div className="flange-card-action">
                  <span className="action-text">Detailed Specs & Dimensions</span>
                  <FiArrowRight className="action-arrow" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom Assurance Bar */}
        <div className="flanges-assurance-bar">
          <div className="assurance-item">
            <FiSliders className="assur-icon" />
            <span>Facing Options: Raised Face (RF), Flat Face (FF), Ring Type Joint (RTJ), Tongue & Groove (T&G)</span>
          </div>
          <div className="assurance-item">
            <FiShield className="assur-icon" />
            <span>Supplied with 100% PMI Spectro Inspection and EN 10204 3.1 Mill Test Certification</span>
          </div>
        </div>
      </div>
    </section>
  );
}
