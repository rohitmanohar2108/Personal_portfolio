/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nano': ['"Nano Sans"', 'sans-serif'],
        'courier-prime': ['Courier Prime', 'monospace'],
      },
    },
  },
  plugins: [],
}
