import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import productsData from '../data/products.json';
import { siteConfig } from '../data/siteConfig';
import Button from '../components/Button';
import ProductCard from '../components/ProductCard';
import {
  FiCheckCircle,
  FiFileText,
  FiShield,
  FiSend,
  FiBox
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import './ProductDetails.css';

export default function ProductDetails() {
  const { slug } = useParams();

  // Find product by slug
  const product = productsData.find((p) => p.slug === slug) || productsData[0];

  const [activeImage, setActiveImage] = useState(
    product && product.gallery && product.gallery.length > 0
      ? product.gallery[0]
      : product ? product.image : "/images/products/pipes.jpg"
  );

  const [quoteSubmitted, setQuoteSubmitted] = useState(false);
  const [quoteForm, setQuoteForm] = useState({
    name: '',
    email: '',
    phone: '',
    quantity: '',
    specification: '',
    message: ''
  });

  if (!product) {
    return (
      <div className="product-not-found-section section-py container">
        <h2>Product Not Found</h2>
        <p>The requested product category could not be located.</p>
        <Button to="/products" variant="primary">Return to Catalog</Button>
      </div>
    );
  }

  // Related products
  const relatedProducts = productsData
    .filter((p) => p.id !== product.id && (p.category === product.category || p.materials.some(m => product.materials.includes(m))))
    .slice(0, 3);

  // WhatsApp Inquiry URL with pre-filled product details
  const waProductText = encodeURIComponent(
    `Hello Rushab Metal Industries, I am interested in inquiring about "${product.title}" (${product.std || ''}). Please provide availability and technical quotation.`
  );
  const waProductUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${waProductText}`;

  const handleFormChange = (e) => {
    setQuoteForm({ ...quoteForm, [e.target.name]: e.target.value });
  };

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    setQuoteSubmitted(true);
  };

  return (
    <div className="product-details-page">
      {/* Breadcrumb Bar */}
      <div className="details-breadcrumb-bar">
        <div className="container">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link to="/" className="bc-link">Home</Link>
            <span className="bc-sep">/</span>
            <Link to="/products" className="bc-link">Products</Link>
            <span className="bc-sep">/</span>
            <span className="bc-current">{product.title}</span>
          </nav>
        </div>
      </div>

      {/* Main Details Section */}
      <section className="section-py-sm bg-white">
        <div className="container">
          <div className="product-main-grid">
            {/* Left Column: Gallery & Media */}
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

              {/* Thumbnail Gallery */}
              {product.gallery && product.gallery.length > 1 && (
                <div className="thumbnails-strip">
                  {product.gallery.map((imgSrc, i) => (
                    <button
                      key={i}
                      type="button"
                      className={`thumbnail-btn ${activeImage === imgSrc ? 'active' : ''}`}
                      onClick={() => setActiveImage(imgSrc)}
                      aria-label={`Select product image ${i + 1}`}
                    >
                      <img src={imgSrc} alt="" className="thumb-img" />
                    </button>
                  ))}
                </div>
              )}

              {/* Assurance Trust Badges */}
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

            {/* Right Column: Information & Actions */}
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

              {/* Available Materials Chips */}
              {product.materials && (
                <div className="p-materials-section">
                  <h4 className="p-sub-heading">Available Material Metallurgy:</h4>
                  <div className="materials-badge-grid">
                    {product.materials.map((mat, i) => (
                      <span key={i} className="mat-badge-tag">{mat}</span>
                    ))}
                  </div>
                </div>
              )}

              {/* Execution Forms & Sizes */}
              {product.sizes && (
                <div className="p-sizes-section">
                  <h4 className="p-sub-heading">Standard Size Range & Schedules:</h4>
                  <p className="sizes-text-highlight">{product.sizes}</p>
                </div>
              )}

              {/* Action Buttons */}
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

                <a
                  href="#rfq-form"
                  className="quote-inquiry-action-btn"
                >
                  <FiSend className="btn-icon-rfq" />
                  <span>Request Written Quote</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications & Available Grades Tabular Breakdown */}
      <section className="section-py bg-light-steel">
        <div className="container">
          <div className="specs-section-container">
            <h2 className="specs-section-title">Technical Specifications & Standard Grades</h2>
            <p className="specs-section-subtitle">
              Comprehensive dimensional and metallurgical parameters for {product.title} supplied by Rushab Metal Industries.
            </p>

            <div className="specs-two-col-layout">
              {/* Left: Specifications Table */}
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

              {/* Right: Grades & Execution Forms */}
              <div className="grades-forms-card">
                {product.grades && (
                  <div className="grades-block">
                    <h3 className="specs-card-title">Commonly Supplied Grades</h3>
                    <ul className="grades-list">
                      {product.grades.map((grade, i) => (
                        <li key={i}>
                          <FiCheckCircle className="grade-check-icon" />
                          <span>{grade}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {product.types && (
                  <div className="types-block">
                    <h4 className="types-title">Execution Forms & Product Variations</h4>
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

      {/* Quotation Request Form Formatted for This Product */}
      <section className="section-py bg-white" id="rfq-form">
        <div className="container">
          <div className="rfq-wrapper-card">
            <div className="rfq-header">
              <span className="rfq-tag">DIRECT COMMERCIAL INQUIRY</span>
              <h2 className="rfq-title">Request Quotation for {product.title}</h2>
              <p className="rfq-desc">
                Submit your required size, schedule, grade, and quantity. Our technical sales team in Mumbai will provide competitive pricing and dispatch schedules.
              </p>
            </div>

            {quoteSubmitted ? (
              <div className="quote-success-state">
                <FiCheckCircle className="success-icon" />
                <h3>Thank you for your RFQ</h3>
                <p>
                  Your inquiry for <strong>{product.title}</strong> has been received. Our sales engineer will review your specifications and contact you shortly.
                </p>
                <Button onClick={() => setQuoteSubmitted(false)} variant="secondary">
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
                    <label htmlFor="quantity">Approx Quantity & Dimensions</label>
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
                  <label htmlFor="message">Required Grade, Standard & Notes</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder={`Specify ASTM/ASME standard, preferred material grade (e.g. SS 316L, Inconel 625), test certificate needs (EN 10204 3.1), and delivery destination...`}
                    value={quoteForm.message}
                    onChange={handleFormChange}
                  ></textarea>
                </div>

                <div className="form-submit-row">
                  <Button type="submit" variant="primary" size="lg" icon={<FiSend />}>
                    Submit RFQ to Sales Desk
                  </Button>
                  <span className="submit-disclaimer">
                    Direct email dispatch: {siteConfig.email}
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <section className="section-py bg-light-steel">
          <div className="container">
            <div className="section-header-compact">
              <h3 className="section-title">Related Piping & Fitting Solutions</h3>
              <p className="section-description">
                Explore complementary components and materials frequently ordered alongside {product.title}.
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
