import React, { useMemo, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { resolveGradeSlug, gradesDatabase, findGradeDefinition } from "../data/gradesData";
import { siteConfig } from "../data/siteConfig";
import { setCanonicalUrl } from "../utils/seoSlugUtils";
import {
  getCatalogueProduct,
  getCatalogueMaterial,
  getCatalogueType
} from "../data/productCatalogueData.js";
import productsData from "../data/products.json" with { type: "json" };
import {
  FiCheckCircle,
  FiShield,
  FiFileText,
  FiBox,
  FiArrowLeft,
  FiArrowRight,
  FiLayers,
  FiActivity,
  FiExternalLink
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import "./GradeDetails.css";

export default function GradeDetails() {
  const { gradeSlug, categorySlug, materialSlug, typeSlug } = useParams();

  // Hierarchy Resolution
  const catProd = useMemo(() => {
    return categorySlug ? getCatalogueProduct(categorySlug) : null;
  }, [categorySlug]);

  const catMat = useMemo(() => {
    return catProd && materialSlug ? getCatalogueMaterial(catProd.slug, materialSlug) : null;
  }, [catProd, materialSlug]);

  const catType = useMemo(() => {
    return catProd && catMat && typeSlug ? getCatalogueType(catProd.slug, catMat.slug, typeSlug) : null;
  }, [catProd, catMat, typeSlug]);

  const resolution = useMemo(() => {
    return resolveGradeSlug(gradeSlug);
  }, [gradeSlug]);

  const grade = resolution?.grade || findGradeDefinition(gradeSlug);

  const productContextName = useMemo(() => {
    if (catType && catMat) {
      return `${catMat.name} ${catType.name}`;
    }
    if (catProd) {
      return catProd.title;
    }
    return resolution?.productContextName || "";
  }, [catType, catMat, catProd, resolution]);

  const contextPortion = resolution?.contextPortion || "";

  // Attempt to resolve parent product link from context
  const parentProduct = useMemo(() => {
    if (catProd) return catProd;
    if (!contextPortion) return null;
    const cleanCtx = contextPortion.toLowerCase();
    return (
      productsData.find((p) => cleanCtx.includes(p.slug) || p.slug.includes(cleanCtx)) ||
      null
    );
  }, [catProd, contextPortion]);

  // Set SEO Document Title, Meta Description, & Canonical URL
  useEffect(() => {
    if (grade) {
      const pageTitle = productContextName && productContextName !== "Industrial Piping & Flow Components"
        ? `${grade.name} in ${productContextName} — Chemical & Mechanical Specs | Rishabh Metal`
        : `${grade.name} (${grade.uns || grade.shortName}) Technical Specification & Properties | Rishabh Metal`;

      const metaDesc = `${grade.name} technical data sheet. Chemical composition, mechanical properties, equivalent grades, and ASME/ASTM standards for ${productContextName || "industrial piping"}.`;

      document.title = pageTitle;

      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", metaDesc);
      }

      const canonicalPath = (catProd && catMat && catType)
        ? `/products/${catProd.slug}-manufacture-in-india/${catMat.slug}/${catType.slug}/${grade.slug || grade.id}`
        : `/grades/${gradeSlug}`;
      setCanonicalUrl(canonicalPath);
    }
  }, [grade, gradeSlug, productContextName, catProd, catMat, catType]);

  if (!grade) {
    return (
      <div className="grade-not-found section-py container">
        <h2>Grade Specification Not Found</h2>
        <p>The requested metallurgical grade could not be located in our verified standards database.</p>
        <Link to="/materials" className="btn btn-primary">
          Explore Metallurgical Spectrum
        </Link>
      </div>
    );
  }

  // WhatsApp Inquiry
  const waContext = productContextName ? `for ${productContextName}` : "";
  const waText = encodeURIComponent(
    `Hello Rishabh Metal Industries, I am inquiring about grade "${grade.name}" (${grade.uns || ""}) ${waContext}. Please provide MTC specifications and availability.`
  );
  const waUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${waText}`;

  // Related grades in the same metallurgical category
  const relatedGrades = gradesDatabase
    .filter((g) => g.id !== grade.id && (g.category === grade.category || g.name.includes("Duplex") === grade.name.includes("Duplex")))
    .slice(0, 4);

  return (
    <div className="grade-details-page">
      {/* Breadcrumb Bar */}
      <div className="details-breadcrumb-bar">
        <div className="container">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link to="/" className="bc-link">Home</Link>
            <span className="bc-sep">/</span>
            <Link to="/products" className="bc-link">Products</Link>
            {catProd ? (
              <>
                <span className="bc-sep">/</span>
                <Link to={`/products/${catProd.slug}-manufacture-in-india`} className="bc-link">
                  {catProd.title}
                </Link>
                {catMat && (
                  <>
                    <span className="bc-sep">/</span>
                    <Link to={`/products/${catProd.slug}-manufacture-in-india/${catMat.slug}`} className="bc-link">
                      {catMat.name}
                    </Link>
                  </>
                )}
                {catType && (
                  <>
                    <span className="bc-sep">/</span>
                    <Link to={`/products/${catProd.slug}-manufacture-in-india/${catMat.slug}/${catType.slug}`} className="bc-link">
                      {catType.name}
                    </Link>
                  </>
                )}
              </>
            ) : (
              <>
                <span className="bc-sep">/</span>
                <Link to="/materials" className="bc-link">Materials</Link>
                {parentProduct && (
                  <>
                    <span className="bc-sep">/</span>
                    <Link to={`/products/${parentProduct.slug}-manufacture-in-india`} className="bc-link">
                      {parentProduct.title}
                    </Link>
                  </>
                )}
                {productContextName && !parentProduct && (
                  <>
                    <span className="bc-sep">/</span>
                    <span className="bc-link">{productContextName}</span>
                  </>
                )}
              </>
            )}
            <span className="bc-sep">/</span>
            <span className="bc-current">{grade.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero Overview */}
      <section className="section-py-sm bg-white grade-hero-section">
        <div className="container">
          <div className="grade-main-grid">
            {/* Left Column: Metallurgy Identity Card */}
            <div className="grade-visual-col">
              <div className="grade-identity-card">
                <div className="grade-id-badge-wrap">
                  <span className="grade-cat-tag">{grade.category}</span>
                  {grade.pren && <span className="grade-pren-badge">PREN {grade.pren}</span>}
                </div>
                <h2 className="grade-id-code">{grade.shortName || grade.name}</h2>
                <div className="grade-id-subnames">
                  {grade.uns && <span className="id-sub-pill">{grade.uns}</span>}
                  {grade.dinEnWnr && <span className="id-sub-pill">{grade.dinEnWnr}</span>}
                </div>

                <div className="grade-quick-stats-grid">
                  <div className="g-stat-box">
                    <span className="stat-label">Standards</span>
                    <span className="stat-val">{grade.primaryStandards.split(",")[0]}</span>
                  </div>
                  <div className="g-stat-box">
                    <span className="stat-label">Certification</span>
                    <span className="stat-val">EN 10204 3.1</span>
                  </div>
                  <div className="g-stat-box">
                    <span className="stat-label">Verification</span>
                    <span className="stat-val">100% Spectro PMI</span>
                  </div>
                  <div className="g-stat-box">
                    <span className="stat-label">Origin</span>
                    <span className="stat-val">Manufactured in India</span>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="gallery-trust-badges">
                <div className="trust-badge-item">
                  <FiShield className="t-icon" />
                  <span>ISO 9001:2015 Traceability</span>
                </div>
                <div className="trust-badge-item">
                  <FiFileText className="t-icon" />
                  <span>Mill Test Certificate (EN 10204 3.1)</span>
                </div>
                <div className="trust-badge-item">
                  <FiBox className="t-icon" />
                  <span>NACE MR0175 / ISO 15156 Verified</span>
                </div>
              </div>

              {/* Return to parent product link */}
              {catType && catMat && catProd ? (
                <div className="parent-return-card">
                  <span className="prc-label">Associated Product Type:</span>
                  <Link
                    to={`/products/${catProd.slug}-manufacture-in-india/${catMat.slug}/${catType.slug}`}
                    className="prc-link"
                  >
                    <FiArrowLeft /> Back to {catMat.name} {catType.name}
                  </Link>
                </div>
              ) : parentProduct ? (
                <div className="parent-return-card">
                  <span className="prc-label">Associated Product:</span>
                  <Link
                    to={`/products/${parentProduct.slug}-manufacture-in-india`}
                    className="prc-link"
                  >
                    <FiArrowLeft /> Back to {parentProduct.title}
                  </Link>
                </div>
              ) : null}
            </div>

            {/* Right Column: Title, Overview, Contextual Notes */}
            <div className="grade-info-col">
              <div className="grade-context-eyebrow">
                <FiActivity className="eyebrow-icon" />
                <span>
                  {productContextName
                    ? `SPECIFICATION IN ${productContextName.toUpperCase()}`
                    : "VERIFIED METALLURGICAL SPECIFICATION"}
                </span>
              </div>

              <h1 className="grade-page-title">
                {grade.name}
                {productContextName && ` in ${productContextName}`}
              </h1>

              <p className="grade-full-title">{grade.title}</p>

              <div className="grade-overview-prose">
                <p>{grade.overview}</p>
              </div>

              {/* Specific Contextual Application Paragraph */}
              <div className="grade-contextual-box">
                <h3 className="ctx-box-title">
                  Performance in {productContextName || "Industrial Piping & Flow Components"}
                </h3>
                <p className="ctx-box-text">
                  {grade.contextualDescription(productContextName)}
                </p>
              </div>

              {/* Key Features Bullet List */}
              <div className="grade-features-block">
                <h3 className="gf-title">Metallurgical & Mechanical Characteristics</h3>
                <ul className="gf-list">
                  {grade.keyFeatures.map((feat, idx) => (
                    <li key={idx}>
                      <FiCheckCircle className="gf-check-icon" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="grade-cta-row">
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
                  <span>Request Grade MTC & Quote</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chemical Composition Table */}
      {grade.chemicalComposition && grade.chemicalComposition.length > 0 && (
        <section className="section-py bg-light-steel">
          <div className="container">
            <div className="section-header-compact">
              <span className="sub-title-accent">VERIFIED CHEMICAL COMPOSITION</span>
              <h2 className="section-title">{grade.name} Chemical Analysis (% Weight)</h2>
              <p className="section-description">
                Verified limits according to ASTM / ASME standards. Confirmed with 100% Positive Material Identification (PMI).
              </p>
            </div>

            <div className="specs-table-card">
              <div className="specs-table-responsive">
                <table className="industrial-spec-table">
                  <thead>
                    <tr>
                      <th>Alloying Element</th>
                      <th>Minimum (%)</th>
                      <th>Maximum (%)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {grade.chemicalComposition.map((elem, i) => (
                      <tr key={i}>
                        <td className="spec-label-col"><strong>{elem.element}</strong></td>
                        <td className="spec-value-col">{elem.min}</td>
                        <td className="spec-value-col">{elem.max}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Mechanical & Physical Properties */}
      <section className="section-py bg-white">
        <div className="container">
          <div className="properties-two-col-grid">
            {/* Mechanical Properties */}
            {grade.mechanicalProperties && (
              <div className="prop-card">
                <div className="prop-card-header">
                  <span className="prop-eyebrow">MECHANICAL INTEGRITY</span>
                  <h3 className="prop-title">Mechanical Properties (Room Temp)</h3>
                </div>
                <div className="specs-table-responsive">
                  <table className="industrial-spec-table">
                    <tbody>
                      {grade.mechanicalProperties.map((mp, i) => (
                        <tr key={i}>
                          <td className="spec-label-col">{mp.property}</td>
                          <td className="spec-value-col"><strong>{mp.value}</strong></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Physical Properties */}
            {grade.physicalProperties && (
              <div className="prop-card">
                <div className="prop-card-header">
                  <span className="prop-eyebrow">PHYSICAL CONSTANTS</span>
                  <h3 className="prop-title">Physical Properties</h3>
                </div>
                <div className="specs-table-responsive">
                  <table className="industrial-spec-table">
                    <tbody>
                      {grade.physicalProperties.map((pp, i) => (
                        <tr key={i}>
                          <td className="spec-label-col">{pp.property}</td>
                          <td className="spec-value-col"><strong>{pp.value}</strong></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Equivalent Grades & International Standards */}
      {grade.equivalentGrades && grade.equivalentGrades.length > 0 && (
        <section className="section-py bg-light-steel">
          <div className="container">
            <div className="section-header-compact">
              <span className="sub-title-accent">INTERNATIONAL CROSS-REFERENCE</span>
              <h2 className="section-title">Applicable Standards & Equivalent Designations</h2>
              <p className="section-description">
                Verified international equivalents across ASTM, ASME, EN, DIN, UNS, and ISO standards for {grade.name}.
              </p>
            </div>

            <div className="specs-table-card">
              <div className="specs-table-responsive">
                <table className="industrial-spec-table">
                  <thead>
                    <tr>
                      <th>Standard Organization</th>
                      <th>Equivalent Grade Designation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {grade.equivalentGrades.map((eq, i) => (
                      <tr key={i}>
                        <td className="spec-label-col"><strong>{eq.standard}</strong></td>
                        <td className="spec-value-col">{eq.grade}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Industrial Applications & Compatible Products */}
      <section className="section-py bg-white">
        <div className="container">
          <div className="apps-products-grid">
            {/* Applications */}
            <div className="app-block-col">
              <h3 className="block-title">Typical Industrial Applications</h3>
              <ul className="grade-apps-list">
                {grade.applications.map((app, idx) => (
                  <li key={idx}>
                    <FiLayers className="app-li-icon" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Compatible Rishabh Products */}
            <div className="app-block-col">
              <h3 className="block-title">Compatible Rishabh Metal Products</h3>
              <div className="compat-products-list">
                {grade.compatibleProducts.map((prod, idx) => (
                  <div key={idx} className="compat-prod-card">
                    <FiCheckCircle className="compat-check" />
                    <span className="compat-text">{prod}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Grades in the Spectrum */}
      <section className="section-py bg-light-steel">
        <div className="container">
          <div className="section-header-compact">
            <span className="sub-title-accent">METALLURGICAL FAMILY</span>
            <h2 className="section-title">Related Alloys in this Spectrum</h2>
            <p className="section-description">
              Compare {grade.name} with alternative alloys available in Rishabh Metal Industries inventory.
            </p>
          </div>

          <div className="related-grades-grid">
            {relatedGrades.map((rg) => (
              <Link
                key={rg.id}
                to={`/grades/${rg.slug}`}
                className="related-grade-card"
              >
                <span className="rg-cat-badge">{rg.category}</span>
                <h4 className="rg-title">{rg.name}</h4>
                <p className="rg-subtitle">{rg.uns || rg.primaryStandards.split(",")[0]}</p>
                <span className="rg-cta">
                  View Metallurgy <FiArrowRight className="rg-arrow" />
                </span>
              </Link>
            ))}
          </div>

          <div className="back-navigation-row">
            {parentProduct ? (
              <Link
                to={`/products/${parentProduct.slug}-manufacture-in-india`}
                className="btn-back-link"
              >
                <FiArrowLeft /> Back to {parentProduct.title}
              </Link>
            ) : (
              <Link to="/materials" className="btn-back-link">
                <FiArrowLeft /> Back to Materials Spectrum
              </Link>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
