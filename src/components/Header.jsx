import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaLinkedinIn,
  FaBars,
  FaTimes,
  FaCertificate,
  FaFilePdf
} from 'react-icons/fa';
import { siteConfig } from '../data/siteConfig';
import { navigationLinks } from '../data/navigation';
import NavMegaMenu from './navigation/NavMegaMenu';
import './Header.css';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleMenuEnter = (menuKey) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(menuKey);
  };

  const handleMenuLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 180);
  };

  const closeMenu = () => {
    setActiveMenu(null);
    setMobileMenuOpen(false);
  };

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
      {/* 1. TOP BAR */}
      <div className="header-topbar">
        <div className="container topbar-container">
          <div className="topbar-left">
            <a href={siteConfig.phoneHref} className="topbar-contact-item">
              <FaPhoneAlt className="tb-icon" />
              <span>{siteConfig.phoneDisplay}</span>
            </a>
            <span className="tb-sep">•</span>
            <a href={siteConfig.phoneHrefSecondary} className="topbar-contact-item secondary-phone">
              <FaPhoneAlt className="tb-icon" />
              <span>{siteConfig.phoneSecondary}</span>
            </a>
            <span className="tb-sep">•</span>
            <a href={siteConfig.emailHref} className="topbar-contact-item">
              <FaEnvelope className="tb-icon" />
              <span>{siteConfig.email}</span>
            </a>
          </div>

          <div className="topbar-right">
            <Link to="/catalogue" className="topbar-catalogue-pill" title="Official Technical Catalogues & Brochures">
              <FaFilePdf className="tb-pdf-icon" />
              <span>E-CATALOGUE</span>
            </Link>

            <div className="topbar-iso-badge">
              <FaCertificate className="tb-iso-icon" />
              <span>ISO 9001:2015 CERTIFIED</span>
            </div>

            <div className="topbar-social-links">
              <a
                href={siteConfig.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="tb-social-btn"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
              <a
                href={siteConfig.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="tb-social-btn"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href={siteConfig.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="tb-social-btn"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href={siteConfig.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="tb-social-btn"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVBAR */}
      <nav className="main-navigation" aria-label="Main Navigation">
        <div className="container nav-container">
          {/* Logo Area */}
          <Link to="/" className="navbar-brand-logo" aria-label={`${siteConfig.companyName} Home`}>
            <img
              src={siteConfig.logo}
              alt={siteConfig.companyName}
              className="navbar-logo-image"
            />
          </Link>

          {/* Desktop Nav Items */}
          <div className="desktop-navigation-links">
            {navigationLinks.map((link) => {
              const lowerName = link.name.toLowerCase();
              const menuKey =
                lowerName === 'products'
                  ? 'products'
                  : lowerName === 'materials'
                  ? 'materials'
                  : lowerName === 'certificates'
                  ? 'certificates'
                  : null;

              const isMenuActive = Boolean(menuKey && activeMenu === menuKey);

              return (
                <div
                  key={link.name}
                  className="nav-link-dropdown-wrap"
                  onMouseEnter={() => menuKey && handleMenuEnter(menuKey)}
                  onMouseLeave={handleMenuLeave}
                >
                  <NavLink
                    to={link.href}
                    className={({ isActive }) =>
                      `nav-item-link ${isActive ? 'active' : ''} ${isMenuActive ? 'menu-active' : ''}`
                    }
                    end={link.href === '/'}
                    onClick={() => setActiveMenu(null)}
                  >
                    <span>{link.name}</span>
                    <span className="nav-accent-underline"></span>
                  </NavLink>
                  {isMenuActive && (
                    <NavMegaMenu activeMenu={menuKey} onClose={() => setActiveMenu(null)} />
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA Action & Mobile Toggle */}
          <div className="navbar-actions">
            <Link to="/contact" className="navbar-quote-btn">
              <span>GET QUOTE</span>
            </Link>

            <button
              type="button"
              className="mobile-hamburger-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Global Nav Mega Menu Dropdown removed as it's now rendered inside the nav links */}
      </nav>

      {/* 3. MOBILE DRAWER & BACKDROP */}
      <div
        className={`mobile-drawer-backdrop ${mobileMenuOpen ? 'active' : ''}`}
        onClick={closeMenu}
        aria-hidden={!mobileMenuOpen}
      />

      <aside
        className={`mobile-navigation-drawer ${mobileMenuOpen ? 'open' : ''}`}
        aria-label="Mobile Navigation"
      >
        <div className="mobile-drawer-header">
          <img
            src={siteConfig.logo}
            alt={siteConfig.companyName}
            className="mobile-drawer-logo"
          />
          <button
            type="button"
            className="mobile-drawer-close"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
        </div>

        <div className="mobile-drawer-body">
          <ul className="mobile-nav-menu">
            {navigationLinks.map((link) => (
              <li key={link.name} className="mobile-nav-item">
                <NavLink
                  to={link.href}
                  className={({ isActive }) => `mobile-nav-anchor ${isActive ? 'active' : ''}`}
                  onClick={closeMenu}
                  end={link.href === '/'}
                >
                  <span>{link.name}</span>
                  <span className="mobile-active-indicator"></span>
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="mobile-drawer-cta">
            <Link to="/catalogue" className="mobile-catalogue-btn" onClick={closeMenu}>
              <FaFilePdf />
              <span>DOWNLOAD CATALOGUES (PDF)</span>
            </Link>
            <Link to="/contact" className="mobile-get-quote" onClick={closeMenu}>
              REQUEST A QUOTE
            </Link>
          </div>

          <div className="mobile-contact-block">
            <div className="mobile-iso-tag">
              <FaCertificate /> ISO 9001:2015 Certified Exporter & Stockist
            </div>
            <a href={siteConfig.phoneHref} className="mobile-contact-line">
              <FaPhoneAlt /> {siteConfig.phone}
            </a>
            <a href={siteConfig.phoneHrefSecondary} className="mobile-contact-line">
              <FaPhoneAlt /> {siteConfig.phoneSecondary}
            </a>
            <a href={siteConfig.emailHref} className="mobile-contact-line">
              <FaEnvelope /> {siteConfig.email}
            </a>
          </div>
        </div>
      </aside>
    </header>
  );
}
