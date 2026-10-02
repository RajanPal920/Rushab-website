import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaCertificate,
  FaArrowRight
} from 'react-icons/fa';
import { siteConfig } from '../data/siteConfig';
import './Footer.css';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {

  return (
    <footer className="site-footer">
      {/* Upper Footer Value Banner */}
      <div className="footer-value-banner">
        <div className="container banner-inner">
          <div className="banner-left">
            <span className="banner-eyebrow">OUR CORE COMMITMENT</span>
            <h3 className="banner-motto">"{siteConfig.motto}"</h3>
          </div>
          <div className="banner-right">
            <Link to="/contact" className="footer-cta-btn">
              <span>GET IN TOUCH FOR ENQUIRIES</span>
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Body */}
      <div className="footer-main-grid-wrapper">
        <div className="container">
          <div className="footer-columns-grid">
            {/* Col 1: Brand & About */}
            <div className="footer-col col-brand">
              <Link to="/" className="footer-logo-link" aria-label="Rushab Metal Industries Home">
                <img
                  src={siteConfig.logo}
                  alt={siteConfig.companyName}
                  className="footer-logo-img"
                />
              </Link>
              <p className="footer-brand-desc">
                ISO 9001:2015 certified exporter, importer, supplier, and stockist of ferrous and non-ferrous metal products based in Mumbai, India. Supplying world-class piping, fittings, flanges, and specialty alloys worldwide.
              </p>
              <div className="footer-iso-badge">
                <FaCertificate className="badge-icon" />
                <span>ISO 9001:2015 Certified Company</span>
              </div>
              <div className="footer-social-row">
                <a
                  href={siteConfig.socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="f-social-btn wa"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href={siteConfig.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="f-social-btn"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>
                <a
                  href={siteConfig.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="f-social-btn"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href={siteConfig.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="f-social-btn"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div className="footer-col">
              <h4 className="footer-col-title">Navigation</h4>
              <ul className="footer-nav-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/products">Product Catalogue</Link></li>
                <li><Link to="/catalogue">Downloads & Brochure (PDF)</Link></li>
                <li><Link to="/materials">Materials & Grades</Link></li>
                <li><Link to="/industries">Industries We Serve</Link></li>
                <li><Link to="/technical-data">Technical Data & Weights</Link></li>
                <li><Link to="/certificates">Quality & Certifications</Link></li>
                <li><Link to="/contact">Contact / Inquiry</Link></li>
              </ul>
            </div>

            {/* Col 3: Products */}
            <div className="footer-col">
              <h4 className="footer-col-title">Core Products</h4>
              <ul className="footer-nav-list">
                <li><Link to="/products/pipes-and-tubes">Pipes and Tubes</Link></li>
                <li><Link to="/products/butt-weld-fittings">Butt Weld Fittings</Link></li>
                <li><Link to="/products/forged-fittings">Forged & Screwed Fittings</Link></li>
                <li><Link to="/products/flanges">Industrial Flanges</Link></li>
                <li><Link to="/products/fasteners">High Tensile Fasteners</Link></li>
                <li><Link to="/products/sheets-plates">Sheets and Plates</Link></li>
                <li><Link to="/products/valves">Industrial Valves</Link></li>
                <li><Link to="/products/wire-mesh-screens">Wire Mesh & Screens</Link></li>
              </ul>
            </div>

            {/* Col 4: Contact Info */}
            <div className="footer-col col-contact">
              <h4 className="footer-col-title">Contact Office</h4>
              <ul className="footer-contact-list">
                <li className="f-contact-item">
                  <FaMapMarkerAlt className="f-ci-icon" />
                  <span>
                    <strong>{siteConfig.companyName}</strong><br />
                    {siteConfig.address.office},<br />
                    {siteConfig.address.street},<br />
                    {siteConfig.address.city}, {siteConfig.address.country}
                  </span>
                </li>
                <li className="f-contact-item">
                  <FaPhoneAlt className="f-ci-icon" />
                  <div>
                    <a href={siteConfig.phoneHref}>{siteConfig.phone}</a><br />
                    <a href={siteConfig.phoneHrefSecondary}>{siteConfig.phoneSecondary}</a>
                  </div>
                </li>
                <li className="f-contact-item">
                  <FaEnvelope className="f-ci-icon" />
                  <div>
                    <a href={siteConfig.emailHref}>{siteConfig.email}</a><br />
                    <a href={siteConfig.emailHrefSecondary}>{siteConfig.emailSecondary}</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom-bar">
        <div className="container bottom-bar-inner">
          <p className="copyright-text">
            &copy; {CURRENT_YEAR} <strong>{siteConfig.companyName} ({siteConfig.shortName})</strong>. All Rights Reserved.
          </p>
          <div className="bottom-bar-links">
            <Link to="/certificates">ISO 9001:2015</Link>
            <span className="dot">•</span>
            <Link to="/catalogue">Downloads & Catalogues</Link>
            <span className="dot">•</span>
            <Link to="/technical-data">Engineering Standards</Link>
            <span className="dot">•</span>
            <Link to="/contact">Sales Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
