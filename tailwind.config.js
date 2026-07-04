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
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
      },
      colors: {
        // Brand navy — headlines, dark sections (from the logo ring)
        navy: {
          50: '#f0f4f9',
          100: '#dae4f0',
          200: '#b8cce3',
          300: '#8aadd1',
          400: '#5c8bba',
          500: '#3d6fa5',
          600: '#2d5589',
          700: '#1c4e7e',
          800: '#163f66',
          900: '#0d2743',
          950: '#081a2e',
        },
        // Brand sky blue — the single accent (from the logo tower)
        gold: {
          50: '#f0f7fc',
          100: '#dcedf8',
          200: '#b9dcf1',
          300: '#8ec7e7',
          400: '#64b1dc',
          500: '#3f9ed3',
          600: '#2f81b4',
          700: '#286a94',
          800: '#245877',
          900: '#214a63',
        },
        // Cool light surfaces
        ivory: {
          50: '#f8fafc',
          100: '#eff4f8',
          200: '#dfe8ef',
        },
        paper: '#f6f8fa',
        ink: '#0d2743',
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
