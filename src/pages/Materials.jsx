import React, { useState } from "react";
import Button from "../components/Button";
import { FiCheck, FiSend, FiShield } from "react-icons/fi";
import PageHero from "../components/common/PageHero";
import { getMaterialUrl } from "../utils/seoSlugUtils";
import "./Materials.css";

const ferrousMaterials = [
  {
    id: "ss",
    name: "Stainless Steel",
    category: "Ferrous",
    tag: "High Corrosion & Heat Resistance",
    standards: "ASTM A312, ASTM A240, ASTM A182, ASTM A403, ASTM A276",
    grades: [
      "Austenitic: 304, 304L, 304H, 316, 316L, 316H, 316Ti",
      "High Alloy: 317, 317L, 321, 321H, 347, 347H, 310, 310S",
      "Super Austenitic: 904L (UNS N08904)",
      "Ferritic / Martensitic: 409, 410, 410S, 420, 430",
    ],
    features:
      "Superior oxidation resistance, excellent weldability, and resistance to pitting in acidic, marine, and industrial chemical environments.",
    products:
      "Pipes, Tubes, Butt Weld Fittings, Forged Fittings, Flanges, Sheets, Plates, Coils, Fasteners, Ferrule Fittings, Round Bars",
  },
  {
    id: "cs",
    name: "Carbon Steel",
    category: "Ferrous",
    tag: "High Tensile Pipeline & Pressure Vessels",
    standards:
      "ASTM A106 Gr. B, ASTM A53 Gr. B, API 5L Gr. B to X70, ASTM A333, ASTM A234 WPB, ASTM A105",
    grades: [
      "High Temperature: ASTM A106 Gr. B, A53 Gr. B",
      "Line Pipe: API 5L Gr. B, X42, X46, X52, X56, X60, X65, X70",
      "Low Temperature: ASTM A333 Gr. 3 / Gr. 6, A420 WPL6",
      "Boiler / Pressure Plate: ASTM A516 Gr. 60/70, ASTM A517, IS 2062, IS 2002",
      "Forgings: ASTM A105, A350 LF2, LF3",
    ],
    features:
      "Engineered for high-pressure fluid transportation, steam power pipelines, low-temperature services, and heavy structural framing.",
    products:
      "Seamless & Welded Line Pipes, A234 WPB Fittings, A105 Flanges, Heavy Boiler Plates",
  },
  {
    id: "as",
    name: "Alloy Steel",
    category: "Ferrous",
    tag: "Elevated Temperature & Creep Resistance",
    standards: "ASTM A335, ASTM A234, ASTM A182, ASTM A387",
    grades: [
      "Pipe Grades: ASTM A335 P1, P5, P9, P11, P22, P91",
      "Fitting Grades: ASTM A234 WP1, WP5, WP11, WP22, WP91",
      "Forging Grades: ASTM A182 F1, F5, F9, F11, F22, F91",
      "Plate Grades: ASTM A387 Gr. 5, 9, 11, 12, 22, 91 (Class 1 & 2)",
      "High Tensile Fastener Grades: 4.6, 8.8, 10.9, 12.9, B7, B7M, 2H",
    ],
    features:
      "High chromium and molybdenum content delivering exceptional thermal strength, resistance to hydrogen embrittlement, and creep rupture strength.",
    products:
      "P91 / P22 Superheater Pipes, Heavy Forged Flanges, High Pressure Power Fittings, Stud Bolts",
  },
  {
    id: "duplex",
    name: "Duplex Stainless Steel",
    category: "Ferrous",
    tag: "Dual-Phase (Austenite + Ferrite) Strength",
    standards: "ASTM A790, ASTM A815, ASTM A182, ASTM A240",
    grades: ["UNS S31803", "UNS S32205 (2205)", "W.Nr. 1.4462"],
    features:
      "Twice the mechanical yield strength of standard austenitic grades, coupled with outstanding resistance to chloride stress corrosion cracking (SCC).",
    products:
      "Offshore Flowlines, Seawater Piping, Pressure Vessels, Flanges, Fasteners",
  },
  {
    id: "super-duplex",
    name: "Super Duplex Stainless Steel",
    category: "Ferrous",
    tag: "PREN > 40 Extreme Marine Metallurgy",
    standards: "ASTM A790, ASTM A815, ASTM A182, ASTM A240",
    grades: [
      "UNS S32750 (2507)",
      "UNS S32760 (Zeron 100)",
      "UNS S32550 (Ferralium 255)",
    ],
    features:
      "High pitting resistance equivalent number (PREN >= 42) optimized for deep sea subsea manifolds, desalination systems, and aggressive chemical digestors.",
    products:
      "Subsea Piping, Chemical Processing Valves, Heavy Duty Forged Flanges, Exotic Fasteners",
  },
  {
    id: "mild-steel",
    name: "Mild Steel & Carbon Structural",
    category: "Ferrous",
    tag: "Structural Framing & Load Bearing",
    standards: "IS 2062, ASTM A36, BS 4360, EN 10025 S275JR",
    grades: [
      "IS 2062 Grade A / B / C",
      "ASTM A36 / SA36 Carbon Structural",
      "EN 10025 S235JR / S275JR / S355JR",
    ],
    features:
      "Cost-effective structural steel engineered with high ductility, excellent weldability, and proven reliability for heavy civil and industrial framing.",
    products:
      "MS Equal & Unequal Angles, ISMC Channels, ISLC Channels, Parallel Flange Channels (PFC)",
  },
];

