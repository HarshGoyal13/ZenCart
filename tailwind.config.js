/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#0067FF",
        yellowColor: "#FEB60D",
        prpleColor: "#9771FF",
        irisBlueColor: "#01B5C5",
        headingColor: "#181A1E",
        textColor: "#4E545F",
      },
      transitionProperty: {
        'transform': 'transform',
        'opacity': 'opacity',
      },
      boxShadow: {
        panelShadow: "rgba(17,12,46,0,15) 0px 48px 100px 0px",
      },
    },
  },
  plugins: [],
}