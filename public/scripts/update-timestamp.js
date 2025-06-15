export function updateLastUpdated() {
  const timestampSpan = document.getElementById('last-updated-timestamp');
  if (timestampSpan) {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    timestampSpan.textContent = now.toLocaleDateString(undefined, options);
  }
}

window.addEventListener('DOMContentLoaded', updateLastUpdated);
