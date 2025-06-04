/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{js,ts,jsx,tsx,css}",
    "./node_modules/flowbite-react/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        noir: '#0D0D0D',
        gold: '#C9A66B',
        rose: '#D79E9E',
        marble: '#EFEAE6',
      },
      fontFamily: {
        sans: ["Urbanist", "Playfair Display", "sans-serif"],
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
