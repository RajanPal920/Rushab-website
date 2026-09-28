import React, { useState, useEffect } from 'react';
import {
  FaBars,
  FaTimes,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaLinkedinIn
} from 'react-icons/fa';
import TopBar from './TopBar';
import { siteConfig } from '../../data/siteConfig';
import { navigationLinks } from '../../data/navigation';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitor scroll for subtle sticky header compression
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`header-wrapper ${isScrolled ? 'is-scrolled' : ''}`}>
      {/* 1. Slim Professional Top Contact Bar */}
      <TopBar />

      {/* 2. Main Navigation Bar */}
      <nav className="main-navbar" aria-label="Main Navigation">
        <div className="container navbar-container">
          {/* Left: Brand Logo Area */}
          <div className="navbar-logo-area">
            <a
              href="/"
              className="navbar-brand"
              aria-label={`${siteConfig.companyName} Home`}
            >
              <img
                src={siteConfig.logo}
                alt={siteConfig.companyName}
                className="brand-logo-img"
              />
            </a>
          </div>

          {/* Center: Visually Centered Navigation Links Area */}
          <div className="navbar-nav-area">
            <div className="desktop-nav">
              {navigationLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`nav-link ${link.active ? 'active' : ''}`}
                  aria-current={link.active ? 'page' : undefined}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Action Area (Get Quote & Mobile Toggle) */}
          <div className="navbar-action-area">
            <a href="/contact" className="nav-quote-btn">
              GET QUOTE
            </a>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              className="mobile-menu-toggle"
              onClick={toggleMobileMenu}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </nav>

      {/* 3. Mobile Navigation Drawer & Backdrop */}
      <div
        className={`mobile-menu-backdrop ${mobileMenuOpen ? 'open' : ''}`}
        onClick={closeMobileMenu}
        aria-hidden={!mobileMenuOpen}
      />

      <aside
        className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}
        aria-label="Mobile Navigation Menu"
        aria-hidden={!mobileMenuOpen}
      >
        <div className="mobile-drawer-header">
          <img
            src={siteConfig.logo}
            alt={siteConfig.companyName}
            className="mobile-drawer-logo"
          />
          <button
            type="button"
            className="mobile-close-btn"
            onClick={closeMobileMenu}
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
        </div>

        <ul className="mobile-nav-list">
          {navigationLinks.map((link) => (
            <li key={link.name} className="mobile-nav-item">
              <a
                href={link.href}
                className={`mobile-nav-link ${link.active ? 'active' : ''}`}
                onClick={closeMobileMenu}
                aria-current={link.active ? 'page' : undefined}
              >
                <span>{link.name}</span>
                {link.active && <span className="active-dot">•</span>}
              </a>
            </li>
          ))}
          <li className="mobile-nav-item mobile-quote-item">
            <a
              href="/contact"
              className="mobile-quote-btn"
              onClick={closeMobileMenu}
            >
              GET QUOTE
            </a>
          </li>
        </ul>

        <div className="mobile-drawer-footer">
          <div className="mobile-contact-group">
            <a
              href={siteConfig.phoneHref}
              className="mobile-contact-item"
              onClick={closeMobileMenu}
            >
              <FaPhoneAlt className="icon" />
              <span>{siteConfig.phoneDisplay}</span>
            </a>
            <a
              href={siteConfig.emailHref}
              className="mobile-contact-item"
              onClick={closeMobileMenu}
            >
              <FaEnvelope className="icon" />
              <span>{siteConfig.email}</span>
            </a>
          </div>

          <div className="mobile-socials">
            <a
              href={siteConfig.socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-social-link"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href={siteConfig.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-social-link"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href={siteConfig.socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-social-link"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
            <a
              href={siteConfig.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-social-link"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </aside>
    </header>
  );
}
