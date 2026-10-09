// src/utils/seoSlugUtils.js
import productsData from '../data/products.json';
import { productVariants } from '../data/productVariants.js';
import { materialsList } from '../data/materialsData.js';

export const SEO_SUFFIX = 'manufacture-in-india';

/**
 * Standardizes product category slug to SEO format:
 * e.g. "butt-weld-fittings" -> "butt-weld-fittings-manufacture-in-india"
 */
export function toProductSeoSlug(prodOrSlug) {
  const raw = typeof prodOrSlug === 'string' ? prodOrSlug : prodOrSlug?.slug;
  if (!raw) return '';
  const clean = raw.trim().toLowerCase().replace(/-manufacture-in-india$/, '');
  if (clean === 'pipes-and-tubes' || clean === 'pipes-tubes') return `pipes-tubes-${SEO_SUFFIX}`;
  if (clean === 'sheets-and-plates' || clean === 'sheets-plates') return `sheets-plates-${SEO_SUFFIX}`;
  return `${clean}-${SEO_SUFFIX}`;
}

/**
 * Standardizes variant slug to SEO format:
 * e.g. "super-duplex-buttweld-fittings" -> "super-duplex-butt-weld-fittings-manufacture-in-india"
 */
export function toVariantSeoSlug(variantOrSlug, parentKey) {
  const raw = typeof variantOrSlug === 'string' ? variantOrSlug : variantOrSlug?.slug;
  if (!raw) return '';
  const pKey = typeof parentKey === 'string' ? parentKey : (parentKey?.slug || '');
  const clean = raw.trim().toLowerCase().replace(/-manufacture-in-india$/, '');
  if (pKey === 'lifting-materials' && clean === 'lifting-materials') {
    return `lifting-materials-hardware-${SEO_SUFFIX}`;
  }
  const norm = clean.replace(/buttweld/g, 'butt-weld');
  return `${norm}-${SEO_SUFFIX}`;
}

/**
 * Standardizes material slug to SEO format:
 * e.g. "stainless-steel" -> "stainless-steel-manufacture-in-india"
 */
export function toMaterialSeoSlug(matOrSlug) {
  const raw = typeof matOrSlug === 'string' ? matOrSlug : matOrSlug?.slug;
  if (!raw) return '';
  const clean = raw.trim().toLowerCase().replace(/-manufacture-in-india$/, '');
  if (clean === 'carbon' || clean === 'carbon-steel' || clean === 'cs') return `carbon-steel-${SEO_SUFFIX}`;
  if (clean === 'duplex' || clean === 'duplex-steel') return `duplex-steel-${SEO_SUFFIX}`;
  if (clean === 'super-duplex' || clean === 'super-duplex-steel') return `super-duplex-steel-${SEO_SUFFIX}`;
  if (clean === 'ss' || clean === 'stainless-steel') return `stainless-steel-${SEO_SUFFIX}`;
  if (clean === 'as' || clean === 'alloy-steel' || clean === 'alloys') return `alloy-steel-${SEO_SUFFIX}`;
  if (clean === 'nickel' || clean === 'nickel-alloy') return `nickel-alloy-${SEO_SUFFIX}`;
  if (clean === 'copper-brass' || clean === 'copper') return `copper-${SEO_SUFFIX}`;
  if (clean === 'aluminum' || clean === 'aluminium') return `aluminium-${SEO_SUFFIX}`;
  if (clean === 'exotic-alloys' || clean === 'exotic-alloy') return `exotic-alloy-${SEO_SUFFIX}`;
  if (clean === 'high-alloys' || clean === 'high-alloy') return `high-alloy-${SEO_SUFFIX}`;
  return `${clean}-${SEO_SUFFIX}`;
}

/**
 * Returns full path for product:
 * e.g. "/products/butt-weld-fittings-manufacture-in-india"
 */
export function getProductUrl(prodOrSlug) {
  const slug = toProductSeoSlug(prodOrSlug);
  return slug ? `/products/${slug}` : '/products';
}

/**
 * Returns full path for variant:
 * e.g. "/products/super-duplex-butt-weld-fittings-manufacture-in-india"
 */
export function getVariantUrl(variantOrSlug, parentProduct) {
  const pKey = typeof parentProduct === 'string' ? parentProduct : parentProduct?.slug;
  const slug = toVariantSeoSlug(variantOrSlug, pKey);
  return slug ? `/products/${slug}` : '/products';
}

