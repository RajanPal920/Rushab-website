// src/data/subcategoriesData.js
// Verified Industrial Product Subcategories for Rishabh Metal Industries
// Compliant with ASME, ASTM, MSS SP, DIN, and ISO Standards

export const buttweldSubcategories = [
  {
    id: 101,
    slug: "45-degree-elbow",
    title: "45° Elbow",
    subcategory: "45° Elbow",
    category: "Buttweld Fittings",
    parentSlug: "butt-weld-fittings",
    image: "/images/products/subcategories/45-degree-elbow.jpg",
    shortDescription:
      "ASME B16.9 / MSS SP-75 Long & Short Radius 45° Buttweld Elbows for directional piping angle transitions.",
    materialGroup: "Buttweld Fittings",
    standards: "ASME B16.9, ASME B16.28, MSS SP-43, MSS SP-75, DIN 2605, EN 10253",
    overview:
      "45° Buttweld Elbows are manufactured to change the direction of flow in industrial piping systems by 45 degrees. Precision engineered to ASME B16.9 and MSS SP-75 specifications with compound or plain beveled ends conforming to ASME B16.25, these elbows provide smooth hydrodynamic internal contours that minimize pressure loss, cavitation, and turbulence compared to sharp directional changes. Available in Long Radius (R = 1.5D) and Short Radius configurations across seamless and submerged arc welded executions.",
    grades: [
      "SS 304/304L",
      "SS 316/316L",
      "SS 321",
      "SS 347",
      "SS 904L",
      "ASTM A234 WPB",
      "ASTM A420 WPL6",
      "Duplex 2205",
      "Super Duplex 2507",
      "ASTM A234 WP11",
      "ASTM A234 WP22",
      "ASTM A234 WP91",
      "Inconel 625",
      "Monel 400",
      "Hastelloy C276"
    ],
    availableSizes: "1/2\" NB to 48\" NB (DN15 to DN1200) — Seamless up to 24\" NB, Welded up to 48\" NB",
    wallThickness: "Schedule 5S, 10S, 20, 30, STD, 40S, 60, XS, 80S, 100, 120, 140, 160, XXS (Up to 60mm WT)",
    manufacturingType: "Seamless Mandrel Forming / Hydraulic Press Cold Formed / Hot Formed Welded with 100% RT",
    connectionType: "Butt Weld (Beveled Ends per ASME B16.25)",
    surfaceFinish: "Mill Pickled & Passivated, Sand Blasted, Shot Blasted, Mirror Polished",
    endConnection: "Plain Beveled Ends (PBE), Root Face 1.6 mm ± 0.8 mm",
    technicalSpecs: {
      nominalSize: '1/2" NB to 48" NB (DN15 to DN1200)',
      scheduleWallThickness: "SCH 5S to SCH XXS / Heavy Wall up to 60 mm",
      designStandards: "ASME B16.9, MSS SP-75, DIN 2605, EN 10253-2",
      radiusType: "Long Radius (R = 1.5D) & Short Radius (R = 1.0D)",
      materialGrades: "SS 304L/316L, Carbon Steel A234 WPB, Duplex 2205, Alloy Steel WP11/WP22",
      bevelEndPrep: "Beveled Ends per ASME B16.25 (37.5° ± 2.5°)",
      qualityCertifications: "EN 10204 3.1 MTC, 100% Radiography, Hydrostatic, Ultrasonic, PMI"
    },
    standardsCompliance: [
      "ASME B16.9 — Factory-Made Wrought Buttwelding Fittings",
      "MSS SP-75 — High-Strength Wrought Butt-Welding Fittings for Pipelines",
      "ASTM A403 / A403M — Wrought Austenitic Stainless Steel Piping Fittings",
      "ASTM A234 / A234M — Piping Fittings of Wrought Carbon and Alloy Steel",
      "NACE MR0175 / ISO 15156 — Sour Gas Sulfide Stress Cracking Resistant"
    ],
    industryApplications: [
      "High-pressure oil and gas transmission cross-country trunklines",
      "Offshore drilling platforms, topsides, and subsea manifold systems",
      "Petrochemical cracking plants and chemical refinery units",
      "Power generation main steam loops and boiler feedwater pipelines",
      "Desalination facilities, brine evaporators, and marine cooling circuits"
    ]
  },
  {
    id: 102,
    slug: "90-degree-elbow",
    title: "90° Elbow",
    subcategory: "90° Elbow",
    category: "Buttweld Fittings",
    parentSlug: "butt-weld-fittings",
    image: "/images/products/subcategories/90-degree-elbow.jpg",
    shortDescription:
      "ASME B16.9 Long Radius, Short Radius, 3D and 5D 90° Buttweld Elbows engineered for maximum pressure containment.",
    materialGroup: "Buttweld Fittings",
    standards: "ASME B16.9, ASME B16.28, MSS SP-43, MSS SP-75, DIN 2605",
    overview:
      "90° Buttweld Elbows are the most widely specified pipe fittings in modern fluid handling, redirecting piping trajectories by a full right angle (90 degrees). Offered in standard Long Radius (R = 1.5D) for reduced frictional loss and Short Radius (R = 1.0D) for compact skid systems, as well as custom 3D and 5D induction bends. Every elbow is manufactured with uniform wall thickness through precision hot-mandrel extrusion or hydraulic pressing, followed by full heat treatment to relieve residual forming stresses.",
    grades: [
      "SS 304/304L",
      "SS 316/316L",
      "SS 321",
      "SS 310S",
      "SS 904L",
      "ASTM A234 WPB",
      "ASTM A420 WPL6",
      "Duplex 2205",
      "Super Duplex 2507",
      "ASTM A234 WP11",
      "ASTM A234 WP22",
      "ASTM A234 WP91",
      "Inconel 625",
      "Monel 400"
    ],
    availableSizes: "1/2\" NB to 48\" NB (Seamless up to 24\" NB, ERW/EFW Welded up to 48\" NB)",
    wallThickness: "SCH 5S, 10S, 20, 30, STD, 40S, 60, XS, 80S, 100, 120, 140, 160, XXS",
    manufacturingType: "Seamless Hot Mandrel Extrusion / Hydraulic Cold Press / Longitudinal Welded",
    connectionType: "Butt Weld (Beveled Ends per ASME B16.25)",
    surfaceFinish: "Pickled & Passivated, Sandblasted, Anti-Rust Oil Coated, Mirror Polished",
    endConnection: "Plain Beveled Ends (PBE)",
    technicalSpecs: {
      nominalSize: '1/2" NB to 48" NB',
      centerToFace: "Long Radius (1.5 x NPS) / Short Radius (1.0 x NPS)",
      designStandards: "ASME B16.9, MSS SP-75, DIN 2605-1/2, EN 10253",
      materialGrades: "Stainless Steel, Carbon Steel, Alloy Steel, Duplex, Super Duplex, Nickel Alloys",
      testingMethods: "100% X-Ray (Welded Seams), Ultrasonic Testing, Hydrostatic Test, Dye Penetrant"
    },
    standardsCompliance: [
      "ASME B16.9 — Factory-Made Wrought Buttwelding Fittings",
      "ASTM A403 / A815 / A234 / A420 Standard Material Specifications",
      "ASME B31.1 / B31.3 — Power & Process Piping Code Verification"
    ],
    industryApplications: [
      "Refinery distillation towers, furnace headers, and reactor tie-ins",
      "Offshore oil & gas production platforms and FPSO processing units",
      "Cryogenic liquid gas (LNG/LPG) storage and regasification terminals",
      "High-pressure hydraulic and steam distribution networks"
    ]
  },
  {
    id: 103,
    slug: "180-degree-return-bend",
    title: "180° Return Bend",
    subcategory: "180° Return Bend",
    category: "Buttweld Fittings",
    parentSlug: "butt-weld-fittings",
    image: "/images/products/subcategories/180-degree-return-bend.jpg",
    shortDescription:
      "ASME B16.9 Long & Short Radius 180° U-Bends for heat exchangers, furnace tube bundles, and compact return loops.",
    materialGroup: "Buttweld Fittings",
    standards: "ASME B16.9, ASME B16.28, DIN 2605, TEMA Standards",
    overview:
      "180° Buttweld Return Bends (U-Bends) reverse the direction of fluid flow by 180 degrees within a single seamless or welded fitting. Specifically designed for heat exchanger tube bundles, economizers, fired heaters, cooling loops, and thermal processing coils, these return bends eliminate the need for two individual 90° elbows and an intermediate weld spool, thereby saving installation space and eliminating leak paths.",
    grades: [
      "SS 304/304L",
      "SS 316/316L",
      "SS 321",
      "SS 310S",
      "ASTM A234 WPB",
      "Duplex 2205",
      "Inconel 625",
      "Monel 400"
    ],
    availableSizes: "1/2\" NB to 24\" NB",
    wallThickness: "SCH 10S, 40S, 80S, 160, XXS",
    manufacturingType: "Seamless Hot Induction Bending / Cold Formed Annealed",
    connectionType: "Butt Weld (Beveled Ends)",
    surfaceFinish: "Bright Annealed, Acid Pickled, Bead Blasted",
    endConnection: "Beveled Ends per ASME B16.25",
    technicalSpecs: {
      nominalSize: '1/2" NB to 24" NB',
      centerToCenter: "Per ASME B16.9 Table / TEMA Class R, B, C Tolerances",
      designStandards: "ASME B16.9, ASME B16.28, DIN 2605",
      wallThinningRate: "< 12% on Outer Extrados Curve"
    },
    standardsCompliance: [
      "ASME B16.9 — Factory-Made Wrought Buttwelding Fittings",
      "TEMA — Tubular Exchanger Manufacturers Association Standards",
      "ASTM A403 / ASTM A234 Specifications"
    ],
    industryApplications: [
      "Shell and tube heat exchanger bundles and hairpin exchangers",
      "Reboilers, evaporators, and thermal cracking furnace coils",
      "Refrigeration chillers and cryogenic cooling matrices"
    ]
  },
  {
    id: 104,
    slug: "equal-tee",
    title: "Equal Tee",
    subcategory: "Equal Tee",
    category: "Buttweld Fittings",
    parentSlug: "butt-weld-fittings",
    image: "/images/products/subcategories/equal-tee.jpg",
    shortDescription:
      "ASME B16.9 Straight / Equal Tees with three identical branch ports for 90-degree fluid distribution.",
    materialGroup: "Buttweld Fittings",
    standards: "ASME B16.9, MSS SP-75, DIN 2615-1, EN 10253",
    overview:
      "Equal Tees (also known as Straight Tees) feature three connecting openings of identical nominal pipe diameter arranged in a 90° T-junction. Hydroformed from seamless or welded pipe stock, equal tees divide or combine fluid streams without restricting the cross-sectional flow area. The forged crotch reinforcement is engineered to handle peak bending moments and fluid pressure shocks.",
    grades: [
      "SS 304/304L",
      "SS 316/316L",
      "SS 321",
      "SS 904L",
      "ASTM A234 WPB",
      "A420 WPL6",
      "Duplex 2205",
      "Super Duplex 2507",
      "WP11",
      "WP22",
      "WP91"
    ],
    availableSizes: "1/2\" NB to 48\" NB",
    wallThickness: "SCH 5S to SCH XXS",
    manufacturingType: "Cold Hydraulic Bulge Forming / Hot Extrusion / Fabricated Welded",
    connectionType: "Butt Weld (Beveled Ends)",
    surfaceFinish: "Pickled & Passivated, Sand Blasted, Coated",
    endConnection: "Plain Beveled Ends (PBE)",
    technicalSpecs: {
      nominalSize: '1/2" NB to 48" NB',
      branchAngle: "90 Degrees",
      designStandards: "ASME B16.9, MSS SP-75, DIN 2615-1",
      reinforcement: "Full Crotch Wall Thickness Compliance per ASME B31.3"
    },
    standardsCompliance: [
      "ASME B16.9 — Factory-Made Wrought Buttwelding Fittings",
      "MSS SP-75 — High-Test Wrought Butt-Welding Fittings"
    ],
    industryApplications: [
      "Main pipeline distribution manifolds and header tie-ins",
      "Firewater ring mains and municipal water distribution",
      "Refinery processing units and petrochemical crackers"
    ]
  },
  {
    id: 105,
    slug: "reducing-tee",
    title: "Reducing Tee",
    subcategory: "Reducing Tee",
    category: "Buttweld Fittings",
    parentSlug: "butt-weld-fittings",
    image: "/images/products/subcategories/reducing-tee.jpg",
    shortDescription:
      "ASME B16.9 Buttweld Reducing Tees featuring a reduced 90° branch diameter for piping line take-offs.",
    materialGroup: "Buttweld Fittings",
    standards: "ASME B16.9, MSS SP-75, DIN 2615-2",
    overview:
      "Reducing Tees combine a straight continuous run of pipe with a reduced 90° branch outlet. By integrating branch line size reduction directly into the tee body, engineers eliminate the need for a separate concentric reducer and additional welding joint. Suitable for bypass lines, instrument take-offs, and secondary manifold branches.",
    grades: [
      "SS 304/304L",
      "SS 316/316L",
      "SS 321",
      "ASTM A234 WPB",
      "Duplex 2205",
      "Super Duplex 2507",
      "Alloy Steel WP11/WP22"
    ],
    availableSizes: "Run: 1\" to 48\" NB with Branch sizes down to 1/2\" NB",
    wallThickness: "SCH 10 to SCH XXS",
    manufacturingType: "Hydraulic Bulge Extrusion / Hot Drawn / Fabricated",
    connectionType: "Butt Weld",
    surfaceFinish: "Shot Blasted, Pickled & Passivated",
    endConnection: "Beveled Ends per ASME B16.25",
    technicalSpecs: {
      runSizes: '1" NB to 48" NB',
      branchSizes: '1/2" NB to 36" NB',
      designStandards: "ASME B16.9, MSS SP-75, DIN 2615-2"
    },
    standardsCompliance: [
      "ASME B16.9, MSS SP-75, ASTM A234, ASTM A403"
    ],
    industryApplications: [
      "Compressor station bypass lines and relief valve headers",
      "Process plant sampling points and drainage systems",
      "Subsea production manifold branches"
    ]
  },
  {
    id: 106,
    slug: "concentric-reducer",
    title: "Concentric Reducer",
    subcategory: "Concentric Reducer",
    category: "Buttweld Fittings",
    parentSlug: "butt-weld-fittings",
    image: "/images/products/subcategories/concentric-reducer.jpg",
    shortDescription:
      "ASME B16.9 Symmetrical Conical Concentric Reducers for smooth inline pipe size transitions.",
    materialGroup: "Buttweld Fittings",
    standards: "ASME B16.9, MSS SP-75, DIN 2616-2, EN 10253",
    overview:
      "Concentric Reducers join two pipes of different nominal diameters along a common centerline. The symmetrical cone profile ensures uniform fluid acceleration or deceleration, minimizing erosion and flow turbulence. Ideal for vertical piping runs, pump discharge lines, and gas headers.",
    grades: [
      "SS 304/304L",
      "SS 316/316L",
      "SS 321",
      "SS 904L",
      "ASTM A234 WPB",
      "A420 WPL6",
      "Duplex 2205",
      "Super Duplex 2507",
      "Inconel 625",
      "Hastelloy C276"
    ],
    availableSizes: "3/4\" x 1/2\" NB up to 48\" x 40\" NB",
    wallThickness: "SCH 5S to SCH XXS",
    manufacturingType: "Seamless Die Formed / Welded Cone",
    connectionType: "Butt Weld (Beveled Ends)",
    surfaceFinish: "Mill Pickled, Sand Blasted",
    endConnection: "Plain Beveled Ends (PBE)",
    technicalSpecs: {
      sizeRange: '3/4" x 1/2" NB to 48" x 40" NB',
      centerlineAlignment: "True Coaxial Concentric (0° Offset)",
      designStandards: "ASME B16.9, MSS SP-75, DIN 2616-2"
    },
    standardsCompliance: [
      "ASME B16.9, MSS SP-75, ASTM A403, ASTM A234"
    ],
    industryApplications: [
      "Vertical process piping headers and furnace downcomers",
      "Pump discharge diameter expansion lines",
      "Steam turbine intake velocity adjustment lines"
    ]
  },
  {
    id: 107,
    slug: "eccentric-reducer",
    title: "Eccentric Reducer",
    subcategory: "Eccentric Reducer",
    category: "Buttweld Fittings",
    parentSlug: "butt-weld-fittings",
    image: "/images/products/subcategories/eccentric-reducer.jpg",
    shortDescription:
      "ASME B16.9 Offset Centerline Eccentric Reducers designed to prevent vapor cavitation in pump suction lines.",
    materialGroup: "Buttweld Fittings",
    standards: "ASME B16.9, MSS SP-75, DIN 2616-1",
    overview:
      "Eccentric Reducers feature an offset centerline, creating one flat side and one sloping conical side. Essential in horizontal pump suction piping when installed flat-on-top (FOT) to prevent air/vapor pocket formation that causes pump cavitation, or flat-on-bottom (FOB) on pipe racks to maintain pipe elevation support.",
    grades: [
      "SS 304/304L",
      "SS 316/316L",
      "ASTM A234 WPB",
      "A420 WPL6",
      "Duplex 2205",
      "Super Duplex 2507",
      "Alloy Steel WP11/WP22"
    ],
    availableSizes: "3/4\" x 1/2\" NB up to 48\" x 40\" NB",
    wallThickness: "SCH 10S to SCH XXS",
    manufacturingType: "Seamless Press Formed / Welded Heavy Plate",
    connectionType: "Butt Weld",
    surfaceFinish: "Pickled, Passivated, Anti-Corrosion Treated",
    endConnection: "Beveled Ends per ASME B16.25",
    technicalSpecs: {
      sizeRange: '3/4" x 1/2" to 48" x 40" NB',
      orientation: "Flat-On-Top (FOT) / Flat-On-Bottom (FOB)",
      designStandards: "ASME B16.9, MSS SP-75, DIN 2616-1"
    },
    standardsCompliance: [
      "ASME B16.9, MSS SP-75, API 5L, ASTM A403"
    ],
    industryApplications: [
      "Centrifugal pump horizontal suction nozzles (preventing cavitation)",
      "Pipe rack utility lines requiring flush bottom support",
      "Slurry and viscous chemical transport lines"
    ]
  },
  {
    id: 108,
    slug: "end-cap",
    title: "End Cap",
    subcategory: "End Cap",
    category: "Buttweld Fittings",
    parentSlug: "butt-weld-fittings",
    image: "/images/products/subcategories/end-cap.jpg",
    shortDescription:
      "ASME B16.9 Ellipsoidal / Dished Buttweld Pipe End Caps for permanent piping line closure.",
    materialGroup: "Buttweld Fittings",
    standards: "ASME B16.9, DIN 2617, EN 10253",
    overview:
      "End Caps (Pipe Caps) are dished, ellipsoidal closures butt-welded to the terminal end of a piping run. Designed per ASME Boiler and Pressure Vessel Code ellipsoidal head formulations, they resist full system hydrostatic test pressures while maintaining a clean, aerodynamic termination.",
    grades: [
      "SS 304/304L",
      "SS 316/316L",
      "SS 321",
      "ASTM A234 WPB",
      "A420 WPL6",
      "Duplex 2205",
      "Super Duplex 2507"
    ],
    availableSizes: "1/2\" NB to 48\" NB",
    wallThickness: "SCH 10 to SCH XXS",
    manufacturingType: "Deep Drawn Plate / Forged & Machined",
    connectionType: "Butt Weld",
    surfaceFinish: "Smooth Machined, Pickled, Coated",
    endConnection: "Beveled End per ASME B16.25",
    technicalSpecs: {
      sizeRange: '1/2" NB to 48" NB',
      headGeometry: "2:1 Semi-Ellipsoidal / Torispherical Dished",
      designStandards: "ASME B16.9, DIN 2617, ASME BPVC Sec VIII"
    },
    standardsCompliance: [
      "ASME B16.9, ASTM A403, ASTM A234, ASTM A815"
    ],
    industryApplications: [
      "Pipeline dead-ends, header caps, and future expansion spurs",
      "Pressure vessel cleanout nozzles and inspection caps",
      "Hydrotesting header isolation"
    ]
  },
  {
    id: 109,
    slug: "cross",
    title: "Cross",
    subcategory: "Cross",
    category: "Buttweld Fittings",
    parentSlug: "butt-weld-fittings",
    image: "/images/products/subcategories/cross.jpg",
    shortDescription:
      "ASME B16.9 Equal & Reducing 4-Way Buttweld Cross Fittings for fluid distribution networks.",
    materialGroup: "Buttweld Fittings",
    standards: "ASME B16.9, DIN 2618",
    overview:
      "Cross Fittings (4-way pipe fittings) feature four orthogonal openings at 90° angles to one another. Engineered for multi-directional distribution manifolds, cooling arrays, and chemical injection grids where space constraints prevent the use of multiple tees.",
    grades: [
      "SS 304/304L",
      "SS 316/316L",
      "SS 321",
      "ASTM A234 WPB",
      "Duplex 2205",
      "Inconel 625"
    ],
    availableSizes: "1/2\" NB to 24\" NB",
    wallThickness: "SCH 10 to SCH XXS",
    manufacturingType: "Hydraulic Forged / Welded Fabrication",
    connectionType: "Butt Weld",
    surfaceFinish: "Pickled & Passivated, Sand Blasted",
    endConnection: "Plain Beveled Ends",
    technicalSpecs: {
      sizeRange: '1/2" NB to 24" NB',
      branchCount: "4 Orthogonal Outlets at 90°",
      designStandards: "ASME B16.9, DIN 2618"
    },
    standardsCompliance: [
      "ASME B16.9, ASTM A403, ASTM A234"
    ],
    industryApplications: [
      "Fire sprinkler distribution matrices and water curtain loops",
      "Modular chemical dosing arrays and cooling manifolds",
      "Refinery heat exchanger fluid division lines"
    ]
  },
  {
    id: 110,
    slug: "stub-end",
    title: "Stub End",
    subcategory: "Stub End",
    category: "Buttweld Fittings",
    parentSlug: "butt-weld-fittings",
    image: "/images/products/subcategories/stub-end.jpg",
    shortDescription:
      "MSS SP-43 & ASME B16.9 Type A, B & C Lap Joint Stub Ends for bi-metallic loose flange piping systems.",
    materialGroup: "Buttweld Fittings",
    standards: "MSS SP-43, ASME B16.9, DIN 2642",
    overview:
      "Lap Joint Stub Ends are short pipe segments with an upset flanged lip at one end, designed to be used in tandem with a loose Lap Joint backing flange. This two-piece configuration allows 360° rotational freedom for effortless bolt hole alignment and enables substantial material cost savings by using high-grade stainless/nickel alloy for the wetted stub end and economical carbon steel for the backing flange.",
    grades: [
      "SS 304/304L",
      "SS 316/316L",
      "SS 321",
      "SS 904L",
      "Duplex 2205",
      "Super Duplex 2507",
      "Titanium Gr. 2",
      "Inconel 625",
      "Monel 400",
      "Hastelloy C276"
    ],
    availableSizes: "1/2\" NB to 24\" NB (Short Pattern & Long Pattern)",
    wallThickness: "SCH 5S, 10S, 40S, 80S",
    manufacturingType: "Forged Lap Lip & Seamless Pipe / Machined Solid Billet",
    connectionType: "Butt Weld pipe end with Lap Gasket Face",
    surfaceFinish: "Serrated Gasket Face (125-250 AARH)",
    endConnection: "Beveled Weld End per ASME B16.25",
    technicalSpecs: {
      sizeRange: '1/2" NB to 24" NB',
      patterns: "Short Pattern (MSS SP-43) & Long Pattern (ASME B16.9)",
      lapTypes: "Type A (for ASME Lap Joint Flange), Type B (for Slip-On Flange)",
      gasketFinish: "Phonographic / Concentric Serrated (Ra 3.2 to 6.3 µm)"
    },
    standardsCompliance: [
      "MSS SP-43 — Wrought Stainless Steel Butt-Welding Fittings",
      "ASME B16.9 — Factory-Made Wrought Buttwelding Fittings",
      "ASTM A403 / ASTM B366 Specifications"
    ],
    industryApplications: [
      "Corrosive chemical and pulp & paper bleaching pipelines",
      "Seawater desalination and sanitary food/beverage loops",
      "Exotic alloy piping systems requiring frequent turnaround dismantling"
    ]
  }
];

