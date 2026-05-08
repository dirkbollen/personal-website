# CLAUDE.md - Personal website 

## Always do first 
Check the Dirk Bollen brand guidelines and design system before making any design or visual decisions:
- `dirkbollen-brand/BRAND.md` — brand guidelines
- `dirkbollen-brand/SKILL.md` — brand skill instructions
- `dirkbollen-brand/tokens.css` — design tokens (CSS)
- `dirkbollen-brand/tokens.json` — design tokens (JSON)

---

## Tech stack
Plain vanilla HTML/CSS/JS. **No build system, no npm, no framework.** The entire site lives in a single file: `index.html`. Do not introduce React, Tailwind, or any bundler. External dependencies (fonts, icons) are loaded via CDN only.

Icons use [Lucide](https://lucide.dev) via CDN if needed.

## Design tokens
The site redeclares brand tokens inline inside a `:root {}` block in `index.html` — it does **not** import `tokens.css` from the brand folder. When adding new sections or components, reference the CSS variables already defined in that `:root` block. Do not hard-code hex values.

## Asset structure
```
project/website/assets/
  dirk-stage.jpg        — hero portrait photo
  logo-color.png        — colour logo used in nav
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
