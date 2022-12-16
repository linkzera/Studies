/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: "Merriweather Sans, sans-serif",
    },
    colors: {
      purple: {
        100: "#837E9F",
        300: "#302F3D",
        800: "#22212C",
      },
      black: "#000000",
      white: "#FFFFFF",
      pink: "#CB92B1",
      yellow: "#E7DE79",
      green: "#00FF00",
    },
    extend: {},
  },
  plugins: [],
};
