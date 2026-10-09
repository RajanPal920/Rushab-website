// src/data/flangeTypesData.js
// Verified Engineering Database for Rishabh Metal Industries
// Compliant with ASME B16.5, ASME B16.47, ASME B16.36, DIN EN 1092-1, MSS SP-44, ASTM Standards

export const flangeTypesDatabase = [
  {
    id: "weld-neck",
    slug: "weld-neck-flanges",
    aliases: ["weld-neck", "wn-flange", "weldneck", "weldneck-flange", "welding-neck"],
    name: "Weld Neck Flanges",
    diagramName: "WELD NECK",
    code: "WN",
    shortDescription: "High-integrity butt-welded flanges with a tapered hub for severe cyclic, high-pressure, and thermal gradient piping systems.",
    image: "/images/products/flanges/weld-neck.jpg",
    heroImage: "/images/products/flanges/weld-neck.jpg",
    overview:
      "Weld Neck Flanges (WN) are engineered with a long, tapered reinforced hub that provides an optimal transition of mechanical stress from the flange body into the attached pipeline. Butt-welded directly to matching pipe schedule, weld neck flanges eliminate abrupt stress risers and turbulent flow. They are universally specified for critical high-pressure and extreme-temperature services in oil & gas exploration, petrochemical processing, steam power stations, and subsea pipelines.",
    workingPrinciple:
      "The tapered hub of the weld neck flange is machined to match the exact inside diameter (schedule) of the mating pipe. By butt-welding the pipe and flange neck with a full-penetration weld, mechanical stresses caused by internal pressure, bending moments, and thermal expansion are smoothly transmitted through the hub taper into the pipe wall, minimizing stress concentrations at the gasket face and flange neck.",
    designCharacteristics: [
      "Long tapered hub for gradual stress transfer to the pipe wall",
      "Bore precisely machined to match the mating pipe inside diameter (SCH 10 to XXS)",
      "Full penetration butt-weld connection allowing 100% radiographic examination (RT)",
      "Superior resistance to dishing, high bending moments, and cyclic thermal stress",
      "Standardized bolt circle and gasket facing geometry per ASME B16.5 & B16.47"
    ],
    standards: "ASME B16.5, ASME B16.47 Series A & B, DIN EN 1092-1 Type 11, MSS SP-44, API 6A",
    pressureClasses: "Class 150, Class 300, Class 600, Class 900, Class 1500, Class 2500 / PN 10 to PN 420",
    sizeRange: "1/2\" NB (DN15) to 60\" NB (DN1500)",
    facingTypes: "Raised Face (RF), Flat Face (FF), Ring Type Joint (RTJ), Tongue & Groove (T&G)",
    advantages: [
      "Exceptional mechanical strength under high internal pressure and temperature shock",
      "Smooth internal bore prevents erosion and minimizes process pressure drop",
      "Allows complete non-destructive volumetric examination (Radiography / Ultrasonic)",
      "Highest fatigue life endurance of any ASME flange configuration"
    ],
    limitations: [
      "Requires precise bevel alignment and full penetration circumferential butt-welding",
      "Higher initial forging and machining cost compared to slip-on flanges",
      "Requires additional installation clearance due to hub length"
    ],
    typicalApplications: [
      "High-pressure steam headers and superheater bypass lines in power generation",
      "Hydrocarbon transport lines, riser tie-ins, and subsea manifold systems",
      "Severe chemical process reactors operating at elevated temperatures and pressures",
      "Sour gas (H2S) processing systems compliant with NACE MR0175 / ISO 15156"
    ],
    manufacturingOptions: [
      "Closed-die and open-die forgings heat-treated per ASTM standards",
      "Precision CNC machined gasket finishes (serrated concentric or spiral finish)",
      "Solution annealed, normalized, or quenched and tempered per alloy grade"
    ],
    dimensionsTable: [
      { nps: "1/2\"", od: "89 mm (3.50\")", thk: "11.1 mm (0.44\")", bcd: "60.3 mm (2.38\")", holes: "4 x 16 mm", raisedFaceDia: "34.9 mm" },
      { nps: "3/4\"", od: "98 mm (3.88\")", thk: "12.7 mm (0.50\")", bcd: "69.8 mm (2.75\")", holes: "4 x 16 mm", raisedFaceDia: "42.9 mm" },
      { nps: "1\"", od: "108 mm (4.25\")", thk: "14.3 mm (0.56\")", bcd: "79.4 mm (3.12\")", holes: "4 x 16 mm", raisedFaceDia: "50.8 mm" },
      { nps: "1-1/2\"", od: "127 mm (5.00\")", thk: "17.5 mm (0.69\")", bcd: "98.4 mm (3.88\")", holes: "4 x 16 mm", raisedFaceDia: "73.0 mm" },
      { nps: "2\"", od: "152 mm (6.00\")", thk: "19.1 mm (0.75\")", bcd: "120.6 mm (4.75\")", holes: "4 x 19 mm", raisedFaceDia: "92.1 mm" },
      { nps: "3\"", od: "190 mm (7.50\")", thk: "23.8 mm (0.94\")", bcd: "152.4 mm (6.00\")", holes: "4 x 19 mm", raisedFaceDia: "127.0 mm" },
      { nps: "4\"", od: "229 mm (9.00\")", thk: "23.8 mm (0.94\")", bcd: "190.5 mm (7.50\")", holes: "8 x 19 mm", raisedFaceDia: "157.2 mm" },
      { nps: "6\"", od: "279 mm (11.00\")", thk: "25.4 mm (1.00\")", bcd: "241.3 mm (9.50\")", holes: "8 x 22 mm", raisedFaceDia: "215.9 mm" },
      { nps: "8\"", od: "343 mm (13.50\")", thk: "28.6 mm (1.12\")", bcd: "298.4 mm (11.75\")", holes: "8 x 22 mm", raisedFaceDia: "269.9 mm" },
      { nps: "10\"", od: "406 mm (16.00\")", thk: "30.2 mm (1.19\")", bcd: "362.0 mm (14.25\")", holes: "12 x 25 mm", raisedFaceDia: "323.8 mm" },
      { nps: "12\"", od: "483 mm (19.00\")", thk: "31.8 mm (1.25\")", bcd: "431.8 mm (17.00\")", holes: "12 x 25 mm", raisedFaceDia: "381.0 mm" }
    ],
    materials: [
      {
        materialGroup: "Carbon Steel",
        slug: "carbon-steel",
        grades: ["ASTM A105", "ASTM A350 LF2", "ASTM A694 F42-F70"],
        highlights: "Certified for ambient, elevated, and low-temperature (-46°C) pressure pipeline systems."
      },
      {
        materialGroup: "Stainless Steel",
        slug: "stainless-steel",
        grades: ["ASTM A182 F304/304L", "F316/316L", "F321", "F347", "F904L"],
        highlights: "Outstanding general and intergranular corrosion resistance in marine, chemical, and sanitary duties."
      },
      {
        materialGroup: "Duplex Steel",
        slug: "duplex-steel",
        grades: ["ASTM A182 F51 (2205)", "ASTM A182 F60"],
        highlights: "Double yield strength of austenitic SS with PREN ≥ 35 for aggressive chloride and sour service."
      },
      {
        materialGroup: "Super Duplex Steel",
        slug: "super-duplex-steel",
        grades: ["ASTM A182 F53 (2507)", "ASTM A182 F55 (Zeron 100)"],
        highlights: "PREN ≥ 42, engineered for deepwater offshore manifolds, subsea flowlines, and SWRO desalination."
      },
      {
        materialGroup: "Alloy Steel",
        slug: "alloy-steel",
        grades: ["ASTM A182 F11", "ASTM A182 F22", "ASTM A182 F91"],
        highlights: "Chrome-moly alloys providing creep rupture resistance at steam temperatures up to 600°C."
      },
      {
        materialGroup: "Nickel Alloys",
        slug: "nickel-alloy",
        grades: ["Inconel 625", "Monel 400", "Hastelloy C276"],
        highlights: "Extreme resistance to boiling organic acids, wet chlorine, hydrofluoric acid, and severe pitting."
      }
    ]
  },
  {
    id: "slip-on",
    slug: "slip-on-flanges",
    aliases: ["slip-on", "so-flange", "slipon", "slip-on-flange"],
    name: "Slip-On Flanges",
    diagramName: "SLIP ON",
    code: "SO",
    shortDescription: "Cost-effective, easily aligned pipe flanges fitted over pipe outer diameter and secured with dual fillet welds.",
    image: "/images/products/flanges/slip-on.jpg",
    heroImage: "/images/products/flanges/slip-on.jpg",
    overview:
      "Slip-On Flanges (SO) feature an inside diameter slightly larger than the outside diameter of the pipe. The pipe is slipped inside the flange bore until positioned approximately 1/4\" from the flange face, whereupon it is secured by two fillet welds — one at the back hub and one at the inner flange face. Due to their simple assembly and reduced cutting precision requirements, slip-on flanges are one of the most widely used industrial flanges for moderate pressure systems.",
    workingPrinciple:
      "The pipe outer diameter fits snugly into the bore of the slip-on flange. Dual fillet welds seal the joint against fluid leakage and transmit mechanical forces. While its fatigue strength under cyclic loading is approximately one-third that of a weld neck flange, its static burst pressure strength is comparable, making it an economical solution where extreme cyclic bending stresses are absent.",
    designCharacteristics: [
      "Bore slightly oversized relative to pipe outer diameter for quick sliding alignment",
      "Low hub design that saves installation space compared to weld neck flanges",
      "Welded internally and externally using two fillet welds",
      "Facilitates easy rotational bolt hole alignment before welding",
      "Compatible with ASME B16.5 standard gasket facings"
    ],
    standards: "ASME B16.5, DIN EN 1092-1 Type 12, BS 4504, JIS B2220",
    pressureClasses: "Class 150, Class 300, Class 600, Class 900, Class 1500 / PN 6 to PN 160",
    sizeRange: "1/2\" NB (DN15) to 48\" NB (DN1200)",
    facingTypes: "Raised Face (RF), Flat Face (FF)",
    advantages: [
      "Substantially lower material forging and procurement cost",
      "Easier pipe alignment and less rigorous pipe cutting length tolerance",
      "Dual fillet weld provides double sealing containment against leakage",
      "Compact hub profile requires less axial installation clearance"
    ],
    limitations: [
      "Requires two separate fillet welds, which cannot be radiographically examined easily",
      "Fatigue resistance is approximately one-third of a butt-welded weld neck flange",
      "Not recommended for severe cyclic temperature shocks or lethal fluid service"
    ],
    typicalApplications: [
      "Cooling water circulating lines and municipal water distribution",
      "Compressed air headers and low-pressure fuel gas manifolds",
      "Fire protection sprinkler systems and utility piping skids",
      "Non-critical chemical process lines operating at moderate pressures"
    ],
    manufacturingOptions: [
      "Forged steel blanks precision CNC machined with smooth or stock serrations",
      "Carbon steel, stainless steel, and non-ferrous alloy fabrications"
    ],
    dimensionsTable: [
      { nps: "1/2\"", od: "89 mm (3.50\")", thk: "11.1 mm (0.44\")", bcd: "60.3 mm (2.38\")", holes: "4 x 16 mm", raisedFaceDia: "34.9 mm" },
      { nps: "1\"", od: "108 mm (4.25\")", thk: "14.3 mm (0.56\")", bcd: "79.4 mm (3.12\")", holes: "4 x 16 mm", raisedFaceDia: "50.8 mm" },
      { nps: "2\"", od: "152 mm (6.00\")", thk: "19.1 mm (0.75\")", bcd: "120.6 mm (4.75\")", holes: "4 x 19 mm", raisedFaceDia: "92.1 mm" },
      { nps: "3\"", od: "190 mm (7.50\")", thk: "23.8 mm (0.94\")", bcd: "152.4 mm (6.00\")", holes: "4 x 19 mm", raisedFaceDia: "127.0 mm" },
      { nps: "4\"", od: "229 mm (9.00\")", thk: "23.8 mm (0.94\")", bcd: "190.5 mm (7.50\")", holes: "8 x 19 mm", raisedFaceDia: "157.2 mm" },
      { nps: "6\"", od: "279 mm (11.00\")", thk: "25.4 mm (1.00\")", bcd: "241.3 mm (9.50\")", holes: "8 x 22 mm", raisedFaceDia: "215.9 mm" },
      { nps: "8\"", od: "343 mm (13.50\")", thk: "28.6 mm (1.12\")", bcd: "298.4 mm (11.75\")", holes: "8 x 22 mm", raisedFaceDia: "269.9 mm" }
    ],
    materials: [
      {
        materialGroup: "Carbon Steel",
        slug: "carbon-steel",
        grades: ["ASTM A105", "ASTM A350 LF2"],
        highlights: "General industrial and utility utility piping up to 400°C."
      },
      {
        materialGroup: "Stainless Steel",
        slug: "stainless-steel",
        grades: ["ASTM A182 F304/304L", "F316/316L"],
        highlights: "Chemical processing, pharmaceutical water lines, and food grade lines."
      },
      {
        materialGroup: "Duplex Steel",
        slug: "duplex-steel",
        grades: ["ASTM A182 F51"],
        highlights: "Seawater cooling loops and moderate pressure desalination headers."
      }
    ]
  },
  {
    id: "blind-flange",
    slug: "blind-flanges",
    aliases: ["blind", "blind-flange", "bl-flange", "blank-flange"],
    name: "Blind Flanges",
    diagramName: "BLIND FLANGE",
    code: "BL",
    shortDescription: "Solid circular forged discs used to seal the ends of piping manifolds, valves, and pressure vessel nozzle openings.",
    image: "/images/products/flanges/blind-flange.jpg",
    heroImage: "/images/products/flanges/blind-flange.jpg",
    overview:
      "Blind Flanges (BL) are solid forged disks manufactured without a central bore. Featuring the same bolt hole circle, diameter, and gasket facing as mating flanges, blind flanges are bolted to the end of a piping run to terminate fluid flow or seal pressure vessel inspection openings. Because maximum bending stress occurs at the center of the blind plate, blind flanges are designed with heavier center section thickness to resist hydrostatic pressure forces.",
    workingPrinciple:
      "When bolted to an open pipe flange, the solid face of the blind flange arrests process flow and contains line pressure. The bolting forces compress the gasket between the mating flange faces to establish a leak-tight seal. In high-pressure testing, blind flanges can be machined with central NPT ports for pressure gauge attachment or hydrostatic test vent lines.",
    designCharacteristics: [
      "Solid forging without center bore, engineered to absorb maximum center bending stress",
      "Same bolt pattern, outer diameter, and raised face as mating ASME flanges",
      "Available with custom tapped NPT vent or drain openings upon specification",
      "Designed per ASME Boiler and Pressure Vessel Code (BPVC) stress formulas"
    ],
    standards: "ASME B16.5, ASME B16.47 Series A & B, DIN EN 1092-1 Type 05, MSS SP-44",
    pressureClasses: "Class 150, Class 300, Class 600, Class 900, Class 1500, Class 2500 / PN 6 to PN 400",
    sizeRange: "1/2\" NB (DN15) to 60\" NB (DN1500)",
    facingTypes: "Raised Face (RF), Flat Face (FF), Ring Type Joint (RTJ)",
    advantages: [
      "Simple, dependable method for piping line isolation and shutdown",
      "Permits rapid removal for pipeline pigging, line cleaning, or future expansion",
      "Withstands highest hydrostatic pressure test loads",
      "Available with tapped test ports for pressure monitoring"
    ],
    limitations: [
      "High weight in large diameters requiring mechanical lifting tackle",
      "Subject to severe central bending moments under Class 1500 and 2500 ratings"
    ],
    typicalApplications: [
      "Piping system termination and future line expansion spurs",
      "Hydrostatic pressure testing manifolds and line certification",
      "Pressure vessel inspection manways, handholes, and cleanout ports",
      "Maintenance isolation of pump suction/discharge headers"
    ],
    manufacturingOptions: [
      "Forged and proof-machined from solid ASTM specification billets",
      "Available with CNC tapped gauge connection ports (1/2\" to 2\" NPT)"
    ],
    dimensionsTable: [
      { nps: "1/2\"", od: "89 mm (3.50\")", thk: "11.1 mm (0.44\")", bcd: "60.3 mm (2.38\")", holes: "4 x 16 mm", raisedFaceDia: "34.9 mm" },
      { nps: "1\"", od: "108 mm (4.25\")", thk: "14.3 mm (0.56\")", bcd: "79.4 mm (3.12\")", holes: "4 x 16 mm", raisedFaceDia: "50.8 mm" },
      { nps: "2\"", od: "152 mm (6.00\")", thk: "19.1 mm (0.75\")", bcd: "120.6 mm (4.75\")", holes: "4 x 19 mm", raisedFaceDia: "92.1 mm" },
      { nps: "3\"", od: "190 mm (7.50\")", thk: "23.8 mm (0.94\")", bcd: "152.4 mm (6.00\")", holes: "4 x 19 mm", raisedFaceDia: "127.0 mm" },
      { nps: "4\"", od: "229 mm (9.00\")", thk: "23.8 mm (0.94\")", bcd: "190.5 mm (7.50\")", holes: "8 x 19 mm", raisedFaceDia: "157.2 mm" },
      { nps: "6\"", od: "279 mm (11.00\")", thk: "25.4 mm (1.00\")", bcd: "241.3 mm (9.50\")", holes: "8 x 22 mm", raisedFaceDia: "215.9 mm" },
      { nps: "8\"", od: "343 mm (13.50\")", thk: "28.6 mm (1.12\")", bcd: "298.4 mm (11.75\")", holes: "8 x 22 mm", raisedFaceDia: "269.9 mm" }
    ],
    materials: [
      {
        materialGroup: "Carbon Steel",
        slug: "carbon-steel",
        grades: ["ASTM A105", "ASTM A350 LF2"],
        highlights: "Header closures and refinery pipeline terminal blocks."
      },
      {
        materialGroup: "Stainless Steel",
        slug: "stainless-steel",
        grades: ["ASTM A182 F304/304L", "F316/316L", "F321"],
        highlights: "Corrosive chemical vessel manways and food plant cleanouts."
      },
      {
        materialGroup: "Duplex Steel",
        slug: "duplex-steel",
        grades: ["ASTM A182 F51 (2205)", "F53 (2507)"],
        highlights: "Offshore seawater systems and chloride brine isolation."
      }
    ]
  },
  {
    id: "threaded",
    slug: "threaded-flanges",
    aliases: ["threaded", "threaded-flange", "screwed-flange", "screwed"],
    name: "Threaded Flanges",
    diagramName: "THREADED",
    code: "THD",
    shortDescription: "Non-welded threaded flanges connected to externally threaded pipes, ideal for explosive and hazardous areas.",
    image: "/images/products/flanges/threaded.jpg",
    heroImage: "/images/products/flanges/threaded.jpg",
    overview:
      "Threaded Flanges (also referred to as Screwed Flanges) feature internal female pipe threads machined into the bore conforming to ASME B1.20.1 (NPT) or ISO 7-1 (BSPT). The flange is assembled onto externally threaded pipe without hot work welding. This makes threaded flanges indispensable in oil refineries, chemical depots, and gas handling facilities where open flame welding is strictly prohibited due to explosion hazards.",
    workingPrinciple:
      "Threaded flanges engage the matching external taper threads of the pipe. As the joint is torqued, thread interference creates structural cohesion and initial sealing. Thread sealants or PTFE compounds are applied, and in non-hazardous maintenance areas, a fillet seal weld can be applied at the pipe-flange junction to prevent thread leak path development.",
    designCharacteristics: [
      "Precision NPT (National Pipe Taper) or BSPT internal threads",
      "No welding required for installation — cold assembly prevents metallurgy heat-affected zone (HAZ) damage",
      "Available with standard hub for enhanced mechanical rigidity",
      "May be seal-welded if process conditions require zero-leak containment"
    ],
    standards: "ASME B16.5, ASME B1.20.1, BS 21, DIN 2999",
    pressureClasses: "Class 150, Class 300, Class 600, Class 900, Class 1500 / PN 6 to PN 160",
    sizeRange: "1/2\" NB (DN15) to 6\" NB (DN150) (Recommended up to 4\" NB)",
    facingTypes: "Raised Face (RF), Flat Face (FF)",
    advantages: [
      "Can be installed without welding permits in active explosive or hazardous facilities",
      "Eliminates metallurgical degradation caused by welding heat input",
      "Simple to disassemble and replace during turnaround maintenance",
      "Cost-effective for small bore utility and instrument lines"
    ],
    limitations: [
      "Susceptible to thread leakage under severe thermal cycling or vibration",
      "Not recommended for pipes with wall thickness thinner than Schedule 40",
      "Thread crevice can be prone to crevice corrosion in chloride media"
    ],
    typicalApplications: [
      "Refinery areas where hot work and welding torches are prohibited",
      "Flammable gas transport lines, fuel oil feeds, and compressed air skids",
      "Galvanized piping installations where welding would destroy the zinc barrier",
      "Instrument manifolds and small bore process sampling stations"
    ],
    manufacturingOptions: [
      "Forged blanks CNC single-point thread-chased with precision pitch gauges",
      "Available in carbon, stainless, alloy, and exotic brass/bronze alloys"
    ],
    dimensionsTable: [
      { nps: "1/2\"", od: "89 mm (3.50\")", thk: "11.1 mm (0.44\")", bcd: "60.3 mm (2.38\")", holes: "4 x 16 mm", raisedFaceDia: "34.9 mm" },
      { nps: "3/4\"", od: "98 mm (3.88\")", thk: "12.7 mm (0.50\")", bcd: "69.8 mm (2.75\")", holes: "4 x 16 mm", raisedFaceDia: "42.9 mm" },
      { nps: "1\"", od: "108 mm (4.25\")", thk: "14.3 mm (0.56\")", bcd: "79.4 mm (3.12\")", holes: "4 x 16 mm", raisedFaceDia: "50.8 mm" },
      { nps: "1-1/2\"", od: "127 mm (5.00\")", thk: "17.5 mm (0.69\")", bcd: "98.4 mm (3.88\")", holes: "4 x 16 mm", raisedFaceDia: "73.0 mm" },
      { nps: "2\"", od: "152 mm (6.00\")", thk: "19.1 mm (0.75\")", bcd: "120.6 mm (4.75\")", holes: "4 x 19 mm", raisedFaceDia: "92.1 mm" },
      { nps: "3\"", od: "190 mm (7.50\")", thk: "23.8 mm (0.94\")", bcd: "152.4 mm (6.00\")", holes: "4 x 19 mm", raisedFaceDia: "127.0 mm" },
      { nps: "4\"", od: "229 mm (9.00\")", thk: "23.8 mm (0.94\")", bcd: "190.5 mm (7.50\")", holes: "8 x 19 mm", raisedFaceDia: "157.2 mm" }
    ],
    materials: [
      {
        materialGroup: "Carbon Steel",
        slug: "carbon-steel",
        grades: ["ASTM A105", "ASTM A350 LF2"],
        highlights: "Fuel gas, plant utilities, and low-temperature non-welded systems."
      },
      {
        materialGroup: "Stainless Steel",
        slug: "stainless-steel",
        grades: ["ASTM A182 F304/304L", "F316/316L"],
        highlights: "Pharmaceutical and sanitary utility skids where hot welding is prohibited."
      },
      {
        materialGroup: "Duplex Steel",
        slug: "duplex-steel",
        grades: ["ASTM A182 F51"],
        highlights: "High-strength sour service instrument lines."
      }
    ]
  },
  {
    id: "socket-weld",
    slug: "socket-weld-flanges",
    aliases: ["socket-weld", "sw-flange", "socketweld", "socket-weld-flange"],
    name: "Socket Weld Flanges",
    diagramName: "SOCKET WELD",
    code: "SW",
    shortDescription: "Small bore high-pressure flanges with internal shoulder counterbore and single fillet weld connection.",
    image: "/images/products/flanges/socket-weld.jpg",
    heroImage: "/images/products/flanges/socket-weld.jpg",
    overview:
      "Socket Weld Flanges (SW) are engineered specifically for small nominal pipe sizes (NPS 1/2\" to 3\") operating under high pressure and elevated temperature. The flange bore contains a counter-bored socket that accepts the pipe end. A mandatory 1/16\" (1.6 mm) gap is left between the pipe tip and socket shoulder to allow thermal expansion, after which a single fillet weld is applied around the hub.",
    workingPrinciple:
      "The internal shoulder precisely aligns the pipe axis. The socket weld provides superior hydrodynamic flow characteristics compared to threaded fittings, avoiding flow turbulence. The single fillet weld on the exterior hub seals the pressure boundary, while the expansion gap prevents excessive thermal stresses from cracking the weld root.",
    designCharacteristics: [
      "Machined internal counter-bore shoulder creates smooth internal fluid transition",
      "Single external fillet weld configuration reduces welding time",
      "Engineered 1/16\" (1.6 mm) bottom expansion gap mitigates thermal stress shock",
      "Superior fatigue resistance over threaded connections in small bore systems"
    ],
    standards: "ASME B16.5, MSS SP-119",
    pressureClasses: "Class 150, Class 300, Class 600, Class 1500, Class 2500 / PN 10 to PN 400",
    sizeRange: "1/2\" NB (DN15) to 3\" NB (DN80)",
    facingTypes: "Raised Face (RF), Ring Type Joint (RTJ)",
    advantages: [
      "Smooth internal bore prevents crevice turbulence and product accumulation",
      "Faster alignment and fit-up than butt-weld flanges for small bore lines",
      "Substantially stronger and more fatigue-resistant than threaded joints"
    ],
    limitations: [
      "The internal 1/16\" expansion gap creates a crevice where corrosive liquids can stagnate",
      "Not recommended for radioactive, highly corrosive acid, or severe slurry service",
      "Limited to smaller pipe diameters (rarely manufactured above 3\" NB)"
    ],
    typicalApplications: [
      "High-pressure hydraulic and lubrication control lines",
      "Small-bore chemical dosing and auxiliary steam piping",
      "Instrumentation take-offs and steam trap stations in power generation",
      "Gas turbine fuel injection and booster skid circuits"
    ],
    manufacturingOptions: [
      "Forged from solid ASTM spec bars and heat treated with certified hardness limits"
    ],
    dimensionsTable: [
      { nps: "1/2\"", od: "89 mm (3.50\")", thk: "11.1 mm (0.44\")", bcd: "60.3 mm (2.38\")", holes: "4 x 16 mm", raisedFaceDia: "34.9 mm" },
      { nps: "3/4\"", od: "98 mm (3.88\")", thk: "12.7 mm (0.50\")", bcd: "69.8 mm (2.75\")", holes: "4 x 16 mm", raisedFaceDia: "42.9 mm" },
      { nps: "1\"", od: "108 mm (4.25\")", thk: "14.3 mm (0.56\")", bcd: "79.4 mm (3.12\")", holes: "4 x 16 mm", raisedFaceDia: "50.8 mm" },
      { nps: "1-1/2\"", od: "127 mm (5.00\")", thk: "17.5 mm (0.69\")", bcd: "98.4 mm (3.88\")", holes: "4 x 16 mm", raisedFaceDia: "73.0 mm" },
      { nps: "2\"", od: "152 mm (6.00\")", thk: "19.1 mm (0.75\")", bcd: "120.6 mm (4.75\")", holes: "4 x 19 mm", raisedFaceDia: "92.1 mm" },
      { nps: "3\"", od: "190 mm (7.50\")", thk: "23.8 mm (0.94\")", bcd: "152.4 mm (6.00\")", holes: "4 x 19 mm", raisedFaceDia: "127.0 mm" }
    ],
    materials: [
      {
        materialGroup: "Carbon Steel",
        slug: "carbon-steel",
        grades: ["ASTM A105", "ASTM A350 LF2"],
        highlights: "Hydraulic power packs, turbine steam drains, and high pressure utilities."
      },
      {
        materialGroup: "Stainless Steel",
        slug: "stainless-steel",
        grades: ["ASTM A182 F304L", "F316L", "F321"],
        highlights: "Instrumentation, high-purity gas, and analytical sampling lines."
      },
      {
        materialGroup: "Alloy Steel",
        slug: "alloy-steel",
        grades: ["ASTM A182 F11", "ASTM A182 F22"],
        highlights: "High-pressure boiler superheat drain systems."
      }
    ]
  },
  {
    id: "lap-joint",
    slug: "lap-joint-flanges",
    aliases: ["lap-joint", "lj-flange", "lapjoint", "lap-joint-flange", "loose-flange"],
    name: "Lap Joint Flanges",
    diagramName: "LAP JOINT",
    code: "LJ",
    shortDescription: "Two-piece loose ring flanges pairing with a butt-welded stub end for quick bolt alignment and economical exotic alloy use.",
    image: "/images/products/flanges/lap-joint.jpg",
    heroImage: "/images/products/flanges/lap-joint.jpg",
    overview:
      "Lap Joint Flanges (LJ) are two-component assemblies consisting of a loose, backing flange and a butt-welded Lap Joint Stub End. The inner bore of the flange has a curved radius to seat against the matching radiused hub of the stub end. Because the backing flange does not contact the process fluid, it can be manufactured from cost-effective carbon steel while only the stub end is made from expensive corrosion-resistant alloys (Titanium, Nickel, Duplex, or SS 316L).",
    workingPrinciple:
      "The stub end is butt-welded to the pipe run. The lap joint flange slides freely over the pipe and bears against the back of the stub end face. When bolted, the flange transfers clamping load to the stub end gasket face. Because the flange rotates 360° freely around the pipe, bolt hole alignment with mating flanges is effortless, significantly speeding up turnaround maintenance.",
    designCharacteristics: [
      "Two-piece assembly: backing flange + butt-weld stub end (Type A or B)",
      "Machined radiused bore corner to match the fillet radius of the stub end",
      "Backing flange never touches the process fluid, allowing bi-metallic cost savings",
      "Full 360-degree rotational freedom eliminates bolt hole misalignment problems"
    ],
    standards: "ASME B16.5, ASME B16.9 (Stub ends), DIN EN 1092-1 Type 02",
    pressureClasses: "Class 150, Class 300, Class 600, Class 900, Class 1500 / PN 10 to PN 100",
    sizeRange: "1/2\" NB (DN15) to 24\" NB (DN600)",
    facingTypes: "Flat Face on backing flange (Raised Face / gasket contact is on the Stub End)",
    advantages: [
      "Substantial cost savings: Carbon steel backing flange paired with high-alloy stub end",
      "Effortless bolt hole alignment saves extensive labor time in field piping",
      "Facilitates fast, frequent disassembly for inspection and cleaning",
      "Ideal for systems with severe thermal expansion and rapid maintenance cycles"
    ],
    limitations: [
      "Overall joint pressure containment is governed by stub end wall thickness",
      "Fatigue life is lower than that of a butt-welded weld neck flange",
      "Requires ordering both flange and matching ASME B16.9 stub end"
    ],
    typicalApplications: [
      "Pulp & paper bleaching lines, sulfuric acid processing, and chemical reactors",
      "Frequent clean-in-place (CIP) and dismantling sanitary piping systems",
      "Titanium, Hastelloy, and Nickel alloy piping systems where solid flanges are cost-prohibitive",
      "Seawater desalination plants and municipal filtration loops"
    ],
    manufacturingOptions: [
      "Forged backing rings precision-bored with ASME B16.5 fillet radius"
    ],
    dimensionsTable: [
      { nps: "1/2\"", od: "89 mm (3.50\")", thk: "11.1 mm (0.44\")", bcd: "60.3 mm (2.38\")", holes: "4 x 16 mm", raisedFaceDia: "Stub End" },
      { nps: "1\"", od: "108 mm (4.25\")", thk: "14.3 mm (0.56\")", bcd: "79.4 mm (3.12\")", holes: "4 x 16 mm", raisedFaceDia: "Stub End" },
      { nps: "2\"", od: "152 mm (6.00\")", thk: "19.1 mm (0.75\")", bcd: "120.6 mm (4.75\")", holes: "4 x 19 mm", raisedFaceDia: "Stub End" },
      { nps: "3\"", od: "190 mm (7.50\")", thk: "23.8 mm (0.94\")", bcd: "152.4 mm (6.00\")", holes: "4 x 19 mm", raisedFaceDia: "Stub End" },
      { nps: "4\"", od: "229 mm (9.00\")", thk: "23.8 mm (0.94\")", bcd: "190.5 mm (7.50\")", holes: "8 x 19 mm", raisedFaceDia: "Stub End" },
      { nps: "6\"", od: "279 mm (11.00\")", thk: "25.4 mm (1.00\")", bcd: "241.3 mm (9.50\")", holes: "8 x 22 mm", raisedFaceDia: "Stub End" },
      { nps: "8\"", od: "343 mm (13.50\")", thk: "28.6 mm (1.12\")", bcd: "298.4 mm (11.75\")", holes: "8 x 22 mm", raisedFaceDia: "Stub End" }
    ],
    materials: [
      {
        materialGroup: "Carbon Steel",
        slug: "carbon-steel",
        grades: ["ASTM A105 backing ring with SS or Nickel stub ends"],
        highlights: "Economical backing rings for high-alloy process systems."
      },
      {
        materialGroup: "Stainless Steel",
        slug: "stainless-steel",
        grades: ["ASTM A182 F304L", "F316L", "F904L stub ends"],
        highlights: "Corrosive chemical loops requiring frequent maintenance."
      },
      {
        materialGroup: "Titanium & Nickel Alloys",
        slug: "nickel-alloy",
        grades: ["Titanium Gr 2", "Inconel 625", "Hastelloy C276"],
        highlights: "Massive cost optimization over solid exotic alloy flanges."
      }
    ]
  },
  {
    id: "reducing",
    slug: "reducing-flanges",
    aliases: ["reducing", "reducing-flange", "red-flange"],
    name: "Reducing Flanges",
    diagramName: "REDUCING",
    code: "RED",
    shortDescription: "Specialized connecting flanges with differing outer bolt circle and inner bore diameter for line size reduction.",
    image: "/images/products/flanges/reducing.jpg",
    heroImage: "/images/products/flanges/reducing.jpg",
    overview:
      "Reducing Flanges are designed to connect two pipes of different nominal sizes together without using a separate concentric or eccentric pipe reducer fitting. The flange features an outer diameter and bolt pattern matching the larger nominal pipe size, while the inner bore and hub profile are machined to match the smaller connecting pipe diameter.",
    workingPrinciple:
      "The flange bolts directly to standard large-bore mating flanges. Inside the bore, fluid flow transitions across the diameter reduction. By combining a flange and reducer into a single forged element, piping engineers save valuable longitudinal installation space and eliminate one circumferential welding joint.",
    designCharacteristics: [
      "Large nominal bolt pattern combined with smaller internal connecting bore",
      "Available in threaded, slip-on, or weld-neck reducing configurations",
      "Saves significant axial piping length compared to standard pipe reducers",
      "Designed in compliance with ASME B16.5 reducing flange dimensions"
    ],
    standards: "ASME B16.5 Table 6",
    pressureClasses: "Class 150, Class 300, Class 600, Class 900, Class 1500",
    sizeRange: "Run sizes 2\" to 24\" reducing to branch sizes 1/2\" to 12\"",
    facingTypes: "Raised Face (RF), Flat Face (FF)",
    advantages: [
      "Eliminates the cost and space required for a separate pipe reducer fitting",
      "Reduces total number of welded seams in the piping run",
      "Ideal for tight piping headers, pump nozzles, and skid packages"
    ],
    limitations: [
      "Abrupt diameter transition causes higher fluid turbulence than a smooth reducer cone",
      "Not recommended where sudden flow deceleration or severe slurry erosion is present"
    ],
    typicalApplications: [
      "Pump suction and discharge nozzles with differing header diameters",
      "Meter run connections and valve body size transitions",
      "Space-constrained modular offshore skids and compact marine engine rooms"
    ],
    manufacturingOptions: [
      "Custom forged and CNC profiled per project reduction ratios"
    ],
    dimensionsTable: [
      { nps: "2\" x 1\"", od: "152 mm (6.00\")", thk: "19.1 mm (0.75\")", bcd: "120.6 mm (4.75\")", holes: "4 x 19 mm", raisedFaceDia: "92.1 mm" },
      { nps: "3\" x 1-1/2\"", od: "190 mm (7.50\")", thk: "23.8 mm (0.94\")", bcd: "152.4 mm (6.00\")", holes: "4 x 19 mm", raisedFaceDia: "127.0 mm" },
      { nps: "3\" x 2\"", od: "190 mm (7.50\")", thk: "23.8 mm (0.94\")", bcd: "152.4 mm (6.00\")", holes: "4 x 19 mm", raisedFaceDia: "127.0 mm" },
      { nps: "4\" x 2\"", od: "229 mm (9.00\")", thk: "23.8 mm (0.94\")", bcd: "190.5 mm (7.50\")", holes: "8 x 19 mm", raisedFaceDia: "157.2 mm" },
      { nps: "4\" x 3\"", od: "229 mm (9.00\")", thk: "23.8 mm (0.94\")", bcd: "190.5 mm (7.50\")", holes: "8 x 19 mm", raisedFaceDia: "157.2 mm" },
      { nps: "6\" x 3\"", od: "279 mm (11.00\")", thk: "25.4 mm (1.00\")", bcd: "241.3 mm (9.50\")", holes: "8 x 22 mm", raisedFaceDia: "215.9 mm" },
      { nps: "6\" x 4\"", od: "279 mm (11.00\")", thk: "25.4 mm (1.00\")", bcd: "241.3 mm (9.50\")", holes: "8 x 22 mm", raisedFaceDia: "215.9 mm" }
    ],
    materials: [
      {
        materialGroup: "Carbon Steel",
        slug: "carbon-steel",
        grades: ["ASTM A105", "ASTM A350 LF2"],
        highlights: "Pump station headers and manifold tie-ins."
      },
      {
        materialGroup: "Stainless Steel",
        slug: "stainless-steel",
        grades: ["ASTM A182 F304L", "F316L"],
        highlights: "Chemical dosing and metering skid connections."
      }
    ]
  },
  {
    id: "plate-flange",
    slug: "plate-flanges",
    aliases: ["plate", "plate-flange", "flat-flange", "table-d-e", "slip-on-plate"],
    name: "Plate Flanges",
    diagramName: "PLATE FLANGE",
    code: "PL",
    shortDescription: "Flat, hubless plate flanges flame/plasma cut and CNC machined for low-pressure water, HVAC, and ducting systems.",
    image: "/images/products/flanges/plate-flange.jpg",
    heroImage: "/images/products/flanges/plate-flange.jpg",
    overview:
      "Plate Flanges (Flat Face Slip-On Plate Flanges) are hubless, flat circular flanges manufactured directly from hot-rolled steel plates conforming to DIN EN 1092-1 Type 01, BS 4504, IS 2062, or AWWA C207 standards. The flange is slid over the pipe and secured with inside and outside fillet welds. Due to the absence of a forged hub, plate flanges are the most cost-efficient flange solution for low-pressure municipal, wastewater, and general ventilation systems.",
    workingPrinciple:
      "The inner bore matches the outside diameter of the pipe. Welded with standard fillet passes, the flat sealing face mates against flat face valves, pumps, or companion flanges with a full-face elastomeric gasket that prevents flange bending moments during bolt tightening.",
    designCharacteristics: [
      "Flat face design without raised hub, cut from high-quality steel plates",
      "CNC drilled bolt patterns per DIN, BS, AWWA, or ASME standards",
      "Ideal for full-face rubber or PTFE sheet gaskets",
      "Extremely economical for large diameter low-pressure pipelines"
    ],
    standards: "DIN EN 1092-1 Type 01, BS 4504, IS 2062 / IS 6392, AWWA C207 Class D & E",
    pressureClasses: "PN 2.5, PN 6, PN 10, PN 16 / Class 150 (AWWA)",
    sizeRange: "1/2\" NB (DN15) to 80\" NB (DN2000)",
    facingTypes: "Flat Face (FF)",
    advantages: [
      "Lowest cost per flange in the entire industrial flange spectrum",
      "Fast fabrication from certified plate stock with short delivery lead times",
      "Suitable for light-wall pipes and large diameter ducting systems"
    ],
    limitations: [
      "Limited strictly to low-pressure services (typically ≤ PN 16)",
      "Cannot withstand high cyclic thermal stresses or severe bending loads"
    ],
    typicalApplications: [
      "Municipal water supply, sewage treatment, and wastewater pumping stations",
      "HVAC chilled water loops, cooling towers, and fire water circuits",
      "Exhaust gas ducting, low-pressure ventilation, and bulk silo connections"
    ],
    manufacturingOptions: [
      "High-definition CNC plasma/laser profiled and surface-machined from plate"
    ],
    dimensionsTable: [
      { nps: "DN 25 (1\")", od: "115 mm", thk: "14 mm", bcd: "85 mm", holes: "4 x 14 mm", raisedFaceDia: "Flat Face" },
      { nps: "DN 50 (2\")", od: "165 mm", thk: "18 mm", bcd: "125 mm", holes: "4 x 18 mm", raisedFaceDia: "Flat Face" },
      { nps: "DN 80 (3\")", od: "200 mm", thk: "20 mm", bcd: "160 mm", holes: "8 x 18 mm", raisedFaceDia: "Flat Face" },
      { nps: "DN 100 (4\")", od: "220 mm", thk: "20 mm", bcd: "180 mm", holes: "8 x 18 mm", raisedFaceDia: "Flat Face" },
      { nps: "DN 150 (6\")", od: "285 mm", thk: "22 mm", bcd: "240 mm", holes: "8 x 22 mm", raisedFaceDia: "Flat Face" },
      { nps: "DN 200 (8\")", od: "340 mm", thk: "24 mm", bcd: "295 mm", holes: "12 x 22 mm", raisedFaceDia: "Flat Face" }
    ],
    materials: [
      {
        materialGroup: "Carbon Steel / Mild Steel",
        slug: "carbon-steel",
        grades: ["IS 2062 Gr. A/B", "ASTM A36", "ASTM A516 Gr. 70"],
        highlights: "Water treatment plants, municipal mains, and structural ductwork."
      },
      {
        materialGroup: "Stainless Steel",
        slug: "stainless-steel",
        grades: ["SS 304", "SS 304L", "SS 316L (ASTM A240)"],
        highlights: "Wastewater aeration, food processing tanks, and sanitary exhaust."
      }
    ]
  },
  {
    id: "expander",
    slug: "expander-flanges",
    aliases: ["expander", "expander-flange", "exp-flange"],
    name: "Expander Flanges",
    diagramName: "EXPANDER",
    code: "EXP",
    shortDescription: "Integrated weld neck flanges with an expanding tapered bore, transitioning a smaller pipe to a larger valve or pump nozzle.",
    image: "/images/products/flanges/expander.jpg",
    heroImage: "/images/products/flanges/expander.jpg",
    overview:
      "Expander Flanges are specialized weld neck flanges where the hub incorporates a gradual internal cone expansion. Designed in accordance with MSS SP-65 and ASME B16.5 conventions, expander flanges transition from a smaller pipe diameter at the weld bevel to a larger nominal flange mating face. By combining a weld neck flange and a pipe expander reducer into a single forged component, piping engineers eliminate one butt-weld seam and conserve vital skid footprint.",
    workingPrinciple:
      "The smaller weld end is butt-welded to the line pipe, while the expanding hub gradually widens the internal diameter over a precision hydrodynamic taper. The larger mating flange face bolts directly to pumps, compressors, or oversized valves. The integral one-piece forged design handles cyclic pressure and bending loads far better than a separate fabricated fitting assembly.",
    designCharacteristics: [
      "One-piece forging combining pipe expansion reducer and weld neck flange",
      "Gradual internal taper reduces flow turbulence and cavitation",
      "Eliminates one circumferential butt-weld and non-destructive examination (NDE) cycle",
      "Standardized per MSS SP-65 specifications"
    ],
    standards: "MSS SP-65, ASME B16.5, ASME B16.47",
    pressureClasses: "Class 150, Class 300, Class 600",
    sizeRange: "Nominal weld neck 2\" to 24\" expanding to flange size 3\" to 30\"",
    facingTypes: "Raised Face (RF), Ring Type Joint (RTJ)",
    advantages: [
      "Eliminates one field butt-weld, saving labor and radiographic inspection costs",
      "Significantly shorter overall length than a separate pipe reducer and flange",
      "Superior structural rigidity under severe nozzle reaction loads"
    ],
    limitations: [
      "Specialty forging with higher unit manufacturing cost",
      "Standard sizes generally limited to one or two line size increments"
    ],
    typicalApplications: [
      "Centrifugal pump suction nozzles requiring enlarged intake diameter",
      "Compressor discharge headers and valve body tie-ins",
      "Offshore modular gas processing skids where axial space is strictly constrained"
    ],
    manufacturingOptions: [
      "Custom closed-die forged and heat treated per ASTM A105, A350, or A182"
    ],
    dimensionsTable: [
      { nps: "2\" x 3\"", od: "190 mm (3\" Flange)", thk: "23.8 mm", bcd: "152.4 mm", holes: "4 x 19 mm", raisedFaceDia: "127.0 mm" },
      { nps: "3\" x 4\"", od: "229 mm (4\" Flange)", thk: "23.8 mm", bcd: "190.5 mm", holes: "8 x 19 mm", raisedFaceDia: "157.2 mm" },
      { nps: "4\" x 6\"", od: "279 mm (6\" Flange)", thk: "25.4 mm", bcd: "241.3 mm", holes: "8 x 22 mm", raisedFaceDia: "215.9 mm" },
      { nps: "6\" x 8\"", od: "343 mm (8\" Flange)", thk: "28.6 mm", bcd: "298.4 mm", holes: "8 x 22 mm", raisedFaceDia: "269.9 mm" },
      { nps: "8\" x 10\"", od: "406 mm (10\" Flange)", thk: "30.2 mm", bcd: "362.0 mm", holes: "12 x 25 mm", raisedFaceDia: "323.8 mm" }
    ],
    materials: [
      {
        materialGroup: "Carbon Steel",
        slug: "carbon-steel",
        grades: ["ASTM A105", "ASTM A350 LF2", "A694 F52-F65"],
        highlights: "Gas compressor skids, oil transmission pump manifolds."
      },
      {
        materialGroup: "Stainless Steel",
        slug: "stainless-steel",
        grades: ["ASTM A182 F316L", "F304L"],
        highlights: "Corrosive chemical injection and process pump connections."
      },
      {
        materialGroup: "Duplex Steel",
        slug: "duplex-steel",
        grades: ["ASTM A182 F51 (2205)"],
        highlights: "Offshore seawater booster pump nozzles."
      }
    ]
  },
  {
    id: "weldo-flange",
    slug: "weldo-flanges",
    aliases: ["weldo", "weldo-flange", "nipoflange", "weldolet-flange"],
    name: "Weldo Flanges",
    diagramName: "WELDO FLANGE",
    code: "WF",
    shortDescription: "Integrally reinforced branch outlet forgings combining a Weldolet branch fitting and a weld neck flange in one solid body.",
    image: "/images/products/flanges/weldo-flange.jpg",
    heroImage: "/images/products/flanges/weldo-flange.jpg",
    overview:
      "Weldo Flanges (also known as Weldolet Flanges or Nipoflanges) are integrally reinforced forged components that fuse a branch outlet fitting (Weldolet) and a weld neck flange into a single, seamless forging. Designed per MSS SP-97 and ASME B31.3 reinforcement rules, a weldo flange is contoured to weld directly onto the main run header pipe, providing a 90° flanged takeoff branch without needing separate branch nipples, tees, or weld neck flanges.",
    workingPrinciple:
      "The base of the weldo flange is shaped to match the curvature of the main header pipe. A full penetration contour weld joins the fitting base to the header. Fluid is directed 90° into the branch bore, terminating directly at the integral flange face. By eliminating the circumferential weld between branch outlet and flange, weldo flanges maximize structural integrity in high-vibration systems.",
    designCharacteristics: [
      "Single-piece forging: branch fitting + extension neck + flange face",
      "Contoured base engineered to match the header pipe diameter",
      "Full 100% volumetric reinforcement per ASME B31.3 piping codes",
      "Eliminates intermediate welds, minimizing potential leak paths and inspection points"
    ],
    standards: "MSS SP-97, ASME B16.5, ASME B31.3",
    pressureClasses: "Class 150, Class 300, Class 600, Class 900, Class 1500, Class 2500",
    sizeRange: "Run pipe size 2\" to 36\" NB with branch flange size 1/2\" to 8\" NB",
    facingTypes: "Raised Face (RF), Ring Type Joint (RTJ)",
    advantages: [
      "Replaces three separate components (Weldolet, pipe nipple, weld neck flange) with one piece",
      "Removes two high-stress circumferential weld seams",
      "Highest structural integrity for severe thermal cycling and high-vibration equipment",
      "Significantly reduces fabrication assembly time in piping spool prefabrication"
    ],
    limitations: [
      "Requires careful bevel preparation on the main run pipe",
      "Custom forging requirements with specific run-to-branch diameter ratios"
    ],
    typicalApplications: [
      "High-pressure pipeline instrument takeoffs, sample points, and drain connections",
      "Header tie-ins on offshore drilling platforms and FPSO processing topsides",
      "Refinery cracking furnaces and high-pressure steam distribution headers"
    ],
    manufacturingOptions: [
      "Forged from solid ASTM spec billets and CNC contoured to exact header radii"
    ],
    dimensionsTable: [
      { nps: "Run 4\" x Branch 1\"", od: "108 mm (1\" Flange)", thk: "14.3 mm", bcd: "79.4 mm", holes: "4 x 16 mm", raisedFaceDia: "50.8 mm" },
      { nps: "Run 6\" x Branch 1-1/2\"", od: "127 mm (1.5\" Flange)", thk: "17.5 mm", bcd: "98.4 mm", holes: "4 x 16 mm", raisedFaceDia: "73.0 mm" },
      { nps: "Run 8\" x Branch 2\"", od: "152 mm (2\" Flange)", thk: "19.1 mm", bcd: "120.6 mm", holes: "4 x 19 mm", raisedFaceDia: "92.1 mm" },
      { nps: "Run 12\" x Branch 2\"", od: "152 mm (2\" Flange)", thk: "19.1 mm", bcd: "120.6 mm", holes: "4 x 19 mm", raisedFaceDia: "92.1 mm" },
      { nps: "Run 16\" x Branch 3\"", od: "190 mm (3\" Flange)", thk: "23.8 mm", bcd: "152.4 mm", holes: "4 x 19 mm", raisedFaceDia: "127.0 mm" }
    ],
    materials: [
      {
        materialGroup: "Carbon Steel",
        slug: "carbon-steel",
        grades: ["ASTM A105", "ASTM A350 LF2", "ASTM A694 F52-F70"],
        highlights: "Subsea manifolds, cross-country oil pipelines, and power steam takeoffs."
      },
      {
        materialGroup: "Stainless Steel",
        slug: "stainless-steel",
        grades: ["ASTM A182 F316L", "F304L"],
        highlights: "Chemical reactor sampling ports and sterile instrumentation branches."
      },
      {
        materialGroup: "Duplex Steel",
        slug: "duplex-steel",
        grades: ["ASTM A182 F51", "F53 (2507)"],
        highlights: "Offshore seawater headers and high-pressure sour gas manifolds."
      }
    ]
  },
  {
    id: "elbow-flange",
    slug: "elbow-flanges",
    aliases: ["elbow", "elbow-flange", "flanged-elbow"],
    name: "Elbow Flanges",
    diagramName: "ELBOW FLANGE",
    code: "EF",
    shortDescription: "Engineered 90° or 45° forged piping elbows with integrated flange faces for extremely compact directional change piping.",
    image: "/images/products/flanges/elbow-flange.jpg",
    heroImage: "/images/products/flanges/elbow-flange.jpg",
    overview:
      "Elbow Flanges (Flanged Elbows) are heavy-duty forged components that combine a 90° or 45° pipe elbow with an integral flange face at one or both ends. Engineered for space-restricted environments where welding a standard pipe elbow to a separate weld neck flange is physically impossible due to tight center-to-face dimensions, elbow flanges provide an ultra-compact, high-strength solution.",
    workingPrinciple:
      "The component executes a direct 90° or 45° turn while providing a standardized ASME B16.5 flanged bolting interface. Flow turns smoothly inside the continuous forged radius, while the integral flange face bolts directly to pumps, heat exchangers, or adjacent equipment without intermediate weld joints.",
    designCharacteristics: [
      "Solid forged elbow geometry with integral ASME B16.5 flange facing",
      "Significantly shorter center-to-face dimension than a fabricated elbow + flange assembly",
      "Available in 90° and 45° configurations with single or double flanged ends",
      "Heavy wall forging provides superior pressure containment and vibration dampening"
    ],
    standards: "ASME B16.5, ASME B16.9, DIN 2605 / DIN 2633 flanged elbow conventions",
    pressureClasses: "Class 150, Class 300, Class 600",
    sizeRange: "1\" NB (DN25) to 12\" NB (DN300)",
    facingTypes: "Raised Face (RF), Ring Type Joint (RTJ)",
    advantages: [
      "Ultra-compact footprint allows tight 90° connections in restricted machinery rooms",
      "Eliminates welded joints right at the elbow turn, enhancing fatigue endurance",
      "Superior resistance to flow-induced vibration and piping reaction loads"
    ],
    limitations: [
      "Higher manufacturing complexity requiring specialized multi-axis CNC profiling",
      "Fixed center-to-face dimensions requiring strict adherence to equipment nozzle layouts"
    ],
    typicalApplications: [
      "Pump suction and discharge nozzles with right-angle pipeline entry",
      "Heat exchanger channel head tie-ins in compact marine engine rooms",
      "Offshore skid packages and hydraulic accumulator manifolds"
    ],
    manufacturingOptions: [
      "Drop forged and precision multi-axis CNC machined"
    ],
    dimensionsTable: [
      { nps: "1\"", od: "108 mm (4.25\")", thk: "14.3 mm", bcd: "79.4 mm", holes: "4 x 16 mm", raisedFaceDia: "50.8 mm" },
      { nps: "1-1/2\"", od: "127 mm (5.00\")", thk: "17.5 mm", bcd: "98.4 mm", holes: "4 x 16 mm", raisedFaceDia: "73.0 mm" },
      { nps: "2\"", od: "152 mm (6.00\")", thk: "19.1 mm", bcd: "120.6 mm (4.75\")", holes: "4 x 19 mm", raisedFaceDia: "92.1 mm" },
      { nps: "3\"", od: "190 mm (7.50\")", thk: "23.8 mm", bcd: "152.4 mm (6.00\")", holes: "4 x 19 mm", raisedFaceDia: "127.0 mm" },
      { nps: "4\"", od: "229 mm (9.00\")", thk: "23.8 mm (0.94\")", bcd: "190.5 mm (7.50\")", holes: "8 x 19 mm", raisedFaceDia: "157.2 mm" }
    ],
    materials: [
      {
        materialGroup: "Carbon Steel",
        slug: "carbon-steel",
        grades: ["ASTM A105", "ASTM A350 LF2"],
        highlights: "Marine engine cooling loops and industrial pump connections."
      },
      {
        materialGroup: "Stainless Steel",
        slug: "stainless-steel",
        grades: ["ASTM A182 F304L", "F316L"],
        highlights: "Chemical reactor manifolds and sanitary equipment nozzles."
      }
    ]
  },
  {
    id: "orifice",
    slug: "orifice-flanges",
    aliases: ["orifice", "orifice-flange", "meter-flange"],
    name: "Orifice Flanges",
    diagramName: "ORIFICE",
    code: "ORF",
    shortDescription: "Precision differential pressure metering flange pairs equipped with radial tap holes and jack screws for flow measurement.",
    image: "/images/products/flanges/orifice.jpg",
    heroImage: "/images/products/flanges/orifice.jpg",
    overview:
      "Orifice Flanges are specialized flange sets manufactured strictly in matching pairs per ASME B16.36 to house an orifice plate for fluid flow measurement. Unlike standard flanges, orifice flanges feature radial tapped differential pressure sensing ports (typically 1/2\" NPT) drilled directly into the flange ring, along with dedicated jack screw holes. Jack screws are utilized to spread the flange faces apart during maintenance, facilitating easy replacement or inspection of the orifice plate without straining adjacent piping.",
    workingPrinciple:
      "An orifice plate with a calibrated restriction bore is clamped between the two orifice flanges. As process fluid passes through the plate restriction, fluid velocity increases and static pressure drops. Differential pressure taps drilled through the flange walls transmit high-pressure upstream and low-pressure downstream values to differential pressure transmitters, calculating volumetric or mass flow rate per Bernoulli's principles.",
    designCharacteristics: [
      "Supplied in matched pairs with dual radial 1/2\" NPT tapping holes in each flange",
      "Integrated jack screw holes and jack screws for effortless plate removal",
      "Thicker flange ring design per ASME B16.36 to accommodate pressure taps",
      "Precision bore finishes ensuring laminar velocity profile at the metering plate"
    ],
    standards: "ASME B16.36, ASME B16.5, ISO 5167",
    pressureClasses: "Class 300, Class 600, Class 900, Class 1500, Class 2500 (Class 150 is rarely used due to minimum wall thickness required for radial tap drillings)",
    sizeRange: "1\" NB (DN25) to 24\" NB (DN600)",
    facingTypes: "Raised Face (RF), Ring Type Joint (RTJ)",
    advantages: [
      "Globally accepted custody transfer and process flow metering standard per ASME B16.36",
      "Integral jack screws eliminate pipeline prying damage during orifice plate replacement",
      "Direct radial pressure tap drilling eliminates separate pipe wall penetration fittings",
      "Available with RTJ facing for high-pressure natural gas custody transfer"
    ],
    limitations: [
      "Minimum pressure rating is Class 300 due to flange thickness required for tap drilling",
      "Requires straight upstream and downstream pipe runs to ensure metering accuracy"
    ],
    typicalApplications: [
      "Custody transfer metering stations for natural gas, crude oil, and refined products",
      "Steam flow monitoring in power generating stations and boiler plants",
      "Chemical plant process flow measurement and material balance control",
      "Flare gas flow metering and refinery mass balance manifolds"
    ],
    manufacturingOptions: [
      "Supplied as complete pairs including jack screws, nuts, and tap pipe plugs",
      "Weld neck, threaded, or slip-on styles with calibrated ASME B16.36 bore tolerances"
    ],
    dimensionsTable: [
      { nps: "1\" (Cl 300)", od: "124 mm (4.88\")", thk: "38.1 mm (1.50\")", bcd: "88.9 mm (3.50\")", holes: "4 x 19 mm", raisedFaceDia: "50.8 mm" },
      { nps: "2\" (Cl 300)", od: "165 mm (6.50\")", thk: "44.5 mm (1.75\")", bcd: "127.0 mm (5.00\")", holes: "8 x 19 mm", raisedFaceDia: "92.1 mm" },
      { nps: "3\" (Cl 300)", od: "210 mm (8.25\")", thk: "47.8 mm (1.88\")", bcd: "168.1 mm (6.62\")", holes: "8 x 22 mm", raisedFaceDia: "127.0 mm" },
      { nps: "4\" (Cl 300)", od: "254 mm (10.00\")", thk: "53.8 mm (2.12\")", bcd: "200.2 mm (7.88\")", holes: "8 x 22 mm", raisedFaceDia: "157.2 mm" },
      { nps: "6\" (Cl 300)", od: "318 mm (12.50\")", thk: "60.5 mm (2.38\")", bcd: "269.7 mm (10.62\")", holes: "12 x 22 mm", raisedFaceDia: "215.9 mm" },
      { nps: "8\" (Cl 300)", od: "381 mm (15.00\")", thk: "66.5 mm (2.62\")", bcd: "330.2 mm (13.00\")", holes: "12 x 25 mm", raisedFaceDia: "269.9 mm" }
    ],
    materials: [
      {
        materialGroup: "Carbon Steel",
        slug: "carbon-steel",
        grades: ["ASTM A105", "ASTM A350 LF2"],
        highlights: "Natural gas pipelines, refinery steam headers, and hydrocarbon flow skids."
      },
      {
        materialGroup: "Stainless Steel",
        slug: "stainless-steel",
        grades: ["ASTM A182 F316/316L", "F304/304L"],
        highlights: "Corrosive chemical flow metering, food grade, and cryogenic liquid flow."
      },
      {
        materialGroup: "Duplex Steel",
        slug: "duplex-steel",
        grades: ["ASTM A182 F51 (2205)", "F53 (2507)"],
        highlights: "Offshore seawater injection and high-pressure sour gas custody transfer."
      },
      {
        materialGroup: "Nickel Alloys",
        slug: "nickel-alloy",
        grades: ["Inconel 625", "Monel 400", "Hastelloy C276"],
        highlights: "Severe acid flow metering and hot corrosive chemicals."
      }
    ]
  }
];

// Helper functions for flange types
export function getAllFlangeTypes() {
  return flangeTypesDatabase;
}

export function getFlangeTypeBySlug(slug) {
  if (!slug) return null;
  const clean = slug.trim().toLowerCase().replace(/\/$/, "");
  return (
    flangeTypesDatabase.find((f) => f.slug === clean || f.id === clean) ||
    flangeTypesDatabase.find((f) => f.aliases && f.aliases.includes(clean)) ||
    null
  );
}

export function getFlangeTypeUrl(flangeSlugOrObj, materialSlug) {
  const slug = typeof flangeSlugOrObj === "string" ? flangeSlugOrObj : flangeSlugOrObj.slug;
  if (materialSlug) {
    const cleanMat = materialSlug.replace(/-manufacture-in-india$/, "").replace(/^(flanges|flange)-/, "");
    return `/flanges/${cleanMat}/${slug}`;
  }
  return `/flanges/${slug}`;
}
