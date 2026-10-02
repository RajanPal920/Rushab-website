import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';
import './IndustryCard.css';

export default function IndustryCard({ title, image, link = "/industries", index = 0 }) {
  return (
    <div
      className="industry-3d-card-wrapper"
      style={{ animationDelay: `${index * 120}ms` }}
    >
      <Link to={link} className="industry-3d-card" aria-label={`Explore ${title} supply scope`}>
        {/* Physical 3D Depth Shadow Plate */}
        <div className="industry-card-depth-plate" />

        {/* Main Card Body */}
        <div className="industry-card-body">
          {/* Image Box with overflow: hidden for clean zoom boundary */}
          <div className="industry-image-box">
            <img src={image} alt={title} className="industry-card-img" loading="lazy" />
            <div className="industry-localized-gradient" />
            <div className="industry-shimmer-sweep" />
          </div>

          {/* Floating 3D Content Layer */}
          <div className="industry-floating-overlay">
            <div className="industry-info-wrap">
              <span className="industry-sector-pill">Sector</span>
              <h3 className="industry-card-title">{title}</h3>
            </div>
            <div className="industry-card-arrow">
              <FiArrowUpRight />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
