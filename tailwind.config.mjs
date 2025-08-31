/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff5e4',
          100: '#ffe5c1',
          200: '#ffd09e',
          300: '#ffba7b',
          400: '#ffa558',
          500: '#ff9035',
          600: '#CD5C08',
          700: '#a64906',
          800: '#7f3705',
          900: '#582403',
        },
        secondary: {
          50: '#f0f8f1',
          100: '#e1f1e3',
          200: '#C1D8C3',
          300: '#a1bfa5',
          400: '#81a687',
          500: '#6A9C89',
          600: '#5a8374',
          700: '#4a6a5f',
          800: '#3a514a',
          900: '#2a3835',
        },
        cream: {
          50: '#FFF5E4',
          100: '#ffefd1',
          200: '#ffe9be',
          300: '#ffe3ab',
          400: '#ffdd98',
          500: '#ffd785',
        },
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#29434e',
          800: '#3a3a3a',
          900: '#0f172a',
        },
        // Semantic brand colors for unified styling
        brand: {
          primary: '#3a3a3a',      // Main text color (dark-800)
          secondary: '#29434e',    // Secondary text color (dark-700) 
          light: '#FFF5E4',        // Light background (cream-50)
          accent: '#CD5C08',       // Accent/CTA color (primary-600)
          muted: '#94a3b8',        // Muted text (dark-400)
          surface: '#ffffff',      // Card/surface background
          border: '#e2e8f0',       // Border color (dark-200)
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
