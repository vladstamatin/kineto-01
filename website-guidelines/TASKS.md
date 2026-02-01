# REBALANCE — Development Tasks

> Track implementation progress for the REBALANCE medical recovery clinic website.

---

## Legend

| Symbol | Meaning |
|--------|---------|
| ✅ | Complete design spec available |
| ⚠️ | Partial spec — needs more details |
| 🔲 | Not started |
| 🟡 | In progress |
| ✔️ | Completed |

---

## Phase 1: Project Setup ✔️

### Environment & Configuration

- [x] Initialize Next.js 14+ project with App Router
- [x] Configure TypeScript (`tsconfig.json`)
- [x] Install and configure Tailwind CSS 3.4+
- [x] Set up PostCSS and Autoprefixer
- [x] Install core dependencies:
  - [x] `framer-motion` for animations
  - [x] `lucide-react` for icons
  - [x] `clsx` + `tailwind-merge` for classnames
  - [ ] `@googlemaps/js-api-loader` for maps (deferred — using iframe embed)

### Design System Setup

- [x] Create `globals.css` with CSS variables from [STYLE_GUIDE.md](./STYLE_GUIDE.md)
  - [x] Color palette (primary, secondary, neutral, semantic)
  - [x] Typography scale (sizes, weights, line-heights)
  - [x] Spacing system (4px grid)
  - [x] Shadow variables
- [x] Configure Tailwind with CSS variables
- [x] Set up Google Fonts (Manrope) in `layout.tsx`
- [x] Create `lib/utils.ts` with `cn()` helper function

### Project Structure

- [x] Create folder structure per [PROJECT_REQUIREMENTS.md](./PROJECT_REQUIREMENTS.md):
  ```
  src/
  ├── app/
  ├── components/
  │   ├── ui/
  │   ├── navigation/
  │   ├── hero/
  │   ├── services/
  │   ├── team/
  │   └── footer/
  ├── lib/
  ├── hooks/
  └── assets/
  ```
- [x] Create placeholder asset directories (`assets/videos/`, `public/images/`)

### Base Components

- [x] Build reusable UI primitives:
  - [x] `Button` component (primary, secondary, ghost, phone variants)
  - [x] `Card` component (default, team, service variants)
  - [x] `Container` component (max-width wrapper with size variants)
  - [x] `SectionHeader` component (marker, title, subtitle)

---

## Phase 2: Section Implementation ✔️

### Section 0: Design Foundation ✅
> **Spec:** [0.design-general-vibe.md](../website-sections/0.design-general-vibe.md) — **COMPLETE**

- [x] Implement base color scheme
- [x] Configure typography (Manrope, tight heading tracking, uppercase markers)
- [x] Create background texture patterns (subtle organic fluid shapes at 5% opacity)
- [x] Set up animation presets ("soft ease" slide-up, snappy hover states)

---

### Section 1: Navigation Bar ✅
> **Spec:** [1.navigation-bar.md](../website-sections/1.navigation-bar.md) — **COMPLETE**

- [x] **Desktop Navigation**
  - [x] Fixed sticky header with transparent-to-white transition on scroll
  - [x] 3-column flexbox layout (35% / 30% / 35%)
  - [x] Left: Horizontal nav links (Sus, Servicii și prețuri, Echipa, Contacte)
  - [x] Center: Brand logo (icon + REBALANCE text stack)
  - [x] Right: Action stack (phone CTA + language switcher)
- [x] **Mobile Navigation**
  - [x] Hamburger menu icon (left)
  - [x] Slide-out drawer menu
  - [x] Scaled action stack (right)
