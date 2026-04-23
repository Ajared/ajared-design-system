# Family Tree App UI kit (mobile)

Click-thru mobile recreation of key Family Tree screens, built from Figma `/High-Fidelity-Designs-Family-Tree-App`.

## Files
- `index.html` — mounts the kit inside an `<Ios>` frame. Splash → Login → Tree → Invites → Account navigation.
- `Phone.jsx` — mobile bezel wrapper (402×874 design size) with status bar + home indicator.
- `Splash.jsx` — terracotta splash with wordmark.
- `Login.jsx` — "Welcome Back" + phone-number entry + social login.
- `Tree.jsx` — empty-tree view with the signature outlined cream avatar.
- `Invites.jsx` — pending-invite list with tier badges.
- `Account.jsx` — profile + settings.
- `BottomNav.jsx` — tab bar (Home · Tree · Invites · Account).
- `ui.jsx` — primitive components (FilledButton, OutlinedButton, Input, Avatar).

## Faithfulness
Rebuilt from Figma pseudocode. Typography pair is **iA Writer Quattro S Bold** (headings) + **Inter** (body, UI chrome). Exact palette from Figma: splash `#A1665E`, avatar cream `#F7EBC6` with 2–3px black outline, tree background `#F7F8F7`, FAB `#363020`. Icons use Material Symbols Outlined (CDN).
