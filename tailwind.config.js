/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        wine: '#5C1A2B',
        ivory: '#F7F0E3',
        gold: '#CFA044',
        rose: '#B79C9C',
        bark: '#6B4F3A',
        blush: '#F1EAE6',
      },
      fontFamily: {
        display: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        body: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
      fontSize: {
        '7xl': ['4.5rem', { lineHeight: '1.05' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '0.95' }],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.02em',
        wide: '0.08em',
      },
      transitionDuration: {
        400: '400ms',
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
};
