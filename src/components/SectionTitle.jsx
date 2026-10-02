import React from 'react';
import './SectionTitle.css';

export default function SectionTitle({
  subtitle,
  title,
  description,
  align = 'center',
  light = false,
  className = ''
}) {
  return (
    <div className={`section-header-component text-${align} ${light ? 'theme-light' : 'theme-dark'} ${className}`}>
      {subtitle && (
        <div className={`section-subtitle-badge align-${align}`}>
          <span className="subtitle-pulse-dot"></span>
          <span className="section-subtitle-text">{subtitle}</span>
        </div>
      )}
      {title && (
        <h2 className="section-heading-title">
          {title}
        </h2>
      )}
      {description && (
        <p className="section-heading-desc">
          {description}
        </p>
      )}
      <div className={`section-title-divider align-${align}`}>
        <span className="divider-line line-left"></span>
        <span className="divider-diamond"></span>
        <span className="divider-line line-right"></span>
      </div>
    </div>
  );
}
