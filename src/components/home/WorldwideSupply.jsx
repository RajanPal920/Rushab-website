import React, { useState, useMemo } from 'react';
import { FiSearch, FiGlobe } from 'react-icons/fi';
import './WorldwideSupply.css';

// 52 Export Destination Countries with accurate ISO 2-letter codes for actual graphic flag images
const allExportDestinations = [
  // Americas
  { name: "UNITED STATES", code: "us", region: "Americas" },
  { name: "CANADA", code: "ca", region: "Americas" },
  { name: "MEXICO", code: "mx", region: "Americas" },
  { name: "BRAZIL", code: "br", region: "Americas" },
  { name: "ARGENTINA", code: "ar", region: "Americas" },
  { name: "CHILE", code: "cl", region: "Americas" },
  { name: "COLOMBIA", code: "co", region: "Americas" },

  // Europe
  { name: "UNITED KINGDOM", code: "gb", region: "Europe" },
  { name: "GERMANY", code: "de", region: "Europe" },
  { name: "FRANCE", code: "fr", region: "Europe" },
  { name: "ITALY", code: "it", region: "Europe" },
  { name: "SPAIN", code: "es", region: "Europe" },
  { name: "PORTUGAL", code: "pt", region: "Europe" },
  { name: "NETHERLANDS", code: "nl", region: "Europe" },
  { name: "BELGIUM", code: "be", region: "Europe" },
  { name: "SWITZERLAND", code: "ch", region: "Europe" },
  { name: "AUSTRIA", code: "at", region: "Europe" },
  { name: "SWEDEN", code: "se", region: "Europe" },
  { name: "NORWAY", code: "no", region: "Europe" },
  { name: "DENMARK", code: "dk", region: "Europe" },
  { name: "FINLAND", code: "fi", region: "Europe" },
  { name: "POLAND", code: "pl", region: "Europe" },
  { name: "CZECH REPUBLIC", code: "cz", region: "Europe" },
  { name: "TURKEY", code: "tr", region: "Europe" },
  { name: "GREECE", code: "gr", region: "Europe" },

  // Middle East
  { name: "SAUDI ARABIA", code: "sa", region: "Middle East" },
  { name: "UNITED ARAB EMIRATES", code: "ae", region: "Middle East" },
  { name: "QATAR", code: "qa", region: "Middle East" },
  { name: "OMAN", code: "om", region: "Middle East" },
  { name: "KUWAIT", code: "kw", region: "Middle East" },
  { name: "BAHRAIN", code: "bh", region: "Middle East" },
  { name: "IRAQ", code: "iq", region: "Middle East" },
  { name: "JORDAN", code: "jo", region: "Middle East" },

  // Asia Pacific
  { name: "SINGAPORE", code: "sg", region: "Asia Pacific" },
  { name: "MALAYSIA", code: "my", region: "Asia Pacific" },
  { name: "INDONESIA", code: "id", region: "Asia Pacific" },
  { name: "THAILAND", code: "th", region: "Asia Pacific" },
  { name: "VIETNAM", code: "vn", region: "Asia Pacific" },
  { name: "PHILIPPINES", code: "ph", region: "Asia Pacific" },
  { name: "JAPAN", code: "jp", region: "Asia Pacific" },
  { name: "SOUTH KOREA", code: "kr", region: "Asia Pacific" },
  { name: "BANGLADESH", code: "bd", region: "Asia Pacific" },
  { name: "SRI LANKA", code: "lk", region: "Asia Pacific" },
  { name: "TAIWAN", code: "tw", region: "Asia Pacific" },

  // Africa
  { name: "SOUTH AFRICA", code: "za", region: "Africa" },
  { name: "NIGERIA", code: "ng", region: "Africa" },
  { name: "EGYPT", code: "eg", region: "Africa" },
  { name: "ALGERIA", code: "dz", region: "Africa" },
  { name: "KENYA", code: "ke", region: "Africa" },
  { name: "GHANA", code: "gh", region: "Africa" },

  // Australia / Oceania
  { name: "AUSTRALIA", code: "au", region: "Australia / Oceania" },
  { name: "NEW ZEALAND", code: "nz", region: "Australia / Oceania" }
];

const regionTabs = [
  "All Countries",
  "Europe",
  "Middle East",
  "Asia Pacific",
  "Americas",
  "Africa",
  "Australia / Oceania"
];

export default function WorldwideSupply() {
  const [activeTab, setActiveTab] = useState("All Countries");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCountries = useMemo(() => {
    return allExportDestinations.filter((country) => {
      const matchesTab = activeTab === "All Countries" || country.region === activeTab;
      const matchesSearch = country.name.toLowerCase().includes(searchQuery.toLowerCase().trim());
      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  return (
    <section className="countries-export-section" id="export-destinations">
      <div className="container">
        {/* Header Block matching user screenshot 2 */}
        <div className="countries-header-block">
          <h2 className="countries-main-title">
            COUNTRIES WE <span className="title-accent">EXPORT TO</span>
          </h2>
          <p className="countries-lead-subtitle">
            Approved material supplier providing seaworthy packed stainless, alloy, and nickel piping products to mission-critical infrastructure across 45+ international destinations.
          </p>
          <div className="countries-pill-badge">
            <span className="badge-text">45+ GLOBAL EXPORT DESTINATIONS • 100% TRACEABLE DISPATCH</span>
          </div>
        </div>

        {/* Filter Tabs & Search Bar Row */}
        <div className="countries-controls-bar">
          <div className="countries-tabs-scroll">
            {regionTabs.map((tab) => (
              <button
                key={tab}
                type="button"
                className={`country-tab-btn ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="country-search-box">
            <FiSearch className="search-icon" />
            <input
              type="text"
              className="country-search-input"
              placeholder="Search country..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search export destination country"
            />
          </div>
        </div>

        {/* Counter indicator */}
        <div className="countries-counter-indicator">
          <FiGlobe className="globe-icon" />
          <span>Showing <strong>{filteredCountries.length}</strong> of <strong>{allExportDestinations.length}</strong> Export Destinations</span>
        </div>

        {/* Countries 4-Column Grid with actual country flag images and interactive hover effect */}
        <div className="countries-cards-grid">
          {filteredCountries.map((c, i) => (
            <button
              type="button"
              className="country-flag-card"
              key={i}
              title={`Export delivery available to ${c.name}`}
            >
              <div className="country-flag-wrap">
                <img
                  src={`https://flagcdn.com/w40/${c.code}.png`}
                  srcSet={`https://flagcdn.com/w80/${c.code}.png 2x`}
                  alt={`${c.name} flag`}
                  className="country-flag-img"
                  width="26"
                  height="18"
                  loading="lazy"
                />
              </div>
              <span className="country-name-text">{c.name}</span>
            </button>
          ))}
          {filteredCountries.length === 0 && (
            <div className="no-countries-found">
              <p>No export destination found matching "{searchQuery}".</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
