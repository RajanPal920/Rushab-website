// src/pages/ProductRouteHandler.jsx
import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import ProductDetails from './ProductDetails';
import VariantDetails from './VariantDetails';
import {
  resolveProductOrVariant,
  resolveVariantBySlugs,
  setCanonicalUrl
} from '../utils/seoSlugUtils';

/**
 * Handles single-segment product routes: /products/:slug
 * Dynamically resolves whether :slug is a product category or a variant.
 * Implements 301-equivalent client redirects for non-canonical/legacy URLs.
 */
export default function ProductRouteHandler() {
  const { slug } = useParams();
  const resolution = resolveProductOrVariant(slug);

  useEffect(() => {
    if (resolution && resolution.canonicalUrl) {
      setCanonicalUrl(resolution.canonicalUrl);
    }
  }, [resolution]);

  if (!resolution) {
    // Fallback to ProductDetails which contains not-found state
    return <ProductDetails />;
  }

  // Redirect legacy / alias URLs to canonical SEO URL
  if (!resolution.isCanonical) {
    return <Navigate to={resolution.canonicalUrl} replace />;
  }

  if (resolution.type === 'variant') {
    return (
      <VariantDetails
        resolvedProduct={resolution.product}
        resolvedVariant={resolution.variant}
      />
    );
  }

  return <ProductDetails resolvedProduct={resolution.product} />;
}

/**
 * Handles two-segment routes: /products/:slug/:variantSlug
 * Preserves backward compatibility for 2-level URLs while maintaining canonical references.
 */
export function TwoLevelProductRouteHandler() {
  const { slug, variantSlug } = useParams();
  const resolution = resolveVariantBySlugs(slug, variantSlug);

  useEffect(() => {
    if (resolution && resolution.canonicalUrl) {
      setCanonicalUrl(resolution.canonicalUrl);
    }
  }, [resolution]);

  if (!resolution) {
    return <VariantDetails />;
  }

  return (
    <VariantDetails
      resolvedProduct={resolution.product}
      resolvedVariant={resolution.variant}
    />
  );
}