export const flangesSubcategories = [
  {
    id: 201,
    slug: "weld-neck-flange",
    title: "Weld Neck Flange",
    subcategory: "Weld Neck Flange",
    category: "Flanges",
    parentSlug: "flanges",
    image: "/images/products/subcategories/weld-neck-flange.jpg",
    shortDescription:
      "ASME B16.5 & B16.47 Long Tapered Hub Weld Neck Flanges for critical high-pressure and cyclic thermal duty.",
    materialGroup: "Flanges",
    standards: "ASME B16.5, ASME B16.47 Series A & B, DIN EN 1092-1 Type 11, MSS SP-44, API 6A",
    overview:
      "Weld Neck Flanges feature a reinforced, long tapered hub butt-welded directly to the matching pipe schedule. By transmitting mechanical stresses gradually from the flange base to the pipe wall, weld neck flanges eliminate abrupt stress risers and turbulent flow. Specified globally for severe cyclic, elevated temperature, and extreme pressure services in oil refineries, power plants, and subsea pipelines.",
    grades: [
      "ASTM A105",
      "ASTM A350 LF2",
      "ASTM A182 F304/304L",
      "ASTM A182 F316/316L",
      "ASTM A182 F321",
      "ASTM A182 F51 (2205)",
      "ASTM A182 F53 (2507)",
      "ASTM A182 F11",
      "ASTM A182 F22",
      "Inconel 625",
      "Monel 400"
    ],
    availableSizes: "1/2\" NB to 60\" NB (DN15 to DN1500)",
    wallThickness: "Pressure Ratings: Class 150, 300, 600, 900, 1500, 2500 (PN 10 to PN 420)",
    manufacturingType: "Forged Closed Die / Open Die Hammered / CNC Precision Machined",
    connectionType: "Full Penetration Circumferential Butt Weld",
    surfaceFinish: "Serrated Concentric / Spiral Finish (Ra 3.2 - 6.3 µm)",
    endConnection: "Raised Face (RF), Flat Face (FF), Ring Type Joint (RTJ)",
    technicalSpecs: {
      nominalSize: '1/2" NB to 60" NB',
      pressureClasses: "Class 150# to 2500# / PN 10 to PN 400",
      facingOptions: "RF, FF, RTJ (R, RX, BX grooves)",
      designStandards: "ASME B16.5, ASME B16.47, DIN EN 1092-1 Type 11",
      radiographyAllowance: "100% Radiographic Examination (RT) on Weld Joint"
    },
    standardsCompliance: [
      "ASME B16.5 — Pipe Flanges and Flanged Fittings",
      "ASME B16.47 — Large Diameter Steel Flanges (NPS 26 through NPS 60)",
      "NACE MR0175 / ISO 15156 Sour Service Compliance"
    ],
    industryApplications: [
      "High-pressure superheated steam lines in power generation",
      "Offshore oil & gas subsea risers and topside manifolds",
      "Sour hydrocarbon transport lines requiring NACE MR0175"
    ]
  },
  {
    id: 202,
    slug: "slip-on-flange",
    title: "Slip-On Flange",
    subcategory: "Slip-On Flange",
    category: "Flanges",
    parentSlug: "flanges",
    image: "/images/products/subcategories/slip-on-flange.jpg",
    shortDescription:
      "ASME B16.5 Cost-Effective Slip-On Flanges securing pipe with dual fillet welds for easy alignment.",
    materialGroup: "Flanges",
    standards: "ASME B16.5, DIN EN 1092-1 Type 12, BS 4504, JIS B2220",
    overview:
      "Slip-On Flanges slide over the outer diameter of the pipe and are secured with two fillet welds — one inside the flange face and one outside the hub. Lower initial procurement cost and simplified field fit-up make slip-on flanges ideal for utility, cooling water, and moderate pressure process applications.",
    grades: [
      "ASTM A105",
      "ASTM A350 LF2",
      "ASTM A182 F304/304L",
      "ASTM A182 F316/316L",
      "ASTM A182 F51"
    ],
    availableSizes: "1/2\" NB to 48\" NB",
    wallThickness: "Pressure Ratings: Class 150, 300, 600, 900, 1500 (PN 6 to PN 160)",
    manufacturingType: "Forged Steel Blank CNC Machined",
    connectionType: "Dual Fillet Weld (Internal & External)",
    surfaceFinish: "Smooth Finish, Stock Serrated",
    endConnection: "Raised Face (RF), Flat Face (FF)",
    technicalSpecs: {
      nominalSize: '1/2" NB to 48" NB',
      pressureClasses: "Class 150# to 1500#",
      designStandards: "ASME B16.5, DIN EN 1092-1 Type 12",
      weldType: "Double Fillet Weld"
    },
    standardsCompliance: [
      "ASME B16.5, DIN EN 1092-1, ASTM A105, ASTM A182"
    ],
    industryApplications: [
      "Cooling water circulating lines and municipal distribution",
      "Low-pressure steam headers and compressed air loops",
      "Fire protection systems and non-critical process piping"
    ]
  },
  {
    id: 203,
    slug: "blind-flange",
    title: "Blind Flange",
    subcategory: "Blind Flange",
    category: "Flanges",
    parentSlug: "flanges",
    image: "/images/products/subcategories/blind-flange.jpg",
    shortDescription:
      "ASME B16.5 & B16.47 Solid Forged Blind Discs for pipeline isolation, inspection manways, and testing.",
    materialGroup: "Flanges",
    standards: "ASME B16.5, ASME B16.47, DIN EN 1092-1 Type 05, MSS SP-44",
    overview:
      "Blind Flanges are solid circular forged discs manufactured without a center bore. Bolted to companion mating flanges to dead-end piping runs or seal pressure vessel inspection nozzles, blind flanges are designed with heavier plate thicknesses to withstand peak central bending stresses during hydrostatic pressure tests.",
    grades: [
      "ASTM A105",
      "ASTM A350 LF2",
      "ASTM A182 F304/304L",
      "ASTM A182 F316/316L",
      "ASTM A182 F51 (2205)",
      "ASTM A182 F53 (2507)"
    ],
    availableSizes: "1/2\" NB to 60\" NB",
    wallThickness: "Pressure Ratings: Class 150, 300, 600, 900, 1500, 2500 / PN 6 to PN 400",
    manufacturingType: "Forged from Solid ASTM Billets with Precision CNC Bolt Holes",
    connectionType: "Bolted Flanged Joint with Gasket Seal",
    surfaceFinish: "Serrated Spiral / Concentric (RF), Flat Face (FF), RTJ Ring Groove",
    endConnection: "Raised Face (RF), Flat Face (FF), Ring Type Joint (RTJ)",
    technicalSpecs: {
      nominalSize: '1/2" NB to 60" NB',
      pressureClasses: "Class 150# to 2500#",
      centerPortOptions: "Available with NPT Tapped Vent/Drain Holes upon request",
      designStandards: "ASME B16.5, ASME B16.47, DIN EN 1092-1 Type 05"
    },
    standardsCompliance: [
      "ASME B16.5, ASME B16.47, ASME BPVC Section VIII"
    ],
    industryApplications: [
      "Pipeline terminal closures and future header expansion spurs",
      "Hydrostatic pressure testing manifolds and line certification",
      "Pressure vessel inspection manways and handholes"
    ]
  },
  {
    id: 204,
    slug: "socket-weld-flange",
    title: "Socket Weld Flange",
    subcategory: "Socket Weld Flange",
    category: "Flanges",
    parentSlug: "flanges",
    image: "/images/products/subcategories/socket-weld-flange.jpg",
    shortDescription:
      "ASME B16.5 Small Bore High-Pressure Socket Weld Flanges with internal shoulder counterbore.",
    materialGroup: "Flanges",
    standards: "ASME B16.5, MSS SP-119",
    overview:
      "Socket Weld Flanges are engineered specifically for small nominal pipe diameters (1/2\" to 3\" NB) operating under elevated pressures. The pipe end is inserted into a precision counterbored socket with a mandatory 1/16\" thermal expansion gap and secured by a single external fillet weld, providing laminar flow without internal weld bead intrusion.",
    grades: [
      "ASTM A105",
      "ASTM A350 LF2",
      "ASTM A182 F304L",
      "ASTM A182 F316L",
      "ASTM A182 F11"
    ],
    availableSizes: "1/2\" NB to 3\" NB (DN15 to DN80)",
    wallThickness: "Pressure Ratings: Class 150, 300, 600, 1500",
    manufacturingType: "Forged & Machined with Counterbore Shoulder",
    connectionType: "Single Fillet Weld on Hub",
    surfaceFinish: "Stock Serrated RF",
    endConnection: "Raised Face (RF), Ring Type Joint (RTJ)",
    technicalSpecs: {
      nominalSize: '1/2" NB to 3" NB',
      expansionGap: '1/16" (1.6 mm) Thermal Gap at Bottom Shoulder',
      designStandards: "ASME B16.5, MSS SP-119"
    },
    standardsCompliance: [
      "ASME B16.5, ASTM A105, ASTM A182"
    ],
    industryApplications: [
      "High-pressure hydraulic and lube oil control systems",
      "Small-bore chemical sampling and boiler drain lines",
      "Steam trap stations in power generation"
    ]
  },
  {
    id: 205,
    slug: "threaded-flange",
    title: "Threaded Flange",
    subcategory: "Threaded Flange",
    category: "Flanges",
    parentSlug: "flanges",
    image: "/images/products/subcategories/threaded-flange.jpg",
    shortDescription:
      "ASME B16.5 NPT & BSPT Screwed Flanges for hazardous explosive environments where welding is prohibited.",
    materialGroup: "Flanges",
    standards: "ASME B16.5, ASME B1.20.1 (NPT), ISO 7-1 (BSPT)",
    overview:
      "Threaded Flanges (Screwed Flanges) feature internal female pipe threads machined into the bore, joining to externally threaded pipes without hot work welding. Essential in active refineries, fuel depots, and hazardous gas facilities where open flame welding permits cannot be issued.",
    grades: [
      "ASTM A105",
      "ASTM A350 LF2",
      "ASTM A182 F304L",
      "ASTM A182 F316L"
    ],
    availableSizes: "1/2\" NB to 6\" NB",
    wallThickness: "Pressure Ratings: Class 150, 300, 600, 900, 1500",
    manufacturingType: "Forged Blank CNC Thread-Chased",
    connectionType: "Threaded NPT / BSPT Connection (No Welding Required)",
    surfaceFinish: "Serrated RF, Flat Face",
    endConnection: "Raised Face (RF), Flat Face (FF)",
    technicalSpecs: {
      nominalSize: '1/2" NB to 6" NB',
      threadStandard: "ASME B1.20.1 NPT / BS 21 / ISO 7-1",
      designStandards: "ASME B16.5"
    },
    standardsCompliance: [
      "ASME B16.5, ASME B1.20.1, ASTM A105, ASTM A182"
    ],
    industryApplications: [
      "Explosion-risk refinery zones prohibiting hot work",
      "Flammable fuel gas piping and utility skids",
      "Galvanized pipe installations where welding destroys coating"
    ]
  },
  {
    id: 206,
    slug: "lap-joint-flange",
    title: "Lap Joint Flange",
    subcategory: "Lap Joint Flange",
    category: "Flanges",
    parentSlug: "flanges",
    image: "/images/products/subcategories/lap-joint-flange.jpg",
    shortDescription:
      "ASME B16.5 Loose Backing Flanges pairing with Stub Ends for 360° bolt alignment and exotic alloy savings.",
    materialGroup: "Flanges",
    standards: "ASME B16.5, ASME B16.9 (Stub Ends), DIN EN 1092-1 Type 02",
    overview:
      "Lap Joint Flanges are loose, rotatable backing flanges that pair with a butt-welded Lap Joint Stub End. Because the flange does not contact the process fluid, it can be manufactured in economical carbon steel while only the stub end is made from expensive corrosion-resistant alloys, delivering massive cost savings on exotic alloy piping systems.",
    grades: [
      "ASTM A105 backing with SS 316L / Duplex / Nickel Stub Ends",
      "ASTM A182 F304L/F316L"
    ],
    availableSizes: "1/2\" NB to 24\" NB",
    wallThickness: "Pressure Ratings: Class 150, 300, 600",
    manufacturingType: "Forged Backing Ring with Radiused Inner Bore",
    connectionType: "Loose Rotatable Slip Fit over Pipe Stub End",
    surfaceFinish: "Flat Face on backing ring (Gasket face is on the Stub End)",
    endConnection: "Flat Face (FF)",
    technicalSpecs: {
      nominalSize: '1/2" NB to 24" NB',
      boreFilletRadius: "Machined to fit ASME B16.9 Stub End Fillet",
      designStandards: "ASME B16.5, MSS SP-43"
    },
    standardsCompliance: [
      "ASME B16.5, ASME B16.9, MSS SP-43"
    ],
    industryApplications: [
      "Pulp & paper bleaching and chemical reactors requiring frequent turnaround",
      "Titanium, Hastelloy, and Nickel alloy piping systems",
      "Systems subject to rapid bolt hole alignment requirements"
    ]
  },
  {
    id: 207,
    slug: "long-weld-neck-flange",
    title: "Long Weld Neck Flange",
    subcategory: "Long Weld Neck Flange",
    category: "Flanges",
    parentSlug: "flanges",
    image: "/images/products/subcategories/long-weld-neck-flange.jpg",
    shortDescription:
      "Monolithic Extended Barrel LWN Nozzle Flanges for pressure vessels, columns, and heat exchangers.",
    materialGroup: "Flanges",
    standards: "ASME B16.5, ASME BPVC Section VIII, MSS SP-44",
    overview:
      "Long Weld Neck Flanges (LWN / High Hub Nozzle Flanges) are monolithic forged components featuring an extended cylindrical barrel that functions as a nozzle neck on pressure vessels, columns, and shell-and-tube heat exchangers. By eliminating circumferential welds between the flange and nozzle pipe, LWN flanges provide superior structural reinforcement against thermal expansion and nozzle reaction loads.",
    grades: [
      "ASTM A105",
      "ASTM A350 LF2",
      "ASTM A182 F304/304L",
      "ASTM A182 F316/316L",
      "ASTM A182 F51",
      "ASTM A182 F11/F22"
    ],
    availableSizes: "1/2\" NB to 24\" NB, Barrel Lengths up to 36\" (900 mm)",
    wallThickness: "Pressure Ratings: Class 150, 300, 600, 900, 1500, 2500",
    manufacturingType: "Heavy Solid Forged Billet CNC Bored & Turned",
    connectionType: "Butt Weld to Pressure Vessel Shell / Head",
    surfaceFinish: "Serrated RF, RTJ Groove",
    endConnection: "Raised Face (RF), Ring Type Joint (RTJ)",
    technicalSpecs: {
      nominalSize: '1/2" NB to 24" NB',
      barrelLength: "Standard 9\" (229 mm), 12\" (305 mm), Custom up to 36\"",
      designStandards: "ASME B16.5, ASME BPVC Section VIII Div 1 & 2"
    },
    standardsCompliance: [
      "ASME B16.5, ASME BPVC Section VIII, ASTM A105, ASTM A182"
    ],
    industryApplications: [
      "Pressure vessel inspection nozzles and manways",
      "Distillation column and cracking tower process nozzles",
      "Heat exchanger channel nozzles under high piping loads"
    ]
  },
  {
    id: 208,
    slug: "orifice-flange",
    title: "Orifice Flange",
    subcategory: "Orifice Flange",
    category: "Flanges",
    parentSlug: "flanges",
    image: "/images/products/subcategories/orifice-flange.jpg",
    shortDescription:
      "ASME B16.36 Matched Differential Pressure Metering Flange Pairs with radial tap holes and jack screws.",
    materialGroup: "Flanges",
    standards: "ASME B16.36, ASME B16.5, ISO 5167",
    overview:
      "Orifice Flanges are supplied in matched pairs specifically designed to house an orifice meter plate for fluid flow measurement. Equipped with precision radial differential pressure tapping ports (1/2\" NPT) drilled into the flange body and dedicated jack screws to spread the flange faces apart during orifice plate maintenance without straining the pipeline.",
    grades: [
      "ASTM A105",
      "ASTM A350 LF2",
      "ASTM A182 F316/316L",
      "ASTM A182 F51 (2205)",
      "Inconel 625"
    ],
    availableSizes: "1\" NB to 24\" NB",
    wallThickness: "Pressure Ratings: Class 300, 600, 900, 1500, 2500",
    manufacturingType: "Matched Pair Forged & Precision Drilled with Radial Taps",
    connectionType: "Butt Weld Neck / Threaded / Slip-On",
    surfaceFinish: "Raised Face (RF), Ring Type Joint (RTJ)",
    endConnection: "RF / RTJ with Radial Pressure Taps & Jack Screws",
    technicalSpecs: {
      nominalSize: '1" NB to 24" NB',
      pressureClasses: "Class 300# to 2500# (Min Cl 300 due to tap wall thickness)",
      tapDrillings: 'Two 1/2" NPT Radial Tapped Holes per Flange',
      jackScrews: "Supplied with Two Jack Screws and Nuts per Pair",
      designStandards: "ASME B16.36, ISO 5167"
    },
    standardsCompliance: [
      "ASME B16.36 — Orifice Flanges",
      "ISO 5167 — Measurement of Fluid Flow by Means of Pressure Differential Devices"
    ],
    industryApplications: [
      "Custody transfer flow metering for natural gas and crude oil",
      "Steam flow monitoring in boiler power generation plants",
      "Chemical process mass balance flow measurement"
    ]
  },
  {
    id: 209,
    slug: "reducing-flange",
    title: "Reducing Flange",
    subcategory: "Reducing Flange",
    category: "Flanges",
    parentSlug: "flanges",
    image: "/images/products/flanges/reducing.jpg",
    shortDescription:
      "ASME B16.5 Table 6 Specialized connecting flanges with differing outer bolt circle and inner bore diameter for line size reduction.",
    materialGroup: "Flanges",
    standards: "ASME B16.5 Table 6, DIN EN 1092-1, MSS SP-44",
    overview:
      "Reducing Flanges are engineered to connect two pipes of different nominal pipe sizes without requiring an inline pipe reducer fitting. The flange features an outer diameter and bolt hole circle matching the larger nominal pipe size, while the inner bore and hub profile are machined to match the smaller connecting pipe diameter. By combining a flange and reducer into a single forged element, piping designers conserve valuable longitudinal space and eliminate one circumferential welding joint.",
    grades: [
      "ASTM A105",
      "ASTM A350 LF2",
      "ASTM A182 F304/304L",
      "ASTM A182 F316/316L",
      "ASTM A182 F51 (2205)"
    ],
    availableSizes: "2\" to 24\" NB (reducing to 1/2\" to 12\" NB)",
    wallThickness: "Pressure Ratings: Class 150, 300, 600, 900, 1500 (PN 10 to PN 250)",
    manufacturingType: "Forged Closed Die / CNC Precision Bored",
    connectionType: "Threaded, Slip-On, or Butt Weld Neck Reducing",
    surfaceFinish: "Serrated Concentric / Spiral Finish (Ra 3.2 - 6.3 µm)",
    endConnection: "Raised Face (RF), Flat Face (FF)",
    technicalSpecs: {
      nominalSize: '2" to 24" NB reducing to 1/2" to 12" NB',
      pressureClasses: "Class 150# to 1500#",
      facingOptions: "RF, FF",
      designStandards: "ASME B16.5 Table 6, DIN EN 1092-1",
      reductionStyle: "Concentric Bore Reduction"
    },
    standardsCompliance: [
      "ASME B16.5 Table 6 — Pipe Flanges and Flanged Fittings (Reducing Flanges)",
      "DIN EN 1092-1 — Flanges and Their Joints",
      "ASTM A105, ASTM A182"
    ],
    industryApplications: [
      "Pump suction and discharge nozzles with differing header diameters",
      "Meter run connections and valve body size transitions",
      "Space-constrained modular offshore skids and compact marine engine rooms"
    ]
  },
  {
    id: 210,
    slug: "plate-flange",
    title: "Plate Flange",
    subcategory: "Plate Flange",
    category: "Flanges",
    parentSlug: "flanges",
    image: "/images/products/flanges/plate-flange.jpg",
    shortDescription:
      "DIN EN 1092-1 Type 01 & BS 4504 Hubless flat circular plate flanges for low-pressure water, HVAC, and ducting systems.",
    materialGroup: "Flanges",
    standards: "DIN EN 1092-1 Type 01, BS 4504, IS 2062 / IS 6392, AWWA C207 Class D & E",
    overview:
      "Plate Flanges (Flat Face Slip-On Plate Flanges) are hubless, flat circular flanges manufactured directly from hot-rolled steel plates conforming to DIN EN 1092-1 Type 01, BS 4504, IS 2062, or AWWA C207 standards. The flange slides over the pipe and is secured with inside and outside fillet welds. Due to the absence of a forged neck hub, plate flanges are the most cost-efficient flange solution for low-pressure municipal, wastewater, and general ventilation systems.",
    grades: [
      "IS 2062 Gr. A/B",
      "ASTM A36",
      "ASTM A516 Gr. 70",
      "ASTM A240 SS 304/304L",
      "ASTM A240 SS 316/316L"
    ],
    availableSizes: "1/2\" NB to 80\" NB (DN15 to DN2000)",
    wallThickness: "Pressure Ratings: PN 2.5, PN 6, PN 10, PN 16 / Class 150 (AWWA)",
    manufacturingType: "High-Definition CNC Plasma / Laser Profiled & Surface Machined",
    connectionType: "Dual Fillet Weld (Internal & External)",
    surfaceFinish: "Flat Face (FF) Smooth Machined",
    endConnection: "Flat Face (FF)",
    technicalSpecs: {
      nominalSize: '1/2" NB to 80" NB (DN15 to DN2000)',
      pressureClasses: "PN 2.5, PN 6, PN 10, PN 16 / Class 150",
      facingOptions: "Flat Face (FF)",
      designStandards: "DIN EN 1092-1 Type 01, BS 4504, AWWA C207",
      plateStandard: "IS 2062, ASTM A36, ASTM A240"
    },
    standardsCompliance: [
      "DIN EN 1092-1 — Flanges and Their Joints (Type 01 Plate Flange)",
      "BS 4504 — Circular Flanges for Pipes, Valves and Fittings",
      "AWWA C207 — Steel Pipe Flanges for Waterworks Service"
    ],
    industryApplications: [
      "Municipal water supply, sewage treatment, and wastewater pumping stations",
      "HVAC chilled water loops, cooling towers, and fire water circuits",
      "Exhaust gas ducting, low-pressure ventilation, and bulk silo connections"
    ]
  },
  {
    id: 211,
    slug: "expander-flange",
    title: "Expander Flange",
    subcategory: "Expander Flange",
    category: "Flanges",
    parentSlug: "flanges",
    image: "/images/products/flanges/expander.jpg",
    shortDescription:
      "MSS SP-65 & ASME B16.5 Integrated weld neck flanges with an expanding tapered bore transitioning smaller pipe to larger valve or pump nozzles.",
    materialGroup: "Flanges",
    standards: "MSS SP-65, ASME B16.5, ASME B16.47",
    overview:
      "Expander Flanges are specialized weld neck flanges where the hub incorporates a gradual internal cone expansion. Designed in accordance with MSS SP-65 and ASME B16.5 conventions, expander flanges transition from a smaller pipe diameter at the weld bevel to a larger nominal flange mating face. By combining a weld neck flange and a pipe expander reducer into a single forged component, piping engineers eliminate one butt-weld seam and conserve vital skid footprint.",
    grades: [
      "ASTM A105",
      "ASTM A350 LF2",
      "ASTM A694 F52-F65",
      "ASTM A182 F316/316L",
      "ASTM A182 F304/304L",
      "ASTM A182 F51 (2205)"
    ],
    availableSizes: "2\" to 24\" NB weld neck expanding to 3\" to 30\" flange face",
    wallThickness: "Pressure Ratings: Class 150, 300, 600 (PN 20 to PN 100)",
    manufacturingType: "One-Piece Integral Die Forged & CNC Precision Turned",
    connectionType: "Full Penetration Circumferential Butt Weld",
    surfaceFinish: "Serrated Concentric / Spiral (RF), RTJ Ring Groove",
    endConnection: "Raised Face (RF), Ring Type Joint (RTJ)",
    technicalSpecs: {
      nominalSize: '2" to 24" NB expanding to 3" to 30" Flange',
      pressureClasses: "Class 150#, 300#, 600#",
      facingOptions: "RF, RTJ",
      designStandards: "MSS SP-65, ASME B16.5",
      expansionAngle: "Smooth hydrodynamic internal taper"
    },
    standardsCompliance: [
      "MSS SP-65 — High-Pressure Chemical Industry Flanges and Threaded Stubs",
      "ASME B16.5 — Pipe Flanges and Flanged Fittings",
      "NACE MR0175 / ISO 15156 Sour Service Compliance"
    ],
    industryApplications: [
      "Centrifugal pump suction nozzles requiring enlarged intake diameter",
      "Compressor discharge headers and valve body tie-ins",
      "Offshore modular gas processing skids where axial space is strictly constrained"
    ]
  },
  {
    id: 212,
    slug: "weldo-flange",
    title: "Weldo Flange",
    subcategory: "Weldo Flange",
    category: "Flanges",
    parentSlug: "flanges",
    image: "/images/products/flanges/weldo-flange.jpg",
    shortDescription:
      "MSS SP-97 Integrally reinforced branch outlet forgings combining a Weldolet branch fitting and a weld neck flange in one solid body.",
    materialGroup: "Flanges",
    standards: "MSS SP-97, ASME B16.5, ASME B31.3",
    overview:
      "Weldo Flanges (also known as Weldolet Flanges or Nipoflanges) are integrally reinforced forged components that fuse a branch outlet fitting (Weldolet) and a weld neck flange into a single, seamless forging. Designed per MSS SP-97 and ASME B31.3 reinforcement rules, a weldo flange is contoured to weld directly onto the main run header pipe, providing a 90° flanged takeoff branch without intermediate weld joints.",
    grades: [
      "ASTM A105",
      "ASTM A350 LF2",
      "ASTM A694 F52-F70",
      "ASTM A182 F316/316L",
      "ASTM A182 F304/304L",
      "ASTM A182 F51 (2205)",
      "ASTM A182 F53 (2507)"
    ],
    availableSizes: "Run 2\" to 36\" NB with branch flange 1/2\" to 8\" NB",
    wallThickness: "Pressure Ratings: Class 150, 300, 600, 900, 1500, 2500",
    manufacturingType: "Solid Billet Drop Forged & 3D Contour CNC Profiled",
    connectionType: "Contoured Full Penetration Weld to Run Pipe",
    surfaceFinish: "Serrated RF, Ring Type Joint (RTJ)",
    endConnection: "Raised Face (RF), Ring Type Joint (RTJ)",
    technicalSpecs: {
      runSize: '2" to 36" NB Header Run',
      branchSize: '1/2" to 8" NB Flange Branch',
      pressureClasses: "Class 150# to 2500#",
      facingOptions: "RF, RTJ",
      designStandards: "MSS SP-97, ASME B16.5, ASME B31.3",
      reinforcement: "100% Integrally Reinforced Branch"
    },
    standardsCompliance: [
      "MSS SP-97 — Integrally Reinforced Forged Branch Outlet Fittings",
      "ASME B16.5 — Pipe Flanges and Flanged Fittings",
      "ASME B31.3 — Process Piping"
    ],
    industryApplications: [
      "High-pressure pipeline instrument takeoffs, sample points, and drain connections",
      "Header tie-ins on offshore drilling platforms and FPSO processing topsides",
      "Refinery cracking furnaces and high-pressure steam distribution headers"
    ]
  },
  {
    id: 213,
    slug: "elbow-flange",
    title: "Elbow Flange",
    subcategory: "Elbow Flange",
    category: "Flanges",
    parentSlug: "flanges",
    image: "/images/products/flanges/elbow-flange.jpg",
    shortDescription:
      "ASME B16.5 & DIN 2605 Heavy-duty 90° or 45° forged piping elbows with integrated flange faces for ultra-compact directional change.",
    materialGroup: "Flanges",
    standards: "ASME B16.5, ASME B16.9, DIN 2605 / DIN 2633",
    overview:
      "Elbow Flanges (Flanged Elbows) are heavy-duty forged components that combine a 90° or 45° pipe elbow with an integral flange face at one or both ends. Engineered for space-restricted environments where welding a standard pipe elbow to a separate weld neck flange is physically impossible due to tight center-to-face dimensions, elbow flanges provide an ultra-compact, high-strength solution.",
    grades: [
      "ASTM A105",
      "ASTM A350 LF2",
      "ASTM A182 F304/304L",
      "ASTM A182 F316/316L",
      "ASTM A182 F51 (2205)"
    ],
    availableSizes: "1\" NB (DN25) to 12\" NB (DN300)",
    wallThickness: "Pressure Ratings: Class 150, 300, 600",
    manufacturingType: "Forged Monolithic Body & Multi-Axis CNC Machined",
    connectionType: "Integral Flanged Bolted Joint / Butt Weld End",
    surfaceFinish: "Raised Face (RF), Ring Type Joint (RTJ)",
    endConnection: "Raised Face (RF), Ring Type Joint (RTJ)",
    technicalSpecs: {
      nominalSize: '1" NB to 12" NB (DN25 to DN300)',
      pressureClasses: "Class 150#, 300#, 600#",
      facingOptions: "RF, RTJ",
      elbowAngles: "90° Long/Short Radius, 45° Elbow",
      designStandards: "ASME B16.5, ASME B16.9, DIN 2605"
    },
    standardsCompliance: [
      "ASME B16.5 — Pipe Flanges and Flanged Fittings",
      "ASME B16.9 — Factory-Made Wrought Buttwelding Fittings",
      "DIN 2605 — Steel Butt-Welding Pipe Fittings"
    ],
    industryApplications: [
      "Pump suction and discharge nozzles with right-angle pipeline entry",
      "Heat exchanger channel head tie-ins in compact marine engine rooms",
      "Offshore skid packages and hydraulic accumulator manifolds"
    ]
  }
];

