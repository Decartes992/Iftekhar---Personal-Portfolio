const STORAGE_KEY = 'theme-preference';

function setPreference(themeValue) {
  try {
    localStorage.setItem(STORAGE_KEY, themeValue);
    reflectPreference(themeValue);
  } catch (error) {
    console.error('Error setting theme preference:', error);
    // Still try to reflect if storage fails
    reflectPreference(themeValue);
  }
}

function reflectPreference(themeValue) {
  // Set the data-theme attribute for CSS variables
  document.documentElement.setAttribute('data-theme', themeValue);
  // Add/remove the .dark class for Tailwind
  if (themeValue === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  const toggleButton = document.querySelector('#theme-toggle');
  if (toggleButton) {
    toggleButton.setAttribute('aria-label', `Change to ${themeValue === 'light' ? 'dark' : 'light'} theme`);
    // Optional: Add a data attribute to reflect state visually if needed
    // toggleButton.setAttribute('data-current-theme', themeValue);
    toggleButton.disabled = false; // Re-enable after potential disable
  }
}

function getPreference() {
  const storedPref = localStorage.getItem(STORAGE_KEY);
  if (storedPref) {
    return storedPref;
  }
  // Return system preference if no stored preference
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function onToggleClick(event) {
  const toggleButton = event.target.closest('#theme-toggle');
  if (toggleButton) {
    toggleButton.disabled = true; // Disable briefly to prevent rapid clicks
    const currentTheme = getPreference(); // Get current preference
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setPreference(newTheme);
    // Re-enable button in reflectPreference
  }
}

// Initial theme application on load
const initialTheme = getPreference();
reflectPreference(initialTheme);

// Add listener after initial setup
window.addEventListener('load', () => {
  // Ensure theme is correct after full load (might be redundant but safe)
  reflectPreference(getPreference());

  const toggleButton = document.querySelector('#theme-toggle');
  if (toggleButton) {
    toggleButton.addEventListener('click', onToggleClick);
  }
});

// Listen for system preference changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', ({ matches: isDark }) => {
  // Only change if there's no explicit user preference stored
  if (!localStorage.getItem(STORAGE_KEY)) {
    setPreference(isDark ? 'dark' : 'light');
  }
});

// Listen for storage changes from other tabs/windows
window.addEventListener('storage', (event) => {
  if (event.key === STORAGE_KEY) {
    reflectPreference(event.newValue || 'light');
  }
});

// Re-apply theme and listeners after Astro View Transitions swap
document.addEventListener('astro:after-swap', () => {
  reflectPreference(getPreference());
  const toggleButton = document.querySelector('#theme-toggle');
  if (toggleButton) {
    // Remove potential old listener before adding a new one
    toggleButton.removeEventListener('click', onToggleClick);
    toggleButton.addEventListener('click', onToggleClick);
  }
});