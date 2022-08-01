const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true
      },
      fontFamily: {
        "vazir": ["vazir", ...defaultTheme.fontFamily.sans]
      },
      backgroundImage: {
        'pattern-light': "url('/svg/pattern-light.svg')",
        'pattern-dark': "url('/svg/pattern-dark.svg')",
      },
      backgroundSize: {
        'size-600': 600
      },
      keyframes: {
        'slow': {'0%': {opacity: 0}, '100%': {opacity: 1}},
        'modal': {'0%': {opacity: .5, transform: 'translateY(-50px)'}, '100%': {opacity: 1, transform: 'translateY(0)'}}
      },
      animation: {
        'slow-1000': 'slow 1s linear 1',
        'slow-500': 'slow .5s linear 1',
        'slow-200': 'slow .2s linear 1',
        'slow-100': 'slow .1s linear 1',
        'modal': 'modal .5s ease-in-out 1',
      }
    },
  },
  plugins: [],
}
