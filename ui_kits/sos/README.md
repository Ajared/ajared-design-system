# Sense of Self — app UI kit (mobile)

A mobile identity/reflection companion app by Ajared. Same brand spine as Family Tree but the **quieter sibling** — more paper, less chrome, longer prose. The Super-Simple-Brand-Guide positions ajaRed as _Elite-leaning · Mature & Classic · Modern + expressive_; Sense of Self is where that shows up most.

## Files
- `index.html` — mounts the kit. Onboarding → Today → Reflect → Prompts → Library → Profile.
- `ui.jsx` — shared primitives (Button, Input, Chip, Card). Reuses the Phone bezel from `../app/Phone.jsx`.
- `Onboarding.jsx` — 3-slide intro (Notice · Name · Know).
- `Today.jsx` — home: greeting, streak ruler, daily prompt card, mood ribbon.
- `Reflect.jsx` — long-form writing surface with live word count + mood tag.
- `Prompts.jsx` — browsable prompt library grouped by theme.
- `Library.jsx` — your reflections indexed by date, with mood dot markers.
- `Profile.jsx` — identity snapshot: values, traits, "what you keep coming back to".
- `BottomNav.jsx` — 4 tabs (Today · Reflect · Library · You).

## Design delta vs Family Tree

- **Background** is `#FDFCF7` (warm paper) instead of `#F7F8F7` — editorial.
- **Accent** is the **teal** `#058c8c` instead of terracotta; terracotta is reserved for streak / heat markers only.
- **Composition** is column-of-prose rather than card grid.
- **Ruler marginalia** from the marketing site is pulled in for the Library index — the signature crossover.
