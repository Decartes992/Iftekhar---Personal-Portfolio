const STORAGE_KEY = 'theme-preference';
const THEME_ATTRIBUTE = 'data-theme';

/**
 * Sets the theme preference in localStorage and applies it to the document.
 * @param {string} themeValue - The theme to set ('light' or 'dark').
 */
function setPreference(themeValue) {
  try {
    localStorage.setItem(STORAGE_KEY, themeValue);
  } catch (error) {
    console.warn('ThemeToggle: Could not save theme preference to localStorage.', error);
  }
  reflectPreference(themeValue);
}

/**
 * Applies the theme to the document (documentElement class and attribute) 
 * and updates the toggle button's ARIA attributes and state.
 * @param {string} themeValue - The theme to reflect ('light' or 'dark').
 */
function reflectPreference(themeValue) {
  document.documentElement.setAttribute(THEME_ATTRIBUTE, themeValue);
  if (themeValue === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  // Update all theme toggle buttons on the page (header and mobile menu)
  document.querySelectorAll('.theme-toggle-button').forEach(button => {
    if (button) {
      const isPressed = themeValue === 'dark';
      button.setAttribute('aria-pressed', isPressed.toString());
      button.setAttribute('aria-label', `Change to ${themeValue === 'light' ? 'dark' : 'light'} theme`);
      // Ensure button is enabled
      if (button instanceof HTMLButtonElement) {
        button.disabled = false;
      }
    }
  });
}

/**
 * Gets the current theme preference from localStorage or system settings.
 * @returns {string} The current theme preference ('light' or 'dark').
 */
function getPreference() {
  try {
    const storedPref = localStorage.getItem(STORAGE_KEY);
    if (storedPref) {
      return storedPref;
    }
  } catch (error) {
    console.warn('ThemeToggle: Could not read theme preference from localStorage.', error);
  }
  // Fallback to system preference
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

/**
 * Handles the click event on a theme toggle button.
 * @param {Event} event - The click event.
 */
function onToggleClick(event) {
  const button = event.currentTarget;
  if (button && button instanceof HTMLButtonElement) {
    button.disabled = true; // Prevent rapid clicks
    const currentTheme = document.documentElement.getAttribute(THEME_ATTRIBUTE) || getPreference();
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setPreference(newTheme);
    // reflectPreference will re-enable the button
  }
}

/**
 * Attaches event listeners to all theme toggle buttons.
 */
function initializeToggleButtons() {
  document.querySelectorAll('.theme-toggle-button').forEach(button => {
    // Remove any existing listener to prevent duplicates, especially after swaps
    button.removeEventListener('click', onToggleClick);
    button.addEventListener('click', onToggleClick);
  });
}

// --- Main script execution ---

// 1. Apply initial theme on script load (as early as possible)
const initialTheme = getPreference();
reflectPreference(initialTheme);

// 2. Setup listeners after the DOM is fully loaded
window.addEventListener('load', () => {
  // Reflect preference again in case something changed during load or if initial was too early
  reflectPreference(getPreference()); 
  initializeToggleButtons();
});

// 3. Listen for system preference changes
const colorSchemeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
if (colorSchemeMediaQuery) {
  colorSchemeMediaQuery.addEventListener('change', (event) => {
    try {
      // Only change if there's no explicit user preference stored
      if (!localStorage.getItem(STORAGE_KEY)) {
        setPreference(event.matches ? 'dark' : 'light');
      }
    } catch (error) {
      console.warn('ThemeToggle: Could not access localStorage to check system preference override.', error);
      // If localStorage is inaccessible, reflect system preference directly
      reflectPreference(event.matches ? 'dark' : 'light');
    }
  });
}

// 4. Listen for storage changes from other tabs/windows
window.addEventListener('storage', (event) => {
  if (event.key === STORAGE_KEY && event.newValue) {
    reflectPreference(event.newValue);
  }
});

// 5. Re-apply theme and listeners after Astro View Transitions swap
document.addEventListener('astro:after-swap', () => {
  reflectPreference(getPreference());
  initializeToggleButtons();
});