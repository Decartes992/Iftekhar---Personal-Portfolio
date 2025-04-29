# Base Layout (`src/layouts/BaseLayout.astro`)

This component defines the main HTML structure, head elements, header, footer, and theme switching logic used across all pages of the portfolio website.

## Purpose

*   Provides a consistent structure (`<header>`, `<main>`, `<footer>`).
*   Includes common `<head>` elements (charset, viewport (`width=device-width, initial-scale=1.0`), favicon, generator tag).
*   Imports global CSS (`src/styles/global.css`).
*   Injects page-specific content via the `<slot />`.
*   Implements the light/dark theme switching functionality.
*   Defines the main navigation menu.

## Props

*   `title` (string, required): Sets the `<title>` tag for the HTML document.

## Structure

*   **HTML Shell:** Standard `<!doctype html>`, `<html>`, `<head>`, `<body>`.
*   **Head:** Contains meta tags (charset, viewport, favicon, generator, a generic description), the page `title`, and an inline script for theme management.
*   **Body:**
    *   `<header>`: Contains the main navigation (`<nav>`) and the theme toggle button, wrapped in a `<div class="container">` for consistent padding and max-width.
        *   Navigation is an unordered list (`<ul>`) of links (`/`, `/about`, `/projects`, `/blog`, `/resume`, `/contact`).
        *   Theme toggle button has `id="theme-toggle"` and `class="theme-toggle-button"`.
    *   `<main>`: Wraps the page content (`<slot />`) within a `<div class="container">`.
    *   `<footer>`: Contains the dynamic copyright year and a placeholder for the site last updated timestamp, wrapped in a `<div class="container">`.

## Theme Switching Logic (Inline `<script>`)

*   **Persistence:** Uses `localStorage` to remember the user's theme preference (`'light'` or `'dark'`).
*   **Initialization (`getTheme`, `setTheme`):**
    *   On initial load, it checks `localStorage`.
    *   If no preference is stored, it checks the user's system preference (`prefers-color-scheme`).
    *   It applies the determined theme by setting the `data-theme` attribute on the `<html>` element (`document.documentElement`).
*   **Toggling (`toggleTheme`, `window.toggleTheme`):**
    *   A global function `window.toggleTheme` is exposed, called by the button's `onclick` handler.
    *   It reads the current `data-theme`, determines the opposite theme, and calls `setTheme` to apply it and update `localStorage`.
*   **Button Text Update:**
    *   The script updates the theme toggle button's text content (`Switch to Dark Mode` / `Switch to Light Mode`) both initially (on `DOMContentLoaded`) and after each toggle.

## Styling

*   Relies heavily on `src/styles/global.css` for layout, typography, colors, and theme variable application.
*   Uses the `.container` class for centering and constraining content width.
*   Uses the `.theme-toggle-button` class for styling the button.