/**
 * Returns full path for material:
 * e.g. "/materials/stainless-steel-manufacture-in-india"
 */
export function getMaterialUrl(matOrSlug) {
  const slug = toMaterialSeoSlug(matOrSlug);
  return slug ? `/materials/${slug}` : '/materials';
}

// Internal index caches for fast lookup
let isIndexed = false;
const productMap = new Map();
const variantMap = new Map();
const materialMap = new Map();

function ensureIndexes() {
  if (isIndexed) return;

  // 1. Index products
  for (const product of productsData) {
    const seoSlug = toProductSeoSlug(product);
    const info = {
      product,
      seoSlug,
      canonicalUrl: `/products/${seoSlug}`
    };

    productMap.set(product.slug.toLowerCase(), info);
    productMap.set(seoSlug.toLowerCase(), info);

    // Common aliases
    if (product.slug === 'pipes-tubes') {
      productMap.set('pipes-and-tubes', info);
      productMap.set(`pipes-and-tubes-${SEO_SUFFIX}`, info);
    }
    if (product.slug === 'sheets-plates') {
      productMap.set('sheets-and-plates', info);
      productMap.set(`sheets-and-plates-${SEO_SUFFIX}`, info);
    }
    if (product.slug === 'forged-fittings') {
      productMap.set('fittings', info);
      productMap.set('screwed-forged-fittings', info);
      productMap.set(`screwed-forged-fittings-${SEO_SUFFIX}`, info);
    }
    if (product.slug === 'coils') {
      productMap.set('coils-slit-strips', info);
      productMap.set(`coils-slit-strips-${SEO_SUFFIX}`, info);
    }
    if (product.slug === 'wire-mesh-screens') {
      productMap.set('wire-mesh', info);
      productMap.set(`wire-mesh-${SEO_SUFFIX}`, info);
    }
    if (product.slug === 'butt-weld-fittings') {
      productMap.set('buttweld-fittings', info);
      productMap.set(`buttweld-fittings-${SEO_SUFFIX}`, info);
    }
  }

  // 2. Index variants across all product families
  for (const product of productsData) {
    const pSlug = product.slug;
    const variants = productVariants[pSlug] || [];

    for (const v of variants) {
      const seoSlug = toVariantSeoSlug(v, pSlug);
      const canonicalUrl = `/products/${seoSlug}`;
      const info = {
        variant: v,
        product,
        seoSlug,
        canonicalUrl
      };

      // Index by raw slug, seo slug, and normalized variations
      variantMap.set(v.slug.toLowerCase(), info);
      variantMap.set(seoSlug.toLowerCase(), info);

      const norm = v.slug.toLowerCase().replace(/buttweld/g, 'butt-weld');
      variantMap.set(norm, info);
      variantMap.set(`${norm}-${SEO_SUFFIX}`, info);

      // Keyed by parent/variant composite
      variantMap.set(`${pSlug}/${v.slug}`.toLowerCase(), info);
      variantMap.set(`${toProductSeoSlug(pSlug)}/${seoSlug}`.toLowerCase(), info);
      variantMap.set(`${pSlug}/${seoSlug}`.toLowerCase(), info);
    }
  }

  // 3. Index materials
  for (const mat of materialsList) {
    const seoSlug = toMaterialSeoSlug(mat);
    const info = {
      material: mat,
      seoSlug,
      canonicalUrl: `/materials/${seoSlug}`
    };

    materialMap.set(mat.slug.toLowerCase(), info);
    materialMap.set(seoSlug.toLowerCase(), info);

    if (mat.aliases && Array.isArray(mat.aliases)) {
      for (const al of mat.aliases) {
        materialMap.set(al.toLowerCase(), info);
        materialMap.set(`${al.toLowerCase()}-${SEO_SUFFIX}`, info);
      }
    }

    // Common abbreviations and aliases
    if (mat.slug === 'carbon') {
      materialMap.set('carbon-steel', info);
      materialMap.set('cs', info);
    }
    if (mat.slug === 'stainless-steel') {
      materialMap.set('ss', info);
    }
    if (mat.slug === 'alloy-steel') {
      materialMap.set('alloys', info);
      materialMap.set('as', info);
    }
    if (mat.slug === 'duplex') {
      materialMap.set('duplex-steel', info);
    }
    if (mat.slug === 'super-duplex') {
      materialMap.set('super-duplex-steel', info);
    }
    if (mat.slug === 'nickel-alloy') {
      materialMap.set('nickel', info);
    }
    if (mat.slug === 'copper') {
      materialMap.set('copper-brass', info);
    }
    if (mat.slug === 'aluminium') {
      materialMap.set('aluminum', info);
    }
    if (mat.slug === 'exotic-alloy') {
      materialMap.set('exotic-alloys', info);
    }
    if (mat.slug === 'high-alloy') {
      materialMap.set('high-alloys', info);
    }
  }

  isIndexed = true;
}

