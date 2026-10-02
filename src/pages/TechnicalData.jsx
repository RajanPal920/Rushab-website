import React, { useState } from 'react';
import Button from '../components/Button';
import {
  FiFileText,
  FiLayers,
  FiInfo,
  FiSend,
  FiCheckCircle
} from 'react-icons/fi';
import PageHero from '../components/common/PageHero';
import './TechnicalData.css';

// Verified Pipe Schedule Reference Data (ANSI B36.10 / B36.19)
const pipeScheduleData = [
  { nb: '1/2" (15 NB)', od: 21.3, sch10: 2.11, sch40: 2.77, sch80: 3.73, sch160: 4.78, xxs: 7.47 },
  { nb: '3/4" (20 NB)', od: 26.7, sch10: 2.11, sch40: 2.87, sch80: 3.91, sch160: 5.56, xxs: 7.82 },
  { nb: '1" (25 NB)', od: 33.4, sch10: 2.77, sch40: 3.38, sch80: 4.55, sch160: 6.35, xxs: 9.09 },
  { nb: '1 1/4" (32 NB)', od: 42.2, sch10: 2.77, sch40: 3.56, sch80: 4.85, sch160: 6.35, xxs: 9.70 },
  { nb: '1 1/2" (40 NB)', od: 48.3, sch10: 2.77, sch40: 3.68, sch80: 5.08, sch160: 7.14, xxs: 10.16 },
  { nb: '2" (50 NB)', od: 60.3, sch10: 2.77, sch40: 3.91, sch80: 5.54, sch160: 8.74, xxs: 11.07 },
  { nb: '2 1/2" (65 NB)', od: 73.0, sch10: 3.05, sch40: 5.16, sch80: 7.01, sch160: 9.53, xxs: 14.02 },
  { nb: '3" (80 NB)', od: 88.9, sch10: 3.05, sch40: 5.49, sch80: 7.62, sch160: 11.13, xxs: 15.24 },
  { nb: '4" (100 NB)', od: 114.3, sch10: 3.05, sch40: 6.02, sch80: 8.56, sch160: 13.49, xxs: 17.12 },
  { nb: '5" (125 NB)', od: 141.3, sch10: 3.40, sch40: 6.55, sch80: 9.53, sch160: 15.88, xxs: 19.05 },
  { nb: '6" (150 NB)', od: 168.3, sch10: 3.40, sch40: 7.11, sch80: 10.97, sch160: 18.26, xxs: 21.95 },
  { nb: '8" (200 NB)', od: 219.1, sch10: 3.76, sch40: 8.18, sch80: 12.70, sch160: 23.01, xxs: 22.22 },
  { nb: '10" (250 NB)', od: 273.0, sch10: 4.19, sch40: 9.27, sch80: 15.09, sch160: 28.58, xxs: 25.40 },
  { nb: '12" (300 NB)', od: 323.8, sch10: 4.57, sch40: 10.31, sch80: 17.48, sch160: 33.32, xxs: 25.40 },
  { nb: '14" (350 NB)', od: 355.6, sch10: 4.78, sch40: 11.13, sch80: 19.05, sch160: 35.71, xxs: 25.40 },
  { nb: '16" (400 NB)', od: 406.4, sch10: 4.78, sch40: 12.70, sch80: 21.44, sch160: 40.49, xxs: 25.40 }
];

// Flange Pressure Class Reference (ANSI B16.5)
const flangeClassData = [
  { classRating: "150#", hydroTest: "30 bar (450 psi)", tempRange: "-29°C to 538°C", facing: "RF, FF", commonSizes: "1/2\" to 24\" NB" },
  { classRating: "300#", hydroTest: "77 bar (1125 psi)", tempRange: "-29°C to 538°C", facing: "RF, FF, RTJ", commonSizes: "1/2\" to 24\" NB" },
  { classRating: "600#", hydroTest: "154 bar (2250 psi)", tempRange: "-29°C to 538°C", facing: "RF, RTJ", commonSizes: "1/2\" to 24\" NB" },
  { classRating: "900#", hydroTest: "231 bar (3375 psi)", tempRange: "-29°C to 538°C", facing: "RF, RTJ", commonSizes: "1/2\" to 24\" NB" },
  { classRating: "1500#", hydroTest: "385 bar (5625 psi)", tempRange: "-29°C to 538°C", facing: "RTJ, RF", commonSizes: "1/2\" to 24\" NB" },
  { classRating: "2500#", hydroTest: "642 bar (9375 psi)", tempRange: "-29°C to 538°C", facing: "RTJ, RF", commonSizes: "1/2\" to 12\" NB" }
];

