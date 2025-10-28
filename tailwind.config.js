/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f9f6ef',
          100: '#f0ebdc',
          200: '#e4d7b8',
          300: '#d9c594',
          400: '#d4af37',
          500: '#c9a961',
          600: '#b89447',
          700: '#9d7b35',
          800: '#7a5e28',
          900: '#5c471e',
        },
        slate: {
          50: '#f8f9fa',
          100: '#e9ecef',
          200: '#dee2e6',
          300: '#adb5bd',
          400: '#6c757d',
          500: '#4f5f7f',
          600: '#4a5b7a',
          700: '#3d4b63',
          800: '#2f3a4d',
          900: '#1f2937',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
