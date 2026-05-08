# Dirk Bollen — Brand Guideline & Design System

Personal brand for **Dirk Bollen**, digital strategist, service designer, PhD in Human-Computer Interaction. This single file is the canonical reference for any visual or written work made under the brand: personal site, slide decks, applications, prototypes, or client artefacts.

> "I help my clients with making the complex simple. Going the distance from high level strategic insight into a feasible roadmap."

Drop the whole `dirkbollen-brand/` folder into a project. Load `tokens.css` once, read this file once, and you have everything needed to design on-brand.

---

## 1. Brand essence

**Who.** Dirk Bollen — strategist, product manager, service designer, user researcher, team lead. Belgian, academic, pragmatic. Past clients include Proximus, KBC, InThePocket, Made, Boondoggle, Itsme, Evonik.

**What he does.** Digital strategy, service design, product management, AI and the future of work, innovation roadmaps.

**Promise.** Make the complex simple. Take an idea from strategic insight to a feasible roadmap.

**Personality.** Calm, direct, pragmatic, humanist. Confident without bravado. Curious without waffle.

**Visual character.** Sharp, diagrammatic, vector-flat, high-contrast. A strategist's whiteboard rendered cleanly: ellipses, rectangles, dashed lines of visibility, two solid hues per slide, generous white space.

---

## 2. Voice & copy

### Rules

- First-person "I" for Dirk. Second-person "you / your" for the client.
- Sentence case for headlines, buttons, menus. Title case only for proper nouns. ALL-CAPS reserved for micro-labels on diagram axes ("PAST / TODAY / FUTURE").
- Short, plain, unhedged sentences. Active verbs.
- No emoji. Anywhere. Icons do the decorative work.
- Restrained punctuation. Colons introduce lists. No em-dash dividers.
- Numbered lists and parallel four-column structures beat paragraphs on slides.
- Hedged claims ("may exceed", "we are on the brink") over confident predictions.
- Lowercase typographic arrows ("Line of visibility →") are part of the voice.

### Tone signatures

- *"I'm a strategist and a product manager with a PhD in Human computer interaction."*
- *"I try to see things differently by bringing problems back to their essence."*
- *"Did I spark your interest? Let's continue this conversation and have a talk!"*

### Banned vocabulary

cutting-edge, leverage, revolutionise, disrupt, seamless, innovative, world-class, robust, transformative, game-changing, holistic, pivotal, bolster, foster, harness, delve, dive into, unpack. Marketing-speak, empty adjectives, and any sentence that starts with "In today's fast-paced world."

---

## 3. Colour

Six brand hues. Four signatures carry meaning. Two darks carry text. All values are in `tokens.css` as `--db-*`.

| Token            | Hex       | Role                                                |
|------------------|-----------|-----------------------------------------------------|
| `--db-yellow`    | `#FDC40D` | Spark, highlight. Top-left of the logo.              |
| `--db-cyan`      | `#45C4D9` | "Today", present, input, baseline.                  |
| `--db-purple`    | `#7460AB` | Synthesis, AI, intelligence.                        |
| `--db-pink`      | `#EE4280` | Signal, future, action, CTA.                         |
| `--db-ink`       | `#211B43` | Primary text, logo wordmark, dark surfaces.         |
| `--db-navy-deep` | `#001D42` | Data-viz blocks, statement panels.                   |

Neutrals (`--db-gray-50` through `--db-gray-900`) cover dividers, disabled state, muted text.

### Usage rules

