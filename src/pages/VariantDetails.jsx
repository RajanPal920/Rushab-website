// src/pages/VariantDetails.jsx
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import productsData from "../data/products.json";
import {
  getVariantBySlug,
  getVariantsByProduct,
} from "../data/productVariants";
import { siteConfig } from "../data/siteConfig";
import {
  getProductUrl,
  getVariantUrl,
  toProductSeoSlug,
  resolveProductOrVariant,
  resolveVariantBySlugs,
} from "../utils/seoSlugUtils";
import Button from "../components/Button";
import {
  FiCheckCircle,
  FiFileText,
  FiShield,
  FiSend,
  FiBox,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { getGradeUrl } from "../data/gradesData";
import "./VariantDetails.css";
import "./ProductDetails.css";

// Helper: Convert camelCase to Title Case
const formatLabel = (key) =>
  key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (s) => s.toUpperCase())
    .trim();

export default function VariantDetails({ resolvedProduct, resolvedVariant }) {
  const { slug, variantSlug } = useParams();

  let product = resolvedProduct;
  let variant = resolvedVariant;

  if (!product || !variant) {
    if (variantSlug) {
      const res = resolveVariantBySlugs(slug, variantSlug);
      if (res) {
        product = res.product;
        variant = res.variant;
      }
    } else if (slug) {
      const res = resolveProductOrVariant(slug);
      if (res && res.type === "variant") {
        product = res.product;
        variant = res.variant;
      }
    }
  }

  if (!product && variantSlug) {
    product = productsData.find(
      (p) => p.slug === slug || toProductSeoSlug(p) === slug,
    );
  }
  if (!variant && product && (variantSlug || slug)) {
    variant = getVariantBySlug(product.slug, variantSlug || slug);
  }

  const allVariants = product ? getVariantsByProduct(product.slug) : [];

  // Quote Form State
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [quoteForm, setQuoteForm] = useState({
    name: "",
    email: "",
    phone: "",
    quantity: "",
    specification: "",
    message: "",
  });

  const handleFormChange = (e) => {
    setQuoteForm({ ...quoteForm, [e.target.name]: e.target.value });
  };

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const waMessage = `*NEW RFQ — ${variant?.title || "Product"}*
━━━━━━━━━━━━━━━━━━━━
*Product / Subcategory:* ${variant?.title || "N/A"} (${variant?.subcategory || variant?.materialGroup || "Standard"})
*Parent Category:* ${product?.title || "Fittings & Components"}
*Standard:* ${variant?.standards || "Per Specifications"}
━━━━━━━━━━━━━━━━━━━━
*Name / Company:* ${quoteForm.name}
*Email:* ${quoteForm.email}
*Phone / WhatsApp:* ${quoteForm.phone}
*Approx Quantity / Size:* ${quoteForm.quantity || variant?.availableSizes || "N/A"}
━━━━━━━━━━━━━━━━━━━━
*Required Grade / Standard / Notes:*
${quoteForm.message || "Please provide delivery lead time, MTC confirmation, and technical quotation."}
━━━━━━━━━━━━━━━━━━━━
*Submitted From:* ${window.location.href}`;

    const waNumber = "919969884597"; // +91 99698 84597 (Sumit)
    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;

    window.open(waUrl, "_blank");

    setTimeout(() => {
      setQuoteSubmitted(true);
      setIsSubmitting(false);
      setQuoteForm({
        name: "",
        email: "",
        phone: "",
        quantity: "",
        specification: "",
        message: "",
      });
    }, 500);
  };

  if (!product || !variant) {
    return (
      <div className="variant-not-found section-py container">
        <h2>Product Variant Not Found</h2>
        <p>The requested industrial product could not be located.</p>
        <Button
          to={product ? getProductUrl(product) : "/products"}
          variant="primary"
        >
          Back to {product?.title || "Products"}
        </Button>
      </div>
    );
  }

  // Related variants (exclude current)
  const relatedVariants = allVariants
    .filter((v) => v.slug !== variant.slug)
    .slice(0, 4);

  // WhatsApp quick inquiry
  const waText = encodeURIComponent(
    `Hello Rushab Metal Industries, I want to inquire about "${variant.title}" (${variant.standards || ""}). Please share quotation and availability.`,
  );
  const waUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${waText}`;

  // Convert technicalSpecs object -> array of {label, value}
  const specsArray = variant.technicalSpecs
    ? Object.entries(variant.technicalSpecs).map(([key, value]) => ({
        label: formatLabel(key),
        value,
      }))
    : [];


  return (
    <div className="variant-details-page">
      {/* Breadcrumb Bar */}
      <div className="details-breadcrumb-bar">
        <div className="container">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link to="/" className="bc-link">
              Home
            </Link>
            <span className="bc-sep">/</span>
            <Link to="/products" className="bc-link">
              Products
            </Link>
            <span className="bc-sep">/</span>
            <Link to={getProductUrl(product)} className="bc-link">
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
            {/* Gallery Column */}
            <div className="product-gallery-col">
              <div className="main-image-display">
                <img
                  src={variant.image}
                  alt={variant.title}
                  className="product-featured-img"
                />
                <div className="image-std-badge">
                  <span className="badge-dot"></span>
                  {variant.standards ? variant.standards.split(",")[0] : variant.materialGroup}
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
            </div>

            {/* Product Information Column */}
            <div className="product-info-col">
              <div
                className="product-meta-header"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                  alignItems: "center",
                }}
              >
                {variant.subcategory && (
                  <span
                    className="p-category-pill"
                    style={{
                      background: "#0A192F",
                      color: "#38BDF8",
                      fontWeight: 700,
                    }}
                  >
                    Subcategory: {variant.subcategory}
                  </span>
                )}
                <span className="p-category-pill">
                  {variant.category || variant.materialGroup || product.title}
                </span>
                <span className="p-type-pill">{product.type}</span>
              </div>

              <h1 className="p-details-title">{variant.title}</h1>
              <p className="p-details-subtitle">{variant.shortDescription}</p>

              <div className="p-description-block">
                <p>{variant.overview}</p>
              </div>

              {/* Available Sizes & Dimensions Highlight */}
              {variant.availableSizes && (
                <div className="p-sizes-section" style={{ marginTop: "1rem" }}>
                  <h4 className="p-sub-heading">Available Sizes & Dimensions:</h4>
                  <p
                    className="sizes-text-highlight"
                    style={{
                      background: "#F8FAFC",
                      border: "1px solid #E2E8F0",
                      borderLeft: "4px solid #1B93CF",
                      padding: "0.6rem 0.9rem",
                      borderRadius: "6px",
                      margin: "0.4rem 0",
                      color: "#0A192F",
                      fontWeight: 600,
                    }}
                  >
                    {variant.availableSizes}
                  </p>
                </div>
              )}

              {/* Wall Thickness / Schedule / Pressure Class Highlight */}
              {variant.wallThickness && (
                <div className="p-sizes-section" style={{ marginTop: "0.75rem" }}>
                  <h4 className="p-sub-heading">
                    Wall Thickness / Schedule / Pressure Class:
                  </h4>
                  <p
                    className="sizes-text-highlight"
                    style={{
                      background: "#F8FAFC",
                      border: "1px solid #E2E8F0",
                      borderLeft: "4px solid #1B93CF",
                      padding: "0.6rem 0.9rem",
                      borderRadius: "6px",
                      margin: "0.4rem 0",
                      color: "#0A192F",
                      fontWeight: 600,
                    }}
                  >
                    {variant.wallThickness}
                  </p>
                </div>
              )}

              {/* Applicable Standards */}
              {variant.standards && (
                <div className="p-sizes-section" style={{ marginTop: "0.75rem" }}>
                  <h4 className="p-sub-heading">Applicable Technical Standards:</h4>
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

              {/* Available Grades (Verified) */}
              {variant.grades && variant.grades.length > 0 && (
                <div className="p-materials-section">
                  <h4 className="p-sub-heading">Verified Material Grades:</h4>
                  <div className="materials-badge-grid">
                    {variant.grades.map((grade, i) => (
                      <Link
                        key={i}
                        to={getGradeUrl(grade, product, variant)}
                        className="mat-badge-tag mat-badge-link"
                        title={`Click to view chemical composition & properties for ${grade}`}
                      >
                        {grade}
                        <span className="mat-badge-link-arrow">↗</span>
                      </Link>
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
                <a href="#variant-rfq" className="quote-inquiry-action-btn">
                  <FiSend className="btn-icon-rfq" />
                  <span>Request Written Quote</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Technical Specifications Table */}
      {specsArray.length > 0 && (
        <section className="section-py bg-light-steel">
          <div className="container">
            <h2 className="specs-section-title">
              Technical Specifications & Dimensions
            </h2>
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

      {/* Standards Compliance Section */}
      {variant.standardsCompliance &&
        variant.standardsCompliance.length > 0 && (
          <section className="section-py bg-white">
            <div className="container">
              <h2 className="specs-section-title">Standards Compliance & Codes</h2>
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

      {/* Manufacturing, Connection & Quality Parameters */}
      {(variant.manufacturingType ||
        variant.connectionType ||
        variant.surfaceFinish ||
        variant.endConnection ||
        variant.pressureRating ||
        variant.tolerance ||
        variant.certifications) && (
        <section className="section-py bg-light-steel">
          <div className="container">
            <h2 className="specs-section-title">
              Manufacturing, Connection & Quality Parameters
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
                  {variant.connectionType && (
                    <tr>
                      <td className="spec-label-col">Connection Type</td>
                      <td className="spec-value-col">
                        {variant.connectionType}
                      </td>
                    </tr>
                  )}
                  {variant.surfaceFinish && (
                    <tr>
                      <td className="spec-label-col">Surface Finish</td>
                      <td className="spec-value-col">
                        {variant.surfaceFinish}
                      </td>
                    </tr>
                  )}
                  {variant.endConnection && (
                    <tr>
                      <td className="spec-label-col">End Connection</td>
                      <td className="spec-value-col">
                        {variant.endConnection}
                      </td>
                    </tr>
                  )}
                  {variant.pressureRating && (
                    <tr>
                      <td className="spec-label-col">Pressure Rating / Class</td>
                      <td className="spec-value-col">
                        {variant.pressureRating}
                      </td>
                    </tr>
                  )}
                  {variant.tolerance && (
                    <tr>
                      <td className="spec-label-col">Dimensional Tolerance</td>
                      <td className="spec-value-col">{variant.tolerance}</td>
                    </tr>
                  )}
                  {variant.certifications && (
                    <tr>
                      <td className="spec-label-col">Testing & Certifications</td>
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
              <h2 className="specs-section-title">
                Product Applications & Industries Served
              </h2>
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

      {/* Dedicated Interactive RFQ Enquiry Form Section */}
      <section className="section-py bg-light-steel" id="variant-rfq">
        <div className="container">
          <div className="specs-section-container">
            <div
              className="rfq-header-block"
              style={{ textAlign: "center", marginBottom: "2rem" }}
            >
              <span
                style={{
                  display: "inline-block",
                  background: "rgba(27,147,207,0.12)",
                  color: "#1B93CF",
                  padding: "4px 14px",
                  borderRadius: "20px",
                  fontWeight: 700,
                  fontSize: "0.8rem",
                  letterSpacing: "0.05em",
                  marginBottom: "0.5rem",
                }}
              >
                DIRECT FACTORY QUOTATION
              </span>
              <h2 className="specs-section-title">
                Request a Quote for {variant.title}
              </h2>
              <p className="specs-section-subtitle">
                Submit your required size, schedule, and grade specifications. Our engineering sales team responds with official pricing and MTC confirmations within 2 to 4 hours.
              </p>
            </div>

            {quoteSubmitted ? (
              <div className="quote-success-state">
                <FiCheckCircle className="success-icon" />
                <h3>Thank you for your RFQ</h3>
                <p>
                  Your inquiry for <strong>{variant.title}</strong> has been
                  transmitted to our sales desk. Our sales engineer will review
                  your specifications and respond immediately.
                </p>
                <Button
                  onClick={() => setQuoteSubmitted(false)}
                  variant="secondary"
                >
                  Submit Another Inquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={handleQuoteSubmit} className="product-rfq-form">
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="variant-name">Your Name / Company *</label>
                    <input
                      type="text"
                      id="variant-name"
                      name="name"
                      required
                      placeholder="e.g. John Doe / Petro Engineering Ltd"
                      value={quoteForm.name}
                      onChange={handleFormChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="variant-email">Email Address *</label>
                    <input
                      type="email"
                      id="variant-email"
                      name="email"
                      required
                      placeholder="purchasing@company.com"
                      value={quoteForm.email}
                      onChange={handleFormChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="variant-phone">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      id="variant-phone"
                      name="phone"
                      required
                      placeholder="+91 XXXXX XXXXX"
                      value={quoteForm.phone}
                      onChange={handleFormChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="variant-quantity">
                      Approx Quantity & Dimensions
                    </label>
                    <input
                      type="text"
                      id="variant-quantity"
                      name="quantity"
                      placeholder={'e.g. 50 Pcs / 2" NB SCH 40'}
                      value={quoteForm.quantity}
                      onChange={handleFormChange}
                    />
                  </div>
                </div>

                <div className="form-group full-width">
                  <label htmlFor="variant-message">
                    Required Grade, Standard & Project Notes
                  </label>
                  <textarea
                    id="variant-message"
                    name="message"
                    rows="4"
                    placeholder="Specify ASTM/ASME standard, preferred material grade (e.g. SS 304, SS 316, Carbon Steel A234 WPB, Duplex 2205), test certificate requirements (EN 10204 3.1), and delivery destination..."
                    value={quoteForm.message}
                    onChange={handleFormChange}
                  ></textarea>
                </div>

                <div className="form-submit-row">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    icon={<FiSend />}
                    disabled={isSubmitting}
                  >
                    {isSubmitting
                      ? "Opening WhatsApp..."
                      : "Submit RFQ to Sales Desk"}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Related Products / Variants */}
      {relatedVariants.length > 0 && (
        <section className="section-py bg-white">
          <div className="container">
            <h3 className="related-variants-title">
              Related Products in {product.title}
            </h3>
            <div className="variants-grid">
              {relatedVariants.map((v) => (
                <Link
                  key={v.slug}
                  to={getVariantUrl(v, product)}
                  className="variant-card"
                >
                  <div className="variant-card-image">
                    <img src={v.image} alt={v.title} loading="lazy" />
                  </div>
                  <div className="variant-card-body">
                    <span className="variant-card-grade">
                      {v.subcategory ? `Subcategory: ${v.subcategory}` : v.materialGroup}
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
