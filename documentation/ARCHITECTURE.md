# Iteron Architecture

This document explains how the Astro site is organized, how pages are composed, and where to make changes safely.

## 1. System Overview

The site is a static Astro project with route-level pages in `src/pages`, shared page chrome in `src/layouts`, and reusable section components in `src/components`.

Architecture goals:

- Keep route files thin and composition-focused.
- Keep visual consistency centralized through global design tokens.
- Use static assets and Astro optimizations for predictable performance.
- Minimize runtime JavaScript and only use scripts for targeted interaction.

## 2. Directory Responsibilities

- `src/pages`: Route entrypoints. Each file maps directly to a URL.
- `src/layouts/Layout.astro`: Shared HTML shell, metadata defaults, and global CSS tokens/utilities.
- `src/components/common`: Reused, cross-page components such as navigation and footer.
- `src/components/sections`: Home-page or feature sections designed for composition.
- `src/assets`: Source image assets processed by Astro's asset pipeline.
- `public`: Static files served directly (no processing), ideal for fixed paths and downloadable assets.
- `documentation`: Internal documentation for architecture, components, and development workflows.

## 3. Rendering Model

The current design follows Astro's static-first rendering model:

- Most UI is server-rendered to static HTML at build time.
- Components are mostly presentational and CSS-driven.
- Small inline scripts are used only when interaction is required.

This keeps first render deterministic and reduces client-side execution overhead.

First-load orchestration policy:

- Critical above-the-fold visual sections may use a tiny inline script to gate animation start.
- Hero animation must start only after required assets are loaded (or errored) and the page load event has fired on first visit.
- Use a CSS ready-state class (for example, `.is-ready`) to reveal and animate content in a controlled first frame.

## 4. Styling and Design Tokens

Global visual language is defined in `src/layouts/Layout.astro`.

Core tokens currently in use:

- `--bg-color`: main dark background.
- `--text-white`: primary text color.
- `--accent-purple`: brand accent.
- `--border-color`: high-contrast border and framing color.

Styling conventions:

- Favor token usage over hardcoded colors.
- Preserve sharp-edge brutalist style (no accidental border-radius creep).
- Reuse common utility classes before adding one-off alternatives.
- Scope component CSS to each `.astro` file unless a style is truly global.

## 5. Page Composition Pattern

Recommended route composition:

1. Import `Layout` and shared blocks (`Navbar`, `Footer`).
2. Compose with section components.
3. Keep page-level logic limited to route-specific data or orchestration.

Example conceptual structure:

```astro
<Layout title="Page Title">
    <Navbar />
    <main>
        <SectionA />
        <SectionB />
    </main>
    <Footer />
</Layout>
```

## 6. Asset and Image Strategy

Two image paths are used in this codebase:

- `Image` from `astro:assets` for local source assets in `src/assets`.
- Native `img` for public-path or dynamic list content.

Current policy:

- Non-critical and decorative images should use `loading="lazy"` and `decoding="async"`.
- Keep meaningful `alt` text for accessibility and SEO.
- Prefer `Image` for build-time optimization when assets are local and static.
- Above-the-fold assets tied to entrance animation can use `loading="eager"` and `fetchpriority="high"`.
- If a first-frame placeholder flash appears, gate visibility until assets complete loading.

When to use eager loading:

- If a primary above-the-fold image is a true LCP element and lazy loading hurts perceived speed, switch only that image to eager after measurement.

## 7. Security and Markup Hygiene

Baseline standards:

- External links with `target="_blank"` must include `rel="noopener noreferrer"`.
- Avoid inline event handlers (`onerror`, `onclick`, etc.) in markup.
- Use script listeners for fallback or interactive behavior.
- Keep DOM updates minimal and predictable.

## 8. Performance Guardrails

- Prioritize text and structure render before decorative media.
- Avoid large blocking scripts and unnecessary hydration.
- Defer non-critical images via lazy loading.
- Self-host shared fonts from local dependencies to avoid third-party font waterfall on first load.
- Restrict font subsets/weights to what the UI actually uses.
- Rebuild and verify after introducing heavy media or animation changes.

## 9. Decision Log Guidance

When major architecture decisions are made, document them in PR notes and reference this file.

Recommended decision-note template:

1. Context and problem.
2. Chosen approach.
3. Alternatives rejected.
4. Trade-offs and follow-up actions.
