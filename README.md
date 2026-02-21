# ajaRed Design System

A comprehensive, production-ready design system built with vanilla HTML/CSS/JS. Includes design tokens, reusable components, and an interactive documentation site.

[![License](https://img.shields.io/badge/license-Proprietary-blue.svg)](LICENSE)
[![CSS](https://img.shields.io/badge/CSS-Vanilla-green.svg)](packages/components/dist/ajared.css)
[![Framework](https://img.shields.io/badge/framework-agnostic-orange.svg)](docs/)

## ✨ Features

- 🎨 **Comprehensive Design Tokens** - Colors, typography, spacing, shadows, and more
- 🧩 **8 Core Components** - Production-ready, accessible UI components
- ♿ **Accessibility First** - WCAG 2.1 AA compliant with keyboard navigation
- 📱 **Responsive Design** - Mobile-first approach for all screen sizes
- ⚡ **Zero Dependencies** - Pure vanilla JavaScript and CSS
- 🎯 **Framework Agnostic** - Works with React, Vue, Angular, or plain HTML
- 📚 **Interactive Docs** - Live component examples and code snippets

## 🚀 Quick Start

### Via CDN

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="https://unpkg.com/@ajared/design-system/dist/ajared.min.css">
</head>
<body>
    <h1 class="ajr-h1">Hello, ajaRed!</h1>
    <button class="ajr-button ajr-button--primary ajr-button--md">Get Started</button>
</body>
</html>
```

### Via npm

```bash
npm install @ajared/design-system
```

```javascript
// Import in your project
import '@ajared/design-system/dist/ajared.css';
```

## 📁 Project Structure

```
ajared-design-system/
├── packages/
│   ├── core/              # Design tokens
│   │   ├── tokens.css     # CSS Custom Properties
│   │   ├── tokens.json    # JSON format
│   │   └── tailwind.config.js
│   └── components/        # Component library
│       ├── src/           # Source files
│       ├── dist/          # Built CSS/JS bundles
│       └── build scripts
├── docs/                  # Documentation site
│   ├── index.html         # Landing page
│   ├── pages/             # Documentation pages
│   └── assets/            # Compiled assets
├── package.json           # Monorepo config
└── README.md
```

## 🧩 Components

All components use the `ajr-` prefix and are fully customizable via design tokens:

| Component | Description | Variants |
|-----------|-------------|----------|
| **Typography** | Heading and text styles | h1-h6, body, display, code |
| **Button** | Interactive buttons | primary, secondary, tertiary, ghost, danger, success |
| **Input** | Form inputs | text, textarea, select, checkbox, radio |
| **Card** | Content containers | default, flat, elevated, interactive |
| **Alert** | Feedback messages | success, warning, error, info |
| **Badge** | Status indicators | 7 colors, 3 sizes, outlined |
| **Modal** | Dialog overlays | 5 sizes, animated transitions |
| **Spinner** | Loading indicators | circular, dots, 4 sizes |

[View all components →](docs/pages/components.html)

## 🎨 Design Tokens

### Colors

#### Primary Colors
The primary teal color palette is the foundation of the brand:

```css
--color-primary: #058c8c         /* Main brand teal */
--color-primary-dark: #046363    /* Darker teal for hover states */
--color-primary-darker: #023b3b  /* Darkest teal */
--color-primary-light: #8ccaca   /* Light teal */
--color-primary-lighter: #b2dbdb /* Lighter teal */
--color-primary-lightest: #e6f4f4 /* Lightest teal background */
```

#### Accent Colors
Supporting accent colors for various use cases:

- **Terracotta**: `#a1665e` - Warm, earthy tone (used 474x in design)
- **Gold**: `#d09958` - Elegant metallic accent
- **Orange**: `#ec9a29` - Energetic call-to-action color
- **Purple**: `#9747ff` - Creative accent
- **Green**: `#138c05` - Success and positive actions

#### Neutral Colors
A comprehensive neutral palette from black to white:

```css
--color-neutral-black: #000000
--color-neutral-900: #141414    /* Nearly black */
--color-neutral-800: #323232    /* Dark gray (most used: 1757x) */
--color-neutral-600: #626262    /* Medium gray */
--color-neutral-400: #939393    /* Light gray */
--color-neutral-200: #d9d9d9    /* Very light gray */
--color-neutral-50: #f5f5f5     /* Off-white */
--color-neutral-white: #ffffff  /* Pure white (used 1337x) */
```

#### Semantic Colors
Purpose-driven colors for UI feedback:

- **Success**: `#61b258` (green)
- **Warning**: `#d6b739` (gold/yellow)
- **Error**: `#8c1305` (red)
- **Info**: `#71c5e6` (blue)

### Typography

#### Font Families

The design system uses five distinct font families:

1. **Primary**: `iA Writer Quattro S` - Main body text and UI elements
2. **Secondary**: `Inter` - Alternative sans-serif for interfaces
3. **Accent**: `Acme` - Display font for special emphasis
4. **Display**: `Metal` - Decorative display font
5. **Mono**: `Roboto` - Monospace for code

#### Font Sizes

A modular type scale from 8px to 64px:

| Token | Size | Usage |
|-------|------|-------|
| `xs` | 8px | Fine print, captions |
| `sm` | 12px | Small text, labels |
| `base` | 16px | Body text (default) |
| `md` | 18px | Large body text |
| `lg` | 20px | Subheadings |
| `xl` | 24px | Section headings |
| `2xl` | 32px | Page titles |
| `3xl` | 36px | Large headers |
| `4xl` | 48px | Display text |
| `5xl` | 64px | Hero text |

#### Font Weights

```css
--font-weight-normal: 400     /* Regular text */
--font-weight-medium: 500     /* Medium emphasis */
--font-weight-semibold: 600   /* Strong emphasis */
--font-weight-bold: 700       /* Bold headings */
```

### Spacing

An 8-point grid system for consistent spacing:

```css
--space-1: 4px
--space-2: 8px
--space-3: 12px
--space-4: 16px
--space-6: 24px
--space-8: 32px
--space-12: 48px
--space-16: 64px
```

### Border Radius

Rounded corner options from subtle to fully rounded:

```css
--radius-sm: 2px
--radius-base: 4px
--radius-md: 6px
--radius-lg: 8px
--radius-xl: 12px
--radius-2xl: 16px
--radius-3xl: 24px
--radius-full: 9999px  /* Pills and circles */
```

### Shadows

Elevation levels using box shadows:

- `--shadow-sm` - Subtle shadow for slight elevation
- `--shadow-base` - Default card shadow
- `--shadow-md` - Moderate elevation
- `--shadow-lg` - High elevation (modals, popovers)
- `--shadow-xl` - Maximum elevation
- `--shadow-2xl` - Dramatic shadow effect

### Z-Index

Layering hierarchy for UI components:

```css
--z-base: 0
--z-dropdown: 1000
--z-sticky: 1020
--z-fixed: 1030
--z-modal-backdrop: 1040
--z-modal: 1050
--z-popover: 1060
--z-tooltip: 1070
```

## 💻 Usage

### Basic Components

```html
<!-- Buttons -->
<button class="ajr-button ajr-button--primary ajr-button--md">Primary</button>
<button class="ajr-button ajr-button--secondary ajr-button--sm">Secondary</button>

<!-- Inputs -->
<div class="ajr-input-group">
    <label class="ajr-input-label">Email</label>
    <input type="email" class="ajr-input" placeholder="your@email.com">
</div>

<!-- Cards -->
<div class="ajr-card">
    <div class="ajr-card-header">
        <h3>Card Title</h3>
    </div>
    <div class="ajr-card-body">
        <p>Card content goes here.</p>
    </div>
</div>

<!-- Alerts -->
<div class="ajr-alert ajr-alert--success">
    <div class="ajr-alert-content">
        <strong>Success!</strong> Your changes have been saved.
    </div>
</div>
```

### Using Design Tokens

All components use CSS custom properties for easy customization:

```css
.my-custom-component {
    /* Colors */
    background-color: var(--color-primary);
    color: var(--color-text-inverse);

    /* Spacing */
    padding: var(--space-4) var(--space-6);

    /* Typography */
    font-family: var(--font-primary);
    font-size: var(--font-size-lg);

    /* Effects */
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-md);
    transition: var(--transition-fast);
}
```

### Framework Integration

**React:**
```jsx
import '@ajared/design-system/dist/ajared.css';

function App() {
    return (
        <button className="ajr-button ajr-button--primary ajr-button--md">
            Click Me
        </button>
    );
}
```

**Vue:**
```vue
<script setup>
import '@ajared/design-system/dist/ajared.css';
</script>

<template>
    <button class="ajr-button ajr-button--primary ajr-button--md">
        Click Me
    </button>
</template>
```

**Vanilla JS:**
```html
<link rel="stylesheet" href="path/to/ajared.css">
<button class="ajr-button ajr-button--primary ajr-button--md">Click Me</button>
```

## 🛠️ Development

### Prerequisites

- Node.js 16+ and npm
- Modern browser for testing

### Local Setup

```bash
# Clone the repository
git clone https://github.com/Ajared/ajared-design-system.git
cd ajared-design-system

# Install dependencies
npm install

# Start dev server (runs on http://localhost:3000)
npm run dev

# Build components
npm run build

# Build only components
npm run build:components
```

### Project Scripts

- `npm run dev` - Start Vite dev server for documentation site
- `npm run build` - Build all packages and documentation
- `npm run build:components` - Build component library only
- `npm run preview` - Preview production build locally

### File Structure

```
packages/components/src/
├── typography/         # Text styles and headings
├── button/            # Button component with variants
├── input/             # Form inputs (text, select, checkbox, radio)
├── card/              # Card containers
├── alert/             # Alert messages
├── badge/             # Status badges
├── modal/             # Modal dialogs
└── spinner/           # Loading spinners
```

## 📊 Bundle Size

- **Full CSS Bundle**: 36.89 KB (unminified)
- **Minified CSS**: 27.51 KB (25% reduction)
- **Gzipped**: ~8 KB (estimated)

## 🎯 Design Principles

1. **Figma-First**: All components match Figma designs pixel-perfectly
2. **Accessibility**: WCAG 2.1 AA compliant with keyboard navigation
3. **Consistency**: Single source of truth via design tokens
4. **Simplicity**: No build dependencies for consumers
5. **Flexibility**: Framework-agnostic, works anywhere
6. **Performance**: Minimal bundle size, zero runtime JS

## ♿ Accessibility

All components follow WCAG 2.1 AA guidelines:

- ✅ Keyboard navigation support (Tab, Enter, Escape, Arrows)
- ✅ Screen reader compatible with proper ARIA labels
- ✅ Color contrast ratios meet 4.5:1 minimum
- ✅ Clear focus indicators for keyboard users
- ✅ Semantic HTML elements
- ✅ Focus trap management for modals

## 🌐 Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

**Note**: IE11 is not supported (uses modern CSS features like custom properties and CSS Grid)

## 📝 Component Examples

### Buttons with Different Variants

```html
<!-- Different button types -->
<button class="ajr-button ajr-button--primary ajr-button--md">Primary Action</button>
<button class="ajr-button ajr-button--secondary ajr-button--md">Secondary</button>
<button class="ajr-button ajr-button--tertiary ajr-button--md">Tertiary</button>
<button class="ajr-button ajr-button--danger ajr-button--md">Delete</button>

<!-- Loading state -->
<button class="ajr-button ajr-button--primary ajr-button--md ajr-button--loading">
    Loading...
</button>

<!-- Disabled state -->
<button class="ajr-button ajr-button--primary ajr-button--md" disabled>Disabled</button>
```

### Form with Validation States

```html
<div class="ajr-input-group">
    <label class="ajr-input-label">Email Address</label>
    <input type="email" class="ajr-input" placeholder="your@email.com">
    <span class="ajr-input-helper">We'll never share your email.</span>
</div>

<!-- Error state -->
<div class="ajr-input-group">
    <label class="ajr-input-label">Username</label>
    <input type="text" class="ajr-input ajr-input--error" value="ab">
    <span class="ajr-input-helper ajr-input-helper--error">
        Username must be at least 3 characters
    </span>
</div>

<!-- Success state -->
<div class="ajr-input-group">
    <label class="ajr-input-label">Password</label>
    <input type="password" class="ajr-input ajr-input--success">
    <span class="ajr-input-helper ajr-input-helper--success">Strong password!</span>
</div>
```

### Interactive Card

```html
<div class="ajr-card ajr-card--elevated ajr-card--interactive">
    <div class="ajr-card-header">
        <h3>Interactive Card</h3>
        <span class="ajr-badge ajr-badge--primary ajr-badge--sm">New</span>
    </div>
    <div class="ajr-card-body">
        <p>This card has hover effects and elevated shadow for emphasis.</p>
    </div>
    <div class="ajr-card-footer">
        <button class="ajr-button ajr-button--primary ajr-button--sm">Learn More</button>
        <button class="ajr-button ajr-button--tertiary ajr-button--sm">Dismiss</button>
    </div>
</div>
```

### Alert Messages

```html
<!-- Success -->
<div class="ajr-alert ajr-alert--success">
    <div class="ajr-alert-icon">✓</div>
    <div class="ajr-alert-content">
        <strong>Success!</strong> Your changes have been saved.
    </div>
    <button class="ajr-alert-close">×</button>
</div>

<!-- Error (outlined) -->
<div class="ajr-alert ajr-alert--error ajr-alert--outlined">
    <div class="ajr-alert-icon">!</div>
    <div class="ajr-alert-content">
        <strong>Error!</strong> Please check your input and try again.
    </div>
</div>
```

## 🎨 Color Usage Guidelines

### Primary Color (`#058c8c`)
- Main brand color (teal)
- Use for primary actions, links, and key brand elements
- Provides strong brand presence throughout the interface

### Accent Terracotta (`#a1665e`)
- Secondary brand color for warmth and contrast
- Use for featured content, special emphasis, or secondary CTAs
- Complements the primary teal beautifully

### Semantic Colors
- **Success** (`#61b258`): Positive actions, confirmations
- **Warning** (`#d6b739`): Caution, important information
- **Error** (`#8c1305`): Errors, destructive actions
- **Info** (`#71c5e6`): Informational messages, tips

### Neutral Grays
- `neutral-800` (#323232): Primary text, headings
- `neutral-600` (#626262): Secondary text, descriptions
- `neutral-400` (#939393): Disabled states, placeholders
- `neutral-200` (#d9d9d9): Borders, dividers
- `neutral-50` (#f5f5f5): Subtle backgrounds

## 🔍 Best Practices

1. **Use design tokens**: Reference CSS custom properties (`var(--color-primary)`) instead of hardcoded values
2. **Follow BEM naming**: Components use `.ajr-component__element--modifier` pattern
3. **Maintain accessibility**: Always ensure sufficient color contrast (4.5:1 for text)
4. **Consistent spacing**: Use the 8-point grid spacing scale
5. **Component composition**: Combine components to build complex UIs
6. **Semantic HTML**: Use proper HTML elements for better accessibility

## 📚 Documentation

- **[Live Demo Site](docs/index.html)** - Interactive component showcase
- **[Getting Started Guide](docs/pages/getting-started.html)** - Installation and usage
- **[Design Tokens](docs/pages/tokens.html)** - Complete token reference
- **[Components](docs/pages/components.html)** - All components with live examples
- **[Figma Source](https://www.figma.com/design/cgfMHbfTwYT3GYqhTXQXPe/ajaRed)** - Original design file

## 🤝 Contributing

We welcome contributions! Here's how to get started:

1. **Fork the repository** and clone locally
2. **Create a branch** for your feature (`git checkout -b feature/my-feature`)
3. **Make your changes** following our code standards:
   - Use BEM naming convention for CSS classes
   - Reference design tokens instead of hardcoded values
   - Ensure WCAG 2.1 AA accessibility compliance
   - Add documentation for new components
4. **Test your changes** in the demo site (`npm run dev`)
5. **Build the project** to ensure no errors (`npm run build`)
6. **Commit your changes** with clear, descriptive messages
7. **Push to your fork** and submit a pull request

### Code Standards

- CSS: Follow existing component patterns, use CSS custom properties
- HTML: Semantic markup with proper ARIA attributes
- JavaScript: Vanilla JS only, no framework dependencies
- Documentation: Update relevant pages in the `docs/` folder

## 📊 Project Stats

- **Design Tokens**: 160+ color tokens, 10 font sizes, 13 spacing values
- **Components**: 8 core components with 30+ variants
- **Accessibility**: WCAG 2.1 AA compliant
- **Bundle Size**: 27.51 KB minified CSS
- **Browser Support**: Modern browsers (Chrome, Firefox, Safari, Edge)
- **Dependencies**: Zero runtime dependencies

## 🗺️ Roadmap

- [ ] Add more complex components (Dropdown, Tabs, Accordion)
- [ ] Implement dark mode support
- [ ] Create React/Vue wrapper libraries
- [ ] Add animation utilities
- [ ] Expand icon set
- [ ] Create Figma plugin for code generation
- [ ] Add automated visual regression testing

## 📄 License

This design system is proprietary to the ajaRed brand.

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/Ajared/ajared-design-system/issues)
- **Discussions**: [GitHub Discussions](https://github.com/Ajared/ajared-design-system/discussions)
- **Email**: support@ajared.com

---

**Built with ❤️ for the ajaRed brand** | Design System v1.0.0 | Last updated: 2026-02-21
