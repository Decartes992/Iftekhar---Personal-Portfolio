# Styling System Documentation

## Overview

The Astro personal portfolio uses a sophisticated styling system that combines **CSS custom properties (CSS variables)**, **Tailwind CSS**, and **modern CSS features** to create a responsive, themeable, and performant design system. The architecture is built around a comprehensive design token system with light/dark theme support, glassmorphism effects, and advanced animations.

## Architecture Overview

### Core Technologies
- **CSS Custom Properties**: 100+ design tokens for colors, typography, spacing, and effects
- **Tailwind CSS**: Utility-first framework with extensive custom configuration
- **Modern CSS**: `color-mix()`, `backdrop-filter`, scroll-driven animations, view transitions
- **Font Systems**: Variable fonts (Inter, Satoshi) + Google Fonts (JetBrains Mono, Playfair Display)

### File Structure
```
src/
├── styles/
│   └── global.css          # Core styling system (384 lines)
├── tailwind.config.js      # Tailwind configuration (173 lines)
└── layouts/
    └── BaseLayout.astro    # Theme integration & animations (226 lines)
```

## Design Token System

### Color Architecture

#### Primary Color Scale
```css
--clr-primary-50: #eff6ff;   /* Lightest tint */
--clr-primary-500: #3b82f6;  /* Main primary */
--clr-primary-900: #1e3a8a;  /* Darkest shade */
```

#### Semantic Color System
```css
/* Light Theme */
--clr-text-base: var(--clr-neutral-900);
--clr-text-muted: var(--clr-neutral-600);
--bg-primary: #ffffff;
--bg-secondary: #f8fafc;

/* Dark Theme */
--clr-text-base-dark: var(--clr-neutral-100);
--clr-text-muted-dark: var(--clr-neutral-400);
--bg-primary-dark: #0f172a;
--bg-secondary-dark: #1e293b;
```

#### Gradient Collections
```css
--gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
--gradient-secondary: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
--gradient-hero: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
```

### Typography System

#### Font Families
```css
--font-primary: 'Inter Variable', sans-serif;    /* Body text */
--font-display: 'Satoshi Variable', sans-serif;   /* Headings */
--font-code: 'JetBrains Mono', monospace;         /* Code blocks */
--font-accent: 'Playfair Display', serif;         /* Special emphasis */
```

#### Responsive Typography Scale
```css
--fs-xs: 0.75rem;    /* 12px - captions */
--fs-base: 1rem;     /* 16px - body text */
--fs-6xl: 3.75rem;   /* 60px - hero display */
```

### Spacing & Layout
```css
--space-1: 0.25rem;   /* 4px */
--space-4: 1rem;      /* 16px */
--space-20: 5rem;     /* 80px */
```

### Glassmorphism Effects
```css
--glass-bg: rgba(255, 255, 255, 0.1);
--glass-border: rgba(255, 255, 255, 0.1);
--glass-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
```

## Theme System

### Theme Architecture
The system uses **CSS custom properties** with theme-specific overrides:

1. **Base Variables**: Defined in `:root`
2. **Light Theme**: Applied via `html:not([data-theme="dark"])`
3. **Dark Theme**: Applied via `[data-theme="dark"]`
4. **Current Variables**: Theme-aware properties used throughout

### Theme Switching
```javascript
// BaseLayout.astro - Theme initialization
const theme = getInitialTheme(); // localStorage or system preference
document.documentElement.dataset.theme = theme;
```

### Theme Variables Example
```css
/* Light theme */
--clr-primary-current: var(--clr-primary-500);
--clr-bg-base-current: var(--bg-primary);

/* Dark theme */
--clr-primary-current: var(--clr-primary-400); /* Adjusted for contrast */
--clr-bg-base-current: var(--bg-primary-dark);
```

## Tailwind Integration

### Custom Configuration Highlights
```javascript
// tailwind.config.js
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'var(--clr-primary-current)',
        'primary-50': 'var(--clr-primary-50)',
        // ... full color mapping
      },
      fontFamily: {
        primary: ['Inter Variable', 'sans-serif'],
        display: ['Satoshi Variable', 'sans-serif'],
      },
      fontSize: {
        'xs': 'var(--fs-xs)',
        // ... responsive typography
      }
    }
  }
}
```

### Responsive Breakpoints
```javascript
screens: {
  'xs': '480px',
  'sm': '640px',
  'md': '768px',
  'lg': '1024px',
  'xl': '1280px',
  '2xl': '1536px',
  '3xl': '1920px',
}
```

## Animation System

### CSS Animations
```css
/* Keyframe animations */
@keyframes fade-in {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Utility classes */
.animate-fade-in {
  animation: fade-in 0.5s ease-out forwards;
}
```

### Tailwind Animations
```javascript
animation: {
  'fade-in': 'fadeIn 0.5s ease-in-out',
  'gradient-shift': 'gradientShift 8s ease infinite',
  'float': 'float 6s ease-in-out infinite',
}
```

