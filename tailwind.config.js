/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        champagne: {
          DEFAULT: '#F7E6CA',
          light: '#FBF3E6',
          dark: '#E8D0AC',
        },
        coconut: {
          husk: '#4A2E1B',
          amber: '#7A5230',
          milk: '#FFFCF7',
          dark: '#2E190E',
        },
        sage: {
          green: '#8C9A7B',
          light: '#A4B096',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        signature: ['"Alex Brush"', '"Pinyon Script"', 'cursive'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(74, 46, 27, 0.08)',
        'luxury': '0 20px 40px -15px rgba(74, 46, 27, 0.15)',
      },
      scale: {
        '108': '1.08',
      },
    },
  },
  plugins: [],
}
