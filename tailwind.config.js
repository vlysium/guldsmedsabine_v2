/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}", "./src/app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        tangier: ["tangier"],
        opensans: ["Open sans"],
      },
      colors: {
        offWhite: "#E8DFD4",
        gold: {
          light: "#AF9075",
          dark: "#6d5948",
        },
        grey: {
          light: "#1c1c21",
          dark: "#16161a",
          darker: "#0F0F11",
        },
      },
      /*  gridTemplateRows: {
        popupMobile: "50% 50%"
      }, */
    },
  },
  plugins: [],
};
