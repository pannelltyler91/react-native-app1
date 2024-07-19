/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./<custom directory>/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        primary:'#bdd8e1',
        secondary:'#444eff',
        third:'#c0c0c0',
      }
    },
  },
  plugins: [],
}

