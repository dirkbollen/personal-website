# Personal Brand System — Dirk Bollen

> Category: Custom
> Surface: web

Personal brand system for **Dirk Bollen**, digital & service-design strategist with a PhD in Human-Computer Interaction. Based in Belgium; focuses on digital strategy, product management, service design, and the intersection of AI with human behaviour.

> "I help my clients with making the complex simple. Going the distance from high level strategic insight into a feasible roadmap."

---

## 0. Source Context

This design system is derived from the following source evidence:

| Source | Location | Content |
|---|---|---|
| Local design system folder | `/Users/dirkbollen/claudeai/claude/Dirk Bollen design system` | Token CSS, site CSS, font files, brand assets, SKILL.md, design-canvas.jsx |
| Figma source | `DirkBollen Personal - Partial file saved 4-21-2026.fig` | Pages: `/DesignSystem/Colors`, `/DesignSystem/Logo`, `/DesignSystem/Example-visualisations-and-slides` |
| Evidence note | `context/local-code/Dirk-Bollen-design-system.md` | Intake note from bounded `od tools connectors local-design-context` |
| Token CSS | `context/local-code/Dirk-Bollen-design-system/files/colors_and_type.css` | All CSS custom properties, @font-face, base styles |
| Site CSS | `context/local-code/Dirk-Bollen-design-system/files/website/site.css` | Button, form, service card, nav component styles |
| Design canvas | `context/local-code/Dirk-Bollen-design-system/files/website/design-canvas.jsx` | Workspace/artboard canvas component with sidebar, artboards, post-it notes |
| Font files | `fonts/Montserrat-VariableFont_wght.ttf`, `fonts/Montserrat-Italic-VariableFont_wght.ttf` | Locally hosted Montserrat variable font (100–900 upright + italic) |
| Brand assets | `assets/logo-*.png|svg` | Color logo, line logos (dark/white), B icon (filled/outline), wordmark glyphs |

**Intake method:** `od tools connectors local-design-context --path '/Users/dirkbollen/claudeai/claude/Dirk Bollen design system'`

**Design canvas note:** The source folder includes `website/design-canvas.jsx` — a Figma-like interactive design canvas component with sections (rail), artboards (canvas area), and post-it comments. This component informs the workspace UI kit role components in `ui_kits/app/components/` (AssistantsList as section rail, ChatArea as canvas/artboard area, MessageBubble as post-it notes, InputBar as label/note editor).

---

## 1. Visual Theme & Atmosphere

**Character:** Sharp, diagrammatic, vector-flat. The system reflects a strategist's toolkit — high-contrast, honest, instantly readable at the back of a conference room. No decorative gradients, no soft pastels, no illustrative flourishes that aren't directly communicating meaning.

**Mood:** Confident without being corporate. The geometric **B** logo and the four-hue palette communicate precision and warmth simultaneously. Work should feel like a well-prepared consultant deck: every element earns its place.

**Diagram language:** Dirk's signature visualisation style uses:
- **Ellipses** for people, states of being, and entities
- **Dashed lines** for lines of visibility and ambiguity
- **Solid arrows** for observed flows and handoffs
- **Colour semantics:** Pink = future/signal, Cyan = today/present, Purple = AI/synthesis, Yellow = spark/accent

This diagrammatic vocabulary should appear in any data-viz, slide, or process illustration produced with this system.

---

## 2. Color

### Brand Palette (source: Figma /DesignSystem/Colors)

| Token | Hex | RGB | Role |
|---|---|---|---|
| `--db-yellow` | `#FDC40D` | 253, 196, 13 | Spark / accent highlight |
| `--db-cyan` | `#45C4D9` | 69, 196, 217 | "Today" / present state |
| `--db-cyan-soft` | `#6ECBD5` | 110, 203, 213 | Tinted backgrounds, fills |
| `--db-purple` | `#7460AB` | 116, 96, 171 | AI / synthesis / depth |
| `--db-pink` | `#EE4280` | 238, 66, 128 | Future / signal / CTAs |
| `--db-ink` | `#211B43` | 33, 27, 67 | Primary text, logo fill |
| `--db-ink-alt` | `#2F2E41` | 47, 46, 65 | Secondary ink |
| `--db-navy-deep` | `#001D42` | 0, 29, 66 | Data viz / dark blocks |

