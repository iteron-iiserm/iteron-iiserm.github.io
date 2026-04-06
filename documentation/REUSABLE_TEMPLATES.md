# Reusable Templates and Snippets

This file contains reusable Astro patterns aligned with the current Iteron design system.

## 1. Standard Page Scaffold

Use this for new route pages.

```astro
---
import Layout from "../layouts/Layout.astro";
import Navbar from "../components/common/Navbar.astro";
import Footer from "../components/common/Footer.astro";
---

<Layout
  title="Iteron | Page Title"
  description="Short page description for SEO and social previews."
>
  <Navbar />

  <main class="page-container">
    <header class="header-box brutalist-block">
      <h1 class="glitch" data-text="PAGE_TITLE">PAGE_TITLE</h1>
      <p class="subtitle">> SECTION SUBTITLE</p>
    </header>

    <section class="brutalist-block">
      <h2>Section Heading</h2>
      <p>Section content.</p>
    </section>
  </main>

  <Footer />
</Layout>

<style>
  .page-container {
    padding: 120px 5% 5rem;
    max-width: 1100px;
    margin: 0 auto;
    min-height: 100vh;
  }

  .header-box {
    margin-bottom: 2rem;
    text-align: center;
    border-color: var(--accent-purple);
  }

  .subtitle {
    color: var(--accent-purple);
    font-family: var(--font-mono);
    font-weight: bold;
    letter-spacing: 1.5px;
  }
</style>
```

## 2. Brutalist Content Card

```astro
<section class="brutalist-block content-card">
  <h2>Card Title</h2>
  <p>Card body text.</p>
</section>

<style>
  .content-card {
    background: #000;
    border-color: var(--text-white);
  }
</style>
```

## 3. Safe External Link Pattern

Use this for links opening in a new tab.

```astro
<a
  href="https://example.com"
  target="_blank"
  rel="noopener noreferrer"
>
  EXTERNAL LINK ↗
</a>
```

## 4. Standard CTA Button Pattern

```astro
<a href="/submissions" class="btn-primary">[ EXPLORE THE TOURNAMENT ]</a>

<style>
  .btn-primary {
    display: inline-block;
    background: var(--text-white);
    color: #000;
    padding: 1rem 2rem;
    border: 2px solid var(--text-white);
    font-family: var(--font-mono);
    font-weight: bold;
    text-transform: uppercase;
    box-shadow: 4px 4px 0 var(--accent-purple);
    transition: all 0.2s;
  }

  .btn-primary:hover {
    background: #000;
    color: var(--text-white);
    transform: translate(2px, 2px);
    box-shadow: 2px 2px 0 var(--accent-purple);
  }
</style>
```

## 5. Section Header Pattern

```astro
<header class="header-box brutalist-block">
  <h1 class="glitch" data-text="SECTION_NAME">SECTION_NAME</h1>
  <p class="subtitle">> SUPPORTING LABEL</p>
</header>
```

## 6. Reusable Grid Template

```astro
<section class="card-grid">
  <article class="brutalist-block">...</article>
  <article class="brutalist-block">...</article>
  <article class="brutalist-block">...</article>
</section>

<style>
  .card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1.8rem;
  }
</style>
```

## 7. Image Pattern (Decorative)

```astro
---
import { Image } from "astro:assets";
import decorativeAsset from "../assets/example.png";
---

<Image
  src={decorativeAsset}
  alt=""
  loading="lazy"
  decoding="async"
/>
```

## 8. Image Pattern (Informative)

```astro
---
import { Image } from "astro:assets";
import informativeAsset from "../assets/example.png";
---

<Image
  src={informativeAsset}
  alt="Descriptive, meaningful text"
  loading="lazy"
  decoding="async"
/>
```

## 9. Mobile Navigation Toggle Script Template

Use this only where needed; keep logic minimal.

```html
<script>
  const navToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('#mobile-menu');

  if (navToggle && mobileMenu) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));

      if (expanded) {
        mobileMenu.setAttribute('hidden', '');
        mobileMenu.removeAttribute('data-open');
      } else {
        mobileMenu.removeAttribute('hidden');
        mobileMenu.setAttribute('data-open', 'true');
      }
    });
  }
</script>
```

## 10. Copy Blocks for Legal Links

Use these where legal notice context is needed.

```astro
<p class="legal-links">
  Read the full
  <a href="/terms-of-use">Terms of Use</a>,
  <a href="/privacy-policy">Privacy Policy</a>, and
  <a href="/takedown-policy">Takedown Policy</a>.
</p>
```

## 11. Reuse Checklist

Before adding new code, check in this order:

1. Can existing tokens in src/styles/tokens.css solve this?
2. Can brutalist-block and existing spacing patterns solve this?
3. Can an existing section/card pattern be adapted with minimal changes?
4. Is the interaction requirement strong enough to justify new client script?
5. Are external links and accessibility attributes correctly applied?
