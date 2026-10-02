import React from 'react';
import '../../styles/clientNetwork.css';

export default function ClientNetwork() {
  return (
    <section className="client-network-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">OUR NETWORK</h2>
          <div className="section-accent-line"></div>
        </div>
        
        <div className="network-content">
          <div className="network-text">
            <h3>Serving Customers Across Industries</h3>
            <p>
              With a strong commitment to quality and reliable supply, Rishabh Metal Industries has built a robust network of clients worldwide. We cater to diverse industrial sectors, ensuring seamless delivery and exceptional service.
            </p>
            <div className="network-stats">
              <div className="stat-item">
                <span className="stat-value">50+</span>
                <span className="stat-label">Countries Served</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">1000+</span>
                <span className="stat-label">Satisfied Clients</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">25+</span>
                <span className="stat-label">Years Experience</span>
              </div>
            </div>
            <p className="placeholder-note" style={{fontSize: '0.8rem', color: 'var(--muted-text)', fontStyle: 'italic', marginTop: '1rem'}}>
              * Statistics are placeholders and should be updated with actual company numbers.
            </p>
          </div>
          
          <div className="network-map-container">
            {/* Placeholder for an SVG map customized with brand colors */}
            <div className="map-placeholder">
              <div className="map-visual">
                {/* Simulated Map Visual */}
                <svg viewBox="0 0 800 400" className="world-map-svg">
                  <rect width="100%" height="100%" fill="var(--very-light-blue)" />
                  <path d="M150,100 Q200,50 300,100 T450,150 T600,100 T750,200" fill="none" stroke="var(--light-blue)" strokeWidth="40" strokeLinecap="round" opacity="0.5"/>
                  <path d="M100,200 Q200,150 350,250 T550,200 T700,300" fill="none" stroke="var(--primary-blue)" strokeWidth="60" strokeLinecap="round" opacity="0.8"/>
                  
                  {/* Location Markers */}
                  <circle cx="200" cy="120" r="8" fill="var(--cyan)" className="map-marker" />
                  <circle cx="350" cy="180" r="10" fill="var(--cyan)" className="map-marker" />
                  <circle cx="450" cy="130" r="6" fill="var(--cyan)" className="map-marker" />
                  <circle cx="600" cy="160" r="12" fill="var(--cyan)" className="map-marker" />
                  <circle cx="250" cy="220" r="8" fill="var(--cyan)" className="map-marker" />
                  <circle cx="500" cy="260" r="10" fill="var(--cyan)" className="map-marker" />
                  <circle cx="700" cy="280" r="7" fill="var(--cyan)" className="map-marker" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
