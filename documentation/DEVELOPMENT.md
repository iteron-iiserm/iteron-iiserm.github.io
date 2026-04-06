# Development Guide

This guide defines the day-to-day workflow for building, validating, and shipping changes safely.

## 1. Core Stack

- Framework: Astro
- Language: TypeScript-enabled Astro project
- Styling: Vanilla CSS scoped in Astro components plus global styles in layout
- Package Manager: npm
- Asset Sources:
  - `src/assets` for Astro-processed assets
  - `public` for static, direct-path resources

## 2. Local Setup

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Build production output:

```bash
npm run build
```

4. Preview production build locally:

```bash
npm run preview
```

## 3. Recommended Workflow

1. Create a focused branch for each task.
2. Keep commits small and logically grouped.
3. Validate behavior in both desktop and mobile breakpoints.
4. Run a production build before opening a PR.
5. Update docs for architecture, components, or workflow changes.

## 4. Project Structure Reference

- `src/pages`: Route files. Keep logic minimal and composition focused.
- `src/layouts`: Global page shell and token definitions.
- `src/components/common`: Shared layout UI.
- `src/components/sections`: Route-composed content modules.
- `src/assets`: Source images for optimization pipeline.
- `public`: Static pass-through assets.
- `documentation`: Developer-facing docs (must stay current).

## 5. Performance Practices

Image guidance:

- Use Astro `Image` for local assets whenever possible.
- Use `loading="lazy"` for non-critical and decorative images.
- Use `decoding="async"` for deferred image decoding.
- For LCP-sensitive hero assets, only use eager loading after measurement confirms need.

Animation-first guidance:

- If a section depends on entrance animation, gate it behind an explicit ready class.
- Start animation only after required media is loaded to prevent first-frame placeholders.
- Validate behavior with hard reload and throttled network before merge.

General guidance:

- Avoid shipping unnecessary client-side scripts.
- Keep animation effects lightweight and purposeful.
- Re-check Lighthouse or browser performance traces after heavy visual changes.
- Keep fonts self-hosted in dependencies when possible; avoid runtime third-party font requests.

## 6. Security and Reliability Standards

- External links with new-tab behavior must include `rel="noopener noreferrer"`.
- Avoid inline event handlers in HTML.
- Prefer explicit event listeners in scripts.
- Keep fallback behavior graceful for media failures.

## 7. Styling Conventions

- Reuse existing design tokens and utility classes before introducing new ones.
- Preserve brutalist design language: sharp corners, bold borders, clear contrast.
- Keep component-level CSS local unless reuse is required globally.
- Avoid style drift by checking neighboring components before adding new patterns.

## 8. QA Checklist Before Merge

Required checks:

1. `npm run build` succeeds.
2. Main routes render without console errors.
3. External links behave safely.
4. Image fallbacks still work for missing media.
5. Responsive behavior verified at key breakpoints.

Suggested manual checks:

1. Home page first render remains readable before decorative assets fully load.
2. No major layout shift introduced by media or animation changes.
3. Contrast remains acceptable after any visual update.
4. Hard reload does not reveal pre-animation hero state or image alt placeholders.
5. No visible font-family flash before final typography appears.

## 9. Documentation Maintenance Rules

Update docs whenever you change:

- component responsibilities
- architecture decisions
- performance policies
- contributor workflow
- legal/policy content, legal notices, or policy-linked UI copy

Minimum updates expected per relevant PR:

1. One short architecture or component note.
2. Any changed commands or setup steps.
3. Any new constraints future contributors must follow.
4. Legal release note append when policy/legal behavior changes.

## 10. Legal Documentation Checklist

Apply this checklist when editing legal content, legal links, or policy-adjacent UX:

1. Update affected route pages (`/terms-of-use`, `/privacy-policy`, `/takedown-policy`) and any linked UI copy (footer/submission/results notices).
2. Append a new entry to `documentation/LEGAL_RELEASE_NOTES.md` (append-only; no historical rewrites except clerical fixes).
3. If publishing a new legal freeze, regenerate and archive matching PDFs in `documentation/legal-evidence`.
4. Re-verify baseline legal statement consistency across all policy pages and legal notices.

## 11. Release Readiness

Before tagging or publishing:

1. Confirm build artifacts are generated successfully.
2. Re-verify route-level metadata/title quality.
3. Confirm no temporary/debug files are included.
4. Ensure documentation reflects current behavior.
5. Confirm legal documentation is updated if policy/legal behavior changed.
