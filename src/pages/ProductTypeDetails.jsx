// src/pages/ProductTypeDetails.jsx
// LEVEL 3: Individual Product Type Detail Page
// Implements complete hierarchy: Category (L1) -> Material (L2) -> Product Type (L3) -> Grade Cards (L4) -> Grade Details (L5)

import React, { useState, useEffect, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import {
  getCatalogueProduct,
  getCatalogueMaterial,
  getCatalogueType,
  buildHierarchyBreadcrumbs,
  cleanSlug
} from "../data/productCatalogueData.js";
import { getFlangeTypeBySlug } from "../data/flangeTypesData.js";
import { findGradeDefinition, getGradeUrl } from "../data/gradesData.js";
import { siteConfig } from "../data/siteConfig";
import { setCanonicalUrl } from "../utils/seoSlugUtils.js";
import {
  FiCheckCircle,
  FiShield,
  FiFileText,
  FiBox,
  FiLayers,
  FiArrowRight,
  FiArrowLeft,
  FiSend,
  FiInfo
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import "./ProductTypeDetails.css";

export default function ProductTypeDetails() {
  const { categorySlug, materialSlug, typeSlug } = useParams();

  // 1. Resolve Category, Material, and Type
  const category = useMemo(() => {
    return getCatalogueProduct(categorySlug);
  }, [categorySlug]);

  const material = useMemo(() => {
    if (!category) return null;
    return getCatalogueMaterial(category.slug, materialSlug);
  }, [category, materialSlug]);

  const type = useMemo(() => {
    if (!category || !material) return null;
    // Check in productCatalogueData
    const foundType = getCatalogueType(category.slug, material.slug, typeSlug);
    if (foundType) return foundType;

    // Check if it's a flange in flangeTypesData
    if (category.slug === "flanges") {
      const flange = getFlangeTypeBySlug(typeSlug);
      if (flange) {
        return {
          ...flange,
          materialContext: material.name,
          image: flange.heroImage || material.image
        };
      }
    }
    return null;
  }, [category, material, typeSlug]);

  // If flange type has dedicated dimensional tables or extra specs
  const flangeData = useMemo(() => {
    if (category?.slug === "flanges" || typeSlug?.includes("flange")) {
      return getFlangeTypeBySlug(typeSlug);
    }
    return null;
  }, [category, typeSlug]);

  // 2. Resolve Applicable Grades for LEVEL 4 (Clickable Grade Cards)
  const resolvedGrades = useMemo(() => {
    const gradeSlugs = [];

    // Combine from type.applicableGrades and material.grades
    if (type?.applicableGrades && Array.isArray(type.applicableGrades)) {
      gradeSlugs.push(...type.applicableGrades);
    }
    if (material?.grades && Array.isArray(material.grades)) {
      gradeSlugs.push(...material.grades);
    }

    // Deduplicate and resolve definitions
    const seen = new Set();
    const list = [];

    for (const raw of gradeSlugs) {
      const gDef = findGradeDefinition(raw);
      if (gDef && !seen.has(gDef.id)) {
        seen.add(gDef.id);
        list.push({
          ...gDef,
          displayBadge: raw
        });
      } else if (!seen.has(raw)) {
        // Fallback placeholder card for valid industrial grade string
        seen.add(raw);
        list.push({
          id: cleanSlug(raw),
          slug: cleanSlug(raw),
          name: raw,
          shortName: raw,
          category: material?.name || "Industrial Alloy",
          overview: `Verified metallurgical grade ${raw} formulated for ${category?.title || "industrial applications"}. Fully certified per ASME / ASTM specifications.`,
          displayBadge: raw
        });
      }
    }

    return list;
  }, [type, material, category]);

  // 3. Related Types in the same material family
  const relatedTypes = useMemo(() => {
    if (!material?.types) return [];
    return material.types
      .filter((t) => t.slug !== type?.slug)
      .slice(0, 4);
  }, [material, type]);

  // 4. RFQ Form State
  const [quoteForm, setQuoteForm] = useState({
    name: "",
    email: "",
    phone: "",
    quantity: "",
    spec: "",
    message: ""
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // 5. Update SEO Meta & Canonical URL
  useEffect(() => {
    if (type && material && category) {
      const pageTitle = `${material.name} ${type.name} Manufacturer & Stockist India — ${category.title}`;
      const metaDesc = `Rishabh Metal Industries manufactures and exports ${material.name} ${type.name}. Conforming to ${type.standards || category.std || "ASME / ASTM"}. Tested with 100% PMI and EN 10204 3.1 MTC.`;

      document.title = pageTitle;

      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", metaDesc);
      }

      setCanonicalUrl(
        `/products/${category.slug}-manufacture-in-india/${material.slug}/${type.slug}`
      );
    }
  }, [category, material, type]);

  // Form Change Handler
  const handleFormChange = (e) => {
    setQuoteForm({ ...quoteForm, [e.target.name]: e.target.value });
  };

  // RFQ Submission -> WhatsApp
  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    const waMsg = `*NEW RFQ — ${material?.name} ${type?.name}*
━━━━━━━━━━━━━━━━━━━━
*Product Family:* ${category?.title}
*Material:* ${material?.name}
*Type / Configuration:* ${type?.name}
*Standards:* ${type?.standards || "ASME / ASTM"}
━━━━━━━━━━━━━━━━━━━━
*Client Name:* ${quoteForm.name}
*Email:* ${quoteForm.email}
*Phone / WA:* ${quoteForm.phone}
*Requirement / Qty:* ${quoteForm.quantity || "N/A"}
*Specifications / Notes:*
${quoteForm.message || "Please provide competitive price and dispatch schedule."}
━━━━━━━━━━━━━━━━━━━━
*Source Page:* ${window.location.href}`;

    window.open(
      `https://wa.me/919969884597?text=${encodeURIComponent(waMsg)}`,
      "_blank"
    );
    setFormSubmitted(true);
  };

  // Fallback if not found
  if (!category || !material || !type) {
    return (
      <div className="product-type-page">
        <div className="section-py container" style={{ textAlign: "center" }}>
          <h2>Product Specification Not Found</h2>
          <p style={{ color: "#64748b", margin: "1rem 0 2rem" }}>
            The requested product configuration could not be located in our current catalog.
          </p>
          <Link
            to={category ? `/products/${category.slug}-manufacture-in-india` : "/products"}
            className="quote-inquiry-action-btn"
          >
            <FiArrowLeft /> Return to {category?.title || "Products Catalog"}
          </Link>
        </div>
      </div>
    );
  }

  // Active Image
  const activeImage = type.image || type.heroImage || material.image || category.heroImage;

  // WhatsApp quick URL
  const waProductText = encodeURIComponent(
    `Hello Rishabh Metal Industries, I am inquiring about "${material.name} ${type.name}" (${type.standards || "ASME / ASTM"}). Please share technical datasheet and quotation.`
  );
  const waProductUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${waProductText}`;

  // Breadcrumbs
  const breadcrumbs = buildHierarchyBreadcrumbs({ category, material, type });

  return (
    <div className="product-type-page">
      {/* Breadcrumb Bar */}
      <div className="details-breadcrumb-bar">
        <div className="container">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && <span className="bc-sep">/</span>}
                {idx === breadcrumbs.length - 1 ? (
                  <span className="bc-current">{crumb.label}</span>
                ) : (
                  <Link to={crumb.url} className="bc-link">
                    {crumb.label}
                  </Link>
                )}
              </React.Fragment>
            ))}
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="type-hero-section">
        <div className="container">
          <div className="type-main-grid">
            {/* Left Visual Column */}
            <div className="type-visual-col">
              <div className="type-image-card">
                <img
                  src={activeImage}
                  alt={`${material.name} ${type.name}`}
                  className="type-featured-img"
                  loading="eager"
                />
                <div className="type-badge-overlay">
                  <span className="badge-dot"></span>
                  <span>{type.standards ? type.standards.split(",")[0] : category.std.split(" / ")[0]}</span>
                </div>
              </div>

              <div className="gallery-trust-badges">
                <div className="trust-badge-item">
                  <FiShield className="t-icon" />
                  <span>ISO 9001:2015 Traceability & Certification</span>
                </div>
                <div className="trust-badge-item">
                  <FiFileText className="t-icon" />
                  <span>MTC EN 10204 3.1 Supplied with All Orders</span>
                </div>
                <div className="trust-badge-item">
                  <FiBox className="t-icon" />
                  <span>100% PMI Spectro Tested & Seaworthy Export Packing</span>
                </div>
              </div>
            </div>

            {/* Right Information Column */}
            <div className="type-info-col">
              <div className="type-meta-badges">
                <span className="p-category-pill">{category.title}</span>
                <span className="p-material-pill">{material.name}</span>
                {type.standards && <span className="p-std-pill">{type.standards.split(",")[0]}</span>}
              </div>

              <h1 className="type-page-title">
                {material.name} {type.name}
              </h1>

              <p className="type-page-subtitle">
                {type.shortDescription || material.shortDescription}
              </p>

              <div className="type-overview-prose">
                <p>
                  {type.overview ||
                    `${type.name} manufactured from premium ${material.name} engineered for high-integrity piping installations across severe pressure, cryogenic, and aggressive chemical processing environments.`}
                </p>
              </div>

              {/* Quick Specs Grid */}
              <div className="type-quick-spec-grid">
                <div className="quick-spec-item">
                  <span className="spec-q-label">Applicable Standards</span>
                  <span className="spec-q-val">{type.standards || category.std || "ASME / ASTM"}</span>
                </div>
                <div className="quick-spec-item">
                  <span className="spec-q-label">Size Range / NPS</span>
                  <span className="spec-q-val">{type.sizeRange || "1/8\" NB to 48\" NB"}</span>
                </div>
                <div className="quick-spec-item">
                  <span className="spec-q-label">Pressure Rating</span>
                  <span className="spec-q-val">{type.pressureClasses || "Class 150# to 2500# / Sch 10 to Sch XXS"}</span>
                </div>
                <div className="quick-spec-item">
                  <span className="spec-q-label">Material Metallurgy</span>
                  <span className="spec-q-val">{material.name}</span>
                </div>
              </div>

              {/* Call to Actions */}
              <div className="type-cta-actions-row">
                <a
                  href={waProductUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wa-inquiry-action-btn"
                >
                  <FaWhatsapp style={{ fontSize: "1.2rem" }} />
                  <span>Inquire on WhatsApp</span>
                </a>
                <a href="#rfq-section" className="quote-inquiry-action-btn">
                  <FiSend />
                  <span>Request Written Quotation</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Construction Details & Working Principle (if available) */}
      {(type.workingPrinciple || type.designCharacteristics) && (
        <section className="section-py bg-white">
          <div className="container">
            <div className="section-header-compact">
              <span className="sub-title-accent">ENGINEERING SPECIFICATION</span>
              <h2 className="section-title">Design Characteristics & Working Principle</h2>
              <p className="section-description">
                Engineered for maximum reliability and structural integrity in critical industrial installations.
              </p>
            </div>

            {type.workingPrinciple && (
              <div style={{ maxWidth: "860px", margin: "0 auto 2rem auto", lineHeight: "1.7", color: "#334155" }}>
                <p>{type.workingPrinciple}</p>
              </div>
            )}

            {type.designCharacteristics && (
              <div className="eng-bullets-grid">
                {type.designCharacteristics.map((char, idx) => (
                  <div key={idx} className="eng-bullet-card">
                    <FiCheckCircle className="eb-icon" />
                    <span className="eb-text">{char}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* LEVEL 4: CLICKABLE GRADE CARDS */}
      <section className="section-py bg-light-steel" id="available-grades">
        <div className="container">
          <div className="section-header-compact">
            <span className="sub-title-accent">LEVEL 4 METALLURGY</span>
            <h2 className="section-title">
              Available Grades for {material.name} {type.name}
            </h2>
            <p className="section-description">
              Rishabh Metal Industries manufactures and stocks {type.name} in all verified grades listed below.
              Click any grade card to inspect its full chemical composition, mechanical properties, and ASTM / ASME specifications.
            </p>
          </div>

          <div className="grades-catalogue-grid">
            {resolvedGrades.map((g, idx) => {
              // Build link to Level 5 Grade Detail Page
              const gradeDetailUrl = `/products/${category.slug}-manufacture-in-india/${material.slug}/${type.slug}/${g.slug || g.id}`;

              return (
                <Link
                  key={idx}
                  to={gradeDetailUrl}
                  className="grade-catalogue-card"
                  title={`View chemical composition & properties for ${g.name}`}
                >
                  <div className="gcc-top">
                    <span className="gcc-badge">{g.displayBadge || g.name}</span>
                    {g.pren && <span className="gcc-pren">PREN {g.pren}</span>}
                  </div>

                  <h3 className="gcc-title">{g.name}</h3>
                  <div className="gcc-sub">{g.uns || g.category || material.name}</div>

                  <p className="gcc-desc">
                    {g.overview ? g.overview.slice(0, 110) + "..." : `Verified ${g.name} metallurgical specification for ${type.name}.`}
                  </p>

                  <div className="gcc-action">
                    <span>Inspect Grade Dossier</span>
                    <FiArrowRight className="gcc-arrow" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* TECHNICAL SPECIFICATIONS TABLE */}
      <section className="section-py bg-white">
        <div className="container">
          <div className="section-header-compact">
            <span className="sub-title-accent">STANDARDS & DIMENSIONS</span>
            <h2 className="section-title">Technical Specifications & Manufacturing Parameters</h2>
            <p className="section-description">
              Strict compliance with international piping codes and dimensional standards.
            </p>
          </div>

          <div className="specs-table-card">
            <table className="industrial-spec-table">
              <tbody>
                <tr>
                  <td className="spec-label-col">Product Category</td>
                  <td className="spec-value-col">{category.title}</td>
                </tr>
                <tr>
                  <td className="spec-label-col">Configuration / Type</td>
                  <td className="spec-value-col">{type.name}</td>
                </tr>
                <tr>
                  <td className="spec-label-col">Base Material Metallurgy</td>
                  <td className="spec-value-col">{material.name}</td>
                </tr>
                <tr>
                  <td className="spec-label-col">Applicable Standards</td>
                  <td className="spec-value-col">{type.standards || category.std || "ASME B16.5, ASME B16.47, DIN EN 1092-1, MSS SP"}</td>
                </tr>
                <tr>
                  <td className="spec-label-col">Standard Size Range</td>
                  <td className="spec-value-col">{type.sizeRange || "1/2\" to 48\" (DN 15 to DN 1200)"}</td>
                </tr>
                <tr>
                  <td className="spec-label-col">Pressure Ratings / Schedules</td>
                  <td className="spec-value-col">{type.pressureClasses || "Class 150, 300, 600, 900, 1500, 2500 / PN 6 to PN 400 / Sch 10 to XXS"}</td>
                </tr>
                {type.facingTypes && (
                  <tr>
                    <td className="spec-label-col">Facing / End Connection</td>
                    <td className="spec-value-col">{type.facingTypes}</td>
                  </tr>
                )}
                <tr>
                  <td className="spec-label-col">Manufacturing Technique</td>
                  <td className="spec-value-col">Closed-Die Forging, Hot Extrusion, Precision CNC Machining, Solution Annealed</td>
                </tr>
                <tr>
                  <td className="spec-label-col">Inspection & Testing</td>
                  <td className="spec-value-col">100% Positive Material Identification (PMI Spectro), Hydrostatic Testing, Ultrasonic Examination, Radiography (RT)</td>
                </tr>
                <tr>
                  <td className="spec-label-col">Documentation & Certification</td>
                  <td className="spec-value-col">EN 10204 3.1 Mill Test Certificate (MTC), NACE MR0175 / ISO 15156 Compliance, IBR Approval (on request)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* DIMENSIONAL DATA (For Flanges) */}
      {flangeData?.dimensionsTable && flangeData.dimensionsTable.length > 0 && (
        <section className="section-py bg-light-steel">
          <div className="container">
            <div className="section-header-compact">
              <span className="sub-title-accent">ASME B16.5 CLASS 150</span>
              <h2 className="section-title">{type.name} Dimensional Reference</h2>
              <p className="section-description">
                Standard ASME B16.5 Class 150 raised face dimensional tolerances in millimetres and inches.
              </p>
            </div>

            <div className="specs-table-card table-responsive-wrapper">
              <table className="industrial-spec-table">
                <thead>
                  <tr>
                    <th>Nominal Pipe Size (NPS)</th>
                    <th>Outer Diameter (OD)</th>
                    <th>Thickness (thk)</th>
                    <th>Bolt Circle Dia (BCD)</th>
                    <th>Bolt Holes (No. x Dia)</th>
                    <th>Raised Face / Hub Dia</th>
                  </tr>
                </thead>
                <tbody>
                  {flangeData.dimensionsTable.map((row, idx) => (
                    <tr key={idx}>
                      <td style={{ fontWeight: "700" }}>{row.nps}</td>
                      <td>{row.od}</td>
                      <td>{row.thk}</td>
                      <td>{row.bcd}</td>
                      <td>{row.holes}</td>
                      <td>{row.raisedFaceDia || row.hubDia || "Standard"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* RELATED TYPES GRID */}
      {relatedTypes.length > 0 && (
        <section className="section-py bg-white">
          <div className="container">
            <div className="section-header-compact">
              <span className="sub-title-accent">OTHER CONFIGURATIONS</span>
              <h2 className="section-title">Other {material.name} Configurations in {category.title}</h2>
              <p className="section-description">
                Explore adjacent product types and industrial forms available in our manufacturing inventory.
              </p>
            </div>

            <div className="related-types-grid">
              {relatedTypes.map((rt, idx) => (
                <Link
                  key={idx}
                  to={`/products/${category.slug}-manufacture-in-india/${material.slug}/${rt.slug}`}
                  className="related-type-card"
                >
                  <img
                    src={rt.image || activeImage}
                    alt={rt.name}
                    className="rtc-img"
                    loading="lazy"
                  />
                  <div className="rtc-body">
                    <h3 className="rtc-title">{rt.name}</h3>
                    <p className="rtc-desc">{rt.shortDescription || `Standard ${rt.name} manufactured in ${material.name}.`}</p>
                    <span className="rtc-link-text">
                      View Specs & Grades <FiArrowRight />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* RFQ ENQUIRY SECTION */}
      <section className="section-py bg-light-steel" id="rfq-section">
        <div className="container">
          <div className="type-rfq-box">
            <div className="section-header-compact" style={{ marginBottom: "1.75rem" }}>
              <span className="sub-title-accent">OFFICIAL QUOTATION</span>
              <h2 className="section-title">Request Quotation for {material.name} {type.name}</h2>
              <p className="section-description">
                Submit your project specifications or bill of materials below. Our metallurgical sales engineering team responds within 24 hours with certified technical pricing.
              </p>
            </div>

            {formSubmitted ? (
              <div style={{ textAlign: "center", padding: "2rem", background: "#ecfdf5", borderRadius: "8px", border: "1px solid #10b981" }}>
                <FiCheckCircle style={{ fontSize: "2.5rem", color: "#10b981", marginBottom: "0.5rem" }} />
                <h3 style={{ color: "#065f46" }}>Quotation Request Submitted Successfully!</h3>
                <p style={{ color: "#047857" }}>
                  Your inquiry has been forwarded to our technical dispatch team. We will review your MTC and schedule requirements promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleQuoteSubmit}>
                <div className="rfq-form-grid">
                  <div className="rfq-input-group">
                    <label>Full Name / Company Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. John Doe / Apex Engineering"
                      value={quoteForm.name}
                      onChange={handleFormChange}
                    />
                  </div>

                  <div className="rfq-input-group">
                    <label>Corporate Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="e.g. procurement@apexeng.com"
                      value={quoteForm.email}
                      onChange={handleFormChange}
                    />
                  </div>

                  <div className="rfq-input-group">
                    <label>Phone / WhatsApp Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 98765 43210"
                      value={quoteForm.phone}
                      onChange={handleFormChange}
                    />
                  </div>

                  <div className="rfq-input-group">
                    <label>Estimated Quantity / Pieces</label>
                    <input
                      type="text"
                      name="quantity"
                      placeholder="e.g. 50 pcs / 1.5 MT"
                      value={quoteForm.quantity}
                      onChange={handleFormChange}
                    />
                  </div>
                </div>

                <div className="rfq-input-group" style={{ marginBottom: "1.25rem" }}>
                  <label>Specific Grade, Size, Wall Thickness / Schedules, or Project Standards</label>
                  <textarea
                    name="message"
                    rows="3"
                    placeholder={`e.g. Required in ${material.name}, Class 300 RF, ASTM standards, NACE MR0175 required with 3.1 MTC.`}
                    value={quoteForm.message}
                    onChange={handleFormChange}
                  ></textarea>
                </div>

                <button type="submit" className="rfq-submit-btn">
                  <FiSend /> Send Request via Official Technical WhatsApp
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
