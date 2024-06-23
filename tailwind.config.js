/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'dm': '915px',
        ...defaultTheme.screens,
      },
      colors: {
        'brand-blue': '#1E3A8A'
      }
    },
  },
  plugins: [],
}