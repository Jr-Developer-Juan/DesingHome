const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',
        primary: '#194668',
        secondary: '#C5804B',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        anton: ['Anton', 'sans-serif'],
      },
      screens: {
        'sm': '640px', // Small devices (tablets)
        'md': '768px', // Medium devices (landscape tablets)
        'lg': '1024px', // Large devices (desktops)
        'xl': '1280px', // Extra large devices (large desktops)
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};

