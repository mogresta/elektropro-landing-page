/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a0e1c',
        secondary: '#f5ece5',
        accent: '#f14e13',
        neutral: '#b5cbc8',
        dark: '#4f0006',
      },
      fontFamily: {
        'barlow': ['Barlow', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

