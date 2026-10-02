import React, { useState } from 'react';
import Button from '../components/Button';
import {
  FiDroplet,
  FiLayers,
  FiZap,
  FiCpu,
  FiCheckCircle,
  FiActivity,
  FiSun,
  FiWind,
  FiAnchor,
  FiTool,
  FiCompass,
  FiBox,
  FiSend,
  FiSearch
} from 'react-icons/fi';
import PageHero from '../components/common/PageHero';
import './Industries.css';

const brochureIndustries = [
  {
    id: 1,
    name: "Acid & Chemical",
    icon: <FiActivity />,
    tag: "Aggressive Media",
    description: "Highly corrosive acid handling systems requiring specialized austenitic stainless steels, Hastelloy, and nickel alloy piping.",
    typicalSupplies: ["Hastelloy C276 Tubes", "SS 904L Pipes", "Teflon Gasketed Flanges", "PTFE Lined Valves"]
  },
  {
    id: 2,
    name: "Automobile",
    icon: <FiCpu />,
    tag: "Machining & Precision",
    description: "Precision bright bars, capillary stainless tubes, and high-tensile fasteners for powertrain components and exhaust lines.",
    typicalSupplies: ["Bright Drawn Round Bars", "Hex & Square Bars", "Capillary SS Tubing", "Grade 8.8 / 10.9 Bolts"]
  },
  {
    id: 3,
    name: "Beverage",
    icon: <FiDroplet />,
    tag: "Sanitary Grade",
    description: "Food and liquid processing lines utilizing mirror-finished, electro-polished stainless steel tubes and sanitary valves.",
    typicalSupplies: ["Sanitary Polished Tubes", "SS 304/316 Dairy Bends", "Butterfly Valves", "Tri-Clamp Fittings"]
  },
  {
    id: 4,
    name: "Cement",
    icon: <FiBox />,
    tag: "Abrasion & Dust",
    description: "Heavy-duty wear plates, abrasion-resistant pipe liners, and structural beams for kiln circuits and clinker handling.",
    typicalSupplies: ["Chequered & Wear Plates", "Heavy Wall CS Pipes", "MS Beams & Channels", "Foundation Fasteners"]
  },
  {
    id: 5,
    name: "Electrical & Electronic",
    icon: <FiZap />,
    tag: "High Conductivity",
    description: "Pure copper busbars, non-magnetic stainless enclosures, and brass precision parts for switchgears and panels.",
    typicalSupplies: ["ETP Copper Busbars", "Brass Rods & Tubes", "SS 304 Thin Sheets", "Spring Washers"]
  },
  {
    id: 6,
    name: "Food Processing",
    icon: <FiCheckCircle />,
    tag: "Hygienic Cleanliness",
    description: "Stainless steel food conveyor mesh, hygienic storage tanks, and non-toxic fluid circulation lines.",
    typicalSupplies: ["Woven Wire Mesh Belts", "SS 316L Plates", "Seamless Dairy Tubing", "Ball Valves"]
  },
  {
    id: 7,
    name: "Oil & Gas",
    icon: <FiDroplet />,
    tag: "High Pressure Hydrocarbons",
    description: "API 5L transmission line pipes, high-pressure forged fittings, and duplex manifolds for upstream and midstream networks.",
    typicalSupplies: ["API 5L Gr. B to X70 Pipes", "3000#/6000# Forged Fittings", "Weld Neck Flanges", "Duplex S31803"]
  },
  {
    id: 8,
    name: "Paper & Pulp",
    icon: <FiLayers />,
    tag: "Chlorite & Bleaching",
    description: "Bleach plant digesters and liquor pipelines fabricated from duplex and 317L high-molybdenum stainless alloys.",
    typicalSupplies: ["SS 317L Plates & Pipes", "Duplex UNS S32205", "Knife Gate Valves", "Wire Mesh Screens"]
  },
  {
    id: 9,
    name: "Pharmaceutical",
    icon: <FiActivity />,
    tag: "Sterile & Ultra-Pure",
    description: "Zero dead-leg diaphragm valves, orbital-welded ASTM A270 SS 316L tubes, and high-purity fluid transfer tackle.",
    typicalSupplies: ["Electro-Polished SS 316L Tubes", "Diaphragm Valves", "Triclover Ferrules", "Demister Pads"]
  },
  {
    id: 10,
    name: "Power Plant",
    icon: <FiSun />,
    tag: "High Thermal Pressure",
    description: "Supercritical boiler tubes, main steam alloy lines, and high-temperature stud bolts engineered to ASME codes.",
    typicalSupplies: ["ASTM A335 P11/P22/P91", "ASTM A193 B7/B16 Studs", "High Pressure Flanges", "Steam Traps"]
  },
  {
    id: 11,
    name: "Refinery",
    icon: <FiLayers />,
    tag: "Crude Distillation",
    description: "Coking, hydrocracking, and catalytic reforming units utilizing heavy alloy steel pipes, fittings, and heat exchangers.",
    typicalSupplies: ["ASTM A106 Gr. B", "A234 WPB / WP11 Fittings", "Inconel 625 Tubes", "Class 600# Flanges"]
  },
  {
    id: 12,
    name: "Sugar",
    icon: <FiBox />,
    tag: "Evaporator Circuits",
    description: "Juice heater brass & stainless steel tubes, boiler feed piping, and centrifugal screens for cane processing mills.",
    typicalSupplies: ["Brass Condenser Tubes", "SS 304 Evaporator Tubes", "Perforated Screens", "CS Flanges"]
  },
  {
    id: 13,
    name: "Textile",
    icon: <FiCompass />,
    tag: "Dyeing & Bleaching",
    description: "Chemical dye bath vessels and wet processing pipelines fabricated with pitting-resistant stainless steel 316.",
    typicalSupplies: ["SS 316 Sheets & Coils", "Pickled Flat Bars", "Pumps & Valve Trims", "Wire Mesh Cloth"]
  },
  {
    id: 14,
    name: "Water Piping",
    icon: <FiDroplet />,
    tag: "Municipal & Desalination",
    description: "Large diameter transmission mains, ductile iron and carbon steel piping, and seawater RO desalination duplex lines.",
    typicalSupplies: ["Large Dia Welded Pipes", "Butterfly Valves", "Blind Flanges", "Duplex S32750 for RO"]
  },
  {
    id: 15,
    name: "Wind Power",
    icon: <FiWind />,
    tag: "Renewable Energy",
    description: "Tower flange assemblies, high-tensile anchor foundation bolts, and structural steel reinforcement rings.",
    typicalSupplies: ["Foundation Fasteners 10.9", "Large Forged Rings", "Structural Beams", "Lifting Slings"]
  },
  {
    id: 16,
    name: "Fertilizer",
    icon: <FiActivity />,
    tag: "Urea & Ammonia Plants",
    description: "Carbamate and urea synthesis reactors requiring low-carbon urea-grade stainless and exotic nickel alloy piping.",
    typicalSupplies: ["SS 316L Urea Grade", "Monel 400 Tubes", "High Pressure Weld Necks", "Special Strainers"]
  },
  {
    id: 17,
    name: "Petrochemical",
    icon: <FiLayers />,
    tag: "Polymer & Cracking",
    description: "Ethylene cracking furnaces, intermediate fluid manifolds, and cryogenic liquefied gas storage tanks.",
    typicalSupplies: ["ASTM A333 Low Temp Pipes", "Inconel 800H", "ASTM A182 F316 Flanges", "Fasteners B8M"]
  },
  {
    id: 18,
    name: "Offshore Drilling",
    icon: <FiAnchor />,
    tag: "Deep Subsea & Splash Zone",
    description: "Subsea choke manifolds, topside firewater deluge systems, and certified marine lifting slings and shackles.",
    typicalSupplies: ["Super Duplex UNS S32750", "Titanium Grade 2", "Bow & D Shackles", "Grade 80 Slings"]
  },
  {
    id: 19,
    name: "Construction",
    icon: <FiTool />,
    tag: "Civil & Commercial",
    description: "TOR steel rebars, structural MS beams, channels, and architectural stainless facade profiles.",
    typicalSupplies: ["TOR Steel Rebars", "ISMB Beams & Channels", "Anchor Bolts", "Checkered Plates"]
  },
  {
    id: 20,
    name: "Engineering",
    icon: <FiTool />,
    tag: "Heavy Fabrication & OEM",
    description: "Custom machined forgings, precision shafts, tube-sheets, and heavy CNC plate profiles for equipment builders.",
    typicalSupplies: ["Forged Round Bars", "Alloy Steel Billets", "Heavy Plate Blanks", "Custom Studs"]
  },
  {
    id: 21,
    name: "Specialty Chemicals",
    icon: <FiActivity />,
    tag: "Fine Chemical Synthesis",
    description: "Batch reactor piping and column internals crafted from Hastelloy, Monel, and pure nickel to prevent catalyst poisoning.",
    typicalSupplies: ["Hastelloy C22 / C276", "Nickel 200/201", "Demister Wire Mesh", "Sampling Valves"]
  }
];

