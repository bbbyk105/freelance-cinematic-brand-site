import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        card: 'var(--color-card)',
        border: 'var(--color-border)',
        'text-1': 'var(--color-text-1)',
        'text-2': 'var(--color-text-2)',
        accent: 'var(--color-accent)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      backgroundImage: {
        accent: 'linear-gradient(135deg, var(--color-gradient-from), var(--color-gradient-to))',
      },
      screens: {
        xs: '480px',
        '3xl': '1600px',
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
      },
    },
  },
  plugins: [],
};

export default config;
