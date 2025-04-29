const storageKey = 'theme-preference';
const theme = {
  // Use the value set by the inline script in BaseLayout.astro
  value: document.documentElement.getAttribute('data-theme') || 'light',
};


function setPreference() {
  localStorage.setItem(storageKey, theme.value);
  reflectPreference();
}
function reflectPreference() {
  // Set attribute on root
  document.documentElement.setAttribute('data-theme', theme.value);
  // Update button state for styling/ARIA
  const toggleButton = document.querySelector('#theme-toggle');
  if (toggleButton) {
    toggleButton.setAttribute('aria-label', `Change to ${theme.value === 'light' ? 'dark' : 'light'} theme`);
    toggleButton.setAttribute('data-current-theme', theme.value);
  }
}
// Function to handle the toggle click
function onToggleClick() {
  theme.value = theme.value === 'light' ? 'dark' : 'light';
  setPreference();
}
// Initial setup on load
window.addEventListener('load', () => {
  reflectPreference(); // Ensure correct state on load
  const toggleButton = document.querySelector('#theme-toggle');
  if (toggleButton) {
    toggleButton.addEventListener('click', onToggleClick);
  }
});
// Sync with system changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', ({ matches: isDark }) => {
  // Only change if no user preference is stored
  if (!localStorage.getItem(storageKey)) {
     theme.value = isDark ? 'dark' : 'light';
     setPreference();
  }
});
// Sync theme state across tabs (optional but good UX)
window.addEventListener('storage', (event) => {
  if (event.key === storageKey) {
    theme.value = event.newValue || 'light';
    reflectPreference();
  }
});


// Handle Astro View Transitions swap
document.addEventListener('astro:after-swap', () => {
    // Re-reflect preference and re-attach listener if button is re-rendered
    theme.value = document.documentElement.getAttribute('data-theme') || 'light';
    reflectPreference();
    const toggleButton = document.querySelector('#theme-toggle');
    if (toggleButton) {
    // Remove old listener if exists to prevent duplicates
    // (More robust listener management might be needed depending on exact setup)
    toggleButton.removeEventListener('click', onToggleClick);
    toggleButton.addEventListener('click', onToggleClick);
    }
});