export default function Industries() {
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = brochureIndustries.filter((ind) =>
    ind.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ind.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ind.typicalSupplies.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="industries-page">
      {/* Header Banner */}
      <PageHero
        bgImage="/images/herosliderimg/industries.jpg"
        eyebrow="GLOBAL SUPPLY SECTORS"
        titleWhite1="CRITICAL PIPING FOR"
        titleHighlight="GLOBAL INDUSTRIES."
        titleWhite2="MISSION READY."
        description="Authentic industrial applications supported by Rushab Metal Industries across all 21 key sectors documented in our company brochure."
        primaryBtn={{ text: "EXPLORE PRODUCTS ↗", link: "/products" }}
        secondaryBtn={{ text: "REQUEST A QUOTE >", link: "/contact" }}
        pillText="21 CRITICAL GLOBAL INDUSTRIAL SECTORS"
      />

      {/* Main Sector Grid */}
      <section className="section-py bg-light-steel">
        <div className="container">
          {/* Search / Filter Bar */}
          <div className="industries-search-bar">
            <FiSearch className="i-search-icon" />
            <input
              type="text"
              placeholder="Search by industry sector (e.g. Oil & Gas, Refinery, Chemical, Power Plant) or supplied material..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="i-search-input"
            />
            {searchTerm && (
              <button
                type="button"
                className="i-clear-btn"
                onClick={() => setSearchTerm("")}
              >
                Clear
              </button>
            )}
          </div>

          <div className="industries-counter-bar">
            <span>
              Showing <strong>{filtered.length}</strong> of <strong>{brochureIndustries.length}</strong> verified industrial sectors
            </span>
          </div>

          <div className="industries-full-grid">
            {filtered.map((ind) => (
              <div key={ind.id} className="ind-detail-card">
                <div className="ind-card-top-row">
                  <div className="ind-icon-box">{ind.icon}</div>
                  <span className="ind-focus-tag">{ind.tag}</span>
                </div>

                <h3 className="ind-name">{ind.name}</h3>
                <p className="ind-desc">{ind.description}</p>

                <div className="ind-supplies-box">
                  <span className="supplies-heading">Key Metallurgical Supplies:</span>
                  <div className="supplies-tags-list">
                    {ind.typicalSupplies.map((sup, idx) => (
                      <span key={idx} className="supply-pill">{sup}</span>
                    ))}
                  </div>
                </div>

                <div className="ind-card-action">
                  <Button
                    to={`/contact?industry=${encodeURIComponent(ind.name)}`}
                    variant="primary"
                    size="sm"
                    icon={<FiSend />}
                  >
                    Inquire for {ind.name}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Standards Consultation */}
      <section className="section-py-sm bg-white">
        <div className="container">
          <div className="ind-cta-box">
            <div>
              <h3>Have Specialized Metallurgy or Project Specifications?</h3>
              <p>
                Our engineering team reviews client data sheets, ASME/ASTM code requirements, and third-party inspection criteria.
              </p>
            </div>
            <div className="ind-cta-btns">
              <Button to="/technical-data" variant="secondary" size="md">
                Technical Data Charts
              </Button>
              <Button to="/contact" variant="cyan" size="md">
                Contact Sales Engineers
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
