/** @type {import('tailwindcss').Config} */

/*
 * Stellar Property Group design system — built from the brand logo:
 * deep navy ring (#163f66 / #1c4e7e), sky-blue tower (#3f9ed3 → #6ac5f0),
 * steel-grey towers. Editorial layout, premium execution, brand colors.
 *
 * Token note: `gold` is the ACCENT token (mapped to brand sky blue) so all
 * existing accent usages inherit the brand color automatically.
 */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-body)',
        display: 'var(--font-display)',
      },
      colors: {
        // Brand navy — headlines, dark sections (from the logo ring)
        navy: {
          50: 'rgb(var(--color-navy-50) / <alpha-value>)',
          100: 'rgb(var(--color-navy-100) / <alpha-value>)',
          200: 'rgb(var(--color-navy-200) / <alpha-value>)',
          300: 'rgb(var(--color-navy-300) / <alpha-value>)',
          400: 'rgb(var(--color-navy-400) / <alpha-value>)',
          500: 'rgb(var(--color-navy-500) / <alpha-value>)',
          600: 'rgb(var(--color-navy-600) / <alpha-value>)',
          700: 'rgb(var(--color-navy-700) / <alpha-value>)',
          800: 'rgb(var(--color-navy-800) / <alpha-value>)',
          900: 'rgb(var(--color-navy-900) / <alpha-value>)',
          950: 'rgb(var(--color-navy-950) / <alpha-value>)',
        },
        // Brand sky blue — the single accent (from the logo tower)
        gold: {
          50: 'rgb(var(--color-gold-50) / <alpha-value>)',
          100: 'rgb(var(--color-gold-100) / <alpha-value>)',
          200: 'rgb(var(--color-gold-200) / <alpha-value>)',
          300: 'rgb(var(--color-gold-300) / <alpha-value>)',
          400: 'rgb(var(--color-gold-400) / <alpha-value>)',
          500: 'rgb(var(--color-gold-500) / <alpha-value>)',
          600: 'rgb(var(--color-gold-600) / <alpha-value>)',
          700: 'rgb(var(--color-gold-700) / <alpha-value>)',
          800: 'rgb(var(--color-gold-800) / <alpha-value>)',
          900: 'rgb(var(--color-gold-900) / <alpha-value>)',
        },
        // Cool light surfaces
        ivory: {
          50: 'rgb(var(--color-ivory-50) / <alpha-value>)',
          100: 'rgb(var(--color-ivory-100) / <alpha-value>)',
          200: 'rgb(var(--color-ivory-200) / <alpha-value>)',
        },
        paper: 'rgb(var(--color-paper) / <alpha-value>)',
        ink: 'rgb(var(--color-ink) / <alpha-value>)',
        // Semantic tokens (src/styles/tokens.css)
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        line: 'rgb(var(--color-line) / <alpha-value>)',
        muted: 'rgb(var(--color-muted) / <alpha-value>)',
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        'accent-ink': 'rgb(var(--color-accent-ink) / <alpha-value>)',
        star: 'rgb(var(--color-star) / <alpha-value>)',
        success: 'rgb(var(--color-success) / <alpha-value>)',
        danger: 'rgb(var(--color-danger) / <alpha-value>)',
      },
      boxShadow: {
        card: '0 1px 3px 0 rgba(13,39,67,0.06), 0 4px 16px 0 rgba(13,39,67,0.06)',
        'card-hover': '0 4px 6px -1px rgba(13,39,67,0.08), 0 20px 48px -8px rgba(13,39,67,0.14)',
        glass: '0 8px 32px rgba(13,39,67,0.16)',
        gold: '0 4px 24px -4px rgba(63,158,211,0.35)',
        'gold-lg': '0 8px 40px -6px rgba(63,158,211,0.45)',
      },
      letterSpacing: {
        luxe: '0.28em',
      },
    },
  },
  plugins: [],
};
