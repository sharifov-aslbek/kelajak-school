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
        'l': '1006px',
        'xr': '930px',
        'dm': '915px',
        "xc": "870px",
        "mx": '816px',
        'm': '656px',
        "mm": "565px",
        "mr": '740px',
        's': '480px',
        "xs": '350px',
        "xsmax": '380px',
        ...defaultTheme.screens,
      },
      colors: {
        'brand-blue': '#213653'
      }
    },
  },
  plugins: [],
}