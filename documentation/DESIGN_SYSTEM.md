# Iteron Design System

This document captures the visual design language currently used across the website.

## 1. Design Language

Primary style direction:

- Brutalist structure with vaporwave atmosphere.
- High-contrast blocks, sharp edges, explicit borders, and box-shadow offsets.
- Functional layout first, decorative media second.
- Bold uppercase display headlines plus monospaced utility text.

Core visual principles:

- Strong geometry: rectangular blocks, visible framing, no soft rounding by default.
- Deliberate contrast: dark base surfaces with high-light text and accent highlights.
- Grid atmosphere: subtle background drafting grid for continuity.
- Interaction feedback: small translation and shadow shifts on hover/focus.

## 2. Color Palette

Global tokens are defined in src/styles/tokens.css.

| Token | Value | Role |
|---|---|---|
| --bg-color | #101014 | Global page background |
| --grid-color | rgba(255, 255, 255, 0.04) | Background grid lines |
| --accent-purple | #ba8fd8 | Primary accent, highlight, hover background |
| --accent-dark | #8146a8 | Secondary accent/deeper variation |
| --text-white | #f5f5f5 | Primary text color |
| --border-color | #ffffff | Borders and structural separators |

Frequently used non-token neutrals in components:

- #000 for card/panel fills.
- #999, #888, #555 for supporting/footer text hierarchy.
- rgba(255,255,255,0.08-0.15) for subtle separators.

## 3. Typography System

Font tokens:

- Display: Space Grotesk (400, 700).
- Mono/system utility: Share Tech Mono (400).

Usage guidance:

- Headings (h1-h6): display font, uppercase, bold.
- Body/metadata/nav labels: mono font for technical-brutalist tone.
- Keep long-form copy readable with generous line-height.

Recommended hierarchy:

- Hero/page title: 2.8rem to 4rem.
- Section heading: 1.2rem to 2.5rem.
- Body copy: around 0.95rem to 1.2rem.
- Micro labels/meta: around 0.72rem to 0.9rem.

## 4. Structural Design Elements

Common elements used repeatedly:

- Brutalist block container:
  - Black background.
  - 1px high-contrast border.
  - Offset purple shadow.
  - Small hover translation for tactility.
- Top navigation:
  - Fixed, thin utility bar with bordered lower edge.
  - Desktop tab-like hover behavior.
  - Mobile slide/drop menu with explicit open/close icon state.
- Footer:
  - Multi-column information architecture.
  - Utility labels and compact action links.
  - Strong legal and community navigation presence.
- Decorative media layers:
  - Supporting visual context, never replacing key text.
  - Lazy-loaded where non-critical.

## 5. Interaction Patterns

Links and controls:

- Default links use accent color.
- Hover often inverts to dark text on accent background.
- Interactive panels/buttons use micro transforms and shadow changes.

Touch behavior:

- Gentle haptic feedback on supported touch devices.
- Opt-out supported with data-no-haptic attribute.

Perceived performance pattern:

- About page prewarm fetch from layout script.
- Session-scoped image preloading for smoother first navigation.

## 6. Layout and Spacing Rhythm

Global spacing tendencies:

- Main sections often use 5% horizontal page padding.
- Vertical section spacing tends to be generous (2rem to 10rem depending on section type).
- Card internals typically use 1.3rem to 2.5rem padding.

Max-width conventions:

- Content containers often between 980px and 1200px.
- Footer inner container around 1160px.

## 7. Responsive Behavior

Key breakpoints currently used:

- 1100px: footer grid adaptation.
- 1024px: nav/mobile behavior and major layout stack transitions.
- 768px: single-column section flows, simplified spacing.
- 480px: compact type and spacing adjustments.

Mobile intent:

- Preserve readability over decoration.
- Keep interaction targets clear and sufficiently large.
- Avoid dense multi-column content on narrow screens.

## 8. Accessibility and Safety Rules

- Maintain meaningful heading hierarchy.
- Use descriptive alt text for informative images.
- Keep external links with target="_blank" paired with rel="noopener noreferrer".
- Preserve visible focus and readable contrast.

## 9. Design Do and Avoid

Do:

- Reuse existing tokens before introducing new colors.
- Keep contrast explicit and layout blocks structured.
- Keep decorative effects purposeful and restrained.

Avoid:

- Soft, low-contrast UI that dilutes the brutalist aesthetic.
- Adding rounded, glassy, or gradient-heavy treatments without clear rationale.
- Introducing typography stacks that conflict with the established mono/display pairing.
