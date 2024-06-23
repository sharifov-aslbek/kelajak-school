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
        "mx": '816px',
        'm': '650px',
        's': '480px',
        "xs": '350px',
        ...defaultTheme.screens,
      },
      colors: {
        'brand-blue': '#213653'
      }
    },
  },
  plugins: [],
}