/**
 * Resolves whether a single slug is a product or variant
 */
export function resolveProductOrVariant(slug) {
  if (!slug) return null;
  ensureIndexes();
  const clean = slug.trim().toLowerCase();

  // 1. Check productMap first
  if (productMap.has(clean)) {
    const info = productMap.get(clean);
    return {
      type: 'product',
      product: info.product,
      seoSlug: info.seoSlug,
      canonicalUrl: info.canonicalUrl,
      isCanonical: clean === info.seoSlug.toLowerCase()
    };
  }

  // 2. Check variantMap
  if (variantMap.has(clean)) {
    const info = variantMap.get(clean);
    return {
      type: 'variant',
      product: info.product,
      variant: info.variant,
      seoSlug: info.seoSlug,
      canonicalUrl: info.canonicalUrl,
      isCanonical: clean === info.seoSlug.toLowerCase()
    };
  }

  return null;
}

/**
 * Resolves a 2-segment path: /products/:parentSlug/:variantSlug
 */
export function resolveVariantBySlugs(parentSlug, variantSlug) {
  if (!variantSlug) return null;
  ensureIndexes();
  const cleanV = variantSlug.trim().toLowerCase();
  const cleanP = (parentSlug || '').trim().toLowerCase();

  // Try composite key
  const compositeKey = `${cleanP}/${cleanV}`;
  if (variantMap.has(compositeKey)) {
    const info = variantMap.get(compositeKey);
    return {
      product: info.product,
      variant: info.variant,
      seoSlug: info.seoSlug,
      canonicalUrl: info.canonicalUrl,
      isCanonical: false // Direct single-level URL is canonical
    };
  }

  // Try variantMap directly
  if (variantMap.has(cleanV)) {
    const info = variantMap.get(cleanV);
    return {
      product: info.product,
      variant: info.variant,
      seoSlug: info.seoSlug,
      canonicalUrl: info.canonicalUrl,
      isCanonical: false
    };
  }

  // Try matching material slug to variant within product family
  const rawParent = cleanP.replace(/-manufacture-in-india$/, '');
  const pInfo = productMap.get(cleanP) || productMap.get(rawParent);
  if (pInfo && pInfo.product) {
    const variants = productVariants[pInfo.product.slug] || [];
    const matched = variants.find(
      (v) =>
        v.slug === cleanV ||
        v.slug === `${cleanV}-${pInfo.product.slug}` ||
        v.slug === `${cleanV}-${pInfo.product.slug.replace(/s$/, '')}` ||
        v.slug.startsWith(cleanV) ||
        (v.materialGroup && v.materialGroup.toLowerCase().includes(cleanV))
    );
    if (matched) {
      const seoSlug = toVariantSeoSlug(matched, pInfo.product.slug);
      return {
        product: pInfo.product,
        variant: matched,
        seoSlug,
        canonicalUrl: `/products/${seoSlug}`,
        isCanonical: false
      };
    }
  }

  return null;
}

/**
 * Resolves a material slug (both old and SEO format)
 */
export function resolveMaterial(materialSlug) {
  if (!materialSlug) return null;
  ensureIndexes();
  const clean = materialSlug.trim().toLowerCase();

  if (materialMap.has(clean)) {
    const info = materialMap.get(clean);
    return {
      material: info.material,
      seoSlug: info.seoSlug,
      canonicalUrl: info.canonicalUrl,
      isCanonical: clean === info.seoSlug.toLowerCase()
    };
  }

  return null;
}

/**
 * Updates the canonical link in <head> dynamically
 */
export function setCanonicalUrl(canonicalPath) {
  if (typeof window === 'undefined' || !canonicalPath) return;
  const fullUrl = `${window.location.origin}${canonicalPath}`;
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', fullUrl);
}
