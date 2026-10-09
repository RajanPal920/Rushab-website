import React, { useState, useEffect, useMemo } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  getFlangeTypeBySlug,
  getAllFlangeTypes,
  getFlangeTypeUrl
} from "../data/flangeTypesData";
import { siteConfig } from "../data/siteConfig";
import { setCanonicalUrl } from "../utils/seoSlugUtils";
import {
  FiCheckCircle,
  FiXCircle,
  FiShield,
  FiFileText,
  FiBox,
  FiSliders,
  FiArrowRight,
  FiArrowLeft,
  FiLayers,
  FiCpu
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import "./FlangeTypeDetails.css";

const MATERIAL_MAP = {
  carbon: "carbon-steel",
  "carbon-steel": "carbon-steel",
  stainless: "stainless-steel",
  "stainless-steel": "stainless-steel",
  duplex: "duplex-steel",
  "duplex-steel": "duplex-steel",
  "super-duplex": "super-duplex-steel",
  "super-duplex-steel": "super-duplex-steel",
  alloy: "alloy-steel",
  "alloy-steel": "alloy-steel",
  nickel: "nickel-alloy",
  "nickel-alloy": "nickel-alloy"
};

export default function FlangeTypeDetails() {
  const { typeSlug, materialSlug } = useParams();
  const navigate = useNavigate();

  const flange = useMemo(() => {
    return getFlangeTypeBySlug(typeSlug);
  }, [typeSlug]);

  const initialMaterial = useMemo(() => {
    if (materialSlug && MATERIAL_MAP[materialSlug.toLowerCase()]) {
      return MATERIAL_MAP[materialSlug.toLowerCase()];
    }
    return "all";
  }, [materialSlug]);

  const [activeMaterial, setActiveMaterial] = useState(initialMaterial);

  useEffect(() => {
    if (materialSlug && MATERIAL_MAP[materialSlug.toLowerCase()]) {
      setActiveMaterial(MATERIAL_MAP[materialSlug.toLowerCase()]);
    } else {
      setActiveMaterial("all");
    }
  }, [materialSlug]);

  // Update SEO Document Title & Canonical
  useEffect(() => {
    if (flange) {
      let pageTitle = `${flange.name} Manufacturer & Exporter India — ASME B16.5`;
      let metaDesc = flange.shortDescription;

      if (activeMaterial !== "all") {
        const matObj = flange.materials.find((m) => m.slug === activeMaterial);
        if (matObj) {
          pageTitle = `${matObj.materialGroup} ${flange.name} — ASME B16.5 Dimensions & Specs | Rishabh Metal`;
          metaDesc = `${matObj.materialGroup} ${flange.name} supplied in ${matObj.grades.join(", ")}. Full MTC EN 10204 3.1 & PMI.`;
        }
      }

      document.title = pageTitle;

      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", metaDesc);
      }

      const canonicalPath =
        activeMaterial !== "all"
          ? `/flanges/${activeMaterial}/${flange.slug}`
          : `/flanges/${flange.slug}`;
      setCanonicalUrl(canonicalPath);
    }
  }, [flange, activeMaterial]);

  if (!flange) {
    return (
      <div className="flange-not-found section-py container">
        <h2>Flange Type Not Found</h2>
        <p>The requested industrial flange specification could not be located in our ASME catalog.</p>
        <Link to="/products/flanges-manufacture-in-india" className="btn btn-primary">
          Back to Industrial Flanges
        </Link>
      </div>
    );
  }

  // Active material details
  const currentMaterialData =
    activeMaterial !== "all"
      ? flange.materials.find((m) => m.slug === activeMaterial)
      : null;

  // WhatsApp Inquiry URL
  const materialLabel = currentMaterialData ? currentMaterialData.materialGroup : "All Alloys";
  const waText = encodeURIComponent(
    `Hello Rishabh Metal Industries, I am inquiring about "${materialLabel} ${flange.name}" (${flange.standards}). Please share dimension catalog and quotation.`
  );
  const waUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${waText}`;

  // Related flange types (exclude current)
  const relatedFlanges = getAllFlangeTypes().filter((f) => f.id !== flange.id).slice(0, 4);

  const handleMaterialTabClick = (slug) => {
    setActiveMaterial(slug);
    if (slug === "all") {
      navigate(`/flanges/${flange.slug}`);
    } else {
      navigate(`/flanges/${slug}/${flange.slug}`);
    }
  };

  return (
    <div className="flange-details-page">
      {/* Breadcrumb Navigation */}
      <div className="details-breadcrumb-bar">
        <div className="container">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link to="/" className="bc-link">Home</Link>
            <span className="bc-sep">/</span>
            <Link to="/products" className="bc-link">Products</Link>
            <span className="bc-sep">/</span>
            <Link to="/products/flanges-manufacture-in-india" className="bc-link">Industrial Flanges</Link>
            {currentMaterialData && (
              <>
                <span className="bc-sep">/</span>
                <span className="bc-link">{currentMaterialData.materialGroup}</span>
              </>
            )}
            <span className="bc-sep">/</span>
            <span className="bc-current">{flange.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero Overview Section */}
      <section className="section-py-sm bg-white flange-hero-section">
        <div className="container">
          <div className="flange-main-grid">
            {/* Left Column: Visual & Trust */}
            <div className="flange-visual-col">
              <div className="flange-hero-image-card">
                <img
                  src={flange.heroImage}
                  alt={`${flange.name} Technical Diagram`}
                  className="flange-hero-img"
                />
                <div className="flange-diagram-tag">
                  <span className="dot-active"></span>
                  DIAGRAM TYPE: {flange.diagramName}
                </div>
              </div>

              <div className="gallery-trust-badges">
                <div className="trust-badge-item">
                  <FiShield className="t-icon" />
                  <span>ISO 9001:2015 Traceability</span>
                </div>
                <div className="trust-badge-item">
                  <FiFileText className="t-icon" />
                  <span>MTC EN 10204 3.1 Supplied</span>
                </div>
                <div className="trust-badge-item">
                  <FiBox className="t-icon" />
                  <span>Seaworthy Export Packing</span>
                </div>
              </div>

              {/* Quick Spec Highlights Box */}
              <div className="flange-quick-highlights-box">
                <h4 className="quick-box-title">Manufacturing Envelope</h4>
                <div className="quick-spec-item">
                  <span className="qs-label">Primary Standards:</span>
                  <span className="qs-val">{flange.standards}</span>
                </div>
                <div className="quick-spec-item">
                  <span className="qs-label">Pressure Ratings:</span>
                  <span className="qs-val">{flange.pressureClasses}</span>
                </div>
                <div className="quick-spec-item">
                  <span className="qs-label">Nominal Size Range:</span>
                  <span className="qs-val">{flange.sizeRange}</span>
                </div>
                <div className="quick-spec-item">
                  <span className="qs-label">Facing Configurations:</span>
                  <span className="qs-val">{flange.facingTypes}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Title, Overview, Actions */}
            <div className="flange-info-col">
              <div className="flange-meta-badge-row">
                <span className="badge-flange-code">{flange.code}</span>
                <span className="badge-std-pill">ASME B16.5 / B16.47</span>
                {currentMaterialData && (
                  <span className="badge-mat-pill">{currentMaterialData.materialGroup}</span>
                )}
              </div>

              <h1 className="flange-page-title">
                {currentMaterialData ? `${currentMaterialData.materialGroup} ` : ""}
                {flange.name}
              </h1>
              <p className="flange-page-subtitle">{flange.shortDescription}</p>

              <div className="flange-overview-body">
                <p>{flange.overview}</p>
              </div>

              {/* Working Principle Callout */}
              <div className="working-principle-card">
                <div className="wp-header">
                  <FiCpu className="wp-icon" />
                  <h3 className="wp-title">Working Principle & Stress Distribution</h3>
                </div>
                <p className="wp-text">{flange.workingPrinciple}</p>
              </div>

              {/* Key Design Characteristics */}
              <div className="design-features-block">
                <h3 className="df-title">Design & Engineering Characteristics</h3>
                <ul className="df-list">
                  {flange.designCharacteristics.map((char, idx) => (
                    <li key={idx}>
                      <FiCheckCircle className="df-check-icon" />
                      <span>{char}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flange-cta-row">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wa-inquiry-action-btn"
                >
                  <FaWhatsapp className="btn-icon-wa" />
                  <span>Inquire on WhatsApp</span>
                </a>
                <Link to="/contact" className="quote-inquiry-action-btn">
                  <FiArrowRight className="btn-icon-rfq" />
                  <span>Request Engineering Quote</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Material Separation & Specifics Section */}
      <section className="section-py bg-light-steel" id="material-variants">
        <div className="container">
          <div className="section-header-compact">
            <span className="sub-title-accent">MATERIAL SEPARATION & METALLURGY</span>
            <h2 className="section-title">
              Available Materials for {flange.name}
            </h2>
            <p className="section-description">
              Select a material below to view verified chemical, mechanical, and pressure specifications for this flange configuration.
            </p>
          </div>

          {/* Material Switcher Tabs */}
          <div className="material-tabs-strip">
            <button
              type="button"
              className={`mat-tab-btn ${activeMaterial === "all" ? "active" : ""}`}
              onClick={() => handleMaterialTabClick("all")}
            >
              All Alloys
            </button>
            {flange.materials.map((mat) => (
              <button
                key={mat.slug}
                type="button"
                className={`mat-tab-btn ${activeMaterial === mat.slug ? "active" : ""}`}
                onClick={() => handleMaterialTabClick(mat.slug)}
              >
                {mat.materialGroup}
              </button>
            ))}
          </div>

          {/* Material Details Cards */}
          <div className="materials-breakdown-grid">
            {flange.materials
              .filter((m) => activeMaterial === "all" || m.slug === activeMaterial)
              .map((mat) => (
                <div key={mat.slug} className="material-spec-card">
                  <div className="mat-card-header">
                    <h3 className="mat-name-title">{mat.materialGroup} {flange.name}</h3>
                    <span className="mat-tag-pill">{mat.slug.toUpperCase()}</span>
                  </div>

                  <p className="mat-highlight-desc">{mat.highlights}</p>

                  <div className="mat-grades-listing">
                    <span className="mat-grades-label">Verified ASTM / ASME Grades:</span>
                    <div className="mat-badges-row">
                      {mat.grades.map((g, idx) => (
                        <span key={idx} className="mat-spec-grade-badge">
                          {g}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mat-card-bottom">
                    <span className="mat-standard-note">
                      Compliance: Full Mill Test Certificate EN 10204 3.1 & 100% Spectro PMI Included
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Technical Dimensions Table Section */}
      <section className="section-py bg-white">
        <div className="container">
          <div className="section-header-compact">
            <span className="sub-title-accent">ASME B16.5 SPECIFICATION MATRIX</span>
            <h2 className="section-title">Standard Dimensions (Class 150 / 300)</h2>
            <p className="section-description">
              Standard dimensional parameters for {flange.name} conforming to ASME B16.5. Other pressure ratings (Class 600, 900, 1500, 2500) available upon request.
            </p>
          </div>

          <div className="specs-table-card">
            <div className="specs-table-responsive">
              <table className="industrial-spec-table">
                <thead>
                  <tr>
                    <th>Nominal Pipe Size (NPS)</th>
                    <th>Flange Outer Dia (OD)</th>
                    <th>Flange Thickness (C)</th>
                    <th>Bolt Circle Dia (BCD)</th>
                    <th>Bolt Holes & Diameter</th>
                    <th>Raised Face Dia</th>
                  </tr>
                </thead>
                <tbody>
                  {flange.dimensionsTable.map((row, i) => (
                    <tr key={i}>
                      <td className="spec-label-col"><strong>{row.nps}</strong></td>
                      <td className="spec-value-col">{row.od}</td>
                      <td className="spec-value-col">{row.thk}</td>
                      <td className="spec-value-col">{row.bcd}</td>
                      <td className="spec-value-col">{row.holes}</td>
                      <td className="spec-value-col">{row.raisedFaceDia}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages vs Limitations Section */}
      <section className="section-py bg-light-steel">
        <div className="container">
          <div className="section-header-compact">
            <span className="sub-title-accent">ENGINEERING EVALUATION</span>
            <h2 className="section-title">Advantages & Design Considerations</h2>
          </div>

          <div className="comparison-two-col">
            <div className="evaluation-card advantages-card">
              <div className="eval-header">
                <FiCheckCircle className="eval-icon green" />
                <h3 className="eval-title">Engineering Advantages</h3>
              </div>
              <ul className="eval-list">
                {flange.advantages.map((adv, idx) => (
                  <li key={idx}>
                    <FiCheckCircle className="bullet-icon green" />
                    <span>{adv}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="evaluation-card limitations-card">
              <div className="eval-header">
                <FiXCircle className="eval-icon amber" />
                <h3 className="eval-title">Design Limitations & Guidelines</h3>
              </div>
              <ul className="eval-list">
                {flange.limitations.map((lim, idx) => (
                  <li key={idx}>
                    <FiXCircle className="bullet-icon amber" />
                    <span>{lim}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Applications & Industries */}
      <section className="section-py bg-white">
        <div className="container">
          <div className="section-header-compact">
            <span className="sub-title-accent">SECTOR DEPLOYMENT</span>
            <h2 className="section-title">Typical Industrial Applications</h2>
          </div>

          <div className="applications-badge-grid">
            {flange.typicalApplications.map((app, idx) => (
              <div key={idx} className="application-item-card">
                <FiLayers className="app-icon" />
                <span className="app-text">{app}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Flange Types Grid */}
      <section className="section-py bg-light-steel">
        <div className="container">
          <div className="section-header-compact">
            <span className="sub-title-accent">COMPLETE RANGE</span>
            <h2 className="section-title">Related ASME Flange Configurations</h2>
            <p className="section-description">
              Explore companion flange configurations manufactured by Rishabh Metal Industries.
            </p>
          </div>

          <div className="related-flanges-grid">
            {relatedFlanges.map((rel) => (
              <Link
                key={rel.id}
                to={getFlangeTypeUrl(rel.slug, activeMaterial !== "all" ? activeMaterial : "")}
                className="related-flange-card"
              >
                <div className="rel-card-badge">{rel.diagramName}</div>
                <h4 className="rel-card-title">{rel.name}</h4>
                <p className="rel-card-desc">{rel.shortDescription}</p>
                <span className="rel-card-cta">
                  View Specifications <FiArrowRight className="inline-arrow" />
                </span>
              </Link>
            ))}
          </div>

          <div className="back-to-flanges-wrap">
            <Link to="/products/flanges-manufacture-in-india" className="btn-back-link">
              <FiArrowLeft /> Back to Industrial Flanges Catalog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
