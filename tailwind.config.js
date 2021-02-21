/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  images: {
    deviceSizes: [375, 1440],
  },
  theme: {
    extend: {
      fontFamily: {
        commissioner: ['Commissioner'],
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function({ addComponents }) {
    const nav = {
      '.nav-full-w': {
        padding: '0 8.9rem 0 10.4rem',
      },
    }

    addComponents(nav)
  })
],
}
