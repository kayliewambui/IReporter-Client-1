/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-blue': '#003366',
        'vibrant-orange': '#FF6600',
      },
      fontFamily: {
        sans: ['Source Sans Pro', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        open: ['Open Sans', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}