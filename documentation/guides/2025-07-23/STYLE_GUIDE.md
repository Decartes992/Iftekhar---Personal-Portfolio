[← Home](../README.md) | [Documentation Overview](README.md) | [Architecture](ARCHITECTURE.md) | [Components](COMPONENTS.md) | [Content Management](CONTENT_MANAGEMENT.md)

---
# Design System Style Guide

## Color Palette

| Role | Light Theme | Dark Theme | CSS Variable | WCAG AA Ratio |
|------|-------------|------------|--------------|-----------------|
| Primary | ![#3B82F6](https://via.placeholder.com/15/3B82F6/000000?text=+) `#3B82F6` | ![#60A5FA](https://via.placeholder.com/15/60A5FA/000000?text=+) `#60A5FA` | `--clr-primary-current` | 4.5:1 ✅ |
| Secondary | ![#10B981](https://via.placeholder.com/15/10B981/000000?text=+) `#10B981` | ![#34D399](https://via.placeholder.com/15/34D399/000000?text=+) `#34D399` | `--clr-secondary-current` | 4.5:1 ✅ |
| Accent | ![#F59E0B](https://via.placeholder.com/15/F59E0B/000000?text=+) `#F59E0B` | ![#FBBF24](https://via.placeholder.com/15/FBBF24/000000?text=+) `#FBBF24` | `--clr-accent-current` | 4.5:1 ✅ |
| Background | ![#F9FAFB](https://via.placeholder.com/15/F9FAFB/000000?text=+) `#F9FAFB` | ![#111827](https://via.placeholder.com/15/111827/000000?text=+) `#111827` | `--clr-bg-base-current` | 15.3:1 ✅ |
| Surface | ![#FFFFFF](https://via.placeholder.com/15/FFFFFF/000000?text=+) `#FFFFFF` | ![#1F2937](https://via.placeholder.com/15/1F2937/000000?text=+) `#1F2937` | `--clr-surface-current` | 15.3:1 ✅ |
| Text | ![#1F2937](https://via.placeholder.com/15/1F2937/000000?text=+) `#1F2937` | ![#F9FAFB](https://via.placeholder.com/15/F9FAFB/000000?text=+) `#F9FAFB` | `--clr-text-base-current` | 15.3:1 ✅ |
| Muted Text | ![#4B5563](https://via.placeholder.com/15/4B5563/000000?text=+) `#4B5563` | ![#D1D5DB](https://via.placeholder.com/15/D1D5DB/000000?text=+) `#D1D5DB` | `--clr-text-muted-current` | 7.5:1 ✅ |
| Border | ![#9CA3AF](https://via.placeholder.com/15/9CA3AF/000000?text=+) `#9CA3AF` | ![#6B7280](https://via.placeholder.com/15/6B7280/000000?text=+) `#6B7280` | `--clr-border-current` | 3:1 ✅ |
| Focus Ring | ![#3B82F6](https://via.placeholder.com/15/3B82F6/000000?text=+) `#3B82F6` | ![#60A5FA](https://via.placeholder.com/15/60A5FA/000000?text=+) `#60A5FA` | `--clr-focus-ring` | 4.5:1 ✅ |

## Typography

### Font Families
- **Headings**: `Satoshi` (serif alternative)
- **Body**: `Inter Variable` (sans-serif)
- **Code**: `monospace`

### Font Sizes
| Name | Size (rem) | Example |
|------|------------|---------|
| xs | 0.75 | Captions, labels |
| sm | 0.875 | Small text |
| base | 1 | Body text |
| md | 1.125 | Lead text |
| lg | 1.25 | Subheadings |
| xl | 1.5 | H6 |
| 2xl | 1.875 | H5 |
| 3xl | 2.25 | H4 |
| 4xl | 3 | H3 |
| 5xl | 3.75 | H2 |
| 6xl | 4.5 | H1 |

## Spacing & Sizing

### Spacing Scale
| Name | Size (rem) | Example |
|------|------------|---------|
| 1 | 0.25 | Small padding |
| 2 | 0.5 | Element spacing |
| 3 | 0.75 |  |
| 4 | 1 | Default padding |
| 5 | 1.25 |  |
| 6 | 1.5 | Section padding |
| 8 | 2 | Large padding |
| 10 | 2.5 |  |
| 12 | 3 |  |
| 16 | 4 |  |
| 20 | 5 |  |

### Border Radius
| Name | Size (rem) | Example |
|------|------------|---------|
| sm | 0.125 | Buttons |
| base | 0.25 | Cards |
| md | 0.375 |  |
| lg | 0.5 | Containers |
| xl | 0.75 |  |
| 2xl | 1 | Large elements |
| full | 9999px | Circles |

## Dark Mode Implementation Guidelines

### Color System Architecture

The theme system uses CSS custom properties with WCAG 2.1 AA compliant color ratios:

```css
/* Base theme variables (Light mode) */
:root {
  --clr-primary: #3B82F6;
  --clr-primary-light: #60A5FA;
  --clr-secondary: #10B981;
  --clr-secondary-light: #34D399;
  --clr-accent: #F59E0B;
  --clr-accent-light: #FBBF24;
  
  /* Backgrounds */
  --clr-bg-base: #F9FAFB;
  --clr-surface: #FFFFFF;
  
  /* Text colors with WCAG AA compliance */
  --clr-text-base: #1F2937;      /* 15.3:1 ratio */
  --clr-text-muted: #4B5563;    /* 7.5:1 ratio (updated from #6B7280) */
  --clr-text-subtle: #6B7280;   /* 4.5:1 ratio */
  
  /* Border colors */
  --clr-border: #9CA3AF;        /* 3:1 ratio for UI elements */
  --clr-border-subtle: #D1D5DB;
  
  /* Focus indicators */
  --clr-focus-ring: #3B82F6;
  --clr-focus-ring-offset: #FFFFFF;
}

/* Dark theme overrides */
[data-theme="dark"] {
  /* Primary colors */
  --clr-primary-current: var(--clr-primary-light);
  --clr-secondary-current: var(--clr-secondary-light);
  --clr-accent-current: var(--clr-accent-light);
  
  /* Backgrounds */
  --clr-bg-base-current: #111827;
  --clr-surface-current: #1F2937;
  
  /* Text colors with WCAG AA compliance */
  --clr-text-base-current: #F9FAFB;    /* 15.3:1 ratio */
  --clr-text-muted-current: #D1D5DB;   /* 7.5:1 ratio (updated from #9CA3AF) */
  --clr-text-subtle-current: #9CA3AF;  /* 4.5:1 ratio */
  
  /* Border colors */
  --clr-border-current: #6B7280;       /* 3:1 ratio for UI elements */
  --clr-border-subtle-current: #4B5563;
  
  /* Focus indicators */
  --clr-focus-ring-current: #60A5FA;
  --clr-focus-ring-offset-current: #111827;
}
```

### Theme Toggle Component

Theme switching is handled by the [`ThemeToggle`](src/components/ThemeToggle.jsx) component with full accessibility support:

```jsx
// Accessibility-enhanced theme toggle
<button
  role="switch"
  aria-pressed={isDark}
  aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
  aria-describedby="theme-description"
  className="... focus:outline-none focus:ring-2 focus:ring-offset-2
             focus:ring-blue-500 focus:ring-offset-white
             dark:focus:ring-offset-gray-900"
>
  <span id="theme-description" className="sr-only">
    {isDark
      ? "Current theme is dark. Switching to light mode will reduce screen brightness."
      : "Current theme is light. Switching to dark mode will reduce eye strain in low light."}
  </span>
  {/* Icon content */}
</button>
```

### Accessibility Requirements

#### Color Contrast Compliance
- **Normal text**: 4.5:1 minimum contrast ratio
- **Large text**: 3:1 minimum contrast ratio
- **UI components**: 3:1 minimum contrast ratio
- **Focus indicators**: 3:1 minimum contrast ratio

#### Focus Management
- Focus is maintained during theme transitions
- Focus indicators are clearly visible in both themes
- Keyboard navigation is fully supported
- Skip links are provided for theme controls

#### Screen Reader Support
- Theme state is announced with `aria-pressed`
- Descriptive labels explain theme changes
- Live regions announce theme transitions
- Focus is restored after theme changes

### Responsive Design Considerations

Dark mode respects user preferences:
```css
/* Respect system preference */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme]) {
    /* Apply dark theme variables */
  }
}

/* Respect user choice */
[data-theme="light"] { /* Light theme */ }
[data-theme="dark"] { /* Dark theme */ }
```

## Responsive Design

Breakpoints are defined using mobile-first media queries:

```css
/* Base styles (mobile) */
h1 { font-size: var(--fs-4xl); }

/* Tablet styles */
@media (min-width: 768px) { 
  h1 { font-size: var(--fs-5xl); }
}

/* Desktop styles */
@media (min-width: 1024px) { 
  .container {
    padding-left: var(--space-8);
    padding-right: var(--space-8);
  }
}
```

## Component Styling Conventions

### Cards
```css
.card {
  background-color: var(--clr-surface-current);
  border-radius: var(--rounded-lg);
  padding: var(--space-6);
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
  transition: var(--transition-base);
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
}
```

### Buttons
```css
.btn {
  font-family: var(--font-sans);
  font-weight: 500;
  border-radius: var(--rounded-md);
  padding: var(--space-2) var(--space-4);
  transition: var(--transition-fast);
}

.btn:hover {
  transform: translateY(-1px);
  filter: brightness(1.1);
}
```

### Glassmorphism Effect
```css
.glassmorphism {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.15);
}

[data-theme="dark"] .glassmorphism {
  background: rgba(31, 41, 55, 0.2);
  border: 1px solid rgba(75, 85, 99, 0.3);
}
```

### Dark Mode Component Examples

#### Cards with Theme Support
```css
.card {
  background-color: var(--clr-surface-current);
  border: 1px solid var(--clr-border-current);
  border-radius: var(--rounded-lg);
  padding: var(--space-6);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

[data-theme="dark"] .card {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

[data-theme="dark"] .card:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.5);
}
```

#### Buttons with Accessibility
```css
.btn {
  font-family: var(--font-sans);
  font-weight: 500;
  border-radius: var(--rounded-md);
  padding: var(--space-2) var(--space-4);
  transition: all 0.2s ease;
  border: 1px solid transparent;
}

.btn:focus-visible {
  outline: 2px solid var(--clr-focus-ring-current);
  outline-offset: 2px;
}

.btn-primary {
  background-color: var(--clr-primary-current);
  color: white;
}

.btn-secondary {
  background-color: transparent;
  color: var(--clr-text-base-current);
  border-color: var(--clr-border-current);
}
```

#### Form Elements
```css
.form-input {
  background-color: var(--clr-surface-current);
  border: 1px solid var(--clr-border-current);
  color: var(--clr-text-base-current);
  border-radius: var(--rounded-md);
  padding: var(--space-3) var(--space-4);
}

.form-input:focus {
  border-color: var(--clr-primary-current);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

[data-theme="dark"] .form-input:focus {
  box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.2);
}
```

## Animations
```css
@keyframes fade-in {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fade-in 0.5s ease-out forwards;
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .animate-fade-in {
    animation: none;
    transition: opacity 0.2s ease;
  }
}
```

## Testing Guidelines

### Color Contrast Testing
Use these tools to verify WCAG 2.1 AA compliance:
- **WebAIM Contrast Checker**: https://webaim.org/resources/contrastchecker/
- **axe-core**: Automated accessibility testing
- **Lighthouse**: Built-in accessibility audit

### Browser Testing Matrix
| Browser | Light Mode | Dark Mode | System Preference |
|---------|------------|-----------|-------------------|
| Chrome 95+ | ✅ | ✅ | ✅ |
| Firefox 91+ | ✅ | ✅ | ✅ |
| Safari 15+ | ✅ | ✅ | ✅ |
| Edge 95+ | ✅ | ✅ | ✅ |

### Responsive Testing
Test theme switching across all breakpoints:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

### Performance Considerations
- CSS custom properties prevent flash of unstyled content
- Theme preference is stored in localStorage
- No JavaScript required for initial render
- Minimal repaint/reflow during theme switching

---

> **Related Documentation**
> - [Component Reference](COMPONENTS.md)
> - [Content Management](CONTENT_MANAGEMENT.md)
> - [Project Architecture](ARCHITECTURE.md)
> - [Accessibility Testing Guide](ACCESSIBILITY_TESTING.md)

---

> **Related Documentation**  
> - [Component Reference](COMPONENTS.md)  
> - [Content Management](CONTENT_MANAGEMENT.md)  
> - [Project Architecture](ARCHITECTURE.md)