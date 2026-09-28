import React from 'react';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaLinkedinIn
} from 'react-icons/fa';
import { siteConfig } from '../../data/siteConfig';

export default function TopBar() {
  const { phone, phoneDisplay, phoneHref, email, emailHref, socialLinks } = siteConfig;

  return (
    <div className="top-bar">
      <div className="container top-bar-container">
        {/* Contact info on the left */}
        <div className="top-bar-left">
          <a
            href={phoneHref}
            className="contact-item"
            aria-label={`Call us at ${phoneDisplay}`}
          >
            <FaPhoneAlt className="contact-icon" />
            <span>{phoneDisplay}</span>
          </a>

          <a
            href={emailHref}
            className="contact-item contact-email"
            aria-label={`Email us at ${email}`}
          >
            <FaEnvelope className="contact-icon" />
            <span>{email}</span>
          </a>
        </div>

        {/* Right side with genuine recognizable social icons */}
        <div className="top-bar-right">
          <div className="social-links" aria-label="Social media links">
            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Facebook"
              title="Rushab Metal Industries on Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Instagram"
              title="Rushab Metal Industries on Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href={socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="WhatsApp"
              title="Chat with us on WhatsApp"
            >
              <FaWhatsapp />
            </a>

            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
              title="Rushab Metal Industries on LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