### View Transitions
```css
::view-transition-old(root) {
  animation: slide-and-fade 0.5s ease-out;
}
::view-transition-new(root) {
  animation: slide-from-right-and-fade 0.5s ease-in;
}
```

## Performance Analysis

### Current Performance Metrics
- **CSS Variables**: 100+ tokens (potential bloat)
- **Font Loading**: 4 font families, 2 variable fonts + 2 Google Fonts
- **Animation Complexity**: Multiple keyframes, transitions, and effects
- **Bundle Size**: ~384 lines in global.css + 173 lines in Tailwind config

### Identified Issues

#### 1. CSS Variable Redundancy
**Problem**: 100+ CSS variables with potential unused ones
**Examples**:
- `--clr-neutral-100` through `--clr-neutral-950` (9 variables)
- Multiple gradient variables that may not be used
- Duplicate font family definitions

#### 2. Font Loading Performance
**Problem**: Multiple font sources causing potential delays
```css
/* Current imports */
@import '@fontsource-variable/inter';
@import '@fontsource-variable/satoshi';
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono...');
```
**Impact**: 4 separate font requests, potential FOUT/FOIT

#### 3. Missing CSS Variable
**Problem**: `--gradient-accent` referenced in Tailwind config but not defined
**Location**: [`tailwind.config.js`](tailwind.config.js:382)

#### 4. Animation Performance
**Problem**: Multiple complex animations running simultaneously
- Animated gradient background (15s infinite)
- Scroll-driven header effects
- AOS (Animate on Scroll) library
- View transitions

#### 5. Specificity Issues
**Problem**: Complex CSS variable chains may cause debugging difficulties
```css
/* Deep nesting example */
[data-theme="dark"] .glassmorphism {
  background: rgba(31, 41, 55, 0.2);
}
```

## Specific Improvements

### 1. Optimize CSS Variables
**Action**: Audit and remove unused variables
```css
/* Remove unused neutral scale */
/* --clr-neutral-100: #F9FAFB; */ /* Unused */
/* --clr-neutral-200: #F3F4F6; */ /* Used only once */

/* Consolidate similar variables */
--clr-surface: var(--bg-primary); /* Instead of separate variables */
```

### 2. Font Loading Optimization
**Action**: Use font-display: swap and preload critical fonts
```html
<!-- In BaseLayout.astro -->
<link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossorigin>
<style>
  @font-face {
    font-family: 'Inter Variable';
    src: url('/fonts/inter-var.woff2') format('woff2');
    font-display: swap;
  }
</style>
```

### 3. Add Missing Gradient
**Action**: Define `--gradient-accent` in global.css
```css
:root {
  --gradient-accent: linear-gradient(135deg, #F59E0B 0%, #D97706 100%);
}
```

### 4. Animation Performance
**Action**: Use `will-change` and reduce complexity
```css
/* Optimize animations */
body {
  will-change: background-position;
  animation: gradientBG 30s ease infinite; /* Slower animation */
}

/* Reduce AOS duration */
AOS.init({
  duration: 400, /* Reduced from 800ms */
  once: true,
});
```

### 5. Theme Transition Enhancement
**Action**: Add smooth theme transitions
```css
/* Add to global.css */
* {
  transition: background-color 0.3s ease, color 0.3s ease;
}
```

## Usage Examples

### Using Design Tokens
```css
.my-component {
  background-color: var(--clr-surface-elevated-current);
  color: var(--clr-text-base-current);
  padding: var(--space-6);
  border-radius: var(--rounded-lg);
}
```

### Responsive Typography
```css
.hero-title {
  font-size: var(--fs-4xl);
  font-family: var(--font-display);
}

@media (min-width: 768px) {
  .hero-title {
    font-size: var(--fs-6xl);
  }
}
```

### Theme-Aware Components
```css
.card {
  background: var(--clr-surface-current);
  border: 1px solid var(--clr-border-current);
}

[data-theme="dark"] .card {
  /* Automatically handled by CSS variables */
}
```

## Maintenance Guidelines

### Adding New Colors
1. Define in `:root` CSS variables
2. Map in `tailwind.config.js` colors
3. Test in both light/dark themes
4. Update documentation

### Adding New Fonts
1. Import font files
2. Define CSS custom property
3. Map in Tailwind fontFamily
4. Test performance impact

### Theme Testing
1. Test light/dark mode switching
2. Verify CSS variable overrides
3. Check accessibility contrast
4. Test on different devices

## Browser Support

### Modern Features Used
- **CSS Custom Properties**: IE11+ (with limitations)
- **color-mix()**: Chrome 111+, Safari 16.1+, Firefox 113+
- **backdrop-filter**: All modern browsers
- **View Transitions**: Chrome 111+, Safari 16.4+ (with flag)

### Fallbacks
- CSS variables have fallback values
- Animations degrade gracefully
- Theme switching works without JavaScript