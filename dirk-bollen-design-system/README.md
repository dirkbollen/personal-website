# Dirk Bollen — Personal Brand Design System

A complete Claude Design–style package for **Dirk Bollen**, digital & service-design strategist with a PhD in Human-Computer Interaction. Based in Belgium; focuses on digital strategy, product management, service design, and the intersection of AI with human behaviour.

> "I help my clients with making the complex simple. Going the distance from high level strategic insight into a feasible roadmap."

---

## Product Overview

**Dirk Bollen** is a Belgian digital strategist, product manager, service designer, user researcher, and team lead. His personal brand system supports presentations, personal website, client proposals, workshops, and talks.

### Primary UI Surfaces
- Personal website (hero + services + clients + contact)
- Slide decks (1920×1080, strategy and conference talks)
- Strategy diagrams and service blueprints (vector-flat, diagrammatic language)
- Workshop materials and facilitation templates

### Core Capabilities & Client Work
- Digital strategy: Proximus, KBC, InThePocket, Evonik, Nascom, Boondoggle
- Service design blueprinting and customer journey mapping
- AI and human behaviour — PhD-grounded, research-led perspective
- Workshop facilitation: "From idea to execution: A pragmatic introduction in design thinking"
- Teaching at universities and client sites

### Visual Identity Summary
Four signature brand hues — Pink (future/signal), Cyan (today/present), Purple (AI/synthesis), Yellow (spark/accent) — combined with a geometric **B** logo. The system is **sharp, diagrammatic, vector-flat, high-contrast**. A strategist's toolkit: lots of arrows, dashed timelines, ellipses representing states of being, and a disciplined 4-hue palette readable at the back of a conference room.

---

## Source References

| Source | Path |
|---|---|
| Local design system folder | `/Users/dirkbollen/claudeai/claude/Dirk Bollen design system` |
| Figma source | `DirkBollen Personal - Partial file saved 4-21-2026.fig` |
| Evidence note | `context/local-code/Dirk-Bollen-design-system.md` |
| Site CSS evidence | `context/local-code/Dirk-Bollen-design-system/files/website/site.css` |
| Token CSS evidence | `context/local-code/Dirk-Bollen-design-system/files/colors_and_type.css` |

---

## Package Contents

```
├── DESIGN.md                          ← Canonical design system rules
├── SKILL.md                           ← Agent-usable skill entry (YAML frontmatter)
├── README.md                          ← This file — reuse guide
├── colors_and_type.css                ← All design tokens + @font-face + base styles
│
├── assets/                            ← Brand logos, icons, wordmark SVGs
│   ├── logo-color.png                 ← Full color logo
│   ├── logo-line.png                  ← Line/dark logo (for light surfaces)
│   ├── logo-line-white.png            ← Line/white logo (for dark surfaces)
│   ├── logo-icon-filled.svg           ← Geometric B icon — filled
│   ├── logo-icon-outline.svg          ← Geometric B icon — outline
│   ├── logo-wordmark-Fill-1.svg       ← Wordmark glyph D
│   ├── logo-wordmark-Fill-12.svg      ← Wordmark glyph B
│   ├── logo-wordmark-Fill-14.svg      ← Wordmark glyph o
│   └── logo-wordmark-Fill-16.svg      ← Wordmark glyph e
│
├── fonts/                             ← Locally hosted variable fonts
│   ├── Montserrat-VariableFont_wght.ttf        ← Montserrat upright (100–900)
│   ├── Montserrat-Italic-VariableFont_wght.ttf ← Montserrat italic (100–900)
│   └── README.md                              ← Font substitution notes
│
├── preview/                           ← Reviewable HTML cards (Design System tab)
│   ├── colors-primary.html
│   ├── colors-theme-light.html
│   ├── colors-theme-dark.html
│   ├── typography-specimens.html
│   ├── spacing-tokens.html
│   ├── spacing-radius.html
│   ├── spacing-shadows.html
│   ├── components-buttons.html
│   ├── components-inputs.html
│   └── brand-assets.html
│
├── ui_kits/app/                       ← Applied interface kit (personal site)
│   ├── index.html                     ← Browser entry — mounts React App
│   ├── README.md
│   └── components/
│       ├── Nav.jsx                    ← Sticky nav bar
│       ├── Hero.jsx                   ← Dark hero section
│       ├── Services.jsx               ← Practice area card grid
│       ├── Clients.jsx                ← Quote + client tags
│       ├── ContactCTA.jsx             ← Dark CTA band
│       └── App.jsx                    ← Shell composition
│
├── source_examples/
│   └── website/
│       └── design-canvas.jsx          ← Original Figma-ish canvas component
│
└── context/
    ├── source-context.md
    └── local-code/
        └── Dirk-Bollen-design-system/ ← Evidence snapshots from intake
```

