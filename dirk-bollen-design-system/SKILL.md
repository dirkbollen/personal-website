---
name: dirk-bollen-personal-brand
description: Use this skill to generate well-branded interfaces, slides, diagrams, and assets for Dirk Bollen (personal brand — digital strategist, service designer, PhD Human-Computer Interaction, Belgium). Provides the complete design system: Montserrat/Poppins/Inter type pairing, 4-hue brand palette (Pink/Cyan/Purple/Yellow), geometric B logo assets, diagrammatic visual language (ellipses, dashed lines, solid arrows), and component patterns for web and slide surfaces.
user-invocable: true
---

# Dirk Bollen Personal Brand Design System

A complete, reusable design system package for Dirk Bollen's personal brand — digital & service-design strategist, PhD Human-Computer Interaction, Belgium. Clients include Proximus, KBC, itsme®, InThePocket, Evonik, and Peel House of Innovation.

---

## What's inside

Read `README.md` for the full package manifest, product context, and reuse workflow. Read `DESIGN.md` for the authoritative visual system rules, color semantics, type scale, spacing, components, diagram vocabulary, voice guidelines, and anti-patterns.

**Token file — `colors_and_type.css`**
All CSS custom properties extracted from source evidence: `--db-pink`, `--db-cyan`, `--db-purple`, `--db-yellow`, `--db-ink`, `--db-navy-deep`, neutral grays, semantic aliases (`--fg`, `--bg`, `--accent`, `--border`), spacing scale (`--s-1` through `--s-10`), radius tokens, shadow tokens, and motion tokens. Includes `@font-face` declarations binding the locally hosted Montserrat variable font from `fonts/`. Import `colors_and_type.css` at the top of any artifact to activate the full token system.

**Brand assets — `assets/`**
Preserved directly from source evidence (local design system folder):
- `logo-color.png` — full-color logo for light surfaces
- `logo-line.png` — dark line logo for light backgrounds
- `logo-line-white.png` — white line logo for dark backgrounds
- `logo-icon-filled.svg` — geometric B icon (filled)
- `logo-icon-outline.svg` — geometric B icon (outline)
- `logo-wordmark-Fill-1.svg`, `Fill-12.svg`, `Fill-14.svg`, `Fill-16.svg` — wordmark glyphs at four sizes

**Font files — `fonts/`**
- `Montserrat-VariableFont_wght.ttf` — upright, 100–900
- `Montserrat-Italic-VariableFont_wght.ttf` — italic, 100–900
- Bound in `colors_and_type.css` via `@font-face`. Poppins (Google Fonts) substitutes for commercial Silka. See `fonts/README.md` for substitution notes.

**Preview cards — `preview/`**
Ten focused review cards showing live-rendered tokens and components:
- `preview/colors-primary.html` — brand palette swatches
- `preview/colors-theme-light.html` — light theme surface tokens
- `preview/colors-theme-dark.html` — dark theme surface tokens
- `preview/typography-specimens.html` — type scale, Montserrat display + Poppins body
- `preview/spacing-tokens.html` — spacing scale (4px base)
- `preview/spacing-radius.html` — radius tokens (flat to pill)
- `preview/spacing-shadows.html` — shadow tokens
- `preview/components-buttons.html` — button variants (primary, pink, ghost, ghost-white)
- `preview/components-inputs.html` — form field variants (light + dark)
- `preview/brand-assets.html` — logo variants loaded from `assets/` with real `<img>` references

**Applied interface kit — `ui_kits/app/`**
React/Babel browser-entry (`index.html`) composing nine role components:
- `Nav.jsx`, `Hero.jsx`, `Services.jsx`, `Clients.jsx`, `ContactCTA.jsx` — personal site surfaces
- `AssistantsList.jsx`, `ChatArea.jsx`, `MessageBubble.jsx`, `InputBar.jsx` — design canvas workspace (based on `source_examples/website/design-canvas.jsx`)

Read `ui_kits/app/README.md` for kit structure, component roles, and usage workflow.

**Source examples — `source_examples/website/design-canvas.jsx`**
Original Figma-like interactive canvas component (sections rail, artboards area, post-it comments) preserved from the source evidence snapshot at `context/local-code/Dirk-Bollen-design-system/files/website/design-canvas.jsx`. Informs the workspace role components in the UI kit.

**Evidence — `context/`**
- `context/local-code/Dirk-Bollen-design-system.md` — intake evidence note
- `context/local-code/Dirk-Bollen-design-system/files/` — source file snapshots (CSS, JSX, fonts, assets)
- `context/source-context.md` — design system setup provenance

---

## Source context

**Local source folder:** `/Users/dirkbollen/claudeai/claude/Dirk Bollen design system`
Intake via `od tools connectors local-design-context`. Evidence note: `context/local-code/Dirk-Bollen-design-system.md`. Source file snapshots: `context/local-code/Dirk-Bollen-design-system/files/`.

**Token CSS source:** `context/local-code/Dirk-Bollen-design-system/files/colors_and_type.css`
All `--db-*` color tokens, `@font-face` declarations, and base element styles were extracted verbatim from this file. No values were invented.

**Component source:** `context/local-code/Dirk-Bollen-design-system/files/website/site.css`
Button, form field, service card, and navigation component patterns extracted from this file.

