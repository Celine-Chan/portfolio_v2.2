/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bebasNeue': ['Bebas neue', 'sans-serif'],
      },
      backgroundImage: {
        'homePage': "url('/assets/img/skyNight.jpg')",
      }
    },
  },
  plugins: [],
}

