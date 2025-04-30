/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  darkMode: 'class', // Enable class-based dark mode for better control
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        secondary: '#10B981',
        accent: '#F59E0B',
        'text-base': '#1F2937',
        'text-dark': '#F9FAFB',
        'bg-base': '#F9FAFB',
        'bg-dark': '#1F2937',
        border: '#E5E7EB',
        'border-dark': '#4B5563',
        'bg-alt': '#F3F4F6',
        'bg-alt-dark': '#374151',
      },
      fontFamily: {
        primary: ['Poppins', 'sans-serif'],
        secondary: ['Merriweather', 'serif'],
      },
      fontSize: {
        // Using the modular scale from CSS vars
        'xs': 'var(--fs--2)',
        'sm': 'var(--fs--1)',
        'base': 'var(--fs-base)',
        'lg': 'var(--fs-1)',
        'xl': 'var(--fs-2)',
        '2xl': 'var(--fs-3)',
        '3xl': 'var(--fs-4)',
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
    },
  },
  plugins: [
    // Optional plugins for additional functionality
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/forms'),
  ],
}