export const fastenersSubcategories = [
  {
    id: 301,
    slug: "hex-bolts",
    title: "Hex Bolts",
    subcategory: "Hex Bolts",
    category: "Fasteners",
    parentSlug: "fasteners",
    image: "/images/products/subcategories/hex-bolts.jpg",
    shortDescription:
      "ASME B18.2.1 & DIN 931 / 933 Heavy Hex Head Bolts in high-tensile alloy and corrosion-resistant stainless steel.",
    materialGroup: "Fasteners",
    standards: "ASME B18.2.1, DIN 931, DIN 933, ISO 4014, ISO 4017, ASTM A193, ASTM A320",
    overview:
      "Hex Bolts and Heavy Hex Head Bolts are the backbone of structural and pressure vessel fastening. Manufactured with precision machined hexagonal heads engineered for high torque wrenches, they are supplied in full-thread (DIN 933) and part-thread (DIN 931) configurations across high-tensile carbon, alloy, and austenitic stainless steels.",
    grades: [
      "ASTM A193 B7 / B7M",
      "ASTM A193 B8 (SS 304)",
      "ASTM A193 B8M (SS 316)",
      "ASTM A193 B16",
      "ASTM A320 L7 / L7M",
      "Class 8.8, 10.9, 12.9",
      "Duplex 2205",
      "Super Duplex 2507",
      "Inconel 718"
    ],
    availableSizes: "1/4\" to 4\" Diameter (Imperial) / M6 to M100 (Metric), Lengths up to 600 mm",
    wallThickness: "Tensile Strength: 500 MPa to 1220 MPa depending on grade",
    manufacturingType: "Cold Forged / Hot Forged with Thread Rolled (High Fatigue Strength)",
    connectionType: "External Machine Thread (UNC, UNF, Metric Coarse/Fine)",
    surfaceFinish: "Black Oxide, Hot Dip Galvanized, Zinc Plated, Cadmium, PTFE Xylan Coated",
    endConnection: "Chamfered End per ASME B18.2.1",
    technicalSpecs: {
      diameterRange: '1/4" to 4" / M6 to M100',
      threadPitch: "UNC 8-UN, Metric Coarse / Fine per ASME B1.1 / ISO 261",
      proofLoad: "Up to 830 MPa for Grade 10.9 / B7",
      designStandards: "ASME B18.2.1, DIN 931/933, ISO 4014/4017"
    },
    standardsCompliance: [
      "ASTM A193, ASTM A320, ASTM A325, DIN 931/933, ISO 898-1"
    ],
    industryApplications: [
      "Heavy structural steel framing, bridges, and offshore platforms",
      "High-pressure piping flanges and valve bonnet bolting",
      "Turbine and heavy machine foundation anchor installations"
    ]
  },
  {
    id: 302,
    slug: "hex-nuts",
    title: "Hex Nuts",
    subcategory: "Hex Nuts",
    category: "Fasteners",
    parentSlug: "fasteners",
    image: "/images/products/subcategories/hex-nuts.jpg",
    shortDescription:
      "ASME B18.2.2 & DIN 934 Heavy Hex Nuts engineered to match high-tensile studs and flange bolts.",
    materialGroup: "Fasteners",
    standards: "ASME B18.2.2, DIN 934, ISO 4032, ASTM A194",
    overview:
      "Heavy Hex Nuts feature increased width across flats and greater thickness than standard hex nuts, providing maximum thread engagement to withstand severe proof loads without thread stripping. Formed by cold or hot forging and heat treated to stringent hardness specifications.",
    grades: [
      "ASTM A194 Gr. 2H, 2HM",
      "ASTM A194 Gr. 7, 7M",
      "ASTM A194 Gr. 8 (SS 304)",
      "ASTM A194 Gr. 8M (SS 316)",
      "Class 8, 10, 12",
      "Duplex 2205",
      "Super Duplex 2507"
    ],
    availableSizes: "1/4\" to 4\" (M6 to M100)",
    wallThickness: "Proof Load Rating: Up to 1200 MPa per ASTM A194",
    manufacturingType: "Cold Formed / Hot Forged & Tapped",
    connectionType: "Internal Machine Thread (UNC, 8-UN, Metric)",
    surfaceFinish: "Black Phosphate, Zinc Dichromate, Hot Dip Galvanized, Xylan 1070",
    endConnection: "Double Chamfered Hexagonal",
    technicalSpecs: {
      sizeRange: '1/4" to 4" / M6 to M100',
      proofLoadStress: "175 ksi (1205 MPa) for A194 2H",
      designStandards: "ASME B18.2.2, DIN 934, ISO 4032"
    },
    standardsCompliance: [
      "ASTM A194 / A194M, ISO 898-2"
    ],
    industryApplications: [
      "High-temperature and high-pressure ASME B16.5 flanged joints",
      "Pressure vessel closure bolting in petrochemical refineries",
      "Offshore wind turbine and subsea structural bolting"
    ]
  },
  {
    id: 303,
    slug: "stud-bolts",
    title: "Stud Bolts",
    subcategory: "Stud Bolts",
    category: "Fasteners",
    parentSlug: "fasteners",
    image: "/images/products/subcategories/stud-bolts.jpg",
    shortDescription:
      "ASME B18.31.2 Continuous Thread Stud Bolts with Heavy Hex Nuts for high-pressure flanged joints.",
    materialGroup: "Fasteners",
    standards: "ASME B18.31.2, DIN 976, ASTM A193, ASTM A320",
    overview:
      "Continuous Thread Stud Bolts with two heavy hex nuts are the universal industry standard for bolting flanged piping connections. Full-thread engagement across the entire stud length ensures uniform clamping distribution and simplifies removal during turnaround maintenance even if thread corrosion occurs.",
    grades: [
      "ASTM A193 B7 (Cr-Mo 4140)",
      "ASTM A193 B7M (NACE H2S)",
      "ASTM A193 B8 (SS 304)",
      "ASTM A193 B8M (SS 316)",
      "ASTM A193 B16 (High Temp Steam)",
      "ASTM A320 L7 / L7M (Low Temp -100°C)",
      "Duplex 2205",
      "Super Duplex 2507",
      "Inconel 625"
    ],
    availableSizes: "1/2\" to 4\" Diameter, Cut to exact length per ASME B16.5 flange tables",
    wallThickness: "Tensile Strength: 860 MPa to 1000 MPa (Class B7)",
    manufacturingType: "Cold Drawn Bar Precision Rolled Threads (Cut threads available for exotics)",
    connectionType: "Continuous Machine Thread (UNC / 8-UN Series)",
    surfaceFinish: "Plain Black, Hot Dip Galvanized, Fluoropolymer PTFE / Xylan 1070/1424 Coated",
    endConnection: "Point Chamfered per ASME B18.31.2",
    technicalSpecs: {
      diameterRange: '1/2" to 4" (M12 to M100)',
      threadSeries: "Coarse Series (UNC) up to 1\", 8-Thread Series (8-UN) above 1\"",
      designStandards: "ASME B18.31.2, ASTM A193, NACE MR0175"
    },
    standardsCompliance: [
      "ASTM A193 / A193M, ASTM A320 / A320M, NACE MR0175"
    ],
    industryApplications: [
      "ASME B16.5 & B16.47 pipeline flanged connections",
      "High-pressure heat exchanger channel and cover bolting",
      "Subsea manifolds and offshore production topsides"
    ]
  },
  {
    id: 304,
    slug: "threaded-rods",
    title: "Threaded Rods",
    subcategory: "Threaded Rods",
    category: "Fasteners",
    parentSlug: "fasteners",
    image: "/images/products/subcategories/threaded-rods.jpg",
    shortDescription:
      "DIN 975 & ASME B18.31.3 All-Thread Continuous Rods in 1m, 2m, 3m and custom lengths.",
    materialGroup: "Fasteners",
    standards: "DIN 975, DIN 976-1, ASME B18.31.3",
    overview:
      "Threaded Rods (also known as All-Thread Rods or Studding) feature continuous external machine threads from end to end without head geometry. Widely used for pipe hangers, MEP ceiling suspensions, seismic bracing, foundation anchoring, and structural tie-rod assemblies.",
    grades: [
      "SS 304 (A2-70)",
      "SS 316 (A4-70 / A4-80)",
      "Carbon Steel 4.8, 8.8, 10.9",
      "ASTM A193 B7",
      "Brass",
      "B8/B8M"
    ],
    availableSizes: "M3 to M64 (Metric) / 1/4\" to 3\" (Imperial) in standard 1 Meter, 2 Meter, 3 Meter lengths",
    wallThickness: "Tensile Strength: 400 MPa to 1040 MPa",
    manufacturingType: "Thread Rolled Continuous Rod",
    connectionType: "Continuous Machine Thread",
    surfaceFinish: "Zinc Plated (Cr3+), Hot Dip Galvanized, Plain Oil, Passivated Stainless",
    endConnection: "Square Cut Chamfered",
    technicalSpecs: {
      threadStandard: "Metric ISO 261 / Imperial UNC ASME B1.1",
      lengths: "1 Meter, 2 Meter, 3 Meter or Custom Pre-Cut Spools",
      designStandards: "DIN 975, DIN 976, ASME B18.31.3"
    },
    standardsCompliance: [
      "DIN 975, DIN 976-1, ISO 898-1, ASTM A193"
    ],
    industryApplications: [
      "Industrial pipe rack hangers and HVAC duct suspensions",
      "MEP electrical cable tray support framing",
      "Concrete foundation anchor embedment and seismic tie-backs"
    ]
  },
  {
    id: 305,
    slug: "machine-screws",
    title: "Machine Screws",
    subcategory: "Machine Screws",
    category: "Fasteners",
    parentSlug: "fasteners",
    image: "/images/products/subcategories/machine-screws.jpg",
    shortDescription:
      "ASME B18.6.3 & DIN 7985 / 965 Precision Machine Screws with pan, countersunk, and cheese heads.",
    materialGroup: "Fasteners",
    standards: "ASME B18.6.3, DIN 7985, DIN 965, DIN 84, ISO 7045",
    overview:
      "Precision Machine Screws are engineered for assembly into pre-tapped holes or mating nuts across electronic instrumentation, valve actuators, control panels, and precision mechanical enclosures. Supplied in Phillips, slotted, and Torx drive configurations.",
    grades: [
      "Stainless Steel 304 (A2-70)",
      "Stainless Steel 316 (A4-70)",
      "Carbon Steel 4.8 / 8.8",
      "Brass",
      "Monel 400"
    ],
    availableSizes: "M1.6 to M12 (Metric) / #2 to 1/2\" (Imperial)",
    wallThickness: "Drive Styles: Phillips (Cross Recessed), Slotted, Torx (6-Lobe), Pozi",
    manufacturingType: "Cold Headed with Precision Rolled Threads",
    connectionType: "Machine Thread into Tapped Holes",
    surfaceFinish: "Bright Stainless Passivated, Zinc Plated, Nickel Plated",
    endConnection: "Flat End Chamfered",
    technicalSpecs: {
      headStyles: "Pan Head (DIN 7985), Countersunk Flat (DIN 965), Round Head",
      driveRecess: "Phillips #1/#2/#3, Slotted, Torx T10-T40",
      designStandards: "ASME B18.6.3, DIN 7985, ISO 7045"
    },
    standardsCompliance: [
      "DIN 7985, DIN 965, ASME B18.6.3, ISO 3506-1"
    ],
    industryApplications: [
      "Electrical control enclosures, switchgear, and terminal blocks",
      "Instrumentation valve positioners and actuator assembly",
      "Precision marine and food-grade machinery"
    ]
  },
  {
    id: 306,
    slug: "socket-head-cap-screws",
    title: "Socket Head Cap Screws",
    subcategory: "Socket Head Cap Screws",
    category: "Fasteners",
    parentSlug: "fasteners",
    image: "/images/products/subcategories/socket-head-cap-screws.jpg",
    shortDescription:
      "ASME B18.3 & DIN 912 Class 12.9 High-Tensile Allen Head Cap Screws for compact recessed counterbores.",
    materialGroup: "Fasteners",
    standards: "ASME B18.3, DIN 912, ISO 4762, ASTM A574",
    overview:
      "Socket Head Cap Screws (Allen Bolts) feature a cylindrical head with a precision recessed internal hexagonal socket drive. Engineered for high-stress applications where space constraints prohibit the use of external hex wrench sockets, allowing deep counterboring inside machine casings and high-pressure valve bodies.",
    grades: [
      "High Tensile Alloy Steel Grade 12.9 (1220 MPa)",
      "Grade 10.9 (1040 MPa)",
      "Stainless Steel 304 (A2-70)",
      "Stainless Steel 316 (A4-80)",
      "ASTM A574",
      "Inconel 718"
    ],
    availableSizes: "M3 to M48 (Metric) / #4 to 2\" (Imperial)",
    wallThickness: "Hardness: 39 - 44 HRC (Grade 12.9)",
    manufacturingType: "Cold Forged Socket Head / Deep Hexagon Broached / Rolled Thread",
    connectionType: "Internal Hexagon (Allen Key / Hex Driver)",
    surfaceFinish: "Thermal Black Oxide, Zinc Plated, Geomet, Passivated Stainless",
    endConnection: "Chamfered Point",
    technicalSpecs: {
      nominalSize: "M3 to M48 / #4 to 2\"",
      yieldStrength: "1100 MPa for Grade 12.9 / 600 MPa for A4-80",
      designStandards: "ASME B18.3, DIN 912, ISO 4762"
    },
    standardsCompliance: [
      "DIN 912, ISO 4762, ASME B18.3, ASTM A574"
    ],
    industryApplications: [
      "High-pressure hydraulic pumps, cylinders, and valve bodies",
      "Die and mold tooling, injection molding machines",
      "Automotive engine and turbine component assembly"
    ]
  },
  {
    id: 307,
    slug: "washers",
    title: "Washers",
    subcategory: "Washers",
    category: "Fasteners",
    parentSlug: "fasteners",
    image: "/images/products/subcategories/washers.jpg",
    shortDescription:
      "ASME B18.21.1, ASTM F436 & DIN 125/127 Flat, Spring Lock, and Hardened Structural Washers.",
    materialGroup: "Fasteners",
    standards: "ASME B18.21.1, ASTM F436, DIN 125A, DIN 127B, DIN 9021",
    overview:
      "Industrial Washers distribute bolting clamp loads uniformly over mating surfaces, prevent embedment and galling, and maintain preload under vibration. Available in Flat Plain (DIN 125), Spring Split Lock (DIN 127B), Extra Large Fender (DIN 9021), and Hardened Heavy Structural (ASTM F436) forms.",
    grades: [
      "ASTM F436 Type 1 Hardened Structural (38-45 HRC)",
      "Stainless Steel 304 (A2)",
      "Stainless Steel 316 (A4)",
      "Spring Steel (65Mn)",
      "Duplex 2205",
      "Monel 400"
    ],
    availableSizes: "M3 to M100 / 1/4\" to 4\" Bolt Diameter",
    wallThickness: "Thickness Range: 0.8 mm to 10 mm",
    manufacturingType: "Precision Stamped & Deburred / Heat Treated Through-Hardened",
    connectionType: "Under-Head & Under-Nut Bearing Washers",
    surfaceFinish: "Hot Dip Galvanized, Zinc Plated, Passivated Stainless, Mechanical Galvanized",
    endConnection: "Flat Ring / Split Spring / Chamfered Edge",
    technicalSpecs: {
      typeVariants: "Flat Washers, Spring Lock Washers, Conical Belleville, Spherical Bevel Washers",
      hardness: "38 to 45 HRC (ASTM F436)",
      designStandards: "ASME B18.21.1, ASTM F436, DIN 125, DIN 127"
    },
    standardsCompliance: [
      "ASTM F436 / F436M, DIN 125A, DIN 127B, ISO 7089"
    ],
    industryApplications: [
      "High-strength structural steel joints and building frames",
      "Piping flange bolting to protect flange face paint and coatings",
      "Vibrating machinery, centrifugal pumps, and engine mountings"
    ]
  },
  {
    id: 308,
    slug: "anchor-bolts",
    title: "Anchor Bolts",
    subcategory: "Anchor Bolts",
    category: "Fasteners",
    parentSlug: "fasteners",
    image: "/images/products/subcategories/anchor-bolts.jpg",
    shortDescription:
      "ASTM F1554 Gr 36/55/105 L-Type, J-Type, Plate and Wedge Foundation Anchor Bolts.",
    materialGroup: "Fasteners",
    standards: "ASTM F1554, DIN 529, IS 5624",
    overview:
      "Foundation Anchor Bolts anchor structural columns, storage tanks, heavy process equipment, and bridge piers securely to reinforced concrete foundations. Supplied in L-Hook, J-Hook, Straight Rod with welded anchor plate, and post-installed mechanical wedge configurations.",
    grades: [
      "ASTM F1554 Grade 36 (Mild Steel)",
      "ASTM F1554 Grade 55 (High-Strength Low-Alloy)",
      "ASTM F1554 Grade 105 (Heat-Treated Alloy Steel)",
      "SS 304",
      "SS 316",
      "IS 2062"
    ],
    availableSizes: "M12 to M64 / 1/2\" to 3\" Diameter, Embedment Lengths up to 2500 mm",
    wallThickness: "Tensile Strength: 400 MPa to 860 MPa",
    manufacturingType: "Hot Bent / Hot Forged Head / Welded Base Plate Anchor",
    connectionType: "Concrete Cast-in-Place / Post-Installed Wedge",
    surfaceFinish: "Hot Dip Galvanized (HDG), Black Self-Color, Zinc Plated",
    endConnection: "Threaded Top with Nuts and Washers; Hooked / Plated Base",
    technicalSpecs: {
      configurations: "L-Type (Bent Hook), J-Type, Headed Stud, Base Plate Sleeve",
      designStandards: "ASTM F1554, DIN 529, ACI 318 Appendix D",
      galvanizing: "Hot Dip Galvanized per ASTM A153"
    },
    standardsCompliance: [
      "ASTM F1554 — Anchor Bolts, Steel, 36, 55, and 105-ksi Yield Strength",
      "ASTM A153 / A153M — Zinc Coating (Hot-Dip)"
    ],
    industryApplications: [
      "Pre-engineered steel building column base plates",
      "Heavy process compressor skids and chemical reactor foundations",
      "Highway lighting masts, transmission towers, and gantry cranes"
    ]
  }
];

