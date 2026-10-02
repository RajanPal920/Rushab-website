import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';
import './ProductCard.css';

export default function ProductCard({ product }) {
  if (!product) return null;

  return (
    <div className="industrial-product-card">
      <Link to={`/products/${product.slug}`} className="product-card-link-wrapper" aria-label={`View ${product.title} details`}>
        <div className="product-card-media">
          <img
            src={product.image}
            alt={product.title}
            className="product-card-img"
            loading="lazy"
          />
          <div className="product-card-overlay"></div>
          
          <div className="product-card-badges">
            {product.std && (
              <span className="p-badge badge-std">
                <span className="p-badge-dot"></span>
                {product.std.split('/')[0].trim()}
              </span>
            )}
            {product.type && (
              <span className="p-badge badge-type">
                {product.type}
              </span>
            )}
          </div>
        </div>

        <div className="product-card-body">
          <span className="product-category-tag">{product.category}</span>
          <h3 className="product-card-title">{product.title}</h3>
          <p className="product-card-subtitle">{product.subtitle}</p>

          {product.materials && product.materials.length > 0 && (
            <div className="product-materials-chips">
              {product.materials.slice(0, 3).map((mat, i) => (
                <span key={i} className="mat-chip">{mat}</span>
              ))}
              {product.materials.length > 3 && (
                <span className="mat-chip more">+{product.materials.length - 3}</span>
              )}
            </div>
          )}

          <div className="product-card-footer">
            <span className="explore-specs-text">EXPLORE SPECS</span>
            <div className="explore-arrow-circle">
              <FiArrowUpRight />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
