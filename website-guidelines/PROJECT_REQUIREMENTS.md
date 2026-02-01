# REBALANCE — Project Requirements

## 1. Project Overview

| Attribute         | Description                                                                                         |
| ----------------- | --------------------------------------------------------------------------------------------------- |
| **Product**       | Premium medical recovery clinic website                                                             |
| **Brand**         | REBALANCE                                                                                           |
| **Theme**         | "Clinical Serenity" — high-end medical credibility with human warmth                                |
| **Goal**          | Establish trust through expertise + streamline journey from "I have pain" → "Appointment Confirmed" |
| **Target Region** | Moldova (RO/RU/EN languages)                                                                        |

**Target Audience:**

- Post-op patients seeking specialized rehabilitation
- Office professionals (25-45) with tech neck/lumbar issues
- Active seniors seeking mobility maintenance

---

## 2. Tech Stack

| Category   | Technology               | Purpose                            |
| ---------- | ------------------------ | ---------------------------------- |
| Framework  | Next.js 14+ (App Router) | Server components, routing, SEO    |
| Language   | TypeScript               | Type safety                        |
| UI Library | React 18+                | Component architecture             |
| Styling    | Tailwind CSS 3.4+        | Utility-first CSS                  |
| Animations | Framer Motion            | Smooth transitions, scroll effects |
| Icons      | Lucide React             | Consistent icon system             |
| Utilities  | clsx + tailwind-merge    | Conditional classnames             |
| Maps       | Google Maps API          | Location integration               |

---

## 3. Dependencies

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "framer-motion": "^10.16.0",
    "lucide-react": "^0.300.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.2.0",
    "@googlemaps/js-api-loader": "^1.16.0"
  },
  "devDependencies": {
    "typescript": "^5.3.0",
    "@types/react": "^18.2.0",
    "@types/node": "^20.10.0",
    "tailwindcss": "^3.4.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0"
  }
}
```

---

## 4. Design System

All design specifications are documented in:

📄 **[STYLE_GUIDE.md](./STYLE_GUIDE.md)**

Includes: Color palette, typography, spacing, components, effects, animations, breakpoints.

---

## 5. Page Sections

| #   | Section            | Description                                                | Spec File                                                                                |
| --- | ------------------ | ---------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| 0   | Design Guidelines  | Visual direction, color palette, typography                | [0.design-general-vibe.md](../website-sections/0.design-general-vibe.md)                 |
| 1   | Navigation         | Fixed sticky header, 3-column layout, language switcher    | [1.navigation-bar.md](../website-sections/1.navigation-bar.md)                           |
| 2   | Hero               | Bento-style video grid, 3 stacked rows with overlay text   | [2.hero-section.md](../website-sections/2.hero-section.md)                               |
| 3   | Services & Pricing | Marquee ticker + asymmetric pricing grid with sticky image | [3.services-and-prices-section.md](../website-sections/3.services-and-prices-section.md) |
| 4   | Team               | Responsive card grid with cinemagraph loops, glassmorphism | [4.team.md](../website-sections/4.team.md)                                               |
| 5   | Footer             | 50/50 split — Google Maps + content quadrants              | [5.footer-section.md](../website-sections/5.footer-section.md)                           |

---

## 6. File Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata
│   ├── page.tsx             # Home page composition
│   └── globals.css          # Tailwind imports + CSS variables
├── components/
│   ├── ui/                  # Reusable primitives (Button, Card)
│   ├── navigation/          # Navbar, MobileMenu, LangSwitcher
│   ├── hero/                # VideoRow, HeroSection
│   ├── services/            # Ticker, PriceList, StickyImage
│   ├── team/                # TeamCard, TeamGrid
│   └── footer/              # FooterMap, FooterContent
├── lib/
│   └── utils.ts             # cn() helper, shared utilities
├── hooks/                   # Custom React hooks
├── assets/
│   └── videos/              # Hero video placeholders
└── public/
    └── images/              # Static assets
```

---

## 7. Responsive Requirements

| Breakpoint | Width      | Key Behaviors                                     |
| ---------- | ---------- | ------------------------------------------------- |
| Mobile     | < 768px    | Hamburger nav, stacked layouts, 2-col team grid   |
| Tablet     | 768–1024px | Hybrid layouts, scaled components                 |
| Desktop    | > 1024px   | Full 3-col nav, asymmetric grids, sticky elements |

See [STYLE_GUIDE.md#responsive-breakpoints](./STYLE_GUIDE.md#responsive-breakpoints) for CSS variables and component behavior table.

---

## 8. SEO & Localization

- **Languages**: Romanian (primary), Russian, English
- **Schema**: MedicalBusiness markup
- **Keywords**: Local intent (e.g., "kinetoterapie Chișinău", "recuperare medicală")
- **Structure**: Prepared for dual-language toggle

---

> 📋 For setup steps and implementation tasks, see [TASKS.md](./TASKS.md)
