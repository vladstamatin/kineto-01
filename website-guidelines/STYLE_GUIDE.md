# REBALANCE Style Guide

> **Theme**: "Clinical Serenity" meets "Editorial Medical"
>
> A fusion of high-end medical credibility with human warmth. Energetic, human-centric, and authoritative without being sterile.

---

## Table of Contents

1. [Color Palette](#color-palette)
2. [Typography](#typography)
3. [Spacing & Layout](#spacing--layout)
4. [Component Patterns](#component-patterns)
5. [Visual Effects](#visual-effects)
6. [Animation Guidelines](#animation-guidelines)
7. [Responsive Breakpoints](#responsive-breakpoints)
8. [Changelog](#changelog)

---

## Color Palette

### CSS Variables

```css
:root {
  /* ═══════════════════════════════════════════════════════════
     PRIMARY PALETTE
     ═══════════════════════════════════════════════════════════ */

  /* Rebalance Turquoise - Primary brand accent, CTAs, highlights */
  --color-primary: #00c4cc;
  --color-primary-hover: #00b0b8;
  --color-primary-light: #33cfd6;
  --color-primary-opacity-10: rgba(0, 196, 204, 0.1);
  --color-primary-opacity-20: rgba(0, 196, 204, 0.2);

  /* Deep Medical Navy - Headers, navigation, authority text */
  --color-navy: #1f2a38;
  --color-navy-light: #2a3847;
  --color-navy-dark: #151d26;

  /* ═══════════════════════════════════════════════════════════
     SECONDARY PALETTE
     ═══════════════════════════════════════════════════════════ */

  /* Slate Grey - Body text, softer than black */
  --color-slate: #4a5568;
  --color-slate-light: #718096;
  --color-slate-dark: #2d3748;

  /* Muted Sage - Background accent for "calm" zones */
  --color-sage: #e6fffa;
  --color-sage-dark: #b2f5ea;

  /* ═══════════════════════════════════════════════════════════
     NEUTRAL PALETTE
     ═══════════════════════════════════════════════════════════ */

  /* Backgrounds */
  --color-white: #ffffff;
  --color-off-white: #fafafa;
  --color-light-grey: #f8f9fa;
  --color-grey-100: #f1f3f4;
  --color-grey-200: #e2e8f0;
  --color-grey-300: #cbd5e0;

  /* Text on dark backgrounds */
  --color-text-on-dark: #ffffff;
  --color-text-on-dark-muted: rgba(255, 255, 255, 0.7);
  --color-text-on-dark-subtle: rgba(255, 255, 255, 0.5);

  /* ═══════════════════════════════════════════════════════════
     SEMANTIC COLORS
     ═══════════════════════════════════════════════════════════ */

  --color-success: #38a169;
  --color-warning: #d69e2e;
  --color-error: #e53e3e;
  --color-info: var(--color-primary);

  /* ═══════════════════════════════════════════════════════════
     OVERLAY & SHADOW COLORS
     ═══════════════════════════════════════════════════════════ */

  --overlay-dark: rgba(0, 0, 0, 0.3);
  --overlay-darker: rgba(0, 0, 0, 0.6);
  --overlay-light: rgba(255, 255, 255, 0.1);

  --shadow-color: rgba(0, 0, 0, 0.05);
  --shadow-color-medium: rgba(0, 0, 0, 0.1);
  --shadow-color-strong: rgba(0, 0, 0, 0.15);
}
```

### Usage Rules

| Color                | Usage                                                            |
| -------------------- | ---------------------------------------------------------------- |
| `--color-primary`    | CTAs, high-impact accents, price highlights, experience badges   |
| `--color-navy`       | Headers, navigation text, footer backgrounds, authority elements |
| `--color-slate`      | Body text, secondary information                                 |
| `--color-sage`       | Calm zone backgrounds, subtle section separators                 |
| `--color-white`      | Primary backgrounds, text on dark surfaces                       |
| `--color-light-grey` | Section backgrounds, card backgrounds                            |

> [!IMPORTANT]
> Use **Rebalance Turquoise** (`--color-primary`) sparingly — only for CTAs and high-impact accents. Overuse dilutes its effectiveness.

---

## Typography

### Font Family

```css
:root {
  /* Primary font - clean, approachable sans-serif */
  --font-primary:
    "Manrope", "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont,
    "Segoe UI", sans-serif;

  /* Fallback system fonts */
  --font-system:
    -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    sans-serif;
}
```

### Font Loading

```html
<!-- Google Fonts CDN -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap"
  rel="stylesheet"
/>
```

### Type Scale

```css
:root {
  /* ═══════════════════════════════════════════════════════════
     FONT SIZES
     ═══════════════════════════════════════════════════════════ */

  --text-xs: 0.75rem; /* 12px - Micro labels, copyright */
  --text-sm: 0.875rem; /* 14px - Small labels, card names */
  --text-base: 1rem; /* 16px - Body text base */
  --text-lg: 1.125rem; /* 18px - Lead paragraphs */
  --text-xl: 1.25rem; /* 20px - Subheadings */
  --text-2xl: 1.5rem; /* 24px - Section subtitles */
  --text-3xl: 1.875rem; /* 30px - Section headings */
  --text-4xl: 2.25rem; /* 36px - Large headings */
  --text-5xl: 3rem; /* 48px - Hero headings */
  --text-6xl: 3.75rem; /* 60px - Display text */

  /* ═══════════════════════════════════════════════════════════
     FONT WEIGHTS
     ═══════════════════════════════════════════════════════════ */

  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
  --font-extrabold: 800;

  /* ═══════════════════════════════════════════════════════════
     LINE HEIGHTS
     ═══════════════════════════════════════════════════════════ */

  --leading-none: 1;
  --leading-tight: 1.25;
  --leading-snug: 1.375;
  --leading-normal: 1.5;
  --leading-relaxed: 1.6; /* Body text - reduces cognitive load */
  --leading-loose: 2;

  /* ═══════════════════════════════════════════════════════════
     LETTER SPACING
     ═══════════════════════════════════════════════════════════ */

  --tracking-tighter: -0.05em;
  --tracking-tight: -0.025em; /* Headings */
  --tracking-normal: 0;
  --tracking-wide: 0.025em;
  --tracking-wider: 0.05em;
  --tracking-widest: 0.1em; /* Uppercase section markers */
}
```

### Typography Presets

```css
/* Hero Display */
.text-display {
  font-family: var(--font-primary);
  font-size: var(--text-5xl);
  font-weight: var(--font-bold);
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-white);
}

/* Section Heading */
.text-heading-1 {
  font-family: var(--font-primary);
  font-size: var(--text-4xl);
  font-weight: var(--font-bold);
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-navy);
}

/* Section Subtitle */
.text-heading-2 {
  font-family: var(--font-primary);
  font-size: var(--text-2xl);
  font-weight: var(--font-semibold);
  line-height: var(--leading-snug);
  color: var(--color-navy);
}

/* Section Marker (Uppercase) */
.text-section-marker {
  font-family: var(--font-primary);
  font-size: var(--text-sm);
  font-weight: var(--font-bold);
  text-transform: uppercase;
  letter-spacing: var(--tracking-widest);
  color: var(--color-primary);
}

/* Body Text */
.text-body {
  font-family: var(--font-primary);
  font-size: var(--text-base);
  font-weight: var(--font-normal);
  line-height: var(--leading-relaxed);
  color: var(--color-slate);
}

/* Card Name Overlay */
.text-card-name {
  font-family: var(--font-primary);
  font-size: var(--text-sm);
  font-weight: var(--font-bold);
  color: var(--color-white);
}

/* Micro Label */
.text-micro {
  font-family: var(--font-primary);
  font-size: var(--text-xs);
  font-weight: var(--font-medium);
  text-transform: uppercase;
  letter-spacing: var(--tracking-wide);
}
```

---

## Spacing & Layout

### Spacing Scale (4px Grid System)

```css
:root {
  /* ═══════════════════════════════════════════════════════════
     SPACING SCALE (4px base)
     ═══════════════════════════════════════════════════════════ */

  --space-0: 0;
  --space-1: 0.25rem; /* 4px */
  --space-2: 0.5rem; /* 8px */
  --space-3: 0.75rem; /* 12px */
  --space-4: 1rem; /* 16px */
  --space-5: 1.25rem; /* 20px */
  --space-6: 1.5rem; /* 24px */
  --space-8: 2rem; /* 32px */
  --space-10: 2.5rem; /* 40px */
  --space-12: 3rem; /* 48px */
  --space-16: 4rem; /* 64px */
  --space-20: 5rem; /* 80px */
  --space-24: 6rem; /* 96px */
  --space-32: 8rem; /* 128px */

  /* ═══════════════════════════════════════════════════════════
     COMPONENT SPACING
     ═══════════════════════════════════════════════════════════ */

  --nav-height: 80px;
  --section-padding-y: var(--space-24);
  --section-padding-y-mobile: var(--space-16);
  --container-padding-x: var(--space-6);
  --card-gap: var(--space-2); /* 8px - Team cards */
  --card-gap-lg: var(--space-4); /* 16px - General cards */
}
```

### Container Widths

```css
:root {
  --container-sm: 640px;
  --container-md: 768px;
  --container-lg: 1024px;
  --container-xl: 1280px;
  --container-2xl: 1440px;
}

.container {
  width: 100%;
  max-width: var(--container-xl);
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--container-padding-x);
  padding-right: var(--container-padding-x);
}
```

### Grid Systems

```css
/* Asymmetric 2-Column Grid (Services Section) */
.grid-asymmetric {
  display: grid;
  grid-template-columns: 60% 40%;
  gap: var(--space-8);
}

/* Team Cards Grid */
.grid-team {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: var(--card-gap);
}

/* Mobile: 2-column strict */
@media (max-width: 768px) {
  .grid-team {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Footer 50/50 Split */
.grid-footer {
  display: grid;
  grid-template-columns: 50% 50%;
}

/* Footer Content Quadrants */
.grid-quadrants {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: var(--space-6);
}
```

---

## Component Patterns

### Buttons

```css
:root {
  /* Button sizing */
  --btn-height-sm: 36px;
  --btn-height-md: 44px;
  --btn-height-lg: 52px;
  --btn-padding-x: var(--space-6);
  --btn-radius: 8px;
  --btn-radius-full: 9999px;
}

/* Primary CTA Button */
.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: var(--btn-height-md);
  padding: 0 var(--btn-padding-x);

  font-family: var(--font-primary);
  font-size: var(--text-sm);
  font-weight: var(--font-semibold);
  text-transform: uppercase;
  letter-spacing: var(--tracking-wide);
  color: var(--color-white);

  background-color: var(--color-primary);
  border: none;
  border-radius: var(--btn-radius);
  cursor: pointer;

  transition: all 0.2s ease;
}

.btn-primary:hover {
  background-color: var(--color-primary-hover);
  transform: translateY(-1px);
}

/* Ghost/Outline Button */
.btn-ghost {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: var(--btn-height-md);
  padding: 0 var(--btn-padding-x);

  font-family: var(--font-primary);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: var(--color-primary);

  background-color: var(--color-white);
  border: 1.5px solid var(--color-primary);
  border-radius: var(--btn-radius);
  cursor: pointer;

  transition: all 0.2s ease;
}

.btn-ghost:hover {
  background-color: var(--color-primary-opacity-10);
}

/* Phone CTA (Navigation) */
.btn-phone {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-4);

  font-family: var(--font-primary);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: var(--color-navy);

  background-color: var(--color-white);
  border: 1.5px solid var(--color-primary);
  border-radius: var(--btn-radius-full);

  transition: all 0.2s ease;
}
```

### Cards

```css
:root {
  --card-radius: 12px;
  --card-radius-lg: 24px;
}

/* Team Member Card */
.card-team {
  position: relative;
  border-radius: var(--card-radius);
  overflow: hidden;
  aspect-ratio: 3 / 4;
}

.card-team__media {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Name overlay - top left with gradient */
.card-team__name-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: var(--space-4);
  background: linear-gradient(
    to bottom right,
    rgba(0, 0, 0, 0.6) 0%,
    transparent 40%
  );
}

/* Credentials - bottom glassmorphism strip */
.card-team__credentials {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: var(--space-3) var(--space-4);
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

/* Service Card (Pricing) */
.card-service-image {
  position: sticky;
  top: calc(var(--nav-height) + var(--space-6));
  border-radius: var(--card-radius-lg);
  overflow: hidden;
  height: 500px;
}
```

### Navigation

```css
/* Fixed Sticky Header */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--nav-height);
  z-index: 1000;

  display: grid;
  grid-template-columns: 35% 30% 35%;
  align-items: center;
  padding: 0 var(--container-padding-x);

  /* Initial transparent state */
  background-color: transparent;
  transition:
    background-color 0.3s ease,
    box-shadow 0.3s ease;
}

/* Scrolled state */
.navbar.scrolled {
  background-color: var(--color-white);
  box-shadow: 0 4px 20px var(--shadow-color);
}

/* Nav links */
.nav-link {
  font-family: var(--font-primary);
  font-weight: var(--font-medium);
  font-size: var(--text-sm);
  color: var(--color-slate);
  text-decoration: none;
  transition: color 0.2s ease;
}

.nav-link:hover {
  color: var(--color-primary);
}

/* Language Switcher */
.lang-switch {
  font-size: var(--text-xs);
  text-transform: uppercase;
}

.lang-switch__option {
  color: var(--color-slate-light);
  text-decoration: none;
}

.lang-switch__option.active {
  color: var(--color-navy);
  font-weight: var(--font-bold);
}
```

### Price Row (Services)

```css
.price-row {
  display: flex;
  align-items: baseline;
  gap: var(--space-2);
  padding: var(--space-3) 0;
  min-height: 44px; /* Touch-friendly on mobile */
}

.price-row__name {
  font-family: var(--font-primary);
  font-weight: var(--font-medium);
  color: var(--color-slate-dark);
  flex-shrink: 0;
}

.price-row__dots {
  flex: 1;
  border-bottom: 2px dotted var(--color-grey-300);
  margin: 0 var(--space-2);
  align-self: center;
}

.price-row__price {
  font-family: var(--font-primary);
  font-weight: var(--font-bold);
  color: var(--color-primary);
  flex-shrink: 0;
}
```

---

## Visual Effects

### Shadows

```css
:root {
  /* Elevation system */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.05);
  --shadow-lg: 0 4px 20px rgba(0, 0, 0, 0.05);
  --shadow-xl: 0 10px 40px rgba(0, 0, 0, 0.1);

  /* Colored shadows for depth */
  --shadow-primary: 0 4px 20px rgba(0, 196, 204, 0.2);
}
```

### Glassmorphism

```css
/* Frosted glass effect */
.glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.glass-dark {
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}
```

### Gradients

```css
:root {
  /* Brand gradient (logo colors) */
  --gradient-brand: linear-gradient(135deg, #00c4cc 0%, #00a3a9 100%);

  /* Text overlay gradient (cards) */
  --gradient-overlay-name: linear-gradient(
    to bottom right,
    rgba(0, 0, 0, 0.6) 0%,
    transparent 40%
  );

  /* Hero video overlay */
  --gradient-overlay-video: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.3) 100%
  );

  /* Subtle background shapes (5% opacity) */
  --gradient-fluid-shape: radial-gradient(
    ellipse at center,
    var(--color-primary-opacity-10) 0%,
    transparent 70%
  );
}
```

### Background Shapes

```css
/* Subtle organic fluid shapes for movement representation */
.fluid-shape {
  position: absolute;
  border-radius: 50%;
  background: var(--gradient-fluid-shape);
  filter: blur(60px);
  pointer-events: none;
  opacity: 0.5;
}

/* Example positioning */
.fluid-shape--hero {
  width: 600px;
  height: 600px;
  top: -200px;
  right: -200px;
}
```

### Video Overlay

```css
.video-overlay {
  position: absolute;
  inset: 0;
  background: var(--overlay-dark);
  pointer-events: none;
}
```

---

## Animation Guidelines

### Transition Timing

```css
:root {
  /* Durations */
  --duration-fast: 150ms;
  --duration-normal: 200ms;
  --duration-slow: 300ms;
  --duration-slower: 500ms;

  /* Easing curves */
  --ease-default: ease;
  --ease-in: ease-in;
  --ease-out: ease-out;
  --ease-in-out: ease-in-out;
  --ease-soft: cubic-bezier(0.4, 0, 0.2, 1); /* Soft ease for slide-up */
  --ease-snappy: cubic-bezier(0.25, 0.1, 0.25, 1); /* Snappy for buttons */
}
```

### Common Animations

```css
/* Slide up entrance */
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-up {
  animation: slideUp var(--duration-slow) var(--ease-soft) forwards;
}

/* Fade in/out for image transitions */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-fade {
  animation: fadeIn var(--duration-slow) var(--ease-default);
}

/* Hover lift effect */
.hover-lift {
  transition: transform var(--duration-normal) var(--ease-snappy);
}

.hover-lift:hover {
  transform: translateY(-2px);
}

/* Slide-left for social links */
@keyframes slideLeft {
  from {
    transform: translateX(5px);
    opacity: 0.7;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
```

### Motion Principles

> [!TIP]
>
> - **Slide-up with soft ease** for element entrances
> - **Snappy and reactive** hover states on buttons (mimicking physical responsiveness)
> - **Fade transitions** (300ms) between service images
> - **Performance**: Use `IntersectionObserver` to only animate elements when >20% visible

---

## Responsive Breakpoints

```css
:root {
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-2xl: 1440px;
}

/* Usage */
@media (max-width: 768px) {
  /* Mobile styles */
}

@media (min-width: 769px) and (max-width: 1024px) {
  /* Tablet styles */
}

@media (min-width: 1025px) {
  /* Desktop styles */
}
```

### Responsive Behavior Summary

| Component      | Desktop                | Mobile                         |
| -------------- | ---------------------- | ------------------------------ |
| Navigation     | 3-column grid          | Hamburger menu + Action stack  |
| Team Grid      | 4-6 columns            | 2 columns, 8px gaps            |
| Services Grid  | 60/40 asymmetric       | Stacked, images between groups |
| Footer         | 50/50 horizontal split | Vertical stack                 |
| Service Ticker | Single row             | Two rows, opposite directions  |

---

## Z-Index Scale

```css
:root {
  --z-base: 0;
  --z-dropdown: 100;
  --z-sticky: 200;
  --z-modal-backdrop: 900;
  --z-modal: 950;
  --z-navbar: 1000;
  --z-tooltip: 1100;
}
```

---

## Changelog

### v1.0.0 — 2026-02-01

**Initial Release**

- Established complete color palette with CSS variables (primary, secondary, neutral, semantic)
- Defined typography system using Manrope with full type scale
- Created 4px-based spacing system
- Documented component patterns: buttons, cards, navigation, price rows
- Specified visual effects: shadows, glassmorphism, gradients, fluid shapes
- Set animation guidelines with timing curves
- Defined responsive breakpoints and behavior

---

> [!NOTE]
> This is a **living document**. As we build sections and learn what works (and doesn't), we will update this guide to reflect our learnings. All changes should be logged in the Changelog section above.