### Neutrals

| Token | Hex | Role |
|---|---|---|
| `--db-white` | `#FFFFFF` | Base background |
| `--db-gray-50` | `#F2F2F2` | Subtle fills, input chrome |
| `--db-gray-100` | `#E6E6E6` | Dividers, soft borders |
| `--db-gray-200` | `#DADADA` | Canvas background |
| `--db-gray-300` | `#B9B9B9` | Disabled, secondary strokes |
| `--db-gray-500` | `#747070` | Muted text, dashed guide lines |
| `--db-gray-700` | `#666666` | Body-secondary |
| `--db-gray-900` | `#333333` | Dark secondary text |

### Semantic Aliases

```css
--fg:           var(--db-ink)
--fg-muted:     var(--db-gray-500)
--fg-inverse:   var(--db-white)
--bg:           var(--db-white)
--bg-muted:     var(--db-gray-50)
--bg-dark:      var(--db-ink)
--accent:       var(--db-pink)        /* signal / future / CTAs */
--accent-alt:   var(--db-cyan)        /* supportive / present */
--accent-warm:  var(--db-yellow)      /* highlight / spark */
--accent-deep:  var(--db-purple)      /* AI / synthesis */
--border:       var(--db-gray-100)
--border-strong: var(--db-ink)
--dash:         var(--db-gray-500)    /* dashed guide lines */
```