const nonFerrousMaterials = [
  {
    id: "nickel",
    name: "Nickel Alloys (Pure Nickel)",
    category: "Non-Ferrous / Special Alloys",
    tag: "High Caustic & Chemical Resistance",
    standards: "ASTM B160, ASTM B161, ASTM B162, ASTM B366",
    grades: ["Nickel 200 (UNS N02200)", "Nickel 201 (UNS N02201 - Low Carbon)"],
    features:
      "Unmatched resistance to caustic alkalies, fluorine, and reducing acids. Exceptional electrical and magnetostrictive properties.",
    products: "Pipes, Tubes, Flanges, Fittings, Sheets, Precision Rods",
  },
  {
    id: "monel",
    name: "Monel (Nickel-Copper Alloy)",
    category: "Non-Ferrous / Special Alloys",
    tag: "Rapid Sea-Water Flow & HF Acid Resistance",
    standards: "ASTM B165, ASTM B127, ASTM B164, ASTM B564",
    grades: [
      "Monel 400 (UNS N04400)",
      "Monel K500 (UNS N05500 - Precipitation Hardened)",
    ],
    features:
      "Virtually immune to chloride stress cracking; robust resistance to flowing seawater, hydrofluoric acid (HF), and sulfuric solutions.",
    products:
      "Marine Shafting, Sea-Water Cooling Piping, Valve Trim, Heat Exchanger Tubes, Fasteners",
  },
  {
    id: "inconel",
    name: "Inconel (Nickel-Chromium)",
    category: "Non-Ferrous / Special Alloys",
    tag: "Extreme Temperature Oxidation & Creep Resistance",
    standards: "ASTM B167, ASTM B168, ASTM B564, ASTM B444",
    grades: [
      "Inconel 600 (UNS N06600)",
      "Inconel 601 (UNS N06601 - High Al)",
      "Inconel 625 (UNS N06625 - Mo & Cb added)",
      "Inconel 825 (Incoloy UNS N08825)",
    ],
    features:
      "Forms a thick, protective, passivating oxide layer under extreme thermal cycles (up to 1200°C), retaining high mechanical tensile strength.",
    products:
      "Turbine Exhaust, Nuclear Reactor Core Components, High Temperature Flanges, Seamless Piping",
  },
  {
    id: "hastelloy",
    name: "Hastelloy (Nickel-Mo-Cr)",
    category: "Non-Ferrous / Special Alloys",
    tag: "Severe Chemical & Wet Chlorine Immunity",
    standards: "ASTM B622, ASTM B575, ASTM B564, ASTM B619",
    grades: [
      "Hastelloy C276 (UNS N10276)",
      "Hastelloy C22 (UNS N06022)",
      "Hastelloy B2 / B3 (UNS N10665)",
      "Alloy 20 (Carpenter 20 / UNS N08020)",
    ],
    features:
      "Widely regarded as the universal corrosion-resistant metallurgy; exceptional resistance to wet chlorine gas, hypochlorite, and strong oxidizing salts.",
    products:
      "Flue Gas Scrubbers, Acid Chlorination Systems, Specialty Process Piping, Reactor Vessels",
  },
  {
    id: "titanium",
    name: "Titanium & Titanium Alloys",
    category: "Non-Ferrous / Special Alloys",
    tag: "High Strength-to-Weight & Seawater Immunity",
    standards: "ASTM B338, ASTM B265, ASTM B348, ASTM B381",
    grades: [
      "Grade 1 (CP 4 - Highest ductility)",
      "Grade 2 (CP 3 - Standard industrial workhorse)",
      "Grade 5 (Ti-6Al-4V - High mechanical strength)",
      "Grade 7 (Ti-0.15Pd - Enhanced reducing acid resistance)",
    ],
    features:
      "Extraordinary strength-to-weight ratio, complete immunity to marine fouling, biological attack, and ambient chloride crevice corrosion.",
    products:
      "Plate Heat Exchangers, Offshore Brine Tubing, Aerospace Machined Parts, Chemical Anodes",
  },
  {
    id: "copper-brass",
    name: "Copper, Brass & Bronze",
    category: "Non-Ferrous / Special Alloys",
    tag: "Thermal & Electrical Conductivity",
    standards: "ASTM B111, ASTM B42, ASTM B171, BS 2871",
    grades: [
      "Copper: Cu-DHP, ETP Copper (C11000, C12200)",
      "Cupro-Nickel: 70/30 (C71500), 90/10 (C70600)",
      "Brass: Admiralty Brass (C44300), Naval Brass (C46400), Yellow Brass",
      "Bronze: Phosphor Bronze, Aluminium Bronze",
    ],
    features:
      "Exceptional thermal conductivity and innate anti-biofouling performance in marine cooling condensers and electrical busbars.",
    products:
      "Condenser Tubes, Chiller Tubing, Marine Deck Fittings, Busbars, Shims",
  },
  {
    id: "aluminium",
    name: "Aluminium & Aluminium Alloys",
    category: "Non-Ferrous / Special Alloys",
    tag: "Lightweight Structural & Cryogenic Ductility",
    standards: "ASTM B209, ASTM B221, ASTM B241",
    grades: [
      "1000 Series (Commercial Pure: 1050, 1100)",
      "5000 Series (Marine Grade: 5083, 5086, 5052)",
      "6000 Series (Structural: 6061-T6, 6082-T6)",
    ],
    features:
      "Low density, excellent thermal/electrical conduction, and retained ductility at cryogenic liquid gas temperatures.",
    products:
      "Extrusions, Plates, Perforated Mesh, Tanks, Architectural Profiles",
  },
  {
    id: "exotic-alloys",
    name: "Exotic Alloys (Tantalum, Zirconium)",
    category: "Non-Ferrous / Special Alloys",
    tag: "Extreme Corrosion Immunity in Harsh Acids",
    standards: "ASTM B521, ASTM B365, ASTM B708",
    grades: [
      "Tantalum (UNS R05200 / R05400)",
      "Zirconium 702 (UNS R60702)",
      "Zirconium 705 (UNS R60705)",
    ],
    features:
      "Virtually unattackable by hydrochloric, nitric, and sulfuric acids at boiling temperatures; unmatched biocompatibility and refractory density.",
    products:
      "Thermowell Sheaths, Bayonet Heaters, Acid Reactor Liners, Custom Fabrications",
  },
  {
    id: "high-alloys",
    name: "High Alloys (Sanicro 28, 904L, Alloy 20)",
    category: "Non-Ferrous / Special Alloys",
    tag: "Phosphoric & Sulfuric Acid Resisting Metallurgy",
    standards: "ASTM B668, ASTM B625, ASTM B464",
    grades: [
      "Sanicro 28 (UNS N08028)",
      "904L (UNS N08904 / 1.4539)",
      "Alloy 20 (UNS N08020)",
    ],
    features:
      "High chromium, nickel, and molybdenum content with copper addition providing outstanding resistance to strong reducing acids and stress corrosion cracking.",
    products:
      "Fertilizer Evaporators, Pickling Tanks, Acid Piping, Heat Exchanger Bundles",
  },
];

