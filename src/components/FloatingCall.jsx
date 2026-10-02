import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { siteConfig } from '../data/siteConfig';
import './FloatingActions.css';

export default function FloatingCall() {
  return (
    <a
      href={siteConfig.phoneHref}
      className="floating-btn floating-call"
      aria-label={`Call Rushab Metal Industries at ${siteConfig.phone}`}
      title="Call Technical Sales"
    >
      <span className="floating-tooltip">Call: {siteConfig.phone}</span>
      <FaPhoneAlt className="floating-icon" />
    </a>
  );
}
