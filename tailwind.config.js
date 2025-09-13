/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'poiret': ['Poiret One', 'cursive'],
      },
      colors: {
        'primary': '#e5e5e5',
        'muted': '#a3a3a3',
        'card': '#0f0f0f',
        'accent': '#7C75F6',
        'cta-bg': '#e5e5e5',
        'cta-text': '#000000',
      },
    },
  },
  plugins: [],
}
