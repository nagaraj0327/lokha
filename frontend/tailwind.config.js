/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0B0D0C',
          900: '#0B0D0C',
          800: '#141715',
          700: '#1C201D',
          600: '#272C28',
        },
        paper: '#F6F4EE',
        signal: {
          DEFAULT: '#FF5A1F',
          50: '#FFF1EA',
          100: '#FFDBC7',
          400: '#FF7A45',
          500: '#FF5A1F',
          600: '#E0470F',
        },
        moss: {
          DEFAULT: '#1F6F4A',
          400: '#2E8F62',
          500: '#1F6F4A',
          600: '#155338',
        },
        sand: '#C9C3B4',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
