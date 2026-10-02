import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/hero.css';

/**
 * Universal PageHero Component
 * Replicates the Home page Hero Slider's visual design:
 * - Crystal clear high-res background image with natural contrast
 * - Left-aligned frosted glassmorphism text container (card)
 * - Screen-height viewport fitting
 * - Cyan eyebrow with dash
 * - Bold industrial heading with cyan accent
 * - Dual call-to-action buttons
 * - Bottom status pill with pulsing cyan dot
 */
export default function PageHero({
  bgImage = '/images/herosliderimg/img1.jpg',
  eyebrow = 'PRECISION PIPING & METALLURGY',
  titleWhite1 = 'ENGINEERED FOR',
  titleHighlight = 'INDUSTRIAL SCALE.',
  titleWhite2 = 'BUILT FOR GLOBAL DEMAND.',
  description = 'Supplying and exporting precision engineered piping and metallurgical solutions across essential industrial sectors.',
  primaryBtn = { text: 'EXPLORE PRODUCTS ↗', link: '/products' },
  secondaryBtn = { text: 'GET IN TOUCH >', link: '/contact' },
  pillText = 'READY BUFFER INVENTORY // RAPID PORT DISPATCH'
}) {
  return (
    <section className="hero-section page-hero-section" aria-label="Page Hero Banner">
      <div className="hero-slide page-hero-slide is-active">
        {/* Crystal Clear High-Res Background Image */}
        <img
          src={bgImage}
          alt={eyebrow}
          className="hero-slide-bg"
          loading="eager"
        />

        {/* Subtle Vignette Overlay for Crisp Contrast */}
        <div className="hero-subtle-vignette" />

        {/* Hero Content Inner Container */}
        <div className="hero-container-inner">
          {/* Frosted Glass Card on Left Side */}
          <div className="hero-glass-card">
            {/* Eyebrow Line */}
            {eyebrow && (
              <div className="hero-eyebrow-line">
                <span className="eyebrow-dash">—</span>
                <span className="eyebrow-text">{eyebrow}</span>
              </div>
            )}

            {/* Main Headline */}
            <h1 className="hero-headline">
              {titleWhite1 && <span>{titleWhite1} </span>}
              {titleHighlight && <span className="headline-highlight">{titleHighlight} </span>}
              {titleWhite2 && <span>{titleWhite2}</span>}
            </h1>

            {/* Description */}
            {description && <p className="hero-desc">{description}</p>}

            {/* Action Buttons Row */}
            <div className="hero-btn-row">
              {primaryBtn && (
                <Link to={primaryBtn.link} className="hero-btn-primary">
                  <span>{primaryBtn.text}</span>
                </Link>
              )}
              {secondaryBtn && (
                <Link to={secondaryBtn.link} className="hero-btn-secondary">
                  <span>{secondaryBtn.text}</span>
                </Link>
              )}
            </div>

            {/* Bottom Status Pill */}
            {pillText && (
              <div className="hero-card-bottom-pill">
                <span className="card-pill-dot" />
                <span className="card-pill-text">{pillText}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
