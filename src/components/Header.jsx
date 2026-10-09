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
  FaFilePdf,
  FaChevronDown,
  FaChevronUp,
  FaChevronRight
} from 'react-icons/fa';
import { siteConfig } from '../data/siteConfig';
import { navigationLinks } from '../data/navigation';
import { productsMegaMenu, materialsMegaMenu } from '../data/megaMenuData';
import {
  buttweldSubcategories,
  flangesSubcategories,
  fastenersSubcategories,
  ferruleSubcategories,
  forgedSubcategories
} from '../data/subcategoriesData';
import { getProductUrl, getVariantUrl, getMaterialUrl } from '../utils/seoSlugUtils';
import NavMegaMenu from './navigation/NavMegaMenu';
import './Header.css';

const mainProductFamilies = [
  {
    name: "Butt Weld Fittings",
    slug: "butt-weld-fittings",
    items: buttweldSubcategories,
  },
  {
    name: "Flanges",
    slug: "flanges",
    items: flangesSubcategories,
  },
  {
    name: "Fasteners",
    slug: "fasteners",
    items: fastenersSubcategories,
  },
  {
    name: "Ferrule Fittings",
    slug: "ferrule-fittings",
    items: ferruleSubcategories,
  },
  {
    name: "Forged Fittings",
    slug: "forged-fittings",
    items: forgedSubcategories,
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileExpandedGroup, setMobileExpandedGroup] = useState(null); // 'products' | 'materials' | null
  const [mobileSubcategoryGroup, setMobileSubcategoryGroup] = useState('butt-weld-fittings');
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
    setMobileExpandedGroup(null);
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
            {navigationLinks.map((link) => {
              const lowerName = link.name.toLowerCase();
              const isProducts = lowerName === 'products';
              const isMaterials = lowerName === 'materials';

              if (isProducts) {
                const isOpen = mobileExpandedGroup === 'products';
                return (
                  <li key={link.name} className={`mobile-nav-item mobile-expandable-item ${isOpen ? 'is-open' : ''}`}>
                    <div
                      className={`mobile-nav-anchor mobile-expand-trigger ${isOpen ? 'active' : ''}`}
                      onClick={() => setMobileExpandedGroup(isOpen ? null : 'products')}
                      role="button"
                      tabIndex={0}
                      aria-expanded={isOpen}
                    >
                      <span className="mobile-link-text">{link.name}</span>
                      <span className="mobile-expand-badge">
                        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                      </span>
                    </div>

                    {isOpen && (
                      <div className="mobile-subproducts-drawer">
                        <Link
                          to="/products"
                          className="mobile-all-overview-link"
                          onClick={closeMenu}
                        >
                          <span>Explore All Products Overview (21 Families)</span>
                          <FaChevronRight className="m-arrow-icon" />
                        </Link>

                        {/* Major Subcategory Families Accordion */}
                        <div className="mobile-subcat-group">
                          <div className="mobile-group-title">MAJOR PRODUCT SUBCATEGORIES</div>
                          {mainProductFamilies.map((fam) => {
                            const isFamOpen = mobileSubcategoryGroup === fam.slug;
                            return (
                              <div key={fam.slug} className="mobile-fam-wrapper">
                                <button
                                  type="button"
                                  className={`mobile-fam-header ${isFamOpen ? 'open' : ''}`}
                                  onClick={() => setMobileSubcategoryGroup(isFamOpen ? null : fam.slug)}
                                >
                                  <span className="fam-name">{fam.name}</span>
                                  <span className="fam-count-pill">{fam.items.length} Types</span>
                                  <span className="fam-icon">
                                    {isFamOpen ? <FaChevronUp /> : <FaChevronDown />}
                                  </span>
                                </button>

                                {isFamOpen && (
                                  <div className="mobile-subitems-grid">
                                    <Link
                                      to={getProductUrl(fam.slug)}
                                      className="mobile-subitem-all-link"
                                      onClick={closeMenu}
                                    >
                                      <span>All {fam.name} Catalog & Specs →</span>
                                    </Link>
                                    {fam.items.map((subItem) => (
                                      <Link
                                        key={subItem.slug}
                                        to={getVariantUrl(subItem, { slug: fam.slug })}
                                        className="mobile-subitem-card"
                                        onClick={closeMenu}
                                      >
                                        <div className="mobile-subitem-thumb">
                                          <img
                                            src={subItem.image}
                                            alt={subItem.title}
                                            loading="lazy"
                                          />
                                        </div>
                                        <div className="mobile-subitem-details">
                                          <span className="mobile-subitem-name">{subItem.title}</span>
                                          <span className="mobile-subitem-spec">
                                            {subItem.standards ? subItem.standards.split(',')[0] : 'ASME Standard'}
                                          </span>
                                        </div>
                                        <FaChevronRight className="mobile-card-chevron" />
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>

                        {/* All Product Families */}
                        <div className="mobile-subcat-group">
                          <div className="mobile-group-title">OTHER INDUSTRIAL PRODUCT LINES</div>
                          <div className="mobile-other-grid">
                            {[...productsMegaMenu.manufacturer.items, ...productsMegaMenu.supplier.items]
                              .filter((p) => !mainProductFamilies.some((f) => f.slug === p.slug))
                              .map((prod) => (
                                <Link
                                  key={prod.slug}
                                  to={getProductUrl(prod.slug)}
                                  className="mobile-other-card"
                                  onClick={closeMenu}
                                >
                                  <div className="mobile-other-thumb">
                                    <img src={prod.image} alt={prod.title} loading="lazy" />
                                  </div>
                                  <span className="mobile-other-name">{prod.title}</span>
                                  <FaChevronRight className="mobile-other-chevron" />
                                </Link>
                              ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </li>
                );
              }

              if (isMaterials) {
                const isOpen = mobileExpandedGroup === 'materials';
                return (
                  <li key={link.name} className={`mobile-nav-item mobile-expandable-item ${isOpen ? 'is-open' : ''}`}>
                    <div
                      className={`mobile-nav-anchor mobile-expand-trigger ${isOpen ? 'active' : ''}`}
                      onClick={() => setMobileExpandedGroup(isOpen ? null : 'materials')}
                      role="button"
                      tabIndex={0}
                      aria-expanded={isOpen}
                    >
                      <span className="mobile-link-text">{link.name}</span>
                      <span className="mobile-expand-badge">
                        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                      </span>
                    </div>

                    {isOpen && (
                      <div className="mobile-subproducts-drawer">
                        <Link
                          to="/materials"
                          className="mobile-all-overview-link"
                          onClick={closeMenu}
                        >
                          <span>Explore All Materials Overview (16 Alloys)</span>
                          <FaChevronRight className="m-arrow-icon" />
                        </Link>

                        <div className="mobile-materials-container">
                          <div className="mobile-group-title">16 CERTIFIED METALLURGICAL ALLOYS</div>
                          <div className="mobile-materials-grid">
                            {materialsMegaMenu.items.map((mat) => (
                              <Link
                                key={mat.slug}
                                to={getMaterialUrl(mat.slug)}
                                className="mobile-material-card"
                                onClick={closeMenu}
                              >
                                <div className="mobile-mat-thumb">
                                  <img src={mat.image} alt={mat.name} loading="lazy" />
                                </div>
                                <div className="mobile-mat-details">
                                  <span className="mobile-mat-name">{mat.name}</span>
                                  <span className="mobile-mat-grade">{mat.grade}</span>
                                </div>
                                <FaChevronRight className="mobile-mat-chevron" />
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </li>
                );
              }

              return (
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
              );
            })}
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
