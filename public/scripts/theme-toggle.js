function setPreference(themeValue) {
  try {
    localStorage.setItem('theme-preference', themeValue);
    reflectPreference(themeValue);
  } catch (error) {
    console.error('Error setting theme preference:', error);
    reflectPreference(themeValue);
  }
}

function reflectPreference(themeValue) {
  document.documentElement.setAttribute('data-theme', themeValue);
  const toggleButton = document.querySelector('#theme-toggle');
  if (toggleButton) {
    toggleButton.setAttribute('aria-label', `Change to ${themeValue === 'light' ? 'dark' : 'light'} theme`);
    toggleButton.setAttribute('data-current-theme', themeValue);
    toggleButton.disabled = false;
  }
}

function onToggleClick(event) {
  const toggleButton = event.target.closest('#theme-toggle');
  if (toggleButton) {
    toggleButton.disabled = true;
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setPreference(newTheme);
  }
}

window.addEventListener('load', () => {
  const initialTheme = document.documentElement.getAttribute('data-theme') || 'light';
  reflectPreference(initialTheme);
  const toggleButton = document.querySelector('#theme-toggle');
  if (toggleButton) {
    toggleButton.addEventListener('click', onToggleClick);
  }
});

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', ({ matches: isDark }) => {
  if (!localStorage.getItem('theme-preference')) {
    setPreference(isDark ? 'dark' : 'light');
  }
});

window.addEventListener('storage', (event) => {
  if (event.key === 'theme-preference') {
    reflectPreference(event.newValue || 'light');
  }
});

document.addEventListener('astro:after-swap', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
  reflectPreference(currentTheme);
  const toggleButton = document.querySelector('#theme-toggle');
  if (toggleButton) {
    toggleButton.addEventListener('click', onToggleClick);
  }
});