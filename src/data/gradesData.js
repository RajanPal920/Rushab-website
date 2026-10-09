// src/data/gradesData.js
// Verified metallurgical database for Rishabh Metal Industries
// Compliant with ASTM, ASME, EN, DIN, ISO, and UNS standards

export const gradesDatabase = [
  // ==========================================
  // DUPLEX & SUPER DUPLEX STAINLESS STEELS
  // ==========================================
  {
    id: "duplex-2205",
    slug: "duplex-2205",
    name: "Duplex 2205",
    title: "Duplex Stainless Steel 2205 (UNS S31803 / S32205 / W.Nr. 1.4462)",
    shortName: "2205",
    aliases: ["s31803", "s32205", "1.4462", "f51", "f60", "duplex-2205", "2205-duplex"],
    category: "Duplex Stainless Steel",
    uns: "UNS S31803 / UNS S32205",
    dinEnWnr: "1.4462 / X2CrNiMoN22-5-3",
    pren: "≥ 35",
    primaryStandards: "ASTM A182, ASTM A240, ASTM A790, ASTM A815, ASTM A928, ASME SA182, ASME SA240",
    overview:
      "Duplex 2205 (UNS S32205 / S31803) is a nitrogen-enhanced dual-phase austenitic-ferritic stainless steel. Combining the high mechanical strength of ferritic steels with the ductile workability of austenitic steels, 2205 delivers approximately twice the yield strength of conventional 304 or 316 stainless steels. It exhibits exceptional resistance to chloride stress corrosion cracking (SCC), pitting, crevice corrosion, and erosion fatigue in harsh marine and chemical environments.",
    contextualDescription: (productName) =>
      `When specified for ${productName || "piping and flow components"}, Duplex 2205 provides exceptional pressure containment while permitting thinner wall thickness and reduced component weight. Its dual-phase microstructure ensures high fatigue endurance and superior resistance to sour gas (H2S), chlorides, and organic acids found in offshore oil & gas, desalination, and chemical processing installations.`,
    chemicalComposition: [
      { element: "Chromium (Cr)", min: "22.0", max: "23.0" },
      { element: "Nickel (Ni)", min: "4.5", max: "6.5" },
      { element: "Molybdenum (Mo)", min: "3.0", max: "3.5" },
      { element: "Nitrogen (N)", min: "0.14", max: "0.20" },
      { element: "Carbon (C)", min: "—", max: "0.030" },
      { element: "Manganese (Mn)", min: "—", max: "2.00" },
      { element: "Silicon (Si)", min: "—", max: "1.00" },
      { element: "Phosphorus (P)", min: "—", max: "0.030" },
      { element: "Sulfur (S)", min: "—", max: "0.020" },
      { element: "Iron (Fe)", min: "Balance", max: "Balance" }
    ],
    mechanicalProperties: [
      { property: "Tensile Strength (min)", value: "655 MPa (95 ksi)" },
      { property: "Yield Strength (0.2% Offset, min)", value: "450 MPa (65 ksi)" },
      { property: "Elongation in 2\" / 50mm (min)", value: "25 %" },
      { property: "Hardness (max)", value: "31 HRC / 293 HBW" },
      { property: "Charpy V-Notch Impact Energy (-40°C)", value: "≥ 80 J" }
    ],
    physicalProperties: [
      { property: "Density", value: "7.80 g/cm³ (0.282 lb/in³)" },
      { property: "Modulus of Elasticity", value: "200 GPa" },
      { property: "Thermal Conductivity (at 20°C)", value: "19.0 W/m·K" },
      { property: "Specific Heat Capacity (at 20°C)", value: "450 J/kg·K" },
      { property: "Electrical Resistivity", value: "0.85 μΩ·m" }
    ],
    equivalentGrades: [
      { standard: "USA (UNS)", grade: "UNS S31803 / S32205" },
      { standard: "ASTM Forgings", grade: "ASTM A182 F51 / F60" },
      { standard: "ASTM Plate/Sheet", grade: "ASTM A240 2205" },
      { standard: "ASTM Pipe", grade: "ASTM A790 2205" },
      { standard: "European (EN / W.Nr.)", grade: "1.4462 (X2CrNiMoN22-5-3)" },
      { standard: "ISO", grade: "ISO 15156 / NACE MR0175" }
    ],
    keyFeatures: [
      "Nearly double the yield strength of 316L stainless steel",
      "Superior chloride pitting resistance equivalent number (PREN ≥ 35)",
      "High resistance to stress corrosion cracking (SCC) in chloride & sour gas environments",
      "Good weldability and thermal conductivity compared to standard austenitic steels",
      "Operational temperature range from -50°C to +300°C"
    ],
    applications: [
      "Subsea flowlines, risers, and offshore oil & gas manifold systems",
      "Seawater desalination plants, brine evaporators, and reverse osmosis skids",
      "Chemical processing autoclaves, scrubbers, and organic acid pipelines",
      "Flue gas desulfurization (FGD) scrubbers and marine exhaust systems",
      "Pulp and paper digesters, bleaching equipment, and chemical recovery boilers"
    ],
    compatibleProducts: [
      "Pipes & Tubes (ASTM A790)",
      "Butt Weld Fittings (ASTM A815)",
      "Forged Fittings & Flanges (ASTM A182 F51/F60)",
      "Sheets & Plates (ASTM A240)",
      "High Tensile Fasteners (ASTM A182 F51 / A193)"
    ]
  },
  {
    id: "ldx-2101",
    slug: "ldx-2101",
    name: "LDX 2101",
    title: "Lean Duplex Stainless Steel LDX 2101 (UNS S32101 / W.Nr. 1.4162)",
    shortName: "LDX 2101",
    aliases: ["s32101", "1.4162", "ldx2101", "lean-duplex-2101"],
    category: "Lean Duplex Stainless Steel",
    uns: "UNS S32101",
    dinEnWnr: "1.4162 / X2CrMnNiN21-5-1",
    pren: "≥ 26",
    primaryStandards: "ASTM A182, ASTM A240, ASTM A790, ASTM A815, EN 10088-2, ASME Code Case 2418",
    overview:
      "LDX 2101 (UNS S32101 / 1.4162) is a low-nickel lean duplex stainless steel engineered to deliver superior strength and stress corrosion cracking resistance compared to standard austenitic grades like 304 and 316L, while offering a highly cost-effective, price-stable alternative due to its reduced nickel content and balanced manganese/nitrogen alloying.",
    contextualDescription: (productName) =>
      `In ${productName || "flow control components, fittings, and industrial valves"}, LDX 2101 offers exceptional mechanical strength (double that of 304/316) allowing engineers to reduce wall thickness and component weight without sacrificing structural integrity or chloride corrosion resistance.`,
    chemicalComposition: [
      { element: "Chromium (Cr)", min: "21.0", max: "22.0" },
      { element: "Manganese (Mn)", min: "4.0", max: "6.0" },
      { element: "Nickel (Ni)", min: "1.35", max: "1.70" },
      { element: "Nitrogen (N)", min: "0.20", max: "0.25" },
      { element: "Molybdenum (Mo)", min: "0.10", max: "0.80" },
      { element: "Copper (Cu)", min: "0.10", max: "0.80" },
      { element: "Carbon (C)", min: "—", max: "0.040" },
      { element: "Silicon (Si)", min: "—", max: "1.00" },
      { element: "Phosphorus (P)", min: "—", max: "0.040" },
      { element: "Sulfur (S)", min: "—", max: "0.030" }
    ],
    mechanicalProperties: [
      { property: "Tensile Strength (min)", value: "650 - 850 MPa (94 - 123 ksi)" },
      { property: "Yield Strength (0.2% Offset, min)", value: "450 MPa (65 ksi)" },
      { property: "Elongation in 2\" / 50mm (min)", value: "30 %" },
      { property: "Hardness (max)", value: "290 HBW / 31 HRC" }
    ],
    physicalProperties: [
      { property: "Density", value: "7.70 g/cm³" },
      { property: "Modulus of Elasticity", value: "200 GPa" },
      { property: "Thermal Conductivity", value: "15.0 W/m·K" },
      { property: "Specific Heat", value: "500 J/kg·K" }
    ],
    equivalentGrades: [
      { standard: "USA (UNS)", grade: "UNS S32101" },
      { standard: "European (EN / W.Nr.)", grade: "1.4162 (X2CrMnNiN21-5-1)" },
      { standard: "ASTM", grade: "ASTM A240 / A182 / A790" }
    ],
    keyFeatures: [
      "Economic, price-stable lean duplex alloy with low nickel content",
      "High yield strength (450 MPa minimum) — over 2x standard 304/316",
      "Superior chloride stress corrosion cracking resistance compared to 304 and 316",
      "Excellent general corrosion resistance in municipal water and mildly corrosive media"
    ],
    applications: [
      "Storage tanks, pressure vessels, and water treatment pipe systems",
      "Butterfly fittings, valve bodies, and civil wastewater handling equipment",
      "Food and beverage processing pipelines and brewery storage vats",
      "Bridge structural components, rebar, and architectural building systems"
    ],
    compatibleProducts: [
      "Industrial Valves & Butterfly Fittings",
      "Pipes & Tubes (ASTM A790)",
      "Sheets & Storage Tank Plates (ASTM A240)",
      "Flanges & Forgings (ASTM A182)"
    ]
  },
  {
    id: "super-duplex-2507",
    slug: "super-duplex-2507",
    name: "Super Duplex 2507",
    title: "Super Duplex Stainless Steel 2507 (UNS S32750 / W.Nr. 1.4410)",
    shortName: "2507",
    aliases: ["s32750", "1.4410", "f53", "super-duplex-2507", "2507"],
    category: "Super Duplex Stainless Steel",
    uns: "UNS S32750",
    dinEnWnr: "1.4410 / X2CrNiMoN25-7-4",
    pren: "≥ 42",
    primaryStandards: "ASTM A182 F53, ASTM A240, ASTM A790, ASTM A815, NORSOK M-630, NACE MR0175",
    overview:
      "Super Duplex 2507 (UNS S32750 / 1.4410) is a 25% chromium super duplex alloy with high molybdenum and nitrogen additions. Designed specifically for severe corrosive services in marine, offshore, and chemical processing, 2507 features a PREN ≥ 42, delivering exceptional resistance to pitting, crevice corrosion, and erosion in high-chloride warm seawater environments.",
    contextualDescription: (productName) =>
      `When applied in ${productName || "high-pressure components"}, Super Duplex 2507 delivers extreme mechanical endurance and unmatched immunity to chloride pitting and sour gas corrosion in critical subsea, offshore oil platform, and chemical reactor systems.`,
    chemicalComposition: [
      { element: "Chromium (Cr)", min: "24.0", max: "26.0" },
      { element: "Nickel (Ni)", min: "6.0", max: "8.0" },
      { element: "Molybdenum (Mo)", min: "3.0", max: "5.0" },
      { element: "Nitrogen (N)", min: "0.24", max: "0.32" },
      { element: "Carbon (C)", min: "—", max: "0.030" },
      { element: "Manganese (Mn)", min: "—", max: "1.20" },
      { element: "Silicon (Si)", min: "—", max: "0.80" },
      { element: "Copper (Cu)", min: "—", max: "0.50" },
      { element: "Phosphorus (P)", min: "—", max: "0.035" },
      { element: "Sulfur (S)", min: "—", max: "0.020" }
    ],
    mechanicalProperties: [
      { property: "Tensile Strength (min)", value: "750 - 1000 MPa (116 ksi)" },
      { property: "Yield Strength (0.2% Offset, min)", value: "550 MPa (80 ksi)" },
      { property: "Elongation in 2\" / 50mm (min)", value: "15 - 25 %" },
      { property: "Hardness (max)", value: "32 HRC / 310 HBW" },
      { property: "Impact Energy (-46°C, min)", value: "≥ 80 J" }
    ],
    physicalProperties: [
      { property: "Density", value: "7.80 g/cm³" },
      { property: "Thermal Conductivity", value: "15.0 W/m·K" },
      { property: "Modulus of Elasticity", value: "205 GPa" }
    ],
    equivalentGrades: [
      { standard: "USA (UNS)", grade: "UNS S32750" },
      { standard: "ASTM Forgings", grade: "ASTM A182 F53" },
      { standard: "European (EN / W.Nr.)", grade: "1.4410" },
      { standard: "NORSOK", grade: "M-630 MDS D57" }
    ],
    keyFeatures: [
      "Ultra-high Pitting Resistance Equivalent Number (PREN ≥ 42)",
      "High yield strength of 550 MPa minimum for high pressure containment",
      "High resistance to erosion corrosion, abrasion, and cavitation in fast flowing seawater",
      "Full compliance with NACE MR0175 / ISO 15156 for sour oil and gas service"
    ],
    applications: [
      "Subsea manifolds, subsea trees, wellhead equipment, and flowlines",
      "Offshore oil platform seawater firefighting, cooling, and ballast systems",
      "Desalination reverse osmosis high pressure piping and pump casings",
      "Petrochemical organic and inorganic acid production equipment"
    ],
    compatibleProducts: [
      "High Pressure Flanges (ASTM A182 F53)",
      "Pipes & Tubes (ASTM A790)",
      "Butt Weld Fittings (ASTM A815)",
      "Fasteners & Stud Bolts (ASTM A182 F53)"
    ]
  },
  {
    id: "zeron-100",
    slug: "zeron-100",
    name: "Zeron 100 (25Cr Super Duplex)",
    title: "Super Duplex Stainless Steel Zeron 100 (UNS S32760 / W.Nr. 1.4501)",
    shortName: "Zeron 100",
    aliases: ["s32760", "1.4501", "f55", "zeron100"],
    category: "Super Duplex Stainless Steel",
    uns: "UNS S32760",
    dinEnWnr: "1.4501 / X2CrNiMoCuWN25-7-4",
    pren: "≥ 42",
    primaryStandards: "ASTM A182 F55, ASTM A240, ASTM A790, ASTM A815, NACE MR0175",
    overview:
      "Zeron 100 (UNS S32760 / F55 / 1.4501) is a 25% Cr super duplex alloy enhanced with tungsten and copper additions. The tungsten and copper synergy provides exceptional resistance to strong non-oxidizing acids like sulfuric and hydrochloric acids, while retaining a PREN ≥ 42 for severe chloride service.",
    contextualDescription: (productName) =>
      `In ${productName || "critical piping and flow equipment"}, Zeron 100 delivers verified mechanical tenacity and superior acid corrosion resistance for deepwater subsea operations and aggressive chemical synthesis.`,
    chemicalComposition: [
      { element: "Chromium (Cr)", min: "24.0", max: "26.0" },
      { element: "Nickel (Ni)", min: "6.0", max: "8.0" },
      { element: "Molybdenum (Mo)", min: "3.0", max: "4.0" },
      { element: "Tungsten (W)", min: "0.50", max: "1.00" },
      { element: "Copper (Cu)", min: "0.50", max: "1.00" },
      { element: "Nitrogen (N)", min: "0.20", max: "0.30" },
      { element: "Carbon (C)", min: "—", max: "0.030" }
    ],
    mechanicalProperties: [
      { property: "Tensile Strength (min)", value: "750 - 1000 MPa (109 ksi)" },
      { property: "Yield Strength (0.2% Offset, min)", value: "550 MPa (80 ksi)" },
      { property: "Elongation (min)", value: "25 %" },
      { property: "Hardness (max)", value: "28 HRC / 270 HBW" }
    ],
    physicalProperties: [
      { property: "Density", value: "7.84 g/cm³" },
      { property: "Thermal Conductivity", value: "14.2 W/m·K" }
    ],
    equivalentGrades: [
      { standard: "USA (UNS)", grade: "UNS S32760" },
      { standard: "ASTM Forgings", grade: "ASTM A182 F55" },
      { standard: "European (EN / W.Nr.)", grade: "1.4501" }
    ],
    keyFeatures: [
      "Tungsten and copper additions providing superior resistance to non-oxidizing acids",
      "High yield strength (550 MPa min)",
      "High PREN ≥ 42 against seawater pitting",
      "Excellent resistance to cavitation and erosion-corrosion"
    ],
    applications: [
      "Flue gas desulfurization systems and acid recovery units",
      "Offshore subsea choke valves, manifolds, and piping",
      "Chemical fertilizer production and phosphoric acid evaporators"
    ],
    compatibleProducts: [
      "Flanges & Forgings (ASTM A182 F55)",
      "Seamless Pipes (ASTM A790)",
      "Butt Weld Fittings (ASTM A815)",
      "Heavy Duty Fasteners"
    ]
  },

  // ==========================================
  // AUSTENITIC & SUPER AUSTENITIC STAINLESS
  // ==========================================
  {
    id: "ss-316l",
    slug: "ss-316l",
    name: "Stainless Steel 316 / 316L",
    title: "Stainless Steel 316 / 316L (UNS S31600 / S31603 / W.Nr. 1.4404)",
    shortName: "316 / 316L",
    aliases: ["316", "316l", "tp316", "tp316l", "f316", "f316l", "wp316l", "1.4404", "1.4401", "s31600", "s31603"],
    category: "Austenitic Stainless Steel",
    uns: "UNS S31600 / UNS S31603",
    dinEnWnr: "1.4401 / 1.4404 (X2CrNiMo17-12-2)",
    pren: "23 - 25",
    primaryStandards: "ASTM A312, ASTM A182, ASTM A403, ASTM A240, ASTM A276, ASME SA312, ASME SA182",
    overview:
      "AISI 316 / 316L is the benchmark molybdenum-bearing austenitic stainless steel for chemical, petrochemical, marine, and pharmaceutical service. The 2-3% molybdenum addition provides vastly superior resistance to pitting and crevice corrosion in chloride media compared to grade 304. The low carbon content (316L) eliminates carbide precipitation during welding.",
    contextualDescription: (productName) =>
      `When fabricated into ${productName || "piping, flanges, and fittings"}, SS 316/316L offers proven reliability, excellent cryogenic ductility, easy weldability without post-weld heat treatment, and smooth surface cleanability suitable for chemical transfer and pharmaceutical piping.`,
    chemicalComposition: [
      { element: "Chromium (Cr)", min: "16.0", max: "18.0" },
      { element: "Nickel (Ni)", min: "10.0", max: "14.0" },
      { element: "Molybdenum (Mo)", min: "2.00", max: "3.00" },
      { element: "Carbon (C)", min: "—", max: "0.030 (316L) / 0.08 (316)" },
      { element: "Manganese (Mn)", min: "—", max: "2.00" },
      { element: "Silicon (Si)", min: "—", max: "0.75" },
      { element: "Phosphorus (P)", min: "—", max: "0.045" },
      { element: "Sulfur (S)", min: "—", max: "0.030" },
      { element: "Nitrogen (N)", min: "—", max: "0.10" }
    ],
    mechanicalProperties: [
      { property: "Tensile Strength (min)", value: "485 MPa (70 ksi) for 316L / 515 MPa for 316" },
      { property: "Yield Strength (0.2% Offset, min)", value: "170 MPa (25 ksi) for 316L / 205 MPa for 316" },
      { property: "Elongation in 2\" / 50mm (min)", value: "40 %" },
      { property: "Hardness (max)", value: "95 HRB / 217 HBW" }
    ],
    physicalProperties: [
      { property: "Density", value: "8.00 g/cm³" },
      { property: "Thermal Conductivity (at 100°C)", value: "16.3 W/m·K" },
      { property: "Modulus of Elasticity", value: "193 GPa" }
    ],
    equivalentGrades: [
      { standard: "USA (UNS)", grade: "UNS S31603 (316L) / S31600 (316)" },
      { standard: "ASTM Pipe", grade: "ASTM A312 TP316 / TP316L" },
      { standard: "ASTM Forgings / Flanges", grade: "ASTM A182 F316 / F316L" },
      { standard: "ASTM Butt Weld Fittings", grade: "ASTM A403 WP316 / WP316L" },
      { standard: "European (EN / W.Nr.)", grade: "1.4404 / 1.4401" }
    ],
    keyFeatures: [
      "Superior pitting and crevice corrosion resistance in chloride solutions",
      "Low carbon (316L) prevents intergranular sensitization during welding",
      "Excellent toughness down to cryogenic temperatures (-196°C)",
      "High sanitary passivity and bio-inertness for food & pharma applications"
    ],
    applications: [
      "Chemical and petrochemical process pipelines, reactors, and storage tanks",
      "Pharmaceutical clean-in-place (CIP) and water-for-injection (WFI) systems",
      "Marine hardware, architectural dock handrails, and coastal pipeline fittings",
      "Food and dairy processing machinery, heat exchangers, and bottling plants"
    ],
    compatibleProducts: [
      "Pipes & Tubes (ASTM A312 TP316L)",
      "Butt Weld Fittings (ASTM A403 WP316L)",
      "Forged Flanges (ASTM A182 F316L)",
      "High Tensile Fasteners (ASTM A193 B8M)",
      "Sheets & Plates (ASTM A240 316L)"
    ]
  },
  {
    id: "ss-304l",
    slug: "ss-304l",
    name: "Stainless Steel 304 / 304L",
    title: "Stainless Steel 304 / 304L (UNS S30400 / S30403 / W.Nr. 1.4301 / 1.4307)",
    shortName: "304 / 304L",
    aliases: ["304", "304l", "tp304", "tp304l", "f304", "f304l", "wp304l", "1.4301", "1.4307", "s30400", "s30403"],
    category: "Austenitic Stainless Steel",
    uns: "UNS S30400 / UNS S30403",
    dinEnWnr: "1.4301 / 1.4307 (X2CrNi18-9)",
    pren: "18 - 20",
    primaryStandards: "ASTM A312, ASTM A182, ASTM A403, ASTM A240, ASTM A276, ASME SA312",
    overview:
      "AISI 304 / 304L (18/8 stainless steel) is the most versatile and widely utilized austenitic stainless steel grade globally. With 18% chromium and 8% nickel, it exhibits superior atmospheric and general corrosion resistance, exceptional deep-drawing and forming qualities, and excellent cryogenic toughness.",
    contextualDescription: (productName) =>
      `For ${productName || "general industrial piping, fittings, and flanges"}, SS 304/304L provides the most balanced combination of corrosion resistance, structural strength, weldability, and commercial economy.`,
    chemicalComposition: [
      { element: "Chromium (Cr)", min: "17.5", max: "19.5" },
      { element: "Nickel (Ni)", min: "8.0", max: "10.5" },
      { element: "Carbon (C)", min: "—", max: "0.030 (304L) / 0.08 (304)" },
      { element: "Manganese (Mn)", min: "—", max: "2.00" },
      { element: "Silicon (Si)", min: "—", max: "0.75" },
      { element: "Phosphorus (P)", min: "—", max: "0.045" },
      { element: "Sulfur (S)", min: "—", max: "0.030" }
    ],
    mechanicalProperties: [
      { property: "Tensile Strength (min)", value: "485 MPa (70 ksi) for 304L / 515 MPa for 304" },
      { property: "Yield Strength (0.2% Offset, min)", value: "170 MPa (25 ksi) for 304L / 205 MPa for 304" },
      { property: "Elongation (min)", value: "40 %" },
      { property: "Hardness (max)", value: "92 HRB / 201 HBW" }
    ],
    physicalProperties: [
      { property: "Density", value: "7.93 g/cm³" },
      { property: "Thermal Conductivity (at 100°C)", value: "16.2 W/m·K" },
      { property: "Electrical Resistivity", value: "0.72 μΩ·m" }
    ],
    equivalentGrades: [
      { standard: "USA (UNS)", grade: "UNS S30403 (304L) / S30400 (304)" },
      { standard: "ASTM Pipe", grade: "ASTM A312 TP304 / TP304L" },
      { standard: "ASTM Forgings / Flanges", grade: "ASTM A182 F304 / F304L" },
      { standard: "ASTM Butt Weld Fittings", grade: "ASTM A403 WP304 / WP304L" },
      { standard: "European (EN / W.Nr.)", grade: "1.4307 / 1.4301" }
    ],
    keyFeatures: [
      "Universal austenitic grade with excellent all-around corrosion resistance",
      "Low carbon 304L eliminates weld decay from chromium carbide sensitization",
      "Outstanding ductility and formability",
      "High hygiene compliance for architectural, dairy, and beverage industries"
    ],
    applications: [
      "Commercial piping systems, plumbing, and HVAC installations",
      "Food, dairy, brewery, and beverage production lines",
      "Architectural facades, handrails, structural trims, and kitchen equipment",
      "Cryogenic vessels, liquid nitrogen piping, and general chemical tanks"
    ],
    compatibleProducts: [
      "Pipes & Tubes (ASTM A312 TP304L)",
      "Butt Weld Fittings (ASTM A403 WP304L)",
      "Forged Flanges (ASTM A182 F304L)",
      "Fasteners (ASTM A193 B8)",
      "Sheets & Plates (ASTM A240 304L)"
    ]
  },
  {
    id: "ss-904l",
    slug: "ss-904l",
    name: "Stainless Steel 904L",
    title: "Super Austenitic Stainless Steel 904L (UNS N08904 / W.Nr. 1.4539)",
    shortName: "904L",
    aliases: ["904l", "n08904", "1.4539", "super-austenitic-904l"],
    category: "Super Austenitic Stainless Steel",
    uns: "UNS N08904",
    dinEnWnr: "1.4539 / X1NiCrMoCu25-20-5",
    pren: "≥ 35",
    primaryStandards: "ASTM A182 F904L, ASTM A240, ASTM A312, ASTM A403, ASME SA182",
    overview:
      "Alloy 904L (UNS N08904 / 1.4539) is a non-stabilized low-carbon high-alloy austenitic stainless steel. Containing 25% nickel, 20% chromium, 4.5% molybdenum, and 1.5% copper additions, 904L provides extraordinary resistance to strong reducing acids, especially sulfuric, phosphoric, and organic acids, alongside complete immunity to chloride stress corrosion cracking.",
    contextualDescription: (productName) =>
      `When specified for ${productName || "critical process equipment"}, 904L offers unmatched resistance in sulfuric and phosphoric acid service environments where standard 316L rapidly fails.`,
    chemicalComposition: [
      { element: "Nickel (Ni)", min: "23.0", max: "28.0" },
      { element: "Chromium (Cr)", min: "19.0", max: "23.0" },
      { element: "Molybdenum (Mo)", min: "4.0", max: "5.0" },
      { element: "Copper (Cu)", min: "1.0", max: "2.0" },
      { element: "Carbon (C)", min: "—", max: "0.020" },
      { element: "Manganese (Mn)", min: "—", max: "2.00" },
      { element: "Silicon (Si)", min: "—", max: "1.00" },
      { element: "Nitrogen (N)", min: "—", max: "0.10" }
    ],
    mechanicalProperties: [
      { property: "Tensile Strength (min)", value: "490 MPa (71 ksi)" },
      { property: "Yield Strength (0.2% Offset, min)", value: "220 MPa (31 ksi)" },
      { property: "Elongation (min)", value: "35 %" },
      { property: "Hardness (max)", value: "90 HRB / 192 HBW" }
    ],
    physicalProperties: [
      { property: "Density", value: "8.05 g/cm³" },
      { property: "Thermal Conductivity", value: "11.5 W/m·K" }
    ],
    equivalentGrades: [
      { standard: "USA (UNS)", grade: "UNS N08904" },
      { standard: "ASTM", grade: "ASTM A182 F904L / A312 TP904L" },
      { standard: "European (EN / W.Nr.)", grade: "1.4539" }
    ],
    keyFeatures: [
      "Exceptional resistance to sulfuric acid at all concentrations up to 35°C",
      "Copper addition significantly improves reducing acid resistance",
      "High nickel content provides complete immunity to chloride SCC",
      "High PREN ≥ 35 for aggressive coastal and paper mill bleaching environments"
    ],
    applications: [
      "Sulfuric and phosphoric acid manufacturing and fertilizer production",
      "Flue gas desulfurization (FGD) scrubbers and acid condensation plants",
      "Pulp bleaching equipment in paper processing plants",
      "Seawater cooling systems and petrochemical condensation tubes"
    ],
    compatibleProducts: [
      "Flanges & Forgings (ASTM A182 F904L)",
      "Pipes & Tubes (ASTM A312 904L)",
      "Butt Weld Fittings (ASTM A403 WP904L)",
      "Sheets & Plates (ASTM A240 904L)"
    ]
  },
  {
    id: "ss-321",
    slug: "ss-321",
    name: "Stainless Steel 321 / 321H",
    title: "Titanium-Stabilized Stainless Steel 321 / 321H (UNS S32100 / S32109 / W.Nr. 1.4541)",
    shortName: "321 / 321H",
    aliases: ["321", "321h", "tp321", "tp321h", "f321", "1.4541", "s32100"],
    category: "Austenitic Stainless Steel (High Temperature)",
    uns: "UNS S32100 / UNS S32109",
    dinEnWnr: "1.4541 (X6CrNiTi18-10)",
    pren: "18 - 20",
    primaryStandards: "ASTM A312, ASTM A182, ASTM A403, ASTM A240, ASME SA312",
    overview:
      "Grade 321 is a titanium-stabilized austenitic stainless steel developed for elevated temperature operations up to 870°C. The titanium addition (Ti ≥ 5 x %C) preferentially binds carbon into titanium carbides, preventing chromium carbide precipitation in the sensitization range (425°C - 850°C) and maintaining intergranular corrosion resistance.",
    contextualDescription: (productName) =>
      `In ${productName || "thermal piping and furnace fittings"}, SS 321/321H ensures long-term creep rupture strength and thermal cyclic stability in boiler tubes, steam lines, and refinery exhaust manifolds.`,
    chemicalComposition: [
      { element: "Chromium (Cr)", min: "17.0", max: "19.0" },
      { element: "Nickel (Ni)", min: "9.0", max: "12.0" },
      { element: "Titanium (Ti)", min: "5x(C+N)", max: "0.70" },
      { element: "Carbon (C)", min: "0.04 (321H)", max: "0.08" },
      { element: "Manganese (Mn)", min: "—", max: "2.00" },
      { element: "Silicon (Si)", min: "—", max: "0.75" }
    ],
    mechanicalProperties: [
      { property: "Tensile Strength (min)", value: "515 MPa (75 ksi)" },
      { property: "Yield Strength (0.2% Offset, min)", value: "205 MPa (30 ksi)" },
      { property: "Elongation (min)", value: "40 %" },
      { property: "Hardness (max)", value: "95 HRB / 217 HBW" }
    ],
    physicalProperties: [
      { property: "Density", value: "7.92 g/cm³" },
      { property: "Maximum Service Temperature in Air", value: "870°C (1600°F)" }
    ],
    equivalentGrades: [
      { standard: "USA (UNS)", grade: "UNS S32100 (321) / S32109 (321H)" },
      { standard: "ASTM", grade: "ASTM A312 TP321 / A182 F321" },
      { standard: "European (EN / W.Nr.)", grade: "1.4541" }
    ],
    keyFeatures: [
      "Titanium stabilization prevents intergranular sensitization at 425°C-850°C",
      "High creep strength and stress rupture properties at elevated temperatures",
      "Good toughness and oxidation resistance in thermal cyclic environments"
    ],
    applications: [
      "Refinery expansion joints, catalytic cracking units, and furnace tubes",
      "Aircraft exhaust manifolds, jet engine components, and thermal oxidizers",
      "Superheater steam piping and high-temperature chemical reactor tubes"
    ],
    compatibleProducts: [
      "Pipes & Tubes (ASTM A312 TP321)",
      "Forged Flanges (ASTM A182 F321)",
      "Butt Weld Fittings (ASTM A403 WP321)",
      "Hose Pipes & Corrugated Flexible Bellows"
    ]
  },

  // ==========================================
  // CARBON STEEL & LOW TEMPERATURE GRADES
  // ==========================================
  {
    id: "astm-a105",
    slug: "astm-a105",
    name: "Carbon Steel ASTM A105 / A105N",
    title: "Forged Carbon Steel ASTM A105 / A105N for High-Temperature Service",
    shortName: "ASTM A105",
    aliases: ["a105", "a105n", "astm-a105", "astm-a105n"],
    category: "Forged Carbon Steel",
    uns: "UNS K03504",
    dinEnWnr: "1.0460 (C22.8) / P250GH",
    primaryStandards: "ASTM A105 / A105M, ASME SA105, ASME B16.5, ASME B16.11, MSS-SP-44",
    overview:
      "ASTM A105 covers forged carbon steel piping components, including flanges, fittings, valves, and similar parts for ambient- and higher-temperature service in pressure systems. Normalized (A105N) material guarantees enhanced grain refinement and notch toughness, meeting strict requirements for boiler and pressure vessel construction up to 425°C.",
    contextualDescription: (productName) =>
      `As the industrial standard for ${productName || "forged flanges and socket weld fittings"}, ASTM A105N provides superior pressure integrity, seamless machinability, and full ASME Boiler and Pressure Vessel Code compliance.`,
    chemicalComposition: [
      { element: "Carbon (C)", min: "—", max: "0.35" },
      { element: "Manganese (Mn)", min: "0.60", max: "1.05" },
      { element: "Phosphorus (P)", min: "—", max: "0.035" },
      { element: "Sulfur (S)", min: "—", max: "0.040" },
      { element: "Silicon (Si)", min: "0.10", max: "0.35" },
      { element: "Copper (Cu)", min: "—", max: "0.40" },
      { element: "Nickel (Ni)", min: "—", max: "0.40" },
      { element: "Chromium (Cr)", min: "—", max: "0.30" },
      { element: "Molybdenum (Mo)", min: "—", max: "0.12" },
      { element: "Vanadium (V)", min: "—", max: "0.08" }
    ],
    mechanicalProperties: [
      { property: "Tensile Strength (min)", value: "485 MPa (70 ksi)" },
      { property: "Yield Strength (0.2% Offset, min)", value: "250 MPa (36 ksi)" },
      { property: "Elongation in 2\" / 50mm (min)", value: "22 %" },
      { property: "Reduction of Area (min)", value: "30 %" },
      { property: "Hardness (max)", value: "187 HBW" }
    ],
    physicalProperties: [
      { property: "Density", value: "7.85 g/cm³ (0.284 lb/in³)" },
      { property: "Modulus of Elasticity", value: "205 GPa" }
    ],
    equivalentGrades: [
      { standard: "USA (ASTM / ASME)", grade: "ASTM A105 / ASME SA105" },
      { standard: "European (EN / W.Nr.)", grade: "1.0460 / P250GH / C22.8" },
      { standard: "British (BS)", grade: "BS 1503-221" }
    ],
    keyFeatures: [
      "Industry benchmark forging grade for ASME B16.5 flanges and B16.11 fittings",
      "A105N normalized heat treatment ensures uniform grain structure and impact toughness",
      "Pressure containment rating up to Class 2500# and temperatures up to 425°C",
      "Readily weldable using standard carbon steel welding electrodes (E7018)"
    ],
    applications: [
      "Industrial flanges across Class 150#, 300#, 600#, 900#, 1500#, 2500#",
      "High-pressure socket weld and threaded screwed pipe fittings",
      "Refinery, power plant, and petrochemical steam and hydrocarbon lines",
      "Pipeline transmission stations and oil terminal manifolding"
    ],
    compatibleProducts: [
      "Industrial Flanges (Weld Neck, Slip-On, Blind, Threaded, Socket Weld)",
      "Forged Fittings (3000#, 6000#, 9000#)",
      "High Pressure Valves (Gate, Globe, Check)",
      "Weldolets, Sockolets, and Threadolets"
    ]
  },
  {
    id: "astm-a350-lf2",
    slug: "astm-a350-lf2",
    name: "Carbon Steel ASTM A350 LF2",
    title: "Low-Temperature Forged Carbon Steel ASTM A350 LF2 (Class 1)",
    shortName: "A350 LF2",
    aliases: ["lf2", "a350-lf2", "astm-a350-lf2"],
    category: "Low-Temperature Carbon Steel",
    uns: "UNS K03011",
    primaryStandards: "ASTM A350 / A350M, ASME SA350, NACE MR0175",
    overview:
      "ASTM A350 LF2 is a low-temperature forged carbon steel designed for pressure piping components operating down to -46°C (-50°F). It features mandatory Charpy V-Notch impact testing to guarantee brittle fracture resistance in cryogenic gas lines, Arctic environments, and LNG processing.",
    contextualDescription: (productName) =>
      `In ${productName || "flanges and pressure fittings"}, A350 LF2 provides certified low-temperature impact resilience and NACE sour service compliance for cold-climate and refrigeration duties.`,
    chemicalComposition: [
      { element: "Carbon (C)", min: "—", max: "0.30" },
      { element: "Manganese (Mn)", min: "0.60", max: "1.35" },
      { element: "Phosphorus (P)", min: "—", max: "0.035" },
      { element: "Sulfur (S)", min: "—", max: "0.040" },
      { element: "Silicon (Si)", min: "0.15", max: "0.30" }
    ],
    mechanicalProperties: [
      { property: "Tensile Strength", value: "485 - 655 MPa (70 - 95 ksi)" },
      { property: "Yield Strength (min)", value: "250 MPa (36 ksi)" },
      { property: "Elongation (min)", value: "22 %" },
      { property: "Charpy V-Notch Impact Energy (-46°C)", value: "Average ≥ 27 J (Individual ≥ 20 J)" },
      { property: "Hardness (max)", value: "197 HBW / 22 HRC" }
    ],
    physicalProperties: [
      { property: "Density", value: "7.85 g/cm³" },
      { property: "Minimum Impact Test Temp", value: "-46°C (-50°F)" }
    ],
    equivalentGrades: [
      { standard: "USA (ASTM)", grade: "ASTM A350 Grade LF2 Class 1" },
      { standard: "Pipe Equivalent", grade: "ASTM A333 Grade 6" },
      { standard: "Fitting Equivalent", grade: "ASTM A420 WPL6" }
    ],
    keyFeatures: [
      "Impact tested at -46°C (-50°F) for low temperature fracture prevention",
      "Normalized, normalized and tempered, or quenched and tempered delivery condition",
      "Available in Class 1 and Class 2 strength ratings",
      "NACE MR0175 compliant hardness under 22 HRC"
    ],
    applications: [
      "Arctic oil & gas pipelines and cold-climate drilling rigs",
      "Liquefied Natural Gas (LNG) and LPG processing facilities",
      "Industrial ammonia refrigeration and cryogenic air separation systems"
    ],
    compatibleProducts: [
      "Low Temperature Flanges (ASTM A350 LF2)",
      "LTCS Forged Fittings (ASTM A350 LF2)",
      "Seamless Pipes (ASTM A333 Gr. 6)",
      "Butt Weld Fittings (ASTM A420 WPL6)"
    ]
  },
  {
    id: "astm-a234-wpb",
    slug: "astm-a234-wpb",
    name: "Carbon Steel ASTM A234 WPB",
    title: "Wrought Carbon Steel Butt Weld Fittings ASTM A234 WPB",
    shortName: "A234 WPB",
    aliases: ["wpb", "a234-wpb", "astm-a234-wpb"],
    category: "Wrought Carbon Steel",
    primaryStandards: "ASTM A234 / A234M, ASME B16.9, ASME SA234",
    overview:
      "ASTM A234 WPB is the premier standard specification for piping fittings of wrought carbon steel and alloy steel for moderate and elevated temperature service. It governs elbows, tees, reducers, and caps manufactured from seamless pipe or plate.",
    contextualDescription: (productName) =>
      `For ${productName || "butt weld piping networks"}, ASTM A234 WPB guarantees exact dimensional conformity to ASME B16.9 and superior weldability to matching ASTM A106 Gr. B pipes.`,
    chemicalComposition: [
      { element: "Carbon (C)", min: "—", max: "0.30" },
      { element: "Manganese (Mn)", min: "0.29", max: "1.06" },
      { element: "Phosphorus (P)", min: "—", max: "0.050" },
      { element: "Sulfur (S)", min: "—", max: "0.058" },
      { element: "Silicon (Si)", min: "0.10", max: "—" }
    ],
    mechanicalProperties: [
      { property: "Tensile Strength (min)", value: "415 MPa (60 ksi)" },
      { property: "Yield Strength (0.2% Offset, min)", value: "240 MPa (35 ksi)" },
      { property: "Elongation (min)", value: "30 %" }
    ],
    physicalProperties: [
      { property: "Density", value: "7.85 g/cm³" }
    ],
    equivalentGrades: [
      { standard: "Pipe Matching", grade: "ASTM A106 Gr. B / A53 Gr. B" },
      { standard: "Flange Matching", grade: "ASTM A105" }
    ],
    keyFeatures: [
      "Standard material for seamless and welded ASME B16.9 butt weld fittings",
      "Full dimensional interchangeability with ANSI B36.10 pipe schedules",
      "Excellent hot forming and cold bending properties"
    ],
    applications: [
      "Steam power plants, industrial boiler piping, and heating systems",
      "Crude oil pipelines, refinery interconnecting piping, and chemical utilities"
    ],
    compatibleProducts: [
      "Butt Weld Elbows (45°, 90°, 180° LR & SR)",
      "Equal & Reducing Tees",
      "Concentric & Eccentric Reducers",
      "Pipe End Caps & Stub Ends"
    ]
  },

  // ==========================================
  // ALLOY STEELS (HIGH TEMPERATURE / CREEP)
  // ==========================================
  {
    id: "astm-a182-f11",
    slug: "astm-a182-f11",
    name: "Alloy Steel ASTM A182 F11 (1.25Cr-0.5Mo)",
    title: "Alloy Steel ASTM A182 F11 Class 2 (1.25Cr-0.5Mo) for High-Temperature Service",
    shortName: "A182 F11",
    aliases: ["f11", "a182-f11", "p11", "wp11", "1.25cr-0.5mo"],
    category: "Chromium-Molybdenum Alloy Steel",
    uns: "UNS K11572",
    dinEnWnr: "1.7335 (13CrMo4-5)",
    primaryStandards: "ASTM A182 F11, ASTM A335 P11, ASTM A234 WP11, ASME SA182",
    overview:
      "ASTM A182 F11 (Grade 11, Class 2) is a 1.25% Chromium – 0.5% Molybdenum low-alloy steel designed for elevated temperature steam lines, refinery hydrocrackers, and boiler piping up to 550°C. Chromium provides oxidation and corrosion resistance, while molybdenum enhances creep strength.",
    contextualDescription: (productName) =>
      `In ${productName || "high-pressure steam flanges and power fittings"}, F11 provides verified thermal creep rupture endurance, resisting graphitization and hydrogen embrittlement.`,
    chemicalComposition: [
      { element: "Chromium (Cr)", min: "1.00", max: "1.50" },
      { element: "Molybdenum (Mo)", min: "0.44", max: "0.65" },
      { element: "Carbon (C)", min: "0.05", max: "0.15" },
      { element: "Manganese (Mn)", min: "0.30", max: "0.60" },
      { element: "Silicon (Si)", min: "0.50", max: "1.00" },
      { element: "Phosphorus (P)", min: "—", max: "0.040" },
      { element: "Sulfur (S)", min: "—", max: "0.040" }
    ],
    mechanicalProperties: [
      { property: "Tensile Strength (min)", value: "485 MPa (70 ksi)" },
      { property: "Yield Strength (min)", value: "275 MPa (40 ksi)" },
      { property: "Elongation (min)", value: "20 %" },
      { property: "Hardness (max)", value: "207 HBW" }
    ],
    physicalProperties: [
      { property: "Density", value: "7.85 g/cm³" },
      { property: "Max Operating Temperature", value: "550°C (1020°F)" }
    ],
    equivalentGrades: [
      { standard: "Pipe", grade: "ASTM A335 P11" },
      { standard: "Butt Weld Fitting", grade: "ASTM A234 WP11" },
      { standard: "Plate", grade: "ASTM A387 Gr. 11" },
      { standard: "European", grade: "1.7335 (13CrMo4-5)" }
    ],
    keyFeatures: [
      "Chromium-Molybdenum chemistry resists high temperature creep and graphitization",
      "Elevated thermal conductivity and low thermal expansion compared to stainless steels",
      "Proven performance in power plant steam superheaters up to 550°C"
    ],
    applications: [
      "Thermal power station main steam headers and reheat piping",
      "Oil refinery catalytic reformers, hydrocrackers, and coker units",
      "High temperature pressure vessels and heat exchanger components"
    ],
    compatibleProducts: [
      "Alloy Steel Flanges (ASTM A182 F11 Class 2)",
      "Pipes & Tubes (ASTM A335 P11)",
      "Butt Weld Fittings (ASTM A234 WP11)",
      "Socket Weld Fittings (3000# / 6000# F11)"
    ]
  },
  {
    id: "astm-a182-f22",
    slug: "astm-a182-f22",
    name: "Alloy Steel ASTM A182 F22 (2.25Cr-1Mo)",
    title: "Alloy Steel ASTM A182 F22 Class 3 (2.25Cr-1Mo) for High-Temperature Service",
    shortName: "A182 F22",
    aliases: ["f22", "a182-f22", "p22", "wp22", "2.25cr-1mo"],
    category: "Chromium-Molybdenum Alloy Steel",
    uns: "UNS K21590",
    dinEnWnr: "1.7380 (10CrMo9-10)",
    primaryStandards: "ASTM A182 F22, ASTM A335 P22, ASTM A234 WP22, ASME SA182",
    overview:
      "ASTM A182 F22 (2.25% Cr – 1% Mo) is a heavy-duty chrome-moly forging grade providing superior creep-rupture strength up to 600°C and heightened resistance to hydrogen attack under Nelson Curve conditions in refinery hydroprocessing.",
    contextualDescription: (productName) =>
      `In ${productName || "heavy wall flanges and power components"}, F22 delivers high stress rupture strength and long-term thermal fatigue durability.`,
    chemicalComposition: [
      { element: "Chromium (Cr)", min: "2.00", max: "2.50" },
      { element: "Molybdenum (Mo)", min: "0.87", max: "1.13" },
      { element: "Carbon (C)", min: "0.05", max: "0.15" },
      { element: "Manganese (Mn)", min: "0.30", max: "0.60" },
      { element: "Silicon (Si)", min: "—", max: "0.50" }
    ],
    mechanicalProperties: [
      { property: "Tensile Strength (min)", value: "515 MPa (75 ksi)" },
      { property: "Yield Strength (min)", value: "310 MPa (45 ksi)" },
      { property: "Elongation (min)", value: "20 %" },
      { property: "Hardness (max)", value: "217 HBW" }
    ],
    physicalProperties: [
      { property: "Density", value: "7.85 g/cm³" },
      { property: "Max Operating Temperature", value: "600°C (1110°F)" }
    ],
    equivalentGrades: [
      { standard: "Pipe", grade: "ASTM A335 P22" },
      { standard: "Butt Weld Fitting", grade: "ASTM A234 WP22" },
      { standard: "Plate", grade: "ASTM A387 Gr. 22" },
      { standard: "European", grade: "1.7380 (10CrMo9-10)" }
    ],
    keyFeatures: [
      "Higher 2.25% Cr and 1% Mo contents provide elevated hydrogen attack resistance",
      "High creep strength for steam service up to 600°C",
      "Normalized and tempered condition ensures fine microstructure"
    ],
    applications: [
      "High pressure steam lines in supercritical power stations",
      "Refinery hydrodesulfurization (HDS) and hydrocracker reactors",
      "Synthetic fuel processing and chemical synthesis furnaces"
    ],
    compatibleProducts: [
      "High Pressure Flanges (ASTM A182 F22)",
      "Pipes & Tubes (ASTM A335 P22)",
      "Butt Weld Fittings (ASTM A234 WP22)",
      "Heavy Forgings & Valve Bodies"
    ]
  },
  {
    id: "astm-a182-f91",
    slug: "astm-a182-f91",
    name: "Alloy Steel ASTM A182 F91 (9Cr-1Mo-V)",
    title: "Creep-Strength-Enhanced Alloy Steel ASTM A182 F91 (9Cr-1Mo-V / P91)",
    shortName: "A182 F91",
    aliases: ["f91", "a182-f91", "p91", "wp91", "9cr-1mo-v"],
    category: "Creep-Strength-Enhanced Ferritic (CSEF) Steel",
    uns: "UNS K90901",
    dinEnWnr: "1.4903 (X10CrMoVNb9-1)",
    primaryStandards: "ASTM A182 F91, ASTM A335 P91, ASTM A234 WP91, ASME SA182",
    overview:
      "Grade 91 (9Cr-1Mo-0.2V-0.08Nb) is an advanced Creep Strength Enhanced Ferritic (CSEF) martensitic steel designed for ultra-supercritical thermal power plants operating up to 650°C. Microalloyed with vanadium and niobium, F91 exhibits nearly double the allowable creep strength of F22.",
    contextualDescription: (productName) =>
      `In ${productName || "supercritical steam piping and headers"}, F91 allows significant reduction in wall thickness, lessening thermal stress during plant startups and shutdowns.`,
    chemicalComposition: [
      { element: "Chromium (Cr)", min: "8.00", max: "9.50" },
      { element: "Molybdenum (Mo)", min: "0.85", max: "1.05" },
      { element: "Vanadium (V)", min: "0.18", max: "0.25" },
      { element: "Niobium (Nb)", min: "0.06", max: "0.10" },
      { element: "Nitrogen (N)", min: "0.030", max: "0.070" },
      { element: "Carbon (C)", min: "0.08", max: "0.12" }
    ],
    mechanicalProperties: [
      { property: "Tensile Strength (min)", value: "585 MPa (85 ksi)" },
      { property: "Yield Strength (min)", value: "415 MPa (60 ksi)" },
      { property: "Elongation (min)", value: "20 %" },
      { property: "Hardness (max)", value: "248 HBW / 25 HRC" }
    ],
    physicalProperties: [
      { property: "Density", value: "7.77 g/cm³" },
      { property: "Max Operating Temperature", value: "650°C (1200°F)" }
    ],
    equivalentGrades: [
      { standard: "Pipe", grade: "ASTM A335 P91" },
      { standard: "Fitting", grade: "ASTM A234 WP91" },
      { standard: "European", grade: "1.4903" }
    ],
    keyFeatures: [
      "Superior creep strength up to 650°C due to V-Nb carbonitride precipitation",
      "Permits thinner pipe walls, reducing thermal fatigue and structural weight",
      "Requires controlled preheat and post-weld heat treatment (PWHT)"
    ],
    applications: [
      "Ultra-supercritical power plant main steam and hot reheat piping",
      "Combined cycle gas turbine (CCGT) heat recovery steam generators (HRSG)"
    ],
    compatibleProducts: [
      "Power Flanges (ASTM A182 F91)",
      "Pipes & Tubes (ASTM A335 P91)",
      "Butt Weld Fittings (ASTM A234 WP91)"
    ]
  },

  // ==========================================
  // NICKEL ALLOYS & SPECIALTY METALS
  // ==========================================
  {
    id: "inconel-625",
    slug: "inconel-625",
    name: "Inconel 625",
    title: "Nickel-Chromium-Molybdenum Alloy Inconel 625 (UNS N06625 / W.Nr. 2.4856)",
    shortName: "Inconel 625",
    aliases: ["625", "n06625", "2.4856", "inconel625", "alloy-625"],
    category: "Nickel-Base Superalloy",
    uns: "UNS N06625",
    dinEnWnr: "2.4856 / NiCr22Mo9Nb",
    primaryStandards: "ASTM B446, ASTM B444, ASTM B564, ASTM B443, ASME SB564",
    overview:
      "Inconel 625 (UNS N06625) is a high-performance nickel-chromium-molybdenum alloy solid-solution strengthened by niobium. It provides remarkable corrosion resistance in both severely oxidizing and reducing environments, combined with high tensile, creep, and rupture strength from cryogenic temperatures up to 982°C.",
    contextualDescription: (productName) =>
      `In ${productName || "subsea, aerospace, and chemical flow components"}, Inconel 625 delivers virtually zero pitting or crevice corrosion in stagnant seawater, along with immunity to chloride stress corrosion cracking.`,
    chemicalComposition: [
      { element: "Nickel (Ni)", min: "58.0", max: "Balance" },
      { element: "Chromium (Cr)", min: "20.0", max: "23.0" },
      { element: "Molybdenum (Mo)", min: "8.0", max: "10.0" },
      { element: "Niobium (Nb+Ta)", min: "3.15", max: "4.15" },
      { element: "Iron (Fe)", min: "—", max: "5.0" },
      { element: "Carbon (C)", min: "—", max: "0.10" }
    ],
    mechanicalProperties: [
      { property: "Tensile Strength (min)", value: "827 MPa (120 ksi)" },
      { property: "Yield Strength (0.2% Offset, min)", value: "414 MPa (60 ksi)" },
      { property: "Elongation (min)", value: "30 %" },
      { property: "Hardness (max)", value: "25 HRC / 250 HBW" }
    ],
    physicalProperties: [
      { property: "Density", value: "8.44 g/cm³" },
      { property: "Melting Range", value: "1290 - 1350°C" }
    ],
    equivalentGrades: [
      { standard: "USA (UNS)", grade: "UNS N06625" },
      { standard: "ASTM Forgings / Flanges", grade: "ASTM B564" },
      { standard: "ASTM Pipe", grade: "ASTM B444" },
      { standard: "European", grade: "2.4856" }
    ],
    keyFeatures: [
      "Outstanding resistance to pitting, crevice corrosion, and intergranular attack",
      "Virtually immune to chloride-induced stress corrosion cracking",
      "High fatigue and thermal-fatigue strength up to 982°C (1800°F)",
      "Excellent weldability with matching filler metals without post-weld cracking"
    ],
    applications: [
      "Subsea equipment, oceanographic instruments, and marine hardware",
      "Aerospace ducting, exhaust systems, and thrust reversers",
      "Chemical processing scrubbers, distillation columns, and flare stacks"
    ],
    compatibleProducts: [
      "Forged Flanges (ASTM B564 N06625)",
      "Seamless Pipes & Tubes (ASTM B444)",
      "Butt Weld & Forged Fittings",
      "Fasteners (Alloy 625)"
    ]
  },
  {
    id: "monel-400",
    slug: "monel-400",
    name: "Monel 400",
    title: "Nickel-Copper Alloy Monel 400 (UNS N04400 / W.Nr. 2.4360)",
    shortName: "Monel 400",
    aliases: ["400", "n04400", "2.4360", "monel400", "alloy-400"],
    category: "Nickel-Copper Alloy",
    uns: "UNS N04400",
    dinEnWnr: "2.4360 / NiCu30Fe",
    primaryStandards: "ASTM B164, ASTM B165, ASTM B564, ASTM B127, ASME SB564",
    overview:
      "Monel 400 (UNS N04400) is a ductile solid-solution nickel-copper alloy that resists rapidly flowing seawater, hydrofluoric acid, sulfuric acid, and alkaline solutions. It remains tough and ductile from sub-zero cryogenic levels up to 550°C.",
    contextualDescription: (productName) =>
      `In ${productName || "marine and chemical piping systems"}, Monel 400 delivers unparalleled resistance to cavitation damage, seawater biofouling, and stress cracking in hydrofluoric acid alkylation units.`,
    chemicalComposition: [
      { element: "Nickel (Ni)", min: "63.0", max: "Balance" },
      { element: "Copper (Cu)", min: "28.0", max: "34.0" },
      { element: "Iron (Fe)", min: "—", max: "2.5" },
      { element: "Manganese (Mn)", min: "—", max: "2.0" },
      { element: "Carbon (C)", min: "—", max: "0.30" }
    ],
    mechanicalProperties: [
      { property: "Tensile Strength (min)", value: "480 - 620 MPa (70 - 90 ksi)" },
      { property: "Yield Strength (min)", value: "195 - 345 MPa (28 - 50 ksi)" },
      { property: "Elongation (min)", value: "35 %" },
      { property: "Hardness (max)", value: "65 - 80 HRB" }
    ],
    physicalProperties: [
      { property: "Density", value: "8.80 g/cm³" },
      { property: "Thermal Conductivity", value: "21.8 W/m·K" }
    ],
    equivalentGrades: [
      { standard: "USA (UNS)", grade: "UNS N04400" },
      { standard: "ASTM Forgings / Flanges", grade: "ASTM B564" },
      { standard: "ASTM Pipe", grade: "ASTM B165" },
      { standard: "European", grade: "2.4360" }
    ],
    keyFeatures: [
      "Immune to chloride stress corrosion cracking in marine atmospheres",
      "Exceptional resistance to hydrofluoric (HF) acid and caustic alkalis",
      "Retains high toughness and impact strength at sub-zero cryogenic temperatures"
    ],
    applications: [
      "Marine propeller shafts, pump impellers, and seawater valves",
      "Refinery hydrofluoric acid alkylation units",
      "Desalination plant heat exchanger tubes and salt production evaporators"
    ],
    compatibleProducts: [
      "Forged Flanges (ASTM B564 N04400)",
      "Seamless Pipes (ASTM B165)",
      "Butt Weld Fittings",
      "Sheets & Plates (ASTM B127)"
    ]
  },
  {
    id: "hastelloy-c276",
    slug: "hastelloy-c276",
    name: "Hastelloy C276",
    title: "Nickel-Molybdenum-Chromium Alloy Hastelloy C276 (UNS N10276 / W.Nr. 2.4819)",
    shortName: "Hastelloy C276",
    aliases: ["c276", "n10276", "2.4819", "hastelloy-c276", "alloy-c276"],
    category: "Nickel-Molybdenum-Chromium Superalloy",
    uns: "UNS N10276",
    dinEnWnr: "2.4819 / NiMo16Cr15W",
    primaryStandards: "ASTM B574, ASTM B575, ASTM B622, ASTM B564, ASME SB564",
    overview:
      "Hastelloy C276 (UNS N10276) is widely regarded as the most universally corrosion-resistant nickel-chromium-molybdenum alloy available. Its tungsten addition and exceptionally low carbon and silicon levels prevent grain-boundary precipitation during welding, ensuring prime corrosion resistance in wet chlorine gas, hypochlorite, and ferric chloride solutions.",
    contextualDescription: (productName) =>
      `When chosen for ${productName || "aggressive chemical process equipment"}, Hastelloy C276 survives in severely oxidizing and reducing mixtures where stainless steels and exotic alloys rapidly corrode.`,
    chemicalComposition: [
      { element: "Nickel (Ni)", min: "50.0", max: "Balance" },
      { element: "Molybdenum (Mo)", min: "15.0", max: "17.0" },
      { element: "Chromium (Cr)", min: "14.5", max: "16.5" },
      { element: "Iron (Fe)", min: "4.0", max: "7.0" },
      { element: "Tungsten (W)", min: "3.0", max: "4.5" },
      { element: "Cobalt (Co)", min: "—", max: "2.5" },
      { element: "Carbon (C)", min: "—", max: "0.010" }
    ],
    mechanicalProperties: [
      { property: "Tensile Strength (min)", value: "690 MPa (100 ksi)" },
      { property: "Yield Strength (0.2% Offset, min)", value: "283 MPa (41 ksi)" },
      { property: "Elongation (min)", value: "40 %" },
      { property: "Hardness (max)", value: "100 HRB" }
    ],
    physicalProperties: [
      { property: "Density", value: "8.89 g/cm³" },
      { property: "Thermal Conductivity", value: "10.2 W/m·K" }
    ],
    equivalentGrades: [
      { standard: "USA (UNS)", grade: "UNS N10276" },
      { standard: "ASTM", grade: "ASTM B564 / B622 / B575" },
      { standard: "European", grade: "2.4819" }
    ],
    keyFeatures: [
      "Outstanding resistance to localized pitting, crevice attack, and stress corrosion cracking",
      "One of the few materials that withstands wet chlorine gas, hypochlorite, and chlorine dioxide",
      "Low carbon prevents HAZ precipitation, allowing as-welded installation"
    ],
    applications: [
      "Flue gas desulfurization (FGD) scrubbers and ducting",
      "Pharmaceutical reaction vessels and pesticide manufacturing plants",
      "Waste incineration incinerator liners and sour gas well production"
    ],
    compatibleProducts: [
      "Forged Flanges (ASTM B564 N10276)",
      "Seamless Pipes (ASTM B622)",
      "Butt Weld Fittings",
      "Fasteners (Alloy C276)"
    ]
  },
  {
    id: "titanium-gr2",
    slug: "titanium-grade-2",
    name: "Titanium Grade 2",
    title: "Commercially Pure Titanium Grade 2 (UNS R50400 / W.Nr. 3.7035)",
    shortName: "Titanium Gr. 2",
    aliases: ["ti-gr2", "grade-2", "r50400", "3.7035", "titanium-gr2"],
    category: "Commercially Pure Titanium",
    uns: "UNS R50400",
    dinEnWnr: "3.7035",
    primaryStandards: "ASTM B348, ASTM B381, ASTM B861, ASTM B862, ASTM B265, ASME SB381",
    overview:
      "Titanium Grade 2 (UNS R50400) is the most widely utilized commercially pure (CP) titanium grade. It possesses a premier balance of moderate mechanical strength, high ductility, excellent cold formability, and superior oxidation resistance due to its tenacious, self-healing titanium dioxide (TiO2) passive film.",
    contextualDescription: (productName) =>
      `In ${productName || "marine heat exchangers and chemical piping"}, Titanium Grade 2 eliminates seawater pitting, crevice corrosion, and erosion while offering high strength-to-weight savings (45% lighter than steel).`,
    chemicalComposition: [
      { element: "Titanium (Ti)", min: "99.2", max: "Balance" },
      { element: "Iron (Fe)", min: "—", max: "0.30" },
      { element: "Oxygen (O)", min: "—", max: "0.25" },
      { element: "Carbon (C)", min: "—", max: "0.08" },
      { element: "Nitrogen (N)", min: "—", max: "0.03" },
      { element: "Hydrogen (H)", min: "—", max: "0.015" }
    ],
    mechanicalProperties: [
      { property: "Tensile Strength (min)", value: "345 MPa (50 ksi)" },
      { property: "Yield Strength (0.2% Offset, min)", value: "275 - 450 MPa (40 - 65 ksi)" },
      { property: "Elongation (min)", value: "20 %" },
      { property: "Hardness (max)", value: "80 HRB" }
    ],
    physicalProperties: [
      { property: "Density", value: "4.51 g/cm³ (45% lighter than steel)" },
      { property: "Modulus of Elasticity", value: "105 GPa" },
      { property: "Thermal Conductivity", value: "21.6 W/m·K" }
    ],
    equivalentGrades: [
      { standard: "USA (UNS)", grade: "UNS R50400" },
      { standard: "ASTM Forgings / Flanges", grade: "ASTM B381 Grade F-2" },
      { standard: "ASTM Pipe", grade: "ASTM B861 Grade 2" },
      { standard: "European", grade: "3.7035" }
    ],
    keyFeatures: [
      "Extremely light weight with high strength-to-weight ratio",
      "Complete immunity to ambient seawater corrosion and biofouling",
      "Superior resistance to wet chlorine, nitric acid, and organic acids",
      "Non-magnetic and biocompatible"
    ],
    applications: [
      "Seawater desalination plants and power plant condensers",
      "Chemical chlor-alkali production and bleach processing",
      "Offshore oil platform cooling circuits and ballast water piping",
      "Marine hardware and chemical processing pumps"
    ],
    compatibleProducts: [
      "Titanium Flanges (ASTM B381 Gr. F-2)",
      "Pipes & Tubes (ASTM B861 / B338)",
      "Titanium Butt Weld Fittings",
      "Fasteners & Tube Fittings"
    ]
  }
];

