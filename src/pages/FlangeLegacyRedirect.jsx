// src/pages/FlangeLegacyRedirect.jsx
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { resolveProductOrVariant } from '../utils/seoSlugUtils';

/**
 * Cleanly redirects legacy /flanges, /flanges/:typeSlug, and
 * /flanges/:materialSlug/:typeSlug URLs to their canonical
 * product subcategory or category pages with HTTP 301-equivalent client redirects.
 */
export default function FlangeLegacyRedirect() {
  const { typeSlug, materialSlug } = useParams();
  const targetSlug = typeSlug || materialSlug;

  if (!targetSlug) {
    return <Navigate to="/products/flanges-manufacture-in-india" replace />;
  }

  const clean = targetSlug.trim().toLowerCase();

  // 1. Direct resolution through seoSlugUtils (handles plural, singular, and aliases)
  let res = resolveProductOrVariant(clean);

  // 2. If not found, try appending -flange
  if (!res && !clean.endsWith('-flange') && !clean.endsWith('-flanges')) {
    res = resolveProductOrVariant(`${clean}-flange`);
  }

  // 3. If ending with -flanges, try singular -flange
  if (!res && clean.endsWith('-flanges')) {
    res = resolveProductOrVariant(clean.replace(/-flanges$/, '-flange'));
  }

  if (res && res.canonicalUrl) {
    return <Navigate to={res.canonicalUrl} replace />;
  }

  // Fallback to canonical Flanges category catalog
  return <Navigate to="/products/flanges-manufacture-in-india" replace />;
}
