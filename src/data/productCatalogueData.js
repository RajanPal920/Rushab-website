// src/data/productCatalogueData.js
// Authoritative Product Hierarchy Database for Rishabh Metal Industries
// Architecture: Category (Level 1) -> Material (Level 2) -> Product Type (Level 3) -> Grade (Level 4/5)
// Compliant with ASME, ASTM, DIN, EN, ISO, and UNS standards

import { gradesDatabase, findGradeDefinition, getGradeUrl } from "./gradesData.js";
import { flangeTypesDatabase } from "./flangeTypesData.js";

// Helper to normalize slugs
export const cleanSlug = (slug) => {
  if (!slug) return "";
  return slug
    .trim()
    .toLowerCase()
    .replace(/-manufacture-in-india$/, "")
    .replace(/\/$/, "");
};

export const productCatalogueData = [
  // =========================================================================
  // 1. INDUSTRIAL FLANGES
  // =========================================================================
  {
    id: 1,
    slug: "flanges",
    title: "INDUSTRIAL FLANGES",
    subtitle: "FORGED HIGH-PRESSURE INDUSTRIAL FLANGES",
    categoryGroup: "Flanges",
    heroImage: "/images/products/flanges.jpg",
    std: "ASME B16.5 / ASME B16.47 / DIN EN 1092-1 / MSS SP-44",
    type: "MANUFACTURER & STOCKIST",
    overview:
      "Rishabh Metal Industries manufactures and stocks a complete range of forged industrial flanges conforming to ASME B16.5, ASME B16.47 Series A & B, DIN, and EN 1092-1 standards. Engineered for critical pipeline connections across oil & gas, petrochemical, offshore, and power generation facilities.",
    materials: [
      {
        slug: "stainless-steel",
        name: "Stainless Steel",
        image: "/images/productsImages/stainless-flanges.jpg",
        shortDescription: "ASTM A182 F304, F304L, F316, F316L, F321, F347, F904L forged stainless steel flanges for corrosive, cryogenic, and high-purity services.",
        standards: "ASTM A182, ASME B16.5, ASME B16.47, EN 1092-1",
        gradeBadge: "ASTM A182 F304/304L / F316/316L / F321 / F904L",
        grades: ["ss-304l", "ss-316l", "ss-321", "ss-904l"],
        types: flangeTypesDatabase.map((f) => ({
          ...f,
          image: f.heroImage || "/images/productsImages/stainless-flanges.jpg",
          materialContext: "Stainless Steel",
          applicableGrades: ["F304", "F304L", "F316", "F316L", "F321", "F347", "F904L"]
        }))
      },
      {
        slug: "carbon-steel",
        name: "Carbon Steel",
        image: "/images/productsImages/carbon-flanges.jpg",
        shortDescription: "ASTM A105, A105N, A350 LF2 Class 1/2, A694 F42 to F70 high-pressure carbon steel forged flanges for refinery steam and low-temp services.",
        standards: "ASTM A105, ASTM A350, ASTM A694, ASME B16.5",
        gradeBadge: "ASTM A105N / ASTM A350 LF2 / ASTM A694",
        grades: ["astm-a105", "astm-a350-lf2"],
        types: flangeTypesDatabase.map((f) => ({
          ...f,
          image: f.heroImage || "/images/productsImages/carbon-flanges.jpg",
          materialContext: "Carbon Steel",
          applicableGrades: ["ASTM A105", "ASTM A105N", "ASTM A350 LF2", "ASTM A694 F52", "ASTM A694 F65"]
        }))
      },
      {
        slug: "duplex-steel",
        name: "Duplex Stainless Steel",
        image: "/images/productsImages/duplex-flanges.jpg",
        shortDescription: "ASTM A182 F51 (UNS S31803) and F60 (UNS S32205) high-yield dual-phase forged flanges with exceptional chloride SCC immunity (PREN ≥ 35).",
        standards: "ASTM A182, ASME SA182, NACE MR0175 / ISO 15156",
        gradeBadge: "UNS S31803 / UNS S32205 (Alloy 2205)",
        grades: ["duplex-2205", "ldx-2101"],
        types: flangeTypesDatabase.map((f) => ({
          ...f,
          image: f.heroImage || "/images/productsImages/duplex-flanges.jpg",
          materialContext: "Duplex Stainless Steel",
          applicableGrades: ["Duplex 2205", "LDX 2101", "F51", "F60"]
        }))
      },
      {
        slug: "super-duplex",
        name: "Super Duplex Stainless Steel",
        image: "/images/productsImages/super-duplex-flanges.jpg",
        shortDescription: "ASTM A182 F53 (2507 / S32750) and F55 (Zeron 100 / S32760) PREN ≥ 42 ultra-high performance flanges for subsea flowlines and SWRO desalination.",
        standards: "ASTM A182, NORSOK M-630, NACE MR0175",
        gradeBadge: "UNS S32750 (2507) / UNS S32760 (Zeron 100)",
        grades: ["super-duplex-2507", "zeron-100"],
        types: flangeTypesDatabase.map((f) => ({
          ...f,
          image: f.heroImage || "/images/productsImages/super-duplex-flanges.jpg",
          materialContext: "Super Duplex Stainless Steel",
          applicableGrades: ["Super Duplex 2507", "Zeron 100", "F53", "F55"]
        }))
      },
      {
        slug: "alloy-steel",
        name: "Alloy Steel",
        image: "/images/productsImages/alloy-flanges.jpg",
        shortDescription: "ASTM A182 F11, F22, F91 chromium-molybdenum forged alloy steel flanges with creep rupture resistance up to 600°C for boiler steam lines.",
        standards: "ASTM A182, ASME SA182, DIN 17243",
        gradeBadge: "ASTM A182 F11 / F22 / F91 (Chrome-Moly)",
        grades: ["astm-a182-f11", "astm-a182-f22", "astm-a182-f91"],
        types: flangeTypesDatabase.map((f) => ({
          ...f,
          image: f.heroImage || "/images/productsImages/alloy-flanges.jpg",
          materialContext: "Alloy Steel",
          applicableGrades: ["ASTM A182 F11 Class 2", "ASTM A182 F22 Class 3", "ASTM A182 F91"]
        }))
      },
      {
        slug: "nickel-alloys",
        name: "Nickel Alloys",
        image: "/images/productsImages/nickel-flanges.jpg",
        shortDescription: "ASTM B564 Inconel 625, Monel 400, Hastelloy C276, and Nickel 200/201 extreme corrosive and high-temperature superalloy forged flanges.",
        standards: "ASTM B564, ASME SB564, DIN 17754",
        gradeBadge: "Inconel 625 / Monel 400 / Hastelloy C276",
        grades: ["inconel-625", "monel-400", "hastelloy-c276"],
        types: flangeTypesDatabase.map((f) => ({
          ...f,
          image: f.heroImage || "/images/productsImages/nickel-flanges.jpg",
          materialContext: "Nickel Alloys",
          applicableGrades: ["Inconel 625", "Monel 400", "Hastelloy C276", "Nickel 200"]
        }))
      },
      {
        slug: "titanium",
        name: "Titanium",
        image: "/images/productsImages/titanium-flanges.jpg",
        shortDescription: "ASTM B381 Grade 2 & Grade 5 (Ti-6Al-4V) ultra-lightweight, seawater and wet chlorine impervious forged titanium flanges.",
        standards: "ASTM B381, ASME SB381",
        gradeBadge: "Titanium Grade 2 / Grade 5 (UNS R50400 / R56400)",
        grades: ["titanium-gr2"],
        types: flangeTypesDatabase.map((f) => ({
          ...f,
          image: f.heroImage || "/images/productsImages/titanium-flanges.jpg",
          materialContext: "Titanium",
          applicableGrades: ["Titanium Gr. 2", "Titanium Gr. 5"]
        }))
      }
    ]
  },

  // =========================================================================
  // 2. BUTT WELD FITTINGS
  // =========================================================================
  {
    id: 2,
    slug: "butt-weld-fittings",
    title: "BUTT WELD FITTINGS",
    subtitle: "SEAMLESS & WELDED HIGH-INTEGRITY PIPE FITTINGS",
    categoryGroup: "Fittings",
    heroImage: "/images/products/buttweld-fitting.jpg",
    std: "ASME B16.9 / ASME B16.28 / MSS SP-75 / DIN 2605",
    type: "MANUFACTURER & STOCKIST",
    overview:
      "Precision manufactured seamless and welded butt weld pipe fittings compliant with ASME B16.9 and MSS SP-75. Engineered with beveled ends for circumferential butt welding into piping systems, delivering continuous hydrodynamic flow, zero crevice traps, and maximum pressure containment.",
    materials: [
      {
        slug: "stainless-steel",
        name: "Stainless Steel",
        image: "/images/products/buttweld-fitting.jpg",
        shortDescription: "ASTM A403 WP304, WP304L, WP316, WP316L, WP321, WP347, WP904L seamless and welded butt weld fittings.",
        standards: "ASTM A403, ASME B16.9, MSS SP-43",
        gradeBadge: "ASTM A403 WP304L / WP316L / WP321 / WP904L",
        grades: ["ss-304l", "ss-316l", "ss-321", "ss-904l"],
        types: [
          {
            slug: "90-degree-elbows",
            name: "90° Long Radius Elbows",
            image: "/images/products/buttweld-fitting.jpg",
            shortDescription: "Smooth directional change fittings with centerline radius equal to 1.5 times nominal pipe diameter.",
            overview: "ASME B16.9 90° Long Radius (LR) elbows redirect pipeline fluid flow with minimal friction pressure loss.",
            pressureClasses: "SCH 10S, SCH 40S, SCH 80S, SCH 160, SCH XXS",
            sizeRange: "1/2\" NB to 36\" NB (Seamless & Welded)",
            standards: "ASTM A403, ASME B16.9",
            applicableGrades: ["WP304", "WP304L", "WP316", "WP316L", "WP321", "WP904L"]
          },
          {
            slug: "45-degree-elbows",
            name: "45° Elbows",
            image: "/images/products/buttweld-fitting.jpg",
            shortDescription: "Compact 45° directional turn fittings for piping routing in tight spaces.",
            overview: "ASME B16.9 45° butt weld elbows provide gradual directional deviations with low hydraulic turbulence.",
            pressureClasses: "SCH 10S to SCH XXS",
            sizeRange: "1/2\" NB to 36\" NB",
            standards: "ASTM A403, ASME B16.9",
            applicableGrades: ["WP304L", "WP316L", "WP321", "WP904L"]
          },
          {
            slug: "equal-tees",
            name: "Equal Tees",
            image: "/images/products/buttweld-fitting.jpg",
            shortDescription: "90-degree branch connections with identical branch and run pipe diameters.",
            overview: "ASME B16.9 straight equal tees split or combine fluid streams with structural reinforcement.",
            pressureClasses: "SCH 10S, 40S, 80S, 160",
            sizeRange: "1/2\" NB to 36\" NB",
            standards: "ASTM A403, ASME B16.9",
            applicableGrades: ["WP304L", "WP316L", "WP321", "WP904L"]
          },
          {
            slug: "reducing-tees",
            name: "Reducing Tees",
            image: "/images/products/buttweld-fitting.jpg",
            shortDescription: "Tee fittings where branch takeoff diameter is smaller than main header run.",
            overview: "Eliminates need for separate reducers when taking branch piping runs off a main header.",
            pressureClasses: "SCH 10S to SCH 160",
            sizeRange: "3/4\" x 1/2\" up to 36\" x 24\" NB",
            standards: "ASTM A403, ASME B16.9",
            applicableGrades: ["WP304L", "WP316L", "WP321"]
          },
          {
            slug: "concentric-reducers",
            name: "Concentric Reducers",
            image: "/images/products/buttweld-fitting.jpg",
            shortDescription: "Cone-shaped transition fittings with aligned centerlines for vertical pipe runs.",
            overview: "Smoothly transitions pipeline fluid velocity across differing diameters on a shared center axis.",
            pressureClasses: "SCH 10S to SCH XXS",
            sizeRange: "3/4\" x 1/2\" up to 36\" x 24\" NB",
            standards: "ASTM A403, ASME B16.9",
            applicableGrades: ["WP304L", "WP316L", "WP904L"]
          },
          {
            slug: "eccentric-reducers",
            name: "Eccentric Reducers",
            image: "/images/products/buttweld-fitting.jpg",
            shortDescription: "Offset centerline reducers with a flat bottom or top for horizontal pipeline liquid/vapor drainage.",
            overview: "Prevents air pocket entrapment in pump suction headers and pooling in steam lines.",
            pressureClasses: "SCH 10S to SCH XXS",
            sizeRange: "3/4\" x 1/2\" up to 36\" x 24\" NB",
            standards: "ASTM A403, ASME B16.9",
            applicableGrades: ["WP304L", "WP316L", "WP321"]
          },
          {
            slug: "pipe-end-caps",
            name: "Pipe End Caps",
            image: "/images/products/buttweld-fitting.jpg",
            shortDescription: "Deep-dished ellipsoidal butt-welded end caps for terminating pipeline ends.",
            overview: "Ellipsoidal head geometry absorbs hydrostatic line pressure with optimal stress distribution.",
            pressureClasses: "SCH 10S to SCH XXS",
            sizeRange: "1/2\" NB to 36\" NB",
            standards: "ASTM A403, ASME B16.9",
            applicableGrades: ["WP304L", "WP316L", "WP904L"]
          },
          {
            slug: "stub-ends",
            name: "Stub Ends (Lap Joint)",
            image: "/images/products/buttweld-fitting.jpg",
            shortDescription: "Butt-welded flanged ends pairing with Lap Joint backing flanges.",
            overview: "ASME B16.9 Type A and Type B stub ends allow loose rotating flange ring bolting.",
            pressureClasses: "SCH 10S, 40S, 80S",
            sizeRange: "1/2\" NB to 24\" NB",
            standards: "ASTM A403, ASME B16.9",
            applicableGrades: ["WP304L", "WP316L", "WP904L"]
          }
        ]
      },
      {
        slug: "carbon-steel",
        name: "Carbon Steel",
        image: "/images/productsImages/carbon-buttweld.jpg",
        shortDescription: "ASTM A234 WPB, WPC, and ASTM A420 WPL6 low-temperature seamless and welded carbon steel fittings.",
        standards: "ASTM A234, ASTM A420, ASME B16.9, MSS SP-75",
        gradeBadge: "ASTM A234 WPB / ASTM A420 WPL6",
        grades: ["astm-a234-wpb", "astm-a350-lf2"],
        types: [
          {
            slug: "90-degree-elbows",
            name: "90° Long Radius Elbows",
            image: "/images/productsImages/carbon-buttweld.jpg",
            shortDescription: "High-tensile carbon steel 90° LR elbows for steam and oil pipelines.",
            overview: "Certified to ASTM A234 WPB with fully normalized microstructure.",
            pressureClasses: "SCH 20, SCH 40, SCH 80, SCH 160, SCH XXS",
            sizeRange: "1/2\" NB to 48\" NB",
            standards: "ASTM A234, ASME B16.9",
            applicableGrades: ["WPB", "WPC", "WPL6"]
          },
          {
            slug: "equal-tees",
            name: "Equal Tees",
            image: "/images/productsImages/carbon-buttweld.jpg",
            shortDescription: "Carbon steel straight 90° pipe branch fittings.",
            overview: "Hot formed and heat-treated per ASME B16.9 pressure piping standards.",
            pressureClasses: "SCH 40 to SCH XXS",
            sizeRange: "1/2\" NB to 36\" NB",
            standards: "ASTM A234 WPB, ASME B16.9",
            applicableGrades: ["WPB", "WPL6"]
          },
          {
            slug: "concentric-reducers",
            name: "Concentric Reducers",
            image: "/images/productsImages/carbon-buttweld.jpg",
            shortDescription: "Symmetrical diameter reduction fittings for power plant piping.",
            overview: "Seamless forged cone transition fittings.",
            pressureClasses: "SCH 40, SCH 80, SCH 160",
            sizeRange: "1\" x 1/2\" to 36\" x 24\" NB",
            standards: "ASTM A234 WPB, ASME B16.9",
            applicableGrades: ["WPB", "WPL6"]
          },
          {
            slug: "pipe-end-caps",
            name: "Pipe End Caps",
            image: "/images/productsImages/carbon-buttweld.jpg",
            shortDescription: "Hemispherical and ellipsoidal carbon steel pipe closures.",
            overview: "Full penetration welded pipe dead-ends.",
            pressureClasses: "SCH 40 to SCH XXS",
            sizeRange: "1/2\" NB to 36\" NB",
            standards: "ASTM A234 WPB",
            applicableGrades: ["WPB", "WPL6"]
          }
        ]
      },
      {
        slug: "duplex-steel",
        name: "Duplex Stainless Steel",
        image: "/images/productsImages/duplex-buttweld.jpg",
        shortDescription: "ASTM A815 UNS S31803 / S32205 (Alloy 2205) dual-phase butt weld fittings for seawater and sour gas pipelines.",
        standards: "ASTM A815, ASME SA815, NACE MR0175",
        gradeBadge: "ASTM A815 UNS S31803 / S32205 (2205)",
        grades: ["duplex-2205", "ldx-2101"],
        types: [
          {
            slug: "90-degree-elbows",
            name: "90° Long Radius Elbows",
            image: "/images/productsImages/duplex-buttweld.jpg",
            shortDescription: "PREN ≥ 35 duplex steel elbows delivering double the yield strength of 316L.",
            overview: "Engineered for marine flowlines and chemical processing autoclaves.",
            pressureClasses: "SCH 10S, SCH 40S, SCH 80S",
            sizeRange: "1/2\" NB to 24\" NB",
            standards: "ASTM A815, ASME B16.9",
            applicableGrades: ["UNS S31803", "UNS S32205", "LDX 2101"]
          },
          {
            slug: "equal-tees",
            name: "Equal Tees",
            image: "/images/productsImages/duplex-buttweld.jpg",
            shortDescription: "High-strength duplex 2205 branch fittings.",
            overview: "Immune to chloride stress corrosion cracking.",
            pressureClasses: "SCH 10S, 40S, 80S",
            sizeRange: "1/2\" NB to 24\" NB",
            standards: "ASTM A815",
            applicableGrades: ["Duplex 2205", "LDX 2101"]
          },
          {
            slug: "concentric-reducers",
            name: "Concentric Reducers",
            image: "/images/productsImages/duplex-buttweld.jpg",
            shortDescription: "Duplex steel seamless line reducers.",
            overview: "Hot formed with post-weld solution annealing.",
            pressureClasses: "SCH 10S, 40S, 80S",
            sizeRange: "1\" x 1/2\" to 24\" x 16\" NB",
            standards: "ASTM A815",
            applicableGrades: ["Duplex 2205"]
          }
        ]
      },
      {
        slug: "super-duplex",
        name: "Super Duplex Stainless Steel",
        image: "/images/productsImages/duplex-buttweld.jpg",
        shortDescription: "ASTM A815 UNS S32750 (2507) and S32760 (Zeron 100) PREN ≥ 42 ultra-high performance butt weld fittings.",
        standards: "ASTM A815, NORSOK M-630",
        gradeBadge: "UNS S32750 (2507) / UNS S32760 (Zeron 100)",
        grades: ["super-duplex-2507", "zeron-100"],
        types: [
          {
            slug: "90-degree-elbows",
            name: "90° Long Radius Elbows",
            image: "/images/productsImages/duplex-buttweld.jpg",
            shortDescription: "Deepwater subsea and SWRO desalination super duplex elbows.",
            overview: "Zero pitting or crevice attack in concentrated hot brine.",
            pressureClasses: "SCH 10S, 40S, 80S",
            sizeRange: "1/2\" NB to 20\" NB",
            standards: "ASTM A815, NORSOK M-630",
            applicableGrades: ["Super Duplex 2507", "Zeron 100"]
          },
          {
            slug: "equal-tees",
            name: "Equal Tees",
            image: "/images/productsImages/duplex-buttweld.jpg",
            shortDescription: "Super duplex 2507 branch fittings.",
            overview: "PREN ≥ 42 with verified Charpy impact toughness at -40°C.",
            pressureClasses: "SCH 10S, 40S, 80S",
            sizeRange: "1/2\" NB to 20\" NB",
            standards: "ASTM A815",
            applicableGrades: ["2507", "Zeron 100"]
          }
        ]
      },
      {
        slug: "alloy-steel",
        name: "Alloy Steel",
        image: "/images/productsImages/alloy-buttweld.jpg",
        shortDescription: "ASTM A234 WP11, WP22, WP91 chrome-moly creep-resistant butt weld fittings for high-temp steam service.",
        standards: "ASTM A234, ASME B16.9",
        gradeBadge: "ASTM A234 WP11 / WP22 / WP91",
        grades: ["astm-a182-f11", "astm-a182-f22", "astm-a182-f91"],
        types: [
          {
            slug: "90-degree-elbows",
            name: "90° Long Radius Elbows",
            image: "/images/productsImages/alloy-buttweld.jpg",
            shortDescription: "High-temperature power boiler steam piping elbows.",
            overview: "Resists hydrogen attack and creep embrittlement up to 600°C.",
            pressureClasses: "SCH 40 to SCH XXS",
            sizeRange: "1/2\" NB to 24\" NB",
            standards: "ASTM A234, ASME B16.9",
            applicableGrades: ["WP11", "WP22", "WP91"]
          },
          {
            slug: "equal-tees",
            name: "Equal Tees",
            image: "/images/productsImages/alloy-buttweld.jpg",
            shortDescription: "Supercritical boiler steam line branch fittings.",
            overview: "Normalized and tempered chrome-moly steel.",
            pressureClasses: "SCH 80, SCH 160, SCH XXS",
            sizeRange: "1/2\" NB to 24\" NB",
            standards: "ASTM A234",
            applicableGrades: ["WP11", "WP22", "WP91"]
          }
        ]
      },
      {
        slug: "nickel-alloys",
        name: "Nickel Alloys",
        image: "/images/productsImages/nickel-alloy-buttweld.jpg",
        shortDescription: "ASTM B366 Inconel 625, Monel 400, Hastelloy C276, and Nickel 200/201 corrosion-immune fittings.",
        standards: "ASTM B366, ASME SB366",
        gradeBadge: "Inconel 625 / Monel 400 / Hastelloy C276",
        grades: ["inconel-625", "monel-400", "hastelloy-c276"],
        types: [
          {
            slug: "90-degree-elbows",
            name: "90° Long Radius Elbows",
            image: "/images/productsImages/nickel-alloy-buttweld.jpg",
            shortDescription: "Severe chemical reactor and wet chlorine exhaust elbows.",
            overview: "Impervious to hydrochloric and hydrofluoric acid solutions.",
            pressureClasses: "SCH 10S, SCH 40S, SCH 80S",
            sizeRange: "1/2\" NB to 16\" NB",
            standards: "ASTM B366",
            applicableGrades: ["Inconel 625", "Monel 400", "Hastelloy C276"]
          },
          {
            slug: "equal-tees",
            name: "Equal Tees",
            image: "/images/productsImages/nickel-alloy-buttweld.jpg",
            shortDescription: "Nickel superalloy piping tees.",
            overview: "Engineered for nuclear and hazardous waste processing.",
            pressureClasses: "SCH 10S, 40S, 80S",
            sizeRange: "1/2\" NB to 16\" NB",
            standards: "ASTM B366",
            applicableGrades: ["Inconel 625", "Monel 400", "Hastelloy C276"]
          }
        ]
      }
    ]
  },

  // =========================================================================
  // 3. SCREWED & FORGED FITTINGS
  // =========================================================================
  {
    id: 3,
    slug: "forged-fittings",
    title: "SCREWED & FORGED FITTINGS",
    subtitle: "HIGH-PRESSURE SOCKET WELD & SCREWED PIPE FITTINGS (3000# / 6000# / 9000#)",
    categoryGroup: "Fittings",
    heroImage: "/images/products/forge-fittings.jpg",
    std: "ASME B16.11 / MSS SP-79 / MSS SP-83 / MSS SP-97 / BS 3799",
    type: "MANUFACTURER & STOCKIST",
    overview:
      "Heavy-duty forged high-pressure fittings manufactured to ASME B16.11 standards in pressure ratings 3000#, 6000#, and 9000#. Available in Socket Weld (SW) and Threaded (NPT / BSPT / BSP) executions across carbon steel, stainless steel, alloy steel, and exotic nickel superalloys.",
    materials: [
      {
        slug: "stainless-steel",
        name: "Stainless Steel",
        image: "/images/productsImages/stainless-forged.jpg",
        shortDescription: "ASTM A182 F304, F304L, F316, F316L, F321, F347, F904L 3000# / 6000# forged fittings.",
        standards: "ASTM A182, ASME B16.11, MSS SP-83",
        gradeBadge: "ASTM A182 F304L / F316L / F321 / F904L",
        grades: ["ss-304l", "ss-316l", "ss-321", "ss-904l"],
        types: [
          {
            slug: "socket-weld-elbows",
            name: "Socket Weld 90° Elbows",
            image: "/images/productsImages/stainless-forged.jpg",
            shortDescription: "High-pressure small-bore 90° directional fittings with internal socket shoulder.",
            overview: "ASME B16.11 socket weld elbows provide superior joint rigidity in high-pressure hydraulic lines.",
            pressureClasses: "Class 3000, Class 6000, Class 9000",
            sizeRange: "1/4\" NB to 4\" NB",
            standards: "ASTM A182, ASME B16.11",
            applicableGrades: ["F304L", "F316L", "F321", "F904L"]
          },
          {
            slug: "threaded-elbows",
            name: "Threaded 90° Elbows",
            image: "/images/productsImages/stainless-forged.jpg",
            shortDescription: "Female NPT/BSPT threaded forged elbows for explosive zones where welding is prohibited.",
            overview: "ASME B1.20.1 NPT threads machined with tight pitch tolerances for cold installation.",
            pressureClasses: "Class 2000, Class 3000, Class 6000",
            sizeRange: "1/4\" NB to 4\" NB",
            standards: "ASTM A182, ASME B16.11",
            applicableGrades: ["F304L", "F316L", "F321"]
          },
          {
            slug: "forged-tees",
            name: "Forged Tees (SW & Threaded)",
            image: "/images/productsImages/stainless-forged.jpg",
            shortDescription: "Heavy forged equal and reducing 90° branch tees.",
            overview: "Solid forged blocks machined into high-integrity tee flow intersections.",
            pressureClasses: "Class 3000, 6000, 9000",
            sizeRange: "1/4\" NB to 4\" NB",
            standards: "ASME B16.11",
            applicableGrades: ["F304L", "F316L", "F904L"]
          },
          {
            slug: "forged-couplings",
            name: "Full & Half Couplings",
            image: "/images/productsImages/stainless-forged.jpg",
            shortDescription: "Sleeve couplings for straight-line pipe joining and tank nozzles.",
            overview: "Full couplings join two pipe sections; half couplings provide vessel take-offs.",
            pressureClasses: "Class 3000, 6000",
            sizeRange: "1/8\" NB to 4\" NB",
            standards: "ASME B16.11",
            applicableGrades: ["F304L", "F316L"]
          },
          {
            slug: "forged-unions",
            name: "Forged Pipe Unions",
            image: "/images/productsImages/stainless-forged.jpg",
            shortDescription: "Three-piece ground-joint unions for quick pipeline disassembly.",
            overview: "Conforms to MSS SP-83 with precision stainless-to-stainless spherical ground seating.",
            pressureClasses: "Class 3000, 6000",
            sizeRange: "1/4\" NB to 3\" NB",
            standards: "MSS SP-83, ASME B16.11",
            applicableGrades: ["F304L", "F316L"]
          },
          {
            slug: "branch-outlets-olets",
            name: "Branch Outlets (Weldolets & Sockolets)",
            image: "/images/productsImages/stainless-forged.jpg",
            shortDescription: "Integrally reinforced branch outlet fittings conforming to MSS SP-97.",
            overview: "Weldolets, Sockolets, and Thredolets provide 100% reinforced branch connections on run headers.",
            pressureClasses: "Standard, Extra Strong (XS), Schedule 160",
            sizeRange: "Run pipe 1/2\" to 36\", Branch 1/4\" to 4\"",
            standards: "MSS SP-97",
            applicableGrades: ["F304L", "F316L", "F321", "F904L"]
          }
        ]
      },
      {
        slug: "carbon-steel",
        name: "Carbon Steel",
        image: "/images/productsImages/carbon-alloy-forged.jpg",
        shortDescription: "ASTM A105 / A105N and ASTM A350 LF2 Class 1/2 forged carbon steel 3000# and 6000# fittings.",
        standards: "ASTM A105, ASTM A350 LF2, ASME B16.11",
        gradeBadge: "ASTM A105N / ASTM A350 LF2",
        grades: ["astm-a105", "astm-a350-lf2"],
        types: [
          {
            slug: "socket-weld-elbows",
            name: "Socket Weld 90° Elbows",
            image: "/images/productsImages/carbon-alloy-forged.jpg",
            shortDescription: "Heavy forged carbon steel elbows for steam, oil, and gas lines.",
            overview: "Fully normalized ASTM A105N forgings engineered to 3000# and 6000# ratings.",
            pressureClasses: "Class 3000, 6000, 9000",
            sizeRange: "1/4\" NB to 4\" NB",
            standards: "ASTM A105, ASME B16.11",
            applicableGrades: ["A105N", "A350 LF2"]
          },
          {
            slug: "forged-tees",
            name: "Forged Tees",
            image: "/images/productsImages/carbon-alloy-forged.jpg",
            shortDescription: "High-pressure carbon steel tees in socket weld and threaded styles.",
            overview: "Engineered for high-pressure hydraulic and plant utility headers.",
            pressureClasses: "Class 3000, 6000",
            sizeRange: "1/4\" NB to 4\" NB",
            standards: "ASTM A105, ASME B16.11",
            applicableGrades: ["A105N", "A350 LF2"]
          },
          {
            slug: "branch-outlets-olets",
            name: "Branch Outlets (Weldolets & Sockolets)",
            image: "/images/productsImages/carbon-alloy-forged.jpg",
            shortDescription: "MSS SP-97 carbon steel integrally reinforced branch connections.",
            overview: "Eliminates need for cutting and welding full-size pipe tees.",
            pressureClasses: "Standard, XS, Class 3000, Class 6000",
            sizeRange: "Run pipe 2\" to 36\", Branch 1/2\" to 4\"",
            standards: "MSS SP-97, ASME B31.3",
            applicableGrades: ["ASTM A105", "A350 LF2"]
          }
        ]
      },
      {
        slug: "nickel-alloys",
        name: "Nickel Alloys",
        image: "/images/productsImages/incoloy-forged.jpg",
        shortDescription: "ASTM B564 Inconel 625, Monel 400, Hastelloy C276 forged socket weld and threaded fittings.",
        standards: "ASTM B564, ASME SB564, ASME B16.11",
        gradeBadge: "Inconel 625 / Monel 400 / Hastelloy C276",
        grades: ["inconel-625", "monel-400", "hastelloy-c276"],
        types: [
          {
            slug: "socket-weld-elbows",
            name: "Socket Weld 90° Elbows",
            image: "/images/productsImages/incoloy-forged.jpg",
            shortDescription: "Severe acid and extreme temperature superalloy forged elbows.",
            overview: "Manufactured from solid forged billet blocks for maximum integrity.",
            pressureClasses: "Class 3000, 6000",
            sizeRange: "1/4\" NB to 3\" NB",
            standards: "ASTM B564, ASME B16.11",
            applicableGrades: ["Inconel 625", "Monel 400", "Hastelloy C276"]
          },
          {
            slug: "branch-outlets-olets",
            name: "Branch Outlets (Weldolets)",
            image: "/images/productsImages/incoloy-forged.jpg",
            shortDescription: "Nickel alloy MSS SP-97 branch takeoffs for acid headers.",
            overview: "Integrally reinforced branch connections in exotic alloys.",
            pressureClasses: "Class 3000, 6000",
            sizeRange: "Run 2\" to 24\", Branch 1/2\" to 3\"",
            standards: "MSS SP-97",
            applicableGrades: ["Inconel 625", "Monel 400", "Hastelloy C276"]
          }
        ]
      }
    ]
  },

  // =========================================================================
  // 4. FERRULE FITTINGS
  // =========================================================================
  {
    id: 4,
    slug: "ferrule-fittings",
    title: "FERRULE FITTINGS",
    subtitle: "INSTRUMENTATION DOUBLE & SINGLE FERRULE FLARELESS TUBE FITTINGS",
    categoryGroup: "Fittings",
    heroImage: "/images/products/ferrule-fittings.jpg",
    std: "ASTM A276 / ASTM A479 / ASME B31.3 / ISO 8434",
    type: "MANUFACTURER & STOCKIST",
    overview:
      "Precision twin-ferrule and single-ferrule tube fittings engineered for critical instrumentation, process analytical sampling, high-pressure gas distribution, and hydraulic control systems. Delivers leak-tight sealing up to 10,000 PSIG under severe vibration, thermal cycling, and pressure impulse conditions.",
    materials: [
      {
        slug: "stainless-steel",
        name: "Stainless Steel",
        image: "/images/products/ferrule-fittings.jpg",
        shortDescription: "ASTM A276 / A479 TP 316, 316L, 304, 304L, 321, 904L double ferrule compression tube fittings.",
        standards: "ASTM A276, ASTM A479, ASME B31.3",
        gradeBadge: "SS 316 / SS 316L / SS 304 / SS 904L",
        grades: ["ss-316l", "ss-304l", "ss-904l"],
        types: [
          {
            slug: "male-connectors",
            name: "Male Connectors",
            image: "/images/products/ferrule-fittings.jpg",
            shortDescription: "Tube OD to male NPT/BSPT pipe thread adaptors.",
            overview: "Connects fractional or metric tubing directly into female threaded instrument ports.",
            pressureClasses: "Up to 10,000 PSIG (governed by tube wall thickness)",
            sizeRange: "1/16\" to 2\" OD Tube (3 mm to 50 mm OD)",
            standards: "ASTM A276 / A479 TP 316L",
            applicableGrades: ["SS 316", "SS 316L", "SS 304", "SS 904L"]
          },
          {
            slug: "female-connectors",
            name: "Female Connectors",
            image: "/images/products/ferrule-fittings.jpg",
            shortDescription: "Tube OD to female NPT/BSPT pipe thread adaptors.",
            overview: "Enables connection of male threaded valves and transducers to tubing.",
            pressureClasses: "Up to 7,500 PSIG",
            sizeRange: "1/8\" to 1\" OD Tube",
            standards: "ASTM A276 TP 316L",
            applicableGrades: ["SS 316L", "SS 304L"]
          },
          {
            slug: "union-connectors",
            name: "Union Connectors",
            image: "/images/products/ferrule-fittings.jpg",
            shortDescription: "Straight tube-to-tube joining compression unions.",
            overview: "Connects two tubing runs of identical outer diameter.",
            pressureClasses: "Up to 10,000 PSIG",
            sizeRange: "1/16\" to 1-1/2\" OD Tube",
            standards: "ASTM A276 TP 316L",
            applicableGrades: ["SS 316L", "SS 304L", "SS 904L"]
          },
          {
            slug: "union-elbows",
            name: "Union Elbows",
            image: "/images/products/ferrule-fittings.jpg",
            shortDescription: "90° compression elbow connecting two tube runs.",
            overview: "Compact directional tube routing with minimal flow restriction.",
            pressureClasses: "Up to 10,000 PSIG",
            sizeRange: "1/8\" to 1\" OD Tube",
            standards: "ASTM A276 TP 316L",
            applicableGrades: ["SS 316L", "SS 304L"]
          },
          {
            slug: "union-tees",
            name: "Union Tees",
            image: "/images/products/ferrule-fittings.jpg",
            shortDescription: "Three-way compression tees for tube stream branching.",
            overview: "Provides 90° takeoff branch for instrument gauge lines.",
            pressureClasses: "Up to 10,000 PSIG",
            sizeRange: "1/8\" to 1\" OD Tube",
            standards: "ASTM A276 TP 316L",
            applicableGrades: ["SS 316L", "SS 304L"]
          },
          {
            slug: "bulkhead-unions",
            name: "Bulkhead Unions",
            image: "/images/products/ferrule-fittings.jpg",
            shortDescription: "Panel-mount compression fittings with locknuts.",
            overview: "Passes tubing through instrument panels and enclosure walls without line strain.",
            pressureClasses: "Up to 10,000 PSIG",
            sizeRange: "1/8\" to 1\" OD Tube",
            standards: "ASTM A276 TP 316L",
            applicableGrades: ["SS 316L", "SS 304L"]
          }
        ]
      },
      {
        slug: "duplex-steel",
        name: "Duplex & Super Duplex Steel",
        image: "/images/products/duplex-steel-2205-double-ferrule-tube-fittings.jpg",
        shortDescription: "UNS S31803 (2205) and UNS S32750 (2507) double ferrule compression tube fittings for offshore topside instrumentation.",
        standards: "ASTM A276, ASTM A479, NACE MR0175",
        gradeBadge: "Duplex 2205 / Super Duplex 2507",
        grades: ["duplex-2205", "super-duplex-2507"],
        types: [
          {
            slug: "male-connectors",
            name: "Male Connectors",
            image: "/images/products/duplex-steel-2205-double-ferrule-tube-fittings.jpg",
            shortDescription: "Offshore seawater and sour gas instrumentation connectors.",
            overview: "PREN ≥ 35/42 tube fittings resistant to chloride pitting and SCC.",
            pressureClasses: "Up to 15,000 PSIG",
            sizeRange: "1/4\" to 1\" OD Tube",
            standards: "ASTM A276 / A479 UNS S31803 / S32750",
            applicableGrades: ["Duplex 2205", "Super Duplex 2507"]
          },
          {
            slug: "union-connectors",
            name: "Union Connectors",
            image: "/images/products/duplex-steel-2205-double-ferrule-tube-fittings.jpg",
            shortDescription: "High-yield dual-phase straight tube unions.",
            overview: "Engineered for deepwater subsea hydraulic control skids.",
            pressureClasses: "Up to 15,000 PSIG",
            sizeRange: "1/4\" to 1\" OD Tube",
            standards: "ASTM A479",
            applicableGrades: ["Duplex 2205", "Super Duplex 2507"]
          }
        ]
      },
      {
        slug: "nickel-alloys",
        name: "Nickel Alloys",
        image: "/images/products/high-alloy-hastelloy-c276-alloy20-double-ferrule-tube-fittings.jpg",
        shortDescription: "Inconel 625, Monel 400, Hastelloy C276 compression tube fittings for severe corrosive chemicals.",
        standards: "ASTM B166, ASTM B164, ASTM B574",
        gradeBadge: "Inconel 625 / Monel 400 / Hastelloy C276",
        grades: ["inconel-625", "monel-400", "hastelloy-c276"],
        types: [
          {
            slug: "male-connectors",
            name: "Male Connectors",
            image: "/images/products/high-alloy-hastelloy-c276-alloy20-double-ferrule-tube-fittings.jpg",
            shortDescription: "Chemical analyzer sampling and sour gas tube fittings.",
            overview: "Immune to hot organic acids, wet chlorine, and hydrofluoric acid.",
            pressureClasses: "Up to 10,000 PSIG",
            sizeRange: "1/8\" to 1\" OD Tube",
            standards: "ASTM B574 Hastelloy C276",
            applicableGrades: ["Inconel 625", "Monel 400", "Hastelloy C276"]
          }
        ]
      }
    ]
  },

  // =========================================================================
  // 5. HIGH TENSILE FASTENERS
  // =========================================================================
  {
    id: 5,
    slug: "fasteners",
    title: "HIGH TENSILE FASTENERS",
    subtitle: "STUDS, BOLTS, NUTS & WASHERS FOR CRITICAL BOLTED FLANGE JOINTS",
    categoryGroup: "Fasteners",
    heroImage: "/images/products/fasteners.jpg",
    std: "ASTM A193 / ASTM A194 / ASTM A320 / ASME B18.2.1 / ASME B18.2.2 / DIN 933",
    type: "MANUFACTURER & STOCKIST",
    overview:
      "High tensile stud bolts, heavy hex bolts, socket screws, hex nuts, and precision washers engineered for critical pressure vessels and ASME B16.5 flanged connections operating under elevated temperatures and cryogenic sub-zero environments.",
    materials: [
      {
        slug: "alloy-steel",
        name: "Alloy Steel",
        image: "/images/productsImages/alloy-steel-fasteners.jpg",
        shortDescription: "ASTM A193 Grade B7, B7M, B16, and ASTM A320 Grade L7, L7M with ASTM A194 Grade 2H / 2HM heavy hex nuts.",
        standards: "ASTM A193, ASTM A194, ASTM A320, ASME B18.2.1",
        gradeBadge: "ASTM A193 B7 / B16 // ASTM A194 2H // ASTM A320 L7",
        grades: ["astm-a182-f11", "astm-a350-lf2"],
        types: [
          {
            slug: "stud-bolts",
            name: "Stud Bolts with Hex Nuts",
            image: "/images/productsImages/alloy-steel-fasteners.jpg",
            shortDescription: "Fully threaded continuous studs paired with two heavy hex nuts for flanged joints.",
            overview: "ASME B18.2.1 stud bolts distribute uniform clamping torque across ASME B16.5 flange gaskets.",
            pressureClasses: "High tensile proof load up to 105,000 PSI",
            sizeRange: "1/2\" to 4\" Diameter (M12 to M100)",
            standards: "ASTM A193 B7 / A194 2H",
            applicableGrades: ["B7", "B7M", "B16", "L7", "L7M"]
          },
          {
            slug: "hex-head-bolts",
            name: "Heavy Hex Head Bolts",
            image: "/images/productsImages/alloy-steel-fasteners.jpg",
            shortDescription: "High-strength forged structural bolts with heavy hex head profiles.",
            overview: "Engineered for structural framing, pump foundations, and equipment tie-downs.",
            pressureClasses: "Grade 8.8, Grade 10.9, Grade 12.9",
            sizeRange: "1/2\" to 3\" Diameter",
            standards: "ASTM A193, ASME B18.2.1",
            applicableGrades: ["B7", "B7M", "Grade 8.8", "Grade 10.9"]
          },
          {
            slug: "heavy-hex-nuts",
            name: "Heavy Hex Nuts",
            image: "/images/productsImages/alloy-steel-fasteners.jpg",
            shortDescription: "Thick-walled hex nuts engineered for high clamping loads.",
            overview: "Conforms to ASME B18.2.2 with heat-treated Rockwell hardness limits.",
            pressureClasses: "Proof stress up to 175,000 PSI",
            sizeRange: "1/2\" to 4\" Diameter",
            standards: "ASTM A194 Grade 2H / 2HM / 7",
            applicableGrades: ["2H", "2HM", "Grade 7"]
          }
        ]
      },
      {
        slug: "stainless-steel",
        name: "Stainless Steel",
        image: "/images/productsImages/stainless-fasteners.jpg",
        shortDescription: "ASTM A193 / A194 Grade B8 (304), B8M (316), B8T (321) Class 1 & Class 2 strain-hardened fasteners.",
        standards: "ASTM A193, ASTM A194, ISO 3506 (A2-70 / A4-80)",
        gradeBadge: "ASTM A193 B8 (304) / B8M (316) Class 1 & 2",
        grades: ["ss-304l", "ss-316l", "ss-321"],
        types: [
          {
            slug: "stud-bolts",
            name: "Stud Bolts with Hex Nuts",
            image: "/images/productsImages/stainless-fasteners.jpg",
            shortDescription: "Stainless steel continuous studs for chemical process line flanges.",
            overview: "Resistant to atmospheric oxidation and marine salt-fog corrosion.",
            pressureClasses: "Class 1 (annealed) and Class 2 (strain-hardened)",
            sizeRange: "1/2\" to 3\" Diameter",
            standards: "ASTM A193 B8 / B8M, A194 Gr 8 / 8M",
            applicableGrades: ["B8 (304)", "B8M (316)", "B8T (321)"]
          },
          {
            slug: "hex-head-bolts",
            name: "Hex Head Bolts",
            image: "/images/productsImages/stainless-fasteners.jpg",
            shortDescription: "Standard and heavy hex stainless steel bolts.",
            overview: "Conforms to ASME B18.2.1 and DIN 933/931.",
            pressureClasses: "A2-70 / A4-70 / A4-80",
            sizeRange: "M6 to M48",
            standards: "ASTM A193 B8/B8M",
            applicableGrades: ["304", "316", "316L"]
          }
        ]
      },
      {
        slug: "duplex-steel",
        name: "Duplex & Super Duplex",
        image: "/images/productsImages/duplex-fasteners.jpg",
        shortDescription: "UNS S31803 (2205) and UNS S32750 (2507) high-tensile fasteners with PREN ≥ 35/42 for marine service.",
        standards: "ASTM A182 / A276, ASTM A1082, NORSOK M-630",
        gradeBadge: "Duplex 2205 / Super Duplex 2507 Fasteners",
        grades: ["duplex-2205", "super-duplex-2507"],
        types: [
          {
            slug: "stud-bolts",
            name: "Stud Bolts with Hex Nuts",
            image: "/images/productsImages/duplex-fasteners.jpg",
            shortDescription: "High-yield subsea manifold fasteners immune to marine pitting.",
            overview: "Twice the tensile yield strength of standard stainless fasteners.",
            pressureClasses: "Yield strength ≥ 550 MPa",
            sizeRange: "1/2\" to 2-1/2\" Diameter",
            standards: "ASTM A1082 / NORSOK M-630",
            applicableGrades: ["Duplex 2205", "Super Duplex 2507"]
          }
        ]
      }
    ]
  },

  // =========================================================================
  // 6. PIPES AND TUBES
  // =========================================================================
  {
    id: 6,
    slug: "pipes-tubes",
    title: "PIPES AND TUBES",
    subtitle: "SEAMLESS & WELDED PIPES & TUBES FOR PRESSURE AND HEAT TRANSFER",
    categoryGroup: "Pipes & Tubes",
    heroImage: "/images/products/pipes.jpg",
    std: "ASTM A312 / ASTM A269 / ASTM A53 / ASTM A106 / API 5L / ASME B36.10 / B36.19",
    type: "SUPPLIER & STOCKIST",
    overview:
      "Comprehensive inventory of seamless, ERW, EFW, and DSAW pipes and tubes across stainless steel, carbon steel, alloy steel, duplex, and exotic alloys. Backed by buffer stock for immediate dispatch with Mill Test Certification (EN 10204 3.1) and third-party inspection.",
    materials: [
      {
        slug: "stainless-steel",
        name: "Stainless Steel",
        image: "/images/productsImages/ss-pipe.jpg",
        shortDescription: "ASTM A312 TP 304, 304L, 316, 316L, 321, 347, 904L seamless and welded pipes.",
        standards: "ASTM A312, ASTM A269, ASME B36.19",
        gradeBadge: "ASTM A312 TP 304L / 316L / 321 / 904L",
        grades: ["ss-304l", "ss-316l", "ss-321", "ss-904l"],
        types: [
          {
            slug: "seamless-pipes",
            name: "Seamless Pipes",
            image: "/images/productsImages/ss-pipe.jpg",
            shortDescription: "Hot finished and cold drawn seamless pipes without longitudinal weld seams.",
            overview: "Engineered for high-pressure, severe cyclic, and lethal chemical process fluid transport.",
            pressureClasses: "SCH 5S, 10S, 40S, 80S, 160, XXS",
            sizeRange: "1/8\" NB to 24\" NB",
            standards: "ASTM A312, ASME B36.19",
            applicableGrades: ["TP 304L", "TP 316L", "TP 321", "TP 904L"]
          },
          {
            slug: "welded-pipes",
            name: "Welded Pipes (ERW / EFW)",
            image: "/images/productsImages/ss-pipe.jpg",
            shortDescription: "High-frequency and automatic plasma-arc welded pipes with 100% NDT inspection.",
            overview: "Economical large-diameter fluid distribution piping.",
            pressureClasses: "SCH 5S, SCH 10S, SCH 40S",
            sizeRange: "1/2\" NB to 36\" NB",
            standards: "ASTM A312, ASTM A358",
            applicableGrades: ["TP 304L", "TP 316L"]
          },
          {
            slug: "heat-exchanger-tubes",
            name: "Heat Exchanger & Instrumentation Tubes",
            image: "/images/productsImages/ss-pipe.jpg",
            shortDescription: "Bright annealed cold drawn precision tubes for heat exchangers and boiler coils.",
            overview: "Close outside diameter and wall thickness tolerances conforming to ASTM A269.",
            pressureClasses: "Wall thickness from 0.5 mm to 6.0 mm",
            sizeRange: "6 mm to 76.2 mm OD",
            standards: "ASTM A269, ASTM A213",
            applicableGrades: ["TP 304L", "TP 316L", "TP 321"]
          }
        ]
      },
      {
        slug: "carbon-steel",
        name: "Carbon Steel",
        image: "/images/productsImages/carbon-steel-pipe.jpg",
        shortDescription: "ASTM A106 Gr. B, ASTM A53 Gr. B, API 5L Gr. B to X70, and ASTM A333 Gr. 6 line pipes.",
        standards: "ASTM A106, ASTM A53, API 5L, ASTM A333, ASME B36.10",
        gradeBadge: "ASTM A106 Gr. B / API 5L X52-X70 / A333 Gr. 6",
        grades: ["astm-a105", "astm-a350-lf2"],
        types: [
          {
            slug: "seamless-pipes",
            name: "Seamless Pipes",
            image: "/images/productsImages/carbon-steel-pipe.jpg",
            shortDescription: "High-temperature and low-temperature carbon steel seamless pressure pipes.",
            overview: "Universal standard for oil & gas refinery headers and steam power stations.",
            pressureClasses: "SCH 20, 30, 40, 80, 160, XXS",
            sizeRange: "1/2\" NB to 24\" NB",
            standards: "ASTM A106 Gr. B, ASTM A333 Gr. 6",
            applicableGrades: ["A106 Gr. B", "A53 Gr. B", "API 5L Gr. B", "A333 Gr. 6"]
          },
          {
            slug: "erw-line-pipes",
            name: "ERW / LSAW Line Pipes",
            image: "/images/productsImages/carbon-steel-pipe.jpg",
            shortDescription: "Cross-country oil and gas transmission pipeline line pipes.",
            overview: "Electric resistance welded and longitudinal submerged arc welded pipes per API 5L.",
            pressureClasses: "Standard and high-test line pipe",
            sizeRange: "2\" NB to 48\" NB",
            standards: "API 5L Gr. B, X42, X52, X60, X65, X70",
            applicableGrades: ["API 5L X52", "API 5L X65", "API 5L X70"]
          }
        ]
      },
      {
        slug: "duplex-steel",
        name: "Duplex & Super Duplex",
        image: "/images/productsImages/duplex-pipe.jpg",
        shortDescription: "ASTM A790 UNS S31803 (2205) and UNS S32750 (2507) seamless and welded pipes for marine flowlines.",
        standards: "ASTM A790, ASME SA790, NACE MR0175",
        gradeBadge: "ASTM A790 UNS S31803 / S32205 / S32750",
        grades: ["duplex-2205", "super-duplex-2507"],
        types: [
          {
            slug: "seamless-pipes",
            name: "Seamless Pipes",
            image: "/images/productsImages/duplex-pipe.jpg",
            shortDescription: "Dual-phase high-strength pipes for subsea risers and seawater skids.",
            overview: "Double the yield strength of austenitic steel with exceptional chloride SCC resistance.",
            pressureClasses: "SCH 10S, 40S, 80S, 160",
            sizeRange: "1/2\" NB to 16\" NB",
            standards: "ASTM A790",
            applicableGrades: ["Duplex 2205", "Super Duplex 2507"]
          }
        ]
      }
    ]
  },

  // =========================================================================
  // 7. INDUSTRIAL VALVES
  // =========================================================================
  {
    id: 7,
    slug: "valves",
    title: "INDUSTRIAL VALVES",
    subtitle: "GATE, GLOBE, CHECK, BALL, BUTTERFLY & SPECIALTY VALVES",
    categoryGroup: "Valves & Flow Control",
    heroImage: "/images/products/valves.jpg",
    std: "API 600 / API 602 / API 6D / API 598 / ASME B16.34 / BS 1868 / BS 1873",
    type: "MANUFACTURER & STOCKIST",
    overview:
      "Industrial valves engineered for tight shut-off, precise flow throttling, and reverse flow prevention. Manufactured in cast and forged steel executions conforming to API and ASME standards with hydrostatic test certification per API 598.",
    materials: [
      {
        slug: "stainless-steel",
        name: "Stainless Steel",
        image: "/images/products/valves.jpg",
        shortDescription: "ASTM A351 CF8, CF8M, CF3, CF3M, and ASTM A182 F316L / F304L stainless valves for chemical and cryogenic duties.",
        standards: "API 600, API 602, ASME B16.34, API 598",
        gradeBadge: "ASTM A351 CF8M / CF8 // ASTM A182 F316L",
        grades: ["ss-316l", "ss-304l"],
        types: [
          {
            slug: "gate-valves",
            name: "Gate Valves",
            image: "/images/products/gate-valve.jpg",
            shortDescription: "Bi-directional isolation valves with flexible wedge gate design.",
            overview: "Full-bore gate design provides minimal fluid flow resistance and negligible pressure loss.",
            pressureClasses: "Class 150, 300, 600, 800, 1500",
            sizeRange: "1/2\" NB to 24\" NB",
            standards: "API 600, API 602, ASME B16.34",
            applicableGrades: ["CF8M (316)", "CF8 (304)", "F316L"]
          },
          {
            slug: "globe-valves",
            name: "Globe Valves",
            image: "/images/products/globe-valve.jpg",
            shortDescription: "Precision flow throttling and regulating valves.",
            overview: "S-shaped flow body and conical disc provide linear flow regulation and shut-off.",
            pressureClasses: "Class 150, 300, 600, 800",
            sizeRange: "1/2\" NB to 16\" NB",
            standards: "BS 1873, API 602",
            applicableGrades: ["CF8M", "CF8", "F316L"]
          },
          {
            slug: "ball-valves",
            name: "Ball Valves",
            image: "/images/products/forged-ball-valve.jpg",
            shortDescription: "Quarter-turn fast shut-off valves in 2-piece and 3-piece designs.",
            overview: "Floating and trunnion-mounted ball valves with PTFE and metal seats.",
            pressureClasses: "Class 150 to Class 2500",
            sizeRange: "1/2\" NB to 12\" NB",
            standards: "API 6D, ASME B16.34",
            applicableGrades: ["CF8M", "F316L"]
          },
          {
            slug: "check-valves",
            name: "Check Valves (Non-Return)",
            image: "/images/products/non-return-valve.jpg",
            shortDescription: "Automatic backflow prevention valves.",
            overview: "Swing check and dual-plate wafer check valves prevent reverse flow in pump discharge lines.",
            pressureClasses: "Class 150, 300, 600, 800",
            sizeRange: "1/2\" NB to 20\" NB",
            standards: "BS 1868, API 594",
            applicableGrades: ["CF8M", "CF8", "F316L"]
          },
          {
            slug: "butterfly-valves",
            name: "Butterfly Valves",
            image: "/images/products/butterfly-valve.jpg",
            shortDescription: "Wafer and lug type quarter-turn rotary flow control valves.",
            overview: "Concentric and eccentric disc butterfly valves for cooling water and slurry lines.",
            pressureClasses: "PN 10, PN 16, Class 150",
            sizeRange: "2\" NB to 36\" NB",
            standards: "API 609",
            applicableGrades: ["CF8M", "CF8"]
          }
        ]
      },
      {
        slug: "carbon-steel",
        name: "Carbon & Cast Steel",
        image: "/images/products/c-steel-straight-pattern-spring-loaded-safety-valve.jpg",
        shortDescription: "ASTM A216 WCB cast steel and ASTM A105 forged carbon steel gate, globe, and check valves.",
        standards: "API 600, API 602, ASME B16.34",
        gradeBadge: "ASTM A216 WCB / ASTM A105N",
        grades: ["astm-a105", "astm-a350-lf2"],
        types: [
          {
            slug: "gate-valves",
            name: "Gate Valves",
            image: "/images/products/gate-valve.jpg",
            shortDescription: "High-pressure cast carbon steel pipeline gate valves.",
            overview: "Stellite hardfaced seat rings for steam and hydrocarbon lines.",
            pressureClasses: "Class 150, 300, 600, 900",
            sizeRange: "2\" NB to 24\" NB",
            standards: "API 600",
            applicableGrades: ["WCB", "A105N"]
          },
          {
            slug: "globe-valves",
            name: "Globe Valves",
            image: "/images/products/globe-valve.jpg",
            shortDescription: "Cast steel globe valves for boiler steam throttling.",
            overview: "Outside screw and yoke (OS&Y) design with rising stem.",
            pressureClasses: "Class 150, 300, 600",
            sizeRange: "2\" NB to 16\" NB",
            standards: "BS 1873",
            applicableGrades: ["WCB", "A105N"]
          }
        ]
      }
    ]
  },

  // =========================================================================
  // 8. PATTA PATTI (FLAT BARS & PATTI)
  // =========================================================================
  {
    id: 8,
    slug: "patta-patti",
    title: "PATTA PATTI",
    subtitle: "COLD DRAWN & HOT ROLLED ANNEALED PATTA PATTI",
    categoryGroup: "Bars & Rods",
    heroImage: "/images/products/flat-bar.jpg",
    std: "ASTM A276 / ASTM A484 / IS 2062 / DIN 1017",
    type: "SUPPLIER & STOCKIST",
    overview:
      "Precision Patta Patti (flat bars and slit patti) engineered for architectural fabrication, structural framing, bracket manufacturing, and specialized machine tooling with sharp right-angle corners and smooth surface finishes.",
    materials: [
      {
        slug: "stainless-steel",
        name: "Stainless Steel",
        image: "/images/products/flat-bar.jpg",
        shortDescription: "ASTM A276 / A484 Grade 304, 304L, 316, 316L, 321, 310, 410 cold drawn and HRAP Patta Patti.",
        standards: "ASTM A276, ASTM A484, DIN 1017",
        gradeBadge: "SS 304 / SS 304L / SS 316 / SS 316L",
        grades: ["ss-304l", "ss-316l", "ss-321"],
        types: [
          {
            slug: "cold-drawn-patta-patti",
            name: "Cold Drawn Patta Patti",
            image: "/images/products/flat-bar.jpg",
            shortDescription: "Precision cold drawn flat bars with sharp corners and tight dimensional tolerances.",
            overview: "Smooth bright finish suitable for precision tooling and architectural hardware.",
            pressureClasses: "Cold finished condition (Condition B)",
            sizeRange: "Width: 10 mm to 150 mm; Thickness: 3 mm to 50 mm",
            standards: "ASTM A276, ASTM A484",
            applicableGrades: ["304", "304L", "316", "316L"]
          },
          {
            slug: "hrap-patta-patti",
            name: "Hot Rolled Annealed & Pickled (HRAP)",
            image: "/images/products/flat-bar.jpg",
            shortDescription: "Descaled pickled flat bars for heavy structural and chemical frame fabrication.",
            overview: "Hot rolled, solution annealed, and acid-pickled for maximum corrosion resistance.",
            pressureClasses: "Annealed and pickled finish",
            sizeRange: "Width: 12 mm to 200 mm; Thickness: 4 mm to 65 mm",
            standards: "ASTM A276",
            applicableGrades: ["304L", "316L", "321"]
          },
          {
            slug: "slit-from-plate-patti",
            name: "Slit from Plate Patta Patti",
            image: "/images/products/flat-bar.jpg",
            shortDescription: "Plasma and shear cut patti with deburred edges from prime ASTM A240 plates.",
            overview: "Cost-effective custom width patti for specialized manufacturing.",
            pressureClasses: "No. 1 Mill Finish",
            sizeRange: "Custom widths up to 300 mm",
            standards: "ASTM A240",
            applicableGrades: ["304L", "316L"]
          }
        ]
      },
      {
        slug: "carbon-steel",
        name: "Carbon & Mild Steel",
        image: "/images/productsImages/carbon-steel-patti.jpg",
        shortDescription: "IS 2062 Gr. A/B, ASTM A36, AISI 1018 hot rolled and cold drawn carbon steel Patta Patti.",
        standards: "IS 2062, ASTM A36, AISI 1018",
        gradeBadge: "IS 2062 / ASTM A36 / En8 / En9",
        grades: ["astm-a105", "astm-a234-wpb"],
        types: [
          {
            slug: "hot-rolled-patta-patti",
            name: "Hot Rolled Mild Steel Patta Patti",
            image: "/images/productsImages/carbon-steel-patti.jpg",
            shortDescription: "Heavy commercial and structural carbon steel flat bars.",
            overview: "Universal material for structural brackets, gates, grills, and base plates.",
            pressureClasses: "Tensile strength 410-540 MPa",
            sizeRange: "Width: 12 mm to 150 mm; Thickness: 3 mm to 25 mm",
            standards: "IS 2062, ASTM A36",
            applicableGrades: ["IS 2062 Gr. A", "ASTM A36", "En8"]
          }
        ]
      }
    ]
  },

  // =========================================================================
  // 9. SHEETS AND PLATES
  // =========================================================================
  {
    id: 9,
    slug: "sheets-plates",
    title: "SHEETS AND PLATES",
    subtitle: "HOT ROLLED & COLD ROLLED PRIME SHEETS & HEAVY INDUSTRIAL PLATES",
    categoryGroup: "Sheets & Plates",
    heroImage: "/images/products/sheets-plates.jpg",
    std: "ASTM A240 / ASME SA240 / ASTM A516 / EN 10028",
    type: "SUPPLIER & STOCKIST",
    overview:
      "Hot rolled heavy industrial plates and cold rolled mirror/satin sheets for pressure vessels, chemical autoclaves, storage tanks, and precision architectural cladding.",
    materials: [
      {
        slug: "stainless-steel",
        name: "Stainless Steel",
        image: "/images/productsImages/stainless-sheet.jpg",
        shortDescription: "ASTM A240 TP 304, 304L, 316, 316L, 321, 310S, 904L prime sheets and heavy plates.",
        standards: "ASTM A240, ASME SA240, EN 10088-2",
        gradeBadge: "ASTM A240 TP 304L / 316L / 321 / 904L",
        grades: ["ss-304l", "ss-316l", "ss-321", "ss-904l"],
        types: [
          {
            slug: "hot-rolled-plates",
            name: "Hot Rolled Plates (HR)",
            image: "/images/productsImages/stainless-sheet.jpg",
            shortDescription: "Heavy thickness plates for pressure vessel shells and tank bottoms.",
            overview: "Solution annealed and pickled No. 1 finish plates up to 100 mm thickness.",
            pressureClasses: "No. 1 Industrial Finish",
            sizeRange: "Thickness: 3 mm to 100 mm; Width: up to 2500 mm",
            standards: "ASTM A240",
            applicableGrades: ["304L", "316L", "321", "904L"]
          },
          {
            slug: "cold-rolled-sheets",
            name: "Cold Rolled Sheets (CR)",
            image: "/images/productsImages/stainless-sheet.jpg",
            shortDescription: "Smooth precision 2B and BA finish sheets for sanitary and food vessels.",
            overview: "Superior surface flatness and close thickness tolerances.",
            pressureClasses: "2B, BA, No. 4 Hairline, Mirror 8K",
            sizeRange: "Thickness: 0.5 mm to 3.0 mm; Width: 1000/1250/1500 mm",
            standards: "ASTM A240",
            applicableGrades: ["304", "304L", "316", "316L"]
          },
          {
            slug: "checkered-plates",
            name: "Chequered & Tear Pattern Plates",
            image: "/images/productsImages/stainless-sheet.jpg",
            shortDescription: "Non-slip embossed floor and stair tread plates.",
            overview: "Mandorla/teardrop pattern providing anti-skid safety in chemical plants.",
            pressureClasses: "Embossed pattern",
            sizeRange: "Thickness: 3 mm to 10 mm",
            standards: "ASTM A240",
            applicableGrades: ["304", "316"]
          }
        ]
      },
      {
        slug: "carbon-steel",
        name: "Carbon & Boiler Plates",
        image: "/images/productsImages/special-alloy-sheet.jpg",
        shortDescription: "ASTM A516 Gr. 60/70 boiler quality plates and IS 2062 structural plates.",
        standards: "ASTM A516, IS 2062, EN 10028-2",
        gradeBadge: "ASTM A516 Gr. 60/70 / IS 2062 E250",
        grades: ["astm-a105", "astm-a350-lf2"],
        types: [
          {
            slug: "boiler-quality-plates",
            name: "Boiler Quality Plates (ASTM A516)",
            image: "/images/productsImages/special-alloy-sheet.jpg",
            shortDescription: "Killed carbon steel plates for moderate and lower temperature pressure vessels.",
            overview: "Normalized with certified Charpy impact testing at -46°C.",
            pressureClasses: "Normalized condition",
            sizeRange: "Thickness: 5 mm to 150 mm",
            standards: "ASTM A516 Gr. 70",
            applicableGrades: ["Gr. 60", "Gr. 70"]
          }
        ]
      }
    ]
  },

  // =========================================================================
  // 10. COILS & SLIT STRIPS
  // =========================================================================
  {
    id: 10,
    slug: "coils",
    title: "COILS & SLIT STRIPS",
    subtitle: "HOT & COLD ROLLED PRIME SLIT COILS & FOILS",
    categoryGroup: "Sheets & Plates",
    heroImage: "/images/products/coil.jpg",
    std: "ASTM A240 / EN 10088 / JIS G4305",
    type: "SUPPLIER & STOCKIST",
    overview:
      "Continuous hot rolled and cold rolled stainless steel, carbon steel, and nickel alloy coils slit to precision widths with deburred edges for automated stamping and roll forming lines.",
    materials: [
      {
        slug: "stainless-steel",
        name: "Stainless Steel",
        image: "/images/productsImages/stainless-coils.jpg",
        shortDescription: "Grade 304, 304L, 316, 316L, 321, 430 cold rolled and hot rolled prime coils.",
        standards: "ASTM A240, JIS G4305",
        gradeBadge: "SS 304 / SS 304L / SS 316 / SS 316L Coils",
        grades: ["ss-304l", "ss-316l"],
        types: [
          {
            slug: "cold-rolled-coils",
            name: "Cold Rolled Coils (CR)",
            image: "/images/productsImages/stainless-coils.jpg",
            shortDescription: "2B and BA finish precision thickness coils.",
            overview: "Tight thickness tolerance and bright surface for continuous stamping.",
            pressureClasses: "2B, BA, No. 4",
            sizeRange: "Thickness: 0.3 mm to 3.0 mm; Width: up to 1500 mm",
            standards: "ASTM A240",
            applicableGrades: ["304", "304L", "316", "316L"]
          },
          {
            slug: "slit-coils",
            name: "Precision Slit Coils",
            image: "/images/productsImages/stainless-coils.jpg",
            shortDescription: "Custom narrow width slit coils with round deburred edges.",
            overview: "Rotary shear slit coils delivered on wood-packaged cores.",
            pressureClasses: "Slit edge / deburred edge",
            sizeRange: "Width: 10 mm to 600 mm",
            standards: "ASTM A240",
            applicableGrades: ["304L", "316L"]
          }
        ]
      }
    ]
  },

  // =========================================================================
  // 11. RODS AND BARS
  // =========================================================================
  {
    id: 11,
    slug: "rods-bars",
    title: "RODS AND BARS",
    subtitle: "ROUND, HEXAGONAL & SQUARE SOLID BARS & SHAFTING",
    categoryGroup: "Bars & Rods",
    heroImage: "/images/products/rods-bars.jpg",
    std: "ASTM A276 / ASTM A479 / ASTM A108 / EN 10272",
    type: "SUPPLIER & STOCKIST",
    overview:
      "Precision round bars, peeled, centerless ground, and bright drawn bars engineered for pump shafts, CNC machined components, valve spindles, and high-tensile engineering shafts.",
    materials: [
      {
        slug: "stainless-steel",
        name: "Stainless Steel",
        image: "/images/productsImages/stainless-bar.jpg",
        shortDescription: "ASTM A276 / A479 TP 304, 304L, 316, 316L, 321, 310, 410, 420, 904L solid round bars.",
        standards: "ASTM A276, ASTM A479",
        gradeBadge: "ASTM A276 TP 304 / 316 / 321 / 904L",
        grades: ["ss-304l", "ss-316l", "ss-321", "ss-904l"],
        types: [
          {
            slug: "bright-round-bars",
            name: "Bright Drawn & Ground Round Bars",
            image: "/images/productsImages/stainless-bar.jpg",
            shortDescription: "Centerless ground h9/h11 tolerance bars for high-speed machining.",
            overview: "Mirror-smooth surface finish with exceptional straightness for pump shafts.",
            pressureClasses: "Tolerance h8, h9, h11",
            sizeRange: "3 mm to 100 mm Diameter",
            standards: "ASTM A276, ASTM A479",
            applicableGrades: ["304L", "316L", "321", "904L"]
          },
          {
            slug: "black-forged-bars",
            name: "Black & Peeled Forged Round Bars",
            image: "/images/productsImages/stainless-bar.jpg",
            shortDescription: "Heavy diameter forged and rough turned round billets.",
            overview: "Engineered for heavy forged component machining and ring rolling blanks.",
            pressureClasses: "Rough turned finish",
            sizeRange: "100 mm to 500 mm Diameter",
            standards: "ASTM A276",
            applicableGrades: ["304L", "316L"]
          }
        ]
      },
      {
        slug: "carbon-steel",
        name: "Carbon & Alloy Steel",
        image: "/images/productsImages/carbon-steel-round-bar.jpg",
        shortDescription: "En8, En9, En19, En24, AISI 1018, 1045, 4140, 4340 forged and bright drawn bars.",
        standards: "BS 970, AISI 4140, ASTM A108",
        gradeBadge: "En8 / En19 / En24 / AISI 4140",
        grades: ["astm-a105", "astm-a182-f11"],
        types: [
          {
            slug: "carbon-round-bars",
            name: "Commercial & High Tensile Round Bars",
            image: "/images/productsImages/carbon-steel-round-bar.jpg",
            shortDescription: "Alloy steel heat-treated bars for gears, pins, and heavy axles.",
            overview: "Quenched and tempered alloy steel bars.",
            pressureClasses: "Condition T (850-1000 MPa)",
            sizeRange: "10 mm to 300 mm Diameter",
            standards: "BS 970 En19/En24",
            applicableGrades: ["En8", "En19", "En24", "4140"]
          }
        ]
      }
    ]
  },

  // =========================================================================
  // 12. WIRE MESH & SCREENS
  // =========================================================================
  {
    id: 12,
    slug: "wire-mesh-screens",
    title: "WIRE MESH & SCREENS",
    subtitle: "WOVEN, WELDED & DUTCH WEAVE INDUSTRIAL FILTRATION CLOTH",
    categoryGroup: "Screens & Mesh",
    heroImage: "/images/products/wire-mesh.jpg",
    std: "ASTM E2016 / ISO 9044 / DIN 1211",
    type: "MANUFACTURER & STOCKIST",
    overview:
      "Precision industrial wire mesh and woven filtration cloth for solid-liquid separation, particle classification, extruder screens, and heavy quarry vibrating screens.",
    materials: [
      {
        slug: "stainless-steel",
        name: "Stainless Steel",
        image: "/images/productsImages/stainless-steel-wire-mesh.jpg",
        shortDescription: "AISI 304, 304L, 316, 316L, 321 woven wire mesh from 2 mesh down to 500 mesh.",
        standards: "ASTM E2016, ISO 9044",
        gradeBadge: "AISI 304 / AISI 316L Wire Mesh",
        grades: ["ss-304l", "ss-316l"],
        types: [
          {
            slug: "woven-wire-mesh",
            name: "Plain & Twilled Woven Wire Mesh",
            image: "/images/productsImages/stainless-steel-wire-mesh.jpg",
            shortDescription: "Square aperture filtration cloth woven with precision wire spacing.",
            overview: "Standard filtration media for chemical, pharmaceutical, and water separation.",
            pressureClasses: "2 Mesh to 400 Mesh",
            sizeRange: "Width: 1000 mm to 2000 mm Rolls",
            standards: "ASTM E2016",
            applicableGrades: ["SS 304", "SS 316", "SS 316L"]
          },
          {
            slug: "dutch-weave-mesh",
            name: "Dutch Weave Filter Cloth",
            image: "/images/products/dutch-weave-wire-mesh.jpg",
            shortDescription: "Tight warp and heavy weft wire mesh for sub-micron pressure filtration.",
            overview: "Delivers zero pinhole leakage for aerospace fuel filters and resin traps.",
            pressureClasses: "Micron ratings 2 µm to 250 µm",
            sizeRange: "Width: 1000 mm, 1220 mm",
            standards: "ISO 9044",
            applicableGrades: ["SS 304", "SS 316L"]
          },
          {
            slug: "crimped-wire-mesh",
            name: "Crimped Quarry Screens",
            image: "/images/productsImages/crimped-wire-mesh.jpg",
            shortDescription: "Heavy pre-crimped wire screens for aggregate grading and mining.",
            overview: "Resists abrasive impact in aggregate screening plants.",
            pressureClasses: "Apertures 6 mm to 100 mm",
            sizeRange: "Custom sheet panels",
            standards: "IS 2405",
            applicableGrades: ["SS 304", "Spring Steel"]
          }
        ]
      }
    ]
  },

  // =========================================================================
  // 13. LIFTING MATERIALS & TACKLE
  // =========================================================================
  {
    id: 13,
    slug: "lifting-materials",
    title: "LIFTING MATERIALS & TACKLE",
    subtitle: "SLINGS, SHACKLES, CLAMPS, HOOKS & RIGGING HARDWARE",
    categoryGroup: "Lifting & Rigging",
    heroImage: "/images/products/lifting-materials.jpg",
    std: "EN 1492 / EN 1677 / US Fed Spec RR-C-271 / ASME B30.9 / B30.26",
    type: "SUPPLIER & STOCKIST",
    overview:
      "Certified heavy rigging hardware, slings, shackles, and clamps for safe cargo handling in ports, shipyards, construction sites, and offshore rigs.",
    materials: [
      {
        slug: "alloy-steel",
        name: "Grade 80 / 100 Alloy Steel",
        image: "/images/products/lifting-materials.jpg",
        shortDescription: "Drop forged Grade 80 alloy steel shackles, hooks, master links, and chain slings with 4:1 and 5:1 safety factors.",
        standards: "EN 1677, US Fed Spec RR-C-271",
        gradeBadge: "Grade 80 / Grade 100 Alloy Steel",
        grades: ["astm-a182-f11"],
        types: [
          {
            slug: "bow-shackles",
            name: "Bow Shackles & D Shackles",
            image: "/images/products/shackle-bow.jpg",
            shortDescription: "Drop forged safety pin and screw pin rigging shackles.",
            overview: "Rated for lifting angles and heavy dynamic rigging loads.",
            pressureClasses: "Working Load Limit (WLL): 0.5T to 55T",
            sizeRange: "Pin dia: 8 mm to 70 mm",
            standards: "US Fed Spec RR-C-271",
            applicableGrades: ["Grade 80 Alloy Steel"]
          },
          {
            slug: "lifting-clamps",
            name: "Plate Lifting Clamps",
            image: "/images/products/plate-clamp.jpg",
            shortDescription: "Vertical and horizontal cam-locking steel plate clamps.",
            overview: "Cam teeth securely bite into plate edge during hoist tensioning.",
            pressureClasses: "WLL: 1T to 10T",
            sizeRange: "Jaw opening 0 to 100 mm",
            standards: "EN 13155",
            applicableGrades: ["High Tensile Alloy Steel"]
          },
          {
            slug: "chain-slings",
            name: "Grade 80 Chain Slings",
            image: "/images/products/rope-sling-sling-chain.jpg",
            shortDescription: "Single, 2-leg, and 4-leg welded alloy chain slings with grab hooks.",
            overview: "Heavy industrial overhead lifting chain assemblies.",
            pressureClasses: "WLL up to 45 Tonnes",
            sizeRange: "Chain dia: 6 mm to 32 mm",
            standards: "EN 818-4",
            applicableGrades: ["Grade 80 Steel"]
          }
        ]
      }
    ]
  },

  // =========================================================================
  // 14. STRUCTURAL PROFILES & OTHER PRODUCTS
  // =========================================================================
  {
    id: 14,
    slug: "structural-profiles",
    title: "STRUCTURAL PROFILES & OTHER PRODUCTS",
    subtitle: "ANGLES, CHANNELS, BEAMS & FABRICATED SECTIONS",
    categoryGroup: "Structural & Others",
    heroImage: "/images/products/structural-profiles.jpg",
    std: "IS 2062 / IS 808 / ASTM A36 / ASTM A276 / EN 10056",
    type: "SUPPLIER & STOCKIST",
    overview:
      "Hot rolled steel angles, parallel flange channels (ISMC), universal beams, and custom sections for industrial sheds, equipment platforms, and skids.",
    materials: [
      {
        slug: "mild-steel",
        name: "Mild Steel / Carbon Steel",
        image: "/images/products/ms-equal-angles.jpg",
        shortDescription: "IS 2062 E250 / ASTM A36 structural angles, channels, and beams.",
        standards: "IS 2062, IS 808, ASTM A36",
        gradeBadge: "IS 2062 E250 Gr. A/B / ASTM A36",
        grades: ["astm-a105"],
        types: [
          {
            slug: "equal-angles",
            name: "MS Equal & Unequal Angles",
            image: "/images/products/ms-equal-angles.jpg",
            shortDescription: "Hot rolled 90° structural L-profiles.",
            overview: "Primary bracing and framing members in structural steel buildings.",
            pressureClasses: "Hot rolled condition",
            sizeRange: "25x25x3 mm to 200x200x20 mm",
            standards: "IS 808 / IS 2062",
            applicableGrades: ["IS 2062", "ASTM A36"]
          },
          {
            slug: "channels-ismc",
            name: "Channels (ISMC & PFC)",
            image: "/images/products/ismc-channels.jpg",
            shortDescription: "C-shaped structural steel channels for purlins and headers.",
            overview: "Rolled parallel flange and tapered flange channels.",
            pressureClasses: "Standard structural weight",
            sizeRange: "ISMC 75 to ISMC 400",
            standards: "IS 808",
            applicableGrades: ["IS 2062"]
          }
        ]
      },
      {
        slug: "stainless-steel",
        name: "Stainless Steel",
        image: "/images/products/ss-equal-angles.jpg",
        shortDescription: "ASTM A276 TP 304, 316 hot rolled and laser-welded stainless structural profiles.",
        standards: "ASTM A276, EN 10056",
        gradeBadge: "SS 304 / SS 316 Angles & Channels",
        grades: ["ss-304l", "ss-316l"],
        types: [
          {
            slug: "ss-angles",
            name: "Stainless Steel Angles",
            image: "/images/products/ss-equal-angles.jpg",
            shortDescription: "Corrosion-resistant structural angles for marine and chemical skids.",
            overview: "Hot rolled and pickled stainless angles.",
            pressureClasses: "Annealed and pickled",
            sizeRange: "20x20x3 mm to 100x100x10 mm",
            standards: "ASTM A276",
            applicableGrades: ["304L", "316L"]
          }
        ]
      }
    ]
  },

  // =========================================================================
  // 15. HOSE PIPES
  // =========================================================================
  {
    id: 15,
    slug: "hose-pipes",
    title: "HOSE PIPES",
    subtitle: "CORRUGATED METALLIC FLEXIBLE HOSES & WIRE BRAIDED ASSEMBLIES",
    categoryGroup: "Pipes & Tubes",
    heroImage: "/images/products/hose-pipe.jpg",
    std: "BS 6501 / ISO 10380 / EN ISO 10380",
    type: "MANUFACTURER & STOCKIST",
    overview:
      "Hydroformed annular corrugated stainless steel flexible hoses with single or double stainless wire braiding. Absorbs high vibration, thermal expansion, and piping misalignment in steam and cryogenic services.",
    materials: [
      {
        slug: "stainless-steel",
        name: "Stainless Steel",
        image: "/images/products/hose-pipe.jpg",
        shortDescription: "AISI 304, 316L, 321 corrugated annular core with AISI 304 high-tensile wire braid.",
        standards: "ISO 10380, BS 6501 Part 1",
        gradeBadge: "AISI 321 / 316L Core + 304 Braid",
        grades: ["ss-316l", "ss-321"],
        types: [
          {
            slug: "single-braided-hoses",
            name: "Single Wire Braided Metallic Hoses",
            image: "/images/products/hose-pipe.jpg",
            shortDescription: "Annular corrugated flexible hose covered with high-density wire braiding.",
            overview: "Prevents hose elongation under internal pressure while maintaining flexibility.",
            pressureClasses: "Working pressure up to 250 Bar (depending on size)",
            sizeRange: "1/4\" NB to 12\" NB (DN 6 to DN 300)",
            standards: "ISO 10380",
            applicableGrades: ["316L Core", "321 Core", "304 Braid"]
          },
          {
            slug: "flanged-hose-assemblies",
            name: "Flanged Flexible Hose Assemblies",
            image: "/images/products/hose-pipe.jpg",
            shortDescription: "Complete hose assemblies with welded ASME B16.5 flanges.",
            overview: "Custom length hoses welded with fixed or swivel flanges ready for line installation.",
            pressureClasses: "Class 150, Class 300 ratings",
            sizeRange: "1/2\" NB to 12\" NB",
            standards: "ISO 10380 / ASME B16.5",
            applicableGrades: ["SS 316L", "SS 304"]
          }
        ]
      }
    ]
  },

  // =========================================================================
  // 16. PERFORATED SHEETS
  // =========================================================================
  {
    id: 16,
    slug: "perforated-sheets",
    title: "PERFORATED SHEETS",
    subtitle: "PRECISION PUNCHED & SLOTTED INDUSTRIAL SCREENS & PANELS",
    categoryGroup: "Screens & Mesh",
    heroImage: "/images/products/perforated-sheets.jpg",
    std: "ASTM A240 / IS 2062 / DIN 24041",
    type: "MANUFACTURER & STOCKIST",
    overview:
      "Precision CNC punched perforated sheets with round, square, slotted, and decorative apertures for acoustic dampening, grain drying, centrifugal dewatering, and architectural cladding.",
    materials: [
      {
        slug: "stainless-steel",
        name: "Stainless Steel",
        image: "/images/products/perforated-sheets.jpg",
        shortDescription: "Grade 304, 304L, 316, 316L perforated sheets in 2B and No. 4 finish.",
        standards: "ASTM A240, DIN 24041",
        gradeBadge: "SS 304 / SS 316L Perforated Sheets",
        grades: ["ss-304l", "ss-316l"],
        types: [
          {
            slug: "round-hole-perforations",
            name: "Round Hole Perforated Sheets",
            image: "/images/products/perforated-sheets.jpg",
            shortDescription: "60° staggered and 90° straight pattern round hole screens.",
            overview: "The most versatile perforation pattern providing optimal open area and sheet strength.",
            pressureClasses: "Open area 15% to 65%",
            sizeRange: "Hole dia 0.5 mm to 50 mm; Sheet up to 1500x3000 mm",
            standards: "DIN 24041",
            applicableGrades: ["304L", "316L"]
          },
          {
            slug: "slotted-hole-screens",
            name: "Slotted & Oblong Hole Screens",
            image: "/images/products/perforated-sheets.jpg",
            shortDescription: "Side-staggered slotted screens for seed cleaning and slurry dewatering.",
            overview: "Prevents particle blinding while maximizing drainage throughput.",
            pressureClasses: "Custom slot geometry",
            sizeRange: "Slot width from 1.0 mm up to 12 mm",
            standards: "DIN 24041",
            applicableGrades: ["304L", "316L"]
          }
        ]
      }
    ]
  },

  // =========================================================================
  // 17. CIRCLE
  // =========================================================================
  {
    id: 17,
    slug: "circle",
    title: "CIRCLE",
    subtitle: "PRECISION COLD-SHEARED, PLASMA & LASER-CUT CIRCLES & BLANKS",
    categoryGroup: "Sheets & Plates",
    heroImage: "/images/products/circle.jpg",
    std: "ASTM A240 / ASME SA240 / IS 2062",
    type: "SUPPLIER & STOCKIST",
    overview:
      "Precision circular blanks and discs cut from prime hot rolled and cold rolled plates using high-definition CNC plasma, fiber laser, and waterjet cutting for pressure vessel dished heads, cookware, and flange manufacturing.",
    materials: [
      {
        slug: "stainless-steel",
        name: "Stainless Steel",
        image: "/images/products/circle.jpg",
        shortDescription: "Grade 304, 304L, 316, 316L, 321, 310S laser and plasma cut circles.",
        standards: "ASTM A240, ASME SA240",
        gradeBadge: "SS 304 / SS 316L Circular Blanks",
        grades: ["ss-304l", "ss-316l"],
        types: [
          {
            slug: "laser-cut-circles",
            name: "Laser & Waterjet Cut Precision Circles",
            image: "/images/products/circle.jpg",
            shortDescription: "Burr-free circular discs with tight perpendicular edge squareness.",
            overview: "Close diameter tolerance (±0.5 mm) for direct CNC lathe machining.",
            pressureClasses: "Clean cut edge",
            sizeRange: "Diameter: 50 mm to 1500 mm; Thickness: 1 mm to 30 mm",
            standards: "ASTM A240",
            applicableGrades: ["304L", "316L"]
          },
          {
            slug: "plasma-cut-heavy-discs",
            name: "Plasma Cut Heavy Plate Discs",
            image: "/images/products/circle.jpg",
            shortDescription: "Thick plate circles for pressure vessel end-caps and manway blanks.",
            overview: "HD underwater plasma cut circles minimizing heat-affected zone (HAZ).",
            pressureClasses: "Heavy plate disc",
            sizeRange: "Diameter up to 3000 mm; Thickness up to 100 mm",
            standards: "ASTM A240",
            applicableGrades: ["304L", "316L"]
          }
        ]
      }
    ]
  },

  // =========================================================================
  // 18. STRIPS
  // =========================================================================
  {
    id: 18,
    slug: "strips",
    title: "STRIPS",
    subtitle: "PRECISION NARROW SLIT STRIPS & CONTINUOUS COILED PATTI",
    categoryGroup: "Bars & Rods",
    heroImage: "/images/products/strips.jpg",
    std: "ASTM A240 / ASTM A666 / EN 10088-2",
    type: "SUPPLIER & STOCKIST",
    overview:
      "Precision slit narrow strips in continuous coils and straight cut lengths. Supplied with deburred, slit, and conditioned round edges in soft annealed, half hard, and full hard tempers.",
    materials: [
      {
        slug: "stainless-steel",
        name: "Stainless Steel",
        image: "/images/products/strips.jpg",
        shortDescription: "AISI 304, 304L, 316, 316L, 430 precision narrow slit strips.",
        standards: "ASTM A240, ASTM A666",
        gradeBadge: "SS 304 / SS 316L Precision Strips",
        grades: ["ss-304l", "ss-316l"],
        types: [
          {
            slug: "precision-slit-strips",
            name: "Precision Slit Strips",
            image: "/images/products/strips.jpg",
            shortDescription: "Close width tolerance continuous coiled strips for automotive gaskets and clamps.",
            overview: "Rotary knife slit strips with minimum camber and tight gauge control.",
            pressureClasses: "Soft Annealed / 1/4 Hard / 1/2 Hard / Full Hard",
            sizeRange: "Width: 5 mm to 300 mm; Thickness: 0.1 mm to 3.0 mm",
            standards: "ASTM A240 / A666",
            applicableGrades: ["304L", "316L"]
          }
        ]
      }
    ]
  },

  // =========================================================================
  // 19. RING (SEAMLESS FORGED RINGS)
  // =========================================================================
  {
    id: 19,
    slug: "rings",
    title: "RING",
    subtitle: "SEAMLESS FORGED & CONTOUR ROLLED INDUSTRIAL RINGS",
    categoryGroup: "Flanges",
    heroImage: "/images/products/ring.jpg",
    std: "ASTM A182 / ASTM A105 / ASTM A350 / EN 10222",
    type: "MANUFACTURER & STOCKIST",
    overview:
      "Seamless forged and contour rolled steel rings manufactured on CNC radial-axial ring rolling mills. Delivers uniform circumferential grain flow and high fatigue resistance for slewing bearings, gears, and pressure nozzles.",
    materials: [
      {
        slug: "stainless-steel",
        name: "Stainless Steel",
        image: "/images/productsImages/stainless-forged-rings.jpg",
        shortDescription: "ASTM A182 F304, F304L, F316, F316L, F321 seamless forged rolled rings.",
        standards: "ASTM A182, EN 10222-5",
        gradeBadge: "ASTM A182 F304L / F316L Forged Rings",
        grades: ["ss-304l", "ss-316l", "ss-321"],
        types: [
          {
            slug: "seamless-rolled-rings",
            name: "Seamless Contour Rolled Rings",
            image: "/images/productsImages/stainless-forged-rings.jpg",
            shortDescription: "Radial-axial rolled rings with grain flow following the ring circumference.",
            overview: "Near net-shape rolling minimizes rough machining scrap for bearing rings.",
            pressureClasses: "Proof machined / rough turned",
            sizeRange: "OD: 150 mm to 3000 mm; Height up to 600 mm",
            standards: "ASTM A182",
            applicableGrades: ["F304L", "F316L", "F321"]
          }
        ]
      },
      {
        slug: "carbon-steel",
        name: "Carbon & Alloy Steel",
        image: "/images/productsImages/carbon-steel-forged-rings.jpg",
        shortDescription: "ASTM A105, A350 LF2, AISI 4140, 4340, En19, En24 seamless forged rings.",
        standards: "ASTM A105, ASTM A350, BS 970",
        gradeBadge: "ASTM A105 / En19 / AISI 4140 Rings",
        grades: ["astm-a105", "astm-a350-lf2"],
        types: [
          {
            slug: "gear-bearing-rings",
            name: "Gear Rim & Slewing Bearing Rings",
            image: "/images/productsImages/carbon-steel-forged-rings.jpg",
            shortDescription: "High-integrity forged blanks for heavy machinery ring gears.",
            overview: "Quenched and tempered for core toughness and surface hardenability.",
            pressureClasses: "Normalized / Quenched & Tempered",
            sizeRange: "OD: 200 mm to 2500 mm",
            standards: "ASTM A105, AISI 4140",
            applicableGrades: ["A105N", "4140", "En19"]
          }
        ]
      }
    ]
  },

  // =========================================================================
  // 20. WIRES
  // =========================================================================
  {
    id: 20,
    slug: "wires",
    title: "WIRES",
    subtitle: "SPRING WIRES, TIG/MIG WELDING & INDUSTRIAL TIE WIRES",
    categoryGroup: "Screens & Mesh",
    heroImage: "/images/products/wires.jpg",
    std: "ASTM A313 / AWS A5.9 / ASTM A580 / DIN 17224",
    type: "SUPPLIER & STOCKIST",
    overview:
      "High-tensile spring steel wires, precision TIG cut rods, MIG layer-wound wire spools, and soft annealed tie wires manufactured with bright surface draw dies and consistent coil cast/helix.",
    materials: [
      {
        slug: "stainless-steel",
        name: "Stainless Steel",
        image: "/images/products/wires.jpg",
        shortDescription: "AISI 302, 304, 316, 316L, 308L, 309L, 316LSi spring and welding wires.",
        standards: "ASTM A313, AWS A5.9",
        gradeBadge: "ASTM A313 (Spring) / AWS A5.9 ER308L/ER316L",
        grades: ["ss-304l", "ss-316l"],
        types: [
          {
            slug: "spring-wires",
            name: "High Tensile Spring Wires",
            image: "/images/products/wires.jpg",
            shortDescription: "Cold drawn high tensile wire for precision compression and extension springs.",
            overview: "Consistent tensile strength and high fatigue endurance per ASTM A313.",
            pressureClasses: "Tensile strength up to 2100 MPa",
            sizeRange: "0.2 mm to 12.0 mm Diameter",
            standards: "ASTM A313 Grade 302/304/316",
            applicableGrades: ["302", "304", "316"]
          },
          {
            slug: "welding-wires",
            name: "TIG & MIG Welding Wires",
            image: "/images/products/wires.jpg",
            shortDescription: "AWS A5.9 layer wound MIG spools and 1-meter embossed TIG filler rods.",
            overview: "Low spatter, smooth arc transfer, and crack-resistant weld deposit.",
            pressureClasses: "AWS A5.9 certified",
            sizeRange: "0.8 mm, 1.2 mm, 1.6 mm, 2.4 mm, 3.2 mm",
            standards: "AWS A5.9 ER308L, ER309L, ER316L",
            applicableGrades: ["ER308L", "ER309L", "ER316L"]
          }
        ]
      }
    ]
  }
];

