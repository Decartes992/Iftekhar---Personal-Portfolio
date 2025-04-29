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

## ARIA Roles Implementation

To further enhance accessibility, ARIA (Accessible Rich Internet Applications) roles have been implemented where appropriate. ARIA roles define the type of user interface element, helping assistive technologies convey the purpose and structure of content to users. Key considerations include:

*   **Landmark Roles:** Using roles like `banner`, `navigation`, `main`, `contentinfo`, and `complementary` to define major sections of the page, improving navigation for screen reader users.
*   **Widget Roles:** Applying roles such as `button`, `checkbox`, `dialog`, and `tabpanel` to custom interactive controls that do not have native semantic HTML equivalents.
*   **Document Structure Roles:** Utilizing roles like `article`, `definition`, and `feed` to describe the structure of content.
*   **ARIA Attributes:** Employing attributes like `aria-label`, `aria-describedby`, `aria-hidden`, `aria-expanded`, and `aria-live` to provide additional information about elements' states, properties, and relationships.

Specific ARIA implementations in this project include:
*   Adding `role="navigation"` to the main navigation menu.
*   Using `aria-label` for icon-only buttons to provide a descriptive text alternative.
*   Ensuring dynamic content updates use `aria-live` regions where necessary to alert users of changes.

## OS-Specific Considerations
- Windows users should ignore `Thumbs.db` files
- macOS users should maintain `.DS_Store` ignore