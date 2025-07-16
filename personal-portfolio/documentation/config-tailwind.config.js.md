# Tailwind CSS Configuration (`tailwind.config.js`)

**Purpose:** This file configures and customizes the Tailwind CSS framework for the project. It defines the theme (colors, fonts, spacing, etc.), specifies which files Tailwind should scan for utility classes, enables dark mode, and configures plugins.

**Reference:** [Tailwind Configuration Documentation](https://tailwindcss.com/docs/configuration)

## Current Configuration

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  // Specifies files to scan for Tailwind classes
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  // Enables class-based dark mode (toggled via <html class="dark">)
  darkMode: 'class',
  theme: {
    extend: {
      // Custom color palette
      colors: {
        primary: '#3B82F6', // Blue
        secondary: '#10B981', // Green
        accent: '#F59E0B', // Amber
        'text-base': '#1F2937', // Dark Gray (Light mode text)
        'text-dark': '#F9FAFB', // Light Gray (Dark mode text)
        'bg-base': '#F9FAFB', // Light Gray (Light mode background)
        'bg-dark': '#1F2937', // Dark Gray (Dark mode background)
        border: '#E5E7EB', // Light Gray border
        'border-dark': '#4B5563', // Gray border (Dark mode)
        'bg-alt': '#F3F4F6', // Lighter Gray (Alt background light)
        'bg-alt-dark': '#374151', // Gray (Alt background dark)
      },
      // Custom font families
      fontFamily: {
        primary: ['Poppins', 'sans-serif'], // Main sans-serif font
        secondary: ['Merriweather', 'serif'], // Secondary serif font
      },
      // Custom font sizes linked to CSS variables from global.css
      fontSize: {
        'xs': 'var(--fs--2)',
        'sm': 'var(--fs--1)',
        'base': 'var(--fs-base)',
        'lg': 'var(--fs-1)',
        'xl': 'var(--fs-2)',
        '2xl': 'var(--fs-3)',
        '3xl': 'var(--fs-4)',
      },
      // Explicit padding scale (can be useful for consistency)
      padding: { /* ... explicit scale ... */ },
      // Custom animations
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-from-right': 'slideFromRight 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-to-left': 'slideToLeft 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        'pulse': 'pulse 0.3s ease-out',
        'shake': 'shake 0.5s ease-in-out',
        'float': 'float 6s ease-in-out infinite',
        'bounce-slow': 'bounce 3s infinite',
        'spin-slow': 'spin 6s linear infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
      },
      // Custom keyframes for animations
      keyframes: {
        fadeIn: { /* ... */ },
        slideFromRight: { /* ... */ },
        slideToLeft: { /* ... */ },
        pulse: { /* ... */ },
        shake: { /* ... */ },
        float: { /* ... */ },
        gradientShift: { /* ... */ },
      },
      // Custom box shadows
      boxShadow: {
        'card': '0 4px 8px rgba(0,0,0,0.1)',
        'card-hover': '0 8px 16px rgba(0,0,0,0.1)',
        'button': '0 2px 4px rgba(0,0,0,0.1)',
        'button-hover': '0 4px 8px rgba(0,0,0,0.15)',
        'floating': '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      // Custom background images
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': "url('/images/hero-pattern.svg')", // Example pattern
      },
      // Custom border radiuses
      borderRadius: {
        'card': '0.5rem',
        'button': '0.375rem',
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      // Custom transition durations
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '2000': '2000ms',
      },
      // Custom transition timing functions
      transitionTimingFunction: {
        'bounce-out': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [
    // No plugins currently enabled
    // Example: require('@tailwindcss/typography'),
    // Example: require('@tailwindcss/forms'),
  ],
}
```

## Key Sections Explained

*   **`content`**: An array of glob patterns that tells Tailwind which files to scan for class names. This ensures that only the necessary CSS is generated in the final build.
*   **`darkMode: 'class'`**: Enables manual dark mode toggling. You need to add the `dark` class to the `<html>` element (or another parent element) to activate dark mode styles (e.g., `dark:bg-dark`, `dark:text-dark`). This is typically handled by a theme-switching script.
*   **`theme.extend`**: This is where the default Tailwind theme is customized and extended.
    *   **`colors`**: Defines a custom color palette for the project, including primary, secondary, accent colors, and specific colors for text, backgrounds, and borders in both light and dark modes.
    *   **`fontFamily`**: Sets custom font families.
    *   **`fontSize`**: Customizes font sizes, linking them to CSS variables defined in `src/styles/global.css` for consistency.
    *   **`padding`**: Provides an explicit padding scale (overriding Tailwind's default).
    *   **`animation` & `keyframes`**: Defines custom CSS animations and their corresponding keyframes for use with utility classes (e.g., `animate-fade-in`).
    *   **`boxShadow`**: Defines custom shadow styles.
    *   **`backgroundImage`**: Defines custom background images or gradients.
    *   **`borderRadius`**: Defines custom border radius values.
    *   **`transitionDuration` & `transitionTimingFunction`**: Defines custom transition properties.
*   **`plugins`**: An array to include official or third-party Tailwind plugins (e.g., for typography, forms). None are currently active in this configuration.