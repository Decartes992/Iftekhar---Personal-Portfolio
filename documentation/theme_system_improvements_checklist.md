# Theme System Improvements Checklist

## 2. Improve Smoothness of Hero Component Background Transition
- [x] Modify `Hero.astro` styling: Remove Tailwind gradient classes from main `section.hero` element
- [x] Add pseudo-elements for backgrounds in `Hero.astro` or global CSS
- [x] Style light theme gradient pseudo-element
- [x] Style dark theme gradient pseudo-element
- [x] Control opacity based on theme
- [ ] Test transition in both directions

## 3. Refine `BaseLayout.astro` Inline Script for Robustness
- [x] Add explicit `else` to remove `dark` class if theme is light
- [ ] Test initial theme application on page load

## 4. Review and Standardize Accent Color Strategy
- [x] Decide if accent colors should adapt to theme
- [x] If dynamic, define light/dark accent color variables in `global.css`
- [x] Update theme switching blocks for accent colors
- [x] Update Tailwind config to use new CSS variables
- [x] Audit components to use new accent color classes
- [ ] Test accent color adaptation and contrast

## 5. Verify Tailwind Configuration for Background Colors
- [x] Inspect `global.css` for correct background color variables
- [x] Inspect `tailwind.config.js` for correct color mapping
- [x] Consistency check between Tailwind and CSS variables

## 6. General Testing and Refinement
- [ ] Cross-browser testing
- [ ] Responsive testing
- [ ] Accessibility check
- [ ] Performance check
