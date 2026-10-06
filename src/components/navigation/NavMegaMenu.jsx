import React from "react";
import { Link } from "react-router-dom";
import {
  FaChevronRight,
  FaFilePdf,
  FaCheckCircle,
  FaAward,
  FaShieldAlt,
} from "react-icons/fa";
import {
  productsMegaMenu,
  materialsMegaMenu,
  certificatesMenu,
} from "../../data/megaMenuData";
import "./NavMegaMenu.css";

export default function NavMegaMenu({ activeMenu, onClose }) {
  if (!activeMenu) return null;

  if (activeMenu === "products") {
    const { manufacturer, supplier, footer } = productsMegaMenu;
    return (
      <div
        className="mega-menu-overlay products-overlay"
        onMouseEnter={() => {}}
        onMouseLeave={onClose}
      >
        <div className="mega-menu-container products-mega-menu">
          {/* Main 2-Column Divisions */}
          <div className="mega-columns-grid">
            {/* Column 1: Manufacturer Division */}
            <div className="mega-column">
              <div className="mega-col-header">
                <div className="mega-badge-row">
                  <span className="mega-badge manufacturer">
                    {manufacturer.badge}
                  </span>
                  <span className="mega-count-text">{manufacturer.count}</span>
                </div>
                <h3 className="mega-col-title">{manufacturer.title}</h3>
                <p className="mega-col-subtitle">{manufacturer.subtitle}</p>
              </div>

              <div className="mega-items-list">
                {manufacturer.items.map((item) => (
                  <Link
                    key={item.title}
                    to={`/products/${item.slug}`}
                    className="mega-item-row"
                    onClick={onClose}
                  >
                    <div className="mega-item-thumb">
                      <img src={item.image} alt={item.title} loading="lazy" />
                    </div>
                    <div className="mega-item-info">
                      <h4 className="mega-item-title">{item.title}</h4>
                      <p className="mega-item-desc">{item.subtitle}</p>
                    </div>
                    <FaChevronRight className="mega-item-chevron" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Column 2: Supplier Division */}
            <div className="mega-column">
              <div className="mega-col-header">
                <div className="mega-badge-row">
                  <span className="mega-badge supplier">{supplier.badge}</span>
                </div>
                <h3 className="mega-col-title">{supplier.title}</h3>
                <p className="mega-col-subtitle">{supplier.subtitle}</p>
              </div>

              <div className="mega-items-list">
                {supplier.items.map((item) => (
                  <Link
                    key={item.title}
                    to={`/products/${item.slug}`}
                    className="mega-item-row"
                    onClick={onClose}
                  >
                    <div className="mega-item-thumb">
                      <img src={item.image} alt={item.title} loading="lazy" />
                    </div>
                    <div className="mega-item-info">
                      <h4 className="mega-item-title">{item.title}</h4>
                      <p className="mega-item-desc">{item.subtitle}</p>
                    </div>
                    <FaChevronRight className="mega-item-chevron" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Footer Strip */}
          <div className="mega-menu-footer">
            <div className="mm-footer-left">
              <span className="red-dot">●</span>
              <span>{footer.notice}</span>
            </div>
            <Link
              to={footer.ctaLink}
              className="mm-footer-cta"
              onClick={onClose}
            >
              <span>{footer.ctaText}</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (activeMenu === "materials") {
    const { eyebrow, count, items, footer } = materialsMegaMenu;
    return (
      <div
        className="mega-menu-overlay materials-overlay"
        onMouseEnter={() => {}}
        onMouseLeave={onClose}
      >
        <div className="mega-menu-container materials-mega-menu">
          {/* Header */}
          <div className="materials-menu-header">
            <div className="mmh-left">
              <span className="red-dash">—</span>
              <span className="mmh-eyebrow">{eyebrow}</span>
            </div>
            <span className="mmh-count-pill">{count}</span>
          </div>

          {/* 2-Column Grid of 9 Materials */}
          <div className="materials-grid-list">
            {items.map((item) => (
              <Link
                key={item.name}
                to={`/materials/${item.slug || item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`}
                className="mega-item-row material-row"
                onClick={onClose}
              >
                <div className="mega-item-thumb">
                  <img src={item.image} alt={item.name} loading="lazy" />
                </div>
                <div className="mega-item-info">
                  <h4 className="mega-item-title">{item.name}</h4>
                  <p className="mega-item-desc">{item.grade}</p>
                </div>
                <FaChevronRight className="mega-item-chevron" />
              </Link>
            ))}
          </div>

          {/* Bottom Footer Strip */}
          <div className="mega-menu-footer">
            <div className="mm-footer-left">
              <span className="red-dot">●</span>
              <span>{footer.notice}</span>
            </div>
            <Link
              to={footer.ctaLink}
              className="mm-footer-cta"
              onClick={onClose}
            >
              <span>{footer.ctaText}</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (activeMenu === "certificates") {
    const { eyebrow, count, items, footer } = certificatesMenu;
    return (
      <div
        className="mega-menu-overlay certificates-overlay"
        onMouseEnter={() => {}}
        onMouseLeave={onClose}
      >
        <div className="mega-menu-container certificates-mega-menu">
          {/* Header */}
          <div className="materials-menu-header">
            <div className="mmh-left">
              <span className="red-dash">—</span>
              <span className="mmh-eyebrow">{eyebrow}</span>
            </div>
            <span className="mmh-count-pill gold">{count}</span>
          </div>

          {/* List of Certificates */}
          <div className="certificates-list-grid">
            {items.map((item) => (
              <Link
                key={item.title}
                to={item.link}
                className="mega-item-row cert-row"
                onClick={onClose}
              >
                <div className="mega-cert-icon">
                  <FaAward />
                </div>
                <div className="mega-item-info">
                  <div className="cert-title-badge-row">
                    <h4 className="mega-item-title">{item.title}</h4>
                    <span className="cert-badge">{item.badge}</span>
                  </div>
                  <p className="mega-item-desc">{item.subtitle}</p>
                </div>
                <FaChevronRight className="mega-item-chevron" />
              </Link>
            ))}
          </div>

          {/* Bottom Footer Strip */}
          {footer && (
            <div className="mega-menu-footer">
              <div className="mm-footer-left">
                <span className="red-dot">●</span>
                <span>{footer.notice}</span>
              </div>
              <Link
                to={footer.ctaLink}
                className="mm-footer-cta"
                onClick={onClose}
              >
                <span>{footer.ctaText}</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    );
  }

  return null;
}
