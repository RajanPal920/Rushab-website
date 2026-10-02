import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { siteConfig } from '../data/siteConfig';
import './FloatingActions.css';

export default function FloatingWhatsApp() {
  const defaultMsg = encodeURIComponent("Hello Rushab Metal Industries, I would like to inquire about your metal products and get a quotation.");
  const waUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${defaultMsg}`;

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-btn floating-whatsapp"
      aria-label="Chat with Rushab Metal Industries on WhatsApp"
      title="Inquire on WhatsApp"
    >
      <span className="floating-tooltip">Inquire on WhatsApp</span>
      <FaWhatsapp className="floating-icon" />
      <span className="floating-ping"></span>
    </a>
  );
}
