const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    colors: {
      'light-gray': 'hsl(212, 45%, 89%)',
      'grayish-blue': 'hsl(220, 15%, 55%)',
      'dark-blue': 'hsl(218, 44%, 22%)',
      'deep-blue': 'hsl(228, 45%, 44%)',
      ...colors,
    },
    extend: {
      fontFamily:{
        outfit:'"Outfit", sans-serif'
      }
    },
  },
  plugins: [],
};
