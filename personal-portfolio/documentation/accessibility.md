# Accessibility Considerations

This document outlines the basic accessibility checks performed and the adjustments made to improve the website's usability for everyone.

## Checks Performed

The review focused on three core areas:

1.  **Semantic HTML:** Ensured appropriate use of HTML5 elements like `<header>`, `<nav>`, `<main>`, `<footer>`, `<article>`, `<button>`, `<label>`, etc., to provide a meaningful structure for assistive technologies.
2.  **Keyboard Navigation:** Tested the ability to navigate through all interactive elements (links, buttons, form fields) using the Tab key. Ensured a logical focus order and added visible focus indicators where missing.
3.  **Color Contrast:** Checked text and background color combinations, especially for interactive elements and feedback messages, against WCAG AA contrast ratio requirements (4.5:1 for normal text, 3:1 for large text).

## Fixes Implemented

Based on the review, the following adjustments were made:

*   **Focus Styles:** Added consistent, visible focus ring styles (using Tailwind's `focus:ring` utilities) to links, blog post cards, form inputs (checkboxes, select), and contact page links to improve keyboard navigation feedback.
*   **Color Contrast:**
    *   Adjusted button background colors (`bg-blue-500` to `bg-blue-600`) to ensure sufficient contrast with white text (`HomePageClickCounter.jsx`, `ContactForm.jsx`).
    *   Increased the contrast of secondary text (e.g., project details) by changing `text-gray-500` to `text-gray-600` (`ProjectFilterSort.jsx`).
    *   Increased the contrast of form validation error messages (`text-red-500` to `text-red-700`) (`ContactForm.jsx`).
    *   Increased the contrast of form submission status messages (`text-green-700` to `text-green-800`, `text-red-700` to `text-red-800`) (`ContactForm.jsx`).

These changes aim to provide a baseline level of accessibility. Further testing, including with screen readers and potentially more comprehensive audits, may be beneficial in the future.
## OS-Specific Considerations
- Windows users should ignore `Thumbs.db` files
- macOS users should maintain `.DS_Store` ignore