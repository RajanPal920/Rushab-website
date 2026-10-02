import React from 'react';
import '../../styles/globalPresence.css';

export default function GlobalPresence() {
  return (
    <section className="global-presence-section">
      <div className="container">
        <div className="global-content">
          <div className="global-text-area">
            <h2 className="global-title">GLOBAL PRESENCE</h2>
            <div className="global-accent-line"></div>
            <p className="global-desc">
              As a premier international steel and metal supplier, our reach extends across continents. We deliver high-grade industrial materials to vital sectors globally, ensuring reliability, precision, and excellence in every shipment.
            </p>
            <button className="global-btn">Explore Our Export Capabilities</button>
          </div>
          
          <div className="global-visual-area">
            {/* Artistic representation of a global map for export section */}
            <div className="premium-map-visual">
              <svg viewBox="0 0 800 500" className="export-map-svg">
                {/* Abstract Continents made of dots/lines */}
                <g className="map-dots" fill="var(--light-blue)" opacity="0.4">
                  <circle cx="200" cy="150" r="3" /><circle cx="210" cy="150" r="3" /><circle cx="220" cy="150" r="3" />
                  <circle cx="190" cy="160" r="3" /><circle cx="200" cy="160" r="3" /><circle cx="210" cy="160" r="3" /><circle cx="220" cy="160" r="3" />
                  <circle cx="200" cy="170" r="3" /><circle cx="210" cy="170" r="3" /><circle cx="220" cy="170" r="3" /><circle cx="230" cy="170" r="3" />
                  <circle cx="210" cy="180" r="3" /><circle cx="220" cy="180" r="3" />
                  
                  {/* Europe / Asia approx */}
                  <circle cx="450" cy="120" r="3" /><circle cx="460" cy="120" r="3" /><circle cx="470" cy="120" r="3" /><circle cx="480" cy="120" r="3" /><circle cx="490" cy="120" r="3" />
                  <circle cx="440" cy="130" r="3" /><circle cx="450" cy="130" r="3" /><circle cx="460" cy="130" r="3" /><circle cx="470" cy="130" r="3" /><circle cx="480" cy="130" r="3" /><circle cx="490" cy="130" r="3" /><circle cx="500" cy="130" r="3" />
                  <circle cx="430" cy="140" r="3" /><circle cx="440" cy="140" r="3" /><circle cx="450" cy="140" r="3" /><circle cx="460" cy="140" r="3" /><circle cx="470" cy="140" r="3" /><circle cx="480" cy="140" r="3" /><circle cx="490" cy="140" r="3" />
                  <circle cx="440" cy="150" r="3" /><circle cx="450" cy="150" r="3" /><circle cx="460" cy="150" r="3" /><circle cx="470" cy="150" r="3" /><circle cx="480" cy="150" r="3" />
                  
                  {/* Africa */}
                  <circle cx="430" cy="220" r="3" /><circle cx="440" cy="220" r="3" /><circle cx="450" cy="220" r="3" />
                  <circle cx="420" cy="230" r="3" /><circle cx="430" cy="230" r="3" /><circle cx="440" cy="230" r="3" /><circle cx="450" cy="230" r="3" />
                  <circle cx="430" cy="240" r="3" /><circle cx="440" cy="240" r="3" /><circle cx="450" cy="240" r="3" />
                  <circle cx="440" cy="250" r="3" />
                  
                  {/* South America */}
                  <circle cx="260" cy="260" r="3" /><circle cx="270" cy="260" r="3" />
                  <circle cx="250" cy="270" r="3" /><circle cx="260" cy="270" r="3" /><circle cx="270" cy="270" r="3" />
                  <circle cx="260" cy="280" r="3" /><circle cx="270" cy="280" r="3" />
                  <circle cx="260" cy="290" r="3" />
                </g>
                
                {/* Supply lines */}
                <path d="M460,140 Q350,80 210,160" fill="none" stroke="var(--cyan)" strokeWidth="2" strokeDasharray="5,5" className="supply-line" />
                <path d="M460,140 Q550,180 440,240" fill="none" stroke="var(--cyan)" strokeWidth="2" strokeDasharray="5,5" className="supply-line" />
                <path d="M460,140 Q350,220 260,270" fill="none" stroke="var(--cyan)" strokeWidth="2" strokeDasharray="5,5" className="supply-line" />
                
                {/* Hubs / Markers */}
                <g className="export-markers">
                  <circle cx="460" cy="140" r="8" fill="var(--cyan)">
                    <animate attributeName="r" values="8;16;8" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="1;0;1" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="460" cy="140" r="6" fill="var(--white)" />
                  
                  <circle cx="210" cy="160" r="5" fill="var(--cyan)" />
                  <circle cx="440" cy="240" r="5" fill="var(--cyan)" />
                  <circle cx="260" cy="270" r="5" fill="var(--cyan)" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
