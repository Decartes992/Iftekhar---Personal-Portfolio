/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  darkMode: 'class', // Uses the 'dark' class on the <html> tag for theming
  theme: {
    extend: {
      colors: {
        primary: 'hsl(var(--color-primary) / <alpha-value>)',
        secondary: 'hsl(var(--color-secondary) / <alpha-value>)',
        accent: 'hsl(var(--color-accent) / <alpha-value>)',
        background: 'hsl(var(--color-background) / <alpha-value>)',
        'background-alt': 'hsl(var(--color-background-alt) / <alpha-value>)',
        text: 'hsl(var(--color-text) / <alpha-value>)',
        'text-muted': 'hsl(var(--color-text-muted) / <alpha-value>)',
        border: 'hsl(var(--color-border) / <alpha-value>)',
      },
      fontFamily: {
        // Defines semantic names for your font stacks.
        primary: ['Inter Variable', 'sans-serif'],
        display: ['Satoshi Variable', 'sans-serif'],
        code: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        // Custom animations for use throughout the site.
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slide-up 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        // Definitions for the custom animations.
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        'slide-up': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    // Official Tailwind CSS plugins for enhanced typography and form styling.
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
