/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      screens: {
        'mid': '777px',     // custom ≥777px
        'xl2': '1230px',    // custom ≥1230px
        'xsm': '250px',    // custom ≥1230px
      },
    },
  },
  plugins: [],
}
