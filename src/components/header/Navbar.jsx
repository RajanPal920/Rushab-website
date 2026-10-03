import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaLinkedinIn,
  FaChevronDown,
} from "react-icons/fa";
import TopBar from "./TopBar";
import NavMegaMenu from "./NavMegaMenu";
import { siteConfig } from "../../data/siteConfig";
import { navigationLinks } from "../../data/navigation";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null); // 'products' | 'materials' | 'certificates' | null
  const location = useLocation();
  const hoverTimeoutRef = useRef(null);

  // Close menus on route change
  useEffect(() => {
    setActiveMenu(null);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Monitor scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Cleanup hover timeout
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    };
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  // Hover handlers with slight delay (better UX)
  const handleMouseEnter = (menuKey) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setActiveMenu(menuKey);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  // Decide which menu a nav link triggers (if any)
  const getMenuKeyForLink = (link) => {
    const name = link.name.toLowerCase();
    if (name === "products") return "products";
    if (name === "materials") return "materials";
    if (name === "certificates") return "certificates";
    return null;
  };

  return (
    <header className={`header-wrapper ${isScrolled ? "is-scrolled" : ""}`}>
      <TopBar />

      <nav className="main-navbar" aria-label="Main Navigation">
        <div className="container navbar-container">
          {/* Left: Brand Logo */}
          <div className="navbar-logo-area">
            <Link
              to="/"
              className="navbar-brand"
              aria-label={`${siteConfig.companyName} Home`}
            >
              <img
                src={siteConfig.logo}
                alt={siteConfig.companyName}
                className="brand-logo-img"
              />
            </Link>
          </div>

          {/* Center: Navigation Links with Mega Menu */}
          <div className="navbar-nav-area">
            <div className="desktop-nav">
              {navigationLinks.map((link) => {
                const menuKey = getMenuKeyForLink(link);

                if (menuKey) {
                  return (
                    <div
                      key={link.name}
                      className="nav-item-has-mega"
                      onMouseEnter={() => handleMouseEnter(menuKey)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <Link
                        to={link.href}
                        className={`nav-link ${activeMenu === menuKey ? "active" : ""} ${link.active ? "active" : ""}`}
                      >
                        {link.name}
                        <FaChevronDown
                          style={{ fontSize: "0.6em", marginLeft: "6px" }}
                        />
                      </Link>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`nav-link ${link.active ? "active" : ""}`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right: Actions */}
          <div className="navbar-action-area">
            <Link to="/contact" className="nav-quote-btn">
              GET QUOTE
            </Link>

            <button
              type="button"
              className="mobile-menu-toggle"
              onClick={toggleMobileMenu}
              aria-expanded={mobileMenuOpen}
              aria-label={
                mobileMenuOpen ? "Close menu" : "Open navigation menu"
              }
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* ✅ Mega Menu Render */}
        <NavMegaMenu
          activeMenu={activeMenu}
          onClose={() => setActiveMenu(null)}
        />
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`mobile-menu-backdrop ${mobileMenuOpen ? "open" : ""}`}
        onClick={closeMobileMenu}
        aria-hidden={!mobileMenuOpen}
      />

      <aside
        className={`mobile-drawer ${mobileMenuOpen ? "open" : ""}`}
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
              <Link
                to={link.href}
                className={`mobile-nav-link ${link.active ? "active" : ""}`}
                onClick={closeMobileMenu}
              >
                <span>{link.name}</span>
                {link.active && <span className="active-dot">•</span>}
              </Link>
            </li>
          ))}
          <li className="mobile-nav-item mobile-quote-item">
            <Link
              to="/contact"
              className="mobile-quote-btn"
              onClick={closeMobileMenu}
            >
              GET QUOTE
            </Link>
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
