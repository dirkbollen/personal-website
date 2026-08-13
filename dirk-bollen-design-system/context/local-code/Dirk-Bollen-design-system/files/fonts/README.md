# Fonts

**Substitutions flagged.** The Figma file uses:

- **Montserrat** (Bold/SemiBold) for display/titles — **loads locally** from `fonts/Montserrat-VariableFont_wght.ttf` (upright, wght 100–900) and `fonts/Montserrat-Italic-VariableFont_wght.ttf` (italic, wght 100–900). No Google Fonts dependency.
- **Poppins** (Regular/SemiBold) for body — available on Google Fonts, used as-is.
- **Inter** (Regular/Medium/Bold/ExtraBold) for UI/data — available on Google Fonts, used as-is.
- **Silka** (Regular/SemiBold/Bold/Medium) — ~3k instances in the source file. **Silka is a commercial typeface (Atipo Foundry). Not currently licensed in this design system.** Substituted with **Poppins** as the nearest humanist-geometric match. If you own a Silka license, drop `.woff2` files here and swap `--font-body` in `colors_and_type.css`.
- **Evonik Prokyon** / **Evonik Antares** — used for specific Evonik-branded project work (930+ instances, client-side). **Proprietary, substituted with Inter** for any Evonik-style UI, Poppins otherwise.
- **League Gothic** — used occasionally for oversized display numerals. Available on Google Fonts if you want to load it for slide dramatics.
- **Helvetica / Arial / Georgia / Roboto** — system-safe, left as-is.

The CSS loads Montserrat, Poppins, and Inter from Google Fonts. That's enough for ~95% of the work. Add local `.woff2` files here if you want to go offline or license Silka properly.
