import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import productsData from "../data/products.json";
import { getVariantsByProduct } from "../data/productVariants";
import { siteConfig } from "../data/siteConfig";
import { getVariantUrl, toProductSeoSlug } from "../utils/seoSlugUtils";
import Button from "../components/Button";
import ProductCard from "../components/ProductCard";
import {
  FiCheckCircle,
  FiFileText,
  FiShield,
  FiSend,
  FiBox,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { parseGradeLineToTokens, getGradeUrl } from "../data/gradesData";
import "./ProductDetails.css";
import "./VariantDetails.css";

export default function ProductDetails({ resolvedProduct }) {
  const { slug } = useParams();

  const product =
    resolvedProduct ||
    productsData.find((p) => p.slug === slug || toProductSeoSlug(p) === slug);

  const variants = getVariantsByProduct(product?.slug || slug);

  const [activeImage, setActiveImage] = useState(
    product && product.gallery && product.gallery.length > 0
      ? product.gallery[0]
      : product
        ? product.image
        : "/images/products/pipes.jpg",
  );

  const [quoteSubmitted, setQuoteSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [variantSearch, setVariantSearch] = useState("");
  const [variantFilterTab, setVariantFilterTab] = useState("all");
  const [quoteForm, setQuoteForm] = useState({
    name: "",
    email: "",
    phone: "",
    quantity: "",
    specification: "",
    message: "",
  });

  if (!product) {
    return (
      <div className="product-not-found-section section-py container">
        <h2>Product Not Found</h2>
        <p>The requested product category could not be located.</p>
        <Button to="/products" variant="primary">
          Return to Catalog
        </Button>
      </div>
    );
  }

  // ✅ Related products — smart filter with fallback (unique per page)
  const relatedProducts = (() => {
    const currentMaterials = Array.isArray(product.materials)
      ? product.materials
      : [];

    let related = productsData.filter(
      (p) =>
        p.id !== product.id &&
        p.category === product.category &&
        Array.isArray(p.materials) &&
        p.materials.some((m) => currentMaterials.includes(m)),
    );

    if (related.length < 4) {
      const sameCat = productsData.filter(
        (p) => p.id !== product.id && p.category === product.category,
      );
      related = [...related, ...sameCat.filter((p) => !related.includes(p))];
    }

    if (related.length < 4 && currentMaterials.length > 0) {
      const sameMat = productsData.filter(
        (p) =>
          p.id !== product.id &&
          Array.isArray(p.materials) &&
          p.materials.some((m) => currentMaterials.includes(m)),
      );
      related = [...related, ...sameMat.filter((p) => !related.includes(p))];
    }

    if (related.length < 4) {
      const others = productsData.filter(
        (p) => p.id !== product.id && !related.includes(p),
      );
      const offset = product.id % (others.length || 1);
      const rotated = [...others.slice(offset), ...others.slice(0, offset)];
      related = [...related, ...rotated];
    }

    const unique = Array.from(new Set(related.map((p) => p.id))).map((id) =>
      related.find((p) => p.id === id),
    );

    return unique.slice(0, 4);
  })();

  // WhatsApp Inquiry URL (top button — quick inquire)
  const waProductText = encodeURIComponent(
    `Hello Rushab Metal Industries, I am interested in inquiring about "${product.title}" (${product.std || ""}). Please provide availability and technical quotation.`,
  );
  const waProductUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${waProductText}`;

  const handleFormChange = (e) => {
    setQuoteForm({ ...quoteForm, [e.target.name]: e.target.value });
  };

  // ✅ Submit handler — opens WhatsApp with pre-filled RFQ details to +91 99698 84597 (Sumit)
  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Build WhatsApp message with all form data
    const waMessage = `*NEW RFQ — ${product.title}*
━━━━━━━━━━━━━━━━━━━━
*Product:* ${product.title}
*Standard:* ${product.std || "N/A"}
*Category:* ${product.category || "N/A"}
━━━━━━━━━━━━━━━━━━━━
*Name / Company:* ${quoteForm.name}
*Email:* ${quoteForm.email}
*Phone / WhatsApp:* ${quoteForm.phone}
*Approx Quantity:* ${quoteForm.quantity || "N/A"}
━━━━━━━━━━━━━━━━━━━━
*Required Grade / Standard / Notes:*
${quoteForm.message || "N/A"}
━━━━━━━━━━━━━━━━━━━━
*Submitted From:* ${window.location.href}`;

    const waNumber = "919969884597"; // +91 99698 84597 (Sumit)
    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;

    // Open WhatsApp in new tab
    window.open(waUrl, "_blank");

    // Show success state after short delay
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

  return (
    <div className="product-details-page">
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
            <span className="bc-current">{product.title}</span>
          </nav>
        </div>
      </div>

      {/* Main Details Section */}
      <section className="section-py-sm bg-white">
        <div className="container">
          <div className="product-main-grid">
            {/* Left Column: Gallery */}
            <div className="product-gallery-col">
              <div className="main-image-display">
                <img
                  src={activeImage}
                  alt={product.title}
                  className="product-featured-img"
                />
                <div className="image-std-badge">
                  <span className="badge-dot"></span>
                  {product.std}
                </div>
              </div>

              {product.gallery && product.gallery.length > 1 && (
                <div className="thumbnails-strip">
                  {product.gallery.map((imgSrc, i) => (
                    <button
                      key={i}
                      type="button"
                      className={`thumbnail-btn ${
                        activeImage === imgSrc ? "active" : ""
                      }`}
                      onClick={() => setActiveImage(imgSrc)}
                      aria-label={`Select product image ${i + 1}`}
                    >
                      <img src={imgSrc} alt="" className="thumb-img" />
                    </button>
                  ))}
                </div>
              )}

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

            {/* Right Column: Info */}
            <div className="product-info-col">
              <div className="product-meta-header">
                <span className="p-category-pill">{product.category}</span>
                <span className="p-type-pill">{product.type}</span>
              </div>

              <h1 className="p-details-title">{product.title}</h1>
              <p className="p-details-subtitle">{product.subtitle}</p>

              <div className="p-description-block">
                <p>{product.description}</p>
              </div>

              {product.materials && (
                <div className="p-materials-section">
                  <h4 className="p-sub-heading">
                    Available Material Metallurgy:
                  </h4>
                  <div className="materials-badge-grid">
                    {product.materials.map((mat, i) => (
                      <Link
                        key={i}
                        to={getGradeUrl(mat, product)}
                        className="mat-badge-tag mat-badge-link"
                        title={`View ${mat} metallurgy & standards`}
                      >
                        {mat}
                        <span className="mat-badge-link-arrow">↗</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {product.sizes && (
                <div className="p-sizes-section">
                  <h4 className="p-sub-heading">
                    Standard Size Range & Schedules:
                  </h4>
                  <p className="sizes-text-highlight">{product.sizes}</p>
                </div>
              )}

              <div className="p-cta-actions-row">
                <a
                  href={waProductUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wa-inquiry-action-btn"
                >
                  <FaWhatsapp className="btn-icon-wa" />
                  <span>Inquire on WhatsApp</span>
                </a>

                <a href="#rfq-form" className="quote-inquiry-action-btn">
                  <FiSend className="btn-icon-rfq" />
                  <span>Request Written Quote</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VARIANTS & SUBCATEGORIES CATALOGUE GRID */}
      {variants.length > 0 && (() => {
        const subcategoryItems = variants.filter((v) => Boolean(v.subcategory));
        const materialItems = variants.filter((v) => !v.subcategory);
        const hasSubcategories = subcategoryItems.length > 0;

        const displayedVariants = variants.filter((v) => {
          if (variantFilterTab === "subcategories" && !v.subcategory) return false;
          if (variantFilterTab === "materials" && v.subcategory) return false;
          if (!variantSearch.trim()) return true;
          const q = variantSearch.toLowerCase().trim();
          return (
            (v.title && v.title.toLowerCase().includes(q)) ||
            (v.subcategory && v.subcategory.toLowerCase().includes(q)) ||
            (v.materialGroup && v.materialGroup.toLowerCase().includes(q)) ||
            (v.shortDescription && v.shortDescription.toLowerCase().includes(q)) ||
            (v.standards && v.standards.toLowerCase().includes(q)) ||
            (v.availableSizes && v.availableSizes.toLowerCase().includes(q))
          );
        });

        return (
          <section className="section-py bg-light-steel" id="product-catalogue">
            <div className="container">
              <div
                className="section-header-compact"
                style={{ textAlign: "center", marginBottom: "1.75rem" }}
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
                  INDUSTRIAL PRODUCT CATALOGUE
                </span>
                <h2 className="section-title">
                  Available {product.title} Subcategories & Products
                </h2>
                <p className="section-description">
                  Select any subcategory or product below to inspect detailed dimensional specifications, schedules, pressure ratings, and certified grades.
                </p>
              </div>

              {/* Filter Tabs & Search Bar Controls */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "1rem",
                  marginBottom: "2rem",
                  background: "#fff",
                  padding: "1rem 1.25rem",
                  borderRadius: "10px",
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
                }}
              >
                {/* Filter Pills */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  <button
                    type="button"
                    onClick={() => setVariantFilterTab("all")}
                    style={{
                      padding: "6px 14px",
                      borderRadius: "20px",
                      border: "1px solid",
                      borderColor: variantFilterTab === "all" ? "#1B93CF" : "#CBD5E1",
                      background: variantFilterTab === "all" ? "#1B93CF" : "#F8FAFC",
                      color: variantFilterTab === "all" ? "#fff" : "#334155",
                      fontSize: "0.825rem",
                      fontWeight: 600,
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                  >
                    All Items ({variants.length})
                  </button>
                  {hasSubcategories && (
                    <button
                      type="button"
                      onClick={() => setVariantFilterTab("subcategories")}
                      style={{
                        padding: "6px 14px",
                        borderRadius: "20px",
                        border: "1px solid",
                        borderColor: variantFilterTab === "subcategories" ? "#1B93CF" : "#CBD5E1",
                        background: variantFilterTab === "subcategories" ? "#1B93CF" : "#F8FAFC",
                        color: variantFilterTab === "subcategories" ? "#fff" : "#334155",
                        fontSize: "0.825rem",
                        fontWeight: 600,
                        cursor: "pointer",
                        transition: "all 0.2s",
                      }}
                    >
                      Subcategories ({subcategoryItems.length})
                    </button>
                  )}
                  {materialItems.length > 0 && hasSubcategories && (
                    <button
                      type="button"
                      onClick={() => setVariantFilterTab("materials")}
                      style={{
                        padding: "6px 14px",
                        borderRadius: "20px",
                        border: "1px solid",
                        borderColor: variantFilterTab === "materials" ? "#1B93CF" : "#CBD5E1",
                        background: variantFilterTab === "materials" ? "#1B93CF" : "#F8FAFC",
                        color: variantFilterTab === "materials" ? "#fff" : "#334155",
                        fontSize: "0.825rem",
                        fontWeight: 600,
                        cursor: "pointer",
                        transition: "all 0.2s",
                      }}
                    >
                      Material Alloys ({materialItems.length})
                    </button>
                  )}
                </div>

                {/* Instant Search Filter */}
                <div style={{ position: "relative", minWidth: "250px", flex: "1", maxWidth: "360px" }}>
                  <input
                    type="text"
                    placeholder="Search by subcategory, size or grade..."
                    value={variantSearch}
                    onChange={(e) => setVariantSearch(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "8px 14px",
                      borderRadius: "6px",
                      border: "1px solid #CBD5E1",
                      fontSize: "0.85rem",
                      outline: "none",
                    }}
                  />
                  {variantSearch && (
                    <button
                      type="button"
                      onClick={() => setVariantSearch("")}
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        background: "none",
                        border: "none",
                        color: "#94A3B8",
                        cursor: "pointer",
                        fontSize: "0.85rem",
                      }}
                    >
                      ✕
                    </button>
                  )}
                </div>
              </div>

              {displayedVariants.length === 0 ? (
                <div
                  style={{
                    textAlign: "center",
                    padding: "3rem 1rem",
                    background: "#fff",
                    borderRadius: "8px",
                    border: "1px solid #E2E8F0",
                  }}
                >
                  <p style={{ color: "#64748B", fontSize: "1rem" }}>
                    No matching products or subcategories found for "{variantSearch}".
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setVariantSearch("");
                      setVariantFilterTab("all");
                    }}
                    style={{
                      marginTop: "0.75rem",
                      background: "#1B93CF",
                      color: "#fff",
                      border: "none",
                      padding: "8px 16px",
                      borderRadius: "4px",
                      cursor: "pointer",
                      fontWeight: 600,
                    }}
                  >
                    Reset Filter
                  </button>
                </div>
              ) : (
                <div className="variants-grid">
                  {displayedVariants.map((variant) => (
                    <Link
                      key={variant.slug}
                      to={getVariantUrl(variant, product)}
                      className="variant-card"
                    >
                      <div className="variant-card-image">
                        <img
                          src={variant.image}
                          alt={variant.title}
                          loading="lazy"
                        />
                      </div>
                      <div className="variant-card-body">
                        <span className="variant-card-grade">
                          {variant.subcategory ? `Subcategory: ${variant.subcategory}` : variant.materialGroup}
                        </span>

                        <h4 className="variant-card-title">{variant.title}</h4>

                        <p className="variant-card-subtitle">
                          {variant.shortDescription}
                        </p>

                        {variant.availableSizes && (
                          <p
                            style={{
                              fontSize: "0.75rem",
                              color: "#0A192F",
                              background: "#F1F5F9",
                              padding: "4px 8px",
                              borderRadius: "4px",
                              margin: "0.5rem 0 0",
                              lineHeight: 1.4,
                              fontWeight: 600,
                            }}
                          >
                            <strong style={{ color: "#1B93CF" }}>Sizes:</strong>{" "}
                            {variant.availableSizes}
                          </p>
                        )}

                        {variant.standards && (
                          <p
                            style={{
                              fontSize: "0.7rem",
                              color: "#94A3B8",
                              margin: "0.4rem 0 0",
                              lineHeight: 1.4,
                            }}
                          >
                            <strong style={{ color: "#1B93CF" }}>STD:</strong>{" "}
                            {variant.standards}
                          </p>
                        )}

                        <span className="variant-card-cta">VIEW DETAILS & RFQ →</span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </section>
        );
      })()}


      {/* Specifications & Grades */}
      <section className="section-py bg-light-steel">
        <div className="container">
          <div className="specs-section-container">
            <h2 className="specs-section-title">
              Technical Specifications & Standard Grades
            </h2>
            <p className="specs-section-subtitle">
              Comprehensive dimensional and metallurgical parameters for{" "}
              {product.title} supplied by Rushab Metal Industries.
            </p>

            <div className="specs-two-col-layout">
              {product.specifications && (
                <div className="specs-table-card">
                  <h3 className="specs-card-title">Technical Parameters</h3>
                  <div className="specs-table-responsive">
                    <table className="industrial-spec-table">
                      <tbody>
                        {product.specifications.map((spec, i) => (
                          <tr key={i}>
                            <td className="spec-label-col">{spec.label}</td>
                            <td className="spec-value-col">{spec.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              <div className="grades-forms-card">
                {product.grades && (
                  <div className="grades-block">
                    <h3 className="specs-card-title">
                      Commonly Supplied Grades
                    </h3>
                    <ul className="grades-list">
                      {product.grades.map((gradeLine, i) => {
                        const { label, tokens } = parseGradeLineToTokens(gradeLine, product);
                        return (
                          <li key={i} className="grade-parsed-item">
                            <FiCheckCircle className="grade-check-icon" />
                            <div className="grade-item-content">
                              {label && <strong className="grade-cat-label">{label}: </strong>}
                              <div className="grade-tokens-flex">
                                {tokens.map((tok, j) => (
                                  <Link
                                    key={j}
                                    to={tok.url}
                                    className="mat-badge-tag mat-badge-link"
                                    title={`View verified metallurgical dossier for ${tok.text}`}
                                  >
                                    {tok.text}
                                    <span className="mat-badge-link-arrow">↗</span>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}

                {product.types && (
                  <div className="types-block">
                    <h4 className="types-title">
                      Execution Forms & Product Variations
                    </h4>
                    <ul className="types-list">
                      {product.types.map((t, i) => (
                        <li key={i} className="type-item">
                          <span className="type-bullet">•</span>
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ RFQ Form — now sends to WhatsApp (+91 99698 84597 Sumit) */}
      <section className="section-py bg-white" id="rfq-form">
        <div className="container">
          <div className="rfq-wrapper-card">
            <div className="rfq-header">
              <span className="rfq-tag">DIRECT COMMERCIAL INQUIRY</span>
              <h2 className="rfq-title">
                Request Quotation for {product.title}
              </h2>
              <p className="rfq-desc">
                Submit your required size, schedule, grade, and quantity. Our
                technical sales team in Mumbai will provide competitive pricing
                and dispatch schedules.
              </p>
            </div>

            {quoteSubmitted ? (
              <div className="quote-success-state">
                <FiCheckCircle className="success-icon" />
                <h3>Thank you for your RFQ</h3>
                <p>
                  Your inquiry for <strong>{product.title}</strong> has been
                  sent to our sales team on WhatsApp. Our sales engineer will
                  review your specifications and contact you shortly.
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
                    <label htmlFor="name">Your Name / Company *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="e.g. John Doe / Petro Engineering Ltd"
                      value={quoteForm.name}
                      onChange={handleFormChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="purchasing@company.com"
                      value={quoteForm.email}
                      onChange={handleFormChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone / WhatsApp Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="+91 XXXXX XXXXX"
                      value={quoteForm.phone}
                      onChange={handleFormChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="quantity">
                      Approx Quantity & Dimensions
                    </label>
                    <input
                      type="text"
                      id="quantity"
                      name="quantity"
                      placeholder={'e.g. 500 Meters / 2" SCH 40'}
                      value={quoteForm.quantity}
                      onChange={handleFormChange}
                    />
                  </div>
                </div>

                <div className="form-group full-width">
                  <label htmlFor="message">
                    Required Grade, Standard & Notes
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Specify ASTM/ASME standard, preferred material grade (e.g. SS 316L, Inconel 625), test certificate needs (EN 10204 3.1), and delivery destination..."
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

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="section-py bg-light-steel">
          <div className="container">
            <div className="section-header-compact">
              <h3 className="section-title">
                Related Piping & Fitting Solutions
              </h3>
              <p className="section-description">
                Explore complementary components and materials frequently
                ordered alongside {product.title}.
              </p>
            </div>

            <div className="home-products-grid">
              {relatedProducts.map((relProduct) => (
                <ProductCard key={relProduct.id} product={relProduct} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
