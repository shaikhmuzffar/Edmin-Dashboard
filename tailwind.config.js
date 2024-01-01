/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ["*"],
  },
  theme: {
    extend: {
      fontFamily: {
        'mulish': ['Mulish', 'sans-serif'],
      },
      colors: {
        deepBlue: '#0E0B28',
        darkBlue:'#27437C',
        darkGreen:'#1C9C4D',
        mediumBlue:'#2B55B1',
        textBlack:'#1E1E1E'
      }
    },
  },
  plugins: [],
}

