import React from 'react';
import { FiArrowUpRight, FiArrowRight } from 'react-icons/fi';
import '../../styles/products.css';

const products = [
  {
    id: 1,
    std: "ASME B16.9",
    type: "MANUFACTURING",
    title: "BUTT WELD FITTING",
    subtitle: "ELBOWS, TEES, REDUCERS",
    image: "/images/products/buttweld-fitting.jpg"
  },
  {
    id: 2,
    std: "ASTM A193 / A194",
    type: "MANUFACTURING",
    title: "FASTENERS",
    subtitle: "STUDS, BOLTS & SPECIALS",
    image: "/images/products/fasteners.jpg"
  },
  {
    id: 3,
    std: "ASME B16.5",
    type: "MANUFACTURING",
    title: "FLANGES",
    subtitle: "WELD NECK, SLIP-ON, BLIND",
    image: "/images/products/flanges.jpg"
  },
  {
    id: 4,
    std: "ASME B16.11",
    type: "MANUFACTURING",
    title: "FORGE FITTING",
    subtitle: "3000# / 6000# / 9000#",
    image: "/images/products/forge-fittings.jpg"
  },
  {
    id: 5,
    std: "ASTM A240",
    type: "SUPPLIER DIV.",
    title: "COIL",
    subtitle: "HOT & COLD ROLLED COILS",
    image: "/images/products/coil.jpg"
  },
  {
    id: 6,
    std: "ASTM A276 / A484",
    type: "SUPPLIER DIV.",
    title: "FLAT BAR",
    subtitle: "COLD DRAWN & HRAP",
    image: "/images/products/flat-bar.jpg"
  },
  {
    id: 7,
    std: "ASTM A312 / A269",
    type: "SUPPLIER DIV.",
    title: "PIPES AND TUBES",
    subtitle: "SEAMLESS & WELDED",
    image: "/images/products/pipes.jpg"
  },
  {
    id: 8,
    std: "ASTM A240 / ASME SA240",
    type: "SUPPLIER DIV.",
    title: "SHEETS AND PLATES",
    subtitle: "COLD & HOT ROLLED",
    image: "/images/products/sheets-plates.jpg"
  },
  {
    id: 9,
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
            <div className="product-card" key={product.id}>
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
                  <a href="#" className="explore-icon-box">
                    <FiArrowUpRight />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="products-footer">
          <a href="#" className="all-products-btn">
            ALL PRODUCTS <FiArrowRight className="btn-icon" />
          </a>
        </div>
      </div>
    </section>
  );
}
