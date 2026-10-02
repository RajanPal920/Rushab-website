import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeroSlider from '../components/hero/HeroSlider';
import Marquee from '../components/home/Marquee';
import WhyChooseUs from '../components/home/WhyChooseUs';
import ThirdPartyMarquee from '../components/home/ThirdPartyMarquee';
import WorldwideSupply from '../components/home/WorldwideSupply';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import ProductCard from '../components/ProductCard';
import IndustryCard from '../components/IndustryCard';
import productsData from '../data/products.json';
import { siteConfig } from '../data/siteConfig';

import {
  FiCheckCircle,
  FiArrowRight,
  FiPhone,
  FiSend,
  FiCpu,
  FiDroplet,
  FiZap,
  FiActivity,
  FiLayers,
  FiShield,
  FiMessageCircle
} from 'react-icons/fi';

import './Home.css';

// Industries with authentic images from /images/industiresimage folder
const featuredIndustries = [
  {
    title: "Oil & Gas / Offshore",
    image: "/images/industiresimage/oil.jpg",
    icon: <FiDroplet />,
    description: "High-pressure seamless pipes, forged fittings, and duplex flanges for upstream exploration and midstream transmission.",
    products: ["ASTM A312 TP316L", "API 5L X52/X65", "Duplex UNS S31803", "3000# Forged Fittings"]
  },
  {
    title: "Refinery & Petrochemical",
    image: "/images/industiresimage/petrochemical.jpg",
    icon: <FiLayers />,
    description: "Corrosion-resistant alloy piping, heavy-wall butt weld fittings, and heat exchanger tubes engineered for severe thermal service.",
    products: ["ASTM A335 P11/P22/P91", "ASTM A234 WPB", "Alloy 20", "Inconel 625"]
  },
  {
    title: "Chemical & Fertilizer",
    image: "/images/industiresimage/chemical.jpg",
    icon: <FiActivity />,
    description: "Acid-resistant stainless steel sheets, seamless tubing, and PTFE gasketed flanges for aggressive chemical media.",
    products: ["SS 904L", "Hastelloy C276", "Monel 400", "Titanium Gr. 2"]
  },
  {
    title: "Thermal & Nuclear Power",
    image: "/images/industiresimage/power-plant.jpg",
    icon: <FiZap />,
    description: "High-temperature alloy tubes, steam-line piping, and high-tensile stud bolts meeting strict ASME boiler and pressure vessel codes.",
    products: ["SA 213 T91/T22", "ASTM A193 B7/B16", "High Pressure Flanges", "Steam Traps"]
  },
  {
    title: "Automobile & Engineering",
    image: "/images/industiresimage/automobile.jpg",
    icon: <FiCpu />,
    description: "Bright round bars, precision capillary tubing, hex bars, and structural flat bars for CNC machining and automotive components.",
    products: ["ASTM A276 SS 304/316", "Hex & Square Bars", "Cold Drawn Tubes", "Fasteners"]
  },
  {
    title: "Food & Pharmaceutical",
    image: "/images/industiresimage/food.jpg",
    icon: <FiCheckCircle />,
    description: "Sanitary mirror-polished tubing, electro-polished fittings, and wire mesh filter cloth ensuring utmost hygiene and chemical passivity.",
    products: ["ASTM A270 SS 316L", "Dairy Fittings", "Wire Mesh Cloth", "Sanitary Valves"]
  }
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Pipes & Tubes",
    "Fittings",
    "Flanges",
    "Fasteners",
    "Sheets & Plates",
    "Bars & Rods",
    "Valves & Flow Control"
  ];

  const filteredProducts = activeCategory === "All"
    ? productsData.slice(0, 8)
    : productsData.filter(p => p.category === activeCategory || (activeCategory === "Fittings" && p.category === "Fittings")).slice(0, 8);

  return (
    <div className="home-page-container">
      {/* 2. Hero Slider — maximum 4 infinite slides */}
      <HeroSlider />

      {/* 3. Infinite Highlight Marquee */}
      <Marquee />

      {/* 4. Who We Are (Two-Column Layout) */}
      <section className="home-intro-section section-py bg-light-steel" id="who-we-are">
        <div className="container">
          <div className="intro-grid">
            {/* Left: Professional Industrial Visual */}
            <div className="intro-visual-col">
              <div className="intro-image-frame">
                <img
                  src="/images/herosliderimg/img2.jpg"
                  alt="Rushab Metal Industries Warehouse Inventory"
                  className="intro-main-img"
                  loading="lazy"
                />
                <div className="intro-badge-card">
                  <span className="ibc-title">ISO 9001:2015</span>
                  <span className="ibc-desc">Audited Quality Management</span>
                </div>
              </div>

              <div className="intro-statement-card">
                <p className="statement-text">
                  "{siteConfig.motto}"
                </p>
              </div>
            </div>

            {/* Right: Company Introduction & Content */}
            <div className="intro-content-col">
              <div className="section-subtitle-badge align-left">
                <span className="subtitle-pulse-dot" />
                <span className="section-subtitle-text">WHO WE ARE</span>
              </div>
              <h2 className="intro-main-title">
                {siteConfig.companyName}
              </h2>
              <h3 className="intro-sub-heading">
                Exporters, Importers, Stockists & Suppliers of Ferrous & Non-Ferrous Metals
              </h3>
              <p className="intro-para">
                Based in Mumbai, India, <strong>Rushab Metal Industries (RMI)</strong> is an ISO 9001:2015 certified premier supplier and stockist serving critical industrial infrastructure across India and worldwide. We specialize in seamless & welded pipes, butt weld fittings, forged fittings, flanges, fasteners, sheets, plates, coils, valves, and specialty wire mesh.
              </p>
              <p className="intro-para">
                Our inventory comprises a comprehensive spectrum of materials including Stainless Steel, Carbon Steel, Alloy Steel, Monel, Inconel, Hastelloy, Duplex, Super Duplex, Titanium, and other high-performance alloys.
              </p>

              <div className="intro-key-points">
                <div className="key-point-item">
                  <FiCheckCircle className="kp-icon" />
                  <span>Buffer stock of standard-size pipes, fittings, and flanges ready for rapid dispatch</span>
                </div>
                <div className="key-point-item">
                  <FiCheckCircle className="kp-icon" />
                  <span>Custom manufacturing and cutting tailored to client engineering drawings</span>
                </div>
                <div className="key-point-item">
                  <FiCheckCircle className="kp-icon" />
                  <span>Raw materials sourced strictly from reputed domestic and international mills</span>
                </div>
                <div className="key-point-item">
                  <FiCheckCircle className="kp-icon" />
                  <span>Manufacturer Test Certificates (MTC EN 10204 3.1) and Govt-approved laboratory reports</span>
                </div>
              </div>

              <div className="intro-action-row">
                <Button to="/about" variant="primary" size="md" icon={<FiArrowRight />}>
                  About Rushab Metal Industries
                </Button>
                <Button to="/contact" variant="secondary" size="md" icon={<FiPhone />}>
                  Contact Technical Sales
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us — EXACTLY 9 Cards */}
      <WhyChooseUs />

      {/* 6. Existing Products Section — Visual Redesign Only */}
      <section className="home-products-section section-py bg-light-steel" id="products-catalog">
        <div className="container">
          <SectionTitle
            subtitle="Engineering Inventory & Production"
            title="Featured Product Catalogue"
            description="Precision-engineered steel and special alloy components for demanding industrial and petrochemical applications."
            align="center"
          />

          {/* Category Tabs */}
          <div className="product-category-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`category-tab-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Product Cards Grid: Reduced height, crystal clear images, no blue overlay */}
          <div className="home-products-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="products-view-all-box">
            <Button to="/products" variant="primary" size="lg" icon={<FiArrowRight />}>
              View Complete Product Catalogue ({productsData.length} Categories)
            </Button>
          </div>
        </div>
      </section>

      {/* 7. Testing & Integrity Section */}
      <section className="home-quality-section section-py bg-white" id="testing-integrity">
        <div className="container">
          <div className="quality-preview-grid">
            {/* Left: Industrial/Testing Visual */}
            <div className="quality-visual-side">
              <div className="quality-image-card">
                <img
                  src="/images/herosliderimg/img2.jpg"
                  alt="Testing and Material Integrity at Rushab Metal Industries"
                  className="quality-img-main"
                  loading="lazy"
                />
                <div className="quality-cert-glass-badge">
                  <FiShield className="qc-badge-icon" />
                  <div>
                    <strong>100% Verified Quality</strong>
                    <span>EN 10204 3.1 / 3.2 Traceability</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Section Details */}
            <div className="quality-text-side">
              <div className="section-subtitle-badge align-left">
                <span className="subtitle-pulse-dot" />
                <span className="section-subtitle-text">TESTING & INTEGRITY</span>
              </div>
              <h2 className="quality-heading">
                Quality Assurance & Certified Testing
              </h2>
              <p className="quality-para">
                At Rushab Metal Industries, our adherence to ISO 9001:2015 guarantees full material traceability from raw billet ingestion to final product delivery. Every single batch is verified against rigorous dimensional tolerances and metallurgical composition standards.
              </p>

              <div className="quality-checklist">
                <div className="qc-item">
                  <FiCheckCircle className="qc-icon" />
                  <div>
                    <strong>Material Test Certificate (MTC)</strong>
                    <p>Supplied with EN 10204 3.1 / 3.2 documentation detailing complete chemical and mechanical test values.</p>
                  </div>
                </div>
                <div className="qc-item">
                  <FiCheckCircle className="qc-icon" />
                  <div>
                    <strong>Government-Approved Laboratory Testing</strong>
                    <p>Third-party physical, tensile, hardness, flattening, flare, and PMI test certificates available.</p>
                  </div>
                </div>
                <div className="qc-item">
                  <FiCheckCircle className="qc-icon" />
                  <div>
                    <strong>Third-Party Inspection Available on Request</strong>
                    <p>Coordinated with international inspection authorities prior to packaging and dispatch.</p>
                  </div>
                </div>
              </div>

              {/* Verified Testing Standards Tags */}
              <div className="test-badge-row">
                <span className="test-badge">PMI Testing</span>
                <span className="test-badge">Hydrostatic Testing</span>
                <span className="test-badge">Ultrasonic Testing</span>
                <span className="test-badge">Radiography</span>
                <span className="test-badge">Tensile Testing</span>
                <span className="test-badge">Hardness (Rockwell/Brinell)</span>
                <span className="test-badge">Chemical Spectro Analysis</span>
                <span className="test-badge">Intergranular Corrosion (IGC)</span>
              </div>

              <div className="quality-action-buttons">
                <Button to="/certificates" variant="primary" size="md" icon={<FiArrowRight />}>
                  View Quality Framework
                </Button>
                <Button to="/technical-data" variant="secondary" size="md">
                  Technical Specifications
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Infinite Third-Party Inspection Marquee */}
      <ThirdPartyMarquee />

      {/* 9. Industries We Serve (With Images) */}
      <section className="home-industries-section section-py bg-white" id="industries">
        <div className="container">
          <SectionTitle
            subtitle="Engineered for Critical Sectors"
            title="Industries We Serve"
            description="Delivering compliant piping and metallurgical solutions across essential global energy, processing, and manufacturing sectors."
            align="center"
          />

          <div className="industries-cards-grid">
            {featuredIndustries.map((ind, i) => (
              <IndustryCard
                key={i}
                index={i}
                title={ind.title}
                image={ind.image}
                link="/industries"
              />
            ))}
          </div>

          <div className="industries-footer-link-box">
            <Link to="/industries" className="view-all-industries-link">
              <span>Explore All 21 Industrial Sectors Detailed in Our Brochure</span>
              <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* 10. Countries / Worldwide Supply Section */}
      <WorldwideSupply />

      {/* 11. Direct Inquiry Desk */}
      <section className="home-cta-banner-section" id="inquiry-desk">
        <div className="container">
          <div className="home-cta-card">
            <div className="cta-content-wrap">
              <span className="cta-badge">DIRECT INQUIRY DESK</span>
              <h2 className="cta-title">
                Require Standard Inventory or Special Custom Fabrication?
              </h2>
              <p className="cta-text">
                Send your Bill of Materials (BOM) or specifications to our technical sales team for immediate pricing, MTC verification, and dispatch timelines.
              </p>
              <div className="cta-contact-pills">
                <a href={siteConfig.phoneHref} className="cta-pill" aria-label="Call Rushab Metal">
                  <FiPhone /> {siteConfig.phone}
                </a>
                <a href={siteConfig.emailHref} className="cta-pill" aria-label="Email Rushab Metal">
                  <FiSend /> {siteConfig.email}
                </a>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}?text=Hello%20Rushab%20Metal%20Industries,%20I%20have%20an%20inquiry.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-pill whatsapp"
                  aria-label="WhatsApp Rushab Metal"
                >
                  <FiMessageCircle /> WhatsApp Direct
                </a>
              </div>
            </div>
            <div className="cta-btn-wrap">
              <Button to="/contact" variant="cyan" size="lg" icon={<FiArrowRight />}>
                Submit Request For Quote
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