### Color Usage Rules
- Pink (`--db-pink`) is the primary CTA and signal color — used for interactive elements, key labels, future-state markers
- Cyan (`--db-cyan`) is supportive: diagrams showing "now", secondary actions, hover fills
- Purple (`--db-purple`) appears when AI, synthesis, or transformation concepts are present
- Yellow (`--db-yellow`) is a sparing spark: single highlight per composition, never as background fill
- All four hues appear together only in the logo or in a 4-quadrant diagram; in UI, limit to 2 per surface
- Body text is always `--db-ink` (#211B43) or `--db-ink-alt` on white, or white on dark backgrounds

---

## 3. Typography

### Font Families

| Role | Family | Fallback | Source |
|---|---|---|---|
| Display / headlines | Montserrat | Helvetica Neue, Arial, sans-serif | Local TTF variable font |
| Body / UI copy | Poppins | Helvetica Neue, Arial, sans-serif | Google Fonts |
| Data / micro UI | Inter | Helvetica Neue, Arial, sans-serif | Google Fonts |
| Quotes / editorial | Georgia | Times New Roman, serif | System |

**Montserrat** is locally hosted as a variable font (wght 100–900 upright + italic). No Google Fonts dependency needed for headlines. `colors_and_type.css` binds these with `@font-face`.

**Poppins** is a humanist geometric — approachable, warm, legible at 15–20px. Commercial substitute for Silka (proprietary, Atipo Foundry) when Silka license is unavailable.

**Inter** handles data-dense UI: captions, metadata, table cells, labels.

### Type Scale

| Token | px | Use |
|---|---|---|
| `--t-display` | 96px | Slide hero title |
| `--t-h1` | 64px | Page/slide title |
| `--t-h2` | 40px | Section header |
| `--t-h3` | 32px | Sub-section |
| `--t-h4` | 24px | Card title / lead label |
| `--t-body-lg` | 20px | Lead paragraph |
| `--t-body` | 18px | Default body |
| `--t-body-sm` | 16px | Secondary body |
| `--t-caption` | 14px | Captions, labels |
| `--t-micro` | 12px | Metadata, tags, chips |

### Line Heights
- `--lh-tight: 1.05` — display/hero headings
- `--lh-snug: 1.2` — sub-headings, quotes
- `--lh-normal: 1.4` — compact UI
- `--lh-relaxed: 1.55` — body copy

### Tracking
- `--tr-tight: -0.02em` — display and h1–h3
- `--tr-normal: 0` — default
- `--tr-wide: 0.04em` — small labels
- `--tr-caps: 0.12em` — all-caps eyebrow text

### Heading Weights
- Display / H1: 800 (ExtraBold)
- H2 / H3: 700 (Bold)
- H4 / H5: 600 (SemiBold)

### Special Classes
- `.display` — 96px, weight 800, Montserrat, tight tracking
- `.eyebrow` — 14px, Inter, weight 600, ALL CAPS, `--tr-caps`, `--accent` color
- `.micro` — 12px, Inter, weight 600, ALL CAPS, wide tracking, muted
- `.lead` — 20px, Poppins, relaxed line-height
- `.caption` — 14px, Inter, muted

---

## 4. Spacing

### Scale (4px base)

| Token | Value |
|---|---|
| `--s-1` | 4px |
| `--s-2` | 8px |
| `--s-3` | 12px |
| `--s-4` | 16px |
| `--s-5` | 24px |
| `--s-6` | 32px |
| `--s-7` | 48px |
| `--s-8` | 64px |
| `--s-9` | 96px |
| `--s-10` | 128px |

### Radii

The system leans **flat**. Prefer 0 for blocks/sections, small for cards, pill for tags.

| Token | Value | Use |
|---|---|---|
| `--r-0` | 0px | Blocks, diagram shapes, hero sections |
| `--r-sm` | 4px | Subtle card lift, inputs |
| `--r-md` | 10px | Soft cards, modals |
| `--r-lg` | 20px | Feature panels |
| `--r-pill` | 999px | Tags, chips, CTAs |
| `--r-full` | 50% | Avatars, dot indicators |

### Borders

Signature: **strong, explicit borders** at 3px. Dashes at 3px mid-gray.

| Token | Value |
|---|---|
| `--bw-hair` | 1px |
| `--bw-1` | 2px |
| `--bw-2` | 3px (primary) |
| `--bw-3` | 4px |
| `--bw-4` | 5px |
| `--bs-solid` | solid |
| `--bs-dashed` | dashed |

**Rules:** Use `3px solid var(--border-strong)` for diagram outlines. Use `3px dashed var(--dash)` for guide lines, uncertainty zones, and "lines of visibility" in service blueprints.

### Shadows

Restrained — the brand is vector-flat. Shadows only to lift cards off canvas.

| Token | Value |
|---|---|
| `--sh-0` | none |
| `--sh-1` | 0 1px 2px rgba(0,0,0,0.06) |
| `--sh-2` | 0 2px 8px rgba(0,0,0,0.08) |
| `--sh-3` | 0 8px 24px rgba(0,0,0,0.10) |

---

## 5. Layout & Composition

### Grid

- **Max content width:** 1200px (`--content-w`)
- **Slide canvas:** 1920×1080px (fixed, scale-to-fit)
- **Section padding:** `--s-9` (96px) vertical, `--s-7` (48px) horizontal minimum
- **Column rhythm:** 12-column for web; 3-column or 4-column for slides

### Page Structure (Personal Site)

1. **Nav** — sticky, logo left, links right, transparent-to-frosted on scroll
2. **Hero** — full-width, dark (`--bg-dark`) or white, display headline + lead + CTA pair
3. **Services / Expertise** — grid of service cards with colour dot indicators
4. **Process / Diagram** — full-bleed illustration section using brand hues
5. **Case studies / Work** — card grid or horizontal scroll
6. **Contact / CTA** — dark band, centered, email + social links
7. **Footer** — minimal, `--db-gray-50` background

### Information Density

- **Slides:** One idea per slide. Display text ≥ 36px. Body ≥ 22px on 1920-wide canvas.
- **Web body:** 68ch max-width for paragraphs. Generous whitespace (min 96px between sections).
- **Diagrams:** Labels in `--t-caption` Inter. Entity ellipses minimum 80×40px. Arrow labels positioned above or below, not on the line.

### Responsive Behaviour

- **Mobile (< 640px):** Single column, nav collapses to hamburger, sections stack
- **Tablet (640–1024px):** Two-column grids, reduced padding
- **Desktop (1024px+):** Full grid, sticky sidebar when used for articles

---

## 6. Components

### Buttons

```css
.btn { padding: 14px 22px; font-family: var(--font-ui); font-weight: 600; font-size: 15px;
       letter-spacing: 0.02em; border-radius: var(--r-pill); border: 0;
       transition: transform 150ms, background 150ms; }
.btn:hover { transform: translateY(-1px); }
.btn-primary   { background: var(--db-ink); color: #fff; }
.btn-pink      { background: var(--db-pink); color: #fff; }
.btn-ghost     { background: transparent; color: var(--db-ink); border: 1.5px solid var(--db-ink); }
.btn-ghost-white { background: transparent; color: #fff; border: 1.5px solid rgba(255,255,255,0.35); }
```

### Forms

```css
.field { display: flex; flex-direction: column; gap: 6px; }
.field label { font-family: var(--font-ui); font-weight: 600; font-size: 12px;
               letter-spacing: 0.08em; text-transform: uppercase; color: var(--db-gray-500); }
.field input, .field textarea { font-family: var(--font-body); font-size: 16px;
  padding: 12px 14px; border: 1.5px solid var(--db-gray-100); background: #fff;
  color: var(--db-ink); border-radius: 8px; outline: none; transition: border-color 150ms; }
.field input:focus, .field textarea:focus { border-color: var(--db-ink); }
```

**Dark variant** (`.field-dark`): bg `rgba(255,255,255,0.04)`, border `rgba(255,255,255,0.15)`, focus border `var(--db-cyan)`.

### Service Cards

```css
.svc { display: flex; flex-direction: column; gap: 12px; }
.svc .dot { width: 14px; height: 14px; border-radius: 50%; }
.svc h3 { font-size: 22px; font-weight: 700; }
.svc p { font-size: 15px; color: var(--db-gray-500); max-width: 38ch; }
```

Each service card carries a dot in one of the four brand hues to signal the practice area.

### Diagram Primitives

Intended for SVG or CSS-built diagrams inside slides or illustrations:

| Shape | Meaning | Stroke |
|---|---|---|
| Ellipse | Person / state / entity | 3px solid `--db-ink` |
| Rounded rect | System / tool / channel | 3px solid `--db-ink` |
| Dashed ellipse | Uncertain / aspirational state | 3px dashed `--db-gray-500` |
| Solid arrow | Observed flow / handoff | 2px solid `--db-ink` |
| Dashed arrow | Line of visibility / assumption | 2px dashed `--db-gray-500` |
| Filled dot | Moment / event | `--db-pink` or `--db-yellow` fill |

### Navigation

```
Logo (left) | Nav links (right, Poppins 15px, weight 500) | CTA button (pill, ink background)
```

Sticky. Backdrop-filter: blur(12px) + white at 90% opacity on scroll. Mobile: logo + hamburger, slide-down menu.

### Quote / Blockquote

```css
blockquote { font-family: var(--font-display); font-weight: 500; font-size: var(--t-h3);
             line-height: var(--lh-snug); padding-left: var(--s-5);
             border-left: 3px solid var(--accent); color: var(--fg); }
```

---

## 7. Motion & Interaction

### Easing & Duration

| Token | Value | Use |
|---|---|---|
| `--ease-out` | cubic-bezier(0.22, 1, 0.36, 1) | Entrances, hover lifts |
| `--ease-in-out` | cubic-bezier(0.65, 0, 0.35, 1) | Transitions between states |
| `--dur-fast` | 120ms | Micro interactions (border color, opacity) |
| `--dur-med` | 220ms | Component state changes (hover lift, focus) |
| `--dur-slow` | 420ms | Page-level transitions, slide changes |

### Hover States
- Buttons: `translateY(-1px)`, no shadow added
- Cards: `translateY(-2px)` + `--sh-2`
- Links: border-bottom from transparent to `--accent`

### Focus States
- Inputs: `border-color: var(--db-ink)` (light) or `var(--db-cyan)` (dark)
- Buttons/interactive: `outline: 2px solid var(--db-cyan); outline-offset: 2px`

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
  }
}
```

### Diagram Animations (Slides only)
- Entry: fade-in + slight translate-up (220ms, ease-out), staggered 80ms per element
- Line draws: stroke-dashoffset animation, 420ms
- No looping animations; all motion stops after entry

---

## 8. Voice & Brand

### Copy Style
- **Direct and strategist-like.** No fluff. Every sentence either names a problem, presents a solution, or names a client outcome.
- **First person but not self-aggrandizing.** "I help clients…" not "I am a leading expert in…"
- **Concrete over abstract.** Name clients (Proximus, KBC, Itsme, InThePocket, Evonik). Name methodologies (service blueprinting, journey mapping, design thinking facilitation).
- **Belgian precision.** Clear structure. Numbered steps. Named deliverables. No buzzword stacking.

### Capitalization
- **Section headings:** Title Case
- **Eyebrow labels:** ALL CAPS with tracked spacing
- **Body copy:** Sentence case
- **CTA buttons:** Title Case

### Tone Modifiers
- Strategy work: confident, precise, outcome-focused
- AI-related content: considered, evidence-based, non-hype
- Workshop / teaching content: inviting, structured, action-oriented

### Key Terms
- "digital strategist" (lowercase, not "Digital Strategist" mid-sentence)
- "service designer" / "service design" (preferred over "UX design" in most contexts)
- "human-digital approach" (Dirk's own framing — use as-is)
- "pragmatic design thinking" (preferred over "design sprint" or "design thinking" alone)
- PhD in Human-Computer Interaction — include in bios, abbreviate to "PhD (HCI)" in tighter contexts

---

## 9. Anti-patterns

### Visual Anti-patterns
- ❌ Warm beige / cream / peach canvas backgrounds — this is a high-contrast strategic brand
- ❌ Soft drop shadows on every card — vector-flat, shadows only for elevation context
- ❌ Gradient fills on section backgrounds — solid ink or solid hue only
- ❌ Emoji icons in headings or feature grids — use the geometric brand shapes instead
- ❌ Rounded cards with a left coloured accent border — this is a UI-kit trope; use the diagram vocabulary
- ❌ Hero images with overlaid semi-transparent gradient overlays
- ❌ Multiple competing accent colours on a single surface (max 2 brand hues per screen)
- ❌ All four brand hues used decoratively — they are semantic, not decorative

### Typography Anti-patterns
- ❌ Inter or Roboto as a display face — Inter is data/micro only
- ❌ Body text below 16px on web, below 22px on slides
- ❌ Montserrat Regular (weight 400) for body text — use Poppins for body
- ❌ Mixing Montserrat display with Montserrat body (same-family pairing)
- ❌ All-caps body paragraphs — reserve ALL CAPS for `.eyebrow` and `.micro` classes

### Layout Anti-patterns
- ❌ Full-width text blocks without a max-width constraint (use 68ch for paragraphs)
- ❌ Card grids with more than 3 columns on mobile
- ❌ Slides with more than one main idea
- ❌ Invented metrics or statistics ("10× more efficient") without a source
- ❌ Filler placeholder copy or lorem ipsum in any deliverable

### Diagram Anti-patterns
- ❌ Using arrows for both "flow" and "visibility" without the dashed/solid distinction
- ❌ Colour used decoratively in diagrams — every hue must follow the Pink/Cyan/Purple/Yellow semantics
- ❌ Text inside diagram shapes smaller than 11px
- ❌ Crowding diagrams — white space is the diagram working; give entities room to breathe
