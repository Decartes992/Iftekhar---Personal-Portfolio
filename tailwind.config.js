/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'var(--clr-primary-current)',
        secondary: 'var(--clr-secondary-current)',
        accent: 'var(--clr-accent-current)',
        'text-base': 'var(--clr-text-base-current)', // Updated to use CSS var
        'text-dark': 'var(--clr-text-base-dark)', // Updated to use CSS var
        'bg-base': 'var(--clr-bg-base-current)', // Updated to use CSS var
        'bg-alt': 'var(--clr-bg-alt-current)', // Updated to use CSS var
        'bg-dark': 'var(--clr-bg-base-dark)', // Updated to use CSS var
        'bg-alt-dark': 'var(--clr-bg-alt-dark)', // Updated to use CSS var
        border: 'var(--clr-border-current)', // Updated to use CSS var
        'border-dark': 'var(--clr-border-dark)', // Updated to use CSS var

        // New Primary Palette
        'primary-50': 'var(--clr-primary-50)',
        'primary-100': 'var(--clr-primary-100)',
        'primary-200': 'var(--clr-primary-200)',
        'primary-300': 'var(--clr-primary-300)',
        'primary-400': 'var(--clr-primary-400)',
        'primary-500': 'var(--clr-primary-500)',
        'primary-600': 'var(--clr-primary-600)',
        'primary-700': 'var(--clr-primary-700)',
        'primary-800': 'var(--clr-primary-800)',
        'primary-900': 'var(--clr-primary-900)',
      },
      fontFamily: {
        primary: ['Inter Variable', 'sans-serif'], // Updated to Inter Variable
        secondary: ['Satoshi Variable', 'sans-serif'], // Updated to Satoshi Variable for display/headings
        code: ['JetBrains Mono', 'monospace'], // Added JetBrains Mono for code
        accent: ['Playfair Display', 'serif'], // Added Playfair Display for accents
      },
      fontSize: {
        'xs': 'var(--fs-xs)',
        'sm': 'var(--fs-sm)',
        'base': 'var(--fs-base)',
        'lg': 'var(--fs-lg)',
        'xl': 'var(--fs-xl)',
        '2xl': 'var(--fs-2xl)',
        '3xl': 'var(--fs-3xl)',
        '4xl': 'var(--fs-4xl)',
        '5xl': 'var(--fs-5xl)',
        '6xl': 'var(--fs-6xl)',
      },
      padding: {
        // Explicitly define padding values
        '0': '0',
        '0.5': '0.125rem',
        '1': '0.25rem',
        '1.5': '0.375rem',
        '2': '0.5rem',
        '2.5': '0.625rem',
        '3': '0.75rem',
        '3.5': '0.875rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '7': '1.75rem',
        '8': '2rem',
        '9': '2.25rem',
        '10': '2.5rem',
        '11': '2.75rem',
        '12': '3rem',
        '14': '3.5rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '28': '7rem',
        '32': '8rem',
        '36': '9rem',
        '40': '10rem',
        '44': '11rem',
        '48': '12rem',
        '52': '13rem',
        '56': '14rem',
        '60': '15rem',
        '64': '16rem',
        '72': '18rem',
        '80': '20rem',
        '96': '24rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-from-right': 'slideFromRight 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-to-left': 'slideToLeft 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        'pulse': 'pulse 0.3s ease-out',
        'shake': 'shake 0.5s ease-in-out',
        'float': 'float 6s ease-in-out infinite',
        'bounce-slow': 'bounce 3s infinite',
        'spin-slow': 'spin 6s linear infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
      },
      keyframes: {
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        slideFromRight: {
          'from': { transform: 'translateX(30px)', opacity: '0' },
        },
        slideToLeft: {
          'to': { transform: 'translateX(-30px)', opacity: '0' },
        },
        pulse: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.97)' },
          '100%': { transform: 'scale(1)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '20%, 60%': { transform: 'translateX(-5px)' },
          '40%, 80%': { transform: 'translateX(5px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      boxShadow: {
        'card': '0 4px 8px rgba(0,0,0,0.1)',
        'card-hover': '0 8px 16px rgba(0,0,0,0.1)',
        'button': '0 2px 4px rgba(0,0,0,0.1)',
        'button-hover': '0 4px 8px rgba(0,0,0,0.15)',
        'floating': '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': "url('/images/hero-pattern.svg')",
      },
      borderRadius: {
        'card': '0.5rem',
        'button': '0.375rem',
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '2000': '2000ms',
      },
      transitionTimingFunction: {
        'bounce-out': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      screens: { // Enhanced Breakpoint System
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}