export const ferruleSubcategories = [
  {
    id: 401,
    slug: "double-ferrule-tube-fittings",
    title: "Double Ferrule Tube Fittings",
    subcategory: "Double Ferrule Tube Fittings",
    category: "Ferrule Fittings",
    parentSlug: "ferrule-fittings",
    image: "/images/products/subcategories/double-ferrule-tube-fittings.jpg",
    shortDescription:
      "ASTM A276 & MSS SP-99 Twin-Ferrule Instrumentation Compression Tube Fittings rated up to 15,000 PSI.",
    materialGroup: "Ferrule Fittings",
    standards: "ASTM A276, ASME B31.3, BS 4368, MSS SP-99, ISO 8434-1",
    overview:
      "Double Ferrule Tube Fittings are the gold standard for leak-tight gas and liquid connections in high-pressure analytical, instrumentation, and process impulse lines. Using a sequential twin-ferrule mechanical grip: the front ferrule provides pressure sealing against the body and tube outer diameter, while the rear ferrule drives radial mechanical hold without transmitting torque or twisting to the tube.",
    grades: [
      "SS 316 / 316L (ASTM A276)",
      "SS 304 / 304L",
      "Duplex 2205",
      "Super Duplex 2507",
      "Monel 400",
      "Hastelloy C276",
      "Inconel 625",
      "Titanium Gr. 2"
    ],
    availableSizes: "1/16\" to 2\" Tube OD (Fractional) / 2 mm to 50 mm Tube OD (Metric)",
    wallThickness: "Pressure Rating: Vacuum up to 15,000 PSI (1034 bar)",
    manufacturingType: "Precision CNC Machined from Solid Cold-Drawn ASTM Bars",
    connectionType: "Twin-Ferrule Compression Flareless Joint",
    surfaceFinish: "Silver-Plated Nut Threads (prevents galling), Electro-Polished Body",
    endConnection: "Double Ferrule Tube Port",
    technicalSpecs: {
      tubeODRange: '1/16" to 2" OD / 2 mm to 50 mm OD',
      pressureWorking: "Up to 15,000 PSI (dependent on tubing wall thickness)",
      temperatureLimits: "-200°C to +650°C (Material Dependent)",
      heliumLeakRate: "< 1 x 10^-9 mbar·L/sec (Guaranteed Zero-Leak Sealing)"
    },
    standardsCompliance: [
      "MSS SP-99 — Instrument Valves and Fittings",
      "ASME B31.3 — Chemical Plant and Petroleum Refinery Piping",
      "NACE MR0175 / ISO 15156 Sour Gas Verified"
    ],
    industryApplications: [
      "Oil & gas offshore instrument panels, wellhead control skids",
      "Chemical plant analytical chromatography and gas sampling lines",
      "High-pressure hydraulic power packs and hydrogen fueling stations"
    ]
  },
  {
    id: 402,
    slug: "single-ferrule-fittings",
    title: "Single Ferrule Fittings",
    subcategory: "Single Ferrule Fittings",
    category: "Ferrule Fittings",
    parentSlug: "ferrule-fittings",
    image: "/images/products/subcategories/single-ferrule-fittings.jpg",
    shortDescription:
      "DIN 2353 & ISO 8434-1 Flareless Bite-Type Single Ferrule Compression Fittings across LL, L, and S series.",
    materialGroup: "Ferrule Fittings",
    standards: "DIN 2353, ISO 8434-1, DIN 3861",
    overview:
      "Single Ferrule Fittings (Bite-Type Fittings per DIN 2353) utilize a single cutting ring ferrule. During assembly, the cutting edge bites into the external wall of the hydraulic tube, creating an airtight mechanical interlock and deep pressure barrier. Divided into LL (Extra Light), L (Light - up to 315 bar), and S (Heavy - up to 630 bar) pressure series.",
    grades: [
      "Stainless Steel 316Ti / 316L",
      "Carbon Steel (Zinc-Nickel Plated)",
      "Brass"
    ],
    availableSizes: "4 mm to 42 mm Metric Tube Outer Diameter",
    wallThickness: "Pressure Series: LL (up to 100 bar), L (up to 315 bar), S (up to 630 bar)",
    manufacturingType: "Forged Body with CNC Precision 24° Conical Seat",
    connectionType: "24° Cone Bite-Type Compression Joint",
    surfaceFinish: "Zinc-Nickel CrVI-Free Corrosion Coating / Stainless Passivated",
    endConnection: "24° Cutting Ring Cone Port",
    technicalSpecs: {
      tubeSizes: "4 mm to 42 mm OD",
      pressureClasses: "LL Series (100 bar), L Series (315 bar), S Series (630 bar)",
      designStandards: "DIN 2353, ISO 8434-1"
    },
    standardsCompliance: [
      "DIN 2353, ISO 8434-1, DIN EN ISO 8434-1"
    ],
    industryApplications: [
      "Mobile hydraulic excavators, cranes, and heavy earthmoving equipment",
      "Hydraulic power packs, CNC machine tool lubrication lines",
      "Marine deck machinery and steering hydraulic circuits"
    ]
  },
  {
    id: 403,
    slug: "tube-unions",
    title: "Tube Unions",
    subcategory: "Tube Unions",
    category: "Ferrule Fittings",
    parentSlug: "ferrule-fittings",
    image: "/images/products/subcategories/tube-unions.jpg",
    shortDescription:
      "MSS SP-99 Straight Tube-to-Tube Compression Union Connectors for inline tubing joins.",
    materialGroup: "Ferrule Fittings",
    standards: "MSS SP-99, ASME B31.3",
    overview:
      "Tube Unions provide a high-pressure inline coupling joining two tubing segments of identical outer diameter. Featuring symmetrical double ferrule compression ports at both ends, they ensure full internal laminar flow without flow constriction.",
    grades: [
      "SS 316/316L",
      "SS 304",
      "Duplex 2205",
      "Monel 400",
      "Hastelloy C276"
    ],
    availableSizes: "1/8\" to 2\" OD (Fractional) / 3 mm to 38 mm OD (Metric)",
    wallThickness: "Operating Pressure: Up to 10,000 PSI",
    manufacturingType: "CNC Bar Machined with Micro-Finished Bore",
    connectionType: "Twin-Ferrule Compression",
    surfaceFinish: "Electro-Chemically Polished, Silver-Plated Nut Threads",
    endConnection: "Tube Compression x Tube Compression",
    technicalSpecs: {
      tubeOD: '1/8" to 2" OD / 3 mm to 38 mm',
      designStandards: "MSS SP-99, ASME B31.3"
    },
    standardsCompliance: [
      "MSS SP-99, ASTM A276, ASTM A479"
    ],
    industryApplications: [
      "Instrumentation impulse lines and sensor transmitter connections",
      "Gas chromatography, air distribution headers",
      "Offshore chemical injection skids"
    ]
  },
  {
    id: 404,
    slug: "union-elbows",
    title: "Union Elbows",
    subcategory: "Union Elbows",
    category: "Ferrule Fittings",
    parentSlug: "ferrule-fittings",
    image: "/images/products/subcategories/union-elbows.jpg",
    shortDescription:
      "MSS SP-99 90° Tube-to-Tube Compression Union Elbows for neat right-angle instrument tubing runs.",
    materialGroup: "Ferrule Fittings",
    standards: "MSS SP-99, ASME B31.3",
    overview:
      "Union Elbows join two tubes at a rigid 90° angle without requiring pipe bending tools. Engineered with precision machined 90° internal flow passageways, they ensure compact, vibration-resistant directional turns inside crowded instrument enclosures.",
    grades: [
      "SS 316/316L",
      "SS 304",
      "Duplex 2205",
      "Monel 400"
    ],
    availableSizes: "1/8\" to 1-1/2\" OD",
    wallThickness: "Pressure Rating: Up to 10,000 PSI",
    manufacturingType: "Forged Elbow Body Precision Machined",
    connectionType: "Twin-Ferrule Compression (Both Ends)",
    surfaceFinish: "Passivated, Silver Plated Nut",
    endConnection: "90° Tube x Tube",
    technicalSpecs: {
      angle: "90 Degrees",
      sizeRange: '1/8" to 1-1/2" OD',
      designStandards: "MSS SP-99"
    },
    standardsCompliance: [
      "MSS SP-99, ASTM A276"
    ],
    industryApplications: [
      "Control cabinet instrumentation manifolds",
      "Pressure gauge and differential pressure transmitter piping",
      "Hydraulic power unit tubing matrices"
    ]
  },
  {
    id: 405,
    slug: "union-tees",
    title: "Union Tees",
    subcategory: "Union Tees",
    category: "Ferrule Fittings",
    parentSlug: "ferrule-fittings",
    image: "/images/products/subcategories/union-tees.jpg",
    shortDescription:
      "MSS SP-99 3-Way Tube Union Tees for fluid division and impulse manifold branching.",
    materialGroup: "Ferrule Fittings",
    standards: "MSS SP-99, ASME B31.3",
    overview:
      "Union Tees feature three compression tube fitting connections at 90°, allowing a single tube supply to split into two separate instrument lines or combining dual flows into one main analytical header.",
    grades: [
      "SS 316/316L",
      "Duplex 2205",
      "Super Duplex 2507",
      "Monel 400"
    ],
    availableSizes: "1/8\" to 1-1/2\" OD",
    wallThickness: "Operating Pressure: Up to 10,000 PSI",
    manufacturingType: "Forged T-Body Precision Drilled",
    connectionType: "Twin-Ferrule Compression on all 3 Ports",
    surfaceFinish: "Silver-Plated Nut Threads, Passivated Body",
    endConnection: "Tube x Tube x Tube",
    technicalSpecs: {
      ports: "3 Identical Tube Compression Ports",
      designStandards: "MSS SP-99, ASME B31.3"
    },
    standardsCompliance: [
      "MSS SP-99, ASTM A276"
    ],
    industryApplications: [
      "Calibration gas manifold headers",
      "Pneumatic control air distribution lines",
      "Pressure transmitter equalization circuits"
    ]
  },
  {
    id: 406,
    slug: "male-connectors",
    title: "Male Connectors",
    subcategory: "Male Connectors",
    category: "Ferrule Fittings",
    parentSlug: "ferrule-fittings",
    image: "/images/products/subcategories/male-connectors.jpg",
    shortDescription:
      "MSS SP-99 Tube OD to Male NPT / BSPT / BSPP Threaded Transition Adapters.",
    materialGroup: "Ferrule Fittings",
    standards: "MSS SP-99, ASME B1.20.1 (NPT), ISO 7-1 (BSPT), ISO 228 (BSPP)",
    overview:
      "Male Connectors transition from compression instrumentation tubing to a male pipe thread (NPT, BSPT, or BSPP). Engineered with a hex body for secure wrenching, they connect tubing runs directly into female-threaded valve bodies, manifolds, and process vessel nozzles.",
    grades: [
      "SS 316/316L",
      "SS 304",
      "Duplex 2205",
      "Monel 400",
      "Hastelloy C276"
    ],
    availableSizes: "Tube OD 1/8\" to 1-1/2\" with Male Threads 1/8\" to 1-1/2\" NPT",
    wallThickness: "Pressure Rating: Up to 10,000 PSI",
    manufacturingType: "Single Bar Stock CNC Turned",
    connectionType: "Tube Compression x Male NPT/BSPT",
    surfaceFinish: "Electro-Polished Body, Silver Plated Nut",
    endConnection: "Compression Nut x Male Taper Thread",
    technicalSpecs: {
      tubeSizes: '1/8" to 1-1/2" OD',
      threadSizes: '1/8" to 1-1/2" NPT / BSPT / BSPP',
      designStandards: "MSS SP-99, ASME B1.20.1"
    },
    standardsCompliance: [
      "MSS SP-99, ASME B1.20.1, ASTM A276"
    ],
    industryApplications: [
      "Connecting impulse tubing to needle, ball, and manifold valves",
      "Pressure gauge and transmitter port connections",
      "Gas bottle regulator outlet tie-ins"
    ]
  },
  {
    id: 407,
    slug: "female-connectors",
    title: "Female Connectors",
    subcategory: "Female Connectors",
    category: "Ferrule Fittings",
    parentSlug: "ferrule-fittings",
    image: "/images/products/subcategories/female-connectors.jpg",
    shortDescription:
      "MSS SP-99 Tube OD to Female NPT / BSP Threaded Connectors for instrument transmitter stems.",
    materialGroup: "Ferrule Fittings",
    standards: "MSS SP-99, ASME B1.20.1, ISO 7-1",
    overview:
      "Female Connectors transition from instrumentation tubing to a female pipe thread (NPT, BSPT, or ISO). Ideal for connecting tubing runs to male-threaded pipe nipples, thermowells, or instrument transmitters.",
    grades: [
      "SS 316/316L",
      "SS 304",
      "Duplex 2205",
      "Monel 400"
    ],
    availableSizes: "Tube OD 1/8\" to 1\" with Female Threads 1/8\" to 1\" NPT",
    wallThickness: "Pressure Rating: Up to 10,000 PSI",
    manufacturingType: "Hex Bar CNC Machined",
    connectionType: "Tube Compression x Female Thread",
    surfaceFinish: "Passivated, Silver Plated Nut Threads",
    endConnection: "Compression x Female NPT",
    technicalSpecs: {
      tubeSizes: '1/8" to 1" OD',
      femaleThread: '1/8" to 1" NPT / BSP',
      designStandards: "MSS SP-99, ASME B1.20.1"
    },
    standardsCompliance: [
      "MSS SP-99, ASME B1.20.1, ASTM A276"
    ],
    industryApplications: [
      "Thermowell and sensor probe connections",
      "Flow meter differential pressure taps",
      "Sampling line tie-ins with external male thread stems"
    ]
  },
  {
    id: 408,
    slug: "tube-adapters",
    title: "Tube Adapters",
    subcategory: "Tube Adapters",
    category: "Ferrule Fittings",
    parentSlug: "ferrule-fittings",
    image: "/images/products/subcategories/tube-adapters.jpg",
    shortDescription:
      "MSS SP-99 Male & Female Tube Stub Adapters eliminating alignment binding in tight spaces.",
    materialGroup: "Ferrule Fittings",
    standards: "MSS SP-99, ASME B1.20.1",
    overview:
      "Tube Adapters feature a smooth machined tube stub at one end and a male or female pipe thread at the other. By inserting the stub into an existing compression fitting body and tightening the nut, engineers eliminate fitting rotational alignment binding and drastically reduce fitting inventory requirements.",
    grades: [
      "SS 316/316L",
      "SS 304",
      "Duplex 2205",
      "Monel 400"
    ],
    availableSizes: "1/4\" to 1\" Tube Stub OD with 1/8\" to 1\" NPT Threads",
    wallThickness: "Pressure Rating: Up to 10,000 PSI",
    manufacturingType: "Solid Bar CNC Turned",
    connectionType: "Smooth Tube Stub x Threaded Male/Female",
    surfaceFinish: "Precision Polished Stub End",
    endConnection: "Tube Stub x Threaded",
    technicalSpecs: {
      stubSizes: '1/4" to 1" OD',
      threadOptions: '1/8" to 1" NPT Male or Female',
      designStandards: "MSS SP-99"
    },
    standardsCompliance: [
      "MSS SP-99, ASTM A276"
    ],
    industryApplications: [
      "Eliminating alignment binding during manifold installation",
      "Compact cabinet connections where wrench clearance is restricted",
      "Modular valve hookups"
    ]
  },
  {
    id: 409,
    slug: "bulkhead-connectors",
    title: "Bulkhead Connectors",
    subcategory: "Bulkhead Connectors",
    category: "Ferrule Fittings",
    parentSlug: "ferrule-fittings",
    image: "/images/products/subcategories/bulkhead-connectors.jpg",
    shortDescription:
      "MSS SP-99 Panel-Mount Bulkhead Union Connectors for passing tubing through instrument enclosures.",
    materialGroup: "Ferrule Fittings",
    standards: "MSS SP-99, ASME B31.3",
    overview:
      "Bulkhead Connectors feature an extended threaded body equipped with a heavy locknut and washer. Engineered to pass high-pressure tubing through control panel walls, junction boxes, and ship bulkheads while providing complete structural rigidity and environmental vibration resistance.",
    grades: [
      "SS 316/316L",
      "SS 304",
      "Duplex 2205",
      "Monel 400"
    ],
    availableSizes: "1/8\" to 1\" Tube OD",
    wallThickness: "Panel Thickness Capability: Up to 25 mm (1\")",
    manufacturingType: "Extended Hex Body with Precision Bulkhead Threads",
    connectionType: "Tube Compression (Both Ends) with Bulkhead Locknut",
    surfaceFinish: "Passivated, Silver Plated Threads",
    endConnection: "Bulkhead Tube x Tube",
    technicalSpecs: {
      tubeOD: '1/8" to 1" OD',
      maxPanelThickness: 'Up to 1" (25.4 mm)',
      designStandards: "MSS SP-99"
    },
    standardsCompliance: [
      "MSS SP-99, ASTM A276"
    ],
    industryApplications: [
      "Control room analyzer house penetration panels",
      "Offshore skid control enclosure bulkheads",
      "Marine engine room instrumentation pass-throughs"
    ]
  },
  {
    id: 410,
    slug: "reducers",
    title: "Reducers",
    subcategory: "Reducers",
    category: "Ferrule Fittings",
    parentSlug: "ferrule-fittings",
    image: "/images/products/subcategories/reducers.jpg",
    shortDescription:
      "MSS SP-99 Compact Tube Reducers stepping down tubing lines directly inside fitting bodies.",
    materialGroup: "Ferrule Fittings",
    standards: "MSS SP-99, ASME B31.3",
    overview:
      "Tube Reducers (Reducing Adapters) feature a larger smooth tube stub at one end and a smaller compression fitting nut at the other, or reducing union bodies. They enable instantaneous stepping down of instrumentation line sizes without introducing bulky transition assemblies.",
    grades: [
      "SS 316/316L",
      "SS 304",
      "Duplex 2205",
      "Monel 400"
    ],
    availableSizes: "1/4\" x 1/8\" OD up to 1\" x 1/2\" OD",
    wallThickness: "Pressure Rating: Up to 10,000 PSI",
    manufacturingType: "CNC Machined Monolithic Bar",
    connectionType: "Tube Stub x Compression Nut",
    surfaceFinish: "Electro-Polished, Silver Plated Nut",
    endConnection: "Tube Stub x Smaller Tube Compression",
    technicalSpecs: {
      reductionRange: '1/4" x 1/8" OD to 1" x 1/2" OD',
      designStandards: "MSS SP-99"
    },
    standardsCompliance: [
      "MSS SP-99, ASTM A276"
    ],
    industryApplications: [
      "Stepping down high-flow sample lines to gas analyzer inputs",
      "Instrument air main branch line diameter reductions",
      "High-pressure hydraulic manifold step-downs"
    ]
  }
];

