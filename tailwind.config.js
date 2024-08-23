/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily:{
      abc:   ["Merriweather", "serif"],
    },
  },
  plugins: [require("@shrutibalasa/tailwind-grid-auto-fit")],
}

