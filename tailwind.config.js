/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./public/**/*.{html,js}",
    "./**/*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        alatsi: ["Alatsi", "sans-serif"],
        // Add more custom fonts here
      },
    },
  },
  plugins: [],
};
