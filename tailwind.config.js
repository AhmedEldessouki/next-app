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
      colors: {
        "primary-color-moderate": "var(--primary-color-moderate)",
        "primary-color-dark": "var(--primary-color-dark)",
        "neutral-color-moderate": "var(--neutral-color-moderate)",
        "neutral-color-dark": "var(--neutral-color-dark)",
      },
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
    const btn = {
      '.btn-primary-dark': {
        background: '0 8.9rem 0 10.4rem',
      },
    }
    const svgColor = {
      '.svgColor-clicked': {
        padding: '0 8.9rem 0 10.4rem',
        'svg': {

          'circle': {
            fill: 'hsl(176, 72%, 28%)'
          },
          'path': {
            fill: '#f1f1f1'
          }
        }
      },
    }

    addComponents(nav,svgColor, btn)
  })
],
}