// Helper: Normalize grade search key
function normalizeGradeKey(str) {
  return (str || "")
    .trim()
    .toLowerCase()
    .replace(/^astm\s+[a-z0-9]+\s+/i, "")
    .replace(/^uns\s+/i, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/**
 * Finds matching grade definition from any text label
 * Handles strings like "ASTM A182 F316L", "Duplex 2205", "LDX 2101", "304", "TP316", etc.
 */
export function findGradeDefinition(rawGradeText) {
  if (!rawGradeText) return null;
  const rawClean = rawGradeText.trim().toLowerCase();
  const normKey = normalizeGradeKey(rawGradeText);

  // 1. Direct match on id or slug
  let match = gradesDatabase.find(
    (g) => g.id === normKey || g.slug === normKey || g.shortName.toLowerCase() === rawClean
  );
  if (match) return match;

  // 2. Match in aliases
  match = gradesDatabase.find((g) =>
    g.aliases && g.aliases.some((al) => rawClean.includes(al) || normKey.includes(al))
  );
  if (match) return match;

  // 3. Substring matching
  match = gradesDatabase.find((g) => {
    const sName = g.shortName.toLowerCase();
    const gName = g.name.toLowerCase();
    return rawClean.includes(sName) || rawClean.includes(gName);
  });
  if (match) return match;

  // 4. Fallback fallback default for generic category matching
  if (rawClean.includes("duplex") && !rawClean.includes("super")) {
    return gradesDatabase.find((g) => g.id === "duplex-2205");
  }
  if (rawClean.includes("super duplex") || rawClean.includes("2507")) {
    return gradesDatabase.find((g) => g.id === "super-duplex-2507");
  }
  if (rawClean.includes("316")) {
    return gradesDatabase.find((g) => g.id === "ss-316l");
  }
  if (rawClean.includes("304")) {
    return gradesDatabase.find((g) => g.id === "ss-304l");
  }
  if (rawClean.includes("carbon") || rawClean.includes("a105")) {
    return gradesDatabase.find((g) => g.id === "astm-a105");
  }
  if (rawClean.includes("p11") || rawClean.includes("f11")) {
    return gradesDatabase.find((g) => g.id === "astm-a182-f11");
  }
  if (rawClean.includes("p22") || rawClean.includes("f22")) {
    return gradesDatabase.find((g) => g.id === "astm-a182-f22");
  }
  if (rawClean.includes("inconel") || rawClean.includes("625")) {
    return gradesDatabase.find((g) => g.id === "inconel-625");
  }
  if (rawClean.includes("monel") || rawClean.includes("400")) {
    return gradesDatabase.find((g) => g.id === "monel-400");
  }
  if (rawClean.includes("hastelloy") || rawClean.includes("c276")) {
    return gradesDatabase.find((g) => g.id === "hastelloy-c276");
  }
  if (rawClean.includes("titanium")) {
    return gradesDatabase.find((g) => g.id === "titanium-gr2");
  }

  return gradesDatabase[0]; // Safe default fallback
}

/**
 * Builds an SEO URL for a grade in a product context
 * E.g., "/grades/ldx-2101-duplex-steel-butterfly-fittings"
 * E.g., "/grades/duplex-2205-butterfly-fittings"
 */
export function getGradeUrl(rawGradeText, product, variant) {
  const gradeDef = findGradeDefinition(rawGradeText);
  const gradeSlug = gradeDef ? gradeDef.slug : normalizeGradeKey(rawGradeText);

  // Build product context portion
  let contextSlug = "";
  if (variant && variant.slug) {
    contextSlug = variant.slug
      .replace(/-manufacture-in-india$/, "")
      .replace(/butt-weld/g, "butterfly"); // matches user example "butterfly-fittings"
  } else if (product && product.slug) {
    contextSlug = product.slug.replace(/-manufacture-in-india$/, "");
  }

  if (contextSlug) {
    return `/grades/${gradeSlug}-${contextSlug}`;
  }
  return `/grades/${gradeSlug}`;
}

/**
 * Resolves a full grade page URL slug like "ldx-2101-duplex-steel-butterfly-fittings"
 * into { grade, productContextName, parentProduct }
 */
export function resolveGradeSlug(slug) {
  if (!slug) return null;
  const clean = slug.trim().toLowerCase().replace(/\/$/, "");

  // Find which grade definition matches the prefix of this slug
  let matchedGrade = null;
  let contextPortion = "";

  // Sort grades by slug length descending to match longer IDs first (e.g. super-duplex-2507 before 2507)
  const sorted = [...gradesDatabase].sort((a, b) => b.slug.length - a.slug.length);

  for (const g of sorted) {
    if (clean === g.slug) {
      matchedGrade = g;
      contextPortion = "";
      break;
    }
    if (clean.startsWith(`${g.slug}-`)) {
      matchedGrade = g;
      contextPortion = clean.slice(g.slug.length + 1);
      break;
    }
    // Also check aliases
    if (g.aliases) {
      for (const al of g.aliases) {
        if (clean === al) {
          matchedGrade = g;
          contextPortion = "";
          break;
        }
        if (clean.startsWith(`${al}-`)) {
          matchedGrade = g;
          contextPortion = clean.slice(al.length + 1);
          break;
        }
      }
    }
    if (matchedGrade) break;
  }

  if (!matchedGrade) {
    matchedGrade = findGradeDefinition(clean);
  }

  // Format context name
  let productContextName = "";
  if (contextPortion) {
    productContextName = contextPortion
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
  }

  return {
    grade: matchedGrade,
    contextPortion,
    productContextName: productContextName || "Industrial Piping & Flow Components"
  };
}

/**
 * Parses a compound grade line into label and clickable grade tokens
 */
export function parseGradeLineToTokens(gradeLine, product) {
  if (!gradeLine) return { label: "", tokens: [] };

  const colonIdx = gradeLine.indexOf(":");
  let label = "";
  let listPart = gradeLine;

  if (colonIdx !== -1) {
    label = gradeLine.slice(0, colonIdx).trim();
    listPart = gradeLine.slice(colonIdx + 1).trim();
  }

  const rawItems = listPart.split(",").map((s) => s.trim()).filter(Boolean);
  const tokens = rawItems.map((item) => ({
    text: item,
    url: getGradeUrl(item, product)
  }));

  return { label, tokens };
}
