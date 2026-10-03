// src/pages/VariantDetails.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import productsData from "../data/products.json";
import {
  getVariantBySlug,
  getVariantsByProduct,
} from "../data/productVariants";
import { siteConfig } from "../data/siteConfig";
import Button from "../components/Button";
import {
  FiCheckCircle,
  FiFileText,
  FiShield,
  FiSend,
  FiBox,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import "./VariantDetails.css";

// Helper: Convert camelCase to Title Case
const formatLabel = (key) =>
  key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (s) => s.toUpperCase())
    .trim();

export default function VariantDetails() {
  const { slug, variantSlug } = useParams();

  const product = productsData.find((p) => p.slug === slug);
  const variant = getVariantBySlug(slug, variantSlug);
  const allVariants = getVariantsByProduct(slug);

  if (!product || !variant) {
    return (
      <div className="variant-not-found section-py container">
        <h2>Variant Not Found</h2>
        <p>The requested product variant could not be located.</p>
        <Button to={`/products/${slug}`} variant="primary">
          Back to {product?.title || "Product"}
        </Button>
      </div>
    );
  }

  // Related variants (exclude current)
  const relatedVariants = allVariants
    .filter((v) => v.slug !== variantSlug)
    .slice(0, 4);

  // WhatsApp
  const waText = encodeURIComponent(
    `Hello Rushab Metal Industries, I want to inquire about "${variant.title}" (${variant.standards || ""}). Please share quotation and availability.`,
  );
  const waUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${waText}`;

  // ✅ Convert technicalSpecs object → array of {label, value}
  const specsArray = variant.technicalSpecs
    ? Object.entries(variant.technicalSpecs).map(([key, value]) => ({
        label: formatLabel(key),
        value,
      }))
    : [];

  return (
    <div className="variant-details-page">
      {/* Breadcrumb */}
      <div className="details-breadcrumb-bar">
        <div className="container">
          <nav className="breadcrumb-nav">
            <Link to="/" className="bc-link">
              Home
            </Link>
            <span className="bc-sep">/</span>
            <Link to="/products" className="bc-link">
              Products
            </Link>
            <span className="bc-sep">/</span>
            <Link to={`/products/${slug}`} className="bc-link">
              {product.title}
            </Link>
            <span className="bc-sep">/</span>
            <span className="bc-current">{variant.title}</span>
          </nav>
        </div>
      </div>

      {/* Main Details */}
      <section className="section-py-sm bg-white">
        <div className="container">
          <div className="product-main-grid">
            <div className="product-gallery-col">
              <div className="main-image-display">
                <img
                  src={variant.image}
                  alt={variant.title}
                  className="product-featured-img"
                />
                <div className="image-std-badge">
                  <span className="badge-dot"></span>
                  {variant.materialGroup}
                </div>
              </div>

              <div className="gallery-trust-badges">
                <div className="trust-badge-item">
                  <FiShield className="t-icon" />
                  <span>ISO 9001:2015 Traceability</span>
                </div>
                <div className="trust-badge-item">
                  <FiFileText className="t-icon" />
                  <span>MTC EN 10204 3.1</span>
                </div>
                <div className="trust-badge-item">
                  <FiBox className="t-icon" />
                  <span>Seaworthy Export Packing</span>
                </div>
              </div>
            </div>

            <div className="product-info-col">
              <div className="product-meta-header">
                <span className="p-category-pill">{variant.materialGroup}</span>
                <span className="p-type-pill">{product.type}</span>
              </div>

              <h1 className="p-details-title">{variant.title}</h1>
              <p className="p-details-subtitle">{variant.shortDescription}</p>

              <div className="p-description-block">
                <p>{variant.overview}</p>
              </div>

              {/* Standards */}
              {variant.standards && (
                <div className="p-sizes-section">
                  <h4 className="p-sub-heading">Applicable Standards:</h4>
                  <p className="sizes-text-highlight">{variant.standards}</p>
                </div>
              )}

              {/* Supply Forms */}
              {variant.supplyForms && variant.supplyForms.length > 0 && (
                <div className="p-materials-section">
                  <h4 className="p-sub-heading">Supply Forms:</h4>
                  <div className="materials-badge-grid">
                    {variant.supplyForms.map((form, i) => (
                      <span key={i} className="mat-badge-tag">
                        {form}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Grades */}
              {variant.grades && variant.grades.length > 0 && (
                <div className="p-materials-section">
                  <h4 className="p-sub-heading">Available Grades:</h4>
                  <div className="materials-badge-grid">
                    {variant.grades.map((grade, i) => (
                      <span key={i} className="mat-badge-tag">
                        {grade}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="p-cta-actions-row">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wa-inquiry-action-btn"
                >
                  <FaWhatsapp className="btn-icon-wa" />
                  <span>Inquire on WhatsApp</span>
                </a>
                <a href="/contact" className="quote-inquiry-action-btn">
                  <FiSend className="btn-icon-rfq" />
                  <span>Request Quote</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      {specsArray.length > 0 && (
        <section className="section-py bg-light-steel">
          <div className="container">
            <h2 className="specs-section-title">Technical Specifications</h2>
            <div className="specs-table-card">
              <table className="industrial-spec-table">
                <tbody>
                  {specsArray.map((s, i) => (
                    <tr key={i}>
                      <td className="spec-label-col">{s.label}</td>
                      <td className="spec-value-col">{s.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* Standards Compliance */}
      {variant.standardsCompliance &&
        variant.standardsCompliance.length > 0 && (
          <section className="section-py bg-white">
            <div className="container">
              <h2 className="specs-section-title">Standards Compliance</h2>
              <ul className="grades-list" style={{ marginTop: "1rem" }}>
                {variant.standardsCompliance.map((s, i) => (
                  <li key={i}>
                    <FiCheckCircle className="grade-check-icon" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

      {/* Additional Info: Manufacturing, Pressure, Tolerance, Certifications */}
      {(variant.manufacturingType ||
        variant.pressureRating ||
        variant.tolerance ||
        variant.certifications) && (
        <section className="section-py bg-light-steel">
          <div className="container">
            <h2 className="specs-section-title">
              Manufacturing & Quality Parameters
            </h2>
            <div className="specs-table-card" style={{ marginTop: "1rem" }}>
              <table className="industrial-spec-table">
                <tbody>
                  {variant.manufacturingType && (
                    <tr>
                      <td className="spec-label-col">Manufacturing Type</td>
                      <td className="spec-value-col">
                        {variant.manufacturingType}
                      </td>
                    </tr>
                  )}
                  {variant.pressureRating && (
                    <tr>
                      <td className="spec-label-col">Pressure Rating</td>
                      <td className="spec-value-col">
                        {variant.pressureRating}
                      </td>
                    </tr>
                  )}
                  {variant.tolerance && (
                    <tr>
                      <td className="spec-label-col">Tolerance</td>
                      <td className="spec-value-col">{variant.tolerance}</td>
                    </tr>
                  )}
                  {variant.certifications && (
                    <tr>
                      <td className="spec-label-col">Certifications</td>
                      <td className="spec-value-col">
                        {variant.certifications}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* Industry Applications */}
      {variant.industryApplications &&
        variant.industryApplications.length > 0 && (
          <section className="section-py bg-white">
            <div className="container">
              <h2 className="specs-section-title">Industry Applications</h2>
              <ul className="grades-list" style={{ marginTop: "1rem" }}>
                {variant.industryApplications.map((app, i) => (
                  <li key={i}>
                    <FiCheckCircle className="grade-check-icon" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

      {/* Related Variants */}
      {relatedVariants.length > 0 && (
        <section className="section-py bg-light-steel">
          <div className="container">
            <h3 className="related-variants-title">
              Other {product.title} Variants
            </h3>
            <div className="variants-grid">
              {relatedVariants.map((v) => (
                <Link
                  key={v.slug}
                  to={`/products/${slug}/${v.slug}`}
                  className="variant-card"
                >
                  <div className="variant-card-image">
                    <img src={v.image} alt={v.title} loading="lazy" />
                  </div>
                  <div className="variant-card-body">
                    <span className="variant-card-grade">
                      {v.materialGroup}
                    </span>
                    <h4 className="variant-card-title">{v.title}</h4>
                    <p className="variant-card-subtitle">
                      {v.shortDescription}
                    </p>
                    <span className="variant-card-cta">VIEW DETAILS →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