export default function TechnicalData() {
  const [activeTab, setActiveTab] = useState("schedules");

  return (
    <div className="technical-page">
      {/* Page Header */}
      <PageHero
        bgImage="/images/herosliderimg/tech.jpg"
        eyebrow="TECHNICAL METROLOGY & ENGINEERING"
        titleWhite1="TECHNICAL DATA &"
        titleHighlight="DIMENSIONAL CHARTS."
        titleWhite2="ASME / ASTM STANDARDS."
        description="Verified dimensional charts, pipe wall schedules, pressure ratings, and metallurgical formulas based on ASME B36.10, B16.5, and ASTM standards."
        primaryBtn={{ text: "DOWNLOAD CATALOGUE ↗", link: "/catalogue" }}
        secondaryBtn={{ text: "GET IN TOUCH >", link: "/contact" }}
        pillText="ASME / ASTM / API / DIN COMPLIANT SPECIFICATIONS"
      />

      {/* Main Tabs Navigation */}
      <section className="section-py bg-light-steel">
        <div className="container">
          <div className="tech-nav-tabs">
            <button
              type="button"
              className={`tech-tab-btn ${activeTab === 'schedules' ? 'active' : ''}`}
              onClick={() => setActiveTab('schedules')}
            >
              <FiFileText /> Pipe Dimensions (ANSI B36.10)
            </button>
            <button
              type="button"
              className={`tech-tab-btn ${activeTab === 'flanges' ? 'active' : ''}`}
              onClick={() => setActiveTab('flanges')}
            >
              <FiLayers /> Flange Ratings (ANSI B16.5)
            </button>
            <button
              type="button"
              className={`tech-tab-btn ${activeTab === 'standards' ? 'active' : ''}`}
              onClick={() => setActiveTab('standards')}
            >
              <FiCheckCircle /> ASTM Standards Summary
            </button>
          </div>

          {/* TAB 1: Pipe Schedules & Dimensions */}

          {activeTab === 'schedules' && (
            <div className="tech-table-card">
              <div className="table-card-header">
                <h3>ANSI / ASME B36.10 & B36.19 Pipe Schedule Dimensions</h3>
                <p>Nominal Pipe Size (NPS), Outside Diameter (OD), and Wall Thickness (WT in mm) across standard schedules.</p>
              </div>

              <div className="tech-table-responsive">
                <table className="tech-industrial-table">
                  <thead>
                    <tr>
                      <th>Nominal Size (NB)</th>
                      <th>O.D. (mm)</th>
                      <th>SCH 10S (mm)</th>
                      <th>SCH 40 / STD (mm)</th>
                      <th>SCH 80 / XS (mm)</th>
                      <th>SCH 160 (mm)</th>
                      <th>XXS (mm)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pipeScheduleData.map((pipe, i) => (
                      <tr key={i}>
                        <td className="highlight-cell">{pipe.nb}</td>
                        <td>{pipe.od}</td>
                        <td>{pipe.sch10}</td>
                        <td><strong>{pipe.sch40}</strong></td>
                        <td><strong>{pipe.sch80}</strong></td>
                        <td>{pipe.sch160}</td>
                        <td>{pipe.xxs}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="table-note-box">
                <FiInfo className="info-icon" />
                <span>
                  Technical data subject to confirmation. Rushab Metal Industries also supplies non-standard wall thicknesses and schedules 5S, 20, 30, 60, and custom bore requirements upon request.
                </span>
              </div>
            </div>
          )}

          {/* TAB 3: Flange Ratings */}
          {activeTab === 'flanges' && (
            <div className="tech-table-card">
              <div className="table-card-header">
                <h3>ANSI B16.5 Flange Pressure Classes & Test Ratings</h3>
                <p>Hydrostatic shell test and temperature envelope for forged flanges (Weld Neck, Slip-On, Blind, Socket Weld).</p>
              </div>

              <div className="tech-table-responsive">
                <table className="tech-industrial-table">
                  <thead>
                    <tr>
                      <th>Class Rating</th>
                      <th>Hydro Shell Test Pressure</th>
                      <th>Applicable Temperature Range</th>
                      <th>Standard Facing Types</th>
                      <th>Brochure Size Scope</th>
                    </tr>
                  </thead>
                  <tbody>
                    {flangeClassData.map((flange, i) => (
                      <tr key={i}>
                        <td className="highlight-cell">{flange.classRating}</td>
                        <td>{flange.hydroTest}</td>
                        <td>{flange.tempRange}</td>
                        <td>{flange.facing}</td>
                        <td>{flange.commonSizes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="table-note-box">
                <FiInfo className="info-icon" />
                <span>
                  Flange dimensions conform to ASME B16.5 (up to 24" NB) and ASME B16.47 Series A / B (26" to 60" NB). Third-party inspection and MTC provided with each flange batch.
                </span>
              </div>
            </div>
          )}

          {/* TAB 4: ASTM Standards Summary */}
          {activeTab === 'standards' && (
            <div className="tech-table-card">
              <div className="table-card-header">
                <h3>Primary ASTM / ASME Standards Cited in Our Brochure</h3>
                <p>Governing specifications for pipes, fittings, flanges, plates, and fasteners supplied by Rushab Metal Industries.</p>
              </div>

              <div className="standards-cards-grid">
                <div className="std-summary-card">
                  <span className="std-code">ASTM A312 / A269</span>
                  <h4>Stainless Steel Pipes & Tubes</h4>
                  <p>Covers seamless, straight-seam welded, and heavily cold worked austenitic stainless steel pipe intended for high-temperature and general corrosive service.</p>
                </div>

                <div className="std-summary-card">
                  <span className="std-code">ASTM A106 / A53 / API 5L</span>
                  <h4>Carbon Steel Line Pipes</h4>
                  <p>Standard specification for seamless and welded carbon steel pipe for high-temperature service in power plants, oil refineries, and gas transit pipelines.</p>
                </div>

                <div className="std-summary-card">
                  <span className="std-code">ASTM A335</span>
                  <h4>Alloy Steel High-Temp Pipes</h4>
                  <p>Specifications for nominal wall and minimum wall seamless ferritic alloy-steel pipe intended for high-temperature power boiler and steam service (P11, P22, P91).</p>
                </div>

                <div className="std-summary-card">
                  <span className="std-code">ASME B16.9 / MSS SP-75</span>
                  <h4>Factory-Made Butt Weld Fittings</h4>
                  <p>Covers overall dimensions, tolerances, ratings, testing, and markings for factory-made wrought butt welding fittings in sizes NPS 1/2 through NPS 48.</p>
                </div>

                <div className="std-summary-card">
                  <span className="std-code">ASME B16.11</span>
                  <h4>Forged Fittings (Socket Weld & Threaded)</h4>
                  <p>Standard covers ratings, dimensions, tolerances, marking and material requirements for socket-welding and threaded forged fittings (3000#, 6000#, 9000#).</p>
                </div>

                <div className="std-summary-card">
                  <span className="std-code">ASTM A240 / ASME SA240</span>
                  <h4>Stainless Steel Plates, Sheets & Strips</h4>
                  <p>Standard specification for chromium and chromium-nickel stainless steel plate, sheet, and strip for pressure vessels and for general engineering applications.</p>
                </div>
              </div>

              <div className="table-note-box">
                <FiInfo className="info-icon" />
                <span>
                  For exact chemical composition or mechanical tolerances on unverified tables: Technical data subject to confirmation with our engineering department.
                </span>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
