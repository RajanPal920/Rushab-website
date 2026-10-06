import productsData from './products.json' with { type: 'json' };
import { productVariants } from './productVariants.js';

export const materialsList = [
  {
    slug: 'carbon',
    aliases: ['carbon-steel'],
    name: 'Carbon',
    displayName: 'Carbon Steel',
    category: 'Ferrous Metallurgy',
    gradeBadge: 'ASTM A105 / A106 Gr. B / A234 WPB',
    standards: 'ASTM A106 Gr. B, ASTM A53 Gr. B, API 5L Gr. B to X70, ASTM A333, ASTM A234 WPB, ASTM A105',
    heroDesc: 'High-tensile pipeline, pressure vessels, and heavy engineering carbon steel products certified to ASTM A106, A53, API 5L, and ASTM A105.',
    grades: [
      'High Temperature: ASTM A106 Gr. B, A53 Gr. B',
      'Line Pipe: API 5L Gr. B, X42, X46, X52, X56, X60, X65, X70',
      'Low Temperature: ASTM A333 Gr. 3 / Gr. 6, A420 WPL6',
      'Boiler / Pressure Plate: ASTM A516 Gr. 60/70, ASTM A517, IS 2062',
      'Forgings: ASTM A105, A350 LF2, LF3'
    ],
    features: 'Engineered for high-pressure fluid transportation, steam power pipelines, low-temperature services, and heavy structural framing.',
    isMatch: (v) => {
      const mg = (v.materialGroup || '').trim();
      const vs = (v.slug || '').trim().toLowerCase();
      const vt = (v.title || '').trim().toLowerCase();
      if (mg.includes('Stainless') || mg.includes('Nickel') || vs.includes('stainless') || vs.includes('nickel')) return false;
      return mg === 'Carbon' || mg === 'Carbon Steel' || mg === 'High Carbon Steel' ||
             vs.startsWith('carbon-') || vs.startsWith('hot-rolled-') || vs.startsWith('cold-rolled-') || vs.startsWith('high-carbon-') ||
             vt.startsWith('carbon steel') || vt.startsWith('carbon & mild steel');
    }
  },
  {
    slug: 'alloy-steel',
    aliases: ['alloys'],
    name: 'Alloy Steel',
    displayName: 'Alloy Steel',
    category: 'High-Temperature Metallurgy',
    gradeBadge: 'ASTM A335 / A234 P11, P22, P91',
    standards: 'ASTM A335, ASTM A234, ASTM A182, ASTM A387, AISI 4140, AISI 4340, EN24',
    heroDesc: 'Elevated temperature, creep rupture resistant alloy steel products certified to ASTM A335, A234, A182, and heavy engineering grades.',
    grades: [
      'Pipe Grades: ASTM A335 P1, P5, P9, P11, P22, P91',
      'Fitting Grades: ASTM A234 WP1, WP5, WP11, WP22, WP91',
      'Forging Grades: ASTM A182 F1, F5, F9, F11, F22, F91',
      'Plate Grades: ASTM A387 Gr. 5, 9, 11, 12, 22, 91 (Class 1 & 2)',
      'High Tensile Fastener Grades: 4.6, 8.8, 10.9, 12.9, B7, B7M, 2H'
    ],
    features: 'High chromium and molybdenum content delivering exceptional thermal strength, resistance to hydrogen embrittlement, and creep rupture strength.',
    isMatch: (v) => {
      const mg = (v.materialGroup || '').trim();
      const vs = (v.slug || '').trim().toLowerCase();
      const vt = (v.title || '').trim().toLowerCase();
      if (mg.includes('Nickel') || mg.includes('High Alloy') || mg.includes('Exotic') || vs.includes('nickel') || vs.includes('high-alloy') || vs.includes('carbon')) return false;
      return mg === 'Alloy Steel' || mg === 'Alloys' || mg === 'Alloy Steel Patta' || mg === 'Alloys Patta' ||
             vs.startsWith('alloy-') || vs.startsWith('alloys-') || vt.startsWith('alloy steel') || vt.startsWith('alloy pipes') || vt.startsWith('alloys buttweld');
    }
  },
  {
    slug: 'duplex',
    aliases: ['duplex-steel'],
    name: 'Duplex',
    displayName: 'Duplex Stainless Steel',
    category: 'Dual-Phase Metallurgy',
    gradeBadge: 'UNS S31803 / S32205 (Alloy 2205)',
    standards: 'ASTM A790, ASTM A815, ASTM A182, ASTM A240, W.Nr. 1.4462',
    heroDesc: 'Dual-phase austenitic-ferritic stainless steel products offering superior yield strength and chloride stress corrosion cracking resistance.',
    grades: [
      'UNS S31803 (Standard Duplex)',
      'UNS S32205 (Alloy 2205 - High N)',
      'W.Nr. 1.4462 (European Equivalent)'
    ],
    features: 'Twice the mechanical yield strength of standard austenitic grades, coupled with outstanding resistance to chloride stress corrosion cracking (SCC).',
    isMatch: (v) => {
      const mg = (v.materialGroup || '').trim();
      const vs = (v.slug || '').trim().toLowerCase();
      const vt = (v.title || '').trim().toLowerCase();
      if (mg === 'Super Duplex' || vs.startsWith('super-duplex') || vs.includes('2507')) return false;
      return mg === 'Duplex' || mg === 'Duplex Steel' || mg === 'Duplex Alloys' ||
             vs.startsWith('duplex-') || vt.startsWith('duplex steel') || vt.startsWith('duplex & super duplex');
    }
  },
  {
    slug: 'super-duplex',
    aliases: ['super-duplex-steel'],
    name: 'Super Duplex',
    displayName: 'Super Duplex Stainless Steel',
    category: 'Extreme Marine Metallurgy',
    gradeBadge: 'UNS S32750 (2507) / S32760 (Zeron 100)',
    standards: 'ASTM A790, ASTM A815, ASTM A182, ASTM A240, NORSOK M-630',
    heroDesc: 'PREN ≥ 42 ultra-high performance super duplex stainless steel products (2507 / Zeron 100) for subsea, offshore, and harsh chemical environments.',
    grades: [
      'UNS S32750 (Alloy 2507)',
      'UNS S32760 (Zeron 100 / F55)',
      'UNS S32550 (Ferralium 255)'
    ],
    features: 'High pitting resistance equivalent number (PREN >= 42) optimized for deep sea subsea manifolds, desalination systems, and aggressive chemical digestors.',
    isMatch: (v) => {
      const mg = (v.materialGroup || '').trim();
      const vs = (v.slug || '').trim().toLowerCase();
      const vt = (v.title || '').trim().toLowerCase();
      return mg === 'Super Duplex' || vs.startsWith('super-duplex') || vs.includes('2507') ||
             vt.startsWith('super duplex') || vt.startsWith('duplex & super duplex');
    }
  },
  {
    slug: 'stainless-steel',
    aliases: ['stainless'],
    name: 'Stainless Steel',
    displayName: 'Stainless Steel',
    category: 'Austenitic Metallurgy',
    gradeBadge: 'AISI 304, 304L, 316, 316L, 321, 347, 904L',
    standards: 'ASTM A312, ASTM A240, ASTM A182, ASTM A403, ASTM A276, ASME B16.9',
    grades: [
      'Austenitic: 304, 304L, 304H, 316, 316L, 316H, 316Ti',
      'High Alloy: 317, 317L, 321, 321H, 347, 347H, 310, 310S',
      'Super Austenitic: 904L (UNS N08904)',
      'Ferritic / Martensitic: 409, 410, 410S, 420, 430'
    ],
    features: 'Superior oxidation resistance, excellent weldability, and resistance to pitting in acidic, marine, and industrial chemical environments.',
    isMatch: (v) => {
      const mg = (v.materialGroup || '').trim();
      const vs = (v.slug || '').trim().toLowerCase();
      const vt = (v.title || '').trim().toLowerCase();
      if (mg.includes('Duplex') || vs.includes('duplex')) return false;
      return mg === 'Stainless Steel' || mg === 'Stainless Steel Patta' ||
             vs.startsWith('stainless-steel-') || vs.startsWith('ss-') || vt.startsWith('stainless steel');
    }
  },
  {
    slug: 'nickel-alloy',
    aliases: ['nickel-alloys', 'nickel'],
    name: 'Nickel Alloy',
    displayName: 'Nickel Alloy & Superalloys',
    category: 'Non-Ferrous Superalloys',
    gradeBadge: 'Nickel 200/201, Inconel, Monel, Hastelloy',
    standards: 'ASTM B160, ASTM B161, ASTM B162, ASTM B165, ASTM B167, ASTM B622, ASTM B564',
    heroDesc: 'High-temperature, extreme caustic, and acid-resistant nickel alloy products including Inconel, Monel, Hastelloy, Incoloy, and Cupro-Nickel.',
    grades: [
      'Pure Nickel: Nickel 200 (UNS N02200), Nickel 201 (UNS N02201)',
      'Monel: Monel 400 (UNS N04400), Monel K500 (UNS N05500)',
      'Inconel: Inconel 600, 601, 625, 718, Incoloy 800, 825',
      'Hastelloy: Hastelloy C276, C22, B2, B3 (UNS N10276)',
      'Copper-Nickel: Cu-Ni 70/30 (C71500), Cu-Ni 90/10 (C70600)'
    ],
    features: 'Unmatched resistance to caustic alkalies, hydrofluoric acid, high thermal cycling (up to 1200°C), and wet chlorine gas.',
    isMatch: (v) => {
      const mg = (v.materialGroup || '').trim();
      const vs = (v.slug || '').trim().toLowerCase();
      const vt = (v.title || '').trim().toLowerCase();
      return mg === 'Nickel' || mg === 'Nickel Alloy' || mg === 'Nickel Alloy Patta' || mg === 'Nickel Copper' ||
             mg === 'Nickel & Alloys' || mg === 'Inconel & Incoloy' || mg === 'Monel Alloy' || mg === 'Inconel Core' ||
             mg === 'Incoloy Superalloy' || mg === 'Hastelloy Core' || mg === 'Copper Nickel' ||
             vs.includes('nickel-') || vs.includes('monel-') || vs.includes('inconel-') || vs.includes('incoloy-') || vs.includes('hastelloy-') || vs.includes('copper-nickel-') ||
             vt.includes('Nickel') || vt.includes('Monel') || vt.includes('Inconel') || vt.includes('Incoloy') || vt.includes('Hastelloy');
    }
  },
  {
    slug: 'monel',
    aliases: ['monel-alloy'],
    name: 'Monel',
    displayName: 'Monel (Nickel-Copper Alloy)',
    category: 'Non-Ferrous Metallurgy',
    gradeBadge: 'Monel 400 (UNS N04400) / Monel K500',
    standards: 'ASTM B165, ASTM B127, ASTM B164, ASTM B564',
    heroDesc: 'Rapid sea-water flow, hydrofluoric acid, and chloride stress cracking immune Monel 400 and K500 alloy products.',
    grades: [
      'Monel 400 (UNS N04400)',
      'Monel K500 (UNS N05500 - Precipitation Hardened)'
    ],
    features: 'Immune to chloride stress corrosion cracking with excellent resistance to rapidly flowing seawater, marine atmospheres, and sulfuric solutions.',
    isMatch: (v) => {
      const vs = (v.slug || '').trim().toLowerCase();
      const vt = (v.title || '').trim().toLowerCase();
      return vs.includes('monel') || vt.includes('monel');
    }
  },
  {
    slug: 'inconel',
    aliases: ['incoloy', 'inconel-incoloy'],
    name: 'Inconel',
    displayName: 'Inconel & Incoloy (Nickel-Chromium)',
    category: 'High-Temperature Superalloys',
    gradeBadge: 'Inconel 600, 601, 625, 718, Incoloy 800/825',
    standards: 'ASTM B167, ASTM B168, ASTM B564, ASTM B444, ASTM B409',
    heroDesc: 'Thermal cycling resistant passivating nickel-chromium superalloys retaining high mechanical strength up to 1200°C.',
    grades: [
      'Inconel 600 (UNS N06600)',
      'Inconel 601 (UNS N06601)',
      'Inconel 625 (UNS N06625)',
      'Incoloy 800 / 825 (UNS N08800 / N08825)'
    ],
    features: 'Retains mechanical strength under extreme temperatures up to 1200°C while resisting high-temperature oxidation and carburization.',
    isMatch: (v) => {
      const vs = (v.slug || '').trim().toLowerCase();
      const vt = (v.title || '').trim().toLowerCase();
      return vs.includes('inconel') || vs.includes('incoloy') || vt.includes('inconel') || vt.includes('incoloy');
    }
  },
  {
    slug: 'hastelloy',
    aliases: ['hastelloy-alloy'],
    name: 'Hastelloy',
    displayName: 'Hastelloy (Nickel-Mo-Cr)',
    category: 'Severe Chemical Metallurgy',
    gradeBadge: 'Hastelloy C276, C22, B2, B3 (UNS N10276)',
    standards: 'ASTM B622, ASTM B575, ASTM B564, ASTM B619',
    heroDesc: 'Universal corrosion resistant metallurgy with complete immunity to wet chlorine gas, hypochlorite, and strong oxidizing salts.',
    grades: [
      'Hastelloy C276 (UNS N10276)',
      'Hastelloy C22 (UNS N06022)',
      'Hastelloy B2 / B3 (UNS N10665)'
    ],
    features: 'Outstanding resistance to pitting, stress-corrosion cracking, and oxidizing atmospheres up to 1040°C.',
    isMatch: (v) => {
      const vs = (v.slug || '').trim().toLowerCase();
      const vt = (v.title || '').trim().toLowerCase();
      return vs.includes('hastelloy') || vt.includes('hastelloy');
    }
  },
  {
    slug: 'titanium',
    aliases: ['titanium-alloys'],
    name: 'Titanium',
    displayName: 'Titanium & Titanium Alloys',
    category: 'Refractory Metallurgy',
    gradeBadge: 'ASTM Grade 1, Grade 2, Grade 5 (Ti-6Al-4V)',
    standards: 'ASTM B338, ASTM B265, ASTM B348, ASTM B381, ASME SB-338',
    heroDesc: 'High strength-to-weight, complete seawater and chloride immunity Grade 1, Grade 2, and Grade 5 titanium products.',
    grades: [
      'Grade 1 (CP 4 - Highest ductility for plate heat exchangers)',
      'Grade 2 (CP 3 - Standard industrial workhorse)',
      'Grade 5 (Ti-6Al-4V - High mechanical tensile strength)',
      'Grade 7 (Ti-0.15Pd - Enhanced reducing acid resistance)'
    ],
    features: 'Extraordinary strength-to-weight ratio, complete immunity to marine fouling, biological attack, and ambient chloride crevice corrosion.',
    isMatch: (v) => {
      const mg = (v.materialGroup || '').trim();
      const vs = (v.slug || '').trim().toLowerCase();
      const vt = (v.title || '').trim().toLowerCase();
      return mg.includes('Titanium') || vs.includes('titanium') || vt.includes('titanium');
    }
  },
  {
    slug: 'copper',
    aliases: ['copper-nickel', 'cupro-nickel', 'copper-brass'],
    name: 'Copper',
    displayName: 'Copper & Copper Alloys',
    category: 'Non-Ferrous Metallurgy',
    gradeBadge: 'Cu-DHP, ETP Copper, Cu-Ni 70/30 & 90/10',
    standards: 'ASTM B111, ASTM B42, ASTM B171, BS 2871, ASTM B75',
    heroDesc: 'High thermal and electrical conductivity copper and cupro-nickel products with innate anti-biofouling performance.',
    grades: [
      'ETP Copper (C11000)',
      'Cu-DHP (C12200)',
      'Cupro-Nickel 70/30 (C71500)',
      'Cupro-Nickel 90/10 (C70600)'
    ],
    features: 'Exceptional thermal conductivity and innate anti-biofouling performance in marine cooling condensers and electrical busbars.',
    isMatch: (v) => {
      const mg = (v.materialGroup || '').trim();
      const vs = (v.slug || '').trim().toLowerCase();
      const vt = (v.title || '').trim().toLowerCase();
      return mg.includes('Copper') || vs.includes('copper') || vt.includes('copper');
    }
  },
  {
    slug: 'brass',
    aliases: ['brass-bronze'],
    name: 'Brass',
    displayName: 'Brass & Bronze Alloys',
    category: 'Non-Ferrous Metallurgy',
    gradeBadge: 'Admiralty Brass, Naval Brass, Phosphor Bronze',
    standards: 'ASTM B111, ASTM B171, ASTM B16, ASTM B135',
    heroDesc: 'Corrosion resistant marine deck fittings, condenser and chiller tubing brass and bronze formats.',
    grades: [
      'Admiralty Brass (C44300)',
      'Naval Brass (C46400)',
      'Phosphor Bronze (C51000)',
      'Aluminium Bronze (C61400)'
    ],
    features: 'High corrosion resistance in marine environments, low friction, and exceptional acoustic and mechanical characteristics.',
    isMatch: (v) => {
      const mg = (v.materialGroup || '').trim();
      const vs = (v.slug || '').trim().toLowerCase();
      const vt = (v.title || '').trim().toLowerCase();
      return mg.includes('Brass') || vs.includes('brass') || vt.includes('brass');
    }
  },
  {
    slug: 'aluminium',
    aliases: ['aluminum'],
    name: 'Aluminium',
    displayName: 'Aluminium & Aluminium Alloys',
    category: 'Non-Ferrous Metallurgy',
    gradeBadge: '1000, 5000 (Marine: 5083/5086), 6000 Series (6061-T6)',
    standards: 'ASTM B209, ASTM B221, ASTM B241',
    heroDesc: 'Low density, high strength-to-weight structural profiles, perforated sheets, and cryogenic temperature ductiles.',
    grades: [
      '1000 Series (Commercial Pure: 1050, 1100)',
      '5000 Series (Marine Grade: 5083, 5086, 5052)',
      '6000 Series (Structural: 6061-T6, 6082-T6)'
    ],
    features: 'Low density, excellent thermal/electrical conduction, and retained ductility at cryogenic liquid gas temperatures.',
    isMatch: (v) => {
      const mg = (v.materialGroup || '').trim();
      const vs = (v.slug || '').trim().toLowerCase();
      const vt = (v.title || '').trim().toLowerCase();
      return mg.includes('Aluminum') || vs.includes('aluminum') || vs.includes('aluminium') || vt.includes('aluminum') || vt.includes('aluminium');
    }
  },
  {
    slug: 'mild-steel',
    aliases: ['ms'],
    name: 'Mild Steel',
    displayName: 'Mild Steel & Carbon Structural',
    category: 'Structural Ferrous Metallurgy',
    gradeBadge: 'IS 2062 Gr. A/B, ASTM A36, Fe 410',
    standards: 'IS 2062, ASTM A36, BS 4360, EN 10025 S275JR',
    heroDesc: 'Structural angles, channels, beam sections, and general fabrication carbon mild steel products.',
    grades: [
      'IS 2062 Grade A, Grade B, Grade C',
      'ASTM A36 / ASME SA36 Structural Steel',
      'EN 10025 S235JR, S275JR, S355JR'
    ],
    features: 'Cost-effective structural steel with high ductility, excellent weldability, and proven reliability for heavy construction framing.',
    isMatch: (v) => {
      const mg = (v.materialGroup || '').trim();
      const vs = (v.slug || '').trim().toLowerCase();
      const vt = (v.title || '').trim().toLowerCase();
      return mg === 'Mild Steel' || vs.startsWith('ms-') || vs.startsWith('is') || vt.startsWith('ms ') || vt.includes('mild steel');
    }
  },
  {
    slug: 'exotic-alloy',
    aliases: ['exotic-alloys'],
    name: 'Exotic Alloy',
    displayName: 'Exotic Alloys (Tantalum & Zirconium)',
    category: 'Refractory Exotic Metallurgy',
    gradeBadge: 'Tantalum (UNS R05200) / Zirconium 702',
    standards: 'ASTM B521, ASTM B365, ASTM B708, ASTM B550',
    heroDesc: 'Extreme acid corrosion immunity refractory metals including Tantalum and Zirconium for harsh boiling acid applications.',
    grades: [
      'Tantalum (UNS R05200 / R05400)',
      'Zirconium 702 (UNS R60702 - Pure Zirconium)',
      'Zirconium 705 (UNS R60705 - Zr-Nb Alloy)'
    ],
    features: 'Virtually unattackable by boiling hydrochloric, nitric, and sulfuric acids; unmatched biocompatibility, refractory density, and chemical passivity.',
    isMatch: (v) => {
      const mg = (v.materialGroup || '').trim();
      const vs = (v.slug || '').trim().toLowerCase();
      const vt = (v.title || '').trim().toLowerCase();
      return mg.includes('Exotic') || mg.includes('Tantalum') || vs.includes('tantalum') || vs.includes('zirconium') || vt.includes('tantalum') || vt.includes('zirconium');
    }
  },
  {
    slug: 'high-alloy',
    aliases: ['high-alloys'],
    name: 'High Alloy',
    displayName: 'High Alloys (Sanicro 28, 904L, Alloy 20)',
    category: 'Specialty Acid-Resistant Metallurgy',
    gradeBadge: 'Sanicro 28, SMO 254, Alloy 20, Alloy 28',
    standards: 'ASTM B668, ASTM B625, ASTM B464, ASTM A240',
    heroDesc: 'Phosphoric and sulfuric acid-resisting metallurgy including Sanicro 28, Alloy 20, SMO 254, Alloy 28, and Super Austenitic 904L.',
    grades: [
      'Sanicro 28 (UNS N08028 / 1.4563)',
      'Alloy 20 (Carpenter 20 / UNS N08020)',
      'SMO 254 (UNS S31254 / 6% Moly)',
      '904L (UNS N08904 / 1.4539 Super Austenitic)'
    ],
    features: 'High chromium, nickel, and molybdenum content with copper addition providing outstanding resistance to strong reducing acids and stress corrosion cracking.',
    isMatch: (v) => {
      const mg = (v.materialGroup || '').trim();
      const vs = (v.slug || '').trim().toLowerCase();
      const vt = (v.title || '').trim().toLowerCase();
      if (vt.startsWith('stainless steel')) return false;
      return mg === 'High Alloys' || mg === 'High Alloys Patta' || mg === 'High Alloy Disks' ||
             mg === 'High-Performance Alloys' || mg === 'High-Performance Alloy' || mg === 'Alloy 28' ||
             mg === 'Special Alloy' || mg === 'Special Alloys' ||
             vs.startsWith('high-alloy-') || vs.includes('alloy-28') || vs.includes('special-alloy') || vs.includes('specialty-industrial-circles') ||
             vt.startsWith('high alloy') || vt.startsWith('alloy 28') || vt.startsWith('special alloy');
    }
  }
];

