/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "#bb99dd",
        bgWhite: "#faf7fd",
      },
    },
  },
  plugins: [],
};
