# Global Styles (`global.css`)

This document describes the global stylesheet located at `src/styles/global.css`. This file contains fundamental CSS rules that apply across the entire personal portfolio website, including a basic reset, theme variable definitions, base element styling, and general layout rules.

## Purpose

The `global.css` file serves as the foundation for the website's visual design. It ensures a consistent starting point for styling across different browsers and provides core variables and styles used by various components and pages.

## Basic Reset

The stylesheet includes a basic CSS reset applied to all elements (`*`, `*::before`, `*::after`). This reset sets `box-sizing` to `border-box` and removes default `margin` and `padding`.

```css
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
```

Additionally, `html` is set to use `scroll-behavior: smooth` for a smoother scrolling experience when navigating to anchor links.

```css
html {
  scroll-behavior: smooth;
}
```

## Theme Variables

CSS variables are defined within the `:root` pseudo-class for the core color palette and typography scale. Specific variables for light and dark themes are also defined. The `data-theme` attribute on the `<html>` element is used to switch between themes, applying the appropriate variables.

### Core Variables (`:root`)

- `--clr-primary`: Primary accent color (e.g., `#3B82F6`)
- `--clr-secondary`: Secondary accent color (e.g., `#10B981`)
- `--clr-accent`: Another accent color (e.g., `#F59E0B`)
- `--clr-text-base`: Base text color for the light theme (e.g., `#1F2937`)
- `--clr-bg-base`: Base background color for the light theme (e.g., `#F9FAFB`)
- `--clr-border`: Border color for the light theme (e.g., `#E5E7EB`)
- `--clr-bg-alt`: Alternate background color for the light theme (e.g., `#F3F4F6`)
- `--clr-bg-input`: Input background color for the light theme (e.g., `#FFFFFF`)
- `--clr-primary-rgb`: RGB values of the primary color for rgba usage (e.g., `59, 130, 246`)
- `--clr-text-light`: Alias for `--clr-text-base`
- `--clr-bg-light`: Alias for `--clr-bg-base`
- `--clr-text-dark`: Text color for the dark theme (e.g., `#F9FAFB`)
- `--clr-bg-dark`: Background color for the dark theme (e.g., `#1F2937`)
- `--clr-border-dark`: Border color for the dark theme (e.g., `#4B5563`)
- `--clr-bg-alt-dark`: Alternate background color for the dark theme (e.g., `#374151`)
- `--clr-bg-input-dark`: Input background color for the dark theme (e.g., `#4B5563`)

Typography variables are also defined in `:root`:

- `font-size`: Base font size (e.g., `16px`)
- `--font-primary`: Primary font family (e.g., `'Poppins', sans-serif`)
- `--font-secondary`: Secondary font family (e.g., `'Merriweather', serif`)
- `--scale-ratio`: Ratio for the modular type scale (e.g., `1.25`)
- `--fs--2` to `--fs-4`: Font sizes based on the modular scale
- `--lh-base`: Base line height (e.g., `1.6`)
- `--lh-heading`: Line height for headings (e.g., `1.2`)

### Theme Application

The `html` element's `data-theme` attribute controls the active theme.

- `html:not([data-theme="dark"])`: Applies light theme variables by setting `--clr-text-current`, `--clr-bg-current`, etc. to their light counterparts. Sets `color-scheme` to `light`.
- `[data-theme="dark"]`: Applies dark theme variables by setting `--clr-text-current`, `--clr-bg-current`, etc. to their dark counterparts. Sets `color-scheme` to `dark`.

The `body` element uses `--clr-bg-current` and `--clr-text-current` for its background and text colors, allowing them to change based on the `data-theme` attribute. A transition is applied to `background-color` and `color` for a smooth theme switch.

## Base Styles

General styles are applied to common HTML elements:

- `body`: Sets font family, font size, line height, and includes font smoothing.
- `h1` through `h6`: Sets font family, line height, margin, and font weight. Specific font sizes are defined using the modular scale variables.
- `p`: Sets bottom margin.
- `a`: Sets link color using `--clr-primary`, removes default text decoration, and includes a color transition. Hover and focus states apply an underline and use `--clr-primary`.
- `img`, `svg`, `video`: Ensures images and media are responsive (`max-width: 100%`, `height: auto`) and displayed as block elements.

