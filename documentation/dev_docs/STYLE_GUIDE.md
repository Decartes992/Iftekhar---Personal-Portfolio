[← Home](../README.md) | [Documentation Overview](README.md) | [Architecture](ARCHITECTURE.md) | [Components](COMPONENTS.md) | [Content Management](CONTENT_MANAGEMENT.md)

---
# Design System Style Guide

## Color Palette

| Role | Light Theme | Dark Theme | CSS Variable |
|------|-------------|------------|--------------|
| Primary | ![#3B82F6](https://via.placeholder.com/15/3B82F6/000000?text=+) `#3B82F6` | ![#60A5FA](https://via.placeholder.com/15/60A5FA/000000?text=+) `#60A5FA` | `--clr-primary-current` |
| Secondary | ![#10B981](https://via.placeholder.com/15/10B981/000000?text=+) `#10B981` | ![#34D399](https://via.placeholder.com/15/34D399/000000?text=+) `#34D399` | `--clr-secondary-current` |
| Accent | ![#F59E0B](https://via.placeholder.com/15/F59E0B/000000?text=+) `#F59E0B` | ![#FBBF24](https://via.placeholder.com/15/FBBF24/000000?text=+) `#FBBF24` | `--clr-accent-current` |
| Background | ![#F9FAFB](https://via.placeholder.com/15/F9FAFB/000000?text=+) `#F9FAFB` | ![#111827](https://via.placeholder.com/15/111827/000000?text=+) `#111827` | `--clr-bg-base-current` |
| Surface | ![#FFFFFF](https://via.placeholder.com/15/FFFFFF/000000?text=+) `#FFFFFF` | ![#1F2937](https://via.placeholder.com/15/1F2937/000000?text=+) `#1F2937` | `--clr-surface-current` |
| Text | ![#1F2937](https://via.placeholder.com/15/1F2937/000000?text=+) `#1F2937` | ![#F9FAFB](https://via.placeholder.com/15/F9FAFB/000000?text=+) `#F9FAFB` | `--clr-text-base-current` |
| Muted Text | ![#6B7280](https://via.placeholder.com/15/6B7280/000000?text=+) `#6B7280` | ![#9CA3AF](https://via.placeholder.com/15/9CA3AF/000000?text=+) `#9CA3AF` | `--clr-text-muted-current` |

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

## Theming Implementation

The theme system uses CSS custom properties and a `data-theme` attribute:

```css
/* Define theme variables */
:root {
  --clr-primary: #3B82F6;
  --clr-text-base: #1F2937;
  /* ... other variables ... */
}

/* Dark theme override */
[data-theme="dark"] {
  --clr-primary-current: var(--clr-primary-light);
  --clr-text-base-current: var(--clr-text-base-dark);
  /* ... other overrides ... */
}
```

Theme switching is handled by the [`ThemeToggleButton`](src/components/ThemeToggleButton.astro) component.

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

## Animations
```css
@keyframes fade-in {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fade-in 0.5s ease-out forwards;
}
```

---

> **Related Documentation**  
> - [Component Reference](COMPONENTS.md)  
> - [Content Management](CONTENT_MANAGEMENT.md)  
> - [Project Architecture](ARCHITECTURE.md)