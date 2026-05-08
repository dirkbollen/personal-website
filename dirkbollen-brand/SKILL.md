---
name: dirkbollen-brand
description: Dirk Bollen's personal brand guideline and design system. Use this skill any time the user asks to design, build, or write under the Dirk Bollen brand — personal website, slide deck, application UI, prototype, document, or client-facing artefact. Provides colours, typography, spacing, radii, shadows, motion, components, voice rules, and ready-to-paste examples. Trigger on any mention of Dirk Bollen branding, "my brand", "personal site", "slide deck", or when working inside a project that imports `tokens.css` or references `--db-*` variables.
user-invocable: true
---

# Dirk Bollen brand skill

Read `BRAND.md` for the full guideline. Load `tokens.css` once per page or project. Reference design tokens (`--db-*`, `var(--accent)`, etc.) instead of raw hex values.

## When invoked

1. Read `BRAND.md` first. It contains the brand essence, voice rules, colour and type tokens, layout rules, component patterns, and surface playbooks.
2. If building a slide, web section, or component, look at the matching file in `examples/` and copy the pattern.
3. If the user invokes this skill without a specific brief, ask: what surface (slide deck / website / app / document), what audience, what tone, and how many artefacts. Then act as an expert designer working in this brand.

## File index

| File             | What it is                                                              |
|------------------|-------------------------------------------------------------------------|
| `BRAND.md`       | Single canonical brand guideline + design system reference.            |
| `tokens.css`     | All design tokens as CSS custom properties + base styles.              |
| `tokens.json`    | JSON mirror of the tokens for JS, JSX, Tailwind config, design tooling. |
| `assets/`        | Logo SVGs (icon colour, icon mono, icon outline, wordmark).            |
| `examples/`      | Pasteable starter files: a slide, a web section, a React component.    |

## Design rules in one breath

- Sharp, vector-flat, diagrammatic. No gradients, no shadows beyond `--sh-2`, no emoji.
- Two signature hues per surface (cyan + pink, purple + yellow, cyan + purple). Pink for future / CTA, cyan for today, purple for AI, yellow for spark.
- Montserrat for headlines, Poppins for body, Inter for UI / data.
- 8px grid. Sentence case. Generous whitespace. Strong sharp borders carry meaning.
- Voice: first-person, plain, pragmatic. No marketing-speak, no hype.

## Output format

When producing a deliverable, default to a single self-contained HTML file that imports `tokens.css`. For React components, use a single `.jsx` file that consumes tokens via CSS variables. For documents and slides, treat 1920×1080 as the canonical canvas.
