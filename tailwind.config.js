/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'jn-blue': {
          light: '#BAE6FF',
          DEFAULT: '#1BA1EC',
          dark: '#0076B8'
        },

        'jn-orange': '#FFD79C',
      },
      fontFamily: {
        'montserrat': ['"Montserrat"', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
}

