// src/components/catalogue/ProductTypeCardsSection.jsx
// LEVEL 2: Material-Specific Product Page -> Product Type Cards Grid
// Universal component rendering Product Type Cards for ALL 20 existing categories

import React from "react";
import { Link } from "react-router-dom";
import {
  getCatalogueProduct,
  getCatalogueMaterial,
  cleanSlug
} from "../../data/productCatalogueData.js";
import { flangeTypesDatabase } from "../../data/flangeTypesData.js";
import { FiArrowRight, FiShield, FiSliders, FiCheckCircle } from "react-icons/fi";
import "./ProductTypeCardsSection.css";

export default function ProductTypeCardsSection({
  product,
  variant,
  currentMaterialSlug = "",
  currentVariantTitle = ""
}) {
  if (!product) return null;

  const catProd = getCatalogueProduct(product.slug);
  if (!catProd) return null;

  // Determine material slug
  const matSlug =
    currentMaterialSlug ||
    (variant?.materialGroup ? cleanSlug(variant.materialGroup) : "") ||
    (variant?.slug ? cleanSlug(variant.slug).replace(new RegExp(`-${catProd.slug}$`), "") : "") ||
    catProd.materials[0]?.slug;

  const catMat = getCatalogueMaterial(catProd.slug, matSlug) || catProd.materials[0];

  // Flanges special handling (12 ASME types with full engineering data)
  const isFlanges = catProd.slug === "flanges" || product.slug === "flanges";

  const typeList = isFlanges
    ? flangeTypesDatabase.map((f) => ({
        ...f,
        image: f.heroImage || catMat?.image || "/images/products/types-of-flanges.png",
        standards: f.standards.split(",")[0],
        ratings: "Class 150# to 2500#",
        sizes: f.sizeRange.split(" (")[0]
      }))
    : catMat?.types || [];

  if (!typeList || typeList.length === 0) return null;

  const materialName = catMat?.name || variant?.materialGroup || "Industrial Specification";

  return (
    <section className="section-py product-type-cards-section bg-light-steel" id="product-types">
      <div className="container">
        {/* Section Header */}
        <div className="types-section-header">
          <div className="types-header-info">
            <span className="types-eyebrow-pill">
              <FiShield className="pill-shield-icon" /> LEVEL 2: PRODUCT TYPES & CONFIGURATIONS
            </span>
            <h2 className="types-section-heading">
              Available Types of {materialName} {catProd.title}
            </h2>
            <p className="types-section-desc">
              Rishabh Metal Industries manufactures, machines, and stocks the following {typeList.length} verified configurations in {materialName}.
              Click any product type card below to inspect its dedicated dimensional specifications, ASME/ASTM standards, and clickable grade dossiers.
            </p>
          </div>

          {isFlanges && (
            <div className="types-header-infographic-preview">
              <div className="infographic-badge-box">
                <span className="info-badge-label">ASME B16.5 / B16.47</span>
                <img
                  src="/images/products/types-of-flanges.png"
                  alt="Types of Flanges Chart"
                  className="infographic-mini-thumb"
                  loading="lazy"
                />
                <span className="info-chart-caption">12 Standard Industrial Flange Types</span>
              </div>
            </div>
          )}
        </div>

        {/* Universal Type Cards Grid */}
        <div className="product-types-grid">
          {typeList.map((item, idx) => {
            // URL target: Level 3 Product Type Detail Page
            const targetUrl = `/products/${catProd.slug}-manufacture-in-india/${catMat.slug}/${item.slug}`;

            const cardImg = item.image || item.heroImage || catMat.image || catProd.heroImage;

            return (
              <Link
                key={item.id || item.slug || idx}
                to={targetUrl}
                className="product-type-card"
                title={`View ${item.name} detailed specifications & available grades`}
              >
                <div className="type-card-img-wrap">
                  <img
                    src={cardImg}
                    alt={`${materialName} ${item.name}`}
                    className="type-card-img"
                    loading="lazy"
                  />
                  <span className="type-card-std-badge">
                    {item.standards ? item.standards.split(",")[0] : catProd.std.split(" / ")[0]}
                  </span>
                </div>

                <div className="type-card-body">
                  <h3 className="type-card-title">{item.name}</h3>

                  <p className="type-card-desc">
                    {item.shortDescription || item.overview || `Standard ${item.name} manufactured from certified ${materialName}.`}
                  </p>

                  <div className="type-card-meta-list">
                    {item.sizeRange && (
                      <div className="type-meta-row">
                        <span className="meta-row-label">Sizes:</span>
                        <span className="meta-row-val">{item.sizeRange}</span>
                      </div>
                    )}
                    {item.pressureClasses && (
                      <div className="type-meta-row">
                        <span className="meta-row-label">Ratings:</span>
                        <span className="meta-row-val">{item.pressureClasses}</span>
                      </div>
                    )}
                  </div>

                  <div className="type-card-action">
                    <span>Inspect Specs & Available Grades</span>
                    <FiArrowRight className="action-arrow" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom Assurance Bar */}
        <div className="types-assurance-bar">
          <div className="assurance-item">
            <FiSliders className="assur-icon" />
            <span>Complete Dimensional Compliance: Custom Schedules, Wall Thicknesses, & CNC Machining</span>
          </div>
          <div className="assurance-item">
            <FiCheckCircle className="assur-icon" />
            <span>Supplied with 100% PMI Spectro Verification and EN 10204 3.1 Mill Test Certification</span>
          </div>
        </div>
      </div>
    </section>
  );
}
