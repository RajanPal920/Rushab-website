import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import Button from '../components/Button';
import productsData from '../data/products.json';
import { siteConfig } from '../data/siteConfig';
import { FiSearch, FiFilter, FiRotateCcw, FiPackage } from 'react-icons/fi';
import { FaFilePdf, FaDownload } from 'react-icons/fa';
import PageHero from '../components/common/PageHero';
import './Products.css';

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedMaterial, setSelectedMaterial] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = useMemo(() => [
    "All",
    "Pipes & Tubes",
    "Fittings",
    "Flanges",
    "Fasteners",
    "Sheets & Plates",
    "Bars & Rods",
    "Valves & Flow Control",
    "Screens & Mesh",
    "Lifting & Rigging",
    "Structural & Others"
  ], []);

  const materialsList = useMemo(() => [
    "All",
    "Stainless Steel",
    "Carbon Steel",
    "Alloy Steel",
    "Nickel Alloys",
    "Monel",
    "Inconel",
    "Hastelloy",
    "Duplex & Super Duplex",
    "Titanium",
    "Copper",
    "Brass",
    "Aluminium"
  ], []);

  // Filter products according to category, material, and search string
  const filteredProducts = useMemo(() => {
    return productsData.filter((product) => {
      // Category check
      const matchesCategory =
        selectedCategory === "All" ||
        product.category === selectedCategory ||
        (selectedCategory === "Fittings" && product.category === "Fittings");

      // Material check
      const matchesMaterial =
        selectedMaterial === "All" ||
        (product.materials &&
          product.materials.some((m) =>
            m.toLowerCase().includes(selectedMaterial.toLowerCase())
          ));

      // Search query check
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        product.title.toLowerCase().includes(q) ||
        product.subtitle.toLowerCase().includes(q) ||
        (product.std && product.std.toLowerCase().includes(q)) ||
        (product.materials && product.materials.some(m => m.toLowerCase().includes(q))) ||
        (product.description && product.description.toLowerCase().includes(q));

      return matchesCategory && matchesMaterial && matchesSearch;
    });
  }, [selectedCategory, selectedMaterial, searchQuery]);

  const handleResetFilters = () => {
    setSelectedCategory("All");
    setSelectedMaterial("All");
    setSearchQuery("");
  };

  const isFiltered = selectedCategory !== "All" || selectedMaterial !== "All" || searchQuery !== "";

  return (
    <div className="products-page">
      {/* Page Hero Banner */}
      <PageHero
        bgImage="/images/herosliderimg/products.jpg"
        eyebrow="ENGINEERING INVENTORY & PRODUCTION"
        titleWhite1="COMPREHENSIVE"
        titleHighlight="PRODUCT CATALOGUE."
        titleWhite2="READY BUFFER STOCK."
        description="Comprehensive inventory of pipes, tubes, butt weld fittings, forged fittings, flanges, fasteners, plates, and special alloys compliant with ASTM, ASME, API, and DIN standards."
        primaryBtn={{ text: "DOWNLOAD CATALOGUE ↗", link: "/catalogue" }}
        secondaryBtn={{ text: "GET IN TOUCH >", link: "/contact" }}
        pillText="100% PMI SPECTRO VERIFIED // MTC EN 10204 3.1 & 3.2"
      />

      {/* Main Listing Section */}
      <section className="section-py bg-light-steel">
        <div className="container">
          {/* Official Catalogue & Brochure Download Banner */}
          <div className="products-catalogue-download-bar">
            <div className="pcdb-left">
              <FaFilePdf className="pcdb-pdf-icon" />
              <div>
                <strong className="pcdb-title">Official Technical Literature & Engineering Catalogues</strong>
                <span className="pcdb-desc">Download complete ASTM/ASME standards, wall schedules, flange ratings & company profile in high-res PDF.</span>
              </div>
            </div>
            <div className="pcdb-actions">
              <a
                href={siteConfig.catalogues.productCatalogue.url}
                download="Rushab_Metal_Industries_Technical_Catalogue.pdf"
                className="pcdb-btn primary"
                title="Download Product Technical Catalogue PDF"
              >
                <FaDownload />
                <span>Product Catalogue ({siteConfig.catalogues.productCatalogue.size})</span>
              </a>
              <a
                href={siteConfig.catalogues.brochure.url}
                download="Rushab_Metal_Industries_Brochure.pdf"
                className="pcdb-btn secondary"
                title="Download Company Brochure PDF"
              >
                <FaDownload />
                <span>Company Brochure ({siteConfig.catalogues.brochure.size})</span>
              </a>
              <Link to="/catalogue" className="pcdb-link">
                View Portal ↗
              </Link>
            </div>
          </div>

          {/* Controls Bar: Search & Material Filter */}
          <div className="products-controls-bar">
            {/* Search Box */}
            <div className="product-search-input-wrap">
              <FiSearch className="search-icon" />
              <input
                type="text"
                className="product-search-input"
                placeholder="Search products by title, standard (e.g. ASTM A312, B16.9), or grade..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search products"
              />
              {searchQuery && (
                <button
                  type="button"
                  className="search-clear-btn"
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear search"
                >
                  ×
                </button>
              )}
            </div>

            {/* Material Dropdown Filter */}
            <div className="product-material-select-wrap">
              <label htmlFor="material-select" className="material-select-label">
                <FiFilter /> Filter Material:
              </label>
              <select
                id="material-select"
                className="material-dropdown"
                value={selectedMaterial}
                onChange={(e) => setSelectedMaterial(e.target.value)}
              >
                {materialsList.map((mat) => (
                  <option key={mat} value={mat}>
                    {mat === "All" ? "All Materials" : mat}
                  </option>
                ))}
              </select>
            </div>

            {/* Reset Button */}
            {isFiltered && (
              <button
                type="button"
                className="reset-filters-btn"
                onClick={handleResetFilters}
                title="Reset all filters"
              >
                <FiRotateCcw /> Reset Filters
              </button>
            )}
          </div>

          {/* Category Tabs Pill Bar */}
          <div className="category-pills-bar">
            <span className="category-bar-label">Categories:</span>
            <div className="category-pills-scroll">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`category-pill-btn ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Results Metadata */}
          <div className="results-status-bar">
            <span className="results-count">
              Showing <strong>{filteredProducts.length}</strong> of <strong>{productsData.length}</strong> products
              {selectedCategory !== "All" && ` in "${selectedCategory}"`}
              {selectedMaterial !== "All" && ` with "${selectedMaterial}"`}
            </span>
          </div>

          {/* Products Grid or Empty State */}
          {filteredProducts.length > 0 ? (
            <div className="products-catalog-grid">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="no-products-found-card">
              <div className="no-products-icon-circle">
                <FiPackage />
              </div>
              <h3 className="no-products-title">No Products Found</h3>
              <p className="no-products-desc">
                No catalog items match your selected category <strong>"{selectedCategory}"</strong>, material <strong>"{selectedMaterial}"</strong>, or search keywords.
              </p>
              <Button
                onClick={handleResetFilters}
                variant="primary"
                size="md"
                icon={<FiRotateCcw />}
              >
                Reset All Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Brochure Scope Notice */}
      <section className="catalog-disclaimer-section">
        <div className="container">
          <div className="catalog-notice-box">
            <h4>Custom Dimensions & Specification Inquiries</h4>
            <p>
              In addition to standard catalog items, Rushab Metal Industries undertakes special-item manufacturing, tailored wall thickness schedules, custom flanges up to 60" NB, and cut-to-length pipes. All orders are accompanied by Manufacturer Test Certificates (MTC).
            </p>
            <div className="notice-btn-row">
              <Button to="/contact" variant="cyan" size="md">
                Send Custom Specification
              </Button>
              <Button to="/technical-data" variant="secondary" size="md">
                View Dimensional Tolerances
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
