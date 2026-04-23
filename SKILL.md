---
name: ajared-design
description: Use this skill to generate well-branded interfaces and assets for Ajared Research Inc. (ajaRed), either for production or throwaway prototypes/mocks/decks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping — marketing ("field manual" editorial site) and mobile app (Family Tree / Sense of Self) surfaces.
user-invocable: true
---

# ajaRed Design Skill

Read `README.md` in the root of this skill for the brand context, content fundamentals, visual foundations, and iconography rules. Then explore the other available files.

## Files you'll find

- `README.md` — brand context, voice & tone, visual foundations, iconography.
- `colors_and_type.css` — all color and type CSS variables. Import this in any artifact you create.
- `fonts/` — shipped webfonts (iA Writer Quattro S + iA Writer Mono S). `@font-face` is declared in `colors_and_type.css`.
- `assets/` — logo, favicon, social cards. Copy these out when needed.
- `preview/` — individual swatch / specimen / component HTML cards. Handy references.
- `packages/core/tokens.css` + `packages/core/tokens.json` — raw token dump from `@ajared/design-system`.
- `button.css`, `input.css`, `badge.css`, `alert.css`, `card.css`, `modal.css`, `spinner.css`, `typography.css` — production CSS from the `Ajared/design-system` repo (`ajr-*` classes).
- `ui_kits/website/` — editorial marketing-site kit (React/JSX + `site.css`). Use for marketing surfaces, landing pages, capability pages, contact blocks.
- `ui_kits/app/` — mobile app kit (React/JSX + `app.css`). Use for Family Tree / Sense of Self style mobile flows.

## How to use

- **Visual artifacts (slides, mocks, throwaway prototypes, etc.)** — copy assets into your project and create static HTML. Import `colors_and_type.css` for tokens. For the marketing voice, lean on `ui_kits/website/`. For app mocks, lean on `ui_kits/app/` and use **Inter + iA Writer Quattro S** together (Inter for UI chrome, Quattro for titles).
- **Production code** — reference the `ajr-*` CSS directly from `packages/components/src/*` in the `Ajared/design-system` repo, plus `packages/core/tokens.css`. The design system ships as vanilla CSS; bring its classes into React/HTML as-is.

## Pairing rules (don't break these)

- Teal `#058c8c` is the brand. Terracotta `#a1665e` is the heat — one per spread.
- No gradients, no emoji, no drop-shadow pill buttons on marketing. Squared-off 2px radii on marketing, rounded 8–16px + pill on app.
- Use coordinates in metadata (`Toronto 43.6332° N, 79.4141° W`).
- Display type is **iA Writer Quattro S Bold** with `letter-spacing: -0.04em` and `line-height: 0.9` on hero sizes.
- Icons: Material Symbols Outlined for app, the CSS `.arrow` primitive + Unicode glyphs for marketing. Never emoji.

## When invoked without other guidance

Ask the user what they want to build or design, then ask some targeted follow-up questions (surface: marketing or app? audience? specific capability or screen?), then act as an expert designer who outputs HTML artifacts or production code depending on the need.
