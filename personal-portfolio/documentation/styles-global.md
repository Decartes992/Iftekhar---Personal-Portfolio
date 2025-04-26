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

CSS variables are defined within the `:root` pseudo-class for the default (dark) theme and within an `html[data-theme='light']` selector for the light theme. These variables control colors, fonts, transitions, and shadows, allowing for easy theme switching and consistent styling.

### Dark Theme (Default)

Defined in `:root`:

- `--bg-color`: Primary background color (`#121212`)
- `--bg-secondary-color`: Background color for secondary elements like cards and code blocks (`#1e1e1e`)
- `--text-color`: Primary text color (`#e0e0e0`)
- `--text-secondary-color`: Muted text color (`#a0a0a0`)
- `--primary-color`: Accent color, used for headings and links (`#00bcd4`)
- `--primary-hover-color`: Hover state color for the primary accent (`#4dd0e1`)
- `--border-color`: Color for borders and dividers (`#333`)
- `--link-color`: Color for links (defaults to `--primary-color`)
- `--link-hover-color`: Hover color for links (defaults to `--primary-hover-color`)
- `--shadow-color`: Color for box shadows (`rgba(0, 0, 0, 0.3)`)
- `--font-family-sans`: Sans-serif font stack
- `--font-family-mono`: Monospace font stack
- `--transition-speed`: Default speed for CSS transitions (`0.3s`)
- `--transition-ease`: Default easing function for CSS transitions (`ease-in-out`)

### Light Theme

Defined in `html[data-theme='light']`:

- Overrides dark theme variables with lighter values for background, text, primary colors, borders, and shadows.

## Base Styles

General styles are applied to common HTML elements:

- `body`: Sets font family, background color, text color, minimum height, display properties (flex column), line height, and includes transitions for theme changes.
- `h1` through `h6`: Sets bottom margin, primary color, and line height. Specific font sizes are defined for `h1` to `h4`.
- `p`: Sets bottom margin.
- `a`: Sets link color, removes default text decoration, and includes a color transition. Hover and focus states apply the hover color and underline.
- `img`, `svg`, `video`: Ensures images and media are responsive (`max-width: 100%`, `height: auto`) and displayed as block elements.

## Layout

Basic layout classes and element styles are included:

- `.container`: A utility class for centering content and applying horizontal padding, with a maximum width.
- `header`: Applies top/bottom padding and a bottom border. The inner `.container` uses flexbox for layout.
- `nav ul`: Removes list style and uses flexbox for horizontal navigation items with spacing.
- `nav a`: Styles navigation links, including padding and a transparent bottom border for hover/active effects. Hover, focus, and `.active` states change color and border color.
- `main`: Sets `flex-grow: 1` to push the footer down and applies top/bottom padding.
- `footer`: Applies padding, top margin, a top border, centers text, sets secondary text color and font size, and includes transitions for theme changes.

## Components (Basic)

Initial styles for simple components:

- `.theme-toggle-button`: Styles a button for theme switching, including borders, colors, padding, border-radius, cursor, and transitions. A hover state changes background and text color.
- `.card`: Provides a basic card style with background color, padding, border-radius, border, and box shadow, including transitions for theme changes.

## Responsiveness

Media queries are used to adjust styles for different screen sizes:

- `@media (max-width: 768px)`: Adjusts heading font sizes, changes header layout to a column, centers navigation items and allows them to wrap, and reduces main and footer padding/margin.
- `@media (max-width: 480px)`: Further adjusts the container width and padding, and refines navigation item spacing and font size.