- [x] **Styling**
  - [x] Shadow on scroll: `box-shadow: 0 4px 20px rgba(0,0,0,0.05)`
  - [x] Z-index: 1000
  - [x] Phone button with turquoise border (#00C4CC)
  - [x] Language switcher (RO | RU | EN) with active state styling

---

### Section 2: Hero Section ✅
> **Spec:** [2.hero-section.md](../website-sections/2.hero-section.md) — **COMPLETE**

- [x] **Layout Structure**
  - [x] Vertical stacked grid (Bento-style)
  - [x] 2px white separators between rows
  - [x] Semi-transparent overlay (`rgba(0,0,0,0.3)`)
- [x] **Video Rows**
  - [x] Row 1: Height 2x navbar (~160px), behind navbar (z-index: 0), text: "Salut"
  - [x] Row 2: Height 1x navbar (~80px), text: "Kinetoterapie"
  - [x] Row 3: Height 1x navbar (~80px), text: "Yoga · Pilates"
- [x] **Video Implementation**
  - [x] HTML5 `<video>` with `autoplay loop muted playsinline`
  - [x] Placeholder gradient fallbacks
  - [ ] Actual video files (pending asset delivery)
- [x] **Typography**
  - [x] Centered text, white, Manrope Medium
  - [x] Responsive scaling for mobile

---

### Section 3: Services & Pricing ✅
> **Spec:** [3.services-and-prices-section.md](../website-sections/3.services-and-prices-section.md) — **COMPLETE**

- [x] **Kinetic Service Ticker**
  - [x] Infinite horizontal marquee loop (Framer Motion)
  - [x] Content: "Terapie Manuală • Kinetoterapie • Drenaj Limfatic..."
  - [x] Desktop: Single line, moderate speed
  - [x] Mobile: Two stacked rows, opposite directions (parallax)
  - [x] Bold uppercase navy typography
- [x] **Split-Layout Pricing Grid**
  - [x] Asymmetric 2-column (60% left / 40% right)
  - [x] Left: Scrollable service list with dotted leaders
  - [x] Right: Sticky image anchor (24px border-radius)
- [x] **Price List Items**
  - [x] Flexbox row: Name + dotted line + turquoise price
  - [x] Group A: Manual Therapy (Adult, Adolescent, Baby)
  - [x] Group B: Specialized (Visceral, ATM, Lymphatic)
  - [x] Group C: Subscriptions (5/10 session packages)
- [ ] **Dynamic Image Swap** (deferred — using placeholder)
  - [ ] Fade transition (300ms) between category images
  - [ ] IntersectionObserver for scroll detection
- [x] **Mobile Adaptation**
  - [x] Stacked layout (no sticky image on mobile)
  - [x] 44px min height for touch targets

---

### Section 4: Team ✅
> **Spec:** [4.team.md](../website-sections/4.team.md) — **COMPLETE**
>
> **References:** `prices.png` (layout reference)

**Implementation Tasks:**
- [x] **Grid Layout**
  - [x] Desktop: 4-6 columns (`auto-fit, minmax(220px, 1fr)`)
  - [x] Mobile: 2-column, 8px gaps
- [x] **Card Component**
  - [x] Placeholder gradient backgrounds (pending cinemagraph assets)
  - [x] Top-left: Doctor name with gradient overlay
  - [x] Bottom: Glassmorphism strip with position + experience badge
- [x] **Interactions**
  - [x] Hover: lift effect (-translate-y-1)
  - [x] Border radius: 12px
- [x] **Performance**
  - [x] IntersectionObserver (visibility detection)

---

### Section 5: Footer ✅
> **Spec:** [5.footer-section.md](../website-sections/5.footer-section.md) — **COMPLETE**
>
> **Note:** Using placeholder addresses/social data. Google Maps embed (no API key required).

**Implementation Tasks:**
- [x] **Desktop Layout**
  - [x] 50/50 horizontal split
  - [x] Left: Google Maps iframe (grayscale filter applied)
  - [x] Right: Navy background (#1F2A38), white text
- [x] **Map Features**
  - [x] Google Maps iframe embed (no API key needed)
  - [x] Grayscale filter for "Clinical Dark" look
- [x] **Content Quadrants (Right Zone)**
  - [x] Q1 (Top-Left): Locations header + addresses
  - [x] Q2 (Top-Right): Social links with slide-left hover
  - [x] Q3 (Bottom-Left): Quick links + copyright
  - [x] Q4 (Bottom-Right): Large REBALANCE logo (20% opacity, bleed effect)
- [x] **Mobile Adaptation**
  - [x] Vertical stack (map on top, 40vh height)
  - [x] Horizontal social row on mobile
  - [x] Responsive padding

---

## Phase 3: Polish & Optimization

### Animations & Interactions

- [ ] Implement Framer Motion transitions
- [ ] Scroll-triggered animations (slide-up with soft ease)
- [ ] Hover state refinements
- [ ] Page load sequence

### Performance

- [ ] Optimize video assets (compression, lazy loading)
- [ ] Image optimization (WebP/AVIF formats)
- [ ] Lighthouse audit (target: 90+ scores)
- [ ] Core Web Vitals optimization

### SEO & Localization

- [ ] Add MedicalBusiness schema markup
- [ ] Configure metadata for Romanian, Russian, English
- [ ] Local SEO keywords implementation
- [ ] Language toggle functionality

### Accessibility

- [ ] Keyboard navigation
- [ ] Screen reader testing
- [ ] Color contrast validation
- [ ] Focus state styling

---

## Notes

> **Last Updated:** 2026-02-01

### Asset References

| Asset | Purpose |
|-------|--------|
| `logo.png` | Brand logo reference for navigation |
| `prices.png` | Layout reference for team cards |

### Data Strategy

- **Team:** Using placeholder names, titles, and experience data
- **Footer:** Using placeholder addresses and social links
- **Maps:** Google Maps iframe embed (no API key needed)

### Outstanding Items

1. **Assets:** Hero videos and team cinemagraphs pending delivery
2. **Production Data:** Replace placeholder team/contact data before launch