- **Two signatures per surface.** Pair cyan + pink, purple + yellow, or cyan + purple. Use all four together only in the logo or full-palette swatches.
- **Pink is attention.** CTAs, future-direction arrows, pending states. Used sparingly.
- **Cyan is here-and-now.** Current state, baseline, input, today.
- **Purple is intelligence.** AI, synthesis, the newest layer in any diagram.
- **Yellow is a spark.** Single small accents only. Never a large fill.
- **Ink (#211B43) is the workhorse text colour** on light backgrounds.
- **Navy-deep (#001D42) hosts white text** in callout panels.
- **No gradients.** Two hues meet as solid overlapping shapes. The logo itself is four flat colours stacked; copy that idea, not Photoshop blends.

---

## 4. Typography

Three families. Loaded in `tokens.css` from Google Fonts (Montserrat, Poppins, Inter), with Montserrat also available locally as a variable font.

| Token            | Family       | Use                                                |
|------------------|--------------|-----------------------------------------------------|
| `--font-display` | Montserrat   | Headlines, slide titles, diagram emphasis.         |
| `--font-body`    | Poppins      | Paragraphs, body, UI copy. Reads well at 18px.     |
| `--font-ui`      | Inter        | Small UI, captions, data labels, axis text.        |
| `--font-serif`   | Georgia      | Editorial pull-quotes only. Used sparingly.        |

### Type scale

Tokens `--t-display` through `--t-micro` (96px → 12px). Slide deck target is 1920×1080 — slide titles use `--t-display` or 160px hero. Document body is `--t-body` (18px) on `--lh-relaxed`.

### Rules

- **Tight tracking** (`--tr-tight`, -0.02em) on display text. Default tracking on body. Wide tracking + uppercase only on micro-labels and eyebrows.
- **Weights:** Montserrat 700–800 for hero, 600–700 for h2/h3. Poppins 400 body, 600 emphasis. Inter 500–700 for UI.
- **Line length** capped at ~62–68 characters for body copy. Long lines break the rhythm.
- **No italics** for emphasis — use weight instead. Italic Montserrat is reserved for the editorial register (CV, longer-form essays).

---

## 5. Layout, shape, motion

### Geometry

The diagrammatic vocabulary is **ellipses, circles, rectangles, lines**. Use SVG primitives, not icon libraries.

- **Ellipses / filled circles** = people, states, data points. Sized by importance.
- **Rectangles** = labels, timeline blocks, swim-lane bands.
- **Dashed horizontal lines** (`3px dashed --db-gray-500`) = lines of visibility, frontstage / backstage dividers.
- **Solid arrows** = observed / present flows.
- **Dashed arrows** = intent / desired future.
- **Stroke widths**: 2–3px regular, 4–5px for arrows that cross a 1920-wide slide.

### Borders & radii

- Sharp visible borders are signature: `2–3px solid --db-ink` for cards and panels.
- Radii: `0` for blocks, `--r-md` (10px) for soft cards, `--r-pill` (999px) for tag bubbles, `--r-full` (50%) for circles. **Avoid the 10–999 middle ground** — anything between feels off-brand.
- Shadows are barely there. `--sh-2` (`0 2px 8px rgba(0,0,0,0.08)`) max, only to lift a card off canvas-grey. Vector-flat is the default.

### Backgrounds

- Default: pure white.
- Canvas grey (`--db-gray-200`) for the contact-sheet aesthetic when slides sit together.
- Dark mode: `--db-ink` for full-bleed statement slides. Used rarely.
- No photographic backgrounds. No textures. No gradients. No noise.

### Layout

- 8px base grid (`--s-2`).
- Slides: 1920×1080. Title at 96–120px from top-left. Diagram occupies the lower two-thirds.
- Web: max content width 1200px. Generous whitespace.
- Left-aligned titles by default. Centre only for title slides and section dividers.
- Legends top-right or bottom-left, inside small rectangles with an ellipse and an Inter 14px label.

### Motion

- Fade + slide-in from below, 220ms, `cubic-bezier(0.22, 1, 0.36, 1)`.
- Dashed-line draw-in, ~600ms, for timeline reveals.
- No bounce, no scale-on-hover. Honest, measured.
- Hover: links underline, buttons shift ink → pink with no scale change.
- Press: 95% opacity, no scale.

---

## 6. Components

Buttons, cards, fields, tags. Pasteable HTML and JSX patterns live in `examples/`. The token references below are the contract — change the implementation freely, keep the tokens stable.

### Button (primary)

```html
<button class="btn btn-primary">Let's talk →</button>
```

`background: var(--db-pink)`, `color: white`, `padding: 14px 22px`, `border-radius: var(--r-pill)`, `font: var(--font-ui) 600 15px`. Hover: `translateY(-1px)`, no scale.

### Button (secondary)

`background: var(--db-ink)`, `color: white`. Same shape as primary.

### Button (ghost)

`background: transparent`, `color: var(--db-ink)`, `border: 1.5px solid var(--db-ink)`. Hover: invert.

### Card

White background, `2px solid var(--db-ink)` or `1px solid var(--db-gray-100)`, `--r-md` radius, no shadow on white. Lift with `--sh-2` only on canvas-grey. Card title: Montserrat SemiBold 24px, left-aligned.

### Tag / pill

`--r-pill` radius, Inter 12–13px, padding 6px 12px. Subtle: gray-50 background, ink text. Loud: pink background, white text.

### Field

`1.5px solid var(--db-gray-100)`, `border-radius: 8px`, `padding: 12px 14px`. Focus: `border-color: var(--db-ink)`. Label above: Inter 12px uppercase, letter-spacing 0.08em, `--db-gray-500`.

### Eyebrow

Pink, uppercase, Inter 600, letter-spacing 0.12em. Sits 24–48px above a heading.

---

## 7. Logo

Files in `assets/`:

- `logo-icon-color.svg` — full-colour B mark (yellow + cyan + purple + pink, four flat shapes stacked).
- `logo-icon-mono.svg` — single-ink filled B for monochrome contexts.
- `logo-icon-outline.svg` — outlined B for small sizes or dark backgrounds.
- `logo-wordmark.svg` — "Dirk Bollen" wordmark in ink.

### Rules

- Minimum size: 24px for the icon, 120px wide for the wordmark.
- Clearspace: at least one stroke-width of the B around all sides.
- On dark backgrounds: outline or all-white fill. Never recolour the four signature hues.
- Don't add effects: no drop shadows, no glows, no rotation.
- The full-colour B is the hero. The wordmark is for footers, business contexts, and signatures.

---

## 8. Iconography

**Outlined, 2px stroke, geometric.** No filled glyphs, no chunky Material icons, no emoji.

Use [Lucide](https://lucide.dev) via CDN. Stroke weight and geometric construction match the diagrammatic language.

```html
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
<i data-lucide="arrow-right" style="color: var(--db-pink); width: 24px; height: 24px;"></i>
<script>lucide.createIcons();</script>
```

Concept-to-icon map:

| Concept           | Lucide name       | Suggested colour     |
|-------------------|-------------------|----------------------|
| User / person     | `user`            | ink                  |
| Group             | `users`           | ink                  |
| Future / forward  | `arrow-right`     | pink                 |
| Past / back       | `arrow-left`      | cyan                 |
| Branching         | `git-branch`      | ink                  |
| Question          | `help-circle`     | gray-500             |
| Insight / spark   | `lightbulb`       | yellow               |
| AI / synthesis    | `sparkles`        | purple               |
| Data / chart      | `line-chart`      | ink                  |
| Journey           | `route`           | ink                  |
| Mobile / digital  | `smartphone`      | ink                  |
| Orchestration     | `workflow`        | ink                  |
| Strategy / map    | `map`             | ink                  |

In-copy glyphs: `→` for direction, `•` for occasional bullets, `×` for multipliers. Avoid emoji and dingbats.

---

## 9. Diagram primitives

Build all diagrams from these primitives, in the colours specified.

- **Person dot.** `<circle r="8" fill="var(--db-cyan)" />`. Larger r for emphasis.
- **State pill.** Rectangle, `--r-pill`, `1.5px solid --db-ink`, white fill, Inter label.
- **Line of visibility.** `<line stroke="var(--db-gray-500)" stroke-width="3" stroke-dasharray="8 6" />`.
- **Future arrow.** `<path stroke="var(--db-pink)" stroke-width="4" stroke-dasharray="0" marker-end="url(#arrow-pink)" />`.
- **Today axis.** Horizontal cyan line, label "TODAY" in ALL CAPS Inter 12px.
- **Swim lane.** Light gray rectangle, ink label on the left edge.

Stack flat shapes; let overlap create the richness. No blend modes.

---

## 10. Surface playbooks

### Slide deck (1920×1080)

1. White background by default. Navy-deep panel only for hero/title or callout.
2. Eyebrow (pink, uppercase, Inter) → title (Montserrat 96–160px, ink, tight tracking) → diagram below.
3. One diagram per slide. One paragraph max. Generous breathing room.
4. Logo icon top-right at 80px, full-colour version.
5. Body / footnote sits bottom-left in Inter 18px, gray-500.

See `examples/slide.html`.

### Personal website

1. Max content width 1200px. White backgrounds. Sections separated by 96–128px.
2. Hero: large Montserrat headline, pink eyebrow, single CTA in pink pill button.
3. Service cards: 14px coloured dot at top-left in one of the four signatures, then SemiBold 22px title, then 15px gray-500 description.
4. Footer: ink panel, white text, wordmark on the left, contact details on the right.

See `examples/web-section.html`.

### Application UI

1. Tokens-first — every colour, radius, spacing, type-size pulled from `tokens.css`.
2. Borders carry meaning. Use sharp 2–3px ink borders for primary surfaces; use gray-100 1px for secondary.
3. Icons from Lucide at 20–24px.
4. Buttons are pill-shaped. Inputs are 8px radius with ink focus border.
5. Dark mode = ink background, gray-200 text, cyan focus, pink CTA.

See `examples/card-component.jsx` for a tokenised React component.

---

## 11. Quick start for AI coding agents

When building anything under this brand:

1. Read `tokens.css` and import it. Reference variables, never hard-code hex values.
2. Read this file once for principles. Don't re-derive.
3. Pick two signature hues for the surface; let the rest stay neutral.
4. Use Montserrat for headlines, Poppins for body, Inter for UI / data.
5. Use the geometry: ellipse, rectangle, dashed line, solid line. Avoid filled icons.
6. Generous whitespace. Sharp borders. No gradients, no shadows, no emoji.
7. Voice: first-person, sentence case, plain language, no hype words.
8. When uncertain, look at `examples/` and copy the pattern.

If something here disagrees with the existing Figma file (`DirkBollen Personal - Partial file saved 4-21-2026.fig`), the Figma file wins and this guideline gets a corresponding update.
