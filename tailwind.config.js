/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  images: {
    deviceSizes: [500, 1440],
  },
  theme: {
    screens: {
      sm: "500px",
      md: [{ min: "100px", max: "767px" }],
      lg: [{ min: "767px", max: "1100px" }],
      xl: "1440px",
    },
    extend: {
      colors: {
        "primary-color-moderate": "var(--primary-color-moderate)",
        "primary-color-dark": "var(--primary-color-dark)",
        "neutral-color-moderate": "var(--neutral-color-moderate)",
        "neutral-color-dark": "var(--neutral-color-dark)",
      },
      fontFamily: {
        commissioner: ["Commissioner"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addComponents }) {
      const nav = {
        ".nav-full-w": {
          padding: "0 8.9rem 0 10.4rem",
        },
      };
      const checked = {
        /* pretty radio */
        'div > input[type="radio"] ': {
          display: "none",
        },
        'div > input[type="radio"] + *::before ': {
          content: "",
          display: "inline-block",
          verticalAlign: " bottom",
          width: " 1rem",
          height: " 1rem",
          marginRight: " 0.3rem",
          borderRadius: " 50%",
          borderStyle: " solid",
          borderWidth: " 0.1rem",
          borderColor: " gray",
        },
        'div > input[type="radio"]:checked + * ': {
          color: "teal",
        },
        'div > input[type="radio"]:checked + *::before ': {
          background:
            "radial-gradient(teal 0%, teal 40%, transparent 50%, transparent)",
          borderColor: "teal",
        },

        'div > input[type="radio"] + * ': {
          display: " inline-block",
          padding: " 0.5rem 1rem",
        },
      };
      const svgColor = {
        ".svgColor-clicked": {
          padding: "0 8.9rem 0 10.4rem",
          svg: {
            circle: {
              fill: "hsl(176, 72%, 28%)",
            },
            path: {
              fill: "#f1f1f1",
            },
          },
        },
      };

      addComponents(nav, svgColor, checked);
    }),
  ],
};
