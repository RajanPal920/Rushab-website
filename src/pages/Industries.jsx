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
    image: "/images/industriesimage/chemical.jpg",
    icon: <FiActivity />,
    tag: "Aggressive Media",
    description: "Highly corrosive acid handling systems requiring specialized austenitic stainless steels, Hastelloy, and nickel alloy piping.",
    typicalSupplies: ["Hastelloy C276 Tubes", "SS 904L Pipes", "Teflon Gasketed Flanges", "PTFE Lined Valves"]
  },
  {
    id: 2,
    name: "Automobile",
    image: "/images/industriesimage/automobile.jpg",
    icon: <FiCpu />,
    tag: "Machining & Precision",
    description: "Precision engineered components, capillary stainless tubes, and high-tensile fasteners for powertrain components and exhaust lines.",
    typicalSupplies: ["Precision Machined Components", "Hex & Square Profiles", "Capillary SS Tubing", "Grade 8.8 / 10.9 Bolts"]
  },
  {
    id: 3,
    name: "Beverage",
    image: "/images/industriesimage/Beverage.jpg",
    icon: <FiDroplet />,
    tag: "Sanitary Grade",
    description: "Food and liquid processing lines utilizing mirror-finished, electro-polished stainless steel tubes and sanitary valves.",
    typicalSupplies: ["Sanitary Polished Tubes", "SS 304/316 Dairy Bends", "Butterfly Valves", "Tri-Clamp Fittings"]
  },
  // {
  //   id: 4,
  //   name: "Cement",
  //   image: "/images/industriesimage/cement.jpg",
  //   icon: <FiBox />,
  //   tag: "Abrasion & Dust",
  //   description: "Heavy-duty wear plates, abrasion-resistant pipe liners, and structural beams for kiln circuits and clinker handling.",
  //   typicalSupplies: ["Chequered & Wear Plates", "Heavy Wall CS Pipes", "MS Beams & Channels", "Foundation Fasteners"]
  // },
  {
    id: 6,
    name: "Food Processing",
    image: "/images/industriesimage/food.jpg",
    icon: <FiCheckCircle />,
    tag: "Hygienic Cleanliness",
    description: "Stainless steel food conveyor mesh, hygienic storage tanks, and non-toxic fluid circulation lines.",
    typicalSupplies: ["Woven Wire Mesh Belts", "SS 316L Plates", "Seamless Dairy Tubing", "Ball Valves"]
  },
  {
    id: 7,
    name: "Oil & Gas",
    image: "/images/industriesimage/oil.jpg",
    icon: <FiDroplet />,
    tag: "High Pressure Hydrocarbons",
    description: "API 5L transmission line pipes, high-pressure forged fittings, and duplex manifolds for upstream and midstream networks.",
    typicalSupplies: ["API 5L Gr. B to X70 Pipes", "3000#/6000# Forged Fittings", "Weld Neck Flanges", "Duplex S31803"]
  },
  {
    id: 9,
    name: "Pharmaceutical",
    image: "/images/industriesimage/Pharma.jpg",
    icon: <FiActivity />,
    tag: "Sterile & Ultra-Pure",
    description: "Zero dead-leg diaphragm valves, orbital-welded ASTM A270 SS 316L tubes, and high-purity fluid transfer tackle.",
    typicalSupplies: ["Electro-Polished SS 316L Tubes", "Diaphragm Valves", "Triclover Ferrules", "Demister Pads"]
  },
  {
    id: 10,
    name: "Power Plant",
    image: "/images/industriesimage/power-plant.jpg",
    icon: <FiSun />,
    tag: "High Thermal Pressure",
    description: "Supercritical boiler tubes, main steam alloy lines, and high-temperature stud bolts engineered to ASME codes.",
    typicalSupplies: ["ASTM A335 P11/P22/P91", "ASTM A193 B7/B16 Studs", "High Pressure Flanges", "Steam Traps"]
  },
  {
    id: 11,
    name: "Refinery",
    image: "/images/industriesimage/Refinery.jpg",
    icon: <FiLayers />,
    tag: "Crude Distillation",
    description: "Coking, hydrocracking, and catalytic reforming units utilizing heavy alloy steel pipes, fittings, and heat exchangers.",
    typicalSupplies: ["ASTM A106 Gr. B", "A234 WPB / WP11 Fittings", "Inconel 625 Tubes", "Class 600# Flanges"]
  },
  {
    id: 14,
    name: "Water Piping",
    image: "/images/industriesimage/Water-Piping.jpg",
    icon: <FiDroplet />,
    tag: "Municipal & Desalination",
    description: "Large diameter transmission mains, ductile iron and carbon steel piping, and seawater RO desalination duplex lines.",
    typicalSupplies: ["Large Dia Welded Pipes", "Butterfly Valves", "Blind Flanges", "Duplex S32750 for RO"]
  },
  {
    id: 15,
    name: "Wind Power",
    image: "/images/industriesimage/wind-power.jpg",
    icon: <FiWind />,
    tag: "Renewable Energy",
    description: "Tower flange assemblies, high-tensile anchor foundation bolts, and structural steel reinforcement rings.",
    typicalSupplies: ["Foundation Fasteners 10.9", "Large Forged Rings", "Structural Beams", "Lifting Slings"]
  },
  {
    id: 16,
    name: "Fertilizer",
    image: "/images/industriesimage/fertilizer.jpg",
    icon: <FiActivity />,
    tag: "Urea & Ammonia Plants",
    description: "Carbamate and urea synthesis reactors requiring low-carbon urea-grade stainless and exotic nickel alloy piping.",
    typicalSupplies: ["SS 316L Urea Grade", "Monel 400 Tubes", "High Pressure Weld Necks", "Special Strainers"]
  },
  {
    id: 17,
    name: "Petrochemical",
    image: "/images/industriesimage/petrochemical.jpg",
    icon: <FiLayers />,
    tag: "Polymer & Cracking",
    description: "Ethylene cracking furnaces, intermediate fluid manifolds, and cryogenic liquefied gas storage tanks.",
    typicalSupplies: ["ASTM A333 Low Temp Pipes", "Inconel 800H", "ASTM A182 F316 Flanges", "Fasteners B8M"]
  },



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
                {ind.image && (
                  <div className="ind-card-image">
                    <img src={ind.image} alt={ind.name} />
                  </div>
                )}
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
