# UI Kit — Dirk Bollen Personal Brand

Applied interface kit for the **Dirk Bollen Personal Brand Design System**.
Two product surfaces in one kit: a personal site and a design canvas workspace.
Both surfaces consume `colors_and_type.css` tokens and brand assets from `assets/`.

---

## Structure

```
ui_kits/app/
├── index.html                  ← Browser entry — loads React, token CSS, all components
├── README.md                   ← This file
└── components/
    │
    │  Personal site roles
    ├── Nav.jsx                  ← Sticky nav (transparent → frosted on scroll)
    ├── Hero.jsx                 ← Full-bleed dark hero, display headline, CTA pair
    ├── Services.jsx             ← 4-card practice area grid with brand hue dots
    ├── Clients.jsx              ← Pull quote + client name pill grid
    ├── ContactCTA.jsx           ← Dark CTA band, copyable email, social links
    │
    │  Design canvas workspace roles (from design-canvas.jsx source evidence)
    ├── AssistantsList.jsx       ← Section/artboard rail (left sidebar navigator)
    ├── ChatArea.jsx             ← Canvas/artboard area (warm grid bg + artboard cards)
    ├── MessageBubble.jsx        ← Post-it note component (4 semantic colour variants)
    ├── InputBar.jsx             ← Note type selector + text input + Post action
    │
    └── App.jsx                  ← Shell — tab bar switches between site and canvas modes
```

## Usage

Serve from the project root with any local server (e.g. `npx serve .`). Open `ui_kits/app/index.html`.

The file:
1. Loads `../../colors_and_type.css` — all design tokens and `@font-face` for Montserrat
2. Loads React 18.3.1, ReactDOM, and Babel standalone for browser-side JSX transpilation
3. Loads each role component as `<script type="text/babel" src="...">` — each exposes `window.ComponentName`
4. Mounts `<App />` via `ReactDOM.createRoot`

## Component Roles

### Personal site components

| File | Role | Key design tokens |
|---|---|---|
| `Nav.jsx` | Sticky navigation with scroll-aware frosted glass | `--db-ink`, `--db-pink`, `--font-body`, `--r-pill` |
| `Hero.jsx` | Full-bleed dark hero with geometric B background decoration | `--db-ink` bg, `--db-pink` accent, `--db-cyan` eyebrow |
| `Services.jsx` | Practice area card grid with hover lift | Brand hue dots, `--r-md`, `--sh-1/2` |
| `Clients.jsx` | Blockquote with pink left border + client pill grid | `blockquote` style, `--r-pill` chips |
| `ContactCTA.jsx` | Dark CTA section with clipboard-copy email action | `--db-pink` CTA, `--db-cyan` eyebrow |

### Design canvas workspace components

| File | Role | Source basis |
|---|---|---|
| `AssistantsList.jsx` | Left-side section rail — section list with dot indicators, active state, + New button | `DCSection` list in design-canvas.jsx |
| `ChatArea.jsx` | Main canvas area — warm grid background, artboard cards with drag grip + label row | `DCArtboard` + canvas bg from design-canvas.jsx |
| `MessageBubble.jsx` | Post-it note — 4 semantic colour variants (yellow/pink/cyan/purple), author, timestamp | `DCPostIt` from design-canvas.jsx |
| `InputBar.jsx` | Note input — note type selector (4 semantic types) + text input + Post button | `dc-editable` + label row from design-canvas.jsx |

## Design Notes

- **Brand palette:** All 4 hues (Pink/Cyan/Purple/Yellow) appear in both surfaces — Pink=future/signal, Cyan=today, Purple=AI/synthesis, Yellow=spark
- **Dark surfaces:** Hero, ContactCTA, and nav bar use `--db-ink` (#211B43)
- **Canvas background:** Warm `#f0eee9` with 24px CSS grid — matching the dc-bg from source design-canvas.jsx
- **Colour semantics in canvas:** Post-it colours follow the same Pink/Cyan/Purple/Yellow semantic rules as diagrams
- **Logo:** Real PNG assets from `assets/` — `logo-color.png` (light), `logo-line-white.png` (dark)
- **Font:** Montserrat loaded via `colors_and_type.css` @font-face from `fonts/` directory

## Source Basis

- Local source folder: `/Users/dirkbollen/claudeai/claude/Dirk Bollen design system`
- Token CSS: `context/local-code/Dirk-Bollen-design-system/files/colors_and_type.css`
- Site CSS: `context/local-code/Dirk-Bollen-design-system/files/website/site.css`
- Design canvas source: `source_examples/website/design-canvas.jsx`
