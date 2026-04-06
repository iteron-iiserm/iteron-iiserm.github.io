# Iteron Website

This repository contains the Astro-based website for Iteron: The Game of Trust and Strategy.

Use this README as the starting point when you begin working on the project.

## At a Glance

- Framework: Astro (static-first)
- Styling: Scoped CSS in Astro components + global tokens
- Typeface system: Space Grotesk + Share Tech Mono (self-hosted)
- Design direction: Brutalist structure with vaporwave atmosphere
- Project goal: Fast, readable, design-consistent informational website

## What This Project Is

- Framework: Astro (static-first)
- Styling: Scoped CSS in Astro components + global tokens in layout
- Main app shell: Navbar + page sections + footer
- Target: Fast, readable, design-consistent informational site

## Quick Start

1. Install dependencies.

```bash
npm install
```

2. Run local development server.

```bash
npm run dev
```

3. Build production output.

```bash
npm run build
```

4. Preview production build.

```bash
npm run preview
```

## Route Map

### Primary Pages

- / (home)
- /updates
- /submissions
- /results
- /about
- /terms-of-use
- /privacy-policy
- /takedown-policy

### Submissions Pages

- /submissions
- /submissions/payoff
- /submissions/reference-strategies

## Website Flow

### Primary Navigation

Navigation is defined in [src/components/common/Navbar.astro](src/components/common/Navbar.astro):

- Home: /
- Updates: /updates
- Submission: /submissions
- Results: /results
- About: /about

### Home Page Composition

The landing page is composed in [src/pages/index.astro](src/pages/index.astro) in this order:

1. HeroBanner
2. IntroCard
3. Legacy
4. Strategy
5. Phases
6. Videos

Global shell for all pages lives in [src/layouts/Layout.astro](src/layouts/Layout.astro), with [src/components/common/Navbar.astro](src/components/common/Navbar.astro) and [src/components/common/Footer.astro](src/components/common/Footer.astro).

## Configuration

Runtime settings are intentionally minimal.

- Astro and sitemap configuration are defined in [astro.config.mjs](astro.config.mjs).

## Important Current Behavior

### Hero First-Load Animation

Hero behavior is implemented in [src/components/sections/HeroBanner.astro](src/components/sections/HeroBanner.astro):

- Hands are eager-loaded and prioritized because they are above the fold.
- First-visit animation waits for page load and hand image readiness.
- Hero visuals remain hidden until ready state is applied to prevent placeholder or pre-animation flashes.

### Typography Strategy

Fonts are self-hosted through npm dependencies (fontsource) and imported in [src/layouts/Layout.astro](src/layouts/Layout.astro). This avoids third-party font fetch delays and reduces visible font swapping.

## Documentation Map

Read these files before making non-trivial changes:

1. Architecture decisions and guardrails: [documentation/ARCHITECTURE.md](documentation/ARCHITECTURE.md)
2. Component ownership and implementation notes: [documentation/COMPONENTS.md](documentation/COMPONENTS.md)
3. Contributor workflow and QA checklist: [documentation/DEVELOPMENT.md](documentation/DEVELOPMENT.md)
4. Search and indexing implementation details: [documentation/SEO.md](documentation/SEO.md)
5. Legal freeze log and policy release evidence: [documentation/LEGAL_RELEASE_NOTES.md](documentation/LEGAL_RELEASE_NOTES.md)
6. Design language, palette, and visual rules: [documentation/DESIGN_SYSTEM.md](documentation/DESIGN_SYSTEM.md)
7. Reusable Astro snippets and templates: [documentation/REUSABLE_TEMPLATES.md](documentation/REUSABLE_TEMPLATES.md)

## Legal and Policy Release

Legal-policy pages and release evidence are tracked in this repository.

- Policy routes:
	- /terms-of-use
	- /privacy-policy
	- /takedown-policy
- Legal release freeze and approval history:
	- [documentation/LEGAL_RELEASE_NOTES.md](documentation/LEGAL_RELEASE_NOTES.md)
- PDF evidence archive for released policy versions:
	- [documentation/legal-evidence](documentation/legal-evidence)

Current legal baseline is documented in the policy pages and frozen legal release notes.

## Typical Contribution Flow

1. Read the docs above relevant to your change scope.
2. Identify whether your change is route-level, section-level, or global.
3. Implement minimal targeted changes.
4. Validate desktop and mobile behavior.
5. Run build.
6. Update documentation if behavior or conventions changed.
7. If legal or policy behavior changed, append an entry in [documentation/LEGAL_RELEASE_NOTES.md](documentation/LEGAL_RELEASE_NOTES.md).

## Project Structure

- [src/pages](src/pages): Route entry points
- [src/layouts](src/layouts): Shared page shell and global styles/tokens
- [src/components/common](src/components/common): Cross-page components
- [src/components/sections](src/components/sections): Page sections
- [src/data](src/data): Static structured data used by pages
- [src/assets](src/assets): Source assets processed by Astro
- [public](public): Static pass-through assets
- [documentation](documentation): Internal developer documentation

## Notes For New Maintainers

- Keep visual language consistent with the existing brutalist-vaporwave direction.
- Avoid adding client-side scripts unless they solve a concrete interaction need.
- Treat first-load experience as a feature: no flashing placeholders, no jarring layout shifts.
- Keep docs in sync with behavior changes.
