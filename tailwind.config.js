/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        questrial: ['Questrial', 'sans-serif']
      },
      fontSize: {
        '3xl-cm': '3.125rem',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.stroke-text': {
          color: 'transparent',
          '-webkit-text-stroke': '2px #aab2d1',
        },
      });
    }),
  ],
}
