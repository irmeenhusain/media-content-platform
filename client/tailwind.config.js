/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        theme: '#17809a',
        white: '#ffffff',
        black: '#000000'
      },
      boxShadow: {
        'custom': '0px 0px 30px 8px rgba(227, 227, 227, 0.75)',  // Custom shadow
      },
    },
  },
  plugins: [],
}