## Layout

Basic layout classes and element styles are included:

- `.container`: A utility class for centering content and applying horizontal padding, with a maximum width. Responsive adjustments are made using media queries.
- `header`: Applies padding, a bottom border using `--clr-border-current`, and uses flexbox for layout in its container.
- `nav ul`: Removes list style and uses flexbox for horizontal navigation items with spacing.
- `nav a`: Styles navigation links, including padding and a transparent bottom border for hover/active effects. Hover, focus, and `.active` states change color and border color using `--clr-primary`.
- `main`: Sets `flex-grow: 1` to push the footer down and applies top/bottom padding.
- `footer`: Applies padding, top margin, a top border using `--clr-border-current`, centers text, sets font size, and includes transitions for theme changes.

## Components (Basic)

Initial styles for simple components:

- `.theme-toggle-button`: Styles a button for theme switching, including borders, colors, padding, border-radius, cursor, and transitions. A hover state changes background and text color using current theme variables.
- `.card`: Provides a basic card style with background color (`--clr-bg-alt-current`), padding, border-radius, border (`--clr-border-current`), and box shadow, including transitions for theme changes.

## Responsiveness

Media queries are used to adjust styles for different screen sizes:

- `@media (min-width: 768px)` and `@media (min-width: 1200px)`: Adjusts the base font size and container padding.
- `@media (max-width: 1024px)`: Adjusts header layout and navigation list layout.
- `@media (max-width: 768px)`: Adjusts heading font sizes and main/footer padding/margin.
- `@media (max-width: 480px)`: Further adjusts the container width and padding, and refines navigation item spacing and font size.

## Accessibility

- **Skip Link:** Styles for a skip link (`.skip-link`) to allow keyboard users to bypass repetitive navigation.
- **Focus Styles:** Enhanced focus styles (`:focus-visible`) to provide clear visual indication for keyboard navigation.
- **Touch Targets:** Minimum size and spacing are ensured for interactive elements (`button`, `a.btn`, `input[type="checkbox"]`, `input[type="radio"]`) for better touch accessibility.

## Astro View Transitions

CSS animations and pseudo-elements are defined to support smooth page transitions when using Astro View Transitions.

- `@keyframes fade-in`, `@keyframes fade-out`, `@keyframes slide-from-right`, `@keyframes slide-to-left`: Keyframe animations for transitions.
- `html`: Prevents the default root transition.
- `html.is-animating`: Class added during transitions to manage potential layout issues.
- `::view-transition-old(root)` and `::view-transition-new(root)`: Defines the animations for the old and new views during a page transition.

## Animations and Microinteractions

This section documents the CSS for subtle animations and microinteractions implemented to enhance user experience.

### Button Pulse Animation

A subtle pulse animation is applied to buttons on click to provide visual feedback.

```css
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(0.97); }
  100% { transform: scale(1); }
}

.active-pulse {
  animation: pulse 0.3s ease-out;
}
```

This animation is triggered by JavaScript in `BaseLayout.astro` which adds and removes the `.active-pulse` class on button click.

### View Transitions CSS

The following CSS defines the animations used for page transitions with Astro View Transitions.

```css
@keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
@keyframes fade-out { from { opacity: 1; } to { opacity: 0; } }
@keyframes slide-from-right { from { transform: translateX(30px); opacity: 0; } }
@keyframes slide-to-left { to { transform: translateX(-30px); opacity: 0; } }

html {
  view-transition-name: none; /* Prevent default root transition */
}

html.is-animating { /* Class added by JS during transition */
  overflow: hidden;
}

/* Define default transitions */
::view-transition-old(root) {
  animation: 0.3s cubic-bezier(0.4, 0, 1, 1) both fade-out,
             0.3s cubic-bezier(0.4, 0, 0.2, 1) both slide-to-left;
}

::view-transition-new(root) {
  animation: 0.3s cubic-bezier(0, 0, 0.2, 1) 0.1s both fade-in, /* Delay fade-in slightly */
             0.3s cubic-bezier(0.4, 0, 0.2, 1) both slide-from-right;
}
```

The `is-animating` class is toggled by JavaScript in `BaseLayout.astro` during the view transition process.