# Component Guide

This document defines component responsibilities, expected contracts, and implementation standards.

## 1. Component Layers

There are two practical layers in this project:

- `src/components/common`: Global shell elements shared across routes.
- `src/components/sections`: Content sections assembled by pages.

Rules of ownership:

- Common components must stay route-agnostic.
- Section components should be composable and avoid owning global concerns.
- Route files decide ordering and inclusion of sections.

## 2. Common Components

### Navbar

Purpose:

- Top-level navigation and immediate route access.

Guidelines:

- Keep link set synchronized with actual route files.
- Preserve keyboard accessibility for all interactive links.
- Avoid introducing heavy client-side behavior.

### Footer

Purpose:

- Global closing block for credits, links, and identity.

Guidelines:

- Keep it lightweight and consistent across pages.
- Reuse design tokens and shared classes.

## 3. Section Components (Current)

### HeroBanner

Role:

- Establish visual identity and tournament framing.

Implementation notes:

- Uses decorative hand assets and entrance animation.
- Any added motion must avoid excessive layout shifts.
- Entrance animation is gated by a ready state class and should not auto-run before assets load.
- First visit behavior is session-scoped: animation starts after page load plus hand image readiness.
- Hero hand images are above the fold and intentionally use eager loading with high fetch priority.
- Keep hand wrappers hidden before ready state to avoid alt-text or placeholder flash on hard reload.

### IntroCard

Role:

- Provide contextual origin of tournament motivation.

Implementation notes:

- Keep text hierarchy strong and readable.
- Decorative media should remain secondary to copy.

### Strategy

Role:

- Explain framing and lead users to tournament exploration.

Implementation notes:

- CTA copy and destination must remain explicit.
- Side and background media should be lazily loaded unless measured otherwise.

### Phases

Role:

- Show timeline/progression of tournament lifecycle.

Implementation notes:

- Maintain clear progression order.
- Keep responsive behavior consistent on smaller screens.

### Legacy

Role:

- Communicate continuity, impact, or historical grounding.

Implementation notes:

- Avoid overly dense text blocks.
- Ensure contrast is preserved across all breakpoints.

### Videos

Role:

- Curate external educational resources.

Implementation notes:

- External links opening in new tabs must include secure `rel` attributes.
- Link labels should be descriptive and not generic.

## 4. Reusable Patterns

### Brutalist Block

```astro
<div class="brutalist-block">
  <!-- Content -->
</div>
```

Use for:

- Strong framed containers, cards, and section panels.

### Glitch Headline

```astro
<h1 class="glitch" data-text="TEXT_HERE">TEXT_HERE</h1>
```

Use for:

- Primary display headings only.

Notes:

- Keep text identical in element content and `data-text`.

### Decorative Side Image

```astro
<div class="side-decor">
  <Image
    src={imageAsset}
    alt="Decorative context"
    class="decor-image"
    loading="lazy"
    decoding="async"
  />
</div>
```

Use for:

- Atmosphere and framing, not critical content delivery.

## 5. Props and Data Contracts

Current components are mostly static, but when introducing props:

- Keep prop names explicit and stable.
- Provide safe defaults when optional.
- Validate expected content shapes at the route level before rendering.
- Document prop additions in this file and in PR notes.

## 6. Accessibility Checklist

- Headings must follow a logical hierarchy.
- Every informative image needs meaningful `alt` text.
- Decorative-only imagery should use empty `alt` where appropriate.
- Ensure focus visibility on links/buttons is preserved.
- Verify contrast after any palette change.

## 7. Performance Checklist for Components

- Default decorative images to lazy load.
- Use `decoding="async"` for non-critical imagery.
- Avoid unnecessary scripts inside sections.
- Keep CSS selectors scoped and simple.
- For animation-first sections, verify the first visible frame under hard reload and slow network simulation.

## 8. Adding a New Component

1. Place it in the correct layer (`common` vs `sections`).
2. Build it with existing token and layout patterns.
3. Add only the minimal script needed.
4. Validate in desktop and mobile breakpoints.
5. Update this document with ownership and usage notes.