// Helper to find a material definition by slug or alias (case-insensitive)
export function getMaterialInfo(materialSlug) {
  if (!materialSlug) return null;
  const normalized = materialSlug.toLowerCase().trim();
  return (
    materialsList.find(
      (m) => m.slug === normalized || (m.aliases && m.aliases.includes(normalized))
    ) || null
  );
}

// Function that returns strictly matching product cards for a material
export function getProductsForMaterial(materialSlug) {
  const def = getMaterialInfo(materialSlug);
  if (!def) return [];

  const cards = [];
  const seenDetailUrls = new Set();

  // Iterate over product families
  for (const product of productsData) {
    const parentSlug = product.slug;
    const variants = productVariants[parentSlug] || [];

    for (const v of variants) {
      if (def.isMatch(v)) {
        const detailRoute = `/products/${parentSlug}/${v.slug}`;
        if (!seenDetailUrls.has(detailRoute)) {
          seenDetailUrls.add(detailRoute);
          cards.push({
            id: `${parentSlug}-${v.slug}`,
            slug: `${parentSlug}/${v.slug}`,
            detailUrl: detailRoute,
            title: v.title,
            subtitle: v.shortDescription || product.subtitle,
            image: v.image || product.image,
            std: v.standards || product.std,
            type: v.materialGroup || def.displayName,
            category: product.category,
            materials: [def.displayName || def.name],
            description: v.overview || product.description,
            parentProduct: product
          });
        }
      }
    }
  }

  // NOTE: STRICT FILTERING!
  // If NO variants match, cards will be empty -> empty state rendered.
  // NO generic catalog fallback. NO unrelated products.
  return cards;
}