export const forgedSubcategories = [
  {
    id: 501,
    slug: "socket-weld-elbows",
    title: "Socket Weld Elbows",
    subcategory: "Socket Weld Elbows",
    category: "Forged Fittings",
    parentSlug: "forged-fittings",
    image: "/images/products/subcategories/socket-weld-elbows.jpg",
    shortDescription:
      "ASME B16.11 Class 3000, 6000 & 9000 Forged 90° and 45° Socket Weld Elbows for extreme pressure piping.",
    materialGroup: "Forged Fittings",
    standards: "ASME B16.11, BS 3799, MSS SP-79, MSS SP-83",
    overview:
      "Socket Weld Elbows (90° and 45°) are heavy forged fittings manufactured per ASME B16.11 to redirect high-pressure small-bore piping. The pipe end is inserted into a precision counterbored socket and welded with a fillet pass around the hub, offering superior strength and fatigue resistance compared to threaded joints.",
    grades: [
      "ASTM A105 / A105N",
      "ASTM A350 LF2",
      "ASTM A182 F304/304L",
      "ASTM A182 F316/316L",
      "ASTM A182 F321",
      "ASTM A182 F51 (2205)",
      "ASTM A182 F53 (2507)",
      "ASTM A182 F11",
      "ASTM A182 F22",
      "ASTM A182 F91"
    ],
    availableSizes: "1/8\" NB to 4\" NB (DN6 to DN100)",
    wallThickness: "Pressure Classes: Class 3000 (Sch 80), Class 6000 (Sch 160), Class 9000 (XXS)",
    manufacturingType: "Closed-Die Drop Forged & CNC Bored",
    connectionType: "Socket Weld with 1/16\" (1.6 mm) Thermal Gap",
    surfaceFinish: "Rust-Inhibiting Black Oil, Sand Blasted, Pickled & Passivated",
    endConnection: "Counterbored Socket per ASME B16.11",
    technicalSpecs: {
      nominalSize: '1/8" NB to 4" NB',
      pressureClasses: "3000#, 6000#, 9000#",
      angles: "90 Degree & 45 Degree",
      designStandards: "ASME B16.11, BS 3799"
    },
    standardsCompliance: [
      "ASME B16.11 — Forged Fittings, Socket-Welding and Threaded",
      "ASTM A105, ASTM A350, ASTM A182, NACE MR0175"
    ],
    industryApplications: [
      "High-pressure hydraulic power units and steam headers",
      "Chemical injection manifolds and boiler feed loops",
      "Nuclear power and offshore oil & gas processing"
    ]
  },
  {
    id: 502,
    slug: "socket-weld-tees",
    title: "Socket Weld Tees",
    subcategory: "Socket Weld Tees",
    category: "Forged Fittings",
    parentSlug: "forged-fittings",
    image: "/images/products/subcategories/socket-weld-tees.jpg",
    shortDescription:
      "ASME B16.11 Class 3000 & 6000 Equal and Reducing Forged Socket Weld Tees.",
    materialGroup: "Forged Fittings",
    standards: "ASME B16.11, BS 3799",
    overview:
      "Socket Weld Tees provide a 90° branch split in high-pressure small-bore lines. Available in straight (equal) and reducing configurations, their forged heavy body construction withstands severe fluid water-hammer shocks and cyclic pressure surges.",
    grades: [
      "ASTM A105N",
      "ASTM A350 LF2",
      "ASTM A182 F316L",
      "ASTM A182 F304L",
      "ASTM A182 F51",
      "ASTM A182 F11"
    ],
    availableSizes: "1/4\" NB to 4\" NB",
    wallThickness: "Pressure Classes: Class 3000, 6000, 9000",
    manufacturingType: "Forged Solid Steel Block CNC Bored",
    connectionType: "Socket Weld on all 3 ports",
    surfaceFinish: "Machined Black Oil, Passivated Stainless",
    endConnection: "Socket Weld Female Ports",
    technicalSpecs: {
      nominalSize: '1/4" NB to 4" NB',
      pressureRating: "Class 3000 / Class 6000",
      designStandards: "ASME B16.11, BS 3799"
    },
    standardsCompliance: [
      "ASME B16.11, ASTM A105, ASTM A182"
    ],
    industryApplications: [
      "High-pressure turbine lubrication systems",
      "Boiler blowdown and chemical injection branching",
      "Subsea control valve manifold skids"
    ]
  },
  {
    id: 503,
    slug: "socket-weld-couplings",
    title: "Socket Weld Couplings",
    subcategory: "Socket Weld Couplings",
    category: "Forged Fittings",
    parentSlug: "forged-fittings",
    image: "/images/products/subcategories/socket-weld-couplings.jpg",
    shortDescription:
      "ASME B16.11 Class 3000 & 6000 Full & Half Forged Socket Weld Couplings.",
    materialGroup: "Forged Fittings",
    standards: "ASME B16.11, BS 3799",
    overview:
      "Socket Weld Couplings are heavy cylindrical forged connectors. Full Couplings connect two small-bore pipe runs inline with an internal center stop shoulder, while Half Couplings feature one socket end and one beveled/straight end for welding directly onto tanks, headers, or vessel walls as branch nozzles.",
    grades: [
      "ASTM A105N",
      "ASTM A350 LF2",
      "ASTM A182 F304L/F316L",
      "Duplex F51"
    ],
    availableSizes: "1/8\" NB to 4\" NB",
    wallThickness: "Pressure Classes: Class 3000, 6000",
    manufacturingType: "Forged & Centerless Machined",
    connectionType: "Socket Weld (Full Coupling & Half Coupling)",
    surfaceFinish: "Anti-Rust Dipped, Passivated",
    endConnection: "Female Socket with Internal Stop Shoulder",
    technicalSpecs: {
      types: "Full Coupling & Half Coupling",
      sizeRange: '1/8" NB to 4" NB',
      designStandards: "ASME B16.11"
    },
    standardsCompliance: [
      "ASME B16.11, ASTM A105, ASTM A182"
    ],
    industryApplications: [
      "Connecting small-bore pipe spools inline",
      "Header take-offs and vessel nozzle welding (Half Coupling)",
      "Hydraulic cylinder port connections"
    ]
  },
  {
    id: 504,
    slug: "socket-weld-unions",
    title: "Socket Weld Unions",
    subcategory: "Socket Weld Unions",
    category: "Forged Fittings",
    parentSlug: "forged-fittings",
    image: "/images/products/subcategories/socket-weld-unions.jpg",
    shortDescription:
      "MSS SP-83 Class 3000 & 6000 3-Piece Ground Joint Forged Socket Weld Unions.",
    materialGroup: "Forged Fittings",
    standards: "MSS SP-83, ASME B16.11",
    overview:
      "Socket Weld Unions are three-piece assemblies comprising a male tailpiece, a female tailpiece, and a heavy threaded union nut. Featuring a precision ground ball-and-cone metal-to-metal seating face (or integral O-ring), they allow rapid piping disassembly for valve maintenance without cutting the line.",
    grades: [
      "ASTM A105N",
      "ASTM A350 LF2",
      "ASTM A182 F316L",
      "ASTM A182 F304L"
    ],
    availableSizes: "1/8\" NB to 3\" NB",
    wallThickness: "Pressure Classes: Class 3000 (3000 PSI), Class 6000",
    manufacturingType: "Drop Forged 3-Piece Assembly with Ground Seat",
    connectionType: "Socket Weld Tailpieces with Threaded Union Nut",
    surfaceFinish: "Machined Oil Dipped, Stainless Passivated",
    endConnection: "Socket Weld Ends with Metal-to-Metal Seat",
    technicalSpecs: {
      nominalSize: '1/8" NB to 3" NB',
      seating: "Ground Ball & Cone Metal-to-Metal Seat (Bronze-to-Steel or SS-to-SS)",
      designStandards: "MSS SP-83, ASME B16.11"
    },
    standardsCompliance: [
      "MSS SP-83, ASME B16.11, ASTM A105"
    ],
    industryApplications: [
      "Pump and meter skid connections requiring frequent servicing",
      "Steam trap stations and regulator valve bypasses",
      "Compressor oil and cooling loops"
    ]
  },
  {
    id: 505,
    slug: "threaded-elbows",
    title: "Threaded Elbows",
    subcategory: "Threaded Elbows",
    category: "Forged Fittings",
    parentSlug: "forged-fittings",
    image: "/images/products/subcategories/threaded-elbows.jpg",
    shortDescription:
      "ASME B16.11 Class 2000, 3000 & 6000 Forged 90° & 45° Screwed NPT Elbows.",
    materialGroup: "Forged Fittings",
    standards: "ASME B16.11, BS 3799, ASME B1.20.1",
    overview:
      "Threaded Elbows feature heavy forged bodies with precision female NPT or BSPT internal taper pipe threads at 90° or 45°. Engineered for cold installation in high-pressure gas, fuel, and chemical systems where hot work welding is prohibited.",
    grades: [
      "ASTM A105N",
      "ASTM A350 LF2",
      "ASTM A182 F316L",
      "ASTM A182 F304L",
      "Duplex F51"
    ],
    availableSizes: "1/8\" NB to 4\" NB",
    wallThickness: "Pressure Classes: Class 2000, Class 3000, Class 6000",
    manufacturingType: "Drop Forged Blank CNC Single-Point Threaded",
    connectionType: "Female Taper Thread (NPT / BSPT / BSPP)",
    surfaceFinish: "Black Phosphate, Zinc Plated, Passivated",
    endConnection: "Internal NPT per ASME B1.20.1",
    technicalSpecs: {
      nominalSize: '1/8" NB to 4" NB',
      threadStandard: "ASME B1.20.1 NPT / ISO 7-1",
      pressureClasses: "2000#, 3000#, 6000#",
      designStandards: "ASME B16.11, BS 3799"
    },
    standardsCompliance: [
      "ASME B16.11, ASME B1.20.1, ASTM A105, ASTM A182"
    ],
    industryApplications: [
      "Refinery areas where hot work permits cannot be issued",
      "Natural gas distribution, fuel oil skids, and nitrogen lines",
      "High-pressure hydraulic testing panels"
    ]
  },
  {
    id: 506,
    slug: "threaded-tees",
    title: "Threaded Tees",
    subcategory: "Threaded Tees",
    category: "Forged Fittings",
    parentSlug: "forged-fittings",
    image: "/images/products/subcategories/threaded-tees.jpg",
    shortDescription:
      "ASME B16.11 Class 2000, 3000 & 6000 Equal & Reducing Screwed NPT Tees.",
    materialGroup: "Forged Fittings",
    standards: "ASME B16.11, BS 3799, ASME B1.20.1",
    overview:
      "Threaded Tees provide a 90° branch split in high-pressure screwed piping systems. Featuring thick forged crotches, they withstand heavy piping torque and high internal working pressures up to 6000 PSI.",
    grades: [
      "ASTM A105N",
      "ASTM A350 LF2",
      "ASTM A182 F316L",
      "ASTM A182 F304L"
    ],
    availableSizes: "1/8\" NB to 4\" NB",
    wallThickness: "Pressure Classes: Class 2000, 3000, 6000",
    manufacturingType: "Forged Block Precision CNC Tapped",
    connectionType: "Female NPT Threads on all 3 Ports",
    surfaceFinish: "Black Oil, Zinc Coated, Passivated",
    endConnection: "Internal Threaded NPT",
    technicalSpecs: {
      nominalSize: '1/8" NB to 4" NB',
      pressureRating: "Class 2000 / 3000 / 6000",
      designStandards: "ASME B16.11"
    },
    standardsCompliance: [
      "ASME B16.11, ASME B1.20.1, ASTM A105"
    ],
    industryApplications: [
      "Compressed air headers and fuel supply piping",
      "Instrument air distribution manifold networks",
      "Chemical injection skid take-offs"
    ]
  },
  {
    id: 507,
    slug: "threaded-couplings",
    title: "Threaded Couplings",
    subcategory: "Threaded Couplings",
    category: "Forged Fittings",
    parentSlug: "forged-fittings",
    image: "/images/products/subcategories/threaded-couplings.jpg",
    shortDescription:
      "ASME B16.11 Class 3000 & 6000 Full, Half and Reducing Screwed NPT Couplings.",
    materialGroup: "Forged Fittings",
    standards: "ASME B16.11, BS 3799, ASME B1.20.1",
    overview:
      "Threaded Couplings (Full Couplings and Half Couplings) join two male-threaded pipe segments inline or weld to tanks as female threaded instrument ports. Formed from heavy solid forgings to resist high hoop stress.",
    grades: [
      "ASTM A105N",
      "ASTM A350 LF2",
      "ASTM A182 F316L",
      "ASTM A182 F304L"
    ],
    availableSizes: "1/8\" NB to 4\" NB",
    wallThickness: "Pressure Classes: Class 3000, Class 6000",
    manufacturingType: "Forged Bar Turned & Tapped",
    connectionType: "Female NPT Threads",
    surfaceFinish: "Machined Oil Dipped, Passivated",
    endConnection: "Internal NPT",
    technicalSpecs: {
      types: "Full Coupling, Half Coupling, Reducing Coupling",
      sizeRange: '1/8" NB to 4" NB',
      designStandards: "ASME B16.11"
    },
    standardsCompliance: [
      "ASME B16.11, ASME B1.20.1, ASTM A105"
    ],
    industryApplications: [
      "Inline pipe joining in explosive plant zones",
      "Vessel shell instrumentation ports (Half Couplings)",
      "High-pressure hydraulic gauge couplings"
    ]
  },
  {
    id: 508,
    slug: "threaded-plugs",
    title: "Threaded Plugs",
    subcategory: "Threaded Plugs",
    category: "Forged Fittings",
    parentSlug: "forged-fittings",
    image: "/images/products/subcategories/threaded-plugs.jpg",
    shortDescription:
      "ASME B16.11 Hex Head, Square Head & Round Threaded Plugs for pressure port isolation.",
    materialGroup: "Forged Fittings",
    standards: "ASME B16.11, BS 3799, ASME B1.20.1",
    overview:
      "Threaded Plugs feature precision external male taper NPT threads designed to seal unused female threaded manifold ports, valve drain taps, and pressure test openings. Available in Hex Head (for open-ended wrenching), Square Head (for heavy socket torque), and Round Head styles.",
    grades: [
      "ASTM A105N",
      "ASTM A350 LF2",
      "ASTM A182 F316L",
      "ASTM A182 F304L",
      "Duplex 2205",
      "Monel 400"
    ],
    availableSizes: "1/8\" NB to 4\" NB NPT",
    wallThickness: "Pressure Classes: Class 3000, 6000",
    manufacturingType: "Hexagonal Forged Bar Precision Thread Chased",
    connectionType: "Male NPT Thread",
    surfaceFinish: "Zinc Plated, Black Phosphate, Passivated",
    endConnection: "External NPT Thread",
    technicalSpecs: {
      headStyles: "Hex Head, Square Head, Round Head",
      sizeRange: '1/8" to 4" NPT',
      designStandards: "ASME B16.11"
    },
    standardsCompliance: [
      "ASME B16.11, ASME B1.20.1, ASTM A105"
    ],
    industryApplications: [
      "Sealing valve body drain and bypass ports",
      "Closing manifold test ports and sensor tapping points",
      "Equipment maintenance shut-off plugs"
    ]
  },
  {
    id: 509,
    slug: "threaded-bushings",
    title: "Threaded Bushings",
    subcategory: "Threaded Bushings",
    category: "Forged Fittings",
    parentSlug: "forged-fittings",
    image: "/images/products/subcategories/threaded-bushings.jpg",
    shortDescription:
      "ASME B16.11 Hex Head Reducing Bushings for compact male-to-female threaded size step-downs.",
    materialGroup: "Forged Fittings",
    standards: "ASME B16.11, BS 3799, ASME B1.20.1",
    overview:
      "Hex Head Threaded Bushings feature a larger male external thread on the outside and a smaller coaxial female thread on the inside, with a heavy hex wrench shoulder. They provide the most compact method of reducing line size at a threaded port without extending axial length.",
    grades: [
      "ASTM A105N",
      "ASTM A350 LF2",
      "ASTM A182 F316L",
      "ASTM A182 F304L"
    ],
    availableSizes: "Male 1/4\" to 4\" NPT with Female 1/8\" to 3\" NPT",
    wallThickness: "Pressure Classes: Class 3000, 6000",
    manufacturingType: "Forged Hexagon Bar Machined Coaxially",
    connectionType: "Male NPT Outside x Female NPT Inside",
    surfaceFinish: "Machined Oil Dipped, Passivated",
    endConnection: "Male NPT x Female NPT",
    technicalSpecs: {
      maleSizes: '1/4" to 4" NPT',
      femaleSizes: '1/8" to 3" NPT',
      designStandards: "ASME B16.11"
    },
    standardsCompliance: [
      "ASME B16.11, ASME B1.20.1, ASTM A105"
    ],
    industryApplications: [
      "Stepping down valve ports for smaller pressure gauge stems",
      "Instrumentation panel threaded line reductions",
      "Pump casing drain port reductions"
    ]
  },
  {
    id: 510,
    slug: "pipe-nipples",
    title: "Pipe Nipples",
    subcategory: "Pipe Nipples",
    category: "Forged Fittings",
    parentSlug: "forged-fittings",
    image: "/images/products/subcategories/pipe-nipples.jpg",
    shortDescription:
      "ASME B16.11, MSS SP-95 & ASTM A733 Hex, Swage and Barrel Pipe Nipples.",
    materialGroup: "Forged Fittings",
    standards: "ASME B16.11, MSS SP-95, ASTM A733, BS 3799",
    overview:
      "Pipe Nipples are short tubular or forged connectors with external threads at both ends. Available as Hexagon Nipples (with central hex wrenching flat), Barrel Nipples (cut from heavy pipe with threaded ends), and Swage Nipples (concentric/eccentric transitions per MSS SP-95).",
    grades: [
      "ASTM A105",
      "ASTM A350 LF2",
      "ASTM A182 F316L",
      "ASTM A182 F304L",
      "Duplex 2205",
      "ASTM A106 Gr. B"
    ],
    availableSizes: "1/8\" NB to 4\" NB, Lengths from Close (1\") up to 12\" (300 mm)",
    wallThickness: "Schedules: SCH 80, SCH 160, XXS / Class 3000, 6000",
    manufacturingType: "Hex Bar CNC Threaded / Heavy Pipe Machined / Forged Swage",
    connectionType: "Male NPT x Male NPT (Plain or Beveled also available on Swages)",
    surfaceFinish: "Zinc Plated, Black Oxide, Passivated",
    endConnection: "Male Threaded NPT / BSPT / Plain End",
    technicalSpecs: {
      types: "Hex Nipples, Barrel Nipples, Concentric Swage Nipples, Eccentric Swages",
      sizeRange: '1/8" NB to 4" NB',
      lengths: 'Close, Short, 2", 3", 4", 6", Custom up to 12"',
      designStandards: "ASME B16.11, MSS SP-95, ASTM A733"
    },
    standardsCompliance: [
      "ASME B16.11, MSS SP-95, ASTM A733, ASTM A105"
    ],
    industryApplications: [
      "Connecting two female threaded valves or fittings inline",
      "Instrument manifold take-offs and gauge cocks",
      "Pressure vessel drain nipples"
    ]
  }
];

export const allSubcategoriesMap = new Map();

[
  ...buttweldSubcategories,
  ...flangesSubcategories,
  ...fastenersSubcategories,
  ...ferruleSubcategories,
  ...forgedSubcategories
].forEach((item) => {
  if (!item.name) item.name = item.title;
  allSubcategoriesMap.set(item.slug.toLowerCase(), item);
});

export function getSubcategoryBySlug(slug) {
  if (!slug) return null;
  const clean = slug.trim().toLowerCase().replace(/-manufacture-in-india$/, "").replace(/buttweld/g, "butt-weld");
  return allSubcategoriesMap.get(clean) || null;
}
