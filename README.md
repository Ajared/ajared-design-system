# ajaRed Design System

The visual, verbal, and component system for **Ajared Research Inc.** — an AI research and product studio based in Toronto (and Abuja) helping enterprises move from AI proof-of-concept to production-ready solutions.

> Tagline: **Applied AI for Enterprises.**
> Mission: help enterprises move from AI proof-of-concept to production-ready solutions.
> Primary site: [ajared.ca](https://ajared.ca) · Also: ajared.ng · innovation@ajared.ca

---

## Index

| File / folder            | What it is                                                                 |
|--------------------------|----------------------------------------------------------------------------|
| `README.md`              | This file — brand context, content & visual foundations, iconography       |
| `SKILL.md`               | Agent Skill entrypoint (cross-compatible with Claude Code)                 |
| `colors_and_type.css`    | All color, font and type CSS variables (base + semantic)                   |
| `tokens.css`             | Imported from the design-system repo — full token dump                     |
| `tokens.json`            | Same tokens in JSON (for Tailwind/Style Dictionary)                        |
| `fonts/`                 | Webfont files — iA Writer Quattro S (primary) + iA Writer Mono S           |
| `assets/`                | Brand assets — logo, favicon, social card                                  |
| `*-css` (button, input, card, alert, badge, modal, spinner, typography) | Raw production CSS imported from `Ajared/design-system` |
| `preview/`               | Individual swatch / specimen / component HTML cards for review             |
| `ui_kits/website/`       | Marketing site UI kit — recreates ajared.ca in React                       |
| `ui_kits/app/`           | Web app UI kit — Family Tree / Sense of Self mobile shell                  |

## Source material

| Source | Where |
|---|---|
| **Figma file** (attached) | Pages: `/Style-Guide`, `/Super-Simple-Brand-Guide`, `/Wireframes-Family-Tree-App`, `/High-Fidelity-Designs-Family-Tree-App`, `/Wireframe-Sense-of-Self`, `/High-Fidelity-Sense-of-Self`, `/Mapping-Mammy-Market`. Figma link: https://www.figma.com/design/cgfMHbfTwYT3GYqhTXQXPe/ajaRed |
| **Design system repo** | `github.com/Ajared/design-system` — vanilla HTML/CSS/JS components, with `packages/core/tokens.css` + component `.css` files. Prefix on all classes is `ajr-`. |
| **Marketing site** | `github.com/Ajared/website` — XML + XSLT 1.0 pipeline → static HTML on GitHub Pages. Domain: `ajared.ca`. |
| **Uploads**       | Brand logo (`ajaredlogotransparent.png`), site icon, social card, iA Writer **Mono** S font (the Quattro family was pulled from the website repo). |

---

## Products represented

1. **Marketing site — `ajared.ca`**
   An XML/XSLT hand-built site with a strong editorial "instrument panel" aesthetic: teal hairline grid with ruler ticks on the edges, oversized Swiss-modernist headlines, terracotta used only as the accent heat. Canvas moiré effects in the hero. Four Offer cards (Advisory / Build / Learn / AI Search). Content is deeply typographic — prose paragraphs, numbered prose lists, deliverable rows.

2. **Family Tree App (mobile web app)**
   A personal / cultural genealogy product. Lots of invites, member profiles, tree visualisations. Designed in iOS-like mobile frames with Inter for UI chrome, teal + terracotta still the brand. See Figma `/High-Fidelity-Designs-Family-Tree-App`.

3. **Sense of Self (mobile web app)**
   An identity / reflection companion app. Similar mobile language to Family Tree. See Figma `/High-Fidelity-Sense-of-Self`.

4. **Mapping Mammy Market** (research artifact, not a shipped product surface)

> The design **style guide** in Figma was authored primarily around the marketing site and the mobile apps. The `@ajared/design-system` NPM package is the component/token layer that underpins both.

---

## CONTENT FUNDAMENTALS

Ajared's voice is **direct, editorial, quietly confident, engineering-literate**. It sounds like someone who has shipped enterprise software and is tired of hype — but still curious. It is *never* salesy.

### Voice & tone

- **First person plural ("we"), second person ("you").** Never "our team", "your business", or brochure-speak. We / you. "We figure out what's actually going on before anyone starts building."
- **Short declaratives. Then one longer sentence that does the work.** E.g. *"Most assumptions are wrong. We design lean experiments that expose which ones to kill early and which ones to build around."*
- **Editorial, not marketing.** "Early failure is cheap. Late failure is not." "Not a chatbot or a vendor pitch. A 30-minute conversation with an AI practitioner."
- **British-leaning spelling** ("organisation", "behavioural") — the founder is Toronto/Abuja based.
- **Em dashes and italics for emphasis** — "When you start *really* using AI today…"
- **Numbered headings** ("01 / 02 / 03") — the whole site treats capabilities and offers as a catalog: `001 Applied Research`, `002 AI Product Development`, `003 Enterprise AI Agents`, `004 Data & AI Strategy`.

### Casing

- **Headlines**: sentence case. ("Get AI working for you today.", "Ready to find out what's true?")
- **Labels / metadata tags**: ALL CAPS, wide tracking, monospaced. ("INFORMATION ARCHITECTURE", "COORDINATES", "STATUS", "ADVISORY", "BUILD")
- **Numbering**: zero-padded (`01`, `001`). Always.
- **Buttons**: UPPERCASE on marketing surfaces ("ASSESS YOUR AI READINESS →"); sentence case inside the app.

### Emoji & ornamentation

- **No emoji** anywhere on the marketing site or app UI. None.
- Exception: checkboxes use `✓`, disclosures use `+` / `×`, arrows use `→` `↗` `›`. These are Unicode, not emoji.
- Status dots: a tiny filled circle (●, terracotta) with a phrase. Not an emoji, not a colored pill.

### Copy examples (lift these directly)

> "Get AI working for you today."  — hero headline
> "We go past proofs of concepts to AI products that actually work for you."  — sub
> "Not a chatbot or a vendor pitch."  — offer description
> "A focused, time-boxed build. We scope it, ship it, and hand it over in four weeks."
> "Early failure is cheap. Late failure is not."
> "Ready to find out what's true?"  — capability-page CTA

### Product-copy rules

- Every capability has **an `alternateName` in human voice**, e.g. Applied Research → "How We Learn What's True". Use these sub-titles anywhere the capability is featured.
- Treat deliverables as a **ticklist with honest optional rows** (`✓ Research brief`, `✓ Findings report`, *optional: Ongoing retainer*).
- Coordinates are part of the voice: `Toronto 43.6332° N, 79.4141° W` / `Abuja 8.9976° N, 7.4674° E` appear in the header. When in doubt, add coordinates.

---

## VISUAL FOUNDATIONS

> If the ajaRed brand were a physical object, it would be a **well-printed field manual** — off-white stock, hairline teal rules, monospaced coordinates in the margins, a single terracotta accent per spread.

### Colors

- **Primary — Teal `#058c8c`.** This is the brand. Hairline grid lines, labels, links, section headers, buttons. Used at 100%; light tints only for shadows and soft backgrounds.
- **Accent — Terracotta `#a1665e`.** The *heat*. Used sparingly: one word in a headline, button borders, arrow indicators, status dots, hover state for nav. If a page has two terracotta elements, remove one.
- **Ink (darkest teal) `#023b3b`.** Used for headlines and body where you want gravity over brand.
- **Near-black `#141414`** and **neutral-800 `#323232`** are the app's body-text colors. Pure `#000` is avoided.
- **Backgrounds** are overwhelmingly `#fff` with occasional `#f7f8f7` / `#f6f6f6` for subtle panels. Darkest-teal `#023b3b` is used for CTA blocks and capability hero strips.
- **Semantic colors** are muted and print-like — success green `#61b258`, warning gold `#d6b739`, error brick-red `#8c1305`.

### Type

- **iA Writer Quattro S** (Bold 700 & Regular 400, with Italics) is the *only* marketing-site family. Both display and body. Expect bold 700 with `letter-spacing: -0.04em` and `line-height: 0.9` on display sizes.
- **iA Writer Mono S** (or Quattro at reduced size) for labels, metadata, ruler ticks, `font-mono`.
- **Inter** is the secondary family inside the mobile apps (Family Tree, Sense of Self) where density is higher.
- **Scale:** 8 / 12 / 16 / 18 / 20 / 24 / 32 / 36 / 48 / 64 px. Hero can go to `clamp(4rem, 10vw, 9rem)` — i.e. ~144px.

### Spacing & layout

- **8-point grid.** Spacing tokens `4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96`.
- **Grid container on the marketing site:** fixed 80px ruler column on the left (20px minor, 100px major ticks), then a 3-col content grid inside `max-width: 1600px`. Hairline teal borders top & bottom of the content area are part of the brand.
- **Ruler marginalia.** Every marketing page shows a vertical ruler `0 / 100 / 200 / …` with terracotta on every 500px major tick. Keep it; it is the signature.

### Backgrounds

- **No gradients.** None on the marketing site. Never purple/blue. If a dark block is used (CTA, capability hero), it is **solid** `--color-ink-darkest` (`#023b3b`) with a **single terracotta stripe** (`border-top: 3px solid var(--color-terra)`).
- **Moiré / concentric rings.** Hero sections use a canvas-based moiré animation (see `scripts/moire.js` in the website repo) or static concentric rings. Opacity ~0.15–0.35.
- **Dot patterns.** The contact form's right panel uses a `radial-gradient` dot pattern in `--color-ink-light` at 40px cadence.
- **Full-bleed imagery** is rare and reserved for case studies. When used, it is warm, slightly desaturated, editorial.

### Borders & hairlines

- `--grid-line: 1px solid #058c8c;` — this is everywhere. Card borders, header cells, section dividers, stats bars, project rows. Never a gray border on a marketing surface.
- Footer uses `border-top: 2px solid #a1665e;` (terracotta).
- Cards in the design-system repo use neutral borders (`#d9d9d9`) inside *app* contexts (Family Tree, SoS), not marketing.

### Radii

- **Default = `--radius-sm` (2px).** Buttons, inputs, textareas, swatches. The brand is squared-off by default.
- Pills (`--radius-full`) appear on mobile app CTAs ("Pill" button variant in Figma's Button Components, used in Family Tree).
- Avatars are circles (`border-radius: 50%`).

### Shadows

- Most surfaces are **flat**. Shadow is editorial, not default.
- Swatches & hero elements in Figma use a single dramatic drop: `0 10px 50px 0 rgba(0,0,0,0.15)` (stored as `--shadow-swatch`).
- App cards use the token scale `--shadow-sm → --shadow-2xl`. Elevated/interactive cards use `--shadow-md` to `--shadow-lg`.
- Inside-inputs use `box-shadow: 0 1px 0 0 rgba(161,102,94,0.2)` on focus.

### Hover & press

- **Card hover** on the marketing site: the entire card flips to solid teal background with white text. Arrow slides right 10px. Fast (`0.3s ease`).
- **Button hover**: terracotta-bordered ghost button fills with terracotta, text goes to white.
- **Link hover**: color change to terracotta + underline.
- **Nav hover**: underline + terracotta color.
- **Press state**: no scale/shrink tricks — just color change. Keep it quiet.
- **Focus ring on inputs**: border-bottom flips from teal to terracotta + a faint terracotta glow.

### Motion

- **Tempo is calm.** `150ms / 250ms / 350ms` ease. No bounces. No overshoots. No springs.
- **Blinking status light** on contact form: `1s infinite opacity 1 → 0.3 → 1`.
- **Canvas moiré** ripples in hero sections, slow.
- **Accordion** on capabilities page: 0.5s max-height expand, 0.3s padding, fadeUp for children.
- **`cursor: crosshair`** is set on all interactive elements on the marketing site. It is part of the identity.

### Transparency & blur

- Very little. No backdrop-blur glassmorphism. A few rgba() tints for "inverted card" states (e.g. `rgba(255,255,255,0.3)` on a hovered byline border).

### Imagery style

- When photos appear, they are **warm, slightly desaturated, editorial**. Black-and-white is also on-brand (see `social-card-bw.png`).
- Avatars are real headshots in circles.
- No stock photography, no gradients over photos, no big feature illustrations. Iconography replaces most decoration.

### Cards

- **Marketing "offer" cards**: square (2px radius), `--grid-line` borders, 2rem padding, min-height ~200px, hover to solid teal.
- **App cards**: rounded (8–16px), neutral borders, subtle shadow.
- **`.ajr-card` utility** (from design-system repo): 16px radius, 1px `#e2e2e2` border, no shadow by default; variants `--flat`, `--elevated`, `--interactive`.

### Layout rules

- Footer: 2 cols (`h2 <a>innovation@ajared.ca</a>` left, company/year right), top border terracotta 2px.
- Sticky top ruler on marketing pages (`position: sticky; top: 0`).
- Max content width 1600px; gutters handled by the left ruler column.

---

## ICONOGRAPHY

Ajared has a **deliberately restrained, non-pictorial icon practice.** The identity leans on hairlines, ruler ticks, numbered lists, and a few geometric Unicode / SVG glyphs — not on a big icon library.

### What's actually used

| Surface | Icon approach |
|---|---|
| **Marketing site** (ajared.ca) | Almost no icons. An **SVG "arrow" primitive** (1px hairline + rotated corner for the head), status dots (● terracotta), disclosure `+` / `×`, chevron `›` `→` `↗`. |
| **Family Tree / Sense of Self (mobile apps)** | **Material Symbols Outlined** — e.g. `arrow_back_ios`, `keyboard_arrow_right`, `notifications_none`, `person`, `share`, `close`, `done`, `error_outline`, `warning_amber`, `check_box`, `radio_button_checked`, `search`, `filter_list`. Stroke style, 24px default. |
| **Social / special** | **Iconify packs**: `icon-park-outline:like`, `garden:arrow-retweet-stroke-12`, `ant-design:message-outlined`. |

### Rules

1. **No emoji.** Ever. Not on the site, not in the app, not in copy.
2. **Unicode arrows and checks only** for inline marks: `→ ↗ › ✓ × +`.
3. **Material Symbols Outlined** is the icon font inside the mobile apps. The Figma style guide has its own large `/Iconography` section (Action, Alert, AudioVideo, Communication, Content, Editor, Image, Maps, Navigation, Places, Social, etc.) mirroring Material's categories — treat this as the authoritative app icon set.
4. **Don't invent illustrations.** Figma has a `/Style-Guide/LOGO` frame and a few stamp icons; no illustrated scenes. Add real photography or leave the space quiet.
5. **Arrows over text.** When linking between pages, prefer the arrow primitive over the word "click".

### Where to get them

- **Material Symbols Outlined** — CDN: `https://fonts.googleapis.com/icon?family=Material+Symbols+Outlined`.
- **Iconify** — CDN: `https://api.iconify.design/` (usable both as `<svg>` fetch and via the Iconify web component).
- The house "arrow" is built purely in CSS (see `.arrow-icon` in the marketing-site `<style>` block in `site-renderer.xslt`); it's re-declared in `ui_kits/website/index.html`.

**Substitution flag:** The Figma file uses Material Symbols as rendered instances. We link **Material Symbols Outlined from Google Fonts** at runtime rather than shipping a static SVG sprite, since no local icon sprite exists in the repos. The Figma `/Style-Guide/Iconography` frame stores the designer's curated subset; treat it as the approved list.

---

## Font substitution notes

- **iA Writer Quattro S** — the primary family. Real webfonts were imported from `Ajared/website/fonts/`. **Present and working.**
- **iA Writer Mono S** — uploaded by the user. Used for mono tokens where a tighter mono is desired than Quattro can give. **Present.**
- **Inter** — referenced extensively in the Figma app designs but *not* shipped locally; we use Google Fonts at runtime in the app UI kit (`<link rel="preconnect">`). **Substitution: Google Fonts CDN — flagged.**
- **Acme** / **Metal** / **Josefin Sans** / **Roboto Bold** — appear in small counts in Figma (headers in Super-Simple-Brand-Guide) but are not part of the shipping brand system. Ignored.

> **Ask to the user:** confirm that Inter is acceptable via Google Fonts CDN for app surfaces, or provide the desired Inter files to ship locally.

---

## Known gaps / caveats (read me)

- The design-system repo component CSS (`button.css`, `input.css`, etc.) targets the **in-app** look (Inter, softer neutrals, 8px radii). The **marketing site** uses a tighter, more editorial look (iA Writer Quattro, 2px radii, teal hairlines). Both are valid — pick the right one for the surface.
- Figma pages for Family Tree and Sense of Self were *not* deeply mined here — the app UI kit is built from the style-guide frames plus representative patterns, not a pixel-perfect re-creation of every screen. If you need a specific screen re-built, point at the Figma frame and I'll do it.
- Icon set: linked from CDN (Material Symbols Outlined) rather than shipped as a local sprite.