**Figma source:** `DirkBollen Personal - Partial file saved 4-21-2026.fig`
Pages: `/DesignSystem/Colors`, `/DesignSystem/Logo`, `/DesignSystem/Example-visualisations-and-slides`. Brand palette hex values confirmed against the CSS source.

**Font source:** `context/local-code/Dirk-Bollen-design-system/files/fonts/`
Montserrat TTF files preserved directly from this snapshot into `fonts/`.

**Asset source:** `context/local-code/Dirk-Bollen-design-system/files/assets/`
All logo and icon files preserved directly from this snapshot into `assets/`.

---

## When to use

Use this skill when building any artifact that carries Dirk Bollen's personal professional identity:
- Slide decks, presentations, or keynotes in Dirk's brand
- Personal website prototypes, landing pages, or portfolio pages
- Strategy diagrams, service blueprints, or customer journey maps
- Workshop facilitation templates, talk visuals, or printed handouts
- Design canvas or workspace tools in this brand
- Any screen, prototype, or marketing page associated with Dirk Bollen as a person or consultant

---

## How to use

1. **Read `README.md`** — product context, package manifest, preview card list, and reuse workflow.
2. **Read `DESIGN.md`** — visual system rules, color semantics, type scale, spacing, component patterns, diagram vocabulary, voice, and anti-patterns. This is the authoritative rules document.
3. **Link `colors_and_type.css`** — all design tokens and `@font-face` declarations are in this file. Add `<link rel="stylesheet" href="colors_and_type.css">` at the top of any HTML artifact to activate tokens and Montserrat typeface.
4. **Use the real logo assets** — `assets/logo-color.png` on white/light surfaces; `assets/logo-line-white.png` on dark surfaces. Reference `preview/brand-assets.html` for correct usage. Do not redraw or substitute the logo.
5. **Inspect preview cards** in `preview/` for component patterns, color tokens, and type specimens before writing custom CSS.
6. **Copy UI kit components** from `ui_kits/app/components/` when building React-based prototypes. Load them via Babel standalone as shown in `ui_kits/app/index.html`.
7. **Apply the diagram vocabulary** from `DESIGN.md §5` — ellipses for people/states, dashed borders for uncertainty, solid arrows for observed flows, and the four hue semantics: Pink = future/signal, Cyan = today/present, Purple = AI/synthesis, Yellow = spark/accent.

---

## Design System Highlights

All values below are sourced directly from `context/local-code/Dirk-Bollen-design-system/files/colors_and_type.css` (Figma source: `DirkBollen Personal - Partial file saved 4-21-2026.fig`, page `/DesignSystem/Colors`). No values were invented or approximated.

**Brand palette — four semantic hues extracted from source CSS:**

| Token | Hex | Source evidence | Meaning |
|---|---|---|---|
| `--db-pink` | `#EE4280` | `colors_and_type.css` line 8 | Future / signal / primary CTAs |
| `--db-cyan` | `#45C4D9` | `colors_and_type.css` line 9 | Today / present state / secondary actions |
| `--db-cyan-soft` | `#6ECBD5` | `colors_and_type.css` line 10 | Tinted fills and backgrounds |
| `--db-purple` | `#7460AB` | `colors_and_type.css` line 11 | AI / synthesis / depth |
| `--db-yellow` | `#FDC40D` | `colors_and_type.css` line 12 | Spark / accent — once per composition |
| `--db-ink` | `#211B43` | `colors_and_type.css` line 14 | Primary text, borders, logo fill |
| `--db-navy-deep` | `#001D42` | `colors_and_type.css` line 16 | Data viz blocks, dark hero sections |

Color usage rule (from source): all four hues are semantic, not decorative. Pink = future, Cyan = today, Purple = AI, Yellow = spark. Maximum two brand hues per surface.

**Typography — extracted from `colors_and_type.css` `@font-face` and font-stack declarations:**

- `--font-display: 'Montserrat', 'Helvetica Neue', Arial, sans-serif` — variable font locally hosted in `fonts/` (wght 100–900, upright + italic). Used at weight 700–800 for display and H1–H3.
- `--font-body: 'Poppins', 'Helvetica Neue', Arial, sans-serif` — Google Fonts, humanist geometric. Used at weight 400–600 for body and UI copy.
- `--font-ui: 'Inter', 'Helvetica Neue', Arial, sans-serif` — Google Fonts. Used at weight 400–700 for labels, captions, data tables, and metadata.

**Spacing scale — 4px base, from `colors_and_type.css`:**
`--s-1: 4px` through `--s-10: 128px`.

**Border rules — from `site.css` component patterns:**
- Diagram outlines: `3px solid var(--db-ink)` (--bw-2)
- Lines of visibility / uncertainty: `3px dashed var(--db-gray-500)` (--bw-2, dashed)
- Card borders: `1.5px solid var(--db-gray-100)` (hairline)

**Radius character:** Flat-first. Blocks: `0px`. Cards: `4–10px`. Tags and buttons: `999px` (pill). No large border-radius on sections.

**Visual character (from Figma `/DesignSystem/Example-visualisations-and-slides`):** Sharp, vector-flat, diagrammatic. Diagram language: ellipses = people/states, rounded rects = systems/tools, dashed ellipses = uncertainty, solid arrows = observed flows, dashed arrows = lines of visibility. Restrained shadows (max `--sh-2: 0 2px 8px rgba(0,0,0,0.08)`).
