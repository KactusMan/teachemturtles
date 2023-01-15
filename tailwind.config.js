/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'image-one':
        "url(/public/assets/proper-morning-giphy.gif)",
        'image-two':
          "url(/public/assets/proper-night-giphy.gif)",
      }),
    },
  },
  variants: {
    extend: {
      backgroundImage: ['dark'],
    },

  plugins: [],
}}
