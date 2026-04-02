# SEO Guide

This document is the source of truth for search engine optimization on the Iteron website.

## 1. Goals

- Ensure all important routes are crawlable and indexable.
- Improve visibility for branded queries such as Iteron, Turing Club, and IISER Mohali.
- Keep metadata and structured data consistent across pages.

## 2. Current SEO Implementation

### 2.1 Global Metadata Layer

Global SEO metadata is handled in [src/layouts/Layout.astro](src/layouts/Layout.astro):

- dynamic title and description props
- canonical URL generation
- robots meta directives
- Open Graph and Twitter tags
- JSON-LD structured data graph for `Organization`, `WebSite`, and `WebPage`

### 2.2 Route Metadata

Page-level title and description are set per route in `src/pages` files.

Important routes:

- [src/pages/index.astro](src/pages/index.astro)
- [src/pages/updates.astro](src/pages/updates.astro)
- [src/pages/submissions.astro](src/pages/submissions.astro)
- [src/pages/results.astro](src/pages/results.astro)
- [src/pages/about.astro](src/pages/about.astro)

404 is intentionally marked noindex:

- [src/pages/404.astro](src/pages/404.astro)

### 2.3 Crawl Discovery

- `site` is configured in [astro.config.mjs](astro.config.mjs)
- `@astrojs/sitemap` integration generates sitemap files at build time
- robots policy is in [public/robots.txt](public/robots.txt)

## 3. Build-Time Outputs To Verify

After running `npm run build`, verify in `dist/`:

- `sitemap-index.xml`
- route HTML files for all public pages

## 4. On-Page SEO Standards

For every indexable page:

- unique title
- meaningful meta description
- heading hierarchy with a clear `h1`
- visible body text containing relevant branded terms naturally
- internal links to related pages where context allows

Do not:

- duplicate generic descriptions across multiple important routes
- set noindex on pages intended for discovery
- use placeholder metadata in production

## 5. Structured Data Rules

When extending JSON-LD in [src/layouts/Layout.astro](src/layouts/Layout.astro):

- preserve valid Schema.org types
- keep URLs absolute
- keep entity identity stable using `@id`
- update organization `sameAs` links when official profiles change

## 6. Indexing Operations Checklist

After deployment:

1. Confirm live access:
   - `/robots.txt`
   - `/sitemap-index.xml`
2. Submit sitemap in Google Search Console.
3. Submit sitemap in Bing Webmaster Tools.
4. Request indexing for key pages (`/`, `/updates`, `/submissions`, `/results`, `/about`).
5. Re-check indexing status after crawl delay.

## 7. Troubleshooting Low Visibility

If pages do not appear for branded searches:

- verify production metadata matches repository changes
- verify canonical points to the correct domain
- verify robots meta is `index, follow` for target pages
- check Search Console coverage and indexing errors
- strengthen external signals (official links from IISER pages, club profiles, and announcements)

## 8. SEO Change Policy

Whenever metadata, sitemap, or indexing behavior changes:

1. Update this file.
2. Re-run `npm run build`.
3. Record any Search Console submission changes in PR notes.
