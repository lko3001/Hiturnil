/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        snow: {
          black: "#000000",
          100: "#ffffff",
          200: "#F2F6F7",
          300: "#D7DFE2",
          400: "#7A9299",
          500: "#172E35",
          400: "#7A9299",
        },
        space: {
          white: "#ffffff",
          100: "#ffffff",
          200: "#898989",
          300: "#3F3F3F",
          400: "#262626",
          500: "#121212",
        },
        hiturnil: "#FF4400",
      },
      transitionProperty: {
        rounded: "border-radius",
        "transform-rounded": "border-radius, transform",
      },
      maxWidth: {
        big: "1530px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/container-queries"),
    require("prettier-plugin-tailwindcss"),
  ],
};
