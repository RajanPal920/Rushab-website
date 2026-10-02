import React, { useState, useMemo } from 'react';
import Button from '../components/Button';
import {
  FiFileText,
  FiLayers,
  FiInfo,
  FiSend,
  FiCheckCircle
} from 'react-icons/fi';
import { FaCalculator } from 'react-icons/fa';
import './TechnicalData.css';

// Material Densities (g/cm³)
const materialsDensity = [
  { name: "Stainless Steel (304 / 316 / 321)", density: 7.93 },
  { name: "Carbon Steel (A106 / A53 / API 5L)", density: 7.85 },
  { name: "Alloy Steel (P11 / P22 / P91)", density: 7.85 },
  { name: "Duplex 2205 (UNS S31803 / S32205)", density: 7.80 },
  { name: "Super Duplex 2507 (UNS S32750)", density: 7.80 },
  { name: "Nickel 200 / 201", density: 8.89 },
  { name: "Monel 400", density: 8.80 },
  { name: "Inconel 600 / 625", density: 8.44 },
  { name: "Incoloy 800 / 825", density: 8.14 },
  { name: "Hastelloy C276", density: 8.89 },
  { name: "Titanium (Gr. 1, 2, 5)", density: 4.51 },
  { name: "Aluminium (1050 / 6061)", density: 2.70 },
  { name: "Copper (Cu-ETP)", density: 8.96 },
  { name: "Brass (Commercial / Naval)", density: 8.50 }
];

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
  const [activeTab, setActiveTab] = useState("calculator");

  // Calculator State
  const [calcShape, setCalcShape] = useState("pipe");
  const [calcMaterial, setCalcMaterial] = useState("Stainless Steel (304 / 316 / 321)");
  
  // Dimensions
  const [pipeOD, setPipeOD] = useState("60.3"); // mm
  const [pipeWT, setPipeWT] = useState("3.91"); // mm
  const [length, setLength] = useState("6");     // meters
  const [quantity, setQuantity] = useState("1");
  
  // Sheet
  const [sheetLength, setSheetLength] = useState("2500"); // mm
  const [sheetWidth, setSheetWidth] = useState("1250");   // mm
  const [sheetThick, setSheetThick] = useState("3.0");    // mm

  // Bar
  const [barDia, setBarDia] = useState("50"); // mm

  // Selected density
  const selectedDensity = useMemo(() => {
    const found = materialsDensity.find(m => m.name === calcMaterial);
    return found ? found.density : 7.93;
  }, [calcMaterial]);

  // Verified Weight Calculation Engine
  const calculatedWeight = useMemo(() => {
    const qty = Math.max(1, parseFloat(quantity) || 1);
    const lenMeters = Math.max(0, parseFloat(length) || 0);

    let unitWeight = 0;

    if (calcShape === "pipe") {
      const od = parseFloat(pipeOD) || 0;
      const wt = parseFloat(pipeWT) || 0;
      if (od > wt && wt > 0) {
        // Formula: Weight (kg/m) = (OD - WT) * WT * 0.02466 * (density / 7.85)
        const kgPerMeter = (od - wt) * wt * 0.02466 * (selectedDensity / 7.85);
        unitWeight = kgPerMeter * lenMeters;
      }
    } else if (calcShape === "sheet") {
      const l = (parseFloat(sheetLength) || 0) / 1000;
      const w = (parseFloat(sheetWidth) || 0) / 1000;
      const t = parseFloat(sheetThick) || 0;
      // Formula: Weight (kg) = L(m) * W(m) * T(mm) * density
      unitWeight = l * w * t * selectedDensity;
    } else if (calcShape === "round_bar") {
      const d = parseFloat(barDia) || 0;
      // Formula: Weight (kg/m) = d² * 0.00623 * (density / 7.85)
      const kgPerMeter = d * d * 0.00623 * (selectedDensity / 7.85);
      unitWeight = kgPerMeter * lenMeters;
    } else if (calcShape === "hex_bar") {
      const a = parseFloat(barDia) || 0;
      // Hex across flats formula: a² * 0.0068 * (density / 7.85)
      const kgPerMeter = a * a * 0.0068 * (selectedDensity / 7.85);
      unitWeight = kgPerMeter * lenMeters;
    }

    const totalWeight = unitWeight * qty;
    return {
      unit: unitWeight.toFixed(2),
      total: totalWeight.toFixed(2)
    };
  }, [calcShape, selectedDensity, pipeOD, pipeWT, length, quantity, sheetLength, sheetWidth, sheetThick, barDia]);

  return (
    <div className="technical-page">
      {/* Page Header */}
      <section className="page-hero-banner">
        <div className="container">
          <div className="page-hero-content">
            <span className="page-hero-tag">TECHNICAL METROLOGY & ENGINEERING</span>
            <h1 className="page-hero-title">Technical Data & Weight Calculator</h1>
            <p className="page-hero-subtitle">
              Verified dimensional charts, pipe wall schedules, pressure ratings, and metallurgical formulas based on ASME B36.10, B16.5, and ASTM standards.
            </p>
          </div>
        </div>
      </section>

      {/* Main Tabs Navigation */}
      <section className="section-py bg-light-steel">
        <div className="container">
          <div className="tech-nav-tabs">
            <button
              type="button"
              className={`tech-tab-btn ${activeTab === 'calculator' ? 'active' : ''}`}
              onClick={() => setActiveTab('calculator')}
            >
              <FaCalculator /> Weight Calculator
            </button>
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

          {/* TAB 1: Weight Calculator */}
          {activeTab === 'calculator' && (
            <div className="calculator-wrapper-card">
              <div className="calc-header-row">
                <div>
                  <h2 className="calc-title">Interactive Metal Weight Calculator</h2>
                  <p className="calc-subtitle">
                    Compute precise theoretical weights for pipes, sheets, and bars according to standardized metallurgical densities.
                  </p>
                </div>
                <div className="calc-density-badge">
                  <span>Selected Density:</span>
                  <strong>{selectedDensity} g/cm³</strong>
                </div>
              </div>

              <div className="calc-body-grid">
                {/* Inputs Area */}
                <div className="calc-form-side">
                  <div className="calc-row">
                    <label className="calc-label">Product Geometry / Shape:</label>
                    <div className="calc-shape-selector">
                      <button
                        type="button"
                        className={`shape-pill ${calcShape === 'pipe' ? 'active' : ''}`}
                        onClick={() => setCalcShape('pipe')}
                      >
                        Round Pipe / Tube
                      </button>
                      <button
                        type="button"
                        className={`shape-pill ${calcShape === 'sheet' ? 'active' : ''}`}
                        onClick={() => setCalcShape('sheet')}
                      >
                        Sheet / Plate
                      </button>
                      <button
                        type="button"
                        className={`shape-pill ${calcShape === 'round_bar' ? 'active' : ''}`}
                        onClick={() => setCalcShape('round_bar')}
                      >
                        Round Bar
                      </button>
                      <button
                        type="button"
                        className={`shape-pill ${calcShape === 'hex_bar' ? 'active' : ''}`}
                        onClick={() => setCalcShape('hex_bar')}
                      >
                        Hexagonal Bar
                      </button>
                    </div>
                  </div>

                  <div className="calc-row">
                    <label htmlFor="calc-mat-select" className="calc-label">Select Metallurgy & Material:</label>
                    <select
                      id="calc-mat-select"
                      className="calc-select"
                      value={calcMaterial}
                      onChange={(e) => setCalcMaterial(e.target.value)}
                    >
                      {materialsDensity.map((m) => (
                        <option key={m.name} value={m.name}>
                          {m.name} ({m.density} g/cm³)
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Dimensional Inputs Depending on Shape */}
                  {calcShape === 'pipe' && (
                    <div className="calc-dimension-grid">
                      <div className="calc-input-group">
                        <label>Outer Diameter (OD in mm):</label>
                        <input
                          type="number"
                          step="0.1"
                          value={pipeOD}
                          onChange={(e) => setPipeOD(e.target.value)}
                        />
                      </div>
                      <div className="calc-input-group">
                        <label>Wall Thickness (WT in mm):</label>
                        <input
                          type="number"
                          step="0.01"
                          value={pipeWT}
                          onChange={(e) => setPipeWT(e.target.value)}
                        />
                      </div>
                      <div className="calc-input-group">
                        <label>Length per Piece (Meters):</label>
                        <input
                          type="number"
                          step="0.5"
                          value={length}
                          onChange={(e) => setLength(e.target.value)}
                        />
                      </div>
                      <div className="calc-input-group">
                        <label>Quantity (Pieces):</label>
                        <input
                          type="number"
                          min="1"
                          value={quantity}
                          onChange={(e) => setQuantity(e.target.value)}
                        />
                      </div>
                    </div>
                  )}

                  {calcShape === 'sheet' && (
                    <div className="calc-dimension-grid">
                      <div className="calc-input-group">
                        <label>Length (in mm):</label>
                        <input
                          type="number"
                          value={sheetLength}
                          onChange={(e) => setSheetLength(e.target.value)}
                        />
                      </div>
                      <div className="calc-input-group">
                        <label>Width (in mm):</label>
                        <input
                          type="number"
                          value={sheetWidth}
                          onChange={(e) => setSheetWidth(e.target.value)}
                        />
                      </div>
                      <div className="calc-input-group">
                        <label>Thickness (in mm):</label>
                        <input
                          type="number"
                          step="0.1"
                          value={sheetThick}
                          onChange={(e) => setSheetThick(e.target.value)}
                        />
                      </div>
                      <div className="calc-input-group">
                        <label>Quantity (Sheets):</label>
                        <input
                          type="number"
                          min="1"
                          value={quantity}
                          onChange={(e) => setQuantity(e.target.value)}
                        />
                      </div>
                    </div>
                  )}

                  {(calcShape === 'round_bar' || calcShape === 'hex_bar') && (
                    <div className="calc-dimension-grid">
                      <div className="calc-input-group">
                        <label>{calcShape === 'round_bar' ? 'Diameter (Dia in mm):' : 'Across Flats (A/F in mm):'}</label>
                        <input
                          type="number"
                          step="0.5"
                          value={barDia}
                          onChange={(e) => setBarDia(e.target.value)}
                        />
                      </div>
                      <div className="calc-input-group">
                        <label>Length per Piece (Meters):</label>
                        <input
                          type="number"
                          step="0.5"
                          value={length}
                          onChange={(e) => setLength(e.target.value)}
                        />
                      </div>
                      <div className="calc-input-group">
                        <label>Quantity (Pieces):</label>
                        <input
                          type="number"
                          min="1"
                          value={quantity}
                          onChange={(e) => setQuantity(e.target.value)}
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Result Display Side */}
                <div className="calc-result-side">
                  <div className="calc-result-box">
                    <span className="result-tag">ESTIMATED THEORETICAL WEIGHT</span>
                    <div className="result-big-number">
                      {calculatedWeight.total} <span className="unit-label">KG</span>
                    </div>
                    <div className="result-metric-row">
                      <span>Weight Per Unit:</span>
                      <strong>{calculatedWeight.unit} KG</strong>
                    </div>
                    <div className="result-metric-row">
                      <span>Total Pieces:</span>
                      <strong>{quantity} Units</strong>
                    </div>
                    <div className="result-metric-row">
                      <span>Total Metric Tons:</span>
                      <strong>{(calculatedWeight.total / 1000).toFixed(3)} MT</strong>
                    </div>

                    <div className="calc-action-btn-row">
                      <Button
                        to={`/contact?calcWeight=${calculatedWeight.total}kg&calcMaterial=${encodeURIComponent(calcMaterial)}`}
                        variant="primary"
                        size="md"
                        icon={<FiSend />}
                      >
                        Request Quote For This Spec
                      </Button>
                    </div>

                    <p className="calc-disclaimer-note">
                      * Calculation is theoretical based on nominal dimensions and standard material density. Commercial weights are subject to standard mill tolerances.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Pipe Schedules & Dimensions */}
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
