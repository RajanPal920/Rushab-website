import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowUpRight, FiArrowRight } from 'react-icons/fi';
import '../../styles/products.css';

const products = [
  {
    id: 1,
    slug: "butt-weld-fittings",
    std: "ASME B16.9",
    type: "MANUFACTURING",
    title: "BUTT WELD FITTINGS",
    subtitle: "ELBOWS, TEES, REDUCERS",
    image: "/images/products/buttweld-fitting.jpg"
  },
  {
    id: 2,
    slug: "fasteners",
    std: "ASTM A193 / A194",
    type: "MANUFACTURING",
    title: "FASTENERS",
    subtitle: "STUDS, BOLTS & SPECIALS",
    image: "/images/products/fasteners.jpg"
  },
  {
    id: 3,
    slug: "flanges",
    std: "ASME B16.5",
    type: "MANUFACTURING",
    title: "FLANGES",
    subtitle: "WELD NECK, SLIP-ON, BLIND",
    image: "/images/products/flanges.jpg"
  },
  {
    id: 4,
    slug: "forged-fittings",
    std: "ASME B16.11",
    type: "MANUFACTURING",
    title: "FORGED FITTINGS",
    subtitle: "3000# / 6000# / 9000#",
    image: "/images/products/forge-fittings.jpg"
  },
  {
    id: 5,
    slug: "coils",
    std: "ASTM A240",
    type: "SUPPLIER DIV.",
    title: "COILS",
    subtitle: "HOT & COLD ROLLED COILS",
    image: "/images/products/coil.jpg"
  },
  {
    id: 6,
    slug: "patta-patti",
    std: "ASTM A276 / A484",
    type: "SUPPLIER DIV.",
    title: "PATTA PATTI",
    subtitle: "COLD DRAWN & HRAP",
    image: "/images/products/flat-bar.jpg"
  },
  {
    id: 7,
    slug: "pipes-tubes",
    std: "ASTM A312 / A269",
    type: "SUPPLIER DIV.",
    title: "PIPES AND TUBES",
    subtitle: "SEAMLESS & WELDED",
    image: "/images/products/pipes.jpg"
  },
  {
    id: 8,
    slug: "sheets-plates",
    std: "ASTM A240 / ASME SA240",
    type: "SUPPLIER DIV.",
    title: "SHEETS AND PLATES",
    subtitle: "COLD & HOT ROLLED",
    image: "/images/products/sheets-plates.jpg"
  },
  {
    id: 9,
    slug: "rods-bars",
    std: "ASTM A276 / A479",
    type: "SUPPLIER DIV.",
    title: "RODS AND BARS",
    subtitle: "BRIGHT & BLACK FINISH",
    image: "/images/products/rods-bars.jpg"
  }
];

export default function Products() {
  return (
    <section className="products-section">
      <div className="container">
        <div className="section-header">
          <div className="section-subtitle-wrapper">
            <span className="subtitle-line"></span>
            <span className="section-subtitle">ENGINEERING INVENTORY & PRODUCTION</span>
          </div>
          <h2 className="section-title">OUR PRODUCTS</h2>
          <p className="section-description">
            Precision-engineered steel products for demanding industrial and<br />
            engineering applications.
          </p>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <Link
              to={`/products/${product.slug}-manufacture-in-india`}
              className="product-card"
              key={product.id}
            >
              <div className="product-image-wrapper">
                <img src={product.image} alt={product.title} className="product-image" />
                <div className="product-badges">
                  <span className="badge std-badge">
                    <span className="badge-dot"></span> {product.std}
                  </span>
                  <span className="badge type-badge">{product.type}</span>
                </div>
              </div>
              <div className="product-content">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-subtitle">{product.subtitle}</p>
                <div className="product-footer-link">
                  <span className="explore-text">EXPLORE SPECS</span>
                  <span className="explore-icon-box">
                    <FiArrowUpRight />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="products-footer">
          <Link to="/products" className="all-products-btn">
            ALL PRODUCTS <FiArrowRight className="btn-icon" />
          </Link>
        </div>
      </div>
    </section>
  );
}
