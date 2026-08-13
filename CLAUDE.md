# CLAUDE.md - Personal website 

## Always do first 
Check the Dirk Bollen design system before making any design or visual decisions. The **`dirk-bollen-design-system/`** folder is the authoritative source:
- `dirk-bollen-design-system/DESIGN.md` — authoritative visual rules: color semantics, type scale, spacing, components, diagram vocabulary, voice, and anti-patterns
- `dirk-bollen-design-system/SKILL.md` — design-system skill instructions
- `dirk-bollen-design-system/colors_and_type.css` — design tokens + `@font-face` (CSS source of truth for `--db-*` tokens)
- `dirk-bollen-design-system/preview/` — live-rendered component/token preview cards

The older `dirkbollen-brand/` folder is superseded by `dirk-bollen-design-system/`; prefer the latter.

---

## Tech stack
Plain vanilla HTML/CSS/JS. **No build system, no npm, no framework.** The entire site lives in a single file: `index.html`. Do not introduce React, Tailwind, or any bundler.

Fonts: **Montserrat** (headlines) is hosted **locally** as a variable font — `@font-face` in `index.html` points at `project/website/assets/fonts/` (copied from the design system's `fonts/`). **Poppins** (body) and **Inter** (UI) load from Google Fonts via CDN. Icons use [Lucide](https://lucide.dev) via CDN if needed.

## Design tokens
The site redeclares the design-system tokens inline inside a `:root {}` block in `index.html` — it does **not** `@import` `colors_and_type.css`. The `:root` block mirrors the design system: the full `--db-*` brand palette + neutral ramp, semantic aliases (`--fg`, `--bg`, `--accent`, `--border-strong`, …), and motion tokens, plus short aliases (`--pink`, `--ink`, …) that map onto the `--db-*` tokens. When adding new sections or components, reference these CSS variables — never hard-code hex values.

Key rules from `DESIGN.md` to respect: white base background (**never** cream/beige — that's an anti-pattern), max 2 brand hues per surface, signature **3px** strong ink borders, flat-first radii, and restrained shadows.

## Asset structure
```
project/website/assets/
  dirk-stage.jpg        — hero portrait photo
  logo-color.png        — colour logo used in nav
  fonts/                — locally-hosted Montserrat variable fonts (upright + italic)
  events/               — speaking/event photos (5 images)
  news/                 — press/media images (Humo.jpg, hbvl2.png, swiss.jpg)
  other/                — miscellaneous assets
```

## Contact form
The contact form submits via **Formspree**. The endpoint is already configured in the JS at the bottom of `index.html` — do not prompt the user for it again. It includes a honeypot field for spam protection.

## Page sections (in order)
1. Nav — sticky, logo + links, mobile CTA button only (no desktop CTA button)
2. Hero — large headline, portrait photo, meta strip
3. Ticker — animated dark band
4. About — two-column text
5. Services — six-item grid
6. Speaking — two-column: left = text + CTA, right = staggered photo gallery (4 images from `events/`, animated in via IntersectionObserver)
7. Contact — dark panel, headline + contact form
8. Footer

## Confirmed design decisions
- Event gallery images use `border-radius: 10px`
- No "Start a project" button in the nav (desktop or mobile CTA only)
- Contact section shows headline and form only — no email/availability/social links below the heading