---

## Preview Manifest

| Card | Path | What to inspect |
|---|---|---|
| **Colors — Primary** | `preview/colors-primary.html` | All 4 brand hues with semantic role labels, dark inks, and diagram colour semantics (Pink=future, Cyan=today, Purple=AI, Yellow=spark) |
| **Colors — Light Theme** | `preview/colors-theme-light.html` | Semantic alias tokens (--fg, --bg, --accent, --border) on white; live card component demo |
| **Colors — Dark Theme** | `preview/colors-theme-dark.html` | Dark surface tokens (--bg-dark, --db-navy-deep); accents on dark; dark form variant |
| **Typography Specimens** | `preview/typography-specimens.html` | Full type scale from 96px display to 12px micro; Montserrat weight spectrum; font family roles |
| **Spacing Tokens** | `preview/spacing-tokens.html` | All 10 spacing steps (4–128px); visual rhythm demo with real section components |
| **Radius & Borders** | `preview/spacing-radius.html` | 6 radius tokens; 5 border widths; dashed/solid diagram border vocabulary; shape examples |
| **Shadows** | `preview/spacing-shadows.html` | 4 elevation levels; usage rules; vector-flat principle |
| **Buttons** | `preview/components-buttons.html` | All button variants on light and dark; icon buttons; disabled states; specification table |
| **Inputs & Cards** | `preview/components-inputs.html` | Form fields (light + dark); service cards with hover; tag/chip variants; nav bar with real logo |
| **Brand Assets** | `preview/brand-assets.html` | Real preserved logo files from `assets/`; B icon filled/outline; wordmark SVG glyphs; usage on light/dark/brand surfaces |

---

## Reuse Workflow

### For new prototypes / slides / landing pages
1. Link `colors_and_type.css` at the top of your HTML file
2. Copy relevant `preview/*.html` cards for the component patterns you need
3. Read `DESIGN.md` for voice, anti-patterns, and layout rules
4. Use `assets/logo-*.png|svg` for the logo — do not recreate it

### For agents generating artifacts in this brand
1. Read `SKILL.md` for the quick directive summary
2. Read `DESIGN.md` for full visual rules
3. Import `colors_and_type.css` — all tokens are defined there
4. Reference `preview/brand-assets.html` for logo usage guidance
5. Copy component patterns from `ui_kits/app/components/*.jsx` as implementation reference

### Font setup
The `@font-face` rules in `colors_and_type.css` point to `fonts/Montserrat-VariableFont_wght.ttf` and `fonts/Montserrat-Italic-VariableFont_wght.ttf`. These paths resolve from the project root. When using `colors_and_type.css` from a subdirectory, adjust the `url()` paths or symlink the fonts folder.

---

## Design System Highlights

| Token | Value | Notes |
|---|---|---|
| Primary text | `--db-ink: #211B43` | Deep purple-ink, used for all body and headings |
| Primary CTA | `--db-pink: #EE4280` | Future/signal — buttons, links, eyebrows |
| Present / today | `--db-cyan: #45C4D9` | Diagrams, focus rings on dark, supportive actions |
| AI / synthesis | `--db-purple: #7460AB` | AI-related content, synthesis moments |
| Spark | `--db-yellow: #FDC40D` | Highlight accent — used once per composition |
| Display font | `Montserrat` 800 | Variable font, locally hosted |
| Body font | `Poppins` 400 | Substitute for commercial Silka |
| UI / data font | `Inter` 400–700 | Labels, captions, tables |
| Border weight | 3px solid `--db-ink` | Signature flat-graphic border |
| Dashed border | 3px dashed `--db-gray-500` | Lines of visibility in diagrams |
