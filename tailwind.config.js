/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'playfair-display': ['playfair-display', 'ui-serif'] 
    },
    extend: {
      keyframes: {
        'slide-in-top': {
          '0%': { maxHeight: '0vh', opacity: 0 },
          '50%': { opacity: 0 },
          '100%': { maxHeight: '35vh', opacity: 1 }
        }
      },
      animation: {
        'slide-in-top': 'slide-in-top .3s ease-out'
      }
    },
  },
  plugins: [],
}