// Lookup Helpers
export function getAllCatalogueProducts() {
  return productCatalogueData;
}

export function getCatalogueProduct(slug) {
  if (!slug) return null;
  const clean = cleanSlug(slug);
  return productCatalogueData.find((p) => p.slug === clean) || null;
}

export function getCatalogueMaterial(categorySlug, materialSlug) {
  const prod = getCatalogueProduct(categorySlug);
  if (!prod || !materialSlug) return null;
  const cleanMat = cleanSlug(materialSlug);
  return (
    prod.materials.find(
      (m) =>
        m.slug === cleanMat ||
        cleanMat.startsWith(m.slug) ||
        m.slug.startsWith(cleanMat)
    ) || null
  );
}

export function getCatalogueType(categorySlug, materialSlug, typeSlug) {
  const mat = getCatalogueMaterial(categorySlug, materialSlug);
  if (!typeSlug) return null;
  const cleanType = cleanSlug(typeSlug);
  const cleanSingular = cleanType.replace(/s$/, "");

  // 1. Match within active material
  if (mat && mat.types) {
    const found = mat.types.find((t) => {
      const tSingular = t.slug.replace(/s$/, "");
      return (
        t.slug === cleanType ||
        tSingular === cleanSingular ||
        t.slug.includes(cleanType) ||
        cleanType.includes(t.slug) ||
        t.slug.includes(cleanSingular) ||
        cleanType.includes(tSingular)
      );
    });
    if (found) return found;
  }

  // 2. Match across all materials in this category
  const prod = getCatalogueProduct(categorySlug);
  if (prod && prod.materials) {
    for (const otherMat of prod.materials) {
      if (otherMat.types) {
        const found = otherMat.types.find((t) => {
          const tSingular = t.slug.replace(/s$/, "");
          return (
            t.slug === cleanType ||
            tSingular === cleanSingular ||
            t.slug.includes(cleanType) ||
            cleanType.includes(t.slug) ||
            t.slug.includes(cleanSingular) ||
            cleanType.includes(tSingular)
          );
        });
        if (found) return found;
      }
    }
  }

  return null;
}

export function getCatalogueGrade(categorySlug, materialSlug, typeSlug, gradeSlug) {
  const type = getCatalogueType(categorySlug, materialSlug, typeSlug);
  if (!type || !gradeSlug) return null;
  const cleanG = cleanSlug(gradeSlug);
  return findGradeDefinition(cleanG);
}

// Hierarchy Breadcrumb Builder
export function buildHierarchyBreadcrumbs({ category, material, type, grade }) {
  const crumbs = [{ label: "Home", url: "/" }, { label: "Products", url: "/products" }];

  if (category) {
    crumbs.push({
      label: category.title,
      url: `/products/${category.slug}-manufacture-in-india`
    });
  }

  if (category && material) {
    crumbs.push({
      label: material.name,
      url: `/products/${category.slug}-manufacture-in-india/${material.slug}`
    });
  }

  if (category && material && type) {
    crumbs.push({
      label: type.name,
      url: `/products/${category.slug}-manufacture-in-india/${material.slug}/${type.slug}`
    });
  }

  if (grade) {
    crumbs.push({
      label: grade.name,
      url: `/products/${category.slug}-manufacture-in-india/${material.slug}/${type.slug}/${grade.slug || grade.id}`
    });
  }

  return crumbs;
}
