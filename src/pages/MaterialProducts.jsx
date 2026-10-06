import React, { useState, useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import Button from '../components/Button';
import PageHero from '../components/common/PageHero';
import {
  getMaterialInfo,
  getProductsForMaterial,
  materialsList
} from '../data/materialsData';
import {
  FiSearch,
  FiRotateCcw,
  FiPackage,
  FiShield,
  FiCheck,
  FiArrowLeft
} from 'react-icons/fi';
import './Products.css';
import './MaterialProducts.css';

export default function MaterialProducts() {
  const { materialSlug } = useParams();

  const materialInfo = useMemo(() => {
    return getMaterialInfo(materialSlug);
  }, [materialSlug]);

  const allProducts = useMemo(() => {
    if (!materialSlug) return [];
    return getProductsForMaterial(materialSlug);
  }, [materialSlug]);

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Extract distinct categories present in this material's product collection
  const categories = useMemo(() => {
    const set = new Set();
    allProducts.forEach((p) => {
      if (p.category) set.add(p.category);
    });
    return ['All', ...Array.from(set)];
  }, [allProducts]);

  // Filter products by selected category and search string
  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const matchesCategory =
        selectedCategory === 'All' || product.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        product.title.toLowerCase().includes(q) ||
        (product.subtitle && product.subtitle.toLowerCase().includes(q)) ||
        (product.std && product.std.toLowerCase().includes(q)) ||
        (product.category && product.category.toLowerCase().includes(q)) ||
        (product.description && product.description.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [allProducts, selectedCategory, searchQuery]);

  const handleResetFilters = () => {
    setSelectedCategory('All');
    setSearchQuery('');
  };

  const isFiltered = selectedCategory !== 'All' || searchQuery !== '';

  // If the slug doesn't exist in our materials spectrum, redirect to /materials
  if (!materialInfo) {
    return <Navigate to="/materials" replace />;
  }

  return (
    <div className="material-products-page">
      {/* Universal Page Hero Banner */}
      <PageHero
        bgImage="/images/herosliderimg/products.jpg"
        eyebrow={`METALLURGICAL SPECTRUM // ${materialInfo.category.toUpperCase()}`}
        titleWhite1={materialInfo.displayName.toUpperCase()}
        titleHighlight="PRODUCTS."
        titleWhite2="MILL CERTIFIED."
        description={materialInfo.heroDesc}
        primaryBtn={{
          text: `INQUIRE ${materialInfo.name.toUpperCase()} ↗`,
          link: `/contact?material=${encodeURIComponent(materialInfo.name)}`
        }}
        secondaryBtn={{ text: 'EXPLORE ALL MATERIALS >', link: '/materials' }}
        pillText={`${allProducts.length} PRODUCTS AVAILABLE // 100% PMI SPECTRO VERIFIED`}
      />

      {/* Main Content Section */}
      <section className="section-py bg-light-steel">
        <div className="container">
          {/* Breadcrumb Navigation Bar */}
          <nav className="mat-breadcrumb-nav" aria-label="Breadcrumb">
            <Link to="/" className="mat-bc-link">
              Home
            </Link>
            <span className="mat-bc-sep">/</span>
            <Link to="/materials" className="mat-bc-link">
              Materials
            </Link>
            <span className="mat-bc-sep">/</span>
            <span className="mat-bc-current">{materialInfo.displayName}</span>
          </nav>

          {/* Quick Switcher: Horizontal Material Pills */}
          <div className="mat-quick-switcher-container">
            <span className="mat-quick-switcher-label">Select Metallurgy:</span>
            <div className="mat-quick-switcher-scroll">
              {materialsList.map((m) => {
                const isActive = m.slug === materialInfo.slug;
                return (
                  <Link
                    key={m.slug}
                    to={`/materials/${m.slug}`}
                    className={`mat-quick-pill ${isActive ? 'active' : ''}`}
                  >
                    {m.name}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Controls Bar: Search & Reset */}
          <div className="products-controls-bar">
            {/* Search Box */}
            <div className="product-search-input-wrap">
              <FiSearch className="search-icon" />
              <input
                type="text"
                className="product-search-input"
                placeholder={`Search ${materialInfo.name} products by title, standard, or type...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label={`Search ${materialInfo.name} products`}
              />
              {searchQuery && (
                <button
                  type="button"
                  className="search-clear-btn"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                >
                  ×
                </button>
              )}
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

          {/* Category Tabs Pill Bar (if multiple categories available) */}
          {categories.length > 2 && (
            <div className="category-pills-bar">
              <span className="category-bar-label">Product Families:</span>
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
          )}

          {/* Results Status Bar */}
          <div className="results-status-bar">
            <span className="results-count">
              Showing <strong>{filteredProducts.length}</strong> of{' '}
              <strong>{allProducts.length}</strong> products for{' '}
              <strong>{materialInfo.displayName}</strong>
              {selectedCategory !== 'All' && ` in "${selectedCategory}"`}
            </span>
            <span className="mat-standards-pill-tag">
              {materialInfo.gradeBadge}
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
              <h3 className="no-products-title">No Matching Products Found</h3>
              <p className="no-products-desc">
                {isFiltered
                  ? `No catalog items match your current filter criteria under ${materialInfo.displayName}.`
                  : `Currently no catalog products are listed under ${materialInfo.displayName}.`}
              </p>
              {isFiltered && (
                <Button
                  onClick={handleResetFilters}
                  variant="primary"
                  size="md"
                  icon={<FiRotateCcw />}
                >
                  Reset Search Filters
                </Button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Material Technical Specification Summary Card */}
      <section className="section-py-sm bg-white">
        <div className="container">
          <div className="mat-specs-summary-card">
            <div className="mat-specs-summary-header">
              <div className="mat-specs-title-wrap">
                <span className="mat-specs-eyebrow">METALLURGICAL STANDARDS</span>
                <h3 className="mat-specs-title">{materialInfo.displayName} Specification Highlights</h3>
              </div>
              <span className="mat-specs-badge">{materialInfo.category}</span>
            </div>

            <div className="mat-specs-summary-grid">
              <div className="mat-specs-col">
                <strong className="mat-specs-label">Applicable Specifications:</strong>
                <p className="mat-specs-val">{materialInfo.standards}</p>
              </div>

              {materialInfo.grades && materialInfo.grades.length > 0 && (
                <div className="mat-specs-col">
                  <strong className="mat-specs-label">Supplied Grades & Standards:</strong>
                  <ul className="mat-grades-mini-list">
                    {materialInfo.grades.map((gradeItem, idx) => (
                      <li key={idx}>
                        <FiCheck className="mat-check-icon" />
                        <span>{gradeItem}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mat-specs-col full-width">
                <strong className="mat-specs-label">Performance & Metallurgy Highlights:</strong>
                <p className="mat-specs-val">{materialInfo.features}</p>
              </div>
            </div>

            <div className="mat-specs-card-footer">
              <div className="mat-pmi-guarantee">
                <FiShield className="mat-shield-icon" />
                <span>
                  All {materialInfo.displayName} supplies include Mill Test Certificates (EN 10204 3.1 & 3.2) and Positive Material Identification (PMI).
                </span>
              </div>
              <Button
                to={`/contact?material=${encodeURIComponent(materialInfo.name)}`}
                variant="primary"
                size="md"
              >
                Request Quotation for {materialInfo.name}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