export default function Materials() {
  const [selectedGroup, setSelectedGroup] = useState("all");

  const displayMaterials =
    selectedGroup === "all"
      ? [...ferrousMaterials, ...nonFerrousMaterials]
      : selectedGroup === "ferrous"
        ? ferrousMaterials
        : nonFerrousMaterials;

  return (
    <div className="materials-page">
      {/* Header Banner */}
      <PageHero
        bgImage="/images/herosliderimg/products.jpg"
        eyebrow="METALLURGICAL SPECTRUM"
        titleWhite1="ADVANCED ALLOY"
        titleHighlight="& STEEL GRADES."
        titleWhite2="MILL CERTIFIED."
        description="Comprehensive ferrous, non-ferrous, and specialty nickel alloy metallurgy supplied according to ASTM, ASME, API, DIN, and international standards."
        primaryBtn={{ text: "EXPLORE PRODUCTS ↗", link: "/products" }}
        secondaryBtn={{ text: "REQUEST MTC >", link: "/contact" }}
        pillText="9 METALLURGICAL FAMILIES // MILL TEST TRACEABLE"
      />

      {/* Main Filterable Material Section */}
      <section className="section-py bg-light-steel">
        <div className="container">
          {/* Group Switcher Tabs */}
          <div className="materials-group-switcher">
            <button
              type="button"
              className={`mat-switch-btn ${selectedGroup === "all" ? "active" : ""}`}
              onClick={() => setSelectedGroup("all")}
            >
              All Materials (
              {ferrousMaterials.length + nonFerrousMaterials.length})
            </button>
            <button
              type="button"
              className={`mat-switch-btn ${selectedGroup === "ferrous" ? "active" : ""}`}
              onClick={() => setSelectedGroup("ferrous")}
            >
              Ferrous Metals ({ferrousMaterials.length})
            </button>
            <button
              type="button"
              className={`mat-switch-btn ${selectedGroup === "non-ferrous" ? "active" : ""}`}
              onClick={() => setSelectedGroup("non-ferrous")}
            >
              Non-Ferrous & Special Alloys ({nonFerrousMaterials.length})
            </button>
          </div>

          {/* Material Cards Grid */}
          <div className="materials-cards-grid">
            {displayMaterials.map((mat) => (
              <div key={mat.id} className="material-detail-card">
                <div className="mat-card-header">
                  <div>
                    <span className="mat-category-tag">{mat.category}</span>
                    <h3 className="mat-card-title">{mat.name}</h3>
                  </div>
                  <span className="mat-feature-tag">{mat.tag}</span>
                </div>

                <div className="mat-standards-row">
                  <span className="std-label">Applicable Standards:</span>
                  <span className="std-val">{mat.standards}</span>
                </div>

                <div className="mat-grades-block">
                  <h4 className="mat-block-subtitle">Supplied Grades:</h4>
                  <ul className="mat-grades-ul">
                    {mat.grades.map((gradeItem, idx) => (
                      <li key={idx}>
                        <FiCheck className="mat-check-icon" />
                        <span>{gradeItem}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mat-info-row">
                  <strong className="info-title">
                    Performance Highlights:
                  </strong>
                  <p className="info-text">{mat.features}</p>
                </div>

                <div className="mat-products-row">
                  <strong className="info-title">Supplied Forms:</strong>
                  <p className="info-text">{mat.products}</p>
                </div>

                <div className="mat-card-footer">
                  <Button
                    to={`/contact?material=${encodeURIComponent(mat.name)}`}
                    variant="primary"
                    size="sm"
                    icon={<FiSend />}
                  >
                    Inquire for
                  </Button>
                  <Button
                    to={
                      {
                        ss: getMaterialUrl("stainless-steel"),
                        cs: getMaterialUrl("carbon"),
                        as: getMaterialUrl("alloy-steel"),
                        duplex: getMaterialUrl("duplex"),
                        "super-duplex": getMaterialUrl("super-duplex"),
                        "mild-steel": getMaterialUrl("mild-steel"),
                        nickel: getMaterialUrl("nickel-alloy"),
                        monel: getMaterialUrl("monel"),
                        inconel: getMaterialUrl("inconel"),
                        hastelloy: getMaterialUrl("hastelloy"),
                        titanium: getMaterialUrl("titanium"),
                        "copper-brass": getMaterialUrl("copper"),
                        aluminium: getMaterialUrl("aluminium"),
                        "exotic-alloys": getMaterialUrl("exotic-alloy"),
                        "high-alloys": getMaterialUrl("high-alloy"),
                      }[mat.id] || "/materials"
                    }
                    variant="outline"
                    size="sm"
                  >
                    View Material Products
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Assurance */}
      <section className="section-py-sm bg-white">
        <div className="container">
          <div className="mat-cert-banner">
            <div className="cert-banner-icon">
              <FiShield />
            </div>
            <div className="cert-banner-text">
              <h3>Positive Material Identification (PMI) & MTC Guarantee</h3>
              <p>
                Every supply of Stainless Steel, Duplex, Nickel Alloy, and
                Carbon Steel includes Manufacturer Test Certificates (MTC EN
                10204 3.1) stating exact chemical spectrometry and tensile test
                values. Third-party inspection available upon request.
              </p>
            </div>
            <Button to="/certificates" variant="secondary" size="md">
              Review Test Procedures
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
